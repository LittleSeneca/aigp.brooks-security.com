---
tags:
 - aigp/domain-III
 - aigp/area
 - aigp/lifecycle
 - aigp/data
created: 2026-07-11
domain: "III: Understanding How to Govern AI Development"
subdomain: "III.B: Govern the Collection and Use of Data in Training and Testing the AI Model"
related:
 - "[[AI Lifecycle Index]]"
 - "[[AI System Design]]"
 - "[[Deployment and Monitoring]]"
 - "[[AIGP Exam Questions]]"
---

# Data Governance and Model Training

> **Domain III, Subdomain III.B** — Govern the Collection and Use of Data in Training and Testing the AI Model

## Performance Indicators

- Establish and follow the **requirements for data governance** (assess and document lawful rights to collect and use data; assess data quality, quantity, integrity, and fit-for-purpose).
- Establish and document **data lineage and provenance**.
- Plan and perform **training and testing of the AI model** (unit, integration, validation, performance, security, bias, and interpretability).
- Identify and manage **issues and risks during training and testing** of the AI model.

---

## 1. Data Governance

> **Core principle:** AI systems are only as reliable and resilient as the data on which they are trained. Data governance is a critical enabler — even a prerequisite — of responsible AI development.

### 1.1 Defining Data Governance for AI

**Data governance** — the framework of managing enterprise data through policies, processes, tools, roles, and responsibilities to ensure data is accurate, usable, secure, and compliant with applicable regulations.

In AI development, governance ensures training, testing, and operational datasets are:
- Technically suitable
- Legally and ethically sound
- Used appropriately

**Key components of data governance:**

| Component | Description |
|-----------|-------------|
| **Data classification** | Assigning risk levels to datasets, with handling and governance requirements for each level |
| **Data flow diagrams (DFDs)** | Visual representations of data flow within and between systems and entities, developed by data/system architects |
| **Input controls** | Ensuring data flowing into a system is approved by management and formatted correctly |
| **Output controls** | Ensuring data flowing out of a system is approved by management and formatted correctly |
| **Data loss prevention (DLP)** | Software that monitors data movement, alerting or blocking movements that violate policy |

### 1.2 Legal Authority and Lawful Use of Data

The first step in AI data governance: confirming a **defendable legal right** to use the data.

#### Confirming Lawful Rights to Use Data

Organizations must formally verify authorization to collect, process, store, and analyze data. Rights may be based on:

| Basis | Description |
|-------|-------------|
| **Direct user consent** | Checkbox acceptance in an app |
| **Implicit user consent** | Included in terms of use (insufficient in some jurisdictions, including EU under GDPR) |
| **Contractual provisions** | Data-sharing agreements |
| **Privacy policy / notice declarations** | Declared privacy practices |
| **Regulatory allowances** | e.g., HIPAA-compliant health data sharing, often requiring deidentification and **Business Associate Agreements (BAAs)** |

> **Essential:** Formal legal counsel review with a written assertion is considered essential before using data to train AI.

#### Documentation Requirements

Data governance policies should include:
- Data source registration
- Consent records (if applicable)
- Contract references
- Privacy policy / notice of privacy practices references
- Jurisdiction-specific legal justifications

#### Secondary Use Risks

Organizations repurposing data beyond its original collection purpose risk **function creep** — leading to violations of privacy policies, contracts, or regulations. Review processes and impact assessments should identify high-risk secondary uses.

#### When Using Third-party AI Systems

When training a third-party AI system with personal information, organizations should impose contractual terms including:
- Training data may not be used for any other system, customer, or purpose
- **Right to audit** the third-party organization and related systems
- Audits and cybersecurity assessments by qualified third parties
- Right to terminate the agreement without cause
- Vendor must agree to destroy data upon request and at termination

### 1.3 Assessing Data Quality and Integrity

Lawfully acquired data can still undermine AI if it lacks quality or integrity.

#### Dimensions of Data Quality

| Dimension | Definition |
|-----------|------------|
| **Accuracy** | Are values correct and free from error? |
| **Completeness** | Are all required fields populated? |
| **Integrity** | Are relationships across datasets correctly maintained? |
| **Timeliness** | Is the data up to date? |
| **Consistency** | Do values follow expected formats and rules? |

### 1.4 Fit for Purpose

