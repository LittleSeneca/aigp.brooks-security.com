---
tags:
 - aigp/reference
 - aigp/standards
 - aigp/iso
 - aigp/terminology
aliases:
 - ISO 22989
 - AI Terminology Standard
created: 2026-07-11
---

# ISO/IEC 22989 — Key Definitions Glossary

> **Full Title:** ISO/IEC 22989:2022 — Information technology — Artificial intelligence — Artificial intelligence concepts and terminology
>
> **Status:** International Standard (published 2022)
>
> **Scope:** Establishes terminology for AI and describes concepts in the field of AI. Applicable to all types of organizations.

## Cross-References

- [[AIGP Body of Knowledge — Exam Blueprint]]
- [[ISO 42001 — Structured Reference]]
- [[AI Standards and Frameworks]]
- [[ISO 23894 — AI Risk Management]]

---

## 1. Core AI Terms (Clause 3.1)

| Term | ISO 22989 Definition | Governance Notes |
|------|---------------------|-----------------|
| **Artificial Intelligence (AI)** | *\<Discipline>* Research and development of mechanisms and applications of AI systems. R&D can take place in fields such as computer science, data science, humanities, mathematics, and natural sciences. | The standard defines AI only as a *discipline*, not a technology. The context: "AI is a technical and scientific field that deals with technical systems that generate outputs such as content, predictions, recommendations, or decisions for a specific, human-defined objective." |
| **AI System** | A technical system that generates results such as content, forecasts, recommendations, or decisions for a specific, human-defined objective. May use various techniques and approaches related to AI to develop a model for representing data, knowledge, processes, etc. Designed to operate with varying degrees of automation. | This is the foundational definition used by **ISO 42001** and **ISO 23894**. An AI system is engineered, goal-directed, and operates at varying levels of automation. |
| **AI Agent** | Automated entity that perceives and reacts to its environment and takes actions to achieve its goals. | Agent paradigm: sensors → perception → action. Types include reflexive, model-based, goal/utility-based, and learning agents. |
| **AI Component** | Functional element that constitutes an AI system. | Granularity concept — systems are composed of components that may themselves be AI or non-AI. |
| **Model** | A physical, mathematical, or other logical representation of a system, an entity, a phenomenon, a process, or data. | Generic definition used as a building block for ML model, trained model, etc. |
| **Autonomy** | A characteristic of a system that is capable of changing its intended domain of use or its objective without external intervention, control, or supervision. | Highest level on the automation spectrum (Level 6). Distinct from automation (which operates within fixed parameters). |
| **Automation** | Relating to a process or system that operates under certain conditions without human intervention. | Spectrum: no automation → partial automation → full automation → autonomy. |
| **Heteronomy** | A characteristic of a system that functions under the constraint of external intervention, measures, or supervision. | The "controlled" end of the autonomy spectrum. |
| **Narrow AI (Weak AI)** | A type of AI system designed to perform specific tasks in order to solve a particular problem. | All current AI systems are narrow AI. Contrast with General AI. |
| **General AI (GAI)** | A type of AI system that performs a broad spectrum of tasks at a satisfactory level of performance. Note: AGI is often used in a broader sense — systems that can perform all tasks a human is capable of. | Not yet technically feasible. Important for risk horizon scanning and governance. |
| **Knowledge** | *\<Artificial Intelligence>* Abstracted information about objects, events, concepts, or rules, their relationships, and properties, organized for purposeful systematic use. Does **not** imply cognitive abilities. | Technical, non-cognitive definition. Part of the data → information → knowledge hierarchy. |
| **Inference** | A form of reasoning in which conclusions are derived from known premises. In AI, a basic premise is either a fact, a rule, a model, a feature, or raw data. | Refers to both the process and its result. |
| **Prediction** | Primary output of an AI system given input data or information. Does **not** necessarily mean forecasting something in the future. | May refer to translations, synthetic images, or diagnosis of past events. |
| **Task** | *\<Artificial Intelligence>* Action required to achieve a specific goal. Examples: classification, regression, ranking, clustering, dimensionality reduction. | Actions can be physical or cognitive. |
| **Performance** | Measurable result. Can refer to quantitative or qualitative findings. | Covers management/control of activities, processes, products, systems, or organizations. |
| **Life Cycle** | The development of a system, product, service, project, or other human-made entity from planning through to decommissioning. | ISO 22989 defines an AI-system-specific life cycle model (see Clause 6). |
| **Symbolic AI** | AI based on techniques and models that manipulate symbols and structures according to explicitly defined rules. | Provides declarative results. Traditional/expert-system approach. |
| **Subsymbolic AI** | AI based on techniques and models that use an implicit encoding of information derived from experience or raw data. | Statistical approach (e.g., neural networks). Results come with a probability of error. Modern AI systems are typically **hybrid** (combining both). |
| **Expert System** | An AI system that accumulates, combines, and integrates knowledge provided by one or more human experts in a specific domain to derive solutions to problems. | Classical symbolic AI approach. |
| **Soft Computing** | A field of data processing that tolerates and exploits imprecision, uncertainty, and partial truth to make problem-solving more transparent and robust. | Encompasses fuzzy logic, ML, probabilistic reasoning. |
| **Cognitive Computing** | A category of AI systems that enables more natural interaction between humans and machines. | Linked to ML, speech processing, NLP, computer vision, HMI. |
| **Continuous Learning** (Ongoing/Lifelong Learning) | Incremental training of an AI system that takes place continuously during the operational phase of the AI system's lifecycle. | Special case of retraining. Model updates occur repeatedly at high frequency. Poses significant verification challenges. |
| **Planning** | *\<Artificial Intelligence>* Data processing operations that assemble a workflow from a series of actions to achieve a specific objective. | May also include human-performed actions in AI management standards. |

