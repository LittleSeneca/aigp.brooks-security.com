---
tags:
 - aigp/reference
 - aigp/legal
 - aigp/eu-ai-act
created: 2024-07-12
updated: 2026-09-23
source: "Regulation (EU) 2024/1689 (OJ L, 12.7.2024), as amended by Regulation (EU) 2026/1744 (Digital Omnibus on AI, OJ L, 24.7.2026)"
aliases:
 - EU AI Act
 - Regulation 2024/1689
 - Artificial Intelligence Act
wikilinks:
 - "[[AIGP Body of Knowledge — Exam Blueprint]]"
 - "[[The EU AI Act]]"
 - "[[Privacy and Data Protection Law]]"
 - "[[GPAI Code of Practice — Key Provisions]]"
---

# EU AI Act 2024 — Key Provisions

> **Regulation (EU) 2024/1689** of the European Parliament and of the Council of 13 June 2024 — *The Artificial Intelligence Act*
> Published in OJ: 12 July 2024 | Entry into force: 1 August 2024 | General date of application: 2 August 2026 (Art. 113)
> **Amended by Regulation (EU) 2026/1744 (Digital Omnibus on AI)**, signed 8 July 2026, published 24 July 2026, **in force 27 July 2026**. The Omnibus moved the high-risk dates: Annex III systems from **2 December 2027**, Annex I product systems from **2 August 2028**. See §12 (timeline, as enacted vs as amended) and §13 (what else changed).

> [!warning] Exam currency
> BOK v2.1 was approved on 9 September 2025, before the Omnibus existed. Exam items written against the original text may still treat **2 August 2026** as the high-risk date and **2 August 2027** as the Annex I date. Learn both columns in §12 and read each question for its anchor ("as enacted" vs "as amended").

---

## 1. Overview & Scope (Arts. 1–3)

| Element | Detail |
|---|---|
| **Purpose** | Improve internal market functioning; promote human-centric, trustworthy AI; ensure high level of protection for health, safety, and fundamental rights (Art. 1) |
| **Scope** | Applies to providers, deployers, importers, distributors, product manufacturers, authorised reps, and affected persons in the Union (Art. 2); extra-territorial reach for outputs used in the EU |
| **Excluded** | Military/defence/national security; scientific R&D; personal non-professional use; free & open-source (unless high-risk or Art. 5/50) (Art. 2) |
| **AI System Definition** | Machine-based system with varying autonomy, exhibiting adaptiveness, that infers from input how to generate outputs (predictions, content, recommendations, decisions) influencing physical/virtual environments (Art. 3(1)) |

---

## 2. Risk Classification — The 4-Tier Pyramid

| Tier | Category | Approach | Key Articles |
|---|---|---|---|
| **🔴 Unacceptable Risk** | Prohibited AI Practices | **Banned entirely** | Art. 5 |
| **🟠 High Risk** | High-Risk AI Systems | **Strict pre-market & post-market requirements** | Arts. 6–7, 8–15, 16–27, Annex III |
| **🟡 Limited Risk** | Transparency Obligations | **Transparency/disclosure duties only** | Art. 50 |
| **🟢 Minimal / No Risk** | All other AI | **No obligations** (voluntary codes of conduct encouraged) | Art. 95 |

---

## 3. Prohibited AI Practices (Art. 5) — Unacceptable Risk 🔴

| # | Prohibited Practice | Key Detail |
|---|---|---|
| (a) | **Subliminal / manipulative / deceptive techniques** | Materially distorting behaviour, causing or likely to cause **significant harm** |
| (b) | **Exploitation of vulnerabilities** | Targeting age, disability, or social/economic situation to materially distort behaviour causing significant harm |
| (c) | **Social scoring** | Evaluation/classification of persons over time based on social behaviour/personality, leading to detrimental treatment in unrelated contexts or unjustified/disproportionate treatment |
| (d) | **Individual criminal risk assessment** | Predicting risk of criminal offence based *solely* on profiling or personality traits (human assessment based on objective facts still permitted) |
| (e) | **Untargeted facial recognition database scraping** | Creating/expanding facial recognition databases via untargeted scraping from internet or CCTV |
| (f) | **Emotion recognition** | Inferring emotions in **workplace and education** settings (medical/safety exceptions apply) |
| (g) | **Biometric categorisation** | Categorising individuals based on biometric data to deduce race, political opinions, trade union membership, religious beliefs, sex life, or sexual orientation |
| (h) | **Real-time remote biometric identification** in publicly accessible spaces for law enforcement | **Prohibited except** for three strictly defined purposes (Art. 5(1)(h)(i)–(iii)), requiring prior judicial authorisation |
| (ba) *(added by the 2026 Omnibus)* | **Non-consensual intimate imagery** | AI that generates or manipulates realistic images, video, audio or similar material of an identifiable person's intimate parts or of that person in sexually explicit activity, without their explicit consent. **Applies from 2 December 2026** |
| (bb) *(added by the 2026 Omnibus)* | **Child sexual abuse material** | AI that generates or manipulates material within Art. 2(c) and (e) of Directive 2011/93/EU. **Applies from 2 December 2026** |

