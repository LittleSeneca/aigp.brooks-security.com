---
tags:
 - aigp/domain-III
 - aigp/domain-IV
 - aigp/area
 - aigp/lifecycle
 - aigp/risk
created: 2026-07-11
domain: "III: Understanding How to Govern AI Development; IV: Understanding How to Govern AI Deployment and Use"
subdomain: "III.C: Govern the Release, Monitoring and Maintenance of the AI Model; IV.B: Perform Key Activities to Assess the AI Model; IV.C: Govern the Deployment and Use of the AI Model"
related:
 - "[[AI Lifecycle Index]]"
 - "[[Deployment and Monitoring]]"
 - "[[Ongoing AI Operations]]"
 - "[[AIGP Exam Questions]]"
---

# AI Risk Management and Assurance

> **Domain III, Subdomain III.C; Domain IV, Subdomains IV.B & IV.C** — AI Risk Management, Audits, Testing, and Incident Response

## Performance Indicators

- Identify and evaluate **key terms and risks in vendor or open-source agreements**
- Forecast and reduce **risks of secondary or unintended uses and downstream harms**
- Conduct periodic activities to assess the AI model's **performance, reliability, and safety** (e.g., audits, red teaming, threat modeling, and security testing)
- **Manage and document** incidents, issues, and risks
- Collaborate with **cross-functional stakeholders** to understand why incidents arise (e.g., brittleness, lack of robustness, poor data quality, insufficient testing, model/data drift)
- Make **public disclosures** to meet transparency obligations (e.g., technical documentation, instructions for use, post-market monitoring plans)

---

## 1. AI Risk Management and Forecasting

### AI Risks vs. Traditional Enterprise Risk

AI systems introduce **novel risks** not easily captured by traditional enterprise risk management (ERM). While conventional IT risk frameworks focus on infrastructure availability, data loss, or system failure, AI risks arise from:

- **Probabilistic behavior** — outputs are probabilities, not certainties
- **Evolving outputs** — models change via retraining, feedback loops, environmental inputs
- **Third-party model dependencies** — vendor, open-source, or cloud AI services
- **Societal-level impacts** — discrimination, misinformation, environmental harm

> **Cybersecurity insight:** AI risks exist at or above **Layer 7 (Application Layer)** of the OSI model — they are socio-technical risks related to data use, not infrastructure logic.

> **Assumption:** Organizations using AI are assumed to have mature cybersecurity and ERM practices. AI risk management is an **overlay** to standard practices.

### Proactive Risk Identification and Categorization

Effective AI risk management begins with clear **risk identification**. AI models evolve based on training data, feedback loops, environmental inputs, and retraining schedules — new risks can emerge even **after deployment**.

> **Key principle:** A system secure today may not remain secure tomorrow. Claims of being "risk-free" are fleeting at best. Organizations must **proactively and aggressively** seek out risks — there is more **inherent risk** associated with AI than many other emerging technologies.

**AI risk domains:**

| Risk Domain | Examples |
|-------------|----------|
| **Data-related risks** | Biases, poor quality, leakage, prohibited cross-border data transfers, illegal/unethical use of personal data |
| **Model-related risks** | Overfitting, lack of transparency, black box models, prompt injection attacks, model poisoning |
| **Deployment risks** | Misuse in unintended contexts, automation surprises, performance drift |
| **Operational risks** | Resource consumption, integration failure, cascading failures |
| **Ethical and social risks** | Discrimination, loss of agency, manipulation of public opinion |
| **Regulatory and legal risks** | Non-compliance with emerging AI-specific or general data protection laws |

> **Case study:** A financial institution's third-party fraud detection AI had disproportionately high false-positive rates for foreign-born customers due to training set bias. Result: system recall and public apology.

### Risk Management in AI Supply Chains

Most organizations rely on vendors, open-source models, or cloud AI services. These create **third-party dependencies** that must be proactively managed.

**Essential TPRM (Third-Party Risk Management) practice:** Conduct thorough upfront vendor assessment → use findings to inform contract negotiations.

**Key terms to identify and evaluate in agreements:**

