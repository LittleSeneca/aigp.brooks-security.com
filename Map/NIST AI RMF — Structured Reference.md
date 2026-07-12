---
tags:
 - aigp/reference
 - aigp/standards
 - aigp/nist
created: 2026-07-11
source: "NIST AI 100-1, AI RMF 1.0 (January 2023)"
doi: "10.6028/NIST.AI.100-1"
related:
 - "[[AIGP Body of Knowledge — Exam Blueprint]]"
 - "[[AI Standards and Frameworks]]"
 - "[[NIST ARIA — Structured Reference]]"
---

# NIST AI RMF 1.0 — Structured Reference

> **NIST AI 100-1 | Artificial Intelligence Risk Management Framework 1.0**
> Published: **January 2023** | Voluntary, non-sector-specific, use-case agnostic.
> Next formal review expected: **no later than 2028** (living document with semi-annual Playbook updates).

---

## Framework Overview

The AI RMF is divided into **two parts**:

| Part | Content |
|------|---------|
| **Part 1: Foundational Information** | Framing risk, audience, AI risks & trustworthiness, effectiveness |
| **Part 2: Core and Profiles** | The four functions (Govern, Map, Measure, Manage), categories & subcategories, and AI RMF Profiles |

### Definition of AI System (per AI RMF)

> An engineered or machine-based system that can, for a given set of objectives, generate outputs such as predictions, recommendations, or decisions influencing real or virtual environments. AI systems are designed to operate with varying levels of autonomy. *(Adapted from: OECD Recommendation on AI:2019; ISO/IEC 22989:2022)*

### Core Principle: Risk = Composite Measure

**Risk** = probability of an event occurring × magnitude of its consequences. Impacts can be **positive, negative, or both**. The Framework addresses minimizing negative impacts AND identifying opportunities to maximize positive impacts.

---

## Characteristics of Trustworthy AI

> **Valid & Reliable** is the necessary foundation. **Accountable & Transparent** is cross-cutting and relates to all other characteristics.

| # | Characteristic | Core Definition |
|---|---------------|-----------------|
| 1 | **Valid and Reliable** | Confirmation that requirements for intended use are fulfilled; accuracy + robustness + reliability over time |
| 2 | **Safe** | Does not endanger human life, health, property, or environment under defined conditions |
| 3 | **Secure and Resilient** | Withstands adverse events; maintains confidentiality, integrity, availability; degrades gracefully when necessary |
| 4 | **Accountable and Transparent** | Information about AI system & outputs available to those interacting with it; accountability presupposes transparency |
| 5 | **Explainable and Interpretable** | Explainability = *how* the system works; Interpretability = *why* a decision was made and its meaning in context |
| 6 | **Privacy-Enhanced** | Safeguards human autonomy, identity, dignity; norms for anonymity, confidentiality, control |
| 7 | **Fair — with Harmful Bias Managed** | Equality + equity; addresses three bias categories: systemic, computational/statistical, and human-cognitive |

> **Key Insight:** Tradeoffs between characteristics are inevitable. Balancing them requires contextual assessment. Trustworthiness is only as strong as its weakest characteristic.

### The Three Categories of AI Bias (NIST SP 1270)

| Bias Type | Description |
|-----------|-------------|
| **Systemic** | Present in datasets, organizational norms, practices, processes, and broader societal structures |
| **Computational & Statistical** | Systematic errors from non-representative samples or algorithmic processes |
| **Human-Cognitive** | How individuals/groups perceive AI information, make decisions, fill in missing information |

---

## The AI Lifecycle and Key Dimensions

The AI RMF adopts the OECD framework for AI lifecycle classification, modified to emphasize **TEVV** (Test, Evaluation, Verification, Validation) processes.

### Four Key Dimensions (inner circles):

| Dimension | Focus |
|-----------|-------|
| **Application Context** | The problem space, intended use case, operational environment |
| **Data and Input** | Training data, preprocessing, data quality, provenance |
| **AI Model** | Model architecture, training, selection, calibration |
| **Task and Output** | What the system produces, how outputs are used |

### Lifecycle Stages (outer circle):

