---
tags:
 - aigp/reference
 - aigp/standards
 - aigp/nist
created: 2026-09-23
source: "NIST AI RMF Playbook (airc.nist.gov), public domain; retrieved 2026-09-23"
related:
 - "[[AIGP Body of Knowledge — Exam Blueprint]]"
 - "[[NIST AI RMF — Structured Reference]]"
 - "[[AI Standards and Frameworks]]"
 - "[[NIST AI 600-1 — Structured Reference]]"
---

# NIST AI RMF Playbook — Structured Reference

> **Status:** Voluntary companion to AI RMF 1.0 (NIST AI 100-1); no certification scheme. **Maintained by:** NIST, in the Trustworthy and Responsible AI Resource Center (airc.nist.gov). **Updates:** about twice a year; NIST says the next update follows the AI RMF 1.0 revision under way in 2026. **Data:** playbook.json retrieved 2026-09-23, 72 subcategory entries. **BOK:** v2.1 II.D.

## 1. Overview

The **NIST AI RMF Playbook** is NIST's online companion to **NIST AI 100-1, the AI Risk Management Framework (AI RMF 1.0, January 2023)**. The Framework's Core states *outcomes*: four functions (GOVERN, MAP, MEASURE, MANAGE) divided into 19 categories and 72 subcategories (Tables 1–4 of AI RMF 1.0). The Playbook supplies the *how*. NIST says it "provides suggested actions for achieving the outcomes laid out in the AI Risk Management Framework (AI RMF) Core", with suggestions aligned to each subcategory. The RMF points readers there too: for each function it says the related practices "are described in the NIST AI RMF Playbook". Both belong to NIST's Trustworthy and Responsible AI Resource Center (AIRC, airc.nist.gov).

| | AI RMF 1.0 (NIST AI 100-1) | AI RMF Playbook |
|---|---|---|
| What it is | The framework: Part 1 foundational information, Part 2 the Core and Profiles | Online companion, one entry per Core subcategory |
| What it gives you | Outcome statements (functions, categories, subcategories), trustworthiness characteristics, profiles | Suggested actions, transparency and documentation prompts, AI transparency resources, references, plus AI Actor and Topic tags |
| Status | Voluntary, rights-preserving, non-sector-specific, use-case agnostic | Voluntary; "neither a checklist nor set of steps to be followed in its entirety" |
| Updates | Living document; formal community review expected no later than 2028; being revised as of 2026 | Updates "approximately twice per year"; next update after the AI RMF is revised |
| Format | Versioned publication (PDF) | Web pages by function, plus PDF, CSV, Excel and JSON downloads |

**Status points a question writer can use**

- **Voluntary.** "Playbook suggestions are voluntary." NIST says organizations can borrow "as many – or as few – suggestions as apply to their industry use case or interests". The same applies to the Framework: "The AI RMF and the Playbook are intended for voluntary use."
- **Not a checklist or a sequence.** The Playbook FAQ says users are not expected to implement every suggestion or to work through them as an ordered series of steps. AI RMF 1.0 says the same of the Core: its actions "do not constitute a checklist, nor are they necessarily an ordered set of steps".
- **No certification.** Neither the RMF nor the Playbook sets up a certification or conformity-assessment scheme. (The "certifications" in MAP 3.4 are proficiency standards for system operators, not certification of the organization.)
- **Living resource.** Comments go to AIframework@nist.gov. AI RMF 1.0 says they are "reviewed and integrated on a semi-annual basis", and the Playbook page says updates are released about twice a year.
- **As of September 2026.** NIST says "The AI RMF 1.0 is being revised as part of the White House AI Action Plan" and "The Playbook will be updated after the AI RMF is revised." NIST's March 2026 AI update lists the Action Plan task to "revise the NIST AI Risk Management Framework to eliminate references to misinformation, Diversity, Equity, and Inclusion, and climate change". In the current Playbook, the entries closest to those themes are GOVERN 3 (workforce diversity, equity, inclusion and accessibility), MAP 1.2 (demographically diverse, interdisciplinary teams) and MEASURE 2.12 (environmental impact); no entry mentions misinformation. For the exam (BOK v2.1), learn AI RMF 1.0 and the Playbook as published.

For the Framework itself (trustworthiness characteristics, lifecycle, profiles, the full tables) see [[NIST AI RMF — Structured Reference]]. This note adds what the Playbook says to *do* for each subcategory.

## 2. Anatomy of a Playbook entry

Each subcategory has one entry. The first four parts below are the section headings on the AIRC web pages; AI Actors and Topic are tags carried in the JSON export.

| Part | JSON field | What it holds | In this note |
|---|---|---|---|
| About | `section_about` | Background on the outcome and why it matters | Left out (long prose) |
| Suggested Actions | `section_actions` | Voluntary steps toward the outcome | First 4–6 top-level bullets |
| Transparency and Documentation: "Organizations can document the following" | `section_doc` | Questions to answer when documenting the outcome | 2–3 per subcategory |
| Transparency and Documentation: "AI Transparency Resources" | `section_doc` | Documentation frameworks and checklists | Summarized below |
| References | `section_ref` | Research, guidance and regulatory sources | Left out |
| AI Actors (tag) | `AI Actors` | Appendix A actor groups most involved | Kept |
| Topic (tag) | `Topic` | Subject tags such as Third-party or AI Incidents | Kept |

Most often listed as AI Transparency Resources (number of entries): GAO-21-519SP: AI Accountability Framework for Federal Agencies & Other Entities (63); Intel.gov: AI Ethics Framework for Intelligence Community - 2020 (39); WEF Companion to the Model AI Governance Framework- 2020 (20); WEF Model AI Governance Framework Assessment 2020 (17).

**How this note was built.**

- Generated by `build_playbook_note.py` from playbook.json (72 entries; SHA-256 `aecbee3d3c88…`, retrieved 2026-09-23). Rerun it when NIST updates the Playbook.
- Subcategory statements are verbatim from the Playbook. Category statements are verbatim from AI RMF 1.0 Tables 1–4.
- Suggested actions: the first 4–6 top-level bullets in Playbook order, with at most 5 sub-bullets each. HTML and markdown artifacts are removed; NIST's wording, including its occasional typos, is otherwise unchanged. The count shows how many the Playbook lists.
- Documentation prompts: the first 2–3 distinct questions in Playbook order, trimmed of commentary after the last question mark.
- AI Actors and Topics are the Playbook's tags. "all seven" stands for the seven trustworthiness-characteristic topic tags.

**Data notes (generated).**

- No AI Actor tags in playbook.json for: MAP 1.1, MAP 1.2, MAP 1.3, MAP 1.4, MAP 1.5, MAP 1.6, MAP 2.1, MAP 2.2.
- Tagged as an actor but not an AI RMF actor group, so shown under Topics instead: 'Fairness and Bias' (GOVERN 4.3).
- Duplicate actor tag removed: MAP 3.2 (AI Design).
- A suggested action phrased as a question (really a documentation prompt) was skipped in: MANAGE 3.1.
- Statement wording differs in substance from AI RMF 1.0, so the RMF text is shown underneath: GOVERN 1.2, GOVERN 1.3, GOVERN 5.2, MANAGE 1.2, MEASURE 1.2, MEASURE 2.6.

## 3. Functions, categories and subcategories

| Function | Categories | Subcategories | Most-tagged AI Actors |
|---|---|---|---|
| GOVERN | 6 | 19 | Governance and Oversight (13), Operation and Monitoring (8) |
| MAP | 5 | 18 | Operation and Monitoring (7), AI Design (6) |
| MEASURE | 4 | 22 | TEVV (22), AI Deployment (16) |
| MANAGE | 4 | 13 | AI Deployment (13), Operation and Monitoring (13) |
| **Total** | **19** | **72** | |

| Function | Category | Focus | Subcategories | Count |
|---|---|---|---|---|
| GOVERN | GOVERN 1 | Policies, processes, procedures and practices | GOVERN 1.1–1.7 | 7 |
| GOVERN | GOVERN 2 | Accountability structures and training | GOVERN 2.1–2.3 | 3 |
| GOVERN | GOVERN 3 | Workforce diversity, equity, inclusion and accessibility | GOVERN 3.1–3.2 | 2 |
| GOVERN | GOVERN 4 | Risk-aware culture and communication | GOVERN 4.1–4.3 | 3 |
| GOVERN | GOVERN 5 | Engagement with relevant AI actors | GOVERN 5.1–5.2 | 2 |
| GOVERN | GOVERN 6 | Third-party software, data and supply chain | GOVERN 6.1–6.2 | 2 |
| MAP | MAP 1 | Context established and understood | MAP 1.1–1.6 | 6 |
| MAP | MAP 2 | System categorization | MAP 2.1–2.3 | 3 |
| MAP | MAP 3 | Capabilities, usage, benefits and costs | MAP 3.1–3.5 | 5 |
| MAP | MAP 4 | Risks and benefits of all components, incl. third-party | MAP 4.1–4.2 | 2 |
| MAP | MAP 5 | Impacts characterized | MAP 5.1–5.2 | 2 |
| MEASURE | MEASURE 1 | Methods and metrics | MEASURE 1.1–1.3 | 3 |
| MEASURE | MEASURE 2 | Evaluation for trustworthy characteristics | MEASURE 2.1–2.13 | 13 |
| MEASURE | MEASURE 3 | Tracking risks over time | MEASURE 3.1–3.3 | 3 |
| MEASURE | MEASURE 4 | Feedback on measurement efficacy | MEASURE 4.1–4.3 | 3 |
| MANAGE | MANAGE 1 | Prioritize and respond to assessed risks | MANAGE 1.1–1.4 | 4 |
| MANAGE | MANAGE 2 | Maximize benefits, minimize negative impacts | MANAGE 2.1–2.4 | 4 |
| MANAGE | MANAGE 3 | Third-party risks and benefits | MANAGE 3.1–3.2 | 2 |
| MANAGE | MANAGE 4 | Risk treatment, monitoring and communication plans | MANAGE 4.1–4.3 | 3 |

## 4. AI Actors in the Playbook

AI RMF 1.0 adopts the OECD definition of AI actors: "those who play an active role in the AI system lifecycle, including organizations and individuals that deploy or operate AI". Appendix A describes their tasks. The Playbook tags each subcategory with the groups most involved; counts below are subcategories tagged.

| AI Actor (Playbook tag) | Role (AI RMF Appendix A, paraphrased) | GOVERN | MAP | MEASURE | MANAGE | Total |
|---|---|---|---|---|---|---|
| Operation and Monitoring | Operate the system and regularly assess its outputs and impacts | 8 | 7 | 15 | 13 | 43 |
| AI Deployment | Put the system into use: piloting, legacy compatibility, regulatory compliance, organizational change, user experience | 4 | 4 | 16 | 13 | 37 |
| TEVV | Test, evaluate, verify and validate across the lifecycle; kept apart from model builders as a best practice | 2 | 2 | 22 | 1 | 27 |
| AI Impact Assessment | Assess accountability, harmful bias, impacts, product safety, liability and security | 2 | 4 | 11 | 6 | 23 |
| Domain Experts | Sector or application expertise that guides design and helps interpret outputs | – | 4 | 12 | 2 | 18 |
| Governance and Oversight | Management, fiduciary and legal authority: organizational management, senior leadership, the board | 13 | 1 | – | 3 | 17 |
| End-Users | Individuals or groups using the system for specific purposes | – | 4 | 8 | 3 | 15 |
| AI Development | Build, select, calibrate, train and test models | 2 | 6 | 4 | 1 | 13 |
| AI Design | Set the concept, objectives, assumptions and requirements; plan and collect data | 5 | 6 | – | 1 | 12 |
| Affected Individuals and Communities | Anyone directly or indirectly affected, whether or not they interact with the system | 1 | 2 | 6 | 3 | 12 |
| Human Factors | Human-centred design, end-user involvement, context of use, UX evaluation | – | 4 | 1 | 2 | 7 |
| Third-party entities | External providers, developers, vendors and evaluators of data, models or systems | 2 | 2 | – | 2 | 6 |
| Procurement | Acquire AI models, products or services from third parties | 1 | 1 | – | – | 2 |

## 5. Topic finder

Where each Playbook topic tag appears. Use it to answer "which subcategory covers X?"