- **Licensing terms** — Open-source components (GPL, AGPL) may impose code disclosure or usage limitations
- **Data use restrictions** — Data ownership, permitted uses, whether vendor can retain/use customer data for retraining
- **Model transparency and explainability** — Disclosures on training data sources, model lineage, performance evaluation, audit mechanisms
- **Indemnity and liability** — Vendors often disclaim responsibility for harmful outputs; negotiate liability clauses for recourse
- **Cyber liability insurance** — Require vendors to carry insurance, especially smaller vendors
- **Security and compliance posture** — Certifications (ISO/IEC 27001, ISO/IEC 42001, SOC 2 Type II), secure development practices

> **Case study:** An open-source language model under a non-commercial license was integrated into a for-profit chatbot platform, exposing the company to IP infringement claims.

### Common Contract Clauses to Scrutinize (Red Flags)

| Red Flag Clause | Risk |
|-----------------|------|
| Data sent to the model becomes **vendor property** | Loss of data ownership |
| Data may be **retained for model improvement** | Privacy, confidentiality concerns |
| Data may be **sent to third parties** to perform services | Uncontrolled data sharing |
| Output is **not warranted** to be accurate or lawful | No vendor accountability |
| Customer grants **irrevocable license** to use feedback for future products | Loss of IP rights |

### Forecasting Secondary and Downstream Harms

> **Key concept:** Many AI consequences become apparent only when the system is used at scale or in unanticipated contexts.

**Secondary use** — AI outputs used for purposes different from the original intent, often without institutional awareness/control:

- **Input repurposing** — AI-generated content used as training data elsewhere
- **System coupling** — Chaining outputs from one model into another system
- **Malicious adaptation** — Repurposing benign tools for harmful uses (e.g., image upscalers → deepfakes)

**Downstream harms** — consequences felt by individuals, communities, or systems not initially considered:

| Type | Example |
|------|---------|
| **Societal** | Discriminatory hiring from algorithmic resume screening |
| **Environmental** | Massive compute demands → excessive carbon emissions |
| **Political** | LLMs generating misinformation during elections |

**Tools for mapping downstream harm:**
- Stakeholder impact mapping
- Recursive scenario modeling
- External consultation panels and focus groups
- Misuse testing and red teaming

> **Principle:** Governance frameworks should extend risk reviews beyond direct users to include stakeholders affected by **second- and third-order effects**.

> **Case study:** An AI model trained for academic essays was later used by students to cheat on exams, triggering plagiarism scandals.

### Risk Forecasting Techniques

Forecasting AI risk uses predictive modeling to see how systems behave under various pressures:

| Technique | Description |
|-----------|-------------|
| **Model drift detection** | **Data drift** (input distribution shift) and **concept drift** (target variable changes) degrade performance, increase bias/error |
| **Anticipating feedback loops** | Self-reinforcing loops (e.g., recommendation engines, predictive policing) can amplify bias or cause runaway behavior |
| **Simulation** | Digital twins, synthetic data, simulated user environments anticipate real-world and adversarial behavior |

> **Statistical tools:** KS tests and KL divergence can trigger retraining or alerts when drift thresholds are crossed.

> **Case study:** Predictive policing sent more officers to certain neighborhoods → more arrests → reinforced the area as "high-risk" in retrained data.

### Embedding Risk Management into Governance Structures

AI risk management must be integrated into **every phase of the development lifecycle**:

| Phase | Risk Management Activities |
|-------|---------------------------|
| **Initiation** | Define use case risk level; consult cross-functional stakeholders |
| **Design** | Model risk assessments, harm forecasting, identify training data provenance |
| **Development** | Use explainable, testable algorithms; track lineage |
| **Testing** | Adversarial testing, red teaming, misuse potential evaluation |
| **Deployment** | Rollback procedures, incident thresholds |
| **Post-deployment** | Monitor drift, audit logs, user feedback, incident reports |

> **Practice:** Include AI-related risks in the ERM risk register; use the **same risk management process** for all risks, including AI.

**Risk-related roles:**

| Role | Responsibility |
|------|---------------|
| **AI Risk Officer / Chief Risk Officer** | Enterprise-level risk posture |
| **Business Owners / Senior Executives** | Risk treatment decisions |
| **System Owners** | Individual models |
| **Audit Leads** | Testing and review cadence |
| **DPO / Legal Counsel** | Data protection, IP, AI regulatory compliance |

