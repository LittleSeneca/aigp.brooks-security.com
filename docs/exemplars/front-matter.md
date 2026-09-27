> **Proposal, not yet in the manuscript.** This replaces the title page, Contents, About This Book, the company overview and the Introduction in `aigp-book.md`. Everything below this line is manuscript content; the line above is stripped at assembly. Splice point is the `\n# Contents` line that `build_book.py` splits on.

# Governing AI

## A Reference Companion to the IAPP AIGP Body of Knowledge

*Law and standards stated as of September 2026*

# Contents

- About This Book
- How to Read a Chapter
- About the AIGP Exam
- Part I: Foundations
    - Chapter 1: What AI Is, and Why It Needs Governance
    - Chapter 2: Ownership, Roles and the Value Chain
    - Chapter 3: Policy and Oversight Across the Life Cycle
- Part II: Laws, Standards and Frameworks
    - Chapter 4: Privacy Law Meets AI
    - Chapter 5: The Law That Was Already There
    - Chapter 6: The Law Written for AI
    - Chapter 7: Industry Standards and Tools
- Part III: Governing AI Development
    - Chapter 8: The Design File
    - Chapter 9: Training and Testing Data
    - Chapter 10: Release and Monitoring
- Part IV: Governing AI Deployment and Use
    - Chapter 11: Deciding to Deploy
    - Chapter 12: Assessing What You Adopt
    - Chapter 13: Operating, Monitoring and Retiring
- Where the Four Domains Meet
- Appendix A: Standards and Frameworks at a Glance
- Appendix B: Glossary

# About This Book

This is a reference for people preparing for the IAPP's Artificial Intelligence Governance Professional (AIGP) certification, and for anyone newly responsible for how an organization uses AI. It covers the four domains of the AIGP Body of Knowledge (BOK) v2.1 in order: foundations, then laws, standards and frameworks, then the governance of AI development, then the governance of AI deployment and use.

It is written to be read straight through once, and then used as a reference. Chapters follow the BOK's domains and competencies rather than the order in which a project happens to hit them, so the material accumulates: every later chapter reasons with the vocabulary and the pairings installed earlier.

**Every worked example is real.** Where a case is used, it is named, dated and linked, so you can read the primary source yourself. These are not invented scenarios. Cases are drawn from regulator decisions, court judgments, official reports and enforcement actions, and they are cited in each chapter's Further Reading. Where the exam tests a general principle, the book says so explicitly rather than letting one jurisdiction's facts stand in for a rule.

This is an unofficial study aid. It is not affiliated with or endorsed by IAPP. AIGP and IAPP are IAPP trademarks. Nothing here is legal advice: the cases show how real organizations and courts reasoned about particular facts, and decisions about your own obligations belong with qualified counsel.

## The two timing facts that affect everything

**BOK v2.1 was approved on 9 September 2025.** It sets the blueprint this book follows, and its domain weights, competency ranges and vocabulary are properties of that version. They may change when IAPP issues the next Body of Knowledge.

**The EU AI Act now exists in two versions.** The Digital Omnibus on AI (Regulation (EU) 2026/1744), in force since 27 July 2026, amended the Act as adopted (Regulation (EU) 2024/1689) and moved several of its dates. Wherever the two versions differ, this book labels the fact "as enacted" or "as amended by the Digital Omnibus on AI." The clearest case is the date from which the Annex III high-risk obligations apply: 2 August 2026 as enacted, 2 December 2027 as amended.

That matters for the exam. Version 2.1 was approved before the Omnibus was agreed, so a live exam item may be written against either version. A well-drafted stem names its anchor, such as "as originally enacted" or "as amended by the 2026 Digital Omnibus." Where it names none, the useful question is whether the fact being tested changed at all. Knowing both timelines, and which facts the Omnibus left untouched, is the safe preparation.

## Status and legal vocabulary

The book uses a fixed vocabulary for the status of a legal instrument, because the exam tests the difference.

