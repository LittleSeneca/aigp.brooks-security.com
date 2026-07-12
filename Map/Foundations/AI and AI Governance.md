---
tags:
 - aigp/domain-I
 - aigp/area
 - aigp/foundations
created: 2026-07-11
domain: "I: Understanding the Foundations of AI Governance"
subdomain: "I.A: Understand What AI Is and Why It Needs Governance"
related:
 - "[[Foundations Index]]"
 - "[[Organizational Readiness]]"
 - "[[Updating Policies for AI]]"
 - "[[AIGP Exam Questions]]"
---

# AI and AI Governance

> **Domain I, Subdomain I.A** — Understanding the Foundations of AI Governance

## Performance Indicators

- Know the generally accepted **definitions and types of AI**
- Understand the **differences in AI model types**
- Identify **types of risks and harms** posed by AI to individuals, groups, organizations, and society
- Identify **unique characteristics of AI** requiring comprehensive governance
- Identify and apply **common principles of responsible AI**

---

## 1. Types of AI

### Definition

**Artificial Intelligence (AI)** — the simulation of human intelligence processes by machines (learning, reasoning, problem-solving, perception, language understanding).

- **Narrow/specific AI**: Single-task systems (image recognition, speech processing)
- **Broad AI**: Multi-domain systems (LLMs like Claude, Copilot)

### AI Capabilities (by scope)

| Level | Description | Exists? |
|-------|-------------|---------|
| **Narrow AI (Weak AI)** | Designed for a specific task; no general intelligence | Yes (ChatGPT, Deep Blue) |
| **AI Agent** | Autonomous system perceiving environment, taking action toward goals | Yes |
| **General AI (AGI)** | Human-level intelligence across all tasks | No |
| **Artificial Superintelligence (ASI)** | Surpasses human intelligence in all domains | No |
| **God-like AI** | Beyond ASI; incomprehensible to humans | No |

> **Exam note:** AGI and ASI have not been publicly disclosed as of this writing.

### AI Functionalities

| Type | Description | Example |
|------|-------------|---------|
| **Reactive machines** | Respond to stimuli; no memory or learning | IBM Deep Blue |
| **Limited memory AI** | Retain info short-term to improve decisions | Autonomous vehicles |
| **Reasoning AI** | Analyze patterns, make predictions | Modern LLMs (bar exam) |
| **Theory of mind AI** | Understand/simulate human emotions (theoretical) | HAL-9000 (fiction) |
| **Self-aware AI** | Consciousness, self-recognition (theoretical) | Humanoid with introspection |
| **Robotics** | Kinetic tasks (moving objects, cooking) | Factory robots |

### AI Techniques

| Technique | Description | Example |
|-----------|-------------|---------|
| **Machine Learning (ML)** | Learn from data without explicit programming | Spam filters |
| **Deep Learning** | Multi-layer neural networks for unstructured data | Google Translate |
| **Natural Language Processing (NLP)** | Understand/interpret/generate human language | ChatGPT |
| **Expert Systems** | Simulate human expert decision-making via rules | Medical diagnosis |

### Training Methods

| Method | Data Type | Description |
|--------|-----------|-------------|
| **Supervised learning** | Labeled data | Spam filter trained on spam/legitimate examples |
| **Unsupervised learning** | Unlabeled data | AI finds patterns on its own |
| **Semi-supervised learning** | Small labeled + large unlabeled | Image recognition with limited training set |
| **Reinforcement learning** | Rewards/penalties | Robot learning to navigate a maze |
| **Zero-shot learning (ZSL)** | No prior examples | Recognize objects never seen before |

---

## 2. Risks and Harms Posed by AI

### Risks to Individuals

- **Privacy violations** — RAG systems, facial recognition without consent, training on non-anonymized PII
- **Bias and discrimination** — Employment screening, loan applications, financial aid; training data reflects historical inequities
- **Cybersecurity risks** — Identity theft, financial loss, exposed private data; orgs deploying AI without adequate security
- **Loss of visibility, autonomy, control** — Humans taken out of the loop in healthcare, financial services

### Risks to Groups

- **Amplification of social inequality** — Loan qualification bias against communities
- **Erosion of social cohesion** — Echo chambers, polarization, algorithmic content favoring sensationalism
- **Cybersecurity risks** — Critical infrastructure AI vulnerabilities

### Risks to Organizations

- **Operational** — AI failure disrupting inventory, fraud detection, customer service
- **Legal and regulatory** — Violating emerging AI/privacy regulations
- **Financial** — AI trading losses, cost overruns
- **Cybersecurity** — AI-powered security tools making mistakes; poisoning attacks
- **Supply chain** — Vendor-compromise attacks (SolarWinds pattern)
- **Misalignment** — Benign testing behavior leading to harmful deployment outcomes
- **Reputation** — Public disclosure of any realized risk

### Risks to Society

- **Job displacement** — Automation in manufacturing, transport, IT, customer service
- **Economic inequality** — Biased training data causing unequal treatment
- **Erosion of human autonomy** — Over-reliance on algorithmic governance
- **Ethical and moral challenges** — Life-or-death autonomous decisions (trolley problems)
- **Cybersecurity and privacy** — Large-scale infrastructure attacks
- **Manipulation of public opinion** — Algorithmic content control for political gain

