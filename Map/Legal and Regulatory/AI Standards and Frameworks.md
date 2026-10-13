---
tags:
 - aigp/domain-II
 - aigp/area
 - aigp/standards
created: 2026-07-11
updated: 2026-09-23
domain: "II: Understanding How Laws, Standards, and Frameworks Apply to AI"
subdomain: "II.D: Understand the Main Industry Standards and Tools That Apply to AI"
related:
 - "[[Legal and Regulatory Index]]"
 - "[[AIGP Body of Knowledge — Exam Blueprint]]"
 - "[[OECD AI Principles — Structured Reference]]"
 - "[[NIST AI RMF — Structured Reference]]"
 - "[[ISO 22989 — Key Definitions]]"
 - "[[ISO 42001 — Structured Reference]]"
 - "[[ISO 42005 — AI System Impact Assessment]]"
 - "[[The EU AI Act]]"
 - "[[AI System Design]]"
---

# AI Standards and Frameworks

> **Domain II, Subdomain II.D** — Understanding the Main Industry Standards and Tools That Apply to AI

## Performance Indicators

*BOK v2.1 (effective 2 February 2026), II.D, paraphrased. Blueprint weight: 3–5 exam questions, down from 4–6 in v2.0.1.*

- Know the **OECD's** trustworthy-AI principles, together with its related framework, policy work and recommended practices
- Know the **NIST AI Risk Management Framework** and its **Playbook**, down to the core functions, categories and subcategories
- Know the **core ISO AI standards**, which v2.1 lists as exactly three: **ISO/IEC 22989, 42001 and 42005**

> **What changed from v2.0.1:** the NIST ARIA indicator was dropped (§3 is now background only), and ISO/IEC 42005 joined 22989 and 42001 as a core ISO standard. ISO/IEC 23894 is not named in either version, though 42005's Annex B maps to it (§4).

---

## 1. OECD AI Principles and Related OECD Tools

The **OECD Recommendation on Artificial Intelligence** (OECD/LEGAL/0449) was adopted on **22 May 2019** as the first intergovernmental standard on AI. The OECD Council revised its **AI system definition on 8 November 2023** and revised the Recommendation more broadly on **3 May 2024**. As a Recommendation it is **not legally binding**: adherents make a political commitment to implement it. OECD.AI lists **47 adherents**, the EU among them (September 2026). At the June 2019 Osaka Summit, G20 leaders welcomed G20 AI Principles drawn from it. Full detail: [[OECD AI Principles — Structured Reference]].

> **Why II.D says "principles, framework, policies and recommended practices":** the exam can reach past the five principles into the OECD's working tools below: the AI system definition, the classification framework, the incident and hazard definitions, and the Hiroshima reporting framework.

### Five Values-Based Principles (2024 headings)

| # | Principle | Core Focus |
|---|-----------|------------|
| 1.1 | **Inclusive growth, sustainable development and well-being** | Beneficial outcomes for people and the planet; augmenting human capabilities; reducing inequalities; environmental sustainability (explicit since 2024) |
| 1.2 | **Respect for the rule of law, human rights and democratic values, including fairness and privacy** | Non-discrimination, dignity, autonomy, privacy and data protection, labour rights; addressing AI-amplified mis- and disinformation; safeguards against misuse. *2019 heading: "Human-centred values and fairness"* |
| 1.3 | **Transparency and explainability** | Meaningful information on capabilities and limitations; awareness of AI interactions; plain-language information on factors and logic; information that lets adversely affected people challenge outputs |
| 1.4 | **Robustness, security and safety** | Function appropriately under normal use, foreseeable use or misuse, and adverse conditions; mechanisms to override, repair or decommission safely; bolster information integrity |
| 1.5 | **Accountability** | Role-based accountability; traceability of datasets, processes and decisions; systematic risk management and responsible business conduct across the lifecycle |

### Five Recommendations for Policy Makers

1. Investing in AI research and development
2. Fostering an inclusive AI-enabling ecosystem
3. Shaping an enabling interoperable governance and policy environment for AI
4. Building human capacity and preparing for labour market transformation
5. International co-operation for trustworthy AI

### AI System Definition Update (8 November 2023)

Current text: *"a machine-based system that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments."* A second sentence adds that systems vary in autonomy and adaptiveness after deployment.

| Edit | Why |
|---|---|
| Objectives may be **explicit or implicit** (replacing "a given set of human-defined objectives") | Goals can be learned, e.g., through reinforcement learning from human feedback |
| The system **infers from the input it receives** | Stresses the role of input, which may come from humans or machines |
| **"Content"** added to the outputs | Makes clear generative AI is covered |
| **"Physical"** replaces "real" | Clarity and alignment with other international processes |
| **Adaptiveness after deployment** | Some systems keep evolving after design and deployment |