| Topic tag | Entries | Subcategories |
|---|---|---|
| TEVV | 21 | MAP 1.1, 2.3 · MEASURE 1.1–1.2, 2.1, 2.3–2.13, 3.1, 3.3, 4.1–4.3 |
| Governance | 19 | all GOVERN |
| Impact Assessment | 16 | GOVERN 4.2–4.3, 5.1–5.2 · MAP 1.1, 1.6, 2.2–2.3, 3.2, 5.1–5.2 · MEASURE 1.2–1.3, 2.3, 3.3 · MANAGE 4.2 |
| Trustworthy Characteristics | 13 | GOVERN 1.2 · MAP 1.1, 3.2 · MEASURE 1.1, 2.5–2.11, 4.2–4.3 |
| Participation | 10 | GOVERN 5.1–5.2 · MAP 5.1–5.2 · MEASURE 1.3, 3.3, 4.1–4.3 · MANAGE 4.1 |
| Fairness and Bias | 8 | GOVERN 1.2, 4.3 · MAP 1.1, 3.2 · MEASURE 1.1, 2.11, 4.2–4.3 |
| Monitoring | 8 | GOVERN 1.5 · MEASURE 2.4, 3.1–3.2 · MANAGE 3.2, 4.1–4.3 |
| Validity and Reliability | 8 | GOVERN 1.2 · MAP 1.1, 3.2 · MEASURE 1.1, 2.1, 2.5, 4.2–4.3 |
| Accountability and Transparency | 7 | GOVERN 1.2 · MAP 1.1, 3.2 · MEASURE 1.1, 2.8, 4.2–4.3 |
| Context of Use | 7 | MAP 1.1, 1.4, 3.3 · MEASURE 1.2–1.3, 2.6, 4.1 |
| Documentation | 7 | GOVERN 1.4, 1.6 · MAP 1.6, 2.2, 3.1, 3.3 · MEASURE 2.1 |
| Explainability and Interpretability | 7 | GOVERN 1.2 · MAP 1.1, 3.2 · MEASURE 1.1, 2.9, 4.2–4.3 |
| Privacy | 7 | GOVERN 1.2 · MAP 1.1, 3.2 · MEASURE 1.1, 2.10, 4.2–4.3 |
| Risk Tolerance | 7 | GOVERN 1.3, 2.3 · MAP 1.5, 4.1 · MANAGE 1.2–1.3, 2.1 |
| Safety | 7 | GOVERN 1.2 · MAP 1.1, 3.2 · MEASURE 1.1, 2.6, 4.2–4.3 |
| Secure and Resilient | 7 | GOVERN 1.2 · MAP 1.1, 3.2 · MEASURE 1.1, 2.7, 4.2–4.3 |
| Socio-technical systems | 6 | MAP 1.1–1.3, 1.6, 2.1, 3.1 |
| Risky Emergent Behavior | 5 | MAP 4.1 · MEASURE 1.1, 2.7 · MANAGE 2.4, 4.1 |
| Third-party | 5 | GOVERN 6.1–6.2 · MAP 4.1–4.2 · MANAGE 3.1 |
| Continual Improvement | 4 | GOVERN 1.5 · MEASURE 3.1–3.2 · MANAGE 4.2 |
| Data | 4 | GOVERN 1.6 · MAP 2.3 · MEASURE 2.2, 2.5 |
| Legal and Regulatory | 4 | GOVERN 1.1, 6.1 · MAP 4.1 · MANAGE 1.3 |
| Risk Culture | 4 | GOVERN 2.1, 4.1–4.3 |
| Risk Response | 4 | MANAGE 1.4, 2.3–2.4, 4.1 |
| Supply Chain | 4 | GOVERN 6.1–6.2 · MAP 4.1 · MANAGE 3.1 |
| AI Actor Training | 3 | GOVERN 1.1, 2.2, 3.2 |
| AI Deployment | 3 | MANAGE 1.1, 2.2, 4.1 |
| AI Incidents | 3 | GOVERN 4.3 · MANAGE 4.1, 4.3 |
| Adversarial | 3 | GOVERN 4.1 · MEASURE 2.7 · MANAGE 4.1 |
| Drift | 3 | GOVERN 4.3 · MEASURE 2.4 · MANAGE 2.2 |
| Human oversight | 3 | GOVERN 3.2 · MAP 2.2, 3.5 |
| Pre-trained models | 3 | MAP 4.1–4.2 · MANAGE 3.2 |
| Risk Assessment | 3 | MEASURE 1.1 · MANAGE 1.1, 4.2 |
| Risk Management | 3 | GOVERN 1.4, 1.6, 6.2 |
| Societal Values | 3 | MAP 1.1, 1.3 · MANAGE 2.2 |
| Decommission | 2 | GOVERN 1.7 · MANAGE 2.4 |
| Diversity | 2 | GOVERN 3.1 · MAP 1.2 |
| Human-AI teaming | 2 | GOVERN 3.2 · MAP 3.4 |
| Interdisciplinarity | 2 | GOVERN 3.1 · MAP 1.2 |
| Limitations | 2 | MAP 2.2–2.3 |
| Contestability | 1 | MEASURE 3.3 |
| Effectiveness | 1 | MEASURE 2.13 |
| Environmental Impact | 1 | MEASURE 2.12 |
| Human Subjects Protection | 1 | MEASURE 2.2 |
| Procurement | 1 | GOVERN 6.1 |
| Trade-offs | 1 | MANAGE 2.1 |

## 6. GOVERN (6 categories, 19 subcategories)

Cross-cutting. GOVERN builds the culture, policies, accountability structures and processes for AI risk management. AI RMF 1.0 calls it "a cross-cutting function to inform and be infused throughout the other three functions". It applies to all stages of an organization's AI risk management, not to one system, and it keeps running as knowledge, culture and expectations change.

### GOVERN 1 — Policies, processes, procedures and practices

*AI RMF 1.0 category statement:* Policies, processes, procedures, and practices across the organization related to the mapping, measuring, and managing of AI risks are in place, transparent, and implemented effectively.

#### GOVERN 1.1

> Legal and regulatory requirements involving AI are understood, managed, and documented.

*AI Actors:* Governance and Oversight · *Topics:* Legal and Regulatory, Governance, AI Actor Training

**Suggested actions** (3 of 3):
- Maintain awareness of the applicable legal and regulatory considerations and requirements specific to industry, sector, and business purpose, as well as the application context of the deployed AI system.
- Align risk management efforts with applicable legal standards.
- Maintain policies for training (and re-training) organizational staff about necessary legal or regulatory considerations that may impact AI-related design, development and deployment activities.

**Documentation prompts:**
- To what extent has the entity defined and documented the regulatory environment—including minimum requirements in laws and regulations?
- Has the system been reviewed for its compliance to applicable laws, regulations, standards, and guidance?

#### GOVERN 1.2

> The characteristics of trustworthy AI are integrated into organizational policies, processes, and procedures.
>
> *AI RMF 1.0 wording:* The characteristics of trustworthy AI are integrated into organizational policies, processes, procedures, and practices.

*AI Actors:* Governance and Oversight · *Topics:* Trustworthy Characteristics (all seven), Governance

**Suggested actions** (first 6 of 15): *Organizational AI risk management policies should be designed to:*
- Define key terms and concepts related to AI systems and the scope of their purposes and intended uses.
- Connect AI governance to existing organizational governance and risk controls.
- Align to broader data governance policies and practices, particularly the use of sensitive or otherwise risky data.
- Detail standards for experimental design, data quality, and model training.
- Outline and document risk mapping and measurement processes and standards.
- Detail model testing and validation processes.

**Documentation prompts:**
- To what extent do these policies foster public trust and confidence in the use of the AI system?
- What policies has the entity developed to ensure the use of the AI system is consistent with its stated values and principles?
- What policies and documentation has the entity developed to encourage the use of its AI system as intended?

#### GOVERN 1.3

> Processes and procedures are in place to determine the needed level of risk management activities based on the organization's risk tolerance.
>
> *AI RMF 1.0 wording:* Processes, procedures, and practices are in place to determine the needed level of risk management activities based on the organization’s risk tolerance.

*AI Actors:* Governance and Oversight · *Topics:* Risk Tolerance, Governance

**Suggested actions** (5 of 5):
- Establish policies to define mechanisms for measuring or understanding an AI system’s potential impacts, e.g., via regular impact assessments at key stages in the AI lifecycle, connected to system impacts and frequency of system updates.
- Establish policies to define mechanisms for measuring or understanding the likelihood of an AI system’s impacts and their magnitude at key stages in the AI lifecycle.
- Establish policies that define assessment scales for measuring potential AI system impact. Scales may be qualitative, such as red-amber-green (RAG), or may entail simulations or econometric approaches.
- Establish policies for assigning an overall risk measurement approach for an AI system, or its important components, e.g., via multiplication or combination of a mapped risk’s impact and likelihood (risk ≈ impact x likelihood).
- Establish policies to assign systems to uniform risk scales that are valid across the organization’s AI portfolio (e.g. documentation templates), and acknowledge risk tolerance and risk levels may change over the lifecycle of an AI system.

**Documentation prompts:**
- How do system performance metrics inform risk tolerance decisions?
- What policies has the entity developed to ensure the use of the AI system is consistent with organizational risk tolerance?
- How do the entity’s data security and privacy assessments inform risk tolerance decisions?

#### GOVERN 1.4

> The risk management process and its outcomes are established through transparent policies, procedures, and other controls based on organizational risk priorities.

*AI Actors:* Governance and Oversight · *Topics:* Risk Management, Governance, Documentation

**Suggested actions** (first 6 of 7):
- Establish and regularly review documentation policies that, among others, address information related to:
    - AI actors contact informations
    - Business justification
    - Scope and usages
    - Expected and potential risks and impacts
    - Assumptions and limitations
    - *…and 8 more*
- Verify documentation policies for AI systems are standardized across the organization and remain current.
- Establish policies for a model documentation inventory system and regularly review its completeness, usability, and efficacy.
- Establish mechanisms to regularly review the efficacy of risk management processes.
- Identify AI actors responsible for evaluating efficacy of risk management processes and approaches, and for course-correction based on results.
- Establish policies and processes regarding public disclosure of the use of AI and risk management material such as impact assessments, audits, model documentation and validation and testing results.

**Documentation prompts:**
- To what extent has the entity clarified the roles, responsibilities, and delegated authorities to relevant stakeholders?
- What are the roles, responsibilities, and delegation of authorities of personnel involved in the design, development, deployment, assessment and monitoring of the AI system?

#### GOVERN 1.5

> Ongoing monitoring and periodic review of the risk management process and its outcomes are planned, organizational roles and responsibilities are clearly defined, including determining the frequency of periodic review.

*AI Actors:* Governance and Oversight, Operation and Monitoring · *Topics:* Monitoring, Governance, Continual Improvement

**Suggested actions** (first 6 of 7):
- Establish policies to allocate appropriate resources and capacity for assessing impacts of AI systems on individuals, communities and society.
- Establish policies and procedures for monitoring and addressing AI system performance and trustworthiness, including bias and security problems, across the lifecycle of the system.
- Establish policies for AI system incident response, or confirm that existing incident response policies apply to AI systems.
- Establish policies to define organizational functions and personnel responsible for AI system monitoring and incident response activities.
- Establish mechanisms to enable the sharing of feedback from impacted individuals or communities about negative impacts from AI systems.
- Establish mechanisms to provide recourse for impacted individuals or communities to contest problematic AI system outcomes.

**Documentation prompts:**
- To what extent does the system/entity consistently measure progress towards stated goals and objectives?
- Did your organization implement a risk management system to address risks involved in deploying the identified AI solution (e.g. personnel risk or changes to commercial objectives)?
- Did your organization address usability problems and test whether user interfaces served their intended purposes?

#### GOVERN 1.6

> Mechanisms are in place to inventory AI systems and are resourced according to organizational risk priorities.

*AI Actors:* Governance and Oversight · *Topics:* Risk Management, Governance, Data, Documentation

**Suggested actions** (4 of 4):
- Establish policies that define the creation and maintenance of AI system inventories.
- Establish policies that define a specific individual or team that is responsible for maintaining the inventory.
- Establish policies that define which models or systems are inventoried, with preference to inventorying all models or systems, or minimally, to high risk models or systems, or systems deployed in high-stakes settings.
- Establish policies that define model or system attributes to be inventoried, e.g, documentation, links to source code, incident response plans, data dictionaries, AI actor contact information.

**Documentation prompts:**
- Who is responsible for documenting and maintaining the AI system inventory details?
- What processes exist for data generation, acquisition/collection, ingestion, staging/storage, transformations, security, maintenance, and dissemination?
- Given the purpose of this AI, what is an appropriate interval for checking whether it is still accurate, unbiased, explainable, etc.? What are the checks for this model?

#### GOVERN 1.7

> Processes and procedures are in place for decommissioning and phasing out of AI systems safely and in a manner that does not increase risks or decrease the organization’s trustworthiness.

*AI Actors:* AI Deployment, Operation and Monitoring · *Topics:* Decommission, Governance

**Suggested actions** (4 of 4):
- Establish policies for decommissioning AI systems. Such policies typically address:
    - User and community concerns, and reputational risks.
    - Business continuity and financial risks.
    - Up and downstream system dependencies.
    - Regulatory requirements (e.g., data retention).
    - Potential future legal, regulatory, security or forensic investigations.
    - *…and 1 more*
- Establish policies that delineate where and for how long decommissioned systems, models and related artifacts are stored.
- Establish practices to track accountability and consider how decommission and other adaptations or changes in system deployment contribute to downstream impacts for individuals, groups and communities.
- Establish policies that address ancillary data or artifacts that must be preserved for fulsome understanding or execution of the decommissioned AI system, e.g., predictions, explanations, intermediate input feature representations, usernames and passwords, etc.

**Documentation prompts:**
- What processes exist for data generation, acquisition/collection, ingestion, staging/storage, transformations, security, maintenance, and dissemination?
- To what extent do these policies foster public trust and confidence in the use of the AI system?

### GOVERN 2 — Accountability structures and training

*AI RMF 1.0 category statement:* Accountability structures are in place so that the appropriate teams and individuals are empowered, responsible, and trained for mapping, measuring, and managing AI risks.

#### GOVERN 2.1

> Roles and responsibilities and lines of communication related to mapping, measuring, and managing AI risks are documented and are clear to individuals and teams throughout the organization.

*AI Actors:* Governance and Oversight · *Topics:* Governance, Risk Culture

**Suggested actions** (6 of 6):
- Establish policies that define the AI risk management roles and responsibilities for positions directly and indirectly related to AI systems, including, but not limited to
    - Boards of directors or advisory committees
    - Senior management
    - AI audit functions
    - Product management
    - Project management
    - *…and 7 more*
- Establish policies that promote regular communication among AI actors participating in AI risk management efforts.
- Establish policies that separate management of AI system development functions from AI system testing functions, to enable independent course-correction of AI systems.
- Establish policies to identify, increase the transparency of, and prevent conflicts of interest in AI risk management efforts.
- Establish policies to counteract confirmation bias and market incentives that may hinder AI risk management efforts.
- Establish policies that incentivize AI actors to collaborate with existing legal, oversight, compliance, or enterprise risk functions in their AI risk management activities.

**Documentation prompts:**
- To what extent has the entity clarified the roles, responsibilities, and delegated authorities to relevant stakeholders?
- Who is ultimately responsible for the decisions of the AI and is this person aware of the intended uses and limitations of the analytic?
- Are the responsibilities of the personnel involved in the various AI governance processes clearly defined?

#### GOVERN 2.2

> The organization’s personnel and partners receive AI risk management training to enable them to perform their duties and responsibilities consistent with related policies, procedures, and agreements.

*AI Actors:* Governance and Oversight · *Topics:* Governance, AI Actor Training

**Suggested actions** (6 of 6):
- Establish policies for personnel addressing ongoing education about:
    - Applicable laws and regulations for AI systems.
    - Potential negative impacts that may arise from AI systems.
    - Organizational AI policies.
    - Trustworthy AI characteristics.