> An AI model can be technically excellent but still fail if it does not align with its intended use.

Fitness for purpose includes: compliance with regulations, integration with workflows, and suitability for the operational environment.

#### Detecting and Preventing Data Drift

**Data drift** — when new output data deviates significantly from original distributions. Monitoring protocols should be mandated as part of AI model lifecycle governance, especially for models that update or learn over time.

### 1.5 Ensuring Sufficient and Representative Data

| Concept | Definition |
|---------|------------|
| **Data sufficiency** | Having enough volume of data to train a model effectively |
| **Representativeness** | Ensuring data accurately captures the relevant diversity of the deployment environment |

#### Avoiding Underfitting and Overfitting

| Problem | Cause | Result |
|---------|-------|--------|
| **Underfitting** | Insufficient volume of training data | Model unable to generalize effectively |
| **Overfitting** | Too much narrow or repetitive data | Model learns irrelevant patterns |

> Governance helps find the right balance by defining sufficiency thresholds and reuse limits.

#### Representing Real-world Populations

To avoid bias, AI governance frameworks should incorporate fairness checks:
- Demographic audits
- Data distribution checks (e.g., geographical distribution)
- Detection of outliers

### 1.6 Fit-for-purpose Evaluation

Governance reviews should evaluate whether the dataset supports the AI model's objective. Using data intended for one purpose for a different purpose should be approached with caution and subject to review and approval.

> **Key insight:** AI Training ≠ General Use. A dataset for language translation may not be suitable for training a medical advice chatbot — even technically similar data can diverge in ethical implications and legal exposure.

### 1.7 Data Stewardship and Roles

| Role | Responsibility |
|------|---------------|
| **Data stewards** | Operational custodians ensuring data quality, documentation, and issue resolution; ensure governance policies are consistently applied throughout the data lifecycle |
| **Data owners** | Accountable for strategic use of data; approve use cases, certify lawful use, and sign off on risk assessments; identified by domain or dataset |

### 1.8 Security, Privacy, and Ethical Use

#### Privacy Risk Assessments

Data governance programs should mandate **Privacy Impact Assessments (PIAs)** for all AI systems processing personal data. These evaluate risks of compliance, re-identification, inference, and discriminatory outcomes.

#### Security Controls

| Layer | Controls |
|-------|----------|
| **Data layer** | Encryption, access management, audit logging for all AI-related datasets (including training data) |
| **Infrastructure layer** | Comprehensive controls to protect facilities, networks, systems, and DBMS from attack and misuse |

#### Ethical Considerations

An ethical review addresses issues beyond policies, requirements, and regulations. While a particular use of data may be allowed and legal, it may still be unwise. Examples of ethical concerns:

- Training data embedding racial, gender, or socioeconomic bias via proxy variables
- Data collected under exploitative or disingenuous conditions
- Data that invades privacy, even if technically anonymized or pseudonymized

### 1.9 Organizational Maturity and Implementation

Data governance is a **lifecycle process**, not a one-time compliance task. Requires leadership support, institutional buy-in, and may precipitate cultural change.

#### Maturity Model

| Level | Characteristics |
|-------|----------------|
| **Ad hoc** | Minimal documentation or oversight |
| **Emerging** | Some formal roles and basic policies |
| **Defined** | Clear responsibilities and standardized procedures |
| **Managed** | Monitoring, measurement, and risk-based decision-making |
| **Optimized** | Continuous monitoring, automation, metrics, and risk-adjusted decision-making |

### 1.10 Common Pitfalls and Failure Modes

| Pitfall | Description |
|---------|-------------|
| **Treating governance as compliance** | Focusing solely on ticking boxes rather than enabling trustworthy data use |
| **Overcentralization** | Excessively centralized structures creating bottlenecks and disintermediation |
| **Tool overload** | Excessive governance tools overwhelming teams; simplicity and training are key |
| **Shadow copies of training data** | Extracting production data for ad hoc offline filtering without recording the procedure — governance will be blind to this use |

### 1.11 Benefits of Governance in AI Development

- **Improved model performance** — clean, representative data leads to better outcomes
- **Faster audits and investigations** — good documentation accelerates regulatory response
- **Cross-team alignment** — clear roles reduce conflict and rework
- **Reputational advantage** — demonstrated governance maturity builds stakeholder trust

