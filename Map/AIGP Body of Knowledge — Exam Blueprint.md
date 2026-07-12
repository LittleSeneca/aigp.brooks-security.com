---
tags:
 - aigp/bok
 - aigp/reference
 - aigp/exam
created: 2026-07-11
source: "IAPP AIGP Body of Knowledge v2.0.1 (effective 3 Feb 2025)"
related:
 - "[[AIGP Study Index]]"
 - "[[Foundations Index]]"
 - "[[Legal and Regulatory Index]]"
 - "[[AI Lifecycle Index]]"
---

# AIGP Body of Knowledge v2.0.1

> **Exam Blueprint** — the authoritative source for what's tested on the AIGP exam.

## Exam Structure

| Domain | Title | Questions (min–max) | Weight |
|--------|-------|---------------------|--------|
| I | Understanding the foundations of AI governance | 16–20 | ~18% |
| II | Understanding how laws, standards and frameworks apply to AI | 19–23 | ~21% |
| III | Understanding how to govern AI development | 21–25 | ~23% |
| IV | Understanding how to govern AI deployment and use | 21–25 | ~23% |
| **Total** | | **~90 scored + 10 unscored = 100** | |

> **Bloom's Taxonomy:** Exam questions focus on **Remember/Understand** and **Apply/Analyze** levels.

## Version 2 Focus Areas
1. Comprehensive foundation for AI and AI governance
2. Current laws, regulations, and industry standards
3. Clear differentiation between governing AI development vs deployment/use
4. Practical, daily responsibilities (not theoretical questions)

> **Note:** US state-specific AI laws are NOT included (too piecemeal). The exam focuses on globally accepted standards.

---

## Domain I: Foundations of AI Governance (16–20 questions)

### I.A — Understand what AI is and why it needs governance (4–6 q)
- Know generally accepted **definitions and types of AI**
- Identify **types of risks and harms** (misalignment, ethics/bias, complexity/scalability)
- Identify **unique characteristics** requiring governance (complexity, opacity, autonomy, speed/scale, harm potential, data dependency, probabilistic vs deterministic)
- Apply **principles of responsible AI** (fairness, safety/reliability, privacy/security, transparency/explainability, accountability, human-centricity)

### I.B — Establish organizational expectations for AI governance (5–7 q)
- Define **roles and responsibilities** for stakeholders
- Establish **cross-functional collaboration**
- Create **training and awareness** programs
- Differentiate approaches by **company size, maturity, industry, risk tolerance**
- Identify differences among **developers, deployers, and users**

### I.C — Establish policies throughout the AI lifecycle (6–8 q)
- Policies for **oversight and accountability** across all lifecycle stages
- Evaluate and update **data privacy and security policies** for AI
- Manage **third-party risk** (procurement, supply chain, HR)

### 📎 Cross-references
- [[AI and AI Governance]] — I.A coverage
- [[Organizational Readiness]] — I.B coverage
- [[Updating Policies for AI]] — I.C coverage

---

## Domain II: Laws, Standards & Frameworks (19–23 questions)

### II.A — Data privacy laws and AI (4–6 q)
- **Notice, choice, consent, purpose limitation** in AI
- **Data minimization and privacy by design** in AI
- **Data controller obligations** (DPIAs, third-party processors, cross-border transfers, data subject rights, incident management, breach notification, record keeping)
- **Sensitive/special category data** requirements (biometrics)

### II.B — Other existing laws and AI (4–6 q)
- **Intellectual property laws** (training data limitations)
- **Non-discrimination laws** (employment, credit/lending, housing, insurance)
- **Consumer protection laws** (unfair/deceptive acts)
- **Product liability laws** (design/manufacturing defects)

### II.C — EU AI Act (5–7 q)
- **Risk classification** (prohibited, high-risk, limited-risk, minimal-risk)
- **Requirements by risk tier** (risk management, data governance, documentation, conformity assessment, human oversight, transparency, QMS)
- **General-purpose AI** requirements
- **Enforcement and penalties**
- **Organizational context** (providers, deployers, importers, distributors)

### II.D — Industry standards and tools (4–6 q)
- **OECD principles** for trustworthy AI
- **NIST AI RMF** (core functions: Govern, Map, Measure, Manage)
- **NIST ARIA** program (methodologies, tools, metrics)
- **ISO standards** (22989 — terminology, 42001 — management system)

