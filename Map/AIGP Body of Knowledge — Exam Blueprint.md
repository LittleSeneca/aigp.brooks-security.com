---
tags:
 - aigp/bok
 - aigp/reference
 - aigp/exam
created: 2026-07-11
updated: 2026-09-23
source: "IAPP AIGP Body of Knowledge and Exam Blueprint v2.1 (approved 9 Sep 2025, effective 2 Feb 2026; supersedes v2.0.1)"
related:
 - "[[AIGP Study Index]]"
 - "[[Foundations Index]]"
 - "[[Legal and Regulatory Index]]"
 - "[[AI Lifecycle Index]]"
---

# AIGP Body of Knowledge v2.1

> **Exam Blueprint** — the authoritative source for what the AIGP exam tests. **Version 2.1, effective 2 February 2026**, supersedes v2.0.1. [Official PDF](https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt0d33152fd20bc134/AIGP_Cert%20BOK.pdf)

## Exam Structure

| Domain | Title | Questions (min–max) | Share of scored items* |
|--------|-------|---------------------|--------|
| I | Understanding the foundations of AI governance | 16–20 | ~21% |
| II | Understanding how laws, standards and frameworks apply to AI | 19–23 | ~25% |
| III | Understanding how to govern AI development | 21–25 | ~27% |
| IV | Understanding how to govern AI deployment and use | 21–25 | ~27% |
| **Total** | | **100 questions (~90 scored + ~10 unscored)** | |

\* From the range midpoints. The app's Full Exam uses these weights.

