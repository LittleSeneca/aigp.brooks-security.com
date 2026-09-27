> **Proposal, not yet in the manuscript.** This replaces the Chapter 2 block in `aigp-book.md`. Original: 3,653 words. Everything below is manuscript content.

## Chapter 2: Ownership, Roles and the Value Chain

Chapter 1 ended with an inventory and a blank owner column. This chapter fills it. Domain I.B asks an organization to establish and communicate its expectations, which means naming who decides what, making those people capable of deciding it, and recognizing that some of the decisions that shape a system are made by someone else entirely.

- Section 2.1 puts a name against every decision, through three layers of ownership.
- Section 2.2 gives the instrument, a RACI by task, along with stakeholder mapping and where AI risk belongs in the enterprise register.
- Section 2.3 makes the owners capable, through training sized to the decisions they make.
- Section 2.4 covers the roles along the value chain, and the difference between the BOK's task labels and the EU AI Act's legal categories.
- Section 2.5 scales the whole program to the organization running it.

One failure runs through all five, and it is worth naming up front. Handing AI to a single expert is the most common instinct and the most common structural mistake. The decisions that matter are spread across the organization, so a governance function that owns AI on everyone's behalf ends up owning nothing. What follows is the alternative: shared responsibility with exactly one accountable owner per decision.

| Case | Citable as | Drawn on for |
|---|---|---|
| Drivers v. Uber and Ola | Amsterdam Court of Appeal, 4 April 2023 | Human oversight that exists on paper only |
| Samsung's employee chatbot ban | Reported May 2023 | Shadow AI as a readiness failure |
| FTC v. Rite Aid | FTC consent order, December 2023 | Automation bias in the operating layer |
| Royal Commission into the Robodebt Scheme | Report tabled 7 July 2023 | Accountability with no owner |
| Bauserman v. Michigan UIA | Settlement approved January 2024 | Oversight failure at scale in a public body |

### 2.1 Three Layers of Ownership

Chapter 1 separated responsibility from accountability: many people do the work, and one named person answers for the outcome. Governance builds that distinction into three layers, and the exam expects you to know what each layer owns.

**The direction layer** is the board and the C-suite: the Chief Executive Officer, Chief Operating Officer, Chief Risk Officer, Chief Information Security Officer, Chief Data and Analytics Officer, Chief Privacy Officer, Chief Compliance Officer, and any Chief AI Ethics Officer. It owns risk appetite, funding, tone and final accountability.

**The steering layer** is a cross-functional AI governance board or council drawn from legal, privacy, security, data science, ethics, risk, compliance and the business units. It owns the framework, the review of higher-risk use cases, escalation decisions and reporting upward.

**The operating layer** covers data scientists and AI engineers, data engineers, AI operations, product owners, risk and compliance staff, and frontline users. It owns building, assessing, monitoring, documenting and flagging anomalies.

A growing number of organizations add a **Chief AI Ethics Officer** to hold the ethical governance remit explicitly. It is a signal of maturity rather than a legal requirement, and no instrument in Chapter 6 or 7 compels one. On an exam, an answer that treats the role as mandatory is wrong.

The three layers are a division of labour, not a hierarchy of importance. The operating layer is where most governance failures actually surface, because it is where the system meets the person affected by it.

### 2.2 RACI by Task

A **RACI** matrix names, for each task, who is **Responsible** for doing it, who is **Accountable** for the outcome, who is **Consulted** before the decision and who is **Informed** of it.

Applied per governance task rather than per department, it forces two things an org chart hides: exactly one accountable owner per task, and an explicit list of who must be consulted before the decision. Governance failures usually trace to a task with no accountable owner, or to a decision taken without the function that would have caught the problem.

Three rules make it work in practice.

- **One Accountable, always.** Two accountable names is the same as none, because each can assume the other is watching. This is the single most testable point about RACI.
- **Accountable is not the most senior person available.** It is the person with the authority and the information to answer for the outcome.
- **Consulted is not Informed.** The distinction matters legally as well as operationally, because a consultative role that carries no decision rights is also what preserves the independence of functions the law requires to be independent.

That last point is worth stating precisely, because it is tested. Under GDPR Article 38 a data protection officer must be independent: no instructions on the exercise of the DPO's tasks, and no conflict of interest from other duties. A DPO or a privacy function therefore sits as **Consulted**, never Accountable, on processing they monitor. A RACI that makes the DPO accountable for a system they also supervise has built the conflict the article forbids.

