> **Proposal, not yet in the manuscript.** This is Chapter 1 rewritten to the contract in `docs/specs/book-non-narrative.md`. When approved it replaces the Chapter 1 block in `aigp-book.md`.
>
> Original Chapter 1: 3,976 words. This: 3,344. Only 16% shorter, and that is the finding worth noticing. Removing the scene, the coda and The Record saves 629 words; citing six real cases costs about 700 back. De-narrativizing alone does not reach the 55,000 to 65,000 word target. Reaching it needs a second pass that tightens the teaching prose itself.

## Chapter 1: What AI Is, and Why It Needs Governance

Governance of AI begins with three questions that are harder than they look: what counts as an AI system, what can go wrong with it, and why the controls an organization already has do not answer the first two. This chapter settles all three.

- Section 1.1 gives a working test for what belongs on an AI inventory, then four taxonomies for classifying whatever passes it.
- Section 1.2 sorts harms by who suffers them, which is also what decides who owns the response.
- Section 1.3 names the seven characteristics that separate AI from conventional software, and pairs each with the control it justifies. That pairing is the spine of every framework in this book.
- Section 1.4 sets out the six principles that answer those characteristics, and the translation problem between the four vocabularies that carry them.

Domain I is the smallest of the four by question count, 16 to 20 of the exam's 100 scored items, and it is tested as sector-agnostic: an answer that assumes a particular industry, sector or size is usually wrong. Its importance is reach rather than volume, because every later domain reasons with the vocabulary and the pairings installed here.

The cases this chapter draws on are real, and each is cited where it appears.

| Case | Citable as | Drawn on for |
|---|---|---|
| Moffatt v. Air Canada | 2024 BCCRT 149, decided 14 February 2024 | Confabulation, and accountability that cannot be delegated |
| SyRI | Rechtbank Den Haag, 5 February 2020 | Group harm, opacity, data dependency |
| FTC v. Rite Aid | FTC consent order, December 2023 | Individual harm, autonomy, oversight failure |
| Zillow Offers | Zillow Group results, 2 November 2021 | Complexity, speed and scale, organizational harm |
| Garante v. Luka Inc. | Garante order, 10 April 2025 | Data protection by design, vulnerable users |
| Arup deepfake transfer | Reported January 2024 | Misuse, information integrity |

### 1.1 What Counts as AI

"Artificial intelligence" covers technology ranging from a chess engine that evaluates only the current board position to a language model that writes poetry, generates code and explains the difference between an interest rate and an APR. Such systems have almost nothing in common under the hood, yet they provoke the same regulatory questions. A clear taxonomy is therefore the precondition for any risk analysis worth doing.

Learn one definition. The OECD's 2023 definition, which the EU AI Act's Article 3(1) closely tracks, holds that an **AI system** is a machine-based system that, for explicit or implicit objectives, infers from the input it receives how to generate outputs such as predictions, content, recommendations or decisions that can influence physical or virtual environments, with systems varying in autonomy and adaptiveness after deployment. For inventory purposes the operative word is "infers." A system that only executes rules written in advance by a person is not inferring.

Four taxonomies then describe what is on the list. Real analysis mixes them, and each answers a different question.

**Capability.** **Narrow AI** performs a specific task or narrow task family. **Artificial general intelligence (AGI)** would match human-level competence across essentially all cognitive domains, and **artificial superintelligence (ASI)** would surpass the best human performance in all of them. As of this writing every deployed system is narrow AI. The trap is breadth: a general-purpose chatbot that answers questions on law, medicine and poetry is still narrow, because generality means transfer across unrelated domains rather than the size of a training set.

**Functionality.** This lens asks about memory. **Reactive machines** respond to input with no memory of the past, and Deep Blue is the canonical example. **Limited memory** systems retain recent context to inform the next decision, which describes most modern systems, from recommendation engines to a chat assistant within a conversation. **Theory of mind** and **self-aware AI** remain conceptual categories rather than deployed technology.

