---
tags:
 - aigp/domain-III
 - aigp/area
 - aigp/lifecycle
 - aigp/design
created: 2026-07-11
domain: "III: Understanding How to Govern AI Development"
subdomain: "III.A: Govern the Designing and Building of the AI Model"
related:
 - "[[AI Lifecycle Index]]"
 - "[[AI Standards and Frameworks]]"
 - "[[Data Governance and Model Training]]"
 - "[[AIGP Exam Questions]]"
---

# AI System Design

> **Domain III, Subdomains III.A, III.B, IV.A, IV.B** — Governing AI Development: Design, Data, Deployment, and Assessment

## Performance Indicators

- **Document the designing and building process** (for example, to establish compliance and manage risks).
- **Document the training and testing process** (for example, to validate results, establish compliance and manage risks).
- **Define the business context and use case** of the AI model.
- **Understand the context of the AI use case** (for example, business objectives, performance requirements, data availability, ethical considerations and workforce readiness).
- **Perform or review an impact assessment** on the AI model.
- **Apply the policies, procedures, best practices and ethical considerations** to designing and building the AI model (for example, purpose of AI, requirements gathering, architecture and model selection, human oversight, data analysis, metric and threshold evaluation, stakeholder engagement and feedback and operational controls).
- **Identify and manage the internal and external risks and contributing factors** related to designing and building the AI model (for example, using probability/severity harms matrix, using a risk mitigation hierarchy, stakeholder mapping, use case evaluation, benchmarking, pre-deployment pilots and testing).
- **Identify and understand issues that are unique to a company deploying its own proprietary AI model** (for example, increased obligations and higher potential liability).

---

> **Note on "Applicable Laws":** The official AIGP outline includes an item to "Identify laws that apply to the AI model." This topic is addressed in depth in Chapters 4 and 5. To avoid redundancy, this area focuses on the design process itself, assuming legal compliance is addressed in parallel through proper governance channels.

---

## 1. Documenting the Lifecycle

Documenting the AI system's lifecycle is essential for ensuring compliance, managing risks, promoting accountability, maintaining transparency, and ensuring operational continuity. Each stage of development introduces potential risks, governance obligations, and opportunities to embed trustworthy AI practices.

### 1.1 Documenting Requirements

Before design can begin, formally identify and capture the **requirements** of the proposed system. Management determines whether the system operates correctly by confirming whether it successfully fulfills each requirement.

Organizations with a mature system development lifecycle (SDLC) process will have established practices for documenting, reviewing, and baselining a requirements specification.

**Essential practices in requirements management:**

| Practice | Details |
|----------|---------|
| **Verifiability** | Each requirement must be verifiable, traceable, unambiguous, and measurable |
| **Categorization** | Security, privacy, UX, regulatory, operational, and established standards (OS, protocols, tools) |
| **Functional requirements** | Describe the AI system's functions |
| **Technical (non-functional) requirements** | Performance, scalability, security, privacy, usability, resilience |
| **Regulatory requirements** | Functions and characteristics required by specific regulations |
| **Security requirements** | Functions that protect the AI system and associated data |
| **Source tracking** | Record source, owner, priority, and rationale for each requirement |
| **Data governance** | Consent, lawful basis, PII handling, lineage, retention, deletion |
| **Evaluation metrics** | Define metrics with thresholds (accuracy, calibration, latency, cost per inference) |
| **Criticality weighting** | Include the criticality or weighting of each requirement |
| **Approval** | Final set of requirements should be approved by management |

> **Tip:** Stakeholders with organizational influence may dominate the requirements-setting process. Counterbalance by explicitly incorporating feedback from marginalized or impacted groups. Document who provided each requirement, along with its criticality.

### 1.2 Documenting the Designing and Building Process

Documentation for an AI system has two dimensions:
1. A detailed description of the **design and build process** (documented once, periodically revised)
2. A detailed description of the **design of the AI system** (documented per system)

#### Documentation in the Design Phase

Design documentation creates a business record of intent, key decisions, and helps align system features with business and regulatory goals. In SDLC/AI governance circles, this is known as a "design baseline" or "design artifact."

**Key elements to capture in design documentation:**

| Element | Description |
|---------|-------------|
| **System purpose and scope** | Primary functions, decision-making roles, context of use |
| **Stakeholders and roles** | Who will be affected by or interact with the system; who builds, operates, and maintains it |
| **Ethical and regulatory considerations** | Alignment with fairness, transparency, accountability, privacy, robustness, compliance |
| **System boundaries and interfaces** | What the system will/will not do, interfaces with other systems, human oversight expectations |
| **Data and model design** | Data sources, quality criteria, labeling strategies, model selection rationale, target performance, explainability constraints |
| **Risk and lifecycle management** | Foreseeable risks, misuse cases, safety constraints, fallback mechanisms, monitoring, retraining, retirement plans |

**Minimum Viable Documentation for AI Design:**
- Problem statement (as defined by the business, not developers)
- Governance and compliance context
- Intended users and use cases
- Assumptions and constraints
- System inputs and outputs
- Training data to be used
- Initial risk analysis
- High-level model or architectural design

#### Documentation in the Development Phase

The development phase transitions requirements and design into code and hardware.

**Artifacts to develop:**

| Artifact | Description |
|----------|-------------|
| **Model cards and system cards** | Essential AI-specific artifacts detailing characteristics, intended use cases, limitations, ethical considerations, performance |
| **Architecture diagrams** | High-level and detailed visuals of system components and interactions, with version control |
| **Code and model repositories** | Proper security, source control, branches, change history, contributor records |
| **Tooling and dependencies** | Software libraries, cloud services, frameworks — critical for debugging, patching, future maintenance |
| **Security considerations** | Sandboxing, secure enclaves, vulnerability scanning; artifacts in official business record repositories |

### 1.3 Documenting the Training and Testing Process

Once architecture is finalized and approved, model training, validation, and testing begin — critical stages for refining performance, detecting bias, and validating outputs.

#### Training Documentation

**Training documentation should include:**