**Stakeholder mapping** identifies everyone, internal and external, affected by a system or able to influence it: the business sponsor, affected employees, the people scored, the communities implicated, the vendors in the chain and the regulators with jurisdiction. It is a control rather than paperwork, because a stakeholder who is never identified is a risk nobody owns. External stakeholders, civil society and affected communities among them, are the ones internal processes most reliably miss.

**Integration into enterprise risk management.** AI risk kept in a separate register gets reviewed separately and funded last. The mature pattern is to tag AI risks inside the existing **enterprise risk management (ERM)** portfolio, with AI-specific fields for the system, the model version, the affected population and fairness exposure, rather than running a parallel process. AI governance then reaches the board through risk reporting that already has its attention. A standalone AI register that never touches ERM is the wrong answer on an exam.

### 2.3 Literacy and Readiness

Owners are only as good as their grasp of what they own. The BOK's indicator is to create and deliver a training and awareness program covering AI terminology, strategy and governance for all stakeholders. Four design consequences follow.

**Depth by role.** One deck for the whole organization satisfies nobody, because a board member, a data scientist and a contact-centre agent need different things. Baseline awareness for everyone, and depth that follows the decisions a person actually makes.

| Audience | What they need |
|---|---|
| Executives and board | Strategic alignment, regulatory exposure, reputational and enterprise risk, how to read an AI risk register |
| Developers and data scientists | Governance by design, documentation standards, bias and fairness testing, reproducibility, the approval workflow |
| Legal, risk and compliance | Regulatory fluency, impact assessment practice, vendor and contract risk, audit readiness |
| Product and business owners | Use-case vetting, success criteria, user impact, their accountability for outcomes |
| Frontline users | What the system can and cannot do, when to override, how to report an anomaly, recourse options |
| IT and security | Monitoring, incident response, control ownership, AI-specific attack surface |
| Everyone | Basic literacy, the organization's principles, how to escalate a concern |

The frontline row deserves emphasis, because people asked to flag anomalies have to be taught what one looks like. Oversight assigned to staff who cannot recognize a failure mode is oversight in name only.

**The legal floor.** Article 4 of the EU AI Act has required providers and deployers to address AI literacy since 2 February 2025, and it reaches any organization within the Act's scope. As amended by the Digital Omnibus, from 27 July 2026 it is a duty to take measures to support literacy rather than to guarantee a level of it. Read the change carefully, because it is exactly the kind of date-and-status distinction the exam tests: the obligation did not disappear, its standard moved.

**Training against automation bias.** **Automation bias** is the documented human tendency to over-trust machine output, and it is why oversight that exists on paper still fails. It is the practical face of Chapter 1's point that AI outputs are probabilistic. The FTC's Rite Aid order is the clearest enforcement example: the system produced flags, staff acted on them, and the Commission's case turned on the absence of reasonable safeguards around a system whose errors fell disproportionately on women and people of colour. Training is the cheapest countermeasure, because users who understand error modes, confidence and a system's limits are materially better overseers. Interface design carries the other half, by making disagreement and override easy.

Human oversight also has a legal minimum, and "solely automated" is the hinge. In Drivers v. Uber and Ola the Amsterdam Court of Appeal found the ride-hailing companies in breach of the GDPR over decisions made by opaque algorithms that managed, fined and deactivated drivers. The case is worth knowing for two reasons: it shows that purported human review is examined for substance rather than accepted on assertion, and it shows that an oversight claim which survives scrutiny depends on the reviewer having the authority, the information and the time to disagree.

**Measuring and maintaining.** Attendance counts are not evidence of literacy. Better measures are pre- and post-assessment, the share of staff trained within a stated window, the number of AI projects with complete documentation, and the volume of risk escalations raised by trained staff. That last one is a leading indicator rather than a lagging one: it shows whether people believe reporting is safe. A literacy program with zero escalations has not been tested.

**Change management.** Workforce readiness goes beyond knowledge. New AI systems change workflows, job content and required skills, and change handled badly generates resistance that later surfaces as **shadow AI**: employees using unapproved tools because the approved path is too slow. Samsung's May 2023 ban on employee use of external chatbots is the standard illustration. An engineer had uploaded internal source code to a public tool, and the company's response was a blanket prohibition. Read as governance, the episode shows both halves of the problem: the leak is an acceptable-use failure, and the reason staff went around the approved path is a readiness failure. A prohibition treats the symptom. Readiness work is therefore governance work, not a communications exercise.

### 2.4 Roles Along the Value Chain

Every owner named so far works for the organization. Many of the decisions that shape its systems are made by others, and two vocabularies describe who does what along that chain. Keeping them apart is one of the most reliably tested distinctions in Domain I.

