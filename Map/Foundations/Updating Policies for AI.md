---
tags:
 - aigp/domain-I
 - aigp/area
 - aigp/foundations
created: 2026-07-11
domain: "I: Understanding the Foundations of AI Governance"
subdomain: "I.C: Establish Policies and Procedures to Apply Throughout the AI Lifecycle"
related:
 - "[[Foundations Index]]"
 - "[[Organizational Readiness]]"
 - "[[Privacy and Data Protection Law]]"
 - "[[AIGP Exam Questions]]"
---

# Updating Policies for AI

> **Domain I, Subdomain I.C** — Establish Policies and Procedures to Apply Throughout the AI Lifecycle

## Performance Indicators

- **Create and implement policies to ensure oversight and accountability across all AI lifecycle stages** (use case assessment, risk management, ethics by design, data acquisition and use, model development, training and testing, deployment and monitoring, documentation and reporting, and incident management)
- **Evaluate and update existing data privacy and security policies for AI**
- **Create and implement policies to manage third-party risk** (procurement, supply chain, and human resources)

> **Assumption:** IT governance is assumed to already exist. AI governance activities take place *in addition to* IT governance activities, not in place of them.

---

## 1. Oversight in the Age of Autonomous Decision-Making

AI systems introduce new types of situations — autonomous decision-making, impacts on data privacy — that existing policies may not cover. Governance must be **lifecycle-aware**, introducing enforceable, reviewable policies from use case proposal to model retirement.

### 1.1 The Lifecycle Policy Model

A lifecycle-oriented policy framework should:

- Define **responsibilities and escalation paths** for each lifecycle phase (cradle to grave)
- Be **risk-calibrated** — more rigorous for high-risk systems (healthcare, justice, employment scoring)
- Enable **auditability and versioning** of proceedings and decisions
- Be **embedded into technical workflows**, not parallel to them
- Include **continuous monitoring and feedback loops** for post-deployment performance, incident reporting, and model recalibration
- Address **data governance explicitly** — provenance, consent, minimization, retention, regulatory compliance

> **Key:** Policies must be operationalized through procedures, gates, templates, checklists, recordkeeping, and oversight roles.

### 1.2 Use Case Assessment: Aligning Purpose and Risk

Before any code is written, teams must evaluate whether AI is appropriate:

| Assessment Criteria | Questions to Ask |
|---------------------|------------------|
| **Societal context** | Criminal justice, healthcare, hospitality — what domain? |
| **Potential harm** | Could the outcome amplify inequities or cause harm? |
| **Data quality** | Is sufficient, quality data available? |
| **Necessity of AI** | Would a simpler, rule-based solution suffice? |

#### Risk Rating Frameworks

Proposed AI systems should be assigned a **classification level or risk rating** at the onset of development:

| Risk Level | Criteria | Required Actions |
|------------|----------|------------------|
| **Low** | Minimal impact on individuals, low automation | Standard review |
| **Medium** | Some individual impact, moderate automation | Enhanced documentation, review |
| **High** | Significant impact on protected groups, legal exposure, full automation | Third-party audits, external stakeholder input, executive sign-off |

> **Note:** The EU AI Act defines risk levels with prescribed activities. Absent a formal classification, use low/medium/high.

### 1.3 Risk Management Tailored for AI

AI systems introduce novel risks that traditional software risk management does not fully address:

| Novel Risk | Description |
|------------|-------------|
| **Epistemic uncertainty** | AI may be confidently wrong due to data gaps or improper training |
| **Automation bias** | Human operators defer to model outputs even when flawed |
| **Emergent behavior** | Unexpected outcomes exceeding the system's intentions (especially multi-agent/generative systems) |

**Scheduled and trigger-based risk reviews** should occur:
- After major data or model updates
- When monitoring flags drift or degraded performance
- In response to public feedback or legal changes

> **Exam note:** Combining AI and IT governance into a single integrated process is often more effective than maintaining separate processes.

### 1.4 Ethics by Design: From Principle to Practice

Abstract values (fairness, dignity) must be translated into **practical safeguards**:

- **Ethical impact assessments** tied to each model's use case
- **Moral crumple zones** — where responsibility is unfairly shifted to low-authority individuals
- **Stakeholder engagement** (especially affected communities) in design choices

