---
tags:
 - aigp/domain-II
 - aigp/area
 - aigp/legal
 - aigp/eu-ai-act
created: 2026-07-11
domain: "II: Understanding How Laws, Standards and Frameworks Apply to AI"
subdomain: "II.C: Understand the Main Elements of the EU AI Act"
related:
 - "[[Legal and Regulatory Index]]"
 - "[[Sectoral and Civil Laws]]"
 - "[[AI Standards and Frameworks]]"
 - "[[AIGP Exam Questions]]"
---

# The EU AI Act

> **Domain II, Subdomain II.C** — Understanding the Main Elements of the EU AI Act

## Performance Indicators

- Understand the **risk classification framework** for AI (prohibited AI, high-risk, limited-risk, and minimal-risk) and what systems fall into each category
- Understand the **key requirements for high-risk, limited-risk, and minimal-risk AI** including risk management, data governance, technical documentation, conformity assessment, record keeping, human oversight, transparency and notification, quality management
- Understand the **distinct requirements for general-purpose AI models**
- Understand the **enforcement framework and penalties** for non-compliance
- Understand the **differences in requirements based on organizational context** (providers, deployers, importers, and distributors)

---

## 1. Risk Classification

The EU AI Act introduces a four-tier, risk-based classification framework. Each tier dictates the obligations developers, providers, and deployers must follow. Organizations outside the EU are adopting this scheme as a baseline.

### Risk Classification Overview

| Risk Category | Definition | Examples | Regulatory Requirements |
|---------------|------------|----------|------------------------|
| **Prohibited AI** | Poses unacceptable risk to rights/safety | Social scoring, subliminal manipulation | **Completely banned** |
| **High-risk AI** | Impacts fundamental rights or safety | Credit scoring, AI hiring tools | Conformity assessments, logging, oversight, CE marking |
| **Limited-risk AI** | Requires transparency but limited impact | Chatbots, synthetic media (deepfakes) | Disclosure, opt-out mechanisms |
| **Minimal-risk AI** | Poses negligible risk | Spam filters, streaming recommendations, grammar checkers | No requirements (voluntary best practices) |

---

### 1.1 Prohibited AI Systems

**Prohibited AI** refers to use cases that pose an unacceptable risk to safety, human dignity, or fundamental rights and are **banned outright**. These systems are not allowed to be placed on the market, put into service, or used anywhere in the EU.

**Examples of prohibited AI:**

| Prohibited Practice | Description |
|---------------------|-------------|
| **Subliminal manipulation** | AI that manipulates behavior by bypassing consciousness (e.g., neuro-influencing technologies) |
| **Social scoring by governments** | Ranking individuals based on behavior or personality traits leading to discriminatory outcomes |
| **Exploiting vulnerable groups** | Targeting children, elderly, or disabled individuals to distort behavior |
| **Real-time remote biometric identification in public spaces** | Banned with limited exceptions for serious crimes under judicial oversight |
| **Individual criminal offense risk assessment or prediction** | Predictive policing based solely on profiling |
| **Emotional recognition in workplaces and educational institutions** | Banned due to manipulation, discrimination, and pseudoscience risks |

> **Exception:** Real-time biometric identification may be permitted under strict conditions (national security threats, ongoing criminal investigations) but must be individually authorized by a legal authority.

> **Exam note:** Developers (vendor organizations) must ensure their system design, training data, and use cases do not cross into prohibited territory.

---

### 1.2 High-Risk AI Systems

**High-risk AI** systems have the potential to significantly affect people's rights, lives, or safety and are subject to the most stringent regulatory controls.

**Categories of High-risk AI (Annex III):**

- Biometric identification and categorization
- Critical infrastructure management (energy grids, wastewater, traffic control)
- Education and vocational training (AI grading tools, lesson planning)
- Employment, worker management, and access to self-employment (AI interviews, performance evaluations)
- Access to and enjoyment of essential private and public services (credit scoring, welfare benefits)
- Law enforcement (crime prediction tools)
- Migration, asylum, and border control
- Administration of justice and democratic processes

**Core Compliance Requirements:**

- **Conformity assessments** — demonstrated before market placement
- **Risk management and data governance** — data quality, bias minimization, operational risk management
- **Human oversight** — meaningful human intervention and escalation capability
- **Technical documentation and logging** — lifecycle documentation and automatic logging

> **CE Marking:** High-risk AI systems must bear the CE mark to indicate conformity with EU standards — similar to other product safety marks.

---

### 1.3 Limited-Risk AI Systems

