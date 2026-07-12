---
tags: [aigp/reference, aigp/standards, aigp/iso]
created: 2026-07-11
source: "Sid Ahmed Benraouane - AI Management System Certification According to the ISO/IEC 42001 Standard (2024, Productivity Press)"
pages: 227
---

# ISO/IEC 42001:2023 — Artificial Intelligence Management System (AIMS)

> **Source:** Benraouane, S.A. (2024). *AI Management System Certification According to the ISO/IEC 42001 Standard: How to Audit, Certify, and Build Responsible AI Systems.* Productivity Press / Routledge.

## Overview

**ISO/IEC 42001:2023** is the **first international certifiable standard for AI governance**. Published December 2023 by ISO and IEC through their Joint Technical Committee (JTC1), it provides a comprehensive framework for organizations to establish, implement, maintain, and continually improve an **Artificial Intelligence Management System (AIMS)**.

- **Type:** Requirements standard (certifiable)
- **Scope:** Any organization, regardless of size, sector, or AI maturity
- **Purpose:** Help organizations use AI coherently, responsibly, and with appropriate governance
- **Key concept:** The standard puts **Responsible AI (RAI)** principles into a certifiable practice framework

### See also
- [[AIGP Body of Knowledge — Exam Blueprint]]
- [[AI Standards and Frameworks]]
- [[NIST AI RMF — Structured Reference]]

---

## ISO 42001 Structure: Annex SL & Harmonized Framework

ISO/IEC 42001 follows the **Annex SL** high-level structure — the same architecture used by all modern ISO management system standards. This harmonized structure ensures compatibility and integration with other management systems.

### The Annex SL Framework (Clauses 1–10)

| Clause | Title | Role in AIMS |
|--------|-------|-------------|
| 1 | Scope | Overall purpose and applicability |
| 2 | Normative References | Referenced standards |
| 3 | Terms and Definitions | Common language (links to ISO/IEC 22989:2022) |
| **4** | **Context of the Organization** | External/internal factors affecting AIMS |
| **5** | **Leadership** | Vision, policy, roles, responsibilities |
| **6** | **Planning** | Risk assessment, risk treatment, impact assessment, objectives |
| **7** | **Support** | Resources, competence, awareness, communication, documentation |
| **8** | **Operation** | AI project lifecycle controls and processes |
| **9** | **Performance Evaluation** | Monitoring, measurement, internal audit, management review |
| **10** | **Improvement** | Nonconformity, corrective action, continual improvement (PDCA) |

> Clauses 1–3 are informational; Clauses 4–10 contain the auditable requirements.

### The PDCA Cycle

ISO 42001 is built on the **Plan-Do-Check-Act** (Deming Cycle):

- **PLAN** (Clauses 4–6): Understand context, set leadership direction, plan risks and objectives
- **DO** (Clauses 7–8): Provide resources and execute AI project lifecycle processes
- **CHECK** (Clause 9): Monitor, measure, audit, and review performance
- **ACT** (Clause 10): Correct nonconformities and drive continual improvement

### Annexes

| Annex | Content |
|-------|---------|
| **Annex A** | Normative controls — specific requirements organizations must implement (or justify exclusion) |
| **Annex B** | Informative guidelines — implementation recommendations from ISO experts |
| **Annex C** | Informative — links to RAI objectives and ethical principles |

---

## Clause-by-Clause Requirements

### Clause 4: Context of the Organization

**Purpose:** Understand the bigger picture — why AI matters to *your* organization.

**Requirements:**
- Analyze **external and internal factors** affecting AIMS performance
- Identify **interested parties** (stakeholders) and their needs/expectations (per ISO/IEC 22989:2022)
- Define the **scope** of the AIMS — what's in, what's out, and boundaries
- Document the scope and its applicability (Clause 4.3)

