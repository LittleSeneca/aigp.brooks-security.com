> **Proposal, not yet in the manuscript.** This replaces the Chapter 3 block in `aigp-book.md`. Original: 2,847 words. Everything below is manuscript content.

## Chapter 3: Policies Across the Life Cycle

Chapter 1 gave the organization a vocabulary, and Chapter 2 gave its decisions owners. This chapter completes Part I with the rulebook, the subject of BOK competency I.C, establishing policies and procedures across the life cycle.

Most governance failures are not caused by a broken rule. They are caused by a rule written for a world that has changed. Three assumptions run through most policy binders, and AI breaks all three: that a human makes the decision, that data sits in a database, and that a vendor sells what the contract describes. This chapter takes human oversight first (3.1), then privacy, security, data-governance and intellectual-property policy (3.2), then third-party risk (3.3), and closes by drawing the three together (3.4).

| Case | Citable as | Drawn on for |
|---|---|---|
| Drivers v. Uber and Ola | Amsterdam Court of Appeal, 4 April 2023; non-compliance ruling 5 October 2023, EUR 584,000 | Human in the loop, examined and rejected |
| Royal Commission into the Robodebt Scheme | Final report tabled 7 July 2023 | Review that was ritual rather than real |
| Bauserman v. Michigan UIA | Class settlement finally approved 30 January 2024, USD 20 million | An automated determination treated as final |
| Samsung generative AI restriction | Reported 2 May 2023 | Shadow AI and the acceptable-use policy |
| FTC v. Evolv Technologies | FTC complaint and stipulated order, 26 November 2024 | Vendor claims, and where the harm landed |
| Garante v. DeepSeek | Garante limitation order, 30 January 2025 | Supply concentration reaching a whole market at once |
| Moffatt v. Air Canada | 2024 BCCRT 149 | Accountability cannot be delegated |

### 3.1 Human Oversight by Design

Autonomy bites here. The more a system can act without asking, the more deliberately the human has to be placed, and placement is a design decision rather than a staffing one.

The EU High-Level Expert Group on AI set out three levels of oversight, and they remain the working vocabulary.

Under **human-in-the-loop** oversight, a person reviews and approves each consequential decision before it takes effect. It suits high-stakes, lower-volume decisions: medical triage, loan denial, custody or benefits determinations. Under **human-on-the-loop** oversight, a person supervises operation, monitors outputs and can intervene or halt. It suits higher-volume, moderate-risk operation where per-decision review is impractical. Under **human-in-command** oversight, people set the objectives, bounds and escalation rules and keep the ability to override or deactivate. That is overall program governance and the fallback for every deployed system.

Stakes and volume decide between the first two, per use case. The third applies to everything.

#### Where the law reaches the design

Two EU instruments turn these levels into obligations, and they reach different parties.

GDPR **Article 22** restricts decisions based solely on automated processing that produce legal effects or similarly significantly affect a person. For oversight design, "solely automated" is the hinge: meaningful human review before the decision takes effect moves a process outside the article, and cosmetic review does not. Chapter 4 covers the exceptions, the safeguards and the case law, including the point from the SCHUFA ruling that a score an underwriter draws on strongly may itself be the decision rather than an input to it.

EU AI Act **Article 14** requires high-risk systems to be designed so that competent humans can effectively oversee them: able to understand the outputs, to disregard or override them, and to interrupt the system through a stop button or similar procedure. That is a design duty and it sits with the **provider**. The deployer's duty to assign oversight to people with the necessary competence, training and authority sits in **Article 26(2)**. Both apply from 2 December 2027 as amended by the Digital Omnibus on AI, and from 2 August 2026 as enacted (Chapter 6). Check every date question for which of those two it means.

Neither article protects a US applicant. The American hook runs through the adverse-action reasons that ECOA and Regulation B require, which Chapter 5 covers. The instruments differ, the practical demand does not: someone has to be able to say why.

#### What makes oversight real

Article 22 speaks of human intervention rather than human presence, and the difference is the whole section. A human who rubber-stamps every recommendation satisfies no obligation and creates a worse problem than no human at all, because the review now supplies legal cover for a decision the machine has already made. Call it **automation bias with a witness**.

