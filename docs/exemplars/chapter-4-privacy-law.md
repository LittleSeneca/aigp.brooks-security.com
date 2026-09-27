> **Proposal, not yet in the manuscript.** This replaces the Chapter 4 block in `aigp-book.md`. Original: 4,870 words. Everything below is manuscript content.

## Chapter 4: Privacy Law Meets AI

Privacy law is the floor under every AI governance program. The GDPR, Regulation (EU) 2016/679, regulated AI for the five years before the AI Act existed, and the AI Act now sits beside it rather than above it: the GDPR governs processing of personal data, the AI Act the placing of a system on the market and into service. A high-risk technical file does not cure an unlawful basis, and a chatbot outside every risk category can still breach a transparency duty.

Two properties of AI press hardest. Appetite: development wants volume and variety, and it wants data collected for something else, which purpose limitation and minimisation restrain (4.4, 4.5). Inference: a model can produce a fact about a person, an ethnic origin or a health condition, that no form asked for and no field recorded (4.1, 4.3). Scope decides whether the rest applies: Article 3 reaches controllers and processors in the EU, and those outside it that offer goods or services to people in the EU or monitor their behaviour there, so a model trained elsewhere but served in the EU raises a transfer question (4.10).

- Section 4.1: the framework, and the personal data definition.
- Section 4.2: controller, processor and joint controller.
- Section 4.3: the six lawful bases and special category data.
- Section 4.4: purpose limitation and the compatibility test.
- Section 4.5: minimisation and accuracy in features and training sets.
- Section 4.6: Articles 12, 13 and 14, and what a notice cannot carry.
- Section 4.7: the DPIA, the Article 35(4) list and the FRIA.
- Section 4.8: Article 22, and the score that is itself the decision.
- Section 4.9: the data subject rights that meet a model.
- Section 4.10: transfers after Schrems II.
- Section 4.11: enforcement and the DPO.

| Case | Citable as | Drawn on for |
|---|---|---|
| SCHUFA | Court of Justice, Case C-634/21, 7 December 2023 | A score that is itself the decision, and duties that travel up the vendor chain |
| Dun and Bradstreet Austria | Court of Justice, Case C-203/22, 27 February 2025 | What an explanation under Article 15(1)(h) must contain |
| Garante v OpenAI | Garante decision No. 755 of 2 November 2024, EUR 15 million; annulled by the Court of Rome, judgment No. 4153/2026 | Transparency enforcement, and its volatility on appeal |
| Garante v Luka Inc. (Replika) | Garante order of 10 April 2025, EUR 5 million | No legal basis identified, and design duties on a consumer generative product |
| Clearview AI | Garante decision of 10 February 2022, EUR 20 million; Dutch DPA decision of 16 May 2024, EUR 30.5 million | Scraped biometric data, and parallel enforcement |
| Garante v Foodinho | Garante order of 5 July 2021; further order of 22 November 2024, EUR 5 million | Impact assessment and contestability in algorithmic management |
| Meta Ireland transfers | Irish Data Protection Commission decision IN-20-8-1, 22 May 2023, EUR 1.2 billion | Transfers outside the EEA, and the safeguards required after Schrems II |

### 4.1 The GDPR as the Framework the AI Act Sits Beside

Personal data is any information relating to an identified or identifiable natural person. A full postcode with a birth date names nobody alone, but **quasi-identifiers** of that kind let a model single someone out from an extract no one would call identifying.

**Pseudonymized** data keeps a keyed reference and stays personal data; **anonymous** data sits outside the GDPR, and re-identification must be impossible by the means reasonably likely to be used by anyone, not only by the organization holding the data. Opinion 28/2024, adopted on 17 December 2024, applies that standard to models, anonymous only where it is insignificantly likely that a training subject's data could be extracted, directly or by querying the model.

Personal data includes data derived from other data: an attribute a model predicts is personal data about that person, and where it falls in Article 9 the prohibition is engaged by the prediction rather than only by collection (4.3).

### 4.2 Controller, Processor and Joint Controllership

