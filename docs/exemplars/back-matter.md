> **Proposal, not yet in the manuscript.** These replace the two appendices that survive in `aigp-book.md`, renumbered. Everything below is manuscript content.

# Appendix A: Standards and Frameworks at a Glance

The chapters teach each of the instruments below in context, showing how they fit together and where each one bites. This appendix does a narrower job. It sets them side by side so that you can check quickly who issued each one, whether it binds anyone, whether an organization can be certified against it, and which question it exists to answer. The last column sends you to the section that holds the detail, and the detail is what settles a hard question.

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


# Appendix B: Glossary

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
