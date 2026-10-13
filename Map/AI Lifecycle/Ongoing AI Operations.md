---
tags:
 - aigp/domain-IV
 - aigp/area
 - aigp/lifecycle
 - aigp/operations
created: 2026-07-11
domain: "IV: Understanding How to Govern AI Deployment and Use"
subdomain: "IV.C: Govern the Deployment and Use of the AI Model"
related:
 - "[[AI Lifecycle Index]]"
 - "[[AI Risk Management and Assurance]]"
---

# Ongoing AI Operations

> **Domain IV, Subdomain IV.C** — Govern the Deployment and Use of the AI Model

## Performance Indicators

- **Document incidents, issues, risks and post-market monitoring plans.**
- **Establish external communication plans.**
- **Create and implement a policy and controls to deactivate or localize an AI system as necessary** (e.g., due to regulatory requirements or performance issues).

---

## 1. Managing Business Records

Business records tell the story of an organization's operations and are essential for AI governance — ensuring accountability, regulatory compliance, and continuous improvement. This section covers the systematic documentation of incidents, issues, risks, decisions, and post-market monitoring activities.

### 1.1 Incident Documentation and Tracking

Incident records document events that deviate from intended system behavior. **Incident management** is covered fully in [[AI Risk Management and Assurance]].

**Types of incidents to record in detail:**

| Type | Description |
|------|-------------|
| **Model performance failures** | Degradation in accuracy or reliability |
| **Ethical/regulatory violations** | Biased outputs, unfair decisions, harmful recommendations |
| **Security breaches** | Adversarial inputs, model extraction, model poisoning, prompt injection attacks |
| **System downtime** | AI system service disruptions, particularly from AI components |
| **Unexpected use cases** | Users applying the AI system in unintended ways |

> **Context matters:** A poorly ranked search result may be a mere annoyance, but a misclassification in a healthcare diagnostic tool could be life-threatening. Classifying an event as an "incident" depends on both severity and context.

**Example:** An AI-powered applicant tracking system systematically ranks older applicants lower, jeopardizing compliance with NYC Local Law 144 (requiring annual bias audits). The incident record includes logs from affected queries, training data distribution analysis, internal review findings, and retraining notes.

### 1.2 Issue Reporting and Lifecycle Management

**Issues** reflect undesirable system behavior, user complaints, or technical shortcomings that do not rise to the level of an incident — but still require formal attention and decisions.

**Examples of issues:**
- Minor UI/UX inconsistencies
- Sporadic misclassifications
- Feedback from internal QA testers
- Suggestions and complaints from user community forums

**Issue lifecycle:**

| Stage | Description |
|-------|-------------|
| **Intake** | Submission through designated channels |
| **Categorization** | Tagging by severity, area, and AI component |
| **Assignment** | Routing to responsible teams |
| **Escalation** | Routing to others when SLAs are violated |
| **Resolution** | Implementation of fixes or improvements |
| **Closure** | Documenting resolution and notifying stakeholders |

> Mature organizations track issues within CI/CD pipelines and retraining workflows, enabling automated alerts when repeated issues signal model degradation.

### 1.3 Risk Documentation and Mitigation Tracking

AI-related risks must be documented in a **risk register**, ideally within an AI governance platform or GRC tool.

**AI-related risks include:**
- Model drift
- Data drift
- Bias and fairness risks
- Security vulnerabilities
- Legal and compliance risks
- Misuse or dual-use concerns

**Typical risk register record includes:**

| Field | Description |
|-------|-------------|
| System/application name | Which AI system the risk applies to |
| Risk description | Nature of the risk |
| Associated use cases | Where the risk could manifest |
| Likelihood and impact scores | Quantitative assessment |
| Risk treatment decision | Including decision-maker |
| Mitigation strategy | When applicable |
| Residual risk post-mitigation | Remaining risk after controls |
| Risk owner and review schedule | Accountability and cadence |

**Example:** A bank's AI loan application system includes a risk entry for racial bias due to proxy variables in historical data. The record includes fairness audits, post-processing techniques, and periodic review dates.

### 1.4 Post-market Monitoring Plans

