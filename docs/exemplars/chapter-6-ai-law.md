> **Proposal, not yet in the manuscript.** This replaces the Chapter 6 block in `aigp-book.md`. Original: 7,494 words. Everything below is manuscript content.

## Chapter 6: The Law Written for AI

Chapter 5 showed that "no AI law here" never means "no law here". This chapter turns to the law that names AI: the EU Artificial Intelligence Act sorts systems into risk tiers, loads a compliance chain onto high-risk uses, imposes transparency duties on systems that talk to people or make content, and regulates general-purpose models separately. Beside it sit South Korea's framework statute and the US federal and state patchwork.

The Act exists in two versions. **As enacted**, it is Regulation (EU) 2024/1689. **As amended** by the Digital Omnibus on AI, Regulation (EU) 2026/1744 in force 27 July 2026, it moved the high-risk dates and simplified several duties; where they differ this chapter says which it means, and 6.10 sets the two calendars side by side.

Duties attach to roles, not organizations, and one organization can hold several roles on one system. They also attach to dates, so an AI compliance plan is a calendar before it is a control list.

- 6.1 sets out the risk-based architecture, and 6.2 and 6.3 cover the Article 5 prohibitions and the two routes into the high-risk tier.
- 6.4 to 6.6 cover what high-risk status obliges: provider duties, deployer duties including the fundamental rights impact assessment, and the deemed-provider rule.
- 6.7 to 6.9 cover general-purpose AI, Article 50 transparency, and penalties and enforcement; 6.10 sets the two calendars.
- 6.11 to 6.13 turn to South Korea, the United States, and why a US group has to care.

| Case | Citable as | Drawn on for |
|---|---|---|
| EU Artificial Intelligence Act | Regulation (EU) 2024/1689 | The risk tiers, the Article 5 list, the role-based duties |
| Digital Omnibus on AI | Regulation (EU) 2026/1744, in force 27 July 2026 | Deferred high-risk dates, December 2026 additions |
| AI Act prohibited practices | Article 5, Regulation (EU) 2024/1689 | The closed list, the workplace carve-out |
| GPAI duties and the GPAI Code of Practice | Articles 53 and 54, Regulation (EU) 2024/1689 | Downstream documentation; what a code proves |
| South Korea AI Framework Act | Act No. 20676, in force 22 January 2026 | Promotion-first statute, overlapping categories |
| Executive Order 14365 | 90 FR 58499, signed 11 December 2025 | Federal posture; an order cannot preempt |
| TAKE IT DOWN Act | Public Law 119-12, enacted 19 May 2025 | The 48-hour platform removal duty |
| Colorado ADMT law | Senate Bill 26-189, signed 14 May 2026 | Repealed and reenacted SB 24-205 before it operated |
| Texas TRAIGA | House Bill 149, effective 1 January 2026 | Intent-based bans; frameworks as a defence |
| California frontier and transparency laws | Senate Bill 53; Senate Bill 942; Assembly Bill 2013 | Compute-based thresholds, provenance |

### 6.1 The Risk-Based Architecture

The Act regulates a system together with its purpose, not AI as a technology, and sorts purposes into four tiers, with duties rising with the risk.

| Tier | Test | Consequence |
|---|---|---|
| Prohibited | Unacceptable risk to rights or safety | Banned outright (Article 5) |
| High-risk | Annex I safety components, or Annex III use cases | The full Chapter III obligations chain |
| Limited | Interaction with users, or synthetic content | Transparency duties (Article 50) |
| Minimal | Negligible risk | No new obligations, voluntary codes encouraged |

### 6.2 Prohibited Practices and the Two December Additions

Article 5 bans a closed list outright. As enacted, Article 5(1) lists eight: subliminal or purposefully manipulative techniques that distort behaviour; exploitation of vulnerabilities from age, disability, or social or economic situation; social scoring by public or private actors; individual criminal-offence risk prediction based solely on profiling; untargeted scraping of facial images for recognition databases; emotion recognition in workplaces and educational institutions; biometric categorisation by sensitive traits; and real-time remote biometric identification in publicly accessible spaces, with narrow law-enforcement exceptions.