**Governance tooling:**
- NIST AI Risk Management Framework (AI RMF)
- ISO/IEC 42001 (AI Management System Standard)
- Risk-focused model cards
- Harm-forecasting templates
- Automated risk detection in MLOps pipelines

### Documentation and Assurance

Documentation supports internal risk communication, external audits, incident investigation, model troubleshooting, and regulatory reviews.

**Required documentation artifacts:**
- AI risk register (dynamic, living business record)
- Third-party model assessments
- Data provenance and consent records
- Data lineage records
- Impact assessments (Algorithmic Impact Assessment, DPIA)
- Risk management records (treatment decisions, remediation plans, residual risk justifications)
- Model and system cards

**Model assurance review points:**
- Known failure modes
- How risks are mitigated and residual risks
- Who is accountable for each risk class
- How frequently risk controls are tested
- How failures/harms are investigated, communicated, and corrected

### Regulatory Considerations

| Regulation | Key Risk Management Requirements |
|------------|--------------------------------|
| **EU AI Act** | Risk assessments, logs, conformity assessments for high-risk AI systems |
| **Canada AIDA** | Impact assessments, public disclosure for high-impact AI (not yet enacted) |
| **U.S. Executive Order on AI (2025)** | Agencies ensure AI systems are "free from ideological bias or engineered social agendas" |
| **China Interim Measures for Generative AI** | Classification and oversight based on risk/category; mandatory labeling of AI-generated content |

> **Consequence:** Organizations that fail to forecast and manage risk may face penalties, injunctions, or civil liability.

---

## 2. AI System Audits and Testing

### Performance Audits and Model Validation

**Performance audits** measure how effectively an AI system fulfills its intended purpose across accuracy, fairness, robustness, performance, and generalization. They validate or refute development claims and detect degradation over time.

> **Note:** Continuous monitoring should detect degradation **earlier** than periodic audits would.

**Acceptable performance criteria (established in design phase):**

| Criterion | Example |
|-----------|---------|
| **Business alignment** | Fraud detection accuracy |
| **Context-sensitive** | False-negative tolerance in medical diagnosis |
| **Stakeholder-informed** | Transparent and explicit opt-in |
| **Fairness and lack of bias** | Fairness across demographic groups |
| **Precision and confidence** | Classification accuracy, consistent decision-making |
| **Robustness and resilience** | Acceptable performance under load and with edge cases |

> **Key insight:** AI models often behave **differently in production** than in controlled test environments. When production systems fail criteria, test the same models in test environments to understand the difference.

> **Case study:** A credit scoring model met accuracy thresholds during development but showed performance disparities for rural applicants after deployment, prompting feature reevaluation and retraining.

### Red Teaming for Adversarial Robustness

**Red teaming** — structured process for simulating adversarial attacks and misuse scenarios against a target system. Essential for identifying overlooked vulnerabilities and ensuring resilience under worst-case conditions.

**Types of red team assessments for AI:**

| Attack Type | Description |
|-------------|-------------|
| **Prompt injection / jailbreak testing** | Bypassing safety mechanisms in LLMs |
| **Evasion attacks** | Modifying inputs to cause misclassification |
| **Poisoning attacks** | Injecting corrupt data into training/fine-tuning pipelines |
| **Functionality misuse** | Using tools for unintended/unethical purposes |
| **Social engineering testing** | Phishing via chatbots |

> **Scope:** Red teaming should evaluate the broader AI ecosystem — supporting infrastructure, APIs, integration layers, data pipelines — not just model parameters.

**Red team composition:**
- **Domain experts** — understand AI system and common threats
- **Policy experts** — understand misuse scenarios
- **External testers** — bring objectivity

> Red teaming targets both the AI systems themselves **and the personnel** who build, manage, and use them.

### Threat Modeling for AI-Specific Attack Surfaces

Traditional threat modeling must be extended for AI-specific attack surfaces: model inversion, training data leakage, adversarial attacks.

**STRIDE adapted for AI:**