| Element | Details |
|---------|---------|
| **Training data sources and characteristics** | All data sources, exclusions, embellishments, filtering, populations represented; data should be archived and immutable |
| **Labeling process and quality assurance** | How labels were assigned and verified (for supervised learning) |
| **Model training configuration** | Hyperparameters, batch size, epoch count, optimization strategy, evaluation metrics and results |
| **Model performance benchmarks** | Baseline performance, ongoing metrics, information supporting selected thresholds |
| **Bias detection and mitigation** | Fairness assessments, de-biasing techniques, tradeoffs |
| **Testing outcomes** | Robustness, generalization, privacy/security test results |

> **Regulatory Expectations for Training Logs:** Under the EU AI Act and other frameworks, training documentation should support: comprehensive documentation sufficient to reproduce the design and development effort, explanation of design rationale, long-term auditability, and evidence of risk mitigation.

#### Testing and Validation Documentation

Testing reveals a model's reliability and safety. Testing documentation should include:

| Element | Details |
|---------|---------|
| **Testing methodology** | Types of tests run (unit, integration, performance, adversarial, etc.); NIST ARIA guidance (see [[AI Standards and Frameworks]]) |
| **Test data description** | Whether test data was withheld from training set; whether it represents real-world conditions |
| **Test results** | Accuracy, false positives/negatives, precision/recall, other metrics |
| **Stress testing and edge case analysis** | Boundary conditions, adversarial examples, inputs/outputs outside expected norms |
| **Failure modes and responses** | Known weaknesses, system behavior upon failure |
| **User testing and feedback** | How usability and human-AI interaction were evaluated |

> **Testing for Trust:** Trustworthy AI requires more than high accuracy. Testing should answer: Does the system fail gracefully? Can outputs be explained or justified? Are error patterns acceptable under ethical and legal standards?

### 1.4 Maintaining Traceability and Audit Readiness

Thorough documentation enables organizations to trace AI behaviors back to their origin — crucial for audits, public inquiries, or litigation.

#### Version Control and Change Management

- Maintain linked **version control** across code, data, and documentation
- Require peer review and formal approval for key changes
- Ensure requirements are linked to design elements, test plans, and test results
- Capture not just decisions but the rationales and outcomes
- Tag releases with associated risk assessments or approvals

#### Explainability and Documentation Artifacts

Artifacts to create and preserve:
- Annotated decision flows or diagrams
- **Feature importance** summaries
- Case-level justifications or reversals
- Human-in-the-loop (HITL) escalation paths and results
- Model and system cards

#### Integration with Broader Governance Frameworks

AI system documentation should connect to broader organizational governance systems:
- Risk management
- Model inventories
- Incident response
- Ethical review board proceedings

Aligning documentation with internal controls helps make governance more repeatable, auditable, and defensible.

---

## 2. Business Context and Use Cases

An AI system's effectiveness depends on both its technical performance and whether it effectively serves its intended business purpose. Defining the business context and specific use case is a foundational step — must be formally completed **before** finalizing requirements, design, and development.

### 2.1 Defining the Business Context

**Business context** defines the organizational, strategic, and operational environment in which an AI system will be used. A **business case** is a statement of the expected benefits to the organization from developing an AI system.

#### Understanding Organizational Objectives

Every AI project should begin with clearly articulated business objectives.

**Key considerations:**
- The problem that the AI system is intended to solve
- Expected success metrics from a business perspective
- How the system will support broader organizational goals

#### Organizational Readiness and Governance

Before starting development, assess ability to support and operate the AI system:

| Readiness Factor | Considerations |
|------------------|----------------|
| **Leadership** | Leadership support and ongoing budget commitment |
| **Data governance** | Data governance maturity |
| **Security/privacy** | Cybersecurity and privacy maturity |
| **Risk culture** | Risk tolerance and ethical culture |
| **Expertise** | Availability of cross-functional expertise (legal, IT, data science, operations, cybersecurity, privacy) |

> **AI Project Risk Scoring:** Some organizations assign risk tiers to AI projects during planning. A high-impact, customer-facing model may require stronger documentation, pre-deployment review, and executive sponsorship than a low-risk internal tool. Risk tiers defined in the EU AI Act (covered in [[Global AI Regulatory Landscape]]) are a good starting point.

#### Stakeholder Identification and Engagement

Understanding who will interact with, benefit from, or be affected by an AI system is essential.

**Stakeholders generally include:**
- Business sponsors (usually senior executives)
- System developers and data scientists
- Legal and compliance teams
- Cybersecurity and privacy teams
- Data governance
- Regulators and external auditors
- End users and customers
- Individuals indirectly impacted by decisions (e.g., rejected applicants)

### 2.2 Articulating the AI Use Case

A well-defined **use case** translates the business context into a high-level specification for an AI application. It describes how the system will operate, what data it will use, and what outcomes it is expected to deliver.

#### Defining the Scope and Boundaries

Clear definitions help avoid scope creep, mismatched expectations, and unmanageable risk.

| Scope Element | Description |
|---------------|-------------|
| **Intended function** | Classification, prediction, assistance, recommendation |
| **Intended users and environments** | Who and where |
| **Assumptions and constraints** | Data sources, infrastructure, regulatory constraints |
| **Decision authority** | Whether the system acts autonomously or with a human in the loop |
| **Expected lifetime, workload, frequency** | System lifespan and usage patterns |

#### Defining Success Metrics

The lack of clear metrics introduces the risk that an organization will optimize for the wrong outcomes. Metrics should be aligned with business goals, realistic given available data, and sensitive to unintended consequences.

| Use Case | Example Metrics |
|----------|----------------|
| **Fraud detection** | Reduction in undetected fraud, false positive rate |
| **Chatbot efficiency** | Resolution time, escalation rate, customer satisfaction |
| **Hiring tools** | Quality of hire, time to fill, bias across protected classes |

> **Metric Pitfalls:** Relying too heavily on precision can lead to an increase in false negatives. Optimizing for efficiency might reduce transparency. Always weigh tradeoffs.

### 2.3 Assessing Data Availability and Suitability