---

## 2. Data Terms (Clause 3.2)

| Term | ISO 22989 Definition | Governance Notes |
|------|---------------------|-----------------|
| **Data Set** | Collection of data with a common format. | Used for training, validation, or testing of AI models. |
| **Data Annotation** | A process in which data is provided with a set of descriptive information without the data itself being altered. | Metadata, annotations, anchor points. |
| **Data Quality Review** | A process in which data is checked for completeness, systematic deviations (bias), and other factors that impair its usefulness for an AI system. | Critical governance checkpoint. Data quality directly affects AI system trustworthiness. |
| **Data Augmentation** | The process of creating synthetic samples by modifying or utilizing existing data. | Expands datasets when data is insufficient. |
| **Data Sampling** | Process of selecting a subset of data samples expected to exhibit similar patterns and trends as the larger dataset. | Ideally, the subset is representative of the entire dataset. |
| **Exploratory Data Analysis (EDA)** | Initial examination of the data to identify its salient features and assess its quality. | Includes identification of missing values, outliers, and representativeness. |
| **Ground Truth** | Value of the target variable for a specific element of the labeled input data. | Does **not** imply the labeled data consistently matches actual values. |
| **Input Data** | Data for which an AI system calculates a predicted result or inference. | The live data fed to the system. |
| **Production Data** | Data collected during the operational phase of an AI system for which a deployed AI system calculates a predicted result or inference. | Distinct from training/test data. May exhibit data drift over time. |
| **Training Data** | Data used to train a machine learning model. | See 3.3.16 below. |
| **Test Data (Evaluation Data)** | Data used to evaluate the performance of a final model. Distinct from training data and validation data. | Must be **never shown** to the model during training or tuning. |
| **Validation Data (Development Data)** | Data used to compare the performance of different candidate models. Used to tune hyperparameters. | Separate from test data and (generally) training data. Cross-validation and bootstrapping are common when data is scarce. |
| **Sample** | An atomic data element that is processed in batches by a machine learning algorithm or an AI system. | Fundamental unit of ML processing. |
| **Imputation** | A procedure in which missing data are replaced by estimated or modeled data. | Data quality remediation technique. |
| **Personal Data (PbD)** | All information that can be used to identify the natural person to whom such information relates, or that is/could be directly or indirectly related to a natural person. | Aligned with privacy regulation concepts. |

---

## 3. Machine Learning Terms (Clause 3.3)