- Ensure that trainings are suitable across AI actor sub-groups - for AI actors carrying out technical tasks (e.g., developers, operators, etc.) as compared to AI actors in oversight roles (e.g., legal, compliance, audit, etc.).
- Ensure that trainings comprehensively address technical and socio-technical aspects of AI risk management.
- Verify that organizational AI policies include mechanisms for internal AI personnel to acknowledge and commit to their roles and responsibilities.
- Verify that organizational policies address change management and include mechanisms to communicate and acknowledge substantial AI system changes.
- Define paths along internal and external chains of accountability to escalate risk concerns.

**Documentation prompts:**
- Are the relevant staff dealing with AI systems properly trained to interpret AI model output and decisions as well as to detect and manage bias in data?
- How does the entity determine the necessary skills and experience needed to design, develop, deploy, assess, and monitor the AI system?

#### GOVERN 2.3

> Executive leadership of the organization takes responsibility for decisions about risks associated with AI system development and deployment.

*AI Actors:* Governance and Oversight · *Topics:* Governance, Risk Tolerance

**Suggested actions** (2 of 2):
- Organizational management can:
    - Declare risk tolerances for developing or using AI systems.
    - Support AI risk management efforts, and play an active role in such efforts.
    - Integrate a risk and harm prevention mindset throughout the AI lifecycle as part of organizational culture
    - Support competent risk management executives.
    - Delegate the power, resources, and authorization to perform risk management to each appropriate level throughout the management chain.
- Organizations can establish board committees for AI risk management and oversight functions and integrate those functions within the organization’s broader enterprise risk management approaches.

**Documentation prompts:**
- Did your organization’s board and/or senior management sponsor, support and participate in your organization’s AI governance?
- What are the roles, responsibilities, and delegation of authorities of personnel involved in the design, development, deployment, assessment and monitoring of the AI system?

### GOVERN 3 — Workforce diversity, equity, inclusion and accessibility

*AI RMF 1.0 category statement:* Workforce diversity, equity, inclusion, and accessibility processes are prioritized in the mapping, measuring, and managing of AI risks throughout the lifecycle.

#### GOVERN 3.1

> Decision-makings related to mapping, measuring, and managing AI risks throughout the lifecycle is informed by a diverse team (e.g., diversity of demographics, disciplines, experience, expertise, and backgrounds).

*AI Actors:* Governance and Oversight, AI Design · *Topics:* Diversity, Interdisciplinarity, Governance

**Suggested actions** (5 of 5): *Organizational management can:*
- Define policies and hiring practices at the outset that promote interdisciplinary roles, competencies, skills, and capacity for AI efforts.
- Define policies and hiring practices that lead to demographic and domain expertise diversity; empower staff with necessary resources and support, and facilitate the contribution of staff feedback and concerns without fear of reprisal.
- Establish policies that facilitate inclusivity and the integration of new insights into existing practice.
- Seek external expertise to supplement organizational diversity, equity, inclusion, and accessibility where internal expertise is lacking.
- Establish policies that incentivize AI actors to collaborate with existing nondiscrimination, accessibility and accommodation, and human resource functions, employee resource group (ERGs), and diversity, equity, inclusion, and accessibility (DEIA) initiatives.

**Documentation prompts:**
- Are the relevant staff dealing with AI systems properly trained to interpret AI model output and decisions as well as to detect and manage bias in data?
- To what extent are the established procedures effective in mitigating bias, inequity, and other concerns resulting from the system?

#### GOVERN 3.2

> Policies and procedures are in place to define and differentiate roles and responsibilities for human-AI configurations and oversight of AI systems.

*AI Actors:* AI Design · *Topics:* Human-AI teaming, Human oversight, Governance, AI Actor Training

**Suggested actions** (first 6 of 8):
- Establish policies and procedures that define and differentiate the various human roles and responsibilities when using, interacting with, or monitoring AI systems.
- Establish procedures for capturing and tracking risk information related to human-AI configurations and associated outcomes.
- Establish policies for the development of proficiency standards for AI actors carrying out system operation tasks and system oversight tasks.
- Establish specified risk management training protocols for AI actors carrying out system operation tasks and system oversight tasks.
- Establish policies and procedures regarding AI actor roles, and responsibilities for human oversight of deployed systems.
- Establish policies and procedures defining human-AI configurations (configurations where AI systems are explicitly designated and treated as team members in primarily human teams) in relation to organizational risk tolerances, and associated documentation.

**Documentation prompts:**
- What type of information is accessible on the design, operations, and limitations of the AI system to external stakeholders, including end users, consumers, regulators, and individuals impacted by use of the AI system?
- To what extent has the entity documented the appropriate level of human involvement in AI-augmented decision-making?

### GOVERN 4 — Risk-aware culture and communication

*AI RMF 1.0 category statement:* Organizational teams are committed to a culture that considers and communicates AI risk.

#### GOVERN 4.1

> Organizational policies, and practices are in place to foster a critical thinking and safety-first mindset in the design, development, deployment, and uses of AI systems to minimize negative impacts.

*AI Actors:* AI Design, AI Development, AI Deployment, Operation and Monitoring · *Topics:* Risk Culture, Governance, Adversarial

**Suggested actions** (5 of 5):
- Establish policies that require inclusion of oversight functions (legal, compliance, risk management) from the outset of the system design process.
- Establish policies that promote effective challenge of AI system design, implementation, and deployment decisions, via mechanisms such as the three lines of defense, model audits, or red-teaming – to minimize workplace risks such as groupthink.
- Establish policies that incentivize safety-first mindset and general critical thinking and review at an organizational and procedural level.
- Establish whistleblower protections for insiders who report on perceived serious problems with AI systems.
- Establish policies to integrate a harm and risk prevention mindset throughout the AI lifecycle.

**Documentation prompts:**
- To what extent has the entity documented the AI system’s development, testing methodology, metrics, and performance outcomes?
- Are organizational information sharing practices widely followed and transparent, such that related past failed designs can be avoided?
- Are training manuals and other resources for carrying out incident response documented and available?

#### GOVERN 4.2

> Organizational teams document the risks and potential impacts of the AI technology they design, develop, deploy, evaluate and use, and communicate about the impacts more broadly.

*AI Actors:* AI Design, AI Development, AI Deployment, Operation and Monitoring · *Topics:* Risk Culture, Governance, Impact Assessment

**Suggested actions** (4 of 4):
- Establish impact assessment policies and processes for AI systems used by the organization.
- Align organizational impact assessment activities with relevant regulatory or legal requirements.
- Verify that impact assessment activities are appropriate to evaluate the potential negative impact of a system and how quickly a system changes, and that assessments are applied on a regular basis.
- Utilize impact assessments to inform broader evaluations of AI system risk.

**Documentation prompts:**
- How has the entity identified and mitigated potential impacts of bias in the data, including inequitable or discriminatory outcomes?
- How has the entity documented the AI system’s data provenance, including sources, origins, transformations, augmentations, labels, dependencies, constraints, and metadata?
- To what extent has the entity clearly defined technical specifications and requirements for the AI system?

#### GOVERN 4.3

> Organizational practices are in place to enable AI testing, identification of incidents, and information sharing.

*AI Actors:* TEVV, Operation and Monitoring, Governance and Oversight · *Topics:* Risk Culture, Governance, AI Incidents, Impact Assessment, Drift, Fairness and Bias

**Suggested actions** (5 of 5):
- Establish policies and procedures to facilitate and equip AI system testing.
- Establish organizational commitment to identifying AI system limitations and sharing of insights about limitations within appropriate AI actor groups.
- Establish policies for reporting and documenting incident response.
- Establish policies and processes regarding public disclosure of incidents and information sharing.
- Establish guidelines for incident handling related to AI system risks and performance.

**Documentation prompts:**
- Did your organization address usability problems and test whether user interfaces served their intended purposes?
- Did your organization implement a risk management system to address risks involved in deploying the identified AI solution (e.g. personnel risk or changes to commercial objectives)?
- To what extent can users or parties affected by the outputs of the AI system test the AI system and provide feedback?

### GOVERN 5 — Engagement with relevant AI actors

*AI RMF 1.0 category statement:* Processes are in place for robust engagement with relevant AI actors.

#### GOVERN 5.1

> Organizational policies and practices are in place to collect, consider, prioritize, and integrate feedback from those external to the team that developed or deployed the AI system regarding the potential individual and societal impacts related to AI risks.

*AI Actors:* AI Design, Governance and Oversight, AI Impact Assessment, Affected Individuals and Communities · *Topics:* Participation, Governance, Impact Assessment

**Suggested actions** (3 of 3):
- Establish AI risk management policies that explicitly address mechanisms for collecting, evaluating, and incorporating stakeholder and user feedback that could include:
    - Recourse mechanisms for faulty AI system outputs.
    - Bug bounties.
    - Human-centered design.
    - User-interaction and experience research.
    - Participatory stakeholder engagement with individuals and communities that may experience negative impacts.
- Verify that stakeholder feedback is considered and addressed, including environmental concerns, and across the entire population of intended users, including historically excluded populations, people with disabilities, older people, and those with limited access to the internet and other basic technologies.
- Clarify the organization’s principles as they apply to AI systems – considering those which have been proposed publicly – to inform external stakeholders of the organization’s values. Consider publishing or adopting AI principles.

**Documentation prompts:**
- What type of information is accessible on the design, operations, and limitations of the AI system to external stakeholders, including end users, consumers, regulators, and individuals impacted by use of the AI system?
- To what extent has the entity clarified the roles, responsibilities, and delegated authorities to relevant stakeholders?

#### GOVERN 5.2

> Mechanisms are established to enable AI actors to regularly incorporate adjudicated feedback from relevant AI actors into system design and implementation.
>
> *AI RMF 1.0 wording:* Mechanisms are established to enable the team that developed or deployed AI systems to regularly incorporate adjudicated feedback from relevant AI actors into system design and implementation.

*AI Actors:* AI Impact Assessment, Governance and Oversight, Operation and Monitoring · *Topics:* Participation, Governance, Impact Assessment

**Suggested actions** (first 4 of 5):
- Explicitly acknowledge that AI systems, and the use of AI, present inherent costs and risks along with potential benefits.
- Define reasonable risk tolerances for AI systems informed by laws, regulation, best practices, or industry standards.
- Establish policies that ensure all relevant AI actors are provided with meaningful opportunities to provide feedback on system design and implementation.
- Establish policies that define how to assign AI systems to established risk tolerance levels by combining system impact assessments with the likelihood that an impact occurs. Such assessment often entails some combination of:
    - Econometric evaluations of impacts and impact likelihoods to assess AI system risk.
    - Red-amber-green (RAG) scales for impact severity and likelihood to assess AI system risk.
    - Establishment of policies for allocating risk management resources along established risk tolerance levels, with higher-risk systems receiving more risk management resources and oversight.
    - Establishment of policies for approval, conditional approval, and disapproval of the design, implementation, and deployment of AI systems.

**Documentation prompts:**
- Who is ultimately responsible for the decisions of the AI and is this person aware of the intended uses and limitations of the analytic?
- Who will be responsible for maintaining, re-verifying, monitoring, and updating this AI once deployed?
- Who is accountable for the ethical considerations during all stages of the AI lifecycle?

### GOVERN 6 — Third-party software, data and supply chain

*AI RMF 1.0 category statement:* Policies and procedures are in place to address AI risks and benefits arising from third-party software and data and other supply chain issues.

#### GOVERN 6.1

> Policies and procedures are in place that address AI risks associated with third-party entities, including risks of infringement of a third party’s intellectual property or other rights.

*AI Actors:* Third-party entities, Operation and Monitoring, Procurement · *Topics:* Third-party, Legal and Regulatory, Procurement, Supply Chain, Governance

**Suggested actions** (4 of 4):
- Collaboratively establish policies that address third-party AI systems and data.
- Establish policies related to:
    - Transparency into third-party system functions, including knowledge about training data, training and inference algorithms, and assumptions and limitations.
    - Thorough testing of third-party AI systems. (See MEASURE for more detail)
    - Requirements for clear and complete instructions for third-party system usage.
- Evaluate policies for third-party technology.
- Establish policies that address supply chain, full product lifecycle and associated processes, including legal, ethical, and other issues concerning procurement and use of third-party software or hardware systems and data.

**Documentation prompts:**
- Did you establish mechanisms that facilitate the AI system’s auditability (e.g. traceability of the development process, the sourcing of training data and the logging of the AI system’s processes, outcomes, positive and negative impact)?
- If a third party created the AI, how will you ensure a level of explainability or interpretability?
- Did you ensure that the AI system can be audited by independent third parties?

#### GOVERN 6.2

> Contingency processes are in place to handle failures or incidents in third-party data or AI systems deemed to be high-risk.

*AI Actors:* AI Deployment, TEVV, Operation and Monitoring, Third-party entities · *Topics:* Third-party, Governance, Risk Management, Supply Chain

**Suggested actions** (2 of 2):
- Establish policies for handling third-party system failures to include consideration of redundancy mechanisms for vital third-party AI systems.
- Verify that incident response plans address third-party AI systems.

**Documentation prompts:**
- To what extent does the plan specifically address risks associated with acquisition, procurement of packaged software from vendors, cybersecurity controls, computational infrastructure, data, data science, deployment mechanics, and system failure?
- Did you establish a process for third parties (e.g. suppliers, end users, subjects, distributors/vendors or workers) to report potential vulnerabilities, risks or biases in the AI system?

## 7. MAP (5 categories, 18 subcategories)

MAP establishes the context to frame risks for a specific AI system: purpose, users, setting, risk tolerance, categorization, benefits and costs, component and third-party risks, and impacts. Its outcomes are the basis for MEASURE and MANAGE and should give enough context for an initial go/no-go decision on whether to design, develop or deploy the system.

### MAP 1 — Context established and understood

*AI RMF 1.0 category statement:* Context is established and understood.

#### MAP 1.1

> Intended purpose, potentially beneficial uses, context-specific laws, norms and expectations, and prospective settings in which the AI system will be deployed are understood and documented. Considerations include: specific set or types of users along with their expectations; potential positive and negative impacts of system uses to individuals, communities, organizations, society, and the planet; assumptions and related limitations about AI system purposes; uses and risks across the development or product AI lifecycle; TEVV and system metrics.

*AI Actors:* none tagged in playbook.json · *Topics:* Socio-technical systems, Societal Values, Context of Use, Impact Assessment, TEVV, Trustworthy Characteristics (all seven)