The failure of many AI projects is not due to flawed models or designs but rather to poor data availability or misalignment between data and business objective. Data suitability should be finalized **before** development efforts begin.

#### Inventorying Available Data

Organizations must assess what data they already have, where it resides, and how it was collected. Data must be evaluated for completeness, accuracy, consistency, and label availability (for supervised learning).

> **Data Governance Is a Key Prerequisite:** Organizations lacking mature data governance policies, practices, and tools will be at a decided disadvantage, as they will have only partial awareness of their data inventory and management processes.

#### Legal and Ethical Constraints on Data Use

Even if suitable training data exists, there may be legal or ethical reasons it cannot be used:
- Data collected for one purpose reused by the AI system without subject consent
- Inclusion of sensitive attributes (race, health, religious affiliation)
- Inferences about individuals that may violate privacy expectations

> **Business Impact of GDPR Article 5(1)(b):** The "purpose limitation" in the GDPR can prevent organizations from using historical data for training, unless a new lawful basis for processing can be established.

#### Data Readiness for Deployment

Organizations need to assess whether the data ecosystem can support ongoing data needs:
- Whether the data pipeline is stable and scalable
- Whether the model will be fed new, updated data over time
- Whether real-time inference can be supported, if required
- Whether monitoring is in place to detect data drift or degradation
- Whether continuous data ingestion complies with privacy, security, and access-control requirements

### 2.4 Ethical and Operational Considerations

A use case that is feasible and valuable may still raise ethical or operational red flags.

#### Risk of Harm and Ethical Tradeoffs

Common areas of concern:
- Use of AI in criminal justice, housing, hiring, education, or credit
- Reinforcement of historical bias
- Opacity in high-stakes decisions
- Algorithmic manipulation of behavior (e.g., addiction loops in social media)

#### Human Oversight and Decision Rights

Every AI system that makes business decisions should be designed as part of a human-centric decision-making process.

**Consider:**
- What decisions can AI make autonomously?
- When must humans be involved in decisions?
- How are overrides or appeals handled?
- Is the human oversight role well-defined and resourced?
- Are there sufficient business records to defend decisions?

**RACI Matrix for AI Oversight:**

| Role | Assigned To |
|------|-------------|
| **Responsible** | Data science lead |
| **Accountable** | C-level product owner |
| **Consulted** | Legal and ethics committee, privacy officers, security officers, risk managers |
| **Informed** | Frontline managers |

#### Workforce Readiness and Culture

AI systems change workflows, roles, job requirements, and organizational culture. Consider:
- Whether impacted teams have been consulted and their feedback heard
- Whether reskilling or new hiring is needed
- Whether job aids, support systems, and escalation paths are in place
- Whether regular employee engagement indicates changes in morale

#### Alignment with Organizational Values and Strategy

Even technically excellent and legally sound AI systems may not align with brand identity, reputation, or public commitments:
- Does the system contradict public statements or corporate objectives?
- Will it erode trust with customers or partners?
- Could it introduce reputational risk disproportionate to its value?
- Will staff see the project as consistent with company values, or could it trigger internal pushback?

---

## 3. Impact Assessments

Impact assessments are a cornerstone of responsible AI governance. Whether required by regulation or driven by internal policy, impact assessments help organizations anticipate, measure, and mitigate the potential consequences of deploying AI systems **prior to deployment**.

### 3.1 Understanding AI Impact Assessments

The primary goal of an **AI impact assessment (AIIA)** is to identify and manage potential harms or unintended consequences before deployment — discrimination, lack of transparency, safety failures, excessive surveillance, or harm to fundamental rights.

When documented as a repeatable process, impact assessments:
- Provide a consistent method for risk identification
- Encourage transparency and accountability
- Serve as documentation for internal governance and regulatory compliance
- Help improve stakeholder trust and public acceptance

#### Legal and Regulatory Drivers

| Framework | Requirement |
|-----------|-------------|
| **EU AI Act** | Article 6 requires "conformity assessments" and documentation for high-risk AI systems |
| **Canada's DADM** | Article 6.1 requires Algorithmic Impact Assessments (AIA) for AI decision-making systems |
| **California CPRA (and similar)** | Grants regulators authority to require risk assessments for automated decision-making |
| **OECD and G7 principles** | Encourage impact assessments as a best practice |

> **Not All Risk Assessments Are Equal:** Cybersecurity, data protection, and AI impact assessments may overlap but each focuses on different domains of risk. Aligning them can streamline governance and reduce redundancy.

#### When and How Often to Conduct Assessments

AI impact assessments should be performed:
- During the design phase **prior to deployment**
- Whenever **significant changes** are made to the model or its data
- In response to **incidents**
- High-risk systems should be assessed **regularly**

### 3.2 Preparing for an Impact Assessment

#### Define the Assessment Scope

The scope of an assessment ensures it stays focused and aligns with the AI system's intended use:

- System description and functionality
- Business context
- Use cases (for AI systems with more than one)
- Users and affected populations
- Geographic and legal jurisdiction(s)
- Level of autonomy and human oversight in supported business processes
- Assumptions, constraints, and exclusions

#### Identify Stakeholders

Assessment participants may include:
- Project sponsors and product owners
- Developers and data scientists
- Legal, security, compliance, and privacy officers
- Domain experts (ethics, DEI, accessibility)
- Representatives of impacted groups, if feasible
- External stakeholders (advisors, consultants, vendors, members of the public)

#### Inventory Required Information

Before an impact assessment can proceed, assemble:
- Organizational documentation (policies, processes, code of ethics)
- System documentation (design, functionality, requirements, intended use)
- Applicable laws, regulations, and other legal obligations
- Stakeholders (users, operators, affected parties)
- Data flows, sources, provenance, and types
- Model performance metrics and known limitations
- User experience details
- Previous incidents or public concerns in similar domains

### 3.3 Conducting an Impact Assessment

The impact assessment process involves identifying potential harms, evaluating risks, documenting mitigations, and capturing residual concerns.

#### Identify Potential Impacts

Map where and how the AI system might create risk or harm:

