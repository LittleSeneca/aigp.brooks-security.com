# AIGP Study

Self-contained study environment for the IAPP Artificial Intelligence Governance Professional (AIGP) exam: a quiz bank, flashcards, and a knowledge mind map that colors itself as you learn.

## Using it

Open [study.html](study.html) in a browser (no server needed — everything is vendored and offline-capable). Three tabs:

- **Quiz** — A unified bank of 621 questions with domain/difficulty/status filters. Progress saves to localStorage.
- **Flashcards** — 309 key terms with domain/area/status filters and ✓/✗ mastery rating.
- **Mind Map** — a radial tree mirroring the Obsidian vault in `Map/`: root → 4 domains → 12 knowledge areas → topics → key-term leaves. Nodes color by performance (grey untested, red → amber → green). Clicking a node opens its source notes and can filter the quiz/flashcards to just that node's material. Every question and card is tagged down to term leaves, so completing all of a node's leaves turns it green by definition.

Progress is per-browser and per-URL (localStorage): pick one way of opening the app and stick with it.

## Regenerating data

After editing `quiz-data.js`, `flashcard-data.js`, or the vault notes in `Map/`:

```
python3 build_map_tags.py      # map-data.js — node tree + question/flashcard tags
python3 build_node_details.py  # node-details.js — per-node source notes
```

Both print warnings if structural invariants break (childless topics, questions not reaching a term leaf, etc.). Hand-tune placements in `HAND_PLACED` in `build_map_tags.py`.

## Layout

| Path | What |
|---|---|
| `study.html` | The app (quiz + flashcards + mind map) |
| `quiz.html` | Older standalone quiz page |
| `quiz-data.js`, `flashcard-data.js` | Question bank and flashcards |
| `map-data.js`, `node-details.js` | Generated: mind map tree, tags, per-node notes |
| `build_map_tags.py`, `build_node_details.py` | Generators |
| `Map/` | Obsidian vault — knowledge-area notes, structured references, canvas |