| Term | Means | Example |
|---|---|---|
| Proposed | Put forward but not approved | The Commission's Digital Omnibus amendments to the GDPR, as at September 2026 |
| Draft | Published for comment before it is final | The EDPB's 2026 guidelines on anonymisation and web scraping |
| Withdrawn | Pulled back by the body that issued it | The Commission's proposed AI Liability Directive |
| On appeal | A court decision under review by a higher court | The leading European decisions on AI training and copyright |
| Adopted | Formally approved or enacted | Colorado's original AI Act, SB 24-205 |
| In force | Legally effective | Most of the EU AI Act |
| Applies from | In force, with obligations effective only from a later date | The Annex III high-risk obligations |

Adopted and in force are the two words that most need separating. A law can be adopted and never take effect, which is what happened to Colorado's SB 24-205.

## A caution about sector

One warning from the BOK shapes how to read every case in this book. Domain I is described as holding "regardless of industry, sector or size." An exam answer that assumes a bank, a hospital or a large enterprise is usually the wrong one.

That has a consequence for worked examples. A real case is bounded by its own facts: the law it was decided under, the jurisdiction, the sector and the role the organization held. A case about a lender illustrates lending, and a case about an employer illustrates employment. What transfers is the governance reasoning, not the legal conclusion. Where a chapter uses a sector-specific case to make a general point, it says so. Sector specifics belong to Domain II's sectoral laws and to the lifecycle domains, and this book flags them where they appear.

# How to Read a Chapter

Every chapter follows the same shape, so you always know where you are.

**A lead.** The chapter opens with what it settles and which distinctions the exam tests. Where the chapter draws on real cases, they are listed in a table with their citations, so you can see the evidence before the argument.

**Numbered teaching sections.** The body of the chapter, following the BOK's competencies. Bold marks a key term at its first defining use, and tables carry material that is genuinely tabular.

**Exam Focus.** The tested distinctions, traps and facts, one sentence each. Remarks about the exam live here rather than in the running text, so the prose stays clean and the exam-facing summary stays findable.

**Key Terms.** The chapter's important terms, each defined in the Glossary.

**Further Reading.** The official texts, standards, decisions and cases behind the chapter, each linked.

Three things are worth doing as you read. Note the **pairings**: a characteristic and the control that answers it, a legal role and the duty that attaches to it, a risk and the owner who answers for it. Most applied exam questions are a pairing with one half missing. Note the **status** of anything the book describes as proposed or draft, because a question may test whether you know it is not yet law. And note the **role** an organization holds under each regime, because one organization can be a developer, a provider, a deployer and a controller at the same time, and the duties divide by role.

# About the AIGP Exam

The exam is built on the IAPP's **Body of Knowledge**, which sets out what a candidate should be able to do in four domains, each divided into competencies. This book follows version 2.1, approved on 9 September 2025. It allocates the exam's 100 **scored items**, the questions that count toward your result, across the four domains as ranges rather than fixed numbers.

| Domain | Subject | Scored items | Part of this book |
|---|---|---|---|
| I | Foundations: what AI governance is, and the principles and pillars of a program | 16 to 20 | Part I (Chapters 1 to 3) |
| II | Laws, standards and frameworks | 19 to 23 | Part II (Chapters 4 to 7) |
| III | Governing AI development | 21 to 25 | Part III (Chapters 8 to 10) |
| IV | Governing AI deployment and use | 21 to 25 | Part IV (Chapters 11 to 13) |

Domain I is the smallest by question count but has the most downstream reach, because every later domain reasons with the vocabulary and principles it installs. Domain II is where the exam stops asking what AI governance is and starts asking what the law requires. The two lifecycle domains tie for the largest share, 42 to 50 items between them. Domain III covers how an organization runs the build. Domain IV, the most scenario-heavy part of the syllabus, covers how it chooses a system, adopts it and lives with it.

Each Part opener carries an **Exam at a Glance** table that breaks its domain into competencies with their question ranges, and lists what changed in version 2.1. The competency ranges do not add up to the domain totals, so learn each as published rather than trying to reconcile them.

The BOK places Domain I items mostly at the remember/understand and apply/analyze levels of Bloom's taxonomy, which is why definitional precision pays more in Domain I than anywhere else in the syllabus. The later domains ask more scenario questions, which is why the lifecycle parts of this book are built around decisions and their owners rather than definitions alone.