| Area of Impact | Examples |
|----------------|----------|
| **Privacy and surveillance** | Unauthorized data collection, tracking |
| **IP/data theft** | Theft of intellectual property or privacy data |
| **Discrimination and bias** | Unfair treatment of protected groups |
| **Freedom of expression/association** | Censorship, chilling effects |
| **Autonomy and human dignity** | Reduction of human agency |
| **Psychological harm** | Manipulation, addiction loops |
| **Access to rights/opportunities** | Denial of services, credit, employment |
| **Environmental impact** | Energy consumption, resource use |

#### Evaluate Risk Likelihood and Severity

For each impact identified, assess:

| Factor | Question |
|--------|----------|
| **Likelihood** | Probability of the impact |
| **Severity** | Level of harm to individuals or groups |
| **Scope** | Number of people affected |
| **Reversibility** | Whether harm can be undone |

Scoring tools, such as **risk matrices or heat maps**, can help prioritize identified risks.

#### Analyze Discrimination and Fairness Risks

AI systems can discriminate even when protected attributes (race, gender) are excluded from training data. Proxy variables or historical biases embedded in training data can still produce discriminatory outputs.

**Assessment considerations:**
- Whether the system disproportionately affects protected groups
- Whether fairness metrics are analyzed
- Whether proxy variables or historical biases were embedded in training data

> **Key insight:** Even neutral input data may produce discriminatory outputs if AI systems are trained on biased historical patterns. Assess **outcomes**, not just features.

#### Assess Explainability and Transparency

If stakeholders can't understand how or why an AI system makes specific decisions, the organization may suffer trust and accountability concerns.

**Consider:**
- Whether end users can understand how the system works
- Whether decisions can be explained to affected individuals
- Whether documentation is available to regulators or auditors

#### Review Human Oversight Mechanisms

Determine whether the system provides for effective human intervention:

| Question | Assessment |
|----------|------------|
| Are humans "in the loop" or "out of the loop"? | Level of human involvement |
| Can decisions be reviewed, appealed, or reversed? | Recourse mechanisms |
| Are personnel trained and empowered to override outputs? | Authority and capability |
| Are decision overrides guided by policy and documented? | Process formalization |

> **Oversight Isn't Just a Checkbox:** A human reviewer must have time to intervene, the authority to override, and visibility into how decisions were made. Oversight must be a standard business process, not an incident-driven activity.

#### Document Mitigation Strategies

When an AIIA identifies risks, each should be documented, analyzed, and accompanied by a mitigation plan.

**Examples of risk mitigation:**
- Removal of sensitive features or proxy variables
- Applying fairness-aware algorithms, adversarial debiasing, or explainability techniques
- Addition of user consent or opt-out mechanisms
- Regular audits or bias testing
- Escalation of high-risk decisions to human reviewers

> **Risk acceptance:** Like mainstream risk management, some risks may be accepted. All instances of risk acceptance should be documented, including the party that approved the risk. **Residual risks** should also be documented, along with any accepted tradeoffs.

### 3.4 Reviewing and Operationalizing the Assessment

An impact assessment is valuable only if its findings are reviewed, acted upon, and integrated into broader AI and risk governance.

#### Internal Review and Signoff

Assessments should be reviewed by individuals or committees with governance authority:
- Legal and regulatory compliance check
- Risk acceptance or escalation process
- Ethics review (if applicable)
- Executive or board-level endorsement for high-risk systems

> AI system risk tiering should be extended to AIIAs, considering how frequently and rigorously they are performed, as well as the level of management required to review and approve them.

#### Integration with Development and Deployment

Findings from the impact assessment must feed into development and deployment processes:
- Changes to model features or training data
- Adjustments to user interfaces for better explainability
- Revisions of deployment timelines or rollout strategies
- Additions of new monitoring or alerting mechanisms

#### External Transparency and Accountability

Depending on regulatory context and contractual obligations, organizations may be required to publish results or summaries:

| Method | Example |
|--------|---------|
| **Public summaries** | Canada's Algorithmic Impact Assessments |
| **Submission to regulatory bodies** | Under the EU AI Act |
| **Stakeholder briefings** | Community consultations |

> **What Not to Publish:** Organizations should refrain from publishing proprietary model architectures, protected data, or excessive details in the AIIA that could be exploited by others.

#### Continuous Reassessment

AIAs should be revisited when:
- AI models are retrained or redeployed
- New data sources are added
- Data filtering techniques are changed
- Use cases or environments change
- New risks emerge in the field
- New regulations are enacted

---

## 4. AI System Design Considerations

Designing an AI system is a multidimensional process integrating ethical reasoning, regulatory constraints, stakeholder engagement, and operational foresight.

### 4.1 Defining the Purpose and Framing the Problem

Design begins with intentionality and clarity. When success is defined in advance, designers have a clearer idea of how to get there.

**Key questions:**
- What business or operational problem does the system aim to solve?
- Is AI the appropriate tool for this problem?
- What are the intended and unintended outcomes?

> The design phase is the **final opportunity to question everything** before the system is built. AI systems often fail because the business problem was misframed or embedded assumptions were not validated.

### 4.2 Architecture and Model Selection

Organizations must consider not just the design of the AI model but the **full architecture**: how components interact, how data flows, and how results are delivered. Mature organizations often develop both a **logical architecture** and a **physical architecture**.

#### Designing for Modularity and Traceability

Modular architectures support scalability, troubleshooting, model updates, and explainability:

| Practice | Benefit |
|----------|---------|
| Separate data ingestion, model inference, and output rendering | Independent testing of each component |
| Log internal system decisions and state transitions | Debugging and auditability |
| Document all module- and system-level interfaces | Integration clarity |
| Track versions of data pipelines, models, and dependencies | Reproducibility and rollback |
| Assign ownership and change-approval responsibilities | Accountability |

#### Choosing the Right Model Type

The AI model should be fit to effectively address the business problem's complexity, interpretability needs, and data environment.

**Considerations:**
- High-stakes decisions may demand simpler, explainable models
- Resource-constrained environments may favor lightweight or cloud-based models
- Proprietary vs. open-source choices may affect transparency

