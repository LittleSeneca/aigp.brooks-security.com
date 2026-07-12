---
tags:
 - aigp/domain-I
 - aigp/area
 - aigp/foundations
created: 2026-07-11
domain: "I: Understanding the Foundations of AI Governance"
subdomain: "I.B: Establish and Communicate Organizational Expectations for AI Governance"
related:
 - "[[Foundations Index]]"
 - "[[AI and AI Governance]]"
 - "[[Updating Policies for AI]]"
 - "[[AIGP Exam Questions]]"
---

# Organizational Readiness

> **Domain I, Subdomain I.B** — Establish and Communicate Organizational Expectations for AI Governance

## Performance Indicators

- **Define roles and responsibilities** for AI governance stakeholders.
- **Establish cross-functional collaboration** in the AI governance program (for efficacy and diversity of expertise and perspective).
- **Create and deliver a training and awareness program** to all stakeholders on AI terminology, strategy, and governance.
- **Differentiate approaches to AI governance** based upon company size, maturity, industry, products and services, objectives, and risk tolerance.
- **Identify differences among AI developers, deployers, and users** from a governance perspective (responsibilities, opportunities, needs).

---

## 1. Roles and Responsibilities for AI Governance Stakeholders

AI governance is a **shared responsibility** spanning disciplines — it should not be centralized in a single team. Defined roles are the backbone of governance; without clarity on "who owns what," organizations face blurred accountability, regulatory pressures, and ineffective oversight.

> **Note:** An effective AI governance function is part of overall corporate *due care*. Organizations facing legal issues related to AI systems will face greater consequences if they lack an AI governance program.

### Stakeholder Categories and Governance Roles

#### Executive Leadership

| Role | Governance Responsibilities |
|------|---------------------------|
| CEO, COO, CRO, CDAO, CCO, CISO, CPO | Set tone from the top for responsible AI |
| | Align strategic AI use with values and mission |
| | Approve risk thresholds for high-stakes domains |
| | Allocate funding for governance tools, training, staffing |
| | Hold teams accountable for compliance with governance protocols |

#### AI Governance Board or Council

A cross-functional body including data science, cybersecurity, privacy, compliance, legal, ethics, risk, and business units.

| Responsibility |
|---------------|
| Develop and maintain the organization's AI governance framework |
| Conduct risk assessments and reviews for sensitive AI use cases |
| Oversee implementation of audit and impact assessments (AIA, DPIA) |
| Serve as final reviewer for algorithmic risk escalations |
| Monitor and report responsible AI progress to the board of directors |

#### Legal, Ethics, and Compliance Teams

| Role | Governance Responsibilities |
|------|---------------------------|
| **Legal Counsel** | Identify/interpret regulations (GDPR, EU AI Act, CCPA); advise on liability, IP, third-party risk; draft AI-specific contracts and SLAs; participate in impact assessments and incident response |
| **Ethics Officer / Responsible Innovation Lead** | Translate values into actionable AI principles; lead ethical impact assessments; host ethics roundtables for contentious use cases; develop moral narrative for complex decisions |
| **Compliance Officer** | Embed governance controls into operational workflows; ensure adherence to policies and standards (e.g., ISO/IEC 42001); conduct periodic reviews and internal audits; train employees on AI compliance risks |

> **Note:** A growing number of organizations are establishing **Chief AI Ethics Officer (CAIEO)** roles to oversee ethical governance — promoting public accountability, transparency strategies, and balancing profit with public interest.

#### Technical and Engineering Teams

| Role | Governance Responsibilities |
|------|---------------------------|
| **Data Scientists / AI Engineers** | Select, train, validate, and document AI models; proactively identify bias, drift, unintended behaviors; apply explainability techniques (SHAP, LIME); document all aspects of AI system and data design |
| **Data Engineers** | Ensure data quality, lineage, and security; implement data minimization and privacy controls; tag and catalog datasets for training and evaluation |
| **AI Ops** | Operationalize deployment through SDLC/AI lifecycle processes; implement monitoring for data drift, model performance, runtime anomalies; automate rollback/alert procedures |

> **Note:** Consider "model governance checkpoints" in development lifecycles — gates that check for documentation, fairness assessments, and performance benchmarks before deployment.

#### Cybersecurity and Risk Management