> **Count:** as enacted, Art. 5(1) lists **eight** practices, (a)–(h), all applicable from 2 February 2025. As amended by the 2026 Omnibus it lists **ten**; the two new points apply from 2 December 2026 (Art. 113(a) as amended).
> **Scope of (ba)/(bb) (new Art. 5(1a)–(1b)):** *placing on the market* is caught only where that output is the system's intended purpose, or where it is a reasonably foreseeable, reproducible outcome that the system lacks reasonable safeguards to prevent. *Use* is caught only where the deployer uses the system for that purpose. Editing that does not increase exposure or alter the sexual nature of existing material is not "manipulation".

> **Exception to Art. 5(1)(h):** Real-time RBI permitted only for: (i) targeted search for victims/missing persons, (ii) prevention of imminent threat to life/terrorist attack, (iii) localisation of suspects for crimes in Annex II (punishable by ≥4 years). Requires **prior judicial authorisation** (Art. 5(3)) and fundamental rights impact assessment (Art. 27).

---

## 4. High-Risk AI Systems 🟠

### 4.1 Classification Rules (Arts. 6–7)

A system is **high-risk** if it meets **either**:

| Pathway | Condition | Article |
|---|---|---|
| **Pathway 1 — Product Safety** | AI is a safety component of, or is itself a product covered by Annex I harmonisation legislation, AND the product requires third-party conformity assessment | Art. 6(1) |
| **Pathway 2 — Annex III Use Case** | AI system falls within one of the 8 areas listed in Annex III | Art. 6(2) |

> **Derogation (Art. 6(3)):** An Annex III system is **NOT high-risk** if it does NOT pose significant risk to health/safety/fundamental rights — e.g., performs a narrow procedural task, improves previously completed human activity, detects decision-making patterns without replacing human assessment, or performs preparatory tasks. However, **if the system performs profiling, it is ALWAYS high-risk** (Art. 6(3) para 3).
>
> **Paper trail:** a provider relying on Art. 6(3) must document its assessment before placing the system on the market and register it in the EU database (Arts. 6(4), 49(2)). As amended by the 2026 Omnibus, registration continues but asks for less: the summary of grounds and the list of Member States (Annex VIII §B points 7 and 9) were deleted.

### 4.2 Annex III — 8 High-Risk Areas

| # | Area | Examples |
|---|---|---|
| 1 | **Biometrics** (where permitted) | Remote biometric identification, biometric categorisation by sensitive attributes, emotion recognition |
| 2 | **Critical Infrastructure** | Safety components in management of digital infrastructure, road traffic, water/gas/heating/electricity supply |
| 3 | **Education & Vocational Training** | Admission/access determination, learning outcome evaluation, education level assessment, monitoring prohibited student behaviour |
| 4 | **Employment & Workers' Management** | Recruitment/selection, decisions affecting work relationships (promotion, termination), task allocation, performance monitoring/evaluation |
| 5 | **Essential Services & Benefits** | Eligibility for public benefits/healthcare, creditworthiness/credit scoring, life/health insurance risk assessment & pricing, emergency call triage/dispatch |
| 6 | **Law Enforcement** (where permitted) | Victim risk assessment, polygraphs, evidence reliability evaluation, offender/re-offender risk assessment, profiling during criminal investigations |
| 7 | **Migration, Asylum & Border Control** | Polygraphs, risk assessment for migration/security/health, asylum/visa application examination, detection/identification of persons |
| 8 | **Administration of Justice & Democratic Processes** | Judicial research/interpretation of facts and law, influencing election/referendum outcomes or voting behaviour |

---

## 5. Requirements for High-Risk AI Systems (Arts. 8–15)

| Requirement | Article | Key Provisions |
|---|---|---|
| **Risk Management System** | Art. 9 | Continuous iterative process throughout lifecycle: identify, estimate, evaluate, and mitigate risks to health/safety/fundamental rights. Residual risk must be acceptable. Testing prior to market placement. |
| **Data & Data Governance** | Art. 10 | Training/validation/testing datasets must be relevant, sufficiently representative and, to the best extent possible, free of errors and complete in view of the intended purpose (Art. 10(3)). Governance for design choices, collection, preparation, bias examination, and gap identification. Special category data processing for bias detection permitted under strict safeguards (as enacted: Art. 10(5); as amended by the 2026 Omnibus: Art. 10(5) is deleted and the rule moves to the new **Art. 4a**, see §13). |
| **Technical Documentation** | Art. 11 | Drawn up before market placement, kept up to date. Must demonstrate compliance per Annex IV (general description, development process, monitoring/functioning details). SMEs may use simplified form. |
| **Record-Keeping (Logging)** | Art. 12 | Automatic logging over system lifetime. Must record events relevant for risk identification, post-market monitoring facilitation, and operation monitoring. Specific requirements for biometric systems. |
| **Transparency & Information to Deployers** | Art. 13 | Operation must be sufficiently transparent for deployers to interpret output. Instructions for use must include: provider identity, capabilities/limitations, accuracy/robustness metrics, known risks, input specifications, human oversight measures, etc. |
| **Human Oversight** | Art. 14 | Systems designed so natural persons can effectively oversee them. Oversight measures built-in or identified for deployer implementation. Humans must be able to understand, monitor, interpret, override/reverse, and intervene/stop the system. Biometric identification requires **2-person verification** (except LE/migration where disproportionate). |
| **Accuracy, Robustness & Cybersecurity** | Art. 15 | Appropriate levels of accuracy, robustness, cybersecurity throughout lifecycle. Resilience to errors/faults/inconsistencies. Feedback loop mitigation. Protection against unauthorised third-party exploitation of vulnerabilities. |