**Post-market monitoring** identifies real-world issues that pre-deployment testing may have overlooked.

**Goals:**
- Validate continued model accuracy, robustness, and fairness
- Detect performance degradation from data and environmental changes
- Capture user feedback and behavioral adaptations
- Support iterative retraining, risk assessments, and governance updates

**Components of a post-market monitoring plan:**

| Component | Description |
|-----------|-------------|
| **Performance metrics monitoring** | Continuous observation of KPIs (accuracy, F1 score, latency) across user segments |
| **Bias and fairness audits** | Scheduled reviews using demographic parity, equal opportunity, or counterfactual fairness tests |
| **Drift detection** | Monitoring input/output distributions using PSI or Kolmogorov–Smirnov tests |
| **Data flow and transfer reviews** | Periodic reviews of data transfers into/out of the model; **DLP tooling** and **cross-border data transfer** monitoring |
| **User feedback channels** | Mechanisms integrated into the UI for real-time complaints or suggestions |
| **Incident and issue integration** | Feeding detected anomalies into incident/issue tracking for resolution |

**Regulatory examples:**
- **EU AI Act:** Requires high-risk AI systems to implement post-market monitoring with logging, reporting, and human oversight
- **U.S. Algorithmic Accountability Act** *(proposed):* Calls for impact assessments and continuous evaluation of deployed systems

### 1.5 Governance and Accountability Structures

Accountability for record keeping should be formally documented across all roles.

**Typical roles and responsibilities:**

| Role | Responsibility |
|------|----------------|
| **System developers** | Maintain records of system design, training data provenance, data lineage, test plans, results, model versioning |
| **Product managers** | Ensure user-facing documentation is accurate and up to date |
| **Compliance officers** | Verify record keeping aligns with legal and regulatory mandates |
| **Risk owners** | Monitor open risks, treatment decisions, and oversee mitigation plans |
| **Workflow/process owners** | Maintain records of AI system development reviews and approvals |

#### Retention and Disposal Policies

Records should be included in the organization's **records retention schedule** (typically 3–7 years, depending on jurisdiction).

**Key policies to define:**
- **Retention periods:** Based on system type and risk level
- **Access controls:** Only authorized personnel; most records should be **immutable** to prevent tampering
- **Archival procedures:** Secure, tamper-evident formats for long-term preservation
- **Deletion protocols:** Wiping records at end-of-life, commensurate with risk and data sensitivity

### 1.6 Tools and Technologies for Record Management

**Key operational logs:**

| Log Type | Content |
|----------|---------|
| **Prediction logs** | Model inputs and outputs for each query |
| **Error logs** | Failures or exceptions during inference or data processing |
| **Usage logs** | Frequency and context of system access |

**Emerging AI governance platforms** offering record keeping and compliance features:
- Model version control and lineage
- Data provenance and lineage
- Risk register and compliance integration
- Post-deployment monitoring dashboards
- Incident response workflows

> **Example platforms:** Fiddler AI, Arthur.ai, Credo AI, Microsoft Responsible AI Dashboard.

**Blockchain-inspired solutions** (append-only logs, cryptographic hashing) are gaining attention for ensuring immutability, traceability, and **nonrepudiation** in AI audit trails.

### 1.7 Legal and Regulatory Considerations

**Key frameworks driving recordkeeping:**

| Framework | Requirement |
|-----------|-------------|
| **EU AI Act** | High-risk systems: detailed technical documentation, logs, monitoring records |
| **Brazil AI Act** *(proposed)* | Document risk classification, impact assessments, operational logs, governance proceedings, incidents, testing, human interventions |
| **GDPR** | Provide meaningful information about automated decisions; necessitates logging for accountability |
| **NIST AI RMF** | Documentation at all stages for trustworthiness and auditability |
| **ISO/IEC 42001** | Logging, incident reporting, risk documentation for AI management systems |

**Jurisdictional variations:**
- **Canada (PIPEDA):** Accountability for automated decision-making outcomes
- **Brazil (LGPD):** Intersects with AI auditability in data processing
- **China:** Algorithmic transparency and regular audits of system behavior

> Organizations should maintain a **regulatory map** cross-referencing system types, jurisdictions, and applicable laws — often via subscription services.

