---
tags:
 - aigp/domain-II
 - aigp/area
 - aigp/standards
created: 2026-07-11
domain: "II: Understanding How Laws, Standards, and Frameworks Apply to AI"
subdomain: "II.D: Understand the Main Industry Standards and Tools That Apply to AI"
related:
 - "[[Legal and Regulatory Index]]"
 - "[[The EU AI Act]]"
 - "[[AI System Design]]"
 - "[[AIGP Exam Questions]]"
---

# AI Standards and Frameworks

> **Domain II, Subdomain II.D** — Understanding the Main Industry Standards and Tools That Apply to AI

## Performance Indicators

- Understand the **OECD Principles**, framework, policies, and recommended practices for trustworthy AI
- Understand the **NIST AI Risk Management Framework** and playbook (core functions, categories, subcategories)
- Understand the **NIST ARIA program** for methodologies, tools, metrics, and measurements on AI safety
- Understand the **core ISO AI standards** (22989 and 42001)

---

## 1. OECD AI Principles

Adopted in **2019** by OECD member countries. **Not legally binding**, but highly influential — shaped the EU AI Act and G7 Hiroshima Process.

### Five Principles for Trustworthy AI

| # | Principle | Core Focus |
|---|-----------|------------|
| 1 | **Inclusive growth, sustainable development, and well-being** | Beneficial outcomes for people and the planet; augmenting human capabilities; reducing inequalities |
| 2 | **Human rights and democratic values (fairness & privacy)** | Rule of law, non-discrimination, dignity, autonomy, privacy, data protection; addressing misinformation |
| 3 | **Transparency and explainability** | Meaningful disclosure; plain-language information on data sources, factors, logic; ability to challenge outputs |
| 4 | **Robustness, security, and safety** | Function appropriately under normal, foreseeable, and adverse conditions; override/repair/decommission mechanisms |
| 5 | **Accountability** | Traceability of datasets, processes, decisions; systematic risk management across AI lifecycle; responsible business conduct |

### Implementation Guidance for Governments

- Fostering a digital ecosystem for AI (investment, infrastructure)
- Promoting a skilled workforce and inclusive education
- Ensuring public sector leadership in trustworthy AI
- Facilitating international cooperation on AI research and governance

> **Exam note:** These are a **foundational lens** for policy development — baseline expectations for cross-border collaboration and internal AI ethics policies.

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
| **1. Policies, Processes, Procedures** | Documented risk management policies; AI-specific considerations (fairness, explainability, robustness, privacy) |
| **2. Roles and Responsibilities** | Clear roles/accountabilities across lifecycle; oversight bodies (ethics committees, internal audit); escalation mechanisms |
| **3. Risk Tolerance and Appetite** | Documented risk appetite/tolerance statements; stakeholder input; periodic reviews as tech/regs evolve |
| **4. Organizational Culture & Communication** | Leaders model risk-informed decisions; employees raise concerns without retaliation; training reinforces ethical AI use |

> **RACI Model:** Responsible, Accountable, Consulted, Informed — used to assign AI governance responsibilities (see [[Organizational Readiness]]).

> **AI Risk Culture vs. Security Culture:** Both emphasize vigilance, but AI risk culture also requires continuous questioning of assumptions, attention to context, and inclusion of ethical/societal considerations.

#### MAP — Understanding Context

Identifies the AI system's characteristics and operating context. Iterative across the lifecycle.

| Category | Key Subcategories |
|----------|-------------------|
| **1. Context & Intended Purpose** | Documented uses, goals, limitations; foreseeable misuses; socio-technical context; traceable documentation |
| **2. System Design & Functionality** | Data sources, preprocessing, model features; human-AI interaction design; performance metrics and boundaries |
| **3. Stakeholders & Affected Populations** | Primary users and decision-makers; impacted individuals/communities; stakeholder engagement documentation |
| **4. Risk Identification & Prioritization** | Known/foreseeable risks documented; prioritized by likelihood and severity; sources of uncertainty |

> **Epistemic vs. Aleatoric Uncertainty:**
> - **Epistemic** — unknowns from limited knowledge (e.g., insufficient training data)
> - **Aleatoric** — inherent randomness (e.g., noise in sensor data)
> Map should identify both.