| Term | ISO 22989 Definition | Governance Notes |
|------|---------------------|-----------------|
| **Machine Learning (ML)** | The process of optimizing model parameters using computer-aided methods so that the behavior of the model corresponds to the data or experience. | Core AI technique. Data-driven approach to model building. |
| **Machine Learning Algorithm** | Algorithm for determining parameters of a machine learning model from data according to specified criteria. | E.g., linear regression, SVM, decision trees. |
| **Machine Learning Model** | A mathematical construct that makes an inference or a prediction based on input data or information. Result of training based on a ML algorithm. | Distinct from the algorithm — the model is the *output* of training. |
| **Parameter (Model Parameter)** | Internal variable of a model that affects how the model calculates its results. | Examples: weights in a neural network, state transition probabilities in a Markov model. |
| **Hyperparameter** | A feature of a machine learning algorithm that influences its learning process. Selected **prior** to training. | Examples: number of layers, learning rate, kernel function choice, k in k-means. |
| **Training (Model Training)** | Process for determining or improving the parameters of a machine learning model, based on a ML algorithm, using training data. | The core learning process. |
| **Trained Model** | Result of model training. | Should be usable by an AI system to make predictions on production data. |
| **Retraining** | Updating a trained model through training with other training data. | Triggered by data drift, concept drift, or insufficient initial data. Risk: catastrophic forgetting. |
| **Supervised Machine Learning** | Machine learning in which only labeled data is used during training. | Used for classification, regression, structured prediction. |
| **Unsupervised Machine Learning** | Machine learning in which only unlabeled data is used during training. | Used for clustering, dimensionality reduction. |
| **Semi-Supervised Machine Learning** | Machine learning in which both labeled and unlabeled data are used during training. | Hybrid approach — useful when labeling is expensive. |
| **Reinforcement Learning (RL)** | Learning an optimal sequence of actions to maximize a reward through interaction with an environment. | Trial-and-error learning. Agents receive indirect feedback. |
| **Transfer Learning** | A set of methods in which data intended for solving one problem is used to apply the knowledge gained from it to another problem. | E.g., using house-number recognition to recognize handwritten digits. |
| **Decision Tree** | Model in which inference is encoded as paths from the root to a leaf node in a tree structure. | Comparable to flowcharts. Used for classification and regression. |
| **Support Vector Machine (SVM)** | Machine learning algorithm that finds decision boundaries with maximum margin. | Maximum margin classifier. Uses kernel functions for higher-dimensional mapping. |
| **Bayesian Network** | Probabilistic model that uses Bayesian inference for probability calculations using a directed acyclic graph. | Useful for causality, incomplete data handling, overfitting mitigation. |
| **Human-Machine Teaming** | Integration of human interaction and machine intelligence. | Important governance concept — relates to human oversight requirements. |

---

## 4. Neural Network Terms (Clause 3.4)

| Term | ISO 22989 Definition | Governance Notes |
|------|---------------------|-----------------|
| **Neural Network (NN)** | *\<Artificial Intelligence>* A network consisting of one or more layers of neurons connected by weighted links with adjustable weights, which accepts input data and generates an output. | Outstanding example of the connectionist approach. Originally inspired by biological neurons. |
| **Deep Learning** | *\<Artificial Intelligence>* An approach to creating rich hierarchical representations through the training of neural networks with many hidden layers. Deep learning is a subset of ML. | Reduces/eliminates need for feature engineering. Can require significant time and computational resources. |
| **Neuron** | *\<Artificial Intelligence>* A primitive processing element that accepts one or more input values and generates an output value by combining the input values and applying an activation function. | Basic building block of neural networks. |
| **Activation Function** | A function applied to the weighted combination of all inputs to a neuron. Typically nonlinear. | Enables learning of complex features. Examples: threshold, sigmoid, polynomial. |
| **Feedforward Neural Network (FFNN)** | Neural network in which information is directed from the input layer to the output layer in only one direction. | Simplest NN architecture. No connections within the same layer. |
| **Convolutional Neural Network (CNN)** | Feedforward neural network with convolution in at least one of its layers. | Common applications: image recognition, video captioning, NLP. |
| **Recurrent Neural Network (RNN)** | A neural network in which the outputs of both the previous layer and the previous processing step are fed into the current layer. | Deals with ordered sequences (audio, video, text). Has state-dependent properties. |
| **Long Short-Term Memory (LSTM)** | A type of recurrent neural network that processes sequential data with satisfactory performance for both long- and short-term dependencies. | Solves the vanishing gradient problem in RNNs. |
| **Exploding Gradient** | A phenomenon in backpropagation training in a neural network in which large error gradients accumulate and lead to very large updates of the weights, causing the model to become unstable. | Training instability risk. |
| **Connectionism (Connectionist Paradigm)** | A form of cognitive modeling that uses a network of interconnected units, which are generally simple computational units. | Theoretical foundation for neural network approaches. |