**The BOK's vocabulary describes tasks.**

- A **developer** (data scientists, machine learning engineers, data engineers, research scientists) handles data curation and rights, model selection and training, fairness and robustness evaluation, documentation and testing.
- A **provider** places the system on the market under its own name, which the BOK says can include a team that fine-tunes someone else's base model.
- A **deployer** (software engineers, AI operations, product managers, infrastructure) handles fit-for-context assessment, integration, human oversight in operation, monitoring, incident escalation and user instructions.
- A **user** (internal staff, external customers, decision-makers relying on output) operates within intended bounds, applies judgment, reports anomalies and exercises recourse.

The BOK deliberately calls developer and deployer **task labels, not legal categories**. One organization can be the developer of one system and the deployer of another, because the labels describe what you are doing rather than what you legally are. Questions about task labels are answered in terms of tasks.

**The EU AI Act's categories carry legal duties.** Its **provider** develops a system or has it developed and places it on the market or puts it into service under its own name or trademark, whether or not anything was fine-tuned. A company that builds its own application on another party's general-purpose model is that application's **downstream provider**, and the general-purpose model's own provider owes it information under Article 53.

| Role | BOK task label | EU AI Act category and core duties |
|---|---|---|
| Developer | Builds and tests the model | No separate category |
| Provider | Places the system on the market under its own name | Places on the EU market or puts into service under its own name: risk management, data governance, technical documentation, conformity assessment, CE marking, registration, post-market monitoring, incident reporting |
| Deployer | Integrates, oversees and monitors in context | Uses the system under its authority in a professional capacity: use per instructions, competent human oversight, relevant input data, monitoring, log retention, serious-incident reporting, and a FRIA for some |
| User | Relies on output within intended bounds | No separate category |
| Importer | None | Places a third-country provider's system on the EU market; verifies the conformity assessment, documentation and CE marking |
| Distributor | None | Makes a system available unmodified; verifies CE marking and documentation, and does not supply a system it believes non-compliant |

Provider and deployer are where the vocabularies overlap and the duties diverge. The same organization can hold both roles for the same system. A subsidiary that has a system developed by group data science and then puts it into service under its own name is its **provider** under Article 3(3), and also its **deployer** because its own staff use it. Where that system is high-risk, the deployer side carries a **fundamental rights impact assessment (FRIA)** under Article 27. The FRIA is narrower than it sounds: it binds only public bodies, private entities providing public services, and deployers of Annex III points 5(b) and 5(c) systems. It applies from 2 December 2027 as amended, 2 August 2026 as enacted.

#### When a deployer becomes a provider

Under Article 25(1), any distributor, importer, deployer or other third party becomes the **provider** of a high-risk system, with all of a provider's obligations, in three situations.

- **Point (a):** it puts its own name or trademark on a high-risk system.
- **Point (b):** it substantially modifies a high-risk system that remains high-risk.
- **Point (c):** it changes the intended purpose of a system that was not high-risk, including a general-purpose system, so that it becomes high-risk.

The rule turns what looks like a deployment question into a conformity question. It is why rebranding a vendor's tool, or pointing a general-purpose model at a new use case, can move an entire set of obligations onto the party that did it. Point (c) is the one exam writers reach for, because the trigger is a change of purpose rather than a change of code.

#### Why the split matters

Most of the risk that downstream parties inherit is set upstream, in training data, architecture and thresholds. Most of the harm happens downstream, in context, where the deployer decides how the output is used and who oversees it. The role model exists so that neither party can point at the other, and so that a governance professional can say who owes what to whom. Accountability follows the role, and outsourcing a system does not outsource accountability.

### 2.5 Fitting the Program to the Organization

The BOK frames Domain I as holding regardless of industry, sector or size, so the same structures have to be scaled to an organization's size, sector, maturity, jurisdictions and risk profile.

**Proportionality runs by system, not by company.** A high-consequence system earns the full RACI and stakeholder map. A low-consequence one earns a register line and a named owner. Treating every system identically is as much a failure as treating none of them seriously, because it spends the governance budget where the risk is not.

**Jurisdictions stack.** An organization operating in several jurisdictions carries layered law, and the duties attach per entity and per role rather than to the group as a whole.

**Maturity sets the ceiling.** A mid-sized firm early in its AI maturity can support a council but not yet an ethics officer.

**Small organizations need less structure and the same discipline.** A forty-person startup might have no council at all: an accountable founder, a responsible engineer, and a monthly review with outside counsel. It would still need one owner per decision, a written record, and training sized to the team. Nothing in the structures above depends on an organization being large or regulated in a particular sector. The same council, RACI and curriculum would work at a hospital, a retailer or a software company, which is exactly why Domain I is examined as sector-agnostic.