A **controller** determines the purposes and means of processing (Article 4(7)); a **processor** acts on the controller's behalf (Article 4(8)); the test looks at who decides in fact. Where a provider uses the customer's data to improve its own models it has determined a purpose of its own, so the parties are **joint controllers** under Article 26 for that processing, whatever the agreement says. Controllership tends toward a platform the customer cannot control, and Article 28(10) makes a processor that exceeds its instructions a controller for that processing. Joint controllership needs no joint notice: the arrangement binds the parties, not the data subject, who may request against either. The AI Act's provider and deployer are not the GDPR's controller and processor (Chapter 6).

### 4.3 Lawful Basis, and the Special Category Prohibition

Article 6 lists six **lawful bases** with no hierarchy: consent, contract necessity, legal obligation, vital interests, public task, legitimate interests. **Legitimate interest**, Article 6(1)(f), is the basis most training runs on, and the least safe one: it requires a documented three step test of a real and present interest, necessity, and a balancing exercise in which the data subject's reasonable expectations carry real weight, the standard Opinion 28/2024 applies.

**Special category data** works the other way round: Article 9 begins with a prohibition, not a permission. The categories are racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data used to uniquely identify a person, health data, and sex life or sexual orientation. **Clearview AI** built a facial recognition database by scraping images; Italy fined it EUR 20 million in 2022 for biometric data with no valid basis and a commercial interest that did not qualify as legitimate, and the Netherlands fined it EUR 30.5 million in 2024 on comparable findings. **Garante v Luka Inc.** (Replika), at EUR 5 million in April 2025, is the generative case: no legal basis identified, an inadequate privacy policy, and no age verification at registration or in use.

### 4.4 Purpose Limitation and the Compatibility Test

**Purpose limitation**, Article 5(1)(b), requires data collected for specified, explicit and legitimate purposes and not further processed incompatibly. Training is a separate purpose from collection, and separate again from inference, the use of a trained model. An organization that collects data to deliver a service and later trains on it has two lawful routes: show the new purpose is compatible, or rest it on a fresh basis and inform the people concerned under Article 13(3).

Article 6(4) sets the compatibility factors: the link between the two purposes, the context of collection and the relationship with the person, the nature of the data, the consequences of the further processing, and the safeguards in place. Article 9 applies to the secondary use as well, which narrows the answer for special category data.

**Function creep** is the failure this doctrine exists to catch: data drifts from one feature to the next, and service transcripts move into model tuning. The control that holds is a register tagging each dataset with its approved purposes.

### 4.5 Minimisation and Accuracy in Features and Training Sets

**Minimisation**, Article 5(1)(c), asks for personal data that is adequate, relevant and limited to what is necessary. The discipline runs at every stage: take what the purpose requires at collection, drop features that contribute nothing and mask or remove sensitive fields before training, and keep the input to the set the decision needs.

An unused field widens the breach surface and imports proxies: postcode or account history correlate with characteristics the organization must not use to decide (Chapter 5). Data masking, **tokenization**, **pseudonymization**, on-device processing, **federated learning** and **differential privacy** all reduce exposure, and none makes data anonymous on its own; **synthetic data** carries the same caution.

**Accuracy**, Article 5(1)(d), concerns the data and its currency rather than a performance metric: a model trained on a stale or mislabelled history inherits both defects. Article 5(1)(e) forbids keeping data in identifiable form longer than the purpose requires.

### 4.6 Transparency: Articles 12, 13 and 14

**Article 12** requires information to be concise, transparent, intelligible, easily accessible and in clear and plain language. **Article 13** governs information collected from the person, and **Article 14** governs information obtained anywhere else, within a month unless providing it proves impossible or would involve disproportionate effort.

The practical instrument is a **layered notice**, whose first layer states the fact that changes the reader's position. A notice supplies no lawful basis and cannot substitute for the explanation owed to an individual about a particular decision (4.9).

**Garante v OpenAI** is the worked example of transparency enforcement: the decision of 20 December 2024 imposed a EUR 15 million fine and a six month public information campaign for breaches of the transparency principle and information duties, plus the absence of age verification. The Court of Rome annulled the fine in judgment 4153/2026, so it is cited as an annulled enforcement, not a standing penalty.

### 4.7 The DPIA and the Fundamental Rights Impact Assessment