The EU AI Act's Art. 3(1) definition closely tracks this wording, and Recital 12 asks for close alignment with the work of international organisations. An explanatory memorandum (OECD AI Papers No. 8) followed in March 2024.

### May 2024 Revision

- New language on **information integrity**: mis- and disinformation amplified by AI, with respect for freedom of expression
- Coverage of **uses outside the intended purpose, intentional misuse and unintentional misuse**
- Clearer **transparency and responsible-disclosure** information for AI actors
- **Safety:** systems that risk undue harm or behave undesirably can be overridden, repaired and/or decommissioned safely
- **Responsible business conduct** across the lifecycle, including co-operation with suppliers and users
- **Interoperable governance** across jurisdictions
- An explicit reference to **environmental sustainability**
- Some headings expanded, and the **traceability and risk-management text moved into Accountability** (1.5). There are still five principles

### Framework for the Classification of AI Systems (February 2022)

Published as OECD Digital Economy Papers No. 323, this is a tool for policy makers, regulators and legislators to characterize an AI system in its context and link its features to policy concerns.

| Dimension | Sample criteria |
|---|---|
| **People & Planet** | Users and their competence; impacted stakeholders; optionality and redress; human rights; well-being and environment; displacement potential |
| **Economic Context** | Industrial sector; business function and model; criticality; breadth of deployment; technical maturity |
| **Data & Input** | Detection and collection; provenance; dynamic nature; rights and identifiability; structure and format; scale; quality and appropriateness |
| **AI Model** | Model type (symbolic, statistical, hybrid); generative or discriminative; how it is built and whether it evolves in the field; deterministic or probabilistic use; transparency and explainability |
| **Task & Output** | Tasks (e.g., recognition, forecasting); composite systems; **action autonomy**; core application area; evaluation methods |

- **Uses:** a common understanding of AI, registries and inventories, sector-specific frameworks, risk assessment (including a common approach to incident reporting) and risk management.
- **"In the lab" vs "in the field":** before deployment, the Data & Input, AI Model and Task & Output dimensions apply (ex ante risk management); after deployment, all five apply (ex post).
- **Trap:** action autonomy is a **Task & Output** criterion, not an AI Model one.

### Hiroshima AI Process Reporting Framework (OECD, February 2025)

- Implements the G7 **Hiroshima Process International Code of Conduct for Organisations Developing Advanced AI Systems**, which came out of Japan's 2023 G7 presidency.
- **Hosted by the OECD**, which publishes the reports on OECD.AI. Participation is **voluntary** and the format is common, so reports are comparable.
- First round (2025): **25** organizations reported, analysed in the OECD report *How are AI developers managing risks?*
- **Version 2.0** opens it to a wider range of organizations involved in developing, deploying and providing advanced AI systems. Submissions received by **30 September 2026** feed the next analysis.

### AI Incidents and Hazards (OECD definitions, May 2024)

| Term | Meaning (OECD AI Papers No. 16) |
|---|---|
| **AI incident** | An event, circumstance or series of events where an AI system's development, use or malfunction directly or indirectly leads to harm: to health; to the management and operation of critical infrastructure; to human rights or legally protected rights (fundamental, labour, IP); or to property, communities or the environment |
| **Serious AI incident** | The same, with serious harm, e.g., death, or serious and irreversible disruption of critical infrastructure |
| **AI disaster** | A serious AI incident that disrupts the functioning of a community or society and may test or exceed its capacity to cope with its own resources |
| **AI hazard** | An event that *could plausibly lead* to an AI incident. **Near misses count as hazards** |
| **Serious AI hazard** | An event that could plausibly lead to a serious AI incident or AI disaster |

- The **AI Incidents and Hazards Monitor (AIM)** on OECD.AI tracks incidents and hazards reported in the news, classifying articles automatically against these definitions. It captures only publicly reported events.
- In February 2025 the OECD published a **common reporting framework for AI incidents** (OECD AI Papers No. 34) so reporting can be consistent across jurisdictions.

> **Exam note:** The principles are the values; the OECD tools are how they get applied. Expect scenario questions on which classification dimension a criterion belongs to, whether an event is an incident or a hazard, and which 2023 definition edit does what.

---

## 2. NIST AI Risk Management Framework (AI RMF)

Published **January 2023**. Voluntary, flexible framework for managing AI-specific risks throughout the lifecycle. Accompanied by an **AI RMF Playbook** with practical implementation guidance.

### Key Goals

