---
tags:
 - aigp/reference
 - aigp/standards
 - aigp/iso
 - aigp/risk
aliases:
 - ISO 23894
 - AI Risk Management Standard
created: 2026-07-11
---

# ISO/IEC 23894 — AI Risk Management

> **Full Title:** ISO/IEC 23894:2023 — Information technology — Artificial intelligence — Guidance on risk management
>
> **Status:** International Standard, First Edition (2023-02)
>
> **Scope:** Guidance on how organizations that develop, produce, deploy, or use products, systems, and services utilizing AI can manage risk specifically related to AI. Customizable to any organization and its context.
>
> **⚠️ Note:** This reference is based on the publicly available 12-page SAMPLE. The full standard contains additional detail in the process clauses, Annex A (objectives), Annex B (risk sources), and Annex C (AI system life cycle mapping).

## Cross-References

- [[NIST AI RMF — Structured Reference]]
- [[ISO 42001 — Structured Reference]]
- [[AI Risk Management and Assurance]]
- [[ISO 22989 — Key Definitions]]

---

## Document Architecture

ISO 23894 is intentionally structured to **mirror ISO 31000:2018** clause-by-clause, extending each with AI-specific guidance:

| ISO 31000:2018 Clause | ISO 23894 Treatment |
|------------------------|---------------------|
| **Clause 4 — Principles** | AI-specific implications for each of the 8 principles |
| **Clause 5 — Framework** | Extended guidance for leadership, integration, design, implementation, evaluation, improvement |
| **Clause 6 — Process** | AI-specialized risk assessment, treatment, monitoring, recording |
| **Annex A** (informative) | Common AI-related objectives |
| **Annex B** (informative) | AI risk sources |
| **Annex C** (informative) | Mapping between risk management processes and AI system life cycle |

> **Key Relationship:** ISO 23894 extends ISO 31000 — it does **not** replace it. "Whenever this document extends the guidance given in ISO 31000:2018, an appropriate reference to the clauses of ISO 31000:2018 is made followed by AI-specific guidance."

---

## Normative References

| Standard | Role |
|----------|------|
| **ISO 31000:2018** | Risk management — Guidelines (the parent framework) |
| **ISO Guide 73:2009** | Risk management — Vocabulary |
| **ISO/IEC 22989:2022** | AI concepts and terminology (definitions for "AI system," etc.) |

---

## Part 1: Principles of AI Risk Management (Clause 4)

ISO 23894 takes the 8 principles from ISO 31000:2018 and provides AI-specific implications:

| # | Principle | AI-Specific Guidance |
|---|-----------|---------------------|
| **a** | **Integrated** — Risk management is an integral part of all organizational activities. | No additional guidance beyond ISO 31000. |
| **b** | **Structured & Comprehensive** — Structured approach contributes to consistent and comparable results. | No additional guidance beyond ISO 31000. |
| **c** | **Customized** — Framework and process are customized and proportionate to the organization's external and internal context. | No additional guidance beyond ISO 31000. |
| **d** | **Inclusive** — Appropriate and timely involvement of stakeholders. | **Significant AI expansion:** Organizations should seek dialog with diverse internal and external groups due to potentially far-reaching AI impacts. Stakeholder involvement is critical for: (1) identifying risks in data collection, processing, and use; (2) addressing transparency and explainability challenges across diverse AI technologies; (3) defining fairness criteria and identifying bias in automated decision-making. |
| **e** | **Dynamic** — Risks can emerge, change, or disappear as context changes. Risk management anticipates, detects, acknowledges, and responds. | **Critical for AI:** AI systems are inherently dynamic due to continuous learning, refining, evaluating, validating. Customer expectations change quickly. Legal/regulatory requirements are frequently updated. Organizations should integrate with quality, environmental, safety, healthcare, legal, and corporate responsibility management systems. |
| **f** | **Best Available Information** — Inputs based on historical/current information and future expectations. Takes into account limitations and uncertainties. | **AI expansion:** Historical information can be limited for emerging AI. Future expectations can change quickly. Organizations engaged in AI development should track information about further uses of their AI systems. Users should maintain records throughout the entire lifetime. Internal use of AI systems should be considered. Tracking customer use may be limited by IP, contractual, or market restrictions. |
| **g** | **Human & Cultural Factors** — Human behaviour and culture significantly influence all aspects of risk management. | **AI expansion:** Organizations should monitor how AI systems interact with pre-existing societal patterns that can lead to impacts on equitable outcomes, privacy, freedom of expression, fairness, safety, security, employment, the environment, and human rights broadly. |
| **h** | **Continual Improvement** — Risk management is continually improved through learning and experience. | **AI expansion:** Organizations should monitor the AI ecosystem for performance successes, shortcomings, and lessons learned. Maintain awareness of new AI research findings and techniques as opportunities for improvement. |