### 1.8 Integration with Broader Organizational Practices

AI records should be embedded into the organization's operational, compliance, and risk management workflows — not isolated.

- Align with enterprise information governance policies, ECM systems, and audit trails
- **Internal and external audits** should verify completeness, accuracy, access controls, and timely incident response
- Record keeping supports: **incident after-action reviews**, **RCA reports**, **risk trend analyses**, and **issue recurrence tracking**

---

## 2. External Communications

External communication is a crucial aspect of AI governance. Organizations must communicate with regulators, customers, and stakeholders to maintain trust, comply with regulations, and inform about AI system operations.

### 2.1 Establishing a Communication Governance Structure

Communications require planning, discipline, and maturity — not ad hoc press releases. A governance structure ensures messages are consistent, authorized, and aligned with compliance and risk policies.

**Key personnel for AI-related external communications:**

| Role | Responsibility |
|------|----------------|
| **Public Information Officer (PIO)** | Official representative in public forums |
| **Social media lead** | Manages social media presence |
| **AI communications lead** | Owns the AI-specific messaging strategy |
| **Legal counsel** | Reviews for compliance, IP, liability risk |
| **Product manager / engineer** | Provides technical explanations |

> Communications to any external party should be **formally approved by a designated leader**. Policies should integrate with enterprise risk management, data governance, privacy, incident response, and regulatory reporting.

### 2.2 Communicating AI System Capabilities and Limitations

Stakeholders deserve clear, concise, accessible information about AI systems.

**Disclosures should cover:**

| Topic | Description |
|-------|-------------|
| **Purpose and use cases** | What the system is designed to do |
| **Limitations and known risks** | Accuracy boundaries, potential biases, data dependencies, reliability caveats |
| **Human involvement** | How and when human oversight is used |
| **Data sources and model behavior** | General descriptions of training data and decision-making |
| **Inquiries and data subject requests** | How to get assistance, appeal decisions, correct errors |

**Forms of disclosure:**
- Product documentation and user manuals
- Legal agreements and terms of use
- Privacy notices
- Web portals or **model cards** summarizing technical characteristics
- Public FAQs or explainers in plain language

> ⚠️ **Danger of overclaiming:** Overstating capabilities can lead to regulatory scrutiny, loss of consumer trust, or lawsuits. Balance enthusiasm with technical and legal accuracy.

### 2.3 Regulatory and Legal Communication Obligations

Some jurisdictions require proactive or reactive disclosure about AI systems.

| Obligation | Framework |
|------------|-----------|
| **Public registration of high-risk systems** | EU AI Act (Art. 49, Annex VIII Section A): provider and contact details, trade name, intended purpose, a basic description of the data and operating logic, market status, notified-body certificate details where applicable, Member States, the EU declaration of conformity and electronic instructions for use |
| **Breach notification to data subjects** | GDPR (Article 34) — high-risk breaches |
| **Serious incident reporting** | EU AI Act — informing regulators of serious incidents and corrective actions |
| **Consumer alerts** | Consumer protection laws — breaches, unauthorized disclosures, product defects, misleading results |

> Mature organizations develop **preapproved communication templates** to streamline time-sensitive disclosures.

### 2.4 Managing Public and Media Relations

Public perception shapes reputation. Even technically sound systems can lose trust if communications are mishandled.

**Proactive communication strategies:**
- Press releases announcing new AI deployments
- Public blog posts explaining design choices
- Conference presentations or white papers
- Engaging external advisory panels or ethics boards
- Webinars and seminars

**Crisis communication plan components:**

| Component | Description |
|-----------|-------------|
| **Crisis response team** | Usually led by the PIO; designated group authorized to speak |
| **Message framing** | Centers transparency, responsibility, and action |
| **Media readiness** | Prewritten press releases and answers to anticipated questions |

### 2.5 User-facing Communications and Transparency

The most impactful external audiences are customers and end users.

**Required labeling should indicate:**
- That a system is AI-driven (e.g., "AI-generated")
- The identity of the deployer
- Nature of outputs (suggestions vs. decisions)
- Opt-out or appeal mechanisms

