> **Proposal, not yet in the manuscript.** These replace the four Part openers in `aigp-book.md`, keeping each domain's question, its Exam at a Glance competency table and its v2.1 change list, and cutting the story road map. Everything below is manuscript content.

# Part I: Foundations

*Who owns it?*

The first domain answers what AI governance is and what a program that delivers it contains. It is the smallest domain by question count and the one every later part depends on, because Domains II to IV reason with the vocabulary installed here. Its three competencies map onto three questions: what a system is and what can go wrong (I.A), who answers for a decision (I.B), and what has to be written down (I.C).

### Exam at a Glance

Under BOK v2.1, approved on 9 September 2025, Domain I carries 16 to 20 of the 100 scored items, the fewest of the four domains (Domain II carries 19 to 23, Domains III and IV 21 to 25 each). Each competency has its own chapter.

| Competency | What it covers | Questions | Chapter |
|---|---|---|---|
| I.A Understand what AI is and why it needs governance | Definitions and types of AI; risks and harms; the characteristics that demand governance; responsible AI principles | 4 to 6 | 1 |
| I.B Establish and communicate organizational expectations | Roles and responsibilities; cross-functional collaboration; training and awareness; tailoring by context; developers, providers, deployers and users | 5 to 7 | 2 |
| I.C Establish policies and procedures across the life cycle | Oversight and accountability at every stage; updating existing privacy, security, data-governance and IP policies; third-party risk | 6 to 8 | 3 |

The competency ranges sum to 15 to 21, not the domain's 16 to 20, so learn each figure as published. Questions sit mostly at the remember/understand and apply/analyze levels of Bloom's taxonomy, so definitional precision pays more here than anywhere else in the syllabus. The sector-agnostic framing is itself testable: an answer that assumes a bank, a hospital or a large enterprise is usually the wrong one.

BOK v2.1 made three changes to Domain I relative to v2.0.1.

- I.B now lists providers alongside developers, deployers and users, so that you see the whole value chain rather than only the internal cast. Chapter 2 explains who counts as a provider.
- I.C's policy-review item now names data governance and intellectual property explicitly, alongside the data privacy and security policies v2.0.1 already listed.
- I.C's third-party item now covers policies, assessments and contracts, and adds acceptable use to the areas it already named (procurement, supply chain and human resources).

**Chapters.** Chapter 1 settles what counts as an AI system, what can go wrong, why ordinary software controls do not answer either question, and which principles respond. Chapter 2 puts names against decisions: roles and responsibilities, an accountability model, literacy and training by role, and the value-chain hats an organization wears as a developer, provider or deployer. Chapter 3 turns the expectations into policy: human oversight across the life cycle, a retrofit of the policies an organization already has, and the risk that arrives through third parties.

# Part II: Laws, Standards and Frameworks

*What must we do, and how do we prove it?*

The second domain is where the exam stops asking what AI governance is and starts asking what the law requires. It has two halves that reward different skills. Chapters 4 and 5 cover law that already reached AI without naming it, where the work is seeing the hook: which existing obligation a new use case has just landed on. Chapters 6 and 7 cover law written for AI and the standards that operationalize it, where the work is knowing the mechanism and which instrument does what.

### Exam at a Glance

Domain II carries 19 to 23 of the 100 scored items, the third-heaviest domain, behind only Domains III and IV. Its four competencies map onto this part's chapters.

| Competency | What it covers | Questions | Chapter |
|---|---|---|---|
| II.A How existing data privacy laws apply to AI | Transparency, choice, lawful basis. Controller duties, including automated decision-making | 4 to 6 | 4 |
| II.B How other existing laws apply to AI | IP, non-discrimination, consumer protection, product liability | 4 to 6 | 5 |
| II.C Main elements of AI-specific laws | EU AI Act, South Korea's AI Basic Act, US federal and state AI laws | 6 to 8 | 6 |
| II.D Main industry standards and tools | OECD, NIST AI RMF and Playbook, ISO/IEC 22989, 42001, 42005 | 3 to 5 | 7 |

II.A and II.B reward seeing the hook, II.C knowing the mechanism, and II.D knowing which instrument does what. BOK v2.1, approved on 9 September 2025, changed the domain in three ways.

- II.C was renamed from "the main elements of the EU AI Act" to "the main elements of AI-specific laws", its weight rose from 5 to 7 questions to 6 to 8, and the domain introduction now names South Korea's AI Basic Act and US federal and state AI laws.
- II.A's first indicator became "transparency, choice, lawful basis", widening the focus from consent to every GDPR Article 6 basis, and controller obligations now name automated decision-making explicitly.
- II.D dropped NIST ARIA and added ISO/IEC 42005, making the core ISO three 22989, 42001 and 42005, and its weight fell from 4 to 6 questions to 3 to 5.

Because v2.1 was approved before the Omnibus was agreed, a live item may quote either timeline. Read the stem for "as originally enacted" or "as amended by the 2026 Digital Omnibus", and if there is no anchor, ask whether the tested fact changed at all. Work each matching problem as instrument, role, duty, and look for the one detail in the fact pattern that decides the instrument. Precision about dates and status is worth as much as the rules themselves.