1. **Plan and Design** — Concept, objectives, requirements, data planning
2. **Data Collection and Processing** — Gathering, cleaning, labeling, documenting
3. **Model Building and Interpretation** — Training, selection, calibration, testing
4. **System Deployment** — Piloting, integration, compliance, user experience
5. **Operation and Monitoring** — Ongoing assessment, incident tracking, updates

> **TEVV is performed throughout all stages** and is separated as a best practice: model builders/users are distinct from those verifying and validating.

### AI Actors (per OECD definition)

Those who play an active role in the AI system lifecycle, including:
- AI Design, Development, Deployment actors
- Operation & Monitoring actors
- TEVV specialists (distinct from builders)
- Human Factors professionals
- Domain Experts, Impact Assessors
- Procurement, Governance & Oversight
- Third-party entities, End Users, Affected Individuals/Communities
- The General Public

---

## The Four Core Functions

```
 ┌──────────┐
 │ GOVERN │ ← Cross-cutting: informs & is infused
 └────┬─────┘ throughout all other functions
 ┌────────────────┼────────────────┐
 ┌────┴────┐ ┌─────┴──────┐ ┌───┴──────┐
 │ MAP │ ──→ │ MEASURE │ ──→ │ MANAGE │
 └─────────┘ └────────────┘ └──────────┘
 Establish Analyze, assess, Allocate resources,
 context to benchmark, and respond to, recover
 frame risks monitor AI risk from, and communicate
 about risks
```

> After instituting GOVERN, most users start with MAP → MEASURE → MANAGE. The process is iterative with cross-referencing between functions. Functions may be performed in any order.

---

## Function 1: GOVERN

> *Cultivates a culture of risk management. Outlines processes, documents, and organizational schemes. Cross-cutting — infused throughout MAP, MEASURE, and MANAGE.*

### GOVERN 1: Policies, Processes, Procedures, and Practices

*Organizational policies, processes, procedures, and practices across the organization related to mapping, measuring, and managing AI risks are in place, transparent, and implemented effectively.*

| Subcategory | Description |
|-------------|-------------|
| **GOVERN 1.1** | Legal and regulatory requirements involving AI are understood, managed, and documented |
| **GOVERN 1.2** | Characteristics of trustworthy AI are integrated into organizational policies, processes, procedures, and practices |
| **GOVERN 1.3** | Processes, procedures, and practices are in place to determine the needed level of risk management activities based on the organization's risk tolerance |
| **GOVERN 1.4** | The risk management process and its outcomes are established through transparent policies, procedures, and other controls based on organizational risk priorities |
| **GOVERN 1.5** | Ongoing monitoring and periodic review of the risk management process and its outcomes are planned and organizational roles and responsibilities clearly defined, including determining the frequency of periodic review |
| **GOVERN 1.6** | Mechanisms are in place to inventory AI systems and are resourced according to organizational risk priorities |
| **GOVERN 1.7** | Processes and procedures are in place for decommissioning and phasing out AI systems safely and in a manner that does not increase risks or decrease the organization's trustworthiness |

### GOVERN 2: Accountability Structures

*Accountability structures are in place so that the appropriate teams and individuals are empowered, responsible, and trained for mapping, measuring, and managing AI risks.*

| Subcategory | Description |
|-------------|-------------|
| **GOVERN 2.1** | Roles and responsibilities and lines of communication related to mapping, measuring, and managing AI risks are documented and are clear to individuals and teams throughout the organization |
| **GOVERN 2.2** | The organization's personnel and partners receive AI risk management training to enable them to perform their duties and responsibilities consistent with related policies, procedures, and agreements |
| **GOVERN 2.3** | Executive leadership of the organization takes responsibility for decisions about risks associated with AI system development and deployment |

### GOVERN 3: Workforce Diversity, Equity, Inclusion, and Accessibility

*Workforce diversity, equity, inclusion, and accessibility processes are prioritized in the mapping, measuring, and managing of AI risks throughout the lifecycle.*