**Limited-risk AI** refers to AI systems that interact with users but do not significantly impact safety or rights.

| Examples | Transparency Obligations |
|----------|-------------------------|
| Chatbots and virtual assistants | **Disclosure of AI use** — users must be informed they are interacting with AI |
| AI-generated media (deepfakes, synthetic voices) | **Synthetic media disclosure** — generated content must be labeled as such |
| Educational tools (AI learning assistants) | **User autonomy** — opportunity to opt out or refuse AI interactions |
| Social media filters/avatars | |

> **Dark patterns note:** Even limited-risk systems using dark patterns or manipulative UI may trigger scrutiny under consumer protection laws (separate from the EU AI Act and GDPR). See [[Consumer Protection and AI|Privacy and Data Protection Law]].

---

### 1.4 Minimal-Risk AI Systems

**Minimal-risk AI** systems pose negligible or no risk to users or society. They represent the majority of AI systems and are largely unregulated.

**Examples:** Spam filters, recommendation engines (Netflix, YouTube, Amazon Prime), AI-enabled grammar checkers.

**Encouraged practices:** Voluntary codes of conduct, ethical guidelines, transparency practices. Documenting design and training now may reduce compliance costs later if reclassification occurs.

---

### 1.5 Risk Reclassification and Monitoring

Systems initially categorized as minimal- or limited-risk may become high-risk depending on their use context. **Continuous monitoring and reassessment** are advised.

---

## 2. Classification Requirements

> **Note:** There are no requirements for *prohibited AI* — these systems are not allowed at all. Requirements apply to the three permitted tiers.

### 2.1 High-Risk AI: Full Compliance Framework

High-risk AI carries the most stringent requirements. These mirror requirements found in mature systems development lifecycle frameworks.

#### Risk Management System

Must be documented and ongoing:

- Proactively identify known and foreseeable risks (intended use + reasonably foreseeable misuse)
- Evaluate and monitor risks throughout the system lifecycle
- Implement risk control measures to eliminate or reduce identified risks

**Reference frameworks:** NIST SP 800-37, ISO/IEC 27001, ISO/IEC 31000, ISO/IEC 23894:2023

> **Exam note:** These frameworks are helpful guidance but not a substitute for the EU AI Act's explicit requirements.

#### Data and Data Governance

Training, validation, and testing datasets must be **high-quality, relevant, representative, and as free from errors and bias as possible**.

- Bias mitigation strategies
- Data relevance to intended purpose
- Data lineage documentation and version control
- Compliance with all applicable privacy laws (including GDPR)

**Data governance frameworks:** DMBOK, COBIT, DGI Framework. See also [[Data Governance and Management|Data Governance and Model Training]].

#### Technical Documentation

Provider must maintain detailed, formally managed documentation:

- System architecture and specifications
- Algorithms and training methodologies
- Risk management and human oversight protocols

#### Record Keeping and Logging

Logs must be maintained throughout the AI system lifecycle to support:

- Post-market monitoring
- Event and incident investigation
- Audit readiness and accountability
- Change management at business and system levels

#### Conformity Assessment

Before market placement:

- Internal control (self-assessment) in some cases
- Third-party assessment by a **Notified Body** in other cases
- **CE marking** once conformity is confirmed

#### Human Oversight

AI systems must be designed for:

- **Detection** of anomalies or signs of malfunction (disaster recovery: take offline and fix)
- **Effective override or shut-off mechanisms** — pause AI use without disrupting critical business processes
- **Human-in-the-loop decision review** — for loan approvals, employment screening, medical diagnosis, etc.

#### Transparency and User Instructions

Users must receive clear instructions including:

- Intended purpose and limitations
- Human oversight responsibilities
- Performance metrics and conditions of use (accuracy levels, expected error rates, environmental/data quality requirements)
- Contact points for reporting incidents or questions

#### Quality Management System (QMS)

Must include:

- Policies and procedures for design, development, testing, and control
- Corrective and preventive action procedures
- Documentation control
- Processes for monitoring, reporting, and logging (including post-market surveillance)
- Resource and training management

**Reference standard:** ISO 9000.

> **Lifecycle documentation:** Required not only pre-market but throughout the system's use — including updates, retraining events, and downstream adaptations by deployers.

---

### 2.2 Limited-Risk AI: Targeted Transparency Obligations

#### Disclosure Requirements

- Inform users when interacting with AI systems (chatbots, virtual assistants)
- Inform users when viewing synthetic or manipulated content (deepfakes, images, text)