| Responsibility |
|---------------|
| Integrate AI-related risks into the **Enterprise Risk Management (ERM)** portfolio |
| Maintain a risk register specifically for AI systems (or AI-specific tags) |
| Identify and evaluate financial, reputational, and legal exposures |
| Conduct scenario planning and tabletop exercises for AI incidents |
| Define mitigation strategies based on likelihood and severity matrices |
| Include AI systems in all standard security processes (vulnerability management, threat intelligence, pen testing, etc.) |

#### Product and Business Unit Leaders

| Responsibility |
|---------------|
| Sponsor AI use cases meeting business objectives and customer needs |
| Define success metrics aligned with values and risk appetite |
| Provide domain-specific input on data relevance, operational impact, regulatory nuances |
| Participate in model validation to ensure real-world alignment |
| Serve as liaisons between technical teams and end users |

#### End Users and Frontline Staff

| Responsibility |
|---------------|
| Interact with AI systems according to corporate policies |
| Monitor for inaccurate, unsafe, or biased outputs |
| Provide feedback for model refinement and retraining |
| Escalate anomalies or concerns through governance reporting channels |

> **Note:** Design interfaces that allow users to flag AI recommendations, request human override, or obtain explanations — embedding governance into everyday workflows.

#### External Parties

| Party | Governance Role |
|-------|----------------|
| **Vendors & Suppliers** | Meet governance requirements in procurement/contracts; provide model documentation, risk assessments, performance metrics; support ongoing monitoring |
| **Regulators & Auditors** | Review compliance with AI regulations and standards; evaluate fairness, accountability, societal impact |
| **Civil Society / Communities** | Offer perspectives on rights, equity, inclusion; participate in design workshops, focus groups, community impact reviews |

### Assigning Responsibilities Across the AI Lifecycle

| Phase | Primary Roles | Key Responsibilities |
|-------|--------------|---------------------|
| **Ideation & Design** | Executives, Product Owners, Ethics Leads | Define acceptable use cases, assess ethical risk, allocate funding |
| **Data Acquisition** | Data Engineers, Legal, Compliance | Ensure lawful collection, assess data bias, enforce privacy controls |
| **Model Development** | Data Scientists, Risk Teams, Ethics Leads | Train and validate models, document assumptions, evaluate bias |
| **Testing & Validation** | QA Engineers, Domain Experts, Compliance | Conduct robustness and security tests, validate accuracy, approve for deployment |
| **Deployment** | AI Ops, IT, Business Leads | Embed into production, implement alerts, enforce SLAs |
| **Monitoring** | Risk Officers, Users, Compliance | Audit for drift, gather user feedback, update documentation |
| **Decommissioning** | Legal, IT, Governance Board | Retire outdated models, preserve data logs, update records |

> **Key insight:** AI governance must be embedded "left to right" across the lifecycle. Governance is not an afterthought — it must be present in every stage.

### RACI Matrix for Governance Tasks

**RACI** = **R**esponsible, **A**ccountable, **C**onsulted, **I**nformed.

| Task | Dev Lead | Risk Officer | Legal | Product Owner |
|------|----------|-------------|-------|---------------|
| Model training | **R** | C | I | C |
| Fairness evaluation | C | **R** | C | C |
| Regulatory disclosure | I | C | **R** | C |
| Post-deployment monitoring | **R** | **A** | I | C |

Standardized governance role documentation should define: mission statement, decision rights/veto power, escalation procedures, and performance metrics.

---

## 2. Cross-functional Collaboration in AI Governance

AI governance is a **cross-functional endeavor** — no single team can govern AI effectively in isolation. Collaboration is the connective tissue ensuring AI systems remain aligned with corporate culture, human values, business goals, regulations, and societal expectations.

### Why Cross-functional Collaboration Is Critical

AI systems simultaneously influence:
- **Legal/regulatory exposure** (discrimination, privacy violations)
- **Reputational risk** (unethical uses, opaque decision-making)
- **Technical robustness** (model bias, drift, adversarial attacks)
- **Business operations** (automation efficiency, scalability)
- **Human impact** (ethics, fairness, dignity, job displacement)

> **Note:** When AI governance is centralized under a single function, it often lacks business relevance or technical depth. Shared ownership across the organization ensures higher compliance, more context-aware decisions, greater buy-in, and reduced post-implementation issues.