> Standards such as **ISO/IEC 38505-1** provide data governance frameworks that organizations can adopt.

---

## 2. Data Lineage and Provenance

> To build trustworthy, responsible, and ethical AI, organizations need to understand where data comes from, how it moves, and how it changes.

### 2.1 Defining Data Lineage and Data Provenance

| Concept | Focus | Tracks |
|---------|-------|--------|
| **Data lineage** | Forward in time ("how and where") | How data flows through pipelines: ingestion → storage → transformation → consumption → maintenance → disposal. Includes: generation/origin, storage location, transformation processes, models/systems consuming it, modifications/corrections/removals, retention operations, disposal |
| **Data provenance** | Backward to origin | Origin and original characteristics: where obtained, who created/collected it, under what conditions, intended purpose |

> **Key distinction:** Lineage tracks flow and transformations; provenance identifies origin and context. Lineage ≠ provenance.

Together, lineage and provenance support:
- Identifying sources of errors and bias
- Reproducing outcomes (for explainable AI models)
- Demonstrating compliance with regulations and legal obligations

### 2.2 The Role of Lineage and Provenance in AI

| Area | Importance |
|------|------------|
| **Explainability and trust** | When stakeholders question AI outputs, developers must trace input data; without lineage/provenance, explanations become speculative |
| **Data security and integrity** | Lack of lineage can conceal data tampering, poisoning, and unauthorized modifications |
| **Compliance and auditability** | Regulatory frameworks (e.g., EU AI Act) require traceability for both source data and its transformations |
| **Reproducibility** | Clear understanding of data's journey and origin supports debugging, retraining, and litigation |

### 2.3 Capturing Data Provenance

Effective provenance tracking begins with **metadata** collection:

- Source entity (owner, organization, system)
- Collection method and date
- Version information
- Data licensing (terms of use)
- Access rights
- Intended use or original context
- Lineage
- Jurisdictional considerations (where collected, applicable regulations)
- Context (intended use, assumptions, limitations)

> **Third-party data:** Governance policies should require provenance declarations from data sources, proof of lawful collection and consent, and documentation of modifications/aggregations performed by the source.

**Standards for provenance tracking:** W3C PROV, ISO/IEC 5181 (Artificial Intelligence — Data and AI system provenance, still in development).

### 2.4 Tracking Data Lineage

Lineage records should include:
- Data source and format
- Storage location
- Version history
- Transformation scripts or ETL processes
- Data pipeline paths
- Systems and models using datasets
- Data retention and disposal processes

| Direction | Description |
|-----------|-------------|
| **Backward lineage** | Traces each data point back to its origin (sometimes confused with provenance) |
| **Forward lineage** | Tracks how data elements flow through systems to influence downstream processes |

**Tools:** Modern data observability platforms (Monte Carlo, Collibra, OpenLineage) offer visualization tools for graphical lineage representation, valuable when multiple teams interact with shared datasets.

### 2.5 Common Failure Modes

| Failure Mode | Description |
|--------------|-------------|
| **Data and organizational silos** | Datasets transferred between departments without clear ownership or standards; lineage and provenance become unclear |
| **Informal data use** | **Shadow AI** development — data scientists implement models and manipulate datasets outside sanctioned pipelines |
| **Manual and fragmented processes** | Documentation scattered across multiple tools or manual processes, often overlooked |

### 2.6 Building a Provenance and Lineage Framework

#### Policy Requirements

Policies should define:
- Mandatory metadata fields for new datasets
- When and how provenance must be verified and approved
- Ownership responsibilities for provenance and lineage documentation
- Requirements for automated capture and audit trails
- Required granularity of tracking (dataset-level, record-level, or feature-level)

#### Tech Stack Components

| Component | Examples |
|-----------|----------|
| Metadata repositories | Data catalogs |
| Data lineage visualizers | Graphical pipeline views |
| ETL tools | Integrated tracking and logging |
| Version control systems | For datasets and transformation scripts |
| Security controls | Encryption, access management to protect lineage/provenance records |

**MLOps integration:** Tools like MLflow, DVC (Data Version Control), or Amazon SageMaker enable traceability from raw data through training to deployment. **Model cards** can include references to lineage and provenance data for stakeholder transparency.

