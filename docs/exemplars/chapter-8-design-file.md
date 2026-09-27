> **Proposal, not yet in the manuscript.** This replaces the Chapter 8 block in `aigp-book.md`. Original: 3,532 words. Everything below is manuscript content.

## Chapter 8: Design and Impact Assessment

By the time a model exists, most of its governance is already fixed. The design stage settles the purpose, the boundary, the autonomy level, the data minimisation rule and how a person can contest an outcome. A requirement met in design is a parameter; the same requirement met in production is a rebuild. This chapter covers BOK competency III.A.

Design governance does two jobs. One looks inward, at what could go wrong for the organization; the other outward, at what could go wrong for the people the system touches. The first is a risk assessment, the second an impact assessment, and the distinction is examined. A system can clear its risk register and still be struck down.

Here is what this chapter settles, in the order it is tested:

- 8.1 Framing the Use Case and the Boundary
- 8.2 The Intake Gate and Design Risk
- 8.3 The Design-Stage Impact Assessment
- 8.4 Legal Drivers: the DPIA and the FRIA
- 8.5 Autonomy and Requirements by Design
- 8.6 Documentation, the Decision Record and the Design Review

| Case | Citable as | Drawn on for |
|---|---|---|
| SyRI welfare fraud risk scoring | Rechtbank Den Haag, 5 February 2020 | Group-level harm and insufficient transparency, struck down at the design stage |
| Rotterdam welfare fraud algorithm | Rekenkamer Rotterdam, Gekleurde technologie, April 2021 | An oversight failure caught by an auditor rather than by monitoring |
| Dutch childcare benefits scandal | Dutch government resignation, 15 January 2021; Amnesty International, October 2021 | Discrimination encoded in design, with harm no individual complaint surfaced |
| Bauserman v. Michigan UIA | Class settlement approved 29 January 2024 | An automated finding treated as final, a design choice about autonomy |
| Drivers v. Uber and Ola | Amsterdam Court of Appeal, 4 April 2023 | A human in the loop placed on paper but not by design |

### 8.1 Framing the Use Case and the Boundary

A use case starts with the **business context**: the organizational, strategic and operational environment the system will live in: the objective it supports, the expected benefit and readiness. Readiness covers leadership commitment, data governance, security and privacy maturity, risk culture and cross-functional expertise.

The **use case** specification describes the system: its intended function (classification, prediction, assistance or recommendation), intended users and environments, assumptions and constraints, **decision authority** (autonomous or human in the loop), and expected lifetime and workload. Decision authority is answered by risk appetite, not model capability: a system that auto-approves only the lowest-risk band and routes the rest to a person has chosen its autonomy before build begins.

The boundary is the part most often left implicit, and implicit boundaries are what scope creep exploits. An explicit boundary states what the system will not do and where its inputs stop: one product, one jurisdiction, one decision type. A later request to reuse the score returns through the gate as a new use case, not a configuration change (8.2).

Success metrics are named up front, aligned to the business goal, and they conflict. Optimizing precision raises false negatives; optimizing efficiency can cost transparency. Choosing the metric is choosing which harm you accept and who bears it, so the choice belongs in the design file with a named owner.

Data suitability is tested separately from data availability: data can be technically perfect and still off limits, collected for another purpose (GDPR Article 5(1)(b), purpose limitation), carrying sensitive attributes, or supporting inferences the subject never expected. Decision rights are also specified, not assumed: what the system may decide alone, when a human must be involved, and how overrides and appeals work.

### 8.2 The Intake Gate and Design Risk

A charter describes one proposal. The **use case assessment** is the pre-development gate that decides how much scrutiny each proposal gets, asking whether it fits organizational policy, risk appetite and ethical standards. Rigour scales with six factors: decision impact, user exposure, affected rights or opportunities, automation level, applicable regulation, and context such as cultural norms or prior incidents.

