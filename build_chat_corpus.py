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


# --- the book ------------------------------------------------------------------------------------

H1_DOCS = {
    "About This Book": "book-front",
    "How to Read a Chapter": "book-front",
    "About the AIGP Exam": "book-exam",
    "Where the Four Domains Meet": "book-where",
    "Appendix A: Standards and Frameworks at a Glance": "book-appendix-a",
    "Appendix B: Glossary": "book-glossary",
}
PART_RE = re.compile(r"^Part (I|II|III|IV): ")
CHAPTER_RE = re.compile(r"^Chapter (\d+): ")
GLOSSARY_TERM_RE = re.compile(r"^\*\*(.+?)\.\*\*\s*(.*)$", re.S)
COMMENT_RE = re.compile(r"<!--.*?-->", re.S)


def _doc_heading(line, fence):
    m = None if fence else HEADING_RE.match(line)
    return (len(m[1]), m[2].strip()) if m else None


def split_book_docs(md):
    """Slice aigp-book.md into virtual documents.

    Returns (headings, docs): `headings` is every ##/### heading outside the Contents list (for the
    coverage check), `docs` is a list of {slug, offset, part, lines}. Chapters become one document each
    (book-chN, offset 1 so `##` is its top level); every other document keeps `#` as its top level
    (offset 0). The Part a chapter belongs to is carried as `part` for its breadcrumb.
    """
    lines = COMMENT_RE.sub("", md).split("\n")
    headings, docs, cur, part, skip, fence = [], [], None, None, False, False
    for line in lines:
        if line.lstrip().startswith("```"):
            fence = not fence
        h = _doc_heading(line, fence)
        if not h:
            if not skip and cur is not None:
                cur["lines"].append(line)
            continue
        level, heading = h
        if level == 1 and heading == "Contents":
            cur, skip = None, True
            continue
        if skip and level > 1:
            continue
        skip = False
        if level in (2, 3):
            headings.append(heading)
        if level == 1 and heading == BOOK_TITLE:
            cur = {"slug": "book-front", "offset": 0, "part": None, "lines": [], "lead": BOOK_TITLE, "sub": True}
            docs.append(cur)
            continue
        pm = PART_RE.match(heading) if level == 1 else None
        cm = CHAPTER_RE.match(heading) if level == 2 else None
        if pm:
            part = heading
            num = {"I": 1, "II": 2, "III": 3, "IV": 4}[pm.group(1)]
            cur = {"slug": f"book-part{num}", "offset": 0, "part": None, "lines": [], "lead": None}
            docs.append(cur)
        elif cm:
            cur = {"slug": f"book-ch{cm.group(1)}", "offset": 1, "part": part, "lines": [], "lead": None}
            docs.append(cur)
        elif level == 1:
            cur = {"slug": H1_DOCS.get(heading) or ("book-" + slug(heading)), "offset": 0, "part": None, "lines": [], "lead": None}
            docs.append(cur)
        elif cur is None:
            continue
        elif cur.get("sub") and level == 2:
            # the title page's subtitle line: keep its words as body text, not as a heading
            cur["sub"] = False
            cur["lines"].append(heading)
            continue
        cur["lines"].append(line)
    return headings, docs


def parse_doc(lines, offset, lead=None):
    """(sections, part) for one virtual document. A heading opens a section; the section's parts are its
    heading path within the document (the chapter's Part is added to the breadcrumb separately)."""
    out, path, body, fence = [], [], [], False
    current = ([], lead) if lead else None

    def flush():
        text = "\n".join(body).strip()
        if current and text:
            out.append((current[0], current[1], text))
        body.clear()

    for line in lines:
        if line.lstrip().startswith("```"):
            fence = not fence
        m = None if fence else HEADING_RE.match(line)
        if not m:
            body.append(line)
            continue
        flush()
        depth = len(m[1]) - offset
        heading = m[2].strip()
        path = path[: depth - 1] + [heading]
        current = (list(path), heading)
    flush()
    return out