| Subcategory | Description |
|-------------|-------------|
| **GOVERN 3.1** | Decision-making related to mapping, measuring, and managing AI risks throughout the lifecycle is informed by a diverse team (e.g., diversity of demographics, disciplines, experience, expertise, and backgrounds) |
| **GOVERN 3.2** | Policies and procedures are in place to define and differentiate roles and responsibilities for human-AI configurations and oversight of AI systems |

### GOVERN 4: Organizational Culture & Communication

*Organizational teams are committed to a culture that considers and communicates AI risk.*

| Subcategory | Description |
|-------------|-------------|
| **GOVERN 4.1** | Organizational policies and practices are in place to foster a critical thinking and safety-first mindset in the design, development, deployment, and uses of AI systems to minimize potential negative impacts |
| **GOVERN 4.2** | Organizational teams document the risks and potential impacts of the AI technology they design, develop, deploy, evaluate, and use, and they communicate about the impacts more broadly |
| **GOVERN 4.3** | Organizational practices are in place to enable AI testing, identification of incidents, and information sharing |

### GOVERN 5: Stakeholder Engagement

*Processes are in place for robust engagement with relevant AI actors.*

| Subcategory | Description |
|-------------|-------------|
| **GOVERN 5.1** | Organizational policies and practices are in place to collect, consider, prioritize, and integrate feedback from those external to the team that developed or deployed the AI system regarding the potential individual and societal impacts related to AI risks |
| **GOVERN 5.2** | Mechanisms are established to enable the team that developed or deployed AI systems to regularly incorporate adjudicated feedback from relevant AI actors into system design and implementation |

### GOVERN 6: Third-Party & Supply Chain

*Policies and procedures are in place to address AI risks and benefits arising from third-party software and data and other supply chain issues.*

| Subcategory | Description |
|-------------|-------------|
| **GOVERN 6.1** | Policies and procedures are in place that address AI risks associated with third-party entities, including risks of infringement of a third-party's intellectual property or other rights |
| **GOVERN 6.2** | Contingency processes are in place to handle failures or incidents in third-party data or AI systems deemed to be high-risk |

---

## Function 2: MAP

> *Establishes the context to frame risks related to an AI system. The basis for MEASURE and MANAGE. Enhanced by diverse internal teams and engagement with external AI actors.*

### MAP 1: Context Establishment

*Context is established and understood.*

| Subcategory | Description |
|-------------|-------------|
| **MAP 1.1** | Intended purposes, potentially beneficial uses, context-specific laws, norms and expectations, and prospective settings in which the AI system will be deployed are understood and documented. Considerations include: specific users and their expectations; potential positive and negative impacts to individuals, communities, organizations, society, and the planet; assumptions and related limitations; TEVV and system metrics |
| **MAP 1.2** | Interdisciplinary AI actors, competencies, skills, and capacities for establishing context reflect demographic diversity and broad domain and user experience expertise, and their participation is documented |
| **MAP 1.3** | The organization's mission and relevant goals for AI technology are understood and documented |
| **MAP 1.4** | The business value or context of business use has been clearly defined or — in the case of assessing existing AI systems — re-evaluated |
| **MAP 1.5** | Organizational risk tolerances are determined and documented |
| **MAP 1.6** | System requirements (e.g., "the system shall respect the privacy of its users") are elicited from and understood by relevant AI actors. Design decisions take socio-technical implications into account to address AI risks |

### MAP 2: AI System Categorization

*Categorization of the AI system is performed.*

| Subcategory | Description |
|-------------|-------------|
| **MAP 2.1** | The specific tasks and methods used to implement the tasks that the AI system will support are defined (e.g., classifiers, generative models, recommenders) |
| **MAP 2.2** | Information about the AI system's knowledge limits and how system output may be utilized and overseen by humans is documented. Documentation provides sufficient information to assist relevant AI actors when making decisions and taking subsequent actions |
| **MAP 2.3** | Scientific integrity and TEVV considerations are identified and documented, including those related to experimental design, data collection and selection (e.g., availability, representativeness, suitability), system trustworthiness, and construct validation |

### MAP 3: Capabilities, Usage, Goals, and Cost-Benefit

*AI capabilities, targeted usage, goals, and expected benefits and costs compared with appropriate benchmarks are understood.*