### Principles of Effective Cross-functional Governance

| Principle | Description |
|-----------|-------------|
| **Diverse expertise** | Include technical, legal/compliance, ethics, business, operational, and end-user representatives |
| **Clear role definitions** | Define who owns decisions, who provides input, who is responsible for documentation, who monitors outcomes |
| **Iterative integration** | Embed collaboration throughout the AI lifecycle — not just at risk reviews. Use checkpoints at design, data acquisition, validation, deployment, and incident response |
| **Shared artifacts** | Model cards, risk assessment forms, impact assessments (DPIAs, AIAs), ethics checklists |

> **Note:** Diverse perspectives improve risk detection. In one case, a linguist (not a data scientist) flagged bias in a language model by identifying sociolinguistic stereotypes during testing.

### Building the Collaborative Structure

| Structure | Composition & Purpose |
|-----------|----------------------|
| **AI Governance Working Group** | Cross-functional standing team: legal, risk, compliance, technical leads, product, CCO/ethics, cybersecurity, privacy. Reviews high-risk use cases, coordinates assessments, refines policies, escalates to executive board |
| **Cross-functional Use Case Reviews** | Triggered when: automated decisions affect rights, data includes sensitive/biometric info, system impacts hiring/lending/medical, model complexity reduces explainability, regulations increase scrutiny |
| **Collaboration Templates** | Model fact sheets, risk assessment forms, DPIAs, AIAs, ethics checklists — shared documents reduce misunderstandings and serve as a record |

### Fostering a Collaborative Culture

- **Bridge language gaps:** Joint workshops, shadowing programs, rotational governance roles
- **Incentivize participation:** Include governance in performance reviews, recognition programs, shared KPIs (e.g., "AI project risk mitigated before deployment")
- **Create psychological safety:** Rotate facilitators, anonymous input channels, empower junior staff to flag concerns

> **Note:** People closest to the technology often see risks early. Encourage input from those with less institutional power but more valuable insights.

### External and Cross-organizational Collaboration

| Domain | Approach |
|--------|----------|
| **Third-party vendors** | Require participation in governance reviews, review model documentation and risk assessments, align on shared principles, establish joint incident response protocols |
| **Regulators & industry** | Engage proactively with regulators (EU AI Act), industry consortia (IEEE, ISO, NIST, ENISA), academic institutions for standards and testing |
| **Community stakeholders** | Conduct focus groups, invite civil society review, use participatory design workshops, publish impact statements |

> **Note:** "Cross-functional" doesn't just mean across departments — it means listening to those affected by AI systems, especially in housing, policing, or credit decisions.

### Sustaining Collaboration Over Time

- **Governance charters** — codify roles, meeting cadence, escalation paths
- **Joint training programs** — cross-functional training on AI risks, biases, legal updates
- **Shared metrics** — track how collaboration improves risk mitigation, transparency, compliance
- **Retrospectives** — postmortems on governance failures or near misses

---

## 3. Training and Awareness Program

Training and awareness are the **linchpin** that transforms governance policy from a document into day-to-day organizational behavior. AI literacy varies widely — legal teams may not understand overfitting, developers may not grasp regulatory constraints, executives may not be fluent in governance requirements.

> **Note:** Without awareness and accountability, policy becomes theater. An organization may have ethical guidelines, but if employees don't understand them — or don't know they exist — they won't follow them.

### Core Training Objectives

Every role must understand AI sufficiently to make sound, ethical, and compliant decisions:

| Objective | Description |
|-----------|-------------|
| **AI terminology** | Key concepts: ML, neural networks, algorithmic bias, model drift, explainability |
| **AI strategy** | How AI supports the organization's mission, priorities, risk posture |
| **Governance principles** | Policies, roles, review processes, documentation requirements |
| **Risk awareness** | Ethical, legal, operational, reputational risks |
| **Escalation channels** | How to raise concerns, flag anomalies, seek guidance |

### Mapping Audiences to Training Needs