#### Notification and User Autonomy

- Conspicuous notifications that a system is AI-driven
- Easily found opt-out mechanisms or human interaction alternatives
- Transparent instructions on system use and limitations

#### Documentation and Accountability

- Maintain records of how transparency mechanisms are implemented
- Monitor for misleading outputs that could impair user autonomy

> **Regulatory intersection:** Limited-risk systems may still fall under broader EU privacy and/or consumer protection laws.

---

### 2.3 Minimal-Risk AI: Voluntary Best Practices

No mandatory requirements. Encouraged:

- Simple notices where AI functionality may affect user decisions
- Avoid misleading or manipulative design patterns
- Maintain internal logs and quality checks
- Consider accessibility accommodations and avoid reinforcing harmful stereotypes

> **Forward-looking:** Minimal-risk systems deployed at scale or adapted to new contexts (education, public policy) could face reclassification. Voluntary documentation now reduces compliance costs later.

---

### 2.4 Avoid Checkbox Compliance

Organizations should pursue the **spirit and intention** of requirements, not just minimum "checkbox compliance." Align compliance measures with mission, objectives, and culture.

---

## 3. Requirements for General-Purpose AI (GPAI)

### 3.1 Defining GPAI

**General-purpose AI (GPAI)** systems are models that can serve multiple intended purposes and be integrated into a variety of downstream systems or applications.

| Concept | Definition |
|---------|------------|
| **Foundation model** | The base technical artifact |
| **General-purpose AI** | Usage and availability across diverse applications |

**Examples:** LLMs (GPT-family, Llama, Claude), foundation models for vision (CLIP, SAM), multimodal models (text, images, video, audio).

---

### 3.2 General Obligations for GPAI Providers

#### Technical Documentation and Transparency

- Model architecture, training data sources, and capabilities
- Intended and foreseeable uses
- Known limitations, biases, and failure modes
- Disclosure of fine-tuning on sensitive data
- Risk identification and mitigation mechanisms

#### Model Evaluation and Testing

Risk assessments must evaluate:

- Accuracy and robustness across various tasks
- Bias and fairness across demographics
- Environmental impact (energy consumption)

> Where GPAI is expected to be integrated into high-risk applications, additional testing and safeguards are required.

#### Data Governance

Document training dataset composition and provenance; mitigate copyright risks, personal data inclusion, and representational bias. See also [[Data Governance and Management|Data Governance and Model Training]].

> **Transparency Summary Sheet:** The EU AI Act encourages standardized GPAI model cards or factsheets summarizing key characteristics and risks for downstream users.

---

### 3.3 GPAI with Systemic Risk — Enhanced Obligations

#### What Qualifies as Systemic Risk?

- Exceptionally high compute requirements (e.g., >10²⁵ FLOPs — illustration of scale, not a hard limit)
- Integration into critical infrastructure or wide deployment across industry sectors
- Demonstrated ability to autonomously influence behavior at scale

#### Enhanced Requirements

| Requirement | Standard GPAI | GPAI with Systemic Risk |
|-------------|:---:|:---:|
| Technical documentation | Yes | Yes |
| External audits | No | **Mandatory** |
| Adversarial testing publication | Encouraged | **Required** |
| Regulator notification | No | **Required** |
| Legal representative in the EU | No | **Mandatory** |

Additional obligations for systemic risk GPAI:

- Submit to external audits
- Provide real-time access to model behavior (under certain conditions)
- Publish adversarial testing results
- Notify EU regulators of significant changes or incidents
- Publish transparency summaries about capabilities, limitations, and risks
- Establish an EU-based legal liaison
- Maintain incident response and escalation mechanisms
- Provide APIs and documentation for third-party safety researchers

---

### 3.4 Obligations for Distributors and Deployers of GPAI

Organizations integrating GPAI into downstream systems (especially high-risk) must:

- Verify model's conformity with published documentation
- Assess their own use case for potential elevation in risk classification
- Ensure transparency toward end users

---

### 3.5 Open-Source GPAI Considerations

Open-source GPAI developers may be **exempt from some obligations** if they do not derive commercial benefit or maintain operational control. However, **deployers remain responsible** for downstream compliance.

### 3.6 Encouraged Practices Across All GPAI Models

- Voluntary codes of conduct addressing accessibility, inclusiveness, environmental sustainability, and misuse prevention (election manipulation, malware generation, fraud)
- Collaborate with academia and civil society
- Support open benchmarks and transparency initiatives

---

