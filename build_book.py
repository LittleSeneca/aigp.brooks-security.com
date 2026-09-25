#!/usr/bin/env python3
"""Generate book-data.js for the Book tab from the aigp-book.md manuscript.

The manuscript is the source of truth. This wraps it (plus the study plan
below) in a JS string so study.html can load it with a <script> tag, which
works from file:// as well as from the deployed site. The reader in
study.html splits it into pages at each '# ' and '## Chapter' heading.

Usage:
    python3 build_book.py           # write book-data.js
    python3 build_book.py --check   # exit 1 if book-data.js is stale or the
                                    # manuscript contains an em or en dash
"""
import json
import sys
from pathlib import Path

HERE = Path(__file__).parent

STUDY_PLAN = """# Before You Start

How to use this book and the rest of the app to prepare for the AIGP exam.

### 1. Read the exam blueprint first

Start with the IAPP **AIGP Body of Knowledge**, the official outline of everything the exam can test. Read it end to end so you know the shape of the territory before you dive into the source material.

[AIGP Body of Knowledge & Exam Blueprint (PDF)](https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt0d33152fd20bc134/AIGP_Cert%20BOK.pdf)

### 2. Read the primary sources in full

Then read each of these foundational documents **in their entirety**. The exam leans hardest on the EU AI Act and GDPR, but every one of these shows up. All are free unless marked.

**EU law**

- [EU AI Act: Regulation (EU) 2024/1689](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)
- [Digital Omnibus on AI: Regulation (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng)
- [GDPR: Regulation (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [EDPB Opinion 28/2024: AI models and the GDPR](https://www.edpb.europa.eu/system/files/2024-12/edpb_opinion_202428_ai-models_en.pdf)
- [Product Liability Directive: (EU) 2024/2853](https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng)
- [EU General-Purpose AI Code of Practice](https://digital-strategy.ec.europa.eu/en/policies/ai-code-practice)

**Standards and frameworks**

- [NIST AI Risk Management Framework (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf)
- [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/)
- [NIST Generative AI Profile (AI 600-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)
- [OECD AI Principles](https://oecd.ai/en/ai-principles)
- [ISO/IEC 22989: AI concepts and terminology](https://www.iso.org/standard/74296.html)

**Other AI-specific laws**

- [South Korea AI Basic Act](https://elaw.klri.re.kr/eng_service/lawView.do?hseq=71019&lang=ENG)
- [IAPP US State AI Governance Legislation Tracker](https://prod.iapp.org/media/pdf/resource_center/us_state_ai_governance_legislation_tracker.pdf)

**AI copyright and IP case law**

- [Thaler v. Perlmutter](https://www.supremecourt.gov/docket/docketfiles/html/public/25-449.html)
- [Getty Images v Stability AI (UK)](https://www.judiciary.uk/judgments/getty-images-v-stability-ai/)
- [Bartz v. Anthropic](https://www.courtlistener.com/docket/69058235/bartz-v-anthropic-pbc/)

### 3. Learn IAPP's vocabulary

The exam uses IAPP's own definitions, so skim its free glossary alongside the Flashcards. The global tracker gives one-page summaries of each jurisdiction's AI law. Everything in this list is free.

- [IAPP Key Terms for AI Governance (PDF)](https://prod.iapp.org/media/pdf/resource_center/key_terms_for_ai_governance.pdf)
- [IAPP Global AI Law and Policy Tracker (PDF)](https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt34a8e3844fb44942/global_ai_law_policy_tracker.pdf)
- [IAPP Certification Candidate Handbook v5.3.2](https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blteb8b5d531fd78971/IAPP-Certification_Handbook.pdf)
- [The Unofficial AIGP Resource Guide, Oliver Patel](https://oliverpatel.substack.com/p/the-unofficial-aigp-resource-guide)

### 4. Read the book, then work the Mind Map

Read this book straight through once. Then open the Mind Map tab, pick a section, and click its node. Read through that section's documentation in the drawer that opens, and open its sub-sections to go deeper. Then use the section's question and flashcard buttons to drill just that section in the Quiz and Flashcards.

### 5. Turn the whole map green

Repeat that for every section. Nodes color themselves by how you're scoring: grey (untested), then red, amber and green. When the entire map is lit up green, you've genuinely covered the material.

### 6. Take practice exams

Finally, go to the Test tab and sit a few timed exams under real conditions. The domain mix follows the blueprint, and some questions are "Select N" multi-selects with no partial credit, as on the real exam. **Once you're consistently scoring above 85%, you're ready to take the AIGP.**

- [What changed in BOK v2.1, Dr. Kyle David (free video)](https://www.youtube.com/watch?v=cmWGspcCdkc)
- [AIGP Study Kit](https://github.com/jasondmacleod/aigp-study-kit)
- [aigp-exam-prep (MarginX)](https://github.com/sanjaynandanj/aigp-exam-prep)
- [IAPP official practice exam](https://store.iapp.org/aigp-practice-exam-digital/)

Avoid "braindump" sites selling real exam questions. IAPP's candidate handbook treats using them as cheating.
"""


def build():
    book = (HERE / "aigp-book.md").read_text()
    # Study plan goes right after the title page, before "# Contents".
    title, rest = book.split("\n# Contents", 1)
    md = title.rstrip() + "\n\n" + STUDY_PLAN + "\n# Contents" + rest
    return md, "// Generated by build_book.py from aigp-book.md. Do not edit.\nconst BOOK_MD = " + json.dumps(md) + ";\n"


if __name__ == "__main__":
    md, js = build()
    out = HERE / "book-data.js"
    if "--check" in sys.argv:
        dashes = [n for n, l in enumerate(md.split("\n"), 1) if "—" in l or "–" in l]
        stale = not out.exists() or out.read_text() != js
        if dashes: print(f"em/en dash on lines {dashes[:10]}")
        if stale: print("book-data.js is stale: run python3 build_book.py")
        sys.exit(1 if dashes or stale else 0)
    out.write_text(js)
    print(f"Written {out} ({len(js):,} bytes)")
