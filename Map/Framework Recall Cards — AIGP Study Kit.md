---
tags:
 - aigp/reference
 - aigp/recall
created: 2026-09-23
source: "AIGP Study Kit — Framework Recall Cards (github.com/jasondmacleod/aigp-study-kit), CC BY-NC-SA 4.0"
license: CC BY-NC-SA 4.0 (third-party content; see README)
related:
 - "[[AIGP Body of Knowledge — Exam Blueprint]]"
 - "[[AIGP Study Index]]"
---

# Framework Recall Cards — AIGP Study Kit

> Third-party study cards by the author of the free **AIGP Study Kit** ([jasondmacleod/aigp-study-kit](https://github.com/jasondmacleod/aigp-study-kit)), imported unmodified under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Unofficial; not affiliated with IAPP. Each section also appears in the mind map drawer of the matching node.

## NIST AI Risk Management Framework

*Voluntary, US, non-certifiable. Appears constantly.*

### The AI RMF's structure — what the BoK actually asks for

The BoK asks for the framework **and Playbook**, including **core functions, categories and subcategories**. The structure: **4 functions → 19 categories → 72 subcategories**. AI RMF 1.0 was released January 2023.

The **Playbook** is a voluntary companion offering **suggested actions, references and related guidance** for achieving the RMF's outcomes at subcategory level. Both the RMF and the Playbook are **voluntary** — there is no certification against either, which is the contrast with ISO/IEC 42001.

### The four AI RMF functions, and what each one does

GOVERN — cross-cutting. Culture, accountability structures, policies, roles, risk tolerance. The other three operate inside it.
MAP — context and framing. Purpose, stakeholders, intended use, risks identified before building.
MEASURE — analyze and quantify. Metrics, benchmarks, TEVV, tracking against tolerance.
MANAGE — act on risk. Prioritize, treat, respond to incidents, recover, communicate.

**Exam tell:** if the scenario is about *deciding what to do* about a known risk (retrain, roll back, accept), it's Manage. If it's about *establishing who decides*, it's Govern.

### Risk treatment options — and the one people forget

**Mitigate, avoid, transfer, accept.** Risk **acceptance is legitimate** — provided the decision is made by the authorized role and documented. Exam distractors often imply accepting risk is always wrong. It isn't; accepting it *silently* is.

### What ARIA is, and how it relates to the AI RMF

NIST's **Assessing Risks and Impacts of AI** program — a research initiative providing methods, metrics and testbeds to operationalize the RMF. It **supplements, it does not replace or supersede** the RMF. That's the trap.

**Scope note:** BoK v2.1 removed ARIA from the outline, so it is unlikely to be tested; recognise the name and move on.

## EU AI Act

*The single heaviest topic. Know tiers, roles, obligations, dates.*

### The four risk tiers, with examples of each

**Prohibited (unacceptable):** social scoring (by public *or* private actors), subliminal/manipulative techniques, exploiting vulnerabilities, untargeted facial-image scraping, emotion recognition in workplace/education, real-time remote biometric ID in public for law enforcement (narrow exceptions), biometric categorisation inferring sensitive traits, predictive policing based solely on profiling. *Added by the 2026 omnibus (not on the exam): AI-generated child sexual abuse material and non-consensual intimate deepfakes ('nudifiers').*
**High-risk:** Annex I (safety component of regulated products) + Annex III (employment, education, credit/essential services, law enforcement, migration, justice, biometrics, critical infrastructure).
**Limited:** chatbots, deepfakes → **transparency obligations** only.
**Minimal:** spam filters, AI in games → largely unregulated.

### The four actor roles, and what flips a deployer into a provider

**Provider** — develops and places on the market under its own name.
**Deployer** — uses the system under its own authority.
**Importer** — places a third-country system on the EU market.
**Distributor** — makes it available in the supply chain without being provider or importer.

A deployer **becomes a provider** if it: puts its own name/brand on a high-risk system, makes a **substantial modification**, or **changes the intended purpose**. Very common exam scenario.

### The high-risk obligation checklist

Risk management system · data governance (quality, bias examination) · technical documentation · automatic logging/record-keeping · transparency and instructions for use · **human oversight** · accuracy, robustness, cybersecurity · quality management system · **conformity assessment** → **CE marking** → EU database registration · post-market monitoring · serious incident reporting.

### What a non-EU provider must do, and does the Act reach them at all

Yes — the Act is **extraterritorial**. A non-EU provider of a **high-risk AI system** (Art 22) or of a **general-purpose AI model** (Art 54) must appoint an **authorized representative established in the Union**. Providers of other systems have no such duty, though the Act can still reach them, including where a system's output is used in the EU. 'The developer is outside the EU so nobody is covered' is always a wrong answer.

### GPAI obligations, and what triggers the systemic-risk tier

All GPAI: technical documentation, information for downstream providers, **copyright policy**, and a **sufficiently detailed summary of training content**.
GPAI with **systemic risk** (presumed at **10^25 FLOPs** training compute) adds: model evaluations, adversarial testing, systemic risk assessment and mitigation, serious incident reporting, cybersecurity protection.

### The implementation timeline — and the part that changed after the book

**Give these on the exam:** 1 Aug 2024 entry into force · 2 Feb 2025 prohibitions + AI literacy · 2 Aug 2025 GPAI rules, governance, penalties, notified bodies · **2 Aug 2026 Annex III high-risk requirements** + Art 50 transparency · 2 Aug 2027 Annex I (product-embedded) high-risk obligations + grace deadline for GPAI models already on the market before Aug 2025.

> [!warning] **Current law differs.** Regulation (EU) 2026/1744 (Digital Omnibus on AI) entered into force 27 July 2026 and deferred high-risk obligations: **Annex III → 2 December 2027**, **Annex I → 2 August 2028**. Prohibitions, GPAI rules and the 2027 GPAI grace period are unchanged, and Art 50 transparency still applies from 2 Aug 2026. The omnibus also softened **AI literacy** (Art 4): providers and deployers must now 'take measures to support' it rather than ensure it. It also added two new prohibitions (AI-generated CSAM and non-consensual intimate deepfakes). Your exam is written from BoK v2.1, which predates this — answer 2 Aug 2026 on test day, but know the real dates for work.

### The penalty tiers

Up to **€35M or 7%** of global annual turnover — prohibited practices.
Up to **€15M or 3%** — most other obligations (including high-risk and GPAI).
Up to **€7.5M or 1%** — supplying incorrect or misleading information to authorities.
Whichever is higher, except for SMEs and startups, where the cap is whichever is **lower** (Art 99(6)).

## South Korean AI Basic Act

*Named in the BoK beside the EU AI Act. The Wiley book does not cover it.*

### What it is, and why the BoK names it

Formally the **Act on the Development of Artificial Intelligence and the Establishment of a Foundation for Trust** — the AI Basic Act or AI Framework Act. Promulgated 21 January 2025, **took effect 22 January 2026** with its Enforcement Decree. It makes Korea the **second jurisdiction after the EU** with a comprehensive AI law, and the first in Asia-Pacific.

Its defining feature is pairing **industrial promotion** (funding, talent, clustering) with **binding obligations** — a 'minimum regulation' philosophy, deliberately less prescriptive than the EU model.

### Its core obligations and structure

**High-impact AI** — systems significantly affecting human life, safety or fundamental rights, in sectors including healthcare, energy, employment, finance, public services and education. Obligations: risk management, **impact assessments**, human oversight, documentation and explanation.
**Generative AI** — transparency duties including **labelling AI-generated content** and notifying users they are dealing with AI.
**Extraterritorial**, with a **domestic representative** required for foreign operators without a Korean establishment — the direct analogue of the EU's authorized representative.
**Enforcement:** administrative fines up to **KRW 30 million** (roughly USD 21,000) — dramatically lower than the EU's, and subject to a grace period of at least a year from January 2026.

### Korea vs the EU AI Act — the contrasts worth holding

**Shared:** risk/impact tiering driving proportionate duties; extraterritorial reach; a domestic-representative requirement; impact assessments; transparency for synthetic content.
**Different:** Korea has **no prohibited-practices tier** equivalent to the EU's; penalties are orders of magnitude smaller; the approach is framework legislation with detail delegated to enforcement decrees and MSIT guidance; and its high-performance compute threshold is **10^26 FLOPs** — about ten times the EU's 10^25 GPAI trigger.

## ISO/IEC standards

*Know which does what — the distinction is the question.*

### ISO/IEC 22989 vs 42001 — the distinction that gets tested

**22989** — concepts and **terminology**. A shared lexicon (bias, drift, transparency, autonomy). Prescribes nothing about how to build or manage AI. It defines an AI system broadly and treats symbolic/knowledge-based (rule) approaches as AI. **Exam framing:** the study guide's line that AI involves **perception, reasoning, or learning**, distinguishing it from simple automation and fixed business rules, is best sourced to the EU AI Act (Recital 12 and the Commission's Feb 2025 definition guidelines) rather than to 22989. Use the distinction on the exam, but don't cite 22989 for it at work.
**42001** — the **AI management system** standard. **Certifiable**, structured like ISO 27001 (Annex SL), so it integrates with existing ISMS/QMS. Leadership, planning, support, operation, evaluation, improvement.

**Tell:** 'independent certification' or 'auditable management system' → 42001. 'Inconsistent vocabulary across teams/contracts' → 22989.

### The three core ISO AI standards the BoK names — and the others

The Body of Knowledge names exactly three as core: **22989** (concepts and terminology), **42001** (certifiable AI management system), and **42005** (**AI system impact assessment**). If a question asks for guidance on conducting an impact assessment, the answer is **42005**.

Also worth recognizing: **23894** (AI risk management guidance), **5338** (AI lifecycle processes), **24028** (trustworthiness), **27001** (information security, which 42001 is built to sit alongside).

> [!warning] **Correction from the official BoK.** Earlier versions of this deck led with 23894. The BoK v2.1 names **22989, 42001 and 42005** as the core trio — 42005 is the one to know cold.

## OECD AI Principles

*The ethical substrate under nearly everything else.*

### The five value-based principles, and why they matter for the exam

1. Inclusive growth, sustainable development and wellbeing
2. Respect for the rule of law, human rights and democratic values, including fairness and privacy (2024 wording; the 2019 text said 'human-centred values and fairness')
3. Transparency and explainability
4. Robustness, security and safety
5. Accountability

**Non-binding**, adopted by 40+ countries, and the acknowledged influence on the EU AI Act and G7 positions. If a question asks which framework provided the *ethical foundation* that shaped later regulation, this is it.

## GDPR applied to AI

*Your strong area — but know the AI-specific hooks cold.*

### Article 22 — what it covers and what rights attach

Applies to decisions based **solely on automated processing** (including profiling) producing **legal or similarly significant effects**. Rights: **human intervention**, to **express a point of view**, and to **contest** the decision, plus meaningful information about the logic involved. Exceptions: necessary for contract, authorized by law, or explicit consent — and safeguards still apply.

### When a DPIA is required, and how it differs from a conformity assessment

**DPIA** (Art 35) — required where processing is likely to result in **high risk to individuals' rights and freedoms**: large-scale profiling, special-category data, systematic monitoring. A **GDPR** instrument protecting data subjects.
**Conformity assessment** — an **EU AI Act** instrument demonstrating a high-risk system meets Act requirements before CE marking. Different laws, different purposes. Don't swap them.

### Special-category data and inferences

Art 9 categories: racial/ethnic origin, political opinions, religious/philosophical beliefs, trade union membership, genetic, biometric (for unique ID), health, sex life/orientation. Processing is **prohibited unless an exception applies**.
**Key AI point:** an **inferred** attribute is still personal data, and if it reveals a special category it attracts Art 9 protection — even if the person never supplied it.

### Cross-border transfer requirements

Need a lawful transfer route: an **adequacy decision** (including the EU–US Data Privacy Framework for certified US recipients), or an Art 46 safeguard such as **SCCs** or **BCRs**. When relying on SCCs or BCRs, add a documented **transfer impact assessment** of destination-country law; no TIA is needed where adequacy applies. Art 49 derogations are a narrow last resort. Encryption and pseudonymization are **supplementary measures**, not substitutes. Notice alone never legitimizes a transfer.

### The Art 5 principles most often breached by AI projects

**Purpose limitation** — reusing data collected for one purpose to train a model for another is the single most common failure. Needs a compatibility assessment, fresh consent, or another lawful ground.
**Data minimization** — 'more data is better' collides directly with this.
**Accuracy**, **storage limitation**, **transparency**, and **accountability** round it out. Also know **Art 25** data protection by design and by default.

## US and sectoral law

*Outside the usual privacy lane — a likely gap.*

### The anti-discrimination statutes that bite on AI, and the doctrine that matters

**Title VII** (employment), **ECOA/Reg B** (credit, plus adverse action notices), **Fair Housing Act** (housing), **ADA** (disability), **FCRA** (consumer reports, accuracy, adverse action).

**Disparate treatment** = intentional. **Disparate impact** = facially neutral practice, discriminatory effect, **no intent required**. Proxy variables (postal code for race) are the classic AI fact pattern — excluding the protected attribute does not cure it.

### How the FTC reaches AI

**FTC Act §5** — unfair or deceptive acts or practices. Applied to overstated AI capability claims, undisclosed automated decision-making, and biased outcomes. Remedy to know: **algorithmic disgorgement** — ordering deletion of models and algorithms built on improperly obtained data.

### Product liability theories applied to AI

**Design defect** — the design itself is unreasonably dangerous.
**Manufacturing defect** — the product deviates from its intended design (e.g. a botched update or corrupted config); strict liability can attach even though the design was sound.
**Failure to warn** — inadequate instructions or risk disclosure.
Modernized regimes increasingly bring software and updates within scope.

### Copyright and the four fair-use factors

1. Purpose and character (is it **transformative**? commercial?)
2. Nature of the work
3. Amount and substantiality used
4. **Effect on the market** for the original

Factors 1 and 4 carry the most weight in AI disputes. **Public availability confers no licence.** Outputs substantially similar to protected expression undercut the defense. Also: US patent law requires a **human inventor**.

### State and city AI laws worth recognizing by name

**NYC Local Law 144** — the one the study guide teaches directly: **annual independent bias audits** of automated employment decision tools, **publication of audit results**, and **notice to candidates**. First of its kind in the US.
**Illinois BIPA** (biometric consent) and the AI Video Interview Act.
**California CCPA/CPRA**, including automated decision-making technology rules.
**Colorado SB21-169** — insurance; requires insurers to show models do not produce unfairly discriminatory outcomes.
Several states (California, Texas, New York) target malicious **deepfakes** in political and pornographic content.

> [!warning] **Don't rely on the Colorado AI Act (SB 24-205).** It was repealed before ever taking effect — Governor Polis signed SB 26-189, the Automated Decision-Making Technology Act, on 14 May 2026, replacing the duty of care, impact assessments and high-risk classification with a narrower disclosure regime effective 1 January 2027. The study guide never covered SB 24-205 anyway, so it is unlikely to be tested; know NYC Local Law 144 instead.

## Governance mechanics

*The structural answers to 'what should they do next'.*

### RACI — the rule that generates exam questions

**R**esponsible (does the work — can be many) · **A**ccountable (**exactly one**, answerable for the outcome) · **C**onsulted (two-way input) · **I**nformed (one-way updates).
Diffusing accountability across several people is always the flaw.

### Documentation artifacts and what each is for

**Model card** — intended use, training data, metrics, **limitations**, ethical considerations. Structured transparency for downstream deployers.
**System card** — the same at whole-system level.
**Datasheet for datasets** — provenance, collection method, composition, recommended uses.
**AI impact assessment** — harms to people and society.
**DPIA** — privacy risk. **Conformity assessment** — regulatory compliance. **Algorithmic audit** — independent evaluation.

### Governance maturity progression

Ad hoc → repeatable → **defined** → managed → optimized. The move that matters most: from ad hoc to defined, via **mandatory lifecycle checkpoints with required artifacts and approval gates**. Templates and tooling help you execute a standard; they don't create one.

**Proportionality:** governance must fit organizational size, sector, risk profile and culture. A structure too heavy to sustain produces skipped controls — worse than a lighter one that actually runs.

### Third-party and vendor risk — the terms that carry governance weight

**Audit rights** · documentation and technical information · **incident notification** duties · restrictions on the vendor **training on your data** · data provenance and licensing warranties · indemnities · IP ownership of outputs · exit and portability.

When a vendor won't disclose something, the governed move is to convert the gap into **contractual terms plus a documented, authorized risk acceptance** — not to walk away and not to ignore it. **Outsourcing the model never outsources accountability.** (Weighted more heavily in BoK v2.1.)

## Development & data

*~27% of scored items per BoK v2.1 (the Wiley guide says 29%). Governance overlay on the ML lifecycle.*

### Verification vs validation

**Verification** — was the system built **right**, against specification?
**Validation** — was the **right system** built for the real-world need and context?
Both sit inside **TEVV** (test, evaluation, verification, validation), before release.

### Sources of bias, by origin

**Historical** — the world (and the labels) were already biased; the model faithfully learns it. The recruitment-model-trained-on-past-hiring scenario.
**Representation** — subgroups under-sampled.
**Measurement** — the proxy chosen doesn't measure what you think.
**Aggregation** — one model forced across distinct subgroups.
**Evaluation** — benchmark unrepresentative.
**Automation/confirmation bias** — humans over-trusting or cherry-picking model output.

### Data lineage and provenance — what an auditor is actually asking for

**Provenance** = where data came from and under what terms. **Lineage** = every transformation from origin to a specific model version. Together they underpin reproducibility, licensing defense, and audit.
Not the same as minimization (how much you collect), access logs (who touched it), or retention (how long you keep it).

### Testing types beyond accuracy

**Subgroup/fairness testing** — aggregate accuracy routinely hides subgroup failure.
**Adversarial robustness** and **red teaming**.
**Explainability testing** — SHAP, LIME, counterfactuals.
Fairness metrics: demographic parity, equalized odds, disparate impact ratio — and they can conflict, so choosing one is a documented governance decision, not a technical default.

### Threshold setting — why it's a governance decision

Where you set a decision threshold determines **who bears which type of error** (false positives vs false negatives). That's a value tradeoff about relative harm, not a tuning parameter — so it needs documented rationale, an owner, and review.

### AI-specific security threats

**Data poisoning** (corrupting training data) · **model inversion** (reconstructing training data) · **membership inference** (was this record in training?) · **evasion/adversarial examples** · **prompt injection** · **model theft/extraction**.
These are the additions AI makes to a conventional security policy that already covers access control, encryption and patching.

## Deployment, monitoring & retirement

*~27% of scored items per BoK v2.1 (the Wiley guide says 28%). Scenario-heavy.*

### Deployment environments and when each wins

**Cloud** — scale and elasticity; less infrastructure control.
**On-premises** — maximum control and data residency; capital cost.
**Edge** — low latency, works offline, data never leaves the device. The answer whenever latency + outage tolerance + on-site sensitive data appear together.
**Hybrid** — split; check *where inference actually happens* before choosing it.

### Adaptation approaches — as-is, fine-tune, RAG, from scratch

**As-is / prompting** — fastest, no training, limited by context window.
**Fine-tuning** — adapts weights to domain; costly, and knowledge is frozen at training time.
**RAG** — retrieves from an external knowledge base **at inference**. Updates take effect immediately and outputs can **cite sources**. The answer for frequently-changing corpora.
**From scratch** — rarely proportionate.

### Drift types

**Data drift** — the **input distribution** shifts.
**Concept drift** — the **relationship between inputs and outputs** shifts; the world changed, so the same inputs now imply different outcomes.
**Model decay** — the general performance degradation over time.
Tell: 'input quality unchanged but behavior/patterns changed' → concept drift.

### Human oversight — the three configurations, and what makes it meaningful

**In the loop** — human approves each decision.
**On the loop** — human monitors and can intervene.
**Out of the loop** — fully autonomous.

Oversight is meaningful only when the human has **genuine authority and practical capacity to intervene** — time, information, training, and the power to override or halt. Bigger review samples and better dashboards improve visibility without conferring control.

### Release patterns

**Shadow** — runs on real traffic, outputs not served; compares a candidate against the incumbent with zero user risk.
**Canary** — small share of live traffic.
**Blue-green** — instant switch with rollback.
**A/B** — controlled comparison.

### Post-market monitoring vs a dashboard

A **documented, forward-looking plan established before release**: what real-world data is collected, how it's reviewed, by whom, what thresholds trigger action, and how **serious incidents** get reported. Dashboards are one input. Metrics without thresholds and a defined escalation path produce reports nobody acts on.

### Incident response order for an AI system

**Contain → assess → investigate → remediate → notify → learn.**
If personal data leaked, **breach assessment and statutory notification clocks run independently of the technical fix**. Never retrain first (destroys evidence), never disable logging (destroys the audit trail).

### Retirement done properly

**Controlled deactivation** · **preserve model versions, decision logs and documentation** per retention obligations · notify affected external stakeholders · document lessons learned · transition or migrate dependent processes.
Affected individuals may contest past decisions and regulators may examine them long after shutdown, so prompt deletion destroys exactly what you need.

### Secondary use — the trap

Approval attaches to a **use case in context**, not to a model in the abstract. Repurposing an approved model for a different decision, population, or consequence requires a **fresh impact assessment, risk review and approval**. Updating the model card documents the change; it doesn't authorize it.

## Blueprint calibration

*Straight from the official BoK v2.1 — this changes where you spend time.*

### How many questions come from each domain

The BoK publishes exact ranges. **Domain I: 16–20 · Domain II: 19–23 · Domain III: 21–25 · Domain IV: 21–25.** Midpoints total **85** of 100 items, which is where the 15 unscored pilot questions come from.

Shares of scored items: **I ≈ 21%, II ≈ 25%, III ≈ 27%, IV ≈ 27%**. Note Domain II is *larger* than the Wiley guide implies.

### Which single competency is worth the most marks

**IV.C — governing deployment and use: 9–11 items**, the largest block on the exam. Then **III.C** (release, monitoring, maintenance) at 8–10.

The smallest is **II.D at 3–5 items** — that is OECD, NIST RMF *and* ISO combined. Know them precisely, but do not spend a third of your time there; the marks live in Domains III and IV.

### What cognitive level the questions sit at

IAPP states questions focus on the **remember/understand** and **apply/analyze** levels of Bloom's Taxonomy — not evaluate or create. The verb opening each performance indicator signals the level.

Domain II indicators nearly all begin with **'Understand'**, so that domain is more definitional than scenario-based. Domains III and IV use *govern, perform, apply, identify, document, conduct, forecast* — applied questions.

### The question format the practice exams often miss

The official study guide includes a **MULTI-SELECT** example: 'select 3 of the 5 options — **no partial credit**.' Expect some. Read the required count, select exactly that many, and remember a near-miss scores the same as a blank.

IAPP also recommends a minimum of **30 hours** of preparation, and sells its own 100-question practice exam.

### BoK terminology to mirror on exam day

Use the BoK's own words where they differ from common usage:
• It says **'model or data drift'** — not 'concept drift'.
• It names **'i.e., 22989, 42001 and 42005'** — a closed list, not examples.
• It says **'AI system'** throughout, deliberately unified from 'AI model' in v2.1 — think system-level: infrastructure, human oversight, third parties, downstream impact.
• It treats **developer/provider/deployer/user** as labels for *tasks*, noting many organizations fill several roles at once.

## Test-day tactics

*Cheap marks and avoidable failures.*

### How to work the question set

~1.65 min per question (100 in ~165 min). **Answer everything** — no penalty for wrong answers, so never leave a blank. **Flag and return** is allowed; use it rather than stalling. Watch for **'BEST'**, **'MOST'**, **'FIRST'** — several options will be defensible and only one is best. Take the optional 15-minute break if offered; fatigue costs more than the time does.

### How to break a two-option tie

Prefer the answer that: is **proportionate** (neither ignores the risk nor bans the activity outright); **documents and assigns ownership**; acts **earliest in the lifecycle**; keeps a **human with real authority**; and treats accountability as **non-delegable**. Absolutes ('always', 'never', 'no need to') are usually wrong. Options that delete evidence, defer a live risk, or outsource responsibility are almost always wrong.

### Logistics that can cost you the fee

Government-issued **photo ID with a name matching your booking exactly**. For OnVUE remote: **check in 30 minutes early**, run the system test in advance, clear the room, and stay in webcam view. A **digital whiteboard** is provided — physical paper or pens are not permitted. In-person reschedules need **48 hours** notice; remote can be rescheduled up to 15 minutes after the start time. The exam must be sat within **one year of purchase** or the fee is forfeited.

> [!info] **Retake rule — now verified.** The IAPP Certification Candidate Handbook v5.3.2 (effective 1 June 2026) settles it: you cannot reschedule sooner than **7 days** after sitting, and you must buy a new exam once results post. A no-show consumes the attempt. Source: [IAPP Certification Candidate Handbook](https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blteb8b5d531fd78971/IAPP-Certification_Handbook.pdf). The earlier third-party "14 days" claims are wrong.