### 2.7 Use Cases and Industry Examples

| Industry | Requirements |
|----------|-------------|
| **Financial services** | Clear lineage for credit scoring, fraud detection, and algorithmic trading data |
| **Healthcare** | HIPAA compliance requires all health-related AI to trace data back to validated sources |
| **Public sector** | Auditability of data sources ensures democratic accountability (criminal justice, welfare automation) |

### 2.8 Benefits of Strong Traceability

- Reduced debugging time and faster model issue resolution
- Greater confidence in model outputs for stakeholders
- Improved audit response and regulatory posture
- Higher data quality with fewer data-related issues

### 2.9 Traceability Challenges and Tradeoffs

| Challenge | Consideration |
|-----------|---------------|
| **Performance overhead** | Automated lineage tracking can add latency to data pipelines and increase storage requirements |
| **Third-party limitations** | Third-party or open-source models may not provide full provenance/lineage (intellectual property concerns) |
| **Infrastructure investment** | Organizations must determine level of investment for metadata management, auditing, and visualization |

---

## 3. AI System Testing

> Unlike traditional software testing (verifying expected outputs for given inputs), AI system testing encompasses statistical performance, fairness, security, explainability, and integration within larger systems.

### 3.1 Understanding AI Testing Objectives

AI testing differs from traditional application testing because it involves **stochastic** behavior, data dependency, and shifting performance boundaries. AI system testing must address:

- Variability in model output
- Performance on unseen or edge cases
- Tradeoffs between performance and interpretability
- Compliance with evolving regulatory standards

#### Testing Throughout the AI Lifecycle

| Phase | Focus |
|-------|-------|
| **Training** | Monitor convergence and behavior |
| **Validation** | Verify outputs and decisions |
| **Pre-deployment** | Stress-test against adversarial or unexpected inputs |
| **Post-deployment** | Detect data drift or performance decay |

### 3.2 Unit and Component Testing

Validates functionality of individual components: data processing logic and model functions.

| Area | What to Test |
|------|-------------|
| **Input data transformations** | Normalization, encoding, imputation — correctness and consistency |
| **Model wrappers, scoring functions, evaluation logic** | Synthetic inputs for edge cases (null values, extreme values, malformed data) |

> Unit tests can be integrated into **Continuous Integration (CI)** tooling using frameworks like PyTest or unittest in Python.

### 3.3 Integration Testing

Validates interactions between components: data ingestion, model inference, storage, and downstream systems.

- Scrub input data to ensure conformity to expected formats, values, and character sets
- Verify APIs and interfaces function under load
- Identify type mismatches (e.g., numeric vs. string age values)
- Confirm model predictions are correctly handled by applications, dashboards, or decision systems

> **Trust but verify:** Integration tests should simulate full-system, end-to-end workflows including failure conditions (dropped records, unexpected input, unavailable services).

### 3.4 Validation Testing

Confirms whether the AI system performs as intended in **real-world applications** — goes beyond technical correctness to compare outputs against business expectations, ethical requirements, and compliance standards.

> Validation testing confirms whether the AI system solves the stated business problem(s). Success criteria should be defined before testing begins.

**Key metrics:** Accuracy, precision, recall, F1 score.

### 3.5 Performance Testing

Ensures the AI system meets speed, scalability, and availability targets.

| Method | Description |
|--------|-------------|
| **Inference latency** | Time to return a prediction from an input; real-time systems require low-latency inference |
| **Throughput and scalability** | How many inputs the system can handle per unit time; tools: LoadRunner, JMeter, Locust |
| **Resource utilization** | CPU, GPU, memory, storage, and network requirements; average load and peak load tests |

> **Test for the worst, not the average:** A model averaging 50 ms inference time but spiking to 2 s under certain loads can still degrade user experience.

### 3.6 Security Testing

In addition to conventional vulnerabilities, AI models face unique threats.

#### AI-Specific Testing

| Test Type | Description |
|-----------|-------------|
| **Adversarial testing** | Inject inputs crafted to cause incorrect predictions (e.g., subtle noise causing misclassification) |
| **Data poisoning and backdoors** | Assess training data integrity to detect malicious inputs influencing model behavior |
| **Model extraction and inversion** | Test whether attackers can reconstruct training data or reverse-engineer model behavior via repeated querying |

