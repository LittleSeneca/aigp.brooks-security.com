#!/usr/bin/env python3
"""Assemble the non-narrative manuscript from the staged blocks in docs/exemplars/.

The staged blocks are proposals: each carries a leading '> **Proposal' line that
this script strips. Nothing here is a source of truth except the blocks
themselves; aigp-book.md is a build product of this script during the rewrite.

    front-matter.md      title page, Contents, About This Book, How to Read a
                         Chapter, About the AIGP Exam
    part-openers.md      the four Part openers, each with its Exam at a Glance
                         competency table
    chapter-NN-*.md      the thirteen chapters
    closing-section.md   Where the Four Domains Meet
    back-matter.md       Appendix A (standards) and Appendix B (glossary)

The Contents list is regenerated from the actual headings rather than copied, so
it cannot drift from the chapters. The title page must sit before '\\n# Contents'
because build_book.py splits on that string to inject the study plan.

Usage:
    python3 assemble_book.py            # write aigp-book.md
    python3 assemble_book.py --dry-run  # report what would be assembled
"""
import re
import sys
from pathlib import Path

HERE = Path(__file__).parent
STAGE = HERE / "docs" / "exemplars"
TARGET = HERE / "aigp-book.md"

# Which chapters belong to which Part opener, in file order.
PARTS = [("I", [1, 2, 3]), ("II", [4, 5, 6, 7]), ("III", [8, 9, 10]), ("IV", [11, 12, 13])]

CHAPTER_FILES = {
    1: "chapter-1-what-ai-is.md",
    2: "chapter-2-ownership-roles.md",
    3: "chapter-3-policies-lifecycle.md",
    4: "chapter-4-privacy-law.md",
    5: "chapter-5-existing-law.md",
    6: "chapter-6-ai-law.md",
    7: "chapter-7-standards-tools.md",
    8: "chapter-8-design-file.md",
    9: "chapter-9-training-data.md",
    10: "chapter-10-release-monitoring.md",
    11: "chapter-11-deciding-deploy.md",
    12: "chapter-12-assessing-adopt.md",
    13: "chapter-13-operate-retire.md",
}

BANNED = re.compile(
    r"Nadia|Tom Ashby|Priya|Siobhan|Owen|Marcus|Dana Whitfield|Evelyn Marsh|"
    r"Larkspur|Clearline|Norvane|Brightlist|Scorecard"
)


def strip_header(text: str) -> str:
    """Drop the leading proposal header block (lines beginning with '>')."""
    lines = text.split("\n")
    i = 0
    while i < len(lines) and (lines[i].startswith(">") or not lines[i].strip()):
        i += 1
    return "\n".join(lines[i:]).strip()


def read(name: str) -> str:
    p = STAGE / name
    if not p.exists():
        return ""
    return strip_header(p.read_text(encoding="utf-8"))


def h1_blocks(text: str) -> list:
    """Split a markdown file into its top-level '# ' sections, keeping headings."""
    out, cur = [], []
    for line in text.split("\n"):
        if line.startswith("# ") and cur:
            out.append("\n".join(cur).strip())
            cur = [line]
        else:
            cur.append(line)
    if cur:
        out.append("\n".join(cur).strip())
    return [b for b in out if b]


def main() -> int:
    dry = "--dry-run" in sys.argv
    problems, missing = [], []

    front = read("front-matter.md")
    openers = read("part-openers.md")
    closing = read("closing-section.md")
    back = read("back-matter.md")

    # Front matter: title page (before '# Contents') and body (from '# About This Book').
    if "\n# Contents" not in front:
        problems.append("front-matter.md has no '# Contents' line; build_book.py needs it")
        title_page, front_body = front, ""
    else:
        title_page, _ = front.split("\n# Contents", 1)
        title_page = title_page.rstrip()
        idx = front.find("\n# About This Book")
        front_body = front[idx:].strip() if idx != -1 else ""

    # Part openers, in file order.
    part_blocks = [b for b in h1_blocks(openers) if b.startswith("# Part ")]
    if len(part_blocks) != len(PARTS):
        problems.append(f"expected {len(PARTS)} Part openers, found {len(part_blocks)}")

    # Chapters.
    chapters, titles = {}, {}
    for n, fname in sorted(CHAPTER_FILES.items()):
        text = read(fname)
        if not text:
            missing.append(f"Ch{n} ({fname})")
            continue
        head = next((l for l in text.split("\n") if l.startswith("## ")), "")
        if not re.match(rf"^## Chapter {n}:", head):
            problems.append(f"Ch{n}: heading must start '## Chapter {n}:' but is {head[:60]!r}")
        if BANNED.search(text):
            problems.append(f"Ch{n}: fictional entity name present")
        titles[n] = head[3:].strip()
        chapters[n] = text

    # Appendices and closing.
    back_blocks = h1_blocks(back)
    app_titles = [b.split("\n", 1)[0][2:].strip() for b in back_blocks if b.startswith("# Appendix")]
    closing_title = closing.split("\n", 1)[0][2:].strip() if closing.startswith("# ") else ""

    # Regenerate the Contents from what is actually present.
    contents = ["- About This Book", "- How to Read a Chapter", "- About the AIGP Exam"]
    for (numeral, nums), opener in zip(PARTS, part_blocks):
        part_title = opener.split("\n", 1)[0][2:].strip()
        contents.append(f"- {part_title}")
        for n in nums:
            if n in titles:
                contents.append(f"    - {titles[n]}")
    if closing_title:
        contents.append(f"- {closing_title}")
    for t in app_titles:
        contents.append(f"- {t}")

    # Assemble.
    pieces = [title_page, "", "# Contents", ""] + contents + ["", front_body]
    for (numeral, nums), opener in zip(PARTS, part_blocks):
        pieces += ["", opener]
        for n in nums:
            if n in chapters:
                pieces += ["", chapters[n]]
    if closing:
        pieces += ["", closing]
    for b in back_blocks:
        pieces += ["", b]

    manuscript = "\n".join(pieces).rstrip() + "\n"

    # Gates.
    dashes = [n for n, l in enumerate(manuscript.split("\n"), 1) if "\u2014" in l or "\u2013" in l]
    if dashes:
        problems.append(f"em/en dash on manuscript lines {dashes[:10]}")
    if BANNED.search(manuscript):
        problems.append(f"fictional entity name present: {set(BANNED.findall(manuscript))}")
    if "\n# Contents" not in manuscript:
        problems.append("assembled manuscript has no '# Contents'; build_book.py will fail")
    if manuscript.index("\n# Contents") > manuscript.index("\n# About This Book"):
        problems.append("'# Contents' must come before '# About This Book'")

    words = len(manuscript.split())
    print(f"assembled  : {len(manuscript):,} bytes, {words:,} words, "
          f"{len(chapters)}/{len(CHAPTER_FILES)} chapters")
    print(f"contents   : {len(contents)} entries")
    if missing:
        print(f"missing    : {', '.join(missing)}")
    if problems:
        print("PROBLEMS:")
        for p in problems:
            print(f"  - {p}")
    if not dry and not missing and not problems:
        TARGET.write_text(manuscript, encoding="utf-8")
        print(f"wrote      : {TARGET}")
    elif not dry:
        print("not written: resolve the items above first")
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())