> **Avoiding "Model Envy":** The latest deep learning model may not be the right fit. Simpler models can outperform complex ones when data is structured, features are well-defined, and explainability is crucial.

**Model Selection Tradeoffs:**

| Tradeoff | Tension |
|----------|---------|
| Accuracy vs. interpretability | Higher accuracy often means lower explainability |
| Speed vs. cost | Faster inference may cost more |
| Fairness vs. personalization | More personalization can introduce bias |
| Data volume vs. privacy | More data improves performance but increases privacy risk |
| Data volume vs. security | More data increases attack surface |
| Risk minimization vs. innovation | Conservative choices may limit capabilities |

### 4.3 Human Oversight and Feedback Loops

AI systems in socio-technical environments require human intervention.

#### Designing Human-in-the-Loop Processes

Determine the role humans play and at what stage(s) in the workflow:

| Role | Description |
|------|-------------|
| **Approver** | Worker must sign off on AI output before action commences |
| **Reviewer** | Worker reviews audit system output periodically |
| **Escalation point** | System or affected party flags uncertain cases for human review |

#### Designing for Usability and Understanding

Human oversight is only effective if they understand what the system is doing:
- Use clear language, not black box scores
- Provide clear, contextual explanations
- Allow easy overrides with rationale logging

#### Feedback Integration

Seek feedback from users via:
- Online surveys
- Focus groups
- Explicit feedback ("This decision was incorrect")
- Implicit signals (user overrides, workflow abandonment)
- Formal review cycles with business stakeholders

> Feedback should trigger retraining, bug fixes, or policy review — not just be logged and ignored.

### 4.4 Metrics, Thresholds, and Controls

Design decisions determine how success and failure can be measured.

#### Metric Selection

Different problems require different metrics. Poorly chosen metrics can lead to unintended behavior or the organization being unaware of significant developments.

> **Further reading:** *How to Measure Anything in Cybersecurity Risk*, 2nd Edition; *Operational Risk: Measurement and Modelling*; *Key Performance Indicators: Developing, Implementing, and Using Winning KPIs*, 4th Edition.

#### Threshold Setting and Adjustment

Thresholds must be aligned with risk tolerance, regulatory requirements, and ethical norms:
- Calibrate thresholds based on business impact and harm potential
- Require formal approval for threshold changes
- Document rationale for chosen settings

#### Operational Controls

Implement AI-specific controls as part of responsible AI use:

| Control | Purpose |
|---------|---------|
| Alerting for unusual model behavior | Anomaly detection |
| Failsafe defaults | Deny by default |
| **Shadow mode** deployment | Test before production |
| "Kill switch" | Disable faulty models |

> **Controls in the EU AI Act:** High-risk AI systems must include human oversight mechanisms, logging, and post-deployment monitoring — all of which depend on decisions made during the design phase.

---

## 5. Identifying and Managing Design Risks

AI system design introduces unique risks — some inherited from traditional software development, others stemming from the probabilistic and adaptive nature of machine learning. These risks can manifest **internally** (design flaws, poor data quality, integration failures) or **externally** (misuse, bias, systemic harm).

### 5.1 Framing AI Design Risk

Unlike deterministic systems, AI systems introduce **nondeterminism**, **opacity**, and **emergent behavior**, complicating risk identification:

| AI-Specific Risk | Description |
|------------------|-------------|
| Unpredictable behavior | Unexpected outputs on unseen data conditions |
| Difficulty tracing decisions | Cannot trace outputs to specific inputs or logic |
| Bias embedded in training data | Particularly by proxy variables |
| Drift in model behavior | Degradation over time |
| Overreliance on automation | Without proper oversight |

#### Distinguishing Between Internal and External Risk Sources

**Internal risks** (within the organization, in its control):

| Risk | Description |
|------|-------------|
| Faulty assumptions | Misframed problems |
| Inadequate documentation | Gaps in records |
| Inadequate training data | Poor quality or insufficient data |
| Poor integration | System interface failures |
| Incomplete testing | Gaps in validation |
| Model performance gaps | Below-threshold performance |
| Lack of explainability/transparency | Opaque decision-making |
| Inadequate monitoring | No drift or misuse detection |

**External risks** (outside the organization, largely out of its control):

| Risk | Description |
|------|-------------|
| Adversarial use and cyberattacks | Malicious exploitation |
| Legal or regulatory changes | New compliance obligations |
| Supply chain risks and breaches | Third-party vulnerabilities |
| Cultural backlash or ethical misalignment | Public rejection |
| User misuse or automation complacency | Improper use by operators |

> **Internal ≠ Controllable:** Even though the organization creates internal risks, they are not always entirely within its control — especially when using third-party components or pretrained models.

### 5.2 Systematic Risk Identification Techniques

#### Risk Matrix (Probability/Severity)

One of the most widely used tools in risk management — prioritizes risks based on probability of occurrence and potential impact/harm.

**Typical Risk Matrix:**

| Severity / Probability | Low Probability | Medium Probability | High Probability |
|------------------------|-----------------|---------------------|-------------------|
| **Low severity** | Monitor | Low priority | Medium priority |
| **Medium severity** | Low priority | Medium priority | High priority |
| **High severity** | Medium priority | High priority | Critical |

> A medical imaging AI model with low probability of misclassifying rare conditions but high severity when it does may require layered oversight even if errors are rare.

#### Risk Mitigation Hierarchy

A hierarchy-based approach prioritizes interventions from most to least effective:

| Tier | Strategy | Example |
|------|----------|---------|
| 1 | **Eliminate the risk** | Don't use AI in high-risk contexts |
| 2 | **Substitute with lower-risk design** | Use simpler, interpretable models |
| 3 | **Engineer safeguards** | Confidence thresholds, HITL controls |
| 4 | **Warn and train users** | Interpretability dashboards |
| 5 | **Accept with monitoring** | Audit logs, post-market review |

> **Tradeoffs in the Real World:** Elimination or substitution are ideal concepts but often impractical due to business demands. Risk mitigation in AI frequently involves strategic layering of controls. Risk treatment is a component of risk management — discussed at length in CISM and CRISC certification materials.