Oversight needs four conditions at once. Lose any one and the witness returns.

- **Competence.** The overseer understands the system's limits and failure modes. This is what the literacy work in Chapter 2 buys.
- **Information.** The interface presents confidence and reasons, not only a recommendation. A score with no basis cannot be meaningfully reviewed.
- **Authority.** The overseer can reverse the output without career cost, which in practice means overrides must be removed from productivity measures.
- **Time and volume.** A review load small enough for real attention. An overseer with three hundred files a day is not reviewing, they are clearing.

The record that proves all four is an override log, reviewed on a schedule by someone with the authority to act on what it shows.

Two decisions make the failure modes concrete. In **Drivers v. Uber and Ola**, the Amsterdam Court of Appeal found the companies in breach of the GDPR over opaque algorithmic decisions that managed, fined and deactivated drivers, and it rejected reliance on a human in the loop because the human role was not meaningful. A later ruling ordered EUR 584,000 in penalty payments for continued non-compliance. The pair is the authority that a nominal human presence does not satisfy an oversight duty. The **Robodebt** Royal Commission reached the same place from the public sector: an automated income-averaging program raised debts across a large population, many of them wrong, and the Commission traced the harm to governance rather than to the algorithm, finding that those who approved and ran it never tested whether it was lawful and that the human review was ritual rather than real.

### 3.2 Retrofitting Policy for AI

The BOK makes two things preconditions for AI-specific policy, and states both directly: a **data classification policy**, so you know what is sensitive, and a **data inventory**, so you know where it is. Without them, monitoring and managing AI training data is severely disadvantaged, and no amount of policy language compensates. Most organizations discover the gap late, when they find that "prompt" and "model output" were never classification categories and that the inventory stops at the database rather than following data into an analytics environment.

#### Where legacy policy breaks

Seven areas, each with the assumption AI breaks and the gap to close.

| Policy area | The assumption AI breaks | The gap to close |
|---|---|---|
| Purpose limitation | Data collected for one purpose stays there | A compatibility analysis or new lawful basis before training on repurposed data; a registry tagging each dataset with its approved purposes |
| Retention | Deleting the record deletes the data | Rules covering derived data, checkpoints, embeddings, caches and the trained model itself, plus a stated position on what a deletion request means for a model |
| Minimization | Minimization applies to storage | Minimization applied to features and training sets: if fewer features perform equivalently, use fewer |
| De-identification | Removing names anonymizes | A standard that survives quasi-identifier combinations and model-based re-identification, with re-anonymization required when datasets are combined |
| Access control | Access is to databases | Access control over prompts, model endpoints, training environments, feature stores and model registries |
| Incident response | Incidents mean a breached database | Playbooks for the six AI-specific threats below |
| Intellectual property | The organization knows what it owns and has licensed | Rules on who owns outputs under vendor terms, what confidential material may enter third-party prompts, and what licensed content may be used in training |