**Learning paradigm.** How practitioners actually describe a system. **Supervised learning** trains on labeled input and output pairs, the way a spam filter learns from messages marked "spam" or "not spam." **Unsupervised learning** finds structure in unlabeled data, as a customer-segmentation model clusters buying patterns without being told what the segments are. **Semi-supervised learning** combines a small labeled set with a large unlabeled corpus, which helps when labels are expensive. **Reinforcement learning** learns a policy that maximizes a reward signal through interaction with an environment. **Self-supervised learning** derives labels from the data itself, and is the paradigm behind modern language models.

**Generative stack.** The layering behind generative AI. **Neural networks** compose trainable units, **deep learning** stacks many layers of them, and **transformers** made attention practical at scale, which enabled **large language models**. **Foundation models** are broad pretrained models adapted to downstream tasks by fine-tuning, prompting or retrieval. Two properties of this lineage matter for governance. Scale buys capability, sometimes abruptly, so a model's capabilities cannot always be listed in advance (Section 1.3 returns to this). And a pretrained model carries its training data's properties, biases included, into every downstream use.

One category has recently moved to the centre of the governance conversation. An **AI agent** perceives its environment and takes action toward goals, rather than only returning a prediction when asked. **Agentic AI** therefore moves from advising a human to acting on the world, which changes the controls required. A draft a human can ignore is advice. A payment plan created through a servicing API is an action, and it needs an action limit, an audit trail and a way to stop it. Section 11.4 designs one.

### 1.2 Sorting the Harms

Harms sort four ways, by who suffers them, and the category decides who owns the response.

Harms to **individuals** include privacy violation, discriminatory decisions in hiring or credit, physical safety failure, manipulation and loss of autonomy. In December 2023 the FTC found that Rite Aid's facial recognition system falsely tagged shoppers as shoplifters, disproportionately women and people of colour, and banned the company from using the technology for security or surveillance for five years. The victims were individuals, but the pattern was not.

Harms to **groups** include systematic bias against protected classes, amplification through feedback loops and erosion of shared factual ground. SyRI, a Dutch welfare fraud risk-scoring system, scored people living in already poor neighbourhoods. The court that struck it down in 2020 cited the real risk of discrimination and stigmatisation of citizens by socio-economic status and migration background. The harm ran to a population, which is why no single complaint could have surfaced it.

Harms to **organizations** include regulatory penalty, litigation, reputational damage, intellectual property contamination, security exposure and operational disruption. Zillow Offers, an automated home-valuation business, overpaid for houses at scale and closed in November 2021 having taken a $304 million write-down and cut roughly a quarter of its workforce.

Harms to **society** include misinformation and deepfakes, displacement of work, concentration of capability, and the environmental cost of training and inference. In January 2024 a finance employee at the engineering firm Arup transferred roughly HK$200 million, about US$25 million, across fifteen transactions after a video call in which the chief financial officer and colleagues were generated by AI.

The BOK adds three examples of AI risk that cut across the sort. **Misalignment with objectives** is a system optimizing the metric it was given rather than the outcome anyone wanted, such as a support dashboard tuned to the share of chats closed without a human, which rewards keeping customers away from people. **Ethics and bias risk** is unfair or harmful treatment that the data or the objective encoded. **Complexity and scalability** is the multiplier: a flaw in a manual process harms the people it touches, while one mis-weighted feature in a scoring model harms every applicant scored before anyone notices.

Generative AI adds failures of its own. NIST's Generative AI Profile (NIST AI 600-1, July 2024) names twelve risks unique to or amplified by generative AI, catalogued in Section 7.4. The most significant is **confabulation**, the formal term for hallucination: confidently stated, plausible, false output, which is a property of the paradigm rather than an occasional bug. In Moffatt v. Air Canada, an airline chatbot invented a bereavement-fare policy that did not exist, the customer relied on it, and the British Columbia Civil Resolution Tribunal held the airline liable for negligent misrepresentation. The remaining named risks include harmful bias and homogenization, information integrity (the deepfake and disinformation problem), data privacy, information security, intellectual property, and value-chain and component integration, meaning the risk inherited from models and data you did not build.