#### Stakeholder Mapping and Risk Perception

Different stakeholders perceive risk differently. Mapping roles, incentives, and exposure helps identify overlooked risk vectors.

| Stakeholder | Risk Concerns |
|-------------|---------------|
| **Users** | Error, confusion, overreliance, hallucination |
| **Subjects** | Unfair decisions, privacy harm |
| **Operators** | Workload mismatch, liability, costs |
| **Regulators** | Non-compliance, lack of transparency |
| **Public** | Reputational or ethical concerns |

### 5.3 Use Case Evaluation and Scenario Planning

The specific use case and environment significantly influence the types and severity of design risks.

#### Use Case Classification and Risk Profiling

The frequency and rigor of risk assessments should be proportionate to the level of risk.

**Factors to consider:**
- Decision impact (low, medium, high)
- User exposure (internal vs. external)
- Affected rights or opportunities
- Automation level (advisory vs. autonomous)
- Regulation (e.g., EU AI Act, privacy laws)
- Contextual factors (cultural norms, societal scrutiny, prior incidents)

> An AI used for Netflix recommendations may warrant lighter-touch risk controls than one used for unemployment eligibility decisions.

#### Scenario Planning and Adverse Events

Techniques:
- **Red teaming** and adversarial testing
- **"Premortem" exercises** — envisioning failure and tracing causes
- Misuse and attack role-play with diverse personas

#### Benchmarking and Comparative Risk Analysis

Compare planned AI systems to existing benchmarks or similar implementations:
- Academic benchmarks: ImageNet, GLUE
- Peer organizations using similar AI systems

> Benchmarking helps inform design and can also help defend decisions during audits or litigation.

### 5.4 Testing, Piloting, and Validation

AI system testing is not a single event — it is a **design tool** conducted in stages throughout the development cycle.

| Testing Stage | Description |
|---------------|-------------|
| **Unit testing** | Individual components tested in isolation |
| **Pre-deployment pilots** | Limited release to "friendly" users for readiness testing; define success/failure criteria; include diverse users; plan post-pilot review |
| **Shadow mode testing** | Integrate into existing processes to capture and analyze outputs (similar to parallel testing in IT DR planning); obtain live performance data; verify integrations |
| **Stress testing and red teaming** | Out-of-distribution data; adversarial inputs; simulated outages; drift simulations; threat modeling (common in cybersecurity) |

### 5.5 Risk Governance Integration

Design-phase risk management must connect to the organization's broader risk and compliance infrastructure.

#### Alignment with Enterprise Risk Frameworks

Track AI design risks in the same systems and formats used for other operational risks:
- Single risk register
- Common scoring rubrics
- Assignment of risk ownership
- Escalation paths

#### Documenting Residual Risk and Justifications

Not all risks can be eliminated. **Residual risk** — the "leftover" risk after mitigation — should be documented. If the magnitude of residual risk is great enough, it should be treated as yet another risk, analyzed, and a decision made on what to do about it.

> **Don't Hide Residual Risk:** Regulators and stakeholders are often more concerned with undisclosed risks than with the existence of risk itself. Transparency builds trust.

#### Preparing for Post-deployment Risk Monitoring

Risk assessments are equally necessary throughout the AI system's service life. Design risk controls must extend beyond deployment:
- Drift detection
- Retraining thresholds
- Monitoring dashboards
- Incident response workflows
- Feedback loops from users or regulators

---

## 6. Proprietary Model Considerations

An organization that develops and deploys a proprietary AI model enjoys greater control but also must accept greater responsibility. Unlike third-party AI solutions, proprietary models involve **end-to-end ownership** of requirements, design, training, deployment, and all operational and legal outcomes.

### 6.1 Ownership and Accountability

Organizations that create proprietary AI models are accountable for the entire model lifecycle:

| Responsibility | Description |
|----------------|-------------|
| Ethical alignment and governance | Values-based design |
| Data sourcing and legality | Lawful basis for all data |
| Staffing | Design, build, and operate the model |
| Performance and fairness | Measurement and maintenance |
| Transparency and documentation | For audits, legal proceedings |
| Post-deployment behavior | Monitoring and correction |
| System disposal | End-of-life management |

> **Accountability cannot be outsourced.** Even if an organization uses a third-party AI system, it must still accept a considerable share of accountability — the organization vetted and selected the third party.

#### Legal Liability and Civil Exposure

Proprietary models can increase exposure to civil and regulatory liability — there is simply no one else to blame.

**Sources of risk:**
- Algorithmic bias or discrimination
- Security vulnerabilities
- Decisions affecting protected rights (housing, employment, credit)
- Failure to meet industry-specific legal obligations
- Deficiencies in explainability or documentation

> **The EU AI Act and Proprietary Models:** Developers of high-risk proprietary models face stricter obligations including conformity assessments, technical documentation, logging and traceability, quality management, human oversight mechanisms, and incident reporting. In many cases, these cannot be delegated.

#### Regulatory Classification as "Provider"

Under frameworks such as the EU AI Act, an organization that develops and deploys its own AI model is typically considered the **"provider"** (not just the "deployer"). This shifts the burden of compliance upstream.

**Responsibilities as a provider:**

| Responsibility | Description |
|----------------|-------------|
| Performing risk classification | Determine risk tier |
| Conducting impact assessments | Document harms and mitigations |
| Maintaining documentation | Comprehensive records |
| Ensuring cybersecurity and robustness | Security controls |
| Providing disclosures and notices | Transparency obligations |

### 6.2 Data Rights, Quality, and Governance

Data is foundational to every proprietary AI model. Organizations must assume full control and legal authority over the data they use.

#### Data Sourcing and Legal Entitlement

Using internal or scraped data without a proper legal basis can expose the company to significant risk. Organizations should:
- Ensure data is collected with appropriate consent
- Ensure usage rights include AI training
- Document the lawful basis for its use

> **Internal Data ≠ Safe Data:** Just because data is held internally doesn't mean it's legally usable. Repurposing data without proper notice or consent may violate data minimization and purpose limitation principles.

#### Data Quality and Labeling Integrity

