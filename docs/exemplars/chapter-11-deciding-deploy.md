> **Proposal, not yet in the manuscript.** This replaces the Chapter 11 block in `aigp-book.md`. The original block runs to 4,750 words including its scene, coda and record. Everything below is manuscript content.

## Chapter 11: Deciding to Deploy

The decision to deploy is the first link in the chain Domain IV follows: whether the use case justifies a model at all, which route to a model to take, whether the organization is ready to run one, what would count as success, how much autonomy the system gets, and who answers for the go decision. Every later control inherits these answers, because the record written before launch sets the risk surface that impact assessment, contract review, monitoring and retirement govern.

Two questions organize the chapter: what would have to be true for this deployment to be justified, and what would have to be true for it to keep running. A deployment that cannot answer the first has no success metric; one that cannot answer the second has no owner, no threshold and no exit. Three framing points hold: not deploying is a legitimate outcome a governed process must be able to reach; the route to a model is a governance choice, fixing how much control the organization keeps over data, model change and exit; and a model plausible case by case can still be wrong in aggregate.

- Section 11.1 vets the use case against the go/no-go criteria applied before commitment.
- Section 11.2 compares building, buying, fine-tuning and adopting an API, and what each costs in control.
- Section 11.3 assesses readiness across data, people, process, monitoring and legal basis.
- Section 11.4 sets success metrics before deployment, harm metrics as well as business ones.
- Section 11.5 fixes the level of autonomy, and the conditions for raising it.
- Section 11.6 describes the pilot and what it must be designed to prove.
- Section 11.7 covers the decision record and who owns the go decision.
- Section 11.8 treats scaling risk, plausible case by case and wrong in aggregate.
- Section 11.9 treats deciding not to deploy as a legitimate governed outcome.
- Section 11.10 follows the second-order effects downstream.

| Case | Citable as | Drawn on for |
|---|---|---|
| Zillow Offers | Zillow Group Q3 2021 shareholder letter, SEC Form 8-K exhibit 99.3, 2 November 2021 | Scaling risk, a valuation model plausible case by case and collectively wrong, and a controlled wind-down |
| DORA and NIS2 | Regulation (EU) 2022/2554 (DORA); Directive (EU) 2022/2555 (NIS2) | Third-party ICT risk, concentration risk, mandatory contractual provisions, supply chain security, exit |

### 11.1 Vetting the Use Case

The commonest failure here is starting from what a model can do. A deployment justified by capability has no objective in the organization's terms, so no later measurement can say whether it worked; it is vetted as an objective.

**Least agency** comes first, named by the OWASP GenAI Security Project in its [Top 10 for Agentic Applications](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/): a system gets no more autonomy than its task requires. Where a process is fixed and repeatable, a deterministic workflow is cheaper, testable and harder to attack, so eligibility rules and lookups belong in code; the first question about a proposed agent is whether the use case needs one at all.

