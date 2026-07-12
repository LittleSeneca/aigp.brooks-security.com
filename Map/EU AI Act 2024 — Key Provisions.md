---
tags:
 - aigp/reference
 - aigp/legal
 - aigp/eu-ai-act
created: 2024-07-12
aliases:
 - EU AI Act
 - Regulation 2024/1689
 - Artificial Intelligence Act
wikilinks:
 - "[[AIGP Body of Knowledge — Exam Blueprint]]"
 - "[[The EU AI Act]]"
 - "[[Privacy and Data Protection Law]]"
---

# EU AI Act 2024 — Key Provisions

> **Regulation (EU) 2024/1689** of the European Parliament and of the Council of 13 June 2024 — *The Artificial Intelligence Act*
> Published in OJ: 12 July 2024 | Entry into force: 1 August 2024 | General application: 2 August 2026

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
| **Data & Data Governance** | Art. 10 | Training/validation/testing datasets must meet quality criteria: relevant, representative, free of errors, complete. Governance for design choices, collection, preparation, bias examination, and gap identification. Special category data processing for bias detection permitted under strict safeguards. |
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

---

## 9. Conformity Assessment, CE Marking & Registration

| Element | Article | Key Detail |
|---|---|---|
| **Conformity Assessment** | Art. 43 | Based on internal control (Annex VI) or QMS + technical documentation assessment by notified body (Annex VII). Notified body assessment required for Annex III, point 1 (biometrics) unless harmonised standards applied. |
| **EU Declaration of Conformity** | Art. 47 | Issued by provider; contents per Annex V |
| **CE Marking** | Art. 48 | Affixed to system/packaging/documentation; subject to general principles of Regulation (EC) 765/2008 |
| **EU Database Registration** | Art. 49 | Providers register high-risk AI systems before market placement. Deployers who are public authorities also register. Information per Annex VIII. |
| **Post-Market Monitoring** | Art. 72 | Providers establish and document post-market monitoring system proportionate to nature and risks |
| **Serious Incident Reporting** | Art. 73 | Providers report serious incidents to market surveillance authorities within **15 days** (or immediately for death); deployers report to provider |

---

## 10. Governance (Arts. 64–70)

| Body | Role |
|---|---|
| **AI Office** (within Commission) | Central enforcement of GPAI rules (Chapter V); coordinates governance; facilitates codes of practice |
| **European Artificial Intelligence Board** | Composed of Member State representatives; advises Commission; coordinates national authorities |
| **Scientific Panel** | Independent experts providing qualified alerts on systemic risks from GPAI models |
| **National Competent Authorities** | Market surveillance and notification at Member State level |
| **Advisory Forum** | Multi-stakeholder body providing technical expertise |
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

### 11.2 GPAI Model Provider Fines (Art. 101)

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

## 12. Implementation Timeline 📅 (Art. 113)

| Date | What Comes Into Effect |
|---|---|
| **12 July 2024** | Publication in Official Journal |
| **1 August 2024** | Entry into force (20 days after publication) |
| **2 February 2025** | **Chapters I & II** apply: General Provisions + **Prohibited AI Practices** (Art. 5) |
| **2 May 2025** | Deadline for GPAI **codes of practice** to be ready (Art. 56) |
| **2 August 2025** | **Chapter III Section 4** (notified bodies), **Chapter V** (GPAI models), **Chapter VII** (governance), **Chapter XII** (penalties), and **Art. 78** (confidentiality) apply — *EXCEPT* Art. 101 (GPAI fines) |
| **2 February 2026** | Commission to provide guidelines on Art. 6 (high-risk classification) with examples |
| **2 August 2026** | **Full general application** — all remaining provisions including high-risk requirements (Chapter III, Sections 1–3), transparency obligations (Chapter IV), and all remaining chapters |
| **2 August 2027** | **Art. 6(1)** and corresponding obligations apply (Annex I product-related high-risk systems — the New Legislative Framework pathway) |

> **Summary:** Prohibitions start Feb 2025 → GPAI/governance/penalties Aug 2025 → Full application Aug 2026 → Annex I high-risk Aug 2027

---

## 13. Key Roles & Definitions (Art. 3)

| Role | Definition | Art. 3 |
|---|---|---|
| **Provider** | Develops an AI system/GPAI model, or has one developed and places it on the market / puts into service under own name/trademark | (3) |
| **Deployer** | Uses an AI system under its authority (except personal non-professional activity) | (4) |
| **Importer** | Established in Union; places on market a system bearing name/trademark of third-country entity | (6) |
| **Distributor** | In supply chain (not provider/importer) making AI system available on Union market | (7) |
| **Authorised Representative** | Established in Union; mandated by third-country provider to perform obligations under the Regulation | (5) |
| **Operator** | Umbrella term: provider, product manufacturer, deployer, authorised representative, importer, or distributor | (8) |

---

## 14. Relationship to GDPR & Other Union Law

- The Act is **complementary to and does not affect** GDPR (Regulation 2016/679), LED (Directive 2016/680), DSA (Regulation 2022/2065), and consumer/product safety law (Art. 2(5)–(9))
- Data subjects retain all GDPR rights, including rights related to **solely automated individual decision-making, including profiling** (Recital 10)
- High-risk AI systems involving personal data must comply with both the AI Act **and** GDPR
- Special category data processing for bias detection permitted under strict Art. 10(5) safeguards

---

## 15. Article Quick-Reference Matrix

| Topic | Key Articles |
|---|---|
| Definitions | Art. 3 |
| AI Literacy | Art. 4 |
| **Prohibited Practices** | Art. 5 |
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
| **Penalties** | Arts. 99–101 |
| **Entry into Force / Timeline** | Art. 113 |

---

## 16. Related Notes

- [[The EU AI Act]] — Main study chapter
- [[Privacy and Data Protection Law]] — GDPR/LED intersection
- [[AIGP Body of Knowledge — Exam Blueprint]] — Exam coverage mapping
- [[EU AI Act — Annex III Deep Dive]] — Detailed high-risk use case analysis *(to be created)*
- [[GPAI Model Obligations under the EU AI Act]] — GPAI deep dive *(to be created)*

---

*Last updated: 2024-07-12 | Based on Regulation (EU) 2024/1689 as published in OJ L, 12.7.2024*