- Enable **trustworthy and responsible AI** through structured risk management
- Provide a **flexible, voluntary framework** across sectors and maturity levels
- Foster **collaboration** among developers, deployers, evaluators, and users
- Support **innovation** while identifying and mitigating harm

### What Makes AI Risk Unique?

| Characteristic | Implication |
|----------------|-------------|
| **Context-dependent** | Same AI system may be high-risk in one use case, low-risk in another |
| **Emergent behavior** | Outcomes unintended or unforeseen at design time |
| **Opacity** | Opaque/adaptive algorithms produce unpredictable results |
| **Societal scale** | Harms affect individuals, groups, or society; outputs scale to millions instantly |
| **Data-driven bias** | Risks arise from biased data, proxies, or deployment contexts |

### The Four Core Functions

```
 ┌──────────┐
 │ GOVERN │ ← Foundational: culture, policies, accountability
 └────┬─────┘
 ┌────────────────┼────────────────┐
 ┌────┴────┐ ┌─────┴──────┐ ┌───┴──────┐
 │ MAP │ ──→ │ MEASURE │ ──→ │ MANAGE │
 └─────────┘ └────────────┘ └──────────┘
 Understand Assess risk & Respond to
 context trustworthiness identified risks
```

#### GOVERN — Building the Foundation

Establishes organizational context, culture, and structures. **Most relevant for AI governance professionals.**

| Category | Key Subcategories |
|----------|-------------------|
| **1. Policies, processes, procedures and practices** | Policies for mapping, measuring and managing AI risk are in place, transparent and implemented; legal requirements understood; risk management scaled to the organization's risk tolerance (1.3); AI system inventory (1.6); safe decommissioning (1.7) |
| **2. Accountability structures** | Teams and individuals are empowered, responsible and trained; roles and lines of communication documented (2.1); AI risk training (2.2); executive leadership takes responsibility for AI risk decisions (2.3) |
| **3. Workforce diversity, equity, inclusion and accessibility** | Diverse teams inform risk decisions across the lifecycle (3.1); roles for human-AI configurations and oversight are defined (3.2) |
| **4. Organizational culture** | Teams are committed to a culture that considers and communicates AI risk: critical thinking and a safety-first mindset (4.1), documenting and communicating impacts (4.2), testing, incident identification and information sharing (4.3) |
| **5. Engagement with relevant AI actors** | Processes to collect and integrate feedback from people outside the team that built or deployed the system, about potential impacts (5.1), and to feed it into design and deployment (5.2) |
| **6. Third-party software, data and supply chain** | Policies address risks from third parties, including IP infringement (6.1), and contingency processes for failures in high-risk third-party data or systems (6.2) |

> **RACI Model:** Responsible, Accountable, Consulted, Informed — used to assign AI governance responsibilities (see [[Organizational Readiness]]).

> **AI Risk Culture vs. Security Culture:** Both emphasize vigilance, but AI risk culture also requires continuous questioning of assumptions, attention to context, and inclusion of ethical/societal considerations.

#### MAP — Understanding Context

Identifies the AI system's characteristics and operating context. Iterative across the lifecycle.

| Category | Key Subcategories |
|----------|-------------------|
| **1. Context is established and understood** | Intended purposes, beneficial uses, context-specific laws and norms, deployment settings and foreseeable misuse (1.1); interdisciplinary team (1.2); business value (1.4); risk tolerance (1.5); system requirements (1.6) |
| **2. Categorization of the AI system** | The tasks and methods the system uses (2.1); its knowledge limits and how humans will use its output (2.2); scientific integrity and TEVV considerations (2.3) |
| **3. Capabilities, targeted usage, goals, expected benefits and costs** | Benefits (3.1) and costs, including non-monetary costs of errors (3.2), compared with benchmarks; targeted application scope (3.3); operator proficiency (3.4); human oversight processes (3.5) |
| **4. Risks and benefits mapped for all components, including third-party software and data** | Approaches for mapping technology and legal risks of components, including third-party data, software and IP (4.1); internal risk controls for components (4.2) |
| **5. Impacts to individuals, groups, communities, organizations and society are characterized** | Likelihood and magnitude of each identified impact (5.1); regular engagement with relevant AI actors and integration of their feedback about impacts (5.2) |

> **Epistemic vs. Aleatoric Uncertainty:**
> - **Epistemic** — unknowns from limited knowledge (e.g., insufficient training data)
> - **Aleatoric** — inherent randomness (e.g., noise in sensor data)
> Map should identify both.

> **Performance ≠ Trustworthiness:** High accuracy can still mask harmful stereotypes or erode human autonomy. Mapping requires qualitative context, not just quantitative performance.