| Subcategory | Description |
|-------------|-------------|
| **MAP 3.1** | Potential benefits of intended AI system functionality and performance are examined and documented |
| **MAP 3.2** | Potential costs, including non-monetary costs, which result from expected or realized AI errors or system functionality and trustworthiness — as connected to organizational risk tolerance — are examined and documented |
| **MAP 3.3** | Targeted application scope is specified and documented based on the system's capability, established context, and AI system categorization |
| **MAP 3.4** | Processes for operator and practitioner proficiency with AI system performance and trustworthiness — and relevant technical standards and certifications — are defined, assessed, and documented |
| **MAP 3.5** | Processes for human oversight are defined, assessed, and documented in accordance with organizational policies from the GOVERN function |

### MAP 4: Component Risk & Benefit Mapping

*Risks and benefits are mapped for all components of the AI system including third-party software and data.*

| Subcategory | Description |
|-------------|-------------|
| **MAP 4.1** | Approaches for mapping AI technology and legal risks of its components — including the use of third-party data or software — are in place, followed, and documented, as are risks of infringement of a third party's intellectual property or other rights |
| **MAP 4.2** | Internal risk controls for components of the AI system, including third-party AI technologies, are identified and documented |

### MAP 5: Impact Characterization

*Impacts to individuals, groups, communities, organizations, and society are characterized.*

| Subcategory | Description |
|-------------|-------------|
| **MAP 5.1** | Likelihood and magnitude of each identified impact (both potentially beneficial and harmful) based on expected use, past uses of AI systems in similar contexts, public incident reports, feedback from those external to the team that developed or deployed the AI system, or other data are identified and documented |
| **MAP 5.2** | Practices and personnel for supporting regular engagement with relevant AI actors and integrating feedback about positive, negative, and unanticipated impacts are in place and documented |

---

## Function 3: MEASURE

> *Employs quantitative, qualitative, or mixed-method tools, techniques, and methodologies to analyze, assess, benchmark, and monitor AI risk and related impacts. Uses knowledge from MAP and informs MANAGE.*

### MEASURE 1: Methods and Metrics

*Appropriate methods and metrics are identified and applied.*

| Subcategory | Description |
|-------------|-------------|
| **MEASURE 1.1** | Approaches and metrics for measurement of AI risks enumerated during the MAP function are selected for implementation starting with the most significant AI risks. The risks or trustworthiness characteristics that will not — or cannot — be measured are properly documented |
| **MEASURE 1.2** | Appropriateness of AI metrics and effectiveness of existing controls are regularly assessed and updated, including reports of errors and potential impacts on affected communities |
| **MEASURE 1.3** | Internal experts who did not serve as front-line developers for the system and/or independent assessors are involved in regular assessments and updates. Domain experts, users, AI actors external to the team that developed or deployed the AI system, and affected communities are consulted in support of assessments as necessary per organizational risk tolerance |

### MEASURE 2: Trustworthy Characteristics Evaluation

*AI systems are evaluated for trustworthy characteristics.*

| Subcategory | Description |
|-------------|-------------|
| **MEASURE 2.1** | Test sets, metrics, and details about the tools used during TEVV are documented |
| **MEASURE 2.2** | Evaluations involving human subjects meet applicable requirements (including human subject protection) and are representative of the relevant population |
| **MEASURE 2.3** | AI system performance or assurance criteria are measured qualitatively or quantitatively and demonstrated for conditions similar to deployment setting(s). Measures are documented |
| **MEASURE 2.4** | The functionality and behavior of the AI system and its components — as identified in the MAP function — are monitored when in production |
| **MEASURE 2.5** | The AI system to be deployed is demonstrated to be **valid and reliable**. Limitations of generalizability beyond the conditions under which the technology was developed are documented |
| **MEASURE 2.6** | The AI system is evaluated regularly for **safety** risks — as identified in the MAP function. The AI system to be deployed is demonstrated to be safe, its residual negative risk does not exceed the risk tolerance, and it can fail safely, particularly if made to operate beyond its knowledge limits. Safety metrics reflect system reliability and robustness, real-time monitoring, and response times for AI system failures |
| **MEASURE 2.7** | AI system **security and resilience** — as identified in the MAP function — are evaluated and documented |
| **MEASURE 2.8** | Risks associated with **transparency and accountability** — as identified in the MAP function — are examined and documented |
| **MEASURE 2.9** | The AI **model is explained, validated, and documented**, and AI system output is interpreted within its context — as identified in the MAP function — to inform responsible use and governance |
| **MEASURE 2.10** | **Privacy** risk of the AI system — as identified in the MAP function — is examined and documented |
| **MEASURE 2.11** | **Fairness and bias** — as identified in the MAP function — are evaluated and results are documented |
| **MEASURE 2.12** | **Environmental impact and sustainability** of AI model training and management activities — as identified in the MAP function — are assessed and documented |
| **MEASURE 2.13** | Effectiveness of the employed TEVV metrics and processes in the MEASURE function are evaluated and documented |

