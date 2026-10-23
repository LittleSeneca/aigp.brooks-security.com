#!/usr/bin/env python3
"""Build the study chat's corpus: the Obsidian notes cut into sections, as one gzipped JSON file.

    python3 build_chat_corpus.py            # writes _corpus/corpus.json.gz from SOURCES

The deploy workflow runs this and uploads the result to the private chat bucket; the chat Lambda
(brooks-security.com repo, terraform/files/aigp-chat) loads it and builds its search index at cold
start. docs/specs/chat.md has the design.

Each section is {id, doc, title, breadcrumb, text}. An id looks like `the-eu-ai-act#article-6`: the
model cites sections by it, so it is lowercase, has no spaces or brackets, and is stable as long as
the headings are. Sections are cut at ## and ### headings, merged up to about MIN_CHARS so a heading
with one line under it isn't a section of its own, and split on paragraphs above MAX_CHARS.

SOURCES is a small seed while the chat is proved out. Widening it to the whole of Map/, the book and the
enrichments is a change to this list (and, for the book and enrichments, a reader for their formats).
"""
import gzip
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent
OUT = ROOT / "_corpus" / "corpus.json.gz"
SOURCES = [
    "Map/Legal and Regulatory/The EU AI Act.md",
    "Map/NIST AI RMF — Structured Reference.md",
    "Map/ISO 42005 — AI System Impact Assessment.md",
    "Map/Agentic AI Governance.md",
]
MIN_CHARS, MAX_CHARS = 600, 6000
ID_RE = re.compile(r"[a-z0-9][a-z0-9-]*#[a-z0-9][a-z0-9-]*")


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
        m = None if fence else re.match(r"(#{1,3}) +(.+?) *#*$", line)
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
        chunks, cur = [], ""
        for para in re.split(r"\n\s*\n", text):
            if cur and len(cur) + len(para) > MAX_CHARS:
                chunks.append(cur)
                cur = ""
            cur += ("\n\n" if cur else "") + para
        chunks.append(cur)
        out += [(parts, title if i == 0 else f"{title} (part {i + 1})", c) for i, c in enumerate(chunks)]
    return out


def build(paths, root=ROOT):
    corpus, used = [], set()
    for rel in paths:
        doc_title, sections = split_markdown((root / rel).read_text(encoding="utf-8"))
        doc_title = doc_title or Path(rel).stem
        doc = slug(Path(rel).stem.split("—")[0])
        for parts, title, text in pack(sections):
            base = f"{doc}#{slug(title)}"
            sid, n = base, 1
            while sid in used:
                n += 1
                sid = f"{base}-{n}"
            used.add(sid)
            corpus.append({"id": sid, "doc": doc, "title": title, "breadcrumb": " > ".join([doc_title] + parts), "text": plain(text)})
    return corpus


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


def main():
    corpus = build(SOURCES)
    bad = problems(corpus)
    if bad:
        sys.exit("corpus invalid:\n  " + "\n  ".join(bad))
    OUT.parent.mkdir(exist_ok=True)
    raw = json.dumps(corpus, ensure_ascii=False, separators=(",", ":")).encode()
    OUT.write_bytes(gzip.compress(raw, mtime=0))  # mtime=0: identical input gives identical bytes
    print(f"{len(corpus)} sections from {len(SOURCES)} documents, {len(raw):,} bytes ({OUT.stat().st_size:,} gzipped) -> {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