**Suggested actions** (first 6 of 13):
- Maintain awareness of industry, technical, and applicable legal standards.
- Examine trustworthiness of AI system design and consider, non-AI solutions
- Consider intended AI system design tasks along with unanticipated purposes in collaboration with human factors and socio-technical domain experts.
- Define and document the task, purpose, minimum functionality, and benefits of the AI system to inform considerations about whether the utility of the project or its lack of.
- Identify whether there are non-AI or non-technology alternatives that will lead to more trustworthy outcomes.
- Examine how changes in system performance affect downstream events such as decision-making (e.g: changes in an AI model objective function create what types of impacts in how many candidates do/do not get a job interview).

**Documentation prompts:**
- To what extent is the output of each component appropriate for the operational context?
- Which AI actors are responsible for the decisions of the AI and is this person aware of the intended uses and limitations of the analytic?
- Which AI actors are responsible for maintaining, re-verifying, monitoring, and updating this AI once deployed?

#### MAP 1.2

> Inter-disciplinary AI actors, competencies, skills and capacities for establishing context reflect demographic diversity and broad domain and user experience expertise, and their participation is documented. Opportunities for interdisciplinary collaboration are prioritized.

*AI Actors:* none tagged in playbook.json · *Topics:* Diversity, Interdisciplinarity, Socio-technical systems

**Suggested actions** (2 of 2):
- Establish interdisciplinary teams to reflect a wide range of skills, competencies, and capabilities for AI efforts. Verify that team membership includes demographic diversity, broad domain expertise, and lived experiences. Document team composition.
- Create and empower interdisciplinary expert teams to capture, learn, and engage the interdependencies of deployed AI systems and related terminologies and concepts from disciplines outside of AI practice such as law, sociology, psychology, anthropology, public policy, systems design, and engineering.

**Documentation prompts:**
- To what extent do the teams responsible for developing and maintaining the AI system reflect diverse opinions, backgrounds, experiences, and perspectives?
- Did the entity document the demographics of those involved in the design and development of the AI system to capture and communicate potential biases inherent to the development process, according to forum participants?

#### MAP 1.3

> The organization’s mission and relevant goals for the AI technology are understood and documented.

*AI Actors:* none tagged in playbook.json · *Topics:* Socio-technical systems, Societal Values

**Suggested actions** (5 of 5):
- Build transparent practices into AI system development processes.
- Review the documented system purpose from a socio-technical perspective and in consideration of societal values.
- Determine possible misalignment between societal values and stated organizational principles and code of ethics.
- Flag latent incentives that may contribute to negative impacts.
- Evaluate AI system purpose in consideration of potential risks, societal values, and stated organizational principles.

**Documentation prompts:**
- How does the AI system help the entity meet its goals and objectives?
- How do the technical specifications and requirements align with the AI system’s goals and objectives?
- To what extent is the output appropriate for the operational context?

#### MAP 1.4

> The business value or context of business use has been clearly defined or – in the case of assessing existing AI systems – re-evaluated.

*AI Actors:* none tagged in playbook.json · *Topics:* Context of Use

**Suggested actions** (3 of 3):
- Document business value or context of business use
- Reconcile documented concerns about the system’s purpose within the business context of use compared to the organization’s stated values, mission statements, social responsibility commitments, and AI principles.
- Reconsider the design, implementation strategy, or deployment of AI systems with potential impacts that do not reflect institutional values.

**Documentation prompts:**
- What goals and objectives does the entity expect to achieve by designing, developing, and/or deploying the AI system?
- To what extent are the system outputs consistent with the entity’s values and principles to foster public trust and equity?
- To what extent are the metrics consistent with system goals, objectives, and constraints, including ethical and compliance considerations?

#### MAP 1.5

> Organizational risk tolerances are determined and documented.

*AI Actors:* none tagged in playbook.json · *Topics:* Risk Tolerance

**Suggested actions** (first 5 of 6):
- Utilize existing regulations and guidelines for risk criteria, tolerance and response established by organizational, domain, discipline, sector, or professional requirements.
- Establish risk tolerance levels for AI systems and allocate the appropriate oversight resources to each level.
- Establish risk criteria in consideration of different sources of risk, (e.g., financial, operational, safety and wellbeing, business, reputational, and model risks) and different levels of risk (e.g., from negligible to critical).
- Identify maximum allowable risk tolerance above which the system will not be deployed, or will need to be prematurely decommissioned, within the contextual or application setting.
- Articulate and analyze tradeoffs across trustworthiness characteristics as relevant to proposed context of use. When tradeoffs arise, document them and plan for traceable actions (e.g.: impact mitigation, removal of system from development or use) to inform management decisions.

**Documentation prompts:**
- Which existing regulations and guidelines apply, and the entity has followed, in the development of system risk tolerances?
- What criteria and assumptions has the entity utilized when developing system risk tolerances?
- How has the entity identified maximum allowable risk tolerance?

#### MAP 1.6

> System requirements (e.g., “the system shall respect the privacy of its users”) are elicited from and understood by relevant AI actors. Design decisions take socio-technical implications into account to address AI risks.

*AI Actors:* none tagged in playbook.json · *Topics:* Socio-technical systems, Impact Assessment, Documentation

**Suggested actions** (first 5 of 8):
- Proactively incorporate trustworthy characteristics into system requirements.
- Establish mechanisms for regular communication and feedback between relevant AI actors and internal or external stakeholders related to system design or deployment decisions.
- Develop and standardize practices to assess potential impacts at all stages of the AI lifecycle, and in collaboration with interdisciplinary experts, actors external to the team that developed or deployed the AI system, and potentially impacted communities.
- Include potentially impacted groups, communities and external entities (e.g. civil society organizations, research institutes, local community groups, and trade associations) in the formulation of priorities, definitions and outcomes during impact assessment activities.
- Conduct qualitative interviews with end user(s) to regularly evaluate expectations and design plans related to Human-AI configurations and tasks.

**Documentation prompts:**
- What type of information is accessible on the design, operations, and limitations of the AI system to external stakeholders, including end users, consumers, regulators, and individuals impacted by use of the AI system?
- To what extent is this information sufficient and appropriate to promote transparency?

### MAP 2 — System categorization

*AI RMF 1.0 category statement:* Categorization of the AI system is performed.

#### MAP 2.1

> The specific task, and methods used to implement the task, that the AI system will support is defined (e.g., classifiers, generative models, recommenders).

*AI Actors:* none tagged in playbook.json · *Topics:* Socio-technical systems

**Suggested actions** (1 of 1):
- Define and document AI system’s existing and potential learning task(s) along with known assumptions and limitations.

**Documentation prompts:**
- To what extent has the entity clearly defined technical specifications and requirements for the AI system?
- To what extent has the entity documented the AI system’s development, testing methodology, metrics, and performance outcomes?
- How do the technical specifications and requirements align with the AI system’s goals and objectives?

#### MAP 2.2

> Information about the AI system’s knowledge limits and how system output may be utilized and overseen by humans is documented. Documentation provides sufficient information to assist relevant AI actors when making informed decisions and taking subsequent actions.

*AI Actors:* none tagged in playbook.json · *Topics:* Limitations, Human oversight, Impact Assessment, Documentation

**Suggested actions** (6 of 6):
- Document settings, environments and conditions that are outside the AI system’s intended use.
- Design for end user workflows and toolsets, concept of operations, and explainability and interpretability criteria in conjunction with end user(s) and associated qualitative feedback.
- Plan and test human-AI configurations under close to real-world conditions and document results.
- Follow stakeholder feedback processes to determine whether a system achieved its documented purpose within a given use context, and whether end users can correctly comprehend system outputs or results.
- Document dependencies on upstream data and other AI systems, including if the specified system is an upstream dependency for another AI system or other data.
- Document connections the AI system or data will have to external networks (including the internet), financial markets, and critical infrastructure that have potential for negative externalities. Identify and document negative impacts as part of considering the broader risk thresholds and subsequent go/no-go deployment as well as post-deployment decommissioning decisions.

**Documentation prompts:**
- Does the AI system provide sufficient information to assist the personnel to make an informed decision and take actions accordingly?
- What type of information is accessible on the design, operations, and limitations of the AI system to external stakeholders, including end users, consumers, regulators, and individuals impacted by use of the AI system?

#### MAP 2.3

> Scientific integrity and TEVV considerations are identified and documented, including those related to experimental design, data collection and selection (e.g., availability, representativeness, suitability), system trustworthiness, and construct validation.

*AI Actors:* AI Development, TEVV, Domain Experts · *Topics:* TEVV, Data, Impact Assessment, Limitations

**Suggested actions** (first 5 of 16):
- Identify and document experiment design and statistical techniques that are valid for testing complex socio-technical systems like AI, which involve human factors, emergent properties, and dynamic context(s) of use.
- Develop and apply TEVV protocols for models, system and its subcomponents, deployment, and operation.
- Demonstrate and document that AI system performance and validation metrics are interpretable and unambiguous for downstream decision making tasks, and take socio-technical factors such as context of use into consideration.
- Identify and document assumptions, techniques, and metrics used for testing and evaluation throughout the AI lifecycle including experimental design techniques for data collection, selection, and management practices in accordance with data governance policies established in GOVERN.
- Identify testing modules that can be incorporated throughout the AI lifecycle, and verify that processes enable corroboration by independent evaluators.

**Documentation prompts:**
- Are there any known errors, sources of noise, or redundancies in the data?
- Over what time-frame was the data collected?
- What is the variable selection and evaluation process?

### MAP 3 — Capabilities, usage, benefits and costs

*AI RMF 1.0 category statement:* AI capabilities, targeted usage, goals, and expected benefits and costs compared with appropriate benchmarks are understood.

#### MAP 3.1

> Potential benefits of intended AI system functionality and performance are examined and documented.

*AI Actors:* AI Development, AI Deployment, AI Impact Assessment · *Topics:* Socio-technical systems, Documentation

**Suggested actions** (6 of 6):
- Utilize participatory approaches and engage with system end users to understand and document AI systems’ potential benefits, efficacy and interpretability of AI task output.
- Maintain awareness and documentation of the individuals, groups, or communities who make up the system’s internal and external stakeholders.
- Verify that appropriate skills and practices are available in-house for carrying out participatory activities such as eliciting, capturing, and synthesizing user, operator and external feedback, and translating it for AI design and development functions.
- Establish mechanisms for regular communication and feedback between relevant AI actors and internal or external stakeholders related to system design or deployment decisions.
- Consider performance to human baseline metrics or other standard benchmarks.
- Incorporate feedback from end users, and potentially impacted individuals and communities about perceived system benefits.

**Documentation prompts:**
- Have the benefits of the AI system been communicated to end users?
- Have the appropriate training material and disclaimers about how to adequately use the AI system been provided to end users?
- Has your organization implemented a risk management system to address risks involved in deploying the identified AI system (e.g. personnel risk or changes to commercial objectives)?

#### MAP 3.2

> Potential costs, including non-monetary costs, which result from expected or realized AI errors or system functionality and trustworthiness - as connected to organizational risk tolerance - are examined and documented.

*AI Actors:* AI Design, AI Development, Operation and Monitoring, AI Impact Assessment · *Topics:* Impact Assessment, Trustworthy Characteristics (all seven)

**Suggested actions** (2 of 2):
- Perform context analysis to map potential negative impacts arising from not integrating trustworthiness characteristics. When negative impacts are not direct or obvious, AI actors can engage with stakeholders external to the team that developed or deployed the AI system, and potentially impacted communities, to examine and document:
    - Who could be harmed?
    - What could be harmed?
    - When could harm arise?
    - How could harm arise?
- Identify and implement procedures for regularly evaluating the qualitative and quantitative costs of internal and external AI system failures. Develop actions to prevent, detect, and/or correct potential risks and related impacts. Regularly evaluate failure costs to inform go/no-go deployment decisions throughout the AI system lifecycle.

**Documentation prompts:**
- To what extent does the system/entity consistently measure progress towards stated goals and objectives?
- To what extent can users or parties affected by the outputs of the AI system test the AI system and provide feedback?
- Have you documented and explained that machine errors may differ from human errors?

#### MAP 3.3

> Targeted application scope is specified and documented based on the system’s capability, established context, and AI system categorization.

*AI Actors:* AI Design, AI Development, Human Factors · *Topics:* Context of Use, Documentation

**Suggested actions** (2 of 2):
- Consider narrowing contexts for system deployment, including factors related to:
    - How outcomes may directly or indirectly affect users, groups, communities and the environment.
    - Length of time the system is deployed in between re-trainings.
    - Geographical regions in which the system operates.
    - Dynamics related to community standards or likelihood of system misuse or abuses (either purposeful or unanticipated).
    - How AI system features and capabilities can be utilized within other applications, or in place of other existing processes.
- Engage AI actors from legal and procurement functions when specifying target application scope.

**Documentation prompts:**
- To what extent has the entity clearly defined technical specifications and requirements for the AI system?
- How do the technical specifications and requirements align with the AI system’s goals and objectives?

#### MAP 3.4

> Processes for operator and practitioner proficiency with AI system performance and trustworthiness – and relevant technical standards and certifications – are defined, assessed and documented.

*AI Actors:* AI Design, AI Development, Human Factors, End-Users, Domain Experts, Operation and Monitoring · *Topics:* Human-AI teaming

**Suggested actions** (first 4 of 10):
- Identify and declare AI system features and capabilities that may affect downstream AI actors’ decision-making in deployment and operational settings for example how system features and capabilities may activate known risks in various human-AI configurations, such as selective adherence.
- Identify skills and proficiency requirements for operators, practitioners and other domain experts that interact with AI systems,Develop AI system operational documentation for AI actors in deployed and operational environments, including information about known risks, mitigation criteria, and trustworthy characteristics enumerated in Map-1.
- Define and develop training materials for proposed end users, practitioners and operators about AI system use and known limitations.
- Define and develop certification procedures for operating AI systems within defined contexts of use, and information about what exceeds operational boundaries.

**Documentation prompts:**
- What policies has the entity developed to ensure the use of the AI system is consistent with its stated values and principles?
- How will the accountable human(s) address changes in accuracy and precision due to either an adversary’s attempts to disrupt the AI or unrelated changes in operational/business environment, which may impact the accuracy of the AI?