#### Comprehensive Security Testing

- Vulnerability scans (application, system, network levels)
- Penetration tests (application, system, network levels)
- Supply chain security testing for third-party models and dependencies
- Physical penetration tests for on-premises systems
- Social engineering testing for workforce resilience

### 3.7 Bias and Fairness Testing

| Test Type | Description |
|-----------|-------------|
| **Performance parity** | Measure how performance metrics (accuracy, false positive rate) vary across demographic groups; identify unjustified disparities from proxy bias |
| **Counterfactual fairness** | Evaluate if changing a protected attribute (gender, religious affiliation, political affiliation) inappropriately changes model output |

**Tools:** AIF360, Fairlearn, What-If Tool (TensorFlow).

> **Legal exposure:** In many jurisdictions, biased algorithms are not only unethical but also illegal. Fairness testing helps avoid regulatory fines and public backlash.

### 3.8 Interpretability and Explainability Testing

Determines whether AI model behavior can be meaningfully understood and explained.

| Method | Description |
|--------|-------------|
| **Model-agnostic methods** | Tools like SHAP or LIME explain individual predictions, identifying spurious correlations or data artifacts |
| **Global interpretability** | Summarize what the model generally values — feature importance analysis, decision trees, or coefficient inspection (linear models) |
| **Simulatability** | Whether a human can replicate or understand model predictions; simpler models (logistic regression, rule-based systems) favored in high-risk use cases |

### 3.9 Human-in-the-loop and Scenario Testing

| Test Type | Description |
|-----------|-------------|
| **End-to-end user flows** | Evaluate system behavior interacting with real users; surface unexpected results due to UX design, miscommunication, or edge cases |
| **Interactive testing and feedback loops** | For recommendation/decision-support systems — user response may influence future behavior; account for long-term dynamics and feedback effects |

### 3.10 Documentation and Traceability

All testing should be documented (procedures, plans, results) to support transparency, auditability, and reproducibility.

#### Test Plan Should Define

- Objectives
- Scope and responsibilities
- Test scenarios
- Metrics and thresholds
- Pass/fail criteria

#### Test Results Should Include

- Test results
- Issues encountered
- Remediation steps identified
- After-action review
- References to datasets, code versions, and environments used

> **Model cards and fact sheets** summarize model behavior, training/testing datasets, performance, intended use cases, and known limitations.

### 3.11 Organizational Practices for AI Testing

- **Clearly designate testing responsibilities** — in regulated sectors, may involve third-party validation or separate risk teams
- **Establish formal review gates** — testing evidence evaluated before model proceeds to deployment
- **Foster a testing culture** — testing as a key quality and risk control mechanism; incentives for issue discovery and transparency

### 3.12 Challenges and Tradeoffs

| Challenge | Description |
|-----------|-------------|
| **No definitive "correct" answer** | In some use cases, validation is inherently subjective and fuzzy |
| **Conflicting fairness definitions** | Equal opportunity vs. equal outcomes — organizations must decide which principles to prioritize |
| **Explainability vs. performance** | High-performing models (deep neural networks) may be less explainable, complicating integrity and accuracy testing |
| **Probabilistic nature** | Real-world complexity makes it hard to design tests addressing specific concerns |

---

## 4. Identifying and Managing Testing Risks

> Testing is not just about verifying functionality — it's about identifying risks that emerge during training and validation. AI models' behavior is **learned, not explicitly programmed**, making testing more probabilistic and less deterministic.

### 4.1 Why "It Passed Testing" Isn't Enough

An AI model may perform well on a validation set but poorly in the real world due to:
- Dataset shifts
- New edge cases
- Emerging adversarial techniques

> AI system testing must extend beyond accuracy scores to consider emerging and broadening risk dimensions.

### 4.2 Types of Testing Risks in AI

#### Data-Related Risks

| Risk | Description |
|------|-------------|
| **Biased training data** | Uneven representation leads to unfair or inaccurate outcomes |
| **Label noise** | Inconsistent or incorrect labels reduce model reliability |
| **Outliers and anomalies** | Extreme values or rare cases distort training or cause unstable behavior |
| **Imbalanced datasets** | One class/group underrepresented, leading to skewed predictions |
| **Concept drift** | Training data becomes outdated or misaligned with deployment conditions |

