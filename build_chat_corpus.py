#!/usr/bin/env python3
"""Build the study chat's corpus: the whole of the study material cut into sections, as one gzipped
JSON file.

    python3 build_chat_corpus.py            # writes _corpus/corpus.json.gz

The deploy workflow runs this and uploads the result to the private chat bucket; the chat Lambda
(brooks-security.com repo, terraform/files/aigp-chat) loads it and builds its search index at cold
start. docs/specs/chat.md has the design.

Each section is {id, doc, title, breadcrumb, text}, and may carry an {aliases} list once the offline
alias generator (tools/gen_chat_aliases.py) has run. An id looks like `the-eu-ai-act#article-6`: the
model cites sections by it, so it is lowercase, has no spaces or brackets, and is stable as long as the
headings are. Sections are cut at ## and ### headings, merged up to about MIN_CHARS so a heading with
one line under it isn't a section of its own, and split above MAX_CHARS on paragraphs (and, for a
single oversized paragraph such as a wide table or a long list, at line boundaries, never mid-line).

Three kinds of source are ingested, all read from this repo:

  * the Obsidian notes under Map/ (every *.md except Map/Canvas/), one document per file;
  * aigp-book.md as virtual documents: book-front, book-exam, one book-chN per chapter, the Part
    openers, book-where, book-appendix-a and book-glossary (one section per glossary term);
  * the enrichments in enrichments/1[1-4]-*.json, one document per mind-map node, named map-<key>.

quiz-data.js, flashcard-data.js, node-details.js and book-data.js are deliberately NOT read: the first
two are exam content (the chat must not answer from the questions), the others are generated copies of
sources already read here.

The build never calls a model. The aliases it merges are generated offline by tools/gen_chat_aliases.py
and committed as chat_aliases.json; an alias whose text hash no longer matches its section is dropped.
"""
import gzip
import hashlib
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / "_corpus" / "corpus.json.gz"
ALIASES = ROOT / "chat_aliases.json"
BOOK = ROOT / "aigp-book.md"
BOOK_TITLE = "Governing AI"

# The four documents the corpus shipped with while the chat was proved out. Kept as a named constant so
# tests and the eval can rebuild the seed corpus and compare it with the full one.
SEED_SOURCES = [
    "Map/Legal and Regulatory/The EU AI Act.md",
    "Map/NIST AI RMF — Structured Reference.md",
    "Map/ISO 42005 — AI System Impact Assessment.md",
    "Map/Agentic AI Governance.md",
]
MIN_CHARS, MAX_CHARS = 600, 6000
ID_RE = re.compile(r"[a-z0-9][a-z0-9-]*#[a-z0-9][a-z0-9-]*")
HR_RE = re.compile(r"^(?:-{3,}|\*{3,}|_{3,})\s*$")
MM_NODES_RE = re.compile(r"const MM_NODES = (\[.*?\]);\n", re.S)
HEADING_RE = re.compile(r"(#{1,3}) +(.+?) *#*$")


def map_sources(root=ROOT):
    """Every vault note under Map/, except Map/Canvas/ (hand-drawn canvases, not prose), sorted so the
    corpus is byte-identical between builds."""
    return sorted(str(p.relative_to(root)) for p in (root / "Map").rglob("*.md") if "Canvas" not in p.parts)


SOURCES = map_sources()


def slug(text):
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-") or "section"


def plain(text):
    """Obsidian links become their label. The model cites with [[id]], so none may survive in the text."""
    text = re.sub(r"\[\[([^\]|]*)\|([^\]]*)\]\]", r"\2", text)
    return re.sub(r"\[\[([^\]]*)\]\]", r"\1", text).replace("[[", "").replace("]]", "")


def split_markdown(md):
    """(doc title, [(breadcrumb parts, title, text)]) cut at ## and ### headings; # sets the doc title."""
    if md.startswith("---\n"):
        end = md.find("\n---", 4)
        md = md[end + 4 :] if end != -1 else md
    title, path, sections, body, fence = "", [], [], [], False
    current = None  # (parts, title)

    def flush():
        text = "\n".join(body).strip()
        if current and text:
            sections.append((current[0], current[1], text))
        body.clear()

    for line in md.splitlines():
        if line.lstrip().startswith("```"):
            fence = not fence
        m = None if fence else HEADING_RE.match(line)
        if not m:
            body.append(line)
            continue
        level, heading = len(m[1]), plain(m[2]).strip()
        if level == 1:
            title = title or heading
            continue
        flush()
        path = path[: level - 2] + [heading]
        current = (list(path), heading)
    flush()
    return title, sections


def _is_rule(para):
    """A markdown thematic break (---, ***, ___), which carries no content and must not become a
    section of its own."""
    lines = [line for line in para.split("\n") if line.strip()]
    return bool(lines) and all(HR_RE.match(line) for line in lines)


def _split_para(para, maxc):
    """Break one over-long paragraph at line boundaries. A table row or a list item is a line, so this
    never splits mid-row; it only ever cuts between lines."""
    out, cur = [], ""
    for line in para.split("\n"):
        if cur and len(cur) + 1 + len(line) > maxc:
            out.append(cur)
            cur = line
        else:
            cur = cur + "\n" + line if cur else line
    out.append(cur)
    return out