---

## 5. Trustworthiness Terms (Clause 3.5)

> **Critical for AIGP Exam:** These definitions underpin the trustworthiness characteristics referenced in ISO 42001, ISO 23894, and the EU AI Act.

| Term | ISO 22989 Definition | Governance Notes |
|------|---------------------|-----------------|
| **Trustworthiness** | The ability to meet the expectations of interested parties in a verifiable manner. Characteristics include: reliability, availability, resilience, security, privacy, accountability, transparency, integrity, authenticity, quality, and user-friendliness. Applies to services, products, technologies, data, information, and organizations. | **Anchor concept** for AI governance. Must be **verifiable**. |
| **Accountability** | The state of being accountable (responsible for actions, decisions, and performance). Refers to an assigned responsibility based on regulations, agreements, or delegation. A person or entity is accountable to another using specific means and criteria. | Key for governance frameworks. Distinct from mere responsibility. |
| **Bias (Systematic Deviation)** | Systematic differential treatment of certain objects, persons, or groups compared to others. Treatment includes perception, observation, representation, prediction, or decision. | ISO definition focuses on *systematic* differential treatment — not random variation. Modified from ISO/IEC TR 24027:2021. |
| **Explainability** | A property of an AI system that allows important factors influencing the results of the AI system to be expressed in a way that is understandable to humans. Intended to answer "Why?" without claiming optimality. | Distinct from transparency. Focuses on human understanding of *specific* outputs. |
| **Transparency (System)** | A characteristic of a system whereby appropriate information about the system is made available to relevant interested parties. May include: characteristics, performance, limitations, components, procedures, measures, design objectives, data sources, labeling protocols. | System-level openness. Note: inappropriate disclosure may violate security/privacy. |
| **Transparency (Organization)** | The characteristic of an organization whereby relevant activities and decisions are communicated to relevant interested parties in a comprehensive, accessible, and understandable manner. | Organization-level openness. |
| **Robustness** | The ability of a system to maintain its performance level under **all** circumstances. | Absolute standard — "all circumstances" is aspirational. Contrast with resilience. |
| **Reliability** | Property of the correspondence between intended behavior and the results. | Whether the system does what it's supposed to do. |
| **Resilience** | The ability of a system to quickly recover its operational state following an incident. | Focus on *recovery* after failure. Contrast with robustness (maintaining performance). |
| **Controllability** | A property of an AI system that enables a human or another external agent to intervene in the system's operation. | Key for human oversight requirements. |
| **Predictability** | A property of an AI system that enables interested parties to make reliable assumptions about the outcome. | Allows stakeholders to anticipate system behavior. |
| **Verification** | Confirmation by providing objective evidence that specified requirements have been met. Ensures only that a product conforms to its specifications. | "Did we build the system right?" |
| **Validation** | Confirmation by providing objective evidence that the requirements for a specific intended use or a specific intended application have been met. | "Did we build the right system?" |
| **Risk** | The effect of uncertainty on objectives. Deviation can be positive, negative, or both. Characterized by risk drivers, potential events, consequences, and likelihood. | Aligned with ISO 31000:2018 definition. |
| **Availability** | The property of being accessible and usable when an authorized entity has a need. | Information security triad component. |
| **Stakeholder (Interested Party)** | An individual, group, or organization that can influence a decision or activity, be affected by it, or feel affected by it. | Broad definition — includes those who merely *feel* affected. |

---

## 6. NLP Terms (Clause 3.6)