#### MEASURE — Assessing Risk and Trustworthiness

**Ongoing** evaluation using quantitative and qualitative methods — not a one-time task.

| Category | Key Subcategories |
|----------|-------------------|
| **1. Appropriate methods and metrics are identified and applied** | Metrics for the most significant risks first (1.1); metrics and controls regularly reassessed (1.2); review by internal experts who did not build the system, or independent assessors (1.3) |
| **2. AI systems are evaluated for trustworthy characteristics** | Thirteen subcategories: TEVV documentation (2.1), human-subject evaluations (2.2), performance (2.3), production monitoring (2.4), validity and reliability (2.5), safety (2.6), security and resilience (2.7), transparency and accountability (2.8), explainability (2.9), privacy (2.10), fairness and bias (2.11), environmental impact (2.12), TEVV effectiveness (2.13). Methods include unit testing, red teaming, stress testing, expert panels, user studies and third-party audits |
| **3. Mechanisms for tracking identified AI risks over time are in place** | Tracking existing, unanticipated and emergent risks (3.1); tracking where measurement is difficult (3.2); feedback processes for end users and affected communities to report problems and appeal outcomes (3.3) |
| **4. Feedback about the efficacy of measurement is gathered and assessed** | Measurement approaches connected to the deployment context and informed by domain experts (4.1); results validated with domain experts and relevant AI actors (4.2); measurable performance improvements or declines identified (4.3) |

> **Model Cards & System Cards:** Structured, accessible formats for documenting AI system performance, limitations, and risks (especially for LLMs).

#### MANAGE — Taking Action on AI Risk

Operationalizes insight from Govern/Map/Measure into concrete mitigation and improvement.

| Category | Key Subcategories |
|----------|-------------------|
| **1. AI risks based on MAP and MEASURE assessments are prioritized, responded to and managed** | Go/no-go decision on whether the system achieves its purpose (1.1); treatment prioritized by impact, likelihood and resources (1.2); responses to high-priority risks: mitigate, transfer, avoid or accept (1.3); residual risks documented (1.4) |
| **2. Strategies to maximize benefits and minimize negative impacts are planned, prepared, implemented and documented** | Resources and non-AI alternatives considered (2.1); mechanisms to sustain value (2.2); procedures for previously unknown risks (2.3); mechanisms to supersede, disengage or deactivate systems performing outside intended use (2.4) |
| **3. AI risks and benefits from third-party entities are managed** | Third-party risks monitored with controls applied (3.1); pre-trained models monitored as part of regular maintenance (3.2) |
| **4. Risk treatments, including response and recovery, and communication plans are documented and monitored regularly** | Post-deployment monitoring plans covering user input, appeal and override, decommissioning, incident response, recovery and change management (4.1); continual improvement (4.2); incidents and errors communicated to relevant AI actors, including affected communities (4.3) |

> **Risk Treatment Options:** Risk acceptance, risk transfer, risk avoidance, risk mitigation — all must be approved by management and documented.

> **AI Incident Examples:** Self-driving car veering off path, AI assistant giving dangerous advice, bias audit revealing disparate treatment.

### AI RMF vs. NIST Cybersecurity Framework (CSF)

| Element | AI RMF | CSF |
|---------|--------|-----|
| **Focus domain** | AI system lifecycle and socio-technical risks | Cybersecurity controls and resilience |
| **Types of risk** | Bias, opacity, misuse, autonomy, drift, societal harm | CIA triad (Confidentiality, Integrity, Availability) |
| **Uncertainty** | Explicit handling of epistemic/aleatoric uncertainty | Generally assumes known or measurable threats |
| **Explainability & fairness** | Core theme | Not addressed |
| **System context** | Central to risk mapping | Less context-sensitive, control-based |
| **Ethical dimensions** | Integral to the framework | Not in scope |

| When to Use | Framework |
|-------------|-----------|
| Preventing malware in IT systems | **CSF** |
| Evaluating bias in HR screening algorithm | **AI RMF** |
| Securing cloud infrastructure for AI workloads | **CSF** (with AI overlays) |
| Governing ethics/impacts of autonomous vehicles | **AI RMF** (with crosswalks to CSF for security) |

> **Fundamental Shift:** CSF treats risk as something to defend against with known controls. AI RMF treats risk as **emergent, systemic, and value-laden** — requiring social, organizational, and technical strategies.

---

## 3. NIST ARIA (Assessing Risks and Impacts of AI) — Background Only

> **Removed from the BOK v2.1 blueprint.** ARIA was a II.D performance indicator in v2.0.1 but is not named in v2.1. Recognize the name and move on; don't spend study time here. Detail: [[NIST ARIA — Structured Reference]].