| STRIDE Category | AI Threat |
|-----------------|-----------|
| **Spoofing** | Prompt injection |
| **Tampering** | Data poisoning, prompt injection |
| **Repudiation** | — |
| **Information Disclosure** | Model theft |
| **Denial of Service** | — |
| **Elevation of Privilege** | Unauthorized API chaining |

**Threat modeling methodologies:**

| Methodology | Purpose |
|-------------|---------|
| **MITRE ATLAS** | Knowledge base for adversarial threats against AI |
| **Kill Chain Analysis** | Mapping attacker steps from reconnaissance to exploitation |
| **Attack Trees** | Visualizing paths to compromise |
| **TARA** | Threat Analysis and Risk Assessment, adapted for AI |
| **PASTA** | Process for Attack Simulation and Threat Analysis, extended for AI misuse |

> **Threat hunting** — proactive search for signs of intrusions, intruders, abuse, and indicators of compromise. **Don't wait for incidents** — proactively look for signs of attack.

> **Case study:** A public-facing generative AI model was targeted for training data extraction via repeated sampling with targeted prompts. Threat modeling revealed this vulnerability, prompting throttling and watermarking controls.

### Threat Modeling Across the Lifecycle

| Phase | Focus |
|-------|-------|
| **Design phase** | Identify vulnerable features and components |
| **Pre-deployment phase** | Test implemented defenses |
| **Post-deployment phase** | Adapt to evolving threats and contexts |

### Security Testing for Confidentiality and Integrity

Audits must extend beyond performance to include data integrity, user privacy, and system confidentiality.

**AI-specific security testing techniques:**

| Technique | Description |
|-----------|-------------|
| **Penetration testing** | Simulate intrusion attempts into AI systems, pipelines, APIs |
| **Model extraction testing** | Assess ease of reverse-engineering/copying a model |
| **Inference attacks** | Determine how easily training data can be inferred from outputs |
| **Membership inference** | Test whether attacker can guess if specific data was in training set |
| **Re-identification testing** | Validate anonymization; attempt to re-identify training data |
| **Adversarial robustness testing** | Examine model behavior under adversarial perturbations/input manipulations |

**CI/CD pipeline safeguards:**

| Safeguard | Description |
|-----------|-------------|
| Check-out/check-in monitoring | Track all code/model access |
| Need-to-know access | Restrict sensitive code access |
| Code signing and version control | Ensure model artifact integrity |
| Containerization and sandboxing | Isolate training environments |
| Policy-based access control | Control retraining triggers |
| Audit logging | Track data access and model deployment events |

> **Key principle:** Security testing must encompass the **entire AI tech stack** — physical security, networks, OS, DBMS, application servers, storage, network services, etc.

> **Case study:** An e-commerce company discovered a rogue employee deployed an unapproved AI model. Security testing revealed missing integrity checks and weak access controls in CI/CD.

### Regulatory and Compliance Audits

Periodic audits confirm compliance with applicable laws, agreements, policies, and ethical standards — providing traceability, accountability, and defensibility.

**Key compliance audit objectives:**
- Verify adherence to AI risk management frameworks (NIST AI RMF, ISO/IEC 42001)
- Evaluate required controls (bias mitigation, impact assessments)
- Confirm documentation existence and quality (model cards, data sheets, usage policies)
- Confirm business records (risk register, treatment decisions, periodic maintenance, opt-out requests)
- Confirm proper application of opt-out rights
- Confirm presence and effectiveness of human-in-the-loop safeguards

**Audit requirements by jurisdiction:**

| Regulation | Requirement |
|------------|-------------|
| **EU AI Act** | Quality management system, conformity assessments, post-market monitoring for high-risk AI |
| **Canada AIDA** | Impact assessments, transparency measures (not yet enacted) |
| **U.S. Federal** | AI governance frameworks via Executive Orders and OMB guidance |

**Audit preparation steps:**
- Maintain a **single source of truth** for documentation
- Ensure **audit logs** are immutable and timestamped
- Practice **dry runs** or internal audit simulations
- Assign **responsible owners** for each compliance area
- Coach responsible owners on **proper conduct** with auditors