**Chapters.** Chapter 4 takes privacy law, from the GDPR's automated-decision rules to lawful basis, minimisation, controller duties and special-category data. Chapter 5 takes the laws that already reached AI without naming it: intellectual property, non-discrimination, consumer protection and product liability. Chapter 6 covers laws written for AI, anchored by the EU AI Act, with South Korea's AI Framework Act and US federal and state measures beside it. Chapter 7 turns to the voluntary OECD, NIST and ISO frameworks that regulators, auditors and contracts increasingly treat as the measure of due care.

# Part III: Governing AI Development

*Can we build it right?*

The third domain follows the build. It is organized as a chain of documented decisions that ends in release, and almost every exam item tests process discipline: which link of the chain is in play, and what record it should leave. The domain is also where the BOK's documentation requirements make the record itself examinable, so the question is often not what should have been decided but what should be written down and by whom.

### Exam at a Glance

Domain III covers the build and carries 21 to 25 of the 100 scored items, tied with Domain IV for the largest share.

| Competency | What it covers | Questions | Chapter |
|---|---|---|---|
| III.A Govern designing and building the AI system | Use case, impact assessment, design risk, six named techniques | 6 to 8 | 8 |
| III.B Govern data collection and use in training and testing | Right to use data, quality, provenance and lineage, testing | 6 to 8 | 9 |
| III.C Govern release, monitoring and maintenance | Readiness, deployment, monitoring, retraining | 8 to 10 | 10 |

The three competencies are close in size, but III.C is the largest. The III.A technique names are the BOK's own, and the two documentation indicators make the record itself examinable. BOK v2.1 made two changes that reach Domain III.

- III.A lost its "identify applicable laws" indicator, which v2.1 also removed from IV.B.
- "Model" became "system" throughout, matching the BOK's shift from governing a model to governing a system in its deployment context.

**Chapters.** Chapter 8 covers design and impact assessment: framing the use case, the intake gate, design risk, the impact assessment itself, requirements and the design baseline, and the documentation that has to survive contact with delivery pressure. Chapter 9 covers training and testing data: the authority to use data, quality, provenance and lineage, labelling and training methods, held-out data, and testing that goes beyond accuracy to bias and fairness. Chapter 10 covers release and monitoring: readiness before release, deployment, and the monitoring that continues after it.

# Part IV: Governing AI Deployment and Use

*Can we live with what we chose?*

The fourth domain covers choosing a system, adopting it and living with it. It is the most scenario-heavy part of the syllabus, and most items test one link in a chain of decisions. Its most common trap is a distractor that sounds prudent but belongs to a different link: renegotiating a vendor contract after an incident is Chapter 12 work, while the immediate response to that incident is containment, correction and customer communication under Chapter 13. Expect a scenario that asks which EU AI Act role an organization occupies, because the duties divide by role.

### Exam at a Glance

Domain IV carries 21 to 25 of the 100 scored items, tied with Domain III for the largest share, and it is the most scenario-heavy part of the syllabus.

| Competency | What it covers | Questions | Chapter |
|---|---|---|---|
| IV.A Evaluate key factors and risks in the decision to deploy | Context of the use case; AI model types; deployment options, including agentic architectures | 6 to 8 | 11 |
| IV.B Perform key assessment activities | An impact assessment on the selected system; key terms and risks in the vendor or licensing agreement; risks and opportunities of a proprietary model | 5 to 7 | 12 |
| IV.C Govern deployment and use | Policies, procedures and ethics; continuous monitoring and maintenance; periodic assessments; documentation; secondary use and downstream harm; external communication; deactivation and localization | 9 to 11 | 13 |

The ranges sum to 20 to 26, not the domain's 21 to 25, so learn each figure as published. IV.C alone is larger than either other competency and than most whole knowledge areas elsewhere. IV.B is small but holds the proprietary-model distinction, which separates good answers from bad ones in deployment scenarios.

BOK v2.1 made four changes to Domain IV.

- IV.A now names agentic architectures beside fine-tuning and retrieval augmented generation as ways of deploying a model, the domain's only new technical content and the reason agentic AI appears in the blueprint's introduction as something the certification covers.
- IV.B's "open source agreement" became "licensing agreement", putting proprietary and open-source terms under one heading.
- IV.B's proprietary-model item became "risks and opportunities". The older wording read as pure exposure, and v2.1 wants the control and capability argument beside it.
- The "identify applicable laws" indicators left III.A and IV.B, and "model" became "system" throughout, matching the BOK's shift from governing a model to governing a system in its deployment context.

**Chapters.** Chapter 11 covers the decision to deploy: whether the use case justifies the tool, which model fits, where and how it runs, and what changes when the system acts rather than advises. Chapter 12 covers assessing what you adopt: an impact assessment on the selected system, the contract's key terms and risks, licences and open weights, and proprietary models bought and built. Chapter 13 covers the long work: risk management and forecasting, audits and assurance, incident management, business records, external communication, and retirement, deactivation and localization.