- **What it is:** a NIST evaluation program, launched **May 2024**, that assesses submitted AI models and systems in a sector- and task-agnostic evaluation environment. Its first evaluations focused on large language models.
- **Three levels of testing:** **model testing** (does the system show its claimed capabilities and guardrails?), **red teaming** (can it be pushed into violative outcomes?), and **field testing** (what happens when ordinary users interact with it?).
- **Relationship to the AI RMF:** it complements rather than replaces the RMF, producing empirical evidence for risk measurement. It is not a standard, a certification scheme or a regulation.

---

## 4. ISO Standards

> **The core three (BOK v2.1):** **ISO/IEC 22989** (the vocabulary), **ISO/IEC 42001** (the certifiable management system) and **ISO/IEC 42005** (impact assessment guidance). The blueprint's wording, "i.e., 22989, 42001 and 42005", is a closed list. Everything else below is supporting context.

### Framework Comparison: Key ISO AI Standards

| Standard | Type | Purpose | Certifiable? | Named in BOK v2.1? |
|----------|------|---------|:---:|:---:|
| **ISO/IEC 22989:2022** | Terminology | Defines core AI concepts and vocabulary | ✗ | ✓ core |
| **ISO/IEC 42001:2023** | Management system (requirements) | Certifiable AI management system; requires AI system impact assessment | ✓ | ✓ core |
| **ISO/IEC 42005:2025** | Guidance | How to perform and document AI system impact assessments | ✗ | ✓ core |
| **ISO/IEC 42006:2025** | Requirements for certification bodies | Competence and process rules for bodies that certify against 42001 | n/a (applies to certifiers) | ✗ |
| **ISO/IEC 23894:2023** | Risk management guidance | AI-specific risk management (extends ISO 31000) | ✗ | ✗ (42005 Annex B maps to it) |
| **ISO/IEC 38507** | Governance | Strategic guidance for boards and executives on AI oversight | ✗ | ✗ |
| **ISO/IEC TR 24028** | Technical report | Trustworthiness concepts and mechanisms | ✗ | ✗ |
| **ISO/IEC 23053** | Framework | Framework for AI systems that use machine learning | ✗ | ✗ |
| **ISO/IEC 5338** | Lifecycle | AI system lifecycle processes | ✗ | ✗ |

### ISO/IEC 22989 — Concepts and Terminology

Foundational vocabulary standard. **Defines, but does not prescribe.** Ensures consistent, interoperable terms across stakeholders.

**Key Definitions:**

| Term | Definition (Summarized) |
|------|------------------------|
| **AI** | Capability of a system to perform tasks requiring human intelligence |
| **AI System** | Engineered system generating outputs (predictions, recommendations, decisions) |
| **Machine Learning** | Methods allowing systems to improve performance based on data |
| **Autonomy** | Ability to operate without ongoing human intervention |
| **Transparency** | Degree to which internal workings and decision-making can be understood |
| **Explainability** | Degree to which a human can understand and interpret AI output/behavior |
| **Trustworthiness** | Ability to operate as intended while minimizing risk and promoting confidence |

**AI Capabilities:** Perception, Reasoning, Learning, Interaction, Decision-making.

**Lifecycle Stages (conceptual):** Business requirements → Data acquisition → Model development → Integration/testing → Deployment → Monitoring/maintenance → Retirement.

> **Exam note:** 22989 provides the **lexicon**; 42001 provides the **operational governance**. They are "hand-in-glove."

### ISO/IEC 42001 — AI Management Systems

Published **December 2023** (first edition). As of September 2026 this is still the current edition: the IEC webstore lists no amendment or revision. **World's first certifiable management system** for AI. Modeled after ISO 27001 (ISMS) and ISO 9001 (QMS). Scalable — fits startups to multinationals.

> **Impact assessment is a requirement, not an option.** Clause **6.1.4** (planning) has the organization define an AI system impact assessment process, and clause **8.4** (operation) has it perform those assessments at planned intervals or when significant changes are proposed. Normative Annex A objective **A.5**, "Assessing impacts of AI systems", adds controls on the process (A.5.2), its documentation (A.5.3), impacts on individuals or groups (A.5.4) and societal impacts (A.5.5). ISO/IEC 42005 is the companion guidance on *how*.

**High-Level Structure (Annex SL):**

| Clause | Focus |
|--------|-------|
| **Context of the organization** | Internal/external factors; applicable laws and standards |
| **Leadership and commitment** | Top management tone, resources, ownership |
| **Planning** | Risk assessment, objectives, trustworthiness goals |
| **Support** | Resources, competence, awareness, documentation |
| **Operation** | Design, acquisition, development, deployment processes |
| **Performance evaluation** | Monitoring, audit, management review |
| **Improvement** | Corrective actions, continual improvement |