Past the gate, the question is what could break the design itself. **Internal design risk** arises inside the project: faulty assumptions, inadequate data, incomplete testing, poor integration and no explainability. **External design risk** arises outside it: adversarial use, regulatory change, the supply chain and public backlash. The deepest internal assumption is that the past represents the future, as when historic approvals are treated as creditworthiness; the sharpest external risks are that users will game stated inputs and that suppliers form a chain the organization does not control.

The BOK names six techniques. A **probability and severity matrix** plots likelihood against impact to prioritise treatment; it ranks risk rather than measuring it, and its NIST AI RMF equivalent is MANAGE 1.2. The **risk mitigation hierarchy** prefers avoiding a risk, then reducing, transferring, and finally accepting the residual deliberately. **Stakeholder mapping** identifies whose interests the design affects. **Use case evaluation** is the gate above. **Benchmarking** compares a system against established references. A **pre-deployment pilot** runs the system in real conditions without consequence.

### 8.3 The Design-Stage Impact Assessment

Design risk asks what could go wrong with the system; the impact assessment asks what happens to the people it touches. An **AI impact assessment** looks outward at the people a system can affect, while ISO/IEC 23894 manages risk to the organization's own objectives. ISO/IEC 42001 is the certifiable management system and requires the assessment (clauses 6.1.4 and 8.4, Annex A objective A.5). ISO/IEC 42005 is uncertifiable guidance; its Annex B explains how impact findings and the 23894 risk process feed each other.

Clause 5 of 42005 describes a documented process set up before any single system is assessed: procedures and templates, integration with enterprise risk, compliance and privacy, timing, scope, responsibilities, thresholds that decide depth and escalation, formal approval, and monitoring. Thresholds route sensitive and restricted uses to senior approval.

A complete record, as clause 6 defines it, sets the scope (system, version, uses) and describes the system. It covers data sources, characteristics and quality; the algorithms and model development; the deployment environment (geography, languages, constraints); and the interested parties, directly affected and others. It then sets out the **actual and reasonably foreseeable impacts**, benefits as well as harms, failure modes, reasonably foreseeable misuse, and the measures addressing them. A record with no benefits section, no unintended uses and no misuse analysis is incomplete.

An impact assessment is not a risk assessment: the risk assessment asks what the system does to the organization, the impact assessment what it does to people, which is why a system can pass one and fail the other. Nor is it a conformity assessment, which tests a product against a specified standard to declare compliance, not consequences for a population.

Some harms are individual and surface through a complaint or an appeal; others are group-level. A scoring rule that treats a neighbourhood, a nationality or a benefit category as a signal harms a class of people, and no single member may ever see a reason to complain. **SyRI**, the Dutch welfare fraud risk scoring program, is the clearest illustration. On 5 February 2020 the District Court of The Hague held that the SyRI legislation breached the fair balance required by Article 8 of the European Convention on Human Rights, its use being insufficiently transparent and verifiable. The harm, scored through data encoding socioeconomic and migration patterns, was surfaced by civil society groups and two citizens rather than an individual grievance. The question is who is scored, and on what basis.

### 8.4 Legal Drivers: the DPIA and the FRIA

Two legal instruments attach here, binding different parties. The first is the **data protection impact assessment** (DPIA). GDPR **Article 35** requires one where processing is likely to result in a high risk to the rights and freedoms of people. Its triggers are systematic and extensive automated evaluation of personal aspects, including profiling, on which decisions with legal or similarly significant effects are based; large-scale processing of special category or criminal-offence data; and large-scale systematic monitoring of a publicly accessible area. It is the controller's duty, covering personal data and the rights built around it.

The second is the AI Act **fundamental rights impact assessment** (FRIA). EU AI Act **Article 27** places it on certain **deployers** of high-risk systems, notably deployers of the Annex III point 5(b) creditworthiness and credit-scoring systems. It sits on top of the provider's **risk management system** under **Article 9**: the provider runs that system, the deployer the FRIA, and neither discharges the other. The high-risk obligations apply from 2 December 2027 as amended by the Digital Omnibus on AI, and from 2 August 2026 as enacted (Chapter 6).

