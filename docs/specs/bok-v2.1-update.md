# BOK v2.1 update and free-resource import: Specification

**Goal:** Bring the study app in line with the current AIGP blueprint (BOK v2.1, effective 2 Feb 2026) and with 2026 law, and pull in every free resource worth having.

## In scope

1. **Fix content the law has made wrong**, across vault notes, flashcards and questions:
   - EU AI Act dates changed by the Digital Omnibus (Reg. (EU) 2026/1744, in force 27 Jul 2026): Annex III high-risk to 2 Dec 2027, Annex I to 2 Aug 2028, new Art. 5 bans, softened AI literacy duty. The exam may still use the original dates, so teach both ("as enacted" vs "as amended").
   - Colorado SB 24-205 never took effect; SB 26-189 replaced it (operative 1 Jan 2027).
   - AI Liability Directive withdrawn (Oct 2025); revised Product Liability Directive (EU) 2024/2853 adopted.
   - Case law now decided: Thaler (cert denied), Getty v. Stability (UK), Bartz v. Anthropic (settled).
2. **Blueprint to v2.1.**
   - Rewrite the blueprint note.
   - II.C becomes "AI-Specific Laws" (6-8 questions).
   - II.D drops NIST ARIA (the map node goes; the note stays in the vault as background) and gains ISO/IEC 42005 and the NIST AI RMF Playbook as nodes.
3. **New coverage.** Each topic gets a vault note in our own words, a map node, flashcards, and original questions:

   | Topic | Questions |
   |---|---|
   | South Korea AI Basic Act | ~15 |
   | US state and local AI laws: CO SB 26-189, TX TRAIGA, Utah, CA (SB 53, AB 2013, SB 942, CPPA ADMT rules, SB 243), NYC LL 144, IL (HB 3773, AI Video Interview Act, BIPA), NY RAISE | ~25 |
   | US federal law applied to AI: FTC Act s.5, ECOA/Reg B, FCRA, Title VII, FHA, TAKE IT DOWN Act, EO 14365 | ~12 |
   | ISO/IEC 42005 | ~12 |
   | Agentic AI governance | ~15 |
   | NIST AI RMF Playbook (note generated from NIST's public-domain JSON) | ~15 |
   | EU updates: Omnibus, PLD 2024/2853, EDPB Opinion 28/2024, CJEU SCHUFA and Dun & Bradstreet, GPAI guidelines, Art. 50 code | ~20 |
   | IP and copyright cases, EU text-and-data-mining opt-out | ~12 |
   | OECD classification framework and updated AI-system definition | ~8 |

4. **Import the AIGP Study Kit** (github.com/jasondmacleod/aigp-study-kit, CC BY-NC-SA 4.0):
   - 319 single-answer questions, including 54 scenario-set items with the scenario text prepended to each stem.
   - 17 multi-select ("select N") questions. The 5 ordering items are skipped, because the real exam doesn't use that format.
   - 20 drill questions.
   - 54 framework recall cards as a vault reference note.
   - Each item carries a `source` attribution, and the README gets a third-party content and licence section.
   - Near-duplicates of existing questions are dropped, and difficulty is assigned on import.
5. **App changes:**
   - Multi-select support in the Quiz and Test tabs: checkbox-style "select N" questions, scored all-or-nothing like the real exam.
   - Full Exam and Practice Quiz sample by blueprint domain weights (about 21/25/27/27 per 100).
   - The Guide lists every free source.
   - README, hardcoded counts and mind-map enrichments are updated for the new nodes and terms.
6. **Rebuild** `map-data.js` and `node-details.js` with zero structural warnings, then smoke-test the app in a browser.

## Out of scope / non-goals

- **Paid resources** (ISO 42005 full text, IAPP practice exam, textbooks): linked only.
- **IAPP Key Terms glossary text:** not copied in, because IAPP's terms allow personal use only. It is used to check the meaning of existing flashcards, and divergences are fixed in our own words.
- **Other free banks** (e.g. sanjaynandanj/aigp-exam-prep): skipped as low quality, outdated, or licence-blocked (see research).
- **Answer-length bias:** 64% of existing and 78% of kit questions have the longest option as the correct one. Rebalancing that is a separate follow-up pass. This update only keeps new questions under 35%.
- **Commit, push and PR:** changes stay on this branch until approved.

## Constraints

- Every new fact is verified against a primary source, or two independent secondary sources. Unverified claims are left out.
- House style applies:
  - scenario stems;
  - four substantive options with no filler;
  - explanations that say why each wrong option is wrong;
  - difficulty tiers Easy/Medium/Hard/Painful.
  - New items are held under 35% "longest option is correct".
- No copyrighted text is reproduced (IAPP, ISO, Wiley, law-firm summaries). Notes are written in our own words; statutes and EU texts may be quoted briefly.
- Imported kit items keep CC BY-NC-SA 4.0. The repo is private and non-commercial.

## Approach

- **Topic authoring:** runs in parallel, one agent per topic cluster, each writing to a staging area. Then review, dedupe, assign IDs (q-845 onward) and merge.
- **Kit import:** a script extracts, converts, dedupes, and assigns the area from each item's BOK code, followed by a review pass for accuracy and currency.
- **Map:** extend `NODES`, `HAND_PLACED` and `SELECTORS`, and rerun both generators until warnings are zero.

## Acceptance criteria

- [ ] No stale law remains: grep finds no "2 August 2026" high-risk date, no Colorado SB 24-205 as current law, no "proposed" AI Liability Directive, no Getty "pending".
- [ ] The blueprint note matches v2.1.
- [ ] The map shows II.C AI-Specific Laws with Korea and US nodes, and II.D with 42005 and the Playbook, and no ARIA node.
- [ ] Every new topic has a vault note, at least one flashcard leaf, and questions.
- [ ] The builds report 0 orphans, 0 childless topics, 0 coverage violations, and 0 questions without a term leaf.
- [ ] 20 simulated Full Exam draws all fall within the blueprint's domain ranges.
- [ ] Every question validates: 4 options (or 5 for multi-select), a valid answer letter (or letter set), a non-empty explanation, and a unique ID.
- [ ] Multi-select works in Quiz, Test and review, and scores all-or-nothing.
- [ ] The app loads with no console errors, and quiz, flashcards, test, mind map and guide all work.