---

## 6. Operator Obligations

### 6.1 Provider Obligations (Art. 16)

- Ensure compliance with Section 2 requirements
- Indicate name/address on system
- Maintain Quality Management System (Art. 17)
- Keep technical documentation (Art. 18) — **10 years**
- Keep automatically generated logs (Art. 19) — **≥6 months**
- Undergo conformity assessment before market placement (Art. 43)
- Draw up EU Declaration of Conformity (Art. 47)
- Affix CE marking (Art. 48)
- Register in EU database (Art. 49)
- Take corrective actions and notify authorities (Art. 20)
- Cooperate with competent authorities (Art. 21)

### 6.2 Deployer Obligations (Art. 26)

- Use systems per instructions for use
- Assign human oversight to competent natural persons
- Ensure input data is relevant and representative
- Monitor operation and inform providers of risks
- Keep logs (≥6 months)
- Inform workers' representatives before workplace deployment
- Public authorities must register in EU database (Art. 49)
- Conduct fundamental rights impact assessment (Art. 27 — for bodies governed by public law, private entities providing public services, and credit/insurance use cases)
- Inform natural persons they are subject to high-risk AI decisions

### 6.3 Importer Obligations (Art. 23)

- Verify conformity assessment completed, technical documentation drawn up, CE marking affixed, authorised representative appointed
- Not place non-conforming systems on market
- Indicate name/address on system
- Keep documentation for **10 years**
- Cooperate with authorities

### 6.4 Distributor Obligations (Art. 24)

- Verify CE marking, EU declaration, instructions for use present
- Verify provider/importer compliance with identification obligations
- Not make non-conforming systems available
- Take corrective actions / cooperate with authorities

### 6.5 Quality Management System (Art. 17)

Must include documented policies/procedures for:
- Regulatory compliance strategy & conformity assessment
- Design, design control, design verification
- Development, quality control, quality assurance
- Examination, test, validation procedures
- Technical specifications & standards
- Data management systems
- Risk management system (per Art. 9)
- Post-market monitoring (per Art. 72)
- Serious incident reporting (per Art. 73)
- Communication with authorities, notified bodies, operators
- Record-keeping systems
- Resource management
- Accountability framework

---

## 7. Transparency Obligations (Art. 50) — Limited Risk 🟡

| Obligation | Applies To | Requirement |
|---|---|---|
| **Interaction disclosure** | Providers of AI systems interacting directly with natural persons | Inform persons they are interacting with an AI system (unless obvious) |
| **Synthetic content marking** | Providers of AI systems generating synthetic audio, image, video, or text | Outputs must be marked in machine-readable format and detectable as AI-generated |
| **Emotion/biometric categorisation notice** | Deployers of emotion recognition or biometric categorisation systems | Inform exposed natural persons of the system's operation |
| **Deep fake disclosure** | Deployers of AI generating/manipulating image, audio, video content constituting a deep fake | Disclose artificial generation/manipulation (artistic/satirical works: limited disclosure) |
| **AI-generated text disclosure** | Deployers publishing AI-generated text to inform the public on matters of public interest | Disclose artificial generation (unless human review/editorial control) |

> Information must be provided in a **clear and distinguishable manner at the latest at the time of first interaction or exposure** (Art. 50(5)).

> **When:** Art. 50 applies from **2 August 2026** under both the original and the amended text. As amended by the 2026 Omnibus, generative systems already on the market before that date have until **2 December 2026** to add Art. 50(2) marking (Art. 111(4)). The voluntary **Code of Practice on Marking and Labelling** (final 10 June 2026) and the Commission's Art. 50 guidelines (20 July 2026) support compliance; see §14.

---

## 8. General-Purpose AI (GPAI) Models (Arts. 51–56)

### 8.1 Classification (Arts. 51–52)

| Category | Criteria |
|---|---|
| **GPAI Model** | AI model displaying significant generality, capable of competently performing a wide range of distinct tasks (Art. 3(63)) |
| **GPAI Model with Systemic Risk** | (a) High-impact capabilities based on technical tools/benchmarks; OR (b) Commission designation ex officio or via scientific panel alert. **Presumed** when cumulative training computation > **10²⁵ FLOPS** (Art. 51(2)). |

### 8.2 Obligations — All GPAI Model Providers (Art. 53)

| Obligation | Detail |
|---|---|
| **Technical documentation** | Draw up and keep up to date (Annex XI) — for AI Office and national competent authorities upon request |
| **Information for downstream providers** | Provide information enabling understanding of capabilities/limitations and compliance (Annex XII), without prejudice to IP/trade secrets |
| **Copyright policy** | Put in place policy to comply with EU copyright law, including respecting opt-outs under Art. 4(3) of Directive (EU) 2019/790 |
| **Training content summary** | Draw up and make publicly available a sufficiently detailed summary of content used for training |
| **Authorised representative** | Providers from third countries must appoint an authorised rep in the Union (Art. 54) |
| **Compliance demonstration** | May rely on codes of practice (Art. 56) or harmonised standards; alternatively demonstrate alternative adequate means |