A FRIA may build on a DPIA, but it does not replace one. **Article 27(4)** allows a FRIA already carried out under Article 35 to satisfy the Article 27 duty where it covers the required elements: a DPIA covers data protection risk, the FRIA the wider impact picture, including fundamental rights effects that are not about data at all. A limited-risk system owes no FRIA, and the deployer carve-outs mean not every high-risk deployment owes one either.

Other regimes are narrower than they first appear. Canada's Directive on Automated Decision-Making requires algorithmic impact assessments, but only for federal institutions, and New York City's Local Law 144 requires a bias audit of automated employment decision tools, not an impact assessment.

### 8.5 Autonomy and Requirements by Design

Autonomy is a design decision, not a setting. The EU High-Level Expert Group on AI set out three levels that remain the working vocabulary. Under **human-in-the-loop** oversight a person reviews and approves each consequential decision before it takes effect. Under **human-on-the-loop** oversight a person supervises operation, monitors outputs and can intervene or halt. Under **human-in-command** oversight people set the objectives, bounds and escalation rules and keep the ability to override or deactivate, and it applies to everything. Stakes and volume choose between the first two, per use case.

The choice is legally load-bearing. GDPR **Article 22** restricts decisions based solely on automated processing with legal or similarly significant effects, and "solely automated" is the hinge: meaningful human review before the decision takes effect moves a process outside the article, cosmetic review does not. The AI Act **Article 14** requires high-risk systems designed so competent people can understand the outputs, override them and interrupt the system, a provider design duty. A human in the loop who rubber-stamps every recommendation satisfies no obligation and is worse than none, because the review supplies cover for a decision the machine already made. **Drivers v. Uber and Ola** is the authority: the Amsterdam Court of Appeal found automated deactivation of drivers was automated decision-making within Article 22, and rejected reliance on a human in the loop because the human role was not meaningful. **Bauserman v. Michigan Unemployment Insurance Agency** is the same failure in the public sector: an automated system raised fraud findings and triggered enforcement with no meaningful oversight, wrongly accusing more than three thousand people.

With the autonomy level fixed, requirements turn the impact findings into specifications. They are captured before design, each with its source, owner, priority and rationale, and each must be verifiable, traceable, unambiguous and measurable. They fall into four categories: functional, technical or non-functional (performance, scalability, security, privacy, usability, resilience), regulatory, and security. The register records who supplied each requirement and deliberately includes affected groups' views, heard through complaints data or a panel.

Three governance requirements belong in every register, and each is cheapest at design time. **Data minimisation by design** reaches features and training sets, not only storage: if fewer features perform equivalently, use fewer, because every retained feature is a proxy risk and a liability. **Contestability** means a route by which an affected person can challenge an outcome, receive a reason and obtain review, which is why reason codes are a requirement and not a feature. **Logging** records what the system decided, on what inputs and under which version, at a granularity that can reconstruct the decision. Rotterdam's welfare fraud algorithm shows what happens when they are absent: in its **Gekleurde technologie** report of April 2021, the city's own Court of Audit found insufficient oversight of algorithm use, caseworkers unaware how their work fed the algorithm, and data reliability never established. The city paused the algorithm that year; the failure was caught by an auditor, not by monitoring, the argument for building oversight into the design.

### 8.6 Documentation, the Decision Record and the Design Review

Documentation is a design artifact, not a report written after the fact. It has two dimensions: the design and build process is documented once, revised periodically, as a development standard; each system's design is documented per system, as a **design baseline**. The baseline captures system purpose and scope, stakeholders and roles, ethical and regulatory considerations, boundaries, data and model design, and risk and lifecycle management, including fallback, monitoring, retraining and retirement plans.