#### MAP 3.5

> Processes for human oversight are defined, assessed, and documented in accordance with organizational policies from GOVERN function.

*AI Actors:* Human Factors, End-Users, Domain Experts, Operation and Monitoring, AI Design · *Topics:* Human oversight

**Suggested actions** (6 of 6):
- Identify and document AI systems’ features and capabilities that require human oversight, in relation to operational and societal contexts, trustworthy characteristics, and risks identified in MAP-1.
- Establish practices for AI systems’ oversight in accordance with policies developed in GOVERN-1.
- Define and develop training materials for relevant AI Actors about AI system performance, context of use, known limitations and negative impacts, and suggested warning labels.
- Include relevant AI Actors in AI system prototyping and testing activities. Conduct testing activities under scenarios similar to deployment conditions.
- Evaluate AI system oversight practices for validity and reliability. When oversight practices undergo extensive updates or adaptations, retest, evaluate results, and course correct as necessary.
- Verify that model documents contain interpretable descriptions of system mechanisms, enabling oversight personnel to make informed, risk-based decisions about system risks.

**Documentation prompts:**
- What are the roles, responsibilities, and delegation of authorities of personnel involved in the design, development, deployment, assessment and monitoring of the AI system?
- How does the entity assess whether personnel have the necessary skills, training, resources, and domain knowledge to fulfill their assigned responsibilities?

### MAP 4 — Risks and benefits of all components, incl. third-party

*AI RMF 1.0 category statement:* Risks and benefits are mapped for all components of the AI system including third-party software and data.

#### MAP 4.1

> Approaches for mapping AI technology and legal risks of its components – including the use of third-party data or software – are in place, followed, and documented, as are risks of infringement of a third-party’s intellectual property or other rights.

*AI Actors:* Third-party entities, Procurement, Operation and Monitoring, Governance and Oversight · *Topics:* Legal and Regulatory, Third-party, Pre-trained models, Supply Chain, Risk Tolerance, Risky Emergent Behavior

**Suggested actions** (4 of 4):
- Review audit reports, testing results, product roadmaps, warranties, terms of service, end user license agreements, contracts, and other documentation related to third-party entities to assist in value assessment and risk management activities.
- Review third-party software release schedules and software change management plans (hotfixes, patches, updates, forward- and backward- compatibility guarantees) for irregularities that may contribute to AI system risks.
- Inventory third-party material (hardware, open-source software, foundation models, open source data, proprietary software, proprietary data, etc.) required for system implementation and maintenance.
- Review redundancies related to third-party technology and personnel to assess potential risks due to lack of adequate support.

**Documentation prompts:**
- Did you establish a process for third parties (e.g. suppliers, end users, subjects, distributors/vendors or workers) to report potential vulnerabilities, risks or biases in the AI system?
- If your organization obtained datasets from a third party, did your organization assess and manage the risks of using such datasets?
- How will the results be independently verified?

#### MAP 4.2

> Internal risk controls for components of the AI system including third-party AI technologies are identified and documented.

*AI Actors:* AI Deployment, TEVV, Operation and Monitoring, Third-party entities · *Topics:* Third-party, Pre-trained models

**Suggested actions** (4 of 4):
- Track third-parties preventing or hampering risk-mapping as indications of increased risk.
- Supply resources such as model documentation templates and software safelists to assist in third-party technology inventory and approval activities.
- Review third-party material (including data and models) for risks related to bias, data privacy, and security vulnerabilities.
- Apply traditional technology risk controls – such as procurement, security, and data privacy controls – to all acquired third-party technologies.

**Documentation prompts:**
- Can the AI system be audited by independent third parties?
- To what extent do these policies foster public trust and confidence in the use of the AI system?
- Are mechanisms established to facilitate the AI system’s auditability (e.g. traceability of the development process, the sourcing of training data and the logging of the AI system’s processes, outcomes, positive and negative impact)?

### MAP 5 — Impacts characterized

*AI RMF 1.0 category statement:* Impacts to individuals, groups, communities, organizations, and society are characterized.

#### MAP 5.1

> Likelihood and magnitude of each identified impact (both potentially beneficial and harmful) based on expected use, past uses of AI systems in similar contexts, public incident reports, feedback from those external to the team that developed or deployed the AI system, or other data are identified and documented.

*AI Actors:* AI Design, AI Development, AI Deployment, AI Impact Assessment, Operation and Monitoring, Affected Individuals and Communities, End-Users · *Topics:* Participation, Impact Assessment

**Suggested actions** (4 of 4):
- Establish assessment scales for measuring AI systems’ impact. Scales may be qualitative, such as red-amber-green (RAG), or may entail simulations or econometric approaches. Document and apply scales uniformly across the organization’s AI portfolio.
- Apply TEVV regularly at key stages in the AI lifecycle, connected to system impacts and frequency of system updates.
- Identify and document likelihood and magnitude of system benefits and negative impacts in relation to trustworthiness characteristics.
- Establish processes for red teaming to identify and connect system limitations to AI lifecycle stage(s) and potential downstream impacts

**Documentation prompts:**
- Which population(s) does the AI system impact?
- What assessments has the entity conducted on trustworthiness characteristics for example data security and privacy impacts associated with the AI system?
- Can the AI system be tested by independent third parties?

#### MAP 5.2

> Practices and personnel for supporting regular engagement with relevant AI actors and integrating feedback about positive, negative, and unanticipated impacts are in place and documented.

*AI Actors:* AI Design, Human Factors, AI Deployment, AI Impact Assessment, Operation and Monitoring, Domain Experts, Affected Individuals and Communities, End-Users · *Topics:* Participation, Impact Assessment

**Suggested actions** (first 5 of 7):
- Establish and document stakeholder engagement processes at the earliest stages of system formulation to identify potential impacts from the AI system on individuals, groups, communities, organizations, and society.
- Employ methods such as value sensitive design (VSD) to identify misalignments between organizational and societal values, and system implementation and impact.
- Identify approaches to engage, capture, and incorporate input from system end users and other key stakeholders to assist with continuous monitoring for potential impacts and emergent risks.
- Incorporate quantitative, qualitative, and mixed methods in the assessment and documentation of potential impacts to individuals, groups, communities, organizations, and society.
- Identify a team (internal or external) that is independent of AI design and development functions to assess AI system benefits, positive and negative impacts and their likelihood and magnitude.

**Documentation prompts:**
- If the AI system relates to people, does it unfairly advantage or disadvantage a particular social group? In what ways? How was this managed?
- If the AI system relates to other ethically protected groups, have appropriate obligations been met?

## 8. MEASURE (4 categories, 22 subcategories)

MEASURE uses quantitative, qualitative or mixed methods to analyze, assess, benchmark and monitor the risks identified in MAP. Systems are tested before deployment and regularly in operation, trustworthiness characteristics are evaluated, and the results feed MANAGE.

### MEASURE 1 — Methods and metrics

*AI RMF 1.0 category statement:* Appropriate methods and metrics are identified and applied.

#### MEASURE 1.1

> Approaches and metrics for measurement of AI risks enumerated during the Map function are selected for implementation starting with the most significant AI risks. The risks or trustworthiness characteristics that will not – or cannot – be measured are properly documented.

*AI Actors:* AI Development, TEVV, Domain Experts · *Topics:* Trustworthy Characteristics (all seven), Risk Assessment, Risky Emergent Behavior, TEVV

**Suggested actions** (first 6 of 12):
- Establish approaches for detecting, tracking and measuring known risks, errors, incidents or negative impacts.
- Identify testing procedures and metrics to demonstrate whether or not the system is fit for purpose and functioning as claimed.
- Identify testing procedures and metrics to demonstrate AI system trustworthiness
- Define acceptable limits for system performance (e.g. distribution of errors), and include course correction suggestions if/when the system performs beyond acceptable limits.
- Define metrics for, and regularly assess, AI actor competency for effective system operation,
- Identify transparency metrics to assess whether stakeholders have access to necessary information about system design, development, deployment, use, and evaluation.

**Documentation prompts:**
- How will the appropriate performance metrics, such as accuracy, of the AI be monitored after the AI is deployed?
- What corrective actions has the entity taken to enhance the quality, accuracy, reliability, and representativeness of the data?
- Are there recommended data splits or evaluation measures?

#### MEASURE 1.2

> Appropriateness of AI metrics and effectiveness of existing controls is regularly assessed and updated including reports of errors and impacts on affected communities.
>
> *AI RMF 1.0 wording:* Appropriateness of AI metrics and effectiveness of existing controls are regularly assessed and updated, including reports of errors and potential impacts on affected communities.

*AI Actors:* TEVV, AI Impact Assessment, AI Development, AI Deployment, Affected Individuals and Communities · *Topics:* Impact Assessment, TEVV, Context of Use

**Suggested actions** (first 6 of 8):
- Assess external validity of all measurements (e.g., the degree to which measurements taken in one context can generalize to other contexts).
- Assess effectiveness of existing metrics and controls on a regular basis throughout the AI system lifecycle.
- Document reports of errors, incidents and negative impacts and assess sufficiency and efficacy of existing metrics for repairs, and upgrades
- Develop new metrics when existing metrics are insufficient or ineffective for implementing repairs and upgrades.
- Develop and utilize metrics to monitor, characterize and track external inputs, including any third-party tools.
- Determine frequency and scope for sharing metrics and related information with stakeholders and impacted communities.

**Documentation prompts:**
- What metrics has the entity developed to measure performance of the AI system?
- To what extent do the metrics provide accurate and useful measure of performance?
- What corrective actions has the entity taken to enhance the quality, accuracy, reliability, and representativeness of the data?

#### MEASURE 1.3

> Internal experts who did not serve as front-line developers for the system and/or independent assessors are involved in regular assessments and updates. Domain experts, users, AI actors external to the team that developed or deployed the AI system, and affected communities are consulted in support of assessments as necessary per organizational risk tolerance.

*AI Actors:* TEVV, AI Impact Assessment, AI Development, AI Deployment, Affected Individuals and Communities, Domain Experts, End-Users, Operation and Monitoring · *Topics:* Participation, Impact Assessment, Context of Use

**Suggested actions** (first 6 of 8):
- Evaluate TEVV processes regarding incentives to identify risks and impacts.
- Utilize separate testing teams established in the Govern function (2.1 and 4.1) to enable independent decisions and course-correction for AI systems. Track processes and measure and document change in performance.
- Plan and evaluate AI system prototypes with end user populations early and continuously in the AI lifecycle. Document test outcomes and course correct.
- Assess independence and stature of TEVV and oversight AI actors, to ensure they have the required levels of independence and resources to perform assurance, compliance, and feedback tasks effectively
- Evaluate interdisciplinary and demographically diverse internal team established in Map 1.2
- Evaluate effectiveness of external stakeholder feedback mechanisms, specifically related to processes for eliciting, evaluating and integrating input from diverse groups.

**Documentation prompts:**
- What are the roles, responsibilities, and delegation of authorities of personnel involved in the design, development, deployment, assessment and monitoring of the AI system?
- How easily accessible and current is the information available to external stakeholders?
- To what extent does the entity communicate its AI strategic goals and objectives to the community of stakeholders?

### MEASURE 2 — Evaluation for trustworthy characteristics

*AI RMF 1.0 category statement:* AI systems are evaluated for trustworthy characteristics.

#### MEASURE 2.1

> Test sets, metrics, and details about the tools used during test, evaluation, validation, and verification (TEVV) are documented.

*AI Actors:* TEVV · *Topics:* TEVV, Documentation, Validity and Reliability

**Suggested actions** (3 of 3):
- Leverage existing industry best practices for transparency and documentation of all possible aspects of measurements. Examples include: data sheet for data sets, model cards
- Regularly assess the effectiveness of tools used to document measurement approaches, test sets, metrics, processes and materials used
- Update the tools as needed

**Documentation prompts:**
- Given the purpose of this AI, what is an appropriate interval for checking whether it is still accurate, unbiased, explainable, etc.? What are the checks for this model?
- To what extent has the entity documented the AI system’s development, testing methodology, metrics, and performance outcomes?

#### MEASURE 2.2

> Evaluations involving human subjects meet applicable requirements (including human subject protection) and are representative of the relevant population.

*AI Actors:* TEVV, Human Factors, AI Development · *Topics:* Data, Human Subjects Protection

**Suggested actions** (first 6 of 8):
- Follow human subjects research requirements as established by organizational and disciplinary requirements, including informed consent and compensation, during dataset collection activities.
- Analyze differences between intended and actual population of users or data subjects, including likelihood for errors, incidents or negative impacts.
- Utilize disaggregated evaluation methods (e.g. by race, age, gender, ethnicity, ability, region) to improve AI system performance when deployed in real world settings.
- Establish thresholds and alert procedures for dataset representativeness within the context of use.
- Construct datasets in close collaboration with experts with knowledge of the context of use.
- Follow intellectual property and privacy rights related to datasets and their use, including for the subjects represented in the data.

**Documentation prompts:**
- Given the purpose of this AI, what is an appropriate interval for checking whether it is still accurate, unbiased, explainable, etc.? What are the checks for this model?
- How has the entity identified and mitigated potential impacts of bias in the data, including inequitable or discriminatory outcomes?

#### MEASURE 2.3

> AI system performance or assurance criteria are measured qualitatively or quantitatively and demonstrated for conditions similar to deployment setting(s). Measures are documented.

*AI Actors:* TEVV, AI Deployment · *Topics:* TEVV, Impact Assessment

**Suggested actions** (first 6 of 9):
- Conduct regular and sustained engagement with potentially impacted communities
- Maintain a demographically diverse and multidisciplinary and collaborative internal team
- Regularly test and evaluate systems in non-optimized conditions, and in collaboration with AI actors in user interaction and user experience (UI/UX) roles.
- Evaluate feedback from stakeholder engagement activities, in collaboration with human factors and socio-technical experts.
- Collaborate with socio-technical, human factors, and UI/UX experts to identify notable characteristics in context of use that can be translated into system testing scenarios.
- Measure AI systems prior to deployment in conditions similar to expected scenarios.