**Regulatory examples:**
- **EU AI Act:** Mandated labeling of deepfakes and synthetic content
- **California BOT Act:** Requires bots to self-identify during online interactions for commercial purposes

> Users should have accessible help centers, escalation contacts, and receive timely responses. Record and analyze feedback as part of post-market monitoring.

### 2.6 Partner and Vendor Communications

AI governance extends beyond organizational boundaries to vendors, developers, and third-party integrators.

**Embed communication plans into:**

| Vehicle | Content |
|---------|---------|
| **Vendor agreements** | Requirements to report outages, incidents, and performance changes |
| **Service Level Agreements (SLAs)** | Timelines and scope for updates, disclosures, issue resolution |
| **Joint communication protocols** | Clarify who speaks on behalf of shared-ownership systems |

**Open-source and collaborative contexts:** Transparent publication of vulnerabilities, roadmaps, and feedback channels.

### 2.7 Communication Planning Across the AI Lifecycle

External communications should be mapped across all lifecycle stages:

| Stage | Communication Focus |
|-------|---------------------|
| **Design and development** | Research publications, data use notices |
| **Validation and testing** | Accuracy disclosures, bias audit results |
| **Deployment** | Purpose statement, user guidance, stakeholder briefings |
| **Operation** | Post-market updates, incident alerts, FAQs |
| **Retirement** | Sunset notices, archival disclosures, user offboarding info |

> Communication is the connective tissue between internal governance and public/regulator accountability.

### 2.8 Measuring Communication Effectiveness

**Evaluation criteria:**

| Metric | Description |
|--------|-------------|
| **Clarity** | Whether users and stakeholders understand intended messages |
| **Reach** | Whether the right audiences are informed |
| **Responsiveness** | Whether inquiries are handled in a timely manner |
| **Trust indicators** | Whether public trust improves or erodes over time |

**Measurement methods:** User satisfaction surveys, media sentiment analysis, inquiry volume/resolution time, stakeholder feedback, social media engagement, traffic metrics to AI-specific web pages.

> Conduct **periodic communication audits** to review clarity, consistency, and legal adequacy. Update FAQs, disclosures, and public statements as systems evolve.

---

## 3. AI System Retirement

AI systems must eventually be upgraded, replaced, decommissioned, or withdrawn. A well-governed AI lifecycle must include a clear policy and repeatable process for retirement. **Retirement should be a standard part of the SDLC**, not an afterthought.

### 3.1 Understanding the Need for AI System Retirement

Retirement is a critical governance function ensuring AI components do not outlive their usefulness or pose ongoing risk.

**Common triggers for deactivation:**

| Trigger | Description |
|---------|-------------|
| **Regulatory changes** | New legal requirements render continued use noncompliant or cost-prohibitive |
| **Performance degradation** | Model drift, obsolete data, declining accuracy vs. newer systems |
| **Business reprioritization** | Strategic shifts rendering the system unneeded |
| **Security or ethical concerns** | Emergence of known vulnerabilities or harmful impacts |
| **Third-party model withdrawal** | External AI vendor deprecates model or API |
| **Localization requirements** | Inability to comply with regional obligations (e.g., data sovereignty) |

### 3.2 Building an AI System Retirement Policy

A retirement policy provides formal structure for when and how AI systems are sunset.

**Core elements:**

| Element | Description |
|---------|-------------|
| **Criteria for retirement** | Operational, financial, strategic, ethical, and legal thresholds (KPI failure, excessive costs, strategy change, regulatory conflicts, stakeholder demands) |
| **Approval and escalation process** | Who initiates/approves; escalation when ethical risks or customer harm identified |
| **Retirement planning requirements** | Stakeholder notification, system backup, data archiving, user transition support |
| **Documentation and audit trail** | Rationale, timing, methods, stakeholders, proceedings |
| **After-action review (AAR)** | Lessons-learned analysis to inform future practices |

> **AI Retirement vs. IT Decommissioning:** AI retirement involves more than turning off a system — it may require untraining, ethical review, removal of derivative models, and public communication, especially for high-impact automated decisions.

### 3.3 Planning for Controlled Deactivation