### Key Insight: The "Dynamic" Principle is Uniquely Important for AI

AI systems can **change themselves** (continuous learning, adaptive optimization). This means:
- Risk profiles are not static — they evolve with the system
- Verification at deployment is insufficient — continuous monitoring is required
- Regulatory change is accelerating in the AI space

---

## Part 2: Framework (Clause 5)

### 5.1 General
The framework assists organizations in integrating risk management into significant activities and functions. **ISO/IEC 38507** (AI governance) describes additional governance considerations and can be used in combination with this document.

### 5.2 Leadership and Commitment
- Top management should consider how **policies and statements related to AI risks** are communicated to stakeholders.
- Demonstrating leadership is critical for ensuring stakeholder confidence that AI is being developed and used responsibly.
- Organizations should consider **issuing statements related to their commitment to AI risk management**.
- Top management should be aware of **specialized resources** needed to manage AI risk.

### 5.3 Integration
- Guidance from ISO 31000:2018, 5.3 applies.
- Risk management should be embedded in organizational governance, not treated as a separate activity.

### 5.4 Design

#### 5.4.1 Understanding the Organization and Its Context

ISO 23894 provides an extended table (Table 2) mapping ISO 31000 external context factors to AI-specific considerations:

| ISO 31000 Generic Factor | AI-Specific Expansion |
|--------------------------|----------------------|
| Social, cultural, political, legal, regulatory, financial, technological, economic, environmental factors | **Relevant legal requirements specifically relating to AI.** Guidelines on ethical use and design of AI from government, regulators, standards bodies, civil society, academia, and industry. Domain-specific AI guidelines and frameworks. |
| Key drivers and trends | **Technology trends and advancements in various areas of AI.** Societal and political implications of AI deployment, including social science guidance. |
| External stakeholder relationships, perceptions, values, needs, expectations | Stakeholder perceptions affected by **lack of transparency (opaqueness) of AI systems or biased AI systems.** Expectations on availability of AI-based solutions and means by which AI models are made available. |
| Contractual relationships and commitments | How **continuous learning AI** affects ability to meet contractual obligations and guarantees. Ownership and usage rights of **test and training data** when provided by third parties. |
| Complexity of networks and dependencies | Use of AI can **increase the complexity** of networks and dependencies. |

#### 5.4.2–5.4.5
- Articulating risk management commitment
- Assigning organizational roles, authorities, responsibilities, and accountabilities
- Allocating resources
- Establishing communication and consultation

### 5.5 Implementation
Risk management framework implementation — guidance from ISO 31000:2018, 5.5 applies.

### 5.6 Evaluation
Framework effectiveness evaluation — guidance from ISO 31000:2018, 5.6 applies.

### 5.7 Improvement
- **Adapting** the framework as the organization and its AI context changes
- **Continually improving** suitability, adequacy, and effectiveness

---

## Part 3: Risk Management Process (Clause 6)

### 6.1 General
The process involves the systematic application of policies, procedures, and practices to:
- Communicating and consulting
- Establishing the context
- Assessing, treating, monitoring, reviewing, recording, and reporting risk

### 6.2 Communication and Consultation
- Organizations should communicate and consult with stakeholders throughout the risk management process.
- AI-specific consideration: diverse stakeholders may include those who do not directly use the AI system but are affected by it (see "Inclusive" principle).

### 6.3 Scope, Context, and Criteria

#### 6.3.1 General
Establishing the scope, context, and criteria for AI risk management.

#### 6.3.2 Defining the Scope
- Define what AI systems/activities are covered
- Consider the full AI system life cycle

#### 6.3.3 External and Internal Context
See framework Table 2 above for detailed AI-specific external context factors.

#### 6.3.4 Defining Risk Criteria
- Define the amount and type of risk the organization is willing to take (risk appetite)
- Criteria for evaluating risk significance

### 6.4 Risk Assessment

#### 6.4.1 General
Risk assessment is the overall process of risk identification, risk analysis, and risk evaluation.