**Three critical dimensions of context:**
1. **Competitive landscape & stakeholders** — industry analysis (Porter's Five Forces, PESTEL, SWOT), customer trends, AI impact on market segments
2. **Legal context** — GDPR, EU AI Act, US regulatory landscape (EEOC, CFPB, NYC Local Law 144, White House Executive Order), sector-specific regulations
3. **Ethical AI / Responsible AI** — five core principles (see below)

**Book's 15-step context analysis process:** Industry analysis → internal capabilities → regulatory framework (GDPR, EU AI Act, US trends) → ethical AI / RAI → stakeholder analysis → metrics

---

### Clause 5: Leadership

**Purpose:** Leadership commitment is the *sine qua non* of AIMS success.

**Three main leadership actions required:**
1. **Set the vision and priorities** — articulate what AI means for the organization, show engagement
2. **Develop an AI Policy** — an official, auditable document capturing leadership commitment
3. **Define roles, responsibilities, and authorities** — who does what in the AIMS

**AI Policy must include:**
- Statement of scope, purpose, and objectives
- Guidelines on acceptable/unacceptable AI use
- How AIMS integrates with other management systems
- Roles and responsibilities (technical + business)
- Data and privacy requirements
- AI compliance approach
- AI talent management
- Monitoring, improvement, review, and alignment processes

**Key Roles:**
- **Technical:** Data scientist, ML engineer, domain expert, AI designer
- **Business:** Executive leadership, project managers, compliance managers, AI strategist, ethics committee

**Responsible AI (RAI) as leadership imperative:**
- Lead with RAI principles from the top
- Set the tone through proactive communication
- Acknowledge uncertainties to build trust

---

### Clause 6: Planning

**Purpose:** Plan risk management, objectives, and change strategy.

**Key Actions:**
- **Risk Assessment** (Clause 6.1.2): Identify and evaluate AI risks
- **Risk Treatment** (Clause 6.1.3): Select controls to mitigate risks
- **Impact Assessment** (Clause 6.1.4): Assess consequences of AI systems on stakeholders
- **AI Objectives** (Clause 6.2): Set measurable objectives at all organizational levels
- **Change Planning** (Clause 6.3): Plan how to implement AIMS changes

**Typology of AI Risks (7 categories):**
1. **Performance Risk** — model inaccuracy, drift, failure
2. **Security Risk** — adversarial attacks, data poisoning, model theft
3. **Enterprise Risk** — misalignment with business processes
4. **Reputational Risk** — public backlash, brand damage
5. **Legal & Regulatory Risk** — non-compliance with evolving laws
6. **AI Scalability Risk** — small risks amplified at scale
7. **Black Box Risk** — inability to explain model decisions

**Eight Principles of AI Risk Management (aligned with NIST AI RMF):**
1. Integration into enterprise risk management
2. Holistic/comprehensive perspective
3. Customization to organizational context
4. Inclusiveness of stakeholder views
5. Agile mindset (able to adapt)
6. Spell out assumptions
7. Pay attention to cognitive bias
8. Learn and improve continuously

**Data Quality Requirements (Annex A, B.7.4):**
Good-quality data must be:
- **Sensitive** — anonymized, privacy-protecting
- **Representative** — free from selection/exclusion/reporting bias
- **Accurate** — objective, precise, reliable, valid, labeled
- **Accessible** — open, standardized, secure
- **Coverage** — geographical and temporal consistency

**Data bias enters during three stages:**
1. Data collection (sampling bias)
2. Data preparation (attribute selection that proxies for discrimination)
3. Problem framing (how you ask the question shapes the answer)

---

### Clause 7: Support

**Purpose:** Provide the infrastructure and people capabilities for AIMS effectiveness.

**Five support requirements:**

1. **Resources** (Clause 7.1) — Tangible and intangible
 - **Tangible:** Computing performance (CPU→GPU), storage capacity, networking infrastructure, security
 - **Intangible:** Knowledge, skills, attitudes (KSA)

2. **Competence** (Clause 7.2) — AI competence model
 - Document the KSA needed for employees involved in AIMS
 - Address shifting job descriptions, legacy issues, and need for interdisciplinarity
 - Three KSA pillars: ability to plan/execute digitally, ability to collect/use quality data, ability to learn and adapt

3. **Awareness** (Clause 7.3) — Employees must be aware of:
 - AI governance structure and leadership
 - AIMS scope and objectives
 - Responsible AI principles
 - AI risks and how they are managed
 - Data usage policies
 - How they contribute to AIMS effectiveness
 - Noncompliance consequences

4. **Communication** (Clause 7.4) — Communication strategy covering:
 - Target audience, frequency, medium, objectives
 - Face-to-face communication for complex AIMS topics
 - Policy champions to drive adoption
 - External communication (PR, stakeholder engagement)

5. **Documented Information** (Clause 7.5) — 13 categories of required documents (see below)

**Required Documentation (for certification):**
1. Scope of AIMS, boundaries, applicability (Clause 4.3)
2. AI policy (Clause 5.5)
3. AI risk and opportunities register (Clause 6.1)
4. Risk assessment methodology (Clause 6.1.2)
5. Risk treatment justification — why controls were excluded/chosen (Clause 6.1.3)
6. Impact assessment process and results (Clause 6.1.4)
7. AI objectives at all levels and how to achieve them (Clause 6.2)
8. Competence records of AIMS personnel (Clause 7.2)
9. Planning and control process documentation
10. Risk assessment, treatment, and impact assessment results (Clauses 8.2–8.4)
11. Monitoring and measurement records (Clause 9.1)
12. Audit program and results (Clause 9.2.2)
13. Management review results (Clause 9.3)

---

### Clause 8: Operation

**Purpose:** Execute AI projects with appropriate controls throughout the lifecycle.

**Three critical operational steps:**
1. Define required controls for AIMS functioning
2. Establish monitoring, control, and corrective action systems
3. Document planning and control processes

**AI Project Lifecycle (Design → Develop → Deploy):**

| Phase | Process Grouping | Activities | ISO 42001 Controls |
|-------|-----------------|------------|-------------------|
| **Design** | PG1 | Problem identification, idea selection, context understanding, literature review, question framing | Document RAI objectives (A.6.1.2); Document trustworthiness processes (A.6.1.3) |
| **Design** | PG2 | Data collection, data wrangling/labeling | Data quality requirements (B.7.4); Data provenance |
| **Develop** | PG3 | Model building, model evaluation | Model testing, validation metrics |
| **Deploy** | PG4 | Model production, monitoring | Ongoing monitoring, KPI tracking |

**Key references for operational controls:**
- ISO/IEC 5338:2023 (AI system life cycle processes)
- ISO/IEC 23894:2023 (AI risk management guidance)
- ISO/IEC 38507:2022 (Governance implications of AI)

---

### Clause 9: Performance Evaluation

**Purpose:** Assess whether the AIMS is working as intended.

**Three required actions:**

1. **Monitoring and Measurement** (Clause 9.1)
 - What to evaluate: full AIMS or specific parts
 - AIMS Governance KPIs: Data quality, Security, Cost/Value, Bias, Accountability, Audit frequency
 - ML Technical KPIs: MSE, MTTR, FCRR, Error analysis, Data/concept drift

2. **Internal Audit** (Clause 9.2)
 - Must achieve: conformity to organizational requirements, conformity to ISO 42001, evidence of effective implementation
 - NIST AI RMF audit framework: **Govern → Map → Measure → Manage**
 - **LLM Audit** (Mökander et al. 2023 three-layer framework):
 1. Governance audit of technology provider
 2. Model audit (limitations, capabilities, performance, security)
 3. Application audit (legal/ethical compliance, impact on users/society)
 - **Algorithmic Audit:** Distinguish between ethical risk assessment (socio-technical) and algorithmic bias assessment (technical inspection of model internals)

3. **Management Review** (Clause 9.3)
 - Review previous audits, changes since last cycle, stakeholder expectation changes, opportunities for improvement
 - Must be documented

---

### Clause 10: Improvement

**Purpose:** Continuously improve the AIMS through structured corrective and preventive action.

**Key Concepts:**
- **Deviation:** Gap between actual and target performance
- **Nonconformity:** Non-fulfillment of a required action (e.g., missing AI policy)

**Three responses to nonconformity:**
1. Accept consequences and correct
2. **Root-cause analysis** (most important) — understand why it happened
3. Update AIMS based on findings

**CAPA Framework (Corrective and Preventive Actions):**
- **Corrective Actions:** Eliminate deviations immediately, then permanently address root causes (human error, technical issue, or process error)
- **Preventive Actions:** Build trigger/alarm systems to predict and prevent recurrence

**PDCA for Continuous Improvement:**
- **PLAN:** Define business problem, clarify objectives, set metrics and milestones, identify resources
- **DO:** Collect data, monitor model performance, list risks, test and experiment
- **CHECK:** Verify governance (policy, risk, documentation) AND technical behavior (model accuracy, validation)
- **ACT:** Address issues identified in Check — both governance and technical fixes

---

## Ethical AI & Responsible AI (RAI) Framework

**Five consensus ethical principles for RAI:**

| Principle | Description | ISO 42001 Link |
|-----------|-------------|----------------|
| **Do No Harm** | AI must be safe, secure; prevent physical/mental harm | Clause B.5.5 — assess and document potential harm |
| **Fairness & Non-Discrimination** | Equal treatment; free from unfair bias | Algorithmic fairness, representative data |
| **Human Oversight (Human-in-the-Loop)** | Humans must remain in control; AI empowers, doesn't control | Governance model for oversight |
| **Explainability** | Meaningful explanation of AI decisions | ISO/IEC TR 24028:2020 — ex ante / ex post explanation |
| **Robustness** | Consistent performance regardless of environmental changes | Testing, feedback loops, human-in-the-loop validation |

**Seven EU HLEG Requirements for Trustworthy AI:**
1. Human agency and oversight
2. Robustness and safety
3. Privacy and data governance
4. Transparency
5. Diversity, non-discrimination, and fairness
6. Societal and environmental well-being
7. Accountability

---

## Comparison to Other ISO Management Standards

### ISO 42001 vs. ISO 9001:2015 (Quality Management)

| Dimension | ISO 42001 | ISO 9001 |
|-----------|-----------|----------|
| **Focus** | AI governance, risk, responsibility | Product/service quality, customer satisfaction |
| **Risk approach** | AI-specific risks (bias, black box, scalability) | General quality risks |
| **Annex SL** | ✓ Same structure | ✓ Same structure |
| **Documented information** | Same generic requirements (Clause 7.5) | Same generic requirements |
| **Integration** | Designed to integrate with 9001 | Can serve as foundation for AIMS build |
| **Audit** | Requires AI/ML technical + governance competence | Quality management competence |

### ISO 42001 vs. ISO 27001:2022 (Information Security)

| Dimension | ISO 42001 | ISO 27001 |
|-----------|-----------|----------|
| **Focus** | AI governance and responsibility | Information security (CIA triad) |
| **Annex A controls** | AI-specific normative controls | Security controls |
| **Overlap** | Data quality, security controls, infrastructure | — |
| **Key distinction** | 42001 addresses AI ethics, fairness, explainability | 27001 does not address AI-specific issues |

### ISO 42001 vs. NIST AI RMF 1.0

| Dimension | ISO 42001 | NIST AI RMF |
|-----------|-----------|-------------|
| **Nature** | Certifiable requirements standard | Voluntary guidance framework |
| **Structure** | Annex SL (clauses 4–10) | Govern → Map → Measure → Manage |
| **Auditability** | Designed for third-party certification | Designed for self-assessment |
| **Adoption** | Global (ISO member countries) | US-focused but internationally influential |

---

## Certification Process

### Key Points
- ISO/IEC 42001 is **certifiable** — organizations can obtain third-party certification
- Certification demonstrates that the AIMS conforms to the standard's requirements
- The standard specifies **what** must be done, not **how** — organizations choose implementation methods
- A new standard under development: **ISO/IEC CD 42006** — *Requirements for bodies providing audit and certification of AIMS*

### Preparing for Certification

**Book's recommended approach:**
1. **Start with Clause 4 (Context):** Conduct fresh context analysis — don't recycle old documentation
2. **Mobilize a cross-functional team** — IT, legal, compliance, HR, strategy, customer service
3. **Set the roadmap** — identify AIMS issues, stakeholders, ethical/value system
4. **Conduct discovery sessions** — workshops to learn about the context together
5. **External analysis first** — economic impact, regulatory trends, competitive landscape
6. **Internal analysis second** — digital transformation capabilities, talent, risks

### What Auditors Look For
- Evidence of leadership commitment (documented AI policy)
- Thoroughness of context analysis and its connection to planning
- Documented risk assessment, treatment, and impact assessment
- Functioning internal audit program
- Management review records
- All 13 categories of documented information
- Traceability from context → planning → operations → evaluation → improvement

### Internal Audit Program
Must achieve three goals:
1. Conformity of AIMS with organizational AI requirements
2. Conformity with ISO/IEC 42001 requirements
3. Evidence that AIMS is effectively implemented and maintained

**Audit scope depends on:** business environment, legal context, organizational size, economic sector, previous audit results

---

## Integration with Other Management Systems

ISO 42001 is designed as a **harmonized management system standard** using Annex SL. It integrates seamlessly with:
- **ISO 9001:2015** (Quality) — shared structure, documented information requirements
- **ISO 27001:2022** (Information Security) — complementary security controls
- **ISO 14001:2015** (Environmental) — shared Annex SL structure
- **ISO 45001:2018** (Occupational Health & Safety) — shared management approach
- **ISO 56002:2019** (Innovation Management) — innovation ecosystem for AI
- **ISO 31000** (Risk Management) — foundational risk concepts
- **ISO 37000** (Governance of Organizations) — top-level governance

### Related ISO/IEC AI Standards Ecosystem
- **ISO/IEC 22989:2022** — AI concepts and terminology (defines roles: provider, developer, user, etc.)
- **ISO/IEC 23894:2023** — AI guidance on risk management
- **ISO/IEC 38507:2022** — Governance implications of AI use by organizations
- **ISO/IEC TR 24028:2020** — Overview of trustworthiness in AI
- **ISO/IEC TR 24368:2022** — Overview of ethical and societal concerns
- **ISO/IEC 5338:2023** — AI system life cycle processes
- **ISO/IEC 42006** *(under development)* — Requirements for AIMS audit and certification bodies

---

## Regulatory Context

### EU
- **EU AI Act** (approved April 2024): Risk-based approach — Unacceptable (prohibited), High (certification/conformity assessment), Limited (transparency), Minimal (voluntary codes)
- **GDPR** (2018): Data processing principles directly linked to ISO 42001 Annex A controls (B.4.3, B.7.2–B.7.6)

### US
- **Executive Order on Safe, Secure, and Trustworthy AI** (Oct 2023): NIST to develop standards; foundation model developers must share safety test results
- **EEOC** guidelines on algorithmic discrimination under Title VII
- **NYC Local Law 144**: Prohibits discrimination in Automated Employment Decision Tools (AEDT)
- **Algorithmic Accountability Act** (proposed, not enacted): Mandatory impact assessments
- 14 states with enacted/adopted AI legislation as of 2023

### Global
- **OECD AI Principles**
- **UNESCO AI Ethics Recommendations**
- **White House voluntary commitments** (Jul 2023): Amazon, Anthropic, Google, Inflection, Meta, Microsoft, OpenAI — safety, security, trust pillars

---

## Book's Practical Framework Summary

The book provides implementation guidance beyond the standard text. Key frameworks:

1. **15-step context analysis process** (Ch. 5): Industry → internal capabilities → regulatory → ethical → stakeholders → metrics
2. **7-type AI risk typology**: Performance, Security, Enterprise, Reputational, Legal/Regulatory, Scalability, Black Box
3. **8 principles of AI risk management**: Integration, Holistic, Customization, Inclusiveness, Agile, Assumptions, Bias awareness, Learning
4. **AI project lifecycle controls** (Design PG1→PG2 → Develop PG3 → Deploy PG4)
5. **PDCA improvement cycle** applied specifically to AI projects
6. **Kotter's change model** adapted for AIMS implementation (Urgency → Guiding Team → Vision → Buy-in → Empower → Perseverance)
7. **CAPA framework** for corrective and preventive action
8. **Three-layer LLM audit framework** (Mökander et al.): Governance → Model → Application
9. **50 key terms** glossary covering AI, ISO standards, quality, and cognitive bias

---

## Quick Reference: ISO 42001 at a Glance

| Element | Detail |
|---------|--------|
| **Full name** | ISO/IEC 42001:2023 Artificial Intelligence Management System |
| **Published** | December 2023 |
| **Structure** | Annex SL (harmonized with 9001, 27001, 14001, 45001) |
| **Type** | Certifiable requirements standard |
| **Core clauses** | 4 (Context) → 5 (Leadership) → 6 (Planning) → 7 (Support) → 8 (Operation) → 9 (Performance Evaluation) → 10 (Improvement) |
| **Cycle** | PDCA (Plan-Do-Check-Act) |
| **Annexes** | A (normative controls), B (informative guidelines), C (RAI links) |
| **Key differentiator** | First standard to operationalize Responsible AI into a certifiable management system |
| **Related standards** | 22989, 23894, 38507, 24028, 24368, 5338, 42006 |
| **Certification body standard** | ISO/IEC CD 42006 (under development) |

---

## Key Exam Takeaways

1. **ISO 42001 is the first international certifiable AI management system standard** — published Dec 2023
2. **Follows Annex SL** — same high-level structure as ISO 9001, 27001, 14001, 45001
3. **PDCA cycle** underpins Clauses 4–10: Plan (4-6), Do (7-8), Check (9), Act (10)
4. **Responsible AI** is the central philosophy: Do No Harm, Fairness, Human Oversight, Explainability, Robustness
5. **Risk-based approach** with three mandatory activities: Risk Assessment (6.1.2), Risk Treatment (6.1.3), Impact Assessment (6.1.4)
6. **13 categories of documented information** required for certification
7. **Complements NIST AI RMF** — ISO 42001 is certifiable, NIST is voluntary guidance
8. **Integrates with GDPR, EU AI Act, and US regulatory frameworks**
9. **Annex A** contains normative controls; organizations must implement them or justify exclusion
10. **New ISO/IEC 42006** standard will govern AIMS audit and certification bodies