A repeatable, written process to reduce disruption and preserve vital records.

**Steps for controlled deactivation:**

| Step | Description |
|------|-------------|
| **1. Stakeholder mapping** | Identify all affected parties and their transition needs |
| **2. Usage analysis** | Map dependencies — where the system is embedded and which downstream tools rely on it |
| **3. Fallback/transition planning** | Determine replacement model, manual process, or third-party tool |
| **4. User notification and education** | Clear communication on changes, reasons, and how to ask questions |
| **5. Final audit snapshot** | Capture final state: inputs, weights, performance metrics, decision logs |
| **6. Execution of shutdown** | Disable APIs, terminate model endpoints, remove integration points, update security controls |
| **7. Post-deactivation monitoring** | Monitor system health and user behavior to ensure successful transition |

> **Migration:** When a replacement system takes over, data migration and extensive testing are required. The retired system may enter "read-only" or "reporting" mode for historical purposes.

**Operational and governance challenges:**
- **Business continuity:** Ensure critical processes remain operational
- **Data integrity:** Prevent loss of audit trails or traceability
- **Access revocation:** Deprovision API keys, credentials, and service accounts
- **Residual risk management:** Monitor for unintended consequences of shutdown

### 3.4 Localization and Regional Retirement Strategies

Models may be deactivated or **localized** for specific regions due to differing compliance or cultural contexts.

**Localization drivers:**

| Driver | Description |
|--------|-------------|
| **Data sovereignty laws** | Mandates requiring training or inference within national borders (e.g., China, Russia) |
| **Ethical and societal norms** | Regional sensitivities affecting content filtering or recommendations |
| **Regulatory constraints** | EU AI Act may restrict/ban specific use cases deemed unacceptable or high-risk |

**Approaches:**

| Approach | Description |
|----------|-------------|
| **Separate model instances** | Deploy country-specific models trained on localized data |
| **Federated learning** | Decentralized training to maintain local data residency |
| **Modular architecture** | Selective enablement of regional features or content |

### 3.5 Data and Model Artifacts: Archiving and Disposal

When retiring a system, determine what to retain, archive, or delete based on regulations, legal agreements, and internal policies.

**Information to consider archiving:**
- Final model versions and training data lineage
- Performance logs and error reports
- Incident reports and mitigation records
- Decision outputs (especially high-impact: healthcare, finance)
- User and stakeholder communication records
- Design documents and system artifacts
- Any information required by regulations

**Information to consider disposing:**
- Redundant or obsolete training data
- Temporary model artifacts (checkpoint files)
- PII not required for compliance

> Use **military-grade data erasure tools** for sensitive data. For cloud-hosted AI, request destruction from the provider, possibly including a **certificate of destruction**. Before deleting, check **retention obligations** (records schedules, sector rules, litigation holds) against the storage limits of GDPR, CPRA and similar laws, so nothing is destroyed too early or kept too long.

### 3.6 Communication and Transparency in AI Retirement

Organizations must inform external parties of retirement decisions.

**Communication channels:**

| Channel | Audience |
|---------|----------|
| **User notification** | In-product alerts, email campaigns, support updates |
| **Organization notification** | Official communications to business customers and partners (per legal agreements) |
| **Public disclosures** | Press releases, social media, website/transparency portal |
| **Regulatory reporting** | Notification to authorities when required by law |
| **Internal briefings** | Legal, compliance, support, and sales teams |

**Be prepared for:** User pushback, misunderstanding of reasons, migration questions, regulatory scrutiny. Early involvement of the crisis communications team and PIO mitigates reputational risk.

> ⚠️ **Litigation risk:** Improper or abrupt retirement may expose organizations to legal claims, especially if customers relied on system outputs or discriminatory impacts are discovered after shutdown (another reason for archiving).

**Applicable legal obligations:**
- **EU AI Act:** Ongoing monitoring and withdrawal of noncompliant high-risk systems
- **GDPR:** Data minimization; may necessitate erasure of personal data
- **Consumer protection laws:** May trigger refund/compensation obligations
- **Contractual terms:** May require notice periods or availability guarantees

### 3.7 Lessons Learned and Organizational Feedback Loops