def parse_glossary(lines):
    """(sections, terms) for the glossary. Each `**Term.** definition` paragraph becomes its own
    section; the `### A` letter headings become breadcrumb parts, and the intro prose stays a section."""
    base = "Appendix B: Glossary"
    out, terms, preface, block, letter = [], [], [], [], None

    def emit_terms():
        for para in re.split(r"\n\s*\n", "\n".join(block)):
            para = para.strip()
            if not para:
                continue
            m = GLOSSARY_TERM_RE.match(para)
            term = m.group(1).strip() if m else letter
            if m:
                terms.append(term)
            out.append(([base, letter, term], term, para))

    for line in lines:
        m = re.match(r"^### +(.+?) *#*$", line)
        if not m:
            (preface if letter is None else block).append(line)
            continue
        if letter is None:
            text = "\n".join(preface).strip()
            if text:
                out.append(([base], base, text))
        else:
            emit_terms()
            block = []
        letter = m[1].strip()
    if letter is None:
        text = "\n".join(preface).strip()
        if text:
            out.append(([base], base, text))
    else:
        emit_terms()
    return out, terms


def build_book(md=None, used=None):
    """Corpus sections for the book. Returns (sections, headings, terms)."""
    md = md if md is not None else BOOK.read_text(encoding="utf-8")
    headings, docs = split_book_docs(md)
    used = used if used is not None else set()
    corpus, terms = [], []
    for doc in docs:
        if doc["slug"] == "book-glossary":
            raw, terms = parse_glossary(doc["lines"])
            packed = [(parts, title, c) for parts, title, text in raw for c in chunk_text(text)]
        else:
            # No forward-merge for the book: every ## and ### is its own section, so a breadcrumb
            # matches the heading it came from and a short section (a Key Terms list) stays citable on
            # its own. Only the size split applies.
            packed = [(parts, title, c) for parts, title, text in parse_doc(doc["lines"], doc["offset"], doc.get("lead")) for c in chunk_text(text)]
        for parts, title, text in packed:
            crumb = " > ".join([BOOK_TITLE] + ([doc["part"]] if doc["part"] else []) + parts)
            corpus.append({"id": _new_id(used, doc["slug"], title), "doc": doc["slug"], "title": title, "breadcrumb": crumb, "text": plain(text)})
    return corpus, headings, terms


def book_coverage(headings, corpus):
    """The headings (##/### outside the Contents list, from split_book_docs) that no book section
    represents: not a section title, not a breadcrumb part, and not inside a section's text."""
    book = [s for s in corpus if s["doc"].startswith("book-")]
    return [h for h in headings if not any(h == s["title"] or h in s["breadcrumb"].split(" > ") or h in s["text"] for s in book)]


def book_text_coverage(md, sections):
    """(covered, total) characters: book section text over the book's characters, the Contents list
    excluded. Used to prove the book was ingested whole."""
    keep, skip = [], False
    for line in md.split("\n"):
        m = HEADING_RE.match(line)
        if m and len(m[1]) == 1:
            skip = m[2].strip() == "Contents"
        if not skip:
            keep.append(line)
    return sum(len(s["text"]) for s in sections if s["doc"].startswith("book-")), len("\n".join(keep))


# --- the enrichments -----------------------------------------------------------------------------

def load_nodes(root=ROOT):
    """The mind map's node list, as verify_enrichment.py parses it."""
    return json.loads(MM_NODES_RE.search((root / "map-data.js").read_text(encoding="utf-8")).group(1))


def node_key(node):
    """A term leaf is keyed `term:<name>`; every other node by its id."""
    return f"term:{node['term']}" if "term" in node else node["id"]


def _label(node):
    return node["label"].replace("\n", " ")


def node_path(node, by_key):
    """Breadcrumb path from the root, e.g. ['AIGP', 'Domain I Foundations', 'I.A ...', 'topic']."""
    parts, cur, seen = [], node, set()
    while cur is not None and cur["id"] not in seen:
        seen.add(cur["id"])
        parts.append(_label(cur))
        cur = by_key.get(cur.get("parent")) if cur.get("parent") else None
    return list(reversed(parts))


def load_enrichments(root=ROOT):
    """The non-empty enrichment files (11 to 14). The other files carry only `{}`; the single `root`
    entry in 01-structure.json is not a domain file and is not ingested."""
    entries = {}
    for path in sorted(root.glob("enrichments/1[1-4]-*.json")):
        for key, value in json.loads(path.read_text(encoding="utf-8")).items():
            if key in entries:
                print(f"warning: enrichment key {key!r} defined in more than one file; last wins", file=sys.stderr)
            entries[key] = value
    return entries