### 📎 Cross-references
- [[Privacy and Data Protection Law]] — II.A
- [[Sectoral and Civil Laws]] — II.B
- [[The EU AI Act]] — II.C
- [[AI Standards and Frameworks]] — II.D
- [[EU AI Act 2024 — Key Provisions]]
- [[GDPR — AI-Relevant Provisions]]
- [[NIST AI RMF — Structured Reference]]
- [[OECD AI Principles — Structured Reference]]

---

## Domain III: Governing AI Development (21–25 questions)

### III.A — Govern design and building (6–8 q)
- Define **business context and use case**
- Perform **impact assessments**
- Identify **applicable laws**
- Apply **policies, procedures, and ethics** to design/build (purpose, requirements, architecture, model selection, human oversight, data analysis, metrics/thresholds, stakeholder engagement, operational controls)
- Identify and manage **design risks** (probability/severity matrix, risk mitigation hierarchy, stakeholder mapping, benchmarking, pre-deployment pilots)
- **Document** the design/build process

### III.B — Govern data for training/testing (6–8 q)
- **Data governance requirements** (lawful rights, quality, quantity, integrity, fit-for-purpose)
- **Data lineage and provenance**
- **Training and testing** (unit, integration, validation, performance, security, bias, interpretability)
- **Issues and risks** during training/testing
- **Document** the training/testing process

### III.C — Govern release, monitoring, and maintenance (8–10 q)
- **Pre-release readiness** (model card, conformity requirements)
- **Continuous monitoring** and maintenance schedule
- Periodic **performance, reliability, safety assessments** (audits, red teaming, threat modeling, security testing)
- **Incident management** and documentation
- Cross-functional **incident analysis** (brittleness, robustness, data quality, testing, drift)
- **Public disclosures** (technical documentation, deployment instructions, post-market monitoring)

### 📎 Cross-references
- [[AI System Design]] — III.A
- [[Data Governance and Model Training]] — III.B
- [[Deployment and Monitoring]] — III.C
- [[AI Risk Management and Assurance]] — III.C
- [[NIST AI RMF — Structured Reference]]
- [[NIST ARIA — Structured Reference]]

---

## Domain IV: Governing AI Deployment & Use (21–25 questions)

### IV.A — Evaluate factors for deployment decisions (6–8 q)
- Context of **AI use case** (business objectives, performance, data availability, ethics, workforce readiness)
- Differences in **AI model types** (classic vs generative, proprietary vs open source, small vs large, language vs multimodal)
- Differences in **deployment options** (cloud vs on-prem vs edge, as-is vs fine-tuning vs RAG)

### IV.B — Key assessment activities (5–7 q)
- **Impact assessments** on selected AI model
- **Applicable laws**
- **Vendor/open source terms and risks**
- Issues unique to **proprietary model deployment** (increased obligations, higher liability)

### IV.C — Govern deployment and use (9–11 q)
- Apply **policies and procedures** (data governance, risk management, issue management, user training)
- **Continuous monitoring** and maintenance
- Periodic **assessments** (audits, red teaming, threat modeling, security testing)
- **Document** incidents, issues, risks, post-market monitoring
- Forecast **secondary/unintended uses and downstream harms**
- **External communication plans**
- **Deactivation/localization policies** for regulatory or performance reasons

### 📎 Cross-references
- [[Deployment and Monitoring]] — IV.A, IV.C
- [[AI Risk Management and Assurance]] — IV.B, IV.C
- [[Ongoing AI Operations]] — IV.C
- [[GPAI Code of Practice — Key Provisions]]

---

## Key Standards Referenced in the BOK

| Standard | What It Covers | BOK Domain |
|----------|---------------|------------|
| **OECD AI Principles** | Trustworthy AI: inclusive growth, human-centered values, transparency, robustness, accountability | II.D |
| **NIST AI RMF 1.0** | Govern → Map → Measure → Manage functions | II.D |
| **NIST ARIA** | Methodologies, tools, metrics for AI safety evaluation | II.D |
| **ISO/IEC 22989** | AI terminology and definitions | II.D |
| **ISO/IEC 42001** | AI management system (certifiable) | II.D |
| **EU AI Act** | Risk-based regulation: prohibited → high → limited → minimal | II.C |
| **GDPR** | Data protection: Art 22 (automated decisions), Art 35 (DPIAs), Art 9 (special categories) | II.A |