The Digital Omnibus adds two prohibitions, Article 5(1)(ba) and (bb), from 2 December 2026: nudification (AI generating or manipulating realistic intimate or sexual imagery of an identifiable person without explicit consent) and AI generating child sexual abuse material. Each catches a provider only where that is the system's intended purpose or a foreseeable outcome without reasonable safeguards. Eight as enacted, ten as amended.

Emotion recognition is banned only in workplaces and educational institutions; elsewhere it carries a deployer disclosure duty under Article 50. The prohibition regime has applied since 2 February 2025.

### 6.3 Two Routes to High-Risk

Under **Annex I**, a system is high-risk where it is a safety component of a product covered by EU harmonisation law, or is itself such a product: machinery, medical devices, vehicles and similar regulated goods.

Under **Annex III**, it is high-risk where used in a listed area, whatever it is built from: biometrics; critical infrastructure (energy, water, transport); education and vocational training; employment, worker management and access to self-employment; essential private and public services including credit scoring and welfare; law enforcement; migration, asylum and border control; and the administration of justice and democratic processes.

Article 6(3) lets a listed system escape the tier where it poses no significant risk to health, safety or fundamental rights, but never where it profiles natural persons, and Article 6(4) requires the provider to document that assessment before placing the system on the market and make it available to authorities.

### 6.4 Provider Duties Under Articles 8 to 21

A high-risk provider owes a chain of duties from before market placement through the system's life.

| Article | Duty | What it requires |
|---|---|---|
| 8 to 10 | Risk management, data governance | An ongoing risk-management system covering known and reasonably foreseeable risks including misuse; training, validation and testing data that are relevant, representative and as free from errors and bias as possible |
| 11 to 13 | Documentation, logging, instructions | Technical documentation under Annex IV; automatic logging for monitoring and audit; instructions stating intended purpose, limits, oversight responsibilities, metrics and contact points |
| 14 and 15 | Oversight, accuracy, robustness, cybersecurity | Design for anomaly detection, override or shut-off and review of consequential decisions; declared accuracy, robustness and resilience |
| 16 to 21 | Quality management, records, corrective action | A quality management system with policies, corrective and preventive action, documentation control and reporting; records kept; authorities assisted |
| 43, 48, 49, 72, 73 | Conformity, marking, registration, monitoring | Conformity assessed, CE marking applied, registration in the EU database; post-market monitoring and serious incident reporting |

Article 17 is the duty candidates most often underestimate: a management system duty, so a policy binder does not satisfy it. EN 18286:2026, the harmonised standard for that purpose, gives a **presumption of conformity** only once cited in the Official Journal. Conformity assessment runs under Article 43: internal control without a notified body for most Annex III systems, and a notified body for Annex I product-embedded systems and for systems where harmonised standards were not applied.

### 6.5 Deployer Duties and the Fundamental Rights Impact Assessment

Article 26 deployer duties: use per the instructions for use; assign oversight to people with the necessary competence, training and authority (Article 26(2)); ensure input data relevant and sufficiently representative; monitor operation and stop use or tell the provider where a risk emerges; keep logs for the period the article sets; inform workers' representatives and affected workers before a workplace system enters service; cooperate with authorities. Articles 14 and 26(2) divide the work: the provider designs for oversight, the deployer staffs it.

The **fundamental rights impact assessment** (FRIA) in Article 27 binds exactly two groups:

- bodies governed by public law, and private entities providing public services, deploying any Annex III high-risk system other than a point 2 critical-infrastructure system, and
- any deployer of an Annex III point 5(b) or 5(c) system, being creditworthiness assessment and risk assessment and pricing in life and health insurance.