**Documentation prompts:**
- What experiments were initially run on this dataset? To what extent have experiments on the AI system been documented?
- To what extent does the system/entity consistently measure progress towards stated goals and objectives?
- How will the appropriate performance metrics, such as accuracy, of the AI be monitored after the AI is deployed? How much distributional shift or model drift from baseline performance is acceptable?

#### MEASURE 2.4

> The functionality and behavior of the AI system and its components – as identified in the MAP function – are monitored when in production.

*AI Actors:* AI Deployment, TEVV · *Topics:* TEVV, Monitoring, Drift

**Suggested actions** (first 5 of 7):
- Monitor and document how metrics and performance indicators observed in production differ from the same metrics collected during pre-deployment testing. When differences are observed, consider error propagation and feedback loop risks.
- Utilize hypothesis testing or human domain expertise to measure monitored distribution differences in new input or output data relative to test environments
- Monitor for anomalies using approaches such as control limits, confidence intervals, integrity constraints and ML algorithms. When anomalies are observed, consider error propagation and feedback loop risks.
- Verify alerts are in place for when distributions in new input data or generated predictions observed in production differ from pre-deployment test outcomes, or when anomalies are detected.
- Assess the accuracy and quality of generated outputs against new collected ground-truth information as it becomes available.

**Documentation prompts:**
- To what extent is the output of each component appropriate for the operational context?
- What justifications, if any, has the entity provided for the assumptions, boundaries, and limitations of the AI system?
- How will the appropriate performance metrics, such as accuracy, of the AI be monitored after the AI is deployed?

#### MEASURE 2.5

> The AI system to be deployed is demonstrated to be valid and reliable. Limitations of the generalizability beyond the conditions under which the technology was developed are documented.

*AI Actors:* TEVV, Domain Experts · *Topics:* TEVV, Validity and Reliability, Trustworthy Characteristics, Data

**Suggested actions** (first 6 of 15):
- Define the operating conditions and socio-technical context under which the AI system will be validated.
- Define and document processes to establish the system’s operational conditions and limits.
- Establish or identify, and document approaches to measure forms of validity, including:
    - construct validity (the test is measuring the concept it claims to measure)
    - internal validity (relationship being tested is not influenced by other factors or variables)
    - external validity (results are generalizable beyond the training condition)
    - the use of experimental design principles and statistical analyses and modeling.
- Assess and document system variance. Standard approaches include confidence intervals, standard deviation, standard error, bootstrapping, or cross-validation.
- Establish or identify, and document robustness measures.
- Establish or identify, and document reliability measures.

**Documentation prompts:**
- What testing, if any, has the entity conducted on theAI system to identify errors and limitations (i.e.adversarial or stress testing)?
- Given the purpose of this AI, what is an appropriate interval for checking whether it is still accurate, unbiased, explainable, etc.? What are the checks for this model?

#### MEASURE 2.6

> AI system is evaluated regularly for safety risks – as identified in the MAP function. The AI system to be deployed is demonstrated to be safe, its residual negative risk does not exceed the risk tolerance, and can fail safely, particularly if made to operate beyond its knowledge limits. Safety metrics implicate system reliability and robustness, real-time monitoring, and response times for AI system failures.
>
> *AI RMF 1.0 wording:* The AI system is evaluated regularly for safety risks – as identified in the MAP function. The AI system to be deployed is demonstrated to be safe, its residual negative risk does not exceed the risk tolerance, and it can fail safely, particularly if made to operate beyond its knowledge limits. Safety metrics reflect system reliability and robustness, real-time monitoring, and response times for AI system failures.

*AI Actors:* TEVV, Domain Experts, Operation and Monitoring, AI Impact Assessment, AI Deployment · *Topics:* TEVV, Safety, Trustworthy Characteristics, Context of Use

**Suggested actions** (first 4 of 7):
- Thoroughly measure system performance in development and deployment contexts, and under stress conditions.
    - Employ test data assessments and simulations before proceeding to production testing. Track multiple performance quality and error metrics.
    - Stress-test system performance under likely scenarios (e.g., concept drift, high load) and beyond known limitations, in consultation with domain experts.
    - Test the system under conditions similar to those related to past known incidents or near-misses and measure system performance and safety characteristics
    - Apply chaos engineering approaches to test systems in extreme conditions and gauge unexpected responses.
    - Document the range of conditions under which the system has been tested and demonstrated to fail safely.
- Measure and monitor system performance in real-time to enable rapid response when AI system incidents are detected.
- Collect pertinent safety statistics (e.g., out-of-range performance, incident response times, system down time, injuries, etc.) in anticipation of potential information sharing with impacted communities or as required by AI system oversight personnel.
- Align measurement to the goal of continuous improvement. Seek to increase the range of conditions under which the system is able to fail safely through system modifications in response to in-production testing and events.

**Documentation prompts:**
- What testing, if any, has the entity conducted on the AI system to identify errors and limitations (i.e.adversarial or stress testing)?
- To what extent has the entity documented the AI system’s development, testing methodology, metrics, and performance outcomes?

#### MEASURE 2.7

> AI system security and resilience – as identified in the MAP function – are evaluated and documented.

*AI Actors:* TEVV, Domain Experts, Operation and Monitoring, AI Impact Assessment, AI Deployment · *Topics:* TEVV, Secure and Resilient, Trustworthy Characteristics, Adversarial, Risky Emergent Behavior

**Suggested actions** (first 6 of 10):
- Establish and track AI system security tests and metrics (e.g., red-teaming activities, frequency and rate of anomalous events, system down-time, incident response times, time-to-bypass, etc.).
- Use red-team exercises to actively test the system under adversarial or stress conditions, measure system response, assess failure modes or determine if system can return to normal function after an unexpected adverse event.
- Document red-team exercise results as part of continuous improvement efforts, including the range of security test conditions and results.
- Use red-teaming exercises to evaluate potential mismatches between claimed and actual system performance.
- Use countermeasures (e.g, authentication, throttling, differential privacy, robust ML approaches) to increase the range of security conditions under which the system is able to return to normal function.
- Modify system security procedures and countermeasures to increase robustness and resilience to attacks in response to testing and events experienced in production.

**Documentation prompts:**
- To what extent does the plan specifically address risks associated with acquisition, procurement of packaged software from vendors, cybersecurity controls, computational infrastructure, data, data science, deployment mechanics, and system failure?
- What assessments has the entity conducted on data security and privacy impacts associated with the AI system?

#### MEASURE 2.8

> Risks associated with transparency and accountability – as identified in the MAP function – are examined and documented.

*AI Actors:* TEVV, Domain Experts, Operation and Monitoring, AI Impact Assessment, AI Deployment · *Topics:* TEVV, Accountability and Transparency, Trustworthy Characteristics

**Suggested actions** (first 4 of 6):
- Instrument the system for measurement and tracking, e.g., by maintaining histories, audit logs and other information that can be used by AI actors to review and evaluate possible sources of error, bias, or vulnerability.
- Calibrate controls for users in close collaboration with experts in user interaction and user experience (UI/UX), human computer interaction (HCI), and/or human-AI teaming.
- Test provided explanations for calibration with different audiences including operators, end users, decision makers and decision subjects (individuals for whom decisions are being made), and to enable recourse for consequential system decisions that affect end users or subjects.
- Measure and document human oversight of AI systems:
    - Document the degree of oversight that is provided by specified AI actors regarding AI system output.
    - Maintain statistics about downstream actions by end users and operators such as system overrides.
    - Maintain statistics about and document reported errors or complaints, time to respond, and response types.
    - Maintain and report statistics about adjudication activities.

**Documentation prompts:**
- To what extent has the entity clarified the roles, responsibilities, and delegated authorities to relevant stakeholders?
- What are the roles, responsibilities, and delegation of authorities of personnel involved in the design, development, deployment, assessment and monitoring of the AI system?
- Who is accountable for the ethical considerations during all stages of the AI lifecycle?

#### MEASURE 2.9

> The AI model is explained, validated, and documented, and AI system output is interpreted within its context – as identified in the MAP function – and to inform responsible use and governance.

*AI Actors:* TEVV, Domain Experts, Operation and Monitoring, AI Impact Assessment, AI Deployment, End-Users · *Topics:* TEVV, Explainability and Interpretability, Trustworthy Characteristics

**Suggested actions** (first 4 of 11):
- Verify systems are developed to produce explainable models, post-hoc explanations and audit logs.
- When possible or available, utilize approaches that are inherently explainable, such as traditional and penalized generalized linear models, decision trees, nearest-neighbor and prototype-based approaches, rule-based models, generalized additive models, explainable boosting machines and neural additive models.
- Test explanation methods and resulting explanations prior to deployment to gain feedback from relevant AI actors, end users, and potentially impacted individuals or groups about whether explanations are accurate, clear, and understandable.
- Document AI model details including model type (e.g., convolutional neural network, reinforcement learning, decision tree, random forest, etc.) data features, training algorithms, proposed uses, decision thresholds, training data, evaluation data, and ethical considerations.

**Documentation prompts:**
- Given the purpose of the AI, what level of explainability or interpretability is required for how the AI made its determination?
- Given the purpose of this AI, what is an appropriate interval for checking whether it is still accurate, unbiased, explainable, etc.? What are the checks for this model?

#### MEASURE 2.10

> Privacy risk of the AI system – as identified in the MAP function – is examined and documented.

*AI Actors:* TEVV, Domain Experts, Operation and Monitoring, AI Impact Assessment, AI Deployment, End-Users · *Topics:* TEVV, Privacy, Trustworthy Characteristics

**Suggested actions** (first 6 of 8):
- Specify privacy-related values, frameworks, and attributes that are applicable in the context of use through direct engagement with end users and potentially impacted groups and communities.
- Document collection, use, management, and disclosure of personally sensitive information in datasets, in accordance with privacy and data governance policies
- Quantify privacy-level data aspects such as the ability to identify individuals or groups (e.g. k-anonymity metrics, l-diversity, t-closeness).
- Establish and document protocols (authorization, duration, type) and access controls for training sets or production data containing personally sensitive information, in accordance with privacy and data governance policies.
- Monitor internal queries to production data for detecting patterns that isolate personal records.
- Monitor PSI disclosures and inference of sensitive or legally protected attributes
    - Assess the risk of manipulation from overly customized content. Evaluate information presented to representative users at various points along axes of difference between individuals (e.g. individuals of different ages, genders, races, political affiliation, etc.).

**Documentation prompts:**
- Did your organization implement accountability-based practices in data management and protection (e.g. the PDPA and OECD Privacy Principles)?
- What assessments has the entity conducted on data security and privacy impacts associated with the AI system?

#### MEASURE 2.11

> Fairness and bias – as identified in the MAP function – are evaluated and results are documented.

*AI Actors:* TEVV, Domain Experts, Operation and Monitoring, AI Impact Assessment, AI Deployment, End-Users, Affected Individuals and Communities · *Topics:* TEVV, Fairness and Bias, Trustworthy Characteristics

**Suggested actions** (first 4 of 24):
- Conduct fairness assessments to manage computational and statistical forms of bias which include the following steps:
    - Identify types of harms, including allocational, representational, quality of service, stereotyping, or erasure
    - Identify across, within, and intersecting groups that might be harmed
    - Quantify harms using both a general fairness metric, if appropriate (e.g. demographic parity, equalized odds, equal opportunity, statistical hypothesis tests), and custom, context-specific metrics developed in collaboration with affected communities
    - Analyze quantified harms for contextually significant differences across groups, within groups, and among intersecting groups
    - Refine identification of within-group and intersectional group disparities.
    - *…and 3 more*
- Understand and consider sources of bias in training and TEVV data:
    - Differences in distributions of outcomes across and within groups, including intersecting groups.
    - Completeness, representativeness and balance of data sources.
    - Identify input data features that may serve as proxies for demographic group membership (i.e., credit score, ZIP code) or otherwise give rise to emergent bias within AI systems.
    - Forms of systemic bias in images, text (or word embeddings), audio or other complex or unstructured data.
- Leverage impact assessments to identify and classify system impacts and harms to end users, other individuals, and groups with input from potentially impacted communities.
- Identify the classes of individuals, groups, or environmental ecosystems which might be impacted through direct engagement with potentially impacted communities.

**Documentation prompts:**
- To what extent are the established procedures effective in mitigating bias, inequity, and other concerns resulting from the system?
- If it relates to people, does it unfairly advantage or disadvantage a particular social group? In what ways? How was this mitigated?

#### MEASURE 2.12

> Environmental impact and sustainability of AI model training and management activities – as identified in the MAP function – are assessed and documented.

*AI Actors:* TEVV, Domain Experts, Operation and Monitoring, AI Impact Assessment, AI Deployment · *Topics:* TEVV, Environmental Impact

**Suggested actions** (6 of 6):
- Include environmental impact indicators in AI system design and development plans, including reducing consumption and improving efficiencies.
- Identify and implement key indicators of AI system energy and water consumption and efficiency, and/or GHG emissions.
- Establish measurable baselines for sustainable AI system operation in accordance with organizational policies, regulatory compliance, legal frameworks, and environmental protection and sustainability norms.
- Assess tradeoffs between AI system performance and sustainable operations in accordance with organizational principles and policies, regulatory compliance, legal frameworks, and environmental protection and sustainability norms.
- Identify and establish acceptable resource consumption and efficiency, and GHG emissions levels, along with actions to be taken if indicators rise above acceptable levels.
- Estimate AI system emissions levels throughout the AI lifecycle via carbon calculators or similar process.

**Documentation prompts:**
- Are greenhouse gas emissions, and energy and water consumption and efficiency tracked within the organization?
- Are deployed AI systems evaluated for potential upstream and downstream environmental impacts (e.g., increased consumption, increased emissions, etc.)?
- Could deployed AI systems cause environmental incidents, e.g., air or water pollution incidents, toxic spills, fires or explosions?

#### MEASURE 2.13

> Effectiveness of the employed TEVV metrics and processes in the MEASURE function are evaluated and documented.

*AI Actors:* TEVV, AI Deployment, Operation and Monitoring · *Topics:* TEVV, Effectiveness

**Suggested actions** (4 of 4):
- Review selected system metrics and associated TEVV processes to determine if they are able to sustain system improvements, including the identification and removal of errors.
- Regularly evaluate system metrics for utility, and consider descriptive approaches in place of overly complex methods.
- Review selected system metrics for acceptability within the end user and impacted community of interest.
- Assess effectiveness of metrics for identifying and measuring risks.

