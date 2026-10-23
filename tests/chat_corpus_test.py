#!/usr/bin/env python3
"""Tests for build_chat_corpus.py. Stdlib only:  python3 tests/chat_corpus_test.py"""
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

    def test_the_real_seed_builds_clean(self):
        c = b.build(b.SOURCES)
        self.assertEqual(b.problems(c), [])
        self.assertGreater(len(c), 20)


if __name__ == "__main__":
    unittest.main()