A **data protection impact assessment** (DPIA) is required by Article 35 where processing is likely to result in a high risk to the rights and freedoms of natural persons. Article 35(3) names three triggers: systematic and extensive automated evaluation of personal aspects, including profiling, with decisions that produce legal effects or similarly significantly affect a person; large scale special category processing; and systematic monitoring of a publicly accessible area on a large scale. The operational trigger is the **Article 35(4) list**: each authority publishes the operations requiring a DPIA, and those lists add items the article does not.

The assessment has four parts under Article 35(7): a description of the processing and its purposes, an assessment of necessity and proportionality, the risks to data subjects, and the measures to address them. Article 35(9) requires the controller to seek the views of data subjects where appropriate. The recurring AI failures are a boundary drawn round the model rather than the processing, and technical risk described instead of human impact.

**Foodinho**: the Italian authority fined the company EUR 2.6 million in 2021 over a rider management algorithm covering roughly 19,000 riders, finding breaches of Articles 35 and 37(7): no procedure for riders to obtain human intervention or contest a decision that could remove them from work.

A **fundamental rights impact assessment** (FRIA) under Article 27 of the AI Act is the deployer's, covering non-discrimination, freedom of expression and the rights of the child; the DPIA is the controller's and protects personal data.

### 4.8 Automated Decision-Making Under Article 22

**Article 22** gives a person the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning them or similarly significantly affects them, unless the decision is necessary for a contract, is authorised by law with suitable safeguards, or is based on explicit consent. Those exceptions carry the Article 22(3) safeguards: human intervention, the right to express a point of view, and the right to contest the decision.

The hinge is the phrase **solely automated**: a process moves outside the article where a human genuinely intervenes before the decision takes effect, and stays inside where the human is nominal. What Article 22 adds is that the human must be able to change the outcome.

**SCHUFA**, Case C-634/21, decided by the Court of Justice on 7 December 2023: a credit information agency's automated probability value was itself a decision within Article 22(1) where the lender drew strongly on it when establishing, implementing or terminating a contract, so the agency, and not only the lender, had to find an exception and provide the safeguards. Duties travel up the chain to whoever produces the score: no party escapes by adding a step.

### 4.9 Data Subject Rights in an AI Context

| Right | Article | The AI problem |
|---|---|---|
| Access | 15 | Explaining a decision whose logic is distributed across weights |
| Rectification | 16 | Correcting a record whose influence is already in the model |
| Erasure | 17 | Deleting an influence rather than a row |
| Restriction | 18 | Pausing use inside a system that keeps learning |
| Objection | 21 | Profiling is intrinsic to many systems rather than incidental |
| Automated decisions | 22 | Obtaining human intervention that is real |

Access carries the most developed case law: Article 15(1)(h) entitles a person subject to an automated decision to meaningful information about the logic involved, and about the significance and envisaged consequences of the processing. **Dun and Bradstreet Austria**, Case C-203/22, decided on 27 February 2025, supplies the standard: a concise and intelligible explanation of the procedure and the principles actually applied, sufficient for the person to understand and to challenge the outcome. The Court rejected an algorithm dump and a summary of general categories, and sends claimed trade secrets to the authority or court to balance.

Deleting a row is straightforward; removing its influence from a trained model is not, and the regulation says neither that erasure reaches the model nor that it cannot. What it requires is a documented position rather than a silent assumption.

### 4.10 International Transfers After Schrems II

Outside the EEA, Articles 44 to 49 govern. The lawful routes are an **adequacy decision**, finding essentially equivalent protection; **standard contractual clauses** (SCCs) or another Article 46 instrument, which move protection with the data; binding corporate rules; and the narrow Article 49 derogations, which are no plan for routine operations.

Remote access counts: where a team outside the EEA can reach data held inside it, that access is itself a transfer, as the Board's Guidelines 05/2021 treat as settled. For the United States, the adequacy decision for the EU-US Data Privacy Framework of July 2023 covers importers certified under it.