## 4. Enforcement and Penalties

### 4.1 Oversight and Supervisory Authorities

| Authority | Role |
|-----------|------|
| **European AI Office** (housed within European Commission) | Coordinate supervision of GPAI systems with systemic risk; maintain public database of high-risk AI systems; issue guidance and best practices |
| **National competent authorities** (one or more per member state) | Market surveillance; handle complaints; investigate breaches; impose penalties within jurisdiction |

### 4.2 Inspection Powers and Remedies

Authorities may:

- Require access to technical documentation
- Perform unannounced inspections (including digital audits)
- Mandate and verify corrective actions
- Suspend or prohibit marketing of AI systems
- Require withdrawal or recall of non-compliant systems
- Direct updates, retraining, or labeling changes
- Require notification of affected users

> Individuals affected by non-compliant AI may seek remedies under national civil liability frameworks or file complaints through data protection/consumer protection channels.

### 4.3 Whistleblower Protections

The EU AI Act encourages reporting of systemic non-compliance and may include whistleblower protections similar to GDPR.

---

### 4.4 Penalty Framework

| Violation Type | Maximum Fine |
|----------------|-------------|
| **Prohibited AI practices** | Up to **€35 million or 7%** of global annual turnover (whichever higher) |
| **Non-compliance with high-risk obligations** | Up to **€15 million or 3%** of turnover (whichever higher) |
| **Incorrect, incomplete, or misleading information** | Up to **€7.5 million or 1%** of turnover (whichever higher) |

> **Penalties compared to GDPR:** The EU AI Act's penalties resemble GDPR's but may exceed them for the most egregious violations.

---

### 4.5 Factors in Assessing Penalties

Authorities consider:

- Nature and significance of the breach
- Whether non-compliance was **intentional or negligent**
- Previous history of violations
- Degree of cooperation with authorities

> **Voluntary disclosure benefit:** Organizations that voluntarily disclose incidents or deficiencies and cooperate with authorities may receive reduced penalties.

**Post-enforcement:** Organizations may be required to submit to third-party audits, implement compliance remediation plans, and report on remediation progress periodically.

---

### 4.6 Cross-Border Enforcement and Extraterritoriality

#### Mutual Assistance Framework

National authorities cooperate through:
- Sharing information on investigations
- Supporting cross-border enforcement actions
- Coordinating activities through the European AI Office

#### Extraterritorial Application

The EU AI Act applies to **non-EU entities** if they:
- Place AI systems on the EU market
- Make AI systems available to users located in the EU
- Deploy AI outside the EU if the system affects EU persons
- Develop GPAI models that are integrated into EU-facing applications

> **Non-EU providers must:** Appoint an EU-based legal representative, ensure conformity assessments are in place, and meet all transparency and documentation requirements.

---

## 5. Organizational Context

Compliance obligations depend on the role an organization plays in the AI supply chain.

### 5.1 Role Definitions and Obligations

| Role | Definition | Key Obligations |
|------|------------|-----------------|
| **Provider** | Develops an AI system/GPAI model and places it on the EU market under its own name/brand | Risk management, conformity assessments, technical documentation, CE marking, EU database registration, post-market monitoring, incident reporting |
| **Deployer** | Uses AI systems in professional activities (not private use) | Human oversight during use, monitor performance and report incidents, ensure input data quality, maintain logs, use per provider instructions |
| **Importer** | Places AI systems from non-EU countries onto the EU market | Verify CE marking and conformity assessment, ensure documentation is complete, register in EU database, cooperate with authorities |
| **Distributor** | Makes AI systems available in EU market without modifying them (e.g., app stores, marketplaces) | Verify CE marking is present, confirm provider/importer contact info visible, suspend distribution if non-compliance suspected, cooperate with authorities |

---

### 5.2 Important Role Dynamics

- **Deployers become providers** if they substantially modify an AI system or develop their own downstream application using GPAI — they inherit full provider obligations.
- **Importers are legally liable** if they place a non-compliant AI system on the market. Contracts should clarify responsibility boundaries.
- **Cloud-based AI platforms** (AI-as-a-Service) can blur roles; contractual designation of responsibilities is recommended.
- **An organization can hold multiple roles** (e.g., both importer and distributor).

---

### 5.3 Shared Horizontal Duties

Across all roles, organizations must:

- Cooperate with national competent authorities and regulators
- Respond to incident reports
- Maintain records (logs, updates, notices)

> **Best practice:** Conduct an "AI role assessment" for each system to determine your role and resulting compliance obligations.