**Documentation prompts:**
- To what extent does the system/entity consistently measure progress towards stated goals and objectives?
- Given the purpose of this AI, what is an appropriate interval for checking whether it is still accurate, unbiased, explainable, etc.? What are the checks for this model?
- What corrective actions has the entity taken to enhance the quality, accuracy, reliability, and representativeness of the data?

### MEASURE 3 — Tracking risks over time

*AI RMF 1.0 category statement:* Mechanisms for tracking identified AI risks over time are in place.

#### MEASURE 3.1

> Approaches, personnel, and documentation are in place to regularly identify and track existing, unanticipated, and emergent AI risks based on factors such as intended and actual performance in deployed contexts.

*AI Actors:* TEVV, AI Impact Assessment, Operation and Monitoring · *Topics:* TEVV, Monitoring, Continual Improvement

**Suggested actions** (6 of 6):
- Compare AI system risks with:
    - simpler or traditional models
    - human baseline performance
    - other manual performance benchmarks
- Compare end user and community feedback about deployed AI systems to internal measures of system performance.
- Assess effectiveness of metrics for identifying and measuring emergent risks.
- Measure error response times and track response quality.
- Elicit and track feedback from AI actors in user support roles about the type of metrics, explanations and other system information required for fulsome resolution of system issues. Consider:
    - Instances where explanations are insufficient for investigating possible error sources or identifying responses.
    - System metrics, including system logs and explanations, for identifying and diagnosing sources of system error.
- Elicit and track feedback from AI actors in incident response and support roles about the adequacy of staffing and resources to perform their duties in an effective and timely manner.

**Documentation prompts:**
- Did your organization implement a risk management system to address risks involved in deploying the identified AI solution (e.g. personnel risk or changes to commercial objectives)?
- To what extent can users or parties affected by the outputs of the AI system test the AI system and provide feedback?
- What metrics has the entity developed to measure performance of the AI system, including error logging?

#### MEASURE 3.2

> Risk tracking approaches are considered for settings where AI risks are difficult to assess using currently available measurement techniques or where metrics are not yet available.

*AI Actors:* TEVV, Domain Experts, AI Impact Assessment, Operation and Monitoring · *Topics:* Monitoring, Continual Improvement

**Suggested actions** (3 of 3):
- Establish processes for tracking emergent risks that may not be measurable with current approaches. Some processes may include:
    - Recourse mechanisms for faulty AI system outputs.
    - Bug bounties.
    - Human-centered design approaches.
    - User-interaction and experience research.
    - Participatory stakeholder engagement with affected or potentially impacted individuals and communities.
- Identify AI actors responsible for tracking emergent risks and inventory methods.
- Determine and document the rate of occurrence and severity level for complex or difficult-to-measure risks when:
    - Prioritizing new measurement approaches for deployment tasks.
    - Allocating AI system risk management resources.
    - Evaluating AI system improvements.
    - Making go/no-go decisions for subsequent system iterations.

**Documentation prompts:**
- Who is ultimately responsible for the decisions of the AI and is this person aware of the intended uses and limitations of the analytic?
- Who will be responsible for maintaining, re-verifying, monitoring, and updating this AI once deployed?
- To what extent does the entity communicate its AI strategic goals and objectives to the community of stakeholders?

#### MEASURE 3.3

> Feedback processes for end users and impacted communities to report problems and appeal system outcomes are established and integrated into AI system evaluation metrics.

*AI Actors:* TEVV, AI Deployment, Operation and Monitoring, End-Users, Affected Individuals and Communities · *Topics:* Participation, Contestability, TEVV, Impact Assessment

**Suggested actions** (6 of 6):
- Measure efficacy of end user and operator error reporting processes.
- Categorize and analyze type and rate of end user appeal requests and results.
- Measure feedback activity participation rates and awareness of feedback activity availability.
- Utilize feedback to analyze measurement approaches and determine subsequent courses of action.
- Evaluate measurement approaches to determine efficacy for enhancing organizational understanding of real world impacts.
- Analyze end user and community feedback in close collaboration with domain experts.

**Documentation prompts:**
- To what extent can users or parties affected by the outputs of the AI system test the AI system and provide feedback?
- Did your organization address usability problems and test whether user interfaces served their intended purposes?
- How easily accessible and current is the information available to external stakeholders?

### MEASURE 4 — Feedback on measurement efficacy

*AI RMF 1.0 category statement:* Feedback about efficacy of measurement is gathered and assessed.

#### MEASURE 4.1

> Measurement approaches for identifying AI risks are connected to deployment context(s) and informed through consultation with domain experts and other end users. Approaches are documented.

*AI Actors:* TEVV, AI Deployment, Operation and Monitoring, End-Users, Affected Individuals and Communities · *Topics:* TEVV, Participation, Context of Use

**Suggested actions** (first 4 of 6):
- Support mechanisms for capturing feedback from system end users (including domain experts, operators, and practitioners). Successful approaches are:
    - conducted in settings where end users are able to openly share their doubts and insights about AI system output, and in connection to their specific context of use (including setting and task-specific lines of inquiry)
    - developed and implemented by human-factors and socio-technical domain experts and researchers
    - designed to ensure control of interviewer and end user subjectivity and biases
- Identify and document approaches
    - for evaluating and integrating elicited feedback from system end users
    - in collaboration with human-factors and socio-technical domain experts,
    - to actively inform a process of continual improvement.
- Evaluate feedback from end users alongside evaluated feedback from impacted communities (MEASURE 3.3).
- Utilize end user feedback to investigate how selected metrics and measurement approaches interact with organizational and operational contexts.

**Documentation prompts:**
- Did your organization address usability problems and test whether user interfaces served their intended purposes?
- How will user and peer engagement be integrated into the model development process and periodic performance review once deployed?
- To what extent can users or parties affected by the outputs of the AI system test the AI system and provide feedback?

#### MEASURE 4.2

> Measurement results regarding AI system trustworthiness in deployment context(s) and across AI lifecycle are informed by input from domain experts and other relevant AI actors to validate whether the system is performing consistently as intended. Results are documented.

*AI Actors:* TEVV, AI Deployment, Domain Experts, Operation and Monitoring, End-Users · *Topics:* TEVV, Participation, Trustworthy Characteristics (all seven)

**Suggested actions** (6 of 6):
- Integrate feedback from end users, operators, and affected individuals and communities from Map function as inputs to assess AI system trustworthiness characteristics. Ensure both positive and negative feedback is being assessed.
- Evaluate feedback in connection with AI system trustworthiness characteristics from Measure 2.5 to 2.11.
- Evaluate feedback regarding end user satisfaction with, and confidence in, AI system performance including whether output is considered valid and reliable, and explainable and interpretable.
- Identify mechanisms to confirm/support AI system output (e.g. recommendations), and end user perspectives about that output.
- Measure frequency of AI systems’ override decisions, evaluate and document results, and feed insights back into continual improvement processes.
- Consult AI actors in impact assessment, human factors and socio-technical tasks to assist with analysis and interpretation of results.

**Documentation prompts:**
- To what extent does the system/entity consistently measure progress towards stated goals and objectives?
- What policies has the entity developed to ensure the use of the AI system is consistent with its stated values and principles?
- To what extent are the model outputs consistent with the entity’s values and principles to foster public trust and equity?

#### MEASURE 4.3

> Measurable performance improvements or declines based on consultations with relevant AI actors including affected communities, and field data about context-relevant risks and trustworthiness characteristics, are identified and documented.

*AI Actors:* TEVV, AI Deployment, Operation and Monitoring, End-Users, Affected Individuals and Communities · *Topics:* TEVV, Participation, Trustworthy Characteristics (all seven)

**Suggested actions** (6 of 6):
- Develop baseline quantitative measures for trustworthy characteristics.
- Delimit and characterize baseline operation values and states.
- Utilize qualitative approaches to augment and complement quantitative baseline measures, in close coordination with impact assessment, human factors and socio-technical AI actors.
- Monitor and assess measurements as part of continual improvement to identify potential system adjustments or modifications
- Perform and document sensitivity analysis to characterize actual and expected variance in performance after applying system or procedural updates.
- Document decisions related to the sensitivity analysis and record expected influence on system performance and identified risks.

**Documentation prompts:**
- To what extent are the model outputs consistent with the entity’s values and principles to foster public trust and equity?
- How were sensitive variables (e.g., demographic and socioeconomic categories) that may be subject to regulatory compliance specifically selected or not selected for modeling purposes?

## 9. MANAGE (4 categories, 13 subcategories)

MANAGE allocates risk resources to mapped and measured risks, as GOVERN defines. It covers the go/no-go determination, risk treatment and response, third-party risks, post-deployment monitoring, and plans to respond to, recover from and communicate about incidents.

### MANAGE 1 — Prioritize and respond to assessed risks

*AI RMF 1.0 category statement:* AI risks based on assessments and other analytical output from the MAP and MEASURE functions are prioritized, responded to, and managed.

#### MANAGE 1.1

> A determination is made as to whether the AI system achieves its intended purpose and stated objectives and whether its development or deployment should proceed.

*AI Actors:* AI Deployment, Operation and Monitoring, AI Impact Assessment · *Topics:* AI Deployment, Risk Assessment

**Suggested actions** (5 of 5):
- Consider trustworthiness characteristics when evaluating AI systems’ negative risks and benefits.
- Utilize TEVV outputs from map and measure functions when considering risk treatment.
- Regularly track and monitor negative risks and benefits throughout the AI system lifecycle including in post-deployment monitoring.
- Regularly assess and document system performance relative to trustworthiness characteristics and tradeoffs between negative risks and opportunities.
- Evaluate tradeoffs in connection with real-world use cases and impacts and as enumerated in Map function outcomes.

**Documentation prompts:**
- How do the technical specifications and requirements align with the AI system’s goals and objectives?
- To what extent are the metrics consistent with system goals, objectives, and constraints, including ethical and compliance considerations?
- What goals and objectives does the entity expect to achieve by designing, developing, and/or deploying the AI system?

#### MANAGE 1.2

> Treatment of documented AI risks is prioritized based on impact, likelihood, or available resources or methods.
>
> *AI RMF 1.0 wording:* Treatment of documented AI risks is prioritized based on impact, likelihood, and available resources or methods.

*AI Actors:* AI Deployment, Operation and Monitoring, AI Impact Assessment · *Topics:* Risk Tolerance

**Suggested actions** (3 of 3):
- Assign risk management resources relative to established risk tolerance. AI systems with lower risk tolerances receive greater oversight, mitigation and management resources.
- Document AI risk tolerance determination practices and resource decisions.
- Regularly review risk tolerances and re-calibrate, as needed, in accordance with information from AI system monitoring and assessment.

**Documentation prompts:**
- Did your organization implement a risk management system to address risks involved in deploying the identified AI solution (e.g. personnel risk or changes to commercial objectives)?
- What assessments has the entity conducted on data security and privacy impacts associated with the AI system?
- Does your organization have an existing governance structure that can be leveraged to oversee the organization’s use of AI?

#### MANAGE 1.3

> Responses to the AI risks deemed high priority as identified by the Map function, are developed, planned, and documented. Risk response options can include mitigating, transferring, avoiding, or accepting.

*AI Actors:* AI Deployment, Operation and Monitoring, AI Impact Assessment · *Topics:* Legal and Regulatory, Risk Tolerance

**Suggested actions** (5 of 5):
- Observe regulatory and established organizational, sector, discipline, or professional standards and requirements for applying risk tolerances within the organization.
- Document procedures for acting on AI system risks related to trustworthiness characteristics.
- Prioritize risks involving physical safety, legal liabilities, regulatory compliance, and negative impacts on individuals, groups, or society.
- Identify risk response plans and resources and organizational teams for carrying out response functions.
- Store risk management and system documentation in an organized, secure repository that is accessible by relevant AI Actors and appropriate personnel.

**Documentation prompts:**
- Has the system been reviewed to ensure the AI system complies with relevant laws, regulations, standards, and guidance?
- To what extent has the entity defined and documented the regulatory environment—including minimum requirements in laws and regulations?

#### MANAGE 1.4

> Negative residual risks (defined as the sum of all unmitigated risks) to both downstream acquirers of AI systems and end users are documented.

*AI Actors:* AI Deployment, Operation and Monitoring, AI Impact Assessment · *Topics:* Risk Response

**Suggested actions** (3 of 3):
- Document residual risks within risk response plans, denoting risks that have been accepted, transferred, or subject to minimal mitigation.
- Establish procedures for disclosing residual risks to relevant downstream AI actors.
- Inform relevant downstream AI actors of requirements for safe operation, known limitations, and suggested warning labels as identified in MAP 3.4.

**Documentation prompts:**
- What are the roles, responsibilities, and delegation of authorities of personnel involved in the design, development, deployment, assessment and monitoring of the AI system?
- Who will be responsible for maintaining, re-verifying, monitoring, and updating this AI once deployed?
- How will updates/revisions be documented and communicated? How often and by whom?

### MANAGE 2 — Maximize benefits, minimize negative impacts

*AI RMF 1.0 category statement:* Strategies to maximize AI benefits and minimize negative impacts are planned, prepared, implemented, documented, and informed by input from relevant AI actors.

#### MANAGE 2.1

> Resources required to manage AI risks are taken into account, along with viable non-AI alternative systems, approaches, or methods – to reduce the magnitude or likelihood of potential impacts.

*AI Actors:* AI Deployment, Operation and Monitoring, AI Impact Assessment, Governance and Oversight · *Topics:* Risk Tolerance, Trade-offs

**Suggested actions** (first 4 of 6):
- Plan and implement risk management practices in accordance with established organizational risk tolerances.
- Verify risk management teams are resourced to carry out functions, including
    - Establishing processes for considering methods that are not automated; semi-automated; or other procedural alternatives for AI functions.
    - Enhance AI system transparency mechanisms for AI teams.
    - Enable exploration of AI system limitations by AI teams.
    - Identify, assess, and catalog past failed designs and negative impacts or outcomes to avoid known failure modes.