def _enrichment_text(entry, half):
    """The text of one enrichment section. `half` is 'overview' (overview plus deep dive) or 'exam'
    (why it matters for the exam, the key points, and the source titles)."""
    if half == "overview":
        return "\n\n".join(x for x in (entry.get("overview"), entry.get("deep_dive")) if x)
    parts = [entry.get("exam")]
    points = entry.get("key_points") or []
    if points:
        parts.append("\n".join(f"- {p}" for p in points))
    titles = [s.get("title") for s in entry.get("sources") or [] if s.get("title")]
    if titles:
        parts.append("\n".join(f"- {t}" for t in titles))
    return "\n\n".join(x for x in parts if x)


def build_enrichments(entries, nodes, used=None):
    """Corpus sections for the enrichment entries: two per node (overview plus deep dive; exam angle plus
    key points and source titles)."""
    by_key = {node_key(n): n for n in nodes}
    by_id = {n["id"]: n for n in nodes}
    used = used if used is not None else set()
    corpus = []
    for key in sorted(entries, key=lambda k: by_key.get(k, {}).get("id", k)):
        node = by_key.get(key) or by_id.get(key)
        if node is None:
            print(f"warning: enrichment key {key!r} has no mind-map node; skipped", file=sys.stderr)
            continue
        doc = "map-" + slug(key)
        crumb = " > ".join(node_path(node, by_id))
        for half, title in (("overview", _label(node)), ("exam", _label(node) + " (exam focus)")):
            text = _enrichment_text(entries[key], half)
            if not text.strip():
                continue
            for i, c in enumerate(chunk_text(text)):
                sid = _new_id(used, doc, title if i == 0 else f"{title} (part {i + 1})")
                corpus.append({"id": sid, "doc": doc, "title": title if i == 0 else f"{title} (part {i + 1})", "breadcrumb": crumb, "text": c})
    return corpus


# --- aliases, validation, main -------------------------------------------------------------------

def section_hash(text):
    return hashlib.sha256(text.encode("utf-8")).hexdigest()


def load_aliases(root=ROOT):
    path = root / "chat_aliases.json"
    if not path.exists():
        return {}
    data = json.loads(path.read_text(encoding="utf-8"))
    return {k: v for k, v in data.items() if not k.startswith("_")}


def merge_aliases(corpus, aliases):
    """Attach each section's aliases when the stored text hash still matches; drop stale ones with a
    warning. Alias lists are attached as `aliases`; a section with none gets no key."""
    merged = 0
    for section in corpus:
        entry = aliases.get(section["id"])
        if not entry:
            continue
        if entry.get("hash") != section_hash(section["text"]):
            print(f"warning: stale aliases for {section['id']} (text changed since they were generated); dropped", file=sys.stderr)
            continue
        names = entry.get("aliases") or []
        if names:
            section["aliases"] = names
            merged += 1
    return merged


def build_all(root=ROOT, include_book=True, include_enrichments=True, include_aliases=True):
    corpus = build(SOURCES, root)
    used = {s["id"] for s in corpus}
    if include_book:
        book_sections, _, _ = build_book((root / BOOK).read_text(encoding="utf-8"), used)
        corpus += book_sections
    if include_enrichments:
        corpus += build_enrichments(load_enrichments(root), load_nodes(root), used)
    if include_aliases:
        merge_aliases(corpus, load_aliases(root))
    return corpus


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
        for msg in _alias_problems(s):
            bad.append(msg)
    return bad


def _alias_problems(section):
    names = section.get("aliases")
    if names is None:
        return []
    if not isinstance(names, list) or not all(isinstance(a, str) for a in names):
        return [f"aliases must be a list of strings in {section['id']}"]
    bad = []
    if len(names) > 8:
        bad.append(f"more than 8 aliases in {section['id']}")
    for a in names:
        if len(a) > 120:
            bad.append(f"alias over 120 characters in {section['id']}")
        if "—" in a:
            bad.append(f"em dash in an alias in {section['id']}")
        if "[[" in a or "]]" in a:
            bad.append(f"brackets in an alias in {section['id']}")
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
    print(f"aliases merged into {sum(1 for s in corpus if s.get('aliases')):,} sections")
    print("10 largest:")
    for s in sizes[-10:][::-1]:
        print(f"  {len(s['text']):6} {s['id']}")
    print("10 smallest:")
    for s in sizes[:10]:
        print(f"  {len(s['text']):6} {s['id']}")


if __name__ == "__main__":
    main()