#### Ethics Assessment Questions

- Could this system exacerbate social inequities?
- Are vulnerable populations affected disproportionately?
- Can users contest or appeal decisions?

#### Technical Ethics Tools

| Tool Category | Examples |
|---------------|----------|
| **Fairness toolkits** | Aequitas, AI Fairness 360 |
| **Explainability libraries** | SHAP, LIME |
| **Bias detection dashboards** | Used during model validation |

Policies should **mandate the use** of such tools and require outputs to be documented in business records.

### 1.5 Data Acquisition and Use

#### Data Lineage and Documentation

Every AI project must maintain a **data provenance (lineage) document** capturing:

- Source of each dataset
- Licensing or usage terms
- Known limitations (underrepresentation, class imbalance)

> **Best practice:** Data lineage should be required for **all** IT system projects, not just AI.

#### Consent, Privacy, and Synthetic Data

Policies should also:
- Require informed consent where required by law
- Address use of third-party data brokers
- Mandate privacy-preserving techniques (e.g., **differential privacy**) in sensitive domains
- Establish safeguards for **synthetic data** to ensure realism without compromising confidentiality

### 1.6 Model Development: Guardrails for Creation

Development policies should require:

| Policy Requirement | Description |
|-------------------|-------------|
| **Approved tools list** | Short list of approved AI tools, systems, and platforms |
| **Version control** | Managed check-in/check-out rules (DVC, MLflow) |
| **Peer review** | Reviewed/approved pull requests for model changes |
| **Model cards** | Documenting purpose, limitations, and testing results |
| **Traceability** | Training data sources and preprocessing pipelines |
| **Automated testing** | Performance, bias, and robustness in CI/CD pipeline |
| **Standard interfaces** | Approved protocols (e.g., Model Context Protocol — MCP) |

> **Two-person rule:** Some firms require that no model advance to testing without review and sign-off by another qualified AI practitioner.

#### Safe and Interpretable Model Architectures

- Enforce **interpretable models** unless performance tradeoffs are documented and approved
- Require **justification and formal approval** for complex architectures (deep neural networks)
- A **rule-based system** may be more appropriate than a black box ensemble for eligibility decisions

### 1.7 Training and Testing: Preparing for the Real World

> **Governance focus:** Construct business rules defining requirements for model training and testing — not the engineering details.

#### Training Principles
- Training data is accurate and complete
- Privacy rights of data subjects are preserved

#### Testing Categories

| Category | What Is Tested |
|----------|----------------|
| **Accuracy** | Does the model produce correct outputs? |
| **Fairness** | Are outcomes equitable across groups? |
| **Bias** | Is there disparate impact (gender, race, etc.)? |
| **Explainability** | Can decisions be understood/justified? |
| **Performance** | Does it meet speed/scale requirements? |
| **Security** | Is it resilient against attacks? |

#### Rigorous Validation Standards

Policies should define:
- Performance benchmarks tailored to use case goals
- **Subgroup analysis** to detect disparate impact
- Controls for **data leakage** and **overfitting**
- All test plans, results, and override approvals documented as permanent business records

#### Red Teaming and Adversarial Testing

| Test Type | Description |
|-----------|-------------|
| **Adversarial input testing** | Malformed inputs designed to break the model |
| **Prompt injection scenarios** | Manipulating LLMs via crafted prompts |
| **Simulations of user misuse** | How the system handles abuse |
| **Conventional cyber attacks** | Standard security penetration testing |

Policy can designate a cybersecurity **"red team"** role for stress-testing with logged outcomes.

> **Vital gate:** AI governance must include a checkpoint at the conclusion of testing for management to review results and make a **go/no-go decision**.

### 1.8 Deployment and Monitoring: Guarding the Gate

#### Pre-deployment Controls

Before deployment, policies should require:
1. Ethics and compliance review checkpoint
2. Risk assessment and mitigation review
3. Complete documentation package submitted
4. Monitoring plan approved by a relevant governance body

> Rigor varies by risk level — healthcare AI must demonstrate patient communication readiness (human-in-the-loop protocols, privacy).

#### Post-deployment Monitoring

