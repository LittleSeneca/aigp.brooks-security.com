# The Book without the story: Specification

**Goal:** Turn the Book tab from a narrative guide built on one fictional company into a sector-agnostic BOK reference companion. Every worked example becomes a real, citable case, so the reader can check any claim this book makes. Target 55,000 to 65,000 words, down from 93,218.

## Why

The manuscript is a textbook whose worked examples all come from one invented company, Larkspur Financial. That is a defensible design, and it is not what the Book should be.

Three measurements decided it.

| Block type | Words | Share |
|---|---:|---:|
| Teaching sections (1.1 to 13.6) | 44,771 | 48% |
| Chapter scenes, codas, The Record | 11,378 | 12% |
| Front and back matter (About, Larkspur at a Glance, Introduction, Conclusion) | 7,006 | 8% |
| Part openers | 4,639 | 5% |
| Appendix A chronology, Appendix C record | 3,541 | 4% |
| Exam Focus | 4,886 | 5% |
| Further Reading | 3,528 | 4% |
| Appendix D glossary | 12,882 | 14% |
| Key Terms, Appendix B | 2,329 | 2% |

Story totals 23,557 words, 25.3% of the manuscript. Material totals 69,661, 74.7%. Inside the thirteen chapters alone the split is sharper: 15% story, 85% material.

The story is nonetheless load-bearing, and this is the part that shapes the plan. The manuscript contains **721 references to "Chapter N"**, 173 references to numbered sections, and roughly 30% of all sentences in the teaching sections name a Larkspur entity. The case is not a wrapper around the material; it is the subject of many of the material's sentences:

> Norvane's unannounced version swap (Chapter 3) had already shown Larkspur that cost.

Deleting the scenes removes about a third of the story. The rest lives inside the teaching prose as worked examples. This is a rewrite of roughly 55,000 words of prose, not a deletion of 25% of a file.

The second reason is duplication. The Mind Map tab already delivers structured, non-narrative, per-node material with authored deep dives, sources, drill buttons and mastery colouring. A pure-materials book that does the same job is a worse copy of it. The Book has to be the artifact the Map structurally cannot be: the one you read in order, end to end, before you begin drilling.

### De-narrativizing is not enough on its own

Chapter 1 was rewritten in full as the exemplar (`docs/exemplars/chapter-1-what-ai-is.md`) and the result corrects the estimate. Removing the scene, the coda and The Record saves 629 words. Citing six real cases with their links costs roughly 700 back. The chapter lands at 3,344 words against an original 3,976, a 16% reduction.

Extrapolated across the manuscript, story removal and example replacement roughly cancel, leaving the book near 80,000 words rather than the 55,000 to 65,000 target. Reaching the target needs a **second pass that tightens the teaching prose itself**: merging sections that restate each other, cutting the four-to-six sentence wind-ups that introduce a table, and removing the "why this matters" paragraphs that repeat the Exam Focus bullets. That is a deeper edit than de-narrativizing, and it is the difference between a 25% cut and a 35% one.

## Decisions

1. **Shape.** BOK-aligned reference companion, 55,000 to 65,000 words. Lead with the tested distinction, follow with a short worked example, close with the exam trap where one exists. The Book is the read-in-order artifact; the Map stays the drill-by-node one.
2. **Examples.** Real and citable, always. Every case names its source and carries an http(s) link either inline or in that chapter's Further Reading.
3. **Appendices A and C.** Deleted. The chronology and the artifact list were scaffolding for a story that no longer exists.

## In scope

1. **Front matter, rewritten non-narrative.** Replace About This Book, Larkspur at a Glance and the Introduction with:
   - About This Book: what the BOK is, how the four domains map to chapters, how to read this alongside the Quiz, Flashcards and Mind Map, and the two timing facts about BOK v2.1 and the EU Digital Omnibus that affect every domain.
   - How to Read a Chapter: the repeating contract, stated once.
   - The Exam at a Glance tables currently inside each Part opener, gathered into the front matter or kept per chapter.
2. **Part openers, reduced.** Each Part opener keeps its Exam at a Glance competency table and its statement of the domain's question. Cut the story framing and the road map that narrates which character does what.
3. **Thirteen chapters, rewritten.** Keep the `## Chapter N:` heading form and the `### N.N` section numbering. Retitle only where the title is narrative.

   | # | Current title | Proposed |
   |---|---|---|
   | 1 | AI and the Case for Governance | What AI Is, and Why It Needs Governance |
   | 2 | Who Owns AI | Ownership, Roles and the Value Chain |
   | 3 | Rewriting the Rules: Policies Across the Lifecycle | Policy and Oversight Across the Life Cycle |
   | 4 to 13 | unchanged | unchanged |

4. **Per chapter, the block contract becomes:**

   ```
   ## Chapter N: <topical title>
   <lead: what this chapter settles, and the distinctions it is tested on>   ~150 words
   ### N.1 ... ### N.x    teaching prose, real worked examples
   ### Exam Focus          kept, minus the "treat Larkspur as generic" bullets
   ### Key Terms           kept verbatim
   ### Further Reading     kept, extended with every case cited in the chapter
   ```

   Deleted from every chapter: the dated scene opener, the narrative coda, The Record, and the story road map paragraph that names which character leads which chapter.

5. **De-narrativization rules.** Apply in order.
   - Every sentence naming a Larkspur entity or system is rewritten, not deleted. The payload usually survives as a sentence: *"Priya repeated her headline to Nadia"* becomes *"A claim of 97% accuracy is not a clearance."*
   - Every "Chapter N" pointer is either resolved into a self-contained statement or repointed to the new chapter title. No dangling references.
   - Time-relative phrases anchored to the story ("by November", "that autumn", "the December paste") are replaced with the general case or the real case date.
   - The MS Word check applies: no em dashes and no en dashes anywhere in the manuscript, because `build_book.py --check` fails on them.