> **Performance ≠ Trustworthiness:** High accuracy can still mask harmful stereotypes or erode human autonomy. Mapping requires qualitative context, not just quantitative performance.

#### MEASURE — Assessing Risk and Trustworthiness

**Ongoing** evaluation using quantitative and qualitative methods — not a one-time task.

| Category | Key Subcategories |
|----------|-------------------|
| **1. Risk Metrics & Indicators** | Established criteria for each risk; metrics tailored to context/stakeholders; updated as understanding evolves |
| **2. Evaluation Methods** | Testing (unit, red teaming, blue teaming, stress testing); qualitative methods (expert panels, user studies); third-party audits |
| **3. System Performance Monitoring** | Continuous monitoring/logging; anomaly/error detection; feedback loops |
| **4. Risk Documentation & Reporting** | Results documented/archived; stakeholder-appropriate reports; inform future updates |

> **Model Cards & System Cards:** Structured, accessible formats for documenting AI system performance, limitations, and risks (especially for LLMs).

#### MANAGE — Taking Action on AI Risk

Operationalizes insight from Govern/Map/Measure into concrete mitigation and improvement.

| Category | Key Subcategories |
|----------|-------------------|
| **1. Risk Treatment & Mitigation** | Controls based on risk assessment; technical (algorithmic constraints) + organizational (policy enforcement); all treatment decisions approved/documented |
| **2. Incident Response & Recovery** | AI-specific incident playbooks; align with cybersecurity IR; escalation tied to risk thresholds; after-action reviews with learning loops |
| **3. Risk Management Integration** | AI risk integrated with cybersecurity, privacy, ERM; cross-functional coordination; procurement/vendor AI risk protocols |
| **4. Risk Evolution & System Retirement** | Periodic fitness reviews; end-of-life planning; decommissioning includes documentation and post-use impact assessment |

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

## 3. NIST ARIA (Assessing Risks and Impacts of AI)

Launched **May 2024**. Forward-looking initiative for developing methods, tools, and measurement techniques to evaluate AI safety, trustworthiness, and effectiveness. **Not yet a formal standard** — currently focused on LLM risks. Primary audience: U.S. federal government.

### Relationship to AI RMF