| Requirement | Description |
|-------------|-------------|
| **Real-time performance tracking** | Against established baseline |
| **Alerting** | Model drift, out-of-distribution data, fairness metrics |
| **Human oversight** | Especially for consequential decisions |
| **Accessible dashboards** | For non-technical stakeholders, compliance officers, regulators |

> **Warning:** Organizations with low process maturity face significantly higher risks of problems with AI systems.

### 1.9 Documentation and Reporting: Building Institutional Memory

#### Living Documentation

AI systems must be **auditable**. Policies should require:
- Model documentation updated after each significant change
- **Decision logs** for ethical and legal review points
- **Explainability snapshots** for deployed models

#### Internal and External Reporting

| Report Type | When Required |
|-------------|---------------|
| **Internal reporting** | Regular reports to governance committees |
| **External transparency reports** | Anonymized, depending on jurisdiction and risk |
| **User/public disclosures** | Especially for systems affecting rights |

### 1.10 Incident Management: Planning for Failure

#### Defining and Escalating Incidents

AI governance and incident response policies must clarify:

| Element | Description |
|---------|-------------|
| **What counts as an AI incident** | Unauthorized use, biased decisions, hallucination, data leakage, drift |
| **Reporting timelines and thresholds** | When and how to escalate |
| **Communication templates** | For regulators, customers, or the public |

> **Note:** Detection capability must be in place — you can't declare an incident if you can't detect it.

#### AI Playbooks

In addition to the overall incident response plan, organizations need **detailed playbooks** for AI-specific incident types. Like other IR playbooks, these must be **tested** and personnel must be **trained**.

#### Root Cause and Remediation

After an incident:
- Multidisciplinary team conducts a **postmortem**
- Governance gaps are identified
- Policies and training are updated accordingly

> **Culture:** Emphasize **blameless retrospectives** that surface systemic issues, not scapegoating individuals.

---

## 2. Evaluate and Update Existing Data Privacy and Security Policies for AI

Traditional data privacy and security frameworks were not designed with AI in mind. AI's ability to learn, generalize, and infer creates new challenges.

### 2.1 Why AI Disrupts Traditional Data Governance

#### AI Is Data-Hungry by Design

AI/ML models require vast datasets, creating incentives to:
- Aggregate data from disparate sources
- Purchase or scrape data from third parties
- Repurpose data collected for unrelated purposes

Traditional privacy policies often lack controls for:
- **Purpose limitation** in AI systems
- Ongoing access to data post-training
- Third-party training data governance
- **Data retention** practices

#### Inference and Reidentification Risks

AI models can **infer sensitive traits** (race, political views, sexual orientation) even without explicit labels. Models trained on supposedly anonymized data have been shown to **leak identifying information**.

> **Example:** In 2021, researchers demonstrated GPT-style models could memorize and regurgitate sensitive data (SSNs, emails) from training corpora, even when lightly obfuscated.

### 2.2 Privacy Policy Gaps and AI-Specific Threats

> **Prerequisite:** Privacy governance is a prerequisite for AI governance. Without it, organizations are more likely to run afoul of privacy laws.

#### Common Policy Shortfalls

Most organizations' existing policies:
- Do not specify how long training data is retained post-model development
- Lack controls for **model inversion** or **membership inference attacks**
- Assume data minimization applies only to storage, not model retention
- Do not include data subject rights in model outputs (right to explanation, opt-out, deletion)

#### AI-Specific Privacy Threats

| Threat | Description |
|--------|-------------|
| **Model inversion** | Reconstructing input data by probing the model |
| **Membership inference** | Determining whether a specific record was in the training set |
| **Model poisoning** | Maliciously injecting false data into training pipelines |
| **Function creep** | Expanding data use beyond stated original purposes through AI reuse |
| **Unintended memorization** | LLMs retaining and reproducing fragments of sensitive training data |

### 2.3 Key Policy Areas to Evaluate and Update

#### Purpose Limitation in Dynamic Pipelines

Privacy policies must:
- Define permissible reuse conditions
- Require new consent if original use cases change significantly
- Establish logging and audit trails for each dataset's usage across model versions

> **Policy tip:** Introduce a **"use case registry"** that tags each dataset with approved purposes and flags violations during pipeline construction.

#### Enhanced Anonymization and Pseudonymization Standards