Low-quality or biased data can undermine performance and increase risk.

**Data-related controls:**
- Enforce data validation
- Document labeling methodology and **inter-rater reliability**
- Log data transformations and preprocessing steps

#### Data Governance Integration

Essential practices:
- Defining AI-specific data stewards
- Tagging training and validation datasets in data catalogs
- Applying data retention and deletion policies
- Aligning with broader data ethics frameworks

### 6.3 Model Explainability, Testing, and Monitoring

Proprietary models must be explainable to users, defendable to regulators, and maintainable over time.

#### Explainability Obligations

Many regulatory frameworks (GDPR, CPRA, EU AI Act) require that automated decisions affecting individuals be explainable.

**Approaches for explainability:**

| Approach | Description |
|----------|-------------|
| Inherently interpretable models | Decision trees, linear models |
| Post hoc explanations | SHAP, LIME |
| Counterfactual reasoning | Case-based explanations |
| User-facing justifications | Plain, friendly, defendable language |

#### Testing and Validation Requirements

Unlike third-party systems, organizations developing proprietary models must rely on internal teams.

**Testing regimes should include:**
- Bias audits across protected attributes
- Performance validation on real-world scenarios
- Adversarial robustness testing (red teaming)
- Human-in-the-loop failover testing

#### Monitoring and Change Control

Proprietary models require ongoing **incident management** and a formal **change management** process. The entire practice of **IT service management** (including change and incident management) is essential.

**Monitoring practices:**

| Practice | Description |
|----------|-------------|
| Alert thresholds | Performance degradation |
| Input/output logging | Traceability |
| Drift detection | Data drift monitoring |
| Regular retraining | Model updates |

**Change control practices:**
- Formal written change requests with stated business reasons
- Approvals by stakeholders
- Approved implementation and backout plans
- **Configuration management** tools to record change details

> **ISO Certification for IT Service Management:** Organizations may wish to pursue **ISO/IEC 20000** certification to attest to their IT service management. Note that ISO/IEC 20000 is not AI-specific but applies generally to IT.

### 6.4 Intellectual Property and Competitive Risk

Proprietary AI models may provide strategic advantages but also introduce new risks around **intellectual property (IP)**, secrecy, and potential **reverse engineering** or misuse.

#### IP Ownership and Protectability

Organizations should maintain an accurate catalog of their intellectual property.

**Steps to consider:**
- Whether the AI model was developed in-house, or through contractors/consultants
- Whether the training data is proprietary, licensed, or open-source
- Whether model weights and code are documented and secured
- Whether trade secrets are adequately protected

> **Patents vs. Trade Secrets:** AI models are often protected as trade secrets rather than patented, especially when model transparency might expose security or privacy vulnerabilities. This approach limits legal remedies in some cases.

#### Reverse Engineering and Model Theft

Proprietary AI models may be vulnerable to reverse engineering by competitors or malicious actors. In-house developed systems are often less resilient than those produced by commercial software vendors.

**Mitigation strategies:**

| Strategy | Description |
|----------|-------------|
| Model APIs only | Deploy only APIs, not source code |
| Robust access control | On all APIs |
| Authentication, encryption, obfuscation | For model artifacts and API traffic |
| Monitor for unauthorized access | Abuse and attack detection |
| Red team and threat model | Often |
| Audit usage logs | Rate-limit queries |
| Privacy-preserving techniques | Differential privacy, response randomization, output watermarking |

#### Model Misuse and Access Control

Robust access control is essential:
- Implement "need to know" and "least privilege" concepts
- Apply role-based permissions for development and deployment
- Log changes to model weights or logic
- Utilize internal approval workflows for model updates
- Implement revocation procedures for unused or compromised models
- Periodically review privileged access to the AI system

### 6.5 Resourcing and Organizational Readiness

Proprietary model development is resource-intensive and requires sustained investment. The art of estimating software projects has been a challenge since the 1960s — AI is no different.

#### Technical Infrastructure

Custom AI models typically require more demanding infrastructure than off-the-shelf solutions:

| Need | Description |
|------|-------------|
| GPU/TPU compute clusters | Specialized hardware |
| Scalable data pipelines | Data processing at scale |
| Secure model hosting environments | Protected deployment |
| Sandboxes | Development and testing isolation |
| Separate environments | Development vs. testing separation |

#### Talent and Skill Development

Internal development increases reliance on specialized talent (data scientists, ML engineers, model governance professionals). These skills are in short supply and priced accordingly.

**Talent management ideas:**
- Retention and compensation strategies for key technical staff
- Cross-training between AI and compliance teams
- Internal knowledge transfer and documentation
- Establishment of an AI "center of excellence"

> **The Risk of a Single Point of Failure:** When only one or two individuals understand how a proprietary model works, the organization is exposed to continuity and risk management challenges if those individuals leave.

#### Governance and Ethical Review Capacity

Organizations developing proprietary AI models need additional governance workflows. Given that traditional software development and AI model development share DNA, a mature SDLC may be adaptable rather than requiring a from-scratch build.

**Guardrails:**
- Implement approval boards for internal models
- Use expanded ethical review criteria
- Integrate AI governance with legal, risk, and audit functions
- Designate "model owners" as responsible for ongoing oversight

---

## Summary

Designing sound, resilient AI systems responsibly requires comprehensive documentation and contextual understanding across the entire lifecycle. From initial concept to post-deployment oversight, each phase introduces decisions that shape performance, compliance posture, and societal impact.

1. **Documenting the AI lifecycle** is critical for traceability, compliance, and future auditing. Requirements, design decisions, training processes, and testing outcomes must all be captured. When training data includes privacy data, organizations must formally establish a lawful basis for processing.

2. **Effective design begins with a clear understanding of business context and intended use case(s).** Organizations must identify what problem the AI system solves, who it serves, and how outputs integrate into operational workflows.

3. **Impact assessments serve as a vital milestone** — uncovering potential harms, compliance gaps, or ethical blind spots before implementation. In jurisdictions like the EU and Canada, these assessments are increasingly a legal requirement.