A private employer deploying a high-risk recruitment tool owes no FRIA; a private lender deploying credit scoring does. It must precede first use and cover the processes and frequency of use, the categories of persons likely to be affected, the specific risks of harm to them, the oversight measures in place, and the fallbacks if those risks materialise. Article 27(4) lets it build on an existing data protection impact assessment; Chapter 12 compares the FRIA, the DPIA and an ISO/IEC 42005 assessment.

### 6.6 The Deemed Provider Under Article 25(1)

A deployer, importer, distributor or other third party becomes the **provider** of a high-risk system under Article 25(1) where any one of three things happens:

1. it puts its own name or trademark on a high-risk system already placed on the market;
2. it makes a substantial modification to a high-risk system already placed on the market;
3. it modifies the intended purpose of a system, including a general-purpose AI system, so that the system becomes high-risk.

The consequence is the full provider chain: risk-management system, technical documentation, conformity assessment, CE marking and registration; the original provider must cooperate and supply what the new provider needs.

### 6.7 General-Purpose AI Models

A **general-purpose AI model** serves multiple intended purposes and can be integrated into a variety of downstream systems: large language models, vision foundation models and multimodal models. The Commission's July 2025 guidelines treat a model trained with more than 10^23 FLOP that can generate language, images or video as indicatively general-purpose.

Article 53 obliges every provider to prepare:

- technical documentation of the model, its training and testing process and its capabilities (Article 53(1)(a), Annex XI);
- information letting downstream providers understand its capabilities and limits and comply with their own duties (Article 53(1)(b), Annex XII);
- a **copyright policy** honouring Article 4(3) text-and-data-mining reservations, including through state-of-the-art technologies (Article 53(1)(c));
- a public, sufficiently detailed **training content summary** on the AI Office template (Article 53(1)(d)).

Article 53(2) lifts only points (a) and (b) for open-source models and nothing for systemic-risk models, so the copyright policy and the training summary bind open-source models too, wherever training happened. A non-EU provider must appoint an authorised representative in the Union under Article 54.

Systemic risk is presumed from scale: cumulative training compute above 10^25 FLOP creates a rebuttable presumption of high-impact capabilities under Article 51(2), and the provider must notify the Commission within two weeks. Article 55(1) adds model evaluation including adversarial testing, assessment and mitigation of systemic risks, serious-incident reporting to the AI Office, and adequate cybersecurity. Adversarial testing is documented, not published; external audits, public red-team reports and researcher APIs are Code of Practice extras, not Article 55 duties.

Articles 53(4) and 55(2) reserve a presumption of conformity for harmonised standards; the **GPAI Code of Practice** is a voluntary, expert-prepared tool the Commission assesses as adequate, and adherence is evidence of compliance rather than a presumption. Non-signatories must demonstrate "alternative adequate means".

Timing follows the general-purpose track: obligations since 2 August 2025, Commission enforcement including Article 101 fines from 2 August 2026, and models placed on the market before 2 August 2025 with until 2 August 2027 under Article 111(3). An organization integrating a general-purpose model must verify the model's conformity against its published documentation, reassess whether its own use raises the risk classification, and keep its own transparency duties, even where the model is open-source.

### 6.8 Transparency Under Article 50

Article 50 splits the transparency duties by role. Providers must design systems so people are told they are interacting with AI (Article 50(1)) and must mark synthetic audio, image, video or text output in a machine-readable, detectable form (Article 50(2)). Deployers must disclose deepfakes (Article 50(4)), disclose their use of emotion recognition or biometric categorisation, and flag AI-generated text published on matters of public interest unless a human reviewed it under editorial responsibility. The obligations apply from 2 August 2026, and generative systems on the market before that date have until 2 December 2026 for Article 50(2) marking, a transitional rule added by the Digital Omnibus.