def chunk_text(text, maxc=MAX_CHARS):
    """Split text above maxc characters on paragraph boundaries (and, for a single oversized paragraph,
    at line boundaries), dropping thematic-break-only paragraphs."""
    chunks, cur = [], ""
    for para in re.split(r"\n\s*\n", text):
        if not para.strip() or _is_rule(para):
            continue
        if len(para) > maxc:
            if cur:
                chunks.append(cur)
                cur = ""
            chunks.extend(_split_para(para, maxc))
            continue
        if cur and len(cur) + 2 + len(para) > maxc:
            chunks.append(cur)
            cur = para
        else:
            cur = cur + "\n\n" + para if cur else para
    if cur:
        chunks.append(cur)
    return chunks


def pack(sections):
    """Merge runs of small sections and split large ones. Returns [(parts, title, text)]."""
    merged = []
    for parts, title, text in sections:
        if merged and len(merged[-1][2]) < MIN_CHARS:
            p, t, prev = merged[-1]
            merged[-1] = (p, t, prev + "\n\n" + ("#" * (len(parts) + 1)) + " " + title + "\n" + text)
        else:
            merged.append((parts, title, text))
    out = []
    for parts, title, text in merged:
        for i, c in enumerate(chunk_text(text)):
            out.append((parts, title if i == 0 else f"{title} (part {i + 1})", c))
    return out


def unique_doc_slugs(paths):
    """A slug per source path, unique across the whole set. The slug is the file stem before an em dash.
    Two stems that reduce to the same slug (different directories, usually) are disambiguated by
    prefixing the parent directory's slug, in sorted order, and the collision is reported."""
    by_slug = {}
    for rel in paths:
        by_slug.setdefault(slug(Path(rel).stem.split("—")[0]), []).append(rel)
    out = {}
    for base, rels in by_slug.items():
        if len(rels) == 1:
            out[rels[0]] = base
            continue
        for rel in sorted(rels):
            parent = slug(Path(rel).parent.name)
            cand = f"{parent}-{base}" if parent else base
            print(f"warning: document slug {base!r} collides; {rel} -> {cand!r}", file=sys.stderr)
            out[rel] = cand
    return out


def _new_id(used, doc, title):
    base = f"{doc}#{slug(title)}"
    sid, n = base, 1
    while sid in used:
        n += 1
        sid = f"{base}-{n}"
    used.add(sid)
    return sid


def build(paths, root=ROOT):
    """Corpus sections from a list of markdown paths, relative to root."""
    slugs = unique_doc_slugs(paths)
    corpus, used = [], set()
    for rel in paths:
        doc_title, sections = split_markdown((root / rel).read_text(encoding="utf-8"))
        doc_title = doc_title or Path(rel).stem
        doc = slugs[rel]
        for parts, title, text in pack(sections):
            corpus.append({"id": _new_id(used, doc, title), "doc": doc, "title": title, "breadcrumb": " > ".join([doc_title] + parts), "text": plain(text)})
    return corpus


# --- aliases, validation, main -------------------------------------------------------------------

def build_all(root=ROOT):
    return build(SOURCES, root)


def source_kind(doc):
    if doc.startswith("book-"):
        return "book"
    if doc.startswith("map-"):
        return "enrichment"
    return "notes"


def problems(corpus):
    bad = []
    ids = [s["id"] for s in corpus]
    if len(ids) != len(set(ids)):
        bad.append("duplicate ids")
    for s in corpus:
        if not ID_RE.fullmatch(s["id"]):
            bad.append(f"bad id {s['id']!r}")
        if not s["text"].strip():
            bad.append(f"empty section {s['id']}")
        if "[[" in s["text"] or "[[" in s["title"]:
            bad.append(f"wikilink left in {s['id']}")
    return bad


def stats(corpus):
    from collections import Counter

    kinds = Counter(source_kind(s["doc"]) for s in corpus)
    sizes = sorted(corpus, key=lambda s: len(s["text"]))
    return kinds, sizes


def main():
    corpus = build_all()
    bad = problems(corpus)
    if bad:
        sys.exit("corpus invalid:\n  " + "\n  ".join(bad[:20]))
    raw = json.dumps(corpus, ensure_ascii=False, separators=(",", ":")).encode()
    if len(raw) > 25 * 1024 * 1024:
        sys.exit(f"raw corpus is {len(raw):,} bytes, over the 25 MB ceiling; stopping rather than uploading")
    OUT.parent.mkdir(exist_ok=True)
    OUT.write_bytes(gzip.compress(raw, mtime=0))  # mtime=0: identical input gives identical bytes
    kinds, sizes = stats(corpus)
    gz = OUT.stat().st_size
    if gz > 5 * 1024 * 1024:
        sys.exit(f"gzipped corpus is {gz:,} bytes, over the 5 MB the Lambda will hold")
    print(f"{len(corpus):,} sections: " + ", ".join(f"{k} {v:,}" for k, v in sorted(kinds.items())))
    print(f"{len(raw):,} bytes raw, {gz:,} gzipped -> {OUT.relative_to(ROOT)}")
    print("10 largest:")
    for s in sizes[-10:][::-1]:
        print(f"  {len(s['text']):6} {s['id']}")
    print("10 smallest:")
    for s in sizes[:10]:
        print(f"  {len(s['text']):6} {s['id']}")


if __name__ == "__main__":
    main()