Updated policies should include:
- **Quantifiable risk metrics** (k-anonymity, l-diversity)
- **Differential privacy** for sensitive domains
- Mandatory **re-anonymization** when combining datasets

#### Lifecycle-Based Data Retention Controls

Policies must distinguish between:

| Data Layer | Retention Considerations |
|------------|-------------------------|
| **Raw input data** | Delete after model convergence? |
| **Transformed/feature data** | Same rules as raw data? |
| **Labeled datasets** | Purpose-specific retention |
| **Model artifacts** | How do deletion requests apply to learned weights? |

> **"Forgetting budget":** A threshold on how much data a model can memorize, triggering retraining when exceeded. Disclose this practice in the Notice of Privacy Practices (NOPP).

### 2.4 Data Subject Rights in AI Contexts

#### Right to Explanation and Access

Updated privacy policies must clarify how data subjects can:
- Request access to data used to train models affecting them
- Receive a **meaningful explanation** of AI-driven decisions
- Understand when an AI system is involved in decision-making

> Aligns with GDPR (Articles 13–15, 22) and the EU AI Act.

#### Right to Be Forgotten (Data Deletion)

Privacy policies should define whether:
- Models must be **retrained** when personal data is deleted
- Deletion applies to downstream systems, fine-tuned derivatives, or API-accessible models
- A process exists for data subjects to **verify** that deletion has occurred

> **Exam note:** This is especially important for foundation models trained on large, uncurated web datasets.

### 2.5 Security Policy Updates for AI Systems

#### Expanding the Threat Model

AI systems are vulnerable to:

| Threat Vector | Description |
|---------------|-------------|
| **Adversarial attacks** | Manipulating inputs to cause harmful outputs |
| **Data poisoning** | Corrupting training data |
| **Model theft** | Extracting model via API access |
| **Prompt injection / jailbreaks** | Bypassing LLM safety filters |

Security policies must be revised to:
- Include AI in threat modeling exercises
- Define monitoring for AI-specific logs, telemetry, and behaviors
- Enforce rate-limiting, access control, and model segmentation

#### Securing the AI Supply Chain

Updated security policies must address:
- **Software Bill of Materials (SBOM)** for AI pipelines
- Vetting and licensing review of third-party models
- Continuous vulnerability scanning for AI components

### 2.6 Practical Steps for Policy Revision

1. **Conduct a gap assessment** — audit privacy and security policies for AI exposure
2. **Build cross-functional review teams** — include data privacy officers, security architects, AI/ML engineers, legal and ethics advisors
3. **Produce policy compliance artifacts** — tangible evidence (architecture review, configuration settings, worksheets/charts) that policies are being followed

> **Prerequisite:** Organizations must already have a **data classification policy** and **data inventory**. Without these, management and monitoring of AI training data will be severely disadvantaged.

---

## 3. Policies to Manage Third-Party Risk

As organizations outsource AI components (pretrained models, cloud infrastructure, data labeling, algorithmic APIs), third-party risk management must evolve beyond traditional vendor checklists.

### 3.1 Why AI Multiplies Third-Party Risk

#### Beyond the Traditional Vendor Model

AI introduces risks that slip past standard procurement controls:

| Traditional TPRM Focus | AI-Specific Gaps |
|------------------------|------------------|
| Legal, financial, cyber exposure | Black box algorithms lacking explainability |
| Vendor solvency, insurance, compliance | Datasets of unknown origin or labeling quality |
| Standard contract terms | LLM APIs with unpredictable outputs or safety filters |

#### Hidden Dependencies and Sub-Tier Risks

A procurement team may contract with one vendor, unaware that:
- The vendor relies on subcontracted data labeling teams overseas
- The model was trained on scraped or copyrighted data without authorization
- Code libraries include outdated or vulnerable dependencies
- The vendor's own third parties may use AI capabilities affecting the organization

> **Key challenge:** How many levels down should the TPRM program probe?

### 3.2 Core Policy Objectives for Third-Party AI Risk

An effective governance framework should:
1. **Identify and categorize** third-party touchpoints in the AI lifecycle
2. **Impose due diligence** requirements including AI-specific risks
3. **Define contractual obligations** around data use, fairness, security, accountability, and recourse
4. **Establish monitoring and review mechanisms** for ongoing compliance