Retirement should serve as a source of learning and improvement.

**Post-retirement review practices:**

| Practice | Description |
|----------|-------------|
| **Root cause analysis** | Why the system needed to be retired |
| **Impact assessment** | Effect on users, operations, and business reputation |
| **Post-retirement ethical review** | Ensure retired model is not repurposed in harmful ways |
| **Policy evaluation** | Whether the retirement process aligned with formal policy |
| **Knowledge capture** | What to document for future teams |

> Incorporate lessons into training programs for data scientists, engineers, product managers, and governance professionals. This improves institutional maturity and avoids repeat mistakes.

---

## Summary

Ongoing AI operations require discipline and a structured approach to managing records, communicating with stakeholders, and responsibly decommissioning systems. Governance extends throughout the system's operational life and beyond.

- **Record keeping** creates an audit trail supporting accountability, learning, and regulatory compliance — encompassing incident documentation, issue tracking, risk registers, and post-market monitoring to detect model drift and unintended harms.
- **External communication** maintains transparency with users, regulators, partners, and the public through clear disclosures, model cards, incident notifications, proactive media strategy, defined roles, and crisis communication plans.
- **Retirement planning** — by design — enables responsible deactivation or localization in response to regulatory shifts, performance degradation, and ethical concerns, with structured policies, controlled deactivation, fallback strategies, and lessons-learned reviews.

---

## Key Takeaways

1. **AI incidents, issues, and risks must be documented systematically** to support governance, accountability, and regulatory compliance. Records inform audits, identify patterns, and demonstrate due diligence.

2. **External communication plans must provide accurate, accessible, and timely information** about AI system capabilities, limitations, and incidents. Clear policies, templates, designated spokespeople, and approved channels are essential.

3. **AI systems should be retired through a structured, policy-driven process** that minimizes disruption and preserves essential records. Decommissioning involves more than turning off the model — it includes planning, notification, archiving, and risk mitigation.

4. **Localization may be necessary** to comply with regional regulations, cultural norms, or data residency requirements. AI systems deployed globally may need deactivation, modification, or retraining for specific jurisdictions.

5. **Retirement planning should be integrated into the AI lifecycle from the start.** Designing systems with the end in mind enables smoother transitions and aligns with responsible AI principles.

---

## Key Terms

- **[[Post-market Monitoring]]** — Continuous evaluation of deployed AI systems for performance, bias, drift, and real-world issues
- **[[Risk Register]]** — Structured documentation of AI risks, treatment decisions, mitigation strategies, and ownership
- **[[Incident]]** — An event deviating from intended AI system behavior, requiring documentation and response
- **[[Issue]]** — Undesirable system behavior or complaint that does not rise to incident severity but requires formal attention
- **[[Model Drift]]** — Degradation of model accuracy over time due to changes in data distributions or environment
- **[[Data Loss Prevention (DLP)]]** — Tooling to automate monitoring of data transfers into and out of AI systems
- **[[Cross-border Data Transfer]]** — Movement of data across national borders, requiring regulatory compliance monitoring
- **[[Model Card]]** — A structured summary of an AI model's technical characteristics, limitations, and performance
- **[[Public Information Officer (PIO)]]** — Designated official representative for organizational communications in public forums
- **[[Crisis Communication Plan]]** — Predefined strategy for messaging during AI system failures or public controversies
- **[[Localization]]** — Regional deactivation or adaptation of AI models to comply with local laws, norms, or data residency requirements
- **[[Federated Learning]]** — Decentralized training approach that maintains local data residency
- **[[Data Sovereignty]]** — Principle that data is subject to the laws of the country where it is collected or stored
- **[[Nonrepudiation]]** — Assurance that records cannot be denied or tampered with, supported by append-only logs and cryptographic hashing
- **[[After-Action Review (AAR)]]** — Post-retirement analysis capturing lessons learned for future AI governance improvements
- **[[Certificate of Destruction]]** — Documentation from a cloud provider confirming destruction of data/model artifacts, used for audits
- **[[Immutable Records]]** — Records that cannot be altered or deleted, ensuring integrity for compliance and audit purposes