> **Note:** Some regulations (e.g., EU AI Act) require audits by qualified **external parties** (Notified Bodies), not internal audit staff.

### Real-Time Testing and Continuous Monitoring

Periodic assessments are essential but **insufficient**. Implement continuous assurance mechanisms:

| Practice | Purpose |
|----------|---------|
| **Latency and throughput metrics** | Detect performance issues |
| **Drift detection** | Track input and output distribution shifts |
| **Anomaly detection** | Identify rare or unexpected behaviors |
| **User feedback loops** | Surface safety and ethical issues |
| **Incident alerts** | Real-time awareness of incidents |
| **Incident alerting thresholds** | Automated remediation triggers |
| **Security scans** | Proactively identify new vulnerabilities |
| **Threat hunting** | Proactively detect abuse and intrusion |

> **Case study:** A healthcare AI monitoring vital signs flagged numerous false positives. Continuous monitoring revealed input drift from a firmware update in a medical device, prompting retraining.

### Integrating Testing into the AI Lifecycle

Audits test not only the AI system but also the **policies, business processes, and tools** used to design, build, test, deploy, and monitor it.

| Phase | Testing/Audit Activities |
|-------|-------------------------|
| **Design** | Design reviews, risk assessments, threat modeling, red teaming scenario planning |
| **Development** | Unit tests for model code, adversarial test sets, repository access controls, feature change approvals |
| **Pre-deployment** | End-to-end performance audits, regulatory reviews |
| **Deployment** | Canary testing, rollback safeguards |
| **Post-deployment** | Continuous monitoring, incident response planning and execution |
| **Retirement** | Data archival, model decommissioning, disposal, migration (see [[Ongoing AI Operations]]) |

**Gate model for testing:**

| Gate | Criteria |
|------|----------|
| **Gate 1** | Risk assessment and design review complete → approve development start |
| **Gate 2** | Adversarial testing and bias audit passed → promote to production |
| **Gate 3** | Operational monitoring and rollback plan validated |

### AI Audit Roles and Responsibilities

| Role | Responsibility |
|------|---------------|
| **AI Risk Officer** | Oversees assurance strategy across systems |
| **Model Owner** | System-specific testing results |
| **Internal Audit Lead** | Coordinates internal and third-party audit activities |
| **Red Team Coordinator** | Designs and executes adversarial evaluations |
| **Security Engineer** | Penetration, integrity testing, threat modeling |
| **Ethics Advisor** | Social harm evaluations |

> **Principle:** Testing efforts must not be siloed within technical teams alone — they must reflect **cross-functional governance**.

### Audit Documentation and Evidence Retention

**Records retention schedule** should specify retention periods for each business record type. Artifacts include:

- Audit charter (defines audit program, roles, responsibilities)
- Audit reports (findings, severity levels, recommendations)
- Red teaming logs and adversarial scenarios tested
- Threat models with attack paths and mitigations
- Threat modeling records
- Testing protocols and reproducible test sets
- Model version histories and deployment metadata
- Evidence of remediation actions taken

> Storage must meet regulatory, legal, and ethical obligations: access controls, retention schedules, encryption, data minimization. **Consult legal counsel** for retention requirements.

### Audit and Testing Tooling and Automation

Manual testing does not scale. Invest in automation:

| Category | Tools/Examples |
|----------|---------------|
| **Bias audit frameworks** | Aequitas, Fairlearn |
| **Red teaming platforms** | Microsoft Azure AI Red Team tooling |
| **Security scanners** | AI development, testing, and production environments |
| **Model card/data sheet generators** | Automated documentation |
| **Monitoring dashboards** | Evidently AI, Arize, WhyLabs |

---

## 3. Incident Management and Disclosures

### Identifying and Managing AI Incidents

**AI incident** — any unexpected behavior, outcome, or interaction involving an AI system that causes, or has potential to cause, harm, operational disruption, or regulatory concern.

**Examples of AI incidents:**
- Recommendation system surfacing harmful/illegal content
- Chatbot providing incorrect medical advice
- Classification model mislabeling sensitive demographic attributes
- Autonomous system failing safely under edge case conditions
- Generative model producing IP-infringing, toxic, or factually incorrect outputs
- Unexpected performance degradation due to concept drift or environmental changes