### MEASURE 3: Risk Tracking

*Mechanisms for tracking identified AI risks over time are in place.*

| Subcategory | Description |
|-------------|-------------|
| **MEASURE 3.1** | Approaches, personnel, and documentation are in place to regularly identify and track existing, unanticipated, and emergent AI risks based on factors such as intended and actual performance in deployed contexts |
| **MEASURE 3.2** | Risk tracking approaches are considered for settings where AI risks are difficult to assess using currently available measurement techniques or where metrics are not yet available |
| **MEASURE 3.3** | Feedback processes for end users and impacted communities to report problems and appeal system outcomes are established and integrated into AI system evaluation metrics |

### MEASURE 4: Measurement Efficacy Feedback

*Feedback about efficacy of measurement is gathered and assessed.*

| Subcategory | Description |
|-------------|-------------|
| **MEASURE 4.1** | Measurement approaches for identifying AI risks are connected to deployment context(s) and informed through consultation with domain experts and other end users. Approaches are documented |
| **MEASURE 4.2** | Measurement results regarding AI system trustworthiness in deployment context(s) and across the AI lifecycle are informed by input from domain experts and relevant AI actors to validate whether the system is performing consistently as intended. Results are documented |
| **MEASURE 4.3** | Measurable performance improvements or declines based on consultations with relevant AI actors, including affected communities, and field data about context-relevant risks and trustworthiness characteristics are identified and documented |

---

## Function 4: MANAGE

> *Allocates risk resources to mapped and measured risks on a regular basis and as defined by the GOVERN function. Risk treatment comprises plans to respond to, recover from, and communicate about incidents or events.*

### MANAGE 1: Risk Prioritization and Response

*AI risks based on assessments and other analytical output from the MAP and MEASURE functions are prioritized, responded to, and managed.*

| Subcategory | Description |
|-------------|-------------|
| **MANAGE 1.1** | A determination is made as to whether the AI system achieves its intended purposes and stated objectives and whether its development or deployment should proceed |
| **MANAGE 1.2** | Treatment of documented AI risks is prioritized based on impact, likelihood, and available resources or methods |
| **MANAGE 1.3** | Responses to the AI risks deemed high priority, as identified by the MAP function, are developed, planned, and documented. Risk response options can include **mitigating, transferring, avoiding, or accepting** |
| **MANAGE 1.4** | Negative residual risks (defined as the sum of all unmitigated risks) to both downstream acquirers of AI systems and end users are documented |

### MANAGE 2: Benefit Maximization & Harm Minimization

*Strategies to maximize AI benefits and minimize negative impacts are planned, prepared, implemented, documented, and informed by input from relevant AI actors.*

| Subcategory | Description |
|-------------|-------------|
| **MANAGE 2.1** | Resources required to manage AI risks are taken into account — along with viable non-AI alternative systems, approaches, or methods — to reduce the magnitude or likelihood of potential impacts |
| **MANAGE 2.2** | Mechanisms are in place and applied to sustain the value of deployed AI systems |
| **MANAGE 2.3** | Procedures are followed to respond to and recover from a previously unknown risk when it is identified |
| **MANAGE 2.4** | Mechanisms are in place and applied, and responsibilities are assigned and understood, to supersede, disengage, or deactivate AI systems that demonstrate performance or outcomes inconsistent with intended use |