Four criteria do the vetting. Is the use prohibited outright? EU AI Act [Article 5](https://artificialintelligenceact.eu/article/5/) lists practices no readiness argument can justify. Does the task need inference at all, or does a rule answer it? Who is affected, and can they refuse?

Vetting ends in one of four outcomes, and three are legitimate: approved as proposed, approved with a narrower scope, deferred until a stated condition is met, or rejected. ISO/IEC [42005:2025](https://webstore.iec.ch/en/publication/107659) treats impacts as two-sided, benefits as well as harms.

### 11.2 Build, Buy, Fine-Tune or Call an API

Four routes to a model are open, and they differ less in capability than in three controls: over data, over model change and over exit.

**Adopting a vendor API** is the fastest route. The organization sends inputs to a model it does not host, giving up visibility into training data and behavior and accepting binding terms and vendor dependency for updates and continuity. **Buying a finished system** packages it into a product with a workflow attached, moving more of the build cost and the design decisions out of reach.

**Fine-tuning an open-weights model** adapts weights through additional training on targeted data, buying consistent behavior and domain fit at the cost of a retraining pipeline and knowledge frozen at training time; because it changes the model, it triggers change management, fresh evaluation and, in a regulated context, reassessment. **Building from scratch** is rarely proportionate, justified only for a capability nobody offers.

Proprietary and open-source are not a safety ranking: open weights are still licensed, and licence terms govern commercial use, attribution and what happens to code that incorporates the model, which is why BOK v2.1 renamed "open source agreement" to **licensing agreement**.

Two further axes decide what a route costs in practice. **Model size** separates frontier models from compact ones: a smaller model is cheaper to serve, easier to place on premises or at the edge, and often sufficient for a narrow task, while a larger one buys general capability the use case may never exercise. **Quantization** lowers the precision of a model's weights and **distillation** trains a smaller model to imitate a larger one; both cut inference cost and latency, and both trade away some accuracy. Either is a change of system for validation purposes rather than a deployment detail, so the re-evaluation runs against the same subgroup and robustness tests as the original model.

The route's consequence is contractual before it is technical. DORA, Regulation (EU) [2022/2554](https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en), requires financial entities to manage ICT third-party risk, including concentration risk, and fixes key contractual provisions for ICT providers, applying from 17 January 2025. NIS2, Directive (EU) [2022/2555](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive), requires supply chain security between an entity and its suppliers, with a transposition deadline of 17 October 2024. Monitoring, audit rights and exit terms are therefore a legal expectation rather than a negotiating preference, and one provider's outage reaches every deployer that chose it.

### 11.3 Readiness Across Data, People, Process, Monitoring and Legal Basis

The BOK names five **readiness factors**, applied in order: business objectives, performance requirements, data availability, ethical considerations and workforce readiness. Each can stop the deployment; a later factor cannot repair an earlier one.

**Business objectives** restate the vetting outcome as a measurable claim in the organization's terms. **Performance requirements** turn that claim into the thresholds monitoring will later measure against, graded on the data the system will actually see: accuracy against an approved source, response time, and a floor on escalation to a human. That escalation floor earns its own line because its inverse, containment rate, the share of contacts resolved without a person, is the metric a misaligned system optimizes: a cost metric wearing a success metric's clothes.

**Data availability** and **data suitability** are separate questions: availability asks whether the data exists at the volume and quality the task needs; suitability adds whether the organization is legally entitled to use it, whether it represents the affected population, and whether its lawful basis is documented. Repurposing records to train a model can breach the purpose limitation and minimisation principles of GDPR [Article 5](https://gdpr-info.eu/art-5-gdpr/), so a reused corpus needs a compatibility analysis or a new lawful basis first.

**Ethical considerations** are weighed rather than measured: who benefits, who bears the harm, and whether the use would survive public explanation. Some are settled by law, such as a prohibited practice under Article 5 or a DPIA under GDPR [Article 35](https://gdpr-info.eu/art-35-gdpr/).

**Workforce readiness** is a deployment gate, not a training afterthought: can intended users operate the system and tell when to distrust it, can administrators manage and monitor it, and does enough skill survive to carry on if the system is unavailable? A fallback nobody can execute is not a fallback. Readiness on the **process** side is who owns each document the system draws on and which limits are enforced in code rather than in a prompt; on the **monitoring** side, which thresholds belong to named owners.

### 11.4 Success Metrics, Business and Harm

Metrics are set before deployment, because a metric invented after go-live measures whatever the system is doing. Two sets are required, and the second is usually missing.

Business metrics state the objective: handling time, resolution rate, cost per contact. Harm metrics state what must not happen: which groups are treated differently and by how much, how often the system is wrong and who bears it, and how often a human overrides and whether the overrides cluster.

Every threshold needs a number, an owner and a consequence. One with no owner is monitored by nobody, and one with no consequence is monitored by nobody twice. The consequence, whether escalation, pause, rollback or recorded acceptance, is written into the decision record before launch so the response to a breach is not negotiated after one.

### 11.5 Setting the Level of Autonomy

Autonomy is chosen at deployment, not inherited from the model. Two independent dials describe it. **Action space** is what the system can do, fixed by the tools it may call and the permissions on them: sandbox only, internal or external systems, read or write. **Autonomy** is how freely it decides, set by its instructions and the level of human involvement.

Singapore's Infocomm Media Development Authority, in its [Model AI Governance Framework for Agentic AI](https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf), names four levels of human involvement: the agent proposes and a human approves each step; collaboration; exception-based approval; and the agent operates while a human observes.

The five harms to map are erroneous actions, unauthorised actions, biased or unfair actions, data breaches, and disruption to connected systems. Six controls answer: least-privilege, scoped and non-transferable permissions never greater than the approving person's own; deterministic controls over prompt-based ones, so a tool is blocked by an access control rather than by a prompt; system-level approval checkpoints audited for rubber-stamping; a unique verifiable identity per agent; a kill switch that revokes credentials and has a manual fallback; and fail-safe behavior, denying the action when the approval service is down, where a time-out that lets the agent proceed is **fail-open**.

No separate legal category exists for agents. EU AI Act [Article 3(1)](https://artificialintelligenceact.eu/article/3/) defines an AI system as one designed to operate with varying levels of autonomy whose output can influence physical or virtual environments, and agents fit squarely. The risk tier follows the use, not the architecture: job screening falls under Annex III point 4(a), credit scoring under 5(b), and a deployer that repurposes a general-purpose system into a high-risk use becomes its provider under [Article 25(1)(c)](https://artificialintelligenceact.eu/article/25/). An agent that decides makes an automated decision governed by GDPR [Article 22](https://gdpr-info.eu/art-22-gdpr/), and Recital 71 names automatic refusal of a credit application and e-recruiting without human intervention.

### 11.6 The Pilot and What It Must Prove

A pilot is a limited rollout with pre-registered success criteria, and the second half of that definition decides whether it proves anything. A pilot run to demonstrate that the system works will demonstrate that the system works; one designed to test the thresholds returns a number.

A pilot must prove that the system meets its thresholds on real inputs rather than test data; that the harm metrics hold, which usually requires enough volume to see a subgroup at all; and that overseers intervene in practice, evidenced by an override log rather than a policy statement. A pilot at too low a volume proves nothing about subgroup harm. Expansion should be gated, with each stage carrying its own thresholds and exit.

### 11.7 The Decision Record and Who Owns the Go Decision

The deployment decision is recorded, and the record is deliberately short: one page carrying the objective, the performance thresholds, the data sources and their lawful basis, the benefits and the harms, the autonomy setting, the fallback staffing and the exit conditions, each line with an owner. It beats a long assessment nobody rereads, and it exists so a later question about performance or accepted risk has an answer.

Ownership of the go decision needs one named accountable person, and accountability is not delegable. It does not sit with the vendor, which supplies a component; it does not sit with the model, which is not a legal actor; and it does not sit with a committee in which everyone shares the decision and nobody owns the outcome. A council may set risk appetite and approve sensitive uses, but the deployment decision has one accountable executive named in the record, and the record holds the baseline for every later reassessment.

### 11.8 Scaling Risk

Speed and scale is the characteristic that makes deployment decisions hard. A flaw in a manual process harms the people it touches and is caught locally; one mis-weighted feature in a model harms every case it processes before anyone notices.

Zillow Offers is the worked example. Zillow Group announced on 2 November 2021 that it would wind down its algorithmic home-buying business and cut roughly 25 percent of its workforce, after the business could not forecast future home prices accurately enough to buy homes safely. The [Q3 2021 shareholder letter](https://www.sec.gov/Archives/edgar/data/1617640/000161764021000085/exhibit993.htm), filed as exhibit 99.3 to a Form 8-K, records the wind-down and the workforce reduction. The governance lesson is the shape of the failure: the valuation model was plausible case by case and, across an inventory bought at pace, collectively wrong. No individual purchase had to look absurd for the portfolio to be mispriced.

Scaled error is invisible to case-by-case review, which is why it needs different instruments: aggregate outcome monitoring rather than sample checking, pre-committed rollback criteria, and a limit on the rate at which the deployment may grow relative to the rate at which its errors are observed. Zillow's outcome was a controlled retirement rather than an uncontrolled collapse: what a governed rollback looks like when the decision to stop is taken early enough.

### 11.9 Deciding Not to Deploy

Deciding not to deploy is a legitimate governed outcome, and the vetting stage in Section 11.1 exists to make it reachable. Three forms are worth distinguishing. A **rejection** concludes that the use should not be deployed at all, on this scope or any other. A **deferral** concludes that the use is sound but a precondition is missing: a data set, a lawful basis, a monitoring capability or a fallback. A **narrowing** approves the use with less scope, less autonomy or fewer modalities.

The record differs by form: a rejection records the reason so the proposal is not re-litigated every quarter; a deferral records the condition and the trigger that will reopen the decision; a narrowing records what was removed and why.

### 11.10 Second-Order Effects Downstream

Those effects belong in the record, not the post-mortem.

The first is the workload the system takes and the skill it removes: if a team's routine cases move to a model and its people handle only the residue, the residue is harder and the skill that let the team catch a wrong output atrophies, so readiness has to include the ability to catch a bad output on day 300.

The second is automation bias with a witness: a review step supplies cover for the system's decision, and a reviewer who approves everything makes the deployment worse than one with no human at all. The controls are structural: overrides removed from productivity measures, and review volumes small enough for real attention.

The third is the process the deployment quietly rewrites: an exception route that reached a supervisor now reaches a queue with no owner, a source-document change alters the answers with no release, and a vendor update changes behavior mid-contract. Each needs an owner, a change process and a notification clause written down before go-live.

### Exam Focus

- The decision to deploy is Domain IV.A, and it is the first link in the chain that runs through impact assessment, contract review, monitoring and retirement.
- Least agency, named by OWASP, means the right answer is sometimes that a process should not be agentic, or not use AI at all, and the first question about any agent is whether the use case needs one.
- Vetting has four permitted outcomes (approved, narrowed, deferred, rejected), and all four are legitimate results of a governed process.
- The five readiness factors run in order (business objectives, performance requirements, data availability, ethical considerations, workforce readiness), and each can stop a deployment.
- Data availability differs from suitability, which adds quality, legal entitlement, representativeness and a documented lawful basis.
- Success metrics are set before deployment and come in two sets; containment rate is a cost metric wearing a success metric's clothes, and treating it as the objective is misalignment.
- Neither proprietary nor open source is safer by default, and treating open as unencumbered is a trap, because open weights are licensed and GPL or AGPL terms reach code that incorporates the model.
- Build versus buy versus fine-tune versus API is decided on control over data, control over model change and control over exit, and DORA and NIS2 make monitoring, audit rights and exit terms a legal expectation rather than a preference.
- Pilots must be designed against pre-registered criteria, and a pilot at too low a volume proves nothing about subgroup harm.
- The go decision has one named accountable owner, accountability is not delegable to a vendor or a model, and the decision record holds the baseline for every later reassessment.
- Scaling risk is the difference between plausible case by case and wrong in aggregate; Zillow Offers is the case, and it is caught by aggregate outcome monitoring, not by sample review.
- Deciding not to deploy is a legitimate governed outcome, and a rejection, a deferral and a narrowing each need a different record.
- Agent risk runs on two dials, action space and autonomy, with IMDA's four levels of human involvement and five harms: erroneous, unauthorised, and biased or unfair actions, data breaches, and disruption to connected systems.
- Deterministic controls beat prompt instructions, and denying the action when the approval service is down is fail-safe, while a time-out that lets the agent proceed is fail-open.
- The legal tier follows the use (job screening under Annex III 4(a), credit scoring under 5(b)), repurposing a general-purpose system into a high-risk use makes a deployer its provider under Article 25(1)(c), and an agent's automated refusal engages GDPR Article 22 and Recital 71.
- BOK version 2.1 added agentic architectures to the deployment options and renamed "open source agreement" to "licensing agreement" so that proprietary contracts get the same reading.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): Action Space (Agentic AI), Agentic AI, Agent Goal Hijack, Agent Kill Switch, Business Objectives, Classic AI, Cloud, On-Premises & Edge Deployment, Deterministic Output, Fine-Tuning, Human Approval Checkpoint, Language vs. Multimodal Models, Least-Privilege Agent Permissions, Multi-Agent System, Prompt Engineering, Proprietary vs. Open-Source Models, Retrieval Augmented Generation (RAG), Small vs. Large Models, Tool Misuse, Workforce Readiness.

### Further Reading

- [NIST AI RMF Playbook (MAP and MANAGE functions)](https://airc.nist.gov/airmf-resources/playbook/): MAP 1 on context and intended purpose, and MANAGE 2.1 on non-AI alternatives
- [NIST AI RMF (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): deployment and operational considerations in the MEASURE and MANAGE functions
- [EU AI Act, Article 5 (prohibited AI practices)](https://artificialintelligenceact.eu/article/5/): the uses no readiness assessment can justify
- [EU AI Act, Article 3 (definitions)](https://artificialintelligenceact.eu/article/3/): the AI system definition and its varying levels of autonomy
- [EU AI Act, Article 14 (human oversight)](https://artificialintelligenceact.eu/article/14/): the oversight design duty for high-risk systems
- [EU AI Act, Article 25 (responsibilities along the AI value chain)](https://artificialintelligenceact.eu/article/25/): the provider shift when a deployment repurposes a system
- [ISO/IEC 42005:2025 (AI system impact assessment)](https://webstore.iec.ch/en/publication/107659): scope, intended and unintended uses, and two-sided impacts
- [ISO/IEC 22989:2022 (concepts and terminology)](https://webstore.iec.ch/en/publication/77839): AI model, AI component and the learning paradigms
- [NIST AI 600-1, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): the risks a use-case assessment should weigh for generative deployments
- [GDPR Article 5 (principles relating to processing)](https://gdpr-info.eu/art-5-gdpr/): purpose limitation and minimisation when data is reused for AI
- [GDPR Article 22 (automated individual decision-making)](https://gdpr-info.eu/art-22-gdpr/): the right, its safeguards and the Recital 71 examples
- [GDPR Article 35 (data protection impact assessment)](https://gdpr-info.eu/art-35-gdpr/): when an assessment is required before processing
- [Singapore IMDA, Model AI Governance Framework for Agentic AI](https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf): action space, autonomy and the four levels of human involvement
- [OWASP Top 10 for Large Language Model Applications](https://genai.owasp.org/llm-top-10/): prompt injection, and why prompt-layer controls are not a boundary
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/): least agency and the risks of autonomous action
- [Zillow Group, Q3 2021 shareholder letter (SEC Form 8-K exhibit 99.3)](https://www.sec.gov/Archives/edgar/data/1617640/000161764021000085/exhibit993.htm): the Zillow Offers wind-down and the roughly 25 percent workforce reduction
- [DORA (European Insurance and Occupational Pensions Authority)](https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en): third-party ICT risk, concentration risk and the key contractual provisions
- [NIS2 Directive (European Commission)](https://digital-strategy.ec.europa.eu/en/policies/nis2-directive): supply chain security between an entity and its suppliers