> **Best practice:** Enact a **single incident response framework** encompassing IT, cybersecurity, privacy, and AI-related incidents.

**Incident response lifecycle:**

| Step | Description |
|------|-------------|
| **1. Detection** | Identify anomalous/harmful behavior via monitoring, alerts, user reports |
| **2. Triage** | Assess severity, scope, potential impact |
| **3. Communication** | Inform internal and external stakeholders |
| **4. Investigation** | Determine root cause, including model and data lineage |
| **5. Containment** | Isolate or disable affected system/component; prevent spread |
| **6. Eradication** | Corrective actions: model retraining, data updates, policy changes |
| **7. Recovery** | Restore system to pre-incident state (with changes to prevent recurrence) |
| **8. After-Action Review (AAR)** | Root cause analysis for effective long-term fixes |
| **9. Documentation** | Update policies, logs, audit trails |

> **Case study:** A generative AI customer support assistant gave incorrect return instructions due to a prompt leak from a test environment. Triage identified the misrouted input stream. Model was suspended, retrained, and revalidated with updated input filters.

### Not All Incidents Are Failures

Some incidents stem from **misaligned objectives**, not bugs.

> **Example:** A model trained to maximize engagement may inadvertently promote sensationalist or polarizing content. Incident response must consider **intent vs. outcome**.

### Categorizing and Escalating Incidents

**Severity scale:**

| Level | Description |
|-------|-------------|
| **Level 1 — Critical** | Widespread harm, regulatory violation, or systemic failure |
| **Level 2 — Major** | Significant user impact or model breakdown in core function |
| **Level 3 — Moderate** | Isolated issue with limited exposure |
| **Level 4 — Minor** | No external impact; handled by internal monitoring |

**Escalation options for higher-severity incidents:**
- Executive notifications and periodic updates
- External regulator notification
- Legal hold of related artifacts
- Protection of records through attorney-client privilege
- Model suspension or rollback

> Automated workflows can be configured to trigger escalation rules based on incident metadata.

### Documenting Incidents, Issues, and Risks

> **Essential practice:** Document **all** events, incidents, issues, and risks — enables traceability, regulatory readiness, trend analysis, and proactive mitigation.

**Incident documentation fields:**
- Date/time of detection
- Detection source (monitoring system, user report, audit)
- System, service, or model affected
- Description of behavior and observed consequences
- Severity classification
- Immediate response actions taken (and by whom)
- Root cause and contributing factors
- Mitigation measures and verification steps
- Status and resolution date

> **Standardized taxonomies** (incident type, system component, harm type) facilitate analysis, cross-team understanding, metrics, and reporting.

**Bidirectional risk-incident linking:**
- When an incident reveals previously unconsidered risks → record in **risk register**
- Each incident should trace to relevant risks **already existing** in the register when the incident occurred

### Residual Risk After Remediation

Risks are rarely eliminated entirely. When documenting an incident, note:
- Whether the applied fix **reduces or eliminates** the risk
- Whether **residual risk** remains within acceptable thresholds

### Collaborating with Stakeholders to Understand Root Causes

Understanding AI incidents requires a **multidisciplinary approach**. Root causes may involve technical design, policy choices, and contextual misunderstandings.

**Common root causes of AI incidents:**

| Root Cause | Description |
|------------|-------------|
| **Model brittleness** | Inability to handle edge cases or unanticipated inputs |
| **Lack of robustness** | Small perturbations cause unpredictable outputs |
| **Insufficient/poor-quality training data** | Garbage in, garbage out |
| **Misaligned objectives** | Optimizing engagement vs. user safety |
| **Overreliance on automation / absent human oversight** | Inadequate human-in-the-loop |
| **Inadequate testing** | Especially under adversarial or real-world conditions |
| **Model or data drift** | Degradation over time |
| **Failures in prompt design** | For generative AI systems |

**Post-incident review stakeholders:**