The sort is not academic. An individual harm usually triggers a rights or recourse process. A group harm triggers fairness testing and remediation. An organizational harm runs through the risk register and the board. A societal harm may have no internal owner at all, which is exactly why impact assessments exist. A harm that is not assigned to a category tends not to get a control.

### 1.3 What Makes AI Different

Conventional IT controls assume that software is specified, deterministic and stable. AI violates all three. The BOK names seven characteristics that separate AI from ordinary software, and each one defeats a specific assumption, which is what justifies a specific control. Learn them as pairs. Most applied questions in this domain are either a characteristic asking for its control, or a control asking which characteristic it answers.

| Characteristic | Assumption it defeats | Control it justifies |
|---|---|---|
| Complexity | Human intuition and simple review; many interacting parts and emergent behavior | Layered testing, documentation, auditability, decomposition into components |
| Opacity | The ability to explain a specific decision to the person affected | Explainability techniques, model cards, disclosure duties, contestability |
| Autonomy | The assumption that a human is in the decision loop | Human oversight design, action limits, interruption and override, kill switches |
| Speed and scale | The assumption that errors are caught locally and slowly | Pre-deployment testing, continuous monitoring, defined rollback criteria |
| Potential for harm or misuse | The assumption that capability is used as intended | Impact assessment, ethics review, security controls, red teaming |
| Data dependency | The assumption that behavior is specified in code | Data governance, lineage and provenance, representativeness and bias testing |
| Probabilistic outputs | Binary notions of correct and incorrect | Confidence thresholds, abstention, monitoring, user training against over-trust |

Read the middle column top to bottom and you have the list of things IT governance takes for granted. Three rows carry the most weight.

**Probabilistic output.** Traditional software returns the same output for the same input, and a defect is a deviation from specification. A model returns a statistical estimate, so the same input may yield different outputs, and being wrong is a property of the method rather than a bug. A claim of 97% accuracy is not a clearance. The useful follow-up questions are who the 3% are, what happens to them, and where that is written down. "Accurate 97% of the time" describes residual risk, nothing more.

**Data dependency** makes AI governance inseparable from data governance. Provenance, representativeness and quality determine the outcome, which is why lineage, provenance and bias testing appear in every framework and, for high-risk systems, in law. SyRI is the cautionary version: the data it scored on encoded socio-economic and migration patterns, so the model reproduced them.

**Opacity** is the gap between a confident output and an explanation of it. Rite Aid's system produced flags its operators could not interrogate, and the FTC's complaint turned on the absence of reasonable safeguards rather than on the model's error rate. Zillow's valuation model is the speed and scale row made financial: a model that was individually plausible in every case was collectively wrong, and the correction arrived only after the inventory had been bought.

**Emergence.** The seven form a list rather than a taxonomy, and this book adds an eighth trait that sits behind several of them. **Emergence** is not on the BOK's list. It means capabilities and behaviors can appear after deployment through scale, fine-tuning, data drift or interaction with other systems. Research on emergent abilities reports behaviors that appear only past a size threshold, though how abrupt those jumps are is debated, partly because the answer depends on how capability is measured. Emergence is the reason point-in-time approval is insufficient and monitoring and reassessment are continuous. It is also why the Arup transfer succeeded: nothing in the fraud was a defect in a system, only an AI's output used as though it were a person's.

### 1.4 The Principles That Answer Them

If the characteristics define the problem, principles describe what good looks like. The BOK names six responsible AI principles, and the discipline is to tie each one to a control the organization will actually run.