> **Key insight:** Risks rarely stay isolated to one level — an employment screening bias harms the applicant (individual), their community (group), the employer (organization), and regional fairness (society).

---

## 3. Characteristics of AI Requiring Governance

| Characteristic | Challenge | Governance Response |
|----------------|-----------|---------------------|
| **Complexity** | Deep learning interrelationships hard to trace | Explainability standards, documentation, auditability |
| **Opacity** | "Black box" — unclear how inputs become outputs | Require explainability, transparency in design |
| **Autonomy** | AI acts without human intervention; evolves over time | Define limits, safety measures, accountability, monitoring |
| **Speed and scale** | Real-time decisions across millions of users | Real-time monitoring, response protocols, resource planning |
| **Potential for harm/misuse** | Surveillance, autonomous weapons, malicious use | Ethical oversight, accountability, security controls |
| **Data dependency** | Quality/volume/bias of training data drives outcomes | Data quality standards, security, bias detection |
| **Privacy** | PII in training data; can't reliably "untrain" AI | Anonymize before training; comply with GDPR, privacy policies |
| **Intellectual property** | Training on copyrighted content; no US legal precedent (2025) | Vet all training data for copyright; workforce policies on public AI use |
| **Probabilistic vs. deterministic** | Outputs are probabilities, not certainties | Define acceptable thresholds, risk appetite, transparency |

> **Notable:** Getty Images v. Stability AI (2023) — alleged unauthorized use of millions of photos for training.

---

## 4. Principles of Responsible AI

### Ethics
- Foundation of responsible AI; must align with human rights, dignity, social good
- **Challenge:** Ethics can be subjective and manipulated; AI can conflict with moral values
- **Application:** Ethical audits by objective external parties, impact assessments, stakeholder engagement

### Fairness
- AI systems must not discriminate based on race, gender, religion, ethnicity, disability, socioeconomic status
- **Challenge:** Training data reflects historical inequities → amplified bias
- **Application:** Diverse/representative training data, regular bias audits, bias mitigation techniques

### Safety and Reliability
- AI must function as intended even with unexpected inputs
- **Challenge:** Malfunctions in safety-critical contexts (autonomous vehicles, healthcare)
- **Application:** Rigorous testing, fail-safes, interruptability, fault tolerance, continuous monitoring

### Privacy
- Comply with all applicable privacy laws; minimize PII collection and use
- **Challenge:** Organizations often exceed their own privacy policies with AI data use
- **Application:** Data minimization, deidentification, security measures

### Security
- Protect sensitive data (PII, IP, copyrighted content) from unauthorized access
- **Challenge:** Organizations prioritize innovation over security; AI subverts traditional trust boundaries
- **Application:** Asset inventory → risk assessment → safeguards → due care

### Transparency and Explainability

> **Transparency** = understanding how AI functions. **Interpretability** = understanding how it reaches conclusions. **Explainability** = ability to provide understandable justifications.

- **Challenge:** Neural networks operate as black boxes; can't explain loan/employment rejections
- **Application:** Prioritize **Explainable AI (XAI)** for decision-making contexts

### Accountability
- Individuals and organizations are responsible for AI outcomes; can't blame the system or vendor
- **Challenge:** Autonomous decisions make it tempting to deflect responsibility
- **Application:** Clear policy assigning responsibility for design, deployment, monitoring; dispute resolution mechanisms

> **Key:** Accountability should lie with **deployers** (not just developers). When deployers are accountable, security becomes a priority.

### Human-centricity
- AI should augment human capabilities, not replace or diminish them
- **Challenge:** Financial efficiency prioritized over human values → worker displacement
- **Application:** Human-centered design, impact assessments, **human in the loop** for consequential decisions

---

## Key Takeaways

1. **Types of AI systems:** Narrow/Weak AI, General AI (AGI), Superintelligence (ASI). AI functions: reactive machines, limited-memory AI, theory of mind AI, robotics.

2. **Characteristics requiring governance:** Complexity, opacity, autonomy, speed/scale, potential for misuse and harm.

3. **Principles of responsible AI:** Ethics, fairness, privacy, security, transparency, explainability, accountability.

---

## Key Terms

- **[[Narrow AI]]** — AI designed for a specific task (e.g., Deep Blue, ChatGPT)
- **[[AGI]]** — Artificial General Intelligence; human-level across all tasks (theoretical)
- **[[Machine Learning]]** — Systems learning from data without explicit programming
- **[[Supervised Learning]]** — Training with labeled data
- **[[Reinforcement Learning]]** — Learning through rewards and penalties
- **[[Explainable AI (XAI)]]** — AI providing understandable reasons for outputs
- **[[Human in the Loop]]** — Human oversight in consequential AI decisions
- **[[Probabilistic Output]]** — AI outputs based on probabilities, not certainties
- **[[Bias]]** — Systemic unfairness in AI outcomes from training data or design
- **[[RAG]]** — Retrieval Augmented Generation; AI accessing external data stores
