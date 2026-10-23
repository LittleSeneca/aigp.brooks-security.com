#!/usr/bin/env python3
"""Measure the study chat's keyword search against tests/chat_eval.json.

    python3 tests/chat_search_eval.py                      # full corpus, aliases if present
    python3 tests/chat_search_eval.py --corpus seed        # the four-document seed
    python3 tests/chat_search_eval.py --no-aliases         # full corpus, alias cache ignored

It builds the corpus, imports the real BM25 `Index` from the chat Lambda's index.py (so the thing
measured is the thing that ships), and prints hit@1, hit@3 and hit@5 overall, by question type and by
AIGP domain, then lists every miss with the top three sections returned.

The Lambda file is found via CHAT_LAMBDA_DIR (default ../brooks-security.com/terraform/files/aigp-chat).

This is a report, not a gate: it always exits 0, so a regression shows up as a number in a PR rather
than a red build. Compare the three runs before and after a retrieval change.
"""
import argparse
import importlib.util
import json
import os
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
REPO = HERE.parent
sys.path.insert(0, str(REPO))
import build_chat_corpus as b  # noqa: E402

DEFAULT_LAMBDA_DIR = "../brooks-security.com/terraform/files/aigp-chat"


def load_index_class():
    path = Path(os.environ.get("CHAT_LAMBDA_DIR", DEFAULT_LAMBDA_DIR))
    if not path.is_absolute():
        path = (REPO / path).resolve()
    source = path / "index.py"
    if not source.exists():
        sys.exit(f"no Lambda at {source}; set CHAT_LAMBDA_DIR to the aigp-chat directory")
    spec = importlib.util.spec_from_file_location("aigp_chat_index", source)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.Index


def build_corpus(mode, aliases):
    if mode == "seed":
        return b.build(b.SEED_SOURCES)
    return b.build_all(include_aliases=aliases)


def source_kind(doc):
    return "book" if doc.startswith("book-") else ("enrichment" if doc.startswith("map-") else "notes")


def hit_at(ranked_ids, expected, k):
    return any(sid in expected for sid in ranked_ids[:k])


def rates(rows):
    n = len(rows)
    if not n:
        return (0.0, 0.0, 0.0, 0)
    return (sum(r["h1"] for r in rows) / n, sum(r["h3"] for r in rows) / n, sum(r["h5"] for r in rows) / n, n)


def line(label, rows):
    h1, h3, h5, n = rates(rows)
    return f"  {label:<14} {h1:>6.1%} {h3:>6.1%} {h5:>6.1%} {n:>4}"


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--corpus", choices=["seed", "full"], default="full")
    ap.add_argument("--no-aliases", action="store_true", help="ignore chat_aliases.json")
    ap.add_argument("--eval", type=Path, default=HERE / "chat_eval.json")
    args = ap.parse_args(argv)

    Index = load_index_class()
    corpus = build_corpus(args.corpus, not args.no_aliases)
    sections = {s["id"] for s in corpus}
    index = Index(corpus)
    with_aliases = sum(1 for s in corpus if s.get("aliases"))

    data = json.loads(args.eval.read_text(encoding="utf-8"))
    all_questions = data["questions"]
    # A question counts only if at least one of its expected sections is in this corpus. The seed
    # corpus holds four documents, so most questions are simply not answerable from it; scoring them
    # as misses would say nothing about the seed's retrieval quality.
    questions = [q for q in all_questions if any(e in sections for e in q["expected"])]
    absent = len(all_questions) - len(questions)
    label = f"{args.corpus}{' + aliases' if with_aliases else ''}"
    print(f"corpus: {len(corpus):,} sections, {with_aliases:,} with aliases ({label}); "
          f"{len(questions)} questions, top 5 returned")
    if absent:
        print(f"({absent} question(s) skipped: no expected section is in this corpus)")
    print()

    rows = []
    for q in questions:
        expected = q["expected"]
        ranked = [s["id"] for s in index.search(q["q"], 5)]
        rows.append({"q": q["q"], "type": q["type"], "domain": q["domain"],
                     "expected": expected, "ranked": ranked,
                     "h1": hit_at(ranked, expected, 1), "h3": hit_at(ranked, expected, 3), "h5": hit_at(ranked, expected, 5)})

    print(f"{'':<15} {'hit@1':>6} {'hit@3':>6} {'hit@5':>6} {'n':>4}")
    print(line("overall", rows))
    print("\nby question type:")
    for t in ("natural", "keyword", "term"):
        print(line(t, [r for r in rows if r["type"] == t]))
    print("\nby AIGP domain:")
    for d in ("I", "II", "III", "IV"):
        print(line(d, [r for r in rows if r["domain"] == d]))

    misses = [r for r in rows if not r["h5"]]
    print(f"\n{len(misses)} miss(es) at 5 (expected section not returned):")
    for r in misses:
        top = " | ".join(f"{index.sections[i]['id']}" for i in r["ranked"][:3]) or "(nothing)"
        print(f"  [{r['type']}/{r['domain']}] {r['q']}")
        print(f"      expected: {', '.join(r['expected'])}")
        print(f"      got:      {top}")
        print(f"      missed at 3: {[e for e in r['expected'] if e not in r['ranked'][:3]]}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