| Stakeholder | Role in Review |
|-------------|---------------|
| **Data scientists** | Explain model behavior and training data lineage |
| **Software engineers** | Investigate system logs and integration layers |
| **Cybersecurity** | Understand/explain related vulnerabilities and threats |
| **Privacy** | Evaluate data subject rights failures |
| **Ethics and legal advisors** | Evaluate regulatory and societal impacts |
| **Operations staff** | Identify downstream business/customer effects |
| **End users** (where appropriate) | Provide contextual understanding of harm |
| **External experts** | Bring objectivity |

> **Case study:** Predictive maintenance model failed to flag a major component failure. Cross-functional review revealed the model was trained only on normal operating conditions, creating a blind spot for rare failure modes.

### Avoiding a Culture of Blame

> The goal of incident analysis is to **learn and improve**, not to identify and punish. Organizations that foster **psychological safety** in postmortem reviews encourage open sharing and process improvement.

### Transparency and Public Disclosures

Transparency is a foundational principle of AI governance — and increasingly a **regulatory requirement**.

**Disclosure triggers (vary by law and context):**
- High-risk AI system deployment
- Material performance degradation
- AI system safety failures
- Significant data breaches affecting AI inputs/outputs
- Inaccurate/misleading outputs affecting public health or safety
- System behavior outside intended use cases

**Regulations requiring transparency:**

| Regulation | Disclosure Requirements |
|------------|------------------------|
| **EU AI Act** | Technical documentation, usage instructions, user complaints, performance data, risks/remediation, post-market monitoring plans |
| **Canada AIDA** | Public disclosure of purpose and function for high-impact AI (not yet enacted) |
| **California CPRA / U.S. FTC** | Explain automated decision-making in specific contexts |
| **Brazil LGPD** | Right to explanation and review of AI-driven decisions |

**Disclosure audiences and tailoring:**

| Audience | Content |
|----------|---------|
| **Users and customers** | Simple, actionable explanations of what occurred and actions taken |
| **Regulators** | Technical documentation, timelines, impact assessments, remedial actions |
| **Partners and vendors** | System-level implications and interface updates |
| **Internal stakeholders** | Root cause analysis, revised policies, mitigation details, training updates |

**Proactive disclosure preparation:**
- Public statement and FAQ templates
- Timeline graphic templates
- Plain-language model behavior explanations
- Contact information for inquiries

> **Case study:** A social media company publicly disclosed that its content moderation AI failed to detect a widely disseminated hate speech campaign, triggering reputational damage and increased regulatory scrutiny.

### Organizational Preparedness and Readiness

**Incident response program components:**

| Component | Description |
|-----------|-------------|
| **AI Incident Response Plan (IRP)** | Standalone or (ideally) integrated with overall IT, cybersecurity, and privacy IRP |
| **Playbooks** | Common AI-related incident types |
| **Testing and simulation** | Response scenario exercises |
| **Integrated response** | Coordination with cybersecurity and legal teams |
| **Training programs** | Employee training on incident detection and reporting |

> **Simulation exercises** build "muscle memory" — a moderator guides responders through a developing incident scenario so they practice procedures before a real incident.

**Simulation scenarios:**
- Generative model outputs copyrighted material
- Predictive model fails due to drifted input feature
- Red teaming reveals security vulnerability in a foundation model
- Threat hunters find an outside attacker compromised an AI system
- A regulator requests all logs from a recent incident

> **Cybersecurity insurance:** Policies may stipulate specific terms for incident response, including controls like MFA, detailed audit logging, etc.

---

## Summary

AI risk management and assurance is foundational to responsible AI governance. Key takeaways:

1. **Risk categorization extends beyond traditional IT** — AI introduces risks in bias, drift, transparency, downstream harms, and third-party dependencies. Vendor agreements, licensing terms, data use restrictions, and liability clauses are critical to understand.

2. **Audits, red teaming, threat modeling, and security testing** form the assurance backbone — validating real-world functionality, exposing vulnerabilities, and ensuring confidentiality/integrity of training data, model weights, and deployment environments. Threat hunting proactively searches for indicators of compromise.

3. **Incident management and disclosure** require clear detection, triage, containment, and post-incident review. Root causes span brittle models, poor data, insufficient testing, and model drift. Documentation feeds back into risk registers; disclosures promote transparency and regulatory alignment.

> All practices should be considered an **overlay** to existing risk management, audit, and incident response programs.

