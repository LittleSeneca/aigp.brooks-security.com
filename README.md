# AIGP Study

Self-contained study environment for the IAPP Artificial Intelligence Governance Professional (AIGP) exam. It is aligned to **BOK v2.1** (effective 2 February 2026) and to the law as of September 2026, and includes a quiz bank, flashcards, timed practice exams, and a knowledge mind map that colors itself as you learn.

## Using it

Open [study.html](study.html) in a browser. No server is needed: everything is vendored and works offline. There are five tabs:

- **Quiz**: a bank of 1,528 questions with domain, difficulty and status filters. 25 are "Select N" multi-select questions, scored all-or-nothing like the real exam.
- **Flashcards**: 388 key terms with domain, area and status filters, and ✓/✗ mastery rating.
- **Test**: timed Full Exam (100 questions, 3 hours) and Practice Quiz (25 questions, 1 hour).
  - Questions are drawn to the blueprint's domain weights (about 21/25/27/27 per 100), with each domain spread evenly across difficulty tiers.
  - Answers are only revealed when you submit.
- **Mind Map**: a tree mirroring the Obsidian vault in `Map/`: root → 4 domains → 13 knowledge areas → topics → key-term leaves.
  - Two views: a radial map, and an indented tree with a score column. Phones show only the indented tree.
  - Nodes color by performance: grey (untested), then red → amber → green.
  - Clicking a node opens a drawer on its card, inside its full chain of parent cards from AIGP down. Each card holds the node's notes, then a collapsed card for each child, nested down to the key terms. Cards get lighter the further they sit from the root. Opening a card moves the map's focus to that node, and closing it moves focus back up one level.
  - Each card's notes are authored: an at-a-glance summary, a long-form deep dive, why it matters for the exam, key points, and a Sources & Further Reading list linking the free primary sources it draws on. Below those sits a collapsed fold of the verbatim source notes from `Map/`.
  - AIGP's pinned title bar holds the close button and, on desktop, a button that widens the drawer over the whole map. Phones always show the drawer full width.
  - Each open card has two small buttons, labeled with the node's questions correct/total and terms mastered/total. They filter the Quiz or Flashcards to that node.
  - Every question and card is tagged down to a term leaf, so completing all of a node's leaves turns it green by definition.
- **Guide**: a step-by-step study plan, with links to every free primary source the BOK draws on.

Progress is saved in the browser (localStorage). On https://aigp.brooks-security.com an optional account (username and password, no email) syncs it across devices: each device keeps working offline and merges with the server in the background. The sync API (a Lambda and a DynamoDB table) lives in the brooks-security.com repo; see [docs/specs/cross-device-sync.md](docs/specs/cross-device-sync.md). Opened from disk, the app has no sync and progress stays per browser and per URL.

## Regenerating data

After editing `quiz-data.js`, `flashcard-data.js`, or the vault notes in `Map/`:

```
python3 build_map_tags.py      # map-data.js — node tree + question/flashcard tags
python3 build_node_details.py  # node-details.js — per-node source notes
```

Both print warnings if structural invariants break (childless topics, questions not reaching a term leaf, etc.). Hand-tune placements in `HAND_PLACED` in `build_map_tags.py`.

When NIST publishes a new AI RMF Playbook (it has said one will follow the AI RMF 1.0 revision), download https://airc.nist.gov/docs/playbook.json and regenerate the vault note:

```
python3 build_playbook_note.py playbook.json --retrieved YYYY-MM-DD -o "Map/NIST AI RMF Playbook — Structured Reference.md"
```

## Layout

| Path | What |
|---|---|
| `study.html` | The app (quiz, flashcards, test, mind map, guide) |
| `quiz-data.js`, `flashcard-data.js` | Question bank and flashcards |
| `map-data.js`, `node-details.js` | Generated: mind map tree, tags, per-node notes |
| `build_map_tags.py`, `build_node_details.py` | Generators |
| `build_playbook_note.py` | Builds the NIST AI RMF Playbook vault note from NIST's JSON |
| `enrichments/` | Authored per-node and per-term text for the mind map drawer. By-type files (`01-structure` … `10-bok-v2.1`) plus one file per BOK domain (`11-domain1.json`, …). Later files win, so a per-domain file overrides the by-type files for the nodes it covers. |
| `Map/` | Obsidian vault: knowledge-area notes, structured references, canvas |
| `docs/specs/` | Specifications for larger changes |

## Third-party content and licences

Most content is original to this project. The exceptions:

- **AIGP Study Kit** by Jason MacLeod ([github.com/jasondmacleod/aigp-study-kit](https://github.com/jasondmacleod/aigp-study-kit)), licensed [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
  - 341 of the questions come from it. Each carries a `source` field naming its origin.
  - Some were lightly corrected on import for accuracy and currency.
  - `Map/Framework Recall Cards — AIGP Study Kit.md` reproduces its recall cards.
  - These items, and any changes made to them, remain under CC BY-NC-SA 4.0: non-commercial use, with attribution and share-alike.
- **aigp-exam-prep** by MarginX ([github.com/sanjaynandanj/aigp-exam-prep](https://github.com/sanjaynandanj/aigp-exam-prep)), licensed MIT.
  - 185 of the questions come from it. Each carries a `source` field naming its origin.
  - They are imported as written, apart from area, difficulty and ID assignment; explanations were added to the 20 baseline-diagnostic items, which shipped without one.
  - MIT requires the copyright and permission notice to travel with the material: "Copyright (c) 2026 MarginX. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction... The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software." The notice is repeated in each item's `source` field.
- **Tabler Icons** ([tabler.io/icons](https://tabler.io/icons)), licensed [MIT](https://github.com/tabler/tabler-icons/blob/main/LICENSE), Copyright (c) 2020-2026 Paweł Kuna. The icons in `study.html` are copied from it, with the notice alongside them.
- **NIST AI RMF Playbook** (a US government work, public domain). `Map/NIST AI RMF Playbook — Structured Reference.md` is generated from NIST's published JSON.
- **IAPP materials** (the BOK, the study guide, and the Key Terms for AI Governance glossary) are © IAPP. They are summarized and linked here, not copied. Flashcard definitions were checked against IAPP's glossary for meaning but are written in this project's own words.

This is an unofficial study aid, not affiliated with or endorsed by IAPP. AIGP® and IAPP® are IAPP trademarks.