Two rows repay attention. **Retention** is where AI policy most often contradicts itself, because an erasure request can reach a **checkpoint** (a saved snapshot of a model's parameters) and an **embedding** (a numerical representation of text used to compare meaning), and the organization has to state a position rather than discover one. **De-identification** is where confidence most often outruns reality: an "anonymized" extract still carrying ZIP code, birth date and loan amount carries three **quasi-identifiers**, fields that name no one alone but can single a person out in combination. Removing names pseudonymizes rather than anonymizes, as Chapter 4 explains.

#### Threats the playbooks must anticipate

Six threats, and the taxonomy is worth learning in its three groups.

Three target what a model has learned. **Model inversion** reconstructs training inputs by probing the model's outputs. **Membership inference** determines whether a specific person's record was in the training set, which is itself a disclosure: revealing that someone was a customer, or was declined, says something about them. **Unintended memorization** is a model reproducing fragments of sensitive training data on request, such as a customer's details.

Two are attacks with an actor. **Data poisoning** corrupts training data to shape model behavior, a training-time attack. **Prompt injection** is input crafted at inference time to override a large language model's instructions or safety filters, delivered directly or indirectly through retrieved content, such as an uploaded document carrying instructions of its own.

One needs no adversary at all. **Function creep** expands data use beyond its stated purpose through gradual reuse, as when service transcripts drift into marketing. Nothing malicious happens; the boundary simply moves.

Confabulation, a falsehood with no attacker behind it, is a different failure and belongs with the model's behaviour rather than its security (Chapter 7).

#### Shadow AI and acceptable use

The most common real-world AI policy failure involves no sophisticated attack. An employee pastes customer data into an unapproved tool because it is the fastest way to finish the task.

Samsung's restriction on employee generative AI use, reported on 2 May 2023, is the standard case. Engineers had uploaded proprietary source code to a public chatbot, and the company restricted generative AI tools on company devices and networks, describing the measure as temporary while it built a secure alternative. Read as governance, the episode has two halves: the leak is an acceptable-use failure, and the reason staff used an unapproved path is a readiness failure. That is why a ban is the wrong answer on its own. A prohibition without a sanctioned alternative does not remove the behavior, it drives it to personal devices and out of sight, which is worse than the exposure the ban was meant to prevent.

An **acceptable use policy** (AUP) therefore has to answer three questions: what data may enter a prompt, which tools are approved, and what happens when someone needs a tool that is not on the list. That third question is the one most AUPs omit and the one that determines whether the policy holds. The durable control pairs the rule with a sanctioned tool and an exception route with a named owner.

### 3.3 The Supply Chain Problem

Standard **third-party risk management** (TPRM) was built for a different kind of product. The checks it runs are sound and mostly irrelevant here. Solvency, insurance and certification checks miss training data of unknown origin or rights status. Standard security questionnaires miss model behavior that changes with each vendor update. Service contract templates leave liability for harmful or discriminatory output unallocated. Named-subcontractor disclosure misses the sub-tier of data labelers, base-model suppliers and open-source dependencies.

This is **emergence** in commercial form: a black box inside a black box. The organization cannot inspect the training data and may not be told when the model version changes. Point-in-time diligence decays fast against a product like that, because the thing being assessed is not the thing that will be running next quarter.

Two cases show the exposure. **FTC v. Evolv Technologies** concerned an AI weapons screening system whose detection capability was overstated while schools buying it were locked into multi-year contracts; the proposed order bars unsupported AI claims and lets affected K-12 customers cancel. The harm landed on the deployers, because schools relied on the vendor's performance claims for the safety of children. **Garante v. DeepSeek** shows the other direction: a single regulator's limitation order on a model provider reached every downstream deployer and user in Italy at once. Model supply is a governance dependency, not only a procurement choice.

#### Rebuilding vendor review

Four parts, and they run in sequence.

**One: flag AI at intake.** Ask whether the product includes AI, machine learning, large language models or automated decision-making, whether your data will train the vendor's models, and whether personal, biometric or sensitive data is processed. Flagged deals get supplemental review by legal, risk and technical stakeholders. Vendors do not all volunteer their AI use, so the question has to be asked rather than inferred from the product description.

**Two: run AI-specific due diligence.** Training-data origin and rights, fairness and robustness test evidence, explainability support, model-change practices, security of the machine learning supply chain, and named sub-tier dependencies, meaning who labeled the data and whose base model sits underneath. A standardized supplier questionnaire mapped to risk tiers keeps that repeatable. Where the vendor is a general-purpose AI model provider, also seek the documentation it owes downstream providers under EU AI Act **Article 53**.

**Three: put terms in the contract.** Six clauses carry the weight.

1. **Data-use limits:** no customer data used for retraining without explicit consent.
2. **Fairness and performance:** warranties, plus evidence of testing and remediation of disparate impact.
3. **Model-change notification:** advance notice of updates that change behavior or intended use.
4. **Incident notification:** time-bound reporting and defined responsibilities. A 24-hour window is a negotiated term, not a legal rule, and treating it as one is an error.
5. **Audit rights:** the right to audit or inspect high-risk vendor systems and to receive documentation, exercised in proportion to risk.
6. **Termination and portability:** exit conditions, model deactivation rights, and data return or deletion.

**Four: monitor continuously.** Vendor model updates change behavior mid-contract, so diligence is a recurring process rather than a gate. The emerging instrument for seeing the sub-tier chain is an **AI system bill of materials** (AI-BOM) listing a system's upstream inputs: the model and its version, the embedding model, the retrieval corpus, and the open-source libraries. Open-source components need the same licensing, vulnerability and bias review as commercial ones.

#### Accountability cannot be delegated

If the system misstates a fee, the organization answers to the customer and the regulator, not to its vendor. **Moffatt v. Air Canada** is the canonical illustration: when a chatbot gave a passenger incorrect information about bereavement fares, the airline argued the chatbot was a separate legal entity responsible for its own actions, and the British Columbia Civil Resolution Tribunal rejected that argument outright.

The EU AI Act reaches the same result structurally, attaching obligations to whoever places a system on the market or uses it rather than to whoever built it furthest upstream. Upstream builders keep duties of their own, and those relieve the downstream party of none of its own. Outsourcing the build does not outsource the responsibility, and "the vendor is responsible because it built the model" is a distractor rather than a defence.

### 3.4 Three Assumptions, Three Fixes

Legacy policy assumed that a human decides, that data stays in a database, and that a vendor sells what the contract describes. Each assumption has a matching repair. Oversight design makes review real by giving the human competence, information, authority and time. The policy retrofit follows data into prompts, checkpoints and embeddings, and reaches features rather than only storage. Vendor review keeps asking after signature, through intake flagging, diligence, contract terms and continuous monitoring.

The three repairs share one shape: a named owner, a stated rationale, and a record revisited when the system, the vendor or the law changes. That last clause is what separates a governance program from a policy binder. Every control in this chapter has a version number because every control here is expected to be rewritten.

Part II takes up the question the rulebook raises but cannot answer. Which of these rules does the law actually require, and of whom? An Irish applicant, a Colorado borrower and a customer in Seoul do not live under the same rules, and nothing in a register says which is which.

### Exam Focus

Competency I.C carries the largest share of Domain I items.

- Human-in-the-loop approves each decision before it takes effect, human-on-the-loop supervises and can intervene, and human-in-command, which applies to every system, sets the bounds and keeps the kill switch.
- Stakes and volume choose between the first two levels, per use case.
- Under GDPR Article 22 "solely automated" is the hinge: meaningful review before the decision takes effect moves a process outside the article, and cosmetic review does not.
- EU AI Act Article 14 is the provider's design duty and Article 26(2) is the deployer's staffing duty. Neither they nor GDPR Article 22 protect US applicants.
- Real oversight needs competence, information, authority, and time and volume at once. Lose one and the result is automation bias with a witness.
- The BOK states directly that a data classification policy and a data inventory must exist before AI-specific policy can work, and classification categories usually stop short of prompts and model outputs.
- Retrofitted minimization reaches features, and retention reaches checkpoints, embeddings and the trained model.
- Inversion reconstructs inputs, membership inference reveals presence in the training set, and memorization reproduces fragments. Poisoning strikes at training, prompt injection at inference, and function creep needs no attacker.
- A ban without an approved path produces shadow AI, so the right answer pairs acceptable-use rules with a sanctioned tool and an exception route. A restriction alone does not remove the behavior.
- The vendor response runs intake flagging, AI-specific diligence, contract clauses and continuous monitoring, and intake must ask about AI rather than infer it.
- Standard third-party checks (solvency, insurance, SOC 2, generic security questionnaires) do not test training-data rights, model-change behavior or sub-tier dependencies.
- A 24-hour vendor incident-notification window is a negotiated term, not a legal rule.
- Accountability is non-delegable, and "the vendor built the model, so the vendor is responsible" is a distractor.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): Automation, Human in the Loop, Human Oversight, AI Data Retention Policy, Membership Inference Attack, Model Inversion Attack, Prompt Injection, Shadow AI, AI Vendor Due Diligence, Sub-Tier Dependencies, Third-Party Risk Management (TPRM).

