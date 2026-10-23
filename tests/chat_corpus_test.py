#!/usr/bin/env python3
"""Tests for build_chat_corpus.py. Stdlib only:  python3 tests/chat_corpus_test.py"""
import hashlib
import json
import os
import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
import build_chat_corpus as b  # noqa: E402

DOC = """---
tags: [x]
---

# My Doc

## Alpha

""" + "Alpha text. " * 80 + """

### Beta

short

## Gamma

```
# not a heading
```

See [[Other Note]] and [[Target|the label]].

""" + "Gamma text. " * 80

# sha256 of the newline-joined ids of the four-document seed. The seed ids are a public contract: the
# model has cited them and must keep finding the same sections, so a packer change that shifts them is
# a regression, not an improvement.
SEED_IDS_SHA256 = "f4005774d633a43b064a2638369400d25fab21d02c210465311ecccfcb42f2ad"


class Chunking(unittest.TestCase):
    def test_frontmatter_title_and_headings(self):
        title, sections = b.split_markdown(DOC)
        self.assertEqual(title, "My Doc")
        self.assertEqual([s[1] for s in sections], ["Alpha", "Beta", "Gamma"])
        self.assertEqual(sections[1][0], ["Alpha", "Beta"])

    def test_heading_inside_a_code_fence_is_text(self):
        _, sections = b.split_markdown(DOC)
        self.assertIn("# not a heading", sections[2][2])

    def test_small_sections_merge_forward_into_the_previous_one(self):
        packed = b.pack([(["A"], "A", "x" * 100), (["B"], "B", "y" * 100)])
        self.assertEqual(len(packed), 1)
        self.assertIn("B", packed[0][2])

    def test_large_sections_split_on_paragraphs(self):
        text = "\n\n".join("p" * 1000 for _ in range(20))
        packed = b.pack([(["A"], "A", text)])
        self.assertGreater(len(packed), 1)
        self.assertTrue(all(len(c[2]) <= b.MAX_CHARS for c in packed))
        self.assertEqual(packed[1][1], "A (part 2)")

    # --- Phase 1: the packer fixes -----------------------------------------------------------------

    def test_thematic_breaks_do_not_become_sections(self):
        """A --- rule between two headings used to end up as a three-character section of its own."""
        md = "# D\n\n## A\n\n" + "text. " * 120 + "\n\n---\n\n## B\n\n" + "more. " * 120
        packed = b.pack(b.split_markdown(md)[1])
        self.assertTrue(all(chunk.strip() != "---" for _, _, chunk in packed))
        self.assertNotIn("---", "".join(chunk for _, _, chunk in packed))

    def test_an_oversized_paragraph_splits_at_line_boundaries(self):
        """A single paragraph over MAX_CHARS (a wide table or a long list) used to survive as one giant
        section. It now splits between lines, never inside one, so no table row is cut in half."""
        text = "\n".join(f"| row {i} | value {i} |" for i in range(400))
        packed = b.pack([(["A"], "A", text)])
        self.assertGreater(len(packed), 1)
        self.assertTrue(all(len(c[2]) <= b.MAX_CHARS for c in packed))
        source_lines = set(text.split("\n"))
        for _, _, chunk in packed:
            for line in chunk.split("\n"):
                self.assertIn(line, source_lines)  # whole lines only: no mid-row cut

    def test_a_small_trailing_chunk_is_not_left_behind_a_break(self):
        """Splitting a giant table used to leave the following rule as a three-character '(part 2)'."""
        rows = "\n".join("| r | v |" for _ in range(2000))
        packed = b.pack([(["A"], "A", rows + "\n\n---\n\n" + "tail. " * 20)])
        self.assertTrue(all(len(c[2].strip()) > 20 for c in packed))


class Build(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        (Path(self.tmp.name) / "A — Ref.md").write_text(DOC, encoding="utf-8")
        (Path(self.tmp.name) / "B.md").write_text("# B\n\n## Alpha\n\n" + "b " * 400, encoding="utf-8")

    def tearDown(self):
        self.tmp.cleanup()

    def corpus(self):
        return b.build(["A — Ref.md", "B.md"], Path(self.tmp.name))

    def test_ids_are_unique_stable_and_citable(self):
        c = self.corpus()
        self.assertEqual(b.problems(c), [])
        self.assertIn("a#alpha", [s["id"] for s in c])
        self.assertIn("b#alpha", [s["id"] for s in c])  # same heading in two docs does not collide
        self.assertEqual([s["id"] for s in c], [s["id"] for s in self.corpus()])

    def test_wikilinks_become_labels(self):
        text = " ".join(s["text"] for s in self.corpus())
        self.assertIn("Other Note and the label", text)
        self.assertNotIn("[[", text)

    def test_breadcrumb_names_the_document_and_path(self):
        self.assertEqual(self.corpus()[0]["breadcrumb"], "My Doc > Alpha")

    def test_problems_catches_what_would_break_the_lambda(self):
        s = {"id": "a#b", "doc": "a", "title": "t", "breadcrumb": "x", "text": "ok"}
        self.assertEqual(b.problems([s]), [])
        self.assertTrue(b.problems([s, dict(s)]))
        self.assertTrue(b.problems([dict(s, id="Bad Id")]))
        self.assertTrue(b.problems([dict(s, text=" ")]))
        self.assertTrue(b.problems([dict(s, text="see [[x]]")]))

    # --- Phase 1: the glob, the slug set, and the seed contract ------------------------------------

    def test_document_slugs_are_unique_across_the_whole_set(self):
        """Two files in different directories whose stems reduce to the same slug must not collide."""
        tmp = tempfile.TemporaryDirectory()
        self.addCleanup(tmp.cleanup)
        for sub, letter in (("one", "x"), ("two", "y")):
            (Path(tmp.name) / sub).mkdir()
            (Path(tmp.name) / sub / "Same — Note.md").write_text("# S\n\n## H\n\n" + f"{letter} " * 400, encoding="utf-8")
        paths = ["one/Same — Note.md", "two/Same — Note.md"]
        slugs = b.unique_doc_slugs(paths)
        self.assertEqual(len(set(slugs.values())), 2)
        self.assertEqual(slugs, b.unique_doc_slugs(paths))  # deterministic

    def test_the_real_map_globs_to_unique_slugs(self):
        self.assertEqual(len(b.SOURCES), len(set(b.SOURCES)))
        self.assertTrue(all(not p.startswith("Map/Canvas/") for p in b.SOURCES))
        self.assertEqual(b.SOURCES, sorted(b.SOURCES))
        self.assertEqual(len(set(b.unique_doc_slugs(b.SOURCES).values())), len(b.SOURCES))

    def test_the_seed_ids_are_unchanged(self):
        """The four seed documents keep exactly the ids they shipped with; the packer fixes must not
        move them."""
        ids = [s["id"] for s in b.build(b.SEED_SOURCES)]
        self.assertEqual(len(ids), 102)
        self.assertEqual(hashlib.sha256("\n".join(ids).encode()).hexdigest(), SEED_IDS_SHA256)

    def test_the_real_seed_builds_clean(self):
        c = b.build(b.SOURCES)
        self.assertEqual(b.problems(c), [])
        self.assertGreater(len(c), 20)

    def test_no_junk_sections_survive_in_the_whole_map_set(self):
        c = b.build(b.SOURCES)
        self.assertTrue(all(len(s["text"].strip()) > 10 for s in c))
        self.assertTrue(all(len(s["text"]) <= b.MAX_CHARS for s in c))


if __name__ == "__main__":
    unittest.main()