An opt-out or human alternative is good practice but not an Article 50 requirement, which makes it a likely distractor. Emotion recognition outside workplaces and schools is disclosed, not prohibited: the same technology moves between the Article 5 and Article 50 regimes with where it is used.

### 6.9 Penalties and Enforcement

Enforcement is shared. The **European AI Office**, inside the Commission, supervises and enforces the general-purpose AI obligations under an exclusive power in Article 88, issues guidance and runs the codes of practice. **National competent authorities**, one or more per member state, conduct market surveillance for everything not reserved to the AI Office; the European Data Protection Supervisor covers AI systems used by EU institutions. As amended, the AI Office also gained exclusive competence over AI systems built on a general-purpose model by the same provider or group.

Market surveillance authorities can require access to technical documentation, carry out unannounced inspections, mandate corrective action, suspend or prohibit marketing, require withdrawal or recall, and require notification of affected users. Affected individuals can complain to a market surveillance authority, and civil liability runs through national law and the revised product liability regime Chapter 5 covers.

Fines follow a three-step ladder; each ceiling is the higher of a fixed sum or a percentage of total worldwide annual turnover.

| Tier | Ceiling |
|---|---|
| Breach of the Article 5 prohibitions | EUR 35 million or 7 percent |
| Most other obligations, including Article 101 fines on general-purpose AI providers | EUR 15 million or 3 percent |
| Supplying incorrect, incomplete or misleading information to authorities | EUR 7.5 million or 1 percent |

SMEs and start-ups get the lower figure on every tier; small mid-caps, as amended, get it on the two lower tiers only, not for prohibited practices. Authorities weigh the nature and significance of the breach, intent or negligence, history and cooperation; voluntary disclosure can mitigate.

As at September 2026 no EU AI Act fine had been announced by any official source, and the AI Office describes its first instrument as a technical compliance dialogue. The Commission's enforcement powers, including Article 101 fines of up to EUR 15 million or 3 percent, have applied since 2 August 2026.

### 6.10 The Two Calendars

Most date questions turn on whether the obligation asked about is the enacted one or the amended one.

| Date | As enacted (2024/1689) | As amended (2026/1744) |
|---|---|---|
| 12 Jul and 1 Aug 2024 | Published in the Official Journal, then entry into force; no obligations yet | Same |
| 2 Feb 2025 | Prohibitions and AI literacy apply | Same, literacy duty softened from 27 Jul 2026 |
| 2 Aug 2025 | GPAI obligations, governance bodies, penalty regime except Article 101, notified bodies | Same |
| 27 Jul 2026 | No milestone | Digital Omnibus enters into force |
| 2 Aug 2026 | Annex III high-risk, Article 50 transparency, Commission GPAI enforcement including Article 101 | Article 50 and GPAI enforcement only; high-risk rules and sandboxes moved |
| 2 Dec 2026 | No milestone | Two new Article 5 prohibitions, and the Article 50(2) marking deadline for legacy generative systems |
| 2 Aug 2027 | Annex I high-risk, legacy GPAI deadline | Legacy GPAI deadline, national sandboxes operational, Annex I moved to 2028 |
| 2 Dec 2027 | No milestone | Annex III high-risk rules, being Chapter III Sections 1 to 3, including deployer duties and FRIAs |
| 2 Aug 2028 | No milestone | Annex I product-embedded high-risk rules |
| 2 Aug 2030 | Legacy high-risk systems for public authorities | Same |

Annex III rules due on 2 August 2026 now apply from 2 December 2027, and Annex I rules from 2 August 2028. Three transitional rules govern systems already in use: a high-risk system placed on the market before its category's date is caught only if its design changes significantly afterwards (Article 111(2)), though systems for public authorities must comply by 2 August 2030 regardless; generative systems on the market before 2 August 2026 have until 2 December 2026 for marking; and legacy general-purpose models keep their 2 August 2027 deadline under Article 111(3).