- **Format:** multiple choice, including multi-select items that tell you how many to choose (e.g. "Select 3") with no partial credit, and scenario sets where several questions share one case.
- **Timing and scoring:** 2h45m plus an optional 15-minute break that splits the exam into halves; you cannot return to the first half after submitting it. Scaled score 100–500, and 300 passes.
- **Cognitive level:** questions focus on **Remember/Understand** and **Apply/Analyze** (Bloom's taxonomy).

## Version 2.1 — What Changed

Compared with v2.0.1 (effective 3 Feb 2025):

- **II.C broadened from "the EU AI Act" to "AI-specific laws"** (now 6–8 questions, was 5–7).
  - The Domain II description names the **EU AI Act**, the **South Korean AI Basic Law**, and **federal and state AI laws that apply to private-sector organizations**.
  - v2.0.1 had explicitly *excluded* US state laws as too piecemeal.
- **II.D slimmed** (now 3–5, was 4–6).
  - **NIST ARIA removed.**
  - The core ISO standards are now **22989, 42001 and 42005** (AI system impact assessment).
  - OECD and the NIST AI RMF + Playbook are unchanged.
- **II.A:** "notice, choice, consent" became "**transparency, choice, lawful basis**"; controller obligations now include **automated decision-making**.
- **I.B:** **providers** added alongside developers, deployers and users.
- **I.C:** the policy review now covers **data governance and intellectual property**; the third-party item covers policies, assessments **and contracts**, and adds **acceptable use**.
- **III.A and IV.B:** the "identify applicable laws" indicators were removed, and "model" became "system" throughout.
- **IV.B:** "open source agreement" became "**licensing agreement**"; the proprietary-model item is reframed as risks *and opportunities*.
- **IV.A:** deployment options now include **agentic architectures**, alongside fine-tuning and RAG.
- **New intro:**
  - The certification explicitly covers **generative and agentic AI**.
  - "Developer" and "deployer" are used as *task* labels, not legal categories.
  - Laws are distilled to their most widely accepted elements rather than every niche.
- **Unchanged:** the four domain ranges, the other competency ranges, and the Bloom's levels.

---

## Domain I: Foundations of AI Governance (16–20 questions)

What AI governance is, and the common principles and pillars of an AI governance program, regardless of industry, sector or size.

### I.A — Understand what AI is and why it needs governance (4–6 q)
- Know generally accepted **definitions and types of AI**
- Identify **risks and harms** to individuals, groups, organizations and society (misalignment with objectives, ethics and bias, complexity and scalability)
- Identify the **characteristics** that demand governance (complexity, opacity, autonomy, speed and scale, potential for harm or misuse, data dependency, probabilistic vs deterministic outputs)
- Identify and apply **responsible AI principles** (fairness, safety and reliability, privacy and security, transparency and explainability, accountability, human-centricity)

### I.B — Establish and communicate organizational expectations (5–7 q)
- Define **roles and responsibilities** for governance stakeholders
- Establish **cross-functional collaboration** (efficacy, diversity of expertise and perspective)
- Create and deliver **training and awareness** on AI terminology, strategy and governance
- Differentiate approaches by **size, maturity, industry, products and services, objectives and risk tolerance**
- Identify differences among **developers, providers, deployers and users** (responsibilities, opportunities, needs)

### I.C — Establish policies and procedures across the life cycle (6–8 q)
- Policies for **oversight and accountability** at every stage (use-case assessment, risk management, ethics by design, data acquisition and use, model and system development, training and testing, deployment and monitoring, documentation and reporting, incident management)
- Evaluate and update **existing policies** (data privacy, security, data governance, intellectual property) for AI
- Policies, assessments and **contracts** for **third-party risk** (procurement, supply chain, human resources, acceptable use)

### 📎 Cross-references
- [[AI and AI Governance]] — I.A
- [[Organizational Readiness]] — I.B
- [[Updating Policies for AI]] — I.C
- [[Agentic AI Governance]] — agentic AI concepts

---

## Domain II: Laws, Standards & Frameworks (19–23 questions)

Existing laws that apply to AI, plus AI-specific laws, standards and frameworks: the major elements of current AI laws such as the EU AI Act, the South Korean AI Basic Law, and federal and state AI laws that apply to private-sector organizations.

### II.A — How existing data privacy laws apply to AI (4–6 q)
- **Transparency, choice, lawful basis and purpose limitation**
- **Data minimization and privacy by design**
- **Controller obligations** (privacy impact assessments, third-party processors, cross-border transfers, data subject rights, **automated decision-making**, incident management, breach notification, record keeping)
- **Sensitive and special-category data** (e.g. biometrics)

### II.B — How other existing laws apply to AI (4–6 q)
- **Intellectual property** (e.g. limits on using data for training)
- **Non-discrimination** (employment, credit, lending, housing, insurance)
- **Consumer protection** (unfair and deceptive acts or practices)
- **Product liability** (design and manufacturing defects)

### II.C — Main elements of AI-specific laws (6–8 q)
- **Risk classification** (e.g. prohibited / high / limited / minimal) and what falls in each category
- **Risk management, data governance, technical documentation, conformity/impact assessments and record keeping**
- **Human oversight, transparency and notification, quality management**
- Distinct requirements for **general-purpose AI models**
- **Enforcement framework and penalties**
- Differences by **organizational context** (providers, deployers, importers, distributors)

### II.D — Main industry standards and tools (3–5 q)
- **OECD** principles, framework, policies and recommended practices for trustworthy AI
- **NIST AI RMF and Playbook** (core functions, categories, subcategories)
- **Core ISO AI standards: 22989, 42001 and 42005**

### 📎 Cross-references
- [[Privacy and Data Protection Law]] — II.A
- [[Sectoral and Civil Laws]] — II.B
- [[The EU AI Act]] — II.C
- [[South Korea AI Basic Act — Key Provisions]] — II.C
- [[US AI Laws — Federal and State]] — II.C
- [[AI Standards and Frameworks]] — II.D
- [[EU AI Act 2024 — Key Provisions]]
- [[GDPR — AI-Relevant Provisions]]
- [[NIST AI RMF — Structured Reference]]
- [[NIST AI RMF Playbook — Structured Reference]]
- [[ISO 42005 — AI System Impact Assessment]]
- [[OECD AI Principles — Structured Reference]]

---

## Domain III: Governing AI Development (21–25 questions)

Responsibilities for designing, building, training, testing and maintaining AI systems.

### III.A — Govern designing and building the AI system (6–8 q)
- Define the **business context and use case**
- Perform or review an **impact assessment**
- Apply **policies, procedures, best practices and ethics** to design and build (purpose, requirements gathering, architecture and model selection, human oversight, data analysis, metric and threshold evaluation, stakeholder engagement and feedback, operational controls)
- Identify and manage **internal and external design risks** (probability/severity harms matrix, risk mitigation hierarchy, stakeholder mapping, use-case evaluation, benchmarking, pre-deployment pilots and testing)
- **Document** the design and build process

### III.B — Govern data collection and use in training and testing (6–8 q)
- **Data governance requirements** (lawful rights to collect and use; quality, quantity, integrity, fitness for purpose)
- **Data lineage and provenance**
- Plan and perform **training and testing** (unit, integration, validation, performance, security, bias, interpretability)
- Manage **issues and risks** during training and testing
- **Document** the training and testing process

### III.C — Govern release, monitoring and maintenance (8–10 q)
- **Release readiness** (model card, conformity requirements)
- **Continuous monitoring** and a regular schedule for maintenance, updates and retraining
- **Periodic assessments** of performance, reliability and safety (audits, red teaming, threat modeling, security testing)
- Manage and document **incidents, issues and risks**
- Cross-functional **incident analysis** (brittleness, lack of robustness, poor-quality data, insufficient testing, model or data drift)
- **Public disclosures** (technical documentation, instructions for use to deployers, post-market monitoring plans)

### 📎 Cross-references
- [[AI System Design]] — III.A
- [[Data Governance and Model Training]] — III.B
- [[Deployment and Monitoring]] — III.C
- [[AI Risk Management and Assurance]] — III.C
- [[ISO 42005 — AI System Impact Assessment]] — impact assessments
- [[NIST AI RMF — Structured Reference]]

---

## Domain IV: Governing AI Deployment & Use (21–25 questions)

Selecting an AI model, then deploying and using it responsibly through ongoing monitoring, maintenance and other key obligations — in any deployment context, whether the company deploys its own proprietary model or a third party's.

### IV.A — Evaluate key factors and risks in the decision to deploy (6–8 q)
- **Context of the use case** (business objectives, performance requirements, data availability, ethical considerations, workforce readiness)
- **AI model types** (classic vs generative, proprietary vs open source, small vs large, language vs multimodal)
- **Deployment options** (cloud vs on-premise vs edge; as-is vs fine-tuning, retrieval-augmented generation, **agentic architectures** or other techniques)

### IV.B — Perform key assessment activities (5–7 q)
- Perform or review an **impact assessment** on the selected system
- Identify and evaluate key terms and risks in the **vendor or licensing agreement**
- Risks and opportunities unique to deploying a **proprietary model** (increased obligations, higher potential liability)

### IV.C — Govern deployment and use (9–11 q)
- Apply **policies, procedures, best practices and ethics** (data governance, risk management, issue management, user training)
- **Continuous monitoring** and a regular maintenance, update and retraining schedule
- **Periodic assessments** (audits, red teaming, threat modeling, security testing)
- **Document** incidents, issues, risks and post-market monitoring plans
- Forecast and reduce risks of **secondary or unintended uses and downstream harms**
- **External communication plans**
- Policy and controls to **deactivate or localize** a system (regulatory requirements, performance issues)

### 📎 Cross-references
- [[Deployment and Monitoring]] — IV.A, IV.C
- [[AI Risk Management and Assurance]] — IV.B, IV.C
- [[Ongoing AI Operations]] — IV.C
- [[Agentic AI Governance]] — IV.A agentic architectures
- [[GPAI Code of Practice — Key Provisions]]

---

## Key Standards Referenced in the BOK

| Standard / law | What it covers | BOK |
|----------|---------------|------------|
| **OECD AI Principles** (+ classification framework, definition, recommended practices) | Trustworthy AI: inclusive growth, human-centred values, transparency, robustness, accountability | II.D |
| **NIST AI RMF 1.0 + Playbook** | Govern → Map → Measure → Manage; suggested actions per subcategory | II.D |
| **ISO/IEC 22989** | AI concepts and terminology | II.D |
| **ISO/IEC 42001** | AI management system (certifiable) | II.D |
| **ISO/IEC 42005** | AI system impact assessment (guidance) | II.D |
| **EU AI Act** | Risk-based regulation: prohibited → high → limited → minimal; GPAI | II.C |
| **South Korea AI Basic Act** | High-impact and generative AI duties, in force 22 Jan 2026 | II.C |
| **US federal and state AI laws** | e.g. Colorado ADMT Act, Texas TRAIGA, California SB 53, NYC Local Law 144 | II.C |
| **GDPR** (and other privacy laws) | Lawful basis, Art 22 automated decisions, Art 35 DPIAs, Art 9 special categories | II.A |

> NIST ARIA appeared in v2.0.1 II.D and was **removed in v2.1**. [[NIST ARIA — Structured Reference]] is kept only as background.