#### 6.4.2 Risk Identification
- Identify risks that could affect AI-related objectives
- Consider risks arising from:
 - AI system design and development
 - Data quality and provenance
 - Model behavior and performance
 - Deployment context and use cases
 - Stakeholder impacts
 - Regulatory and legal environment

#### 6.4.3 Risk Analysis
- Analyze the nature and characteristics of identified risks
- Consider likelihood and consequences
- Account for AI-specific factors like model uncertainty, data drift, adversarial inputs

#### 6.4.4 Risk Evaluation
- Compare risk analysis results with established risk criteria
- Determine which risks need treatment and prioritization

### 6.5 Risk Treatment

#### 6.5.1 General
- Select and implement options to address risk

#### 6.5.2 Selection of Risk Treatment Options
Options may include:
- Avoiding the risk
- Taking/increasing risk to pursue an opportunity
- Removing the risk source
- Changing the likelihood
- Changing the consequences
- Sharing the risk
- Retaining the risk by informed decision

#### 6.5.3 Preparing and Implementing Risk Treatment Plans
- Document treatment plans
- Implement plan elements
- Monitor effectiveness

### 6.6 Monitoring and Review
- Ongoing monitoring of risk and effectiveness of treatments
- Periodic review to ensure continued appropriateness

### 6.7 Recording and Reporting
- Document risk management activities and results
- Report to appropriate stakeholders
- Provide information for decision-making and continual improvement

---

## How ISO 23894 Differs from NIST AI RMF

| Dimension | ISO 23894 | NIST AI RMF |
|-----------|-----------|-------------|
| **Parent Framework** | ISO 31000:2018 (generic risk management) | Standalone AI-specific framework |
| **Structure** | Mirrors ISO 31000 clause structure (Principles → Framework → Process) | Four functions: Govern → Map → Measure → Manage |
| **Normative Status** | International standard for certification/auditing | Voluntary framework (U.S. federal guidance) |
| **Risk Definition** | Deviation from objectives (positive or negative) | Primarily negative outcomes (harms) |
| **Integration Focus** | Designed to integrate with ISO management systems (ISO 42001, ISO 27001, ISO 9001) | Designed to integrate with organizational risk management generally |
| **Geographic Focus** | Global (ISO/IEC) | United States (NIST), though internationally influential |
| **Auditability** | Designed for third-party certification under ISO 42001 | Self-assessment and external evaluation (no formal certification) |
| **Life Cycle Coverage** | Maps to ISO 22989 AI life cycle (Annex C) | Maps to AI lifecycle stages (Map function) |

---

## Integration with ISO 42001 (AI Management System)

ISO 23894 is designed to complement ISO 42001:

1. **ISO 42001 Clause 6.1** (Actions to address risks and opportunities) directly references risk management processes — ISO 23894 provides the "how."
2. **ISO 42001 Clause 8** (Operation) requires risk assessment for AI systems — ISO 23894 provides the methodology.
3. **ISO 42001 Annex A** controls can be informed by risk assessment outputs from ISO 23894.
4. Both standards share the **ISO 22989 terminology** foundation.
5. Both follow the **ISO management system harmonized structure (HS)** — Plan-Do-Check-Act cycle.

### Integration Model

```
ISO 31000:2018 (Risk Management — Principles and Guidelines)
 ↓ extends with AI-specific guidance
ISO/IEC 23894:2023 (AI Risk Management)
 ↓ informs risk processes within
ISO/IEC 42001:2023 (AI Management System — Requirements)
 ↓ uses terminology from
ISO/IEC 22989:2022 (AI Concepts and Terminology)
```

---

## Key Governance Takeaways

1. **ISO 23894 does not stand alone** — it is an AI-specific extension of ISO 31000 and must be read in conjunction with it.
2. **The "Dynamic" principle is the most AI-distinctive** — AI systems learn and change in production, making static risk assessments insufficient.
3. **Stakeholder inclusiveness is broadened** — organizations must consider those indirectly affected by AI, not just direct users.
4. **Continuous learning AI** creates unique contractual and verification challenges.
5. **ISO 23894 is designed for integration** with ISO 42001 AIMS — risk management is not a separate activity but embedded in AI governance.
6. **Unlike NIST AI RMF**, ISO 23894 considers risk as both opportunity and threat (aligned with ISO 31000's broader definition).
7. **The sample document is limited** — the full standard includes Annex A (AI-related objectives), Annex B (risk sources, e.g., data quality, model behavior, deployment context), and Annex C (life cycle mapping table).