**Trustworthiness Dimensions (required considerations):**
- Transparency and explainability
- Fairness and non-discrimination
- Robustness and resilience
- Accountability and human oversight
- Privacy and data governance

**Implementation Approach:**
1. **Readiness assessment** (gap analysis) — inventory AI systems, policies, roles, documentation
2. **Integrate with existing systems** — ISO 27001, ISO 9001, ISO 27701 (shared risk registers, incident response, audit functions)
3. **Develop AI-specific policies** — lifecycle management, ethical principles, bias detection/mitigation, monitoring, stakeholder engagement
4. **Training and awareness** — technical staff understand governance obligations; business users escalate AI risks; leadership models ethical culture

> **Beyond Compliance:** Certification is an indicator of **maturity**, not the end goal. Embedding 42001 as a living governance discipline builds more adaptable, resilient, trusted AI systems.

### ISO/IEC 23894 — AI Risk Management

Complements 42001 with a dedicated AI risk management framework. Aligns with **ISO 31000** (Enterprise Risk Management). Focus: risk management **of** AI (not using AI for risk management).

> **Blueprint status:** not named in BOK v2.1 II.D, which lists only 22989, 42001 and 42005. It remains useful background, and ISO/IEC 42005's informative Annex B explains how impact findings feed a 23894-style risk process. The split to remember: **23894 asks about risk to the organization; 42005 asks about impacts on people.**

### ISO/IEC 38507 — Governance Implications of AI

Part of ISO 38500 series. Strategic guidance for **board members and executives** on AI oversight — roles, risk appetite, ethical alignment, accountability, transparency.

### ISO/IEC TR 24028 — Trustworthiness in AI

Technical report (not certifiable). Introduces AI trustworthiness concepts and mechanisms (transparency, reliability, resilience, privacy, fairness).

### ISO/IEC 42005 — AI System Impact Assessment (core standard)

Published **28 May 2025** (first edition, 39 pages) by ISO/IEC JTC 1/SC 42. **Guidance, not certifiable**, for any organization that **develops, provides or uses** AI, of any size. It covers how and when to assess the impacts an AI system and its foreseeable applications can have on **individuals, groups and societies**, what to document, and how to integrate the work with AI risk management and an AI management system. Full note: [[ISO 42005 — AI System Impact Assessment]].

| Part | What it covers |
|---|---|
| **Clause 5: the process** | Documenting the process; integrating with other management processes; timing; scope; allocating responsibilities; thresholds for sensitive uses, restricted uses and impact scales; performing; analysing; recording and reporting; approval; monitoring and review |
| **Clause 6: the record** | Scope; system information (description, capabilities, purpose, intended and unintended uses); data and data quality; algorithms and models; deployment environment (geography, languages, constraints); interested parties; actual and reasonably foreseeable benefits and harms, including failures and misuse; measures |
| **Annexes (informative)** | **A** use with 42001 · **B** use with 23894 · **C** harms and benefits taxonomy · **D** aligning with other assessments · **E** example template |

- **Lifecycle, not one-off.** Assess at design and before deployment, keep the assessment under review, and reassess when intended use, the system (data, model) or the legal and policy context changes significantly.
- **Two-sided.** Benefits and harms both belong in the record, with measures for each.
- **Relationship to law.** It can feed a GDPR Art. 35 DPIA or an EU AI Act Art. 27 FRIA but replaces neither. It is not a harmonised standard, so it gives no presumption of conformity under the AI Act.

### ISO/IEC 42006:2025 — Certification Bodies for AI Management Systems

Published **7 July 2025**. Sets requirements, additional to **ISO/IEC 17021-1**, for bodies that audit and certify AI management systems against ISO/IEC 42001, so accreditation bodies can judge their competence and consistency. It regulates the **certifiers**, not the certified organization. Not named in the BOK, but a handy distractor: 42001 = the AIMS you certify; 42005 = impact assessment guidance; 42006 = rules for whoever issues the 42001 certificate.

---

## 5. Other AI-Related Standards and Frameworks

### Global Framework Comparison