The Omnibus also softened the Article 4 literacy duty into a duty to take supportive measures from 27 July 2026, added Article 4a widening the legal basis for processing special-category personal data for bias detection, and let a FRIA reuse DPIA content. It did not move Article 50, which still starts on 2 August 2026.

### 6.11 South Korea

Korea's instrument is the Framework Act on the Development of Artificial Intelligence and the Creation of a Foundation for Trust, Act No. 20676, in force 22 January 2026; commentary's "AI Basic Act" is not the official title. Its regulator is the Ministry of Science and ICT (MSIT), under an Enforcement Decree. It reaches conduct abroad affecting the Korean market and regulates "AI business operators", divided into AI developers and AI-using business operators.

Korea has no four-tier ladder and no prohibited practices; duties attach to overlapping categories, and one system can fall into several at once. **Generative AI** owes users advance notice, output labelling and a clear notice for realistic synthetic sound, images or video. **High-impact AI** needs a listed domain plus significant risk to life, safety or fundamental rights; the domains include energy, drinking water, health care, medical devices, nuclear, biometrics for criminal investigation, hiring and loan screening, transport, public-sector decisions, and student assessment in early and secondary education.

High-impact operators owe a risk-management plan, an explanation plan covering final outputs, key criteria and an overview of the training data, user-protection measures, human management and supervision, retention of documents for the period the Act sets, and further measures the presidential committee resolves. The first four must be posted, with trade secrets omitted. A downstream operator making no significant functional change is deemed compliant with the first three, but human oversight and documentation stay with it.

Article 35's impact assessment is best efforts only: operators "shall make efforts", skipping it carries no fine, and the incentive is a procurement preference, not a penalty. The failures carrying administrative fines are narrow: a missing advance notice, a missing domestic representative for a foreign operator without a Korean place of business, and ignoring an MSIT order.

Reported figures for the fine cap, the representative thresholds and the training-compute bar behind what commentary calls **"high-performance" AI** could not be confirmed from the official English text of the Act or its Enforcement Decree, so they are not stated here. Two framing points are confirmed and tested: "high-performance" AI is a commentators' label rather than statutory wording, and MSIT's announced grace period is policy rather than statute, so the obligations applied from entry into force. For scale, Korea has no conformity assessment, no CE marking and no registration database.

### 6.12 The United States

The United States has no horizontal AI act and no preemption statute. Executive Order 14365, signed 11 December 2025 and published at 90 FR 58499, sets a minimally burdensome national framework policy and a Justice Department task force to litigate against state AI laws; an order cannot itself preempt, so it seeks a congressional preemption statute, and state laws remain enforceable as at September 2026.

The one federal AI-specific statute is the TAKE IT DOWN Act, Public Law 119-12, enacted 19 May 2025: it criminalises publishing non-consensual intimate visual depictions, expressly including AI digital forgeries, and requires covered platforms to delete the material and duplicates within 48 hours of a valid request, with Federal Trade Commission enforcement from 19 May 2026.

Federal guidance is reversible: Consumer Financial Protection Bureau Circulars 2022-03 and 2023-03 required creditors using complex algorithms to give specific, accurate adverse action reasons and barred a sample form that obscured the real reason, and the Bureau withdrew them in May 2025, leaving the adverse action statute and Regulation B in force.

State and local law falls into three groups. **Decision laws** govern AI that shapes hiring, lending, housing and similar outcomes.

| Law | Regulates | Operative | Notable feature |
|---|---|---|---|
| Colorado Senate Bill 26-189 | Developer and deployer duties for automated decision-making technology | Signed 14 May 2026, decisions from 1 January 2027 | Repealed and reenacted SB 24-205 before it ever operated |
| Texas House Bill 149 (TRAIGA) | Conduct: AI built or deployed with intent to discriminate, incite harm or infringe rights | Effective 1 January 2026 | Disparate impact alone is insufficient; framework compliance is a defence |
| New York City Local Law 144 | Employers and employment agencies using automated employment decision tools | Enforcement from 5 July 2023 | Bias audit within one year, public summary, candidate notice |
| Illinois House Bill 3773 | Employment AI with a discriminatory effect on a protected class | Operative 1 January 2026 | Bars zip code as a proxy for a protected class |