#### Model-Related Risks

| Risk | Description |
|------|-------------|
| **Overfitting** | Model learns noise in training set rather than general patterns |
| **Underfitting** | Model too simple to capture real-world complexities |
| **Lack of robustness** | Poor performance on edge cases or minor input variations |
| **Poor calibration** | Confidence scores don't match actual probabilities (e.g., "90% confident" but only 60% correct) |

#### Evaluation Risks

| Risk | Description |
|------|-------------|
| **Inappropriate metrics** | Wrong metrics selected make test results hard to interpret accurately |
| **Test set leakage** | Overlap between training and test data leads to inflated performance |
| **Insufficient coverage** | Test data may not include critical subgroups or production use cases |

#### Deployment and Integration Risks

| Risk | Description |
|------|-------------|
| **Environment mismatch** | Training assumptions don't hold in production (data, OS, software differences) |
| **Shadow AI use** | Unvetted models deployed without formal testing, documentation, or approval |
| **Feedback loops** | Model predictions influence future data collection, reinforcing biases |
| **Security and access differences** | Production environments introduce new attack surfaces (e.g., exposed APIs) not present in testing |

### 4.3 Testing Risk Identification Techniques

| Technique | Description |
|-----------|-------------|
| **Exploratory Data Analysis (EDA)** | Uncovers data distribution issues, imbalances, missing values, and potential outliers — often the first step before training begins |
| **Fairness and bias audit** | Examines performance across subgroups (gender, age, race); differential performance may reveal systemic bias |
| **Error analysis** | Manual reviews of misclassified output reveal systematic patterns of failure — beneficial for high-impact applications (healthcare, criminal justice) |

### 4.4 Risk Mitigation Strategies

#### Improving Data Quality and Diversity

| Technique | Description |
|-----------|-------------|
| **Data augmentation** | Generate additional training data to fill gaps |
| **Resampling** | Balance class distributions using upsampling or downsampling |
| **Synthetic data** | Use carefully constructed artificial data to improve representativeness (ensure it cannot be reidentified as real data subjects) |

#### Regularization Techniques (for Overfitting)

| Technique | Description |
|-----------|-------------|
| **L1 regularization** | Adds penalty based on absolute value of model parameters, simplifying the model |
| **L2 regularization** | Adds penalty based on square of model parameters, promoting stability |
| **Dropout** | Similar technique used in neural networks |

#### Ensemble Approaches

- **Ensemble models** or **model stacking** can mitigate weaknesses of any single approach and improve overall performance and resilience.

> **Accuracy isn't always enough:** In a medical diagnostic system, 95% accuracy may sound impressive, but if disease prevalence is only 5%, the model may be classifying almost every case as "healthy." Precision and recall matter.

### 4.5 Managing Risk Throughout the Training Lifecycle

| Phase | Activities |
|-------|------------|
| **Early Training** | Monitor convergence behavior; detect vanishing gradients or poor learning rates; validate model architecture decisions |
| **Mid-training Monitoring** | Validate loss curves; track performance metrics on validation sets; watch for instability or sudden metric spikes |
| **Late-stage Tuning** | Final hyperparameter optimization; large-scale validation sets; scenario-based or adversarial tests |
| **Post-training Testing** | Real-world simulations where possible; evaluate explainability and counterfactual behavior; audit logs and documentation |

> **Regression testing:** Whenever there is any change in operating parameters or training data, AI systems should be regression tested to verify behavior within acceptable bounds.

### 4.6 Testing Tools and Infrastructure

| Category | Tools |
|----------|-------|
| **MLOps integrations** | MLflow, SageMaker, Vertex AI — manage training, testing, and deployment with auditability |
| **Testing platforms** | Great Expectations (GX) — data validation; Checklist — testing across task dimensions; TensorFlow Model Analysis (TFMA) — performance evaluation |
| **Production monitoring** | Arize, Fiddler — post-deployment testing comparing real-world results to expected outcomes |

> Post-deployment monitoring is an extension of testing; it identifies new risks and feeds them back into the model improvement cycle.

### 4.7 Common Testing Pitfalls