After **Schrems II**, Case C-311/18 of 16 July 2020, an Article 46 instrument is a starting point rather than an answer. The controller must carry out a **transfer impact assessment**: identify the law and practice of the destination that may impinge on the safeguards, decide whether they are effective, and adopt supplementary measures where they are not, as the Board sets out in Recommendations 01/2020.

**Meta Ireland** is not an AI case, and that is the point: Ireland's Data Protection Commission fined Meta EUR 1.2 billion in May 2023 over the legal basis for transferring EU user data to the United States, and ordered the transfers suspended.

### 4.11 Enforcement, Supervisory Authorities and the DPO

**National supervisory authorities** enforce the GDPR in their own member state, with a one stop shop lead authority for cross-border processing. The **fine tiers** in Article 83 are up to EUR 10 million or 2 percent of total worldwide annual turnover, whichever is higher, and up to EUR 20 million or 4 percent for the most serious infringements.

The **data protection officer** sits inside this picture, and independence is the tested point. **Article 38(3)** provides that the officer shall not receive instructions regarding the exercise of their tasks, shall not be dismissed or penalised for performing them, and shall report directly to the highest level of management. **Article 38(6)** allows other tasks and duties only where they do not result in a conflict of interest, so an officer who also owns the processing decisions they monitor cannot give independent advice. Foodinho's order included a finding under Article 37(7) on the officer's position.

### Exam Focus

These points belong to competency II.A, whose first indicator names transparency, choice and lawful basis, and whose controller obligations name automated decision-making explicitly.

- The six Article 6 bases have no hierarchy, so "consent is the strongest basis" is a distractor. Consent fails wherever the service cannot realistically be refused.
- Legitimate interest is the usual basis for training and the one with the heaviest documentation: interest, necessity, balancing, and a right to object under Article 21. An undocumented balancing test is an assertion, not a basis.
- Article 9 is a prohibition with listed exceptions, not a permission, and it is engaged by a special category attribute a model infers, not only by one that was collected.
- Purpose limitation: training is a separate purpose from collection, and secondary use needs either a compatibility assessment under the Article 6(4) factors or a fresh basis plus notice under Article 13(3).
- Minimisation reaches features and training sets, not only storage; if fifteen features perform like fifty, use fifteen. Accuracy concerns the data and its currency, not the model's scores.
- Article 14 reaches data obtained from a third party or scraped, and its disproportionate effort exemption must be documented.
- A notice cannot create a lawful basis, cannot make an incompatible purpose compatible, and cannot replace the Article 15(1)(h) explanation of an individual decision.
- The DPIA triggers are in Article 35(3), but the operational trigger is the authority's Article 35(4) list. A DPIA is the controller's and protects personal data; the AI Act Article 27 FRIA is the deployer's and covers a wider set of fundamental rights. Neither substitutes for the other.
- Article 22 turns on "solely automated", the exception has to be one of the three in Article 22(2), and the Article 22(3) safeguards are human intervention, expressing a view, and contesting the decision.
- SCHUFA (C-634/21) makes an upstream score an Article 22 decision where the downstream party draws strongly on it, so scoring vendors and model providers owe those duties.
- Dun and Bradstreet Austria (C-203/22) sets the Article 15(1)(h) standard: a concise, intelligible explanation of the logic actually applied, not an algorithm dump, with trade secrets balanced by the authority or the court.
- Erasure has no settled automatic answer for a trained model, so the answer to look for is a documented position rather than a silent assumption.
- Remote access from outside the EEA is a transfer, and after Schrems II an SCC or a BCR needs a transfer impact assessment and supplementary measures where the safeguards are ineffective.
- Enforcement patterns to recognise: parallel action by several authorities (Clearview AI), volatility on appeal (the annulled OpenAI fine), and process findings that outlast the penalty (Foodinho).
- Under Article 38(3) the DPO takes no instructions, cannot be dismissed or penalised for the role, and reports to the highest management level; Article 38(6) bars conflicting duties.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): Choice, Consent, Notice, Secondary Use, Deidentification, Differential Privacy, Federated Learning, Privacy, Privacy by Design, Automated Decision-Making (ADM), Data Leak, Data Protection Impact Assessment (DPIA), Data Subject Access Request (DSAR), Dun & Bradstreet Austria Ruling (C-203/22), SCHUFA Ruling (C-634/21), Personally Identifiable Information (PII), Anonymization, Article 22 GDPR, Article 35 GDPR, Article 9 GDPR, Biometric Data, Breach Notification, Cross-Border Data Transfer, Data Controller, Data Minimization, Data Protection Officer (DPO), Data Subject Rights, EDPB Guidelines 03/2026 on Web Scraping, EDPB Opinion 28/2024, General Data Protection Regulation (GDPR), Pseudonymization, Purpose Limitation, Right to Erasure, Special Category Data, Third-Party Processor.