The Colorado trap: SB 24-205 never took effect. Senate Bill 25B-004 moved its operative date from 1 February 2026 to 30 June 2026, and Senate Bill 26-189 repealed and reenacted the regime before then, so SB 24-205's reasonable-care and mandatory impact assessment duties never applied. SB 26-189 keeps developer documentation duties and deployer duties of pre-use notice, post-adverse-outcome disclosure, data correction and meaningful human review, attorney-general enforced.

Local Law 144 is the earliest operational US AI audit requirement: an automated employment decision tool may not be used unless it has had a bias audit within one year, the audit is publicly available, and notices have gone to candidates or employees. It reports selection rates and impact ratios but sets no pass-or-fail threshold, so it mandates disclosure of disparate impact, not its elimination. Illinois covers the other side of the transaction, requiring advance notice, an explanation of the analysis, consent, and limits on distribution and retention under the Artificial Intelligence Video Interview Act.

**Frontier-model safety laws** define their threshold by scale rather than use. California Senate Bill 53, signed 29 September 2025, and the New York RAISE Act require large developers to publish and adhere to a frontier AI framework, report critical safety incidents, and permit compliance through equivalent federal standards; both are attorney-general enforced, with no private right of action, and classify by training compute and developer revenue.

**Transparency and provenance laws** address content. California Assembly Bill 2013 requires generative-AI developers to publish documentation of training data, including sources and whether it is licensed or scraped. California Senate Bill 942, operative 2 August 2026, requires large covered providers to offer a free AI detection tool, place latent provenance disclosures in generated image, video and audio content, and offer an optional visible label, moving provenance from voluntary practice to statutory duty, the US analogue of Article 50 marking on the same date.

### 6.13 Why a US Group Has to Care

The EU Act reaches beyond the Union, and the test is placement or effect rather than establishment: it covers non-EU entities that place AI systems on the EU market, make them available to users in the Union, deploy them outside the Union where the output is used in the Union, or put general-purpose AI models on the market for EU-facing applications.

A non-EU provider owes the conformity assessment, technical documentation, CE marking, registration and transparency duties exactly as an EU provider does, and must appoint an **EU authorised representative** in the Union under Article 22, with the same duty for a non-EU general-purpose AI provider under Article 54. The representative is the addressee authorities and users reach; appointing one reduces no duty, it adds one.

For a group under more than one regime, find the highest bar, build to it once, and add the local extras. The EU high-risk chain is that bar.

### Exam Focus

This chapter maps to BOK v2.1 competency II.C, the main elements of AI-specific laws, which v2.1 widened to include South Korea's framework statute and US federal and state AI laws that apply to private-sector organizations.

