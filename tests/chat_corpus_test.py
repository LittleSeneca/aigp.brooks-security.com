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


class Book(unittest.TestCase):
    """The book is read from the real manuscript; it is the artifact under test."""

    @classmethod
    def setUpClass(cls):
        cls.sections, cls.headings, cls.terms = b.build_book(used=set())

    def test_every_heading_maps_to_a_section(self):
        self.assertEqual(b.book_coverage(self.headings, self.sections), [])
        self.assertGreater(len(self.headings), 100)

    def test_the_book_is_ingested_almost_whole(self):
        covered, total = b.book_text_coverage(b.BOOK.read_text(encoding="utf-8"), self.sections)
        self.assertGreaterEqual(covered / total, 0.95)

    def test_the_coverage_check_catches_a_dropped_section(self):
        """Prove the check is not vacuous: drop a section and its heading is reported missing."""
        missing = b.book_coverage(self.headings, self.sections[1:])
        self.assertTrue(missing)
        self.assertEqual(b.book_coverage(self.headings, self.sections), [])

    def test_breadcrumb_names_part_chapter_and_section(self):
        crumbs = [s["breadcrumb"] for s in self.sections if s["id"].startswith("book-ch6#")]
        self.assertTrue(any(c == "Governing AI > Part II: Laws, Standards and Frameworks > Chapter 6: The Law Written for AI > 6.2 Prohibited Practices and the Two December Additions" for c in crumbs), crumbs[:5])

    def test_the_contents_list_is_skipped(self):
        self.assertFalse(any("Contents" in s["breadcrumb"].split(" > ") for s in self.sections))

    def test_the_glossary_is_one_section_per_term(self):
        terms = [s for s in self.sections if s["doc"] == "book-glossary"]
        self.assertGreater(len(terms), 300)
        self.assertTrue(all(s["id"].startswith("book-glossary#") for s in terms))
        self.assertIn("book-glossary#a-b-testing", [s["id"] for s in terms])
        self.assertIn("Governing AI > Appendix B: Glossary > A > A/B Testing", [s["breadcrumb"] for s in terms])
        self.assertGreater(max(len(s["text"]) for s in terms), 0)

    def test_the_chapters_are_separate_documents(self):
        docs = {s["doc"] for s in self.sections}
        for n in range(1, 14):
            self.assertIn(f"book-ch{n}", docs)
        for extra in ("book-front", "book-exam", "book-where", "book-appendix-a", "book-glossary", "book-part1", "book-part4"):
            self.assertIn(extra, docs)


class Enrichments(unittest.TestCase):
    """The reader, against a tiny fixture rather than the real (large) files."""

    NODES = [
        {"id": "root", "label": "AIGP", "parent": None},
        {"id": "d1", "label": "Domain I\nFoundations", "parent": "root"},
        {"id": "ch1", "label": "I.A · The Case", "parent": "d1"},
        {"id": "term:Agent", "label": "Agent", "parent": "ch1", "term": "Agent"},
    ]
    ENTRIES = {
        "ch1": {
            "overview": "An overview sentence.",
            "deep_dive": "### Detail\n\nA deep dive paragraph.",
            "exam": "The exam tests this.",
            "key_points": ["First point.", "Second point."],
            "sources": [{"title": "Source One", "url": "https://example.com/one"}],
        },
    }

    def sections(self):
        return b.build_enrichments(self.ENTRIES, self.NODES, used=set())

    def test_two_sections_per_entry_with_stable_ids(self):
        c = self.sections()
        self.assertEqual([s["id"] for s in c], ["map-ch1#i-a-the-case", "map-ch1#i-a-the-case-exam-focus"])
        self.assertEqual([s["id"] for s in self.sections()], [s["id"] for s in c])  # stable

    def test_breadcrumb_is_the_path_from_the_root(self):
        self.assertEqual({s["breadcrumb"] for s in self.sections()}, {"AIGP > Domain I Foundations > I.A · The Case"})

    def test_the_halves_carry_the_right_content(self):
        first, second = self.sections()
        self.assertIn("An overview sentence.", first["text"])
        self.assertIn("A deep dive paragraph.", first["text"])  # deep dive kept as markdown
        self.assertIn("### Detail", first["text"])
        self.assertIn("The exam tests this.", second["text"])
        self.assertIn("First point.", second["text"])
        self.assertIn("Source One", second["text"])  # source titles as text
        self.assertNotIn("https://", second["text"])  # URLs left out

    def test_a_key_with_no_node_is_skipped_not_fatal(self):
        self.assertEqual(b.build_enrichments({"nope": {"overview": "x"}}, self.NODES, used=set()), [])

    def test_problems_accepts_enrichment_sections(self):
        self.assertEqual(b.problems(self.sections()), [])