1. **Fairness** requires equitable treatment and outcomes across groups, through bias testing across subgroups, fairness metrics chosen for the context, mitigation and documented trade-offs.
2. **Safety and reliability** require intended function under expected and unexpected conditions, through rigorous testing, edge-case and adversarial testing, fail-safes, interruptibility and continuous monitoring.
3. **Privacy and security** require protected personal data and systems resilient to attack, through minimization, de-identification, access control, AI-specific threat modeling and pipeline security.
4. **Transparency and explainability** require that people know AI is in use and can understand outcomes affecting them, through disclosure, instructions for use, explanations of decisions, documentation and contestability.
5. **Accountability** requires identified humans who answer for outcomes, through named owners, a RACI, escalation paths, audit rights and records.
6. **Human-centricity** requires that AI augments human agency rather than overriding it, through human oversight of consequential decisions, impact assessment and design that preserves choice.

The same substance appears in four different vocabularies, which is best read as a series of stages by which principles become obligations. The voluntary **OECD AI Principles** (2019, revised 2024) name five: inclusive growth, sustainable development and well-being; respect for the rule of law, human rights and democratic values; transparency and explainability; robustness, security and safety; and accountability. The voluntary **NIST AI Risk Management Framework** names seven trustworthiness characteristics: valid and reliable; safe; secure and resilient; accountable and transparent; explainable and interpretable; privacy-enhanced; and fair with harmful bias managed. The **EU AI Act** turns similar substance into legal requirements for high-risk systems in Articles 9 to 15 (risk management, data governance, technical documentation, record-keeping, transparency and instructions for use, human oversight, and accuracy, robustness and cybersecurity), plus the Article 50 transparency duties. Section 7.1 holds the crosswalk and Section 6.2 the law.

A governance professional is expected to translate between these on demand, and three distinctions recur in every one of them.

**Transparency** concerns the organization: that AI is in use, what it does and what its limits are. **Explainability** concerns a specific output, and whether the person affected can understand why it came out that way. **Interpretability** is the underlying model property that makes explanation possible at all.

**Responsibility** is who does the work, and **accountability** is who answers for the outcome. They are usually different people, and accountability cannot be delegated to a model or a vendor. Air Canada tested that boundary directly, arguing before the tribunal that its chatbot was "a separate legal entity that is responsible for its own actions." The tribunal rejected it: the chatbot was part of the airline's website, and the airline answered for what it said. Every accountability framework in this book exists to prevent that failure in advance.

**Fairness is plural.** Several fairness metrics cannot hold at the same time except in degenerate cases, so "make it fair" is not a specification. The governance answer is to choose metrics for the context, document the trade-off and test across subgroups.

When controls compete, the one that honors more of the principles, with documentation and proportionality, is almost always the better choice, and a control that bundles several principles into one function is rarely adequate. Without a control attached, a principle is a statement of intent, and statements of intent do not survive contact with a delivery deadline.

### Exam Focus

These are the points this chapter's material most often turns on.