- Article 5 lists eight prohibitions as enacted and ten as amended, and emotion recognition is banned only in workplaces and education, carrying a deployer disclosure duty elsewhere.
- Annex I (product safety components) and Annex III (listed uses) are separate routes to high-risk, and the Article 6(3) exit is never available to a system that profiles natural persons. A provider relying on Article 6(3) must document the assessment before placing the system on the market.
- Duties attach to roles: provider, deployer, importer, distributor. Article 25(1) makes a party that puts its name or trademark on a high-risk system, substantially modifies one, or changes its intended purpose into a high-risk use the provider, with the full chain attached.
- Article 14 is the provider's oversight design duty and Article 26(2) is the deployer's oversight staffing duty.
- The Article 27 FRIA binds exactly two groups: public bodies and private providers of public services deploying any Annex III high-risk system except a point 2 infrastructure system, and any deployer of an Annex III point 5(b) or 5(c) system. It does not bind every high-risk deployer.
- Integrating a general-purpose AI model makes an organization the provider of its own AI system, never the provider of the model.
- Open-source general-purpose models are not exempt from the copyright policy or the training summary, because Article 53(2) lifts only points (a) and (b) and lifts nothing for systemic-risk models. 10^23 FLOP indicates a general-purpose model, and 10^25 FLOP triggers the rebuttable systemic-risk presumption.
- Adversarial testing must be conducted and documented, not published, and external audits, public red-team reports and researcher access are Code of Practice extras that some study material wrongly presents as Article 55 duties.
- Adherence to an adequate GPAI Code of Practice is evidence of compliance; a presumption of conformity is a different instrument, which Articles 53(4) and 55(2) reserve for harmonised standards.
- Fines take the higher of two figures, except that SMEs and start-ups get the lower figure on every tier and small mid-caps, as amended, on the EUR 15 million and EUR 7.5 million tiers only.
- Every date question turns on "as enacted" or "as amended": general application 2 August 2026, Annex III high-risk from 2 December 2027, Annex I from 2 August 2028, general-purpose AI since 2 August 2025 with legacy models to 2 August 2027, Article 4 literacy since 2 February 2025 with the softened duty from 27 July 2026, and Article 111(2) for legacy systems.
- The Digital Omnibus is Regulation (EU) 2026/1744, adopted 8 July 2026 and in force 27 July 2026, and it did not move Article 50, which still starts on 2 August 2026.
- In Korea the impact assessment is best efforts rather than mandatory, "high-performance" AI is a commentators' label rather than statutory wording, and MSIT's grace period is policy rather than statute. Reported figures for the fine cap, the representative thresholds and the compute bar are not confirmed from the official English text and should not be relied on as settled.
- In the United States an executive order cannot preempt state law by itself, Colorado impact assessments and a duty of reasonable care belong to the never-effective SB 24-205 and not to SB 26-189, and the recurring contrasts are intent against effect (Texas TRAIGA against Illinois HB 3773) and disclosure against elimination of disparate impact (New York City Local Law 144).
- US federal AI governance is largely reversible guidance, illustrated by the withdrawal of the CFPB's algorithmic adverse action circulars in May 2025 while the underlying statute and Regulation B remained in force.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): AI Act Milestone: February 2, 2025, AI Act Milestone: August 2, 2026, AI Act Milestone: December 2, 2027, AI Act Milestone: August 2, 2028, AI Distributor, AI Importer, AI Provider, AI Business Operator (Korea), Best-Efforts Impact Assessment (Korea), Bias Audit (NYC LL 144), CE Marking, Conformity Assessment, Digital Omnibus on AI (Regulation 2026/1744), Domestic Representative (Korea AI Basic Act), EU AI Act Penalty Tiers, European AI Office, Fundamental Rights Impact Assessment, General-Purpose AI (GPAI), High-Impact AI (Korea), High-Performance AI (Korea), Market Surveillance Powers, National Competent Authorities (EU AI Act), Nudification and CSAM Prohibitions, Post-Market Monitoring, Prohibited AI, Systemic Risk (GPAI), Technical Documentation, Watermarking.

### Further Reading