The part most often missing is the **record of decisions**. A design file that lists what was chosen and not why is a description, not evidence. Each entry records the decision, the rationale, the alternatives considered and why they were rejected, and the owner who decided. When a proxy feature is dropped or a threshold set where it sits, the rejected options and reasoning are what a validator, a regulator or a court will ask years later. The EU AI Act's technical documentation duty (Article 11 and Annex IV) expects enough to reproduce the design effort and explain the design rationale, a requirement to record reasoning and not only results.

**Traceability** ties the file together. Version control links code, data and documentation; requirements link to design elements and test results. Data integrity is the precondition: if records or artifacts can be altered undetected, the documentation proves nothing, so training data is archived immutably, changes logged, and artifact repositories access-controlled and audited. Three documents then describe the work to others: a **datasheet** covers a dataset, a **model card** a trained model, and a **system card** the whole deployed system, supporting the transparency and instructions-for-use obligations the AI Act requires. A **quality management system** makes the documentation repeatable, and the AI Act requires one from providers of high-risk systems (Article 17), though citing a framework does not by itself satisfy that article.

The design review is the gate that closes the stage, and its power is the power to refuse. An assessment is worth only the change it causes, so its findings must feed features, training data, interfaces and monitoring before build proceeds. Review sits with governance authority: legal, risk and ethics, with executive or board endorsement for a high-risk system. Risk acceptance records who accepted the residual risk, the residual itself and the tradeoffs accepted, so acceptance is an act by a person rather than a default. The design stage is the last point at which any of this is cheap, the argument for a review that can stop a project, not one that records that a project started.

### Exam Focus

Competency III.A covers the design and build of an AI system, and these points recur.

- Business context (objective, expected benefit, readiness) is distinct from the use case specification (function, users, assumptions, decision authority, lifetime), and an explicit boundary is what prevents scope creep.
- A use case assessment scales rigour by decision impact, user exposure, affected rights or opportunities, automation level, applicable regulation and context, so a recommendation engine and an eligibility model are different governance problems.
- Internal design risk (faulty assumptions, inadequate data, incomplete testing, poor integration, no explainability) differs from external design risk (adversarial use, regulatory change, supply chain, backlash).
- The six named techniques are the probability and severity matrix, the risk mitigation hierarchy, stakeholder mapping, use case evaluation, benchmarking and pre-deployment pilots.
- An impact assessment looks at harm to people while a risk assessment looks at harm to the organization's objectives, and a conformity assessment does neither: it tests against a standard to declare compliance.
- A 42005 record with no benefits, no unintended uses or no misuse analysis is incomplete, a common trap.
- ISO/IEC 42005 is uncertifiable guidance while ISO/IEC 42001 is certifiable and requires the assessment; 42005 clause 5 sets up the process and clause 6 defines one system's record.
- Group-level harm can strike a system down when no individual complaint would surface it, which is the SyRI holding on Article 8 ECHR and the pattern in the Dutch childcare benefits scandal.
- GDPR Article 35 DPIA triggers are automated evaluation with significant effects, large-scale special category or criminal data, and large-scale systematic monitoring; the DPIA is the controller's duty.
- The AI Act Article 27 FRIA is a deployer duty for certain high-risk systems, Article 9's risk management system is the provider's duty, and a DPIA does not replace a FRIA.
- Autonomy (human-in-the-loop, human-on-the-loop, human-in-command) is chosen at design time; stakes and volume choose between the first two, and in-command applies to everything.
- "Solely automated" under GDPR Article 22 is the hinge: meaningful review before the decision takes effect moves a process outside the article, and cosmetic review does not.
- Requirements must be verifiable, traceable, unambiguous and measurable, across functional, non-functional, regulatory and security categories.
- The record of decisions, including rejected options and their rationale, is what makes a design file evidence rather than description.
- Residual risk is accepted by a named person, and a 42001 certificate does not by itself meet the Article 17 QMS duty.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): Business Context, Use Case, Use Case Assessment, Impact Assessment, Risk Assessment, Conformity Assessment, Data Protection Impact Assessment, Fundamental Rights Impact Assessment, Internal Design Risk, External Design Risk, Human in the Loop, Data Minimisation, Contestability, Design Baseline, System Card, Data Integrity, Life Cycle, Quality Management System (QMS).