### Further Reading

- [EU AI Act, Article 14 (human oversight)](https://artificialintelligenceact.eu/article/14/): the oversight design requirements for high-risk systems
- [EU AI Act, Article 26 (obligations of deployers)](https://artificialintelligenceact.eu/article/26/): the deployer's oversight staffing duty in Article 26(2)
- [GDPR Article 22 (automated individual decision-making)](https://gdpr-info.eu/art-22-gdpr/): the right and its safeguards
- [EU High-Level Expert Group on AI, Ethics Guidelines for Trustworthy AI (2019)](https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai): the source of the in-the-loop, on-the-loop and in-command levels
- [ICO: explaining decisions made with AI](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/explaining-decisions-made-with-artificial-intelligence/): what meaningful human involvement looks like in practice
- [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/): Govern and Manage actions on human oversight and override
- [ISO/IEC 22989:2022 (free from IEC)](https://webstore.iec.ch/en/publication/77839): controllability and predictability as trustworthiness vocabulary
- [NIST AI 100-2, Adversarial Machine Learning taxonomy](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2023.pdf): the structured attack taxonomy: poisoning, evasion, privacy, abuse
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/): prompt injection, insecure output handling and the LLM attack surface
- [MITRE ATLAS](https://atlas.mitre.org/): adversarial threat landscape for AI systems, MITRE ATT&CK style
- [EDPB Opinion 28/2024 on AI models and personal data](https://www.edpb.europa.eu/system/files/2024-12/edpb_opinion_202428_ai-models_en.pdf): lawful basis, purpose limitation and the consequences of anonymity in model training
- [ICO guidance on AI and data protection](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/): retention, minimization and rights in an AI context
- [The Secret Sharer: unintended memorization in neural networks](https://arxiv.org/abs/1802.08232): the research behind the memorization and extraction risk
- [CISA artificial intelligence resources](https://www.cisa.gov/ai): secure development and supply-chain guidance
- [NIST AI RMF (AI 100-1), third-party and value-chain risk](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): GOVERN 6 and the Map function on dependencies
- [EU AI Act, Article 25 (responsibilities along the AI value chain)](https://artificialintelligenceact.eu/article/25/): how obligations follow the value chain
- [EU AI Act, Article 53 (obligations for providers of general-purpose AI models)](https://artificialintelligenceact.eu/article/53/): the documentation a model provider owes downstream
- [ISO/IEC 42001 (AI management system)](https://www.iso.org/standard/42001): Annex A controls for third-party relationships
- [NIST AI 600-1, value-chain and component integration risk](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): the generative-AI version of third-party risk
- [Drivers v. Uber and Ola (Amsterdam Court of Appeal, 4 April 2023)](https://apps.eurofound.europa.eu/platformeconomydb/amsterdam-court-of-appeal-rules-uber-violated-data-protection-rights-110150): robo-firing, and a human-in-the-loop defence rejected
- [Royal Commission into the Robodebt Scheme (report, 7 July 2023)](https://www.royalcommission.gov.au/robodebt/report): ritual review and an unlawful automated program
- [Bauserman v. Michigan Unemployment Insurance Agency](https://www.michigan.gov/ag/news/press-releases/2024/01/30/class-action-settlement-approved-by-court-of-claims): an automated fraud determination treated as final
- [Samsung restricts staff use of generative AI (CNBC, 2 May 2023)](https://www.cnbc.com/2023/05/02/samsung-bans-use-of-ai-like-chatgpt-for-staff-after-misuse-of-chatbot.html): shadow AI and the acceptable-use policy
- [FTC v. Evolv Technologies](https://www.ftc.gov/news-events/news/press-releases/2024/11/ftc-takes-action-against-evolv-technologies-deceiving-users-about-its-ai-powered-security-screening): overstated vendor claims and deployer exposure
- [Garante v. DeepSeek (order of 30 January 2025)](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10097450): a single order reaching every downstream deployer
- [Moffatt v. Air Canada, 2024 BCCRT 149](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html): accountability is not delegable to a separate legal entity