6. **Back matter.**
   - Appendix B, Standards and Frameworks at a Glance: kept, renumbered to **Appendix A**.
   - Appendix D, Glossary: kept verbatim, renumbered to **Appendix B**. It holds 388 entries and **zero** entity references, so the body needs no editing.
   - Appendix A (chronology) and Appendix C (the record): deleted.
   - Every reference to "Appendix D" (13 Key Terms sections and the cross-references in Exam Focus) is repointed to Appendix B. Mechanical and verified by grep at assembly.
   - The closing section replaces the Conclusion: how the four domains interlock, no story callback. Titled "Where the Four Domains Meet."

7. **Title.** "The Record" is dropped. The book becomes *Governing AI: A Reference Companion to the IAPP AIGP Body of Knowledge*, keeping the "law and standards stated as of September 2026" line.

8. **Examples, sourced.** A working set, verified before use. Each is added to the citing chapter's Further Reading.

   | Case | Citable as | Used for |
   |---|---|---|
   | Moffatt v. Air Canada | 2024 BCCRT 149, decided 14 Feb 2024, CA$812.02 awarded | Confabulation; accountability not delegable to a model |
   | SyRI | Rechtbank Den Haag, 5 Feb 2020 | Group harm; opacity; data dependency |
   | FTC v. Rite Aid | FTC press release and consent order, Dec 2023 | Individual harm; autonomy; oversight failure |
   | Zillow Offers | Zillow Group Q3 2021 results, 2 Nov 2021 | Complexity; speed and scale; organizational harm |
   | Garante v. Luka Inc. (Replika) | Garante order, 10 Apr 2025, EUR 5m | Data protection by design; vulnerable users |
   | Arup deepfake transfer | Jan 2024, ~US$25m across 15 transactions | Misuse; information integrity |

   The OECD AI Incidents and Hazards Monitor and the IAPP US State AI Governance Legislation Tracker remain standing sources for cases added later.

## Out of scope / non-goals

- Changing the Quiz, Flashcards, Test or Mind Map tabs, or their generated data.
- Changing `parseBook()` or `buildBookToc()` in `study.html`. Keeping the `## Chapter N:` heading form means the reader, the pagination and the sidebar nesting all keep working untouched.
- Splitting `study.html`. It is 1,345 lines across eight concern blocks and would benefit from it, but the no-server, works-from-`file://` constraint means that is its own piece of work.
- Re-enriching the Mind Map. `node-details.js` and `enrichments/` are untouched.

## Constraints

1. `aigp-book.md` is the source of truth. `book-data.js` is generated by `build_book.py` and must be regenerated, never hand-edited.
2. `python3 build_book.py --check` exits non-zero on any em or en dash in the manuscript, and on a stale `book-data.js`.
3. `build_book.py` inserts the study plan between the title page and `# Contents`, splitting on `"\n# Contents"`. Both must survive.
4. The reader splits pages at `^# (.+)` and `^## (Chapter \d+: .+)`. Chapter headings must keep the `Chapter N:` prefix.
5. `BOOK_SKIP_SECS = ['Key Terms', 'Further Reading']` keeps those out of the sidebar. Harmless, leave it.
6. The deploy workflow stages an explicit file list into `_site/`. `book-data.js` is already on it.
7. Content is original except where the README's licence section says otherwise. Real case descriptions must be written in our own words and linked, not copied.

## Approach

1. Land the front matter and the chapter contract, with Chapter 1 rewritten in full as the exemplar.
2. Rewrite Part I (Chapters 1 to 3), then Part II (4 to 7), then Parts III and IV (8 to 13). One commit per part keeps the diff reviewable. Each chapter takes two passes: de-narrativize and source the examples, then tighten the teaching prose to the word target.
3. Delete Appendix A and Appendix C; write the closing section.
4. Regenerate and gate: `build_map_tags.py` is unaffected, so run `build_book.py` then `build_book.py --check` and `verify_enrichment.py`.
5. Open a PR. Human review, then merge.

## Acceptance criteria

- **Given** the rebuilt manuscript, **when** I grep it for `Nadia|Tom Ashby|Priya|Siobhan|Owen|Marcus|Dana|Evelyn|Larkspur|Clearline|Norvane|Brightlist|Scorecard`, **then** there are zero matches.
- **Given** the rebuilt manuscript, **when** I grep for `Chapter \d+` and `\d\.\d` cross-references, **then** every one resolves to a heading that exists.
- **Given** the rebuilt manuscript, **when** I run `python3 build_book.py --check`, **then** it exits 0 for both the dash rule and staleness.
- **Given** the rebuilt manuscript, **when** I run `python3 verify_enrichment.py`, **then** it exits 0, since the Mind Map is untouched.
- **Given** the rebuilt manuscript, **when** I count words, **then** the total is between 55,000 and 65,000.
- **Given** `study.html` loaded in a browser, **when** I open the Book tab, **then** the sidebar lists every Part, chapter and section, Previous and Next navigate, and every `#book/<id>/<sec>` deep link resolves.
- **Given** any worked example in the rebuilt book, **when** I look for its source, **then** the chapter's Further Reading contains an http(s) link for it.
- **Given** the deployed site after merge, **when** the workflow runs, **then** the `book-data.js` size check passes and the site returns 200.
