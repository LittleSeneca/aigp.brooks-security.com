// AIGP Flashcards — 314 terms
const FLASHCARDS = [
  {
    "term": "A/B Testing",
    "definition": "A comparative testing method where two versions of an AI model run simultaneously to evaluate which performs better — commonly used for deployment validation."
  },
  {
    "term": "Accountability",
    "definition": "The state of being accountable (responsible for actions, decisions, and performance). Refers to an assigned responsibility based on regulations, agreements, or delegation. A person or entity is accountable to another using specific means and criteria."
  },
  {
    "term": "Accountable and Transparent",
    "definition": "NIST trustworthiness characteristic: information about AI system design decisions and outputs is available to stakeholders, with clear ownership of responsibility."
  },
  {
    "term": "Activation Function",
    "definition": "A function applied to the weighted combination of all inputs to a neuron. Typically nonlinear."
  },
  {
    "term": "Adoption",
    "definition": "Needs analysis, feasibility study, stakeholder engagement, requirements definition"
  },
  {
    "term": "Adversarial Example",
    "definition": "An intentionally crafted input designed to cause an AI model to make incorrect predictions — often imperceptible to humans but catastrophic for model behavior."
  },
  {
    "term": "AI Act Milestone — August 2, 2026",
    "definition": "The date high-risk AI system requirements take effect, including conformity assessments and CE marking. Full enforcement across all provisions is expected by 2027."
  },
  {
    "term": "AI Act Milestone — February 2, 2025",
    "definition": "The date prohibited AI practices and AI literacy requirements began to apply — the first substantive obligations under the EU AI Act."
  },
  {
    "term": "AI Agent",
    "definition": "Automated entity that perceives and reacts to its environment and takes actions to achieve its goals."
  },
  {
    "term": "AI Component",
    "definition": "Functional element that constitutes an AI system."
  },
  {
    "term": "AI Customer",
    "definition": "Entity that acquires/uses the AI system"
  },
  {
    "term": "AI Data Retention Policy",
    "definition": "Policy defining how long training data is retained after model development — and addressing that data may effectively persist inside the trained model itself. A common gap when updating privacy policies for AI."
  },
  {
    "term": "AI Deployer",
    "definition": "The entity that operationalizes AI models in production — responsible for integration, monitoring for risk, and ensuring reliable real-world function."
  },
  {
    "term": "AI Developer",
    "definition": "The entity that builds and trains AI models — responsible for curating datasets, running fairness evaluations, and ensuring ethical design and testing."
  },
  {
    "term": "AI Distributor",
    "definition": "EU AI Act role: entity in the supply chain that makes an AI system available on the EU market without affecting its compliance — must verify CE marking and documentation."
  },
  {
    "term": "AI Governance Stakeholder",
    "definition": "Any individual or group with a role in AI governance — includes executive leadership, technical teams, legal/compliance, product owners, and end users."
  },
  {
    "term": "AI Impact Assessment",
    "definition": "A structured analysis of how an AI system affects individuals, groups, organizations, and society — covers privacy, bias, safety, fairness, and fundamental rights."
  },
  {
    "term": "AI Importer",
    "definition": "EU AI Act role: entity that places an AI system from a third country on the EU market — must verify conformity and ensure CE marking before distribution."
  },
  {
    "term": "AI Management System (AIMS)",
    "definition": "A set of interrelated organizational elements to establish AI policies, objectives, and processes to achieve those objectives — the core of ISO/IEC 42001."
  },
  {
    "term": "AI Manufacturer",
    "definition": "Entity that builds/assembles the AI system"
  },
  {
    "term": "AI Partner",
    "definition": "Entity that collaborates in AI development or deployment"
  },
  {
    "term": "AI Provider",
    "definition": "Entity that makes an AI system available"
  },
  {
    "term": "AI Risk Sources (ISO 23894 Annex B)",
    "definition": "Informative annex of ISO/IEC 23894 cataloging AI-specific risk sources; Annex A lists common AI-related objectives and Annex C maps risk management processes to the AI system life cycle."
  },
  {
    "term": "AI Subject",
    "definition": "Individual affected by or interacting with an AI system"
  },
  {
    "term": "AI System",
    "definition": "A technical system that generates results such as content, forecasts, recommendations, or decisions for a specific, human-defined objective. May use various techniques and approaches related to AI to develop a model for representing data, knowledge, processes, etc. Designed to operate with varying degrees of automation."
  },
  {
    "term": "AI User",
    "definition": "The person or entity that interacts with AI in real-world scenarios. Often closest to operational impact and first to detect unintended outcomes."
  },
  {
    "term": "AI Vendor Due Diligence",
    "definition": "Evaluation of AI vendors covering AI-specific risks: model and training-data provenance, labeling quality, explainability, safety filters, and vulnerable dependencies — imposed by procurement policy before contracting."
  },
  {
    "term": "Algorithmic Bias",
    "definition": "Systematic and repeatable errors in an AI system that create unfair outcomes, such as privileging one group over another, often stemming from biased training data."
  },
  {
    "term": "Annex SL",
    "definition": "ISO's harmonized structure for management system standards — provides identical clause structure (4-10) across ISO 42001, 27001, 9001 enabling integration."
  },
  {
    "term": "Anonymization",
    "definition": "The process of irreversibly transforming personal data so the data subject can no longer be identified — if fully achieved, GDPR no longer applies."
  },
  {
    "term": "Article 22 GDPR",
    "definition": "The GDPR provision granting data subjects the right not to be subject to solely automated decisions producing legal or similarly significant effects — requires human intervention capability."
  },
  {
    "term": "Article 35 GDPR",
    "definition": "The GDPR provision mandating Data Protection Impact Assessments (DPIAs) for processing likely to result in high risk to individuals — frequently triggered by AI systems."
  },
  {
    "term": "Article 56 (EU AI Act)",
    "definition": "Legal basis for the GPAI Code of Practice, published by the European AI Office. Adherence is a compliance-demonstration aid, NOT conclusive evidence of compliance or a safe harbor."
  },
  {
    "term": "Article 9 GDPR",
    "definition": "The GDPR provision prohibiting processing of special category data (race, religion, health, biometrics, etc.) unless a specific exception applies — critical for AI training data."
  },
  {
    "term": "Artificial General Intelligence (AGI)",
    "definition": "A theoretical form of AI capable of understanding, learning, and applying intelligence across any task a human can perform. Does not yet exist publicly."
  },
  {
    "term": "Artificial Intelligence (AI)",
    "definition": "*\\<Discipline>* Research and development of mechanisms and applications of AI systems. R&D can take place in fields such as computer science, data science, humanities, mathematics, and natural sciences."
  },
  {
    "term": "Artificial Superintelligence (ASI)",
    "definition": "A theoretical AI that surpasses human intelligence in all domains — creativity, problem-solving, emotional understanding, and decision-making."
  },
  {
    "term": "Audit",
    "definition": "A systematic, independent examination of an AI system's design, data, outputs, and governance against established criteria — can be internal (first/second party) or external (third party)."
  },
  {
    "term": "Automatic Summarization",
    "definition": "Task of shortening a portion of natural language content or text while preserving important semantic information."
  },
  {
    "term": "Automation",
    "definition": "Relating to a process or system that operates under certain conditions without human intervention."
  },
  {
    "term": "Autonomy",
    "definition": "A characteristic of a system that is capable of changing its intended domain of use or its objective without external intervention, control, or supervision."
  },
  {
    "term": "Availability",
    "definition": "The property of being accessible and usable when an authorized entity has a need."
  },
  {
    "term": "Bayesian Network",
    "definition": "Probabilistic model that uses Bayesian inference for probability calculations using a directed acyclic graph."
  },
  {
    "term": "Benchmarking",
    "definition": "Evaluating AI system performance against established standards, reference models, or industry baselines to assess relative quality and identify improvement areas."
  },
  {
    "term": "Bias (Systematic Deviation)",
    "definition": "Systematic differential treatment of certain objects, persons, or groups compared to others. Treatment includes perception, observation, representation, prediction, or decision."
  },
  {
    "term": "Bias Testing",
    "definition": "Evaluating AI system outputs for unfair differences across demographic groups, sensitive attributes, or protected characteristics to detect and mitigate algorithmic bias."
  },
  {
    "term": "Biometric Data",
    "definition": "Personal data resulting from specific technical processing relating to physical, physiological, or behavioral characteristics allowing unique identification — special category under GDPR."
  },
  {
    "term": "Breach Notification",
    "definition": "GDPR requirement to notify the supervisory authority within 72 hours of becoming aware of a personal data breach, and to communicate high-risk breaches to affected data subjects."
  },
  {
    "term": "Brittleness",
    "definition": "A model's tendency to fail catastrophically when encountering inputs slightly outside its training distribution — indicates lack of robustness and generalization."
  },
  {
    "term": "Business Context",
    "definition": "The organizational environment, objectives, constraints, and stakeholder expectations within which an AI system is designed, developed, and deployed."
  },
  {
    "term": "Business Objectives",
    "definition": "The organizational goals that an AI system is intended to serve — deployment decisions must start with objectives rather than model capability alone."
  },
  {
    "term": "CE Marking",
    "definition": "The physical or digital marking indicating conformity with EU health, safety, and environmental requirements — required for high-risk AI systems under the EU AI Act."
  },
  {
    "term": "Choice",
    "definition": "A privacy principle giving individuals options about how their personal data is collected and used, including the ability to opt out of certain processing."
  },
  {
    "term": "Classic AI",
    "definition": "Traditional AI approaches using rule-based systems, statistical methods, and simpler ML algorithms — contrasted with modern generative AI and LLMs."
  },
  {
    "term": "Cloud, On-Premises & Edge Deployment",
    "definition": "The deployment-environment decision: cloud offers scalability and managed infrastructure but raises data-residency and third-party questions; on-premises maximizes control and data sovereignty at higher operational cost; edge deployment puts inference on local devices for latency and privacy benefits with harder update and monitoring logistics."
  },
  {
    "term": "Cognitive Computing",
    "definition": "A category of AI systems that enables more natural interaction between humans and machines."
  },
  {
    "term": "Competent Authorities",
    "definition": "Regulatory or oversight bodies"
  },
  {
    "term": "Complexity",
    "definition": "A characteristic of AI systems requiring governance: advanced techniques like neural networks create interrelationships between inputs and outputs that are difficult to trace or understand."
  },
  {
    "term": "Computer Vision",
    "definition": "The ability of a functional unit to capture, process, and interpret image or video data. May include wavelengths beyond visible light (e.g., infrared)."
  },
  {
    "term": "Concept Drift",
    "definition": "A change in the underlying relationship between input data and expected outputs over time, often due to real-world changes that invalidate the model's learned patterns."
  },
  {
    "term": "Confabulation",
    "definition": "NIST AI 600-1 GAI risk: a generative model confidently producing false or fabricated content (often called hallucination). Classified among the technical/model risks unique to or exacerbated by GAI."
  },
  {
    "term": "Conformity Assessment",
    "definition": "The process of verifying that high-risk AI systems meet EU AI Act requirements before market placement — may involve self-assessment or third-party notified bodies."
  },
  {
    "term": "Conformity Requirements",
    "definition": "The specific standards, regulations, and internal policies an AI system must satisfy before deployment — including technical, legal, and ethical compliance obligations."
  },
  {
    "term": "Connectionism (Connectionist Paradigm)",
    "definition": "A form of cognitive modeling that uses a network of interconnected units, which are generally simple computational units."
  },
  {
    "term": "Consent",
    "definition": "A privacy principle requiring freely given, specific, informed, and unambiguous indication of the data subject's agreement to processing of their personal data."
  },
  {
    "term": "Consumer Protection",
    "definition": "Laws and regulations prohibiting unfair, deceptive, or abusive acts and practices (UDAAP/UDAP) in consumer transactions — applies to AI-driven products and services."
  },
  {
    "term": "Content Provenance (NIST AI 600-1)",
    "definition": "Tracking the origin and history of digital content. One of the four primary GAI considerations in NIST AI 600-1, alongside governance, pre-deployment testing, and incident disclosure."
  },
  {
    "term": "Context of the Organization",
    "definition": "ISO 42001 Clause 4: understanding internal and external factors affecting the AI Management System, including stakeholder needs, legal requirements, and organizational objectives."
  },
  {
    "term": "Continuous Monitoring",
    "definition": "Ongoing observation of deployed AI system performance, data inputs/outputs, and environmental conditions to detect drift, degradation, or unexpected behavior in real time."
  },
  {
    "term": "Continuous Validation",
    "definition": "Ongoing verification that system meets requirements in production"
  },
  {
    "term": "Controllability",
    "definition": "A property of an AI system that enables a human or another external agent to intervene in the system's operation."
  },
  {
    "term": "Convolutional Neural Network (CNN)",
    "definition": "Feedforward neural network with convolution in at least one of its layers."
  },
  {
    "term": "Copyright",
    "definition": "Legal protection for original works of authorship fixed in a tangible medium. AI training on copyrighted content without authorization is subject to ongoing litigation (e.g., Getty v. Stability AI)."
  },
  {
    "term": "Copyright Chapter (GPAI CoP)",
    "definition": "GPAI Code of Practice chapter applying to ALL GPAI providers: a copyright policy, compliance with text-and-data-mining opt-outs under Art 4(3) CDSM, and measures against infringing outputs."
  },
  {
    "term": "Counterfactual Fairness",
    "definition": "A fairness criterion assessing whether a model's decision would change if a sensitive attribute (gender, race) were altered while keeping all other factors constant."
  },
  {
    "term": "Cross-Border Data Transfer",
    "definition": "The transfer of personal data outside the EU/EEA, requiring appropriate safeguards such as adequacy decisions, standard contractual clauses, or binding corporate rules."
  },
  {
    "term": "Cross-Functional Collaboration",
    "definition": "Multiple departments (legal, engineering, ethics, product, compliance) sharing responsibility for AI governance decisions to ensure diverse perspectives."
  },
  {
    "term": "Data Acquisition",
    "definition": "The process of collecting and sourcing data for AI training, including verification of lawful rights, quality assessment, and documentation of origin."
  },
  {
    "term": "Data Annotation",
    "definition": "A process in which data is provided with a set of descriptive information without the data itself being altered."
  },
  {
    "term": "Data Augmentation",
    "definition": "The process of creating synthetic samples by modifying or utilizing existing data."
  },
  {
    "term": "Data Controller",
    "definition": "The entity that determines the purposes and means of processing personal data — carries primary accountability for GDPR compliance in AI contexts."
  },
  {
    "term": "Data Dependency",
    "definition": "A characteristic of AI requiring governance: most AI systems depend heavily on data quality, volume, and diversity — poor or biased data leads to inaccurate or unfair outcomes."
  },
  {
    "term": "Data Drift",
    "definition": "A change in the statistical properties of input data over time, potentially degrading model performance as the production data diverges from training data."
  },
  {
    "term": "Data Governance",
    "definition": "The overall management of data availability, usability, integrity, and security — ensuring data is lawfully collected, accurate, sufficient, and fit for its intended AI use."
  },
  {
    "term": "Data Integrity",
    "definition": "The accuracy, consistency, and trustworthiness of data throughout its lifecycle — critical for AI systems where corrupted or tampered data produces unreliable outputs."
  },
  {
    "term": "Data Lineage",
    "definition": "The tracking of data's lifecycle and processing — where it came from, how it was transformed, where it moved. Essential for traceability and audit readiness."
  },
  {
    "term": "Data Minimization",
    "definition": "A GDPR principle requiring that only personal data necessary for the specific task be collected and processed — critical for AI systems that tend to hoard data."
  },
  {
    "term": "Data Protection Impact Assessment (DPIA)",
    "definition": "A mandatory risk assessment under GDPR Article 35 required when processing is likely to result in high risk to individuals, including when AI processes sensitive data."
  },
  {
    "term": "Data Protection Officer (DPO)",
    "definition": "A mandatory role under GDPR for certain organizations — responsible for advising on data protection obligations, monitoring compliance, and serving as contact point for authorities."
  },
  {
    "term": "Data Provenance",
    "definition": "Documentation of data's origin, collection method, licensing, and conditions of collection — distinct from lineage which tracks movement and transformation."
  },
  {
    "term": "Data Quality Review",
    "definition": "A process in which data is checked for completeness, systematic deviations (bias), and other factors that impair its usefulness for an AI system."
  },
  {
    "term": "Data Sampling",
    "definition": "Process of selecting a subset of data samples expected to exhibit similar patterns and trends as the larger dataset."
  },
  {
    "term": "Data Set",
    "definition": "Collection of data with a common format."
  },
  {
    "term": "Data Sheet",
    "definition": "A standardized document describing a dataset's composition, collection process, recommended uses, and limitations — supports responsible data governance for AI training."
  },
  {
    "term": "Data Subject Access Request (DSAR)",
    "definition": "A formal request by an individual to an organization to access their personal data and information about how it is processed — challenging when AI models have memorized training data."
  },
  {
    "term": "Data Subject Rights",
    "definition": "GDPR-granted rights including access (Art 15), rectification (Art 16), erasure (Art 17), restriction (Art 18), portability (Art 20), and objection (Art 21)."
  },
  {
    "term": "Deactivation Policy",
    "definition": "Documented procedures for safely taking an AI system offline — triggered by regulatory requirements, performance issues, or safety concerns with controlled shutdown steps."
  },
  {
    "term": "Decision Tree",
    "definition": "Model in which inference is encoded as paths from the root to a leaf node in a tree structure."
  },
  {
    "term": "Decommissioning",
    "definition": "Planned retirement, data disposition, model archival"
  },
  {
    "term": "Deep Learning",
    "definition": "*\\<Artificial Intelligence>* An approach to creating rich hierarchical representations through the training of neural networks with many hidden layers. Deep learning is a subset of ML."
  },
  {
    "term": "Deidentification",
    "definition": "Techniques to remove or obscure personally identifying information from datasets — includes pseudonymization, aggregation, and generalization approaches."
  },
  {
    "term": "Deployment",
    "definition": "Integration into operational environment, user training"
  },
  {
    "term": "Design & Construction",
    "definition": "Data collection/preparation, model design, training, tuning"
  },
  {
    "term": "Design Defect",
    "definition": "A product liability claim where the product's design is inherently unsafe — AI systems with flawed architectures or inadequate safety features may face design defect claims."
  },
  {
    "term": "Deterministic Output",
    "definition": "System outputs that are entirely predictable given the same inputs, characteristic of traditional rule-based systems. Contrasts with probabilistic AI outputs."
  },
  {
    "term": "Differential Privacy",
    "definition": "A mathematical framework for quantifying privacy loss when analyzing datasets — ensures individual records cannot be inferred from aggregate outputs."
  },
  {
    "term": "Disparate Impact",
    "definition": "Unintentional discrimination where an AI system's neutral policy disproportionately harms a protected group — still unlawful under civil rights laws even without intent."
  },
  {
    "term": "Disparate Treatment",
    "definition": "Intentional discrimination where an AI system explicitly treats individuals differently based on protected characteristics — prohibited under civil rights laws."
  },
  {
    "term": "Documentation and Reporting",
    "definition": "The systematic recording of AI lifecycle activities, decisions, risks, and incidents to establish compliance, traceability, and audit readiness."
  },
  {
    "term": "Downstream Harm",
    "definition": "Negative consequences that ripple from an AI system's outputs to affect individuals, groups, or systems further along the value chain beyond the immediate deployment context."
  },
  {
    "term": "Echo Chamber",
    "definition": "A phenomenon where AI-driven content recommendation systems reinforce existing beliefs by limiting exposure to diverse perspectives, contributing to polarization."
  },
  {
    "term": "Entry into Force (EU AI Act)",
    "definition": "August 1, 2024 — the AI Act formally entered into force (published in the Official Journal July 12, 2024). Entry into force started the clock but imposed no immediate obligations."
  },
  {
    "term": "Ethical Considerations",
    "definition": "Moral principles and values that should guide AI development and deployment — includes fairness, dignity, autonomy, transparency, and prevention of harm."
  },
  {
    "term": "Ethics by Design",
    "definition": "Integrating ethical considerations at every stage of AI system development, from problem definition through deployment and monitoring."
  },
  {
    "term": "EU AI Act",
    "definition": "Regulation (EU) 2024/1689 — the world's first comprehensive AI law establishing a risk-based regulatory framework. Effective August 2024, general application August 2026."
  },
  {
    "term": "EU AI Act Penalty Tiers",
    "definition": "Prohibited AI practices: up to €35M or 7% of global annual turnover (whichever is higher). Non-compliance with high-risk obligations: up to €15M or 3%. Supplying incorrect or misleading information to authorities: up to €7.5M or 1%."
  },
  {
    "term": "European AI Office",
    "definition": "EU body housed within the European Commission that coordinates supervision of GPAI models with systemic risk, maintains the public database of high-risk AI systems, and issues guidance and best practices."
  },
  {
    "term": "Executive Order 14110",
    "definition": "US Executive Order on Safe, Secure, and Trustworthy AI (2023) that directed NIST to develop the Generative AI Profile (NIST AI 600-1) as a companion to the AI RMF."
  },
  {
    "term": "Expert System",
    "definition": "An AI system that accumulates, combines, and integrates knowledge provided by one or more human experts in a specific domain to derive solutions to problems."
  },
  {
    "term": "Explainability",
    "definition": "A property of an AI system that allows important factors influencing the results of the AI system to be expressed in a way that is understandable to humans. Intended to answer \"Why?\" without claiming optimality."
  },
  {
    "term": "Explainable and Interpretable",
    "definition": "NIST trustworthiness characteristic: AI system's mechanisms and outputs can be understood by humans — explainability (can justify) + interpretability (can trace reasoning)."
  },
  {
    "term": "Exploding Gradient",
    "definition": "A phenomenon in backpropagation training in a neural network in which large error gradients accumulate and lead to very large updates of the weights, causing the model to become unstable."
  },
  {
    "term": "Exploratory Data Analysis (EDA)",
    "definition": "Initial examination of the data to identify its salient features and assess its quality."
  },
  {
    "term": "External Communication Plan",
    "definition": "A documented strategy for communicating about AI system incidents, capabilities, limitations, and changes to stakeholders including customers, regulators, and the public."
  },
  {
    "term": "F1 Score",
    "definition": "The harmonic mean of precision and recall — a balanced metric combining both false positives and false negatives, preferred when class distributions are uneven."
  },
  {
    "term": "Face Recognition",
    "definition": "Automatic pattern recognition that compares stored images of human faces with an actual face image and displays any match with identifying data."
  },
  {
    "term": "Fair Use",
    "definition": "A legal doctrine permitting limited use of copyrighted material without permission for purposes such as criticism, comment, news reporting, teaching, scholarship, or research."
  },
  {
    "term": "Fairness",
    "definition": "A core principle of responsible AI: AI systems must not discriminate against individuals or groups based on race, gender, religion, ethnicity, disability, or socioeconomic status."
  },
  {
    "term": "Federated Learning",
    "definition": "A training approach where models are trained across decentralized devices using local data, without transferring raw data to a central server — enhances privacy."
  },
  {
    "term": "Feedback Loop",
    "definition": "A cycle where AI system outputs influence future inputs, potentially amplifying biases or errors over time — requires monitoring and circuit-breaking mechanisms."
  },
  {
    "term": "Feedforward Neural Network (FFNN)",
    "definition": "Neural network in which information is directed from the input layer to the output layer in only one direction."
  },
  {
    "term": "Fine-Tuning",
    "definition": "The process of adapting a pre-trained AI model to a specific task or domain by additional training on targeted data — balances customization with resource efficiency."
  },
  {
    "term": "Fit-for-Purpose",
    "definition": "Assessment that data is appropriate and adequate for the specific AI use case — considering quality, quantity, representativeness, and relevance to the intended task."
  },
  {
    "term": "General AI (GAI)",
    "definition": "A type of AI system that performs a broad spectrum of tasks at a satisfactory level of performance. Note: AGI is often used in a broader sense — systems that can perform all tasks a human is capable of."
  },
  {
    "term": "General Data Protection Regulation (GDPR)",
    "definition": "EU Regulation 2016/679 — comprehensive data protection framework governing processing of personal data, with significant implications for AI systems processing EU residents' data."
  },
  {
    "term": "General-Purpose AI (GPAI)",
    "definition": "EU AI Act category: AI models with significant generality, capable of performing a wide range of tasks. Those posing systemic risk face additional obligations."
  },
  {
    "term": "Generative AI",
    "definition": "AI systems that create new content — text, images, code, audio, video — based on patterns learned from training data. A subset of AI exemplified by LLMs and diffusion models."
  },
  {
    "term": "Generative AI Profile (NIST AI 600-1)",
    "definition": "Cross-sectoral NIST AI RMF profile for generative AI (July 2024), developed under Executive Order 14110. Defines 12 GAI-specific risks and suggests actions organized by the Govern, Map, Measure, Manage functions."
  },
  {
    "term": "Govern Function",
    "definition": "NIST AI RMF function: establishing organizational culture of risk management — policies, accountability structures, workforce diversity, and third-party oversight."
  },
  {
    "term": "GPAI Transitional Period",
    "definition": "GPAI models placed on the market before August 2, 2025 have until August 2, 2027 to reach full compliance with the EU AI Act's GPAI obligations."
  },
  {
    "term": "Ground Truth",
    "definition": "Value of the target variable for a specific element of the labeled input data."
  },
  {
    "term": "Hallucination",
    "definition": "A phenomenon where an AI model generates plausible-sounding but factually incorrect or fabricated information — a significant risk in LLM deployment."
  },
  {
    "term": "Heteronomy",
    "definition": "A characteristic of a system that functions under the constraint of external intervention, measures, or supervision."
  },
  {
    "term": "Human in the Loop",
    "definition": "A safeguard where a human reviews, overrides, or validates AI decisions in high-stakes scenarios, maintaining accountability in consequential decision-making."
  },
  {
    "term": "Human Oversight",
    "definition": "EU AI Act requirement that high-risk AI systems be designed to allow natural persons to oversee their operation, intervene when necessary, and override automated decisions."
  },
  {
    "term": "Human-Centricity",
    "definition": "A principle of responsible AI: AI systems should be designed with human well-being and dignity in mind, augmenting rather than replacing human capabilities."
  },
  {
    "term": "Human-Machine Teaming",
    "definition": "Integration of human interaction and machine intelligence."
  },
  {
    "term": "Hyperparameter",
    "definition": "A feature of a machine learning algorithm that influences its learning process. Selected **prior** to training."
  },
  {
    "term": "Image Recognition",
    "definition": "An image classification process that classifies objects, patterns, or concepts in an image."
  },
  {
    "term": "Impact Assessment",
    "definition": "A systematic evaluation of potential harms, benefits, compliance gaps, and ethical issues an AI system may create — required for high-risk systems under the EU AI Act."
  },
  {
    "term": "Imputation",
    "definition": "A procedure in which missing data are replaced by estimated or modeled data."
  },
  {
    "term": "Incident Management",
    "definition": "The process of detecting, containing, assessing, remediating, and documenting events where AI systems deviate from intended behavior or cause harm."
  },
  {
    "term": "Inference",
    "definition": "A form of reasoning in which conclusions are derived from known premises. In AI, a basic premise is either a fact, a rule, a model, a feature, or raw data."
  },
  {
    "term": "Input Data",
    "definition": "Data for which an AI system calculates a predicted result or inference."
  },
  {
    "term": "Integration Testing",
    "definition": "Validating that all components of an AI system work together correctly — data flows, API calls, model inference, and downstream system interactions."
  },
  {
    "term": "Intellectual Property",
    "definition": "Legal rights protecting creations of the mind — copyright, patents, trademarks, trade secrets — increasingly challenged by AI training on protected content."
  },
  {
    "term": "Interpretability",
    "definition": "The ability to understand the relationships between patterns in data used by an AI system. Related to explainability but focused on internal mechanics."
  },
  {
    "term": "Interpretability Testing",
    "definition": "Assessing whether AI system decisions can be understood and explained in human terms — critical for high-stakes domains like healthcare and finance."
  },
  {
    "term": "ISO 31000:2018",
    "definition": "The generic risk management standard that ISO/IEC 23894 mirrors clause-by-clause and extends with AI-specific guidance — principles (Clause 4), framework (Clause 5), and process (Clause 6). ISO 23894 extends it; it does not replace it."
  },
  {
    "term": "ISO/IEC 22989",
    "definition": "International standard establishing terminology and definitions for AI systems, capabilities, and lifecycle stages — foundational reference for all other ISO AI standards."
  },
  {
    "term": "ISO/IEC 42001",
    "definition": "The first AI-specific management system standard organizations can certify against (like ISO 27001 for security). Specifies requirements for an AI Management System (AIMS)."
  },
  {
    "term": "Issue Management",
    "definition": "The systematic process of identifying, tracking, prioritizing, and resolving problems with deployed AI systems — bridging incidents to long-term remediation."
  },
  {
    "term": "Knowledge",
    "definition": "*\\<Artificial Intelligence>* Abstracted information about objects, events, concepts, or rules, their relationships, and properties, organized for purposeful systematic use. Does **not** imply cognitive abilities."
  },
  {
    "term": "Language vs. Multimodal Models",
    "definition": "A model-type choice in deployment evaluation: language models process and generate text only, while multimodal models handle combinations of text, images, audio, or video. Multimodality expands use cases and also expands the risk surface — each added modality brings its own failure modes, biases, and content risks."
  },
  {
    "term": "Large Language Model (LLM)",
    "definition": "A type of AI model trained on vast text corpora, capable of understanding and generating human-like text. Examples: GPT-4, Claude, Gemini."
  },
  {
    "term": "Life Cycle",
    "definition": "The development of a system, product, service, project, or other human-made entity from planning through to decommissioning."
  },
  {
    "term": "Limited Memory AI",
    "definition": "AI systems that retain information for short periods and use past experiences to improve decisions. Example: autonomous vehicles processing recent traffic data."
  },
  {
    "term": "Localization Policy",
    "definition": "Procedures for restricting an AI system's operation to specific geographic regions, jurisdictions, or contexts — often required by data residency or regulatory mandates."
  },
  {
    "term": "Long Short-Term Memory (LSTM)",
    "definition": "A type of recurrent neural network that processes sequential data with satisfactory performance for both long- and short-term dependencies."
  },
  {
    "term": "Machine Learning (ML)",
    "definition": "The process of optimizing model parameters using computer-aided methods so that the behavior of the model corresponds to the data or experience."
  },
  {
    "term": "Machine Learning Algorithm",
    "definition": "Algorithm for determining parameters of a machine learning model from data according to specified criteria."
  },
  {
    "term": "Machine Learning Model",
    "definition": "A mathematical construct that makes an inference or a prediction based on input data or information. Result of training based on a ML algorithm."
  },
  {
    "term": "Machine Translation (MT)",
    "definition": "Task of automatically translating text or speech from one natural language into another using a computer system."
  },
  {
    "term": "Maintenance Schedule",
    "definition": "A planned cadence for AI system updates, retraining, and maintenance — frequency determined by risk level, data volatility, and regulatory requirements."
  },
  {
    "term": "Manage Function",
    "definition": "NIST AI RMF function: allocating risk resources to mapped and measured risks — prioritizing, responding to, and recovering from AI incidents, plus ongoing monitoring."
  },
  {
    "term": "Manufacturing Defect",
    "definition": "A product liability claim where a product deviates from its intended design during production — AI systems with deployment errors or corrupted models."
  },
  {
    "term": "Map Function",
    "definition": "NIST AI RMF function: establishing context to frame AI risks — understanding system purpose, categorization, benefits/costs, and mapping risks to impact on individuals and society."
  },
  {
    "term": "Market Surveillance Powers",
    "definition": "EU AI Act inspection powers: require access to technical documentation, perform unannounced inspections and digital audits, mandate corrective actions, suspend or prohibit marketing, and require withdrawal or recall of non-compliant systems."
  },
  {
    "term": "Measure Function",
    "definition": "NIST AI RMF function: employing quantitative and qualitative methods to analyze and track AI risks — testing, evaluation, verification, and validation (TEVV)."
  },
  {
    "term": "Membership Inference Attack",
    "definition": "A privacy attack that determines whether a specific individual's record was part of a model's training set. A key AI-specific threat that existing privacy policies typically fail to address."
  },
  {
    "term": "Misalignment",
    "definition": "A risk where an AI system's behavior, benign in testing, leads to unintended harmful consequences when deployed — often due to poorly specified objectives."
  },
  {
    "term": "MITRE ATLAS",
    "definition": "Adversarial Threat Landscape for Artificial-Intelligence Systems — a knowledge base of adversary tactics and techniques specific to AI systems, modeled after MITRE ATT&CK."
  },
  {
    "term": "Model",
    "definition": "A physical, mathematical, or other logical representation of a system, an entity, a phenomenon, a process, or data."
  },
  {
    "term": "Model Inversion Attack",
    "definition": "A privacy attack that reconstructs sensitive training data from a model's outputs or parameters. AI-era privacy and security policies must add controls for this threat — traditional policies assume data minimization applies only to storage, not to what a trained model retains."
  },
  {
    "term": "Named Entity Recognition (NER)",
    "definition": "Task of recognizing and labeling the names of entities and their categories for sequences of words."
  },
  {
    "term": "Narrow AI (Weak AI)",
    "definition": "A type of AI system designed to perform specific tasks in order to solve a particular problem."
  },
  {
    "term": "National Competent Authorities (EU AI Act)",
    "definition": "One or more authorities per member state responsible for market surveillance, handling complaints, investigating breaches, and imposing penalties within their jurisdiction."
  },
  {
    "term": "Natural Language",
    "definition": "A language that is or was actively used in a community of people and whose rules can be derived from usage."
  },
  {
    "term": "Natural Language Generation (NLG)",
    "definition": "Task of converting semantic data into natural language."
  },
  {
    "term": "Natural Language Processing (NLP)",
    "definition": "AI systems that understand, interpret, and generate human language by combining linguistics and machine learning. Example: ChatGPT."
  },
  {
    "term": "Natural Language Understanding (NLU)",
    "definition": "Extraction of information from text or speech conveyed in natural language, creating a description of the given text/speech and its representation."
  },
  {
    "term": "Neural Network (NN)",
    "definition": "*\\<Artificial Intelligence>* A network consisting of one or more layers of neurons connected by weighted links with adjustable weights, which accepts input data and generates an output."
  },
  {
    "term": "Neuron",
    "definition": "*\\<Artificial Intelligence>* A primitive processing element that accepts one or more input values and generates an output value by combining the input values and applying an activation function."
  },
  {
    "term": "NIST AI Risk Management Framework (AI RMF)",
    "definition": "NIST AI 100-1 — voluntary framework with four functions (Govern, Map, Measure, Manage) providing organizations a structured approach to AI risk management."
  },
  {
    "term": "NIST AI RMF Playbook",
    "definition": "Companion guide to the NIST AI RMF providing practical implementation guidance, use-case examples, and templates for operationalizing the framework's four functions."
  },
  {
    "term": "NIST ARIA",
    "definition": "Assessing Risks and Impacts of AI — NIST program providing methodologies, tools, and metrics for evaluating AI system safety and trustworthiness across three testing levels."
  },
  {
    "term": "Non-Discrimination Law",
    "definition": "Laws prohibiting unfair treatment based on protected characteristics — applies to AI in employment (Title VII, ADA, ADEA), credit (ECOA), housing (FHA), and insurance."
  },
  {
    "term": "Notice",
    "definition": "A privacy principle requiring organizations to inform individuals about what personal data is collected and how it will be used — foundational to AI transparency."
  },
  {
    "term": "OECD AI Principles",
    "definition": "The first intergovernmental standard on AI (2019, updated 2024) — five principles: inclusive growth, human-centered values, transparency, robustness, and accountability."
  },
  {
    "term": "Opacity",
    "definition": "A characteristic of AI systems requiring governance: the 'black box' nature of some AI models where it is challenging to understand how inputs are transformed into outputs."
  },
  {
    "term": "Open Source Agreement",
    "definition": "License terms governing the use of open-source AI models — may include restrictions on commercial use, attribution requirements, or copyleft provisions."
  },
  {
    "term": "Operation & Monitoring",
    "definition": "Performance monitoring, drift detection, incident management"
  },
  {
    "term": "Operational Controls",
    "definition": "Policies, procedures, and technical mechanisms governing how an AI system functions in production — including access controls, monitoring thresholds, and intervention protocols."
  },
  {
    "term": "Overfitting",
    "definition": "A modeling error where an AI model learns training data too precisely, including noise, and fails to generalize to new data — results in poor real-world performance."
  },
  {
    "term": "Parameter (Model Parameter)",
    "definition": "Internal variable of a model that affects how the model calculates its results."
  },
  {
    "term": "Patent",
    "definition": "Legal protection for novel, useful, and non-obvious inventions. AI-generated inventions raise questions about inventorship (e.g., DABUS/Thaler v. Vidal)."
  },
  {
    "term": "PDCA Cycle",
    "definition": "Plan-Do-Check-Act — the continuous improvement model underlying ISO management system standards including ISO 42001's AI Management System."
  },
  {
    "term": "Performance",
    "definition": "Measurable result. Can refer to quantitative or qualitative findings."
  },
  {
    "term": "Personal Data (PbD)",
    "definition": "All information that can be used to identify the natural person to whom such information relates, or that is/could be directly or indirectly related to a natural person."
  },
  {
    "term": "Personally Identifiable Information (PII)",
    "definition": "Any information that can identify a specific individual, directly or indirectly — name, email, IP address, location data, or online identifiers."
  },
  {
    "term": "Planning",
    "definition": "*\\<Artificial Intelligence>* Data processing operations that assemble a workflow from a series of actions to achieve a specific objective."
  },
  {
    "term": "Post-Market Monitoring",
    "definition": "EU AI Act requirement for ongoing surveillance of high-risk AI systems after deployment — documenting incidents, tracking performance, and reporting to authorities."
  },
  {
    "term": "Potential for Harm",
    "definition": "A characteristic of AI requiring governance: AI can be used maliciously or cause unintended negative consequences through surveillance, autonomous weapons, or malfunction."
  },
  {
    "term": "Precision",
    "definition": "The proportion of positive predictions that are actually correct — measures how many selected items are relevant. High precision = few false positives."
  },
  {
    "term": "Predictability",
    "definition": "A property of an AI system that enables interested parties to make reliable assumptions about the outcome."
  },
  {
    "term": "Prediction",
    "definition": "Primary output of an AI system given input data or information. Does **not** necessarily mean forecasting something in the future."
  },
  {
    "term": "Privacy",
    "definition": "A core principle of responsible AI: organizations must ensure AI systems comply with privacy regulations, track all uses of PII, and provide means for inquiries and corrections."
  },
  {
    "term": "Privacy by Design",
    "definition": "Integrating privacy considerations at every stage of system development, from requirements through deployment, rather than bolting privacy on afterward."
  },
  {
    "term": "Privacy-Enhanced",
    "definition": "NIST trustworthiness characteristic: AI system incorporates safeguards for human autonomy, identity, and dignity through data minimization, anonymization, and consent mechanisms."
  },
  {
    "term": "Probabilistic Output",
    "definition": "Outputs based on probabilities rather than certainties, common in neural networks and ML models. Contrasts with deterministic systems where outputs are fully predictable."
  },
  {
    "term": "Probability Severity Matrix",
    "definition": "A risk assessment tool that quantifies and prioritizes risks by plotting likelihood (probability) against potential impact (severity), typically on a grid."
  },
  {
    "term": "Product Liability",
    "definition": "Legal responsibility of manufacturers and sellers for defective products that cause harm — applies to AI systems under design defect, manufacturing defect, and failure to warn theories."
  },
  {
    "term": "Production Data",
    "definition": "Data collected during the operational phase of an AI system for which a deployed AI system calculates a predicted result or inference."
  },
  {
    "term": "Production Readiness Evaluation",
    "definition": "Structured pre-deployment review that an AI system is production-worthy: safety, accountability, suitability for intended context, regulatory conformity, performance benchmarking, and operational planning."
  },
  {
    "term": "Prohibited AI",
    "definition": "EU AI Act category: AI practices banned entirely — includes social scoring, real-time remote biometric identification in public spaces (with narrow exceptions), and subliminal manipulation."
  },
  {
    "term": "Prompt Injection",
    "definition": "An attack where malicious input manipulates an AI model's behavior by overriding system instructions or injecting harmful content through the user prompt."
  },
  {
    "term": "Proprietary Model Deployment Obligations",
    "definition": "The heightened duties that come with deploying a proprietary third-party model: increased contractual obligations, reliance on vendor claims that cannot be independently verified, potential for higher liability exposure, and dependence on the vendor for updates, incident support, and continuity."
  },
  {
    "term": "Proprietary vs. Open-Source Models",
    "definition": "A core deployment-evaluation choice: proprietary models offer vendor support and cutting-edge capability but limited visibility into training data and terms-of-service constraints; open-source models offer transparency, control, and customization but shift security, hosting, and compliance burden onto the deployer. License terms bind in both cases."
  },
  {
    "term": "Pseudonymization",
    "definition": "Processing personal data so it can no longer be attributed to a specific data subject without additional information kept separately — GDPR encourages as a safeguard."
  },
  {
    "term": "Public Disclosure",
    "definition": "Transparency obligation to publish information about AI system capabilities, limitations, training data, evaluation results, and intended use — supports accountability."
  },
  {
    "term": "Purpose Limitation",
    "definition": "A GDPR principle requiring personal data be collected for specified, explicit, and legitimate purposes and not further processed in an incompatible manner."
  },
  {
    "term": "Quality Management System (QMS)",
    "definition": "A formalized system documenting processes, procedures, and responsibilities for ensuring AI system quality and compliance throughout the lifecycle."
  },
  {
    "term": "Question Answering",
    "definition": "Task of determining the most appropriate answer to a question posed in natural language."
  },
  {
    "term": "RACI Matrix",
    "definition": "A responsibility assignment framework: Responsible (does the work), Accountable (owns the outcome), Consulted (provides input), Informed (kept updated)."
  },
  {
    "term": "Reactive Machines",
    "definition": "AI systems that respond to specific stimuli without memory or learning capability. They operate on pre-programmed rules. Example: IBM Deep Blue."
  },
  {
    "term": "Reasoning AI",
    "definition": "AI systems with advanced pattern analysis and prediction capabilities. Most current LLMs fall in this category, capable of passing standardized tests."
  },
  {
    "term": "Reassessment",
    "definition": "Periodic review of continued fitness for purpose"
  },
  {
    "term": "Recall",
    "definition": "The proportion of actual positives correctly identified — measures how many relevant items are selected. High recall = few false negatives."
  },
  {
    "term": "Record Keeping",
    "definition": "The obligation for controllers and processors to maintain records of processing activities, including purposes, data categories, recipients, and retention periods."
  },
  {
    "term": "Recurrent Neural Network (RNN)",
    "definition": "A neural network in which the outputs of both the previous layer and the previous processing step are fed into the current layer."
  },
  {
    "term": "Red Teaming",
    "definition": "Adversarial testing where a team simulates attacks or misuse scenarios to uncover vulnerabilities that standard testing might miss — critical for AI safety evaluation."
  },
  {
    "term": "Reinforcement Learning (RL)",
    "definition": "Learning an optimal sequence of actions to maximize a reward through interaction with an environment."
  },
  {
    "term": "Reliability",
    "definition": "Property of the correspondence between intended behavior and the results."
  },
  {
    "term": "Resilience",
    "definition": "The ability of a system to quickly recover its operational state following an incident."
  },
  {
    "term": "Responsible AI",
    "definition": "A framework ensuring AI systems are designed, developed, and deployed to respect human rights, promote fairness, and minimize risks while benefiting individuals and society."
  },
  {
    "term": "Retraining",
    "definition": "Updating a trained model through training with other training data."
  },
  {
    "term": "Retrieval Augmented Generation (RAG)",
    "definition": "A technique where an AI model retrieves relevant external data at query time to augment its responses, improving accuracy and reducing hallucinations."
  },
  {
    "term": "Right to Erasure",
    "definition": "GDPR Article 17: the right of individuals to have their personal data deleted in certain circumstances — raises 'machine unlearning' challenges for AI systems."
  },
  {
    "term": "Risk",
    "definition": "The effect of uncertainty on objectives. Deviation can be positive, negative, or both. Characterized by risk drivers, potential events, consequences, and likelihood."
  },
  {
    "term": "Robotics",
    "definition": "AI systems capable of performing kinetic physical tasks such as carrying objects, moving, and more advanced tasks like cooking."
  },
  {
    "term": "Robustness",
    "definition": "The ability of a system to maintain its performance level under **all** circumstances."
  },
  {
    "term": "Safe",
    "definition": "NIST trustworthiness characteristic: AI system does not, under defined conditions, lead to a state in which human life, health, property, or the environment is endangered."
  },
  {
    "term": "Safety & Security Chapter (GPAI CoP)",
    "definition": "GPAI Code of Practice chapter applying ONLY to systemic-risk GPAI providers: safety and security framework, risk identification and analysis, mitigations, serious-incident reporting, and cybersecurity."
  },
  {
    "term": "Sample",
    "definition": "An atomic data element that is processed in batches by a machine learning algorithm or an AI system."
  },
  {
    "term": "Secondary Use",
    "definition": "The use of an AI system or its outputs for purposes beyond the original intended use case — creates unanticipated risks requiring governance oversight."
  },
  {
    "term": "Secure and Resilient",
    "definition": "NIST trustworthiness characteristic: AI system can withstand adverse events and recover to normal function while maintaining confidentiality, integrity, and availability."
  },
  {
    "term": "Security",
    "definition": "A core principle of responsible AI: protecting sensitive data (PII, IP, copyrighted content) used by AI systems from unauthorized access, compromise, and theft."
  },
  {
    "term": "Security Testing",
    "definition": "Evaluating AI system resistance to attacks — includes adversarial example testing, prompt injection testing, model extraction attempts, and API security validation."
  },
  {
    "term": "Self-Aware AI",
    "definition": "The highest theoretical level of AI possessing consciousness and self-awareness. Would recognize its own existence. Currently does not exist."
  },
  {
    "term": "Semi-Supervised Learning",
    "definition": "A training method using a small amount of labeled data combined with a large amount of unlabeled data. The AI learns from labeled examples then predicts labels for the rest."
  },
  {
    "term": "Semi-Supervised Machine Learning",
    "definition": "Machine learning in which both labeled and unlabeled data are used during training."
  },
  {
    "term": "Sensitive Data",
    "definition": "Data requiring heightened protection due to potential for harm if misused — includes special category data plus financial, location, and children's data depending on jurisdiction."
  },
  {
    "term": "Sentiment Analysis",
    "definition": "Task to computationally identify and categorize opinions expressed in text, speech, or image to determine a range of sentiments (e.g., positive to negative)."
  },
  {
    "term": "Small vs. Large Models",
    "definition": "A deployment-evaluation trade-off: larger models generally offer broader capability but cost more to run, respond slower, and carry a larger risk surface; smaller models are cheaper, faster, and easier to control but may underperform on complex tasks. The governing question is fitness for the specific use case, not maximum capability."
  },
  {
    "term": "Soft Computing",
    "definition": "A field of data processing that tolerates and exploits imprecision, uncertainty, and partial truth to make problem-solving more transparent and robust."
  },
  {
    "term": "Special Category Data",
    "definition": "GDPR Article 9 data types subject to stricter processing prohibitions: race, ethnicity, politics, religion, trade union membership, genetics, biometrics, health, sex life, sexual orientation."
  },
  {
    "term": "Speech Recognition (STT)",
    "definition": "Conversion of a speech signal into a representation of the speech content by a functional unit."
  },
  {
    "term": "Speech Synthesis (TTS)",
    "definition": "Generation of artificial speech."
  },
  {
    "term": "Speed and Scale",
    "definition": "A characteristic of AI systems requiring governance: AI processes data and makes decisions far faster than humans and at massive scale, creating both opportunities and risks."
  },
  {
    "term": "Stakeholder (Interested Party)",
    "definition": "An individual, group, or organization that can influence a decision or activity, be affected by it, or feel affected by it."
  },
  {
    "term": "Stakeholder Mapping",
    "definition": "The process of identifying all parties affected by an AI system, understanding their concerns, interests, and influence — essential for comprehensive risk management."
  },
  {
    "term": "Stress Testing (AI)",
    "definition": "Pre-release testing under expected and edge-case workloads: latency and throughput benchmarks, memory/compute usage under load, failover behavior during outages, and evaluation against adversarial and malicious prompts."
  },
  {
    "term": "STRIDE",
    "definition": "A threat modeling framework: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege — adapted for AI security analysis."
  },
  {
    "term": "Sub-Tier Dependencies",
    "definition": "Hidden supply-chain risk beneath a contracted AI vendor: subcontracted data-labeling teams, models trained on scraped or copyrighted data, and outdated code libraries. A core challenge is how many levels down the TPRM program should probe."
  },
  {
    "term": "Subsymbolic AI",
    "definition": "AI based on techniques and models that use an implicit encoding of information derived from experience or raw data."
  },
  {
    "term": "Supervised Learning",
    "definition": "A training method using labeled data where the AI learns from examples with known correct answers. Example: spam filter trained on labeled spam/legitimate messages."
  },
  {
    "term": "Supervised Machine Learning",
    "definition": "Machine learning in which only labeled data is used during training."
  },
  {
    "term": "Support Vector Machine (SVM)",
    "definition": "Machine learning algorithm that finds decision boundaries with maximum margin."
  },
  {
    "term": "Symbolic AI",
    "definition": "AI based on techniques and models that manipulate symbols and structures according to explicitly defined rules."
  },
  {
    "term": "System Card",
    "definition": "A transparency document describing an AI system's architecture, training data, intended use, limitations, and ethical considerations — broader scope than a model card."
  },
  {
    "term": "Task",
    "definition": "*\\<Artificial Intelligence>* Action required to achieve a specific goal. Examples: classification, regression, ranking, clustering, dimensionality reduction."
  },
  {
    "term": "Technical Documentation",
    "definition": "Required documentation for high-risk AI systems demonstrating compliance — includes system design, training methodologies, testing results, and risk management measures."
  },
  {
    "term": "Test Data (Evaluation Data)",
    "definition": "Data used to evaluate the performance of a final model. Distinct from training data and validation data."
  },
  {
    "term": "Theory of Mind AI",
    "definition": "A theoretical advanced AI that could understand and simulate human emotions, beliefs, intentions, and thoughts. Example: HAL-9000 (fictional)."
  },
  {
    "term": "Third-Party Processor",
    "definition": "An entity that processes personal data on behalf of the data controller — must have a contract specifying scope, safeguards, and responsibilities (GDPR Art 28)."
  },
  {
    "term": "Third-Party Risk Management (TPRM)",
    "definition": "Governance of outsourced AI components — pretrained models, cloud infrastructure, data labeling, algorithmic APIs. For AI it must evolve beyond traditional vendor checklists to cover black-box algorithms, datasets of unknown origin, and unpredictable LLM APIs."
  },
  {
    "term": "Trade Secret",
    "definition": "Confidential business information providing competitive advantage. AI models and training methodologies may be protected as trade secrets if reasonable secrecy measures are maintained."
  },
  {
    "term": "Trained Model",
    "definition": "Result of model training."
  },
  {
    "term": "Training (Model Training)",
    "definition": "Process for determining or improving the parameters of a machine learning model, based on a ML algorithm, using training data."
  },
  {
    "term": "Training and Awareness Program",
    "definition": "An organizational program delivering AI terminology, strategy, and governance education to all stakeholders, tailored to each role's interaction with AI."
  },
  {
    "term": "Training and Testing",
    "definition": "The phase where AI models learn from data (training) and are evaluated for accuracy, bias, and performance (testing) before deployment."
  },
  {
    "term": "Training Data",
    "definition": "Data used to train a machine learning model."
  },
  {
    "term": "Transfer Learning",
    "definition": "A set of methods in which data intended for solving one problem is used to apply the knowledge gained from it to another problem."
  },
  {
    "term": "Transparency (Organization)",
    "definition": "The characteristic of an organization whereby relevant activities and decisions are communicated to relevant interested parties in a comprehensive, accessible, and understandable manner."
  },
  {
    "term": "Transparency (System)",
    "definition": "A characteristic of a system whereby appropriate information about the system is made available to relevant interested parties. May include: characteristics, performance, limitations, components, procedures, measures, design objectives, data sources, labeling protocols."
  },
  {
    "term": "Transparency Chapter (GPAI CoP)",
    "definition": "GPAI Code of Practice chapter applying to ALL GPAI providers: model documentation, information to downstream providers, and the Annex XI/XII technical documentation obligations of Articles 53(1)(a)-(b)."
  },
  {
    "term": "Trustworthiness",
    "definition": "The ability to meet the expectations of interested parties in a verifiable manner. Characteristics include: reliability, availability, resilience, security, privacy, accountability, transparency, integrity, authenticity, quality, and user-friendliness. Applies to services, products, technologies, data, information, and organizations."
  },
  {
    "term": "Underfitting",
    "definition": "A modeling error where an AI model is too simple to capture underlying patterns in the data — results in poor performance on both training and new data."
  },
  {
    "term": "Unfair and Deceptive Acts and Practices (UDAP)",
    "definition": "FTC-enforced standard prohibiting misleading or harmful business practices. AI systems making unsubstantiated claims or hiding AI involvement may violate UDAP."
  },
  {
    "term": "Unintended Use",
    "definition": "Application of an AI system in ways not anticipated by its developers — may produce harmful outcomes due to mismatched capabilities and context."
  },
  {
    "term": "Unit Testing",
    "definition": "Testing individual components or functions of an AI system in isolation to verify each part works correctly before integration."
  },
  {
    "term": "Unsupervised Learning",
    "definition": "A training method using unlabeled data where the AI must detect patterns independently. Example: customer segmentation from a CRM database."
  },
  {
    "term": "Unsupervised Machine Learning",
    "definition": "Machine learning in which only unlabeled data is used during training."
  },
  {
    "term": "Use Case",
    "definition": "A specific application scenario defining what problem the AI system solves, for whom, under what conditions, and with what expected outcomes — foundational to governance."
  },
  {
    "term": "Use Case Assessment",
    "definition": "The process of evaluating a proposed AI application against organizational policies, risk appetite, and ethical standards before development begins."
  },
  {
    "term": "User Training",
    "definition": "Education provided to individuals who interact with AI systems — covering capabilities, limitations, appropriate use, and how to flag unexpected or harmful outputs."
  },
  {
    "term": "Valid and Reliable",
    "definition": "NIST trustworthiness characteristic: AI system produces accurate (valid) and consistent (reliable) outputs under specified conditions."
  },
  {
    "term": "Validation",
    "definition": "Confirmation by providing objective evidence that the requirements for a specific intended use or a specific intended application have been met."
  },
  {
    "term": "Validation Data (Development Data)",
    "definition": "Data used to compare the performance of different candidate models. Used to tune hyperparameters."
  },
  {
    "term": "Vendor Agreement",
    "definition": "Contract with third-party AI providers specifying data usage rights, performance guarantees, liability allocation, audit rights, and compliance obligations."
  },
  {
    "term": "Verification",
    "definition": "Confirmation by providing objective evidence that specified requirements have been met. Ensures only that a product conforms to its specifications."
  },
  {
    "term": "Verification & Validation",
    "definition": "Testing against specifications, intended use validation"
  },
  {
    "term": "Workforce Readiness",
    "definition": "Assessment of whether staff have the skills, training, and awareness to effectively use, monitor, and govern AI systems in their operational context."
  },
  {
    "term": "Zero-Shot Learning (ZSL)",
    "definition": "A machine learning technique where an AI model recognizes objects or concepts without having seen any training examples of those categories."
  }
];