| Audience | Needs | Example Topics |
|----------|-------|---------------|
| **Executives & Board** | Strategic alignment, legal exposure, enterprise risk | AI strategy, regulatory trends, reputational risks |
| **Developers & Data Scientists** | Technical rigor, fairness tools, standards | Model documentation, bias mitigation, reproducibility |
| **Legal, Risk & Compliance** | Regulatory fluency, audit readiness | AI-related laws, impact assessments, vendor risks |
| **Business/Product Teams** | Value alignment, impact awareness | Use case vetting, success criteria, user impact |
| **Frontline Users** | Operational understanding | System behavior, human-in-the-loop workflows, recourse options |
| **IT & Cybersecurity** | Controls, daily operations, incident management | System monitoring, incident response, control ownership |
| **All Staff** | Basic literacy, ethical culture | Definitions, examples, escalation paths |

### Curriculum Structure

| Training Topic | Subject Coverage |
|---------------|-----------------|
| **AI Fundamentals** (all) | What are AI/ML/automation; how AI differs from traditional software; common myths |
| **Strategic Alignment** (managers, execs) | Why the organization invests in AI; governance's role in scaling AI safely; business value and reputational risks |
| **Governance Framework** (all) | Overview of internal policies and roles; required documentation; how models are reviewed and approved |
| **Ethics and Risk** (all) | Principles: fairness, accountability, transparency; ethical pitfalls and mitigations; incident response process |
| **Role-based Application** (custom tracks) | Case studies per department; step-by-step guides (e.g., "How to conduct a fairness review") |

### Delivery Methods

| Format | Strengths | Examples |
|--------|-----------|----------|
| **Live workshops** | Interactive, team building | Cross-functional case simulations |
| **e-Learning modules** | Scalable, asynchronous | Onboarding courses, policy refreshers |
| **Job aids / playbooks** | Role-specific, accessible | Ethics checklists, escalation flowcharts |
| **Peer learning** | Context-rich, social | Lunch-and-learns, communities of practice |
| **Microlearning** | Time-efficient, engaging | Five-minute videos, quick quizzes |

> **Note:** People learn more through practice. Pair live sessions with hands-on exercises (red teaming a use case, writing a model factsheet) to make abstract principles tangible.

### Training Pitfalls to Avoid

| Pitfall | Mitigation |
|---------|------------|
| One-size-fits-all content | Segment training by role and context |
| Overly technical modules | Use plain language and visuals |
| Lack of executive participation | Mandate C-level attendance in key sessions |
| No follow-through | Integrate training outcomes into performance goals and audits |
| Training as a one-time event | Create ongoing learning tracks and refresher cycles |

> **Note:** The EU AI Act explicitly requires documentation of employee training in AI-related roles.

### Measuring Success

Key KPIs for training programs:
- Percent of staff completing training within 90 days
- Pre/post assessments of AI literacy
- Percent of AI projects with completed model documentation
- Risk escalations initiated by trained staff
- User satisfaction with governance tools and channels

---

## 4. Tailoring AI Governance to Organizational Context

AI governance is **not one-size-fits-all**. To be effective, governance must be *proportionate, relevant, and adaptive*. Six critical factors shape governance design:

### Factor 1: Company Size

| Size | Traits | Governance Recommendations |
|------|--------|--------------------------|
| **Small / Startup** (1–200 employees) | Limited legal/compliance resources; few formal structures; flat org; high agility | Start with core principles/ethics charter; appoint a governance champion; use lightweight tools (spreadsheets, checklists); outsource when needed (legal reviews, red teaming) |
| **Mid-sized** (200–5,000 employees) | Some formalized governance; documented policies; early compliance functions; expanding AI/ML | Establish AI governance council (IT, legal, product, data science); define risk-based review thresholds; begin lifecycle integration with documentation checkpoints |
| **Large Enterprise** (5,000+ employees) | Extensive AI across departments; formal governance structures; complex regulatory profiles; dedicated legal/risk/data teams | Formalize multi-layer (federated) governance; integrate with ERM, cybersecurity, IT governance; invest in tooling and automation; report to executive leadership/board |

### Factor 2: Organizational Maturity

Maturity models (e.g., **COBIT**) define levels of process formality:

| Level | Description | AI Governance Implication |
|-------|-------------|--------------------------|
| **0: Nonexistent** | Complete lack of recognizable processes | Start from scratch with basic documentation |
| **1: Initial / Ad Hoc** | Unstructured, unpredictable; depends on individuals | Focus on education and risk awareness |
| **2: Repeatable** | Similar procedures exist but informal, undocumented | Document decisions even if informal |
| **3: Defined** | Processes standardized, documented, communicated | Standardize terminology and model documentation |
| **4: Managed & Measurable** | Processes monitored and measured | Create centralized repositories; mandate vetting processes |
| **5: Optimized** | Continuous improvement, automation, best practices | Embed governance gates into AI ops; regular third-party audits; continuous monitoring |

> **Note:** Low maturity is not "bad," and high maturity is not always "good." Organizations should target a maturity level appropriate to their sector, risk appetite, and needs. Not all processes need to be at the same level.

### Factor 3: Industry Sector

| Sector | Characteristics | Governance Best Practices |
|--------|----------------|--------------------------|
| **Regulated** (finance, healthcare, insurance, energy, telecom) | High legal expectations (Basel III, HIPAA, GDPR); extensive documentation/audit; clear accountability | Use formal risk tiers (EU AI Act); model validation and stress testing; traceability from data to predictions; change control logs |
| **Business/Consumer Tech** (e-commerce, social media, SaaS) | Rapid innovation cycles; high public visibility; algorithmic trust risks | Prioritize user feedback mechanisms; mandate transparency features; regular impact assessments on personalization/ranking |
| **Industrial / Manufacturing** | Operational risks (physical safety, environmental); predictive maintenance, robotics | Partner AI with safety/reliability engineering; monitor model drift → equipment failure; require fail-safes and human override |
| **Public Sector / Nonprofits** | Heightened public accountability; mission-oriented; procurement constraints | Publish open model impact statements; involve community stakeholders; document impacts on vulnerable populations |

### Factor 4: Products and Services (Use Case Risk Tiers)

| Risk Level | Examples | Governance Approach |
|-----------|----------|-------------------|
| **Low** (Internal Use) | Expense automation, HR chatbots, revenue forecasting, marketing | Simplified documentation; minimal review unless personal data is used |
| **Moderate** (Decision Support) | Customer segmentation, predictive analytics, support chatbots | Validate assumptions and biases; disclose AI involvement; monitor accuracy over time |
| **High** (Automated Decisions) | Job screening, loan applications, medical diagnosis, tenant screening | Full lifecycle oversight; bias audits and fairness testing; explainability and appeals processes |
| **Very High** (Real-time / High-stakes) | Autonomous driving, AI surgery, fraud prevention, K-12 instruction | Red-team simulations; real-time monitoring with auto-shutoff; human-in-the-loop validation |

### Factor 5: Risk Tolerance

| Tolerance Level | Examples | Governance Traits |
|----------------|----------|------------------|
| **Low** | Banking, healthcare, energy | Pre-deployment risk quantification; conservative release gates; comprehensive documentation and signoffs |
| **Medium** | Large tech, consumer products, retail | Tiered oversight by use case; partial automation with oversight; centralized ethics committee |
| **High** | Startups, social media, R&D orgs | Faster iteration with post-hoc reviews; distributed risk ownership; ethical guardrails with fewer hard constraints |

> **Note:** High risk tolerance should never mean *no governance*. Even risk-tolerant firms need escalation channels, monitoring, and accountability.

### Factor 6: Business Alignment

| Organization Type | Traits | Governance Approach |
|-------------------|--------|-------------------|
| **Innovation-driven** | Fast cycles, experimentation, higher risk appetite | Agile, feedback-driven processes; pilot phases; emphasize ethical foresight over strict compliance |
| **Reputation-focused** | High public perception exposure, trust-sensitive domains | Public-facing ethics commitments; transparency dashboards; PR/legal in review boards |
| **Efficiency-oriented** | Emphasis on automation and operational AI | Evaluate accuracy-fairness tradeoffs; accountability in automated decisions; document error tolerance thresholds |

---

## 5. Developers, Deployers, and Users in AI Governance

Three distinct groups interact with AI systems, each with different responsibilities, risks, and leverage over AI behavior and outcomes.

### Definitions