| Framework | Origin | Binding? | Core Focus |
|-----------|--------|:---:|------------|
| **EU HLEG Ethics Guidelines** | EU (2019) | ✗ | 7 requirements for trustworthy AI; influenced EU AI Act |
| **G7 Hiroshima Process** | G7 (2023) | ✗ | Code of Conduct for advanced AI; risk lifecycle, transparency, content provenance |
| **IEEE 7000 Series** | IEEE | ✗ | Ethically aligned design; transparency, privacy, bias, well-being standards |
| **UNESCO AI Ethics Recommendation** | UN (2021) | ✗ | First global standard; human rights-centered; 194 member states |
| **Singapore Model AI Framework** | IMDA (2024) | ✗ | Model-based, sector-neutral; accountability, testing, content provenance |
| **WEF AI Governance Toolkit** | WEF | ✗ | Cross-sector governance; Presidio Recommendations; Gen AI toolkit |
| **OECD Classification Framework** | OECD (2022) | ✗ | Five dimensions: People & Planet, Economic Context, Data & Input, AI Model, Task & Output (see §1) |

### EU HLEG Ethics Guidelines (2019)

Precursor to the EU AI Act. **Seven requirements** for trustworthy AI:
1. Human agency and oversight
2. Technical robustness and safety
3. Privacy and data governance
4. Transparency
5. Diversity, non-discrimination, and fairness
6. Societal and environmental well-being
7. Accountability

**Four ethical principles:** Respect for human autonomy, Prevention of harm, Fairness, Explicability.

### G7 Hiroshima Process (2023)

Response to generative AI evolution. **Guiding Principles and Code of Conduct** for advanced AI:
- Identify, evaluate, mitigate risks across lifecycle
- Publicly report capabilities, limitations, appropriate/inappropriate uses
- Responsible information sharing and incident reporting
- Implement robust security controls
- Content authentication and provenance mechanisms
- Appropriate data input measures for personal data and IP

**Reporting:** since February 2025 the **OECD** hosts the voluntary **Hiroshima AI Process Reporting Framework**, where organizations report against the Code of Conduct in a common format (see §1).

### IEEE 7000 Series — Ethically Aligned Design

| Standard | Focus |
|----------|-------|
| **IEEE 7000** | Model process for ethical concerns in system design |
| **IEEE 7001** | Transparency in autonomous systems |
| **IEEE 7002** | Data privacy in AI systems |
| **IEEE 7003** | Algorithmic bias considerations |
| **IEEE 7010** | Well-being metrics for autonomous systems |

> Ethics is treated as an **integral design consideration** — incorporated into requirements analysis, system modeling, and validation.

### UNESCO Recommendation on Ethics of AI (2021)

First **global standard** on AI ethics (194 member states). **Not binding**, but promotes:
- Ethical impact assessments
- Ethical governance and stewardship
- Data policy, environmental sustainability
- Gender equality, cultural diversity protection
- Algorithmic transparency, health and social well-being

> Particularly influential in the **global south** due to cultural inclusion and human rights alignment.

### Singapore Model AI Governance Framework (2024)

Leader in model-based, sector-neutral governance. Emphasizes: accountability, data quality, trusted development/deployment, incident reporting, testing/assurance, security, content provenance, safety/alignment of R&D, AI for public good.

### ISO/IEC JTC 1/SC 42 — Standards Pipeline

AI system impact assessment has moved from the roadmap to a published standard (**ISO/IEC 42005**, May 2025), and requirements for bodies certifying AI management systems followed (**ISO/IEC 42006**, July 2025). SC 42 continues to develop further AI standards.

---

## Key Takeaways

1. **NIST AI RMF is built around four core functions: Govern, Map, Measure, and Manage.** Govern establishes accountability/oversight. Map identifies system context and risks. Measure evaluates performance and risk posture. Manage includes mitigation and incident response. Understanding each function and its supporting categories is essential.

2. **ISO/IEC 22989 provides a standard AI governance lexicon.** Defines key terms (AI, ML, autonomy, transparency, explainability, trustworthiness). No operational guidance — that's found in ISO/IEC 42001.

3. **ISO/IEC 42001 is the first certifiable AI management system standard.** Modeled after ISO 27001. Clauses: leadership, planning, risk management, performance evaluation, continual improvement. Certification demonstrates due diligence and regulatory alignment.

4. **The OECD AI Principles establish an ethical foundation for international AI governance.** Adopted 22 May 2019, definition revised 8 Nov 2023, text revised 3 May 2024; 47 adherents including the EU. Five principles: inclusive growth, sustainable development and well-being; respect for the rule of law, human rights and democratic values, including fairness and privacy; transparency and explainability; robustness, security and safety; accountability. Non-binding. II.D also reaches the OECD's tools: the classification framework (five dimensions), incident vs hazard definitions, and the Hiroshima reporting framework.

5. **NIST ARIA is background only.** It was dropped from the v2.1 blueprint. Recognize it as NIST's evaluation program (model testing, red teaming, field testing) and move on.

