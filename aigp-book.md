# The Record

## Governing AI from First Idea to Switch-Off

*A narrative guide to the IAPP AIGP Body of Knowledge*

*Law and standards stated as of September 2026*

# Contents

- About This Book
- Larkspur at a Glance
- Introduction: The Board's Question
- Part I: Foundations
    - Chapter 1: AI and the Case for Governance
    - Chapter 2: Who Owns AI
    - Chapter 3: Rewriting the Rules: Policies Across the Lifecycle
- Part II: Laws, Standards and Frameworks
    - Chapter 4: Privacy Law Meets AI
    - Chapter 5: The Law That Was Already There
    - Chapter 6: The Law Written for AI
    - Chapter 7: Industry Standards and Tools
- Part III: Governing AI Development
    - Chapter 8: The Design File
    - Chapter 9: Training and Testing Data
    - Chapter 10: Release and Monitoring
- Part IV: Governing AI Deployment and Use
    - Chapter 11: Deciding to Deploy
    - Chapter 12: Assessing What You Adopt
    - Chapter 13: Operating, Monitoring and Retiring
- Conclusion: The Same Question, a Year Later
- Appendix A: Larkspur Chronology and Legal Calendar
- Appendix B: Standards and Frameworks at a Glance
- Appendix C: The Larkspur Record
- Appendix D: Glossary

# About This Book

This is a guide to AI governance for people preparing for the IAPP's AIGP certification, and for anyone newly responsible for how an organization uses AI. It covers the four domains of the AIGP Body of Knowledge (BOK) v2.1 in order: foundations, then laws, standards and frameworks, then the governance of AI development, then the governance of AI deployment and use. It is written as a narrative. Rather than working through the BOK outline item by item, it follows one company as it builds a governance program and lives with its choices, and it teaches each concept where the company first needs it.

The company is Larkspur Financial, a consumer lender headquartered in Charlotte, North Carolina, with a lending subsidiary in Dublin. The story runs across roughly a year, from a September 2025 board meeting at which the risk committee's chair asks who owns the company's AI exposure to the September 2026 meeting that hears the answer. Larkspur, its people and its vendors, including Norvane and Brightlist, are fictional, as are its systems, figures and incidents. The laws, standards, guidance and court decisions the book discusses are real, and they are stated as they stand in September 2026. AI law moves quickly, and some of what is described here as proposed or in draft will have moved on by the time you read it, so the text gives a date or a status wherever one matters.

The EU AI Act needs one further convention. The Digital Omnibus on AI (Regulation (EU) 2026/1744), in force since 27 July 2026, amended the Act as adopted (Regulation (EU) 2024/1689) and moved several of its dates. Wherever the two versions differ, this book labels an EU AI Act fact "as enacted" or "as amended by the Digital Omnibus on AI". The clearest case is the date from which the Annex III high-risk obligations apply: 2 August 2026 as enacted, 2 December 2027 as amended. Chapter 6 gives the full timeline in both forms, and Appendix A pairs it with the Larkspur chronology.

The labels matter for the exam too. BOK v2.1 was approved on 9 September 2025, before the Omnibus was agreed, so a live exam item may be written against either version of the Act. A well-drafted stem names its anchor, and where it names none, the useful question is whether the fact being tested changed at all. Knowing both timelines, and which facts the Omnibus left untouched, is the safe preparation.

Legal status is stated with the same care, using a fixed vocabulary. A proposed instrument has been put forward but not approved, as the Commission's Digital Omnibus amendments to the GDPR had been by September 2026. A draft is published for comment before it is final, such as the EDPB's 2026 guidelines on anonymisation and web scraping. Withdrawn means pulled back by the body that issued it, as the Commission did with its proposed AI Liability Directive. On appeal marks a court decision under review by a higher court, as both leading European decisions on AI training and copyright are.

The two words that most need separating are adopted, meaning formally approved or enacted, and in force, meaning legally effective. Colorado's original AI Act (SB 24-205) was adopted but never took effect. A law in force may also have obligations that apply only from later dates, and the book says "applies from" for those.

None of this is legal advice. The book is an educational guide, and Larkspur's legal analyses show how a careful team reasons about one set of facts. Your organization's facts will differ, and decisions about your own obligations belong with qualified counsel.

The book is meant to be read straight through as one story, because a decision Larkspur records in an early chapter is often the one that matters months later. It also works for exam review. Each chapter's Exam Focus and Key Terms condense what it teaches, the Glossary in Appendix D defines every key term in one place, Appendix B summarizes the standards and frameworks, and Appendix C compiles the Larkspur record. Five elements recur in every chapter:

- Dated opening scenes. Each chapter opens on a Larkspur scene under an italic place-and-month line, such as *Charlotte, December 2025*. Parts III and IV each step back to January 2026 to follow one system from its start.
- The Record. The governance artifacts Larkspur created in the chapter, each with its named owner.
- Exam Focus. Single sentences naming the chapter's tested distinctions, traps and facts. Remarks about the exam live here rather than in the running text.
- Key Terms. The chapter's important terms, each defined in the Glossary. In the text, bold marks a key term at its first defining use.
- Further Reading. The official texts, standards and other sources behind the chapter.

The first two elements belong to the story and the last three to review, and one caution applies to both. Larkspur is a lender, but the BOK describes Domain I as holding "regardless of industry, sector or size". The case illustrates generic governance practice, and a Domain I exam answer that assumes a bank or a lender is usually wrong. The pages that follow set out Larkspur's entities, people and systems, and the legal role each system carries, for reference as you read.

# Larkspur at a Glance

All of the book's case material takes place inside one group of companies. Larkspur Financial, Inc. is a state-licensed non-bank consumer lender headquartered in Charlotte, North Carolina, with about 1,200 staff, licensed in about 30 US states including California, New York, Massachusetts, Colorado, Illinois, Texas and Utah. It makes unsecured personal loans and, in the US only, residential mortgages, and it receives about 6,000 applications a week. Because it is a non-bank, the FTC Act section 5, CFPB authority over unfair, deceptive or abusive practices and state UDAP laws all reach it, along with ECOA and Regulation B and the Fair Credit Reporting Act, while the Fair Housing Act reaches only the mortgage book. Its subsidiary Larkspur Financial Ireland DAC, which the book calls the Dublin entity, makes personal loans to consumers in Ireland, is authorised by the Central Bank of Ireland and has the Irish Data Protection Commission as its GDPR supervisory authority. Larkspur Insurance Services is a small US-only agency that sells partner carriers' credit-protection products, prices nothing and has no EU business, and South Korea is under exploration only, with no Korean entity, customers or data during the book.

Eight named people carry the story. Because the book's central discipline is that every consequential decision has a named owner, the table records what each of them owns as well as the role each holds.

| Person | Role | What they own |
|---|---|---|
| Nadia Brennan | Group head of AI governance, appointed September 2025, reporting to the CRO. Chairs the AI governance council. Background in model risk. | The governance process and its records, beginning with the AI Register. Never a system. |
| Tom Ashby | Chief Risk Officer and board liaison | Enterprise risk management and the risk register. Signs residual-risk acceptances above appetite. |
| Dana Whitfield | Head of consumer lending. Underwriters report to her. | Accountable business owner of Clearline. Data owner of the loan files. |
| Priya Raman | Head of data science, US parent | Her team builds Clearline. Responsible, not Accountable, for Clearline. |
| Marcus Hale | Group general counsel | Legal assessments, contracts and role memos. |
| Siobhan Kelly | Data protection officer, Dublin entity | Breach-notification assessments for the Dublin entity. Advises and is Consulted, and is never Accountable for a system she monitors (GDPR Article 38 independence). |
| Owen Park | Head of customer operations, US and Dublin. Underwriters do not report to him. | Contact centre, collections, servicing, complaints and appeals, including appeals of Clearline declines. Accountable business owner of Ask Larkspur and, from Chapter 2, its knowledge library. |
| Evelyn Marsh | Chair of the board risk committee | The board's oversight question, asked in the Introduction and answered in the Conclusion. |

Several roles stay unnamed: the CISO, an independent model validation team that reports to Tom so that testing stays separate from building, the COO as designated approver of external communications, Owen's knowledge-management lead and a platform engineer. The pairings in the table are deliberate. Dana answers for Clearline while Priya's team builds it, which is the difference between accountability and responsibility that the book returns to again and again. Siobhan advises on systems she will never own, because owning a system she monitors would compromise the independence GDPR Article 38 requires of a data protection officer.

Those people govern the systems in Larkspur's AI Register, which holds eleven entries by the Conclusion. Two of them, Clearline and Ask Larkspur, carry Parts III and IV, and three more recur often enough to need a line of their own.

| System | What it is | Where it stands by September 2026 |
|---|---|---|
| Clearline | In-house credit underwriting model: a gradient-boosted ensemble predicting default within 24 months, for unsecured personal loans only. It auto-approves only the lowest-risk band, sends every non-approval to a human underwriter, never declines automatically and does not set prices. | Built by Priya's team. 5% US canary in June 2026 and full US rollout in July 2026. Dublin go-live in September 2026. |
| Ask Larkspur | Customer-service generative AI assistant. It began in August 2025 as a Norvane feature toggle drafting replies for human agents. The customer-facing version is Larkspur's own text chat, which retrieves from Larkspur policy documents and calls Norvane's general-purpose model through an API. | US launch April 2026. Ireland launch mid-August 2026, with the AI-interaction disclosure from day one. |
| Hardship-plan agent | Extension of Ask Larkspur that proposes payment plans produced by a deterministic eligibility rules service and creates them through the servicing API. It does not assess ability to repay, and fee waivers and term limits are blocked in code. | US-only pilot from September 2026, with a human approving every plan. |
| Scorecard 7 | Legacy logistic-regression application scorecard, built by a consultancy in 2016 and recalibrated every year, used in the US and Dublin. Borderline as an AI system, and governed as in scope either way. | Retired in the US in August 2026. Dublin retirement under way. |
| Brightlist resume screener | A vendor's hiring tool that HR wants to buy. | Scoped to US hiring only, including New York City roles, after an independent bias audit. Dublin use deferred. |

Two design limits in the table do real work later. Clearline never declines anyone automatically, in the US or Ireland, a limit set by the risk appetite the board risk committee records in November 2025, and the hardship agent never assesses ability to repay, which is what keeps it outside Annex III point 5(b). The remaining six entries are smaller parts of the story. The fraud rules engine is hand-coded rules rather than machine learning and is logged for completeness. Marketing runs a customer segmentation model built on unsupervised clustering, and Owen's team runs a call-volume forecasting model. A sanctioned enterprise assistant, an approved general-purpose chat tool with no training on inputs and limited retention, is launched to displace shadow AI, and unsanctioned use of public chatbots stays on the register as its own line until that assistant and data loss prevention bring it down. Norvane's general-purpose model is listed as a component in the Ask Larkspur AI bill of materials.

Each system in the map below sits under several legal regimes at once, and Larkspur can hold a different role under each. The map records those roles, and the book never departs from it. Its second column uses the BOK's task labels, which describe what a party does, while the EU AI Act column uses the Act's legal categories. Chapter 2 introduces that distinction and Chapter 6 records Larkspur's full role assessment.

| System | BOK task label | EU AI Act role and tier | GDPR role | Principal US law |
|---|---|---|---|---|
| Clearline | The US data science team is the developer, and Larkspur deploys it in lending. | The Dublin entity is provider (it has the system developed by group data science and puts it into service under its own name, Article 3(3)) and deployer. High-risk under Annex III point 5(b), creditworthiness of natural persons. No Article 6(3) derogation, because Clearline profiles natural persons. Conformity assessment by internal control, no notified body. As deployer it owes an Article 27 fundamental rights impact assessment (FRIA) once Annex III obligations apply. | The Dublin entity is controller for Irish applicants. The US parent is processor under an intra-group agreement. US data scientists' remote access to Dublin files is a transfer, handled with standard contractual clauses and a transfer assessment. | ECOA and Regulation B (Larkspur is the creditor and gives adverse-action principal reasons). FCRA for bureau data. State law, including Colorado SB 26-189 for Colorado decisions from 1 January 2027. |
| Ask Larkspur | Larkspur deploys a third party's (Norvane's) model. | Norvane is the GPAI model provider (Article 53 duties, including information owed to downstream providers). Larkspur (the Dublin entity, for Ireland) is downstream provider and deployer of the Ask Larkspur AI system. Limited risk, never high-risk. The Article 50(1) duty to tell people they are interacting with AI is Larkspur's as provider and applies from 2 August 2026. Whether Article 50(2) marking applies to its plain-text output is an open question in Marcus's memo. No FRIA. | The Dublin entity is controller for Irish chats. Norvane is processor under an Article 28 agreement, but only once the Chapter 12 renegotiation removes its right to train on prompts. | FTC Act section 5, CFPB UDAAP and state UDAP laws, for misstatements. |
| Hardship-plan agent | Extension of Ask Larkspur. | On its recorded scope it does not evaluate creditworthiness, so it is not Annex III point 5(b). Reassess if the scope moves toward assessing ability to repay. | An EU extension would require a GDPR Article 22 analysis. All refusals go to a human. | Consumer protection, and fair lending if the scope widens. |
| Brightlist | Larkspur deploys a vendor's tool. | Brightlist is the provider. If used in the EU, Annex III point 4(a), employment, with Larkspur as deployer. Marketing's proposed rebrand as "Larkspur TalentMatch" would trigger Article 25(1)(a) and make Larkspur the provider, and Marcus rejects it. | Dublin use deferred. | Title VII (Larkspur stays liable as employer whatever the vendor disclaims). NYC Local Law 144 for NYC roles. |
| Scorecard 7 | Legacy model. | In service before any Annex III date and never significantly changed, so high-risk duties never attached to it (Article 111(2)). None are claimed at its retirement. | Retention driven by GDPR storage limitation and ECOA and Regulation B record-keeping, plus evidence for contested past decisions. | ECOA and Regulation B. |

Two readings of the grid prevent most errors. The protections of GDPR Article 22 and EU AI Act Article 14 belong to Irish applicants, while US applicants rely on ECOA and Regulation B adverse-action notices and the FCRA. Ask Larkspur's Article 50(1) duty falls on Larkspur as the provider of a system that interacts with people, so describing Larkspur as only a deployer of it would misplace the duty.

The fraud rules engine has no row because it is not an AI system, and it would not be high-risk in any event, since fraud detection is excluded from Annex III point 5(b). The grid does record one refused role shift, the TalentMatch rebrand, and the story holds a second. In Chapter 12 a product manager proposes pointing Norvane's general-purpose model at loan applications to recommend approve or decline to underwriters, which would repurpose a general-purpose system into an Annex III point 5(b) use and make Larkspur the provider of a high-risk system under Article 25(1)(c). Nadia escalates, the council blocks it and the decision is recorded. Extending Ask Larkspur toward hardship plans raises a different question, because Larkspur already provides that system: it is a reclassification decision for the provider rather than an Article 25(1)(c) event. With the company, its people and its systems in view, the story can begin where Larkspur's did, in a board meeting in September 2025 with a question nobody in the room could answer.

# Introduction: The Board's Question

*Charlotte, September 2025*

The board risk committee of Larkspur Financial was forty minutes past its scheduled finish when Evelyn Marsh, its chair, reached the item she had added herself. Over the weekend she had read two stories. In one, a company's customer-service chatbot had described a policy the company did not have, and the company had been left to answer for what its software said. In the other, a lender was being questioned about how its scoring model decided who got credit. Neither company was Larkspur. She wanted to know why she was so sure of that.

"What is our AI exposure," she asked, "and who owns it?"

Tom Ashby, the chief risk officer, began to say that Larkspur had one AI project, the new underwriting model the data science team had started to prototype that autumn. Then he stopped. He had no list to check the claim against. The contact centre ran on a vendor's platform whose features he had never reviewed, and the lending business had relied on a statistical scorecard for close to a decade without anyone calling it AI. He could not honestly say whether the answer was one project or twenty, and he could not have named the person who owned any of them.

He said so, and Evelyn asked the secretary to minute an action: "Management to report on AI exposure and ownership." The action went down against Tom's name, and the meeting closed.

Two weeks later Tom appointed Nadia Brennan as Larkspur's first group head of AI governance, reporting to him. She had spent her career in model risk, where a model that could not show its paperwork did not get used. On her first morning she opened a new spreadsheet and saved it under the name AI Register. It had no rows. Filling it was the first job. Deciding who would answer for each row was the second, and she suspected it would be harder.

This book follows the year after that meeting: how one company answered Evelyn's question, and what the answer teaches about AI governance. It is also a guide to the Body of Knowledge (BOK) behind the Artificial Intelligence Governance Professional (AIGP) certification from the International Association of Privacy Professionals (IAPP). The story shows why each part of the discipline exists, and the exposition teaches it with the precision the exam expects.

## Meet Larkspur

Part of what made Evelyn's question hard was Larkspur itself. In September 2025 Larkspur Financial, Inc. was a state-licensed non-bank consumer lender with about 1,200 staff, headquartered in Charlotte, North Carolina, and licensed in about 30 US states. It made unsecured personal loans and, in the United States only, residential mortgages, and it received about 6,000 applications a week. A subsidiary in Dublin, Larkspur Financial Ireland DAC, made personal loans to consumers in Ireland under authorisation from the Central Bank of Ireland. A small US-only agency, Larkspur Insurance Services, sold partner carriers' credit-protection products. Management was also studying an expansion into South Korea, where the company had no entity, customers or data.

That footprint puts US consumer-finance law, EU data protection law and the EU AI Act under one roof, and Part II maps how each reaches the company's systems. Two systems carry most of the story: Clearline, a credit underwriting model that Larkspur builds itself, and Ask Larkspur, a customer-service assistant it builds on a general-purpose model from a vendor, Norvane. Larkspur at a Glance, just before this Introduction, sets out the cast, the systems and the role map.

Larkspur is fiction. The company, its people, its vendors and its systems are invented, and nothing in the case describes a real firm. The laws, standards and dates it meets are real, stated as of September 2026. At the start of the story Larkspur believed it had one AI project. Chapter 1 shows how far off that count was.

## What This Book Argues

The argument fits in two sentences. **AI governance** is the discipline of making sure every consequential decision about an AI system has a named owner, a stated rationale and a written record, and that the record is revisited when the system, the law or the context changes. It holds from the first use-case idea to the day the system is switched off.

Two refinements give that definition its edge. First, the person who runs governance does not own the systems. Nadia's job is to make sure someone else owns each decision, because accountability cannot be handed to her, to a model or to a vendor. Second, a record made once goes stale. AI systems change underneath the documents written about them, so governance that stops at approval ends up describing a system that no longer exists.

Three questions carry the argument through the book: Who owns this decision? What could go wrong, and for whom? Where is it written down? They are the plain-language form of the two moves the BOK asks of you in Domain I: a descriptive move (classify the system, name the harm, name the characteristic of AI that makes it possible) and an organizational move (name the owner, the record and the existing policy that a new use case has just broken). The Part I opener shows both at work.

Why does ordinary governance struggle with AI? Chapter 1 answers with seven characteristics that set AI apart from conventional software, and this book adds one more trait that sits behind several of them, emergence. A model trained on past loan files inherits the judgments buried in those files. A model that outputs a probability leaves someone to choose the cut-off, and that choice decides who is approved. A vendor can change the model inside a product without telling its customers. An assistant built to draft replies can one day be asked to take actions. Each can turn a sound, recorded decision into a wrong one while the paperwork stays the same.

## Why One Company

Separate examples, a hiring tool in one chapter and a chatbot in the next, hide the handoffs where governance succeeds or fails. Governance is a chain of decisions. A use case sets the scope of an impact assessment, the assessment sets requirements for the data, a contract clause decides whether you ever hear about a change to a vendor's model, and a configuration choice nobody wrote down can surface months later as harm to customers. A chain is easiest to see in one place over one year, so this book follows one company from September 2025 to September 2026. Larkspur has no villains, only competent people making reasonable decisions under business pressure, some of which turn out to be wrong, including some of Nadia's. The record exists so that a mistake is found early, fixed quickly and made less likely to happen again.

One company brings one risk for an exam candidate. Larkspur is a lender, and its story is full of credit decisions, adverse-action notices and fair-lending questions. The BOK, by contrast, presents Domain I as foundations that apply to any organization, whatever its industry, sector or size. The case illustrates generic practice. Every tool Nadia builds in Part I, from the inventory to the vendor questionnaire, would serve a hospital or a software company just as well. On the exam, a Domain I answer that assumes a bank or a lender is usually wrong, and a legal conclusion that fits Larkspur's facts does not transfer to a Domain I item.

## How This Book Is Organized

The book follows the four BOK domains in order, and each part asks the question Larkspur faced at that stage of its year. Part I, *Who owns it?*, covers Domain I and runs from October to December 2025. Chapter 1 gives Larkspur a shared vocabulary: what counts as AI, what can go wrong, why AI is harder to govern than ordinary software, and which principles respond. Chapter 2 puts names against decisions through a governance council, defined roles, role-based literacy training and a map of the value chain. Chapter 3 rewrites the company's rules so that humans stay in charge, covering oversight, the retrofit of existing policies, acceptable use and vendor diligence.

Part II, *What must we do, and how do we prove it?*, covers Domain II and runs from January to July 2026. Nadia and Marcus Hale, the group general counsel, draw a legal register, a grid of systems against jurisdictions, and fill it in four passes. Chapter 4 takes privacy law, and Chapter 5 the laws that already reached AI without naming it: intellectual property, non-discrimination, consumer protection and product liability. Chapter 6 covers laws written for AI, anchored by the EU AI Act, with South Korea's AI Basic Act and US federal and state measures beside it. Chapter 7 turns to the voluntary OECD, NIST and ISO frameworks that regulators, auditors and contracts increasingly treat as the measure of due care. The law moves while they work, and the register has to move with it.

Part III, *Can we build it right?*, covers Domain III. It steps back to January 2026 and follows Clearline through the chain of documented decisions that ends in release: design and impact assessment in Chapter 8, training and testing data in Chapter 9, and release and monitoring in Chapter 10. Part IV, *Can we live with what we chose?*, covers Domain IV. It steps back to January 2026 once more and follows Ask Larkspur: the decision to deploy in Chapter 11, the assessment of what Larkspur adopted, including the vendor contract, in Chapter 12, and the long work of operating, monitoring, answering for and eventually retiring systems in Chapter 13. The two parts mirror each other. Clearline gives Larkspur full control and full accountability. Ask Larkspur gives it borrowed capability and full accountability anyway. The Conclusion returns to the board risk committee in September 2026 to answer Evelyn's question and to take up the next one.

Every chapter follows the same pattern. It opens with a scene headed by a place and a month, so you always know where you are in Larkspur's year, then teaches the material and returns to the case where a concept bites. It closes with The Record, listing the artifacts the chapter produced and who owns each, and with Exam Focus, where the distinctions and traps the exam tests are gathered as one-sentence statements. At the back, Appendices A to D hold the chronology and legal calendar, the standards and frameworks, the full Record and the glossary.

## About the AIGP Exam

The exam is built on the IAPP's **Body of Knowledge**, which sets out what a candidate should be able to do in four domains, each divided into competencies. This book follows BOK version 2.1, approved on 9 September 2025. It allocates the exam's 100 **scored items**, the questions that count toward your result, across the four domains as ranges rather than fixed numbers.

| Domain | Subject | Scored items | Part of this book |
|---|---|---|---|
| I | Foundations: what AI governance is, and the principles and pillars of a program | 16 to 20 | Part I, *Who owns it?* (Chapters 1 to 3) |
| II | Laws, standards and frameworks | 19 to 23 | Part II, *What must we do, and how do we prove it?* (Chapters 4 to 7) |
| III | Governing AI development | 21 to 25 | Part III, *Can we build it right?* (Chapters 8 to 10) |
| IV | Governing AI deployment and use | 21 to 25 | Part IV, *Can we live with what we chose?* (Chapters 11 to 13) |

Domain I is the smallest by question count but has the most downstream reach, because every later domain reasons with the vocabulary and principles it installs. Domain II, behind only Domains III and IV, is where the exam stops asking what AI governance is and starts asking what the law requires. The two lifecycle domains tie for the largest share, 42 to 50 items between them. Domain III covers how an organization runs the build, and Domain IV, the most scenario-heavy part of the syllabus, how it chooses a system, adopts it and lives with it.

Each Part opener carries an Exam at a Glance that breaks its domain into competencies with their ranges and lists what changed in version 2.1. The competency ranges do not add up to the domain totals, so learn each as published rather than trying to reconcile them. All of these weights are properties of version 2.1 and may change when the IAPP issues the next Body of Knowledge.

The BOK also places Domain I items mostly at the remember/understand and apply/analyze levels of Bloom's taxonomy, which is why definitional precision pays more in Domain I than anywhere else in the syllabus.

One timing fact affects the whole exam: version 2.1 was approved before the EU's Digital Omnibus on AI was agreed. The Omnibus (Regulation (EU) 2026/1744, in force 27 July 2026) amended the EU AI Act (Regulation (EU) 2024/1689) and moved key dates. As enacted, for example, the Annex III high-risk rules were set to apply from 2 August 2026, and as amended they apply from 2 December 2027. A live exam item may quote either timeline. This book therefore labels such facts **as enacted** (the Act's original text) or **as amended** (the text after the Omnibus). On the exam, read each stem for its anchor, such as "as originally enacted" or "as amended by the 2026 Digital Omnibus". If there is none, ask whether the fact being tested changed at all.

## The First Email

The exam asks what a governance professional should know. Larkspur's year shows what one has to do, starting from an empty spreadsheet. Nadia's first act was an email to every department head with a one-line request: "Send me every AI system you use." Part I begins with the answers, and with what nobody thought to send.

# Part I: Foundations

*Who owns it?*

*Charlotte, October 2025*

Nadia Brennan found the tip by accident. In her first week as head of AI governance she was searching Slack for an old thread about call scripts and landed in the collections team's channel. Pinned at the top was a short message: when a customer sends a long or angry letter, paste it into a free public chatbot and ask for a draft reply. Fourteen thumbs-up sat underneath.

The tip was plainly well meant, and the agents following it were only trying to answer customers faster. Nobody had broken a rule, because there was no rule, and nobody owned the question of whether customers' letters should go into a tool Larkspur had never looked at.

A few weeks earlier Evelyn Marsh, chair of the board risk committee, had asked what Larkspur's AI exposure was and who owned it, and Tom Ashby had not been able to say. The spreadsheet Nadia had named AI Register still held only column headings. Her email asking department heads to list their AI systems had gone out that morning, and the answers would come back incomplete. Nobody lists a habit they have never thought of as a system.

She wrote three words on a sticky note, know, name, write, and pressed it to the edge of her monitor.

The three words became three workstreams, each matching one of the three competencies in Domain I of the AIGP Body of Knowledge (BOK) and each given a chapter. Chapter 1 is the knowing: Nadia sorts the replies into a first register and builds the vocabulary that sorting demands. Chapter 2 is the naming: owners, a governance council, training by role, and the hats Larkspur wears in the value chain. Chapter 3 is the writing: oversight across the life cycle, a retrofit of the policies Larkspur already has, and the risk that arrives through third parties.

The BOK describes the domain as "what AI governance is, including the common principles and pillars to build an AI governance program," and says it holds "regardless of industry, sector or size." Larkspur is a lender, yet every tool Nadia builds in Part I (inventory, council, RACI chart, literacy program, policy retrofit, vendor intake) would work as well at a hospital or a retailer. Sector specifics belong to the sectoral laws of Domain II and to the lifecycle domains, III and IV, so credit law waits for Part II, and the case in these chapters illustrates generic practice. Domain I is the smallest domain by question count, yet it has the most downstream reach, because every later part reasons with its vocabulary and principles.

The domain also brings a method. Its descriptive half, competency I.A, classifies the system, names what can go wrong and names the characteristic that makes the failure possible. Its organizational half, I.B and I.C, says who is accountable, what has to be written down and which legacy policy an AI use case has just broken. Nearly every Domain I question is one of those two moves.

Take Clearline, the underwriting model Priya Raman's team was prototyping that autumn. Descriptively, it is classic predictive machine learning used in consequential credit decisions. Its harm falls on applicants who are wrongly or unfairly declined, then on Larkspur as legal and reputational exposure, and the characteristics that make the harm possible are opacity and data dependency. Organizationally, Priya's team builds it, the lending business owns the outcome, and Nadia's function oversees the process without owning the system. The record is a register entry. The legacy policy it strains is records retention, since training asks old loan files to serve a new purpose. The Slack tip exposes a policy Larkspur lacked entirely, on acceptable use of AI tools.

In plain words, the two moves become the three questions this book asks of every decision. Who owns this decision? What could go wrong, and for whom? Where is it written down?

The first workstream needs answers before it can ask any of them. By the end of Nadia's first week the replies to her email were arriving, and no two departments meant the same thing by "AI".

### Exam at a Glance

Under BOK v2.1, approved on 9 September 2025, Domain I carries 16 to 20 of the 100 scored items, the fewest of the four domains (Domain II carries 19 to 23, Domains III and IV 21 to 25 each). Each competency has its own chapter.

| Competency | What it covers | Questions | Chapter |
|---|---|---|---|
| I.A Understand what AI is and why it needs governance | Definitions and types of AI; risks and harms; the characteristics that demand governance; responsible AI principles | 4 to 6 | 1 |
| I.B Establish and communicate organizational expectations | Roles and responsibilities; cross-functional collaboration; training and awareness; tailoring by context; developers, providers, deployers and users | 5 to 7 | 2 |
| I.C Establish policies and procedures across the life cycle | Oversight and accountability at every stage; updating existing privacy, security, data-governance and IP policies; third-party risk | 6 to 8 | 3 |

The competency ranges sum to 15 to 21, not the domain's 16 to 20, so learn each figure as published. Questions sit mostly at the remember/understand and apply/analyze levels of Bloom's taxonomy, so definitional precision pays more here than anywhere else in the syllabus. The sector-agnostic framing is itself testable: an answer that assumes a bank, a hospital or a large enterprise is usually the wrong one. When a question stalls you, ask which of the two moves it wants.

BOK v2.1 made three changes to Domain I relative to v2.0.1.

- I.B now lists providers alongside developers, deployers and users, so that you see the whole value chain rather than only the internal cast. Chapter 2 explains who counts as a provider.
- I.C's policy-review item now names data governance and intellectual property explicitly, alongside the data privacy and security policies v2.0.1 already listed.
- I.C's third-party item now covers policies, assessments and contracts, and adds acceptable use to the areas it already named (procurement, supply chain and human resources).

## Chapter 1: AI and the Case for Governance

*Charlotte, October 2025*

By the second Friday the replies to Nadia Brennan's email filled a folder. In her first week she had asked every department head to send her every AI system they used. Now she read the answers beside the spreadsheet she had named "AI Register," still empty below its header row.

Priya Raman's reply ran longest. Her data science team was prototyping Clearline, a model to predict whether a personal-loan applicant would default within 24 months. It used 312 features and was, she wrote, "already 97% accurate." Owen Park, head of customer operations, listed an "AI reply assistant" his team had switched on in August inside the customer-service platform Larkspur licensed from Norvane. It drafted replies for his agents. IT sent the fraud rules engine and some spreadsheet macros. Marketing mentioned a clustering model. At the bottom of one thread someone had added, "Scorecard 7, but that's just a scorecard."

Nobody had listed the public chatbot. Days earlier Nadia had found the pinned tip in a collections channel telling agents to paste customers' letters into one, with fourteen thumbs-up beneath it. It was probably the most used AI at Larkspur, and no department head thought of it as a system.

Worse, each department meant something different by "AI." To Priya it meant machine learning, which a scorecard built in 2016 was not. To IT it meant anything automated. To Owen it meant a feature the vendor had turned on. In September Evelyn Marsh, who chaired the board risk committee, had asked what sounded like a simple question: what is our AI exposure, and who owns it? Nadia could not count the exposure until Larkspur agreed on what it was counting. Before she could answer the board, the company needed shared words for what AI is, what harm it can do, why it is harder to govern than ordinary software, and what good looks like.

This chapter supplies those words. Section 1.1 gives a working test for what belongs in an inventory and four lenses for classifying it. Section 1.2 sorts AI's harms by who suffers them. Section 1.3 names the seven characteristics that make AI harder to govern than conventional software, and Section 1.4 the six principles that answer them.

### 1.1 What Counts as AI

"Artificial intelligence" covers technology ranging from a chess engine that evaluates only the current board position to a language model that writes poetry, generates code and explains the difference between an interest rate and an APR (or between a deductible and a copay). Such systems have almost nothing in common under the hood, yet they provoke the same regulatory questions. A clear taxonomy is therefore the precondition for any risk analysis worth doing.

For the inventory Nadia used a working test taken from the OECD's 2023 definition, which the EU AI Act's Article 3(1) closely tracks. An **AI system** is a machine-based system that, for explicit or implicit objectives, infers from the input it receives how to generate outputs such as predictions, content, recommendations or decisions that can influence physical or virtual environments, with systems varying in autonomy and adaptiveness after deployment. For an inventory the operative word is "infers," and Chapter 7 traces the definition's history. Four taxonomies then describe what is on the list. Real-world analysis often mixes them, and each answers a different question.

The **capability** ladder runs from **narrow AI**, which performs a specific task or narrow task family, to **artificial general intelligence (AGI)**, which would match human-level competence across essentially all cognitive domains, to **artificial superintelligence (ASI)**, which would surpass the best human performance in all of them. As of this writing every deployed system is narrow AI, and AGI and ASI do not exist. Breadth misleads. When a manager called Owen's assistant "basically AGI" because it would answer anything, Nadia explained that generality means transfer across unrelated domains, whatever the size of the training set. A language model fielding questions on law, medicine and poetry is still narrow.

The **functionality** lens asks about memory. **Reactive machines** respond to input with no memory of the past. The canonical example is Deep Blue, the chess engine that beat Garry Kasparov. **Limited memory** systems retain recent context to inform the next decision, which describes most modern systems, from autonomous vehicles to recommendation engines to Owen's assistant within a conversation. **Theory of mind** and **self-aware AI** remain conceptual categories, not deployed technology.

The **learning paradigm** is how practitioners actually describe a system. **Supervised learning** trains on labeled input and output pairs, the way a spam filter learns from messages marked "spam" or "not spam." Clearline is supervised, learning from historical loan files labeled with repayment outcomes. **Unsupervised learning** finds structure in unlabeled data, as marketing's segmentation model clusters buying patterns without being told what the segments are. **Semi-supervised learning** combines a small labeled set with a large unlabeled corpus, which helps when labels are expensive. **Reinforcement learning** learns a policy that maximizes a reward signal through interaction with an environment, like a robot rewarded for reaching the far side of a room. Larkspur has no such system. **Self-supervised learning** derives labels from the data itself and is the paradigm behind modern language models, Norvane's included.

The **generative stack** is the layering behind modern generative AI. **Neural networks** compose trainable units, **deep learning** stacks many layers of them, and **transformers** made attention practical at scale, which enabled **large language models**. **Foundation models** are broad pretrained models adapted to downstream tasks by fine-tuning, prompting or retrieval. Owen's assistant used Norvane's foundation model through prompting and retrieval from Larkspur's policy library, with no fine-tuning. Two properties of this lineage matter for governance. Scale buys capability, sometimes abruptly, so a model's capabilities cannot always be listed in advance (Section 1.3 returns to this). And a pretrained model carries its training data's properties, biases included, into every downstream use, drafts sent in Larkspur's name among them.

With the four lenses the register filled quickly. Clearline was narrow and supervised. The assistant, logged as the Ask Larkspur pilot, was narrow, a self-supervised foundation model adapted by retrieval. The segmentation model was unsupervised. The fraud engine was hand-coded rules, not machine learning, but Nadia logged it anyway. Scorecard 7, a logistic regression, sat on the border of the definition, so she marked it borderline pending the test Chapter 7 applies. The macros stayed off, and the Slack chatbot went on as unsanctioned public chatbot use. That made six entries, classified, with the owner column blank.

One more category has recently moved to the center of the governance conversation. An **AI agent** perceives its environment and takes action toward goals, rather than only returning a prediction when asked. **Agentic AI** therefore moves from advising a human to acting on the world, which changes the controls required. Owen supplied the example when he said he would like the assistant to "set up payment plans one day." A draft that an agent can ignore is advice, while a plan created in the servicing system is an action. Chapter 11.4 designs that agent.

### 1.2 Sorting the Harms

Knowing what each system was let Nadia ask what each could do wrong. She started a draft harm register and sorted every harm she could name four ways, by who would suffer it.

Harms to **individuals** include privacy violation, discriminatory decisions in hiring or credit, physical safety failure, manipulation and loss of autonomy. Larkspur's examples were an applicant wrongly declined and a customer whose letter went into a public chatbot. Harms to **groups** include systematic bias against protected classes, amplification through feedback loops and erosion of shared factual ground. Clearline, trained on historical files, might learn proxies such as ZIP code, a risk Part II ties to specific laws. Harms to **organizations** include regulatory penalty, litigation, reputational damage, IP contamination, security exposure and operational disruption, and Larkspur faced every one. Harms to **society** include misinformation and deepfakes, displacement of work, concentration of capability, and the environmental cost of training and inference. Nadia struggled to write a societal line for a mid-sized lender, and the difficulty proved instructive.

The IAPP's AIGP Body of Knowledge (the BOK) adds three examples of AI risk that cut across the sort. **Misalignment with objectives** is a system optimizing the metric it was given rather than the outcome anyone wanted. Norvane's pilot dashboard celebrated "containment rate," the share of chats resolved without a human, and a system tuned to that number learns to keep customers away from people. **Ethics and bias risk** is unfair or harmful treatment that the data or the objective encoded. **Complexity and scalability** is the multiplier. A flaw in a manual process harms the people it touches, while one mis-weighted feature in Clearline would harm every applicant scored before anyone noticed.

Generative AI adds failures of its own. NIST's Generative AI Profile (NIST AI 600-1, July 2024) names twelve risks unique to or amplified by generative AI, listed in full in Chapter 7. The most significant start with **confabulation**, the formal term for hallucination: confidently stated, plausible, false output, which is a property of the paradigm rather than an occasional bug. The others are harmful bias and homogenization, information integrity (the deepfake and disinformation problem), data privacy, information security, intellectual property, and value-chain and component integration, meaning the risk inherited from models and data you did not build. Nadia's Larkspur lines were a confabulated policy, pasted letters, prompt injection against the assistant, and dependence on Norvane's model.

The category decides who owns the response. An individual harm usually triggers a rights or recourse process (at Larkspur, Owen's complaints and appeals team). A group harm triggers fairness testing and remediation (Priya's team). An organizational harm runs through the risk register and the board (Tom Ashby, the chief risk officer). A societal harm may have no internal owner at all, which is exactly why impact assessments exist. A harm that is not assigned to a category tends not to get a control.

### 1.3 What Makes AI Different

Tom, reading the draft, asked why AI needed anything that Larkspur's IT controls did not already cover. The answer lies in seven characteristics, named in the BOK, that distinguish AI from ordinary software, each motivating a specific control. That link between characteristic and control sits at the heart of every framework in this book.

At Larkspur, **complexity** was Clearline's gradient-boosted ensemble over 312 features, and **opacity** the difficulty of explaining one applicant's decline, which Part II shows the law expects. **Autonomy** was whether Clearline should ever decline anyone without a human, and **speed and scale** about 6,000 applications a week. **Potential for harm or misuse** covered a jailbroken assistant, or the insurance agency one day seeking to reuse Clearline scores for a purpose they were never built for. **Data dependency** meant loan files that encode past lending decisions. **Probabilistic outputs** meant a probability of default, so setting the cut-off is a governance decision. The table pairs each characteristic with the assumption it defeats and the control it justifies.

| Characteristic | What it defeats | Control it justifies |
|---|---|---|
| Complexity | Human intuition and simple review; many interacting parts and emergent behavior | Layered testing, documentation, auditability, decomposition into components |
| Opacity | The ability to explain a specific decision to the person affected | Explainability techniques, model cards, disclosure duties, contestability |
| Autonomy | The assumption that a human is in the decision loop | Human oversight design, action limits, interruption and override, kill switches |
| Speed and scale | The assumption that errors are caught locally and slowly | Pre-deployment testing, continuous monitoring, defined rollback criteria |
| Potential for harm or misuse | The assumption that capability is used as intended | Impact assessment, ethics review, security controls, red teaming |
| Data dependency | The assumption that behavior is specified in code | Data governance, lineage and provenance, representativeness and bias testing |
| Probabilistic outputs | Binary notions of correct and incorrect | Confidence thresholds, abstention, monitoring, user training against over-trust |

Read down the middle column and you have a list of what IT governance takes for granted. Two rows need more than a line.

Traditional software is **deterministic**: the same input yields the same output, and a defect is a deviation from specification. A model produces a statistical estimate, so the same input may yield different outputs, and being wrong is part of the method rather than a bug. When Priya repeated her headline to Nadia, Nadia asked who the 3% were, what happened to them, and where that was written down. Priya began to answer, then stopped to look up the default rate, which she did not know offhand. Nadia wrote the three questions into the register. "Accurate 97% of the time" is a statement about residual risk, not a clean bill of health.

Data dependency makes AI governance inseparable from data governance. The provenance, representativeness and quality of the data determine the outcome, which is why lineage, provenance and bias testing appear in every framework and, for high-risk systems, in law.

#### Emergence, a trait this book adds

The seven form a list of characteristics rather than a taxonomy, and this book adds one trait that sits behind several of them. **Emergence** is not on the BOK's list. It means that capabilities and behaviors can appear after deployment through scale, fine-tuning, data drift or interaction with other systems. Research on emergent abilities reports behaviors that appear only past a size threshold, though how abrupt those jumps are is debated, partly because the answer depends on how capability is measured. At Larkspur a vendor could change the model under Owen's assistant, and a shift in interest rates could leave Clearline's training data describing yesterday's applicants. Emergence is the reason point-in-time approval is insufficient and monitoring and reassessment are continuous.

### 1.4 The Principles That Answer Them

If the characteristics define the problem, principles describe what good looks like. Tom wanted something the board risk committee could adopt, so Nadia drafted a one-page principles statement built on the BOK's six responsible AI principles. She tied each to a control Larkspur planned to build.

1. **Fairness** requires equitable treatment and outcomes across groups, through bias testing across subgroups, fairness metrics chosen for the context, mitigation and documented trade-offs. Larkspur: subgroup testing of Clearline against a recorded metric.
2. **Safety and reliability** require intended function under expected and unexpected conditions, through rigorous testing, edge-case and adversarial testing, fail-safes, interruptibility and continuous monitoring. Larkspur: the assistant hands off to a human when unsure.
3. **Privacy and security** require protected personal data and systems resilient to attack, through minimization, de-identification, access control, AI-specific threat modeling and pipeline security. Larkspur: an acceptable-use rule for public chatbots.
4. **Transparency and explainability** require that people know AI is in use and can understand outcomes affecting them, through disclosure, instructions for use, explanations of decisions, documentation and contestability. Larkspur: disclosing AI in underwriting and in the assistant, and reasons for individual Clearline decisions.
5. **Accountability** requires identified humans who answer for outcomes, through named owners, a RACI, escalation paths, audit rights and records. Larkspur: a named owner for every system.
6. **Human-centricity** requires that AI augments human agency rather than overriding it, through human oversight of consequential decisions, impact assessment and design that preserves choice. Larkspur: human review of declines and hardship cases.

Drafting exposed a translation problem. Siobhan Kelly, the Dublin entity's data protection officer, commented in EU AI Act terms, Priya's team spoke NIST, and the board's early draft borrowed from the OECD. A governance professional must translate between these vocabularies, which are best read as stages by which principles become obligations. The voluntary OECD AI Principles (2019, revised 2024) name five: inclusive growth, sustainable development and well-being; respect for the rule of law, human rights and democratic values, including fairness and privacy; transparency and explainability; robustness, security and safety; and accountability. The voluntary NIST AI Risk Management Framework names seven trustworthiness characteristics: valid and reliable; safe; secure and resilient; accountable and transparent; explainable and interpretable; privacy-enhanced; and fair with harmful bias managed. The EU AI Act turns similar substance into legal requirements for high-risk systems in Articles 9 to 15 (risk management, data governance, technical documentation, record-keeping, transparency and instructions for use, human oversight, and accuracy, robustness and cybersecurity), plus the Article 50 transparency duties. Chapter 7 holds the crosswalk and Chapter 6 the law.

Three distinctions recurred in every conversation. **Transparency** concerns the organization: that AI is in use, what it does and what its limits are. **Explainability** concerns a specific output, and whether the person affected can understand why it came out that way. **Interpretability** is the underlying model property that makes explanation possible at all. The second pair is **responsibility**, who does the work, and **accountability**, who answers for the outcome. Priya's team would be responsible for building Clearline, but a named business executive would be accountable for it. Accountability cannot be delegated to a model or a vendor, which is the failure every accountability framework exists to prevent. If Owen's assistant told a customer something false, Larkspur could not hand the answer back to Norvane. Finally, **fairness is plural**. Several fairness metrics cannot hold at the same time except in degenerate cases, so "make it fair" is not a specification. The governance answer is to choose metrics for the context, document the trade-off and test across subgroups.

Then Marcus Hale, the general counsel, proposed sending all AI questions to legal. Nadia argued for principle-specific controls with named owners instead. A bias audit serves fairness, an oversight checkpoint serves accountability, a disclosure notice serves transparency, and a model card serves transparency and explainability together. When controls compete, the one that honors more of the principles, with documentation and proportionality, is almost always the better choice, and a control that bundles several principles into one function is rarely adequate. The board risk committee adopted the statement in November 2025.

### What the Words Were For

The four sections make one argument. The taxonomy says what a system is, and so which harms are plausible. The harm sort says who could be hurt and who responds. The characteristics explain why ordinary controls miss those harms and why a decision recorded once goes stale. The principles say what good looks like and attach a control to each.

By November Larkspur had six classified register entries, a draft harm register routed to Owen, Priya and Tom, and an adopted principles statement. Nadia owned both registers. The systems in the AI Register still had no owners at all.

The statement promised a named owner for every system, so Tom asked Nadia to fill in the names. She typed "Clearline, fairness results: owner?" and asked around. Priya thought the lending business owned the results. Dana Whitfield, who ran consumer lending, thought the model's builders did. Compliance thought it was Tom's. Three people each believed it belonged to someone else, which is where Chapter 2 begins.

### The Record

Nadia's first month left three artifacts behind.

- **AI Register v0.1.** Owner: Nadia Brennan. Six entries (Clearline, the Ask Larkspur pilot, Scorecard 7, the fraud rules engine, the marketing segmentation model and unsanctioned public chatbot use), each classified, with the owner field blank.
- **Draft harm register.** Owner: Nadia Brennan. Harms sorted by who suffers them and routed to Owen Park, Priya Raman and Tom Ashby.
- **AI principles statement.** Owner: Nadia Brennan. The six BOK principles, each tied to a planned control, adopted by the board risk committee in November 2025.

### Exam Focus

These are the points this chapter's material most often turns on.

- Domain I is tested as sector-agnostic, so treat Larkspur as generic practice: an answer that assumes a bank or lender is usually wrong, and the exam's harm examples are generic.
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

The following terms are used in this chapter and defined in the Glossary (Appendix D): AI Agent, AI System, Artificial General Intelligence (AGI), Artificial Superintelligence (ASI), Complexity, Convolutional Neural Network (CNN), Deep Learning, Deterministic Output, Expert System, Exploding Gradient, Feedforward Neural Network (FFNN), Foundation Model, General AI (GAI), Generative AI, Hyperparameter, Inference, Large Language Model (LLM), Long Short-Term Memory (LSTM), Machine Learning (ML), Machine Learning Algorithm, Machine Learning Model, Model, Narrow AI (Weak AI), Natural Language Processing (NLP), Neural Network (NN), Probabilistic Output, Reactive Machines, Reasoning AI, Recurrent Neural Network (RNN), Reinforcement Learning (RL), Robotics, Sample, Self-Aware AI, Semi-Supervised Learning, Semi-Supervised Machine Learning, Supervised Learning, Supervised Machine Learning, Support Vector Machine (SVM), Theory of Mind AI, Training (Model Training), Training Data, Unsupervised Learning, Unsupervised Machine Learning, Zero-Shot Learning (ZSL), Deepfake, Disinformation, Downstream Harm, Echo Chamber, F1 Score, Hallucination, Misalignment, Misinformation, Sensitive Data, Unfair and Deceptive Acts and Practices (UDAP), Unintended Use, User Training, Autonomy, Ethical Considerations, Limited Memory AI, Opacity, Potential for Harm, Speed and Scale, Contestability, Ethics by Design, Explainability, Human-Centricity, Interpretability, Interpretability Testing, Trustworthy AI.

### Further Reading

- [OECD: what is an AI system?](https://oecd.ai/en/wonk/definition): the definitional baseline the BOK uses
- [ISO/IEC 22989:2022 (free from IEC)](https://webstore.iec.ch/en/publication/77839): formal definitions for the learning paradigms and system terms
- [Emergent Abilities of Large Language Models](https://arxiv.org/abs/2206.07682): capabilities that appear only past a scale threshold
- [GPT-4 Technical Report](https://arxiv.org/abs/2303.08774): how a frontier model's capabilities are documented and bounded
- [NIST AI RMF (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): AI system and AI actor definitions, and the risk framing
- [NIST AI 600-1, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): the twelve GAI risks and the actions mapped to each
- [NIST SP 1270, bias in AI](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf): systemic, computational and human-cognitive bias
- [OECD AI Incidents and Hazards Monitor](https://oecd.ai/en/incidents): real, catalogued AI incidents and near-miss hazards
- [EU AI Act, Article 5 (prohibited practices)](https://artificialintelligenceact.eu/article/5/): the harms serious enough to be banned outright
- [Stanford AI Index Report](https://aiindex.stanford.edu/report/): annual data on adoption, capability and documented harms
- [Brookings: algorithmic bias detection and mitigation](https://www.brookings.edu/articles/algorithmic-bias-detection-and-mitigation-best-practices-and-policies-to-reduce-consumer-harms/): how bias harms arise and what mitigations exist
- [ISO/IEC 23894 AI risk management](https://www.iso.org/standard/77304.html): Annex B catalogs AI risk sources including data quality, explainability and degree of automation
- [NIST AI 100-2, Adversarial Machine Learning taxonomy](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2023.pdf): evasion, poisoning and privacy attacks against models
- [ICO: explaining decisions made with AI](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/explaining-decisions-made-with-artificial-intelligence/): what a meaningful explanation of an automated decision looks like
- [OECD AI Principles](https://oecd.ai/en/ai-principles): the intergovernmental baseline, adopted 2019 and revised 2024
- [UNESCO Recommendation on the Ethics of AI](https://www.unesco.org/en/artificial-intelligence/recommendation-ethics): the 193-state ethical framework
- [Council of Europe Framework Convention on AI](https://www.coe.int/en/web/artificial-intelligence/the-framework-convention-on-artificial-intelligence): the first binding international AI treaty

## Chapter 2: Who Owns AI

*Charlotte, November 2025*

Tom Ashby opened the meeting, which had no name yet, with the answer he had wanted to give the board risk committee two months earlier. "Nadia owns AI."

Nadia Brennan went to the whiteboard. The principles statement had promised named owners for every system, and for a week the AI Register line reading "Clearline, fairness results: owner?" had drawn three answers from three people, each naming someone else. She drew Larkspur's org chart, with a box for Dublin, where Siobhan Kelly was dialled in on the screen, and wrote three questions under it. If Clearline's decline rates turn out to be unfair, who answers? If the Ask Larkspur pilot drafts something false and it reaches a customer, who answers? If a collections agent pastes a customer's letter into a public chatbot, who answers?

Silence, then everyone at once. Dana Whitfield said fairness belonged to Priya Raman's team, which built the model. Priya said lending had specified it. Tom said compliance. For the assistant, Owen Park said Norvane, the CISO said customer operations, and Marcus Hale said it depended on a contract nobody in the room had read. The chatbot question drew HR, security and "the manager". Nadia wrote each name beside its question until every question had three.

"That's the problem," she said. "I will not own AI. I will make sure everything we run has an owner." Tom reminded her that the board had asked for one name. She tapped the whiteboard, where every question already had three names and none was hers.

Handing the whole subject to one expert is a common instinct, and it fails because the decisions that matter are spread across the company. AI governance is a shared responsibility with a named owner for each piece, and no single department can carry it. This chapter covers the roles that carry it, from the board and C-suite through data scientists and privacy professionals to frontline staff, and the cross-functional structures that join them. It then turns to training and change management, to the division of responsibility along the AI value chain among developers, providers, deployers and users, and to tailoring a program to the organization that runs it.

### 2.1 Three Layers of Ownership

Chapter 1 separated responsibility from accountability: many people do the work, and one named person answers for the outcome. Governance builds that distinction into three layers.

The direction layer is the board and the C-suite: the Chief Executive Officer (CEO), Chief Operating Officer (COO), Chief Risk Officer (CRO), Chief Information Security Officer (CISO), Chief Data and Analytics Officer (CDAO), Chief Privacy Officer (CPO), Chief Compliance Officer (CCO) and any Chief AI Ethics Officer (CAIEO). It owns risk appetite, funding, tone and final accountability. The steering layer is a cross-functional AI governance board or council drawn from legal, privacy, security, data science, ethics, risk, compliance and the business units. It owns the framework, review of high-risk use cases, escalation decisions and reporting upward. The operating layer (data scientists and AI engineers, data engineers, AI operations or "AI ops", product owners, risk officers, compliance staff and frontline users) owns building, assessing, monitoring, documenting and flagging anomalies. A growing number of organizations add a **Chief AI Ethics Officer** to hold the ethical governance remit explicitly, a signal of maturity that no law requires.

Larkspur's board risk committee recorded its appetite: no automated declines, and human review of every non-approval. The CEO, Tom as CRO, the CISO and Marcus as general counsel set tone and funding. The council charter made Nadia chair, with Marcus, Priya, the CISO, compliance, Dana and Owen as members. Siobhan, the Dublin entity's data protection officer, took an advisory seat. She would be Consulted and hold no vote on processing she monitors, because GDPR Article 38 requires a DPO's independence (no instructions on her tasks, no conflict of interest from other duties). The council also recorded a decision not to appoint a Chief AI Ethics Officer yet.

#### RACI by task

A **RACI** matrix names, for each task, who is Responsible for doing it, who is Accountable for the outcome, who is Consulted before the decision and who is Informed of it. Applied per governance task rather than per department, it forces two things an org chart hides: exactly one accountable owner per task, and an explicit list of who must be consulted before the decision. Governance failures usually trace to a task with no accountable owner, or to a decision made without the function that would have caught the problem.

In Nadia's RACI v1, "approve Clearline for production" had Dana Accountable, Priya Responsible and the board risk committee Informed, with Marcus, Siobhan, compliance, the independent validation team and Nadia Consulted. Tom was Accountable for "accept residual risk above appetite". "Maintain Ask Larkspur's knowledge corpus" had nobody, because Owen assumed IT owned it and IT assumed customer operations did. Nadia made Owen Accountable and his knowledge-management lead Responsible, and the line read "approve documents added to the policy library". Nobody wrote down how the retrieval index was fed.

#### Mapping stakeholders

**Stakeholder mapping** identifies everyone, internal and external, who is affected by a system or influences it: the business sponsor, affected employees, the customers scored, the communities implicated, the vendors in the chain and the regulators with jurisdiction. It is a control rather than paperwork, because a stakeholder who is never identified is a risk nobody owns, and external stakeholders (civil society, affected communities) are the ones internal processes most reliably miss. Larkspur's Clearline map named the sponsor, underwriters, applicants scored (including declined applicants who never become customers), collections, data vendors, US federal and state regulators, Irish and EU authorities, and Korean regulators should the Korea launch under study go ahead. Its first draft missed consumer advocates and communities with historically thin credit files, and the second added them.

#### Integration into enterprise risk management

AI risk kept in a separate register gets reviewed separately and funded last. The mature pattern tags AI risks inside the existing **enterprise risk management (ERM)** portfolio, with AI-specific fields (system, model version, affected population, fairness exposure) in place of a parallel process. AI governance then reaches the board through risk reporting that already has its attention. Nadia added the four fields to Tom's register, and AI began reaching the board through his quarterly report.

### 2.2 Literacy and Readiness

Owners are only as good as their grasp of what they own. The BOK's indicator is to "create and deliver a training and awareness program to all stakeholders on AI terminology, strategy and governance," and four design consequences follow: depth by role, training against automation bias, measurement and maintenance, and change management.

Nadia's first literacy deck, one slideshow for all 1,200 staff, satisfied nobody, so she rebuilt it by role. The rebuild also serves EU law. Article 4 of the EU AI Act has required providers and deployers to address AI literacy since 2 February 2025, and it reaches the Dublin entity. As amended by the Digital Omnibus on AI, from 27 July 2026 it is a duty to take measures to support literacy rather than to guarantee a level (Chapter 6 has the timeline). The table shows the curriculum that replaced the deck.

| Audience | What they need | At Larkspur |
|---|---|---|
| Executives and board | Strategic alignment, regulatory exposure, reputational and enterprise risk, how to read an AI risk register | Board risk committee |
| Developers and data scientists | Governance by design, documentation standards, bias and fairness testing, reproducibility, the approval workflow | Priya's team |
| Legal, risk and compliance | Regulatory fluency, impact assessment practice, vendor and contract risk, audit readiness | Marcus's team |
| Product and business owners | Use-case vetting, success criteria, user impact, their accountability for outcomes | Dana and Owen |
| Frontline users | What the system can and cannot do, when to override, how to report an anomaly, recourse options | Underwriters and agents |
| IT and security | Monitoring, incident response, control ownership, AI-specific attack surface | The CISO's team |
| Everyone | Basic literacy, the organization's principles, how to escalate a concern | All staff |

Everyone gets baseline awareness, and depth follows the decisions a person makes. The frontline row pairs with the operating layer, since people asked to flag anomalies must be taught what one looks like.

#### Training against automation bias

**Automation bias** is the documented human tendency to over-trust machine output, and it is why oversight that exists on paper still fails. Chapter 1's point that AI outputs are probabilistic is what makes it dangerous. Training is the cheapest countermeasure, because users who understand error modes, confidence and the system's limits are materially better overseers. Interface design carries the other half by making disagreement and override easy, and Chapter 3 takes up that design. At Larkspur, underwriters followed Scorecard 7's referrals about 99% of the time, and Owen's agents were pasting the pilot's draft answers to customers without checking them.

#### Measuring and maintaining

A curriculum written before the current obligations existed does not satisfy them, so a program needs a refresh cycle tied to regulatory change. It also needs measures of effectiveness in place of attendance counts: pre and post literacy assessment, the share of staff trained within a stated window, the number of AI projects with complete documentation, and the volume of risk escalations initiated by trained staff. The escalation count shows whether people believe reporting is safe. Nadia tracked all four, with a 30-day training window. In late November a contact-centre agent escalated that "the assistant's answers changed overnight" (Chapter 3 follows the investigation), and Nadia logged it as her first evidence that reporting felt safe.

#### Change management

Workforce readiness goes beyond knowledge. New AI systems change workflows, job content and required skills, and change handled badly generates resistance that later shows up as **shadow AI**: employees using unapproved tools because the approved path is too slow. Readiness work is therefore governance work. The pinned Slack tip with its fourteen thumbs-up was a readiness failure, because the approved route to a new tool took months. Nadia asked the council to fast-track a sanctioned enterprise assistant and to redesign the letter workflow around it, and left the acceptable use policy to Chapter 3.

### 2.3 Roles Along the Value Chain

Every owner Nadia named works for Larkspur, but many decisions that shape its systems are made by others. Two vocabularies describe who does what along that value chain.

The BOK's vocabulary describes tasks. A **developer** (data scientists, machine learning engineers, data engineers, research scientists) handles data curation and rights, model selection and training, fairness and robustness evaluation, documentation and testing. A **provider** places the system on the market under its own name, which the BOK says can include a team that fine-tunes someone else's base model. A **deployer** (software engineers, AI ops, product managers, infrastructure) handles fit-for-context assessment, integration, human oversight in operation, monitoring, incident escalation and user instructions. A **user** (internal staff, external customers, decision-makers relying on output) operates within intended bounds, applies judgment, reports anomalies and exercises recourse. The BOK uses "developer" and "deployer" as **task labels, not legal categories**. One organization can be the developer of one system and the deployer of another, because the labels describe what you are doing rather than what you legally are.

The EU AI Act's categories carry legal duties. Its provider develops a system or has it developed and places it on the market or puts it into service under its own name or trademark, whether or not anything was fine-tuned. A company that builds its own application on another party's general-purpose model is that application's **downstream provider**. Whether fine-tuning also makes it the provider of the modified model is a narrower question for Chapter 6. The table sets the two vocabularies side by side.

| Role | BOK task label | EU AI Act category and core duties | Larkspur |
|---|---|---|---|
| Developer | Builds and tests the model | No separate category | Priya's team, for Clearline |
| Provider | Places the system on the market under its own name | Places on the EU market or puts into service under its own name; risk management, data governance, technical documentation, conformity assessment, CE marking, registration, post-market monitoring, incident reporting | Dublin entity, for Clearline |
| Deployer | Integrates, oversees and monitors in context | Uses the system under its authority in a professional capacity; use per instructions, competent human oversight, relevant input data, monitoring, log retention, serious-incident reporting, a FRIA for some | Larkspur, for Norvane's model; Dublin entity, for Clearline |
| User | Relies on output within intended bounds | No separate category | Underwriters, agents, customers |
| Importer | None | Places a third-country provider's system on the EU market; verifies the conformity assessment, documentation and CE marking | None |
| Distributor | None | Makes a system available unmodified; verifies CE marking and documentation, and does not supply a system it believes non-compliant | None |

Provider and deployer are where the vocabularies overlap and the duties diverge. In BOK terms Priya's US team develops Clearline and Larkspur deploys it. In EU law the Dublin entity will be both its provider, because it has the system developed by group data science and puts it into service under its own name (Article 3(3)), and its deployer, because its underwriters use it. As deployer of a creditworthiness system under Annex III point 5(b), it will owe a **fundamental rights impact assessment (FRIA)** under Article 27. That duty is confined to public bodies, private entities providing public services, and deployers of Annex III points 5(b) and 5(c) systems. It applies from 2 December 2027 as amended (2 August 2026 as enacted), and Chapter 12 compares it with the GDPR's data protection impact assessment (DPIA).

For the Ask Larkspur pilot, Larkspur deploys Norvane's model. If it ever builds its own branded assistant on that model, the legal reading changes, and Chapter 6 settles it. Larkspur holds no importer or distributor role. If Brightlist, the US resume screener HR wants to buy, reached the EU through intermediaries, the EU-based firm that placed it on the market would be the importer and a reseller passing it on unchanged a distributor.

#### When a deployer becomes a provider

Under Article 25(1), any distributor, importer, deployer or other third party becomes the provider of a high-risk system, with all the provider's obligations, in three situations. Under point (a) it puts its name or trademark on a high-risk system. Under point (b) it substantially modifies a high-risk system that remains high-risk. Under point (c) it changes the intended purpose of a system that was not high-risk, including a general-purpose system, so that it becomes high-risk. The rule turns what looks like a deployment question into a conformity question.

When marketing proposed rebranding Brightlist as "Larkspur TalentMatch", Marcus explained that in Dublin hiring it would be a high-risk employment system under Annex III point 4(a), and Larkspur's name on it would make Larkspur the provider under Article 25(1)(a). The rebrand was dropped. Nadia then raised Owen's remark that the assistant might "set up payment plans one day". If it drifted into judging who can afford a plan, would it be assessing creditworthiness under point 5(b)? The council recorded that as an open question.

#### Why the split matters

Most of the risk that downstream parties inherit is set upstream, in training data, architecture and thresholds. Most of the harm happens downstream, in context, where the deployer chooses how output is used and who oversees it. The role model exists so that neither party can point at the other, and so that a governance professional can identify who owes what to whom. For Clearline, Larkspur holds both ends. For Ask Larkspur, Norvane sets the model's behavior, while Larkspur chooses what the assistant draws on and how its agents use it.

### 2.4 Fitting the Program to the Organization

The BOK frames Domain I as holding regardless of industry, sector or size, so the same structures have to be scaled to an organization's size, sector, maturity, jurisdictions and risk profile. At Larkspur, proportionality ran by system: Clearline got the full RACI and stakeholder map, and the marketing segmentation model a register line and an owner. Two legal entities meant layered law, with EU duties falling on the Dublin entity. A mid-sized firm early in its AI maturity could support a council but not yet an ethics officer. And its role varied by system, as Section 2.3 showed.

A 40-person startup might have no council, only an Accountable founder, a Responsible engineer and a monthly review with outside counsel, and it would still need one owner per decision, a written record and training sized to its team. Nothing in Larkspur's structures depends on its being a lender. The same council, RACI and curriculum would work at a hospital or a retailer.

### A Name Beside Every Decision

Each structure in this chapter answers the board's question from a different side. The layers and RACI put a name on every decision, the stakeholder map finds the people those decisions touch, ERM carries the result to the board, literacy makes the owners capable, and the value chain finds the owners who work somewhere else.

By the end of November the council had its charter and the board risk committee had its appetite on record. RACI v1 had a name in every Accountable column, and Nadia's appeared only on the lines for running the process. Tom put it in his next quarterly report to the board risk committee as the first part of management's answer.

In the second week of December, three problems landed on Nadia's desk that no Larkspur policy anticipated: Dana's underwriting backlog, a call from Dublin, and a contract renewal nobody thought was about AI. The owners had names. The rules they would apply had not been written with AI in mind.

### The Record

Chapter 2 added six artifacts to Larkspur's record.

- **AI Governance Council Charter.** Owner: Nadia Brennan. Members, Siobhan's advisory seat, and no Chief AI Ethics Officer yet.
- **AI Risk Appetite Statement.** Owner: Tom Ashby, for the board risk committee. No automated declines, and human review of every non-approval.
- **RACI v1.** Owner: Nadia Brennan. One Accountable name per task, including the knowledge-library line (Accountable: Owen Park, Responsible: his knowledge-management lead).
- **Clearline Stakeholder Map.** Owner: Dana Whitfield. Internal and external parties, consumer advocates included.
- **ERM AI Fields.** Owner: Tom Ashby. System, model version, affected population and fairness exposure in the existing risk register.
- **Role-Based Literacy Plan and Metrics.** Owner: Nadia Brennan. Seven audiences and four effectiveness measures.

### Exam Focus

These are the points in this chapter that questions most often turn on.

- Larkspur is a lender, but Domain I is tested as sector-agnostic, and an answer that assumes a bank or lender is usually wrong.
- Know what each layer owns (direction: appetite, funding, tone, final accountability; steering: framework, high-risk review, escalation, upward reporting; operating: building, assessing, monitoring, documenting, flagging anomalies), and treat a Chief AI Ethics Officer as a maturity signal, never a legal requirement.
- RACI is the instrument the BOK's "define roles and responsibilities" indicator points at, with exactly one Accountable party per task, Consulted parties heard before the decision and Informed parties told of it.
- Stakeholder mapping is a control because an unidentified stakeholder is an unowned risk, and external stakeholders are the ones most often missed.
- The mature pattern tags AI risk inside the existing ERM portfolio, so a parallel AI register is the wrong answer.
- Training covers AI terminology, strategy and governance for all stakeholders, with baseline awareness for everyone and depth for seven audiences, and it is judged by effectiveness measures rather than attendance.
- Provider was added to the BOK's roles in v2.1, and the BOK deliberately calls developer and deployer task labels rather than legal categories, so keep developer, provider, deployer and user apart from the EU AI Act's provider, deployer, importer and distributor, and remember that one organization can hold different roles for different systems.
- The Article 25(1) deemed-provider triggers (name or trademark, substantial modification, changed intended purpose) reach distributors, importers and other third parties as well as deployers, and they turn a deployment question into a conformity question.
- The Article 27 FRIA binds only public bodies, private entities providing public services and deployers of Annex III 5(b) and 5(c) systems.
- Whether Larkspur is the provider of Ask Larkspur is a legal reading that the BOK's task labels do not settle, so answer task-label questions in terms of tasks.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): Adoption, AI Governance Stakeholder, Cross-Functional Collaboration, RACI Matrix, Stakeholder Mapping, Training and Awareness Program, AI Deployer, AI Developer, AI User.

### Further Reading

- [NIST AI RMF Playbook, Govern function](https://airc.nist.gov/airmf-resources/playbook/): GV1 to GV6: roles, accountability, culture and third-party governance
- [ISO/IEC 42001 (AI management system)](https://www.iso.org/standard/42001): clause 5 leadership and Annex A organizational controls
- [NIST AI RMF (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): AI actors and the Govern function as the cross-cutting foundation
- [IAPP Key Terms for AI Governance](https://iapp.org/resources/article/key-terms-for-ai-governance/): stakeholder and role terminology
- [EU AI Act, Article 4 (AI literacy)](https://artificialintelligenceact.eu/article/4/): the legal expectation, in force 2 February 2025
- [ICO guidance on AI and data protection](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/): training and accountability expectations alongside the technical guidance
- [EU AI Act, Article 3 (definitions of provider, deployer, importer, distributor)](https://artificialintelligenceact.eu/article/3/): the legal role definitions
- [EU AI Act explained (European Commission)](https://digital-strategy.ec.europa.eu/en/policies/ai-act-explained): role-based obligations in plain language
- [EU AI Act, Article 25 (responsibilities along the AI value chain)](https://artificialintelligenceact.eu/article/25/): the rule that turns deployers into providers
- [ISO/IEC 22989:2022 (free from IEC)](https://webstore.iec.ch/en/publication/77839): the parallel role taxonomy: provider, producer, customer, user, subject

## Chapter 3: Rewriting the Rules: Policies Across the Lifecycle

*Charlotte, December 2025*

The first item came on Monday, from Dana Whitfield, Clearline's accountable owner. Her underwriters were three weeks behind, and when Clearline went live she wanted it to decline the bottom score band automatically. Those applicants were almost never approved anyway, she said. Nadia Brennan had the risk appetite open before Dana finished. The board risk committee had recorded it in November: no automated declines, and human review of every non-approval.

On Wednesday Siobhan Kelly called from Dublin. A collections agent had pasted an Irish hardship applicant's letter, which described a medical condition, into a public chatbot to help draft a reply. Siobhan had opened a breach assessment that morning, and the 72-hour clock was running.

On Friday procurement forwarded a routine renewal of Larkspur's customer-service platform. Nadia nearly filed it, until she saw the vendor's name. Norvane was behind the AI reply assistant that Owen Park's team had switched on in August, and behind the late-November escalation about draft answers that had changed overnight. Nobody had reviewed the assistant as AI, because nobody had bought it as AI.

She laid the three items side by side. Every policy Larkspur owned assumed that a human made the decision, that data sat in a database, and that you knew what your vendor was selling. Dana's request removed the human. The paste put customer data where no database policy reached. The renewal covered a product that had changed underneath its buyer. As with the Slack tip in October, the trouble was less a broken rule than rules written for a different world.

Chapter 1 gave Larkspur a vocabulary and Chapter 2 gave its decisions owners. This chapter completes Part I with the rulebook, the subject of BOK competency I.C, establishing policies and procedures across the life cycle. Most policies predate AI, which breaks their assumptions through inference, model retention, re-identification and new attack surfaces, and which arrives through pretrained models, APIs and data suppliers that traditional vendor management was never built to probe. The chapter takes oversight first (3.1), then privacy, security, data-governance and intellectual-property policy (3.2), then third-party risk (3.3).

### 3.1 Keeping Humans in Charge

Dana's request tests the first assumption. Autonomy, one of Chapter 1's characteristics, bites here: the more a system can act alone, the more deliberately you must place the person. The EU High-Level Expert Group on AI's Ethics Guidelines for Trustworthy AI (2019) supply three levels.

Under **human-in-the-loop** oversight, a person reviews and approves each consequential decision before it takes effect, which suits high-stakes, lower-volume decisions such as medical triage, loan denial, and custody or benefits determinations. Under **human-on-the-loop** oversight, a person supervises operation, monitors outputs and can intervene or halt, which suits higher-volume, moderate-risk operation where per-decision review is impractical. Under **human-in-command** oversight, people set the objectives, bounds and escalation rules and keep the ability to override or deactivate. That is overall program governance and the fallback for every deployed system. Stakes and volume decide between the first two, per use case. The third applies to everything.

Larkspur's oversight standard gave each system a level. Every Clearline non-approval, US or Irish, would reach an underwriter before taking effect. Auto-approvals within policy would run on the loop, with underwriting managers watching approval rates and override logs, able to pause the model. The credit committee and the council held command: thresholds and the kill switch. Supervisors sampling replies kept the agent-assist pilot behind Ask Larkspur on the loop too. The council refused Dana's request against the board's appetite, recorded why, and gave her queue caps and two additional underwriters instead.

#### Where the law reaches the design

For Irish applicants, two EU instruments turn these levels into obligations. GDPR Article 22 restricts decisions based solely on automated processing that have legal or similarly significant effects, and Chapter 4 covers its exceptions, safeguards and case law, including the SCHUFA ruling's point that a score an underwriter draws on strongly may itself be the decision. For oversight design, "solely automated" is the hinge. Meaningful human review before the decision takes effect moves a process outside Article 22, and cosmetic review does not. The unreviewed auto-approvals, Marcus Hale recorded, must rest on an exception with its safeguards.

EU AI Act Article 14 requires high-risk systems to be designed so that competent humans can effectively oversee them, able to understand the outputs, to disregard or override them, and to interrupt the system through a stop button or similar procedure. That design duty is the provider's, so Priya Raman's team had to build all three into the underwriter screen for the Dublin entity as Clearline's provider. The deployer's duty to assign oversight to people with the necessary competence, training and authority sits in Article 26(2), and it also falls on the Dublin entity. These duties apply from 2 December 2027 as amended by the Digital Omnibus on AI (2 August 2026 as enacted, per Chapter 6), and Larkspur builds ahead of either date. Neither article protects US applicants, whose hook is the adverse-action reasons that ECOA and Regulation B require (Chapter 5).

#### What makes oversight real

Article 22 speaks of human intervention rather than human presence, and Nadia saw the difference in a morning beside the underwriters working Scorecard 7. Each handled hundreds of files a day, saw a score and nothing else, and paid for every override in throughput, which is why they followed its referrals about 99 percent of the time (Chapter 2). A human who rubber-stamps every recommendation satisfies no obligation. Nadia called it **automation bias with a witness**: a human who provides legal cover for a decision the machine has already made.

Oversight is a design problem, not a staffing problem, and it needs four conditions at once. Lose any one and automation bias with a witness returns. Competence means the overseer understands the system's limits and failure modes, which Chapter 2's literacy training supplied. Information means the interface presents confidence and reasons, not only the recommendation, so the new screen would carry a confidence level and the top reason codes that will also feed US adverse-action notices. Authority means the overseer can reverse the output without career cost, so overrides left the productivity measures. Time and volume means a review load small enough for real attention, which the queue caps bought. The record is an override log that the council reviews monthly.

### 3.2 Retrofitting Policy for AI

The Dublin paste tests the second assumption, that data sits in a database whose policies know where it is. The BOK makes two things preconditions for AI-specific policy: a **data classification policy**, so you know what is sensitive, and a **data inventory**, so you know where it is. Without them, monitoring and managing AI training data is severely disadvantaged, and no policy language compensates. Larkspur's classification policy had no category for prompts or model outputs, and its inventory did not show where loan files went once copied into Priya's analytics environment. Nadia added the categories and linked the data inventory to the AI Register, a data-governance fix that would matter sooner than she expected.

#### Where legacy policy breaks

Nadia's policy retrofit memo then worked through the policy binder, recording for each area the assumption AI breaks and the gap to close.

| Policy area | The assumption AI breaks | The gap to close |
|---|---|---|
| Purpose limitation | Data collected for one purpose stays there | A compatibility analysis or new lawful basis before training on repurposed data; a use-case registry tagging each dataset with its approved purposes |
| Retention | Deleting the record deletes the data | Retention rules covering derived data, checkpoints, embeddings, caches and the trained model itself, plus a stated position on what a deletion request means for a model |
| Minimization | Minimization applies to storage | Minimization applied to features and training sets: if fewer features perform equivalently, use fewer |
| De-identification | Removing names anonymizes | A standard that survives quasi-identifier combinations and model-based re-identification, with re-anonymization required when datasets are combined |
| Access control | Access is to databases | Access control over prompts, model endpoints, training environments, feature stores and model registries |
| Incident response | Incidents mean a breached database | Playbooks for the five AI-specific attacks defined below |
| Intellectual property | The organization knows what it owns and has licensed | Rules on who owns outputs under vendor terms, what confidential material may enter third-party prompts, and what licensed content may be used in training |

At Larkspur, Priya's idea of adding collections call transcripts to Clearline's training data needed Siobhan's compatibility analysis for Irish data. An Irish erasure request would reach Clearline's **checkpoints** (saved snapshots of a model's parameters) and the assistant's chat logs and **embeddings** (numerical representations of text used to compare meaning), so the memo recorded Larkspur's stated position. Clearline's 312 features would lose any that added no lift. An "anonymized" extract still carried ZIP code, birth date and loan amount, each a **quasi-identifier**, a field that names no one alone but can single a person out in combination. Removing names only pseudonymizes, as Chapter 4 explains. Access control now covers system prompts, retrieval indexes, **feature stores** (shared repositories of prepared model inputs) and the **model registry** of model versions and lineage. The new intellectual-property row starts with who owns the assistant's drafts under Norvane's terms.

#### Threats the playbooks must anticipate

The incident-response row needs definitions. Three attacks target what a model has learned. **Model inversion** reconstructs training inputs by probing the model's outputs, a risk Chapter 9 tests through an instant-quote tool. **Membership inference** determines whether a specific person's record was in the training set, which is itself a disclosure: revealing that someone was a Larkspur borrower, or was declined, says something about them. **Unintended memorization** is a model reproducing fragments of sensitive training data on request, such as a customer's details.

**Data poisoning** corrupts training data to shape model behavior, a training-time attack that Chapter 9 tests through Clearline's alternative-data feed. **Prompt injection** is input crafted at inference time to override a large language model's instructions or safety filters, directly or indirectly through retrieved content such as a customer-uploaded document carrying instructions to the assistant. Confabulation, a falsehood with no attacker behind it, is a different failure (Chapter 7). The sixth threat needs no adversary. **Function creep** expands data use beyond its stated purpose through gradual AI reuse, as when service transcripts drift into marketing.

#### Shadow AI and acceptable use

The Dublin paste is the most common real-world AI policy failure: an employee pasting customer data into an unapproved tool, with no sophisticated attack involved. Nadia's instinct was a ban. Owen answered in four words: "They'll use their phones." A ban without an approved path produces **shadow AI**, unapproved tools used out of sight, which is worse than the exposure the ban was meant to prevent, and Chapter 2 had traced the cause to a slow approved path. An **acceptable use policy** (AUP) must say what data may enter a prompt, which tools are approved, and what happens when someone needs a tool that is not on the list. Larkspur's AUP v1, its answer to October's Slack tip, barred customers' personal and account data from public tools, named the sanctioned enterprise assistant (no training on inputs, limited retention) as the approved tool, and gave exceptions a named owner, the CISO. Chapter 4 follows Siobhan's breach assessment to its outcome.

### 3.3 The Supply Chain Problem

The Norvane renewal tests the third assumption. Norvane had passed **third-party risk management** (TPRM) as a customer-service platform, on solvency, a SOC 2 report and a standard security questionnaire, and the AI feature arrived later by toggle. That review was built for another kind of product. Solvency, insurance and certification checks miss training data of unknown origin or rights status. Standard security questionnaires miss model behavior that changes with each vendor update. Service contract templates leave liability for harmful or discriminatory output unallocated. Named-subcontractor disclosure misses the sub-tier of data labelers, base-model suppliers and open-source dependencies.

Procurement put the renewal on hold for AI diligence, which picked up the late-November escalation and found that Norvane had swapped model versions without notice. That is emergence, Chapter 1's addition to the seven characteristics, in commercial form: a black box inside a black box. Larkspur could not inspect the training data, often could not see the model version, and learned of the change only when its own users reported it. Point-in-time diligence decays fast against a product like that.

#### Rebuilding vendor review

Larkspur's response has four parts. The first is to flag AI at procurement intake by asking whether the product includes AI, machine learning, large language models or automated decision-making, whether Larkspur's data will train the vendor's models, and whether personal, biometric or sensitive data is processed. Flagged deals get supplemental review by legal, risk and technical stakeholders. Vendors do not all volunteer their AI use, so the question must be asked rather than inferred. The new intake questionnaire soon caught Brightlist, the resume screener HR wanted, and an alternative-data supplier for Clearline.

The second is AI-specific due diligence on training-data origin and rights, fairness and robustness test evidence, explainability support, model-change practices, security of the machine learning supply chain, and named sub-tier dependencies (who labeled the data, whose base model is underneath). A standardized supplier questionnaire mapped to risk tiers keeps it repeatable. From Norvane, diligence also sought the documentation a general-purpose AI model provider owes downstream providers under EU AI Act Article 53.

The third is contract terms. Larkspur adopted six clauses as a policy standard, and Chapter 12 negotiates Norvane's contract against it.

1. Data-use limits: no customer data used for retraining without explicit consent, the contractual answer to the intake question about training.
2. Fairness and performance: warranties, plus evidence of testing and remediation of disparate impact.
3. Model-change notification: advance notice of updates that change behavior or intended use.
4. Incident notification: time-bound reporting and defined responsibilities. The example of 24 hours is a negotiated term, not a legal rule.
5. Audit rights: the right to audit or inspect high-risk vendor systems and to receive documentation, used in proportion to risk.
6. Termination and portability: exit conditions, model deactivation rights, and data return or deletion.

The fourth is continuous monitoring, because vendor model updates change behavior mid-contract. The emerging instrument for seeing the sub-tier chain is an **AI system bill of materials** (AI-BOM) listing a system's upstream inputs. Ask Larkspur's first AI-BOM named Norvane's model and version, with rows reserved for the embedding model, retrieval corpus and open-source libraries that a customer-facing build would add. Open-source components need the same licensing, vulnerability and bias review as commercial ones.

Marcus gave the board risk committee the principle in one sentence: if the assistant misstates a fee, Larkspur answers to the customer and the regulator, not Norvane. Accountability is non-delegable, as Chapter 1 established. Outsourcing the AI does not outsource the regulatory or ethical responsibility, and the EU AI Act attaches obligations to whoever places a system on the market or uses it, rather than to whoever built it furthest upstream. Upstream builders keep duties of their own, such as Norvane's under Chapter V of the Act, but those relieve Larkspur of none of its own.

### A Human, a Database, a Known Vendor

The three sections make one argument. Legacy policy assumed that a human decides, that data stays in a database, and that a vendor sells what the contract describes. Oversight design makes review real, the retrofit follows data into prompts and models, and vendor review keeps asking after signature. Each fix is the same move: a named owner, a stated rationale and a record revisited when the system, the vendor or the law changes.

By the end of December every control had a named owner, and Nadia's name sat only on the governance documents that tied them together. The council approved the retrofitted policies in January. Then Marcus asked the question that opens Part II: which of these rules does the law actually require, and for whom? A Dublin applicant, a Colorado borrower and a future customer in Seoul do not live under the same rules, and nothing in the register yet said which were which.

### The Record

December left six artifacts in the Larkspur record.

- **Oversight standard v1.** Owner: Nadia Brennan. An oversight level for every registered system.
- **Underwriting override log.** Owner: Dana Whitfield. Every override of a model referral, reviewed monthly by the council.
- **Policy retrofit memo.** Owner: Nadia Brennan. Seven policy areas rewritten for AI, with the updated data classification.
- **Acceptable Use Policy v1.** Owner: Nadia Brennan. Data allowed in prompts, the approved assistant, and an exception route owned by the CISO.
- **Vendor AI intake questionnaire.** Owner: Marcus Hale. Intake flags, tiered diligence and the six-clause contract standard.
- **Ask Larkspur AI-BOM v1.** Owner: Owen Park. Norvane's model and version, with rows reserved for later components.

### Exam Focus

Competency I.C carries the largest share of Domain I items.

- The Larkspur case illustrates generic practice, and a Domain I answer that assumes a bank, a lender or any particular sector is usually wrong.
- Human-in-the-loop approves each decision first, human-on-the-loop supervises and can intervene, and human-in-command, which applies to every system, sets bounds and keeps the kill switch.
- Under GDPR Article 22 "solely automated" is the hinge: meaningful review before the decision takes effect moves a process outside the article, and cosmetic review does not.
- EU AI Act Article 14 is the provider's design duty and Article 26(2) the deployer's staffing duty, and neither they nor GDPR Article 22 protect US applicants.
- Real oversight needs competence, information, authority, and time and volume at once.
- The BOK states directly that a data classification policy and a data inventory must exist before AI-specific policy can work.
- Retrofitted minimization reaches features, and retention reaches checkpoints, embeddings and the model.
- Inversion reconstructs inputs, membership inference reveals presence in the training set and memorization reproduces fragments, while poisoning strikes at training, prompt injection at inference, and function creep needs no attacker.
- A ban without an approved path produces shadow AI, so the best answer pairs acceptable-use rules with a sanctioned tool and an exception route.
- The vendor response runs intake flagging, diligence, contract clauses and continuous monitoring, and intake must ask about AI rather than infer it.
- "The vendor is responsible because it built the model" is a distractor, because accountability is non-delegable.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): Automation, Human in the Loop, Human Oversight, AI Data Retention Policy, Membership Inference Attack, Model Inversion Attack, Prompt Injection, Shadow AI, AI Vendor Due Diligence, Sub-Tier Dependencies, Third-Party Risk Management (TPRM).

### Further Reading

- [EU AI Act, Article 14 (human oversight)](https://artificialintelligenceact.eu/article/14/): the oversight design requirements for high-risk systems
- [GDPR Article 22 (automated individual decision-making)](https://gdpr-info.eu/art-22-gdpr/): the right and its safeguards
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
- [ISO/IEC 42001 (AI management system)](https://www.iso.org/standard/42001): Annex A controls for third-party relationships
- [NIST AI 600-1, value-chain and component integration risk](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): the generative-AI version of third-party risk

# Part II: Laws, Standards and Frameworks

*What must we do, and how do we prove it?*

*Charlotte, January 2026*

On 22 January, the day South Korea's AI Basic Act entered into force, Nadia Brennan and Marcus Hale met at a clean whiteboard. Marcus had asked the question the newly approved policies could not answer: which of these rules does the law actually require, and for whom? A Dublin applicant, a Colorado borrower and a future customer in Seoul did not live under the same law.

Nadia drew the grid. Down the side she copied rows from the AI Register: Clearline, Scorecard 7, Ask Larkspur, Owen's hardship idea, shadow AI, and Brightlist, the resume screener that the vendor intake questionnaire had caught in December. Across the top Marcus wrote US federal, US states, EU and Ireland, and South Korea. The last column was exploratory, since Larkspur had no entity, customers or data in Korea.

Under US federal, Marcus wrote "no AI law." Nadia took the pen and wrote beneath it: "not no law." ECOA, Regulation B and the Fair Credit Reporting Act would reach every decision Clearline made. The FTC Act and the CFPB's authority over unfair, deceptive or abusive practices would reach whatever Ask Larkspur told a customer. None of them mentioned AI, and none needed to.

Marcus guessed a week to draft the grid. Nadia agreed, and said keeping it true would take the rest of the year.

Part I settled what AI governance means inside Larkspur (named owners, a council, rewritten policies). Part II asks what the law requires and how Larkspur proves compliance, which is where principles become obligations. The grid is filled in four passes. Siobhan Kelly leads privacy in Chapter 4, and Marcus leads the rest of existing law in Chapter 5. Nadia and Marcus take AI-specific law in Chapter 6, and Nadia and Priya Raman treat standards as proof of due care in Chapter 7. The scenes run from January to July 2026, and the law moves under them.

Almost every question here is a matching problem: from a fact pattern, name the instrument, the obligation it triggers, or the role that carries it. The instruments come in three families. The first is law that reaches AI without naming it: the GDPR, the US fair-lending and civil-rights statutes, the FTC Act, copyright and product liability all predate AI and apply anyway. The skill in Chapters 4 and 5 is seeing the hook. The second is law written for AI, led by the EU AI Act, the first comprehensive statute, with South Korea's AI Basic Act and a growing set of US state laws behind it. It will reach Clearline in Dublin, and the skill in Chapter 6 is knowing the mechanism. The third is voluntary standards and frameworks: the OECD AI Principles, the NIST AI RMF and its Playbook, and ISO/IEC 22989, 42001 and 42005. They bind no one, but regulators, auditors and contracts increasingly treat them as the measure of due care, which is why a bank funding partner will ask Larkspur about them. The skill in Chapter 7 is knowing which instrument does what.

Each cell is worked the same way: instrument first, then role, then duty. The role is the law's way of naming an owner. For a hiring tool the instrument might be Title VII, the GDPR's Article 22, the EU AI Act's Annex III or New York City's Local Law 144, and the fact pattern usually holds the one detail that decides. For Brightlist that detail is where the candidate lives: US roles bring in Title VII, New York City roles add Local Law 144, and the GDPR and Annex III wait on a deferred Dublin use.

To keep the grid true, this book labels which legal state each fact describes, as enacted or as amended. As enacted (Regulation (EU) 2024/1689), the EU AI Act applied its Annex III rules for stand-alone high-risk uses from 2 August 2026 and its Annex I rules for AI embedded in regulated products from 2 August 2027. The Digital Omnibus on AI (Regulation (EU) 2026/1744, in force 27 July 2026) moved those dates to 2 December 2027 and 2 August 2028. It left 2 August 2026 as the start of Article 50 transparency duties and the Commission's GPAI enforcement, and it adds two Article 5 prohibitions from 2 December 2026, on AI that generates intimate imagery of an identifiable person without explicit consent or generates child sexual abuse material. Section 6.5 holds the full timeline. In the US, federal agencies pulled back from disparate-impact enforcement through 2025 and 2026 (EEOC guidance withdrawn, Executive Order 14281, the CFPB's Regulation B rule effective 21 July 2026), but the statutes and private suits are unaffected, and an executive order cannot amend Title VII (Section 5.2). Status needs the same precision as dates: adopted, in force, draft, proposed, withdrawn and on appeal are different legal states.

The first pass is privacy, because the GDPR is already in the room. The December paste in Dublin put it there with no help from any AI statute, and the newly linked data inventory and AI Register are about to show Siobhan where some Dublin loan files went last autumn.

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

## Chapter 4: Privacy Law Meets AI

*Charlotte, February 2026*

Siobhan Kelly called from Dublin at seven in the morning, Charlotte time. Nadia took the call at her kitchen table.

"I ran the join," Siobhan said. In December Nadia had linked the data inventory to the AI Register, and Siobhan had spent the afternoon walking the links for the Dublin entity. Under Clearline, one row read: Dublin personal-loan files, five years, location US analytics environment.

"Last autumn," Siobhan said. "Before your program existed. Priya's team copied them across to prototype the model."

The row named a data scientist who had since changed teams, and nothing else. There was no transfer mechanism, no note of which entity had decided to make the copy, and no assessment of whether files collected to assess and service Irish loans could be used to build a model. Nobody had hidden anything. The prototype had worked, and some of the 312 features Priya had listed in her October inventory reply came from these files.

"Is it a breach?" Nadia asked.

"Not the way the December paste was. Nobody outside the group has the data, and I'll write down why I think so. But it's a transfer and a new purpose, and nobody can tell me who decided either. The applicants were told we would use their data 'to assess your application.' That is the whole sentence."

The privacy column of the legal grid was the first pass, and Siobhan, who advised the council and voted on nothing she monitored, was leading it. Nadia asked Priya to suspend access to the copy, and Priya agreed within the hour. Then Nadia wrote the week's question on a blank page: before anyone says "AI Act," what does privacy law already require of us, and who owns each answer?

That question organizes this chapter. Privacy law, above all the GDPR, was not written for AI, yet its core doctrines (transparency, choice, lawful basis, purpose limitation, data minimization and privacy by design) already govern it, along with its controller obligations (impact assessments, processor contracts, cross-border transfers, data subject rights, automated decision-making, breach notification and records) and its extra rules for special-category data such as biometrics. AI presses hardest at two points: its appetite for data collected for another purpose, the data dependency Chapter 1 described, and its ability to infer what nobody collected. The sections follow the order in which the Dublin files tested the law.

### 4.1 The GDPR as AI Law

Marcus's first question was whose law applied. The General Data Protection Regulation, Regulation (EU) 2016/679, is the world's most influential data protection law, and it was the EU's principal AI regulator until the AI Act arrived. It reaches AI through provisions built for automated decisions and processing at scale, whatever AI-specific regulation sits beside it.

The GDPR governs the processing of personal data of people in the EU. Article 3 covers controllers and processors established in the EU directly, so the Dublin entity, controller for its Irish applicants, is squarely inside it. Article 3 also reaches controllers and processors outside the EU that offer goods or services to people in the EU or monitor their behavior. A model trained or deployed anywhere can therefore fall inside the GDPR if people in the EU are affected. The US parent could not treat the Dublin files as foreign data, and the copy was a transfer, which Section 4.4 takes up.

A small set of articles carries most of the weight in AI governance, and it helps to see them side by side.

| Article | What it governs |
|---|---|
| 5 | Principles: lawfulness, fairness, transparency, purpose limitation, minimization, accuracy, storage limitation, integrity, accountability |
| 6 | Six lawful bases, with no hierarchy |
| 9 | The special-category prohibition and its exceptions |
| 13 to 15 | Transparency and access, including automated-decision logic |
| 17 and 21 | Erasure and objection, which reach profiling |
| 22 | Solely automated decisions with legal or similarly significant effects |
| 25 | Privacy by design and by default |
| 28 | Processor contracts |
| 33 and 34 | Breach notification: authority within 72 hours, individuals if high risk |
| 35 | DPIAs for high-risk processing |
| 44 to 49 | Cross-border transfers |

Three doctrines among them carry most AI questions. Article 22 limits solely automated decisions, and a Clearline decision on an Irish application is the textbook fact pattern. The Court of Justice of the EU (CJEU) has extended its duty up the vendor chain and defined what an explanation must contain, in SCHUFA (2023) and Dun & Bradstreet Austria (2025), both treated in Section 4.4. Article 9's ban reaches special-category traits that AI infers from ordinary inputs, and purpose limitation and minimization collide with training's appetite for repurposed and over-collected data. None of this makes Clearline "high-risk," a label that belongs to the AI Act (Chapter 6).

National supervisory authorities enforce the GDPR, coordinated by the European Data Protection Board (EDPB). For the Dublin entity that authority is the Irish Data Protection Commission. Fines come in two tiers, depending on the breach: up to EUR 10 million or 2 percent of global annual turnover, and up to EUR 20 million or 4 percent, whichever is higher. Those tiers became the first line of Tom's answer to the board's question about exposure. The EDPB also issues the guidance that shapes AI practice: Opinion 28/2024 on AI models, adopted on 17 December 2024, and two 2026 drafts, Guidelines 02/2026 on anonymization and 03/2026 on web scraping.

Status matters. Opinion 28/2024 is adopted. The 2026 guidelines are drafts, open for consultation until 30 October 2026. The Commission's Digital Omnibus amendments to the GDPR, including a narrower personal-data definition and an AI-specific legitimate-interest article (Article 88c), are proposals, not law. They are a different instrument from the Digital Omnibus on AI, Regulation (EU) 2026/1744, adopted on 8 July 2026 and in force since 27 July 2026, which amends the AI Act and supplies the Article 4a basis in Section 4.5. When Marcus asked whether Article 88c would let Larkspur train freely, Nadia gave the rule in miniature: it is a proposal, so apply the GDPR as it stands, and say so in the record wherever a conclusion depends on a draft or a proposal. That settled, the files raised a plainer question: what had Irish applicants been told?

### 4.2 Notice, Choice and Lawful Basis

Notice tells people what will happen to their data, choice gives them some control over it, and a lawful basis and a defined purpose limit what the organization may do whatever anyone chose.

#### Notice

**Notice** means telling people how their data will be collected, used, stored and shared, and for AI whether decisions are made solely by automated means. Its required content is the purposes, data categories, legal basis, retention periods, recipients and the automated-decision fact. AI makes each harder to state honestly. Black-box logic is opaque. **Inference** creates sensitive facts from ordinary inputs. A model that keeps learning uses data differently after collection. Training draws on many sources of unclear provenance, automated decision-making can affect people in ways Article 22 does not fully reach, and accountability gaps open where controller and processor roles blur across a supply chain.

A good AI notice is plain-language and layered. It explains the AI's role in the decision, says whether a human is in the loop, and tells people how to access, contest or opt out. Burying "we train models on your data" on page 40 of a privacy policy is not notice, and it draws regulators' attention, the FTC's included (Chapter 5). The Dublin notice failed in one line. Marcus rewrote it in layers, with a first layer stating that a model scores each application and a human underwriter reviews every application the model does not approve.

#### Choice and consent

Valid **consent** is freely given, specific, informed, unambiguous, given by a clear affirmative act, revocable and recorded, with the burden of proof on the controller. **Explicit consent** is the higher bar required for special-category data and high-risk uses. Implicit consent is generally insufficient for AI, and opt-in is the GDPR default, with opt-out available only in limited jurisdictions. Four obstacles recur: power imbalance (people cannot refuse an essential service), lack of understanding (nobody grasps what a deep model will infer), opacity, and **dark patterns** such as pre-ticked boxes, hidden opt-outs, biased defaults and the illusion of choice. When the product team proposed a pre-ticked "Help improve our AI" box so that Ask Larkspur transcripts could be used for tuning, Nadia rejected it. A pre-ticked box is not an affirmative act.

#### Lawful basis

Consent is one of six **lawful bases** in Article 6, not the default, and there is no hierarchy among them. The others are necessity for a contract, legal obligation, protecting someone's life, a public-interest task, and legitimate interests. Consent is a poor basis for underwriting, because an applicant who needs the loan cannot meaningfully refuse. Consent and contract are not interchangeable: consent to special-category data under Article 9(2)(a) must be explicit and revocable, whereas contract necessity is a demanding test that nice-to-have features fail.

**Legitimate interest**, Article 6(1)(f), is the usual route for training. Opinion 28/2024 tests it in three steps: a real and present interest, necessity, and a balancing exercise in which data subjects' reasonable expectations carry weight. It adds that unlawful training can taint a model's deployment unless the model was properly anonymized. The draft web-scraping guidelines, adopted for consultation on 7 July 2026, say consent is rarely workable at that scale, legitimate interest is the usual basis if necessity and balancing are met, and special-category data needs both an Article 6 basis and an Article 9(2) exception. Larkspur's lawful-basis record, prepared for Dana as data owner with Siobhan's written advice, rests Irish credit decisions on contract necessity and Clearline's training on legitimate interest, each step written out.

#### Purpose limitation

**Purpose limitation**, Article 5(1)(b), requires data collected for specified, explicit and legitimate purposes and not further processed incompatibly. **Function creep** (also called purpose creep) is the gradual widening of use beyond the original purpose, endemic in AI as data is reused across product features, research and development, monetization and unrelated prediction. Training is a separate purpose from inference. Third-party models arrive with undisclosed training data, and users are rarely told what downstream purposes a model serves. The cure is a **compatibility assessment** for each secondary use, separate datasets for distinct tasks, dataset documentation aligned to intended use, and updated notices at every material change.

The loan-file copy was function creep in its plainest form, and Chapter 3's retrofit table had named the remedy. A compatibility assessment now tests whether training Clearline on files collected to assess and service Irish loans fits that original purpose. In short, notice tells, choice empowers, and purpose limitation constrains. When one breaks, the symptom is usually a repurposed dataset, a coerced or bundled consent, or an undisclosed automated decision.

### 4.3 Data Minimization and Privacy by Design

Purpose limitation asks whether Larkspur may use the files at all. Minimization asks how much of them it needs. **Data minimization**, Article 5(1)(c), requires personal data that is adequate, relevant and limited to what is necessary for the stated purpose. AI works against it: model development wants large datasets, exploration is open-ended, and teams overcollect for a hypothetical future use.

The answer is to minimize at every stage. At collection, limit scope, avoid sensitive data unless strictly necessary, and do not collect on speculation. In preprocessing, drop non-contributing features and mask or redact sensitive fields. In training, use federated learning or differential privacy so raw personal data is not centralized. At inference, limit input to the minimal feature set. The framing is "smart data, not big data": collection discipline reduces scope and volume, and technical safeguards reduce identifiability. If 15 features perform like 50, use 15. Priya's team applied the rule to Clearline's 312 features, found that a much smaller set performed as well, and dropped everything that added no lift.

**Privacy by design**, formulated by Ann Cavoukian and given legal force by Article 25, has seven principles: proactive not reactive, privacy as the default, embedded into design, full functionality (positive-sum, not privacy versus utility), end-to-end security, visibility and transparency, and respect for the user. Across the AI lifecycle, problem framing calls for DPIAs and necessity tests, development for privacy-preserving training, bias detection and interpretability, and operation for retention limits, contestability and drift monitoring. In MLOps it means privacy checks in CI/CD, privacy linting, model cards that record privacy characteristics, and drift detection. Ask Larkspur applied it at problem framing: its retrieval library is designed to hold Larkspur policy documents and no customer data, and its logs are limited and kept for a set retention period.

The technical safeguards include data masking and **tokenization**, **pseudonymization**, on-device processing, **homomorphic encryption** (computing on encrypted data), **federated learning** (data stays local and only model updates are shared) and **differential privacy** (no single record can be reconstructed from outputs). **Synthetic data** is on the list too, but it is not privacy-preserving by default: overfitted generators can leak, and small populations stay vulnerable, a caveat Siobhan attached to Priya's plan for synthetic records of rare applicant profiles.

The Dublin files are pseudonymized before training, and Siobhan made the record say what that means. Removing names is pseudonymization, not **anonymization**. Under Opinion 28/2024, a model trained on personal data is anonymous only if it is insignificantly likely that anyone could extract a training subject's data, directly or through queries, assessed case by case against the controller's documentation. Draft Guidelines 02/2026 propose three tests (no record isolation, no linkage, no inference) and note that anonymity can differ from one holder to another. When a data scientist argued that the trained model was anonymous, so erasure requests could never reach it, Siobhan did not argue the conclusion. She asked for the case-by-case assessment to be documented, giving Larkspur the stated position on deletion that Chapter 3's retention row required. Who owes that position depends on roles.

### 4.4 What Controllers Owe

The **controller** determines the purposes and means of processing, and a **processor** acts on its behalf. In AI supply chains the line blurs: a cloud or model vendor that keeps training on customer data, or a black-box AI-as-a-Service platform with little configuration, can become a **joint controller**. The accountability principle, Article 5(2), means controllers must be able to demonstrate compliance, not merely comply. One organization can hold different roles under different regimes: the Dublin entity is Clearline's GDPR controller and, as Chapter 6 shows, its AI Act provider.

#### Roles and processor contracts

Marcus's role memo put the loan files on a proper footing. The Dublin entity decides why and how Irish applicants' data is used, so it is the controller, and the US parent is its processor under an intra-group agreement. Every processor relationship needs such a binding agreement under Article 28, covering subject matter, duration, nature and purpose, data types and data subjects, security and confidentiality, sub-processing rules, assistance with rights requests and DPIAs, return or deletion at the end, and audit rights. Watch for **processor drift**, where a vendor's continuous training or new features widen processing beyond instructions, and for clauses that let a vendor train on the controller's data. Siobhan's review of Norvane's draft API agreement found exactly that clause. For Irish chats the Dublin entity will be the controller, and Norvane can be its processor only if it does not train on Larkspur's prompts for its own purposes. The finding went on the record, and the fix belongs to the negotiation in Chapter 12.

#### Impact assessments and transfers

A **data protection impact assessment** (DPIA) is required under Article 35 where processing is likely to result in high risk. AI triggers it through automated decisions with legal or similarly significant effects, large-scale special-category data, systematic profiling, monitoring of publicly accessible areas, and vulnerable populations. A DPIA describes the processing and its purpose and the training and operational data at field level. It covers applicable laws, necessity and proportionality, risks from the data subject's perspective, mitigations and any consultation. The AI pitfalls are unclear system boundaries (model versus business logic), framing technical risk instead of human impact, and never revisiting a DPIA once a model keeps learning. Clearline's EU use triggers one through automated decisions and profiling, and it is reviewed at every retrain. Chapter 12 compares the DPIA with the fundamental rights impact assessment and ISO/IEC 42005.

Transfers outside the EEA need an adequacy decision, **standard contractual clauses** (SCCs), binding corporate rules (BCRs) or a derogation. Remote access from outside the EEA counts even if nothing is stored there, so the US team's access to Dublin files was a transfer with or without the copy. After Schrems II, SCCs and BCRs require a **transfer impact assessment** weighing the destination's surveillance law and any supplementary measures. Larkspur chose SCCs, with Marcus's assessment beside them.

#### Rights and automated decisions

Each data subject right meets a distinct problem once data has passed through a model.

| Right | Article | AI challenge |
|---|---|---|
| Access | 15 | Explaining black-box outputs |
| Rectification | 16 | Correcting data baked into weights |
| Erasure | 17 | Deletion from trained models |
| Restriction | 18 | Halting use in continuous learning |
| Object | 21 | Profiling is intrinsic to many systems |
| Automated decisions | 22 | Opt-out and genuine human review |

Article 22 gives individuals the right not to be subject to a decision based solely on automated processing that produces legal effects concerning them or similarly significantly affects them, unless the decision is necessary for a contract, authorized by law, or based on explicit consent. The contract and consent exceptions carry the Article 22(3) minimum safeguards: human intervention, the ability to express one's view and the ability to contest the decision. For the law exception, the authorizing law supplies suitable measures. Either way the intervention must be meaningful rather than rubber-stamping, and Chapter 3 showed why "solely" is the hinge. Two CJEU rulings define the doctrine for AI. SCHUFA (C-634/21, 7 December 2023) holds that a credit bureau's score is itself an Article 22 decision when the lender draws strongly on it, so upstream providers owe the duties. Dun & Bradstreet Austria (C-203/22, 27 February 2025) holds that Article 15(1)(h) requires a concise, intelligible account of the logic actually applied, not an algorithm dump, with claimed trade secrets weighed by the supervisory authority or court.

Both rulings shaped Clearline's Article 22 design memo, which Dana owns. Every non-approval goes to a human underwriter before it takes effect, and auto-approvals rely on the contract exception with its safeguards. Clearline draws on bureau scores, and SCHUFA's logic runs one step further down: if Irish underwriters followed Clearline the way underwriters followed Scorecard 7, about 99 percent of the time, Clearline's score would itself be the decision. The screen and override rules from Chapter 3 are legal controls as well as operational ones. And a declined Dublin applicant who asks why is owed a concise account of the logic applied to her file, not the model's code, which is what Clearline's reason codes are built to support.

#### Breaches and records

Article 33 requires notifying the supervisory authority within 72 hours of awareness of a breach, and Article 34 requires telling affected people without undue delay where risk is high. AI adds vectors that standard DLP misses: training-data leakage through inversion or membership inference (defined in Chapter 3), output regurgitation, model poisoning and silent degradation.

The December paste, recounted in Chapter 3, is the worked example: a Dublin collections agent put an Irish hardship applicant's medical letter into a public chatbot. Siobhan's assessment, recorded inside the 72 hours, treated it as a breach, because health data had gone to a provider Larkspur had no contract with and whose retention it could not control. The Dublin entity notified the Data Protection Commission. Article 34 was the closer call. Siobhan judged the risk to a borrower in hardship high, recorded why, and the applicant was told. On other facts another assessor might decide differently, which is why the reasoning is written down.

Article 30 records of processing and the Article 5(2) accountability duty supply the rest of the paper trail: data flow diagrams, model and system cards, consent and purpose logs, DPIAs and transfer assessments. Larkspur's Article 30 entries for Clearline and Ask Larkspur now link to their lines in the AI Register.

### 4.5 Special Category and Inferred Data

The Dublin files held no ethnicity field and no diagnosis code. That did not settle the special-category question, because AI can reconstruct what was never collected.

Article 9 starts from a ban, not a permission. **Special-category data** may be processed only under a narrow exception. Explicit consent, documented, is the usual one. Others include employment and social protection law, protecting someone's life, substantial public interest, public health, archiving and research with safeguards, and legal claims. The categories are biometrics used for identification, health and genetic data, racial or ethnic origin, religious or philosophical beliefs, political opinions, trade union membership, and sex life or sexual orientation. Jurisdictions differ at the edges: the CPRA adds precise geolocation, and Brazil's LGPD, Canada's PIPEDA and India's DPDP Act track similar lists. Financial data, government identifiers and children's data carry extra protection by context rather than as special categories.

AI meets sensitive data in three ways: deliberately (a health tool using medical records), incidentally (a CV sorter harvesting political affiliation from past activism, a risk any Dublin use of HR's Brightlist screener would have to address), and by inference, when a model predicts ethnicity, health or orientation without being told. The risks are a missing valid basis, discrimination and bias, opacity, and surveillance with its chilling effects. Ask Larkspur shows the incidental route: in hardship conversations customers volunteer illnesses and medical bills, so health data lands in transcripts and needs handling rules, a problem that returns when the hardship idea becomes an agent in Chapter 11.

Inference is the trap. Models deduce religious affiliation from language, sexual orientation from social-graph connections, health conditions from wearable data, and political leaning from browsing history. These inferences can trigger Article 9 even though the attribute was never explicitly collected, and controllers are responsible for downstream inferences. Sensitive-by-proxy features such as postal code, credit history and education can smuggle protected traits back in. Clearline never collects ethnicity, but its candidate features included postal code and education, and Nadia recorded that whatever Clearline infers is Larkspur's responsibility. Chapter 5 takes up the fair-lending question.

Biometric data is especially sensitive because it cannot be changed if compromised. The GDPR's heightened protection attaches only where it is used to uniquely identify a person, so categorization alone (age estimation without identity linkage, say) may fall outside Article 9, though it still carries ethical and discrimination risk. Facial recognition for retail surveillance is the classic trigger. Larkspur runs no biometric systems.

The AI Act adds an overlay. As amended by the 2026 Digital Omnibus on AI, a new Article 4a gives an AI Act basis for special-category data used strictly to detect and correct bias, on top of the GDPR, replacing Article 10(5) (Chapter 6). Its safeguards are strict necessity (no effective alternative data), pseudonymization, access controls, no onward transfer, and deletion and records. Priya asked in February to test Clearline's Irish outcomes against ethnicity data, which Larkspur does not hold. Siobhan advised against collecting anything on the strength of what was then a proposal, and the Dublin bias-testing plan was written against Article 4a once the Omnibus entered into force on 27 July.

### The Privacy Column, Filled In

Privacy law is the floor under every other AI framework, not the ceiling. Purpose limitation, minimization, consent and transparency form the baseline, and the controller's duties turn it into work someone must own. AI strains that floor where it repurposes data and where it infers, and the Dublin files touched both without any AI statute in sight.

By spring the copy had been put right. It was deleted from the US environment and replaced by a pseudonymized extract of the surviving features, processed under the intra-group agreement, the SCCs and the transfer impact assessment. Dana owns the compatibility assessment, the lawful-basis record, the DPIA and the Article 22 memo, and Marcus owns the notice, the role memo and the Norvane finding. Siobhan advised on each and, as her independence requires, owns none of them. Her one decision is the breach assessment Larkspur assigned to her.

When Nadia took the finished column to Marcus, he tapped a different row of the grid. "All of this is Dublin. Take a borrower in Ohio whose application Clearline refers and an underwriter declines. The GDPR doesn't touch her." Her privacy protections are sectoral, with the Fair Credit Reporting Act governing the consumer reports that feed Clearline. Her decline answers to fair-lending law, and what Ask Larkspur tells her answers to consumer-protection law. Neither mentions AI, and both already reach Larkspur, which is where Chapter 5 begins.

### The Record

Siobhan's privacy pass left six entries in the file.

- **Compatibility assessment and lawful-basis record.** Owner: Dana Whitfield, with Siobhan Kelly's written advice. Training Clearline on Dublin files as a separate purpose, on legitimate interest.
- **Layered privacy notice (Dublin).** Owner: Marcus Hale. Discloses the model and human review of every non-approval.
- **Clearline DPIA and Article 22 design memo.** Owner: Dana Whitfield. Reviewed at every retrain.
- **Role and transfer memo.** Owner: Marcus Hale. US parent as processor, SCCs with a transfer impact assessment, and the open Article 28 finding on Norvane.
- **December breach record.** Owner: Siobhan Kelly. The Article 33 notification and Article 34 judgment, with reasons.
- **Article 30 entries.** Owners: Dana Whitfield (Clearline) and Owen Park (Ask Larkspur). Linked to the AI Register.

### Exam Focus

These points belong to competency II.A, whose first indicator names transparency, choice and lawful basis and whose controller obligations name automated decision-making explicitly.

- The six Article 6 bases have no hierarchy, so "consent is the strongest basis" is a distractor.
- Valid consent is freely given, specific, informed, unambiguous, affirmative, revocable and recorded, explicit consent is the higher bar for special-category data, and opt-in is the GDPR default.
- An exam scenario usually breaks one doctrine: a repurposed dataset (purpose), a coerced or bundled consent (choice), or an undisclosed automated decision (notice).
- Training and inference are separate purposes, and secondary use without a compatibility assessment is function creep.
- The framing to remember is "smart data, not big data," along with the rule that if 15 features perform like 50, you use 15.
- Pseudonymization is not anonymization, and Opinion 28/2024 is adopted while Guidelines 02/2026 and 03/2026 are drafts.
- Apply the GDPR as it stands: the Omnibus GDPR amendments, including Article 88c, are proposals, while the Digital Omnibus on AI is enacted and amends the AI Act.
- A vendor that trains on a controller's data can become a joint controller, and remote access from outside the EEA counts as a transfer.
- Article 33 goes to the authority within 72 hours, while Article 34 goes to individuals and only where risk is high.
- SCHUFA makes a bureau score an Article 22 decision when the lender draws strongly on it, and Dun & Bradstreet Austria requires a concise account of the logic applied, not the algorithm.
- Inferred traits can trigger Article 9 even if never collected, and AI Act Article 4a supplements the GDPR rather than replacing it.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): Choice, Consent, Notice, Secondary Use, Deidentification, Differential Privacy, Federated Learning, Privacy, Privacy by Design, Automated Decision-Making (ADM), Data Leak, Data Protection Impact Assessment (DPIA), Data Subject Access Request (DSAR), Dun & Bradstreet Austria Ruling (C-203/22), SCHUFA Ruling (C-634/21), Personally Identifiable Information (PII), Anonymization, Article 22 GDPR, Article 35 GDPR, Article 9 GDPR, Biometric Data, Breach Notification, Cross-Border Data Transfer, Data Controller, Data Minimization, Data Protection Officer (DPO), Data Subject Rights, EDPB Guidelines 03/2026 on Web Scraping, EDPB Opinion 28/2024, General Data Protection Regulation (GDPR), Pseudonymization, Purpose Limitation, Right to Erasure, Special Category Data, Third-Party Processor.

### Further Reading

- [GDPR, Regulation (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj): Articles 5, 6, 12 to 14 and 21 are the notice, consent and purpose-limitation rules
- [EDPB Opinion 28/2024 on AI models and personal data](https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en): the three-step legitimate-interest test, where reasonable expectations carry weight
- [EDPB draft Guidelines 03/2026 on web scraping](https://www.edpb.europa.eu/news/edpb-sheds-light-on-anonymisation-and-web-scraping-for-generative-ai-and-adopts-final-version_en): draft: consent does not scale for scraping, so legitimate interest is the usual basis
- [CJEU SCHUFA, C-634/21 (7 December 2023)](https://eur-lex.europa.eu/eli/C/2024/913/oj/eng): an upstream score the lender draws on strongly is itself an Article 22 decision
- [CJEU Dun & Bradstreet Austria, C-203/22 (27 February 2025)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:62022CJ0203): access to automated-decision logic means an intelligible explanation, with trade secrets weighed by the DPA or court
- [Digital Omnibus on AI, Regulation (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng): new Article 4a: special-category data used strictly for bias detection and correction

## Chapter 5: The Law That Was Already There

*Charlotte, April 2026*

A week before Ask Larkspur was due to go live for US customers, three documents reached Marcus Hale's desk in one afternoon, and he asked Nadia Brennan to read them with him before anyone signed anything.

The first was marketing's launch copy. Its headline promised that "our assistant always gets it right," and a panel for the campaign after Clearline's release said that Clearline "approves 30% more good borrowers." Clearline was still in testing, and Nadia had seen no validation result that said anything of the kind.

The second was a draft Clearline decline letter, adapted from the Scorecard 7 template. Its whole explanation was that the applicant "did not meet our scoring threshold." The third was the intellectual property indemnity in Norvane's agreement. It ran to two lines, and neither said whether it reached anything the model wrote.

"Marketing says the copy is fine because the US has no AI law," Marcus said. He had already pointed out that a borrower in Ohio, referred by Clearline and declined by an underwriter, had no GDPR rights at all. Neither of them had forgotten what Nadia wrote on the January whiteboard: not no law.

She laid the pages side by side. Larkspur was a non-bank lender, so the launch copy answered to section 5 of the Federal Trade Commission Act, to the Consumer Financial Protection Bureau's authority over unfair, deceptive or abusive practices, and to the consumer protection statutes of every state where Larkspur lent. The decline letter answered to the Equal Credit Opportunity Act. The indemnity raised copyright and, behind it, the question of who pays when a product causes harm. The Clearline claim led to fair lending, which would ask whom the model turned away. Four bodies of law had arrived in one afternoon, and none of them mentioned artificial intelligence.

"Then each one needs an owner," Marcus said, "before launch."

Chapter 4 set the privacy baseline. This chapter covers the rest of the general and sectoral law that reaches AI without naming it, and its lesson is the one Nadia drew that afternoon: "no AI law here" never means "no law here." Intellectual property governs training-data copyright, output ownership and trade secrets (5.1). Non-discrimination law reaches disparate impact produced through proxies (5.2). Consumer protection law polices deception and unfairness (5.3). Product liability asks when defective AI is a defective product (5.4). All four apply whether or not any AI-specific law does, and the AI-specific statutes of Chapter 6 sit on top of them.

### 5.1 Intellectual Property

Norvane's indemnity was the natural place to start. Copyright questions about AI arise at **three touchpoints**: the inputs (whether copying the works to train was lawful), the model (whether a trained model contains copies) and the outputs (whether an output infringes, or attracts copyright of its own). At Larkspur, Clearline's inputs were its own loan files, so privacy and fair lending mattered more than copyright. Ask Larkspur's model-level inputs were Norvane's training data, which was Norvane's exposure and Larkspur's diligence question. The outputs were the assistant's answers and any marketing copy drafted with AI tools.

#### Fair use in the United States

US courts test training under the four **fair use** factors: the purpose and character of the use (transformative or duplicative), the nature of the work, the amount used, and the effect on the market, including dilution by competing output. District courts split in 2025. Training was fair use on the records in Bartz v. Anthropic and Kadrey v. Meta (both June 2025), and not fair use in Thomson Reuters v. Ross (February 2025), where the model was trained on a competitor's headnotes to build a market substitute. No US appellate court had ruled as of September 2026, and the Ross appeal was argued in the Third Circuit on 11 June 2026.

Two facts decide these cases. On acquisition, Bartz refused to excuse a permanent central library of pirated books even though training itself was fair use, and the case settled for USD 1.5 billion (final approval 20 July 2026). On market harm, Meta won in Kadrey only because the plaintiffs offered no dilution evidence, so the ruling is not a safe harbor. Larkspur trains no foundation model and stands in neither Anthropic's nor Meta's position, but the cases shaped Marcus's two questions to Norvane: how was the training data acquired, and does the indemnity cover outputs?

#### Human authorship

Outputs raise the question of whether anyone owns them. Thaler v. Perlmutter (D.C. Circuit, 18 March 2025, certiorari denied 2 March 2026) holds that the Copyright Act requires a work authored in the first instance by a human being, so an AI system cannot be the author. The Copyright Office's *Copyright and Artificial Intelligence, Part 2: Copyrightability* (January 2025) adds that prompts alone are not enough, but human selection, arrangement and modification of AI output can be protected. Applicants must disclose AI-generated content and exclude more-than-de-minimis AI material. When marketing drafted a personal-loan brochure with a generative tool, Larkspur could claim copyright only in what its people selected, arranged and changed.

#### Text and data mining in the EU

There is no fair use in the EU. The Directive on Copyright in the Digital Single Market (Directive (EU) 2019/790) instead provides two **text and data mining** (TDM) exceptions. Article 3 covers research organizations and cultural heritage institutions, with no opt-out, and contract terms overriding it are unenforceable. Article 4 covers anyone with lawful access, for any purpose including commercial training, but only if the rightholder has not reserved the right "in an appropriate manner, such as machine-readable means" (Article 4(3)). Under the AI Act, general-purpose AI (GPAI) model providers must honor those reservations and publish a public, sufficiently detailed training-content summary (Article 53(1)(c) and (d)), wherever training happened (recital 106), and open-source models are not exempt from these two points. Chapter 6 covers the rest of the GPAI regime.

When the Dublin team proposed scraping public rate-comparison sites, Article 3 was unavailable, because Larkspur is neither a research organization nor a cultural heritage institution. Article 4 governed, so the team checked each site for a machine-readable opt-out and logged the result. The Article 53 duties sit with Norvane as the GPAI model provider, not with Larkspur.

#### Does the model contain copies?

Courts disagree here, and both leading decisions are on appeal. Getty v. Stability AI (UK High Court, [2025] EWHC 2863 (Ch), 4 November 2025) held that a model which does not store or reproduce the works is not an "infringing copy", and Getty dropped its training and outputs claims. GEMA v. OpenAI (Regional Court Munich I, 11 November 2025) held that lyrics memorized in the model were reproductions in the model and in outputs, that the TDM exception covers building the training corpus and not memorization, and that the operator, not the user, is responsible for outputs from simple prompts. Copyright is territorial, so where training happened matters. For Larkspur this stayed a diligence question: does Norvane filter memorized content from outputs?

#### Trade secrets

**Trade secret** law protects proprietary datasets, architecture, hyperparameters, fine-tuning methods and prompts, but only while they are genuinely secret. Transparency duties collide with that secrecy, which is why the AI Act's training-content summary is meant to be comprehensive in scope rather than technically detailed, taking trade secrets into account. Clearline's feature engineering is a Larkspur secret, yet secrecy excuses neither US adverse-action reasons nor EU technical documentation. Chapter 3's shadow AI carries a second cost here, since pasting internal logic into public chatbots erodes the secrecy that protection depends on. Marcus owned the IP questions and filed them with Norvane's diligence, expecting Norvane to cite its own secrets to limit what it disclosed.

### 5.2 Non-Discrimination Law

The Clearline claim pointed past accuracy. A model that approves more good borrowers can still decline some groups far more often than others, and US law has two theories for that. **Disparate treatment** is intentional discrimination, including the deliberate use of a variable that stands in for a protected class. **Disparate impact** needs no intent: a facially neutral practice that disproportionately harms a protected group is unlawful unless it is justified. AI produces disparate impact readily, through biased training data, proxy variables, feedback loops and sampling bias.

Nadia took the theories to Priya Raman's feature list, which Chapter 4 had already flagged for proxies. ZIP code, education, occupation and length of residence had all been candidates. Keeping a known proxy would be disparate treatment, and neutral features that skewed approval rates would raise disparate impact. The February design review had already dropped ZIP code and the features derived from it (Chapter 8 records that decision), so she turned each remaining candidate into a written question for Priya's team, with every answer to be recorded in Clearline's design baseline.

#### Employment

Title VII writes disparate impact into the statute at section 703(k) (42 U.S.C. 2000e-2(k)) as three steps. The plaintiff shows that a particular practice causes the impact. The employer must then show the practice is job-related and consistent with business necessity. The plaintiff can still win by showing a less discriminatory alternative the employer refuses to adopt. Because the standard is statutory, an executive order or withdrawn agency guidance cannot remove it. Employers are responsible for the selection procedures they use even if a vendor built the tool, and vendor disclaimers do not shield them. So Brightlist's contract, which called its screener "bias-audited" and disclaimed liability, left Larkspur fully responsible as employer. New York City's bias-audit law belongs to Chapter 6.

#### Credit

The **Equal Credit Opportunity Act** (ECOA) prohibits discrimination in credit on protected bases and places two duties on an AI lender: no intentional discrimination or deliberate proxy use, and specific **principal reasons for adverse action** under Regulation B (12 CFR 1002.9). That second duty is an explainability duty. Saying an applicant "failed to achieve a qualifying score" is not enough, because the reasons must relate to and accurately describe the factors actually considered.

The draft letter failed on its face, the opacity problem of Chapter 1 arriving in legal form. Clearline would have to produce principal reasons, fed through the reason codes on the underwriter screen that Chapter 3 designed, and that became a Part III design requirement. Dana Whitfield took ownership of the corrected template. The Ohio borrower is protected here, by ECOA and Regulation B, not by the GDPR.

The **Fair Credit Reporting Act** (FCRA) governs third-party consumer data. A communication bearing on creditworthiness used for credit, insurance or employment can be a **consumer report**, and adverse action based on one triggers a notice with the credit score, the reporting agency's details and dispute rights. Clearline uses bureau data, so its notices must carry all three. An alternative-data broker could itself be a consumer reporting agency.

#### Housing and insurance

The **Fair Housing Act** (FHA) prohibits discrimination in the sale, rental and financing of housing. It reaches discriminatory ad targeting (differential exposure), discriminatory impact, and failure to monitor third-party tools. The Supreme Court recognized FHA disparate impact in Texas Department of Housing and Community Affairs v. Inclusive Communities Project (2015). Mortgage lending is covered by both ECOA and the FHA, so for Larkspur's mortgage book Nadia had the digital ad targeting reviewed for differential exposure and added its ad platforms to the third-party tools under watch.

Insurance has no single federal anti-discrimination statute, because states regulate it. Colorado's SB21-169 was the first law to require insurers to test AI for unfair discrimination and document governance, and proxy variables (postal code, education, occupation, credit history) are the recurring mechanism. Larkspur Insurance Services sells partner carriers' products and prices nothing, so it is not an insurer in this sense. SB21-169 is also a different law from Colorado's 2026 automated-decision statute, SB 26-189, covered in Chapter 6.

#### The federal pullback

Federal agencies stepped back from disparate-impact enforcement across 2025 and 2026, and the steps are easiest to hold as one timeline. The EEOC removed its AI technical assistance on 27 January 2025. Executive Order 14281 (23 April 2025) directed agencies to minimize disparate-impact liability. The CFPB withdrew its AI circulars on 12 May 2025. HUD proposed on 14 January 2026 to remove its discriminatory-effects regulations. A CFPB final rule effective 21 July 2026 states that ECOA does not provide for the effects test, so federal ECOA disparate-impact liability is gone, while intentional discrimination and deliberate proxies remain unlawful. HUD supplemented its proposal on 10 August 2026. Neither HUD action is final, and the FHA theory does not depend on HUD's rule, so the FHA route survives the Regulation B change.

When the rule took effect, Marcus asked whether Clearline's disparate-impact testing could stop. Nadia's written answer carries the governance lesson. Federal agencies had stepped back, but intentional and proxy discrimination remained unlawful, and the statutes, private plaintiffs, states and the FHA route for the mortgage book all remained, while the Dublin book answered to EU law. So Larkspur would keep testing for disparate impact and keep documenting its proxy review. Because Larkspur does not collect race or ethnicity for personal loans (Regulation B generally prohibits asking, except for mortgage monitoring and self-testing), the testing would estimate group membership with proxy methods rather than by asking. She attached a one-page timeline for the board and updated it in August after HUD's supplement.

### 5.3 Consumer Protection

"Always gets it right" was the easiest call of the April afternoon, under the broadest law in the chapter. Section 5(a) of the FTC Act declares unfair or deceptive acts or practices in or affecting commerce unlawful (15 U.S.C. 45(a)(1)). An **unfair** act causes or is likely to cause substantial injury that is not reasonably avoidable and not outweighed by benefits (section 45(n)). A **deceptive** act misleads, or is likely to mislead, a reasonable consumer through a material representation or omission. No intent is required, which makes section 5 broader than fraud.

Larkspur had no evidence that its assistant always got anything right, so the line was struck as a deceptive representation without substantiation. Nadia noted in the file that a false statement to a customer can be deceptive with no intent at all, a point Part IV would test.

Every state also has a mini-FTC Act, a **UDAP** law. California's Unfair Competition Law reaches unlawful, unfair or fraudulent acts, Massachusetts Chapter 93A allows triple damages for deceptive conduct, and New York has General Business Law section 349. State attorneys general enforce them alongside the FTC. Larkspur lends in all three states, so they joined the exposure map.

#### AI claims

The FTC's AI actions have targeted deception about capability. Operation AI Comply (September 2024) brought five actions, including DoNotPay's "robot lawyer" claims, on the line that there is no AI exemption from the laws on the books. Workado (April 2025) was ordered to substantiate its claim that its AI content detector was 98% accurate. On 22 December 2025 the FTC set aside its Rytr order, holding that the complaint did not support a section 5 violation and that the order burdened AI innovation, but said it would still pursue AI used to deceive consumers. The 2026 posture targets fraud and tangible harm rather than tools that could be misused, and deception about AI remains grounds for enforcement.

"Approves 30% more good borrowers" was a performance claim, so after Workado it needed evidence: Priya's validation results would back it or it would be cut. The Rytr set-aside narrowed what the FTC chases, not the duty to substantiate. Marcus opened a claims substantiation log and parked the line there.

#### Dark patterns and synthetic media

**Dark patterns** are interface designs that trick, coerce or confuse: hidden opt-outs, confirm-shaming, deceptively labeled toggles, and AI-powered real-time A/B testing that reduces clarity. AI worsens them by personalizing manipulation at scale, adapting content to behavioral predictions. Owen Park wanted Ask Larkspur to set up payment plans one day, so Nadia set a gate that Owen would own: no hardship flow could steer distressed borrowers away from hardship options or toward costlier plans, and any A/B test of it would be reviewed for clarity first.

Synthetic media brings fabricated endorsements, false evidence, impersonation scams and non-consensual intimate images. The US Take It Down Act (2025) criminalizes distributing non-consensual intimate images, including AI deepfakes. Larkspur has no scenario that engages it. The FTC's Consumer Reviews and Testimonials Rule (final, August 2024) bans creating, selling or buying reviews that misrepresent that they come from someone who does not exist, such as AI-generated fake reviews, and lets the FTC seek civil penalties against knowing violators. That spring Owen's contact centre saw attempts to take over accounts with cloned customer voices, a fraud-control problem, and an agency offering marketing AI-generated testimonials was turned away under the reviews rule.

#### Four habits

Undisclosed AI interaction in legal, health, spiritual or financial contexts can itself be a material omission. Four compliance habits follow, and Owen adopted them as Ask Larkspur's US launch checklist:

1. Disclose that a user is interacting with AI, prominently and in plain language, at the time of use.
2. Substantiate every performance claim.
3. Provide accessible explanations and a route to a human.
4. Monitor for hallucinations, false positives and manipulative behavior.

The route to a human led to an agent in Owen's team. For Irish customers the EU AI Act makes disclosure a statutory duty, which Chapter 6 assigns.

### 5.4 Product Liability

The indemnity's second question, who pays when a product causes harm, is where Larkspur's exposure proved thinnest. Product liability recognizes three defect theories. A **design defect** means the product was made as intended but its design is unreasonably dangerous. A **manufacturing defect** means it deviates from the intended design. A **failure to warn** (marketing defect) means it lacks adequate instructions or warnings. These run through **strict liability** (prove defect and resulting harm, with no negligence needed), **negligence** (prove a failure of reasonable care) or **breach of warranty**. Defect is often judged by a **risk-utility test**: was the risk outweighed by the utility, and could a reasonable alternative design have reduced it?

#### The revised Product Liability Directive

The EU's revised Product Liability Directive (PLD), Directive (EU) 2024/2853, was adopted on 23 October 2024 and entered into force on 8 December 2024. Member States must transpose it by 9 December 2026, and it applies to products placed on the market or put into service after that date. Liability is no-fault: the claimant proves defect, damage and causation. It covers death and personal injury, including medically recognized psychological harm, property damage, and the destruction or corruption of non-professional data. Once a claim is plausible, a court can order disclosure of evidence.

**Presumptions** ease proof. Defect is presumed if the defendant fails to disclose, the product breaches mandatory safety requirements, or there is an obvious malfunction. Causation is presumed if the damage is typical of the defect. Either or both are presumed where technical or scientific complexity makes proof excessively difficult, with machine learning a named example. All are rebuttable. Non-commercial free and open-source software is excluded, but a manufacturer that integrates it is liable for it. Liability to the injured person cannot be contracted out.

#### Is AI a product?

The traditional US view treats software as a service governed by licensing agreements. An emerging view treats embedded software that controls hardware, or that replaces human judgment, as part of a product system. The PLD settles the point for the EU: software, including AI, is a product "irrespective of the mode of its supply or usage", whether on a device, over a network or as software-as-a-service, and AI system providers under the AI Act are treated as manufacturers. Norvane's model, reached over an API, is a product, and Norvane is its manufacturer.

#### Defect in an adaptive system

Adaptive systems make defect hard to locate. Behavior is dynamic and context-sensitive, models drift after deployment, and outputs are probabilistic rather than deterministic. The 2018 Uber autonomous-vehicle fatality shows the difficulty: was the defect in the algorithm, the sensor configuration or the testing protocol? The PLD's defect test expressly weighs "the effect on the product of any ability to continue to learn or acquire new features after it is placed on the market". Clearline will be retrained and can drift, which is an analogy for Chapter 10's monitoring, not a liability claim.

Larkspur has no system that could physically injure anyone. Clearline's harms, a wrongful decline or a bad approval, are economic and outside the PLD's damage categories, which is why a lender's AI exposure concentrates in fair lending and consumer protection. Marcus took two points into the Dublin contract work. The bar on contracting out protects injured persons, so Larkspur and Norvane can still allocate cost between themselves through an indemnity. And the 9 December 2026 date decides which products fall under the new regime.

#### The withdrawn AI Liability Directive

The Commission proposed a fault-based AI Liability Directive (AILD) in 2022. It was withdrawn, and the withdrawal was published in OJ C/2025/5423 on 6 October 2025. There is no EU-level fault-based AI liability regime: victims rely on the revised PLD for defective products and national tort law for fault. Nadia found Marcus's 2023 memo on EU AI liability still relying on the AILD's presumptions, and he rewrote it around the withdrawal, the PLD and national tort law.

### Owners for Laws That Never Say AI

The four bodies of law share one habit. Each attaches to something Larkspur already did (lending, advertising, hiring, buying software) rather than to the technology, so their owners were the people who already owned those activities. Fair-lending duties, from proxy review to adverse-action reasons and FCRA notices, sat with Dana as Clearline's business owner, with Priya's team producing the evidence. Consumer protection sat with Owen for what Ask Larkspur says and with Marcus for what marketing claims. Title VII sat with HR for Brightlist, and copyright and liability ran through procurement and Marcus's vendor terms. Nadia owned none of it, which was the point of her job.

Ask Larkspur went live on schedule with a disclosure in its first line and a human one click away. The 30% claim stayed in the log until Priya's validation could speak for it, and the new decline letter waited on reason codes Clearline did not yet produce.

Existing law covered far more than marketing had assumed, but not everything. In Dublin, Clearline was about to become a high-risk system under the EU AI Act, Ask Larkspur would owe transparency duties from 2 August, and South Korea had had an AI statute of its own since January. Those laws do mention AI, and the first thing they ask is a question the older law never did: which entity is the provider?

### The Record

The April review and the July memo left six artifacts in Larkspur's files.

- **Proxy-review question list.** Owner: Priya Raman. A written question for each remaining candidate proxy feature, with the answers recorded in Clearline's design baseline (Chapter 8).
- **Corrected adverse-action template.** Owner: Dana Whitfield. Principal reasons that describe the factors actually considered, plus the FCRA content.
- **Claims substantiation log.** Owner: Marcus Hale. Each AI performance claim, its evidence, and whether it was approved or cut.
- **July disparate-impact testing memo.** Owner: Nadia Brennan. Why testing continues after the CFPB rule, with the board's pullback timeline.
- **Ask Larkspur US launch checklist.** Owner: Owen Park. The four habits, plus the hardship-flow review gate.
- **Updated EU liability memo.** Owner: Marcus Hale. The revised PLD and national tort law in place of the withdrawn AILD.

### Exam Focus

These distinctions and traps recur in questions on how existing law applies to AI.

- Copyright asks a different question at each of the three touchpoints: lawful copying for training (inputs), whether the model contains copies (model), and infringement or ownership (outputs).
- Applying the four fair-use factors, Bartz and Kadrey found training fair use and Ross did not, with acquisition and market harm deciding the outcomes, and Kadrey is no safe harbor because Meta won only for lack of dilution evidence.
- Under Thaler an AI system cannot be an author, prompts alone are not enough, and human selection, arrangement and modification of AI output can be protected.
- The EU has no fair use: DSM Article 3 (research and cultural heritage, no opt-out) differs from Article 4 (anyone, commercial use allowed, subject to a machine-readable opt-out), and Getty (model not a copy) conflicts with GEMA (memorization is reproduction).
- Disparate treatment requires intent, including deliberate proxy use, while disparate impact needs none, and Title VII's three steps are causation, business necessity and a refused less discriminatory alternative.
- "EO 14281 eliminated disparate-impact liability" is a distractor, because an executive order cannot remove a standard written into Title VII.
- Under ECOA and Regulation B, "failed to achieve a qualifying score" is not a sufficient adverse-action reason, and an FCRA-based adverse action requires notice, the score, the agency's details and dispute rights.
- The CFPB's Regulation B rule (effective 21 July 2026) states that ECOA does not provide for the effects test, but FHA disparate impact survives for mortgage lending, and HUD's 2026 proposals are not final.
- Unfair acts cause substantial, unavoidable injury not outweighed by benefits, deceptive acts mislead through material representations or omissions, and neither requires intent.
- The four consumer-protection habits are to disclose AI interaction at the time of use, substantiate every performance claim, offer explanations and a route to a human, and monitor for hallucinations, false positives and manipulation.
- The three defect theories (design, manufacturing, failure to warn) differ from the three standards (strict liability, negligence, breach of warranty), and the PLD applies to products placed on the market after 9 December 2026, with rebuttable presumptions and no cover for purely economic harm.
- Any answer relying on an "AI Liability Directive presumption" is wrong, because the AILD was withdrawn in October 2025.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): Copyright, Fair Use, Fair Use (AI Training), Human Authorship Requirement, Intellectual Property, Machine-Readable Opt-Out (TDM), Patent, Security, Text and Data Mining Exception, Trade Secret, Adverse Action Notice (ECOA/Reg B), Disparate Impact, Disparate Treatment, Executive Order 14281, Non-Discrimination Law, Consumer Protection, AI Liability Directive (Withdrawn), Design Defect, Product Liability, Product Liability Directive (EU) 2024/2853.

### Further Reading

- [Directive (EU) 2019/790 (DSM Directive)](https://eur-lex.europa.eu/eli/dir/2019/790/oj): the Article 3 and Article 4 text and data mining exceptions and the Article 4(3) opt-out
- [US Copyright Office, Copyright and Artificial Intelligence](https://www.copyright.gov/ai/): Parts 1 to 3 on digital replicas, copyrightability and generative AI training
- [Thaler v. Perlmutter, D.C. Cir. opinion (18 March 2025)](https://media.cadc.uscourts.gov/opinions/docs/2025/03/23-5233.pdf): the human authorship requirement; certiorari denied 2 March 2026
- [Getty Images v. Stability AI [2025] EWHC 2863 (Ch)](https://www.judiciary.uk/judgments/getty-images-v-stability-ai/): model weights that store no works are not an infringing copy; on appeal
- [Regulation (EU) 2024/1689 (EU AI Act), Article 53](https://eur-lex.europa.eu/eli/reg/2024/1689/oj): the GPAI copyright policy and training-content summary duties
- [Title VII section 703(k), 42 U.S.C. 2000e-2](https://www.law.cornell.edu/uscode/text/42/2000e-2): the statutory disparate-impact standard that an executive order cannot remove
- [Executive Order 14281 (90 FR 17537)](https://www.federalregister.gov/documents/2025/04/28/2025-07378/restoring-equality-of-opportunity-and-meritocracy): the April 2025 order to deprioritise disparate-impact enforcement
- [CFPB Regulation B final rule (91 FR 21620)](https://www.federalregister.gov/documents/2026/04/22/2026-07804/equal-credit-opportunity-act-regulation-b): effective 21 July 2026: ECOA does not provide for the effects test
- [CFPB withdrawn guidance](https://www.consumerfinance.gov/compliance/guidance/withdrawn-guidance/): the AI adverse-action and algorithmic-score circulars withdrawn on 12 May 2025
- [FTC Act section 5, 15 U.S.C. 45](https://www.law.cornell.edu/uscode/text/15/45): the unfair-or-deceptive standard, with the unfairness test at section 45(n)
- [FTC, Operation AI Comply (25 September 2024)](https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes): the crackdown on deceptive AI claims and schemes, including DoNotPay
- [FTC, Workado order (28 April 2025)](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-order-requires-workado-back-artificial-intelligence-detection-claims): unsubstantiated AI accuracy claims must be backed by evidence
- [FTC, Rytr order set aside (22 December 2025)](https://www.ftc.gov/news-events/news/press-releases/2025/12/ftc-reopens-sets-aside-rytr-final-order-response-trump-administrations-ai-action-plan): the theory was set aside; deception about AI remains enforceable
- [Directive (EU) 2024/2853 (revised Product Liability Directive)](https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng): software and AI are products; no-fault liability; presumptions; transpose by 9 December 2026
- [AI Liability Directive withdrawal, OJ C/2025/5423](https://eur-lex.europa.eu/eli/C/2025/5423/oj): the fault-based proposal was formally withdrawn on 6 October 2025
- [European Parliament Legislative Train, AI liability directive](https://www.europarl.europa.eu/legislative-train/theme-a-europe-fit-for-the-digital-age/file-ai-liability-directive): the procedural history of the withdrawal

## Chapter 6: The Law Written for AI

*Dublin, May 2026*

Siobhan Kelly had printed the template. It was the cover page of a conformity file for Clearline, which the Dublin entity planned to switch on for Irish applicants in September, and it lay on the meeting-room table between two draft go-live plans, one for Clearline and one for Ask Larkspur, due to start answering Irish customers in August. Siobhan had pencilled in most of the page: intended purpose, Annex reference, model version. The top field was empty.

"Whose name goes here?" she asked.

Nadia Brennan saw why the question was harder than it looked. Priya Raman's team in Charlotte had built Clearline. The Dublin entity's underwriters would use it. Larkspur Financial Ireland DAC was the lender and would answer to the relevant market surveillance authority, yet it had not written a line of the model's code. Ask Larkspur had the opposite shape: Larkspur had built the branded chat, but the model that wrote the answers was Norvane's.

Under the template lay an email forwarded from Owen Park's contact centre. A vendor was offering voice analytics that would score the emotional state of call-centre agents during calls, pitched as a wellbeing tool. Nadia moved it to the top of the pile.

The legal grid she and Marcus Hale had drawn in January, systems down the side and jurisdictions across the top, had filled up through the privacy and existing-law passes. Its entries for AI-specific law were mostly blank, and they would hold more dates than any others.

"The Act wants a legal person here," Siobhan said, tapping the field. "Not a group, not a team. Someone who carries the duties."

Nadia wrote across a fresh page what the week had to settle: which AI-specific law reached which system, from which date, and which Larkspur entity held each duty.

Chapter 5 showed that "no AI law here" never means "no law here". This chapter turns to the law that names AI. Its anchor is the EU AI Act, which sorts systems into risk tiers (prohibited, high, limited and minimal), places a heavy compliance chain on high-risk systems, imposes transparency duties, runs a separate regime for general-purpose AI, assigns obligations by role and backs them with GDPR-scale penalties. Beside it sit South Korea's AI Basic Act and the federal and state AI laws of the United States that apply to private-sector organizations.

The status discipline of Chapter 4 governs what follows, because the AI Act now exists in two versions. **As enacted**, it is Regulation (EU) 2024/1689. **As amended** by the **Digital Omnibus on AI**, Regulation (EU) 2026/1744, in force 27 July 2026, it has moved high-risk dates and simplified several duties. Where the versions differ, this chapter says which it means, and section 6.5 sets the two calendars side by side before the chapter turns to Korea and the United States.

### 6.1 Sorting Systems into Tiers

Siobhan's field could not be filled until each system had a tier, because the Act's duties follow classification. The Act sorts AI systems into four tiers by the risk their use poses.

| Tier | Test | Consequence |
|---|---|---|
| Prohibited | Unacceptable risk to rights or safety | Banned outright (Article 5) |
| High-risk | Annex I safety components, or Annex III use cases | The full Chapter III obligations chain |
| Limited | Interaction with users, or synthetic content | Transparency duties (Article 50) |
| Minimal | Negligible risk | No new obligations, voluntary codes encouraged |

The tiers attach to uses rather than technologies, so one model can sit in different tiers depending on the job it does.

#### Prohibited practices

As enacted, Article 5(1) bans eight practices: subliminal or purposefully manipulative techniques that distort behaviour; exploitation of vulnerabilities arising from age, disability or social or economic situation; **social scoring** by public or private actors; individual criminal-offence risk prediction based solely on profiling; untargeted scraping of facial images to build recognition databases; **emotion recognition** in workplaces and educational institutions; biometric categorisation by sensitive traits; and **real-time remote biometric identification** in publicly accessible spaces, with narrow law-enforcement exceptions under judicial or independent authorisation. As amended, Article 5(1)(ba) and (bb) add two bans from 2 December 2026: AI that generates or manipulates realistic intimate or sexual imagery of an identifiable person without explicit consent ("nudification"), and AI that generates child sexual abuse material. They catch a provider only if that is the system's intended purpose or a foreseeable outcome it lacks reasonable safeguards against. The count is eight as enacted and ten as amended.

Larkspur's screen rejected the voice analytics pitch at once, because scoring agents' emotions is workplace emotion recognition, and the council recorded why. Every other prohibition, including December's two, was screened "none apply" and recorded too. Outside workplaces and schools, emotion recognition is not banned but carries a deployer disclosure duty under Article 50.

#### Two routes to high-risk

A system becomes **high-risk** by one of two routes. Under **Annex I**, it is a safety component of a product covered by EU harmonisation law, or is itself such a product: machinery, medical devices, vehicles and so on. Under **Annex III**, it is used in a listed area: biometrics; critical infrastructure (energy, water, transport); education and vocational training; employment, worker management and access to self-employment; access to essential private and public services, including credit scoring and welfare; law enforcement; migration, asylum and border control; and the administration of justice and democratic processes. Annex III has a filter. Article 6(3) lets a listed system escape the tier where it poses no significant risk, but the derogation is never available where the system profiles natural persons.

Clearline assesses the creditworthiness of natural persons, which is Annex III point 5(b), and because it profiles applicants, Article 6(3) offers no exit. The fraud rules engine, which Chapter 1 logged as hand-coded rules rather than AI, would escape in any case, because fraud detection is excluded from point 5(b).

#### Limited risk and Article 50

Article 50 splits the transparency duties by role. Providers must design chatbots to tell people they are interacting with AI (Article 50(1)) and must mark synthetic output in machine-readable form (Article 50(2)). Deployers must disclose deepfakes (Article 50(4)), their use of emotion recognition and biometric categorisation, and AI-generated text published on matters of public interest unless a human reviewed it under editorial responsibility. These duties apply from 2 August 2026, and generative systems already on the market by then have until 2 December 2026 for marking (Article 111(4)). An opt-out or human alternative is good practice, but Article 50 does not require one.

Ask Larkspur is limited risk and never high-risk, and Marcus's role memo settled whose Article 50(1) duty it carries. As a feature toggle inside Norvane's platform, the assistant was Norvane's product. Once Larkspur built its own branded chat calling Norvane's model through an API, it became a **downstream provider**, which Article 3(68) defines as the provider of an AI system that integrates a general-purpose AI model, whether its own or another party's. As provider and deployer of Ask Larkspur, Larkspur owns the disclosure duty. Whether Article 50(2) marking applies to plain-text answers, the memo left open. Owen's "talk to a human" button stayed as good practice.

#### Minimal risk and reclassification

Spam filters, recommendation engines and grammar checkers are minimal risk, with no new obligations and voluntary codes encouraged. Because the tier depends on context, a minimal or limited system can become high-risk when its use changes, so continuous monitoring and reassessment are advised. Owen's idea of letting the assistant set up hardship payment plans one day is Larkspur's example: if that scope moved toward judging ability to repay, Larkspur as provider would have to reassess whether the system now evaluated creditworthiness.

### 6.2 What High-Risk Means in Practice

Classification told Siobhan what her file was for, but not whose name went on it. That depends on the duties the Act attaches to a high-risk system and on which operator carries them.

A high-risk **provider** owes ten things, before placing the system on the market and across its life. Part III applies them to Clearline, so here is the law itself:

1. A documented, ongoing **risk-management system** that identifies known and foreseeable risks, including reasonably foreseeable misuse, evaluates and monitors them across the lifecycle, and applies control measures.
2. **Data governance**: training, validation and testing datasets that are relevant, sufficiently representative and as free from errors and bias as possible, with documented lineage, version control and compliance with privacy law.
3. **Technical documentation** of architecture, algorithms, training methodologies, and risk-management and human-oversight protocols.
4. **Automatic logging** that supports post-market monitoring, incident investigation and audit.
5. **Instructions for use** giving intended purpose and limitations, human-oversight responsibilities, performance metrics and conditions of use, and contact points.
6. **Human oversight** designed for anomaly detection, effective override or shut-off, and human-in-the-loop review of consequential decisions.
7. **Accuracy, robustness and cybersecurity**, declared in the instructions.
8. A **quality management system**: documented policies, corrective and preventive action, documentation control, monitoring and reporting, and resource and training management.
9. A **conformity assessment**, **CE marking** once conformity is confirmed, and registration in the EU database.
10. **Post-market monitoring** with serious-incident reporting.

Oversight must be genuine rather than rubber-stamping, which is why Chapter 3's oversight standard, written after underwriters were found following Scorecard 7's referrals about 99% of the time, shaped Clearline's review screen. Conformity assessment is by internal control in some cases and by a notified body in others. For Annex III points 2 to 8, which include credit scoring, it is internal control without a notified body (Article 43(2)), so Larkspur prepares Clearline's file itself.

Chapter 2 separated the BOK's task labels from the legal categories. The Act's four operator roles are these.

| Role | Who it is | Core duties |
|---|---|---|
| Provider | Places the system on the market or puts it into service under its own name | The full chain above |
| Deployer | Uses the system under its authority | Use per instructions, human oversight in use, input-data quality, log retention, incident reporting |
| Importer | Places a non-EU provider's system on the EU market | Verify CE marking and documentation, register, cooperate with authorities |
| Distributor | Makes systems available without modifying them | Verify CE marking and contacts, suspend if non-compliance is suspected |

Roles shift. A deployer that substantially modifies a high-risk system becomes its provider and inherits the full chain. An organization that builds its own application on a general-purpose AI model becomes provider of that AI system, as Larkspur did with Ask Larkspur, but never provider of the model. An importer is liable if it places a non-compliant system on the market, and Articles 22 to 24 set the duties of authorised representatives, importers and distributors. One organization can hold several roles, and cloud and AI-as-a-Service arrangements blur them, so best practice is a written **AI role assessment** for each system. The same logic led Marcus, in Chapter 2, to reject rebranding Brightlist's screener as "Larkspur TalentMatch", which would have made Larkspur its provider.

Marcus framed Clearline's assessment as two options. Under Option A, the Dublin entity has Clearline developed by group data science and puts it into service under its own name (Article 3(3)), becoming provider and deployer. Under Option B, the US parent is a non-EU provider with an authorised representative in the Union, and the Dublin entity is the deployer. The council chose Option A and recorded why: the entity that lends in Ireland, employs the underwriters and answers to the Irish authorities should hold the file. Siobhan wrote "Larkspur Financial Ireland DAC" in the empty field. Brightlist, if Dublin HR ever used it, would be an Annex III point 4(a) employment system with Brightlist as provider and Larkspur as deployer.

When the CISO asked whether Larkspur's ISO 27001 certification covered all this, Nadia said it did not. ISO 31000, ISO 23894 and ISO 27001 are useful guidance but no substitute for the risk-management and QMS requirements. The QMS standard for Article 17 is EN 18286:2026, and it gives a **presumption of conformity** only once cited in the Official Journal. Chapter 7 returns to what standards can prove.

### 6.3 General-Purpose AI

Ask Larkspur's memo raised a second question. The capability inside the assistant is Norvane's, and the Act regulates model makers under a separate regime.

A **general-purpose AI model** (GPAI model) can serve multiple intended purposes and be integrated into a variety of downstream systems or applications. Large language models, vision foundation models such as CLIP or SAM, and multimodal models are the usual examples. A **foundation model** is the base technical artifact, while GPAI describes usage and availability across applications. The Commission's July 2025 guidelines treat a model trained with more than 10^23 FLOP that can generate language, images or video as indicatively general-purpose. (FLOP, the FLOPs of Korean sources and the "operations" of US state laws all count the floating-point operations used in training.)

Every GPAI provider owes four things under Article 53: technical documentation of the model, its training and testing process and its capabilities (Article 53(1)(a), Annex XI); information that lets downstream providers understand its capabilities and limits and comply (Article 53(1)(b), Annex XII); a **copyright policy** honouring Article 4(3) text-and-data-mining reservations "including through state-of-the-art technologies" (Article 53(1)(c)); and a public, sufficiently detailed **training content summary** on the AI Office template (Article 53(1)(d)). Non-EU providers must also appoint an EU authorised representative (Article 54). The copyright policy and training summary apply regardless of where training happened (recital 106) and bind open-source models too, because Article 53(2) lifts only points (a) and (b), and nothing at all where the model has systemic risk.

#### Systemic risk

Cumulative training compute above 10^25 FLOP creates a rebuttable presumption of high-impact capabilities, and therefore of **systemic risk** (Article 51(2)). The Commission can also designate a model on the Annex XIII criteria: parameters, data size, compute, modalities, benchmarks, autonomy and tool access, and reach, presumed at 10,000 or more registered EU business users. The provider must notify the Commission within two weeks of meeting the threshold or knowing it will (Article 52(1)). Article 55(1) then adds model evaluation including adversarial testing (point (a)), assessment and mitigation of systemic risks at Union level (point (b)), tracking and reporting serious incidents to the AI Office (point (c)), and adequate cybersecurity for the model and its infrastructure (point (d)). Adversarial testing must be conducted and documented, not published, though the AI Office can demand information and access. External audits, public red-team reports and researcher APIs are extras from the Code of Practice described below, not Article 55 duties.

#### Timing and downstream duties

GPAI obligations have applied since 2 August 2025. The Commission's enforcement powers, including Article 101 fines of up to EUR 15 million or 3%, apply from 2 August 2026. Models placed on the market before 2 August 2025 have until 2 August 2027 (Article 111(3)), and the Commission's guidelines excuse such legacy providers from retraining or "unlearning" where that is impossible or disproportionate, if they disclose and justify it. The Omnibus changed none of these dates. Organizations that integrate a GPAI model must verify its conformity with its published documentation, assess whether their use raises the risk classification and ensure transparency toward end users, and a deployer remains responsible for its own compliance even when the model is open-source.

Norvane, then, is the GPAI model provider, owing Article 53 and, if its model crosses the presumption, Article 55. Retrieval and prompt design do not make Larkspur a model provider, though Marcus noted that fine-tuning could change the analysis, and since Larkspur trains no model the compute thresholds never reach it. Its downstream duties became a Norvane diligence file: the Annex XII information, the training summary, the copyright policy and a check that Larkspur's use did not change the classification.

#### The GPAI Code of Practice

The file's last question came from Article 56, which lets the Commission facilitate codes of practice for the GPAI obligations. The **GPAI Code of Practice** was published on 10 July 2025 and its adequacy confirmed on 1 August 2025. It is voluntary. Adhering to a code the Commission has assessed as adequate gives a provider a straightforward way to demonstrate compliance with Articles 53 and 55, and the Commission focuses enforcement on monitoring adherence. The Transparency chapter covers documentation and information for downstream providers. The Copyright chapter commits signatories to respect robots.txt and other appropriate machine-readable protocols and to honour Article 4(3) reservations, supporting the Article 53(1)(c) policy. The Safety and Security chapter, aimed at systemic-risk models, supports the Article 55 duties of evaluation, risk mitigation, incident reporting and cybersecurity.

The Commission's list, updated 31 July 2026, shows 21 providers signed to the full Code, including Amazon, Anthropic, Google, IBM, Microsoft, Mistral AI and OpenAI, plus EU firms such as Aleph Alpha. xAI signed only the Safety and Security chapter, so it must demonstrate Transparency and Copyright compliance by alternative adequate means. Meta does not appear on the list. Signatories run a Signatory Taskforce chaired by the AI Office.

Adherence is evidence of compliance. A presumption of conformity is a different thing, which Articles 53(4) and 55(2) reserve for harmonised standards. Non-signatories must demonstrate "alternative adequate means", for example through a gap analysis, and can expect more information requests, while commitments kept under an adequate code can count as a mitigating factor when fines are set. The Omnibus left Article 53(1)(c) and (d) and the Code's role unchanged. Separately, a Code of Practice on Marking and Labelling, also called the Code of Practice on Transparency of AI-generated Content, was final and assessed adequate on 10 June 2026, with about 190 signatories by the end of July 2026, and the Commission published Article 50 transparency guidelines on 20 July 2026.

Larkspur, not being a GPAI provider, does not sign the GPAI Code. Its file asks whether Norvane has signed, which chapters, and what alternative adequate means cover any gap. The Marking and Labelling Code and the Article 50 guidelines became Nadia's references for implementing Ask Larkspur's disclosure, with text marking still open in Marcus's memo.

### 6.4 Enforcement and Penalties

With the duties mapped, Tom Ashby asked the next question: if Larkspur got this wrong, who would come asking, and at what cost?

The **European AI Office**, inside the Commission, supervises and enforces the GPAI obligations under an exclusive power in Article 88, issues guidance and runs the codes of practice. **National competent authorities**, one or more per member state, conduct market surveillance for every AI system not reserved to the AI Office, with power to investigate, inspect, order and penalise. The European Data Protection Supervisor covers AI systems used by EU institutions, bodies and agencies. As amended, the AI Office is also exclusively competent for AI systems built on a GPAI model by the same provider or group (with carve-outs for Annex I products, critical infrastructure, certain law-enforcement, border and financial systems, and justice) and for AI in very large online platforms and search engines designated under the Digital Services Act. It gained investigation, inspection, commitment and fining procedures (Articles 75a to 75d) and can run a Union-level sandbox. Clearline therefore falls to the relevant Irish market surveillance authority, and Ask Larkspur, built by Larkspur rather than by Norvane's group, stays outside the AI Office's new competence.

Authorities can require access to technical documentation, carry out unannounced inspections including digital audits, mandate and verify corrective actions, suspend or prohibit marketing, require withdrawal or recall, direct updates or relabelling, and require notification of affected users. Individuals affected by non-compliant AI can complain to a market surveillance authority, and civil liability runs through national law and the revised product liability regime covered in Chapter 5. Article 87 applies the EU Whistleblower Directive to AI Act reports, and the AI Office runs a whistleblower tool. Nadia had the Dublin speak-up channel updated to tell staff that the protection applies.

Fines follow a three-step ladder, and each ceiling is the higher of two figures. Prohibited practices reach EUR 35 million or 7% of global annual turnover. Most other obligations, including the Commission's GPAI fines under Article 101, reach EUR 15 million or 3%. Incorrect, incomplete or misleading information to authorities reaches EUR 7.5 million or 1%. SMEs and start-ups get the lower figure on every tier. As amended, small mid-caps get it on the two lower tiers only, not for prohibited practices. Authorities weigh the nature and significance of the breach, intent or negligence, history and cooperation, and voluntary disclosure and cooperation can mitigate. No AI Act fine had been publicly announced as of September 2026, and the AI Office says its first tool is "technical compliance dialogues".

Nadia's briefing placed a Clearline breach in the EUR 15 million tier, a misleading answer to a regulator in the EUR 7.5 million tier, and the rejected voice analytics idea at the top. She claimed no SME or small mid-cap relief, since Larkspur's status had not been assessed, and expected a first contact to be a dialogue, not a fine.

The Act's reach explains why a US group has to care. It covers non-EU entities that place AI systems on the EU market, make them available to EU users, deploy systems outside the EU that affect people in the EU, or develop GPAI models integrated into EU-facing applications. Non-EU providers must appoint an EU-based representative and meet the same conformity, transparency and documentation duties, which is what Option B would have asked of the US parent.

### 6.5 The Timeline and the Omnibus

A fine matters only once its duty applies, and the Act phases in over several years. Knowing which obligations start when is what turns a list of duties into a compliance plan.

| Date | As enacted (2024/1689) | As amended (2026/1744) |
|---|---|---|
| 12 Jul 2024 | Published in the Official Journal | Same |
| 1 Aug 2024 | Entry into force, no obligations yet | Same |
| 2 Feb 2025 | Prohibitions (eight) and AI literacy apply | Same, with softened literacy wording from 27 Jul 2026 |
| 2 May 2025 | GPAI codes of practice due | GPAI Code published 10 Jul 2025, adequacy confirmed 1 Aug 2025 |
| 2 Aug 2025 | GPAI obligations, governance bodies, penalty regime (except Article 101), notified bodies | Same |
| 27 Jul 2026 | No milestone | Omnibus enters into force |
| 2 Aug 2026 | Annex III high-risk, Article 50 transparency, Commission GPAI enforcement including Article 101 | Article 50 and GPAI enforcement only, with high-risk and sandboxes moved |
| 2 Dec 2026 | No milestone | Two new Article 5 prohibitions, Article 50(2) marking deadline for legacy generative systems |
| 2 Aug 2027 | Annex I high-risk, legacy GPAI deadline | Legacy GPAI deadline, national sandboxes operational, Annex I moves to 2028 |
| 2 Dec 2027 | No milestone | Annex III high-risk rules (Chapter III sections 1 to 3, including deployer duties and FRIAs) |
| 2 Aug 2028 | No milestone | Annex I product-embedded high-risk rules |
| 2 Aug 2030 | Legacy high-risk systems for public authorities | Same |

The biggest shifts are the high-risk dates. Annex III rules, due on 2 August 2026 as enacted, now apply from 2 December 2027, and Annex I rules from 2 August 2028. Three transitional rules govern systems already in use. High-risk systems on the market before their category's high-risk date are caught only if their design changes significantly afterwards (Article 111(2)), though systems intended for public authorities must comply by 2 August 2030 regardless. Generative systems on the market before 2 August 2026 have until 2 December 2026 for Article 50(2) marking (Article 111(4), added by the Omnibus). Legacy GPAI models keep their 2027 deadline under Article 111(3).

The Omnibus changed more than dates. The Article 4 literacy duty, around which Chapter 2 built Larkspur's training, became a duty to take measures to support literacy rather than to guarantee a level. Article 5 gained its two prohibitions. A new Article 4a replaced Article 10(5) with a wider legal basis for special-category data used for bias detection, the basis for Chapter 4's request to bias-test Clearline on Irish applicants. The AI Office gained exclusive competence over certain systems, national sandboxes moved to 2 August 2027, small mid-caps gained simplifications, and FRIAs can reuse DPIA content.

When the Omnibus took effect on 27 July, Nadia re-baselined the calendar within the week. Priya asked the council whether the Clearline EU workstream could now relax, with the conformity file, quality management system and post-market monitoring plan finished next year rather than before the September go-live. Nadia refused and recorded why. Clearline would go live before December 2027, so Article 111(2) would shelter it only until its design changed significantly, and the first material retrain would probably forfeit that shelter. The board also preferred to build once. The work stayed on schedule at the high-risk standard, with EU database registration and CE marking scheduled for when they apply.

The same memo recorded a second decision. Scorecard 7 had been in service since 2016, before any Annex III date, without significant change, so high-risk duties never attached to it, whether or not it counts as an AI system (a question for Chapter 7). Larkspur would retire it rather than retrofit it. Siobhan added a line to the Ask Larkspur plan: the Omnibus had not moved Article 50, so the Irish launch still needed its Article 50(1) disclosure from 2 August.

Among the deployer duties now due in December 2027 is the **fundamental rights impact assessment** (FRIA) under Article 27, which assesses before first use a high-risk system's impact on the fundamental rights of the people it affects. It falls on deployers of Annex III systems (point 2, critical infrastructure, excluded) that are public bodies or private entities providing public services, and on deployers of point 5(b) and 5(c) systems. Article 27(4) lets it build on an existing DPIA. The Dublin entity, as deployer of a 5(b) system, will owe one for Clearline and prepared it for the September go-live anyway, starting from the DPIA that Chapter 4 required. Brightlist, a point 4(a) system, would need none. Chapter 12 compares the FRIA, the DPIA and an ISO/IEC 42005 assessment.

### 6.6 South Korea's AI Basic Act

The EU column of the grid was the heaviest, not the only one. Nadia and Marcus had drawn the grid on 22 January 2026, the day South Korea's AI Basic Act entered into force, and Larkspur's exploratory interest in Korea made it the next column to fill, although Larkspur had no Korean entity, customers or data.

The Act was promulgated as Act No. 20676 on 21 January 2025, amended by Act No. 21311 on 20 January 2026, and entered into force on 22 January 2026. Its Enforcement Decree is Presidential Decree No. 36053, and its regulator is the Ministry of Science and ICT (MSIT). It reaches conduct abroad that affects the Korean market or Korean users (Article 4(1)) and excludes AI used solely for national defence or national security. It regulates "AI business operators" (corporations, organizations, individuals and government bodies), divided into **AI developers** and **AI-using business operators**, and it protects **users** and **affected persons**.

#### Categories in place of a pyramid

Korea has no four-tier ladder and no banned practices. Duties attach to categories, and one system can fall into several. **Generative AI** owes users advance notice, output labelling and a clear notice for realistic synthetic sound, images or video (Article 31). **High-impact AI** needs a listed domain plus significant risk to life, safety or fundamental rights (Article 2(4)). The domains are energy, drinking water, health care, medical devices, nuclear, biometrics for criminal investigation, hiring and loan screening, transport, public-sector decisions, and student assessment in early childhood, elementary and secondary education. What commentators call **"high-performance" AI** needs at least 10^26 FLOPs of training compute, state-of-the-art status and wide-ranging significant risk (Article 32 and Decree Article 24).

High-impact operators owe six measures under Article 34:

1. A risk-management plan.
2. An explanation plan covering final outputs, key criteria and an overview of the training data.
3. User-protection measures.
4. Human management and supervision.
5. Documents kept for five years.
6. Further measures the presidential committee resolves.

The first four must be posted, with trade secrets omitted. A downstream operator that makes no significant functional change is deemed compliant with measures one to three, but human oversight and documentation stay with it (Decree Article 27(3)). The impact assessment is best efforts only (Article 35): operators "shall make efforts" to assess fundamental rights impacts, skipping it carries no fine, and the incentive is a public procurement preference. Since 21 July 2026 it must reflect the characteristics of AI-vulnerable groups. "High-performance" systems must identify, assess and mitigate risks across the lifecycle, run an incident monitoring and response system, and submit results to MSIT.

Advance notice under Article 31(1) is directly finable, while labelling and realistic-content notices go through fact-finding and a corrective order. A foreign operator with no Korean place of business must appoint a **domestic representative** if it meets any one threshold: KRW 1 trillion in prior-year revenue, KRW 10 billion in AI-service revenue, 1 million average daily Korean users, or a past fine for ignoring an order. Administrative fines cap at KRW 30 million (roughly USD 21,000 to 22,000) and apply to only three failures: missing advance notice, a missing domestic representative, and ignoring an MSIT order. MSIT announced a grace period of at least one year from 22 January 2026, but that is policy rather than statute, and the obligations applied from day one.

Against the EU, Korea puts promotion first and regulates lightly. It has no prohibited practices, no conformity assessment, no CE marking, no registration database, no automatic logging duty and no explicit post-market monitoring, its impact assessment is best efforts rather than mandatory, and its fines are some three orders of magnitude lower. Its compute bar of 10^26 FLOPs sits above the EU's 10^25 presumption and adds two qualitative tests.

Marcus's Korea gap note applied this to a launch that did not exist. Clearline used for Korean loan screening would sit in a listed domain, with significant risk assessed rather than assumed, and if high-impact would owe the six measures, with the EU FRIA reusable as the best-efforts impact assessment. Ask Larkspur would be generative AI, owing directly finable advance notice. A Korean subsidiary would give Larkspur a place of business, while cross-border service would mean checking each representative threshold, not presuming one. "High-performance" AI is Norvane's concern. The conclusion: one global control set built to the EU bar, plus Korean notice, posting and representative extras.

### 6.7 The United States

Korea has one statute with a light touch. The United States has no horizontal AI act, and Larkspur, licensed in about 30 states, meets a patchwork that falls into three groups: decision laws, frontier-model safety laws, and transparency, content and conduct laws.

#### The federal picture

There is no federal AI act and no preemption statute. Executive Order 14365 (11 December 2025) sets a policy of a minimally burdensome national framework and creates a DOJ AI Litigation Task Force to challenge state AI laws. An executive order cannot preempt state law by itself. It works through lawsuits, funding conditions and agency proceedings, and this one asks Congress for a preemption statute. The Senate voted 99 to 1 on 1 July 2025 to strip a proposed moratorium on state AI laws from the budget bill, and as of September 2026 state laws remain enforceable. When a board member asked whether the order had wiped out the state laws, Marcus said it had started a fight over them, nothing more.

The one federal AI-specific statute is the TAKE IT DOWN Act (Pub. L. 119-12, 19 May 2025). It criminalises publishing non-consensual intimate images, including AI "digital forgeries", and requires covered platforms to run a notice-and-removal process with removal within 48 hours, with the FTC enforcing the platform duties, including against nonprofits. Larkspur runs no such platform.

#### Decision laws

**Decision laws** govern AI that shapes hiring, lending, housing and similar decisions. Colorado SB 26-189, signed 14 May 2026 and operative for decisions from 1 January 2027, replaced SB 24-205, which never took effect. Developers owe deployers documentation. Deployers owe pre-use notice, a plain-language explanation within 30 days of an adverse outcome, data correction and meaningful human review on request, and three-year records. The law dropped impact assessments, risk-management programmes and the duty of reasonable care, and the attorney general alone enforces it under the Consumer Protection Act, with a 60-day cure period that sunsets on 1 January 2030. California's CPPA regulations on automated decision-making technology (ADMT), effective 1 January 2026, require pre-use notice, an opt-out unless a human appeal is offered, access, risk assessments and annual cybersecurity audits. New York City's Local Law 144 requires an independent bias audit no more than a year before an automated employment decision tool is used, a public summary, and 10 business days' notice to NYC residents, with impact ratios disclosed but no pass-or-fail threshold. Illinois HB 3773 bans employer AI that has a discriminatory effect and bans zip codes as proxies.

Clearline's decisions for Colorado residents would face SB 26-189 from 1 January 2027, with Larkspur as both developer and deployer, though Marcus marked the law's treatment of regulated financial institutions for verification before relying on it. Whether the California rules reach Clearline's loan data went to counsel as an open question. Brightlist fits the employment laws: Local Law 144 for New York City roles, and Illinois HB 3773 and Colorado's rules wherever it screens candidates in those states.

#### Frontier-model laws

California SB 53, the New York RAISE Act and Illinois SB 315 share their thresholds: a **frontier model** is trained with more than 10^26 operations, a higher bar than the EU's 10^25 presumption, and a "large" developer has more than USD 500 million in revenue. Large developers publish and follow a frontier AI framework. All frontier developers publish a transparency report at deployment and report critical safety incidents, within 15 days in California and 72 hours in New York and Illinois, and within 24 hours everywhere if there is imminent danger. Only Illinois requires an annual independent third-party audit, from 2028. All three are enforced by the attorney general, with no private right of action and no cure period, and allow compliance through designated equivalent federal standards. None binds Larkspur. If Norvane is covered, its framework and transparency report go into the diligence file.

#### Transparency, content and conduct

California AB 2013 requires training-data documentation. California SB 942, operative 2 August 2026, requires a free AI detection tool, latent provenance disclosure in image, video and audio, and an optional visible label, for providers with over a million monthly users. Utah requires disclosure of generative AI in regulated consumer and professional settings, which may reach Ask Larkspur's conversations with Utah borrowers. Conduct bans are narrow and intent-based. Texas TRAIGA, effective 1 January 2026, bans AI built or deployed with intent to discriminate, incite harm or infringe rights, treats disparate impact alone as insufficient, and adds social-scoring and biometric rules for government only. California SB 243 covers companion chatbots, which Ask Larkspur is not. AB 2013, SB 942 and TRAIGA's government rules have no Larkspur application, and TRAIGA's intent requirement confirmed that Clearline's fair-lending exposure comes from the laws in Chapter 5.

Nadia turned the recurring patterns into a one-page state-law matrix for the board, recording for each law whether it turns on intent or effect, whether it offers a cure period, and who can sue. Texas requires intent while Illinois HB 3773 catches effect, and Colorado and Texas both give 60 days to cure. Almost every row read "regulator only": the only two private rights of action were Illinois BIPA (USD 1,000 per negligent and USD 5,000 per intentional violation) and California SB 243 for companion chatbots.

### One Bar, Three Legal Systems

The EU AI Act is the first comprehensive AI regulation, and it will not be the last, but the three regimes here already answer the same question differently. The EU has a comprehensive, risk-based statute that bans a few practices, loads a full evidence chain onto high-risk uses, adds transparency for systems that talk to people or make content, and regulates model makers separately. Korea has a promotion-first statute that sorts systems into overlapping categories and asks for plans, notices and records, with small fines for a few failures. The United States has a sectoral, state-led patchwork of decision laws, frontier-model laws and narrow transparency and conduct rules, enforced mostly by attorneys general over the existing law of Chapter 5. For a group under all three, the workable approach is to find the highest bar, build to it once and add the local extras.

That is what Larkspur recorded. The Dublin entity's name went on Clearline's conformity file, with Dana Whitfield still its accountable business owner. Ask Larkspur's Article 50(1) disclosure is Larkspur's duty as downstream provider, with Owen Park accountable for having it live at the Irish launch and Marcus holding the open question on marking. Norvane's GPAI obligations are Norvane's to show. Korea stays a gap note until someone proposes a launch, and each US state duty has a row in the matrix and a named owner.

What Nadia still lacked was one way to run it all, since each legal system answered in its own list and vocabulary. The question that exposed the gap had arrived weeks before the Omnibus. In late May a bank funding partner that buys Larkspur's loans had asked, in a diligence questionnaire, whether Larkspur aligned with the NIST AI RMF and held ISO/IEC 42001 certification. Chapter 7 goes back to that questionnaire and to the frameworks and standards that turn legal duties into something Larkspur can prove.

### The Record

Chapter 6 added these artifacts to Larkspur's record.

- **EU classification register.** Owner: Nadia Brennan. Every register entry by EU AI Act tier, with the Article 5 screening record, including the rejected voice analytics pitch.
- **AI role assessments.** Owner: Marcus Hale. Clearline (Option A, with Option B's rejection reasoned), Ask Larkspur (downstream provider and deployer, Article 50(2) left open) and Brightlist.
- **Norvane GPAI diligence file.** Owner: Owen Park. Annex XII information, training summary, copyright policy and Code signatory status.
- **Re-baselined compliance calendar and build-to-standard memo.** Owner: Nadia Brennan. Both calendars, the decision to keep Clearline's EU work at the high-risk standard, and the decision to retire Scorecard 7.
- **Korea gap note.** Owner: Marcus Hale. Categories, the six measures, notice and representative checks.
- **US state-law matrix.** Owner: Nadia Brennan. Each state duty by system, with intent or effect, cure period and enforcer.

### Exam Focus

This chapter maps to BOK v2.1 competency II.C, the main elements of AI-specific laws, which v2.1 widened to include South Korea's AI Basic Act and US federal and state AI laws that apply to private-sector organizations.

- Article 5 lists eight prohibitions as enacted and ten as amended, and emotion recognition is banned only in workplaces and education, carrying a deployer disclosure duty elsewhere.
- Annex I (product safety components) and Annex III (listed uses) are separate routes to high-risk, and the Article 6(3) exit is never available to a system that profiles natural persons.
- Chatbot disclosure and machine-readable marking are Article 50 provider duties, the other disclosures fall on deployers, and an opt-out or human alternative is good practice rather than an Article 50 duty, a likely distractor.
- High-risk oversight must be genuine rather than rubber-stamping, and citing ISO 31000, ISO 23894 or ISO 27001 does not satisfy the risk-management or QMS requirements.
- Building on another party's GPAI model makes an organization the downstream provider of its own system, never the provider of the model, and Article 27 FRIAs fall on public bodies, private providers of public services and deployers of Annex III 5(b) and 5(c) systems.
- Open-source GPAI models are not exempt from the copyright policy and training summary, since Article 53(2) lifts only points (a) and (b) and never for systemic-risk models, and 10^23 FLOP indicates a GPAI model while 10^25 FLOP triggers the rebuttable systemic-risk presumption.
- Adversarial testing must be conducted and documented, not published, and external audits, public red-team reports and researcher access are Code extras that some study materials wrongly present as Article 55 duties.
- GPAI Code adherence is evidence of compliance but not a presumption of conformity, which Articles 53(4) and 55(2) reserve for harmonised standards.
- Fines take the higher of two figures, except that SMEs and start-ups get the lower figure on every tier and small mid-caps, as amended, only on the EUR 15 million and EUR 7.5 million tiers.
- Knowing which obligations start when matters for compliance planning, not only for the exam, so check each date question for "as enacted" or "as amended" and remember Article 111(2) for legacy systems.
- In Korea the impact assessment is best efforts, fines cap at KRW 30 million for three failures, "high-performance" AI is a commentators' label rather than statutory wording, and MSIT's grace period is policy, not statute.
- In the United States an executive order cannot preempt state law by itself, Colorado impact assessments and a duty of reasonable care belong to the never-effective SB 24-205 (the Colorado trap), and the recurring patterns are intent versus effect (Texas TRAIGA versus Illinois HB 3773), 60-day cures (Colorado and Texas) and regulator-only enforcement apart from two private rights of action, Illinois BIPA (USD 1,000 negligent or USD 5,000 intentional per violation) and California SB 243 for companion chatbots.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): Code of Practice on Marking and Labelling, Nudification and CSAM Prohibitions, Prohibited AI, Watermarking, AI Distributor, AI Importer, AI Provider, CE Marking, Conformity Assessment, Post-Market Monitoring, Technical Documentation, General-Purpose AI (GPAI), Competent Authorities, EU AI Act Penalty Tiers, European AI Office, Market Surveillance Powers, National Competent Authorities (EU AI Act), AI Act Milestone: August 2, 2026, AI Act Milestone: August 2, 2028, AI Act Milestone: December 2, 2027, AI Act Milestone: February 2, 2025, Digital Omnibus on AI (Regulation 2026/1744), Entry into Force (EU AI Act), EU AI Act, GPAI Transitional Period, Article 56 (EU AI Act), Copyright Chapter (GPAI CoP), Safety & Security Chapter (GPAI CoP), Transparency Chapter (GPAI CoP), AI Business Operator (Korea), Best-Efforts Impact Assessment (Korea), Domestic Representative (Korea AI Basic Act), Generative AI Labeling (Korea), High-Impact AI (Korea), High-Performance AI (Korea), Korea AI Basic Act Enforcement Decree, Bias Audit (NYC LL 144), California AI Transparency Act (SB 942), California TFAIA (SB 53), CCPA ADMT Regulations, Colorado ADMT Act (SB 26-189), Illinois HB 3773, Large Frontier Developer, NYC Local Law 144, RAISE Act, TAKE IT DOWN Act, Texas Responsible AI Governance Act (TRAIGA), Utah AI Policy Act.

### Further Reading

- [Regulation (EU) 2024/1689 (EU AI Act)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj): Article 5 prohibitions, Article 6 and the Annexes for high-risk, Article 50 for transparency
- [Digital Omnibus on AI, Regulation (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng): the two new Article 5(1)(ba)-(bb) prohibitions from 2 December 2026
- [Art. 50 transparency guidelines and Code of Practice (European Commission)](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content): how the marking and labelling duties work in practice
- [AI Act implementation timeline (AI Act Service Desk)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act): when the Chapter III duties start for Annex I and Annex III systems
- [GPAI Code of Practice (European Commission)](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai): the voluntary route to demonstrate compliance with Articles 53 and 55
- [European Commission, enforcement of the AI Act](https://digital-strategy.ec.europa.eu/en/policies/enforcement-ai-act): how the Commission describes the enforcement architecture
- [South Korea AI Basic Act (KLRI English translation)](https://elaw.klri.re.kr/eng_service/lawView.do?hseq=71019&lang=ENG): the government-funded authoritative English text of the Act
- [CSET English translation of the Act](https://cset.georgetown.edu/publication/south-korea-ai-law-2025/): a free PDF translation of the Act as enacted
- [AI Basic Act explorer (Korea AI Safety Institute)](https://aibasicact.kr/explorer/): an article-by-article explorer of the Act and its Enforcement Decree
- [US ITA, South Korea AI Basic Act](https://www.trade.gov/market-intelligence/south-korea-ai-basic-act): a plain-language government summary of the Act's scope and duties
- [Colorado SB 26-189 (ADMT)](https://leg.colorado.gov/bills/sb26-189): the ADMT regime replacing SB 24-205, operative 1 January 2027
- [Texas TRAIGA, HB 149 chaptered text](https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm): the intent-based conduct bans and AG enforcement with a 60-day cure
- [California SB 53 (TFAIA)](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB53): the frontier framework and incident-reporting duties, 10^26 operations threshold
- [NYC Local Law 144, DCWP AEDT page](https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page): the bias-audit, publication and notice duties for automated employment decision tools
- [New York RAISE Act, S6953B (official PDF)](https://legislation.nysenate.gov/pdf/bills/2025/S6953B): the frontier-model safety framework signed 19 December 2025
- [TAKE IT DOWN Act, Pub. L. 119-12](https://www.govinfo.gov/content/pkg/PLAW-119publ12/html/PLAW-119publ12.htm): the federal criminal ban on non-consensual intimate deepfakes and the 48-hour platform duty
- [Executive Order 14365 (90 FR 58499)](https://www.govinfo.gov/content/pkg/FR-2025-12-16/pdf/2025-23092.pdf): the federal policy against onerous state AI laws, which cannot preempt by itself

## Chapter 7: Industry Standards and Tools

*Charlotte, May 2026*

The questionnaire arrived in late May, forwarded by Marcus Hale with one line of his own: "They want answers before the next loan pool." The bank funding partner that bought Larkspur loans had added a page to its diligence. Does Larkspur align with the NIST AI Risk Management Framework? Does it hold ISO/IEC 42001 certification? What method does it use to assess the impact of AI systems on consumers?

Nadia Brennan read it twice and went to the council meeting, where Clearline, two weeks from its release board, was the only item. The meeting stalled within ten minutes. Priya Raman reported that the final candidate had passed validation. Marcus asked whether that meant Clearline had been shown fit for lending decisions under the rules that US and Irish applicants would each face. Priya said it meant the model had met its performance targets on the holdout data. Both were right in their own vocabularies, and the council spent twenty minutes discovering that its members had been approving different things.

Back at her desk, Nadia counted what she had borrowed since January. The council followed the NIST framework's GOVERN function, and the Clearline impact assessment signed in February followed an ISO outline. The inventory's boundary test came from the OECD. Siobhan Kelly's Dublin DPIA template asked which impact-assessment method Larkspur used, and the box was empty. Each choice had a good reason, and none of the reasons was written down in one place.

That evening she opened a page titled "Program map." The legal register said what Larkspur had to achieve. The partner was asking how Larkspur could prove that it governed AI with due care. No statute required either framework the partner had named. The pressure came from a contract, as much of the pressure in this field does.

This chapter follows Nadia's map through the voluntary instruments that turn principles and legal duties into practice. The OECD AI Principles supply values and a shared definition of an AI system. The NIST AI Risk Management Framework supplies a risk process, its Playbook the how-to, and NIST AI 600-1 the tailoring for generative AI. ISO and IEC supply a vocabulary (ISO/IEC 22989), a certifiable management system (ISO/IEC 42001), an impact-assessment method (ISO/IEC 42005) and guidance on organizational risk (ISO/IEC 23894), while ISO/IEC 42006 sets rules for the bodies that certify against 42001. The AIGP Body of Knowledge names 22989, 42001 and 42005 as its core ISO standards.

None of these instruments is law. Regulators, auditors and contracts increasingly treat them as the de facto measure of due care, and Texas's TRAIGA gives one of them legal weight. Regulation usually says what must be done without saying how, and standards translate the obligation into operational practice.

### 7.1 The OECD AI Principles

Nadia's map starts with values. The **OECD Recommendation on Artificial Intelligence** (OECD/LEGAL/0449), adopted on 22 May 2019, was the first intergovernmental standard on AI and remains the values baseline. The OECD Council revised its AI system definition on 8 November 2023 and the Recommendation more broadly on 3 May 2024. It is not binding: its adherents, 47 as of September 2026 and the EU among them, make a political commitment to implement it. At the Osaka Summit in June 2019, G20 leaders welcomed G20 AI Principles drawn from it.

Its five values-based principles, addressed to AI actors, carry these 2024 headings:

1. **Inclusive growth, sustainable development and well-being**: beneficial outcomes for people and the planet, augmented human capabilities, reduced inequalities, and environmental sustainability (explicit since 2024).
2. **Respect for the rule of law, human rights and democratic values, including fairness and privacy**: non-discrimination, dignity, autonomy, privacy, labor rights and safeguards against AI-amplified mis- and disinformation. The 2019 heading was "human-centred values and fairness".
3. **Transparency and explainability**: meaningful information on capabilities and limits, awareness of interactions with AI, plain-language information on the factors and logic, and enough information for adversely affected people to challenge an output. Clearline's reason codes exist to meet that last clause.
4. **Robustness, security and safety**: functioning under normal use, foreseeable misuse and adverse conditions, with mechanisms to override, repair or decommission safely.
5. **Accountability**: role-based accountability, traceability of datasets, processes and decisions, and systematic risk management across the lifecycle.

Five recommendations to policy makers sit alongside them: invest in AI research and development, support an inclusive AI-enabling ecosystem, shape an enabling and interoperable governance and policy environment, build human capacity and prepare for labor-market transformation, and co-operate internationally for trustworthy AI. Principles guide anyone in the AI lifecycle, and recommendations are work for governments. The May 2024 revision added language on information integrity (AI-amplified mis- and disinformation, with respect for freedom of expression), on use outside the intended purpose and on intentional and unintentional misuse. It also brought clearer transparency and responsible-disclosure guidance, safe override and decommissioning, responsible business conduct across the lifecycle, interoperable governance across jurisdictions and an explicit reference to environmental sustainability. There are still five principles.

#### The definition as a boundary test

For an inventory, the 2023 revision matters most. An AI system is now "a machine-based system that, for explicit or implicit objectives, infers from the input it receives how to generate outputs such as predictions, content, recommendations or decisions that can influence physical or virtual environments", with systems varying in autonomy and adaptiveness after deployment. The five edits were "explicit or implicit" objectives, inference from the input, "content" added to the outputs, "physical" replacing "real", and adaptiveness after deployment. The EU AI Act's Article 3(1) closely tracks the wording, so a non-binding text now marks the edge of a binding law.

The council applied the test to the entry it had deferred since October. Scorecard 7, a logistic-regression scorecard built by a consultancy in 2016 and recalibrated every year, has weights fitted to data, yet it is a fixed formula that fits on one page. The council recorded it as borderline under both the OECD wording and Article 3(1) and decided to govern it as in scope either way. Whether any legal duty attaches is a separate question (Section 6.5).

#### The working tools

The **Framework for the Classification of AI Systems** (February 2022) sorts systems along five dimensions: People and Planet, Economic Context, Data and Input, AI Model, and Task and Output. Clearline and Ask Larkspur share the first two and diverge on the rest: loan files against policy documents and customer messages, a gradient-boosted ensemble against a vendor's general-purpose model, a default prediction against generated text. Owen Park's idea of letting the assistant set up hardship plans would raise **action autonomy**, which the framework files under Task and Output, not AI Model.

The **incident and hazard definitions** (May 2024) separate an **AI incident**, where harm has been realized, from an **AI hazard**, an event that could plausibly lead to one, and near misses count as hazards. A wrong answer caught before any customer relies on it is a hazard, and the same answer acted on at a customer's cost is an incident. The **AI Incidents and Hazards Monitor (AIM)** tracks publicly reported events. The **Hiroshima AI Process Reporting Framework**, OECD-hosted since February 2025, lets organizations report against the G7 Code of Conduct in a common format. Larkspur builds no advanced model and has nothing to file, but a Norvane report would be one more input to vendor diligence.

### 7.2 The NIST AI Risk Management Framework

NIST supplies the process that puts values to work, and Nadia had made it Larkspur's backbone. The **NIST AI Risk Management Framework** (AI RMF 1.0, published as NIST AI 100-1 in January 2023) is the US government's framework, directed by Congress and built through open consultation. It is voluntary, rights-preserving and sector-agnostic. It is a framework rather than a standard, with no certification, which Nadia had to explain when Tom Ashby asked where the certificate would hang. It was accompanied by the AI RMF Playbook and, in July 2024, by the Generative AI Profile.

NIST starts with why AI risk is different. It is **contextual** (the same system is high-risk in one deployment and low-risk in another), **emergent** (outcomes unintended or unforeseen at design time), tied to **opacity** (adaptive algorithms produce unpredictable results), **societal in scale** (outputs reach millions instantly) and **data-driven** (risks come from biased data, proxies or deployment context). This is a second lens on the characteristics in Chapter 1.3: opacity, speed and scale, data dependency and emergence reappear, and NIST adds context. The framework also names two kinds of uncertainty. **Epistemic uncertainty** comes from limited knowledge, such as insufficient training data. **Aleatoric uncertainty** is inherent randomness, such as sensor noise. For Clearline, thin-file applicants scarce in the loan files are an epistemic problem, and a sudden job loss that no data predicts is aleatoric.

The four functions form the core, and this book applies each in turn.

| Function | Job | Applied in |
|---|---|---|
| **GOVERN** | The cross-cutting foundation: policies, processes and procedures; roles and responsibilities, including oversight bodies and escalation; risk tolerance and appetite; a culture that lets people raise concerns | Part I |
| **MAP** | Understand context: intended purpose and foreseeable misuse, system design and data, stakeholders and affected populations, prioritized risks with their uncertainty | Chapter 8 |
| **MEASURE** | Assess: metrics and indicators, evaluation methods (testing, red teaming, stress testing, expert panels, third-party audits), performance monitoring, risk documentation | Chapter 9 |
| **MANAGE** | Respond: risk treatment (accept, transfer, avoid, mitigate), incident response and recovery, integration with cybersecurity, privacy and enterprise risk, risk evolution and system retirement | Chapters 10 and 13 |

GOVERN runs through the other three, and it is the function most relevant to a governance professional because culture, accountability and appetite are set there. Larkspur's records already showed all four treatments: refusing to auto-decline the bottom score band avoids, the Norvane agreement transfers, human review of every non-approval mitigates, and Tom's signed residual-risk acceptance for Clearline accepts.

Performance is not trustworthiness. A highly accurate model can still encode harmful stereotypes or erode autonomy, which is why MAP requires qualitative context and not just metrics. Clearline's prototype drew part of its accuracy from ZIP-code-derived features that could proxy for race, and Chapter 8 records their removal. MEASURE works against NIST's seven **trustworthiness characteristics**: valid and reliable; safe; secure and resilient; accountable and transparent; explainable and interpretable; privacy-enhanced; and fair with harmful bias managed.

When the CISO proposed folding AI risk into the cyber program, the contrast with the NIST Cybersecurity Framework settled it. The AI RMF treats risk as emergent, systemic and value-laden rather than as a set of known threats met with controls, and it makes explainability, fairness and ethical dimensions core rather than out of scope. Profiles tailor the framework to particular settings (Section 7.4), and the Playbook turns it into tasks.

### 7.3 The AI RMF Playbook

Each RMF function holds categories, and each category holds subcategories. GOVERN 1 is "Policies, processes, procedures and practices", and its first subcategory, GOVERN 1.1, asks that legal and regulatory requirements be understood and managed. The 72 subcategories carry the framework's normative content. For each one, the **AI RMF Playbook** gives **suggested actions** (concrete steps an organization can take), **transparency and documentation prompts** (what to record so the work is auditable) and **references** (the standards and guidance behind the action). It is the RMF's how-to layer rather than a separate framework. NIST publishes it in the public domain, including as JSON, and has said a revision will follow the AI RMF 1.0 update.

The legal grid Nadia and Marcus drew in January became Larkspur's evidence for GOVERN 1.1. Because the actions are suggestions and not requirements, an organization can adopt them, adapt them or document why it chose otherwise, and that record is exactly what auditors and regulators want to see. Larkspur declined one documentation step for the sanctioned enterprise assistant and wrote down why: the tool decides nothing about customers and does not train on inputs.

The RMF and the Playbook both speak of **AI actors**, the people and organizations with a role in the lifecycle: those who design and build, those who deploy and operate, those affected and those who oversee. The same subcategory can land on different teams. At Larkspur the builders are Priya's team and Norvane, Owen's customer operations deploys and operates Ask Larkspur, applicants and customers are affected, and the council oversees. Governance has to reach all of them, not only the builders. For generative AI, NIST added one more layer.

### 7.4 NIST AI 600-1, the Generative AI Profile

A **profile** implements the AI RMF's functions, categories and subcategories for a specific setting, technology or sector. **NIST AI 600-1**, the Generative AI Profile, is the flagship example: a cross-sectoral profile for generative AI, published in July 2024 pursuant to Executive Order 14110 on Safe, Secure and Trustworthy AI. The order was revoked on 20 January 2025, and the profile remains published. It tailors the RMF without replacing it, organizing its suggested actions under the four functions and the same subcategories as the Playbook.

The profile names twelve risks that generative AI creates or worsens:

1. CBRN information or capabilities.
2. **Confabulation**: confidently stated false content, colloquially "hallucination".
3. Dangerous, violent or hateful content.
4. Data privacy: leakage, memorization, inference and de-anonymization.
5. Environmental impacts.
6. Harmful bias and homogenization.
7. Human-AI configuration: anthropomorphization, algorithmic aversion, automation bias, over-reliance and emotional entanglement.
8. Information integrity: misinformation and disinformation.
9. Information security: prompt injection, data poisoning and offensive cyber capability.
10. Intellectual property.
11. Obscene, degrading or abusive content, including non-consensual intimate imagery and CSAM.
12. Value chain and component integration.

They are often grouped as technical or model risks (malfunction), misuse by humans (malicious) and ecosystem or societal risks (systemic).

Ask Larkspur had been run against the list before its April launch, and in May Owen's team wrote the result up as a formal profile. Confabulation led it, because an assistant answering from policy documents can state a policy that does not exist. Data privacy, prompt injection, over-trusting agents, Norvane's place in the value chain and tone in hardship conversations followed. Low-relevance risks such as CBRN each received a "not applicable because" line.

Confabulation is dangerous because fabricated citations and reasoning mislead users into inappropriate trust, and automation bias, the excessive deference to a system described in Chapter 2.2, is a human-AI configuration risk that amplifies both confabulation and bias. The profile's four primary considerations had served as Larkspur's pre-launch checklist in April: **governance** (organizational structures, policies and third-party oversight), **pre-deployment testing** through **TEVV** (testing, evaluation, verification and validation) before release, **content provenance** (tracking the origin and history of digital content so synthetic material can be identified) and **incident disclosure** (reporting, documenting and sharing incident information).

Content provenance concerns outputs, as data provenance concerns training data (Chapter 9), and it is the concept behind watermarking and labeling duties such as the EU AI Act's Article 50 marking. For Ask Larkspur, the Article 50 duty that plainly applies is telling Irish customers they are interacting with AI, which falls on the Dublin entity as provider of the interacting system from 2 August 2026 (Section 6.1). Whether Article 50(2) machine-readable marking reaches plain text is an open question in Marcus's memo, so provenance at Larkspur means logging which customer communications the assistant generated.

The profile also shows a voluntary framework carrying legal weight. The defenses in Texas's TRAIGA, in effect since 1 January 2026, expressly recognize substantial compliance with the NIST AI RMF Generative AI Profile. Larkspur lends in Texas, and Marcus logged the point with two cautions: TRAIGA's prohibitions turn on intent, and the defense is no general safe harbor. NIST had given Larkspur a process, but the stalled meeting showed that a process run in two vocabularies still fails.

### 7.5 ISO/IEC 22989 and the Shared Vocabulary

The ISO/IEC standards on the map build on one another, and the vocabulary comes first. **ISO/IEC 22989**, *Information technology, Artificial intelligence, Artificial intelligence concepts and terminology*, was published in 2022 by ISO/IEC JTC 1/SC 42. Its more than 110 defined concepts give everyone the same words without prescribing how to run a program. 42001 and 23894 build on its vocabulary, and its trustworthiness properties reappear across the EU AI Act and the NIST AI RMF. The IEC webstore publishes it free of charge, which makes it the one core ISO AI standard a candidate can actually read.

Nadia adopted it as the house glossary, and it resolved the stalled meeting. **Verification** asks whether the system was built right, against its specifications, which a holdout score against a target can show. **Validation** asks whether the right system was built, fit for its intended use, which was Marcus's question. Clearline's release gate now records both.

The standard's sharpest distinction is between AI and an AI system. **AI** is a discipline: the research and development of mechanisms and applications, described in the context note as a technical and scientific field dealing with systems that generate outputs such as content, predictions, recommendations or decisions for a specific, human-defined objective. An **AI system** is the engineered artifact: a technical system that generates those outputs, using techniques that build a model of data, knowledge or processes, and designed to operate with varying degrees of automation. Keeping the two apart avoids treating "AI" as something you can buy. The board's "How much AI do we use?" became "Which AI systems do we operate?"

**Trustworthiness** is the ability to meet the expectations of interested parties in a verifiable manner. The listed characteristics are reliability, availability, resilience, security, privacy, accountability, transparency, integrity, authenticity, quality and user-friendliness, and the standard separates terms that people blur. **Robustness** is maintaining performance under all circumstances, and **resilience** is recovering operational state after an incident, which a Norvane outage would test. **Reliability**, the correspondence of intended behavior and results, is distinct from accuracy. **Explainability** answers why a particular output came out as it did, such as the reasons behind one applicant's Clearline score, while **transparency** is information about the system made available.

The glossary also settled the translation problem Chapter 1.4 left open, when Siobhan spoke EU AI Act, Priya spoke NIST and the board's draft borrowed from the OECD. Nadia's crosswalk runs from the six principles in Larkspur's statement to every vocabulary the program meets, including the five dimensions of ISO/IEC 42001 (Section 7.6).

| BOK principle | OECD principle | NIST AI RMF | ISO/IEC 22989 | ISO/IEC 42001 | EU AI Act high-risk duties |
|---|---|---|---|---|---|
| Fairness | 2, including fairness | Fair with harmful bias managed | Not among the listed characteristics | Fairness and non-discrimination | Data governance (Art 10) |
| Safety and reliability | 4, robustness, security and safety | Valid and reliable; safe | Reliability, availability, quality | Robustness and resilience | Risk management (Art 9); accuracy and robustness (Art 15) |
| Privacy and security | 2 (privacy) and 4 (security) | Secure and resilient; privacy-enhanced | Security, privacy, resilience, integrity, authenticity | Privacy and data governance | Data governance (Art 10); cybersecurity (Art 15) |
| Transparency and explainability | 3, transparency and explainability | Explainable and interpretable | Transparency | Transparency and explainability | Transparency and instructions for use (Art 13); Article 50 duties |
| Accountability | 5, accountability | Accountable and transparent | Accountability | Accountability and human oversight | Technical documentation (Art 11); record-keeping (Art 12) |
| Human-centricity | 1, inclusive growth, sustainable development and well-being | No single characteristic | User-friendliness | Accountability and human oversight | Human oversight (Art 14) |

The mapping is Larkspur's own, not an official one, and some cells are approximate. Across a row the vocabularies mostly agree, and down a column each has its own emphasis: NIST pairs accountability with transparency, 42001 pairs it with human oversight, and the EU AI Act turns principles into numbered duties.

22989 also supplies roles. The **AI provider** makes a system available, the **AI manufacturer** builds or assembles it, the **AI customer** acquires it, the **AI partner** collaborates, and the **AI subject** is the person affected by or interacting with it. These are not the EU AI Act's provider, deployer, importer and distributor, so the comparison in Chapter 2.3 becomes three-way. For Clearline, Larkspur is AI manufacturer and AI provider in 22989's terms, the Dublin entity is provider and deployer under the Act, and the US team is the developer in the BOK's task labels. For Ask Larkspur, Larkspur is an AI customer of Norvane's model, and applicants and customers are AI subjects, a role with no counterpart among the Act's operators.

The 22989 life cycle runs through inception, design and development, verification and validation, deployment, operation and monitoring, continuous validation, re-evaluation and retirement, the stage Scorecard 7 will test. The standard also defines the learning paradigms (supervised, unsupervised, semi-supervised, reinforcement and transfer learning) and the symbolic, subsymbolic and hybrid approaches, and 42001 and 23894 both reference its life cycle.

### 7.6 ISO/IEC 42001 and Its Certifiers

The partner's second question concerned **ISO/IEC 42001**, the world's first certifiable standard for an **AI management system (AIMS)**. Published in December 2023 as a first edition, it remains current as of September 2026 with no amendment or revision listed. It specifies requirements for establishing, implementing, maintaining and continually improving an AIMS. Certifiability sets it apart from 22989 (terminology), 42005 (impact-assessment guidance) and 23894 (risk guidance). It scales from a startup to a multinational and is modeled on ISO 27001 (information security) and ISO 9001 (quality).

It follows the **Annex SL** high-level structure, the common clause layout of ISO management-system standards: context of the organization (internal and external factors, applicable laws and standards), leadership and commitment, planning (risk assessment, objectives, trustworthiness goals), support (resources, competence, awareness, documentation), operation (design, acquisition, development, deployment), performance evaluation (monitoring, audit, management review) and improvement (corrective action, continual improvement). The Plan-Do-Check-Act cycle runs through it. The standard requires consideration of five trustworthiness dimensions: transparency and explainability, fairness and non-discrimination, robustness and resilience, accountability and human oversight, and privacy and data governance.

Impact assessment is a requirement. Clause 6.1.4 (planning) has the organization define an AI system impact assessment process, and clause 8.4 (operation) has it perform those assessments at planned intervals or when significant changes are proposed. Normative Annex A objective A.5, "Assessing impacts of AI systems", adds controls on the process (A.5.2), its documentation (A.5.3), impacts on individuals or groups (A.5.4) and societal impacts (A.5.5). For Clearline, A.5.4 means applicants and A.5.5 means access to credit in underserved communities. The companion standard supplies the method: 42001 requires the assessment, and 42005 explains how.

Nadia's gap assessment followed the four implementation steps that recur in practice. The first is a readiness or gap assessment that inventories AI systems, policies, roles and documentation, and Larkspur started from the AI Register. The second is integration with existing management systems (27001, 9001, 27701), sharing risk registers, incident response and audit functions, and Larkspur's ISO 27001-certified security management system was the natural host. The third is AI-specific policies on lifecycle management, ethical principles, bias detection and mitigation, monitoring and stakeholder engagement. The fourth is training, so that technical staff understand the obligations and business users escalate AI risks.

Marcus asked whether the certifying body would be accredited, which is a question for **ISO/IEC 42006:2025**. It sets requirements, additional to ISO/IEC 17021-1 (the general requirements for management-system certification bodies), for the bodies that audit and certify against 42001. It regulates the certifiers, not the certified organization: 42001 is the management system an organization is certified against, 42005 is impact-assessment guidance, and 42006 is the rulebook for whoever issues the 42001 certificate. Nadia's note to Tom set the limits. No law requires 42001 certification. A certificate gives no presumption of conformity with the EU AI Act and does not by itself satisfy the Dublin entity's Article 17 quality management system duty (Section 6.2 covers EN 18286). It is supporting evidence of due care, not a legal pass.

### 7.7 ISO/IEC 42005 and Impact Assessment

Siobhan's empty box now had an answer. **ISO/IEC 42005**, published on 28 May 2025 by ISO/IEC JTC 1/SC 42 (first edition, 39 pages), is guidance on how and when to assess the impacts an AI system and its foreseeable applications can have on individuals, groups and societies, what to document, and how to integrate the work with AI risk management and an AIMS. It serves any organization of any size that develops, provides or uses AI. It is guidance, and nothing is certified to it.

Clause 5 covers the process: documenting it, integrating it with other management processes, timing, scope, allocating responsibilities, thresholds for sensitive uses, restricted uses and impact scales, performing the assessment, analyzing the results, recording and reporting, approval, and monitoring and review. The process spans the lifecycle (assess at design and before deployment, keep it under review, and reassess when intended use, the system or the legal and policy context changes significantly), and it is two-sided, recording benefits and harms, each with measures.

Clause 6 covers the record: the scope; system information (description, capabilities, purpose, intended and unintended uses); data and data quality; algorithms and models; the deployment environment (geography, languages, constraints); interested parties; actual and reasonably foreseeable benefits and harms, including failures and misuse; and measures. Informative annexes cover use with 42001 (A), use with 23894 (B), a harms and benefits taxonomy (C), aligning with other assessments (D) and an example template (E). Annex B is the bridge to risk management.

A 42005 assessment can feed a GDPR Article 35 DPIA or an EU AI Act Article 27 fundamental rights impact assessment, but it replaces neither, and because 42005 is not a harmonised standard it gives no presumption of conformity under the AI Act. Reassessment is triggered by a change in intended use (extending Clearline to mortgages), a significant system change in data or model (a retrain on new loan files) or a new legal or policy requirement (entering South Korea). The map named 42005 as Larkspur's house method. The Clearline and Ask Larkspur assessments had already followed its outline, and Chapters 8 and 12 show them being made.

### 7.8 ISO/IEC 23894 and Organizational Risk

Tom's enterprise risk register already followed ISO 31000, and he wanted AI folded into it. **ISO/IEC 23894**, published in 2023, gives guidance on managing risk related to AI, built on **ISO 31000**, the general standard whose definition of risk is "the effect of uncertainty on objectives". It is guidance and not certifiable, and its subject is risk management of AI, which the standard carefully separates from using AI to do risk management.

ISO 31000 supplies the generic process: establish context, identify, analyze, evaluate, treat, monitor and review, with communication and consultation throughout. 23894 adds the risk sources particular to AI (Annex B), the mapping of the process onto the AI system lifecycle (Annex C, from inception, design and development, verification and validation, deployment, and operation and monitoring to retirement) and the governance and accountability arrangements AI risk needs. It complements 42001, the certifiable management system that holds risk management as one of its processes, by detailing the risk process itself, and 42005's Annex B explains how impact findings feed a 23894-style risk process.

Clearline's disparate-impact risk showed why Larkspur needed both. The 42005 record showed it as a potential harm to applicants: credit denied disproportionately to protected groups. Tom's register showed it as fair-lending enforcement, litigation and reputational risk to Larkspur. Annex B joined the two entries. 42005 asks about impacts on people, and 23894 asks about risk to the organization, and a program usually wants both because a system that harms people harms the organization too. Useful as it is, Tom's standard is not one of the Body of Knowledge's core three.

### A Map the Partner Can Read

The instruments in this chapter answer different questions. The OECD says what good looks like and where an AI system begins. NIST says what a risk process must contain, the Playbook how to act on each part and AI 600-1 what changes for generative systems. ISO/IEC 22989 fixes the words, 42001 makes a program certifiable, 42005 assesses impacts on people, 23894 carries AI risk into the enterprise register and 42006 governs the certifiers. The law says what must be achieved. These instruments say how, and they leave evidence behind.

Nadia's map went to the council with an owner for each use. The council owns GOVERN, 42005 is the method for every impact assessment, Owen owns the Ask Larkspur profile, Tom's register absorbs the 23894 entries, and 42001 is a certification target with no date promised. The reply to the partner, reviewed by Marcus, said only what was true. Larkspur aligns its program with the NIST AI RMF, which offers no certification. It does not hold 42001 certification and has completed a readiness assessment. Its impact assessments follow 42005.

Nadia expected the partner's next request to be for the work itself: how Clearline was designed, trained, tested and approved, and by whom. That record began in January, on the morning Priya arrived at a design review with a prototype and wanted to start training that afternoon. Part III goes back to that morning.

### The Record

This chapter added six artifacts to Larkspur's record.

- **Standards program map.** Owner: Nadia Brennan. Each instrument, the question it answers and who owns its use.
- **House glossary and trustworthiness crosswalk.** Owner: Nadia Brennan. ISO/IEC 22989 terms, with verification and validation recorded separately at the Clearline gate.
- **Scorecard 7 classification decision.** Owner: the AI governance council. Borderline under the OECD definition and Article 3(1), governed as in scope either way.
- **Ask Larkspur generative AI risk profile.** Owner: Owen Park. The twelve NIST AI 600-1 risks, each assessed or marked "not applicable because".
- **ISO/IEC 42001 gap assessment.** Owner: Nadia Brennan. Readiness from the AI Register, built on the ISO 27001 system.
- **Reply to the funding partner.** Owner: Nadia Brennan, reviewed by Marcus Hale.

### Exam Focus

Most questions here ask which instrument does what.

- The OECD Recommendation (22 May 2019, revised 8 November 2023 and 3 May 2024) is non-binding, keeps five principles under 2024 headings, and separates principles for AI actors from recommendations to governments.
- Know the five 2023 definition edits, which the binding EU AI Act's Article 3(1) closely tracks.
- In the OECD classification framework, action autonomy is a Task and Output criterion, not an AI Model one, and a near miss is an AI hazard, not an AI incident.
- The NIST AI RMF is a framework with no certification, and GOVERN is cross-cutting and the function most relevant to an AI governance professional.
- Epistemic uncertainty (limited knowledge) differs from aleatoric uncertainty (inherent randomness), and NIST's seven trustworthiness characteristics should be known verbatim.
- The BOK names the Playbook directly: per-subcategory guidance is the Playbook, the risk process is the AI RMF, and generative AI specifically is NIST AI 600-1.
- Two examples the exam can use are confabulation (the formal term for hallucination) and automation bias (a human-AI configuration risk).
- The ISO/IEC 22989 trustworthiness vocabulary is the cluster tested most (robustness and resilience, reliability and accuracy, verification and validation, explainability and transparency), and when a question turns on a term's precise meaning, the free 22989 is the source being quoted.
- The 22989 roles are not the EU AI Act's provider, deployer, importer and distributor, so map them rather than treating them as synonyms.
- The point most likely to be tested is that 42001 requires the impact assessment and 42005 explains how, and 42006 is a favorite distractor because it regulates certifiers, not the certified organization.
- The 42005 reassessment triggers (intended use, significant system change, new legal or policy requirement) are a favorite detail, and the split to remember is that 42005 asks about impacts on people while 23894 asks about risk to the organization.
- BOK v2.1 II.D names a closed set of three core ISO standards (22989 first, then 42001 and 42005), so 23894, absent from v2.1 and v2.0.1, may answer an item on AI risk management but never an item on the core three.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): AI Incident vs. AI Hazard (OECD Definitions), Hiroshima AI Process Reporting Framework, OECD AI Incidents and Hazards Monitor (AIM), OECD AI Principles, OECD AI System Definition (2023 Update), OECD Framework for the Classification of AI Systems, Accountable and Transparent, Explainable and Interpretable, Govern Function, Manage Function, Map Function, Measure Function, NIST AI Risk Management Framework (AI RMF), Privacy-Enhanced, Reliability, Safe, Secure and Resilient, Valid and Reliable, AI Actors (NIST AI RMF), AI RMF Subcategory, NIST AI RMF Playbook, Suggested Actions (AI RMF Playbook), Transparency and Documentation Prompts (AI RMF Playbook), Confabulation, Content Provenance (NIST AI 600-1), Executive Order 14110, Generative AI Profile (NIST AI 600-1), AI Management System (AIMS), Annex SL, Context of the Organization, ISO/IEC 42001, PDCA Cycle, AI System Impact Assessment (ISO/IEC 42005), Impact Reassessment Trigger, ISO/IEC 42005, ISO/IEC 42006, Accountability, Activation Function, AI Component, AI Customer, AI Manufacturer, AI Subject, Artificial Intelligence (AI), Automatic Summarization, Availability, Bayesian Network, Cognitive Computing, Computer Vision, Connectionism (Connectionist Paradigm), Continuous Validation, Controllability, Data Augmentation, Data Sampling, Data Set, Decision Tree, Design & Construction, Exploratory Data Analysis (EDA), Face Recognition, Heteronomy, Human-Machine Teaming, Image Recognition, Imputation, Input Data, ISO/IEC 22989, Knowledge, Machine Translation (MT), Natural Language, Natural Language Generation (NLG), Natural Language Understanding (NLU), Neuron, Parameter (Model Parameter), Performance, Personal Data (PbD), Planning, Predictability, Prediction, Production Data, Question Answering, Reassessment, Robustness, Sentiment Analysis, Soft Computing, Speech Recognition (STT), Speech Synthesis (TTS), Stakeholder (Interested Party), Subsymbolic AI, Symbolic AI, Task, Trained Model, Transfer Learning, Transparency (Organization), Trustworthiness, Validation, Validation Data (Development Data), Verification, Verification & Validation, AI Risk Sources (ISO 23894 Annex B), ISO 31000:2018.

### Further Reading

- [OECD Recommendation on AI (OECD/LEGAL/0449)](https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449): the Recommendation text: adoption, the 2023 and 2024 revisions, the principles and the definition
- [OECD.AI: AI principles](https://oecd.ai/en/ai-principles): 47 adherents and the G20 principles drawn from it
- [OECD.AI: classification framework](https://oecd.ai/en/classification): the five dimensions and their criteria
- [OECD.AI: incidents and hazards](https://oecd.ai/en/incidents): the incident and hazard definitions and the AIM tracker
- [NIST AI Risk Management Framework (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): the framework itself: functions, categories and trustworthiness characteristics
- [NIST AI RMF landing page](https://www.nist.gov/itl/ai-risk-management-framework): the official hub, including companion resources and crosswalks
- [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/): the practical companion with suggested actions for every subcategory
- [NIST AI RMF Playbook (JSON, public domain)](https://airc.nist.gov/docs/playbook.json): the machine-readable form of the same 72 entries, a US government work
- [NIST AI 600-1, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): the 12 generative AI risks and the suggested actions by subcategory
- [ISO/IEC 42001 (IEC webstore)](https://webstore.iec.ch/en/publication/90574): the AI management system standard, its structure and its impact-assessment requirement
- [ISO/IEC 42006 (IEC webstore)](https://webstore.iec.ch/en/publication/108460): the requirements for bodies certifying AI management systems against 42001
- [ISO/IEC 42005 (IEC webstore)](https://webstore.iec.ch/en/publication/107659): the companion guidance on how to perform the impact assessment 42001 requires
- [BSI press release on ISO/IEC 42005](https://www.bsigroup.com/en-GB/insights-and-media/media-centre/press-releases/2025/june/framework-published-to-assess-real-world-ethical-and-operational-impact-of-ai/): a national standards body's plain-language explanation of the standard's purpose
- [ISO/IEC 22989 (IEC webstore, free)](https://webstore.iec.ch/en/publication/77839): the full terminology standard, published free of charge
- [ISO/IEC 22989 full text (ISO OBP)](https://www.iso.org/obp/ui/en/#!iso:std:74296:en): the ISO Online Browsing Platform copy (opens in a browser)
- [ISO/IEC 23894 (IEC webstore)](https://webstore.iec.ch/en/publication/82914): the AI risk-management guidance standard, co-published by IEC

# Part III: Governing AI Development

*Can we build it right?*

*Charlotte, January 2026*

The night before Clearline's design review, Nadia Brennan wrote the letter she hoped Larkspur would never receive. She wrote it as a supervisor would. It asked Larkspur to show how Clearline had been designed, what data had trained it, how it had been tested, who had approved its release and how it was being watched, with the name of every approver.

Then she turned each paragraph into a line on a checklist. Use case: approved by whom? Impact assessment: signed by whom? The data needed two lines, one for Larkspur's right to use the loan files and one for whether they were fit to learn from. Testing, release and watching took one each. Beside every line she drew two columns, one for an owner's name and one for where the record lived.

Almost every box was empty. Clearline was still a prototype, with 312 features and a headline Priya Raman liked to repeat: "97% accurate". In the autumn Nadia had asked who the other 3% were, and nobody had answered.

Priya arrived at eight the next morning with the prototype on her laptop. The compute was booked, she said, and she wanted to start full training that afternoon. Nadia turned the checklist around so Priya could read it.

Part II ended with a bank funding partner asking Larkspur to show its work. That work began on this January morning, so Part III steps back to January 2026 and follows Clearline, the system Larkspur built, to release in June and July. Part I asked what AI governance is and Part II what the law requires. Part III asks how an organization runs the build: what it decides, what it writes down and who signs off.

The organizing idea is a chain of documented decisions. A use case drives an impact assessment, which drives requirements and design. The design decides what data is needed, data governance decides whether that data may be used, testing decides whether the build is fit, a readiness gate decides whether it ships, and monitoring decides whether it keeps working. Each link produces a record, and the record is what an audit or a regulatory request asks for. That is why the BOK makes documenting the design and build process, and the training and testing process, performance indicators in their own right. Traceability is the deliverable, not a by-product.

Chapter 8 covers intent and foresight. Dana Whitfield, Clearline's accountable business owner, owns a use case with boundaries, success metrics and decision rights. The impact assessment, run by Nadia's function, captures benefits as well as harms and records the residual risk with the approver who accepted it, here Tom Ashby. Priya's team owns requirements and design, and the design review separates internal design risk (faulty assumptions, inadequate data, incomplete testing, poor integration, no explainability) from external risk (adversarial use, regulatory change, supply chain, backlash). The techniques are the probability and severity matrix, the risk mitigation hierarchy, stakeholder mapping, use case evaluation, benchmarking and pre-deployment pilots.

Chapter 9 covers data and evidence. A defendable legal right to use the data comes first (Marcus Hale assesses the US files, and Siobhan Kelly advises on the Dublin ones), and only then quality: accuracy, completeness, integrity, timeliness, consistency, sufficiency and representativeness. Provenance records the data's origin and terms, and lineage records every transformation up to the model version. Each test in the regime (unit, integration, validation, performance, security, bias, interpretability) is tied to the risk it catches. Priya's team builds, and an independent validation team reporting to Tom verifies, because the NIST discipline of TEVV (test, evaluation, verification and validation) keeps verifiers separate from builders.

Chapter 10 covers release and drift. Readiness means a model card, conformity evidence, stress and failover testing, and a multidisciplinary gate review. Deployment must be traceable, repeatable and reversible, through environment separation, rollback procedures and a model registry. Monitoring, owned by Priya and Dana, covers prediction quality, inputs, latency, resources, fairness and drift, and volatility and risk set the retraining schedule.

Clearline carries this part because Larkspur both builds and provides it. Priya's US team is its developer, a task label, and the Dublin entity is its provider, a legal category, of a high-risk system under Annex III point 5(b), as Section 6.2 records. An organization that builds and releases its own high-risk model is the provider and cannot hand those duties to a supplier. With Brightlist, Larkspur would be a deployer, and Ask Larkspur is never high-risk.

Chapter 7 supplied the standards: ISO/IEC 42001 requires an AI system impact assessment, ISO/IEC 42005 explains how to run one, ISO/IEC 23894 manages risk to the organization's own objectives, and the NIST AI RMF supplies GOVERN, MAP, MEASURE and MANAGE. NIST SP 1270 adds the three bias categories that Section 9.5 applies.

For high-risk systems the EU AI Act makes much of this law. Its Annex III obligations apply from 2 December 2027 as amended (2 August 2026 as enacted), and Larkspur builds Clearline to them ahead of time (Section 6.5). Each provider duty lands in this part as follows.

| Article | Provider duty | Applied in |
|---|---|---|
| 9 | Risk management system | 8.3, 8.4 |
| 10 | Data and data governance | 9.1 to 9.5 |
| 11 and Annex IV | Technical documentation | 8.6, 10.1 |
| 14 | Human oversight | 8.5, 10.2 |
| 15 | Accuracy, robustness and cybersecurity | 9.4, 10.1 |
| 17 | Quality management system | 8.6 |
| 43 | Conformity assessment | 10.1 |
| 72 | Post-market monitoring | 10.3 |

The right-hand column retraces the chain with a legal duty on most links. For Clearline the chain begins with the first line on Nadia's checklist, "use case: approved by whom?", and Priya wanted to start training that afternoon.

### Exam at a Glance

Domain III covers the build and carries 21 to 25 of the 100 scored items, tied with Domain IV for the largest share.

| Competency | What it covers | Questions | Chapter |
|---|---|---|---|
| III.A Govern designing and building the AI system | Use case, impact assessment, design risk, six named techniques | 6 to 8 | 8 |
| III.B Govern data collection and use in training and testing | Right to use data, quality, provenance and lineage, testing | 6 to 8 | 9 |
| III.C Govern release, monitoring and maintenance | Readiness, deployment, monitoring, retraining | 8 to 10 | 10 |

The three competencies are close in size, but III.C is the largest. Almost every item tests process discipline: which link of the chain is in play and what record it should leave. The III.A technique names are the BOK's own, and the two documentation indicators make the record itself examinable. BOK v2.1 made two changes that reach Domain III.

- III.A lost its "identify applicable laws" indicator, which v2.1 also removed from IV.B.
- "Model" became "system" throughout, matching the BOK's shift from governing a model to governing a system in its deployment context.

## Chapter 8: The Design File

*Charlotte, January 2026*

Priya Raman had Clearline running on the conference-room screen before the council sat down. The prototype had scored a sample of US files end to end, and her team wanted to start full training that afternoon on ten years of US personal-loan files, with the Dublin book to follow. The cloud capacity was reserved. She needed only a yes on the compute budget.

Nadia Brennan had spent the night turning an imagined regulator's letter into a checklist, and she read its first three lines aloud. Where was the use case? Who had signed it? Where was the impact assessment?

Priya had a slide of objectives, Dana Whitfield an email thread about backlog targets, and Tom Ashby a risk-register line reading "Clearline (in development)." Nobody had a document saying what Clearline was for, where it stopped, what it could decide or whom it could hurt, and nobody had signed one.

"The model works," Priya said. "We can write the paperwork alongside."

"Alongside is how we end up describing a model after it exists," Nadia said. "The design file is where we decide what it should be." She asked the council to pause the compute spend until a signed use-case charter, an impact assessment and a requirements register existed. Tom, who would one day have to explain Clearline to the board, seconded it. Dana objected that every week of delay cost her underwriters, and the council gave her a date instead of an argument: the February meeting. The minutes recorded the pause, the reason and the review date.

The pause cost Priya a month and cost Larkspur almost nothing, because nothing yet needed undoing. That asymmetry is the subject of BOK competency III.A, governing the design and build of an AI system. Teams frame the business context and the use case, run an impact assessment, and apply policy, procedure and ethics to the design itself: purpose, requirements, architecture and model selection, human oversight, metrics and thresholds, stakeholder feedback and operational controls. They identify and manage internal and external design risk, and they document all of it. This chapter follows Clearline's design file through each of them in turn.

### 8.1 Framing the Use Case

The charter comes first. A use case starts with the **business context**, the organizational, strategic and operational environment the system will live in: the objective it supports, the expected benefit and the organization's readiness. Readiness covers leadership commitment, data governance maturity, security and privacy maturity, risk culture, and cross-functional expertise across legal, IT, data science, operations, cybersecurity and privacy. Clearline's charter, owned by Dana as accountable business owner, named the objective as faster, more consistent personal-loan decisions and possibly wider access for thin-file applicants.

The **use case** then specifies the system: its intended function (classification, prediction, assistance or recommendation), intended users and environments, assumptions and constraints, decision authority (autonomous or human in the loop), and expected lifetime, workload and frequency. Clearline would predict default within 24 months for underwriters. Its decision authority came from the risk appetite Chapter 3 applied to Dana's December request: auto-approve only the lowest-risk band, and send every non-approval to an underwriter before it takes effect. Its boundary was personal loans only, and explicit boundaries are what prevent scope creep and unmanageable risk.

Success metrics are named up front and aligned to the business goal, and they often conflict. Optimizing precision raises false negatives, optimizing efficiency can cost transparency, and optimizing engagement can reward addiction loops. Fraud detection is measured on undetected fraud and false positive rate, a support chatbot on resolution time, escalation rate and satisfaction, and a hiring tool on quality of hire, time to fill and bias across protected classes. Clearline's conflict was plain, since a model tuned to minimize defaults declines more creditworthy applicants. Choosing the metric is choosing which harm you accept, and who bears it.

More AI projects fail on data than on models, so the use case tests availability and suitability separately. It inventories what data exists, where it lives and how it was collected, checks completeness, accuracy, consistency and label availability, and then checks legal and ethical usability. Data can be technically perfect and still off limits: collected for another purpose (GDPR Article 5(1)(b) purpose limitation), carrying sensitive attributes, or supporting inferences the subject never expected. The pipeline must also sustain the system, taking in new data over time, serving real-time inference if needed, monitored for drift, and compliant with privacy and access controls on an ongoing basis. Clearline's files had one deep gap: default outcomes existed only for applicants Larkspur had approved. Reusing the Irish files was Siobhan Kelly's compatibility question (Chapter 4).

Feasibility and value do not settle ethics. High-stakes domains (criminal justice, housing, hiring, education, credit) carry recurring red flags: reinforcement of historical bias, opacity in consequential decisions, and manipulation. Clearline, a credit model trained on past approvals, had to answer the first two, with declines explained as Chapter 5's adverse-action rules require. Decision rights are part of the design: what the system may decide alone, when a human must be involved, how overrides and appeals are handled (Owen Park's team would take Clearline appeals), whether the oversight role is resourced, and whether enough business records exist to defend the decision. Workforce readiness matters because workflows, roles and morale all move, and Dana's underwriters feared replacement. A system can also be legal and profitable yet clash with the organization's public commitments, a reputational question rather than a compliance one, so the charter tested Clearline against Larkspur's published fair-lending commitments.

### 8.2 The Intake Gate

A charter describes one proposal, and the gate decides how much scrutiny each proposal gets. A **use case assessment** is the pre-development gate that asks whether an application fits organizational policy, risk appetite and ethical standards. Rigour scales with six factors: decision impact, user exposure (internal or external), affected rights or opportunities, automation level, applicable regulation, and context such as cultural norms or prior incidents.

Nadia's gate took three proposals that January. Clearline went to deep review, being external, affecting access to credit, partly automated and regulated in two jurisdictions. Owen's plan to put Ask Larkspur in front of customers went to a moderate tier, customer-facing but deciding nothing, with a note that the tier would rise if it ever gained the power to act (Chapter 11). The sanctioned enterprise assistant got light-touch review. In February the mortgage team asked to reuse the Clearline score, and the charter's boundary did its job: the request went back through the gate as a new use case.

### 8.3 Design Risk

Past the gate, the question becomes what could go wrong in the design itself. **Internal design risk** arises inside the project: faulty assumptions, inadequate data, incomplete testing, poor integration and no explainability. **External design risk** arises outside it: adversarial use, regulatory change, the supply chain and backlash. Complexity, among Chapter 1's characteristics of AI, is why Clearline's lists ran long. Internally, the deepest assumption was that past approvals represent creditworthiness, and thin-file data, testing on the small Dublin book, integration with the loan origination system and explainability for adverse-action reasons were all weak points. Externally, applicants and brokers could game stated income, regulation could shift, bureau and alternative-data suppliers formed a supply chain Larkspur did not control, and backlash was possible.

The BOK names six techniques for this work: the probability and severity matrix, the risk mitigation hierarchy, stakeholder mapping (Chapter 2), use case evaluation (the gate in 8.2), benchmarking and pre-deployment pilots. A **probability and severity matrix** plots each risk's likelihood against its impact to prioritize treatment. It ranks risks rather than measuring them, and its NIST AI RMF equivalent is MANAGE 1.2. The **risk mitigation hierarchy** then prefers avoiding a risk, then reducing it, then transferring it, and finally accepting the residual deliberately.

Clearline used every rung. Priya's team avoided the top proxy risk by dropping ZIP code and the features derived from it and recorded the decision, and the remaining candidate proxies went through the written legal review that Chapter 5 describes, with each answer added to the baseline. Human review of every non-approval reduced the harm of a wrong score, supplier warranties on bureau data transferred part of the supply-chain risk, and the residual would be accepted by name (8.4). **Benchmarking** compares a system with established references or reference models, and it later helps defend the design in an audit or litigation. Clearline had to beat Scorecard 7. A **pre-deployment pilot** runs the system in real conditions without consequence, so Clearline would first score in shadow mode beside human underwriters.

### 8.4 The Impact Assessment

Design risk asks what could go wrong with the system. The impact assessment asks what happens to the people it touches. An **AI impact assessment** looks outward at the people and societies a system can affect, while ISO/IEC 23894 manages risk to the organization's own objectives. As Chapter 7 set out, ISO/IEC 42001 is the certifiable management system and requires the assessment (clauses 6.1.4 and 8.4, and Annex A objective A.5). ISO/IEC 42005 is guidance that fills that gap, nothing is certified to it, and its Annex B explains how impact findings and the 23894 risk process feed each other.

#### The process comes first

Clause 5 of 42005 is a documented process set up before any single system is assessed, and Nadia built it before touching Clearline. In order, the organization:

1. Writes it down, with a procedure and templates.
2. Integrates it with enterprise risk, compliance, privacy and the AIMS rather than running it stand-alone.
3. Decides the timing.
4. Defines the scope.
5. Assigns responsibilities.
6. Sets the thresholds and impact scales that decide depth and escalation.
7. Performs, analyses, records and reports.
8. Approves formally.
9. Monitors and reviews.

Nadia's procedure plugged into Tom's enterprise risk process, Siobhan's DPIA process and the AIMS. Its threshold flagged any system that makes or materially influences a customer's access to credit or insurance as a sensitive use, escalated to the council for formal approval, which is how thresholds route sensitive and restricted uses. Clearline went through first.

#### Two records

Clearline produced two linked records. The 42005 record asked what could happen to applicants: wrongful declines, and effects on thin-file applicants and their communities. The 23894 entry in Tom's register asked what could happen to Larkspur: credit losses, fines, litigation.

A complete record, as clause 6 of 42005 defines it, sets the scope (system, version, uses) and describes the system, including intended and unintended uses. It covers data sources, characteristics and quality, the algorithms and how the models were developed, the deployment environment (geography, languages, constraints), and the relevant interested parties, split into the directly affected and other parties. It sets out the **actual and reasonably foreseeable impacts**, benefits as well as harms, failure modes and reasonably foreseeable misuse, and the measures that address them. Clearline's record listed benefits (speed, consistency, possibly wider access), unintended uses (collections staff using the score to prioritize aggressive outreach, and the mortgage reuse) and foreseeable misuse (brokers gaming inputs) across the US states and Ireland. Applicants and co-borrowers were directly affected, and regulators and community groups were other parties. The first draft had no benefits section, and Nadia sent it back, because a record without benefits, unintended uses or misuse analysis is incomplete. Naming community effects also gave an owner to the societal harm that Chapter 1 warned might have none.

#### Timing and triggers

An assessment runs at design, while changes are still cheap. It runs again before deployment as a release gate, during operation through monitoring and periodic review, and on significant change. Four events trigger reassessment: a change of intended use or purpose, a significant change to the system (new data types, retraining, a replaced model), a change in the legal or policy environment, and new evidence from monitoring or feedback. Clearline's file named the mortgage reuse, retraining on new bureau data, and any move into South Korea, where loan screening is a listed high-impact domain and the impact assessment is best efforts only (Chapter 6). The standard illustration is a demand-forecasting model quietly repurposed to rate individual workers. Larkspur met its own version when Owen proposed using his call-volume forecasting model to rate individual agents, and the proposal went back to the gate.

#### Legal drivers

The EU AI Act's **fundamental rights impact assessment** (FRIA, Article 27) falls on certain deployers of high-risk systems, including deployers of Annex III point 5(b) creditworthiness systems (Chapter 6 sets out the full scope). It sits on top of the provider's risk management system under Article 9. The Dublin entity owes both for Clearline, the Article 9 system as provider and the FRIA as deployer once Annex III obligations apply (2 December 2027 as amended, 2 August 2026 as enacted), and Larkspur began early, fed by Siobhan's DPIA. Article 27(4) lets a FRIA build on a DPIA, but a DPIA covers data protection risk, not the full impact picture, so the two overlap without substituting for each other (Chapter 12 compares them). Ask Larkspur, a limited-risk system, owes no FRIA.

Other drivers are narrower than they look. Canada's Directive on Automated Decision-Making (DADM) requires algorithmic impact assessments for automated decision-making by Canadian federal institutions, a contrast rather than a Larkspur duty. California's CPPA ADMT regulations include risk assessments among their duties (Chapter 6), and Marcus Hale recorded whether they reach Clearline's decisions rather than assuming either answer. Colorado's SB 26-189 dropped impact assessments, NYC Local Law 144 requires a bias audit for Brightlist rather than an impact assessment, and the OECD and G7 treat impact assessment as best practice.

#### Making it count

An assessment is only worth the change it causes. Its findings feed model features, training data, interfaces, rollout plans and monitoring. Review sits with governance authority: legal, risk, ethics, and executive or board endorsement for a high-risk system. Risk acceptance records the name of whoever accepted it, the residual risk and the tradeoffs accepted. Publication is deliberate, since public summaries build trust while proprietary architectures and protected data stay out.

Clearline's assessment found that the prototype declined thin-file applicants disproportionately. Thin-file non-approvals would now reach underwriters flagged, with time to look beyond the score, and approval-rate parity joined the monitoring plan. Tom signed the residual-risk acceptance by name, the board risk committee endorsed it, and Larkspur committed to a plain-language public summary of Clearline's fairness safeguards that leaves out its architecture and features.

### 8.5 Requirements and the Design Baseline

With the findings in hand, Priya's team could write requirements. Requirements are formally identified and captured before design, each with its source, owner, priority and rationale, and each must be verifiable, traceable, unambiguous and measurable. They fall into four categories: functional (what the system does), technical or non-functional (performance, scalability, security, privacy, usability, resilience), regulatory (what specific rules require) and security. Evaluation metrics carry thresholds for accuracy, calibration, latency and cost per inference, and management approves the final set. Clearline's register required a default-risk score plus specific principal reasons usable in adverse-action notices, good calibration, latency fit for instant decisions, the EU high-risk requirements, GDPR Article 22 safeguards for Irish applicants, and access control on applicant data. Marcus, Siobhan and Owen supplied the legal, GDPR and appeals requirements.

Stakeholders with organizational influence tend to dominate requirements-setting, so the register records who supplied each requirement and deliberately includes feedback from affected groups. Dana's approval-rate targets crowded out almost everything else until Nadia brought in affected applicants' views through complaints data and a consumer panel. Dana and Tom signed off the final set for management.

The requirements feed the **design baseline**, the per-system record of the design. It captures system purpose and scope, stakeholders and roles, ethical and regulatory considerations, boundaries and interfaces, data and model design, and risk and lifecycle management, including fallback, monitoring, retraining and retirement plans. Clearline's baseline recorded the model selection (a gradient-boosted ensemble with reason codes for each decision), the oversight design from Chapter 3, and operational controls such as underwriter queue caps. Its fallback was the manual underwriting queue, and its retirement plan named Scorecard 7.

### 8.6 Documentation, Quality and Traceability

These choices become evidence only when someone can check them years later. Documentation has two dimensions. The design and build process is documented once and revised periodically, which Nadia did in the Larkspur AI Development Standard. The design of each system is documented per system, as the Clearline baseline is. The development phase adds architecture diagrams under version control, code and model repositories with change history, tooling and dependency inventories, and security artifacts.

Chapter 9 produces Clearline's training and testing records. Training documentation covers data sources and characteristics (including exclusions and filtering, with the data archived and immutable), the labeling process and its quality assurance, training configuration and hyperparameters, performance benchmarks and the evidence behind chosen thresholds, bias detection and mitigation with its tradeoffs, and testing outcomes for robustness, generalization, privacy and security. Testing documentation covers methodology, whether test data was withheld from training, results with false positive and false negative rates, stress and edge-case analysis, known failure modes and behaviour on failure, and user testing. For high-risk systems the EU AI Act's technical documentation duty (Article 11 and Annex IV) expects enough to reproduce the design and development effort and explain the design rationale years later.

Three documents describe the work to others. A **datasheet** describes a dataset and a **model card** a trained model. A **system card** is the outward-facing artifact for the whole deployed system, broader than a model card, covering architecture, training data, intended use, limitations and ethical considerations. It supports the transparency obligations and instructions for use that Article 13 requires for downstream users. Clearline's datasheet comes in Chapter 9, its model card in Chapter 10, and its system card and instructions for use go to the Dublin underwriters.

A **quality management system** (QMS) is the formalized set of processes, procedures and responsibilities that makes all of this repeatable rather than improvised. The EU AI Act requires one from providers of high-risk systems (Article 17), so the Dublin entity needs one for Clearline. ISO/IEC 42001 is the certifiable AI management system, and Nadia built the QMS on a 42001-style AIMS, knowing from Chapter 6 that citing a framework does not by itself satisfy Article 17 and that only EN 18286:2026, once cited in the Official Journal, gives a presumption of conformity. Ask Larkspur owes no Article 17 QMS.

**Traceability** ties the file together. Version control links code, data and documentation, and requirements link to design elements, test plans and results. Releases are tagged with the risk assessment that approved them. Decisions are recorded with their rationale and outcome as well as the decision itself, so Clearline's decision log will say why the threshold sits where it does once Chapter 9 sets it. Data integrity is the precondition: if records, datasets or model artifacts can be altered without detection, the documentation proves nothing. Training data is therefore archived immutably, changes are logged, and artifact repositories are access-controlled and audited. Clearline's training snapshots would be frozen, and Chapter 13 covers how long such records are kept.

### Paper Before Compute

Each step in this chapter narrowed what Clearline could become before anyone paid to build it. The charter fixed its purpose and boundary, the gate set the depth of scrutiny, the design-risk review removed proxies it could not defend, and the impact assessment changed how thin-file applicants would be treated and named who accepted the remaining risk. Requirements and the baseline turned those choices into specifications, and the documentation made each one traceable to its owner. Governing a design is cheap in the way the January pause was cheap, and this is the last stage at which it is.

At the February meeting the council lifted the pause. Dana's signed charter, Nadia's approved assessment, Tom's residual-risk acceptance and Priya's requirements register sat in the file, each with an owner. Priya got her compute.

The design was approved on paper, and paper could not settle the harder questions underneath it. Could Larkspur lawfully use the loan files at all, a question Siobhan's February discovery had made urgent for the Dublin book? And did outcomes recorded only for approved applicants represent the people Clearline would score?

### The Record

The design file left six artifacts in the Larkspur record.

- **Council minute on Clearline compute and intake tiers.** Owner: Nadia Brennan. The January pause with its review date, and the gate tiers for Clearline, Ask Larkspur, the enterprise assistant and the mortgage reuse.
- **Clearline use-case charter.** Owner: Dana Whitfield. Objective, the personal-loans-only boundary, decision authority, metrics and data sources.
- **Clearline impact assessment and register linkage.** Owner: Nadia Brennan. The 42005 record for applicants, linked to 23894 entries and the design-risk matrix in Tom's register.
- **Clearline residual-risk acceptance.** Owner: Tom Ashby. Signed by name and endorsed by the board risk committee.
- **Clearline requirements register and design baseline.** Owner: Priya Raman. Requirements with their sources, the proxy-feature decision, the manual-queue fallback and a retirement plan naming Scorecard 7.
- **Larkspur AI Development Standard.** Owner: Nadia Brennan. The design and build process, documented once and revised periodically.

### Exam Focus

These competency III.A points recur.

- Business context (objective, expected benefit, readiness) is distinct from the use case specification (function, users, assumptions, decision authority, lifetime), and explicit boundaries prevent scope creep.
- A use case assessment scales rigour by decision impact, user exposure, affected rights or opportunities, automation level, applicable regulation and context, so a recommendation engine and an unemployment-eligibility model are different governance problems.
- Internal design risk (faulty assumptions, inadequate data, incomplete testing, poor integration, no explainability) differs from external design risk (adversarial use, regulatory change, supply chain, backlash).
- The six named techniques are the probability and severity matrix, the risk mitigation hierarchy, stakeholder mapping, use case evaluation, benchmarking and pre-deployment pilots.
- An impact assessment record with no benefits, no unintended uses or no misuse analysis is incomplete, a common exam trap.
- A demand-forecasting model repurposed to rate individual workers is the standard illustration of a reassessment trigger.
- ISO/IEC 42005 is uncertifiable guidance while ISO/IEC 42001 is certifiable and requires the assessment, and 42005's clause 5 sets up the process while clause 6 defines one system's record.
- Article 9's risk management system is the provider's duty, Article 27's FRIA the in-scope deployer's, and a GDPR DPIA does not replace an AI impact assessment.
- Canada's DADM binds federal institutions, Colorado's SB 26-189 requires no impact assessment, and NYC Local Law 144 requires a bias audit instead.
- Requirements must be verifiable, traceable, unambiguous and measurable, across functional, non-functional, regulatory and security categories.
- Process documentation is written once while system documentation is per system, and a system card covers the whole deployed system where a model card covers the model.
- Residual risk is accepted by a named person, and a 42001 certificate does not by itself meet the Article 17 QMS duty.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): Data Integrity, Life Cycle, Quality Management System (QMS), System Card, Business Context, Use Case, Use Case Assessment, Impact Assessment.

### Further Reading

- [ISO/IEC 42001 (IEC webstore)](https://webstore.iec.ch/en/publication/90574): the certifiable AI management system, and the documentation controls in Annex A
- [AI Standards Hub: how ISO/IEC 42001 guides trustworthy AI](https://aistandardshub.org/iso-iec-42001-trustworthy-ai): a free explanation of the management-system clauses for readers without the paid standard
- [EU AI Act, Article 17 (quality management system)](https://artificialintelligenceact.eu/article/17/): the QMS obligation on providers of high-risk systems
- [EU AI Act, Article 11 (technical documentation)](https://artificialintelligenceact.eu/article/11/): the documentation duty, detailed in Annex IV
- [EU AI Act, Article 13 (transparency and instructions for use)](https://artificialintelligenceact.eu/article/13/): what the system card and instructions for use must tell deployers
- [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993): the model-card format the system card extends
- [ISO/IEC 22989 (IEC webstore)](https://webstore.iec.ch/en/publication/77839): the definitions of life cycle and transparency the documentation terms rest on
- [NIST AI Risk Management Framework (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): the MAP function is the framework's version of this step: context, purpose, intended use
- [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/): per-subcategory suggested actions for framing context and intended use
- [ISO/IEC 42005 (IEC webstore)](https://webstore.iec.ch/en/publication/107659): requires the intended and unintended uses, deployment environment and interested parties in the assessment record
- [GDPR, Article 5(1)(b) (purpose limitation)](https://gdpr-info.eu/art-5-gdpr/): the rule that stops historic data being repurposed for training without a fresh basis
- [OECD Recommendation on AI (OECD/LEGAL/0449)](https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449): the values baseline that use case assessment is usually tested against
- [ISO/IEC 23894 (IEC webstore)](https://webstore.iec.ch/en/publication/82914): the organizational-risk lens that impact findings feed into
- [BSI press release on ISO/IEC 42005](https://www.bsigroup.com/en-GB/insights-and-media/media-centre/press-releases/2025/june/framework-published-to-assess-real-world-ethical-and-operational-impact-of-ai/): a free explainer on scope and who the standard applies to
- [EU AI Act, Article 27 (fundamental rights impact assessment)](https://artificialintelligenceact.eu/article/27/): the deployer-side assessment duty for certain high-risk systems
- [EU AI Act, Article 9 (risk management system)](https://artificialintelligenceact.eu/article/9/): the provider-side risk process that runs alongside the impact assessment

## Chapter 9: Training and Testing Data

*Charlotte, March 2026*

Priya Raman put the number on her first slide in type large enough to read from the back of the room: Clearline candidate v0.9 was "97% accurate on the holdout set." Dana Whitfield, who had waited since January for something to show her underwriters, smiled at it.

Nadia Brennan had met the figure in October, when she had asked who the 3% were and Priya had not known the default rate offhand. This time Nadia asked first. "What's the default rate on the personal-loan book?"

"About five percent," Priya said.

"So a model that approves everyone is 95 percent accurate."

The room went quiet. Priya conceded the point. Her later slides were better, but the headline measured the wrong thing, and the 3% Nadia had asked about in the autumn were errors of a kind nobody had yet named.

Nadia had three more questions. Where did the training files come from, and who approved training on them? How did v0.9 do for thin-file applicants, those with little credit history, and for the Dublin book? And where was any of that written down? Priya could answer the first in part, because the Dublin files had surfaced in February and the privacy work on them was under way. She could not answer the second. The holdout score was one number for everyone.

Dana wanted Clearline live before the summer campaign. So did Nadia, she said, and the fastest route ran through evidence that would survive a validator, a regulator and a declined applicant. She asked Priya for a test plan, Dana for a decision on what "default" meant, and Marcus Hale for a written view on the files.

What makes data, and the evidence built on it, trustworthy? The Body of Knowledge answers under competency III.B with five demands: a defendable legal right to collect and use the data, quality judged against defined dimensions, fitness for the intended purpose, lineage and provenance records, and a testing regime that goes well past accuracy. That regime covers integration, performance, security, bias and interpretability, with each test tied to the risk it catches. This chapter takes authority and quality (9.1), provenance and lineage (9.2), the labels, training methods and held-out data on which every result depends (9.3), testing (9.4), and bias and fairness (9.5).

### 9.1 Authority and Quality

Nadia's first question was about permission, and permission comes first in the discipline too. Before anyone judges whether data is good, the organization confirms a **defendable legal right** to collect, process, store and analyse it. The bases include direct consent (a clear affirmative act), a contractual provision, a privacy notice, or a regulatory allowance such as HIPAA-compliant sharing of health data with deidentification and a business associate agreement. Implicit consent buried in terms of use is not enough in the EU. For training data the normal standard is legal counsel's review ending in a written assertion, backed by source registration, consent records, contract references and a jurisdiction-specific justification.

Marcus's assertion covered the US loan files and the bureau attributes, which arrive under the Fair Credit Reporting Act and the bureaus' licence terms, and it refused to treat a line in the loan terms about "improving our services" as consent. The Dublin files already had a compatibility assessment and lawful-basis record, owned by Dana and written with Siobhan Kelly's advice (Chapter 4).

**Secondary use** is the recurring failure. Repurposing data beyond its collection purpose is function creep, and it needs a compatibility assessment or a fresh legal basis, with GDPR Article 5(1)(b), purpose limitation, the usual blocker. Being internal does not make data usable. When Priya's December idea of feeding collections call transcripts into Clearline (Chapter 3) came back to the council, it was declined as function creep, and the reasons were recorded. When Priya proposed scraping public social-media profiles for thin-file applicants, Nadia advised against it at the balancing step of legitimate interest, doubting that any applicant would expect it, and Dana as data owner turned it down. The EDPB's 2026 draft guidance on web scraping, still open for consultation (Chapter 4), later pointed the same way: with consent rarely workable at that scale, legitimate interest under Article 6(1)(f) is the usual route, and the balancing step, where data subjects' reasonable expectations carry weight, is where such plans are tested.

#### Quality, sufficiency and representativeness

Quality is judged on dimensions rather than impressions, and Priya's team found a failure on each of the five. **Accuracy** (values correct) failed where stated incomes contradicted pay slips, and **completeness** (fields populated) where income verification was missing. **Integrity** (relationships across datasets maintained) failed on broken joins between the application and repayment tables. **Timeliness** (up to date) was the problem with pre-2020 files from the low-rate years, and **consistency** (formats and rules followed) broke when a core-system migration changed the date formats.

**Sufficiency** is enough volume to train effectively. **Representativeness** is capturing the relevant diversity of the deployment environment. The classic failures sit at opposite ends of one dial: too little data underfits, and too much narrow or repetitive data overfits (Section 9.3). The Dublin book was small, and there was no Korean data at all. Worse, outcomes existed only for approved applicants, the selective-labels gap Chapter 8 recorded and data dependency (Chapter 1) at its sharpest. **Fitness for purpose** is the governance judgement that joins these tests: files fit for an unsecured-loan default model are not fit for a mortgage model, however alike the columns look.

For high-risk systems this is law. EU AI Act Article 10 requires training, validation and testing datasets that are relevant, sufficiently representative, and as free from errors and bias as possible, with documented lineage, version control and compliance with privacy law. The Dublin entity, as Clearline's provider, owes that once the Annex III obligations apply (2 December 2027 as amended by the Digital Omnibus on AI, 2 August 2026 as enacted), and it builds to the standard now (Chapter 6).

#### Controls, roles and poisoning

The control set includes data classification with handling requirements per level, data flow diagrams, input and output controls so that data entering and leaving a system is approved and correctly formatted, and data loss prevention (DLP) tooling that alerts on or blocks policy violations. It is the same tooling that stops staff pasting customer data into public chatbots (Chapter 3). Security sits at the data layer (encryption, access management and audit logging on training data) and at the infrastructure layer. **Data owners** are accountable for strategic use: they approve use cases, certify lawful use and sign off risk assessments. **Data stewards** are operational custodians of quality, documentation and issue resolution. In the terms of the Chapter 2 RACI, Dana is the data owner of the loan files and certified their lawful use for Clearline, and Priya's team are the stewards.

Quality checks miss deliberate corruption. Data poisoning, the training-time attack Chapter 3 defined, plants mislabeled or trigger-laden samples in a scraped or third-party dataset so that the model learns wrong or hidden behaviour, such as a backdoor. Evasion and prompt injection instead manipulate inputs at inference time. Clearline's exposure ran through its alternative-data feed and through insiders. Article 15(5) of the AI Act expects high-risk providers to address poisoning where appropriate, so it will bind the Dublin entity for Clearline from the Annex III date. It does not reach Ask Larkspur, which is not high-risk. The controls are training-data integrity checks, provenance requirements on suppliers, and monitoring for anomalous model behaviour after release.

The work ends in a **data sheet** (datasheet), the standardized description of a dataset's composition, collection process, recommended uses and limitations. Model developers, impact assessors, auditors and, in some regimes, the public all rely on it. Priya wrote Clearline's, with the selective-labels limitation in its first paragraph. A datasheet describes the dataset, a model card the model (Chapter 10) and a system card the deployed system (Chapter 8).

### 9.2 Provenance and Lineage

Nadia's question about where the files came from has a technical name. **Provenance** records where data came from and under what conditions: who created or collected it, when, by what method, under what licence and access rights, for what intended purpose, in which jurisdiction, and with what assumptions and limitations. **Lineage** records how and where it moved: ingestion, storage, transformation, consumption, maintenance and disposal, plus the models and systems that consumed it and the retention and deletion operations applied. Jurisdiction was a live field for Clearline, whose US files, FCRA-governed bureau attributes and Dublin applications carried different conditions into one training set. When an engineer offered the training store's access logs as lineage, Nadia sent them back. Access logs say who touched the data, data minimization says how much was collected, and retention says how long it is kept. None of them is lineage or provenance.

Lineage runs in two directions. **Backward lineage** traces a data point to its origin, which is why it is sometimes confused with provenance. A contested decline, whether from an Irish applicant using the rights in Chapter 4 or a US applicant challenging the principal reasons in Chapter 5, requires tracing from the decision back to the training data. **Forward lineage** traces how a data element flowed through systems to influence downstream processes, and it is usually what an incident investigation needs. For Ask Larkspur the question would one day be which version of which document had been indexed for retrieval. That is lineage of retrieval data rather than training data, and Chapter 13 shows why it mattered.

When an AI output is challenged, the organization must trace the input data, and without these records its explanations become speculation. Unrecorded transformations also hide poisoning and unauthorized modification. Regulatory frameworks, the EU AI Act among them, require traceability of source data and its transformations, and clear records make retraining, debugging and litigation defence possible.

Provenance metadata covers source entity, collection method and date, version, licence and terms of use, access rights, intended use or original context, jurisdiction, and assumptions and limitations. For third-party data, policy should require provenance declarations, proof of lawful collection and consent, and documentation of any modifications or aggregations by the source, all of which Larkspur's alternative-data vendor supplied before its feed was admitted. Lineage records cover data source and format, storage location, version history, transformation scripts or **ETL** (extract, transform, load) processes, pipeline paths, consuming systems and models, and retention and disposal. The policy fixes the mandatory metadata fields for new datasets, when provenance must be verified and approved, who owns the documentation, whether capture is automated, and the granularity (dataset, record or feature level). Clearline is recorded at feature level.

The failures are organizational more than technical. **Data and organizational silos** move datasets between departments without clear ownership or standards, as Larkspur's separate US and Dublin teams had. **Shadow AI** puts models and datasets outside sanctioned pipelines, where governance is blind: the lineage work turned up a collections analyst's spreadsheet model built on an unregistered extract. **Fragmented manual documentation** scatters records across tools or loses them. The trade-offs are real. Automated lineage tracking adds latency and storage cost, third-party and open-source models may disclose little provenance because of intellectual property concerns (as Norvane did), and investment in metadata management, auditing and visualization is a genuine budget decision.

### 9.3 Labels, Training Methods and Held-Out Data

Before Priya's team could say how v0.9 performed, they had to settle two things behind any test result: what the model was taught to predict, and what it was tested on. **Data annotation** attaches descriptive information to data without altering it, and in supervised learning it is the label the model learns to predict. **Ground truth** is the value of the target variable for a specific labeled element, and it is only as true as the process behind it. A label that encodes a flawed human judgement, or a proxy that does not measure what you think, teaches the model that error faithfully. Clearline's label was "defaulted within 24 months", and the hard case was loans restructured under hardship plans. Dana decided that a restructuring counts as a default only if the restructured loan later charges off, so that borrowers who asked for help are not penalized, and she logged her reasons. Annotation guidelines, labeler training, disagreement resolution and documented label provenance are the controls.

Where people label by hand, **inter-rater reliability**, a measure of agreement among labelers, is the practical defence against label noise. Clearline's labels came from system records, so the measure mattered more for Ask Larkspur's evaluation set, graded by customer-operations staff against policy. Before transcripts reached that set, **named entity recognition** (recognizing and labeling the names of entities and their categories across sequences of words) redacted customer names and account numbers.

#### Training methods

**Underfitting** is a model too simple, or trained on too little data, to capture the underlying patterns, so it performs poorly on training data and new data alike. **Overfitting** is a model that learns the training data too precisely, noise included, and fails to generalize. Poor performance on both training and test data suggests underfitting. Good training performance with poor test performance suggests overfitting, which is what Priya's team saw in a Dublin-only sub-model. Both are data-volume and data-diversity problems before they are hyperparameter problems, so sufficiency thresholds and reuse limits belong in policy. Against overfitting, **regularization** penalizes complexity: L1 penalizes the absolute value of the parameters and simplifies the model, L2 penalizes their square and promotes stability, and **dropout** does the equivalent in neural networks by randomly switching off units during training. More and more varied data helps, as do **ensembles** or model stacking, which cover the weaknesses of any single approach. Clearline's gradient-boosted ensemble is one, and the team folded the Dublin files back into it, a fix Section 9.5 revisits.

**Synthetic data** is artificially generated records that imitate the patterns and statistical make-up of a real dataset without copying actual records. It is used where real data is scarce, skewed toward some groups, or too risky to use or share, and it is a legitimate representativeness remedy. It lowers privacy risk without removing it, since a generator trained on personal data can reproduce details of real people. When Priya proposed synthetic records for sparse Irish segments, Siobhan required a reidentification test before any entered training, the caveat she had attached in Chapter 4.

**Reinforcement learning with human feedback** (RLHF) has people compare or rank a model's outputs, trains a reward model on those preferences, and then uses reinforcement learning to tune the model toward the responses people prefer. It is how chat-style language models are steered toward helpful, harmless answers. Its bias risks are that the annotator pool's preferences become the model's disposition and that the ranking work is labour-intensive and hard to audit. Larkspur does not train or tune Norvane's model, but that model was tuned this way, so Nadia added the annotator pool to the Norvane API diligence (Chapter 12).

#### Held-out data and transparency

**Test data** (evaluation data) is held back from training and used to evaluate the final model. It is distinct from training data, which the model learns from, and from validation data, used to tune and choose between candidates. Clearline's test set was out-of-time: the most recent vintages, never seen in training. Overlap between training and test data is **test set leakage**, and it inflates performance. Borrowers with several loans had landed on both sides of the split and flattered the 97%, so the team re-split by borrower.

ISO/IEC 22989 defines **system transparency** as appropriate information about the system being made available to relevant interested parties, which may include characteristics, performance, limitations, components, procedures, measures, design objectives, data sources and labeling protocols. The training record and the transparency obligation are the same evidence viewed from two directions, and Clearline's training record became the basis of the Article 13 instructions for use written for Dublin's underwriters.

### 9.4 Testing Beyond Accuracy

With labels fixed and a clean test set, Priya's team wrote the test plan Nadia had asked for. It covered seven kinds of testing, with bias left to Section 9.5. **Unit and component testing** validates data transformations, model wrappers, scoring functions and evaluation logic in isolation, including synthetic edge cases such as nulls, extreme values and malformed input, which for Clearline meant null income and extreme debt-to-income ratios. **Integration testing** validates the seams between data ingestion, model inference, storage and downstream systems: input scrubbing for format conformity, interfaces under load, type mismatches, and correct handling of predictions by dashboards and decision systems. It should simulate end-to-end workflows, including failure conditions such as dropped records or an unavailable service. Clearline's tests caught the loan origination system passing applicant age as a string rather than a number, checked the underwriter screen, and confirmed the fallback to the manual underwriting queue when Clearline was down.

**Validation testing** asks whether the system solves the stated business problem, against criteria defined before testing starts. Clearline's criterion was to beat Scorecard 7 at the target approval rate. **Benchmarking** against established references, reference models or peer implementations is a comparative check that also helps defend the design in an audit or litigation. **Performance testing** covers inference latency, throughput and scalability, and resource use, and it tests the peak rather than the average. A model averaging 50 ms but spiking to 2 s still breaks the user experience, as campaign traffic would for instant online decisions.

**Security testing** for AI sits on top of conventional vulnerability scanning and penetration testing. **Adversarial testing** injects inputs crafted to cause misclassification, sometimes with perturbations imperceptible to a human. Poisoning and backdoor assessment inspects training-data integrity for malicious influence. Extraction and inversion testing asks whether an attacker can reverse-engineer behaviour or reconstruct training data through repeated querying, which is where memorization risk shows up. Clearline's obvious probe point was the instant-quote tool on Larkspur's website, and the team also tested for membership inference (Chapter 3).

**Interpretability testing** answers opacity, the Chapter 1 characteristic. It uses model-agnostic methods to explain individual predictions and reveal spurious correlations. **SHAP** (Shapley additive explanations) assigns each feature a share of one prediction, and **LIME** fits a simple local model around it. Global methods such as feature importance and coefficient inspection say what the model generally values, and **simulatability** asks whether a human can follow the prediction at all. Clearline's SHAP-based reason codes support the ECOA principal reasons (Chapter 5) and the concise account of the logic that Dun & Bradstreet Austria requires for Irish applicants (Chapter 4). They support those duties without discharging them, so Dana's adverse-action template was checked against the codes.

#### Reading the results

**Precision** is the proportion of positive predictions that are correct, so high precision means few false positives. **Recall** is the proportion of actual positives identified, so high recall means few false negatives. They trade off through the decision threshold. For Clearline a positive is a predicted default. Flagging more applicants catches more defaulters and cuts credit loss, but it sends more creditworthy applicants to underwriters, some of whom will decline them. Here probabilistic outputs (Chapter 1) become a decision someone must own. Dana proposed the threshold, Tom Ashby accepted it, and the decision log recorded why it sits where it does.

A model can pass validation and still fail in production through dataset shift, new edge cases or new adversarial techniques. **Brittleness** is catastrophic collapse on inputs slightly outside the training distribution, a lack of robustness and generalization rather than a bug. Clearline's version would be rising rates after years of low-rate training data, which Chapter 10's monitoring watches for. Evaluation risks compound it: the wrong metric, test set leakage and insufficient subgroup coverage. Testing is therefore documented as a plan (objectives, scope, scenarios, metrics, pass/fail criteria) and as results (issues, remediation, after-action review, dataset and code versions). Regression testing follows whenever operating parameters or training data change, which for Clearline means every retrain.

### 9.5 Bias and Fairness

Nadia's thin-file question was a fairness question, and one score for everyone hides who bears the errors. NIST SP 1270 sorts bias into three categories. **Systemic bias** lives in datasets, organizational norms and practices, and broader societal structures. **Computational and statistical bias** is systematic error from non-representative samples or from the algorithmic process. **Human-cognitive bias** concerns how individuals and groups perceive AI information, make decisions and fill in missing information. The mechanisms that produce bias come from a separate taxonomy in the machine learning literature, and Priya's team found each of them in Clearline:

- **Historical bias**: the world and the labels were already biased, and the model learns it faithfully. Clearline's labels exist only where past underwriters approved.
- **Representation bias**: subgroups are under-sampled, as thin-file and younger applicants were.
- **Measurement bias**: the proxy does not measure what you think. Charge-off stands in for creditworthiness, and hardship restructurings distort it.
- **Aggregation bias**: one model is forced across distinct subgroups, the risk created by folding the Dublin files into the US model.
- **Evaluation bias**: the benchmark is unrepresentative, like a test set drawn only from approved loans.
- **Automation or confirmation bias**: humans over-trust or cherry-pick the output, as underwriters followed Scorecard 7 about 99% of the time (Chapter 2).

The canonical historical-bias case is a recruitment model trained on past hiring. That is why HR's Brightlist screener needed an independent bias audit for New York City roles under Local Law 144, which requires impact ratios to be disclosed but sets no pass/fail threshold (Chapter 6).

#### Outcomes, not features

Deleting protected attributes does not remove discrimination, because proxies carry the signal (postcode for race, career gaps for gender, device type for class) and historical patterns in the data do the rest. The rule is to assess **outcomes**, not features: a model with no race variable can still deny credit on racial lines. Clearline excludes race and had dropped its ZIP-derived features (Chapter 8), but device type and other correlated features remained. Larkspur does not collect race or ethnicity for personal loans, because Regulation B generally prohibits asking except for mortgage monitoring and self-testing, so US testing estimates group membership with statistical proxy methods. That testing continued after the CFPB's Regulation B rule took effect on 21 July 2026, for the reasons Nadia's July memo records (Chapter 5). In the EU, Article 10's demand for datasets as free from bias as possible means examining them for bias. Where that needs special-category data, Article 4a, inserted by the Digital Omnibus on AI in place of Article 10(5), supplies a basis for using such data strictly to detect and correct bias, with safeguards (Chapter 4).

#### Choosing a metric

**Bias testing** evaluates outputs for unfair differences across demographic groups, sensitive attributes and protected characteristics. Two methods carry the most weight. **Performance parity** measures how metrics such as accuracy and false positive rate vary across groups, surfacing disparities that aggregate accuracy hides, including those that arise through proxies. **Counterfactual fairness** asks whether the decision would change if a sensitive attribute were altered, the closest test to the question a regulator asks. It is often run as a flip test that holds everything else constant, while the formal causal definition also lets the attribute's downstream effects on other features change.

Three standard metrics make the choice concrete. **Demographic parity** asks for equal approval rates across groups. **Equalized odds** asks for equal error rates, so that repayers in each group are approved at the same rate and so are defaulters. The **disparate impact ratio** divides one group's approval rate by the most favoured group's rate. These metrics **conflict**, as the illustration Nadia showed the council makes plain. It takes two groups of 1,000 applicants whose underlying default rates differ: 5% in Group A and 20% in Group B.

| Measure | Option 1: equal error rates | Option 2: equal approval rates |
|---|---|---|
| Repayers approved (A / B) | 90% / 90% | 90% / 100% |
| Defaulters approved (A / B) | 20% / 20% | 20% / 32.5% |
| Overall approval rate (A / B) | 86.5% / 76.0% | 86.5% / 86.5% |
| Disparate impact ratio (B over A) | 0.88 | 1.00 |
| Equalized odds | Met | Not met |
| Demographic parity | Not met | Met |

Option 1 treats repayers alike in both groups, yet Group B's approval rate falls because more of its applicants would default. Option 2 equalizes approval rates only by approving Group B's defaulters more readily and holding Group A's repayers to a stricter standard. Satisfying one can violate another, so choosing which principle to prioritize is a documented governance decision, whatever the tooling (AIF360, Fairlearn or the What-If Tool). The council chose equalized odds as Clearline's primary measure, with the disparate impact ratio monitored against a review trigger, and Dana approved the memo and its rationale.

#### Before and after release

Bias is largely a data problem before it is a model problem. Data dependency (Chapter 1) means AI systems rely heavily on data quality, volume and diversity, so poor or unrepresentative data yields inaccurate or unfair outcomes however good the algorithm. A **data quality review** checks completeness, systematic deviations and other factors that impair usefulness, catching label noise, imbalanced classes and outliers. Representativeness work means demographic audits, distribution checks and outlier detection, with mitigations such as data augmentation, resampling and carefully constructed synthetic data that cannot be reidentified.

Fairness is not settled at release. Subgroup performance can degrade in production as populations and behaviours shift, so sensitive-attribute tracking, subgroup degradation alerts, complaint and appeal analysis (fed by Owen's appeals data) and override logs are standing controls, which Chapter 10 builds. This is the work the Body of Knowledge frames as **responsible AI** (Chapter 1): designing, developing and deploying systems that respect human rights, promote fairness and minimize risk while delivering benefit.

### A Binder With Names in It

The chapter runs in one order. Authority comes before quality. Quality, provenance and lineage make data describable and traceable, labels and held-out sets decide what a result means, and testing reaches past accuracy to the seams, the peaks, the attackers and the explanations. Fairness is read in outcomes because a feature list cannot show where harm lands. Each step leaves a document, and each document needs a signature.

By mid-May Nadia had a binder for Clearline, and every document in it, from Marcus's legal assertion to the fairness memo the council decided and Dana approved, carried a named owner. None of the names was Nadia's.

Dana still wanted Clearline live before the summer campaign, and Nadia called the release board for the first week of June. The binder described the model Priya's team had tested. The board would have to prove that the same model was the one about to ship.

### The Record

Nadia's binder held six sets of records by the end of May.

- **Training-data legal assertion.** Owner: Marcus Hale. Written authority for the US loan files and bureau attributes, filed beside the Dublin compatibility assessment.
- **Clearline datasheet, with provenance and lineage records.** Owner: Priya Raman. Composition, collection, limitations including selective labels, and feature-level lineage.
- **Label-definition decision.** Owner: Dana Whitfield. "Defaulted within 24 months," and how hardship restructurings count.
- **Test plan and results.** Owner: Priya Raman. Seven test types, criteria set in advance, dataset and code versions, and regression testing on every retrain.
- **Threshold decision.** Owner: Dana Whitfield, accepted by Tom Ashby. Where the cut-off sits and which errors it trades.
- **Fairness-metric memo.** Owner: Dana Whitfield, on the council's decision. Equalized odds as the primary measure, with the disparate impact ratio monitored.

### Exam Focus

These distinctions and traps recur in questions on training and testing data.

- Authority comes before quality, counsel's written assertion is the normal standard for training data, and implicit consent buried in terms of use is not enough in the EU.
- Secondary use (function creep) is the recurring failure and needs a compatibility assessment or a fresh basis under GDPR Article 5(1)(b), and the EDPB's 2026 web-scraping guidance, still a draft, points to Article 6(1)(f) legitimate interest.
- Quality has five dimensions (accuracy, completeness, integrity, timeliness, consistency), sufficiency (volume) differs from representativeness (diversity), and fitness for purpose turns on exposure: data adequate for language translation can be unfit for a medical advice chatbot because the ethical implications and legal exposure differ.
- Data owners approve use cases, certify lawful use and sign off risk assessments while data stewards are operational custodians, and a datasheet describes the dataset, a model card the model and a system card the deployed system.
- Poisoning strikes at training time, whereas evasion and prompt injection strike at inference time, and Article 15(5) asks high-risk providers to address poisoning where appropriate.
- Provenance records origin and conditions while lineage records movement and transformation, data minimization, access logs and retention are the classic distractors for both, and backward lineage (sometimes confused with provenance) differs from forward lineage, which incident investigations usually need.
- The seven test types are unit, integration, validation, performance, security, bias and interpretability, and performance is tested at the peak rather than the average (a 50 ms average with 2 s spikes still fails).
- In the accuracy trap's classic medical form, at 5% disease prevalence calling almost every case healthy scores 95% accuracy and is clinically useless, so read precision (false positives) and recall (false negatives), which trade off through the threshold.
- Brittleness is a lack of robustness and generalization rather than a bug, and the named evaluation risks are the wrong metric, test set leakage and insufficient subgroup coverage.
- NIST SP 1270 supplies three categories (systemic, computational and statistical, human-cognitive), the mechanisms are historical, representation, measurement, aggregation, evaluation and automation or confirmation bias, and a recruitment model trained on past hiring is the canonical historical case.
- Fairness is assessed on outcomes rather than features, performance parity and counterfactual fairness carry the most weight (counterfactual fairness is closest to the regulator's question), and conflicting metrics make the choice among them a documented governance decision.
- Poor training and test performance suggests underfitting while good training with poor test performance suggests overfitting, L1, L2 and dropout are the regularization tools, synthetic data is not automatically anonymous, and test data is distinct from training and validation data.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): Data Acquisition, Data Governance, Data Poisoning, Data Quality, Data Sheet, Data Lineage, Data Provenance, Adversarial Example, Benchmarking, Brittleness, Integration Testing, Precision, Recall, Security Testing, Unit Testing, Algorithmic Bias, Bias (Systematic Deviation), Bias Testing, Counterfactual Fairness, Data Dependency, Data Quality Review, Fairness, Fit-for-Purpose, Responsible AI, Training and Testing, Data Annotation, Ground Truth, Named Entity Recognition (NER), Overfitting, Reinforcement Learning with Human Feedback (RLHF), Synthetic Data, Test Data (Evaluation Data), Transparency (System), Underfitting.

### Further Reading

- [EU AI Act, Article 10 (data and data governance)](https://artificialintelligenceact.eu/article/10/): the legal data requirements for high-risk systems: relevance, representativeness, error freedom, completeness
- [EU AI Act, Article 15 (accuracy, robustness and cybersecurity)](https://artificialintelligenceact.eu/article/15/): Article 15(5) is where the expectation to address data poisoning sits
- [GDPR, Article 5(1)(b) (purpose limitation)](https://gdpr-info.eu/art-5-gdpr/): the rule that governs secondary use of training data
- [EDPB Opinion 28/2024 on AI models and personal data](https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en): the three-step legitimate-interest test for training on personal data
- [EDPB draft Guidelines 03/2026 on web scraping](https://www.edpb.europa.eu/public-consultations/guidelines-032026-on-web-scraping-in-the-context-of-generative-ai_en): the draft position on scraping at scale, still in consultation as of September 2026
- [Datasheets for Datasets](https://arxiv.org/abs/1803.09010): the data sheet format: composition, collection process, uses and limitations
- [NIST AI 100-2, Adversarial Machine Learning taxonomy](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2023.pdf): the poisoning, evasion, extraction and inference taxonomy behind the integrity controls
- [ISO/IEC 22989 (IEC webstore)](https://webstore.iec.ch/en/publication/77839): the ISO definitions of data provenance and data lineage the wording tracks
- [NIST AI Risk Management Framework (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): the MAP function's data provenance and documentation outcomes
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/): the practical attack list for prompt injection, insecure output handling and model theft
- [MITRE ATLAS](https://atlas.mitre.org/): adversarial tactics and techniques mapped to AI systems, useful for threat modelling
- [LIME: explaining the predictions of any classifier](https://arxiv.org/abs/1602.04938): the model-agnostic local explanation method named in the knowledge area
- [SHAP: a unified approach to interpreting model predictions](https://arxiv.org/abs/1705.07874): the attribution method used for feature importance and individual explanations
- [CISA artificial intelligence resources](https://www.cisa.gov/ai): free government guidance on AI security testing and threat mitigation
- [NIST SP 1270, Towards a Standard for Identifying and Managing Bias in AI](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf): the three bias categories and the measurement guidance this card is built on
- [NIST AI 600-1, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): the GenAI-specific bias and homogenization risks, and suggested measurement actions
- [ISO/IEC 42005 (IEC webstore)](https://webstore.iec.ch/en/publication/107659): Annex C's harms and benefits taxonomy includes the fairness theme impact assessment uses
- [ICO guidance on AI and data protection](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/): the UK regulator's practical fairness and bias testing expectations for AI systems
- [The Secret Sharer: unintended memorization in neural networks](https://arxiv.org/abs/1802.08232): why synthetic and generated data still carries privacy risk
- [scikit-learn, decision trees](https://scikit-learn.org/stable/modules/tree.html): a free worked example of a simple, inherently interpretable model and its overfitting behaviour
- [GDPR, Article 9 (special categories)](https://gdpr-info.eu/art-9-gdpr/): labeling can create special-category data even when the raw input did not contain it

## Chapter 10: Release and Monitoring

*Charlotte, June 2026*

The release board met a week before Clearline was due to score its first live application. Dana Whitfield set the summer campaign calendar beside the spring's evidence binder, every tab carrying an owner's name. The underwriters were trained, the validation team had signed its report, and Dana wanted to ship.

Nadia Brennan had three questions on an index card. "Who signs the release?" Dana would, as Clearline's accountable owner, and Nadia wrote the name down. "What happens on day one if Clearline misbehaves?" Priya Raman answered in a sentence: every application drops back to the manual underwriting queue the underwriters had worked for years. Nadia turned the card over. "Is the version going live the version that was tested?"

"Yes," Priya said. The build the validators had tested in May sat packaged in staging.

Nadia asked to see it anyway. Years in model risk had taught her that "the same model" is a claim and a registry entry is the evidence. A platform engineer put the model registry on the wall screen and opened two entries side by side, the artifact the validators had signed off and the artifact staged for production. Each carried a hash computed from the file itself, so two copies of one build always match. Priya read them twice. They did not match.

A release is the last moment when a mistake costs nothing but time. This chapter covers the back end of the lifecycle: deciding that a system is ready to release, moving it into production under policy and change control, and keeping it accurate, fair and secure afterwards through continuous monitoring, periodic assessment and a scheduled cadence of maintenance and retraining, with incidents managed and documented. Section 10.1 covers readiness and the final gate, 10.2 deployment, and 10.3 the monitoring and maintenance that continue for as long as the system runs. Release is a one-time gate, and everything after it is ongoing. Chapter 13 gives periodic assessment (13.2) and incident management (13.3) their full treatment, building on the monitoring set up here.

### 10.1 Readiness Before Release

Dana's case at the board was simple: the evidence was in, so why wait? The discipline answers with a structured review. A **production readiness evaluation** covers six areas: safety, accountability, suitability for the intended context, regulatory conformity, performance benchmarking and operational planning. Its headline artifact is the model card.

A **model card** is a short document released with a trained model, stating its intended and out-of-scope uses, how it was evaluated, how it performs across relevant groups and conditions, and its known limitations. The format comes from Mitchell et al. (2019). A model card describes the model, a system card the whole deployed system, and a datasheet the dataset. Writing one also does governance work inside the organization, because it forces the team to confront assumptions, limitations and real-world performance instead of reporting a single accuracy figure.

Nadia had rejected Clearline's first model card for exactly that reason: it reported one AUC figure and little else. The revised card named the intended use (unsecured personal-loan underwriting in the US and, through the Dublin entity, Ireland) and put mortgages and insurance products out of scope. It reported performance for thin-file applicants, age bands and regions, listed limitations such as the small Dublin book, and recorded about 46 features, down from the prototype's 312. A system card covered the whole decisioning pipeline from bureau feed to underwriter queue, following Chapter 8's documentation map, and the datasheet already sat in the Chapter 9 binder.

#### Conformity and legal evidence

For a high-risk system under the EU AI Act, readiness includes the chain Chapter 6 set out: a **conformity assessment** (Article 43), technical documentation under Article 11 and Annex IV, the EU declaration of conformity (Article 47), CE marking (Article 48) and registration in the EU database. For Annex III credit scoring the assessment rests on internal control, with no notified body (Article 43(2)). The Dublin entity, as provider, built Clearline's file to that standard for the September go-live. Annex III duties apply from 2 December 2027 as amended by the Digital Omnibus on AI (2 August 2026 as enacted), so registration and CE marking are prepared and scheduled for when they apply, as Chapter 6's build-to-standard memo records.

Readiness needs other evidence too. The organization must show that all training and fine-tuning data was lawfully sourced, licensed and privacy-compliant, which Marcus Hale confirmed in writing. Internal or third-party validation is required where governance boards demand it, and Clearline's came from the independent validation team reporting to Tom Ashby. Insurers add conditions that are contractual rather than legal. Cyber policies increasingly require change management, code review, gate reviews and periodic risk assessments, and Larkspur's insurer asked for change-management evidence. No US conformity regime applies to Clearline, so the US readiness question is whether its reason codes support the principal reasons that ECOA and Regulation B require in adverse-action notices.

#### Testing under load and under attack

**Stress testing** exercises the system under expected and edge-case workloads: latency and throughput benchmarks (critical for real-time use), memory and compute use under load, and failover behaviour during outages or degraded performance. Clearline's tests simulated a campaign spike and a credit-bureau outage. **Red teaming** is the adversarial complement, in which a team simulates attacks or misuse scenarios to surface vulnerabilities that standard testing misses. It is the technique that catches prompt injection, jailbreaks, model extraction and misuse paths, as opposed to ordinary bugs, so evaluation against adversarial and malicious prompts belongs to it and not to load testing. For a credit model the attackers look different. Larkspur's red team played brokers inflating stated income and applicants reapplying to probe the cut-off, an evasion pattern that, pursued far enough, extracts the decision boundary. Prompt injection belongs to Ask Larkspur, and Chapter 13 takes it up.

#### Fail-safe, rollback and the canary

A **fail-safe plan** is a fallback decided in advance for when the system behaves anomalously, unsafely or outside its set limits. The plan may be to halt safely, hand over to a backup system, or revert to a manual process. The EU AI Act lists backup or fail-safe plans among the technical redundancy solutions supporting the robustness of high-risk systems (Article 15(4) and Recital 75). A **rollback procedure** does a different job: the fail-safe responds to the system's behaviour, while a rollback reverses a release. Clearline's fail-safe was the manual underwriting queue named in its Chapter 8 design baseline, because for credit the safe state is referral to a human, never an automatic decline. Its rollback redeployed the prior version from the registry. Scorecard 7 was still scoring applications in parallel until its retirement, so a first rollback would simply return traffic to the old process.

The release itself runs through change management with release, verification and rollback procedures, then staged rollouts behind feature flags and **canary deployments** that expose a small share of real traffic first, with monitoring for KPIs and leading risk indicators and clear escalation channels. Clearline's canary sent 5% of US applications to the model in mid-June. Speed and scale, the Chapter 1 characteristic, is the reason: at 6,000 applications a week, a full-volume error reaches thousands of people before a monthly report catches it. Dublin was staged separately for September.

#### The final gate

Before release, a multidisciplinary team confirms seven things, each for a reason:

1. Documentation is complete (model cards, design artifacts, audit logs, licensing records, test reports), because someone will ask for it later.
2. Risk mitigations are implemented or deferrals approved, because an unrecorded gap is an unowned risk.
3. Security hardening and incident response are validated, because attacks can start on day one.
4. Operational readiness and monitoring plans exist, because nobody can watch what was never instrumented.
5. Compliance is verified against the legal register.
6. Version control and traceability are intact, so the thing released is the thing approved.
7. Users and operations staff are trained, because a control nobody can operate exists only on paper.

The work divides among six functions: legal (data use, licensing, contracts), engineering (technical validation and scalability), business (value alignment), cybersecurity (vulnerabilities addressed), privacy (data use review) and governance (fairness, accountability, transparency). Larkspur's gate record carried names. Marcus signed for legal, Priya for engineering and Dana for the business, including underwriter staffing. Siobhan Kelly completed the privacy review, the CISO confirmed security, Nadia signed for governance, and the validation team attached its report. One mitigation was deferred. Clearline still underperformed for thin-file applicants, so they stayed routed to human review, and Tom signed the deferral with a stated rationale.

### 10.2 Deployment

Once the gate is passed, the task is to reach production without anything changing on the way. The environment (cloud, on-premises, edge or hybrid) should already be settled, because that decision belongs in the design phase, not at release: it determines what testing and controls are possible. Clearline's was settled in design. Irish applications are scored in an EU cloud region, which simplifies the GDPR transfer analysis. The separate optimization choice, whether to deploy a model as-is, fine-tune it or add retrieval augmented generation, does not arise for a model Larkspur trained itself. Chapter 11 compares the environments and the options for Ask Larkspur.

#### Policy, traceability and the registry

An effective deployment policy makes approval gates contingent on prior compliance, legal and security signoffs. Its release procedures are strict: developers do not hold production admin, and the packaged system is handed to operations. Development, staging and production are isolated, and rollback procedures name escalation contacts and fail-safe steps. The goal is deployment that is **traceable, repeatable and reversible**, delivered by version control, CI/CD logging and a **model registry**. The registry tracks versions, training data lineage, metadata, deployment status, ownership and contacts, so reproducibility becomes a lookup instead of a reconstruction. Priya's data scientists lost production admin, and Clearline v1.0 went to the platform team through the CI/CD pipeline with a registry entry recording its version, training vintages, status, owner and escalation contacts.

That registry caught the near miss. The staged artifact was an older build than the validated one, left behind when a pipeline step picked up a cached package. Had it shipped, Larkspur would have released a model nobody had validated under a gate record saying someone had. The team rebuilt from the validated artifact, confirmed that the hashes matched, and the release board approved the release that afternoon. Nadia had the near miss recorded, and the deployment policy gained a rule that no release proceeds until the staged and validated hashes match.

Product liability has a name for what nearly shipped. A **manufacturing defect**, one of the three defect theories in Chapter 5, is a deviation from the intended design during production, and for AI it maps onto deployment-stage failures: a corrupted model artifact, a misconfigured pipeline, or a version shipped that was not the version tested. For Clearline the analogy stays conceptual, because the revised Product Liability Directive gives no claim for a credit denial and applies only to products placed on the market after 9 December 2026.

#### Duties along the value chain

Legal duties at deployment run along a chain of operators. **Conformity requirements** are the standards, regulations and internal policies a system must satisfy before deployment, and the provider's pre-market steps in 10.1 come first. Importers, distributors and authorized representatives carry their own duties (Articles 22 to 24). Article 25 can push provider obligations onto a distributor, importer or deployer that substantially modifies the system or puts it into service under its own name. Deployers owe the Article 26 set: using the system per the instructions for use, human oversight, input data relevance, logging, informing workers and affected persons, and cooperating with authorities. Clearline's chain is short. Chapter 6 made the Dublin entity its provider and rejected the US parent acting through an authorized representative, so no importer or distributor sits in between, and as deployer the Dublin entity will owe the Article 26 duties itself once Annex III obligations apply.

#### People and partners

Training internal users is part of the control set: role-based and administrative instruction, confidence thresholding so people know when to intervene, job aids, and refreshed enablement as models change. Clearline's underwriters, trained by role as Chapter 2 prescribed, learned the referral band, where near-cut-off and low-confidence scores reach them, and got job aids explaining each reason code on the review screen that Chapter 3's oversight standard required. Customer-facing systems owe disclosure of AI capabilities, a plain-language description, and notice-and-consent. For credit the operative word is notice, since consent is not the lawful basis for scoring (Chapter 4's record rests Irish credit decisions on contract necessity). Irish applicants receive GDPR information and their Article 22 safeguards, and US applicants receive adverse-action notices.

Where an **AI partner** collaborates in development or deployment, or a third party operates the system, the governance obligations do not transfer, even though visibility drops. Specific contractual terms, audit rights and periodic assessment or audit of the partner's environment keep accountability with the deploying organization. Clearline's partners, an external validator and the credit bureau, sit under contracts with audit rights, and Chapter 12 tests the same principle with Norvane.

### 10.3 Monitoring and Maintenance

The canary expanded to full US volume in July, and the question shifted from whether Clearline was ready to whether it was still fit. Emergence, the trait Chapter 1 added to the seven characteristics, is why that question never closes: behaviour in production can shift as the world shifts, even when nobody touches the code.

Continuous monitoring tracks prediction quality (accuracy, precision, recall, confidence) and data inputs (volume, format, anomalies, missing values, and prompt injection or model poisoning where relevant). It also tracks latency and performance under varying load, resource consumption (CPU, GPU, memory, storage, network), fairness across subgroups over time, drift in data distribution or model output, and usage metrics such as adoption rates, abandonment and user behaviour. Clearline's defaults take months to appear, so its dashboard treats inputs as the leading signal: feature distributions, missing-value rates from the bureau feed, and approval and override rates by subgroup.

Monitoring says what is happening. The higher goal is **observability**, the ability to say why a model produced a given output, which requires traceable prediction paths, logged model versions and configuration, and correlation of outputs with inputs. Every Clearline decision logs its model version, inputs and reason codes, so any one applicant's outcome can be explained.

#### Drift

**Data drift** is a change in the statistical properties of input data over time, so that production data diverges from training data. **Covariate drift** is a change in the input distribution, such as new customer behaviours, which for Clearline would be a new digital channel bringing younger, thin-file applicants. **Label drift** is a change in the distribution of outcomes, such as loan defaults rising. **Concept drift** is a change in the relationship between inputs and outputs, as when fraud tactics evolve so that old patterns no longer predict new fraud, or when stated income predicts repayment differently as gig-economy income grows. Detection uses statistical tests such as Kolmogorov-Smirnov or the **population stability index** (PSI), prediction monitoring for sharp drops in confidence or consistency, and shadow models trained on recent data for comparison against production. Larkspur tracks PSI on Clearline's inputs and keeps a shadow Clearline retrained on recent vintages.

#### Fairness, process and tripwires

Fairness can degrade after release even when a model passed pre-release fairness testing, so monitoring tracks prediction patterns across sensitive attributes, subgroup degradation, user complaints and appeal outcomes, and transparency. Clearline tracks the fairness metric the council chose in May (Chapter 9), using proxy methods for US personal loans because Larkspur does not collect race or ethnicity. Ethical indicators include surges in opt-outs or complaints, increases in flagged content, and escalation logs showing overrides or rollbacks.

Monitoring must cover all aspects of any business process enabled by AI, not only the model, because the workflow can fail while the model behaves. Leading indicators that should trigger review or suspension are a rapid rise in edge-case failures, repeated human overrides of predictions, declining user trust or engagement, rising toxicity, misinformation or hallucination, and a rapid increase in abuse cases. Governance teams maintain **tripwires** that force a review, and any occurrence in these areas is treated as an incident.

Clearline's first tripwire fired in July. The override log from Chapter 3 showed underwriters in one region overturning Clearline's referrals at twice the normal rate. Logged as an incident, the spike traced to the income-verification vendor, which had changed its file format and silently zeroed a field. A zero is a value, so the missing-value alarm stayed quiet. The model behaved as built, the process around it failed, and the underwriters, in the loop on every non-approval and reading the real documents, noticed first. The feed was fixed, the affected applications were rescored, and the input monitors gained a check for runs of identical values.

#### Operational controls and maintenance

**Operational controls** are the policies, procedures and technical mechanisms governing how a system behaves in production. Beyond generic access controls, monitoring thresholds and intervention protocols, AI adds alerting for unusual model behaviour, fail-safe defaults that deny by default, **shadow mode** deployment (a new version runs in parallel, with no effect on decisions, before production), and a **kill switch** to disable a faulty model. Clearline v1.1 will run in shadow against v1.0 before promotion, and the kill switch sends every application to manual underwriting. For credit, deny by default means fail-closed on automation: no automated approvals, and never automatic declines.

A **maintenance schedule** sets cadence by volatility and risk. Model quality evaluation runs quarterly or monthly, scheduled retraining anywhere from weekly to annually depending on how fast the environment moves, and hotfixes immediately for urgent failures. Quarterly business reviews cover metrics, KPIs and incidents, and dependency and compliance updates include regulatory reassessment. Clearline gets a monthly quality review, annual retraining plus retraining when PSI breaches its threshold, and quarterly business reviews with Dana and Tom.

**Retraining** updates a trained model with different training data, trading accuracy gains against infrastructure cost and freshness against the risk of instability. It is also a governance event. A retrained model is a reassessment trigger (Chapter 8), and Chapter 6 recorded that Article 111(2) would shelter Clearline only until its design changed significantly, probably at the first material retrain, which is one reason the Dublin file was built to the full standard early. Each retrain is checked against the technical documentation before it enters shadow.

**Feedback loops** are the structural risk beneath all of this. When a system's outputs influence the future inputs it learns from, bias and error can amplify over time, so circuit breakers and feedback monitoring belong in the control set. Clearline sees repayment only for loans it approved (the selective labels of Chapter 9), so Larkspur adds reject inference and a small sample of below-band applications that underwriters approve after review.

#### The Dublin post-market monitoring plan

For the Dublin entity, monitoring is also law. Article 72 requires **post-market monitoring** of high-risk systems under a plan written before release, stating what real-world data is collected, how it is reviewed, by whom, and what thresholds trigger action. Clearline's plan reuses the US dashboard with Irish segments, names Dana as owner, runs through Priya's team with Siobhan consulted, and was prepared for September ahead of the date it applies. Chapter 13 connects it to incident handling and records.

### Live in Charlotte, Scheduled for Dublin

Release, deployment and monitoring guard against one failure: a system in front of customers that is not the one anyone approved, or no longer behaves like it. The gate makes approval explicit and owned, and deployment keeps the approved artifact intact on its way to production. Monitoring accepts that even an intact system drifts as its inputs, outcomes and surrounding process move, and it sets tripwires, controls and a cadence so that someone notices and someone decides. Passing the gate begins real-world operation, the most consequential phase of the lifecycle, and a system that clears every pre-release check is still unfinished.

By the end of July, Clearline was scoring every US personal-loan application. Dana owns the release, the canary and the Dublin monitoring plan, Priya the model card and the registry, Tom the thin-file deferral, and Nadia the gate record. The near miss and the override spike each have a record, and neither harmed an applicant. The Dublin file is on schedule for September, with registration and CE marking scheduled for when they apply.

Clearline's decisions had owners partly because Larkspur made each one itself. Meanwhile Ask Larkspur had been answering customers since April, built by Larkspur on a Norvane model it cannot inspect and that had already changed once without notice. Part IV goes back to January 2026, when Owen Park proposed putting Ask Larkspur in front of customers, and follows it through the decision to deploy, the assessments and contract that decision required, and the work of running it and one day switching it off. The accountability is the same as Clearline's. The control is not.

### The Record

Chapter 10 added these artifacts to Larkspur's record.

- **Clearline model card and system card v1.0.** Owner: Priya Raman. Intended and out-of-scope uses, performance by segment, limitations and about 46 features, plus the pipeline from bureau feed to underwriter queue.
- **Release gate record.** Owner: Nadia Brennan. Seven sign-offs, Dana Whitfield's release signature and Tom Ashby's signed thin-file deferral with its rationale.
- **Near-miss record and registry entry.** Owner: Priya Raman. The hash mismatch, the rebuild and the rule that no release proceeds until hashes match.
- **Canary and fail-safe plan.** Owner: Dana Whitfield. The 5% US canary, rollback to the prior process, and the manual underwriting queue as the safe state.
- **Dublin post-market monitoring plan.** Owner: Dana Whitfield. Data, reviewers and action thresholds under Article 72, prepared ahead of the date it applies.
- **Override-spike incident record.** Owner: Dana Whitfield. The July tripwire, the zeroed income field and the new input check.

### Exam Focus

This chapter maps to BOK competency III.C, governing release, monitoring and maintenance, and these points are the likeliest to be tested.

- A production readiness evaluation covers six areas (safety, accountability, suitability for the intended context, regulatory conformity, performance benchmarking, operational planning), with the model card as its headline artifact.
- The exam distinguishes a model card (the model), a system card (the whole deployed system) and a datasheet (the dataset).
- The EU high-risk pre-market set is conformity assessment (Article 43), technical documentation (Article 11 and Annex IV), the declaration of conformity (Article 47), CE marking (Article 48) and EU database registration, and credit scoring uses internal control with no notified body.
- Stress testing covers load, edge cases and failover, while red teaming is the technique that catches prompt injection, jailbreaks, model extraction and misuse paths rather than ordinary bugs.
- A fail-safe plan responds to the system's behaviour and a rollback reverses a release, and for credit the safe state is referral to a human, never automatic decline.
- The final gate confirms seven items across six functions, and a deferred mitigation passes only if it is approved and documented.
- The deployment environment is a design-phase decision, not a release decision, because it determines what testing and controls are possible.
- Deployment should be traceable, repeatable and reversible through version control, CI/CD logging and a model registry, with developers kept out of production admin, and a version shipped that was not the version tested is the AI form of a manufacturing defect.
- Articles 22 to 24 cover importers, distributors and authorized representatives, Article 25 can make an operator that substantially modifies a system or puts it into service under its own name the provider, and Article 26 lists deployer duties.
- Monitoring shows what is happening while observability explains why, and covariate, label and concept drift (inputs, outcomes, and the relationship between them) are caught with Kolmogorov-Smirnov, PSI and shadow models.
- Leading indicators such as repeated human overrides are tripwires whose every occurrence is an incident, cadence follows volatility and risk, and retraining is a change that can trigger reassessment.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): Fail-Safe Plan, Model Card, Production Readiness Evaluation, Red Teaming, Stress Testing (AI), A/B Testing, AI Partner, Conformity Requirements, Deployment, Manufacturing Defect, Concept Drift, Continuous Monitoring, Data Drift, Feedback Loop, Maintenance Schedule, Operational Controls, Retraining.

### Further Reading

- [EU AI Act, Article 43 (conformity assessment)](https://artificialintelligenceact.eu/article/43/): the pre-release conformity route for high-risk systems
- [EU AI Act, Article 15 (accuracy, robustness and cybersecurity)](https://artificialintelligenceact.eu/article/15/): Article 15(4) is where backup and fail-safe plans sit
- [EU AI Act, Annex IV (technical documentation)](https://artificialintelligenceact.eu/annex/4/): the documentation contents a readiness review has to see
- [Model Cards for Model Reporting](https://arxiv.org/abs/1810.03993): the model card format the BOK names as part of release readiness
- [MITRE ATLAS](https://atlas.mitre.org/): a structured catalogue for red teaming AI systems
- [ISO/IEC 42001 (IEC webstore)](https://webstore.iec.ch/en/publication/90574): the management-system controls that make release gating repeatable
- [NIST AI 600-1, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): pre-deployment testing guidance for generative systems
- [EU AI Act, Article 26 (deployer obligations)](https://artificialintelligenceact.eu/article/26/): the deployer's own duties: instructions for use, oversight, input data, logging, informing affected persons
- [EU AI Act, Article 25 (responsibilities along the AI value chain)](https://artificialintelligenceact.eu/article/25/): how provider obligations can move onto a distributor, importer or deployer
- [EU AI Act, Article 13 (transparency and instructions for use)](https://artificialintelligenceact.eu/article/13/): the instructions the deployer must follow and pass on
- [Directive (EU) 2024/2853 (revised Product Liability Directive)](https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng): the modernized defect regime covering software and AI, with disclosure duties and presumptions
- [NIST AI Risk Management Framework (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): the MANAGE function and deployment-stage risk treatment
- [EU AI Act, Article 72 (post-market monitoring)](https://artificialintelligenceact.eu/article/72/): the provider's legal monitoring duty, and the post-market monitoring plan
- [EU AI Act, Article 73 (serious incident reporting)](https://artificialintelligenceact.eu/article/73/): the incident reporting clock that monitoring and triage must meet
- [OECD AI Papers No. 16: Defining AI incidents](https://www.oecd.org/content/dam/oecd/en/publications/reports/2024/05/defining-ai-incidents-and-related-terms_88d089ec/d1a8d965-en.pdf): a free definition of AI incidents and hazards, useful for the incident-analysis questions
- [ICO: explaining decisions made with AI](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/explaining-decisions-made-with-artificial-intelligence/): practical expectations for keeping explanations accurate and available after deployment

# Part IV: Governing AI Deployment and Use

*Can we live with what we chose?*

*Charlotte, January 2026*

Owen Park brought the pilot numbers to Nadia Brennan on paper. Since August, when his team had switched on the AI reply assistant in Larkspur's customer-service platform from Norvane, agents who used its drafted replies had handled 30% more chats.

"Customers should be talking to it directly," Owen said. "By April."

Nadia read the chart twice. She had spent the week on Clearline's design file. Priya Raman's team had chosen Clearline's data and could retrain it, rerun it or switch it off. Larkspur had not built the model behind Owen's chart and could not see what it had been trained on. In December, the AI diligence that put a routine Norvane renewal on hold had found that Norvane had already changed the model once without telling anyone.

Owen was not asking her to own the assistant, and she would not have agreed. He already owned the library of policy documents, a line in the council's RACI chart since November. What Nadia wanted from him was the chain: what the tool was for, what it would run on, what an assessment would find, what the contract said, who would watch it and how it would stop.

"What problem does it solve for the customer?" she asked.

"Waiting," Owen said.

Nadia wrote the word at the top of a clean page.

Part III ended with Clearline live in the US, while Ask Larkspur, built on a model Larkspur did not make, had been answering customers since April. Part IV steps back to January 2026 once more to follow Ask Larkspur from Owen's proposal into production. It covers Domain IV of the AIGP Body of Knowledge (BOK). Where Part III governed building a system, Part IV governs choosing one, adopting it and living with it until it is switched off.

The two parts mirror each other. Clearline gave Larkspur control, and Ask Larkspur gives it capability. A proprietary model can mean either one: Larkspur's own, which brings control at the cost of building it, or Norvane's closed model, which brings speed along with opacity and dependence. Accountability is the same either way, because, as Chapter 3 established, outsourcing a system does not outsource accountability.

The BOK says the domain's obligations apply "whether the company deploys its own proprietary model or a third party's", and under the EU AI Act that context sets the organization's role. The Act regulates AI systems and general-purpose AI models under separate rules. An organization that develops an AI system, or has one developed, and places it on the market or puts it into service under its own name is a provider by definition (Article 3(3)), and it can become one by conduct under the three Article 25(1) triggers that Section 2.3 sets out. Providers carry conformity assessment, technical documentation and a quality management system, which deployers do not. Larkspur's move from a feature toggle to its own branded chat is the case in point. Norvane provides the general-purpose AI model, and Larkspur (the Dublin entity, for Ireland) is the downstream provider and deployer of Ask Larkspur, a limited-risk system that is never high-risk. As provider, Larkspur owes the Article 50(1) disclosure that customers are talking to an AI from 2 August 2026. Section 6.2 records the role assessment, Section 2.3 also separates the BOK's task labels from these legal categories, and Chapter 12 shows the council blocking an Article 25(1)(c) proposal.

Part IV holds the domain as a chain of decisions, each with a defensible answer, an owner and a record, and the three competencies follow the chain in order. Chapter 11 makes the decision: whether the use case warrants the tool at all (Owen), and which model type and deployment mode (environment and adaptation technique) fit the objective, the data and the latency requirement (Priya). Deployment options now include agentic architectures, which Owen's wish for the assistant to set up hardship payment plans brings into play. Chapter 12 does the diligence the decision triggers: what an impact assessment finds when it examines the configured system actually chosen rather than the vendor's model in the abstract (Nadia), what a close reading shows the contract actually says (Marcus Hale), and the proprietary-model question. Chapter 13 covers the long tail of the system's working life: who monitors and what triggers escalation (Owen's operations team), what gets written down, how audits, incidents and communications are handled, and how the system is eventually switched off. It also covers localization, which restricts where a system may operate (Section 13.6). For Larkspur that means a late-June incident over a fee policy that does not exist, then remediation, the Irish launch, a bounded agent pilot and Scorecard 7's retirement.

The first link comes before any architecture: whether Larkspur's customers should be talking to generative AI at all.

### Exam at a Glance

Domain IV carries 21 to 25 of the 100 scored items, tied with Domain III for the largest share, and it is the most scenario-heavy part of the syllabus.

| Competency | What it covers | Questions | Chapter |
|---|---|---|---|
| IV.A Evaluate key factors and risks in the decision to deploy | Context of the use case; AI model types; deployment options, including agentic architectures | 6 to 8 | 11 |
| IV.B Perform key assessment activities | An impact assessment on the selected system; key terms and risks in the vendor or licensing agreement; risks and opportunities of a proprietary model | 5 to 7 | 12 |
| IV.C Govern deployment and use | Policies, procedures and ethics; continuous monitoring and maintenance; periodic assessments; documentation; secondary use and downstream harm; external communication; deactivation and localization | 9 to 11 | 13 |

The ranges sum to 20 to 26, not the domain's 21 to 25, so learn each figure as published. IV.C alone is larger than either other competency and than most whole knowledge areas elsewhere. IV.B is small but holds the proprietary-model distinction, which separates good answers from bad ones in deployment scenarios. Expect a scenario that asks which EU AI Act role an organization occupies. Almost every item tests one link in the chain, and distractors sound prudent but belong to another link: renegotiating the Norvane contract after the fee-waiver incident is IV.B work, while the immediate IV.C response is containment, correction and customer communication. BOK v2.1 made four changes to Domain IV.

- IV.A now names agentic architectures beside fine-tuning and retrieval augmented generation as ways of deploying a model, the domain's only new technical content and the reason agentic AI appears in the blueprint's introduction as something the certification covers.
- IV.B's "open source agreement" became "licensing agreement", putting proprietary and open-source terms under one heading.
- IV.B's proprietary-model item became "risks and opportunities". The older wording read as pure exposure, and v2.1 wants the control and capability argument beside it.
- The "identify applicable laws" indicators left III.A and IV.B, and "model" became "system" throughout, matching the BOK's shift from governing a model to governing a system in its deployment context.

## Chapter 11: Deciding to Deploy

*Charlotte, January 2026*

Owen Park brought Norvane's demo to the small conference room on his laptop. Priya Raman sat across from him, Nadia Brennan took the end of the table, and Marcus Hale was copied on the invitation. On the screen the model fielded questions about payoff amounts, late fees and hardship options, every reply fluent and polite.

"It can answer anything about our products," Owen said. His next slide showed an April launch date.

Nadia let the demo finish. "I have three questions, and I'd like to take them in order. Does the use case justify the tool? Which kind of model fits it? And where and how will it run?"

Owen glanced at his slide. He had expected to spend the hour on dates.

Priya asked what "anything" meant, and Owen listed it: balances, payoff quotes, fee rules, hardship options, disputes. Nadia gave each item a column on the whiteboard. She circled balances and payoff quotes, numbers the account system already knew exactly. Under fees and hardship she wrote "which document, whose?" and under disputes, "people." By the end of the hour the board held a use case smaller than the demo and a list of decisions, each of which needed an owner before an April date could mean anything.

The decision to deploy is the first link in the chain Part IV follows, and it asks Nadia's three questions in that order. The answers set the risk surface that every later assessment and control has to govern, from the impact assessment and contract review in Chapter 12 to monitoring and retirement in Chapter 13. This chapter takes the questions in turn, then the agents that turn an assistant into something that acts.

### 11.1 Does the Use Case Justify the Tool

Owen's pitch began where weak deployment cases usually begin, with what the model could do. One question comes before that. The BOK leaves it implicit, and the OWASP GenAI Security Project names it in its Top 10 for Agentic Applications: **least agency**, giving a system no more autonomy than its task requires. Where a process is fixed and repeatable, a deterministic workflow is cheaper, testable, explainable and far harder to attack than an autonomous system, and autonomy that adds nothing widens the attack surface without buying capability. Nadia sent balance lookups and payoff quotes to deterministic account APIs, so the model would never generate those numbers, and noted that Larkspur's standard hardship eligibility rules were deterministic too.

The BOK's five **readiness factors** then apply in order: business objectives, performance requirements, data availability, ethical considerations and workforce readiness. Each one can stop the deployment.

#### Business objectives

The most common failure in a deployment decision is starting from what a model can do. A deployment justified by capability has no success metric, so nobody can later say whether it worked or whether it caused harm. The governance move is to state the objective in the organization's terms, such as reducing claims processing time or widening credit access, and then ask what level of performance would count as meeting it. Owen's "anything" became an objective: answer routine policy questions correctly from the approved library, shorten customers' waits, and hand the right conversations to people.

#### Performance requirements

That performance level becomes the threshold that post-market monitoring measures against. Ask Larkspur's thresholds covered accuracy graded against the approved library, wait times, and a floor on appropriate escalation to a human. Owen was recorded as their owner, and they became the baseline for Chapter 13's monitoring. The escalation floor was aimed at containment rate, the share of chats resolved without a human, which Norvane's pilot dashboard celebrated and Chapter 1 met as misalignment. Nadia rejected it as a success metric and recorded why. Norvane's default dashboard still led with it, and nobody asked whether the vendor's configuration was tuned toward it.

#### Data availability

Availability and suitability are separate questions. Suitability asks whether the data exists at the volume and quality the task needs, whether the organization is legally entitled to use it for training or inference, and whether it represents the population the system will affect. Internal data carries its own risk, because repurposing records collected for one purpose to train a model can breach purpose limitation and data minimisation (Chapter 4). The lawful basis for AI training has to be documented rather than assumed.

Nadia asked who owned each document in the policy library and how current it was. Owen pointed to his RACI line from November (Chapter 2): he was Accountable for approving documents added to the library, and his knowledge-management lead was Responsible. How documents would reach the retrieval index was left to the build. When Priya proposed fine-tuning on past chat transcripts, Siobhan Kelly flagged that they had been collected to service accounts, so training on Irish customers' chats raised purpose limitation and would need a documented lawful basis.

#### Ethical considerations

This factor is weighed rather than measured. It asks who benefits, who bears the harm, whether the harm falls on people who cannot refuse, and whether the organization would defend the use in public. Some answers are settled by law, as when a use is a prohibited practice under EU AI Act Article 5 or triggers a data protection impact assessment under GDPR Article 35. Most are judgments the organization has to make and record, which is why ISO/IEC 42005 treats impacts as two-sided, benefits as well as harms.

Customers in financial distress might not realize they were talking to a machine, and they could not easily refuse the channel if phone waits grew. Round-the-clock answers helped the same customers, and the record listed both. The Article 5 screen found no prohibition. Siobhan recorded her advice on whether Article 35 required a DPIA for the Irish rollout. She and Marcus also recorded the role analysis that Chapter 6 teaches: building its own branded chat on Norvane's model would make Larkspur the downstream provider of a system that interacts with people, so the Article 50(1) duty to tell Irish customers they were talking to AI would be Larkspur's from 2 August 2026. Whether Article 50(2) marking reached plain-text replies stayed an open question in Marcus's memo.

#### Workforce readiness

Workforce readiness is a deployment gate, settled before launch. It asks whether the intended users have the skills to operate the system and can tell when to distrust it, whether administrators can manage and monitor it, and whether the organization keeps enough of the underlying skill to carry on if the system is unavailable. That last point is easy to overlook, and it is what makes a kill switch meaningful, because a fallback nobody can execute is not a fallback. Owen's agents, some of whom had pasted the reply assistant's drafts unread (Chapter 2), would need to know when to distrust the new assistant and how to take over a chat. Nadia insisted on keeping enough trained agents to absorb full volume if Ask Larkspur were switched off.

#### The decision record

Together the factors set the success metric that monitoring tracks, the risk appetite the assessment tests against (Chapter 12), and the oversight capability on which the deactivation policy depends (Chapter 13). A deployment that skips them fails months after go-live, when nobody can say what the system was supposed to achieve or who was watching it. In February Owen signed a one-page deployment decision record: the objective, the thresholds, the data sources and lawful basis, the benefits and harms, and the fallback staffing, each with an owner.

### 11.2 Which Model Fits

The second question is which kind of model fits the use case, and models differ along four independent axes.

**Classic AI** (rule-based systems, statistical models, decision trees, classifiers) produces a bounded output against a defined target: a label, a score, a recommendation. Generative models produce open-ended content. A classifier's failure is a wrong answer with a measurable error rate, while a generative model's failure can be fluent, plausible and wrong, and its output can be reused as input somewhere else. Generative systems add failure families of their own: confabulation, synthetic media abuse, and the privacy exposure that comes from training on unfiltered web data (Chapter 7). Clearline's score can be checked against outcomes. A wrong sentence from Ask Larkspur about a fee would read exactly like a right one.

The axis between proprietary and open models carries the largest legal consequence. A **proprietary model** offers vendor support, a managed service and often the strongest capability, at the cost of limited visibility into training data and model behaviour, binding terms of service, and dependence on the vendor for updates, incident support and continuity. Norvane's unannounced version swap (Chapter 3) had already shown Larkspur that cost. An **open-source model** offers transparency, inspection, local control and the freedom to fine-tune, and it moves hosting, security, patching and compliance onto the deployer. Neither is safer by default. Open weights are still licensed. The licence governs commercial use and attribution, and copyleft terms such as the GPL or AGPL govern what happens to code that incorporates the model, so licence review belongs inside the deployment decision rather than after it. When Priya floated self-hosting an open-weights model in an EU region, Marcus replied that its licence needed the same reading as Norvane's terms (Chapter 12).

Size cuts both ways. Larger models generally offer broader capability and better performance on complex tasks, but they cost more per call, respond more slowly and present a wider surface for attack and misuse. Smaller models are cheaper, faster and easier to constrain, and may underperform on the hard cases. The governing question is fitness for the specific use case rather than maximum capability. Quantization and distillation (Section 11.3) move a model down this axis without a full retrain. Priya put a small intent-routing model in front of Norvane's large one, which would see only the policy questions.

A language model handles text. A **multimodal model** handles combinations of text, image, audio and video, and it widens the use cases and the risk surface in step. Each modality brings its own failure modes (image models misread faces and scenes, audio models transcribe accents unevenly), its own bias profile and its own content risks, including convincing synthetic media. A deployment that justifies multimodality by capability alone has not done the assessment. Owen wanted a voice channel and, later, photos of pay stubs for hardship requests. Uneven transcription across accents would be a fairness problem for a lender, and the images would expose sensitive data, so both were deferred and the text-only launch was recorded with its reasons.

Real deployments combine all four axes, and usually one of them binds. A large multimodal open-source model on edge hardware is constrained by the hardware, not by the licence. A small proprietary model in a regulated data flow is constrained by residency and terms, not by capability. For Ask Larkspur's Irish launch the binding constraint was residency and transfer terms for Dublin customer data, which led to the third question.

### 11.3 Where and How It Runs

The third question has two parts: where the model runs, and how far the organization adapts it. The four environments buy and cost different things.

| Mode | What it buys | What it costs |
|---|---|---|
| **Cloud** | Scale, elasticity, managed infrastructure, fast integration | Less control over data locality, plus third-party and transfer questions |
| **On-premises** | Maximum control, data residency, strict compliance fit | Capital cost, lower elasticity, operational burden |
| **Edge** | Low latency, works offline, data never leaves the device | Limited compute, model size constraints, harder update and monitoring logistics |
| **Hybrid** | Splits the difference, such as edge or on-premises inference with cloud training | Added architectural complexity and integration overhead |

The requirement picks the mode, and the technology follows. Low latency, tolerance of outages and sensitive data kept on site point to edge. Strict data residency with maximum control points to on-premises. Elastic demand and a small team point to cloud. Hybrid fits only a genuine split, and the follow-up is to check where inference actually happens. The mode should be settled in the design phase, because containerization and orchestration choices follow from it. Ask Larkspur would call Norvane's cloud API, with an EU-region endpoint for Dublin traffic to answer Siobhan's transfer questions, while Clearline runs in an environment Larkspur controls (Chapter 10). Larkspur has no edge use. A typical one is a device that must respond instantly without a connection.

#### The adaptation ladder

The ladder runs from using a model as it is to building one from nothing, and each rung carries a different governance consequence. At the bottom the model is used as it is, shaped by **prompt engineering**: the instructions, context and examples sent to a generative model, including system prompts and few-shot examples. No weights change. It is the cheapest way to improve output and the least durable, because nothing enforces it. A prompt-layer limit can be bypassed or simply forgotten, so wherever the risk is real the preferred control is one enforced at the tool or system layer.

**Fine-tuning** adapts the model's weights through additional training on targeted data. It buys consistent behaviour and domain fit, and it costs a retraining pipeline, a maintenance burden and knowledge frozen at training time. Because it changes the model, it triggers change management, a fresh evaluation and, in regulated contexts, a reassessment.

**Retrieval augmented generation** (RAG) retrieves relevant external content at query time and conditions the answer on it. Corpus updates take effect immediately with no retraining, and the output can cite its sources, so RAG fits a corpus that changes often and reduces confabulation in enterprise settings. The trade-off is that the retrieval layer joins the attack surface: a poisoned document is a poisoned answer.

Agentic architectures come next. An agent plans and acts over several steps through tools, so governance shifts from reviewing outputs to bounding actions, with least-privilege permissions, approval checkpoints and kill switches (Section 11.4), and the least-agency question still comes first. At the top, training from scratch is rarely proportionate. It is justified only for a capability nobody offers, by an organization with the data and resources to build it.

Two efficiency techniques sit beside the ladder. **Quantization** reduces numerical precision (from 32-bit to 8-bit, for example) to shrink the model and cut inference latency. **Distillation** trains a smaller student model to approximate a larger teacher. Both trade a little accuracy for size and speed, and both are legitimate ways to meet a latency or edge constraint without changing the deployment story. They would have mattered had Priya's self-hosted option gone ahead.

Priya's architecture decision record put Ask Larkspur on the RAG rung, with every answer citing its source document. Fine-tuning was rejected for now because of change management, re-evaluation and Siobhan's purpose-limitation point, and training from scratch got one line. The system prompt said "never promise fee waivers." Nadia noted that nothing enforced this prompt-layer limit, accepted it for launch with monitoring, and recorded the decision with its risk.

### 11.4 When the Assistant Acts

In February Owen raised the idea he had floated in October: could the assistant set up hardship payment plans itself? That would move Ask Larkspur from advising to acting (Chapter 1), and it raised the intake tier that Chapter 8's gate had set for the customer launch.

Singapore's Infocomm Media Development Authority (IMDA), in its Model AI Governance Framework for Agentic AI, describes an agent as having some independence in planning, deciding and acting over several steps to reach a goal a user sets. Today's enterprise agents usually pair a language model with instructions, memory, tools and controls, and an **agentic AI system** is one or more such agents working alone or together. A generative assistant produces content for a human to use, usually one response per prompt, within the conversation, and typically fails with wrong or harmful content. An agent also acts in other systems, executes and revises a multi-step plan, reaches into tools, APIs, computers and browsers, and other agents, and typically fails with wrong, unauthorised or irreversible actions.

#### Two dials

Agent risk scales along two independent dials. **Action space** is what the agent can do, fixed by the tools it may call and the permissions on them: sandbox only, internal systems or external systems, and read or write. **Autonomy** is how freely it decides what to do, set by its instructions and the level of human involvement. An agent that reads a database and drafts a summary and one that writes to that database and emails the result have very different risk profiles, and the difference is the permissions, not the model. Owen's idea moved the first dial from read-only access to writing into the loan-servicing system. The second would be set by how much human sign-off each plan needed.

IMDA describes four levels of human involvement: the agent proposes and a human operates (approving every step), collaboration, exception-based approval, and the agent operates while a human observes. The first resembles Chapter 3's human-in-the-loop oversight and the last its supervision on the loop. Nadia set the agent at level one, with a representative approving every plan, and any move to exception-based approval would need monitoring evidence and a recorded decision.

#### How the risk grows

Agents inherit ordinary software flaws and model risks, and they add pathways through planning (a plan that misreads intent or drifts), tools (the wrong tool, the wrong input, or a tool turned into an exfiltration route by injected instructions) and protocols (a malicious Model Context Protocol server carrying code that leaks data). IMDA names five kinds of harm, and Nadia mapped each onto the agent: erroneous actions (wrong plan terms), unauthorised actions (fees waived beyond policy), biased or unfair actions (better plans offered unevenly across customer groups), data breaches (account data leaking through an injected tool call) and disruption to connected systems (bad writes to servicing). Norvane's tool connectors were the protocol risk.

Multi-agent systems add interaction risk. Cascading failures compound one mistake across later steps, shared context leaks data to less secure agents, and agents can miscoordinate, conflict or collude. Emergent behaviour is the hardest case, because testing each agent alone cannot predict it. Larkspur planned a single agent, so these risks stayed on a watch list.

#### The controls

Six controls answered those harms. The first is least privilege capped by the authorising human: permissions scoped, time- or session-bound and non-transferable, with explicit escalation for anything more and never beyond what the authorising human may do. The agent's permissions would match a human representative's. The second is that deterministic controls beat prompt-based ones, so a tool is blocked with an access control rather than by asking the model not to use it. Plans would come from a deterministic eligibility rules service, the agent would assess no one's ability to repay, and the plan API would refuse fee waivers and over-limit terms in code. The prompt rule on fee waivers still governed what the assistant said in chat, where nothing enforced it.

Third come human approval checkpoints for high-stakes, irreversible, atypical or user-defined actions, enforced at the system level and audited for rubber-stamping, which mattered after what Chapter 2 found about agents accepting drafts. Fourth is a unique agent identity, verifiable, tied to a supervising agent, human or department, and centrally catalogued to curb sprawl, here a line of its own in the AI Register under Owen's team. Fifth is a kill switch with credential revocation, a manual fallback and preserved, tamper-proof logs. Revoking the agent's tool credentials would return plan-setting to Owen's retained staff. Sixth, the system fails safe by default (Chapter 10): if the approval service is down, the action is denied. A time-out that lets the agent proceed is **fail-open**.

#### How the law attaches

No separate legal category exists for agents. Article 3(1) of the EU AI Act defines an AI system as one designed to operate with varying levels of autonomy whose outputs can influence physical or virtual environments, and agents fit squarely. The risk tier follows the use, not the architecture: an agent that screens job applications falls under Annex III point 4(a), and one that scores creditworthiness under point 5(b). A deployer that repurposes a general-purpose system into a high-risk use becomes its provider under Article 25(1)(c) (Chapter 6). Under the GDPR an agent that decides is making an automated decision, governed by Article 22, and the examples in Recital 71 (automatic refusal of a credit application, e-recruiting without human intervention) describe what an autonomous agent does.

Clearline is Larkspur's clean 5(b) example, and Brightlist would fall under 4(a), with Larkspur as deployer, if it were used for hiring in the EU. The hardship agent applies fixed eligibility rules, so the council recorded that on this scope it does not evaluate creditworthiness and is not a 5(b) system, with a trigger to reassess if its scope moved toward assessing ability to repay. Because Larkspur already provides Ask Larkspur, that drift would be a reclassification question for Larkspur as provider rather than an Article 25(1)(c) role shift. For Irish customers, a refusal by the agent alone would be the kind of decision Article 22 governs, so the pilot would be US-only, any EU extension would need an Article 22 analysis first, and every refusal would go to a human. The agent would wait until the assistant had run in production and met its thresholds, and those conditions went into a memo.

### A Path With Its Risks Written Down

The three questions narrow a deployment in stages. The readiness factors turn a capability into an objective with thresholds, owners and a fallback someone can run. The model axes decide which failures the organization will live with, and the environment and adaptation rung decide where data flows and which limits are enforced in code rather than by instruction. Agents add what a system can do, and because the law attaches through the use, an agent's scope is a legal decision as much as a design one.

By the end of February Owen owned the decision record and its thresholds, Priya the architecture, Marcus the transparency memo and Siobhan her DPIA advice, and the agent waited behind written conditions. One risk had been accepted knowingly: a rule about fee waivers that lived only in a prompt.

The path was set: Norvane's model through an API, retrieval over an approved library, text only, and an agent later and tightly bounded. The Norvane API agreement reached Marcus's desk that month. He had to read the contract, and Nadia had to assess Ask Larkspur as configured rather than Norvane's model in the abstract. Chapter 12 takes up both.

### The Record

The deployment decision left six artifacts in the Larkspur record.

- **Ask Larkspur deployment decision record.** Owner: Owen Park. Objective, performance thresholds, data and lawful basis, benefits and harms, retained staffing, and why containment rate is not a success metric.
- **DPIA screening advice.** Owner: Siobhan Kelly. Her documented advice on whether Article 35 requires a DPIA for the Irish rollout.
- **Article 50 role memo.** Owner: Marcus Hale. Larkspur as downstream provider owes the Article 50(1) disclosure, with Article 50(2) marking left open.
- **Architecture decision record.** Owner: Priya Raman. Cloud API with an EU-region endpoint, a routing model, RAG with citations, text only, and the prompt-layer fee-waiver rule accepted with its risk.
- **Hardship-agent conditions memo.** Owner: Owen Park. Level-one approval, capped permissions, limits in code, a unique identity, a kill switch, fail-safe denial, US-only, and thresholds met first.
- **Hardship-agent classification entry.** Owner: Marcus Hale. Not Annex III 5(b) on its recorded scope, with a reassessment trigger.

### Exam Focus

These are the distinctions and traps to carry from this chapter into the exam.

- The five readiness factors run in order (business objectives, performance requirements, data availability, ethical considerations, workforce readiness), and each can stop a deployment.
- Least agency, named by OWASP, means the right answer is sometimes that a process should not be agentic, or not use AI at all, and the first question about any agent is whether the use case needs one.
- Data availability differs from suitability, which adds quality, legal entitlement, representativeness and a documented lawful basis.
- Neither proprietary nor open source is safer by default, and treating open as unencumbered is a trap, because open weights are licensed and GPL or AGPL terms reach code that incorporates the model.
- Answers that treat more capability as strictly better are usually wrong, and in a combined-axis scenario the binding constraint is the axis the stem emphasizes.
- Edge fits low latency, outage tolerance and sensitive data on site, on-premises fits strict residency with maximum control, cloud fits elastic demand and a small team, and hybrid needs a genuine split, so check where inference happens.
- RAG is the answer for a frequently changing corpus but adds an attack surface, fine-tuning triggers change management and re-evaluation, and training from scratch is usually wrong unless the stem describes a capability nobody offers and the means to build it.
- Quantization lowers numerical precision, while distillation trains a smaller student model to approximate a larger teacher.
- Agent risk runs on two dials, action space and autonomy, with IMDA's four levels of human involvement and five harms: erroneous, unauthorised, and biased or unfair actions, data breaches, and disruption to connected systems.
- Deterministic controls beat prompt instructions, and denying the action when the approval service is down is fail-safe, while a time-out that lets the agent proceed is fail-open.
- The legal tier follows the use (job screening under Annex III 4(a), credit scoring under 5(b)), repurposing a general-purpose system into a high-risk use makes a deployer its provider under Article 25(1)(c), and an agent's automated refusal engages GDPR Article 22 and Recital 71.
- BOK version 2.1 added agentic architectures to the deployment options and renamed "open source agreement" to "licensing agreement" so that proprietary contracts get the same reading.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): Business Objectives, Workforce Readiness, Classic AI, Language vs. Multimodal Models, Proprietary vs. Open-Source Models, Small vs. Large Models, Cloud, On-Premises & Edge Deployment, Fine-Tuning, Prompt Engineering, Retrieval Augmented Generation (RAG), Action Space (Agentic AI), Agent Goal Hijack, Agent Kill Switch, Agentic AI, Human Approval Checkpoint, Least-Privilege Agent Permissions, Multi-Agent System, Tool Misuse.

### Further Reading

- [NIST AI RMF Playbook (MAP and MANAGE functions)](https://airc.nist.gov/airmf-resources/playbook/): MAP 1 on context and intended purpose; MANAGE 2.1 on non-AI alternatives
- [EU AI Act, Article 5 (prohibited AI practices)](https://artificialintelligenceact.eu/article/5/): the uses no readiness assessment can justify
- [ISO/IEC 42005:2025 (AI system impact assessment)](https://webstore.iec.ch/en/publication/107659): scope, intended and unintended uses, and impacts on affected people
- [GDPR, Article 5 (principles relating to processing)](https://gdpr-info.eu/art-5-gdpr/): purpose limitation and data minimisation when data is reused for AI
- [NIST AI 600-1, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): the risks a use-case assessment should weigh for generative deployments
- [ISO/IEC 22989:2022 (concepts and terminology)](https://webstore.iec.ch/en/publication/77839): free from the IEC webstore; AI model, AI component and the learning paradigms
- [EU AI Act, Article 53 (obligations for providers of general-purpose AI models)](https://artificialintelligenceact.eu/article/53/): the duties attached to placing a general-purpose model on the market
- [EU AI Act, Article 3 (definitions)](https://artificialintelligenceact.eu/article/3/): general-purpose AI model and system, and the provider role
- [GPAI Code of Practice (European Commission)](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai): how general-purpose model providers evidence compliance
- [Singapore IMDA, Model AI Governance Framework for Agentic AI v1.5](https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf): action space and autonomy for the agentic end of the ladder
- [OWASP Top 10 for Large Language Model Applications](https://genai.owasp.org/llm-top-10/): prompt injection, and why prompt-layer controls are not a boundary
- [NIST AI RMF (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): deployment and operational considerations in the MEASURE and MANAGE functions
- [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/): the ASI01 to ASI10 codes and the classification rules the relevant comparison is
- [OWASP Agentic AI: Threats and Mitigations](https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/): the companion threat taxonomy T1 to T17
- [EU AI Act, Article 14 (human oversight)](https://artificialintelligenceact.eu/article/14/): automation bias, override, and the stop function for high-risk systems
- [EU AI Act, Article 25 (responsibilities along the AI value chain)](https://artificialintelligenceact.eu/article/25/): the provider shift when an agent deployment repurposes a system
- [NIST CAISI AI Agent Standards Initiative](https://www.nist.gov/caisi/ai-agent-standards-initiative): the standards work on agent authentication, identity and security evaluation
- [CSA MAESTRO threat modelling framework for agentic AI](https://cloudsecurityalliance.org/blog/2025/02/06/agentic-ai-threat-modeling-framework-maestro): why STRIDE and PASTA need extending for autonomy and agent-to-agent interaction

## Chapter 12: Assessing What You Adopt

*Charlotte, February 2026*

The Norvane API agreement had sat on Marcus Hale's desk for more than a week, flagged in yellow where Siobhan Kelly had found the clause about prompts. Owen Park wanted it signed. The branded chat was running in test, and he had promised the contact centre April.

"It's the same model we've used since August," he said. "What is left to assess?"

Nadia Brennan had expected the question. The deployment decision record said why Larkspur would put the assistant in front of customers. It did not say what the assistant, as configured, could do to the people who used it, or what Larkspur was agreeing to in Norvane's paper. She wrote two gates into the go-live plan: an impact assessment of Ask Larkspur as it would actually run, and a close reading of the terms against the six-clause contract standard written after Norvane's renewal went on hold.

Owen asked who would own the assessment.

"You will," Nadia said. "I'll run the process."

Siobhan stayed on the call from Dublin with a second item. Clearline would go live for Irish applicants in September, and as deployer of a creditworthiness system the Dublin entity would owe a fundamental rights impact assessment before first use. "Most of it is already in the DPIA," she said. Dana Whitfield's DPIA for Irish applicants, drafted with Siobhan's advice, already described the processing, the safeguards and the people affected, and Siobhan wanted the new assessment built on it.

Nadia added a third line to the plan. Three assessments, two systems, and one question under all of them: what was Larkspur taking on, and who would answer for it?

Chapter 11 settled whether and how to deploy. This chapter covers the assessment work that sits between choosing a system and running it: an impact assessment of the system actually selected, set beside the GDPR's data protection impact assessment and the EU AI Act's fundamental rights impact assessment, and a hard reading of the vendor or licensing agreement. It closes on the risks and opportunities of proprietary models, in both senses of the phrase. Under all of it runs the line Chapter 3 drew: outsourcing a system does not outsource accountability.

### 12.1 Impact Assessment of the Selected System

Larkspur's house method is ISO/IEC 42005:2025, the guidance introduced in Chapter 7 that explains how to perform the AI system impact assessment ISO/IEC 42001 requires. Nothing is certified to it. Its lens is people: the individuals, groups of individuals and societies that a system or its foreseeable applications can affect. It runs across the lifecycle, starting at design, gating deployment, continuing through monitoring and periodic review in operation, and repeating whenever the system, its use or its context changes significantly.

The lens separates 42005 from ISO/IEC 23894, which extends ISO 31000 with AI-specific guidance and asks what could stop the organization meeting its objectives. In Tom Ashby's register, a wrong answer about a late fee barely registered, since one fee is small money to Larkspur. Nadia's record described the same event as a borrower in hardship acting on wrong information about fees or payment options. A harm that barely registers as organizational risk can still be a serious impact on the person who bears it. Annex B of 42005 shows how impact findings feed the 23894 risk process, so the two records complement each other.

Clause 5 of 42005 sets up the organization's process: timing, scope, responsibilities, thresholds for sensitive and restricted uses, and the cycle of perform, analyse, record, approve and review. Larkspur's threshold, set in Chapter 8, makes any system that makes or materially influences access to credit a **sensitive use** needing council approval. Ask Larkspur does neither, but customers would bring it questions about hardship and declines, so the council treated it as sensitive anyway.

Clause 6 defines what one assessment records, and Owen's record followed it. The scope was the chat as configured for launch, and its purpose was answering policy questions from approved documents, with citations. The same field asks for **unintended uses**, those not planned but foreseeable: customers seeking financial advice, disputing a loan decision or disclosing vulnerability such as illness. The data section covered the policy library, each document owned and dated under the RACI line Owen had held since November, and conversation logs holding personal data. It carried one open item. The production job that would feed the retrieval index had not been built, and no name stood beside it. Model information was thin, because Norvane's model is proprietary. The environment was web and app chat, text only, for US and later Irish customers. The interested parties were customers first, borrowers in hardship above all, then Owen's agents, the Dublin entity and regulators.

The impacts field covers actual and reasonably foreseeable impacts: benefits and harms, failures and foreseeable misuse. The benefits were answers at any hour and shorter waits. The harms were confident wrong answers and customers relying on them, and the named misuse was prompt injection. The measures addressing the harms and securing the benefits were citations, a human handoff, Chapter 11's retained staffing and monitored thresholds. A record that lists only harms is incomplete, and so is one with no unintended uses, because 42005 asks both what the organization plans and what could occur anyway.

The record closed with the four reassessment triggers the standard names, each mapped to the case: a change of intended use or purpose (the hardship-plan agent), a significant change to the system such as new data types or retraining (a new Norvane model version), a change in the legal or policy environment (new EU obligations, or South Korea), and monitoring or feedback revealing something the assessment did not anticipate. The standard illustration of the first is a demand-forecasting model that starts rating individual workers, which Larkspur met in Owen's call-volume model in Chapter 8.

#### Against the DPIA and the FRIA

Owen's record was voluntary. Siobhan's reminder concerned assessments the law requires, and the three are easily confused.

| Feature | ISO/IEC 42005 assessment | GDPR Article 35 DPIA | EU AI Act Article 27 FRIA |
|---|---|---|---|
| Nature | Voluntary guidance | Legal duty when triggered | Legal duty for in-scope deployers |
| Who | Any organization developing, providing or using AI | The controller | Public bodies, private entities providing public services, and deployers of Annex III 5(b) and 5(c) systems |
| Trigger | The organization's own lifecycle points and thresholds | Processing likely to result in high risk to rights and freedoms | Before first use of an Annex III high-risk system (point 2, critical infrastructure, excluded) |
| Focus | Benefits and harms to individuals, groups and society | Risks to data subjects from processing personal data | Impact on the fundamental rights of affected people |
| At Larkspur | Every system through the gate, Ask Larkspur included | Clearline for Irish applicants; Ask Larkspur if likely high risk | Clearline in Dublin only |

Annex III point 5(b) covers assessing the creditworthiness of natural persons or establishing their credit score, and point 5(c) covers risk assessment and pricing in life and health insurance. Clearline sits in 5(b), so the Dublin entity, as its deployer, owes a FRIA once Annex III obligations apply. That date was 2 August 2026 as enacted, the law in force when Siobhan raised it, and became 2 December 2027 as amended by the Digital Omnibus on AI in July 2026. Keeping the work on the September go-live put Larkspur ahead of the amended date. Larkspur Insurance Services prices nothing and has no EU business, so 5(c) never reaches it. Ask Larkspur is not high-risk and owes no FRIA. It gets the voluntary 42005 assessment, plus a DPIA if its processing is likely to result in high risk, a judgment recorded on Siobhan's advice.

Three points follow. Larkspur could not rely on Norvane's own assessment, because 42005 applies to organizations that develop, provide or use AI. One well-built 42005 record can feed both legal assessments, and Article 27(4) lets a FRIA build on an existing DPIA rather than repeat it. But neither law accepts a voluntary standard in place of its own assessment, and 42005 is not a harmonised standard, so following it carries no presumption of conformity under Article 40.

### 12.2 Reading the Contract

The second gate was Marcus's. An AI vendor agreement should pin down data usage rights, performance guarantees, liability allocation, audit rights and compliance obligations, the concerns behind Chapter 3's six-clause standard. The clauses that matter most are the ones that transfer risk quietly, and Norvane's draft held four of the five in the table below. The retention clause was also Siobhan's Chapter 4 finding: Norvane could act as the Dublin entity's processor only if it stopped training on Larkspur's prompts for its own purposes.

| Red-flag clause | What the deployer loses | Norvane outcome |
|---|---|---|
| Data sent to the model becomes vendor property | Ownership of its own data | Absent; Larkspur's ownership confirmed |
| Data may be retained for model improvement | Confidentiality, plus a purpose-limitation problem | Removed: zero retention and an Article 28 agreement |
| Data may be passed to third parties | Control over onward sharing and transfers | Limited to named sub-processors |
| Outputs not warranted accurate or lawful | Vendor accountability for what it deploys | Refused; recorded as a residual risk |
| Irrevocable licence over feedback | Intellectual property in its own improvements | Struck |

Norvane refused only one thing, a warranty that its outputs were accurate. Larkspur could not buy that assurance, so it built a **compensating control**, its own evaluations of the assistant's answers before launch and after every model change, and recorded the gap as a residual risk owned by Owen.

The counter-asks went wider than the red flags. Norvane agreed to advance notice of model changes, including retirement of a model version, because the silent swap in Chapter 3 is what that clause prevents. It agreed to incident notice within 24 hours, a negotiated term that no law sets, to proportionate audit and documentation rights, and to extend its intellectual property indemnity to output, Marcus's question from Chapter 5.

Other terms decide whether a deployer can check the vendor's claims at all: disclosure of training data sources and model lineage, performance evaluation evidence, audit mechanisms, security certifications (ISO/IEC 27001, ISO/IEC 42001, SOC 2 Type II), incident notification timelines and cyber liability insurance. Norvane supplied the certification evidence and proof of insurance, and Nadia secured three controls the future agent would need: scoped API keys, per-agent identity tokens and logging of tool calls. Opacity is the core problem with a vendor-hosted model. A vendor that will not disclose capabilities and data handling, or offer such controls, leaves three options: a narrower use case, a different supplier or an in-house build.

The same reading explains two other files. Consumer chatbot terms carry the same red flags, which is why pasting customer letters into a public chatbot is a governance problem (Chapter 3). And HR's Brightlist contract had to deliver the independent bias-audit results that New York City's Local Law 144 requires Larkspur, as employer, to have before using the tool for New York roles.

### 12.3 Licences and Open Weights

When Nadia pushed back on Norvane's terms, Priya Raman proposed an open-weights model, fine-tuned in-house and self-hosted. **Open weights** are still licensed, and the **licence family** decides what a deployer may do. **Permissive** licences (MIT, Apache 2.0) impose little beyond attribution and notice retention. **Copyleft** licences (GPL, AGPL) can require that code incorporating the model be disclosed under the same licence, a real exposure for a for-profit product that embeds a model in its own codebase. **Source-available and non-commercial** licences restrict commercial use outright, so putting a non-commercial model into a commercial product is plain intellectual property infringement.

Marcus's licence review found exactly that problem: Priya's candidate carried a non-commercial licence, which ruled it out for a commercial service. It also found an AGPL component in Ask Larkspur's retrieval stack, which went to legal review before launch. Licence review belongs before the deployment decision, and it covers every component in the chain, including fine-tuned derivatives and any third-party tools an agent calls. Larkspur's review, run against the Chapter 3 AI-BOM, therefore already listed the hardship-plan agent's future tools.

### 12.4 Proprietary Models, Bought and Built

The phrase **proprietary model** has two senses: a third party's model that an organization licenses and deploys, as Larkspur deploys Norvane's, and an organization's own model built in-house, as Larkspur built Clearline. The first brings particular risks, the second particular opportunities.

A deployer of a third party's proprietary model carries real burdens. It takes on increased contractual obligations, relies on vendor claims it cannot independently verify, faces potentially higher liability exposure, and depends on the vendor for updates, incident support and continuity. The last risk is **deprecation**: if the vendor retires the model or its API, the deployer inherits a retirement project it did not plan, which is why Marcus wanted version-retirement notice in writing.

The sharper point is legal. Under the EU AI Act, an organization that puts its own model on the market is a provider, and one that repurposes a third party's system, including a general-purpose AI system, into a high-risk use is treated as its provider under Article 25(1)(c). Provider duties (conformity assessment, technical documentation, logging, quality management, human oversight, incident reporting) cannot be delegated to a vendor, because the organization vetted and selected the third party and chose the use. Chapter 6 holds the full role analysis.

Larkspur met the rule within weeks, when a product manager in lending proposed pointing Norvane's model at loan applications to recommend approve or decline to underwriters. Nadia escalated it. The proposal would repurpose a general-purpose system into an Annex III point 5(b) use and make Larkspur the provider of a second high-risk credit system, built on a model it could not inspect. The council blocked it and recorded why. Ask Larkspur itself is not high-risk, and extending it toward hardship plans raises a different question: Larkspur already provides that system, so the extension is a reclassification decision for the provider, not an Article 25(1)(c) event.

Clearline shows the other sense. Building it gave Larkspur control over its training data and that data's quality, the ability to tune the model to lending segments no vendor serves in that shape, and trade-secret protection for its feature engineering in place of publication. Clearline is free of a vendor's roadmap, pricing and deprecation, and Larkspur can answer a regulator's questions about it directly, from US adverse-action reasons to the Dublin entity's technical documentation as provider, rather than through a supplier.

### A Snapshot, Signed

The assessment phase asks what an organization is taking on before a system meets the public. The impact assessment answers for the people the system touches, the contract for the vendor relationship, including what could not be bought, and the licence review for every component, open or closed. Bought or built, the accountability comes out the same: Larkspur answers for Clearline because it built it, and for Ask Larkspur because it chose it.

Ask Larkspur passed its gate in March. The approved record named Owen as its owner, the signed Norvane agreement carried every term but the warranty, and the residual risk from that refusal sat on the register under his name. In Dublin, Dana's FRIA took shape on top of the DPIA. Before filing the Ask Larkspur record, Nadia typed one line at the bottom: "This is a snapshot."

In April the assistant went live for US customers, and the record began to age with the first conversation. Chapter 13 follows Ask Larkspur into continuous governance, where most of a deployed system's working life is spent, and asks who is watching when the system and its snapshot part company.

### The Record

Chapter 12 added these artifacts to Larkspur's record.

- **Ask Larkspur impact assessment record (ISO/IEC 42005).** Owner: Owen Park. The clause 6 fields, the sensitive-use approval, four reassessment triggers and an open item on the production ingestion job.
- **Clearline Dublin FRIA.** Owner: Dana Whitfield. Built on the DPIA under Article 27(4), with Siobhan Kelly advising, ahead of the legal date.
- **Norvane contract review memo and signed API agreement.** Owner: Marcus Hale. Zero retention, Article 28 terms, model-change and 24-hour incident notice, audit rights, certification evidence, insurance and agent controls, with the refused accuracy warranty logged as a residual risk owned by Owen Park.
- **Licence review.** Owner: Marcus Hale. The non-commercial model ruled out, the AGPL component, fine-tuned derivatives and the agent's future tools.
- **Repurposing escalation record.** Owner: Nadia Brennan. The blocked loan-application proposal and the council's Article 25(1)(c) reasoning.

### Exam Focus

This chapter maps to competency IV.B, the smallest in Domain IV, where a wrong answer is most often a category error: the right fact attached to the wrong instrument, party or sense of a word.

- ISO/IEC 42005 is guidance nobody can be certified to, while ISO/IEC 42001 is certifiable and requires the impact assessment (clauses 6.1.4 and 8.4, Annex A objective A.5), so 42001 requires it and 42005 explains how.
- Two ideas carry most 42005 questions: the people lens (individuals, groups of individuals and societies) and the lifecycle scope (design, the deployment gate, operation and significant change).
- "Harm to the people affected" points to 42005 and "risk to the business" points to ISO/IEC 23894, and the two are complements joined by 42005's Annex B.
- Clause 5 is the organization's process and clause 6 is the content of one assessment, and a record with no benefits or no unintended uses is incomplete.
- The four reassessment triggers are a change of intended use, a significant system change, a legal or policy change and a monitoring surprise, and a demand-forecasting model that starts rating individual workers is the textbook trigger.
- The DPIA falls on the controller when processing is likely to be high risk, the FRIA falls before first use on public bodies, private entities providing public services and deployers of Annex III 5(b) and 5(c) systems, and a 42005 assessment is voluntary for anyone.
- "The vendor's impact assessment covers us" is a distractor, because 42005 applies to organizations that develop, provide or use AI, and 42005 is not a harmonised standard, so it gives no Article 40 presumption of conformity.
- The five core contract terms are data usage rights, performance guarantees, liability allocation, audit rights and compliance obligations, and the red flags are vendor ownership of inputs, retention for model improvement, onward sharing, unwarranted outputs and an irrevocable feedback licence.
- Verification terms (training data sources and lineage, evaluation evidence, audit mechanisms, ISO/IEC 27001, 42001 and SOC 2 Type II, incident timelines, cyber insurance) let a deployer test vendor claims, and an opaque vendor leaves a narrower use case, another supplier or an in-house build.
- Open weights are still licensed: permissive terms (MIT, Apache 2.0) ask little, copyleft terms (GPL, AGPL) can force disclosure of incorporating code, and a non-commercial model in a commercial product is the textbook IP infringement scenario.
- Repurposing a third party's system, including a general-purpose AI system, into a high-risk use makes the organization its provider under Article 25(1)(c), and provider duties cannot be delegated to the vendor.
- Because the BOK frames the proprietary-model item as risks and opportunities, expect questions on the upside of building: control of training data, domain tuning, trade secrets, freedom from a vendor's roadmap and direct answers to regulators.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): AI Impact Assessment, Open Source Agreement, Proprietary Model Deployment Obligations, Vendor Agreement.

### Further Reading

- [ISO/IEC 42005:2025 (AI system impact assessment)](https://webstore.iec.ch/en/publication/107659): published 28 May 2025; scope, clause structure and the harms-and-benefits annexes
- [ISO/IEC 23894:2023 (AI risk management)](https://webstore.iec.ch/en/publication/82914): the organizational-risk counterpart that 42005 Annex B feeds
- [ISO/IEC 42001:2023 (AI management system)](https://webstore.iec.ch/en/publication/90574): the certifiable standard that requires the impact assessment 42005 explains
- [EU AI Act, Article 27 (fundamental rights impact assessment)](https://artificialintelligenceact.eu/article/27/): who must perform a FRIA and what it must contain
- [GDPR, Article 35 (data protection impact assessment)](https://gdpr-info.eu/art-35-gdpr/): the DPIA trigger, the listed high-risk cases and the required content
- [EU AI Act, Article 6 (classification rules for high-risk AI systems)](https://artificialintelligenceact.eu/article/6/): what makes a system high-risk, which is what pulls the FRIA duty in
- [NIST AI RMF Playbook (MAP function)](https://airc.nist.gov/airmf-resources/playbook/): MAP 2 to MAP 5 on impacts to individuals, groups and society
- [EU AI Act, Article 25 (responsibilities along the AI value chain)](https://artificialintelligenceact.eu/article/25/): when a deployer becomes a provider, and why duties cannot be delegated
- [EU AI Act, Article 16 (obligations of providers of high-risk AI systems)](https://artificialintelligenceact.eu/article/16/): the provider duties that follow the Article 25(1)(c) shift
- [EU AI Act, Article 26 (obligations of deployers)](https://artificialintelligenceact.eu/article/26/): the deployer's own duties, which survive any vendor arrangement
- [EU AI Act, Article 3 (definitions)](https://artificialintelligenceact.eu/article/3/): general-purpose AI model and the provider role

## Chapter 13: Operating, Monitoring and Retiring

*Charlotte, June 2026*

Owen Park's email arrived before eight on a Friday morning, with four customer complaints pasted underneath and a single line of his own: "Same sentence in all of them."

Nadia Brennan read the sentence four times, once in each customer's words. The chat said Larkspur "waives the first late fee for customers in documented hardship." One customer in Texas, whose hours at work had been cut, wrote that she had skipped her June payment on the strength of it. Now she had a late fee and a letter warning that the account could be reported to the credit bureaus.

Larkspur had no such policy. Nadia knew that without checking, and checked anyway. The fee schedule said nothing about hardship. The hardship procedures said nothing about fees. Ask Larkspur had been answering US customers for ten weeks, and Norvane's dashboard, which still led with containment rate, showed its best week since launch.

She called Owen. He was already in the contact-centre operations room with his knowledge-management lead, scrolling through transcripts.

"How many?" she asked.

"We don't know yet. The complaints tripwire flagged the phrase overnight. It could be four. It could be four hundred."

Whether to deploy the assistant had been settled in January, with a decision record and a named owner, and whether to trust the vendor had been settled in March, with signed terms. The questions on Nadia's pad that morning were of another kind. They were about who was watching the system, who would decide what happened next and on what authority, and where each of those decisions would be written down so that someone could reconstruct them a year later. Under them she wrote the one she could not yet answer. How had a policy that did not exist found its way into a system whose every document was supposed to have an owner?

That question runs through this chapter, which follows a live system through its working life to the day something is switched off. Chapters 11 and 12 decided to deploy Ask Larkspur and assessed what Larkspur was adopting. What remains is the governance of use: forecasting and registering risk as it changes (13.1), assuring the system through audits and testing (13.2), handling incidents (13.3), keeping records that survive scrutiny (13.4), speaking to customers, regulators and the public (13.5), and retiring, deactivating or localizing a system under a policy with controls behind it (13.6). Monitoring, the detection layer beneath all of it, was built for Clearline in Chapter 10.3, and this chapter refers back to it.

The incident serves as a cold open. Sections 13.1 and 13.2 show what the program already had in place when the complaints arrived, 13.3 follows the response, and 13.4 to 13.6 carry it into records, communications and retirement. The argument is that none of this is a single decision. Governance of a deployed system counts only when it repeats, and only when each repetition leaves evidence.

### 13.1 Risk Management and Forecasting

The first thing Nadia opened was the register, because the question of what could go wrong with Ask Larkspur had been asked and answered before launch. The morning's task was to find out whether the answer still held.

#### Why AI risk outgrows IT risk

Conventional IT risk frameworks cover availability, data loss and system failure. AI risk adds four dimensions, each a practical face of the characteristics introduced in Chapter 1.3. **Probabilistic behaviour** means an output is a distribution rather than a correct answer, which is Chapter 1.3's probabilistic outputs. **Evolving outputs** arise because retraining, feedback loops and environmental inputs change the model, which is data dependency and emergence at work. **Third-party model dependencies** exist because most organizations consume someone else's model, open-source weights or a cloud service. **Societal-level impacts** include discrimination, misinformation and environmental cost, the potential for harm multiplied by speed and scale. Ask Larkspur carried all four. It could phrase the same answer differently from one day to the next, Norvane had already changed its model once without notice (Chapter 3.3), and it talked to thousands of customers a week.

An analogy from networking helps if it is not taken literally. In the seven-layer OSI model, AI risks sit at or above Layer 7, the application layer, because they are socio-technical risks about data and decisions rather than about infrastructure logic. No firewall review would have found the fee-waiver answer. A second principle carries the rest of the chapter: a system secure today may not remain secure tomorrow. Because the model and its environment both move, AI risk management has to be proactive rather than periodic.

#### Risk, the matrix and the register

**Risk**, as ISO 31000 defines it, is the effect of uncertainty on objectives. The deviation can be positive, negative or both, and a risk is characterized by its drivers, potential events, consequences and likelihood. ISO/IEC 23894 takes its structure from ISO 31000 and adds AI-specific guidance to each of ISO 31000's eight principles. Of the eight, **dynamic** matters most for AI, because systems that learn change their own risk profile.

The **probability-severity matrix** that Chapter 8.3 applied to Clearline ranks risks without measuring them, and under its NIST AI RMF equivalent, MANAGE 1.2, treatment is prioritized by impact, likelihood and available resources. On Tom Ashby's register, Clearline's disparate-impact risk (risk owner Dana Whitfield) ranked above Ask Larkspur's confabulation risk (risk owner Owen). That ordering said which to treat first. It said nothing about how much harm either could do.

AI risks belong in the enterprise risk register. Each entry carries the system or application, the risk description, associated use cases, likelihood and impact scores, the treatment decision and its decision-maker, the mitigation strategy, the residual risk after mitigation, the risk owner and a review schedule. Two properties set an AI register apart. It is **dynamic**, because retraining and drift change the entries. It is also linked to incidents in both directions: when an incident reveals a risk nobody had considered, that risk is added, and every incident traces back to the risks already on the register when it occurred.

The fee-waiver incident ran both ways. It added a risk nobody had written down, "unapproved documents in the retrieval corpus", owned by Owen. It also traced back to the existing confabulation entry, whose recorded mitigation (grounding in the policy library plus a prompt instruction) had failed. The register had foreseen the harm and trusted the wrong control.

#### Forecasting

Forecasting asks how a system behaves under pressure, where testing asks how it behaved on the bench. **Drift detection** watches for the three drift types taught in Chapter 10.3 (covariate, label and concept drift), and statistical tests trigger retraining or alerts when thresholds are crossed. **Feedback loop anticipation** looks for systems that change the world they learn from. In recommendation engines and predictive policing, the changed environment becomes training data and the model amplifies its own bias. Clearline's version is the selective-labels problem of Chapter 9, since declined applicants never produce repayment outcomes. **Simulation** uses digital twins, synthetic data and simulated environments to test adversarial and edge-case behaviour before production sees it. **Threat modelling** supplies the attack paths, and section 13.2 covers its methods.

#### Secondary use and downstream harm

The hardest forecast concerns uses nobody intended. **Secondary use** is AI output applied to a purpose different from the original intent: content reused as training data elsewhere, outputs chained into another system, or a benign tool repurposed for harm, as when an image upscaler becomes a deepfake generator. It is a cousin of function creep (Chapter 4.2), which concerns personal data, where secondary use follows the outputs. In the spring, marketing asked to use Clearline scores to target pre-approved offers, and Larkspur Insurance Services asked to use them to choose which borrowers to offer its partners' credit-protection products. The council declined both pending each requester's own analysis, and recorded why.

**Downstream harm** is the consequence felt by people and systems nobody considered. The fee-waiver answer shows how it travels. A customer who relies on it skips a payment, incurs a late fee and risks a late payment on her credit file, a second-order harm that no review of a chatbot's tone would have pictured. The response is to extend risk review beyond direct users to second- and third-order effects, using stakeholder impact mapping, recursive scenario modelling, external consultation and misuse testing.

Forecasting names the risks. Assurance is how an organization shows others that it has checked them, and the board was about to ask for some.

### 13.2 Audits and Assurance

In July, with the incident review under way, Tom brought Nadia a request from the board risk committee. The directors wanted an audit of Clearline, to be sure the system Larkspur had built would not surprise them the way the one it had chosen just had. Nadia answered with a program, and the difference between the two is where this section begins.

**AI assurance** is the combined work of checking, and showing to others, whether an AI system deserves trust. Its components are impact assessments, bias and compliance audits, conformity assessment, performance testing, formal verification and certification. An audit or a red-team test is one assurance technique, and assurance is the overall program that produces justified confidence for regulators, customers and the board. The two words are often used as synonyms. A single audit, though, answers one question at one moment, which is less than the committee needed.

An **audit** is a systematic, independent examination of a system's design, data, outputs and governance against established criteria. A first-party audit is internal. A second-party audit is a customer or partner auditing a supplier. A third-party audit is carried out by an independent external auditor. Nadia's program used all three. Internal audit would review Clearline's controls. Larkspur's diligence on Norvane was second-party assurance, and so, pointed the other way, was the bank funding partner's questionnaire from Chapter 7, with Larkspur as the supplier under review. The independent bias audit that New York City's Local Law 144 requires before HR can use the Brightlist screener for New York City roles was third-party assurance.

Under the EU AI Act, conformity assessment for high-risk systems is carried out against the Chapter III requirements and, for certain systems, by a **notified body**, an independent assessor. For Annex III systems in points 2 to 8, which include credit scoring, the Act uses conformity assessment based on internal control, without a notified body (Article 43(2)). The Dublin entity therefore assesses Clearline itself, as provider, against Chapter III. Internal sign-off is the lawful route for a credit-scoring system, and the real question is whether the internal assessment was rigorous and documented, which the independent validation team reporting to Tom exists to test.

Nadia's program matched each question the committee might ask to the technique built to answer it.

| Technique | The question it answers | At Larkspur |
|---|---|---|
| Performance audit | Does the system meet its stated criteria across accuracy, fairness, robustness, performance and generalization? | Clearline against its design-stage criteria |
| Model validation | Do the development claims hold up, and does behaviour match between test and production? | The independent validation team |
| Red teaming | How does the system behave under adversarial and misuse conditions? | Ask Larkspur before launch |
| Threat modelling | What are the attack paths against this specific system? | The hardship-plan agent |
| Security testing | Can confidentiality and integrity be broken? | Clearline extraction and membership inference |
| Compliance audit | Are the applicable laws, policies and contractual terms actually followed? | Clearline's controls and Norvane's terms |

The table reads as a division of labour. Performance criteria are set in the design phase (business alignment, context sensitivity, stakeholder expectations, fairness, precision and robustness), and audits test against them. Models often behave differently in production than in controlled test environments, so when a production system fails a criterion, the follow-up is to reproduce the failure in test and find the difference.

#### Red teaming and threat modelling

**Red teaming** is structured adversarial simulation: prompt injection and jailbreak testing, evasion attacks, poisoning, functionality misuse and social engineering. It should cover the wider ecosystem (infrastructure, APIs, integration layers and data pipelines) as well as model parameters, and it targets personnel as well as the system. Ask Larkspur's pre-launch red team had done most of this well. It tried to jailbreak the assistant into revealing other customers' data and into promising fee waivers, planted instructions in test documents, and tried to talk support staff into overriding escalations. It never asked ordinary, benign questions against a corpus that held the wrong documents. The part of the ecosystem that failed was the data pipeline, which the testers had treated as trusted, and the lesson went into the after-action review.

**Threat modelling** extends traditional methods to AI-specific attack surfaces. **STRIDE**, adapted for AI, maps spoofing and tampering onto prompt injection and data poisoning, information disclosure onto model theft, and elevation of privilege onto unauthorized API chaining. That last mapping shaped the hardship-plan agent. Its threat model asked what would happen if the plan tool could be chained to account-modification functions, which is one reason its permissions are capped at a human representative's (Chapter 11.4). **MITRE ATLAS** is the AI-specific knowledge base of adversary tactics and techniques, modelled on ATT&CK, and kill chain analysis, attack trees, TARA and PASTA are related methodologies. **Threat hunting** is the proactive complement to threat modelling: searching for indicators of compromise instead of waiting for an alert. Security testing for AI adds model extraction, inference attacks, membership inference, re-identification testing and adversarial robustness testing. For Clearline that meant probing whether repeated applications could reconstruct the model, and whether its outputs revealed which historical borrowers' files had trained it, threats named in Chapter 3.2 and guarded against in Chapter 9.

#### Evidence for the auditor

An assurance program is only as good as its evidence. Audit documentation includes the audit charter, findings and recommendations, red-teaming logs and the scenarios tested, threat models with attack paths and mitigations, reproducible test sets, model version histories and deployment metadata, and evidence of remediation. Preparation comes down to a short list: one source of truth for documentation, immutable logs, internal dry runs, a named owner per compliance area, and coaching for the people who will sit in front of the auditor. Nadia's Clearline evidence pack put the validation reports, bias results, red-team logs and version history in one place, and she booked a dry run with internal audit before any outside reviewer saw it. How such records must be kept is the subject of section 13.4. First, the incident itself.

### 13.3 Incident Management

The complaints on Owen's desk forced two decisions at once: whether this was an incident at all, and if so, in what order to act.

#### Incident versus issue

An **incident** is unexpected behaviour involving an AI system that causes, or has the potential to cause, harm, operational disruption or regulatory concern. The standard examples are a recommendation system surfacing illegal content, a chatbot giving incorrect medical advice, and unexpected degradation from drift. An **issue** is undesirable behaviour, a complaint or a shortcoming that does not rise to that severity but still needs formal tracking, such as minor inconsistencies, sporadic misclassification or tester feedback. The boundary is severity plus context, whatever the type of event. A poorly ranked search result is an annoyance, while a misclassification in a diagnostic tool can be life-threatening. Ask Larkspur supplied its own pair. It sometimes formatted dates oddly, which went in the issue log. It told customers about a fee policy that did not exist, which caused financial harm and raised concern under US consumer-protection law. The same kind of falsehood about the contact centre's opening hours would have been minor.

The seriousness has a public precedent. In *Moffatt v. Air Canada*, 2024 BCCRT 149, decided in February 2024, the British Columbia Civil Resolution Tribunal held Air Canada liable for negligent misrepresentation after its website chatbot gave a customer wrong information about bereavement fares, and rejected the airline's argument that the chatbot was responsible for its own statements. A Canadian tribunal binds no US or EU court. As a persuasive illustration, though, it matches the principle Chapter 3 fixed: an organization answers for what its system tells customers, whoever built the model.

#### The response lifecycle

A full response lifecycle runs through nine steps: detection, triage, communication, investigation, containment, eradication, recovery, after-action review and documentation. A shorter mnemonic compresses it to six: contain, assess, investigate, remediate, notify, learn. The two seem to disagree about when communication happens, and they reconcile once communication is split in two. Internal communication begins at triage, because the right people must know at once. External notification follows the legal clocks and the facts, so it often comes after containment and remediation are under way. Two ordering rules outrank either list. Preserve evidence before retraining, because retraining destroys the state needed to explain what happened. Never disable logging during an incident, because that destroys the audit trail the organization is legally required to keep.

Severity classification drives escalation. Critical means widespread harm, regulatory violation or systemic failure. Major means significant user impact or breakdown of a core function. Moderate means isolated, limited exposure. Minor means no external impact, handled internally.

Larkspur's response followed the long lifecycle. Detection came from the complaints team's tripwire on phrases such as "the chat said", one of the monitoring thresholds Owen had owned since Chapter 11. Nadia triaged the event as major, which paged Owen, Marcus Hale and the CISO within the hour. Containment was surgical: fee and hardship topics were routed to human agents while the assistant stayed up for everything else, and the contact centre absorbed the load because Nadia had insisted, back in Chapter 11, on keeping enough trained agents to take full volume. Before anyone touched the retrieval index or the prompt, Priya Raman's team snapshotted the index, the system prompts, the Norvane model version and the transcripts, and logging stayed on throughout. The logs showed that Ask Larkspur had given the answer to 41 US customers, and that nine had skipped or deferred a payment relying on it.

#### Root cause and the culture question

Not every incident is a bug. Some come from **misaligned objectives**, as when a model trained to maximize engagement promotes polarizing content without ever malfunctioning, so the fix may be a change of objective and not of code. Root causes are usually one or more of eight: model brittleness, insufficient robustness, poor or unrepresentative training data, misaligned objectives, over-reliance on automation with absent oversight, inadequate testing, model or data drift, and prompt-design failures in generative systems. Finding them takes a multidisciplinary review whose goal is to learn and improve, never to assign blame, because psychological safety is what makes people report the near misses that precede real incidents.

Larkspur's blameless review traced the root cause to March. When a platform engineer built the production ingestion job for the retrieval index, the job was pointed at a shared customer-operations folder instead of the approved policy library. The folder held a draft discussion paper proposing a hardship fee waiver that had never been adopted, and the assistant had been retrieving it as policy. Nobody had decided which folder the index would ingest. It was the one consequential decision in the whole deployment with no owner and no record, the gap left in Chapter 2 when the RACI line covered approving documents for the library but not how the index was fed. Norvane's 24-hour incident-notice clause (Chapter 12.2) never came into play, because the failure was Larkspur's own.

Four contributing causes turned the gap into harm. The prompt-layer rule "never promise fee waivers", accepted for launch in Chapter 11.3 with its risk recorded, did not hold, because the model was describing a policy, not promising anything. Norvane's configuration was still tuned toward containment rate, a misaligned objective that rewarded confident answers over handoffs. Human agents using the drafted replies had pasted some fee answers without checking them, the automation bias Chapter 2 warned about. And in May a night-shift agent had noticed two odd transcripts about fees and reported nothing. The review asked why reporting had not seemed worth the trouble, not who had failed to report. In the OECD vocabulary of Chapter 7, that moment was a hazard, and near misses count as hazards.

The after-action review in July, chaired by Nadia, was organized around the three questions the program had asked since the autumn. Who owns this decision? What could go wrong, and for whom? Where is it written down? The remediation answered each one. The corpus was restricted to the approved library, with document-owner sign-off for every addition. The ingestion configuration went under change control, with Owen Accountable and his knowledge-management lead Responsible. A deterministic rule enforced at the system layer, outside the prompt, now requires every answer about fees to cite an approved document ID or hand off to a human. Containment rate came off the dashboards. Customer remediation was decided by Dana and Owen with Marcus: Larkspur honoured the stated waiver for the customers who had been told of it, reversed the fees, and corrected any late payments already reported to the credit bureaus. Marcus's note records honouring the waiver as a business remediation choice, not a legal conclusion that the chat had bound Larkspur.

#### Monitoring, tripwires and resilience

Incident management depends on monitoring to feed it. Chapter 10.3 set out what monitoring covers and the leading indicators that act as **tripwires**, any one of which is treated as an incident. That is how Clearline's July override spike entered the incident log and how the complaint phrase flagged the fee-waiver answer. **Resilience** is the other side: the ability to recover the operational state quickly after an incident. Larkspur's retained staff were its resilience.

#### Disclosure and the legal clocks

Disclosure triggers vary by law and context. They include deployment of a high-risk system, material performance degradation, safety failure, a significant breach affecting AI inputs or outputs, misleading output affecting health or safety, and behaviour outside the intended use case. The obligations with fixed clocks are few, and they are easiest to hold side by side.

| Obligation | Who owes it | To whom | Clock |
|---|---|---|---|
| EU AI Act Article 73, serious incidents | Providers of high-risk AI systems | The market surveillance authority | Generally 15 days from awareness, 10 days for a death, sooner for widespread infringement or serious and irreversible disruption |
| GDPR Article 33, personal data breach | The controller | The supervisory authority | 72 hours |
| GDPR Article 34, high-risk personal data breach | The controller | Affected data subjects | Without undue delay |

Article 50's transparency duties for AI interaction and synthetic content sit alongside these as design-time obligations with no incident clock, and section 13.5 takes them up.

The table explains Marcus's notification memo. The fee-waiver event was not an Article 73 serious incident, because Article 73 is a provider duty for high-risk systems, Ask Larkspur is not high-risk, and the affected customers were in the US. It was not a GDPR personal data breach either, since no personal data had been compromised. The exposure was US consumer protection: the FTC Act section 5, CFPB authority over unfair, deceptive or abusive practices, and state UDAP laws. No mandatory regulator notification was triggered, and Marcus recorded that analysis with the remediation. A different defect would have read differently. Had Clearline systematically denied Irish applicants on a protected characteristic once its Annex III obligations applied, the Dublin entity as provider could have owed an Article 73 report within 15 days. The GDPR clocks had already run once at Larkspur, in the December paste, where Siobhan Kelly's 72-hour assessment (Chapter 4.4) is the worked example.

#### Preparedness

An AI incident response plan can stand alone, but it is better integrated with the organization's IT, cybersecurity and privacy plans. Playbooks, simulation exercises and employee training are what make any plan real. Nadia merged the AI playbook into Larkspur's cyber and privacy response plans, so that Siobhan's GDPR clock and Marcus's legal review start from the same trigger, and in August she ran a tabletop exercise on a fee-waiver scenario set in Dublin.

### 13.4 Business Records

When Marcus asked what exactly the 41 customers had been told, the answer came from the logs. Ask Larkspur's transcripts were written to append-only storage with cryptographic hashes, so they showed each answer word for word and when it was given, and nobody could suggest the record had been edited afterwards. Records like these are the working memory of deployment governance, and the law says a good deal about which ones must exist.

#### Four families of records

Record keeping in this domain covers four families. The first is **incidents and issues**. An incident record documents an event that deviated from intended behaviour: the date and time of detection, the detection source, the system or model affected, the observed behaviour and its consequences, the severity classification, the immediate response and who took it, the root cause, the mitigation and its verification, and the resolution date. The fee-waiver record carried every field, from the complaints tripwire as detection source to the test showing that the citation rule blocked uncited fee answers. Issue records track less severe items, such as Ask Larkspur's date formatting, through intake, categorization, assignment, escalation, resolution and closure.

The second family is **risks**, held in the register described in section 13.1. The third is the **post-market monitoring plan**, the documented, forward-looking plan established before release that says what real-world data is collected, how it is reviewed, by whom, and what thresholds trigger action. Clearline's Dublin plan under Article 72 (Chapter 10.3) is Larkspur's example. The fourth is **lifecycle artifacts**: design documents, training data provenance and lineage, test plans and results, model versions, configuration records, human intervention logs, and the approvals that authorized each stage. The ingestion job's configuration had been missing from this family, and its absence is the incident in one sentence.

#### The legal hooks

Record duties differ by jurisdiction and by role, so the useful comparison is between specific obligations. Under the EU AI Act, providers of high-risk systems carry detailed technical documentation duties (Article 11 and Annex IV), and deployers must keep the system's automatically generated logs for at least six months under Article 26(6), unless other law provides otherwise. Once Annex III obligations apply, the Dublin entity will hold both duties for Clearline, as provider and as deployer. Under the GDPR, Article 30 requires records of processing activities, and the accountability principle in Article 5(2) requires the controller to be able to demonstrate compliance, which in practice means logging for automated decisions. The NIST AI RMF expects documentation at every stage for trustworthiness and auditability, and ISO/IEC 42001 requires logging, incident reporting and risk documentation inside the management system. On the US side, ECOA and Regulation B record-keeping requirements reach Clearline's credit decisions.

#### Retention, integrity and disposal

Records belong in the organization's retention schedule, typically three to seven years depending on jurisdiction, with periods set by system type and risk level and legal counsel consulted on each. Most records should be **immutable**: timestamped, held in a tamper-evident format, access-controlled to authorized personnel, encrypted, and disposed of at end of life in proportion to the sensitivity of what they contain. Append-only logs and cryptographic hashing are the common mechanisms. Their purpose is **nonrepudiation**, a record that cannot be denied or quietly altered, which is what let Larkspur settle the question of the 41 customers in an afternoon.

Deletion is a trap in both directions. Retaining personal data longer than necessary breaches data minimisation. Deleting incident records or decision logs at shutdown destroys the evidence that affected individuals may need to contest a past decision, and that a regulator may examine years later. The answer is a documented decision per record type, made with legal counsel. Marcus made Larkspur's, with Siobhan advising on the Irish records. Clearline's decision logs are kept long enough for applicants to contest adverse decisions. Raw Ask Larkspur transcripts containing personal data are minimized after a set period, while the hashed extracts behind the incident record are kept with it.

Records tell the organization what happened. Customers, regulators and sometimes journalists have to be told as well, and what Larkspur said needed to be as accurate as what it kept.

### 13.5 External Communications

The letter to the 41 customers took a path that models disciplined communication. Owen's team drafted it. Marcus reviewed it for legal exposure. Priya supplied a plain explanation of what had gone wrong technically. The COO, Larkspur's designated approver of external communications, signed it off. Each customer was told what the assistant had said, that it was wrong, what Larkspur was doing about it, and how to reach a person.

Communication about AI needs planning, discipline and maturity, because ad hoc statements are how organizations contradict themselves. A communications plan names the roles: a public information officer or equivalent as the authorized voice, a social media lead, an AI communications lead who owns AI-specific messaging, legal counsel reviewing for compliance, IP and liability, and product or engineering staff supplying technical explanation. It names the channels, and it sets the approval rule that communication to any external party is formally approved by a designated leader. The plan integrates with enterprise risk management, data governance, privacy, incident response and regulatory reporting, so that a disclosure is one motion and not several departments acting separately.

#### What gets disclosed

Capability and limitation disclosure covers the system's purpose and use cases, its limitations and known risks (accuracy boundaries, potential biases, data dependencies and reliability caveats), how and when human oversight is used, general descriptions of data sources and model behaviour, and how to raise an inquiry, appeal a decision or correct an error. It appears in product documentation, terms of use, privacy notices, model cards and plain-language explainers. Ask Larkspur's in-chat notice was revised to say that the assistant can make mistakes and that fee and account decisions are confirmed by staff. Clearline's disclosures run through other channels: adverse-action notices with principal reasons for US applicants (Chapter 5), and GDPR information and Article 22 rights for Irish applicants (Chapter 4.4).

The recurring warning is **overclaiming**. Overstating what a system can do invites regulatory scrutiny, loses consumer trust and creates litigation exposure, which is why accuracy claims about AI capability get the same review as any other public claim. Chapter 5 struck "our assistant always gets it right" from the April launch copy. The incident showed what that sentence would have cost.

#### Duties to disclose

The EU duties divide by role, as Chapter 6.1 set out. Article 50(1) requires the provider of a system that interacts with people to tell them they are interacting with an AI system, unless that is obvious, from 2 August 2026. Larkspur carries it as downstream provider of Ask Larkspur (through the Dublin entity for Irish customers), and the mid-August Irish launch showed the disclosure from the first chat, alongside the new system-layer fee control. Article 50(2), the provider duty to mark synthetic output in machine-readable form, may or may not reach Ask Larkspur's plain text, and that remains an open question in Marcus's memo. Article 50(4) is a deployer duty to disclose deepfakes and AI-generated text published on matters of public interest. High-risk systems must also be registered in the EU database, with information that includes the intended purpose, technical specifications, risk mitigation and the post-market monitoring plan. Clearline's registration is prepared and scheduled for when it applies. The incident and breach clocks are in section 13.3.

Preparation for all of this is mostly writing in advance. Pre-approved templates (press releases, FAQ answers, timeline graphics and plain-language explanations of model behaviour) are kept ready so that a time-sensitive disclosure is not drafted under pressure.

#### Crisis communication

A crisis plan names the response team and the people authorized to speak, frames the message around transparency, responsibility and the action being taken, and pre-writes the statements and anticipated questions. It belongs in the AI governance plan, and not only in the communications team's folder, because the AI-specific scenarios are foreseeable: a model producing infringing content, a discriminatory outcome at scale, a security compromise of an agent. The response is judged on whether the organization was prepared. Larkspur's plan rehearses the second scenario, in which a journalist alleges that Clearline declines applicants in certain ZIP codes at higher rates. The prepared statement draws on the proxy decision recorded in Chapter 8.3 and the fairness memo from Chapter 9, and it names the authorized speaker.

#### Across the lifecycle

Communication maps to lifecycle stage. Design and development brings research publications and data use notices. Validation and testing brings accuracy disclosures and bias audit results. Deployment brings the purpose statement, user guidance and stakeholder briefings. Operation brings post-market updates, incident alerts and FAQs, such as the fee-waiver letters. Retirement brings sunset notices, archival disclosures and user offboarding, the stage Scorecard 7 was entering. Effectiveness is measured on clarity, reach, responsiveness and trust indicators, using surveys, sentiment analysis, inquiry volume and resolution time, and periodic communication audits check clarity, consistency and legal adequacy.

### 13.6 Retirement, Deactivation and Localization

In August, the month Ask Larkspur went live in Ireland, Scorecard 7 was switched off in the US. Clearline's design baseline had named its retirement (Chapter 8.5), and the July memo had chosen retirement over retrofit (Chapter 6.5). Switching off a model that had shaped a decade of lending decisions turned out to be a project of its own.

#### Triggers and the retirement policy

Deactivation is driven by regulatory change that makes continued use non-compliant or cost-prohibitive, performance degradation from drift or obsolete data, business reprioritization, security or ethical concerns, withdrawal of a third-party model or API the system depends on, and localization requirements the organization cannot meet. Scorecard 7 met two of these: Clearline had replaced it, and its performance had degraded. In the same month Norvane issued a deprecation notice for the model version Ask Larkspur used, the third-party trigger.

A retirement policy sets the criteria for retirement, the approval and escalation process, the planning requirements (stakeholder notification, system backup, data archiving and user transition support), the documentation and audit trail, and an after-action review. AI retirement is more than IT decommissioning. It may require untraining, ethical review, removal of derivative models trained on the retired system's output, and public communication, especially where the system made high-impact automated decisions. Priya's lineage check, tracing forward as Chapter 9.2 had traced backward, found that Clearline was trained on outcomes shaped by Scorecard 7's approvals. The council documented the dependency and recorded why it did not force Clearline's retirement: Clearline had been validated and fairness-tested in its own right, with the selective-labels problem addressed in Chapter 10.3.

#### Controlled deactivation

Controlled deactivation is a repeatable sequence, and its order matters.

1. Map stakeholders and their transition needs.
2. Analyse usage and dependencies to find the downstream tools that rely on the system.
3. Plan the fallback or replacement.
4. Notify and educate users.
5. Capture a **final audit snapshot** of inputs, weights, performance metrics and decision logs.
6. Disable APIs, terminate model endpoints, remove integration points and update security controls.
7. Monitor after deactivation.

Step two earned its place. The dependency analysis found a collections prioritization tool, a partner referral feed and a dashboard still calling Scorecard 7's API, none of them in the retirement plan. Each got a fallback before the endpoints were terminated and the service-account keys revoked. The operational risks throughout are business continuity, data integrity, access revocation (API keys, credentials and service accounts), and residual risk from unintended consequences of the shutdown.

#### Archive or destroy

The organization archives final model versions and training data lineage, performance logs, incident and mitigation records, decision outputs (especially in healthcare and finance), design documents and anything a regulation requires. It disposes of redundant training data, temporary checkpoint files and personal data not required for compliance, using data erasure tooling, and for cloud-hosted systems it gets the provider to confirm destruction, ideally with a **certificate of destruction**. What the retention rules actually require is settled by a legal and records review, informed by the DPIA, since a DPIA assesses the risks of processing and does not by itself fix retention periods. The reason to preserve is the one section 13.4 gave. Scorecard 7's decision outputs were archived because past applicants may still contest decisions under ECOA and Regulation B or, in Ireland, the GDPR, and redundant copies were destroyed with a certificate of destruction from the cloud provider. Marcus's retirement record claims no EU AI Act duties for Scorecard 7. It was in service before any Annex III date and never significantly changed, so the high-risk duties never attached (Article 111(2)), and its retention rests on GDPR storage limitation, ECOA and Regulation B record-keeping, and evidence for contested past decisions.

#### Communicate and learn

Retirement communications go to users (in-product alerts, email and support updates), to business customers and partners as the legal agreement requires, to the public through press releases and transparency pages, and to regulators where required. Contractual notice periods are a common source of claims, and abrupt retirement carries litigation risk when customers relied on the outputs. Scorecard 7's underwriters were briefed, and its referral partners received notice under their contract periods. The closing step is a post-retirement review: root cause analysis, impact on users and reputation, an ethical check that the retired model is not repurposed harmfully, and knowledge capture for the next team. By September the US review was done and the Dublin retirement was under way.

Norvane's notice was handled as a significant change, as the advance-notice clause negotiated in Chapter 12.2 anticipated. Migrating Ask Larkspur to the new model version triggered re-evaluation against Larkspur's own test suite, the compensating control for the accuracy warranty Norvane had refused, and a reassessment of the impact assessment record, whose triggers had named Norvane model changes (Chapter 12.1).

#### Localization

A **localization policy** restricts a system's operation to specific regions, jurisdictions or contexts, and is the regional counterpart to deactivation. The drivers are data sovereignty laws requiring training or inference inside national borders, regional ethical and societal norms affecting content filtering or recommendations, and regulatory constraints such as an EU AI Act prohibition or a high-risk classification in one market only. The delivery options are separate country-specific model instances, federated learning that keeps data resident while training is decentralized, and a modular architecture that enables regional features selectively. Clearline is the one-market case. Its Irish instance is built to the Annex III standard, while its US instance answers to US lending law, and the two run as separate instances. Korea would be the next test. Larkspur has no Korean customers or data, but a separate Korean instance is one option the policy would have to weigh if that ever changed. Localization is a documented control, so Larkspur's policy states the trigger, the decision authority (the council), the technical mechanism, and the records that prove which Clearline version scored which applicant where.

#### The deactivation policy as a control

The Body of Knowledge asks for a policy and controls to deactivate or localize a system. For high-risk systems the EU AI Act sets the floor. Article 14(4)(e) requires that overseers be able to interrupt the system through a stop function that brings it to a halt in a safe state. Article 26(5) requires a deployer that becomes aware of a risk to suspend use and inform the provider and the relevant authority. NIST AI RMF MANAGE 2.4 asks for mechanisms and assigned responsibilities to supersede, disengage or deactivate systems whose performance is inconsistent with intended use. Larkspur's deactivation policy applies all three to Clearline in Dublin, built to the standard ahead of the date the Annex III duties apply (2 December 2027 as amended, 2 August 2026 as enacted). It names who may halt Clearline and defines the safe state as manual underwriting, never automatic decline. Because the Dublin entity is both provider and deployer, informing the provider under Article 26(5) is an internal step, while notifying the relevant authority is not.

For agentic systems the policy has to be more specific: who may trigger the switch, what gets revoked (credentials, tokens and tool connections), which manual fallback takes over, and what evidence is preserved. In September the hardship-plan agent's US pilot opened at the first autonomy level, with a human approving every plan. Its kill switch can be pulled by Owen or the contact-centre duty manager. It revokes the agent's tool tokens to the servicing platform, falls back to plans set up by hand, and preserves the agent's logs as evidence. On its recorded scope the agent is not high-risk, so Article 14(4)(e) does not require any of this, and Larkspur adopted the switch as policy anyway. The warning the policy carries is **tradecraft loss**: staff who have never done a task by hand may not be able to run the fallback. Owen's newer representatives had never set up a hardship plan manually, so the policy schedules periodic drills.

### The Decision Nobody Wrote Down

Governing a live system is a set of habits that repeat. Risks are registered and revisited as the system and its surroundings move. Assurance comes from several techniques and several parties, never one audit. Incidents are handled in a fixed order, with evidence preserved and logging left on. Records are kept so they cannot be altered, and deleted only by decision. The organization speaks with one approved voice and claims no more than it can show. Systems are switched off, or confined to a region, under a policy with controls and named people behind it. Each habit left a record at Larkspur during the summer of 2026, and the fee-waiver incident was traced within days because almost every decision around Ask Larkspur had an owner and a written rationale. It happened because one did not.

That decision now has both. Owen owns the ingestion configuration, under change control, with his knowledge-management lead Responsible. Tom's register carries the new corpus risk, linked to the confabulation entry that failed. Marcus's memo holds the notification analysis and the reasoning behind the remediation. Dana owns Scorecard 7's retirement record, and Nadia owns the deactivation policy that governs every switch in the register. Chapter 3's line held. Norvane's model had done what such models do, and Larkspur answered for it to its customers, as it had always said it would.

In September Nadia began assembling the pack for the board risk committee, the same committee whose question had started the register a year earlier. For the first time the register could answer that question in full, system by system and owner by owner, including the part she least wanted to talk about.

### The Record

The summer of 2026 added these artifacts to Larkspur's record.

- **Fee-waiver incident record and after-action review.** Owner: Owen Park. Every incident field, the root cause and four contributing causes, the remediation and customer-remediation decisions, the approved customer letter, and Marcus's analysis that no regulator notification was triggered.
- **Risk register update.** Owner: Tom Ashby. The new "unapproved documents in the retrieval corpus" risk, linked to the confabulation entry whose mitigation failed.
- **Retention schedule by record type.** Owner: Marcus Hale. Periods for decision logs, transcripts, incident records and lifecycle artifacts, with Siobhan's advice on the Irish records.
- **Scorecard 7 retirement record and final audit snapshot.** Owner: Dana Whitfield. Dependency analysis, fallbacks, archive and destruction decisions, the certificate of destruction and the Article 111(2) position.
- **Deactivation and localization policy.** Owner: Nadia Brennan. Stop authority and safe state for Clearline, the one-instance-per-market rule and the records that prove which version ran where.
- **Hardship agent kill-switch runbook.** Owner: Owen Park. Who may trigger it, the tokens revoked, the manual fallback, evidence preservation and the drill schedule.

### Exam Focus

This chapter maps to competency IV.C, the largest in Domain IV and the largest single block of governance content, which treats deployment governance as repeated, documented practice from monitoring through deactivation and localization.

- AI risk adds four dimensions to conventional IT risk (probabilistic behaviour, evolving outputs, third-party model dependencies and societal-level impacts), and the idea that AI risks sit at or above OSI Layer 7 is an analogy for their socio-technical nature, not a rule to apply.
- ISO 31000 defines risk as the effect of uncertainty on objectives, ISO/IEC 23894 adds AI guidance to its eight principles with "dynamic" the most important for AI, and a probability-severity matrix (MANAGE 1.2 in NIST terms) ranks and prioritizes risks without measuring them.
- An AI risk register is dynamic and linked to incidents in both directions, and secondary use (outputs repurposed for a new purpose) is distinct from downstream harm (effects on people and systems nobody considered), with both calling for review of second- and third-order effects.
- Assurance is the overall program and an audit is one technique, audits are first party (internal), second party (a customer or partner auditing a supplier) or third party (independent), and threat modelling maps attack paths while threat hunting searches for indicators of compromise.
- The claim that internal sign-off is always wrong for a regulated system is a trap, because Annex III credit scoring uses conformity assessment based on internal control with no notified body.
- Incident versus issue turns on severity plus context, the four severity levels are critical, major, moderate and minor, and a misaligned objective can cause an incident without any bug, which makes it one of the eight standard root causes.
- Whatever lifecycle ordering a question uses (nine steps, or contain, assess, investigate, remediate, notify, learn), preserve evidence before retraining and never disable logging, and remember that internal communication starts at triage while external notification follows the legal clocks.
- Article 73 is a provider duty for high-risk systems (15 days generally, 10 for a death, sooner for widespread infringement or serious and irreversible disruption), unlike GDPR Article 33 (supervisory authority, 72 hours) and Article 34 (data subjects, without undue delay), so a limited-risk chatbot's false answer to US customers, like Larkspur's fee-waiver incident, is not an Article 73 case.
- The four record families are incidents and issues, risks, post-market monitoring plans and lifecycle artifacts, and Article 11 and Annex IV documentation is a provider duty while Article 26(6) six-month log retention is a deployer duty.
- Deletion is a trap in both directions (over-retention breaches minimisation, early deletion destroys evidence individuals and regulators may need), so the right answer is a documented retention decision per record type made with legal counsel.
- Article 50(1) chatbot disclosure and Article 50(2) machine-readable marking are provider duties while Article 50(4) deepfake disclosure is a deployer duty, and overclaiming is the recurring communications warning.
- The IV.C indicator asks for a policy and controls to deactivate or localize, anchored in Article 14(4)(e) (stop function to a safe state), Article 26(5) (suspend and inform) and MANAGE 2.4, and the controlled sequence captures a final audit snapshot before endpoints are disabled, archives what may be contested, destroys what is redundant, and guards against tradecraft loss in any manual fallback.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix D): MITRE ATLAS, Probability Severity Matrix, Risk, AI Assurance, Audit, Documentation and Reporting, Incident Management, Issue Management, Operation & Monitoring, Public Disclosure, Resilience, STRIDE, Localization Policy, Record Keeping, External Communication Plan, Deactivation Policy, Decommissioning.

### Further Reading

- [ISO/IEC 23894:2023 (AI risk management)](https://webstore.iec.ch/en/publication/82914): the AI extension of ISO 31000, including the dynamic principle and the risk process
- [NIST AI RMF (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): the MANAGE function: prioritization, benefit maximization, third-party risk and documentation
- [NIST AI RMF Playbook (MANAGE function)](https://airc.nist.gov/airmf-resources/playbook/): the subcategories, including MANAGE 1.2 on prioritizing treatment
- [MITRE ATLAS](https://atlas.mitre.org/): the adversary tactics and techniques knowledge base for AI systems
- [ISO/IEC 42005:2025 (AI system impact assessment)](https://webstore.iec.ch/en/publication/107659): Annex B, on feeding impact findings into the risk process
- [NIST AI 600-1, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): the generative-AI risk list to seed the register
- [OECD AI Incidents and Hazards Monitor](https://oecd.ai/en/incidents): real-world evidence for forecasting secondary and downstream harm
- [EU AI Act, Article 43 (conformity assessment)](https://artificialintelligenceact.eu/article/43/): when a notified body is required rather than internal assessment
- [EU AI Act, Article 17 (quality management system)](https://artificialintelligenceact.eu/article/17/): the documented system a provider must maintain and an auditor examines
- [ISO/IEC 42006:2025 (requirements for AIMS audit and certification bodies)](https://webstore.iec.ch/en/publication/108460): who may certify an ISO/IEC 42001 management system
- [NIST AI 100-2 (adversarial machine learning taxonomy)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2023.pdf): the attack taxonomy behind evasion, poisoning, privacy and abuse testing
- [EU AI Act, Article 73 (reporting of serious incidents)](https://artificialintelligenceact.eu/article/73/): who reports, what counts as serious, and the timelines
- [EU AI Act, Article 26 (obligations of deployers)](https://artificialintelligenceact.eu/article/26/): deployer duties to monitor, suspend use and inform the provider and authority
- [GDPR, Article 33 (notification of a personal data breach)](https://gdpr-info.eu/art-33-gdpr/): the 72-hour supervisory authority clock
- [GDPR, Article 34 (communication of a breach to the data subject)](https://gdpr-info.eu/art-34-gdpr/): when affected individuals must be told directly
- [EU AI Act, Article 72 (post-market monitoring)](https://artificialintelligenceact.eu/article/72/): the monitoring plan that supplies incident detection
- [EU AI Act, Article 11 (technical documentation)](https://artificialintelligenceact.eu/article/11/): the provider documentation duties and the Annex IV contents
- [EU AI Act, Article 19 (automatically generated logs)](https://artificialintelligenceact.eu/article/19/): the provider's log-keeping obligation that pairs with Article 26(6)
- [GDPR, Article 30 (records of processing activities)](https://gdpr-info.eu/art-30-gdpr/): the record-keeping duty for controllers and processors
- [ISO/IEC 42001:2023 (AI management system)](https://webstore.iec.ch/en/publication/90574): documented information requirements, logging and incident reporting
- [EU AI Act, Article 50 (transparency obligations)](https://artificialintelligenceact.eu/article/50/): AI interaction disclosure and the marking of synthetic content
- [EU AI Act, Article 14 (human oversight)](https://artificialintelligenceact.eu/article/14/): the stop function that halts a high-risk system in a safe state
- [EU AI Act, Article 20 (corrective actions and duty of information)](https://artificialintelligenceact.eu/article/20/): withdrawal, disabling and recall duties for non-conforming systems
- [GDPR, Article 17 (right to erasure)](https://gdpr-info.eu/art-17-gdpr/): the erasure duty that shapes what must be deleted versus retained

# Conclusion: The Same Question, a Year Later

*Charlotte, September 2026*

The board risk committee met in the same room, and this time it kept to schedule. The action minuted a year earlier, "Management to report on AI exposure and ownership," still sat on the log against Tom Ashby's name, and it was the item everyone had come for. Evelyn Marsh read it aloud and asked her question again.

"What is our AI exposure, and who owns it?"

A year earlier Tom had begun to say that Larkspur had one AI project, and then stopped. This time he turned to Nadia Brennan, who passed copies of the AI Register around the table. It held eleven systems, two of them on their way out: Scorecard 7, retired in the United States in August and being retired in Dublin, and the Norvane model version that Norvane had deprecated and Ask Larkspur was leaving. Each row carried a risk tier, Larkspur's role in each jurisdiction, links to the records behind it and a name in the owner column. The spreadsheet had started empty, and its first version that October had six rows and a blank wherever an owner belonged. The board had once wanted one name. Now every row had one, and none was Nadia's.

The directors turned pages until one of them looked up. "Tell us about the fee-waiver business."

Nadia answered in three minutes, from the record. In late June, Ask Larkspur had told 41 US customers that Larkspur "waives the first late fee for customers in documented hardship." Nine had skipped or deferred a payment relying on it, and there was no such policy. The retained staff had absorbed the load while fee questions went to people, Larkspur had honored the stated waiver and put the affected fees and credit files right, and Marcus Hale had recorded why no regulator had to be told: with Ask Larkspur not high-risk and the customers in the US, this was neither an Article 73 serious incident nor a GDPR personal data breach, and the exposure was US consumer protection law. Then she told them what had changed. The retrieval corpus was limited to the approved library, its ingestion configuration sat under change control with Owen Park accountable, fee answers had to cite an approved document ID or hand off to a person, and the containment rate was gone from the dashboards.

The root cause took one sentence. In March a platform engineer had pointed the ingestion job at a shared customer-operations folder that held a draft discussion paper, and nobody had owned or recorded that choice. Every other decision in the chain had a name and a reason attached, including some that proved wrong, such as Nadia's own acceptance of a prompt-layer control at launch. The decision that did the damage was the one nobody had written down.

Evelyn's question had taken a year to answer, and the answer was a document the committee could test. The year behind it is best read through three questions, and it left unfinished business, a new question from the chair and a lesson the exam repeats.

## Three Questions, One Year

Across thirteen chapters the same three questions kept coming back. Who owns this decision? What could go wrong, and for whom? Where is it written down?

The first was the hardest. When Tom announced that Nadia owned AI, she refused: "I will not own AI. I will make sure everything we run has an owner." The council, the RACI chart and the recorded risk appetite grew from that refusal. Dana answered for Clearline and Owen for Ask Larkspur and its knowledge library. Tom signed residual-risk acceptances above appetite, and Siobhan Kelly advised without ever owning a system she monitored. Norvane supplied the model behind Ask Larkspur, but the 41 customers heard Larkspur's name, and outsourcing the model had not outsourced the accountability.

The second question put people behind the numbers. Priya's "97% accurate" meant little once Nadia asked who the 3% were, and less once a default rate of about 5% showed that approving everyone would score about 95%. The impact assessments for Clearline and Ask Larkspur named harms and the people who would bear them, and the risk register gave each risk an owner: Dana for Clearline's disparate impact, Owen for Ask Larkspur's confabulation. The incident tested the second entry, whose mitigation (grounding plus a prompt instruction) failed. What the register provided was traceability: a named risk, a named owner and a mitigation that could be replaced.

The third question caught what the other two missed. At Clearline's release board a registry hash check showed that the staged artifact was an older build than the one validated, and the near miss ended as a line in the record instead of a flawed release. After the incident, append-only logs showed exactly what each of the 41 customers had been told. The record trail from those twelve months fills Appendix C.

## What Is Still Open

An honest report includes what is unfinished, and Nadia's pack gave the open items as much space as the closed ones. She did not call the work done.

Clearline had gone live in Dublin that month, built to the high-risk standard. Its conformity file, quality management system, fundamental rights impact assessment and post-market monitoring plan were prepared, and formal registration and CE marking were scheduled for when they apply. Under the EU AI Act as amended by the Digital Omnibus, Annex III obligations apply from 2 December 2027 (as enacted, 2 August 2026), so those formal steps fall due by that date. Colorado SB 26-189 would reach Clearline's Colorado decisions from 1 January 2027. Sooner still, two new Article 5 prohibitions apply from 2 December 2026, and the revised Product Liability Directive reaches products placed on the market after 9 December 2026. Marcus's memo on whether Article 50(2) machine-readable marking reaches Ask Larkspur's plain-text answers still recorded an open question.

The hardship-plan agent had opened its US pilot at the first autonomy level, with a human approving every plan. Nadia asked the committee to approve the criteria (error rates, complaint rates and audit results) that would have to be met before any move toward exception-based approval, and reminded it that the recorded classification is reassessed if the agent's scope ever drifts toward assessing ability to repay. Brightlist stayed US-only, with Dublin use deferred. Scorecard 7's Dublin retirement was under way, claiming no AI Act duties. Shadow AI, the thread that began with a pinned tip and fourteen thumbs-up, was declining but not gone. Use of the sanctioned assistant was up and DLP blocks were down, and the register line stayed open.

## The Next Question

Evelyn set the pack down and asked the question the committee had been saving. "Can we go to Korea?"

Nadia did not answer yes or no. She answered with the method, the same three questions applied to a market Larkspur had watched since 22 January, when South Korea's AI Basic Act entered into force and she and Marcus drew the legal grid. The owner of the proposal would be Dana, with Marcus, because a Korean launch of Clearline would be a lending decision with legal consequences. What could go wrong, and for whom, started with Korean applicants, whom Clearline had never seen, since its training data held no Korean records at all. Loan screening is a listed high-impact domain under the Act, so whether Clearline would be high-impact had to be assessed rather than assumed, and if it were, the six measures would follow. The Act asks only for best efforts on the impact assessment, but Larkspur would do one anyway, reusing the Dublin FRIA as Marcus's gap note proposed. Marcus would also need to confirm what Korean law says about moving applicant data across borders, test the domestic-representative thresholds against whatever structure the business chose, and weigh whether Korea needed a local instance of Clearline.

Where it would be written down was the easiest part. Clearline's design file already named a move into Korea as a reassessment trigger, a change in the legal environment, so the proposal would open new register entries and a reassessment of the impact assessment before anyone committed money. Evelyn asked whether that meant yes. Nadia said it meant the committee would get an answer it could check. Before the meeting ended she added a row to the register, "Korea: Clearline (proposed)," and typed Dana's name in the owner column rather than leaving it blank.

## What the Record Is For

That filled cell is the book's argument in miniature. AI governance is the discipline of making sure every consequential decision about an AI system has a named owner, a stated rationale and a written record, and that the record is revisited when the system, the law or the context changes. Larkspur's year tested every clause. The law moved twice in July, when the CFPB's Regulation B rule took effect on 21 July and the Digital Omnibus entered into force on 27 July, and Nadia's memos moved with it. Norvane changed its model once without telling anyone, and in August it sent a deprecation notice that Larkspur handled as a significant change. Each change made an old record wrong until someone went back to it.

The incident taught the sharpest lesson. Larkspur had assessed Ask Larkspur, negotiated its contract, red-teamed it and monitored it, and it still failed at the one decision nobody had been asked to own. Governance turned out to be less a department than a habit: naming, reasoning, recording, and going back when the ground moves. Nadia's sticky note from her first week, know, name, write, was still pressed to the edge of her monitor.

## The Exam as One Argument

The four domains of the AIGP exam form one argument, the same one Larkspur's year made. Domain I supplies the vocabulary and two moves: a descriptive move that classifies a system, names the harm and names the characteristic of AI that makes it possible, and an organizational move that names the owner, the record and the legacy policy a new use case has broken. Domain II asks what the law requires and how you prove it: reason from instrument to role to duty, and read every EU AI Act date as enacted or as amended. Domain III follows a system you build through a chain of documented decisions to release. Domain IV follows one you choose, adopt, operate and eventually retire. Built or chosen, the accountability stays with you.

Two habits from the case carry into the exam room. When a question describes a failure, find the link in the chain where it happened, because many distractors are correct answers about a different link. And keep the case in its place. Larkspur is a lender, but Domain I is sector-agnostic, so an answer that assumes a bank is usually wrong, and a legal conclusion that fits Larkspur's facts does not transfer to a question built on different ones.

The back matter is arranged for the final weeks of study. Appendix A sets Larkspur's chronology beside the legal calendar, Appendix B gathers the standards and frameworks in one place, Appendix C compiles the Record from every chapter, and Appendix D is the glossary. Use them the way Nadia used the register, to check what you believe against where it was written down.

# Appendix A: Larkspur Chronology and Legal Calendar

This appendix sets the Larkspur story beside the legal calendar it ran against, month by month from Scorecard 7's build in 2016 to the board meeting of September 2026, with the chapters where each event is told or taught. Law is stated as of September 2026, EU AI Act dates carry the book's "as enacted" and "as amended by the Digital Omnibus on AI" labels, and the calendar items still to come are listed under Ahead.

| Date | At Larkspur | In law and standards | Chapter |
|---|---|---|---|
| 2016 | Scorecard 7 was built by a consultancy. | | 1, 7 |
| July 2024 | | 12 July: the EU AI Act (Regulation (EU) 2024/1689) was published in the Official Journal. | 6 |
| August 2024 | | 1 August: the EU AI Act entered into force, with no obligations yet applying. | 6 |
| October 2024 | | 23 October: the revised Product Liability Directive (EU) 2024/2853 was adopted. | 5 |
| December 2024 | | 8 December: the revised Product Liability Directive entered into force. | 5 |
| January 2025 | | 21 January: South Korea's AI Basic Act was promulgated as Act No. 20676. 27 January: the EEOC removed its AI technical assistance. | 5, 6 |
| February 2025 | | 2 February: the EU AI Act's prohibitions (eight practices) and the Article 4 AI literacy duty began to apply, a date the Omnibus left unchanged. | 2, 6 |
| April 2025 | | 23 April: Executive Order 14281 directed agencies to minimize disparate-impact liability. | 5 |
| May 2025 | | 12 May: the CFPB withdrew its AI circulars. 19 May: the TAKE IT DOWN Act (Pub. L. 119-12) was enacted, criminalizing the publication of non-consensual intimate images, including AI "digital forgeries". | 5, 6 |
| July 2025 | | 1 July: the US Senate voted 99-1 to strip a proposed moratorium on state AI laws from the budget bill. 10 July: the GPAI Code of Practice was published. | 6 |
| August 2025 | Owen's team switched on Norvane's AI reply assistant toggle for internal agent-assist, with no AI review. | 1 August: the GPAI Code of Practice's adequacy was confirmed. 2 August: the EU AI Act's GPAI obligations, governance bodies, penalty regime (except Article 101) and notified-body provisions began to apply, unchanged by the Omnibus. | 3, 6 |
| Autumn 2025 | Priya's team copied five years of Dublin loan files into a US analytics environment to prototype Clearline. | | 4 |
| September 2025 | At the board risk committee Evelyn Marsh asked, "What is our AI exposure, and who owns it?" Tom could not answer, and the minutes recorded an action. Two weeks later Nadia was appointed and opened an empty spreadsheet named "AI Register". | 9 September: AIGP Body of Knowledge v2.1 was approved. | Introduction, Part II opener |
| October 2025 | Nadia found a pinned tip in a collections Slack channel to paste customers' letters into a public chatbot, with fourteen thumbs-up. Her inventory email drew the replies that became AI Register v0.1. | 6 October: the withdrawal of the proposed AI Liability Directive was published in the Official Journal (OJ C/2025/5423). | Part I opener, 1, 5 |
| November 2025 | The board risk committee adopted the principles statement. The AI governance council was chartered, and the board risk committee recorded the risk appetite (no automated declines, human review of every non-approval). RACI v1 (with the knowledge-library line), a stakeholder map and ERM fields followed. The first literacy deck failed and was redesigned by role. Late in the month a contact-centre agent escalated that the assistant's draft answers had changed overnight. | | 1, 2 |
| December 2025 | Dana asked that Clearline, once live, auto-decline the bottom score band to clear a backlog. The request was refused against the risk appetite and recorded, and she got queue caps and two more underwriters. A Dublin collections agent pasted an Irish hardship applicant's medical letter into a public chatbot, and Siobhan's 72-hour assessment started. A routine Norvane renewal was put on hold for AI diligence, which found that Norvane had swapped model versions without notice. The oversight standard, policy retrofit memo, acceptable use policy v1, sanctioned enterprise assistant, vendor AI intake questionnaire and Ask Larkspur AI bill of materials were produced. | 11 December: Executive Order 14365 set a policy of a minimally burdensome national framework and created a DOJ AI Litigation Task Force to challenge state AI laws. | 3, 4, 6 |
| January 2026 | The council approved the retrofitted policies. On 22 January Nadia and Marcus drew the legal grid. At the Clearline design review Nadia asked the council to pause compute spend until the design file existed. Owen proposed putting Ask Larkspur in front of customers by April. | 1 January: California's CPPA ADMT regulations and Texas TRAIGA took effect. 14 January: HUD proposed removing its discriminatory-effects regulations. 22 January: South Korea's AI Basic Act entered into force. | Part II to IV openers, 3, 5, 6, 8, 11 |
| February 2026 | Siobhan found the Dublin loan files in the US environment. The Clearline use-case charter and design-stage impact assessment were signed, and Tom signed the residual-risk acceptance. The Ask Larkspur deployment decision record was written. The Norvane API agreement arrived on Marcus's desk. | | 4, 8, 11, 12 |
| March 2026 | Priya presented Clearline candidate v0.9, "97% accurate on the holdout". Ask Larkspur passed its gate with an approved impact assessment and signed terms, and the Norvane API agreement was signed. A platform engineer built the production retrieval ingestion job and pointed it at a shared customer-operations folder, with no owner and no record. | | 9, 12, 13 |
| April 2026 | A pre-launch consumer-protection review covered marketing copy, the decline letter and Norvane's IP indemnity. Ask Larkspur launched to US customers. Clearline was in testing. | | 5, 9, 12 |
| May 2026 | Clearline's fairness-metric decision was made. Dublin go-live planning included Article 5 screening, and a vendor pitch for voice emotion analytics on call-centre agents was rejected. A night-shift agent noticed two odd transcripts about fees and did not report them. | 14 May: Colorado SB 26-189 was signed, replacing the never-effective SB 24-205 and operative for decisions from 1 January 2027. | 6, 9, 13 |
| Late May 2026 | A bank funding partner that buys Larkspur loans sent a diligence questionnaire on the NIST AI RMF and ISO/IEC 42001. | | 7 |
| Early June 2026 | At the Clearline release board a registry hash check showed that the staged artifact was an older build than the one validated. It was caught and recorded. In mid-June the 5% US canary began. | 10 June: the Code of Practice on Marking and Labelling was final and assessed adequate. | 6, 10 |
| Late June 2026 | Ask Larkspur told 41 US customers that Larkspur "waives the first late fee for customers in documented hardship". Nine skipped or deferred a payment relying on it. There was no such policy. | | 13 |
| July 2026 | Nadia's memo on the CFPB rule kept fairness testing. After the Omnibus took effect, Nadia re-baselined the calendar, refused to slow the Clearline EU work and recorded why, and the same memo recorded retiring Scorecard 7 rather than retrofitting it. Clearline rolled out fully in the US, and monitoring caught an override spike. The incident after-action review was held. | 20 July: the Commission published Article 50 transparency guidelines. 21 July: the CFPB's Regulation B final rule took effect, stating that ECOA does not provide for the effects test (intentional discrimination and deliberate proxy use remain unlawful). From the same date Korea's best-efforts impact assessment must reflect the characteristics of AI-vulnerable groups. 27 July: the Digital Omnibus on AI (Regulation (EU) 2026/1744) entered into force, and the softened Article 4 literacy wording applies from this date. | 5, 6, 10, 13 |
| August 2026 | Ask Larkspur launched in Ireland in mid-August with the Article 50(1) disclosure and the new system-layer fee control. Scorecard 7 was retired in the US. Norvane issued a deprecation notice for its model version. | 2 August: Article 50 transparency duties and the Commission's GPAI enforcement powers, including Article 101 fines, began to apply, dates the Omnibus left in place. As enacted, this was also the Annex III high-risk date. As amended, those rules apply from 2 December 2027. California SB 942 became operative. 10 August: HUD supplemented its January proposal, and neither is final. | 5, 6, 13 |
| September 2026 | Clearline went live in Dublin, built to the high-risk standard, with its conformity file, QMS, FRIA and post-market monitoring plan prepared and formal registration and CE marking scheduled for when they apply. Scorecard 7's Dublin retirement was under way. The hardship agent's US pilot opened at the first autonomy level. The board risk committee met. | As of September 2026, no EU AI Act fine had been publicly announced, no US appellate court had ruled on fair use in AI training, and state AI laws remained enforceable. | 5, 6, 10, 13, Conclusion |

### Ahead

The table stops at the September 2026 board meeting, but the calendar keeps running. Every date below is still ahead as of September 2026, and the list ends with the question the Conclusion leaves open.

- 2 December 2026. As amended, two new Article 5 prohibitions apply, on AI that generates or manipulates realistic intimate or sexual imagery of an identifiable person without explicit consent and on AI that generates child sexual abuse material. Generative systems on the market before 2 August 2026 must meet Article 50(2) marking by this date (Article 111(4), added by the Omnibus). (Chapter 6)
- 9 December 2026. Member States must transpose the revised Product Liability Directive, which applies to products placed on the market or put into service after this date. (Chapter 5)
- 1 January 2027. Colorado SB 26-189 applies to decisions from this date, including Clearline's Colorado decisions. (Chapter 6)
- 2 August 2027. GPAI models placed on the market before 2 August 2025 must comply (Article 111(3)), in both versions of the Act. As enacted, this is also the Annex I high-risk date. As amended, national sandboxes must be operational by then, and the Annex I rules move to 2 August 2028. (Chapter 6)
- 2 December 2027. As amended, the Annex III high-risk rules apply, including deployer duties and FRIAs (2 August 2026 as enacted). (Chapter 6)
- 2 August 2028. As amended, the Annex I rules for high-risk AI embedded in regulated products apply. (Chapter 6)
- 2 August 2030. Legacy high-risk systems intended for public authorities must comply, in both versions of the Act. (Chapter 6)
- Undated. The Korea decision, the next question the Conclusion takes up: "Can we go to Korea?" (Conclusion)

# Appendix B: Standards and Frameworks at a Glance

The chapters teach each of the instruments below in context, with Larkspur's program showing how they fit together. This appendix does a narrower job. It sets them side by side so that you can check quickly who issued each one, whether it binds anyone, whether an organization can be certified against it, and which question it exists to answer. The last column sends you to the section that holds the detail, and the detail is what settles a hard question.

The rows follow the order in which the book teaches the instruments.

| Instrument | Issuer and date | Binding or voluntary | Certifiable | The question it answers | Where taught |
|---|---|---|---|---|---|
| GDPR | European Union, Regulation (EU) 2016/679 | Binding EU law | Not applicable (law) | When is processing personal data lawful, including for training AI and for automated decisions? | Chapter 4 |
| GPAI Code of Practice | Facilitated by the European Commission under EU AI Act Article 56. Published 10 July 2025, adequacy confirmed 1 August 2025 | Voluntary (adherence is evidence of compliance, with no presumption of conformity) | No (providers sign it, in full or by chapter) | How can a general-purpose AI model provider demonstrate compliance with Articles 53 and 55? | Chapter 6 (6.3) |
| OECD AI Principles | OECD Recommendation on AI (OECD/LEGAL/0449). Adopted 22 May 2019, definition revised 8 November 2023, Recommendation revised 3 May 2024 | Voluntary (a political commitment by 47 adherents as of September 2026) | No | What does trustworthy AI look like, and what counts as an AI system? | Chapter 7 (7.1) |
| NIST AI RMF | NIST, AI RMF 1.0 (NIST AI 100-1), January 2023 | Voluntary | No (a framework, with no certification) | What must an AI risk management process contain? | Chapter 7 (7.2) |
| NIST AI RMF Playbook | NIST, issued with AI RMF 1.0, with a revision to follow the 1.0 update | Voluntary (suggested actions) | No | What should an organization do about each of the RMF's 72 subcategories? | Chapter 7 (7.3) |
| NIST AI 600-1 | NIST, Generative AI Profile, July 2024, under Executive Order 14110 | Voluntary (recognized in the defences of Texas's TRAIGA) | No | Which risks does generative AI create or worsen, and how does the RMF apply to them? | Chapter 7 (7.4) |
| ISO/IEC 22989 | ISO and IEC, 2022 | Voluntary | No | What do the core AI terms mean, from AI system and trustworthiness to the five roles (provider, manufacturer, customer, partner, subject)? | Chapter 7 (7.5) |
| ISO/IEC 42001 | ISO and IEC, December 2023 (first edition, current as of September 2026) | Voluntary | Yes | How does an organization run an AI management system that an auditor can certify? | Chapter 7 (7.6) |
| ISO/IEC 42006 | ISO and IEC, 2025 | Voluntary | No (it governs the bodies that certify to 42001) | What must a body meet, beyond ISO/IEC 17021-1, to audit and certify against 42001? | Chapter 7 (7.6) |
| ISO/IEC 42005 | ISO and IEC, 28 May 2025 (first edition) | Voluntary guidance | No | How and when should an AI system's impacts on individuals, groups and societies be assessed and recorded? | Chapter 7 (7.7), applied in 8.4 and 12.1 |
| ISO/IEC 23894 | ISO and IEC, 2023 | Voluntary guidance | No | How should AI risk to the organization be managed, building on ISO 31000? | Chapter 7 (7.8) |

Read down the third and fourth columns and a pattern appears. The GDPR is the only law in the table. The GPAI Code of Practice sits beside a binding law, the EU AI Act that Chapter 6 teaches in full, and adhering to it gives a provider evidence of compliance but no presumption of conformity, which Articles 53(4) and 55(2) reserve for harmonised standards. Everything else is voluntary, though a voluntary instrument can still carry legal weight, as the TRAIGA defences show for NIST AI 600-1. Only ISO/IEC 42001 can be certified against. Several entries also carry a status that can move. The EDPB's 2026 guidelines on anonymization and web scraping are drafts, open for consultation to 30 October 2026, and the Commission's Digital Omnibus amendments to the GDPR are proposals, so apply the GDPR as it stands.

Four distinctions cause most of the confusion. ISO/IEC 42001 requires an AI system impact assessment (clause 6.1.4 defines the process, clause 8.4 has it performed, and Annex A objective A.5 adds controls), while ISO/IEC 42005 explains how to carry one out. 42005 asks about impacts on people, and ISO/IEC 23894 asks about risk to the organization, with 42005's Annex B showing how impact findings feed a 23894-style risk process. ISO/IEC 42006 regulates the certifiers and never the certified organization. Within the NIST family, a question about practical, per-subcategory guidance belongs to the Playbook, a question about the risk process itself belongs to the AI RMF, and a question about generative AI specifically belongs to AI 600-1. Keep one list apart from all of these: BOK v2.1 names exactly three core ISO standards (22989, 42001 and 42005), and 23894 is useful background outside that closed set.

## Sources

The official texts and pages behind each row are listed below, grouped by instrument.

**GDPR**

- [GDPR, Regulation (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj)
- [EDPB Opinion 28/2024 on AI models and personal data](https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en)
- [EDPB press release on draft Guidelines 02/2026 (anonymization) and 03/2026 (web scraping)](https://www.edpb.europa.eu/news/edpb-sheds-light-on-anonymisation-and-web-scraping-for-generative-ai-and-adopts-final-version_en): both guidelines remain drafts, open for consultation to 30 October 2026
- [CJEU SCHUFA, C-634/21](https://eur-lex.europa.eu/eli/C/2024/913/oj/eng)
- [CJEU Dun & Bradstreet Austria, C-203/22](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:62022CJ0203)

**GPAI Code of Practice and the EU AI Act**

- [GPAI Code of Practice (European Commission)](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai)
- [Code of Practice on Marking and Labelling (transparency of AI-generated content)](https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content)
- [Regulation (EU) 2024/1689 (EU AI Act), Article 56](https://eur-lex.europa.eu/eli/reg/2024/1689/oj)

**OECD AI Principles**

- [OECD Recommendation on AI (OECD/LEGAL/0449)](https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449)
- [OECD.AI: AI principles](https://oecd.ai/en/ai-principles)
- [OECD.AI: classification framework](https://oecd.ai/en/classification)
- [OECD.AI: incidents and hazards](https://oecd.ai/en/incidents)

**NIST AI RMF**

- [NIST AI Risk Management Framework (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf)
- [NIST AI RMF landing page](https://www.nist.gov/itl/ai-risk-management-framework)

**NIST AI RMF Playbook**

- [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/)
- [NIST AI RMF Playbook (JSON, public domain)](https://airc.nist.gov/docs/playbook.json)

**NIST AI 600-1**

- [NIST AI 600-1, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf)

**ISO/IEC 22989**

- [ISO/IEC 22989 (IEC webstore, free)](https://webstore.iec.ch/en/publication/77839)
- [ISO/IEC 22989 full text (ISO OBP)](https://www.iso.org/obp/ui/en/#!iso:std:74296:en)

**ISO/IEC 42001**

- [ISO/IEC 42001 (IEC webstore)](https://webstore.iec.ch/en/publication/90574)

**ISO/IEC 42006**

- [ISO/IEC 42006 (IEC webstore)](https://webstore.iec.ch/en/publication/108460)

**ISO/IEC 42005**

- [ISO/IEC 42005 (IEC webstore)](https://webstore.iec.ch/en/publication/107659)
- [BSI press release on ISO/IEC 42005](https://www.bsigroup.com/en-GB/insights-and-media/media-centre/press-releases/2025/june/framework-published-to-assess-real-world-ethical-and-operational-impact-of-ai/)

**ISO/IEC 23894**

- [ISO/IEC 23894 (IEC webstore)](https://webstore.iec.ch/en/publication/82914)

# Appendix C: The Larkspur Record

Every chapter ends by listing what Larkspur wrote down and who owns it. Collected here, those lists form the record trail Nadia Brennan brings to the board in the Conclusion.

### Chapter 1: AI and the Case for Governance

- **AI Register v0.1.** Owner: Nadia Brennan. Six entries (Clearline, the Ask Larkspur pilot, Scorecard 7, the fraud rules engine, the marketing segmentation model and unsanctioned public chatbot use), each classified, with the owner field blank.
- **Draft harm register.** Owner: Nadia Brennan. Harms sorted by who suffers them and routed to Owen Park, Priya Raman and Tom Ashby.
- **AI principles statement.** Owner: Nadia Brennan. The six BOK principles, each tied to a planned control, adopted by the board risk committee in November 2025.

### Chapter 2: Who Owns AI

- **AI Governance Council Charter.** Owner: Nadia Brennan. Members, Siobhan's advisory seat, and no Chief AI Ethics Officer yet.
- **AI Risk Appetite Statement.** Owner: Tom Ashby, for the board risk committee. No automated declines, and human review of every non-approval.
- **RACI v1.** Owner: Nadia Brennan. One Accountable name per task, including the knowledge-library line (Accountable: Owen Park, Responsible: his knowledge-management lead).
- **Clearline Stakeholder Map.** Owner: Dana Whitfield. Internal and external parties, consumer advocates included.
- **ERM AI Fields.** Owner: Tom Ashby. System, model version, affected population and fairness exposure in the existing risk register.
- **Role-Based Literacy Plan and Metrics.** Owner: Nadia Brennan. Seven audiences and four effectiveness measures.

### Chapter 3: Rewriting the Rules: Policies Across the Lifecycle

- **Oversight standard v1.** Owner: Nadia Brennan. An oversight level for every registered system.
- **Underwriting override log.** Owner: Dana Whitfield. Every override of a model referral, reviewed monthly by the council.
- **Policy retrofit memo.** Owner: Nadia Brennan. Seven policy areas rewritten for AI, with the updated data classification.
- **Acceptable Use Policy v1.** Owner: Nadia Brennan. Data allowed in prompts, the approved assistant, and an exception route owned by the CISO.
- **Vendor AI intake questionnaire.** Owner: Marcus Hale. Intake flags, tiered diligence and the six-clause contract standard.
- **Ask Larkspur AI-BOM v1.** Owner: Owen Park. Norvane's model and version, with rows reserved for later components.

### Chapter 4: Privacy Law Meets AI

- **Compatibility assessment and lawful-basis record.** Owner: Dana Whitfield, with Siobhan Kelly's written advice. Training Clearline on Dublin files as a separate purpose, on legitimate interest.
- **Layered privacy notice (Dublin).** Owner: Marcus Hale. Discloses the model and human review of every non-approval.
- **Clearline DPIA and Article 22 design memo.** Owner: Dana Whitfield. Reviewed at every retrain.
- **Role and transfer memo.** Owner: Marcus Hale. US parent as processor, SCCs with a transfer impact assessment, and the open Article 28 finding on Norvane.
- **December breach record.** Owner: Siobhan Kelly. The Article 33 notification and Article 34 judgment, with reasons.
- **Article 30 entries.** Owners: Dana Whitfield (Clearline) and Owen Park (Ask Larkspur). Linked to the AI Register.

### Chapter 5: The Law That Was Already There

- **Proxy-review question list.** Owner: Priya Raman. A written question for each remaining candidate proxy feature, with the answers recorded in Clearline's design baseline (Chapter 8).
- **Corrected adverse-action template.** Owner: Dana Whitfield. Principal reasons that describe the factors actually considered, plus the FCRA content.
- **Claims substantiation log.** Owner: Marcus Hale. Each AI performance claim, its evidence, and whether it was approved or cut.
- **July disparate-impact testing memo.** Owner: Nadia Brennan. Why testing continues after the CFPB rule, with the board's pullback timeline.
- **Ask Larkspur US launch checklist.** Owner: Owen Park. The four habits, plus the hardship-flow review gate.
- **Updated EU liability memo.** Owner: Marcus Hale. The revised PLD and national tort law in place of the withdrawn AILD.

### Chapter 6: The Law Written for AI

- **EU classification register.** Owner: Nadia Brennan. Every register entry by EU AI Act tier, with the Article 5 screening record, including the rejected voice analytics pitch.
- **AI role assessments.** Owner: Marcus Hale. Clearline (Option A, with Option B's rejection reasoned), Ask Larkspur (downstream provider and deployer, Article 50(2) left open) and Brightlist.
- **Norvane GPAI diligence file.** Owner: Owen Park. Annex XII information, training summary, copyright policy and Code signatory status.
- **Re-baselined compliance calendar and build-to-standard memo.** Owner: Nadia Brennan. Both calendars, the decision to keep Clearline's EU work at the high-risk standard, and the decision to retire Scorecard 7.
- **Korea gap note.** Owner: Marcus Hale. Categories, the six measures, notice and representative checks.
- **US state-law matrix.** Owner: Nadia Brennan. Each state duty by system, with intent or effect, cure period and enforcer.

### Chapter 7: Industry Standards and Tools

- **Standards program map.** Owner: Nadia Brennan. Each instrument, the question it answers and who owns its use.
- **House glossary and trustworthiness crosswalk.** Owner: Nadia Brennan. ISO/IEC 22989 terms, with verification and validation recorded separately at the Clearline gate.
- **Scorecard 7 classification decision.** Owner: the AI governance council. Borderline under the OECD definition and Article 3(1), governed as in scope either way.
- **Ask Larkspur generative AI risk profile.** Owner: Owen Park. The twelve NIST AI 600-1 risks, each assessed or marked "not applicable because".
- **ISO/IEC 42001 gap assessment.** Owner: Nadia Brennan. Readiness from the AI Register, built on the ISO 27001 system.
- **Reply to the funding partner.** Owner: Nadia Brennan, reviewed by Marcus Hale.

### Chapter 8: The Design File

- **Council minute on Clearline compute and intake tiers.** Owner: Nadia Brennan. The January pause with its review date, and the gate tiers for Clearline, Ask Larkspur, the enterprise assistant and the mortgage reuse.
- **Clearline use-case charter.** Owner: Dana Whitfield. Objective, the personal-loans-only boundary, decision authority, metrics and data sources.
- **Clearline impact assessment and register linkage.** Owner: Nadia Brennan. The 42005 record for applicants, linked to 23894 entries and the design-risk matrix in Tom's register.
- **Clearline residual-risk acceptance.** Owner: Tom Ashby. Signed by name and endorsed by the board risk committee.
- **Clearline requirements register and design baseline.** Owner: Priya Raman. Requirements with their sources, the proxy-feature decision, the manual-queue fallback and a retirement plan naming Scorecard 7.
- **Larkspur AI Development Standard.** Owner: Nadia Brennan. The design and build process, documented once and revised periodically.

### Chapter 9: Training and Testing Data

- **Training-data legal assertion.** Owner: Marcus Hale. Written authority for the US loan files and bureau attributes, filed beside the Dublin compatibility assessment.
- **Clearline datasheet, with provenance and lineage records.** Owner: Priya Raman. Composition, collection, limitations including selective labels, and feature-level lineage.
- **Label-definition decision.** Owner: Dana Whitfield. "Defaulted within 24 months," and how hardship restructurings count.
- **Test plan and results.** Owner: Priya Raman. Seven test types, criteria set in advance, dataset and code versions, and regression testing on every retrain.
- **Threshold decision.** Owner: Dana Whitfield, accepted by Tom Ashby. Where the cut-off sits and which errors it trades.
- **Fairness-metric memo.** Owner: Dana Whitfield, on the council's decision. Equalized odds as the primary measure, with the disparate impact ratio monitored.

### Chapter 10: Release and Monitoring

- **Clearline model card and system card v1.0.** Owner: Priya Raman. Intended and out-of-scope uses, performance by segment, limitations and about 46 features, plus the pipeline from bureau feed to underwriter queue.
- **Release gate record.** Owner: Nadia Brennan. Seven sign-offs, Dana Whitfield's release signature and Tom Ashby's signed thin-file deferral with its rationale.
- **Near-miss record and registry entry.** Owner: Priya Raman. The hash mismatch, the rebuild and the rule that no release proceeds until hashes match.
- **Canary and fail-safe plan.** Owner: Dana Whitfield. The 5% US canary, rollback to the prior process, and the manual underwriting queue as the safe state.
- **Dublin post-market monitoring plan.** Owner: Dana Whitfield. Data, reviewers and action thresholds under Article 72, prepared ahead of the date it applies.
- **Override-spike incident record.** Owner: Dana Whitfield. The July tripwire, the zeroed income field and the new input check.

### Chapter 11: Deciding to Deploy

- **Ask Larkspur deployment decision record.** Owner: Owen Park. Objective, performance thresholds, data and lawful basis, benefits and harms, retained staffing, and why containment rate is not a success metric.
- **DPIA screening advice.** Owner: Siobhan Kelly. Her documented advice on whether Article 35 requires a DPIA for the Irish rollout.
- **Article 50 role memo.** Owner: Marcus Hale. Larkspur as downstream provider owes the Article 50(1) disclosure, with Article 50(2) marking left open.
- **Architecture decision record.** Owner: Priya Raman. Cloud API with an EU-region endpoint, a routing model, RAG with citations, text only, and the prompt-layer fee-waiver rule accepted with its risk.
- **Hardship-agent conditions memo.** Owner: Owen Park. Level-one approval, capped permissions, limits in code, a unique identity, a kill switch, fail-safe denial, US-only, and thresholds met first.
- **Hardship-agent classification entry.** Owner: Marcus Hale. Not Annex III 5(b) on its recorded scope, with a reassessment trigger.

### Chapter 12: Assessing What You Adopt

- **Ask Larkspur impact assessment record (ISO/IEC 42005).** Owner: Owen Park. The clause 6 fields, the sensitive-use approval, four reassessment triggers and an open item on the production ingestion job.
- **Clearline Dublin FRIA.** Owner: Dana Whitfield. Built on the DPIA under Article 27(4), with Siobhan Kelly advising, ahead of the legal date.
- **Norvane contract review memo and signed API agreement.** Owner: Marcus Hale. Zero retention, Article 28 terms, model-change and 24-hour incident notice, audit rights, certification evidence, insurance and agent controls, with the refused accuracy warranty logged as a residual risk owned by Owen Park.
- **Licence review.** Owner: Marcus Hale. The non-commercial model ruled out, the AGPL component, fine-tuned derivatives and the agent's future tools.
- **Repurposing escalation record.** Owner: Nadia Brennan. The blocked loan-application proposal and the council's Article 25(1)(c) reasoning.

### Chapter 13: Operating, Monitoring and Retiring

- **Fee-waiver incident record and after-action review.** Owner: Owen Park. Every incident field, the root cause and four contributing causes, the remediation and customer-remediation decisions, the approved customer letter, and Marcus's analysis that no regulator notification was triggered.
- **Risk register update.** Owner: Tom Ashby. The new "unapproved documents in the retrieval corpus" risk, linked to the confabulation entry whose mitigation failed.
- **Retention schedule by record type.** Owner: Marcus Hale. Periods for decision logs, transcripts, incident records and lifecycle artifacts, with Siobhan's advice on the Irish records.
- **Scorecard 7 retirement record and final audit snapshot.** Owner: Dana Whitfield. Dependency analysis, fallbacks, archive and destruction decisions, the certificate of destruction and the Article 111(2) position.
- **Deactivation and localization policy.** Owner: Nadia Brennan. Stop authority and safe state for Clearline, the one-instance-per-market rule and the records that prove which version ran where.
- **Hardship agent kill-switch runbook.** Owner: Owen Park. Who may trigger it, the tokens revoked, the manual fallback, evidence preservation and the drill schedule.

# Appendix D: Glossary

Every key term that appears in the chapters is defined here, in alphabetical order. Where a definition follows a particular source, such as ISO/IEC 22989, the EU AI Act or IAPP's key terms list, the entry says so.

### A

**A/B Testing.** A comparative testing method where two versions of an AI model run simultaneously to evaluate which performs better. Commonly used for deployment validation. *(Chapter 10)*

**Accountability.** The state of being accountable (responsible for actions, decisions, and performance). Refers to an assigned responsibility based on regulations, agreements, or delegation. A person or entity is accountable to another using specific means and criteria. *(Chapter 7)*

**Accountable and Transparent.** NIST trustworthiness characteristic: information about AI system design decisions and outputs is available to stakeholders, with clear ownership of responsibility. *(Chapter 7)*

**Action Space (Agentic AI).** The range of actions an agent can actually take, fixed by the tools it can call and the permissions on those tools (sandbox-only, internal or external systems; read or write). The IMDA framework contrasts it with autonomy, which is how freely the agent decides what to do. A wider action space raises potential impact. *(Chapter 11)*

**Activation Function.** A function applied to the weighted combination of all inputs to a neuron. Typically nonlinear. *(Chapter 7)*

**Adoption.** Needs analysis, feasibility study, stakeholder engagement, requirements definition *(Chapter 2)*

**Adversarial Example.** An intentionally crafted input designed to cause an AI model to make incorrect predictions. Often imperceptible to humans but catastrophic for model behavior. *(Chapter 9)*

**Adverse Action Notice (ECOA/Reg B).** The notice a creditor must give after taking adverse action on an application, generally within 30 days of a completed application, including a statement of the specific principal reasons (12 CFR 1002.9). Saying the applicant failed to achieve a qualifying score is insufficient, so AI credit models must support accurate reasons. The rule still applies after the CFPB withdrew its AI adverse action circulars on 12 May 2025. *(Chapter 5)*

**Agent Goal Hijack.** Manipulation that redirects an agent's objectives, task choices or plan, typically through indirect prompt injection hidden in content it reads (web pages, emails, documents, tool outputs, other agents' messages). OWASP ASI01. Distinct from memory poisoning (persistent corruption of stored context) and rogue agents (drift without an active attacker). *(Chapter 11)*

**Agentic AI.** AI systems made up of one or more agents that pursue a goal over several steps by planning, deciding and acting through tools, with some independence from human direction. Today's agents usually pair a language model with instructions, memory, tools and controls; governance shifts from managing outputs to managing actions. *(Chapter 11)*

**Agent Kill Switch.** An emergency control that immediately stops an agent, or disables a specific tool, prompt or connection, and revokes its credentials when it malfunctions or is compromised. The operational core of a deactivation policy (BOK IV.C); pair it with a fallback process and preserved, tamper-proof logs. *(Chapter 11)*

**AI Act Milestone: August 2, 2026.** The date Article 50 transparency duties and the Commission's enforcement of general-purpose AI obligations begin. As originally enacted, it was also the date Annex III high-risk requirements took effect; as amended by the 2026 Digital Omnibus, those moved to 2 December 2027 (Annex III) and 2 August 2028 (Annex I). *(Chapter 6)*

**AI Act Milestone: August 2, 2028.** As amended by the 2026 Digital Omnibus, the date high-risk requirements start for AI that is a safety component of, or itself, a product under Annex I harmonisation law (Article 6(1)), such as medical devices. As originally enacted, this was 2 August 2027. *(Chapter 6)*

**AI Act Milestone: December 2, 2027.** As amended by the 2026 Digital Omnibus, the date the AI Act's high-risk requirements (Chapter III, Sections 1 to 3) start for Annex III systems such as recruitment, credit-scoring and education tools, including deployer duties and FRIAs. As originally enacted, this was 2 August 2026. *(Chapter 6)*

**AI Act Milestone: February 2, 2025.** The date prohibited AI practices and AI literacy requirements began to apply. The first substantive obligations under the EU AI Act. *(Chapter 6)*

**AI Actors (NIST AI RMF).** The OECD definition adopted by AI RMF 1.0: 'those who play an active role in the AI system lifecycle, including organizations and individuals that deploy or operate AI'. Appendix A groups their tasks (design, development, deployment, operation and monitoring, TEVV, human factors, domain experts, impact assessment, procurement, governance and oversight) and adds third parties, end users, affected communities, other AI actors and the general public. *(Chapter 7)*

**AI Agent.** Automated entity that perceives and reacts to its environment and takes actions to achieve its goals. *(Chapter 1)*

**AI Assurance.** The combined work of checking, and showing to others, whether an AI system deserves trust, using techniques such as impact assessments, bias and compliance audits, conformity assessment, performance testing, formal verification and certification. An audit or a red-team test is one assurance technique; assurance is the overall program that builds justified confidence for regulators, customers and the board. *(Chapter 13)*

**AI Business Operator (Korea).** The Korean Act's umbrella term for any corporation, organization, individual or government body in the AI business. There are two types: AI developers, which develop and provide AI, and AI-using business operators, which offer products or services built on a developer's AI. Both carry the Act's transparency and high-impact duties. *(Chapter 6)*

**AI Component.** Functional element that constitutes an AI system. *(Chapter 7)*

**AI Customer.** Entity that acquires/uses the AI system *(Chapter 7)*

**AI Data Retention Policy.** Policy defining how long training data is retained after model development, and addressing that data may effectively persist inside the trained model itself. A common gap when updating privacy policies for AI. *(Chapter 3)*

**AI Deployer.** The entity that operationalizes AI models in production. Responsible for integration, monitoring for risk, and ensuring reliable real-world function. *(Chapter 2)*

**AI Developer.** The entity that builds and trains AI models. Responsible for curating datasets, running fairness evaluations, and ensuring ethical design and testing. *(Chapter 2)*

**AI Distributor.** EU AI Act role: entity in the supply chain that makes an AI system available on the EU market without affecting its compliance. Must verify CE marking and documentation. *(Chapter 6)*

**AI Governance Stakeholder.** Any individual or group with a role in AI governance. Includes executive leadership, technical teams, legal/compliance, product owners, and end users. *(Chapter 2)*

**AI Impact Assessment.** A structured analysis of how an AI system affects individuals, groups, organizations, and society. Covers privacy, bias, safety, fairness, and fundamental rights. *(Chapter 12)*

**AI Importer.** EU AI Act role: entity that places an AI system from a third country on the EU market. Must verify conformity and ensure CE marking before distribution. *(Chapter 6)*

**AI Incident vs. AI Hazard (OECD Definitions).** OECD terms (AI Papers No. 16, May 2024). An AI incident is an event where an AI system's development, use or malfunction directly or indirectly leads to harm to health, critical infrastructure, rights, or property, communities or the environment. An AI hazard is an event that could plausibly lead to an incident; near misses count as hazards. Serious incidents, AI disasters and serious hazards are narrower tiers. *(Chapter 7)*

**AI Liability Directive (Withdrawn).** A Commission proposal of 28 Sep 2022 (COM(2022) 496) to ease fault-based claims for AI harm through court-ordered disclosure on high-risk AI systems and a rebuttable presumption of causality. Withdrawal was announced in the February 2025 work programme and published in OJ C/2025/5423 on 6 Oct 2025. The revised Product Liability Directive and national tort law fill the gap. *(Chapter 5)*

**AI Management System (AIMS).** A set of interrelated organizational elements to establish AI policies, objectives, and processes to achieve those objectives. The core of ISO/IEC 42001. *(Chapter 7)*

**AI Manufacturer.** Entity that builds/assembles the AI system *(Chapter 7)*

**AI Partner.** Entity that collaborates in AI development or deployment *(Chapter 10)*

**AI Provider.** Entity that makes an AI system available *(Chapter 6)*

**AI Risk Sources (ISO 23894 Annex B).** Informative annex of ISO/IEC 23894 cataloging AI-specific risk sources; Annex A lists common AI-related objectives and Annex C maps risk management processes to the AI system life cycle. *(Chapter 7)*

**AI RMF Subcategory.** A numbered outcome statement under a category of the AI RMF Core, e.g. MEASURE 2.11: fairness and bias are evaluated and results documented. AI RMF 1.0 has 72 across 19 categories, and the Playbook gives one entry of suggested actions for each. *(Chapter 7)*

**AI Subject.** Individual affected by or interacting with an AI system *(Chapter 7)*

**AI System.** A technical system that generates results such as content, forecasts, recommendations, or decisions for a specific, human-defined objective. May use various techniques and approaches related to AI to develop a model for representing data, knowledge, processes, etc. Designed to operate with varying degrees of automation. *(Chapter 1)*

**AI System Impact Assessment (ISO/IEC 42005).** A formal, documented process for identifying, evaluating and addressing the benefits and harms an AI system and its foreseeable uses can have for individuals, groups and society. ISO/IEC 42001 requires one (clauses 6.1.4 and 8.4); ISO/IEC 42005 explains how to do it. Distinct from the organizational risk assessment of ISO/IEC 23894. *(Chapter 7)*

**AI User.** The person or entity that interacts with AI in real-world scenarios. Often closest to operational impact and first to detect unintended outcomes. *(Chapter 2)*

**AI Vendor Due Diligence.** Evaluation of AI vendors covering AI-specific risks: model and training-data provenance, labeling quality, explainability, safety filters, and vulnerable dependencies. Imposed by procurement policy before contracting. *(Chapter 3)*

**Algorithmic Bias.** Systematic and repeatable errors in an AI system that create unfair outcomes, such as privileging one group over another, often stemming from biased training data. *(Chapter 9)*

**Annex SL.** ISO's harmonized structure for management system standards. Provides identical clause structure (4-10) across ISO 42001, 27001, 9001 enabling integration. *(Chapter 7)*

**Anonymization.** The process of irreversibly transforming personal data so the data subject can no longer be identified. If fully achieved, GDPR no longer applies. *(Chapter 4)*

**Article 22 GDPR.** The GDPR provision granting data subjects the right not to be subject to solely automated decisions producing legal or similarly significant effects. Requires human intervention capability. *(Chapter 4)*

**Article 35 GDPR.** The GDPR provision mandating Data Protection Impact Assessments (DPIAs) for processing likely to result in high risk to individuals. Frequently triggered by AI systems. *(Chapter 4)*

**Article 56 (EU AI Act).** Legal basis for the GPAI Code of Practice, published by the European AI Office. Adherence is a compliance-demonstration aid, NOT conclusive evidence of compliance or a safe harbor. *(Chapter 6)*

**Article 9 GDPR.** The GDPR provision prohibiting processing of special category data (race, religion, health, biometrics, etc.) unless a specific exception applies. Critical for AI training data. *(Chapter 4)*

**Artificial General Intelligence (AGI).** A theoretical form of AI capable of understanding, learning, and applying intelligence across any task a human can perform. Does not yet exist publicly. *(Chapter 1)*

**Artificial Intelligence (AI).** *\<Discipline>* Research and development of mechanisms and applications of AI systems. R&D can take place in fields such as computer science, data science, humanities, mathematics, and natural sciences. *(Chapter 7)*

**Artificial Superintelligence (ASI).** A theoretical AI that surpasses human intelligence in all domains: creativity, problem-solving, emotional understanding, and decision-making. *(Chapter 1)*

**Audit.** A systematic, independent examination of an AI system's design, data, outputs, and governance against established criteria. Can be internal (first/second party) or external (third party). *(Chapter 13)*

**Automated Decision-Making (ADM).** Decisions made by a system rather than a person, with no meaningful human role in reaching the outcome, such as software approving or refusing a loan from a score. GDPR Art. 22 gives people the right not to be subject to a decision based solely on automated processing, including profiling, that has legal or similarly significant effects, unless it is necessary for a contract, authorised by law, or based on explicit consent. *(Chapter 4)*

**Automatic Summarization.** Task of shortening a portion of natural language content or text while preserving important semantic information. *(Chapter 7)*

**Automation.** Relating to a process or system that operates under certain conditions without human intervention. *(Chapter 3)*

**Autonomy.** A characteristic of a system that is capable of changing its intended domain of use or its objective without external intervention, control, or supervision. *(Chapter 1)*

**Availability.** The property of being accessible and usable when an authorized entity has a need. *(Chapter 7)*

### B

**Bayesian Network.** Probabilistic model that uses Bayesian inference for probability calculations using a directed acyclic graph. *(Chapter 7)*

**Benchmarking.** Evaluating AI system performance against established standards, reference models, or industry baselines to assess relative quality and identify improvement areas. *(Chapter 9)*

**Best-Efforts Impact Assessment (Korea).** Art. 35 of Korea's AI Basic Act: operators providing high-impact AI must make efforts to assess its impact on fundamental rights in advance, but the assessment itself is not mandatory. Skipping it isn't fined, but public bodies must give priority to assessed products. The decree lists what the assessment covers. *(Chapter 6)*

**Bias Audit (NYC LL 144).** The impartial evaluation by an independent auditor that NYC Local Law 144 requires no more than one year before an AEDT is used. It calculates selection or scoring rates and impact ratios by sex, race/ethnicity and intersectional categories. The impact ratio is a category's rate divided by the rate of the highest category. Results must be published, but the law sets no pass/fail threshold. *(Chapter 6)*

**Bias (Systematic Deviation).** Systematic differential treatment of certain objects, persons, or groups compared to others. Treatment includes perception, observation, representation, prediction, or decision. *(Chapter 9)*

**Bias Testing.** Evaluating AI system outputs for unfair differences across demographic groups, sensitive attributes, or protected characteristics to detect and mitigate algorithmic bias. *(Chapter 9)*

**Biometric Data.** Personal data resulting from specific technical processing relating to physical, physiological, or behavioral characteristics allowing unique identification. Special category under GDPR. *(Chapter 4)*

**Breach Notification.** GDPR requirement to notify the supervisory authority within 72 hours of becoming aware of a personal data breach, and to communicate high-risk breaches to affected data subjects. *(Chapter 4)*

**Brittleness.** A model's tendency to fail catastrophically when encountering inputs slightly outside its training distribution. Indicates lack of robustness and generalization. *(Chapter 9)*

**Business Context.** The organizational environment, objectives, constraints, and stakeholder expectations within which an AI system is designed, developed, and deployed. *(Chapter 8)*

**Business Objectives.** The organizational goals that an AI system is intended to serve. Deployment decisions must start with objectives rather than model capability alone. *(Chapter 11)*

### C

**California AI Transparency Act (SB 942).** California law requiring covered providers (generative AI systems with over 1 million monthly users that are publicly accessible in California) to offer a free AI detection tool, embed latent provenance disclosures in AI-generated image, video and audio, and give users the option of a visible label. As amended by AB 853 it became operative on 2 Aug 2026, adding platform duties in 2027 and capture-device duties in 2028. Penalties are $5,000 per violation per day, enforced by the AG, city attorneys and county counsel. *(Chapter 6)*

**California TFAIA (SB 53).** California's Transparency in Frontier Artificial Intelligence Act, in force 1 Jan 2026. Frontier developers (models trained with more than 10^26 operations) must publish transparency reports and report critical safety incidents to Cal OES within 15 days, or within 24 hours if there is imminent danger. Large frontier developers (over $500M revenue) must also publish and follow a frontier AI framework and send Cal OES summaries of internal-use risk assessments every three months, or on another reasonable schedule. It adds whistleblower protections, and the AG can seek up to $1M per violation. *(Chapter 6)*

**CCPA ADMT Regulations.** California Privacy Protection Agency rules, effective 1 Jan 2026, for businesses that use automated decision-making technology to make significant decisions about consumers (lending, housing, education, employment, health care). A business must give a pre-use notice, offer an opt-out unless an exception applies (such as a human appeal) and answer access requests about the ADMT's logic and outcome. Compliance is required by 1 Jan 2027. Companion rules require risk assessments and cybersecurity audits. *(Chapter 6)*

**CE Marking.** The physical or digital marking indicating conformity with EU health, safety, and environmental requirements. Required for high-risk AI systems under the EU AI Act. *(Chapter 6)*

**Choice.** A privacy principle giving individuals options about how their personal data is collected and used, including the ability to opt out of certain processing. *(Chapter 4)*

**Classic AI.** Traditional AI approaches using rule-based systems, statistical methods, and simpler ML algorithms. Contrasted with modern generative AI and LLMs. *(Chapter 11)*

**Cloud, On-Premises & Edge Deployment.** The deployment-environment decision: cloud offers scalability and managed infrastructure but raises data-residency and third-party questions; on-premises maximizes control and data sovereignty at higher operational cost; edge deployment puts inference on local devices for latency and privacy benefits with harder update and monitoring logistics. *(Chapter 11)*

**Code of Practice on Marking and Labelling.** The voluntary Code of Practice on Transparency of AI-generated Content, final 10 June 2026 under AI Act Article 50(7). Section 1 covers providers' machine-readable marking and detection; Section 2 covers deployers' labelling of deepfakes and AI-generated public-interest text. The Commission and AI Board assessed it as adequate. *(Chapter 6)*

**Cognitive Computing.** A category of AI systems that enables more natural interaction between humans and machines. *(Chapter 7)*

**Colorado ADMT Act (SB 26-189).** Colorado's 2026 law (signed 14 May 2026) that repealed and replaced the never-effective Colorado AI Act (SB 24-205). For consequential decisions made from 1 Jan 2027 in education, employment, housing, lending, insurance, health care and government services, it requires developer documentation, deployer notice, a plain-language explanation within 30 days of an adverse outcome, data correction and human review. The AG enforces exclusively, with a 60-day cure; there is no private right of action. *(Chapter 6)*

**Competent Authorities.** Regulatory or oversight bodies *(Chapter 6)*

**Complexity.** A characteristic of AI systems requiring governance: advanced techniques like neural networks create interrelationships between inputs and outputs that are difficult to trace or understand. *(Chapter 1)*

**Computer Vision.** The ability of a functional unit to capture, process, and interpret image or video data. May include wavelengths beyond visible light (e.g., infrared). *(Chapter 7)*

**Concept Drift.** A change in the underlying relationship between input data and expected outputs over time, often due to real-world changes that invalidate the model's learned patterns. *(Chapter 10)*

**Confabulation.** NIST AI 600-1 GAI risk: a generative model confidently producing false or fabricated content (often called hallucination). Classified among the technical/model risks unique to or exacerbated by GAI. *(Chapter 7)*

**Conformity Assessment.** The process of verifying that high-risk AI systems meet EU AI Act requirements before market placement. May involve self-assessment or third-party notified bodies. *(Chapter 6)*

**Conformity Requirements.** The specific standards, regulations, and internal policies an AI system must satisfy before deployment, including technical, legal, and ethical compliance obligations. *(Chapter 10)*

**Connectionism (Connectionist Paradigm).** A form of cognitive modeling that uses a network of interconnected units, which are generally simple computational units. *(Chapter 7)*

**Consent.** A privacy principle requiring freely given, specific, informed, and unambiguous indication of the data subject's agreement to processing of their personal data. *(Chapter 4)*

**Consumer Protection.** Laws and regulations prohibiting unfair, deceptive, or abusive acts and practices (UDAAP/UDAP) in consumer transactions. Applies to AI-driven products and services. *(Chapter 5)*

**Content Provenance (NIST AI 600-1).** Tracking the origin and history of digital content. One of the four primary GAI considerations in NIST AI 600-1, alongside governance, pre-deployment testing, and incident disclosure. *(Chapter 7)*

**Contestability.** The ability of people affected by an AI system's output or decision to challenge it and obtain a review and, where justified, a correction; it needs enough transparency about how the result was reached to argue with. Reflected in OECD AI Principle 1.3 and in the GDPR Art. 22(3) right to contest solely automated decisions; IAPP also calls it redress. *(Chapter 1)*

**Context of the Organization.** ISO 42001 Clause 4: understanding internal and external factors affecting the AI Management System, including stakeholder needs, legal requirements, and organizational objectives. *(Chapter 7)*

**Continuous Monitoring.** Ongoing observation of deployed AI system performance, data inputs/outputs, and environmental conditions to detect drift, degradation, or unexpected behavior in real time. *(Chapter 10)*

**Continuous Validation.** Ongoing verification that system meets requirements in production *(Chapter 7)*

**Controllability.** A property of an AI system that enables a human or another external agent to intervene in the system's operation. *(Chapter 7)*

**Convolutional Neural Network (CNN).** Feedforward neural network with convolution in at least one of its layers. *(Chapter 1)*

**Copyright.** Legal protection for original works of authorship fixed in a tangible medium. AI training on copyrighted content without authorization is subject to ongoing litigation (e.g., Getty v. Stability AI). *(Chapter 5)*

**Copyright Chapter (GPAI CoP).** GPAI Code of Practice chapter applying to ALL GPAI providers: a copyright policy, compliance with text-and-data-mining opt-outs under Art 4(3) CDSM, and measures against infringing outputs. *(Chapter 6)*

**Counterfactual Fairness.** A fairness criterion assessing whether a model's decision would change if a sensitive attribute (gender, race) were altered while keeping all other factors constant. *(Chapter 9)*

**Cross-Border Data Transfer.** The transfer of personal data outside the EU/EEA, requiring appropriate safeguards such as adequacy decisions, standard contractual clauses, or binding corporate rules. *(Chapter 4)*

**Cross-Functional Collaboration.** Multiple departments (legal, engineering, ethics, product, compliance) sharing responsibility for AI governance decisions to ensure diverse perspectives. *(Chapter 2)*

### D

**Data Acquisition.** The process of collecting and sourcing data for AI training, including verification of lawful rights, quality assessment, and documentation of origin. *(Chapter 9)*

**Data Annotation.** A process in which data is provided with a set of descriptive information without the data itself being altered. *(Chapter 9)*

**Data Augmentation.** The process of creating synthetic samples by modifying or utilizing existing data. *(Chapter 7)*

**Data Controller.** The entity that determines the purposes and means of processing personal data. Carries primary accountability for GDPR compliance in AI contexts. *(Chapter 4)*

**Data Dependency.** A characteristic of AI requiring governance: most AI systems depend heavily on data quality, volume, and diversity. Poor or biased data leads to inaccurate or unfair outcomes. *(Chapter 9)*

**Data Drift.** A change in the statistical properties of input data over time, potentially degrading model performance as the production data diverges from training data. *(Chapter 10)*

**Data Governance.** The overall management of data availability, usability, integrity, and security. Ensuring data is lawfully collected, accurate, sufficient, and fit for its intended AI use. *(Chapter 9)*

**Data Integrity.** The accuracy, consistency, and trustworthiness of data throughout its lifecycle. Critical for AI systems where corrupted or tampered data produces unreliable outputs. *(Chapter 8)*

**Data Leak.** Accidental exposure of confidential, proprietary or personal data to people or systems that should not have it, for example through a misconfigured cloud bucket, a misdirected email or an employee entering records into an external AI tool. When personal data is involved it is a GDPR personal data breach even when no attacker is involved (Art. 4(12)), so the 72-hour notification duty to the supervisory authority can apply (Art. 33). *(Chapter 4)*

**Data Lineage.** The tracking of data's lifecycle and processing. Where it came from, how it was transformed, where it moved. Essential for traceability and audit readiness. *(Chapter 9)*

**Data Minimization.** A GDPR principle requiring that only personal data necessary for the specific task be collected and processed. Critical for AI systems that tend to hoard data. *(Chapter 4)*

**Data Poisoning.** An attack that corrupts a model's training data, for example by planting mislabeled or trigger-laden samples in a scraped or third-party dataset, so the trained model learns wrong or hidden behaviour such as a backdoor. It strikes during training, unlike evasion attacks and prompt injection, which manipulate inputs at inference time; the EU AI Act expects high-risk providers to address it where appropriate (Art. 15(5)). *(Chapter 9)*

**Data Protection Impact Assessment (DPIA).** A mandatory risk assessment under GDPR Article 35 required when processing is likely to result in high risk to individuals, including when AI processes sensitive data. *(Chapter 4)*

**Data Protection Officer (DPO).** A mandatory role under GDPR for certain organizations. Responsible for advising on data protection obligations, monitoring compliance, and serving as contact point for authorities. *(Chapter 4)*

**Data Provenance.** Documentation of data's origin, collection method, licensing, and conditions of collection. Distinct from lineage which tracks movement and transformation. *(Chapter 9)*

**Data Quality.** The degree to which a dataset is fit for the job it will do, judged on dimensions such as correctness, completeness, consistency, timeliness, validity and representativeness; weak data produces weak or biased outputs. For high-risk systems the EU AI Act requires training, validation and testing data to be relevant, sufficiently representative and, to the best extent possible, free of errors and complete for the intended purpose (Art. 10(3)). *(Chapter 9)*

**Data Quality Review.** A process in which data is checked for completeness, systematic deviations (bias), and other factors that impair its usefulness for an AI system. *(Chapter 9)*

**Data Sampling.** Process of selecting a subset of data samples expected to exhibit similar patterns and trends as the larger dataset. *(Chapter 7)*

**Data Set.** Collection of data with a common format. *(Chapter 7)*

**Data Sheet.** A standardized document describing a dataset's composition, collection process, recommended uses, and limitations. Supports responsible data governance for AI training. *(Chapter 9)*

**Data Subject Access Request (DSAR).** A formal request by an individual to an organization to access their personal data and information about how it is processed. Challenging when AI models have memorized training data. *(Chapter 4)*

**Data Subject Rights.** GDPR-granted rights including access (Art 15), rectification (Art 16), erasure (Art 17), restriction (Art 18), portability (Art 20), and objection (Art 21). *(Chapter 4)*

**Deactivation Policy.** Documented procedures for safely taking an AI system offline. Triggered by regulatory requirements, performance issues, or safety concerns with controlled shutdown steps. *(Chapter 13)*

**Decision Tree.** Model in which inference is encoded as paths from the root to a leaf node in a tree structure. *(Chapter 7)*

**Decommissioning.** Planned retirement, data disposition, model archival *(Chapter 13)*

**Deepfake.** Image, audio or video content generated or manipulated with AI so that it resembles real people, objects, places or events closely enough to pass as authentic; a common tool for impersonation fraud, disinformation and harassment. The EU AI Act defines a deep fake in Art. 3(60) and requires deployers who use AI to generate or manipulate one to disclose that it is artificial (Art. 50(4)). *(Chapter 1)*

**Deep Learning.** *\<Artificial Intelligence>* An approach to creating rich hierarchical representations through the training of neural networks with many hidden layers. Deep learning is a subset of ML. *(Chapter 1)*

**Deidentification.** Techniques to remove or obscure personally identifying information from datasets. Includes pseudonymization, aggregation, and generalization approaches. *(Chapter 4)*

**Deployment.** Integration into operational environment, user training *(Chapter 10)*

**Design & Construction.** Data collection/preparation, model design, training, tuning *(Chapter 7)*

**Design Defect.** A product liability claim where the product's design is inherently unsafe. AI systems with flawed architectures or inadequate safety features may face design defect claims. *(Chapter 5)*

**Deterministic Output.** System outputs that are entirely predictable given the same inputs, characteristic of traditional rule-based systems. Contrasts with probabilistic AI outputs. *(Chapter 1)*

**Differential Privacy.** A mathematical framework for quantifying privacy loss when analyzing datasets. Ensures individual records cannot be inferred from aggregate outputs. *(Chapter 4)*

**Digital Omnibus on AI (Regulation 2026/1744).** EU regulation of 8 July 2026 amending the AI Act, in force 27 July 2026. It moves the high-risk dates to 2 December 2027 (Annex III) and 2 August 2028 (Annex I), softens the AI literacy duty, adds two Article 5 bans from 2 December 2026, creates Article 4a on bias-detection data, widens the AI Office's competence, pushes national sandboxes to 2 August 2027 and extends SME relief to small mid-caps. *(Chapter 6)*

**Disinformation.** False or manipulated content that is created or spread deliberately to deceive or cause harm, such as a fabricated video of a candidate released to sway an election. Intent is what separates it from misinformation; NIST AI 600-1 notes that generative AI makes it cheaper to produce at scale and to target at specific groups. *(Chapter 1)*

**Disparate Impact.** Unintentional discrimination where an AI system's neutral policy disproportionately harms a protected group. Still unlawful under civil rights laws even without intent. *(Chapter 5)*

**Disparate Treatment.** Intentional discrimination where an AI system explicitly treats individuals differently based on protected characteristics. Prohibited under civil rights laws. *(Chapter 5)*

**Documentation and Reporting.** The systematic recording of AI lifecycle activities, decisions, risks, and incidents to establish compliance, traceability, and audit readiness. *(Chapter 13)*

**Domestic Representative (Korea AI Basic Act).** A Korea-based agent that a foreign AI business operator with no Korean address must appoint in writing, and report to MSIT, if it meets any one decree threshold. The thresholds are KRW 1 trillion prior-year revenue, KRW 10 billion AI-service revenue, 1 million average daily Korean users, or a prior fine for ignoring an order. The operator is liable for the agent's violations. *(Chapter 6)*

**Downstream Harm.** Negative consequences that ripple from an AI system's outputs to affect individuals, groups, or systems further along the value chain beyond the immediate deployment context. *(Chapter 1)*

**Dun & Bradstreet Austria Ruling (C-203/22).** CJEU judgment of 27 February 2025 on GDPR Article 15(1)(h): 'meaningful information about the logic involved' means a concise, intelligible explanation of the procedure and principles actually applied to the person's data. Handing over a formula is not enough. Claimed trade secrets must be given to the supervisory authority or court to balance. *(Chapter 4)*

### E

**Echo Chamber.** A phenomenon where AI-driven content recommendation systems reinforce existing beliefs by limiting exposure to diverse perspectives, contributing to polarization. *(Chapter 1)*

**EDPB Guidelines 03/2026 on Web Scraping.** Draft EDPB guidelines, adopted 7 July 2026 for consultation until 30 October 2026, on scraping personal data to train generative AI. Consent is rarely workable; legitimate interest is the usual basis if necessity and balancing are met. Special-category data needs both an Article 6 basis and an Article 9(2) exception. *(Chapter 4)*

**EDPB Opinion 28/2024.** EDPB opinion of 17 December 2024 on AI models under the GDPR. A model is anonymous only if extracting training subjects' data from it, directly or through queries, is insignificantly likely. Legitimate interest follows a three-step test (interest, necessity, balancing). Unlawful training can taint deployment unless the model was properly anonymised. *(Chapter 4)*

**Entry into Force (EU AI Act).** August 1, 2024. The AI Act formally entered into force (published in the Official Journal July 12, 2024). Entry into force started the clock but imposed no immediate obligations. *(Chapter 6)*

**Ethical Considerations.** Moral principles and values that should guide AI development and deployment. Includes fairness, dignity, autonomy, transparency, and prevention of harm. *(Chapter 1)*

**Ethics by Design.** Integrating ethical considerations at every stage of AI system development, from problem definition through deployment and monitoring. *(Chapter 1)*

**EU AI Act.** Regulation (EU) 2024/1689. The world's first comprehensive AI law establishing a risk-based regulatory framework. Effective August 2024, general application August 2026. *(Chapter 6)*

**EU AI Act Penalty Tiers.** Prohibited AI practices: up to €35M or 7% of global annual turnover (whichever is higher). Non-compliance with high-risk obligations: up to €15M or 3%. Supplying incorrect or misleading information to authorities: up to €7.5M or 1%. *(Chapter 6)*

**European AI Office.** EU body housed within the European Commission that coordinates supervision of GPAI models with systemic risk, maintains the public database of high-risk AI systems, and issues guidance and best practices. *(Chapter 6)*

**Executive Order 14110.** US Executive Order on Safe, Secure, and Trustworthy AI (October 2023) that directed NIST to develop the Generative AI Profile (NIST AI 600-1) as a companion to the AI RMF. Revoked on 20 January 2025 by EO 14148; the NIST profile it produced remains published. *(Chapter 7)*

**Executive Order 14281.** US executive order of 23 Apr 2025, 'Restoring Equality of Opportunity and Meritocracy', declaring a policy to eliminate disparate-impact liability to the maximum degree possible and directing federal agencies to deprioritise its enforcement. It cannot amend statutes: Title VII's §703(k) disparate-impact standard, the Fair Housing Act theory recognised in Inclusive Communities, and private lawsuits remain. *(Chapter 5)*

**Expert System.** An AI system that accumulates, combines, and integrates knowledge provided by one or more human experts in a specific domain to derive solutions to problems. *(Chapter 1)*

**Explainability.** A property of an AI system that allows important factors influencing the results of the AI system to be expressed in a way that is understandable to humans. Intended to answer "Why?" without claiming optimality. *(Chapter 1)*

**Explainable and Interpretable.** NIST trustworthiness characteristic: AI system's mechanisms and outputs can be understood by humans. Explainability (can justify) + interpretability (can trace reasoning). *(Chapter 7)*

**Exploding Gradient.** A phenomenon in backpropagation training in a neural network in which large error gradients accumulate and lead to very large updates of the weights, causing the model to become unstable. *(Chapter 1)*

**Exploratory Data Analysis (EDA).** Initial examination of the data to identify its salient features and assess its quality. *(Chapter 7)*

**External Communication Plan.** A documented strategy for communicating about AI system incidents, capabilities, limitations, and changes to stakeholders including customers, regulators, and the public. *(Chapter 13)*

### F

**F1 Score.** The harmonic mean of precision and recall. A balanced metric combining both false positives and false negatives, preferred when class distributions are uneven. *(Chapter 1)*

**Face Recognition.** Automatic pattern recognition that compares stored images of human faces with an actual face image and displays any match with identifying data. *(Chapter 7)*

**Fail-Safe Plan.** A fallback decided in advance that kicks in if an AI system starts behaving anomalously or unsafely, or operates outside its set limits: for example halting safely, handing over to a backup system, or reverting to a manual process. The EU AI Act lists backup or fail-safe plans among the technical redundancy solutions that support the robustness of high-risk systems (Art. 15(4); Recital 75). *(Chapter 10)*

**Fairness.** A core principle of responsible AI: AI systems must not discriminate against individuals or groups based on race, gender, religion, ethnicity, disability, or socioeconomic status. *(Chapter 9)*

**Fair Use.** A legal doctrine permitting limited use of copyrighted material without permission for purposes such as criticism, comment, news reporting, teaching, scholarship, or research. *(Chapter 5)*

**Fair Use (AI Training).** How US courts apply the four fair use factors of 17 U.S.C. §107 to training AI on copyrighted works. Training was held fair use on the records in Bartz v. Anthropic and Kadrey v. Meta (June 2025) but not in Thomson Reuters v. Ross (Feb 2025, a competing non-generative tool). How the data was acquired and market harm, including market dilution, are decisive; no appellate ruling as of Sep 2026. *(Chapter 5)*

**Federated Learning.** A training approach where models are trained across decentralized devices using local data, without transferring raw data to a central server. Enhances privacy. *(Chapter 4)*

**Feedback Loop.** A cycle where AI system outputs influence future inputs, potentially amplifying biases or errors over time. Requires monitoring and circuit-breaking mechanisms. *(Chapter 10)*

**Feedforward Neural Network (FFNN).** Neural network in which information is directed from the input layer to the output layer in only one direction. *(Chapter 1)*

**Fine-Tuning.** The process of adapting a pre-trained AI model to a specific task or domain by additional training on targeted data. Balances customization with resource efficiency. *(Chapter 11)*

**Fit-for-Purpose.** Assessment that data is appropriate and adequate for the specific AI use case. Considering quality, quantity, representativeness, and relevance to the intended task. *(Chapter 9)*

**Foundation Model.** A large model pretrained on very large, diverse data, usually by self-supervision, that can be adapted through prompting, fine-tuning or RAG to many downstream tasks; LLMs and large image generators are examples. The EU AI Act's legal term for the concept is general-purpose AI model (Art. 3(63)), and IAPP also lists frontier AI as an alternative name. *(Chapter 1)*

### G

**General AI (GAI).** A type of AI system that performs a broad spectrum of tasks at a satisfactory level of performance. Note: AGI is often used in a broader sense. Systems that can perform all tasks a human is capable of. *(Chapter 1)*

**General Data Protection Regulation (GDPR).** EU Regulation 2016/679. Comprehensive data protection framework governing processing of personal data, with significant implications for AI systems processing EU residents' data. *(Chapter 4)*

**General-Purpose AI (GPAI).** EU AI Act category: AI models with significant generality, capable of performing a wide range of tasks. Those posing systemic risk face additional obligations. *(Chapter 6)*

**Generative AI.** AI systems that create new content (text, images, code, audio, video) based on patterns learned from training data. A subset of AI exemplified by LLMs and diffusion models. *(Chapter 1)*

**Generative AI Labeling (Korea).** The Art. 31(2)-(3) duties to indicate that generative AI outputs are AI-generated, and to flag realistic synthetic audio, images or video clearly. The label may be human-recognizable or machine-readable; a machine-readable mark needs at least one text or voice notice as well. Artistic works may use a less intrusive notice. *(Chapter 6)*

**Generative AI Profile (NIST AI 600-1).** Cross-sectoral NIST AI RMF profile for generative AI (July 2024), developed under Executive Order 14110. Defines 12 GAI-specific risks and suggests actions organized by the Govern, Map, Measure, Manage functions. *(Chapter 7)*

**Govern Function.** NIST AI RMF function: establishing organizational culture of risk management. Policies, accountability structures, workforce diversity, and third-party oversight. *(Chapter 7)*

**GPAI Transitional Period.** GPAI models placed on the market before August 2, 2025 have until August 2, 2027 to reach full compliance with the EU AI Act's GPAI obligations. *(Chapter 6)*

**Ground Truth.** Value of the target variable for a specific element of the labeled input data. *(Chapter 9)*

### H

**Hallucination.** A phenomenon where an AI model generates plausible-sounding but factually incorrect or fabricated information. A significant risk in LLM deployment. *(Chapter 1)*

**Heteronomy.** A characteristic of a system that functions under the constraint of external intervention, measures, or supervision. *(Chapter 7)*

**High-Impact AI (Korea).** Under Korea's AI Basic Act (Art. 2(4)), an AI system that could significantly affect or endanger life, physical safety or fundamental rights and is used in a listed domain. The domains are energy, drinking water, health care, medical devices, nuclear, biometric analysis for policing, hiring or lending-type judgments, transport, public-sector decisions and K-12 student assessment; the decree can add more. *(Chapter 6)*

**High-Performance AI (Korea).** Commentators' label for AI systems subject to Korea's Art. 32 safety duties: trained with at least 10^26 FLOPs, built on state-of-the-art technology, and posing wide-ranging, significant risks. Their operators must manage lifecycle risks, monitor and respond to safety incidents, and report the results to MSIT. *(Chapter 6)*

**Hiroshima AI Process Reporting Framework.** Voluntary reporting framework launched by the OECD in February 2025, through which organizations report in a common format on how they align with the G7 Hiroshima Process International Code of Conduct for Organisations Developing Advanced AI Systems. Reports are published on OECD.AI; the first round had 25, and version 2.0 widens participation to organizations deploying and providing advanced AI. *(Chapter 7)*

**Human Approval Checkpoint.** A predefined point in an agent's workflow where a human must approve before it proceeds, typically for high-stakes actions, irreversible ones (payments, permanent deletions, outgoing messages), atypical behaviour, or user-set thresholds. Best enforced at system level and audited for rubber-stamping. *(Chapter 11)*

**Human Authorship Requirement.** The US rule that copyright protects only works authored in the first instance by a human being. Upheld in Thaler v. Perlmutter (D.C. Cir., 18 Mar 2025; cert. denied 2 Mar 2026). AI-assisted works remain protectable to the extent of the human's expressive contribution, selection or arrangement; prompts alone are not enough (Copyright Office Part 2, Jan 2025). *(Chapter 5)*

**Human-Centricity.** A principle of responsible AI: AI systems should be designed with human well-being and dignity in mind, augmenting rather than replacing human capabilities. *(Chapter 1)*

**Human in the Loop.** A safeguard where a human reviews, overrides, or validates AI decisions in high-stakes scenarios, maintaining accountability in consequential decision-making. *(Chapter 3)*

**Human-Machine Teaming.** Integration of human interaction and machine intelligence. *(Chapter 7)*

**Human Oversight.** EU AI Act requirement that high-risk AI systems be designed to allow natural persons to oversee their operation, intervene when necessary, and override automated decisions. *(Chapter 3)*

**Hyperparameter.** A feature of a machine learning algorithm that influences its learning process. Selected **prior** to training. *(Chapter 1)*

### I

**Illinois HB 3773.** Public Act 103-0804, amending the Illinois Human Rights Act from 1 Jan 2026. Employers may not use AI that has the effect of discriminating on a protected basis in recruitment, hiring, promotion, discipline, discharge or terms of employment. They may not use zip codes as a proxy for protected classes, and must notify employees when AI is used for these decisions. This is an effect standard, unlike Texas's intent standard. *(Chapter 6)*

**Image Recognition.** An image classification process that classifies objects, patterns, or concepts in an image. *(Chapter 7)*

**Impact Assessment.** A systematic evaluation of potential harms, benefits, compliance gaps, and ethical issues an AI system may create. Required for high-risk systems under the EU AI Act. *(Chapter 8)*

**Impact Reassessment Trigger.** An event that should prompt an organization to revisit an existing AI system impact assessment: a change in intended use or purpose, a significant change to the system (new data, a retrained or replaced model), or a change in applicable law or policy. ISO/IEC 42001 clause 8.4 also calls for assessments at planned intervals or when significant changes are proposed. *(Chapter 7)*

**Imputation.** A procedure in which missing data are replaced by estimated or modeled data. *(Chapter 7)*

**Incident Management.** The process of detecting, containing, assessing, remediating, and documenting events where AI systems deviate from intended behavior or cause harm. *(Chapter 13)*

**Inference.** A form of reasoning in which conclusions are derived from known premises. In AI, a basic premise is either a fact, a rule, a model, a feature, or raw data. *(Chapter 1)*

**Input Data.** Data for which an AI system calculates a predicted result or inference. *(Chapter 7)*

**Integration Testing.** Validating that all components of an AI system work together correctly. Data flows, API calls, model inference, and downstream system interactions. *(Chapter 9)*

**Intellectual Property.** Legal rights protecting creations of the mind (copyright, patents, trademarks, trade secrets) increasingly challenged by AI training on protected content. *(Chapter 5)*

**Interpretability.** The ability to understand the relationships between patterns in data used by an AI system. Related to explainability but focused on internal mechanics. *(Chapter 1)*

**Interpretability Testing.** Assessing whether AI system decisions can be understood and explained in human terms. Critical for high-stakes domains like healthcare and finance. *(Chapter 1)*

**ISO 31000:2018.** The generic risk management standard that ISO/IEC 23894 mirrors clause-by-clause and extends with AI-specific guidance. Principles (Clause 4), framework (Clause 5), and process (Clause 6). ISO 23894 extends it; it does not replace it. *(Chapter 7)*

**ISO/IEC 22989.** International standard establishing terminology and definitions for AI systems, capabilities, and lifecycle stages. Foundational reference for all other ISO AI standards. *(Chapter 7)*

**ISO/IEC 42001.** The first AI-specific management system standard organizations can certify against (like ISO 27001 for security). Specifies requirements for an AI Management System (AIMS). *(Chapter 7)*

**ISO/IEC 42005.** International standard (first edition, 28 May 2025) giving guidance on AI system impact assessment: how to set up the process (Clause 5), what each assessment records (Clause 6), and how it fits with ISO/IEC 42001 and 23894 (Annexes A and B). Voluntary guidance for any organization that develops, provides or uses AI; not certifiable. *(Chapter 7)*

**ISO/IEC 42006.** ISO/IEC 42006:2025 (published 7 July 2025): requirements, additional to ISO/IEC 17021-1, for bodies that audit and certify AI management systems against ISO/IEC 42001. It governs the certifiers, not the organizations being certified. *(Chapter 7)*

**Issue Management.** The systematic process of identifying, tracking, prioritizing, and resolving problems with deployed AI systems. Bridging incidents to long-term remediation. *(Chapter 13)*

### K

**Knowledge.** *\<Artificial Intelligence>* Abstracted information about objects, events, concepts, or rules, their relationships, and properties, organized for purposeful systematic use. Does **not** imply cognitive abilities. *(Chapter 7)*

**Korea AI Basic Act Enforcement Decree.** Presidential Decree No. 36053 (21 Jan 2026), in force with the Act on 22 Jan 2026. It fills in the Act's thresholds and procedures, including the 10^26 FLOP safety test, the domestic-representative thresholds, labeling methods, the 30-day high-impact confirmation process and five-year document retention. *(Chapter 6)*

### L

**Language vs. Multimodal Models.** A model-type choice in deployment evaluation: language models process and generate text only, while multimodal models handle combinations of text, images, audio, or video. Multimodality expands use cases and also expands the risk surface. Each added modality brings its own failure modes, biases, and content risks. *(Chapter 11)*

**Large Frontier Developer.** Under California SB 53, New York's RAISE Act and Illinois SB 315: a developer that has trained or begun training a frontier model (more than 10^26 operations) and that, with its affiliates, had more than $500 million in gross revenue in the preceding calendar year. Large frontier developers carry the heaviest duties: a published frontier AI framework, regulator filings and, in Illinois from 2028, annual independent audits. *(Chapter 6)*

**Large Language Model (LLM).** A type of AI model trained on vast text corpora, capable of understanding and generating human-like text. Examples: GPT-4, Claude, Gemini. *(Chapter 1)*

**Least-Privilege Agent Permissions.** Granting each agent only the minimum tools, data and rights its task needs: scoped, time- or session-bound and non-transferable, with explicit escalation for anything more, and never beyond what the authorising human may do. A core control for bounding agent risk up front, enforced by access controls rather than prompts. *(Chapter 11)*

**Life Cycle.** The development of a system, product, service, project, or other human-made entity from planning through to decommissioning. *(Chapter 8)*

**Limited Memory AI.** AI systems that retain information for short periods and use past experiences to improve decisions. Example: autonomous vehicles processing recent traffic data. *(Chapter 1)*

**Localization Policy.** Procedures for restricting an AI system's operation to specific geographic regions, jurisdictions, or contexts. Often required by data residency or regulatory mandates. *(Chapter 13)*

**Long Short-Term Memory (LSTM).** A type of recurrent neural network that processes sequential data with satisfactory performance for both long- and short-term dependencies. *(Chapter 1)*

### M

**Machine Learning Algorithm.** Algorithm for determining parameters of a machine learning model from data according to specified criteria. *(Chapter 1)*

**Machine Learning (ML).** The process of optimizing model parameters using computer-aided methods so that the behavior of the model corresponds to the data or experience. *(Chapter 1)*

**Machine Learning Model.** A mathematical construct that makes an inference or a prediction based on input data or information. Result of training based on a ML algorithm. *(Chapter 1)*

**Machine-Readable Opt-Out (TDM).** A rightsholder's express reservation of rights against Article 4 text and data mining. For content made publicly available online, the DSM Directive requires the reservation to be machine-readable, for example in metadata or website terms. GPAI providers must identify and honour these reservations with state-of-the-art technologies under AI Act Art. 53(1)(c). *(Chapter 5)*

**Machine Translation (MT).** Task of automatically translating text or speech from one natural language into another using a computer system. *(Chapter 7)*

**Maintenance Schedule.** A planned cadence for AI system updates, retraining, and maintenance. Frequency determined by risk level, data volatility, and regulatory requirements. *(Chapter 10)*

**Manage Function.** NIST AI RMF function: allocating risk resources to mapped and measured risks. Prioritizing, responding to, and recovering from AI incidents, plus ongoing monitoring. *(Chapter 7)*

**Manufacturing Defect.** A product liability claim where a product deviates from its intended design during production. AI systems with deployment errors or corrupted models. *(Chapter 10)*

**Map Function.** NIST AI RMF function: establishing context to frame AI risks. Understanding system purpose, categorization, benefits/costs, and mapping risks to impact on individuals and society. *(Chapter 7)*

**Market Surveillance Powers.** EU AI Act inspection powers: require access to technical documentation, perform unannounced inspections and digital audits, mandate corrective actions, suspend or prohibit marketing, and require withdrawal or recall of non-compliant systems. *(Chapter 6)*

**Measure Function.** NIST AI RMF function: employing quantitative and qualitative methods to analyze and track AI risks. Testing, evaluation, verification, and validation (TEVV). *(Chapter 7)*

**Membership Inference Attack.** A privacy attack that determines whether a specific individual's record was part of a model's training set. A key AI-specific threat that existing privacy policies typically fail to address. *(Chapter 3)*

**Misalignment.** A risk where an AI system's behavior, benign in testing, leads to unintended harmful consequences when deployed. Often due to poorly specified objectives. *(Chapter 1)*

**Misinformation.** False or misleading content shared without intent to deceive, such as a user reposting a chatbot's invented statistic in the belief that it is true. The falsehood can be identical to disinformation; the difference is the absence of intent. NIST AI 600-1 flags generative AI as easing its unintentional production and spread. *(Chapter 1)*

**MITRE ATLAS.** Adversarial Threat Landscape for Artificial-Intelligence Systems. A knowledge base of adversary tactics and techniques specific to AI systems, modeled after MITRE ATT&CK. *(Chapter 13)*

**Model.** A physical, mathematical, or other logical representation of a system, an entity, a phenomenon, a process, or data. *(Chapter 1)*

**Model Card.** A short document released with a trained model that states its intended and out-of-scope uses, how it was evaluated, how it performs across relevant groups and conditions, and its known limitations (format proposed by Mitchell et al., 2019). BOK III.C lists creating the model card as part of release readiness; a system card covers the whole deployed system and a datasheet covers the dataset. *(Chapter 10)*

**Model Inversion Attack.** A privacy attack that reconstructs sensitive training data from a model's outputs or parameters. AI-era privacy and security policies must add controls for this threat. Traditional policies assume data minimization applies only to storage, not to what a trained model retains. *(Chapter 3)*

**Multi-Agent System.** A system in which several agents cooperate, for example in sequential, supervisor or swarm patterns. Splitting work lets each agent be scoped narrowly, but interaction adds risks: cascading errors, miscoordination, conflicting goals, collusion, emergent behaviour, and sensitive data leaking through shared memory. *(Chapter 11)*

### N

**Named Entity Recognition (NER).** Task of recognizing and labeling the names of entities and their categories for sequences of words. *(Chapter 9)*

**Narrow AI (Weak AI).** A type of AI system designed to perform specific tasks in order to solve a particular problem. *(Chapter 1)*

**National Competent Authorities (EU AI Act).** One or more authorities per member state responsible for market surveillance, handling complaints, investigating breaches, and imposing penalties within their jurisdiction. *(Chapter 6)*

**Natural Language.** A language that is or was actively used in a community of people and whose rules can be derived from usage. *(Chapter 7)*

**Natural Language Generation (NLG).** Task of converting semantic data into natural language. *(Chapter 7)*

**Natural Language Processing (NLP).** AI systems that understand, interpret, and generate human language by combining linguistics and machine learning. Example: ChatGPT. *(Chapter 1)*

**Natural Language Understanding (NLU).** Extraction of information from text or speech conveyed in natural language, creating a description of the given text/speech and its representation. *(Chapter 7)*

**Neural Network (NN).** *\<Artificial Intelligence>* A network consisting of one or more layers of neurons connected by weighted links with adjustable weights, which accepts input data and generates an output. *(Chapter 1)*

**Neuron.** *\<Artificial Intelligence>* A primitive processing element that accepts one or more input values and generates an output value by combining the input values and applying an activation function. *(Chapter 7)*

**NIST AI Risk Management Framework (AI RMF).** NIST AI 100-1. Voluntary framework with four functions (Govern, Map, Measure, Manage) providing organizations a structured approach to AI risk management. *(Chapter 7)*

**NIST AI RMF Playbook.** Companion guide to the NIST AI RMF providing practical implementation guidance, use-case examples, and templates for operationalizing the framework's four functions. *(Chapter 7)*

**Non-Discrimination Law.** Laws prohibiting unfair treatment based on protected characteristics. Applies to AI in employment (Title VII, ADA, ADEA), credit (ECOA), housing (FHA), and insurance. *(Chapter 5)*

**Notice.** A privacy principle requiring organizations to inform individuals about what personal data is collected and how it will be used. Foundational to AI transparency. *(Chapter 4)*

**Nudification and CSAM Prohibitions.** Two bans added to EU AI Act Article 5 by the 2026 Digital Omnibus (points (ba) and (bb)), applying from 2 December 2026: AI that generates or manipulates realistic intimate or sexual imagery of an identifiable person without explicit consent, and AI that generates child sexual abuse material. Placing on the market is caught where that output is the intended purpose, or a foreseeable result the system has no adequate safeguards against. *(Chapter 6)*

**NYC Local Law 144.** New York City's automated employment decision tool (AEDT) law, in force 1 Jan 2023 and enforced by DCWP from 5 Jul 2023. Employers and employment agencies may use an AEDT on candidates or employees who live in NYC only if it had an independent bias audit within the past year, the audit summary is public, and notice was given at least 10 business days before use. Penalties run up to $500 for a first violation and $500-1,500 for each later one. *(Chapter 6)*

### O

**OECD AI Incidents and Hazards Monitor (AIM).** OECD.AI tool that tracks AI incidents and hazards reported in the news, automatically classifying articles against the OECD's incident and hazard definitions. Because it relies on public reporting, it captures only a subset of the incidents that actually occur. *(Chapter 7)*

**OECD AI Principles.** The first intergovernmental standard on AI (2019, updated 2024). Five principles: inclusive growth, human-centered values, transparency, robustness, and accountability. *(Chapter 7)*

**OECD AI System Definition (2023 Update).** Definition adopted by the OECD Council on 8 November 2023: a machine-based system that, for explicit or implicit objectives, infers from the input it receives how to generate outputs such as predictions, content, recommendations or decisions that can influence physical or virtual environments. Systems vary in autonomy and adaptiveness after deployment. The EU AI Act's Art. 3(1) definition closely tracks it. *(Chapter 7)*

**OECD Framework for the Classification of AI Systems.** OECD tool (Digital Economy Papers No. 323, February 2022) for characterizing AI systems from a policy perspective along five dimensions: People & Planet, Economic Context, Data & Input, AI Model, and Task & Output. Used for registries and inventories, sector frameworks, risk assessment, incident reporting and risk management. *(Chapter 7)*

**Opacity.** A characteristic of AI systems requiring governance: the 'black box' nature of some AI models where it is challenging to understand how inputs are transformed into outputs. *(Chapter 1)*

**Open Source Agreement.** License terms governing the use of open-source AI models. May include restrictions on commercial use, attribution requirements, or copyleft provisions. *(Chapter 12)*

**Operational Controls.** Policies, procedures, and technical mechanisms governing how an AI system functions in production, including access controls, monitoring thresholds, and intervention protocols. *(Chapter 10)*

**Operation & Monitoring.** Performance monitoring, drift detection, incident management *(Chapter 13)*

**Overfitting.** A modeling error where an AI model learns training data too precisely, including noise, and fails to generalize to new data. Results in poor real-world performance. *(Chapter 9)*

### P

**Parameter (Model Parameter).** Internal variable of a model that affects how the model calculates its results. *(Chapter 7)*

**Patent.** Legal protection for novel, useful, and non-obvious inventions. AI-generated inventions raise questions about inventorship (e.g., DABUS/Thaler v. Vidal). *(Chapter 5)*

**PDCA Cycle.** Plan-Do-Check-Act. The continuous improvement model underlying ISO management system standards including ISO 42001's AI Management System. *(Chapter 7)*

**Performance.** Measurable result. Can refer to quantitative or qualitative findings. *(Chapter 7)*

**Personal Data (PbD).** All information that can be used to identify the natural person to whom such information relates, or that is/could be directly or indirectly related to a natural person. *(Chapter 7)*

**Personally Identifiable Information (PII).** Any information that can identify a specific individual, directly or indirectly. Name, email, IP address, location data, or online identifiers. *(Chapter 4)*

**Planning.** *\<Artificial Intelligence>* Data processing operations that assemble a workflow from a series of actions to achieve a specific objective. *(Chapter 7)*

**Post-Market Monitoring.** EU AI Act requirement for ongoing surveillance of high-risk AI systems after deployment. Documenting incidents, tracking performance, and reporting to authorities. *(Chapter 6)*

**Potential for Harm.** A characteristic of AI requiring governance: AI can be used maliciously or cause unintended negative consequences through surveillance, autonomous weapons, or malfunction. *(Chapter 1)*

**Precision.** The proportion of positive predictions that are actually correct. Measures how many selected items are relevant. High precision = few false positives. *(Chapter 9)*

**Predictability.** A property of an AI system that enables interested parties to make reliable assumptions about the outcome. *(Chapter 7)*

**Prediction.** Primary output of an AI system given input data or information. Does **not** necessarily mean forecasting something in the future. *(Chapter 7)*

**Privacy.** A core principle of responsible AI: organizations must ensure AI systems comply with privacy regulations, track all uses of PII, and provide means for inquiries and corrections. *(Chapter 4)*

**Privacy by Design.** Integrating privacy considerations at every stage of system development, from requirements through deployment, rather than bolting privacy on afterward. *(Chapter 4)*

**Privacy-Enhanced.** NIST trustworthiness characteristic: AI system incorporates safeguards for human autonomy, identity, and dignity through data minimization, anonymization, and consent mechanisms. *(Chapter 7)*

**Probabilistic Output.** Outputs based on probabilities rather than certainties, common in neural networks and ML models. Contrasts with deterministic systems where outputs are fully predictable. *(Chapter 1)*

**Probability Severity Matrix.** A risk assessment tool that quantifies and prioritizes risks by plotting likelihood (probability) against potential impact (severity), typically on a grid. *(Chapter 13)*

**Production Data.** Data collected during the operational phase of an AI system for which a deployed AI system calculates a predicted result or inference. *(Chapter 7)*

**Production Readiness Evaluation.** Structured pre-deployment review that an AI system is production-worthy: safety, accountability, suitability for intended context, regulatory conformity, performance benchmarking, and operational planning. *(Chapter 10)*

**Product Liability.** Legal responsibility of manufacturers and sellers for defective products that cause harm. Applies to AI systems under design defect, manufacturing defect, and failure to warn theories. *(Chapter 5)*

**Product Liability Directive (EU) 2024/2853.** The EU's revised no-fault product liability law, replacing Directive 85/374/EEC. Software, including AI systems, is a product however supplied; free and open-source software supplied outside commercial activity is excluded. It adds court-ordered disclosure, rebuttable presumptions of defect and causation, and compensation for medically recognised psychological harm and loss of non-professional data. Transposition by 9 Dec 2026; applies to products placed on the market after that date. *(Chapter 5)*

**Prohibited AI.** EU AI Act category: AI practices banned entirely. Includes social scoring, real-time remote biometric identification in public spaces (with narrow exceptions), and subliminal manipulation. *(Chapter 6)*

**Prompt Engineering.** Crafting and iterating on the instructions, context and examples sent to a generative model, including system prompts and few-shot examples, to steer it toward more useful, accurate and safe output. It changes no model weights, unlike fine-tuning, and adds no external knowledge source, unlike retrieval augmented generation. *(Chapter 11)*

**Prompt Injection.** An attack where malicious input manipulates an AI model's behavior by overriding system instructions or injecting harmful content through the user prompt. *(Chapter 3)*

**Proprietary Model Deployment Obligations.** The heightened duties that come with deploying a proprietary third-party model: increased contractual obligations, reliance on vendor claims that cannot be independently verified, potential for higher liability exposure, and dependence on the vendor for updates, incident support, and continuity. *(Chapter 12)*

**Proprietary vs. Open-Source Models.** A core deployment-evaluation choice: proprietary models offer vendor support and cutting-edge capability but limited visibility into training data and terms-of-service constraints; open-source models offer transparency, control, and customization but shift security, hosting, and compliance burden onto the deployer. License terms bind in both cases. *(Chapter 11)*

**Pseudonymization.** Processing personal data so it can no longer be attributed to a specific data subject without additional information kept separately. GDPR encourages as a safeguard. *(Chapter 4)*

**Public Disclosure.** Transparency obligation to publish information about AI system capabilities, limitations, training data, evaluation results, and intended use. Supports accountability. *(Chapter 13)*

**Purpose Limitation.** A GDPR principle requiring personal data be collected for specified, explicit, and legitimate purposes and not further processed in an incompatible manner. *(Chapter 4)*

### Q

**Quality Management System (QMS).** A formalized system documenting processes, procedures, and responsibilities for ensuring AI system quality and compliance throughout the lifecycle. *(Chapter 8)*

**Question Answering.** Task of determining the most appropriate answer to a question posed in natural language. *(Chapter 7)*

### R

**RACI Matrix.** A responsibility assignment framework: Responsible (does the work), Accountable (owns the outcome), Consulted (provides input), Informed (kept updated). *(Chapter 2)*

**RAISE Act.** New York's Responsible AI Safety and Education Act, signed December 2025 and re-enacted by a March 2026 chapter amendment modelled on California SB 53; effective 1 Jan 2027. It uses the same 10^26-operation and $500M thresholds. Frontier developers report critical safety incidents to a new office within the Department of Financial Services within 72 hours, and large developers publish frameworks and file disclosure statements. The AG can seek up to $1M for a first violation and $3M for later ones; there is no private right of action. *(Chapter 6)*

**Reactive Machines.** AI systems that respond to specific stimuli without memory or learning capability. They operate on pre-programmed rules. Example: IBM Deep Blue. *(Chapter 1)*

**Reasoning AI.** AI systems with advanced pattern analysis and prediction capabilities. Most current LLMs fall in this category, capable of passing standardized tests. *(Chapter 1)*

**Reassessment.** Periodic review of continued fitness for purpose *(Chapter 7)*

**Recall.** The proportion of actual positives correctly identified. Measures how many relevant items are selected. High recall = few false negatives. *(Chapter 9)*

**Record Keeping.** The obligation for controllers and processors to maintain records of processing activities, including purposes, data categories, recipients, and retention periods. *(Chapter 13)*

**Recurrent Neural Network (RNN).** A neural network in which the outputs of both the previous layer and the previous processing step are fed into the current layer. *(Chapter 1)*

**Red Teaming.** Adversarial testing where a team simulates attacks or misuse scenarios to uncover vulnerabilities that standard testing might miss. Critical for AI safety evaluation. *(Chapter 10)*

**Reinforcement Learning (RL).** Learning an optimal sequence of actions to maximize a reward through interaction with an environment. *(Chapter 1)*

**Reinforcement Learning with Human Feedback (RLHF).** A training technique in which people compare or rank a model's outputs, a reward model is trained on those preferences, and reinforcement learning then tunes the model toward the responses people prefer; a common way chat-style LLMs are steered toward helpful, harmless answers. Also called reinforcement learning from human feedback. *(Chapter 9)*

**Reliability.** Property of the correspondence between intended behavior and the results. *(Chapter 7)*

**Resilience.** The ability of a system to quickly recover its operational state following an incident. *(Chapter 13)*

**Responsible AI.** A framework ensuring AI systems are designed, developed, and deployed to respect human rights, promote fairness, and minimize risks while benefiting individuals and society. *(Chapter 9)*

**Retraining.** Updating a trained model through training with other training data. *(Chapter 10)*

**Retrieval Augmented Generation (RAG).** A technique where an AI model retrieves relevant external data at query time to augment its responses, improving accuracy and reducing hallucinations. *(Chapter 11)*

**Right to Erasure.** GDPR Article 17: the right of individuals to have their personal data deleted in certain circumstances. Raises 'machine unlearning' challenges for AI systems. *(Chapter 4)*

**Risk.** The effect of uncertainty on objectives. Deviation can be positive, negative, or both. Characterized by risk drivers, potential events, consequences, and likelihood. *(Chapter 13)*

**Robotics.** AI systems capable of performing kinetic physical tasks such as carrying objects, moving, and more advanced tasks like cooking. *(Chapter 1)*

**Robustness.** The ability of a system to maintain its performance level under **all** circumstances. *(Chapter 7)*

### S

**Safe.** NIST trustworthiness characteristic: AI system does not, under defined conditions, lead to a state in which human life, health, property, or the environment is endangered. *(Chapter 7)*

**Safety & Security Chapter (GPAI CoP).** GPAI Code of Practice chapter applying ONLY to systemic-risk GPAI providers: safety and security framework, risk identification and analysis, mitigations, serious-incident reporting, and cybersecurity. *(Chapter 6)*

**Sample.** An atomic data element that is processed in batches by a machine learning algorithm or an AI system. *(Chapter 1)*

**SCHUFA Ruling (C-634/21).** CJEU judgment of 7 December 2023: a credit bureau's automated score is itself an automated decision under GDPR Article 22 when a lender that receives it draws strongly on it to enter into, perform or end a contract. Upstream score providers can therefore owe Article 22 and Article 15(1)(h) duties. *(Chapter 4)*

**Secondary Use.** The use of an AI system or its outputs for purposes beyond the original intended use case. Creates unanticipated risks requiring governance oversight. *(Chapter 4)*

**Secure and Resilient.** NIST trustworthiness characteristic: AI system can withstand adverse events and recover to normal function while maintaining confidentiality, integrity, and availability. *(Chapter 7)*

**Security.** A core principle of responsible AI: protecting sensitive data (PII, IP, copyrighted content) used by AI systems from unauthorized access, compromise, and theft. *(Chapter 5)*

**Security Testing.** Evaluating AI system resistance to attacks. Includes adversarial example testing, prompt injection testing, model extraction attempts, and API security validation. *(Chapter 9)*

**Self-Aware AI.** The highest theoretical level of AI possessing consciousness and self-awareness. Would recognize its own existence. Currently does not exist. *(Chapter 1)*

**Semi-Supervised Learning.** A training method using a small amount of labeled data combined with a large amount of unlabeled data. The AI learns from labeled examples then predicts labels for the rest. *(Chapter 1)*

**Semi-Supervised Machine Learning.** Machine learning in which both labeled and unlabeled data are used during training. *(Chapter 1)*

**Sensitive Data.** Data requiring heightened protection due to potential for harm if misused. Includes special category data plus financial, location, and children's data depending on jurisdiction. *(Chapter 1)*

**Sentiment Analysis.** Task to computationally identify and categorize opinions expressed in text, speech, or image to determine a range of sentiments (e.g., positive to negative). *(Chapter 7)*

**Shadow AI.** Use of AI tools or systems inside an organization without approval, or outside the view of its governance process, such as staff putting company data into a personal chatbot account; it usually breaks the organization's rules on acceptable AI use, confidentiality or personal data. Managed through discovery, an AI inventory, an acceptable use policy and approved alternatives. *(Chapter 3)*

**Small vs. Large Models.** A deployment-evaluation trade-off: larger models generally offer broader capability but cost more to run, respond slower, and carry a larger risk surface; smaller models are cheaper, faster, and easier to control but may underperform on complex tasks. The governing question is fitness for the specific use case, not maximum capability. *(Chapter 11)*

**Soft Computing.** A field of data processing that tolerates and exploits imprecision, uncertainty, and partial truth to make problem-solving more transparent and resilient. *(Chapter 7)*

**Special Category Data.** GDPR Article 9 data types subject to stricter processing prohibitions: race, ethnicity, politics, religion, trade union membership, genetics, biometrics, health, sex life, sexual orientation. *(Chapter 4)*

**Speech Recognition (STT).** Conversion of a speech signal into a representation of the speech content by a functional unit. *(Chapter 7)*

**Speech Synthesis (TTS).** Generation of artificial speech. *(Chapter 7)*

**Speed and Scale.** A characteristic of AI systems requiring governance: AI processes data and makes decisions far faster than humans and at massive scale, creating both opportunities and risks. *(Chapter 1)*

**Stakeholder (Interested Party).** An individual, group, or organization that can influence a decision or activity, be affected by it, or feel affected by it. *(Chapter 7)*

**Stakeholder Mapping.** The process of identifying all parties affected by an AI system, understanding their concerns, interests, and influence. Essential for comprehensive risk management. *(Chapter 2)*

**Stress Testing (AI).** Pre-release testing under expected and edge-case workloads: latency and throughput benchmarks, memory/compute usage under load, failover behavior during outages, and evaluation against adversarial and malicious prompts. *(Chapter 10)*

**STRIDE.** A threat modeling framework: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege. Adapted for AI security analysis. *(Chapter 13)*

**Subsymbolic AI.** AI based on techniques and models that use an implicit encoding of information derived from experience or raw data. *(Chapter 7)*

**Sub-Tier Dependencies.** Hidden supply-chain risk beneath a contracted AI vendor: subcontracted data-labeling teams, models trained on scraped or copyrighted data, and outdated code libraries. A core challenge is how many levels down the TPRM program should probe. *(Chapter 3)*

**Suggested Actions (AI RMF Playbook).** The Playbook's voluntary, per-subcategory steps for reaching an AI RMF outcome, e.g. MAP 1.1's step to identify whether a non-AI or non-technology alternative would give more trustworthy outcomes. Organizations use as many or as few as fit; they are not a checklist or an ordered sequence. *(Chapter 7)*

**Supervised Learning.** A training method using labeled data where the AI learns from examples with known correct answers. Example: spam filter trained on labeled spam/legitimate messages. *(Chapter 1)*

**Supervised Machine Learning.** Machine learning in which only labeled data is used during training. *(Chapter 1)*

**Support Vector Machine (SVM).** Machine learning algorithm that finds decision boundaries with maximum margin. *(Chapter 1)*

**Symbolic AI.** AI based on techniques and models that manipulate symbols and structures according to explicitly defined rules. *(Chapter 7)*

**Synthetic Data.** Artificially generated records that imitate the patterns and statistical make-up of a real dataset without copying actual records; used where genuine data is scarce, skewed toward some groups, or too risky to use or share. It lowers but does not remove privacy risk, since a generator trained on personal data can reproduce details of real people. *(Chapter 9)*

**System Card.** A transparency document describing an AI system's architecture, training data, intended use, limitations, and ethical considerations. Broader scope than a model card. *(Chapter 8)*

### T

**TAKE IT DOWN Act.** Federal law (Pub. L. 119-12, signed 19 May 2025). It makes it a crime to knowingly publish nonconsensual intimate images, including AI digital forgeries. Covered platforms that host user content must run a notice-and-removal process and take reported images down within 48 hours, along with known identical copies. The platform duties have applied since 19 May 2026 and are enforced by the FTC, including against nonprofits. *(Chapter 6)*

**Task.** *\<Artificial Intelligence>* Action required to achieve a specific goal. Examples: classification, regression, ranking, clustering, dimensionality reduction. *(Chapter 7)*

**Technical Documentation.** Required documentation for high-risk AI systems demonstrating compliance. Includes system design, training methodologies, testing results, and risk management measures. *(Chapter 6)*

**Test Data (Evaluation Data).** Data used to evaluate the performance of a final model. Distinct from training data and validation data. *(Chapter 9)*

**Texas Responsible AI Governance Act (TRAIGA).** Texas HB 149, effective 1 Jan 2026. It bans developing or deploying AI with intent to push people toward self-harm or crime, to discriminate unlawfully (disparate impact alone is not enough), to infringe constitutional rights, or to produce child sexual abuse material or sexual deepfakes. AI disclosure, social-scoring and biometric-identification limits apply to government. The AG alone enforces, with a 60-day cure, penalties up to $200,000 per uncurable violation, a NIST-framework defence and a 36-month sandbox. *(Chapter 6)*

**Text and Data Mining Exception.** EU copyright exceptions in the DSM Directive (EU) 2019/790 for automated analysis of text and data. Article 3 lets research organisations and cultural heritage institutions mine lawfully accessed works for scientific research, with no opt-out. Article 4 lets anyone mine lawfully accessible works unless the rightsholder has reserved its rights. *(Chapter 5)*

**Theory of Mind AI.** A theoretical advanced AI that could understand and simulate human emotions, beliefs, intentions, and thoughts. Example: HAL-9000 (fictional). *(Chapter 1)*

**Third-Party Processor.** An entity that processes personal data on behalf of the data controller. Must have a contract specifying scope, safeguards, and responsibilities (GDPR Art 28). *(Chapter 4)*

**Third-Party Risk Management (TPRM).** Governance of outsourced AI components. Pretrained models, cloud infrastructure, data labeling, algorithmic APIs. For AI it must evolve beyond traditional vendor checklists to cover black-box algorithms, datasets of unknown origin, and unpredictable LLM APIs. *(Chapter 3)*

**Tool Misuse.** An agent using a tool it is legitimately allowed to use in an unsafe or unintended way, such as deleting valuable data, over-calling a costly API or leaking information, often after prompt injection or an ambiguous instruction. OWASP ASI02 (Tool Misuse and Exploitation); gaining privileges it should not have is ASI03 instead. *(Chapter 11)*

**Trade Secret.** Confidential business information providing competitive advantage. AI models and training methodologies may be protected as trade secrets if reasonable secrecy measures are maintained. *(Chapter 5)*

**Trained Model.** Result of model training. *(Chapter 7)*

**Training and Awareness Program.** An organizational program delivering AI terminology, strategy, and governance education to all stakeholders, tailored to each role's interaction with AI. *(Chapter 2)*

**Training and Testing.** The phase where AI models learn from data (training) and are evaluated for accuracy, bias, and performance (testing) before deployment. *(Chapter 9)*

**Training Data.** Data used to train a machine learning model. *(Chapter 1)*

**Training (Model Training).** Process for determining or improving the parameters of a machine learning model, based on a ML algorithm, using training data. *(Chapter 1)*

**Transfer Learning.** A set of methods in which data intended for solving one problem is used to apply the knowledge gained from it to another problem. *(Chapter 7)*

**Transparency and Documentation Prompts (AI RMF Playbook).** The questions in each Playbook entry's Transparency and Documentation section, under 'Organizations can document the following', e.g. GOVERN 1.6's 'Who is responsible for documenting and maintaining the AI system inventory details?'. Each list is followed by AI Transparency Resources such as GAO-21-519SP. *(Chapter 7)*

**Transparency Chapter (GPAI CoP).** GPAI Code of Practice chapter applying to ALL GPAI providers: model documentation, information to downstream providers, and the Annex XI/XII technical documentation obligations of Articles 53(1)(a)-(b). *(Chapter 6)*

**Transparency (Organization).** The characteristic of an organization whereby relevant activities and decisions are communicated to relevant interested parties in a comprehensive, accessible, and understandable manner. *(Chapter 7)*

**Transparency (System).** A characteristic of a system whereby appropriate information about the system is made available to relevant interested parties. May include: characteristics, performance, limitations, components, procedures, measures, design objectives, data sources, labeling protocols. *(Chapter 9)*

**Trustworthiness.** The ability to meet the expectations of interested parties in a verifiable manner. Characteristics include: reliability, availability, resilience, security, privacy, accountability, transparency, integrity, authenticity, quality, and user-friendliness. Applies to services, products, technologies, data, information, and organizations. *(Chapter 7)*

**Trustworthy AI.** AI that is built and governed so that people can justifiably rely on it, in line with principles such as safety, fairness and accountability; IAPP treats the term as largely synonymous with ethical AI and responsible AI. The NIST AI RMF's seven characteristics of trustworthy AI are: valid and reliable; safe; secure and resilient; accountable and transparent; explainable and interpretable; privacy-enhanced; and fair with harmful bias managed. *(Chapter 1)*

### U

**Underfitting.** A modeling error where an AI model is too simple to capture underlying patterns in the data. Results in poor performance on both training and new data. *(Chapter 9)*

**Unfair and Deceptive Acts and Practices (UDAP).** FTC-enforced standard prohibiting misleading or harmful business practices. AI systems making unsubstantiated claims or hiding AI involvement may violate UDAP. *(Chapter 1)*

**Unintended Use.** Application of an AI system in ways not anticipated by its developers. May produce harmful outcomes due to mismatched capabilities and context. *(Chapter 1)*

**Unit Testing.** Testing individual components or functions of an AI system in isolation to verify each part works correctly before integration. *(Chapter 9)*

**Unsupervised Learning.** A training method using unlabeled data where the AI must detect patterns independently. Example: customer segmentation from a CRM database. *(Chapter 1)*

**Unsupervised Machine Learning.** Machine learning in which only unlabeled data is used during training. *(Chapter 1)*

**Use Case.** A specific application scenario defining what problem the AI system solves, for whom, under what conditions, and with what expected outcomes. Foundational to governance. *(Chapter 8)*

**Use Case Assessment.** The process of evaluating a proposed AI application against organizational policies, risk appetite, and ethical standards before development begins. *(Chapter 8)*

**User Training.** Education provided to individuals who interact with AI systems. Covering capabilities, limitations, appropriate use, and how to flag unexpected or harmful outputs. *(Chapter 1)*

**Utah AI Policy Act.** Utah's 2024 law (SB 149, effective 1 May 2024) that first required generative AI disclosures and created the Office of AI Policy, the AI Learning Laboratory and regulatory mitigation agreements. As revised by SB 226 (2025), suppliers must disclose AI when a consumer clearly asks, and licensed professionals must disclose up front in high-risk interactions. Using AI is no defence to a consumer-protection violation. Fines reach $2,500 per violation, and the sunset is extended to 1 Jul 2027. *(Chapter 6)*

### V

**Valid and Reliable.** NIST trustworthiness characteristic: AI system produces accurate (valid) and consistent (reliable) outputs under specified conditions. *(Chapter 7)*

**Validation.** Confirmation by providing objective evidence that the requirements for a specific intended use or a specific intended application have been met. *(Chapter 7)*

**Validation Data (Development Data).** Data used to compare the performance of different candidate models. Used to tune hyperparameters. *(Chapter 7)*

**Vendor Agreement.** Contract with third-party AI providers specifying data usage rights, performance guarantees, liability allocation, audit rights, and compliance obligations. *(Chapter 12)*

**Verification.** Confirmation by providing objective evidence that specified requirements have been met. Ensures only that a product conforms to its specifications. *(Chapter 7)*

**Verification & Validation.** Testing against specifications, intended use validation *(Chapter 7)*

### W

**Watermarking.** Hiding a signal in AI-generated content, or attaching one to its metadata, that people generally cannot perceive but software can detect, so the content can later be identified as machine-made; one provenance technique alongside metadata, fingerprinting and cryptographic signatures. The EU AI Act requires providers of systems generating synthetic audio, image, video or text to mark outputs in a machine-readable, detectable way (Art. 50(2)). *(Chapter 6)*

**Workforce Readiness.** Assessment of whether staff have the skills, training, and awareness to effectively use, monitor, and govern AI systems in their operational context. *(Chapter 11)*

### Z

**Zero-Shot Learning (ZSL).** A machine learning technique where an AI model recognizes objects or concepts without having seen any training examples of those categories. *(Chapter 1)*