| Role | Who They Are | Focus Areas |
|------|-------------|-------------|
| **AI Developer** | Data scientists, ML engineers, data engineers, research scientists, privacy/cybersecurity analysts | Data curation and preprocessing; model selection and training; performance evaluation and tuning; documentation and testing |
| **AI Deployer** | Software engineers, AI ops, product managers, infrastructure teams | Model deployment and monitoring; infrastructure and scalability; integration into applications/services; post-deployment observability |
| **AI User** | Internal users (HR using resume screening), external users (customers receiving recommendations), decision-makers (loan officers, clinicians) | Interpretation of AI outputs; operational reliance on AI; reporting errors, inconsistencies, incidents, harms; exercising rights to recourse or appeal |

### Role Responsibilities Across the AI Lifecycle

#### Developer Responsibilities

| Phase | Developer Tasks | Governance Responsibilities |
|-------|----------------|--------------------------|
| **Data collection** | Curate and clean datasets | Check for representational bias, ensure consent/privacy |
| **Model design** | Select algorithms, tune hyperparameters | Document assumptions, ensure explainability |
| **Evaluation** | Measure accuracy, fairness, robustness | Perform bias testing, validate against benchmarks, assess security |
| **Documentation** | Record the development process | Create model cards, data sheets, risk disclosures |

#### Deployer Responsibilities

| Phase | Deployer Tasks | Governance Responsibilities |
|-------|---------------|--------------------------|
| **Integration** | Embed models into apps/tools | Ensure UI/UX supports explainability and user control |
| **Scaling** | Enable access and load management | Apply access controls and logging |
| **Monitoring** | Track real-time performance | Detect drift, alert on anomalies or failures |
| **Maintenance** | Manage model updates | Version control, rollback procedures, impact validation |

#### User Responsibilities

| Phase | User Tasks | Governance Responsibilities |
|-------|-----------|--------------------------|
| **Interaction** | Use AI system in operations | Understand AI's role in decision-making, avoid blind trust |
| **Feedback** | Identify problems or inconsistencies | Report anomalies through proper channels |
| **Oversight** | Validate AI-assisted decisions | Exercise discretion, request human review if needed |
| **Rights** | Appeal decisions, seek transparency | Invoke recourse mechanisms when impacted |

### Governance Opportunities by Role

| Role | Key Opportunities |
|------|------------------|
| **Developers** | Bias mitigation at the source; transparency tooling (SHAP, LIME); ethical foresight during experimentation; reproducibility via consistent pipelines; security and privacy by design |
| **Deployers** | Embedding monitoring for performance/fairness drift; automating governance checkpoints (no deployment without documentation); implementing rollback protocols |
| **Users** | Spotting unintended consequences; validating outputs with domain knowledge; initiating recourse or appeals — empowered frontline users become effective risk sentinels |

### Resource Needs by Role

| Role | Needs | Expectations |
|------|-------|-------------|
| **Developer** | Bias detection/explainability/robustness tools; governance guidelines for dev workflows; feedback from deployers and users | Clear success criteria beyond accuracy; time for documentation and audits; safe space to flag ethical concerns |
| **Deployer** | Validated, well-documented models; monitoring platforms (drift, latency, usage); guidance on human oversight integration | Shared responsibility with developers for post-deployment risk; resources for responsible model updates; participation in incident response |
| **User** | Clear understanding of when/how AI is used; training on interpreting outputs and exercising discretion; simple reporting channels | Right to explanation; mechanisms for appeal, override, or human review; protection from retaliation when raising concerns |

### Governance Conflicts and Solutions

| Conflict | Tension | Governance Solution |
|----------|---------|-------------------|
| **Developers vs. Users** | Developers optimize for technical performance; users care about practical usability | Incorporate user feedback into dev cycles; mandate usability testing |
| **Developers vs. Deployers** | Developers expect smooth handoff; deployers face incomplete documentation or opaque code | Establish shared AI ops pipelines with required metadata and risk summaries |
| **Users vs. Deployers** | Users want more control/transparency; deployers restrict for security/scalability | Involve users in UI/UX testing; include human review and escalation options |

### Role-based Governance Controls

| Role | Controls |
|------|----------|
| **Developers** | Model cards; fairness testing protocols; peer code review for risk; gate reviews; ethics approval for novel use cases |
| **Deployers** | Deployment checklists; access control logs; real-time drift alerts; gate reviews; audit trails |
| **Users** | Transparency disclosures; override mechanisms; feedback channels; recourse procedures |

### Role Coordination