- Identify resource allocation approaches for managing risks in systems:
    - deemed high-risk,
    - that self-update (adaptive, online, reinforcement self-supervised learning or similar),
    - trained without access to ground truth (unsupervised, semi-supervised, learning or similar),
    - with high uncertainty or where risk management is insufficient.
- Regularly seek and integrate external expertise and perspectives to supplement organizational diversity (e.g. demographic, disciplinary), equity, inclusion, and accessibility where internal capacity is lacking.

**Documentation prompts:**
- Are mechanisms in place to evaluate whether internal teams are empowered and resourced to effectively carry out risk management functions?
- How will user and other forms of stakeholder engagement be integrated into risk management processes?

#### MANAGE 2.2

> Mechanisms are in place and applied to sustain the value of deployed AI systems.

*AI Actors:* AI Deployment, Operation and Monitoring, AI Impact Assessment, Governance and Oversight · *Topics:* AI Deployment, Drift, Societal Values

**Suggested actions** (first 4 of 5):
- Establish risk controls considering trustworthiness characteristics, including:
    - Data management, quality, and privacy (e.g. minimization, rectification or deletion requests) controls as part of organizational data governance policies.
    - Machine learning and end-point security countermeasures (e.g., robust models, differential privacy, authentication, throttling).
    - Business rules that augment, limit or restrict AI system outputs within certain contexts
    - Utilizing domain expertise related to deployment context for continuous improvement and TEVV across the AI lifecycle.
    - Development and regular tracking of human-AI teaming configurations.
    - *…and 4 more*
- Establish mechanisms to capture feedback from system end users and potentially impacted groups while system is in deployment.
- Establish mechanisms to capture feedback from system end users and potentially impacted groups about how changes in system deployment (e.g., introducing new technology, decommissioning algorithms and models, adapting system, model or algorithm) may create negative impacts that are not visible along the AI lifecycle.
- Review insurance policies, warranties, or contracts for legal or oversight requirements for risk transfer procedures.

**Documentation prompts:**
- To what extent can users or parties affected by the outputs of the AI system test the AI system and provide feedback?
- Could the AI system expose people to harm or negative impacts? What was done to mitigate or reduce the potential for harm?

#### MANAGE 2.3

> Procedures are followed to respond to and recover from a previously unknown risk when it is identified.

*AI Actors:* AI Deployment, Operation and Monitoring · *Topics:* Risk Response

**Suggested actions** (first 6 of 7):
- Protocols, resources, and metrics are in place for continual monitoring of AI systems’ performance, trustworthiness, and alignment with contextual norms and values
- Establish and regularly review treatment and response plans for incidents, negative impacts, or outcomes.
- Establish and maintain procedures to regularly monitor system components for drift, decontextualization, or other AI system behavior factors,
- Establish and maintain procedures for capturing feedback about negative impacts.
- Verify contingency processes to handle any negative impacts associated with mission-critical AI systems, and to deactivate systems.
- Enable preventive and post-hoc exploration of AI system limitations by relevant AI actor groups.

**Documentation prompts:**
- Who will be responsible for maintaining, re-verifying, monitoring, and updating this AI once deployed?
- Are the responsibilities of the personnel involved in the various AI governance processes clearly defined?
- What processes exist for data generation, acquisition/collection, ingestion, staging/storage, transformations, security, maintenance, and dissemination?

#### MANAGE 2.4

> Mechanisms are in place and applied, responsibilities are assigned and understood to supersede, disengage, or deactivate AI systems that demonstrate performance or outcomes inconsistent with intended use.

*AI Actors:* AI Deployment, Operation and Monitoring, Governance and Oversight · *Topics:* Risk Response, Decommission, Risky Emergent Behavior

**Suggested actions** (first 6 of 8):
- Regularly review established procedures for AI system bypass actions, including plans for redundant or backup systems to ensure continuity of operational and/or business functionality.
- Regularly review Identify system incident thresholds for activating bypass or deactivation responses.
- Apply change management processes to understand the upstream and downstream consequences of bypassing or deactivating an AI system or AI system components.
- Apply protocols, resources and metrics for decisions to supersede, bypass or deactivate AI systems or AI system components.
- Preserve materials for forensic, regulatory, and legal review.
- Conduct internal root cause analysis and process reviews of bypass or deactivation events.

**Documentation prompts:**
- What are the roles, responsibilities, and delegation of authorities of personnel involved in the design, development, deployment, assessment and monitoring of the AI system?
- Did your organization implement a risk management system to address risks involved in deploying the identified AI solution (e.g. personnel risk or changes to commercial objectives)?

### MANAGE 3 — Third-party risks and benefits

*AI RMF 1.0 category statement:* AI risks and benefits from third-party entities are managed.

#### MANAGE 3.1

> AI risks and benefits from third-party resources are regularly monitored, and risk controls are applied and documented.

*AI Actors:* Third-party entities, Operation and Monitoring, AI Deployment · *Topics:* Third-party, Supply Chain

**Suggested actions** (first 6 of 9):
- Apply organizational risk tolerance to third-party AI systems.
- Apply and document organizational risk management plans and practices to third-party AI technology, personnel, or other resources.
- Identify and maintain documentation for third-party AI systems and components.
- Establish testing, evaluation, validation and verification processes for third-party AI systems which address the needs for transparency without exposing proprietary algorithms.
- Establish processes to identify beneficial use and risk indicators in third-party systems or components, such as inconsistent software release schedule, sparse documentation, and incomplete software change management (e.g., lack of forward or backward compatibility).
- Organizations can establish processes for third parties to report known and potential vulnerabilities, risks or biases in supplied resources.

**Documentation prompts:**
- If a third party created the AI system or some of its components, how will you ensure a level of explainability or interpretability? Is there documentation?
- If your organization obtained datasets from a third party, did your organization assess and manage the risks of using such datasets?

#### MANAGE 3.2

> Pre-trained models which are used for development are monitored as part of AI system regular monitoring and maintenance.

*AI Actors:* Third-party entities, Operation and Monitoring, AI Deployment · *Topics:* Pre-trained models, Monitoring

**Suggested actions** (5 of 5):
- Identify pre-trained models within AI system inventory for risk tracking.
- Establish processes to independently and continually monitor performance and trustworthiness of pre-trained models, and as part of third-party risk tracking.
- Monitor performance and trustworthiness of AI system components connected to pre-trained models, and as part of third-party risk tracking.
- Identify, document and remediate risks arising from AI system components and pre-trained models per organizational risk management procedures, and as part of third-party risk tracking.
- Decommission AI system components and pre-trained models which exceed risk tolerances, and as part of third-party risk tracking.

**Documentation prompts:**
- How has the entity documented the AI system’s data provenance, including sources, origins, transformations, augmentations, labels, dependencies, constraints, and metadata?
- Does this dataset collection/processing procedure achieve the motivation for creating the dataset stated in the first section of this datasheet?

### MANAGE 4 — Risk treatment, monitoring and communication plans

*AI RMF 1.0 category statement:* Risk treatments, including response and recovery, and communication plans for the identified and measured AI risks are documented and monitored regularly.

#### MANAGE 4.1

> Post-deployment AI system monitoring plans are implemented, including mechanisms for capturing and evaluating input from users and other relevant AI actors, appeal and override, decommissioning, incident response, recovery, and change management.

*AI Actors:* AI Deployment, Operation and Monitoring, End-Users, Human Factors, Domain Experts, Affected Individuals and Communities · *Topics:* Monitoring, Participation, AI Deployment, AI Incidents, Risk Response, Adversarial, Risky Emergent Behavior

**Suggested actions** (first 6 of 9):
- Establish and maintain procedures to monitor AI system performance for risks and negative and positive impacts associated with trustworthiness characteristics.
- Perform post-deployment TEVV tasks to evaluate AI system validity and reliability, bias and fairness, privacy, and security and resilience.
- Evaluate AI system trustworthiness in conditions similar to deployment context of use, and prior to deployment.
- Establish and implement red-teaming exercises at a prescribed cadence, and evaluate their efficacy.
- Establish procedures for tracking dataset modifications such as data deletion or rectification requests.
- Establish mechanisms for regular communication and feedback between relevant AI actors and internal or external stakeholders to capture information about system performance, trustworthiness and impact.

**Documentation prompts:**
- To what extent has the entity documented the post-deployment AI system’s testing methodology, metrics, and performance outcomes?
- How easily accessible and current is the information available to external stakeholders?

#### MANAGE 4.2

> Measurable activities for continual improvements are integrated into AI system updates and include regular engagement with interested parties, including relevant AI actors.

*AI Actors:* TEVV, AI Design, AI Development, AI Deployment, Operation and Monitoring, End-Users, Affected Individuals and Communities · *Topics:* Monitoring, Impact Assessment, Risk Assessment, Continual Improvement

**Suggested actions** (5 of 5):
- Integrate trustworthiness characteristics into protocols and metrics used for continual improvement.
- Establish processes for evaluating and integrating feedback into AI system improvements.
- Assess and evaluate alignment of proposed improvements with relevant regulatory and legal frameworks
- Assess and evaluate alignment of proposed improvements connected to the values and norms within the context of use.
- Document the basis for decisions made relative to tradeoffs between trustworthy characteristics, system risks, and system opportunities

**Documentation prompts:**
- How will user and other forms of stakeholder engagement be integrated into the model development process and regular performance review once deployed?
- To what extent can users or parties affected by the outputs of the AI system test the AI system and provide feedback?
- To what extent has the entity defined and documented the regulatory environment—including minimum requirements in laws and regulations?

#### MANAGE 4.3

> Incidents and errors are communicated to relevant AI actors including affected communities. Processes for tracking, responding to, and recovering from incidents and errors are followed and documented.

*AI Actors:* AI Deployment, Operation and Monitoring, End-Users, Human Factors, Domain Experts, Affected Individuals and Communities · *Topics:* AI Incidents, Monitoring

**Suggested actions** (5 of 5):
- Establish procedures to regularly share information about errors, incidents and negative impacts with relevant stakeholders, operators, practitioners and users, and impacted parties.
- Maintain a database of reported errors, near-misses, incidents and negative impacts including date reported, number of reports, assessment of impact and severity, and responses.
- Maintain a database of system changes, reason for change, and details of how the change was made, tested and deployed.
- Maintain version history information and metadata to enable continuous improvement processes.
- Verify that relevant AI actors responsible for identifying complex or emergent risks are properly resourced and empowered.

**Documentation prompts:**
- What corrective actions has the entity taken to enhance the quality, accuracy, reliability, and representativeness of the data?
- To what extent does the entity communicate its AI strategic goals and objectives to the community of stakeholders? How easily accessible and current is the information available to external stakeholders?

## Exam Angles

- **Framework vs Playbook.** AI RMF 1.0 defines *what*: the outcome for each category and subcategory. The Playbook gives *how*: suggested actions, documentation prompts and references for each subcategory. "Where do I find concrete steps for MEASURE 2.11?" is the Playbook. "What outcome does MEASURE 2.11 require?" is the RMF Core.
- **Status traps.** Voluntary, not a checklist, not an ordered sequence, no certification. Options saying an organization must implement every suggested action, must work through subcategories in order, or can be certified against the Playbook are wrong.
- **GOVERN is cross-cutting.** It informs and is infused throughout the other three functions and applies to all stages of the organization's risk management. MAP, MEASURE and MANAGE apply to specific systems and lifecycle stages. Once governance is in place, most users start with MAP and continue to MEASURE or MANAGE, iterating as needed.
- **Placing a scenario.** Organization-wide policy, roles, training, culture and third-party policy point to GOVERN. Purpose, users, setting, risk tolerance, categorization, benefits and costs, component risks and impacts point to MAP. Metrics, TEVV and evaluation of trustworthiness characteristics point to MEASURE. Go/no-go decisions, risk treatment, third-party monitoring, post-deployment monitoring and incident communication point to MANAGE.
- **MEASURE 2 mirrors the trustworthiness characteristics.** 2.5 valid and reliable, 2.6 safe, 2.7 secure and resilient, 2.8 transparency and accountability, 2.9 explainable and interpretable, 2.10 privacy, 2.11 fairness and bias. 2.12 adds environmental impact and 2.13 checks TEVV effectiveness. With 13 subcategories it is the largest category.
- **Look-alike pairs.** MEASURE 2.4 (production behaviour monitored, e.g. drift alerts against pre-deployment tests) vs MANAGE 4.1 (the post-deployment monitoring plan: user input, appeal and override, decommissioning, incident response, recovery, change management). GOVERN 6.1 (third-party policies) vs MAP 4.1 (mapping component, legal and IP risks) vs MANAGE 3.1–3.2 (monitoring third-party resources and pre-trained models). GOVERN 1.7 (decommissioning policies) vs MANAGE 2.4 (mechanisms to supersede, disengage or deactivate).
- **AI actors.** The Playbook tags each subcategory with the Appendix A actor groups most involved. TEVV is tagged on every MEASURE subcategory. AI Deployment and Operation and Monitoring are tagged on every MANAGE subcategory. Governance and Oversight dominates GOVERN. Affected individuals and communities count as AI actors even if they never use the system.
- **Risk response vocabulary.** MANAGE 1.3: responses to high-priority risks can include mitigating, transferring, avoiding or accepting. MANAGE 1.4: residual risk is "the sum of all unmitigated risks", documented for downstream acquirers and end users.
- **Wording and currency.** Where the Playbook words a statement differently from the RMF tables (the RMF text is shown under those statements in sections 6–9), use the RMF text. AI RMF 1.0 is under revision as of 2026 and the Playbook will follow; answer from the versions currently published.

## Key Terms

- [[Suggested Actions (AI RMF Playbook)]]
- [[Transparency and Documentation Prompts (AI RMF Playbook)]]
- [[AI Actors (NIST AI RMF)]]
- [[AI RMF Subcategory]]
- [[NIST AI RMF Playbook]]

## Sources

- https://airc.nist.gov/airmf-resources/playbook/
- https://airc.nist.gov/airmf-resources/playbook/faq/
- https://airc.nist.gov/docs/playbook.json
- https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook
- https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
- https://www.nist.gov/itl/ai-risk-management-framework
- https://www.nist.gov/itl/ai-risk-management-framework/ai-risk-management-framework-faqs
- https://www.nist.gov/system/files/documents/2026/03/27/03_AI%20Update-March.pdf