### MANAGE 3: Third-Party Risk Management

*AI risks and benefits from third-party entities are managed.*

| Subcategory | Description |
|-------------|-------------|
| **MANAGE 3.1** | AI risks and benefits from third-party resources are regularly monitored, and risk controls are applied and documented |
| **MANAGE 3.2** | Pre-trained models which are used for development are monitored as part of AI system regular monitoring and maintenance |

### MANAGE 4: Risk Treatment Documentation & Monitoring

*Risk treatments, including response and recovery, and communication plans for the identified and measured AI risks are documented and monitored regularly.*

| Subcategory | Description |
|-------------|-------------|
| **MANAGE 4.1** | Post-deployment AI system monitoring plans are implemented, including mechanisms for capturing and evaluating input from users and other relevant AI actors, appeal and override, decommissioning, incident response, recovery, and change management |
| **MANAGE 4.2** | Measurable activities for continual improvements are integrated into AI system updates and include regular engagement with interested parties, including relevant AI actors |
| **MANAGE 4.3** | Incidents and errors are communicated to relevant AI actors, including affected communities. Processes for tracking, responding to, and recovering from incidents and errors are followed and documented |

---

## Function Summary Matrix

| Function | Core Question | Key Activities | Ensuing Decision |
|----------|--------------|----------------|------------------|
| **GOVERN** | What structure enables risk management? | Set policies, accountability, culture, third-party oversight | Organizational readiness |
| **MAP** | What is the risk landscape? | Establish context, categorize system, characterize impacts | Go/no-go decision |
| **MEASURE** | How well is the system performing? | TEVV across all trustworthiness characteristics | Identify gaps & emergent risks |
| **MANAGE** | How do we respond to risks? | Prioritize, mitigate, monitor, communicate, improve | Continuous risk treatment |

---

## AI RMF Profiles

The AI RMF includes a profiling mechanism for tailoring the framework:

| Profile Type | Description |
|--------------|-------------|
| **Use-Case Profile** | Implementation of functions, categories, and subcategories for a specific setting or application (e.g., AI RMF hiring profile, AI RMF fair housing profile) |
| **Temporal Profile** | Describes current state or desired target state of AI risk management activities |
| **Current Profile** | How AI risks are currently being managed (current outcomes) |
| **Target Profile** | Outcomes needed to achieve desired risk management goals |
| **Cross-Sectoral Profile** | Covers risks of models or applications used across use cases or sectors (e.g., large language models, cloud-based services) |

> **Gap Analysis:** Comparing Current vs. Target Profiles reveals gaps. Action plans address these gaps. Prioritization is driven by user needs and risk management processes.

---

## Comparison: AI RMF vs. NIST Cybersecurity Framework (CSF)

| Element | AI RMF | NIST CSF |
|---------|--------|----------|
| **Focus domain** | AI system lifecycle and socio-technical risks | Cybersecurity controls and resilience |
| **Core functions** | GOVERN, MAP, MEASURE, MANAGE | IDENTIFY, PROTECT, DETECT, RESPOND, RECOVER |
| **Types of risk** | Bias, opacity, misuse, autonomy, drift, societal harm | CIA triad (Confidentiality, Integrity, Availability) |
| **Uncertainty handling** | Explicit handling of epistemic & aleatoric uncertainty | Generally assumes known or measurable threats |
| **Explainability & fairness** | Core theme, built into trustworthiness characteristics | Not addressed |
| **System context** | Central to risk mapping (MAP function) | Less context-sensitive, control-based |
| **Ethical dimensions** | Integral to the framework | Not in scope |
| **Human factors** | Human-AI interaction, socio-technical dynamics | Limited to security awareness/training |
| **Bias management** | Three bias categories (systemic, computational, human-cognitive) | Not addressed |
| **Third-party AI** | Specific supply chain categories (GOVERN 6, MAP 4, MANAGE 3) | Supply chain risk management (ID.SC) |

### When to Use Which Framework