---

## Key Takeaways

1. **AI risk must be assessed across the entire lifecycle, not just at deployment.** AI systems evolve through retraining, user interactions, and environmental changes. Robust risk management spans design, data collection, mid-stage validation/testing, and post-deployment monitoring/forecasting.

2. **Vendor and open-source AI components may obscure or introduce hidden contractual and technical risks.** Candidates should understand vendor vetting, agreement review/revision, transparency assessment, and alignment of licensing/support terms with risk tolerance and regulatory obligations.

3. **Auditing and testing AI models requires a blend of technical and adversarial methods.** Performance audits, red teaming, threat modeling, threat hunting, and security testing reveal vulnerabilities like bias, prompt injection, model poisoning, data leakage, and system misuse. Know when each is most appropriate.

4. **AI incident response must include documentation, cross-functional review, and feedback into governance processes.** Know the steps: detection → triage → communication → investigation → containment → eradication → recovery → post-incident review → documentation. Align with compliance and stakeholder expectations.

5. **Public disclosure of AI risks and incidents is increasingly required by law.** Frameworks like the EU AI Act and Canada's AIDA require transparency for high-risk systems. Understand disclosure obligations, audience-tailored communications, and supporting documentation artifacts.

---

## Key Terms

- **[[AI Risk Management]]** — Lifecycle process of identifying, forecasting, and mitigating AI-specific risks; an overlay to traditional ERM
- **[[Data Drift]]** — Shift in input data distribution over time, degrading model performance
- **[[Concept Drift]]** — Change in the statistical properties of the target variable, altering what the model predicts
- **[[Feedback Loop]]** — Self-reinforcing cycle where AI outputs influence the environment from which future training data is drawn
- **[[Secondary Use]]** — AI outputs applied to purposes different from original intent, often without institutional control
- **[[Downstream Harm]]** — Negative consequences felt by individuals/communities/systems not initially considered by developers or deployers
- **[[Red Teaming]]** — Structured adversarial simulation to identify vulnerabilities and misuse scenarios
- **[[Prompt Injection]]** — Attack that manipulates LLM behavior by embedding malicious instructions in user input
- **[[Jailbreak]]** — Technique to bypass an AI model's safety guardrails and content restrictions
- **[[Threat Modeling]]** — Systematic identification of AI-specific attack surfaces (model inversion, data poisoning, etc.)
- **[[MITRE ATLAS]]** — Knowledge base of adversarial tactics, techniques, and procedures against AI systems
- **[[Threat Hunting]]** — Proactive search for signs of intrusion, abuse, and indicators of compromise in AI systems
- **[[Membership Inference]]** — Attack determining whether specific data was used in model training
- **[[Model Extraction]]** — Reverse-engineering or copying a model through repeated queries
- **[[Data Poisoning]]** — Injecting corrupt data into training or fine-tuning pipelines to compromise model behavior
- **[[AI Incident]]** — Unexpected behavior/outcome involving AI that causes or could cause harm, disruption, or regulatory concern
- **[[After-Action Review (AAR)]]** — Post-incident root cause analysis enabling effective long-term fixes
- **[[Model Brittleness]]** — Inability of a model to handle edge cases or unanticipated inputs
- **[[Model Robustness]]** — Ability to maintain performance under perturbations, adversarial inputs, or distribution shifts
- **[[Post-Market Monitoring]]** — Ongoing surveillance of deployed AI systems for safety, performance, and compliance (required by EU AI Act)
- **[[Shadow Deployment]]** — Running a new model in parallel to production without affecting end users, for validation
- **[[Gate Model]]** — Staged approval checkpoints ensuring testing is complete before projects proceed to the next phase
- **[[Model Card]]** — Concise documentation describing model purpose, inputs, limitations, and evaluation results
- **[[System Card]]** — Broader documentation covering the entire AI system, including infrastructure and integration points
- **[[NIST AI RMF]]** — AI Risk Management Framework by NIST; structured approach to AI risk governance
- **[[ISO/IEC 42001]]** — International standard for AI Management Systems
- **[[TPRM]]** — Third-Party Risk Management; assessing and managing risks from vendor, open-source, and cloud AI dependencies
