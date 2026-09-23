# AIGP Study

Self-contained study environment for the IAPP Artificial Intelligence Governance Professional (AIGP) exam. It is aligned to **BOK v2.1** (effective 2 February 2026) and to the law as of September 2026, and includes a quiz bank, flashcards, timed practice exams, and a knowledge mind map that colors itself as you learn.

## Using it

Open [study.html](study.html) in a browser. No server is needed: everything is vendored and works offline. There are five tabs:

- **Quiz**: a bank of 1,344 questions with domain, difficulty and status filters. 25 are "Select N" multi-select questions, scored all-or-nothing like the real exam. Progress saves to localStorage.
- **Flashcards**: 388 key terms with domain, area and status filters, and ✓/✗ mastery rating.
- **Test**: timed Full Exam (100 questions, 3 hours) and Practice Quiz (25 questions, 1 hour).
  - Questions are drawn to the blueprint's domain weights (about 21/25/27/27 per 100), with each domain spread evenly across difficulty tiers.
  - Answers are only revealed when you submit.
- **Mind Map**: a radial tree mirroring the Obsidian vault in `Map/`: root → 4 domains → 13 knowledge areas → topics → key-term leaves.
  - Nodes color by performance: grey (untested), then red → amber → green.
  - Clicking a node opens its source notes and can filter the quiz or flashcards to that node's material.
  - Every question and card is tagged down to a term leaf, so completing all of a node's leaves turns it green by definition.
- **Guide**: a step-by-step study plan, with links to every free primary source the BOK draws on.

Progress is stored per browser and per URL (localStorage), so pick one way of opening the app and stick with it.

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
| `enrichments/` | Authored per-node and per-term text for the mind map drawer |
| `Map/` | Obsidian vault: knowledge-area notes, structured references, canvas |
| `docs/specs/` | Specifications for larger changes |

## Third-party content and licences

Most content is original to this project. The exceptions:

- **AIGP Study Kit** by Jason MacLeod ([github.com/jasondmacleod/aigp-study-kit](https://github.com/jasondmacleod/aigp-study-kit)), licensed [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/).
  - 341 of the questions come from it. Each carries a `source` field naming its origin.
  - Some were lightly corrected on import for accuracy and currency.
  - `Map/Framework Recall Cards — AIGP Study Kit.md` reproduces its recall cards.
  - These items, and any changes made to them, remain under CC BY-NC-SA 4.0: non-commercial use, with attribution and share-alike.
- **NIST AI RMF Playbook** (a US government work, public domain). `Map/NIST AI RMF Playbook — Structured Reference.md` is generated from NIST's published JSON.
- **IAPP materials** (the BOK, the study guide, and the Key Terms for AI Governance glossary) are © IAPP. They are summarized and linked here, not copied. Flashcard definitions were checked against IAPP's glossary for meaning but are written in this project's own words.

This is an unofficial study aid, not affiliated with or endorsed by IAPP. AIGP® and IAPP® are IAPP trademarks.