- Domain I is tested as sector-agnostic, and the exam's harm examples are generic.
- The chapter's four sections track competency I.A's four performance indicators: definitions and types, risks and harms, characteristics, and principles.
- Know the four taxonomies and the five learning paradigms, and watch the breadth trap: a model that answers across many subjects is still narrow AI, because generality means transfer across unrelated domains.
- Harms sort by who is harmed (individuals, groups, organizations, society), and the BOK's three examples (misalignment with objectives, ethics and bias risk, complexity and scalability) cut across that sort.
- Learn the seven characteristics verbatim: complexity, opacity, autonomy, speed and scale, potential for harm or misuse, data dependency, and probabilistic outputs.
- Probabilistic versus deterministic output is easy to gloss over and heavily tested: a model can be wrong without any defect.
- Emergence is this book's addition, not a tested characteristic, and the BOK's list is a set of characteristics rather than a taxonomy.
- The BOK's six principles are the canonical set, and mapping questions expect translation into OECD, NIST AI RMF and EU AI Act terms.
- Hold three distinctions: transparency (organization), explainability (output) and interpretability (model property), then responsibility (doing the work) versus accountability (answering for it, never delegable to a model or vendor), and fairness as plural.
- Principles are the tiebreaker, so the answer that honors more principles with documentation and proportionality is almost always intended, and "assign it to legal" is a classic distractor.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): AI Agent, AI System, Artificial General Intelligence (AGI), Artificial Superintelligence (ASI), Complexity, Convolutional Neural Network (CNN), Deep Learning, Deterministic Output, Expert System, Exploding Gradient, Feedforward Neural Network (FFNN), Foundation Model, General AI (GAI), Generative AI, Hyperparameter, Inference, Large Language Model (LLM), Long Short-Term Memory (LSTM), Machine Learning (ML), Machine Learning Algorithm, Machine Learning Model, Model, Narrow AI (Weak AI), Natural Language Processing (NLP), Neural Network (NN), Probabilistic Output, Reactive Machines, Reasoning AI, Recurrent Neural Network (RNN), Reinforcement Learning (RL), Robotics, Sample, Self-Aware AI, Semi-Supervised Learning, Semi-Supervised Machine Learning, Supervised Learning, Supervised Machine Learning, Support Vector Machine (SVM), Theory of Mind AI, Training (Model Training), Training Data, Unsupervised Learning, Unsupervised Machine Learning, Zero-Shot Learning (ZSL), Deepfake, Disinformation, Downstream Harm, Echo Chamber, F1 Score, Hallucination, Misalignment, Misinformation, Sensitive Data, Unfair and Deceptive Acts and Practices (UDAP), Unintended Use, User Training, Autonomy, Ethical Considerations, Limited Memory AI, Opacity, Potential for Harm, Speed and Scale, Contestability, Ethics by Design, Explainability, Human-Centricity, Interpretability, Interpretability Testing, Trustworthy AI.

### Further Reading

- [OECD: what is an AI system?](https://oecd.ai/en/wonk/definition): the definitional baseline the BOK uses
- [ISO/IEC 22989:2022 (free from IEC)](https://webstore.iec.ch/en/publication/77839): formal definitions for the learning paradigms and system terms
- [Emergent Abilities of Large Language Models](https://arxiv.org/abs/2206.07682): capabilities that appear only past a scale threshold
- [NIST AI RMF (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): AI system and AI actor definitions, and the risk framing
- [NIST AI 600-1, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): the twelve GAI risks and the actions mapped to each
- [OECD AI Principles](https://oecd.ai/en/ai-principles): the intergovernmental baseline, adopted 2019 and revised 2024
- [EU AI Act, Article 5 (prohibited practices)](https://artificialintelligenceact.eu/article/5/): the harms serious enough to be banned outright
- [Moffatt v. Air Canada, 2024 BCCRT 149](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html): liability for a chatbot's misrepresentation, and the rejected "separate legal entity" argument
- [FTC v. Rite Aid Corporation](https://www.ftc.gov/legal-library/browse/cases-proceedings/2023190-rite-aid-corporation-ftc-v): the consent order and the five-year facial recognition ban
- [Digital Freedom Fund: the SyRI case](https://digitalfreedomfund.org/case-studies/the-syri-welfare-fraud-risk-scoring-algorithm/): the judgment and the discrimination risk the court cited
- [Zillow Group Q3 2021 results](https://investors.zillowgroup.com/): the Zillow Offers write-down and wind-down
- [Garante: fine against Luka Inc. (Replika)](https://www.edpb.europa.eu/news/ai-the-italian-supervisory-authority-fines-company-behind-chatbot-replika_en): the EUR 5m order and the age-verification findings
- [OECD AI Incidents and Hazards Monitor](https://oecd.ai/en/incidents): real, catalogued AI incidents and near misses, and the standing source for cases added later