6. **IEEE, UNESCO, G7, and EU HLEG have each contributed significant AI frameworks.** IEEE 7000 = ethically aligned design. UNESCO = human rights-centered AI. G7 Hiroshima = Code of Conduct, now with an OECD-run reporting framework. EU HLEG = 7 requirements that shaped the EU AI Act. All non-binding but shape regulatory priorities globally.

7. **ISO/IEC 42005 completes the core three.** Guidance (not certifiable) for any organization that develops, provides or uses AI on assessing benefits and harms to individuals, groups and society across the lifecycle. 42001 requires the assessment (6.1.4, 8.4, Annex A.5); 42005 explains how; 23894 covers risk to the organization; 42006 covers the certifiers.

---

## Key Terms

- **[[OECD AI Principles]]** — Five voluntary principles (2019; revised 2023 and 2024) for trustworthy AI; foundational for international governance
- **[[OECD Framework for the Classification of AI Systems]]** — Five dimensions: People & Planet, Economic Context, Data & Input, AI Model, Task & Output
- **[[OECD AI System Definition (2023 Update)]]** — Explicit or implicit objectives; inference from input; content as an output; physical or virtual environments; adaptiveness after deployment
- **[[AI Incident vs. AI Hazard (OECD Definitions)]]** — Realized harm vs plausible future harm; near misses are hazards
- **[[OECD AI Incidents and Hazards Monitor (AIM)]]** — OECD.AI tracker of incidents and hazards reported in the news
- **[[Hiroshima AI Process Reporting Framework]]** — OECD-hosted voluntary reporting against the G7 Code of Conduct (Feb 2025)
- **[[NIST AI RMF]]** — AI Risk Management Framework; four functions: Govern, Map, Measure, Manage
- **[[NIST ARIA]]** — Background only (dropped from BOK v2.1); layered testing (model, red team, field)
- **[[ISO 22989]]** — Standard AI terminology and concepts (lexicon)
- **[[ISO 42001]]** — First certifiable AI management system standard
- **[[ISO/IEC 42005]]** — Guidance on AI system impact assessment (May 2025); one of the core three
- **[[AI System Impact Assessment (ISO/IEC 42005)]]** — Formal, documented assessment of benefits and harms to individuals, groups and society
- **[[Impact Reassessment Trigger]]** — Change in intended use, a significant system change, or a new legal or policy requirement
- **[[ISO/IEC 42006]]** — Requirements for bodies certifying AI management systems against 42001 (July 2025)
- **[[ISO 23894]]** — AI-specific risk management (complements 42001; not named in BOK v2.1)
- **[[EU HLEG]]** — High-Level Expert Group; 7 requirements for trustworthy AI
- **[[G7 Hiroshima Process]]** — Code of Conduct for advanced AI systems (2023)
- **[[IEEE 7000 Series]]** — Ethically aligned design standards
- **[[UNESCO AI Ethics]]** — First global standard on AI ethics (2021, 194 member states)
- **[[Epistemic Uncertainty]]** — Unknowns from limited knowledge (e.g., insufficient training data)
- **[[Aleatoric Uncertainty]]** — Inherent randomness (e.g., noise in sensor data)
- **[[Model Cards]]** — Structured documentation of AI model performance, limitations, risks
- **[[RACI Model]]** — Responsible, Accountable, Consulted, Informed — governance role assignment

## Sources (September 2026 update)

- BOK v2.1 (effective 2 Feb 2026) and v2.0.1, II.D performance indicators and question ranges (IAPP)
- https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449 (Recommendation text: adoption, 2023 and 2024 revisions, principles, definition)
- https://oecd.ai/en/ai-principles (47 adherents; G20 principles)
- https://oecd.ai/en/wonk/ai-system-definition-update (the five definition edits)
- https://oecd.ai/en/classification and OECD Digital Economy Papers No. 323 (Feb 2022) (five dimensions, criteria, uses)
- https://oecd.ai/en/transparency/overview (Hiroshima AI Process Reporting Framework)
- https://oecd.ai/en/incidents and OECD AI Papers No. 16 (May 2024) (incident and hazard definitions)
- https://webstore.iec.ch/en/publication/107659 (ISO/IEC 42005:2025) · https://webstore.iec.ch/en/publication/90574 (ISO/IEC 42001:2023) · https://webstore.iec.ch/en/publication/108460 (ISO/IEC 42006:2025)
- https://ai-challenges.nist.gov/aria (NIST ARIA)
- See [[ISO 42005 — AI System Impact Assessment]] and [[OECD AI Principles — Structured Reference]] for the full source lists