> **Open-source exception** (Art. 53(2)): Obligations (a) and (b) above do NOT apply to free and open-source models whose parameters/weights/architecture/usage info are publicly available — **unless** the model presents systemic risk.

### 8.3 Additional Obligations — GPAI with Systemic Risk (Art. 55)

| Obligation | Detail |
|---|---|
| **Model evaluation** | Conduct and document adversarial testing (red teaming) using standardised protocols; identify and mitigate systemic risks |
| **Risk assessment & mitigation** | Assess and mitigate possible systemic risks at Union level, including their sources |
| **Serious incident tracking** | Track, document, and report serious incidents and corrective measures without undue delay to the AI Office |
| **Cybersecurity** | Ensure adequate level of cybersecurity protection for the model and its physical infrastructure |

### 8.4 Codes of Practice (Art. 56)

- AI Office to facilitate drawing up of codes of practice covering Arts. 53 and 55
- Codes to be ready by **2 May 2025**
- If not finalised by **2 August 2025**, Commission may provide common rules via implementing acts
- **Legal effect:** a code is a way to *demonstrate* compliance until a harmonised standard is published; it does not give a **presumption of conformity**. That comes from a harmonised standard once its reference is in the OJ (Arts. 40(1), 53(4), 55(2)), or from common specifications the Commission adopts by implementing act (Art. 41(3)), in each case to the extent they cover the obligations. Non-adherents must show "alternative adequate means".
- **Status:** the GPAI Code of Practice was published 10 July 2025; the Commission and the AI Board confirmed it adequate on 1 August 2025. See [[GPAI Code of Practice — Key Provisions]].
- **As amended by the 2026 Omnibus**, Art. 56(6) has the Commission (taking utmost account of the Board's opinion) assess the codes' adequacy and publish that assessment. The replaced paragraph no longer contains the old sentence letting the Commission give a code "general validity" by implementing act.

---

## 9. Conformity Assessment, CE Marking & Registration

| Element | Article | Key Detail |
|---|---|---|
| **Conformity Assessment** | Art. 43 | Based on internal control (Annex VI) or QMS + technical documentation assessment by notified body (Annex VII). Notified body assessment required for Annex III, point 1 (biometrics) unless harmonised standards applied. |
| **EU Declaration of Conformity** | Art. 47 | Issued by provider; contents per Annex V |
| **CE Marking** | Art. 48 | Affixed to system/packaging/documentation; subject to general principles of Regulation (EC) 765/2008 |
| **EU Database Registration** | Art. 49 | Providers register high-risk AI systems before market placement. Deployers who are public authorities also register. Information per Annex VIII. |
| **Post-Market Monitoring** | Art. 72 | Providers establish and document post-market monitoring system proportionate to nature and risks |
| **Serious Incident Reporting** | Art. 73 | Providers report serious incidents to the market surveillance authority as soon as they establish a causal link (or its reasonable likelihood), and at the latest within **15 days** of becoming aware; **10 days** where a person died; **2 days** for a widespread infringement or a serious disruption of critical infrastructure (Art. 73(2)-(4)). A deployer that identifies a serious incident informs the provider first, then the importer or distributor and the authority (Art. 26(5)) |

---

## 10. Governance (Arts. 64–70)

| Body | Role |
|---|---|
| **AI Office** (within Commission) | Central enforcement of GPAI rules (Chapter V); coordinates governance; facilitates codes of practice. **As amended by the 2026 Omnibus (Art. 75(1))**, it is also *exclusively* competent for (a) AI systems built on a GPAI model where the model and system come from the same provider or group, with carve-outs (Annex I products, Annex III point 2 critical infrastructure, certain law-enforcement, border and financial-institution systems, justice uses), and (b) AI systems that are or sit inside a DSA-designated very large online platform or search engine. As enacted, Art. 75(1) already let it supervise systems built on a provider's own GPAI model. The new Arts. 75a–75d spell out its investigation, inspection, commitment, non-compliance and fining procedure. |
| **European Artificial Intelligence Board** | Composed of Member State representatives; advises Commission; coordinates national authorities |
| **Scientific Panel** | Independent experts providing qualified alerts on systemic risks from GPAI models (Art. 90). **60 experts appointed 1 June 2026**, two-year terms |
| **National Competent Authorities** | Market surveillance and notification at Member State level; enforce against all AI systems not reserved to the AI Office |
| **Advisory Forum** | Multi-stakeholder body providing technical expertise. **Appointed 1 June 2026** (two-year terms); the EU Fundamental Rights Agency, ENISA and the standardisation bodies hold permanent seats |
| **European Data Protection Supervisor** | Supervises Union institutions' compliance |

---

## 11. Enforcement & Penalties 🚨

### 11.1 Fine Tiers for Operators (Art. 99)

| Tier | Violation | Max Fine | Article |
|---|---|---|---|
| **Tier 1** 🔴 | Non-compliance with **prohibited AI practices** (Art. 5) | **€35 million** or **7%** of worldwide annual turnover (whichever higher) | Art. 99(3) |
| **Tier 2** 🟠 | Non-compliance with operator/notified body obligations (Arts. 16, 22, 23, 24, 26, 31, 33, 34, 50) | **€15 million** or **3%** of worldwide annual turnover (whichever higher) | Art. 99(4) |
| **Tier 3** 🟡 | Supplying **incorrect, incomplete, or misleading information** to notified bodies/competent authorities | **€7.5 million** or **1%** of worldwide annual turnover (whichever higher) | Art. 99(5) |

> **SME/Startup provision (Art. 99(6)):** For SMEs including start-ups, each fine is capped at the **lower** of the percentage or fixed amount.
> **Small mid-caps (new Art. 99(6a), 2026 Omnibus):** for SMCs, the Tier 2 and Tier 3 fines (Art. 99(4) and (5)) are also capped at the lower figure. The SMC cap does **not** cover Tier 1 prohibited-practice fines, whereas the SME cap covers all three tiers.

### 11.2 GPAI Model Provider Fines (Art. 101)

Art. 101 was carved out of the 2 August 2025 start date, so these fines apply only from **2 August 2026**, when the Commission's GPAI enforcement powers began. Models placed on the market before 2 August 2025 have until 2 August 2027 to comply (Art. 111(3)).

Commission may impose fines on GPAI model providers of up to **€15 million or 3%** of worldwide annual turnover for:
- Infringement of Regulation provisions
- Failure to comply with document/information requests
- Failure to comply with requested measures
- Failure to provide model access for evaluation

### 11.3 Union Institutions (Art. 100)

- Prohibited practice violations: up to **€1,500,000**
- Other violations: up to **€750,000**
- Enforced by European Data Protection Supervisor

---

## 12. Implementation Timeline 📅 (Art. 113, as enacted and as amended)

> [!warning] Two legal states
> The **"as enacted"** column is Regulation (EU) 2024/1689 as published in July 2024, which the BOK v2.1 exam (approved September 2025) was written against. The **"as amended"** column is the law after the Digital Omnibus on AI, Regulation (EU) 2026/1744, in force 27 July 2026. Where an exam item gives no anchor, the original dates may be the intended answer.

| Milestone | As enacted (Reg. 2024/1689) | As amended by the 2026 Digital Omnibus (Reg. 2026/1744) |
|---|---|---|
| Publication / entry into force | 12 Jul 2024 / 1 Aug 2024 | Unchanged |
| Chapters I–II: definitions, AI literacy (Art. 4), prohibitions (a)–(h) | 2 Feb 2025 | Unchanged. The softened Art. 4 wording applies from 27 Jul 2026 |
| Codes of practice ready (Art. 56(9)) | 2 May 2025 | Unchanged (GPAI Code published 10 Jul 2025) |
| Chapter V (GPAI), Ch. III §4 (notified bodies), Ch. VII (governance), Ch. XII (penalties, except Art. 101), Art. 78 | 2 Aug 2025 | Unchanged |
| Commission guidelines on Art. 6 high-risk classification (Art. 6(5)) | By 2 Feb 2026 | Deadline missed; draft published 19 May 2026; final expected by end of 2026 |
| **General date of application** | 2 Aug 2026 | **Still 2 Aug 2026** for Art. 50 transparency duties and for the Commission's GPAI enforcement powers, including **Art. 101 fines** |
| Omnibus in force; Arts. 102–110 (sectoral amendments) apply | — | 27 Jul 2026 |
| New prohibitions: intimate imagery and CSAM (Art. 5(1)(ba)–(bb)) | — | **2 Dec 2026** |
| Art. 50(2) machine-readable marking for generative systems **already on the market before 2 Aug 2026** | 2 Aug 2026 (no separate grace period) | **2 Dec 2026** (new Art. 111(4)) |
| At least one national AI regulatory sandbox operational (Art. 57(1)) | 2 Aug 2026 | **2 Aug 2027** |
| GPAI models placed on the market before 2 Aug 2025 (Art. 111(3)) | 2 Aug 2027 | Unchanged |
| **Annex III high-risk systems** (Ch. III §§1–3, incl. Art. 26 deployer duties and Art. 27 FRIA) | 2 Aug 2026 | **2 Dec 2027** (Art. 113(c)(i)) |
| **Annex I / Art. 6(1) product-embedded high-risk systems** | 2 Aug 2027 | **2 Aug 2028** (Art. 113(c)(ii)) |
| Legacy high-risk systems intended for public authorities (Art. 111(2)) | 2 Aug 2030 | Unchanged |
| AI components of large-scale EU IT systems, Annex X (Art. 111(1)) | 31 Dec 2030 | Unchanged |

**Other deadlines the Omnibus added:** Commission delegated acts on limiting duplicated requirements for Annex I Section A products (Art. 2(13)), by 2 Aug 2027. Guidelines on how the Act fits with Annex I sectoral law (Art. 96(1)(g)), by 1 Aug 2027. Post-market monitoring plan guidance and template (Art. 72(3)), by 2 Sep 2027. Existing Annex I notified bodies must apply for AI Act designation by 28 Jan 2028 (Art. 43(3)).

**Legacy high-risk systems.** Art. 111(2) now keys the transition to "the date of application of Chapter III" rather than to 2 August 2026. A high-risk system already on the market before its category's high-risk date is caught only if its design later changes significantly. Recital 177 treats "significant change" as equivalent in substance to "substantial modification".

> **Summary, as enacted:** prohibitions Feb 2025 → GPAI, governance, penalties Aug 2025 → general application and Annex III high-risk Aug 2026 → Annex I high-risk Aug 2027.
> **Summary, as amended:** prohibitions Feb 2025 → GPAI Aug 2025 → transparency and Commission GPAI enforcement Aug 2026 → new bans and legacy marking Dec 2026 → sandboxes Aug 2027 → Annex III high-risk Dec 2027 → Annex I high-risk Aug 2028.

---

## 13. The Digital Omnibus on AI (Regulation (EU) 2026/1744): What Changed

**Procedure:** Commission proposal 19 November 2025 (part of the digital omnibus package); provisional political agreement 7 May 2026; Parliament position 16 June 2026; Council decision 29 June 2026; signed 8 July 2026; published in the OJ 24 July 2026; in force 27 July 2026. The Omnibus also amends Regulation (EU) 2018/1139 (civil aviation) and Regulation (EU) 2023/1230 (machinery). The final text uses **fixed dates**, not a trigger tied to standards being ready.

| Topic | As enacted | As amended by the 2026 Omnibus | Provision |
|---|---|---|---|
| **AI literacy** | Providers and deployers must "take measures to ensure, to their best extent, a sufficient level of AI literacy" of staff | Providers and deployers must **take measures to support** AI literacy of staff and others acting for them. No guaranteed level for any individual. The Commission and Member States must support compliance (especially for SMEs); the Commission publishes practical examples; the Board adopts recommendations | Art. 4 (replaced) |
| **Special-category data for bias detection** | High-risk providers only, "strictly necessary", with safeguards | New **Art. 4a**. Para 1 keeps the high-risk provider rule (conditions (a)–(f): no effective alternative such as synthetic or anonymised data; re-use limits and pseudonymisation; access controls; no transfer to other parties; deletion once the bias is corrected; ROPA records why it was necessary). Para 2 extends it to providers and deployers of **other AI systems and models** and to deployers of high-risk systems, under the same conditions. It creates no duty to do bias testing, and GDPR still applies on top | Art. 4a (new); Art. 10(5) deleted; Art. 2(7) |
| **Prohibitions** | Eight practices, from 2 Feb 2025 | Adds AI generating **non-consensual intimate imagery** of identifiable people and **CSAM**, from **2 Dec 2026** | Art. 5(1)(ba)–(bb), 5(1a)–(1b); Art. 113(a) |
| **High-risk dates** | Annex III 2 Aug 2026; Annex I 2 Aug 2027 | Annex III **2 Dec 2027**; Annex I **2 Aug 2028** | Art. 113(c) |
| **Legacy generative systems** | Art. 50(2) from 2 Aug 2026 | Generative systems placed on the market before 2 Aug 2026 have until **2 Dec 2026** to add machine-readable marking | Art. 111(4) |
| **Registration of Art. 6(3) "not high-risk" systems** | Provider registers in the EU database with the Annex VIII §B data, incl. a summary of grounds and the Member States concerned | **Still registers** (Art. 49(2) unchanged), but Annex VIII §B points 7 (summary of grounds) and 9 (Member States) are deleted | Annex VIII §B |
| **Small mid-caps (SMCs)** | SME-only simplifications | Several SME measures extended to SMCs (Recommendation (EU) 2025/1099): simplified technical documentation form (Art. 11(1)), proportionate QMS (Art. 17(2)), priority sandbox access, and fine caps for Art. 99(4)–(5) fines (Art. 99(6a)). The simplified QMS route in Art. 63 extends from microenterprises to all SMEs | Arts. 1(2)(g), 3(14a)–(14b), 11, 17, 63, 99 |
| **Sandboxes** | National sandbox operational by 2 Aug 2026 | By **2 Aug 2027**. The AI Office may run a **Union-level sandbox** for systems under its competence, with priority access for SMEs and SMCs | Art. 57(1), 57(3a) |
| **AI Office competence** | Exclusive powers over GPAI *models* (Art. 88); systems built on a provider's own GPAI model were monitored under Art. 75(1) | **Exclusive competence** over (a) AI systems built on a GPAI model by the same provider or group (carve-outs: Annex I products, Annex III point 2, certain law-enforcement, border and financial-institution systems, justice), and (b) AI in DSA-designated very large online platforms and search engines. New powers include investigations, on-site inspections, binding commitments, non-compliance decisions, fines under Art. 99(3)–(7), and periodic penalty payments of up to 5% of average daily turnover | Art. 75(1)–(2a), Arts. 75a–75d |
| **FRIA and DPIA** | FRIA may be complemented by an existing DPIA | Deployer may cross-reference or reuse relevant DPIA sections; the AI Office must provide a questionnaire template, including an automated tool | Art. 27(4)–(5) |
| **Codes of practice** | AI Office and Board assess adequacy; Commission may give a code general validity by implementing act | The Commission, taking utmost account of the Board, assesses and publishes adequacy (Art. 56(6)). For Art. 50 codes it assesses adequacy and may adopt common rules by implementing act if a code is inadequate (Art. 50(7)) | Arts. 50(7), 56(6) |
| **Products and machinery** | Machinery Directive listed in Annex I Section A (full AI Act high-risk regime) | Machinery moved to Annex I **Section B** (Machinery Regulation 2023/1230), where AI requirements flow through sectoral delegated acts applying by 2 Aug 2028. Non-safety "user assistance, optimisation, convenience" functions are not safety components (Art. 6(1a)–(1c)). CRA-compliant systems are deemed to meet Art. 15 cybersecurity (Art. 42(3)) | Annex I; Arts. 2(2), 6, 42 |
| **Notified-body codes** | — | New **Annex XIV** lists the codes that define a notified body's scope, including a code for emerging technologies that names "Agentic AI" (a scoping label, not new agent obligations) | Art. 30(2); Annex XIV |

> **What did not change:** the four-tier structure, the penalty ceilings (35/7, 15/3, 7.5/1), the GPAI obligations and their dates, the 10²⁵ FLOP systemic-risk presumption, and the general application date of 2 August 2026.

---

## 14. Implementation Status: Guidance, Codes, Standards and Enforcement (as of September 2026)

| Instrument | Date | Status and key content |
|---|---|---|
| Guidelines on prohibited AI practices | 4 Feb 2025 | Non-binding Commission interpretation of Art. 5; authoritative interpretation rests with the CJEU |
| Guidelines on the AI system definition | 6 Feb 2025 | Non-binding; explain Art. 3(1) |
| GPAI Code of Practice | Published 10 Jul 2025; adequacy confirmed 1 Aug 2025 | Voluntary; three chapters (Transparency, Copyright, Safety & Security); 21 signatories plus xAI for Safety & Security only. See [[GPAI Code of Practice — Key Provisions]] |
| GPAI guidelines (scope of obligations) | 18 Jul 2025 | **Indicative GPAI criterion:** training compute above 10²³ FLOP and able to generate language, text-to-image or text-to-video. **Systemic risk presumed** above 10²⁵ FLOP (Art. 51(2)). A downstream **modifier becomes the provider** if the modification uses more than **one third** of the original model's training compute. Legacy models need not be retrained or unlearned where that is impossible or disproportionate |
| Template for the public summary of training content (Art. 53(1)(d)) | 24 Jul 2025 | Mandatory template for the GPAI training-data summary |
| Draft guidance and template on serious incidents for high-risk systems (Art. 73) | 26 Sep 2025 (consultation to 7 Nov 2025) | Draft; aligned with the OECD AI Incidents Monitor |
| Serious-incident reporting template for systemic-risk GPAI (Art. 55(1)(c)) | 4 Nov 2025 | Final template; supports Commitment 9 of the GPAI Code |
| Art. 112 review of Art. 5 and Annex III | May 2026 | Flagged the intimate-imagery and CSAM gap (closed by the Omnibus); otherwise too early for changes |
| Draft guidelines on high-risk classification (Art. 6) | 19 May 2026 (consultation to 23 Jul 2026) | **Still a draft**; final expected by end of 2026. The original 2 Feb 2026 deadline was missed |
| Scientific Panel (60 experts) and Advisory Forum | Appointed 1 Jun 2026 | Two-year terms; the panel focuses on GPAI, systemic risk, model classification and evaluation methods |
| Code of Practice on Marking and Labelling (Code of Practice on Transparency of AI-generated Content) | Final 10 Jun 2026 | Voluntary; Section 1 covers providers (marking and detection), Section 2 covers deployers (labelling deepfakes and public-interest text). Judged adequate by the Commission and AI Board; about 190 signatories by end of July 2026; EU icons available for labels |
| Guidelines on Art. 50 transparency obligations | 20 Jul 2026 | Commission guidance on chatbots, marking, deepfake and text disclosure, applicable from 2 Aug 2026 |
| **EN 18286:2026** (QMS for EU AI Act purposes) | Published July 2026 | First CEN-CENELEC standard supporting the Act, aimed at Art. 17. A presumption of conformity arises only once its reference is published in the OJ (Art. 40(1)) |
| Enforcement | From 2 Aug 2026 | The AI Office enforces GPAI obligations with fines of up to 3% or €15m. Its first tool is "technical compliance dialogues". It runs a complaint tool, a whistleblower tool (Art. 87 applies Directive (EU) 2019/1937), and a downstream-provider complaints channel. **No AI Act fine has been publicly announced**; online reports of "first fines" are not supported by any Commission source |

---

## 15. Key Roles & Definitions (Art. 3)

| Role | Definition | Art. 3 |
|---|---|---|
| **Provider** | Develops an AI system/GPAI model, or has one developed and places it on the market / puts into service under own name/trademark | (3) |
| **Deployer** | Uses an AI system under its authority (except personal non-professional activity) | (4) |
| **Importer** | Established in Union; places on market a system bearing name/trademark of third-country entity | (6) |
| **Distributor** | In supply chain (not provider/importer) making AI system available on Union market | (7) |
| **Authorised Representative** | Established in Union; mandated by third-country provider to perform obligations under the Regulation | (5) |
| **Operator** | Umbrella term: provider, product manufacturer, deployer, authorised representative, importer, or distributor | (8) |

---

## 16. Relationship to GDPR & Other Union Law

- The Act is **complementary to and does not affect** GDPR (Regulation 2016/679), LED (Directive 2016/680), DSA (Regulation 2022/2065), and consumer/product safety law (Art. 2(5)–(9))
- As amended by the 2026 Omnibus, Art. 2(7) says the Act does not affect the GDPR, EUDPR, ePrivacy Directive or LED "without prejudice to Articles 4a and 59", the two provisions that themselves supply a legal basis for certain processing
- Data subjects retain all GDPR rights, including rights related to **solely automated individual decision-making, including profiling** (Recital 10)
- High-risk AI systems involving personal data must comply with both the AI Act **and** GDPR
- Special category data processing for bias detection: as enacted under strict Art. 10(5) safeguards; as amended under **Art. 4a**, which also reaches non-high-risk systems and models. GDPR conditions apply in addition (see [[GDPR — AI-Relevant Provisions]])
- FRIA and DPIA: a deployer may reuse or cross-reference its GDPR Art. 35 DPIA in the Art. 27 FRIA (Art. 27(4) as amended)

---

## 17. Article Quick-Reference Matrix

| Topic | Key Articles |
|---|---|
| Definitions | Art. 3 |
| AI Literacy | Art. 4 (replaced by the 2026 Omnibus) |
| Special-category data for bias detection | Art. 4a (new, 2026 Omnibus; replaces Art. 10(5)) |
| **Prohibited Practices** | Art. 5 (points (ba)–(bb) added by the 2026 Omnibus) |
| High-Risk Classification | Arts. 6–7, Annex III |
| Risk Management | Art. 9 |
| Data Governance | Art. 10 |
| Technical Documentation | Art. 11 (+ Annex IV) |
| Record-Keeping / Logging | Art. 12 |
| Transparency (High-Risk) | Art. 13 |
| Human Oversight | Art. 14 |
| Accuracy, Robustness, Cybersecurity | Art. 15 |
| Provider Obligations | Art. 16 |
| Quality Management System | Art. 17 |
| Importer Obligations | Art. 23 |
| Distributor Obligations | Art. 24 |
| Value Chain Responsibilities | Art. 25 |
| Deployer Obligations | Art. 26 |
| Fundamental Rights Impact Assessment | Art. 27 |
| **Transparency (Limited Risk)** | Art. 50 |
| GPAI Classification | Arts. 51–52 |
| GPAI Obligations | Art. 53 |
| GPAI Systemic Risk Obligations | Art. 55 |
| Codes of Practice (GPAI) | Art. 56 |
| AI Regulatory Sandboxes | Arts. 57–58 |
| Conformity Assessment | Art. 43 |
| CE Marking | Art. 48 |
| EU Database Registration | Art. 49 |
| Post-Market Monitoring | Art. 72 |
| Serious Incident Reporting | Art. 73 |
| Governance (AI Office, Board) | Arts. 64–70 |
| AI Office supervision of certain AI systems | Arts. 75(1), 75a–75d (2026 Omnibus) |
| Whistleblowing | Art. 87 (applies Directive (EU) 2019/1937) |
| **Penalties** | Arts. 99–101 (Art. 99(6a) SMCs added by the 2026 Omnibus) |
| Legacy systems / transitional rules | Art. 111 (para 4 added by the 2026 Omnibus) |
| **Entry into Force / Timeline** | Art. 113 (points (a) and (c) replaced, (d) added by the 2026 Omnibus) |

---

## 18. Related Notes

- [[The EU AI Act]] — Main study chapter
- [[GPAI Code of Practice — Key Provisions]] — Code status and signatories
- [[Privacy and Data Protection Law]] — GDPR/LED intersection
- [[GDPR — AI-Relevant Provisions]] — Article-level GDPR detail, EDPB and CJEU developments
- [[AIGP Body of Knowledge — Exam Blueprint]] — Exam coverage mapping
- [[EU AI Act — Annex III Deep Dive]] — Detailed high-risk use case analysis *(to be created)*
- [[GPAI Model Obligations under the EU AI Act]] — GPAI deep dive *(to be created)*

---

## Sources

- Regulation (EU) 2024/1689, OJ L, 12.7.2024: http://data.europa.eu/eli/reg/2024/1689/oj
- Regulation (EU) 2026/1744 (Digital Omnibus on AI), OJ L, 24.7.2026: http://data.europa.eu/eli/reg/2026/1744/oj
- Commission, "AI Omnibus enters into force": https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force
- AI Act Service Desk, implementation timeline: https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act
- Commission, enforcement of the AI Act: https://digital-strategy.ec.europa.eu/en/policies/enforcement-ai-act
- Commission GPAI guidelines (C(2025) 5045 approval; C(2025) 7719): https://digital-strategy.ec.europa.eu/en/library/guidelines-scope-obligations-providers-general-purpose-ai-models-under-ai-act
- Code of Practice on Transparency of AI-generated Content: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
- Art. 50 guidelines: https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems
- Draft Art. 6 guidelines: https://digital-strategy.ec.europa.eu/en/library/draft-commission-guidelines-classification-high-risk-ai-systems
- CEN-CENELEC on EN 18286:2026: https://www.cencenelec.eu/news-events/news/2026/en-in-the-spotlight/2026-07-30-ai-quality-management/

*Last updated: 2026-09-23 | Based on Regulation (EU) 2024/1689 as published in OJ L, 12.7.2024, and as amended by Regulation (EU) 2026/1744 (OJ L, 24.7.2026)*