4. **Designing for fairness, safety, trustworthiness, and resilience** involves specific policies: thorough requirements gathering, model architecture selection, metrics definition, human oversight design, and feedback loop integration.

5. **Organizations developing proprietary models face elevated obligations and risks.** End-to-end ownership means sole accountability for legal compliance, ethical outcomes, and model explainability. Under the EU AI Act, proprietary model developers are "providers" and must satisfy stricter requirements.

---

## Key Takeaways

1. **Documenting the AI lifecycle ensures traceability, accountability, compliance, and audit readiness.** From system design to testing, comprehensive documentation provides the foundation for governance, compliance, and future maintenance. It supports explainability, allows teams to replicate decisions, and enables post-incident analysis.

2. **Defining the business context and use case(s) aligns AI development with real-world needs and constraints.** AI systems must solve clearly and formally defined problems, serve specific user groups, and operate within set performance boundaries.

3. **Impact assessments are not optional for high-risk AI systems — they are a legal and ethical necessity.** Required under frameworks like the EU AI Act and Canada's DADM, impact assessments identify potential risks, harms, fairness concerns, and gaps in oversight.

4. **Design decisions must balance technical performance with ethical, human-centered, operational considerations.** Choosing a model architecture, defining metrics, and establishing thresholds often requires tradeoffs informed by explainability, fairness, robustness, and usability.

5. **Organizations deploying proprietary models assume greater liability and governance responsibilities.** Unlike off-the-shelf tools, proprietary AI systems place full lifecycle accountability on the development organization — including legal exposure, regulatory classification as a provider, and the burden of maintaining documentation, oversight, and audit readiness internally.

---

## Review Questions

The following questions are designed to test your understanding of this area's material. You can find the answers in Appendix A.

1. **What is the primary purpose of documenting the AI system lifecycle?**
 - A) To accelerate deployment timelines
 - B) To reduce storage costs
 - C) To enable traceability and support governance
 - D) To comply with open-source licensing requirements

2. **Which factor is most important when defining the business context for an AI system?**
 - A) The organizational objective(s) the system supports
 - B) The number of employees on the data team
 - C) The vendor's market share
 - D) Whether the system uses neural networks

3. **An AI impact assessment should be conducted primarily to:**
 - A) Document proprietary model architectures for publication
 - B) Increase investor visibility
 - C) Certify the model for ISO 27001
 - D) Identify and mitigate risks associated with AI system use

4. **What is a typical reason for integrating human-in-the-loop (HITL) mechanisms into AI design?**
 - A) To speed up model inference
 - B) To eliminate the need for documentation
 - C) To allow for human oversight and intervention in critical decisions
 - D) To reduce power consumption

5. **Which of the following is a disadvantage of developing a proprietary AI model?**
 - A) Increased liability and regulatory obligations
 - B) Reduced system accuracy
 - C) Increased dependency on open-source data
 - D) Inability to access APIs

6. **What does a probability/severity matrix help teams accomplish during design risk assessments?**
 - A) Optimize GPU usage
 - B) Score and prioritize potential risks
 - C) Determine intellectual property value
 - D) Choose a programming language

7. **Which of the following best supports explainability in AI systems?**
 - A) Obfuscation of model weights
 - B) Publishing training code without documentation
 - C) Feature importance scoring and user-facing explanations
 - D) Encrypting data pipelines

8. **Why is stakeholder mapping critical during risk identification?**
 - A) It replaces the need for testing
 - B) It ensures that all server endpoints are documented
 - C) It helps classify model types by algorithm
 - D) It identifies how different groups perceive and are affected by AI system risks

9. **Which of the following would best demonstrate readiness to deploy a proprietary AI model?**
 - A) Having a high-performing model with no documented metrics
 - B) Completing shadow mode testing with documented outcomes
 - C) Outsourcing testing to a third party without internal review
 - D) Publishing a press release

10. **Under the EU AI Act, a company that develops and deploys its own AI model is considered which of the following?**
 - A) Consumer
 - B) Deployer
 - C) Provider
 - D) Tester

---

## Key Terms

- **[[SDLC (System Development Lifecycle)]]** — Formal process for designing, building, and maintaining information systems
- **[[Design Baseline]]** — Documented set of design decisions and rationale serving as a reference point
- **[[Model Card]]** — AI-specific artifact detailing model characteristics, intended uses, limitations, and performance
- **[[System Card]]** — Broader artifact covering the full AI system, not just the model
- **[[Feature Importance]]** — Ranking of input features by their contribution to model predictions
- **[[Business Context]]** — Organizational, strategic, and operational environment in which an AI system will be used
- **[[Use Case]]** — High-level specification describing how an AI system will operate, what data it uses, and expected outcomes
- **[[AI Impact Assessment (AIIA)]]** — Structured process to identify and manage potential harms or unintended consequences before deployment
- **[[Risk Matrix]]** — Tool that prioritizes risks based on probability of occurrence and potential impact/harm
- **[[Risk Mitigation Hierarchy]]** — Prioritized approach from elimination → substitution → engineering safeguards → warning/training → acceptance with monitoring
- **[[Residual Risk]]** — Risk remaining after mitigation measures have been applied
- **[[Shadow Mode]]** — Deployment technique where AI system runs alongside existing processes without taking action, for comparison and validation
- **[[Human-in-the-Loop (HITL)]]** — Design pattern where humans play key roles in monitoring, intervening, and improving AI system outcomes
- **[[Proprietary Model]]** — AI model developed and owned by the organization, involving end-to-end ownership of requirements, design, training, deployment, and liability
- **[[Provider (EU AI Act)]]** — Legal classification for an organization that develops and deploys its own AI model (vs. "deployer")
- **[[Inter-rater Reliability]]** — Measure of agreement among data labelers, critical for data quality
- **[[Configuration Management]]** — IT service management practice for recording and controlling changes to systems
- **[[Premortem]]** — Exercise where teams envision failure and trace its causes to identify risks proactively
- **[[Red Teaming]]** — Adversarial testing to identify vulnerabilities, edge cases, and misuse scenarios
- **[[Data Drift]]** — Change in the statistical properties of input data over time, potentially degrading model performance