### Further Reading

- [GDPR, Regulation (EU) 2016/679](https://eur-lex.europa.eu/eli/reg/2016/679/oj): the text of Articles 5, 6, 9, 12 to 18, 21, 22, 25, 28, 35, 38, 44 to 49 and 83
- [EDPB Opinion 28/2024 on AI models and personal data](https://www.edpb.europa.eu/documents/opinion-of-the-board-art-64/opinion-282024-on-certain-data-protection-aspects-related-to_en): the anonymity test for a trained model, and the three step legitimate interest test
- [EDPB Guidelines 03/2026 on web scraping in the context of generative AI (draft)](https://www.edpb.europa.eu/public-consultations/guidelines-032026-on-web-scraping-in-the-context-of-generative-ai_en): why consent does not scale for a training corpus, and when legitimate interest is the usual basis
- [EDPB Guidelines 07/2020 on the concepts of controller and processor](https://www.edpb.europa.eu/documents/guideline/guidelines-072020-on-the-concepts-of-controller-and-processor-in-the-gdpr_en): the functional test for controllership, and joint controllership
- [EDPB Guidelines 05/2021 on the interplay between Article 3 and Chapter V](https://www.edpb.europa.eu/documents/guideline/guidelines-052021-on-the-interplay-between-the-application-of-article-3-and-the_en): remote access as a transfer
- [EDPB Recommendations 01/2020 on measures that supplement transfer tools](https://www.edpb.europa.eu/our-work-tools/our-documents/recommendations/recommendations-012020-measures-supplement-transfer_en): the transfer impact assessment after Schrems II
- [European Commission, EU-US data transfers](https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/eu-us-data-transfers_en): the adequacy decision for the Data Privacy Framework
- [EU AI Act, Article 27 (fundamental rights impact assessment)](https://artificialintelligenceact.eu/article/27/): what a FRIA covers, and why it sits beside a DPIA rather than inside it
- [ICO guidance on AI and data protection](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/): minimisation, retention, accuracy and rights in an AI context
- [ICO: explaining decisions made with AI](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/explaining-decisions-made-with-artificial-intelligence/): what a meaningful explanation contains in practice
- [SCHUFA, Case C-634/21 (CJEU, 7 December 2023)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62021CJ0634): a score the lender draws on strongly is itself an Article 22 decision
- [Dun and Bradstreet Austria, Case C-203/22 (CJEU, 27 February 2025)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:62022CJ0203): the Article 15(1)(h) standard for explaining an automated decision
- [Garante v OpenAI (decision announced 20 December 2024, annulled by the Court of Rome, judgment 4153/2026)](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10085432): transparency enforcement against a generative service, and its annulment
- [Garante v Luka Inc. (Replika), order of 10 April 2025](https://www.edpb.europa.eu/news/ai-the-italian-supervisory-authority-fines-company-behind-chatbot-replika_en): no legal basis identified, and design duties on a consumer generative product
- [Clearview AI (Garante, 10 February 2022)](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9751323): scraped biometric data, and the failure of a commercial legitimate interest
- [Garante v Foodinho, order of 5 July 2021](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/9677377): Article 35 and contestability in algorithmic management
- [Garante v Foodinho, further order of 22 November 2024](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10074840): geolocation and the contestability of algorithmic decisions
- [Meta Ireland transfers (Irish Data Protection Commission, 22 May 2023)](https://www.dataprotection.ie/news-media/press-releases/Data-Protection-Commission-announces-conclusion-of-inquiry-into-Meta-Ireland): transfers outside the EEA, and a binding decision driving the outcome