| Scenario | Framework |
|----------|-----------|
| Preventing malware in IT systems | **CSF** |
| Evaluating bias in HR screening algorithm | **AI RMF** |
| Securing cloud infrastructure for AI workloads | **CSF** (with AI overlays) |
| Governing ethics/impacts of autonomous vehicles | **AI RMF** (with crosswalks to CSF for security) |
| Managing privacy risks in AI training data | **AI RMF** + **NIST Privacy Framework** |

> **Fundamental Shift:** CSF treats risk as something to defend against with known controls. AI RMF treats risk as **emergent, systemic, and value-laden** — requiring social, organizational, and technical strategies simultaneously.

---

## How AI Risks Differ from Traditional Software Risks

| AI-Specific Risk | Why It's Unique |
|------------------|-----------------|
| **Data misrepresentation** | Training data may not represent context/intended use; ground truth may not exist |
| **Data dependency at scale** | Increased volume and complexity of training data |
| **Training drift** | Intentional or unintentional changes during training fundamentally alter performance |
| **Data staleness** | Datasets become detached from original/intended context or outdated |
| **Scale & complexity** | Billions/trillions of decision points in traditional software |
| **Pre-trained model uncertainty** | Statistical uncertainty, bias management, validity, reproducibility issues |
| **Emergent failure modes** | Harder to predict for large-scale pre-trained models |
| **Privacy from aggregation** | Enhanced data aggregation capability creates new privacy risks |
| **Maintenance frequency** | More frequent maintenance due to data/model/concept drift |
| **Opacity & reproducibility** | Increased opacity; underdeveloped testing standards |
| **Testing difficulty** | Hard to determine what to test; no same controls as traditional code |
| **Environmental costs** | Computational costs for development; impact on environment and planet |
| **Side effects** | Inability to predict or detect side effects beyond statistical measures |

---

## AI Risk Management Challenges (Section 1.2)

| Challenge Area | Key Considerations |
|----------------|-------------------|
| **Risk Measurement** | Third-party complications; tracking emergent risks; lack of consensus on metrics; risk varies across lifecycle stages; lab vs. real-world divergences; inscrutability; human baseline comparison difficulties |
| **Risk Tolerance** | Highly contextual and application-specific; influenced by legal/regulatory requirements; varies by organization; changes over time |
| **Risk Prioritization** | Not all risks equal; highest-risk contexts demand most urgent prioritization; unacceptable risk levels = cease development/deployment; human-facing vs. non-human-facing systems differ |
| **Organizational Integration** | AI risks should not be isolated; integrate with enterprise risk management (ERM); align with cybersecurity and privacy frameworks; requires senior leadership commitment and cultural change |

---

## Practical Implementation Guidance

### Key Implementation Principles

1. **Start with GOVERN** — build the organizational foundation before mapping specific systems
2. **Iterate continuously** — risk management is not one-and-done; cross-reference between functions
3. **Involve diverse teams** — demographic, disciplinary, experiential diversity throughout the lifecycle
4. **Document everything** — transparency is foundational to accountability
5. **Use progressive depth** — not every subcategory applies to every system; prioritize by risk level
6. **Engage externally** — include feedback from end users, affected communities, domain experts
7. **Align with existing frameworks** — integrate with CSF, Privacy Framework, RMF, SSDF where relevant

### The AI RMF Playbook

> **Online companion resource** available at: https://www.nist.gov/itl/ai-risk-management-framework

- Provides **suggested tactical actions** to achieve AI RMF outcomes
- Voluntary — organizations can use suggestions according to their needs
- Users can create **tailored guidance** and contribute suggestions
- Updated **frequently** (semi-annual review cadence)
- Part of the **NIST Trustworthy and Responsible AI Resource Center**

### Effectiveness Evaluation

Organizations are encouraged to periodically evaluate whether the AI RMF has improved their ability to manage AI risks. Expected benefits include:

- Enhanced processes for governing, mapping, measuring, and managing AI risk
- Improved awareness of trustworthiness characteristics tradeoffs
- Explicit go/no-go decision processes
- Better information sharing within and across organizations
- Greater contextual knowledge for downstream risk awareness
- Strengthened engagement with interested parties
- Augmented TEVV capacity