| Term | Definition |
|------|-----------|
| **Natural Language** | A language that is or was actively used in a community of people and whose rules can be derived from usage. |
| **Natural Language Processing (NLP)** — *System* | Information processing based on natural language understanding or natural language generation. |
| **Natural Language Processing (NLP)** — *Discipline* | Discipline concerned with how systems acquire, process, and interpret natural language. |
| **Natural Language Understanding (NLU)** | Extraction of information from text or speech conveyed in natural language, creating a description of the given text/speech and its representation. |
| **Natural Language Generation (NLG)** | Task of converting semantic data into natural language. |
| **Machine Translation (MT)** | Task of automatically translating text or speech from one natural language into another using a computer system. |
| **Speech Recognition (STT)** | Conversion of a speech signal into a representation of the speech content by a functional unit. |
| **Speech Synthesis (TTS)** | Generation of artificial speech. |
| **Sentiment Analysis** | Task to computationally identify and categorize opinions expressed in text, speech, or image to determine a range of sentiments (e.g., positive to negative). |
| **Named Entity Recognition (NER)** | Task of recognizing and labeling the names of entities and their categories for sequences of words. |
| **Automatic Summarization** | Task of shortening a portion of natural language content or text while preserving important semantic information. |
| **Question Answering** | Task of determining the most appropriate answer to a question posed in natural language. |

---

## 7. Computer Vision Terms (Clause 3.7)

| Term | Definition |
|------|-----------|
| **Computer Vision** | The ability of a functional unit to capture, process, and interpret image or video data. May include wavelengths beyond visible light (e.g., infrared). |
| **Image Recognition** | An image classification process that classifies objects, patterns, or concepts in an image. |
| **Face Recognition** | Automatic pattern recognition that compares stored images of human faces with an actual face image and displays any match with identifying data. |

---

## 8. AI System Life Cycle (Clause 6)

ISO 22989 defines the AI system life cycle with the following phases and processes:

| Phase | Key Processes |
|-------|--------------|
| **Adoption** | Needs analysis, feasibility study, stakeholder engagement, requirements definition |
| **Design & Construction** | Data collection/preparation, model design, training, tuning |
| **Verification & Validation** | Testing against specifications, intended use validation |
| **Deployment** | Integration into operational environment, user training |
| **Operation & Monitoring** | Performance monitoring, drift detection, incident management |
| **Continuous Validation** | Ongoing verification that system meets requirements in production |
| **Reassessment** | Periodic review of continued fitness for purpose |
| **Decommissioning** | Planned retirement, data disposition, model archival |

> **Exam Note:** This life cycle is referenced by ISO 42001 (AIMS) and ISO 23894 (Risk Management). Annex C of ISO 23894 maps risk management processes to this life cycle.

---

## 9. AI Ecosystem (Clause 8)

The ISO 22989 ecosystem model includes:

- **AI Systems** — The deployed technical systems
- **AI Function** — What the system does (prediction, classification, etc.)
- **Machine Learning** — The training paradigm
- **Technology** — Expert systems, logic programming, etc.
- **Big Data & Data Sources** — Including cloud computing and edge computing
- **Resource Pools** — ASICs, FPGAs, GPUs, NPUs

---

## 10. Stakeholder Roles (Clause 5.19)

| Role | Description |
|------|-------------|
| **AI Provider** (5.19.2) | Provides AI products or services (sub-roles: AI platform provider, AI product or service provider) |
| **AI Producer** (5.19.3) | Designs, develops, tests and deploys products or services that use AI (sub-role: AI developer) |
| **AI Customer** (5.19.4) | Uses an AI product or service, directly or through a provider (sub-role: AI user) |
| **AI Partner** (5.19.5) | Provides services in the context of AI (sub-roles: AI system integrator, data provider, AI auditor, AI evaluator) |
| **AI Subject** (5.19.6) | Is affected by an AI system, product or service (sub-roles: data subject, other subjects) |
| **Relevant Authorities** (5.19.7) | Policy makers and regulators |

---

## Key Governance Takeaways

1. **ISO 22989 is the terminological foundation** for all other ISO/IEC AI standards — ISO 42001, ISO 23894, ISO 23894, and others normatively reference it.
2. **AI is defined as a discipline**, not a technology — the technology is the "AI system."
3. **Trustworthiness is verifiable** — not aspirational. Characteristics must be evidenced.
4. **Bias is "systematic differential treatment"** — focus is on patterns, not isolated incidents.
5. **Verification ≠ Validation** — verification checks specs, validation checks fitness for intended use.
6. **The life cycle model** is the backbone for management system standards (ISO 42001) and risk management (ISO 23894).