### 3.3 Procurement Policy Controls for AI-Enabled Solutions

#### AI Risk Flagging at Procurement Intake

Modify procurement intake to flag when:
- A product includes AI, ML, LLMs, or automated decision-making
- Data from the organization will be used to train models
- The vendor processes personal, biometric, or sensitive information

> Flagged items trigger supplemental review by legal, risk, and technical stakeholders.

#### AI-Specific Due Diligence

Procurement policies should require vendors to provide:

| Requirement | Description |
|-------------|-------------|
| **Model documentation** | Training data sources and licensing |
| **Explainability** | Model logic/decision criteria (or justification for lack thereof) |
| **Audit results** | Internal or third-party audits for bias, security, robustness |
| **Regulatory compliance** | Evidence of compliance with CPRA, GDPR, EU AI Act |

> Use standardized **AI supplier questionnaires** mapping responses to risk levels and approval requirements.

#### Vendor Risk Tiers

| Risk Tier | Criteria | Required Controls |
|-----------|----------|-------------------|
| **Low** | Minimal automation, non-sensitive data | Standard review |
| **Medium** | Some automation, limited PII | Enhanced review, contractual safeguards |
| **High** | Full autonomy, PII/health data, financial decisions | Fairness testing, incident response clauses, continuous monitoring |

> **Important:** Not all third parties disclose AI capabilities. It's vital to understand **how** AI is used, not just **whether**.

### 3.4 Contracting and Legal Safeguards

#### AI-Specific Contractual Clauses

| Clause | Requirement |
|--------|-------------|
| **Disclosure** | Vendors must disclose all uses of AI in their organization |
| **Data use limits** | No customer data for retraining without explicit consent |
| **Fairness and bias** | Test for and remediate disparate impact |
| **Security** | Model access control and incident reporting requirements |
| **Continuous monitoring** | Vendor must detect problems in its AI system |
| **Audit rights** | Customer may audit or inspect high-risk vendor systems |
| **Termination** | AI-related conditions for agreement termination |

#### Liability and Incident Handling

- **Clear definitions of responsibility** for AI errors or harms
- **Time-bound incident notifications** (e.g., within 24 hours)
- **Model deactivation rights** if risks exceed acceptable thresholds

### 3.5 AI Supply Chain Governance

#### Mapping the AI Supply Chain

Organizations must create visibility into:
- Models built in-house using third-party data or tools
- Open-source libraries used in AI workflows
- Pretrained foundation models fine-tuned for internal use

> Require vendors to submit an **AI System Bill of Materials (AI-SBOM)** listing all upstream inputs.

#### Open-Source AI Risk Policies

Policies must address:
- **Licensing clarity** — ensure proper licensing of all open-source assets
- **Security vetting** — scan packages for known vulnerabilities
- **Bias review** — validate data quality and representation in open datasets

> **Note:** A 2022 paper ("Tragedy of the Digital Commons" by Chinmayi Sharma) refuted the long-held belief that open-source software is inherently more secure.

### 3.6 Other Third-Party AI Issues

#### Contracting with Human Annotators and AI Workers

Policies should require:
- Vetting of vendor practices for **ethical labor standards**
- **Data confidentiality agreements** with all annotators
- Clear instructions and **QA protocols** for human labelers

#### Employee Use of Generative AI Tools

Organizations should amend **Acceptable Use Policies (AUPs)** to define:

| Policy Element | Description |
|----------------|-------------|
| **Approved tools** | Which AI tools and use cases are permitted |
| **Prohibited data types** | What data must not be input (per data classification policy) |
| **Logging and review** | Mechanisms for AI usage monitoring |

> Conduct training programs to inform workers of policy intent and enforcement.

### 3.7 Monitoring and Reviewing Third-Party AI Risk

#### Ongoing Vendor Oversight

TPRM policies should mandate periodic reviews of:
- Model performance (drift, bias)
- Compliance with contract terms
- Changes to vendor business practices or ownership

> High-risk vendors → **continuous monitoring program** with periodic check-ins and annual recertification.

#### Triggers for Reassessment

