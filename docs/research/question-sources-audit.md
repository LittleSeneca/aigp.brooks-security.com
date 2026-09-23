# AIGP question sources — licence and quality audit

Compiled 23 September 2026. Every licence claim below was verified by fetching the
repository's `LICENSE` file or the site's live terms page. Question counts were counted
from the source files, not taken from the README.

## Importable — licence permits a private, non-commercial study app

### 1. github.com/sanjaynandanj/aigp-exam-prep — the best find

| | |
|---|---|
| Questions | **185**, verified by counting `**Q<n>.**` stems: 20 baseline diagnostic + 85 mock exam + 4 × 20 domain quizzes |
| Answers | Full answer key with a **per-question rationale**, each tagged DI/DII/DIII/DIV |
| Format | 4 options each; ~30% scenario-based, including shared-fact-pattern scenario sets |
| Licence | **MIT** — verified `LICENSE`: "MIT License, Copyright (c) 2026 MarginX", plus an unofficial-resource disclaimer |
| Currency | Repo describes itself as "mapped to BoK v2.1 (2026)"; created 31 Jul 2026 |
| Source files | `practice/mock-exam.md`, `practice/baseline-diagnostic.md`, `practice/quiz-domain-{1..4}.md` |

The 85-question mock uses the domain mix **D I: 18 · D II: 21 · D III: 23 · D IV: 23** —
the same blueprint midpoints this app uses, so it is already calibrated the same way.

Rationale quality is at the level this project aims for. Example:

> **Q2 — D (DII).** The AI Act reaches third-country providers who place systems on the EU
> market or whose outputs are used in the EU. Establishment (A/C) is not required, and the
> Act's jurisdiction is independent of GDPR's (B).

That is: why the right answer is right, *and* why each distractor fails, with the domain tag.

> **Note:** the v2.1 update spec listed this repo as skipped, "low quality, outdated, or
> licence-blocked". On inspection none of those three hold — it is MIT, current, and
> well-written. It is worth revisiting. Attribution: retain the MarginX copyright notice.

### 2. github.com/mahfzal87/aigp-coach

- 147 question objects verified across `questions.ts` (39), `questions-extra.ts` (68),
  `questions-batch3.ts` (40), plus 32 flashcards. README claims 192.
- Licence: `LICENSE` is MIT **for source code**; the README adds that "study content is
  shared for personal, non-commercial study use." Importable for a private app.
- **Provenance caveat:** the README credits section admits some items are "adapted from
  AIGP study material that circulates freely among candidates," with untraceable original
  authorship (tagged `community`). Import the self-authored items only.

### 3. github.com/0brains/0pies

- ~233 embedded AIGP questions inside `gamification/2026 AIGP.html` (a self-contained game).
- Licence: **PolyForm Noncommercial 1.0.0** — permits copying, modification and
  non-commercial use. Requires the "Required Notice: Copyright 2026 0brains" line.
- Mixed quality: the questions are embedded in game markup, so extraction is fiddly.

### 4. github.com/KirthanaRupanagudi/AIGP-PREP

- MIT (Copyright (c) 2026 Keerthana). Only ~11 usable items — the rest of the curriculum
  is stubs. Low value; skip unless filling a specific gap.

## Link-only — do not copy

**GitHub repos with a question bank but no licence file** (no licence = all rights
reserved): `Wamika-collab/AIGP`, `thankcheeses/ai-governance-practice` (296 scenarios),
`certbasepro/iapp-certification-questions` (dump-flavoured), `Sidhe-is-me/aigp-practice-quiz`,
`jrwagner08-byte/aigp-study-app`, `caitlindoogan/AIGP_exam-materials_2025`,
`lmakoti/ai_governance_professional_iapp` (bundles IAPP's copyrighted PDFs — avoid),
`AustralianGit/AIGP-Course-Notes`, `citizendb/citizenDB.github.io`.

**Commercial / dump sites**, no open licence and terms forbid reproduction:
`open-exam-prep.com/practice/aigp` (200 Q; terms §4 gives a narrow personal-use carve-out
but §5 forbids scraping — treat as link-only), `certbase.pro`, `pass-harbor.com` (601 Q
claimed), `securitypracticetest.com`, `aigpplaybook.com` (250+ behind a paid mock),
`aigpexamstudy.com`, `cybercertprep.com`, `certempire.com`, `aigptest.com`, `examworthy.com`.

**Derivative of copyrighted material:** AnkiWeb deck `shared/info/219309327` ("based on the
IAPP AIGP Study Guide, First Edition"). Quizlet sets and Brainscape packs — terms prohibit
copying or scraping.

**Dump ecosystem — avoid entirely:** certshero, itexams, examtopics, certfun, examsvce,
certlibrary, certifiedumps, passcerthub, Privacy Bootcamp ($449). IAPP's Candidate Handbook
treats using real exam questions as cheating: results cancelled, certification revoked.

## Notes

- No CC-licensed AIGP question bank exists beyond `jasondmacleod/aigp-study-kit`
  (CC BY-NC-SA 4.0, already imported). A GitHub `license:cc-by` search returned nothing else.
- Reddit r/IAPP and r/cipp host discussion only, no question banks. The frequently
  recommended IBM course is general AI ethics, not AIGP prep.
- No university or free-course-provider AIGP question bank was found.

## Attribution lines required if imported

| Source | Required notice |
|---|---|
| `sanjaynandanj/aigp-exam-prep` | MIT — retain "Copyright (c) 2026 MarginX" |
| `mahfzal87/aigp-coach` | MIT — retain "Copyright (c) 2026 Ahmad Afzal"; content is personal/non-commercial only |
| `KirthanaRupanagudi/AIGP-PREP` | MIT — retain "Copyright (c) 2026 Keerthana" |
| `0brains/0pies` | "Required Notice: Copyright 2026 0brains"; non-commercial use only |
| `jasondmacleod/aigp-study-kit` (in use) | CC BY-NC-SA 4.0 — attribution + share-alike, non-commercial |