| Pitfall | Description |
|---------|-------------|
| **Overreliance on test accuracy** | Accuracy alone masks false positives, false negatives, and unfair subgroup treatment |
| **Lack of real-world scenarios** | Synthetic tests alone are insufficient; edge cases and environmental variability must be included |
| **Siloed responsibility** | Data scientists testing their own models without outside review — bias and blind spots go unchecked |
| **Metric misalignment with business goals** | Model optimizes for technical metrics (F1 score) but fails to deliver business value |
| **Neglecting explainability** | High performance is meaningless if stakeholders cannot understand or trust model behavior |

### 4.8 Case Studies

| Case | Issue | Resolution |
|------|-------|------------|
| **Hiring algorithm bias** | Model favored masculine-coded language via biased word embeddings | Retrained with debiased embeddings; updated evaluation metrics |
| **Autonomous vehicle simulation** | Poor performance in tunnels (scenario missing from test set) | Built synthetic tunnel-driving simulator; improved edge case handling |
| **Financial services outlier** | Fraud detection triggered false alarms on large legitimate transactions | High-volume data underrepresented in training; updated with stratified sampling |

---

## Key Takeaways

1. **Data governance is a foundational enabler for trustworthy AI.** While not always a strict legal requirement, data governance ensures data is lawful, reliable, and appropriately managed. Poor or absent governance leads to biased outcomes, regulatory exposure, and loss of stakeholder trust. Effective governance includes lawful data use, role assignment, data quality monitoring, and alignment with business purpose.

2. **Data provenance and lineage must be documented to support accountability, traceability, and reproducibility.** Provenance explains origin and collection conditions; lineage tracks how data is transmitted and modified across systems. Both are essential for auditability and understanding model behavior, particularly for regulatory reviews or real-world performance issues.

3. **AI testing is broader than traditional software testing and must address fairness, robustness, and interpretability.** AI testing encompasses unit, integration, validation, and performance testing, plus ethical dimensions (bias, explainability, security). Standard metrics are insufficient — testing must account for edge cases, subgroup disparities, and evolving risks.

4. **Training and testing introduce unique risks that must be proactively identified and mitigated.** AI systems can fail silently if risks during training and testing are ignored: label noise, data drift, test leakage, inappropriate metrics. Organizations should apply structured review processes, approval gates, validation tools, and continuous monitoring.

5. **A risk-aware testing culture requires organizational maturity and interdisciplinary collaboration.** AI testing and risk management require buy-in from governance teams, legal counsel, domain experts, and business leaders. Formal ownership, clear review gates, and robust documentation ensure AI systems are effective and accountable.

---

## Key Terms

- **[[Data Governance]]** — Framework of managing enterprise data through policies, processes, tools, roles, and responsibilities to ensure accuracy, usability, security, and compliance
- **[[Data Lineage]]** — Tracking how data flows through pipelines (ingestion, storage, transformation, consumption, maintenance, disposal); the "how and where" of data
- **[[Data Provenance]]** — Origin and original characteristics of a dataset: where obtained, who created it, under what conditions, intended purpose
- **[[Data Drift]]** — When new output data deviates significantly from original training distributions
- **[[Concept Drift]]** — Training data becomes outdated or misaligned with deployment conditions
- **[[Underfitting]]** — Model too simple or trained on insufficient data to capture real-world patterns
- **[[Overfitting]]** — Model learns noise/irrelevant patterns instead of generalizable patterns
- **[[Data Sufficiency]]** — Having enough volume of data to train a model effectively
- **[[Representativeness]]** — Ensuring training data captures relevant diversity of the deployment environment
- **[[Shadow AI]]** — AI models developed and deployed outside sanctioned pipelines without formal testing or approval
- **[[Function Creep]]** — Repurposing data beyond its original collection and consent purpose
- **[[Model Cards]]** — Structured documentation summarizing model behavior, training data, performance, use cases, and limitations
- **[[Counterfactual Fairness]]** — Evaluating whether changing a protected attribute changes model output inappropriately
- **[[Adversarial Testing]]** — Injecting inputs specifically crafted to cause incorrect predictions
- **[[Inference Latency]]** — Time for an AI system to return a prediction from an input
- **[[SHAP/LIME]]** — Model-agnostic tools for explaining individual predictions
- **[[Business Associate Agreement (BAA)]]** — HIPAA-required agreement for data sharing with business associates