ARIA **complements** (doesn't replace) the AI RMF. It operationalizes the **assessment portion** of AI risk management through a layered testing approach.

### Three Levels of Testing

| Level | Purpose | Key Questions |
|-------|---------|---------------|
| **1. Model Testing** | Confirm claimed capabilities | Does the system demonstrate required capabilities? Required guardrails? |
| **2. Red Teaming** | Induce malfunction or unexpected behavior | Can the system produce violative outcomes? Under what conditions? |
| **3. Field Testing** | Explore impacts in ordinary end-user use | Are users exposed to impactful information? Do they perceive it? What actions follow? |

### U.S. Federal Compliance

ARIA supports compliance with:
- **OMB Memorandum M-24-10** — mandates agency risk assessments, AI inventories, governance plans
- **Executive Order 14110** (Oct 2023) — safe/secure/trustworthy AI development *(rescinded Jan 2025)*
- Other executive orders (14319, 14320)

### Beyond Federal Government

ARIA principles are adaptable for private-sector, NGOs, and academia to strengthen responsible AI programs, build institutional capacity, and complement AI RMF or ISO/IEC 42001.

---

## 4. ISO Standards

### Framework Comparison: Key ISO AI Standards

| Standard | Type | Purpose | Certification? |
|----------|------|---------|:---:|
| **ISO/IEC 22989** | Terminology | Defines core AI concepts and vocabulary | ✗ |
| **ISO/IEC 42001** | Management System | Certifiable AI management system (governance framework) | ✓ |
| **ISO/IEC 23894** | Risk Management | AI-specific risk management (complements 42001; aligns with ISO 31000) | ✗ |
| **ISO/IEC 38507** | IT Governance | Strategic guidance for board/executives on AI oversight | ✗ |
| **ISO/IEC TR 24028** | Technical Report | Trustworthiness concepts and mechanisms (not certifiable) | ✗ |
| **ISO/IEC 42005** | Impact Assessment | Methodologies for AI system impact assessments | ✗ |
| **ISO/IEC 23053** | Lifecycle | Machine learning lifecycle framework | ✗ |
| **ISO/IEC 5338** | Lifecycle | AI lifecycle management processes | ✗ |

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

Published **2023**. **World's first certifiable management system** for AI. Modeled after ISO 27001 (ISMS) and ISO 9001 (QMS). Scalable — fits startups to multinationals.

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

### ISO/IEC 38507 — Governance Implications of AI

Part of ISO 38500 series. Strategic guidance for **board members and executives** on AI oversight — roles, risk appetite, ethical alignment, accountability, transparency.

### ISO/IEC TR 24028 — Trustworthiness in AI

Technical report (not certifiable). Introduces AI trustworthiness concepts and mechanisms (transparency, reliability, resilience, privacy, fairness).

### ISO/IEC 42005 — AI System Impact Assessment

Defines methodologies for assessing AI system impacts on individuals, groups, and society. Likely to become a standard method for EU AI Act impact assessments.

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
| **OECD Classification Framework** | OECD (2022) | ✗ | Categorizes AI by context, autonomy, human interaction, impact scale |

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

### ISO/IEC JTC 1/SC 42 — Future Standards Roadmap

Upcoming areas: AI system impact assessments, AI quality/performance evaluation, bias mitigation methodologies, AI lifecycle assurance.

---

## Key Takeaways

1. **NIST AI RMF is built around four core functions: Govern, Map, Measure, and Manage.** Govern establishes accountability/oversight. Map identifies system context and risks. Measure evaluates performance and risk posture. Manage includes mitigation and incident response. Understanding each function and its supporting categories is essential.

2. **ISO/IEC 22989 provides a standard AI governance lexicon.** Defines key terms (AI, ML, autonomy, transparency, explainability, trustworthiness). No operational guidance — that's found in ISO/IEC 42001.

3. **ISO/IEC 42001 is the first certifiable AI management system standard.** Modeled after ISO 27001. Clauses: leadership, planning, risk management, performance evaluation, continual improvement. Certification demonstrates due diligence and regulatory alignment.

4. **The OECD AI Principles establish an ethical foundation for international AI governance.** Adopted by 40+ countries. Five principles: inclusive growth, human-centered values, transparency, robustness, accountability. Non-binding but directly influenced the EU AI Act and G7 policies.

5. **NIST ARIA provides technical methods to assure AI system safety and trustworthiness.** Complements AI RMF with three testing levels: model testing, red teaming, field testing. Initially focused on LLMs; target audience is U.S. federal agencies.

6. **IEEE, UNESCO, G7, and EU HLEG have each contributed significant AI frameworks.** IEEE 7000 = ethically aligned design. UNESCO = human rights-centered AI. G7 Hiroshima = Code of Conduct. EU HLEG = 7 requirements that shaped the EU AI Act. All non-binding but shape regulatory priorities globally.

---

## Key Terms

- **[[OECD AI Principles]]** — Five voluntary principles (2019) for trustworthy AI; foundational for international governance
- **[[NIST AI RMF]]** — AI Risk Management Framework; four functions: Govern, Map, Measure, Manage
- **[[NIST ARIA]]** — Assessing Risks and Impacts of AI; layered testing (model, red team, field)
- **[[ISO 22989]]** — Standard AI terminology and concepts (lexicon)
- **[[ISO 42001]]** — First certifiable AI management system standard
- **[[ISO 23894]]** — AI-specific risk management (complements 42001)
- **[[EU HLEG]]** — High-Level Expert Group; 7 requirements for trustworthy AI
- **[[G7 Hiroshima Process]]** — Code of Conduct for advanced AI systems (2023)
- **[[IEEE 7000 Series]]** — Ethically aligned design standards
- **[[UNESCO AI Ethics]]** — First global standard on AI ethics (2021, 194 member states)
- **[[Epistemic Uncertainty]]** — Unknowns from limited knowledge (e.g., insufficient training data)
- **[[Aleatoric Uncertainty]]** — Inherent randomness (e.g., noise in sensor data)
- **[[Model Cards]]** — Structured documentation of AI model performance, limitations, risks
- **[[RACI Model]]** — Responsible, Accountable, Consulted, Informed — governance role assignment