### Attributes of the AI RMF (Appendix D)

| # | Attribute |
|---|-----------|
| 1 | Risk-based, resource-efficient, pro-innovation, voluntary |
| 2 | Consensus-driven, developed through open transparent process |
| 3 | Clear, plain language understandable by broad audience |
| 4 | Common language and understanding to manage AI risks |
| 5 | Easily usable; fits with other risk management approaches |
| 6 | Useful to wide range of perspectives, sectors, technology domains |
| 7 | Outcome-focused and non-prescriptive |
| 8 | Fosters awareness of existing standards, guidelines, best practices |
| 9 | Law- and regulation-agnostic |
| 10 | Living document — readily updated as technology and understanding evolve |

---

## Relationship to Other NIST Frameworks

| Framework | Relationship to AI RMF |
|-----------|----------------------|
| **NIST CSF** (Cybersecurity) | AI RMF references CSF for security/resilience; CSF can't address bias, fairness, explainability |
| **NIST Privacy Framework** | AI RMF references for privacy-enhanced characteristic; privacy risks from AI data aggregation |
| **NIST RMF** (Risk Management) | AI RMF aligns with broader enterprise risk management approach |
| **NIST SSDF** (Secure Software Development) | Referenced for secure development practices |
| **NIST ARIA** (Assessing Risks and Impacts of AI) | Complements AI RMF; operationalizes the assessment portion through layered testing (model, red team, field) |

> See [[NIST ARIA — Structured Reference]] for detailed ARIA information.

---

## Key Definitions

| Term | Definition |
|------|------------|
| **AI System** | Engineered or machine-based system generating outputs such as predictions, recommendations, or decisions influencing real or virtual environments, operating with varying levels of autonomy |
| **AI Actor** | Those who play an active role in the AI system lifecycle, including organizations and individuals that deploy or operate AI (OECD definition) |
| **Risk** | Composite measure of an event's probability of occurring and the magnitude/degree of consequences |
| **Risk Management** | Coordinated activities to direct and control an organization with regard to risk (ISO 31000:2018) |
| **Risk Tolerance** | Organization's or AI actor's readiness to bear risk to achieve objectives (ISO GUIDE 73) |
| **Residual Risk** | Risk remaining after risk treatment (ISO GUIDE 73) |
| **TEVV** | Test, Evaluation, Verification, and Validation — performed throughout the AI lifecycle |
| **Trustworthiness** | Ability to operate as intended while minimizing risk and promoting confidence; a social concept that ranges across a spectrum |
| **Responsible AI** | AI practices emphasizing human centricity, social responsibility, and sustainability |
| **Explainability** | Representation of the mechanisms underlying AI systems' operation (the *how*) |
| **Interpretability** | Meaning of AI systems' output in the context of their designed functional purposes (the *why*) |
| **Transparency** | Extent to which information about an AI system and its outputs is available (the *what happened*) |

---

## Exam Connection (AIGP Domain II)

> The AIGP exam tests on NIST AI RMF per **Domain II, Subdomain II.D**: *"Understand the Main Industry Standards and Tools That Apply to AI."*

**What to know for the exam:**

1. ✅ The **four core functions** — Govern, Map, Measure, Manage — and what each does
2. ✅ That **Govern is cross-cutting** and infused throughout the other three
3. ✅ The **seven trustworthiness characteristics** and that Valid & Reliable is the foundation
4. ✅ The **three bias categories** (systemic, computational/statistical, human-cognitive)
5. ✅ **How AI RMF differs from CSF** — AI RMF handles bias/fairness/ethics/context; CSF handles CIA triad
6. ✅ The **AI RMF Playbook** as the companion implementation guide
7. ✅ That the framework is **voluntary, non-sector-specific, use-case agnostic**
8. ✅ **AI RMF Profiles** (use-case, temporal, current, target, cross-sectoral)
9. ✅ **Risk response options**: mitigate, transfer, avoid, accept
10. ✅ Role of **TEVV** throughout the lifecycle

> See [[AI Standards and Frameworks]] for the area-level study notes and [[AIGP Body of Knowledge — Exam Blueprint]] for exam structure.