### Exam Focus

- Domain I is tested as sector-agnostic, and an answer that assumes a bank or a particular industry is usually wrong.
- Know what each layer owns: direction owns appetite, funding, tone and final accountability; steering owns the framework, high-risk review, escalation and upward reporting; operating owns building, assessing, monitoring, documenting and flagging anomalies.
- A Chief AI Ethics Officer is a maturity signal and never a legal requirement.
- RACI is the instrument the BOK's "define roles and responsibilities" indicator points at, with exactly one Accountable party per task, Consulted parties heard before the decision, and Informed parties told of it.
- A DPO or privacy function is Consulted, never Accountable, on processing it monitors, because GDPR Article 38 requires independence.
- Stakeholder mapping is a control, because an unidentified stakeholder is an unowned risk, and external stakeholders are the ones most often missed.
- The mature pattern tags AI risk inside the existing ERM portfolio, so a parallel AI register is the wrong answer.
- Training covers AI terminology, strategy and governance for all stakeholders, with baseline awareness for all and depth by role, and it is judged by effectiveness measures rather than attendance.
- Article 4 of the EU AI Act has required AI literacy measures since 2 February 2025, and the Digital Omnibus softened the standard from 27 July 2026 without removing the duty.
- Provider was added to the BOK's roles in v2.1. Keep the BOK's developer, provider, deployer and user apart from the AI Act's provider, deployer, importer and distributor, and remember that task labels are not legal categories.
- The Article 25(1) deemed-provider triggers (name or trademark, substantial modification, changed intended purpose) reach distributors, importers and other third parties as well as deployers, and they turn a deployment question into a conformity question.
- The Article 27 FRIA binds only public bodies, private entities providing public services, and deployers of Annex III 5(b) and 5(c) systems.
- Human oversight is examined for substance, not for its existence, and "solely automated" is the hinge.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): Adoption, AI Governance Stakeholder, Cross-Functional Collaboration, RACI Matrix, Stakeholder Mapping, Training and Awareness Program, AI Deployer, AI Developer, AI User, Automation Bias, Shadow AI, Provider, Downstream Provider.

### Further Reading

- [NIST AI RMF Playbook, Govern function](https://airc.nist.gov/airmf-resources/playbook/): GV1 to GV6, roles, accountability, culture and third-party governance
- [ISO/IEC 42001 (AI management system)](https://www.iso.org/standard/42001): clause 5 on leadership and Annex A organizational controls
- [NIST AI RMF (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): AI actors and the Govern function as the cross-cutting foundation
- [EU AI Act, Article 4 (AI literacy)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-4): the legal expectation, in force 2 February 2025
- [EU AI Act, Article 3 (definitions of provider, deployer, importer, distributor)](https://artificialintelligenceact.eu/article/3/): the legal role definitions
- [EU AI Act, Article 25 (responsibilities along the AI value chain)](https://artificialintelligenceact.eu/article/25/): the rule that turns deployers into providers
- [EU AI Act, Article 27 (fundamental rights impact assessment)](https://artificialintelligenceact.eu/article/27/): who owes a FRIA and when
- [EU AI Act, Article 38 (position of the data protection officer)](https://gdpr-info.eu/art-38-gdpr/): independence, and why a DPO is Consulted rather than Accountable
- [Drivers v. Uber and Ola (Amsterdam Court of Appeal, 4 April 2023)](https://fountaincourt.uk/2023/04/amsterdam-court-upholds-appeal-in-algorithmic-decision-making-test-case-drivers-v-uber-and-ola/): automated decisions, opaque algorithms and the limits of asserted human review
- [FTC v. Rite Aid Corporation](https://www.ftc.gov/legal-library/browse/cases-proceedings/2023190-rite-aid-corporation-ftc-v): automation bias, safeguards and the five-year facial recognition ban
- [Royal Commission into the Robodebt Scheme (report, 7 July 2023)](https://robodebt.royalcommission.gov.au/publications/report): an automated system whose unlawful decisions had no accountable owner
- [Bauserman v. Michigan Unemployment Insurance Agency](https://stpp.fordschool.umich.edu/research/policy-brief/case-over-michigan-unemployment-insurance-agencys-faulty-automated-system): a public body's automated fraud detection and its $20m settlement
- [IAPP Key Terms for AI Governance](https://iapp.org/resources/article/key-terms-for-ai-governance/): stakeholder and role terminology