| Trigger Event | Response |
|---------------|----------|
| Additions or changes in vendor services | Immediate reassessment |
| Security incidents and breaches | Immediate reassessment |
| Public controversy (model misuse) | Immediate reassessment |
| Technical incidents (hallucinations, outages) | Immediate reassessment |
| Regulatory changes affecting the model's domain | Immediate reassessment |

> Without continuous monitoring, organizations will likely miss events that would trigger reassessments.

---

## Key Takeaways

1. **Lifecycle-spanning governance** — AI governance must embed oversight at every stage: use case vetting → data sourcing → model design → deployment → ongoing monitoring. Each phase has unique risks requiring distinct policy attention. Governance is not a one-time activity.

2. **Privacy and security policies must address model-specific risks** — Unlike traditional systems, AI models can unintentionally leak personal data or be probed to reveal training records. Concepts like differential privacy, membership inference testing, and lifecycle data retention must be applied in AI contexts. Traditional controls alone are insufficient.

3. **Third-party AI procurement requires AI-specific due diligence** — Exam scenarios may involve vendors providing AI-enabled services. Correct responses include requesting model transparency, understanding training data origins, and incorporating AI-specific contractual clauses on fairness, explainability, and auditability.

4. **Traditional data governance principles must be reinterpreted for AI** — Purpose limitation and data minimization take on new meaning when models can infer, memorize, and repurpose data. Understand issues of model reuse, synthetic data, reidentification risks, and how foundational privacy concepts evolve with machine learning.

5. **Contracts with AI vendors must cover bias, explainability, data usage, and auditability** — Many third-party risks can only be mitigated through strong contract terms. Know what should be included in service agreements and how to structure accountability when using external AI models or services.

---

## Key Terms

- **[[AI Lifecycle Policy]]** — A governance framework embedding oversight touchpoints at every phase from use case assessment through incident response
- **[[Use Case Assessment]]** — Evaluation of whether AI is appropriate for a given problem, considering societal context, potential harm, data quality, and necessity
- **[[Risk Rating Framework]]** — Classification of AI systems by risk level (low/medium/high or per EU AI Act) to determine required governance rigor
- **[[Epistemic Uncertainty]]** — When an AI system is confidently wrong due to data gaps or improper training
- **[[Automation Bias]]** — Human tendency to defer to model outputs even when flawed
- **[[Emergent Behavior]]** — Unexpected or unplanned outcomes exceeding an AI system's intentions
- **[[Ethics by Design]]** — Translating abstract ethical values into practical safeguards throughout AI development
- **[[Moral Crumple Zone]]** — Where responsibility is unfairly shifted to low-authority individuals who cannot control AI decisions
- **[[Data Provenance (Data Lineage)]]** — Documentation of each dataset's source, licensing, and known limitations
- **[[Model Card]]** — Document describing an AI model's purpose, limitations, and testing results
- **[[Red Teaming]]** — Adversarial stress-testing of AI systems to identify vulnerabilities
- **[[Model Inversion]]** — Reconstructing training input data by probing a model's outputs
- **[[Membership Inference Attack]]** — Determining whether a specific record was part of an AI model's training set
- **[[Model Poisoning]]** — Maliciously injecting false data into training pipelines
- **[[Function Creep]]** — Expanding data use beyond stated original purposes through AI reuse
- **[[Unintended Memorization]]** — LLMs retaining and reproducing fragments of sensitive training data
- **[[Differential Privacy]]** — Privacy-preserving technique that adds statistical noise to protect individual records
- **[[Forgetting Budget]]** — A threshold on how much data a model can memorize, triggering retraining when exceeded
- **[[Use Case Registry]]** — A system tagging each dataset with approved purposes and flagging violations
- **[[AI System Bill of Materials (AI-SBOM)]]** — Listing of all upstream inputs (code, data, platforms) used in model development
- **[[Acceptable Use Policy (AUP)]]** — Policy defining approved AI tools, use cases, and prohibited data types for employees
- **[[Two-Person Rule]]** — Requirement that no model advance to testing without review by another qualified AI practitioner
- **[[Prompt Injection]]** — Manipulating LLMs via crafted prompts to bypass safety filters or cause harmful outputs
- **[[Data Classification Policy]]** — Foundational policy categorizing data types and sensitivity levels — prerequisite for AI governance