---

## 6. EU AI Act Implementation Timeline

> **Key:** Dates may change. Periodically review enforcement news.

| Date | Event / Obligation |
|------|--------------------|
| **July 12, 2024** | AI Act published in the Official Journal of the EU |
| **August 1, 2024** | Entry into force — formal start (no immediate obligations) |
| **February 2, 2025** | Prohibited AI practices and AI literacy requirements begin to apply |
| **May 2, 2025** | Codes of practice for GPAI models expected to be finalized |
| **August 2, 2025** | Significant obligations: GPAI rules, governance structures, penalties, notified bodies; member states must designate authorities and establish penalty frameworks |
| **August 2, 2026** | High-risk AI system requirements take effect (conformity assessments, CE marking) |
| **By 2027** | Full enforcement expected across all applicable provisions |

### Grace Periods and Transitional Provisions

- **GPAI providers:** Models placed on market before August 2, 2025 → until **August 2, 2027** for full compliance
- **Codes of practice:** Voluntary; signing the GPAI Code of Practice may offer legal assurances (non-signatories won't benefit from presumptions of conformity)

> **Notable:** In July 2025, Meta announced it would not sign the GPAI Code of Practice (citing legal uncertainties, regulatory overreach). OpenAI and Mistral AI agreed to sign. This matter continues to develop.

---

## Key Takeaways

1. **AI systems are classified into four risk tiers: prohibited, high-risk, limited-risk, and minimal-risk.** This classification determines the level of regulatory control. Prohibited systems are banned outright. High-risk systems face the most stringent obligations.

2. **High-risk AI systems must meet detailed compliance obligations before market placement.** Requirements include conformity assessments, technical documentation, risk management procedures, human oversight, post-market monitoring, and business records.

3. **General-purpose AI (GPAI) systems face unique requirements based on scale and systemic impact.** GPAI providers must document architecture, disclose intended uses and risks, and conduct model evaluations. Systemic risk designation triggers enhanced obligations (external audits, regulator notification).

4. **The role an organization plays (provider, deployer, importer, or distributor) determines its legal responsibilities.** Providers carry the heaviest burden. Deployers ensure safe implementation and oversight. Importers verify compliance for non-EU systems. Distributors must act upon credible non-compliance alerts.

5. **Penalties under the EU AI Act can reach up to €35 million or 7% of global turnover.** The tiered enforcement system calibrates penalties to violation severity. Prohibited practices incur the highest fines; even documentation failures can result in substantial penalties.

---

## Key Terms

- **[[EU AI Act]]** — Landmark EU legislative framework governing AI design, deployment, and oversight via a risk-based classification system
- **[[Prohibited AI]]** — AI practices banned outright (social scoring, subliminal manipulation, real-time biometric ID in public spaces)
- **[[High-Risk AI]]** — AI systems significantly affecting rights/safety; most stringent controls (conformity assessments, CE marking, human oversight)
- **[[Limited-Risk AI]]** — AI systems requiring transparency but with limited impact (chatbots, deepfakes)
- **[[Minimal-Risk AI]]** — AI systems posing negligible risk; largely unregulated (spam filters, recommendation engines)
- **[[General-Purpose AI (GPAI)]]** — Models serving multiple purposes and integrable into diverse downstream systems (LLMs, foundation models)
- **[[Systemic Risk]]** — GPAI classification triggered by high compute, critical infrastructure integration, or autonomous behavioral influence at scale
- **[[CE Marking]]** — EU conformity mark required for high-risk AI systems before market placement
- **[[Notified Body]]** — Third-party organization authorized to conduct conformity assessments for high-risk AI
- **[[Conformity Assessment]]** — Process of demonstrating compliance with EU AI Act requirements before market placement
- **[[European AI Office]]** — Centralized EU body coordinating GPAI supervision and maintaining high-risk AI database
- **[[Provider]]** — Entity that develops an AI system and places it on the EU market under its own name
- **[[Deployer]]** — Entity using AI systems in professional activities (not private use)
- **[[Importer]]** — Entity placing non-EU AI systems onto the EU market
- **[[Distributor]]** — Entity making AI systems available in the EU without modification (app stores, marketplaces)
- **[[Model Card]]** — Standardized factsheet summarizing GPAI characteristics, limitations, and risks
- **[[Human in the Loop]]** — Meaningful human oversight/intervention in consequential AI decisions
- **[[Extraterritoriality]]** — EU AI Act applies to non-EU entities placing AI on the EU market or affecting EU persons