- **Joint retrospectives** after AI system launches
- **Cross-functional ethics committees** for high-risk use cases
- **Shared dashboards** showing model performance, risk metrics, feedback loops
- **Integrated governance tools**: model registry with audit metadata, alert systems routing incidents to the right role, role-based access to governance documentation

---

## Key Takeaways

1. **Know the roles of AI developers, deployers, and users.** Developers design and train models (documentation, fairness testing, technical transparency). Deployers integrate models into production (infrastructure, monitoring, rollback). Users apply AI outputs operationally and are often first to notice failures, bias, or unintended consequences. Understanding these distinctions is critical for placing safeguards at every lifecycle phase.

2. **Understand why cross-functional collaboration is critical.** AI governance requires legal, technical, ethical, operational, and business input. Each group identifies different risks. Collaboration takes the form of governance committees, risk/compliance reviews, and multi-role project teams. The exam may ask you to recognize when and how diverse roles should coordinate.

3. **Know how governance strategies vary by company size, maturity, and risk tolerance.** Small/early-stage companies use lightweight governance (checklists, part-time champions, external audits). Large organizations need formalized structures, dedicated risk teams, and compliance reporting. Risk tolerance directly influences how strict or flexible controls should be. Be prepared to evaluate governance scaling by organizational context.

4. **Identify role-specific responsibilities across the AI lifecycle.** Developers are accountable for data integrity, model documentation, and fairness testing. Deployers own post-deployment observability, rollback plans, and integration controls. Users must detect problems and escalate concerns. The exam may present lifecycle scenarios and ask who is responsible at key checkpoints.

5. **Recognize components of an effective AI governance training program.** Training must be tailored to each stakeholder group's literacy level: executives need strategic alignment and risk awareness; developers need bias testing and transparency tools; users need to understand how to interpret and challenge AI outputs. Strong programs combine live training, e-learning, policy walkthroughs, and case-based exercises.

---

## Key Terms

- **[[AI Developer]]** — Individual/team that designs, builds, trains, and evaluates AI models or systems (data scientists, ML engineers, data engineers, research scientists)
- **[[AI Deployer]]** — Stakeholder responsible for integrating AI models into production environments and operational workflows (software engineers, AI ops, product managers)
- **[[AI User]]** — Individual who interacts with AI systems during operational use (internal users, external customers, decision-makers relying on AI insights)
- **[[RACI Matrix]]** — Framework assigning **R**esponsible, **A**ccountable, **C**onsulted, **I**nformed roles for governance tasks
- **[[AI Governance Board]]** — Cross-functional council that develops governance framework, conducts risk assessments, oversees audits, and reports to the board
- **[[Chief AI Ethics Officer (CAIEO)]]** — Executive role overseeing ethical AI governance, public accountability, and transparency strategies
- **[[Business Alignment]]** — Developing policies, processes, and procedures that align with an organization's mission, goals, size, sector, culture, and risk tolerance
- **[[Maturity Model]]** — Scale of process maturity (e.g., COBIT: Nonexistent → Initial → Repeatable → Defined → Managed → Optimized) used to assess and target governance formality
- **[[Enterprise Risk Management (ERM)]]** — Portfolio of organizational risks into which AI-specific risks should be integrated
- **[[Model Cards]]** — Structured documentation summarizing model purpose, performance, limitations, and evaluation metrics
- **[[Cross-functional Collaboration]]** — Coordinated governance involving legal, technical, ethical, operational, and business stakeholders to capture diverse expertise
- **[[Risk Tolerance]]** — An organization's willingness to accept uncertainty; directly influences governance intensity (low → strict controls; high → lighter guardrails)
- **[[Data Protection Impact Assessment (DPIA)]]** — Structured assessment of data protection risks for processing activities, applicable to AI systems handling personal data
- **[[Algorithmic Impact Assessment (AIA)]]** — Structured walkthrough of algorithmic risk categories (bias, drift, misuse) for AI systems
- **[[Human in the Loop]]** — Requirement for human oversight in consequential AI decisions, especially in high-stakes or automated decision-making contexts
- **[[Model Drift]]** — Degradation of model performance over time due to changes in data or environment; requires monitoring and alerting
- **[[SHAP / LIME]]** — Explainability techniques (SHapley Additive exPlanations, Local Interpretable Model-agnostic Explanations) supporting transparency and auditability