### Further Reading

- [GDPR, Article 35 (data protection impact assessment)](https://gdpr-info.eu/art-35-gdpr/): when a DPIA is required and what it must contain
- [GDPR, Article 22 (automated individual decision-making)](https://gdpr-info.eu/art-22-gdpr/): the right and the "solely automated" hinge for autonomy design
- [GDPR, Article 5(1)(b) (purpose limitation)](https://gdpr-info.eu/art-5-gdpr/): the rule that stops historic data being repurposed without a fresh basis
- [EU AI Act, Article 27 (fundamental rights impact assessment)](https://artificialintelligenceact.eu/article/27/): the deployer-side assessment duty for certain high-risk systems
- [EU AI Act, Article 9 (risk management system)](https://artificialintelligenceact.eu/article/9/): the provider-side risk process that runs alongside the FRIA
- [EU AI Act, Article 14 (human oversight)](https://artificialintelligenceact.eu/article/14/): the provider's duty to design systems for effective oversight
- [EU AI Act, Article 11 (technical documentation)](https://artificialintelligenceact.eu/article/11/): the documentation duty, detailed in Annex IV
- [EU AI Act, Article 13 (transparency and instructions for use)](https://artificialintelligenceact.eu/article/13/): what the system card and instructions for use must tell deployers
- [EU AI Act, Article 17 (quality management system)](https://artificialintelligenceact.eu/article/17/): the QMS obligation on providers of high-risk systems
- [ISO/IEC 42005 (IEC webstore)](https://webstore.iec.ch/en/publication/107659): the uncertifiable guidance whose clause 5 sets the process and clause 6 the record
- [ISO/IEC 42001 (IEC webstore)](https://webstore.iec.ch/en/publication/90574): the certifiable AI management system that requires the impact assessment
- [ISO/IEC 23894 (IEC webstore)](https://webstore.iec.ch/en/publication/82914): the organizational-risk lens that impact findings feed into
- [NIST AI Risk Management Framework (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): the MAP function on context, purpose and intended use
- [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/): per-subcategory suggested actions, including MANAGE 1.2 on prioritising risk
- [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993): the model-card format the system card extends
- [OECD Recommendation on AI (OECD/LEGAL/0449)](https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449): the values baseline that use case assessment is usually tested against
- [EU High-Level Expert Group on AI, Ethics Guidelines for Trustworthy AI (2019)](https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai): the source of the in-the-loop, on-the-loop and in-command levels
- [SyRI ruling (Rechtbank Den Haag, 5 February 2020)](https://www.rechtspraak.nl/organisatie-en-contact/organisatie/rechtbanken/rechtbank-den-haag/nieuws/syri-wetgeving-in-strijd-met-het-europees-verdrag-voor-de-rechten-voor-de-mens): group-level harm and insufficient transparency under Article 8 ECHR
- [Rekenkamer Rotterdam, Gekleurde technologie (April 2021)](https://rekenkamer.rotterdam.nl/docs/onderzoeken/R.P.20.06-gekleurde-technologie.pdf): an oversight and data-reliability failure caught by an auditor
- [Amnesty International, Xenophobic Machines (October 2021)](https://www.amnesty.org/en/latest/news/2021/10/xenophobic-machines-dutch-child-benefit-scandal/): discrimination built into the design of the Dutch childcare benefits system
- [Bauserman v. Michigan Unemployment Insurance Agency](https://www.michigan.gov/ag/news/press-releases/2024/01/30/class-action-settlement-approved-by-court-of-claims): an automated determination treated as final, with mass remediation
- [Drivers v. Uber and Ola (Amsterdam Court of Appeal, 4 April 2023)](https://apps.eurofound.europa.eu/platformeconomydb/amsterdam-court-of-appeal-rules-uber-violated-data-protection-rights-110150): a human-in-the-loop defence rejected as not meaningful