- [Regulation (EU) 2024/1689 (EU AI Act)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng): the risk tiers in Articles 5, 6 and the Annexes, the provider and deployer duties, and Article 50
- [Digital Omnibus on AI, Regulation (EU) 2026/1744](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng): the deferred high-risk dates and the two new Article 5(1)(ba)-(bb) prohibitions
- [AI Act Article 5, prohibited practices](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-5): the closed list of bans and the workplace and education carve-out
- [AI Act Article 43, conformity assessment](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-43): internal control against notified-body assessment
- [AI Act Article 50, transparency obligations](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50): the provider and deployer split, and the marking duty
- [AI Act Article 53, obligations for providers of general-purpose AI models](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-53): technical documentation, downstream information, copyright policy and training summary
- [AI Act Article 99, penalties](https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-99): the three-tier ladder and the higher-of-two rule
- [AI Act implementation timeline (AI Act Service Desk)](https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act): when each obligation starts, as enacted and as amended
- [European Commission, enforcement of the AI Act](https://digital-strategy.ec.europa.eu/en/policies/enforcement-ai-act): the AI Office, the national authorities and the supervisory architecture
- [GPAI Code of Practice (European Commission)](https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai): the voluntary route to demonstrate compliance with Articles 53 and 55
- [Code of Practice on marking and labelling of AI-generated content](https://digital-strategy.ec.europa.eu/en/news/commission-publishes-code-practice-marking-and-labelling-ai-generated-content): the voluntary instrument behind Article 50(2) marking
- [Guidelines on transparency obligations for providers and deployers](https://digital-strategy.ec.europa.eu/en/library/guidelines-transparency-obligations-providers-and-deployers-ai-systems): the Commission's Article 50 guidance of 20 July 2026
- [EN 18286, AI quality management system (CEN-CENELEC)](https://www.cencenelec.eu/news-events/news/2026/en-in-the-spotlight/2026-07-30-ai-quality-management/): the first harmonised standard produced for the Act
- [ISO/IEC 42006:2025](https://www.iso.org/standard/42006): requirements for the bodies that audit and certify AI management systems
- [South Korea, Framework Act on the Development of Artificial Intelligence and the Creation of a Foundation for Trust (KLRI English text)](https://elaw.klri.re.kr/eng_service/lawView.do?hseq=71019&lang=ENG): the authoritative English translation of Act No. 20676
- [Executive Order 14365, Ensuring a National Policy Framework for Artificial Intelligence](https://www.federalregister.gov/documents/2025/12/16/2025-23092/ensuring-a-national-policy-framework-for-artificial-intelligence): the federal policy and the litigation task force
- [TAKE IT DOWN Act, Public Law 119-12](https://www.congress.gov/119/plaws/publ12/PLAW-119publ12.pdf): the federal criminal ban on non-consensual intimate deepfakes and the 48-hour platform duty
- [CFPB withdrawal of interpretive rules and circulars (12 May 2025)](https://www.federalregister.gov/documents/2025/05/12/2025-08286/interpretive-rules-policy-statements-and-advisory-opinions-withdrawal): the algorithmic adverse action position withdrawn
- [Colorado Senate Bill 26-189](https://leg.colorado.gov/bills/sb26-189): the automated decision-making technology regime that repealed and reenacted SB 24-205
- [Colorado Senate Bill 25B-004](https://leg.colorado.gov/bills/sb25b-004): the act that postponed SB 24-205's operative date to 30 June 2026
- [Colorado Attorney General, AI and ADMT rulemaking](https://coag.gov/ai/): the enforcing authority's page on the new regime
- [Texas TRAIGA, House Bill 149](https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm): intent-based conduct bans and framework compliance as a defence
- [New York City Local Law 144, DCWP automated employment decision tools](https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page): the bias audit, publication and notice duties
- [Illinois House Bill 3773](https://www.ilga.gov/ftp/legislation/103/BillStatus/HTML/10300HB3773.html): discriminatory effect in employment decisions, and the zip code prohibition
- [Illinois Artificial Intelligence Video Interview Act, 820 ILCS 42](https://www.ilga.gov/Legislation/ILCS/Articles?ActID=4015&ChapterID=68): advance notice, explanation and consent for AI video analysis
- [California Senate Bill 53, Transparency in Frontier Artificial Intelligence Act](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202520260SB53): the compute-based frontier threshold and the incident-reporting duty
- [California Senate Bill 942, California AI Transparency Act](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=202320240SB942): latent provenance disclosure and the AI detection tool
- [California Assembly Bill 2013, generative AI training data transparency](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB2013): the developer duty to document training data