class Aliases(unittest.TestCase):
    """Phase 4: the alias cache the generator writes, and the merge the build does."""

    def test_problems_enforces_the_alias_rules(self):
        s = {"id": "a#b", "doc": "a", "title": "t", "breadcrumb": "x", "text": "ok"}
        self.assertEqual(b.problems([dict(s, aliases=["data protection impact assessment", "DPIA"])]), [])
        for bad in (["x"] * 9, ["—"], ["[["], ["y" * 121], "not a list", [1, 2]):
            self.assertTrue(b.problems([dict(s, aliases=bad)]), bad)

    def test_merge_attaches_matching_and_drops_stale(self):
        tmp = tempfile.TemporaryDirectory()
        self.addCleanup(tmp.cleanup)
        root = Path(tmp.name)
        corpus = [
            {"id": "a#b", "doc": "a", "title": "t", "breadcrumb": "x", "text": "fresh text"},
            {"id": "c#d", "doc": "c", "title": "t", "breadcrumb": "x", "text": "other text"},
        ]
        (root / "chat_aliases.json").write_text(json.dumps({
            "a#b": {"hash": b.section_hash("fresh text"), "aliases": ["an alias"]},
            "c#d": {"hash": "deadbeef", "aliases": ["stale alias"]},
        }), encoding="utf-8")
        merged = b.merge_aliases(corpus, b.load_aliases(root))
        self.assertEqual(merged, 1)
        self.assertEqual(corpus[0]["aliases"], ["an alias"])
        self.assertNotIn("aliases", corpus[1])  # a stale alias is worse than none
        self.assertEqual(b.problems(corpus), [])


class Generator(unittest.TestCase):
    """The offline alias generator: its parsing, cleaning and retry, without any model call."""

    @classmethod
    def setUpClass(cls):
        import importlib.util

        path = Path(__file__).resolve().parent.parent / "tools" / "gen_chat_aliases.py"
        spec = importlib.util.spec_from_file_location("gen_chat_aliases", path)
        cls.gen = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(cls.gen)

    def test_parses_json_even_from_a_fence_or_prose(self):
        self.assertEqual(self.gen.parse_aliases('```json\n{"aliases": ["a", "b"]}\n```'), ["a", "b"])
        self.assertEqual(self.gen.parse_aliases('Sure: {"aliases": ["a"]} hope that helps'), ["a"])
        self.assertIsNone(self.gen.parse_aliases("no json here"))
        self.assertIsNone(self.gen.parse_aliases('{"aliases": "not a list"}'))

    def test_cleaning_enforces_the_rules(self):
        kept = self.gen.clean_aliases(["good one", "bad — dash", "a" * 200, " ".join(["word"] * 13), "good one"])
        self.assertEqual(kept, ["good one"])

    def test_a_malformed_reply_is_retried_then_succeeds(self):
        replies = iter(["not json", "still not json", '{"aliases": ["third time lucky"]}'])
        section = {"id": "a#b", "title": "T", "breadcrumb": "B", "text": "text"}
        self.assertEqual(self.gen.generate(section, lambda messages: next(replies)), ["third time lucky"])

    def test_two_bad_replies_record_a_failure(self):
        self.assertIsNone(self.gen.generate({"id": "a#b", "title": "T", "breadcrumb": "B", "text": "t"}, lambda m: "nope"))


if __name__ == "__main__":
    unittest.main()
