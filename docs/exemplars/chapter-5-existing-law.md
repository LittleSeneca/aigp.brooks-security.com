> **Proposal, not yet in the manuscript.** This replaces the Chapter 5 block in `aigp-book.md`. Original: 4,700 words. Everything below is manuscript content.

## Chapter 5: Existing Law That Reaches AI

These are the laws that never mention artificial intelligence and reach it anyway: copyright, employment discrimination, fair lending, consumer protection and product liability. None mentions model, algorithm or training data; they apply because the conduct they regulate is not new.

"There is no AI law here" never means "no law here." A US borrower declined by an AI underwriter has no GDPR rights, and has ECOA rights instead. A vendor that promises its model always gets the answer right answers to the FTC Act, and a model trained on scraped books answers to copyright.

The four bodies of law arrive together on a single use case. Domain II.B is the competency this chapter carries; Chapter 6 sits on top.

- Section 5.1 covers intellectual property: training as reproduction and distribution, the fair use four factors, output ownership, and the split on whether a model contains copies.
- Section 5.2 covers non-discrimination: Title VII's two theories, the four-fifths rule as a screening heuristic, ECOA and Regulation B adverse-action reasons, and discrimination through a proxy rather than an attribute.
- Section 5.3 covers consumer protection: FTC Act section 5 deception and unfairness, claim substantiation, UDAAP and the state analogues.
- Section 5.4 covers product liability: whether software is a product, strict liability and the defect test, and the EU Product Liability Directive 2024/2853.
- Section 5.5 gives the order of operations: where to look first when a new AI use case appears.

| Case | Citable as | Drawn on for |
|---|---|---|
| Bartz v. Anthropic PBC | N.D. Cal., No. 3:24-cv-05417; fair use order 23 June 2025; settlement finally approved 20 July 2026 | Fair use for training, and unlawful acquisition of the corpus |
| Thomson Reuters v. Ross Intelligence | D. Del., No. 1:20-cv-613-SB, opinion 11 February 2025 | Market substitution, and where a commercial training use fails |
| Getty Images v. Stability AI | [2025] EWHC 2863 (Ch), 4 November 2025 | A model is not a copy of its training data; copyright is territorial |
| Thaler v. Perlmutter | D.C. Cir., No. 23-5233, 18 March 2025; certiorari denied 2 March 2026 | Human authorship and output ownership |
| GEMA v. OpenAI | Regional Court of Munich I, 42 O 14139/24, 11 November 2025 | Memorisation as reproduction, and the limits of the TDM exception |
| New York Times Co. v. Microsoft | S.D.N.Y., No. 1:23-cv-11195-SHS, complaint 27 December 2023 | Training and output claims pleaded together |
| Mobley v. Workday | N.D. Cal., No. 3:23-cv-00770-RFL, collective certification 16 May 2025 | Title VII and ADA exposure from a vendor's screening tool |
| Obermeyer et al. health algorithm study | Science, 366(6464), 25 October 2019 | Discrimination through a proxy and a label, not an attribute |
| NYDFS Apple Card report | New York Department of Financial Services, 23 March 2021 | Fair lending review of a third-party underwriting model |
| FTC Operation AI Comply | FTC press release, 25 September 2024 | Deceptive AI capability claims under section 5 |
| FTC v. Workado | FTC order, 28 April 2025 | Substantiation of an accuracy claim |
| Directive (EU) 2024/2853 | Revised Product Liability Directive, adopted 23 October 2024 | Software as a product, and defect in an adaptive system |
| Benavides v. Tesla | S.D. Fla., No. 1:21-cv-21940, verdict 1 August 2025 | Defective driver-assistance software, and fault allocation |

### 5.1 Intellectual Property

Training a model is copying, so the ordinary copyright questions follow: was the copy authorised, does an exception apply, does an output infringe, who owns it. Three touchpoints follow: the **inputs**, the **model** and the **outputs** (infringement or ownership).

#### Training, and the split from acquisition

Training reproduces the corpus, so copyright splits into two questions courts keep apart: whether training is lawful, and whether the acquisition was lawful. US courts test training under the four **fair use** factors: purpose and character of the use (transformative or duplicative), nature of the work, amount used, and effect on the market, including dilution by competing output.

**Bartz v. Anthropic PBC** held that training on lawfully acquired books was transformative fair use, but refused to excuse the separate downloading and retention of a pirated library; it settled for USD 1.5 billion, approved 20 July 2026.

**Thomson Reuters v. Ross Intelligence** went the other way: no fair use for training a legal research tool on Westlaw headnotes, because Ross built a market substitute and the fourth factor, market harm, weighed against it.

#### The model: a transatlantic divergence

**Getty Images v. Stability AI** (English High Court) held that diffusion model weights are not an "infringing copy" of the training images, because they store no recognisable copy of a work.

**GEMA v. OpenAI** (Regional Court of Munich) went the other way: lyrics memorised in the model parameters and reproduced in outputs and chat histories were reproductions. The TDM exception covers building the training corpus, not memorisation, and responsibility for outputs from simple prompts sits with the operator.

#### Text and data mining

The EU has no fair use; Directive (EU) 2019/790 provides two **text and data mining** (TDM) exceptions. Article 3 covers research organisations and cultural heritage institutions, with no opt-out. Article 4 covers anyone with lawful access, including commercial training, unless the rightholder has reserved the right "in an appropriate manner, such as machine-readable means" (Article 4(3)). AI Act Article 53(1)(c) and (d) require general-purpose model providers to honour those reservations and publish a training-content summary, and open-source models are not exempt.

#### Output ownership and human authorship

**Thaler v. Perlmutter** holds that the Copyright Act requires a work authored in the first instance by a human being, so an AI system cannot itself be the author; certiorari was denied. US Copyright Office guidance adds that prompts alone are not authorship, and that AI-generated material must be disclosed.

#### Trade secrets and open-source licences

**Trade secret** law protects datasets, architecture, hyperparameters, fine-tuning methods and prompts only while they are genuinely secret, so transparency duties collide with it. The Defend Trade Secrets Act (18 U.S.C. 1836) and Directive (EU) 2016/943 require secrecy, value from it, and reasonable guarding.

### 5.2 Non-Discrimination

US law has two theories, and AI triggers both. **Disparate treatment** is intentional discrimination, including deliberate use of a variable that stands in for a protected class. **Disparate impact** needs no intent: a facially neutral practice that disproportionately harms a protected group is unlawful unless justified.

#### Employment and Title VII

Title VII writes disparate impact into the statute at section 703(k) (42 U.S.C. 2000e-2(k)) as three steps: the plaintiff shows a particular practice causes the impact; the employer shows it is job-related and consistent with business necessity; the plaintiff can still win by showing a refused, less discriminatory alternative. The standard is statutory, so an executive order cannot remove it.

The **four-fifths rule** (Uniform Guidelines on Employee Selection Procedures, 29 CFR 1607.4) is a screening heuristic, not a legal standard: a selection rate for a protected group below four-fifths, or 80 percent, of the rate for the highest group is generally regarded as evidence of adverse impact. It flags a disparity for investigation, not a clearance.

**Mobley v. Workday** conditionally certified a nationwide collective alleging that an AI-based applicant screening system discriminated on race, age and disability: the employer is exposed for the tool it adopts even when a vendor built it.

#### The Americans with Disabilities Act

Title I of the Americans with Disabilities Act (42 U.S.C. 12112) prohibits discrimination against a qualified individual with a disability and requires reasonable accommodation unless it imposes undue hardship. AI screening implicates two duties: a qualification standard that screens out a person with a disability must be job-related, consistent with business necessity and not capable of being met with reasonable accommodation; and a person disadvantaged by an automated screen may be entitled to the interactive process.

#### Credit, adverse action and fair lending

The **Equal Credit Opportunity Act** (ECOA, 15 U.S.C. 1691) prohibits discrimination in credit on protected bases and places two duties on an AI lender: no intentional discrimination or deliberate proxy use, and specific principal reasons for adverse action under Regulation B (12 CFR 1002.9). The second is an explainability duty: the reasons must relate to and accurately describe the factors actually considered.

The **NYDFS Apple Card report** reviewed underwriting data for about 400,000 applicants after complaints that an underwriter gave women lower credit limits, and found no fair lending violation.

#### Proxies and labels

A **proxy** is a neutral variable that correlates with a protected class, and discrimination can also enter through the choice of the target label. The **Obermeyer** study shows the mechanism: a widely used commercial risk-scoring algorithm predicted health care costs rather than illness, so at any given risk score Black patients were measurably sicker than White patients, and correcting the target was estimated to raise the share identified for extra care from 17.7 percent to 46.5 percent.

#### The federal pullback

Federal agencies stepped back from disparate-impact enforcement across 2025 and 2026: Executive Order 14281 (23 April 2025) directed agencies to minimise disparate-impact liability, and a CFPB final rule effective 21 July 2026 states that ECOA does not provide for the effects test. Federal ECOA disparate-impact liability is therefore gone, while intentional discrimination, deliberate proxies, private plaintiffs, states and the Fair Housing Act route all remain.

### 5.3 Consumer Protection

Section 5(a) of the FTC Act (15 U.S.C. 45(a)(1)) declares unfair or deceptive acts or practices in commerce unlawful. An **unfair** act causes or is likely to cause substantial injury that is not reasonably avoidable and not outweighed by benefits (section 45(n)). A **deceptive** act misleads a reasonable consumer through a material representation or omission, and neither requires intent.

**Operation AI Comply** (25 September 2024) brought five FTC actions on the position that there is no AI exemption from the laws already on the books. **FTC v. Workado** (28 April 2025) required competent and reliable evidence for a claimed 98 percent accuracy rate for an AI content detector. On 22 December 2025 the FTC set aside its Rytr order for failing to support a section 5 violation, while stating it would still pursue AI used to deceive consumers: what narrowed was the theory, not the duty to substantiate.

Any performance claim about an AI system is a regulatory exposure until it is backed by evidence: a claim the organisation cannot substantiate is a deceptive act whether or not the product is AI. Undisclosed AI interaction in a legal, health or financial context is itself a material omission.

The **UDAAP** regime is the consumer-finance analogue: the CFPB enforces the prohibition on unfair, deceptive or abusive acts or practices under Dodd-Frank sections 1031 and 1036 (12 U.S.C. 5531 and 5536). Abusiveness covers an act that materially interferes with a consumer's ability to understand a term or condition, or takes unreasonable advantage of a lack of understanding.

Every US state has a mini-FTC act, a **UDAP** law: Massachusetts Chapter 93A allows multiple damages for deceptive conduct, and New York's General Business Law section 349 prohibits deceptive acts and practices.

### 5.4 Product Liability

Product liability recognises three **defect theories**: a **design defect** means the product was made as intended but its design is unreasonably dangerous; a **manufacturing defect** means the unit deviates from the intended design; a **failure to warn** (a marketing defect) means the product lacks adequate instructions or warnings, any of which can run through **strict liability** (no negligence needed), **negligence** or **breach of warranty**. Defect is often judged by a **risk-utility test**: was the risk outweighed by the utility, and could a reasonable alternative design have reduced it?

#### Is software a product?

The traditional US view treats software as a licensed service, which keeps most AI outside strict products liability. The EU settles the point for its own market: Directive (EU) 2024/2853 brings software, including AI systems, within the definition of a product "irrespective of the mode of its supply or usage", and AI system providers under the AI Act are treated as manufacturers.

#### The revised Product Liability Directive

The Directive was adopted on 23 October 2024 and must be transposed by 9 December 2026, applying to products placed on the market after that date. Liability is no fault: the claimant proves defect, damage and causation, and it covers death and personal injury, including psychological harm, property damage, and corruption of non-professional data. Defect is presumed where the defendant fails to disclose evidence, the product breaches mandatory safety requirements, or there is an obvious malfunction; causation where the damage is typical of the defect; and either or both where technical or scientific complexity makes proof excessively difficult, with machine learning a named example.

#### Defect in an adaptive system

Adaptive systems make defect hard to locate: behaviour is dynamic, models drift after deployment, and outputs are probabilistic. The Directive weighs "the effect on the product of any ability to continue to learn or acquire new features after it is placed on the market."

**Benavides v. Tesla** is the worked example of a defect theory against an automated feature: a Florida jury found Tesla partly at fault in a fatal crash involving its Autopilot driver-assistance feature, with reporting placing Tesla's share at about USD 243 million of a total award of roughly USD 329 million; Tesla has appealed. The claimant proved only defect, damage and causation.

#### The withdrawn AI Liability Directive

The Commission proposed a fault-based AI Liability Directive and withdrew it (OJ C/2025/5423, 6 October 2025), so an injured person relies on Directive (EU) 2024/2853 and national tort law, and any analysis resting on an "AI Liability Directive presumption" rests on an instrument that does not exist.

### 5.5 Where to Look First

When a new AI use case appears, start with the conduct, not the technology: find the statute that already regulates it, then establish your role and where the affected person is.

1. **Name the regulated conduct, not the system.** Copying a work (intellectual property), selecting or assessing a person (employment, credit or housing), making a claim to a customer (consumer protection), placing something on the market (product liability).
2. **Establish which party you are and where the affected person sits.** Provider, deployer, employer, lender, advertiser and manufacturer each carry a different duty, and copyright is territorial.
3. **Inventory the inputs.** How was the training data acquired and licensed, is there a machine-readable opt-out to honour, and can an output be explained?
4. **Test for proxies and labels, not attributes.** Discrimination usually enters through a neutral variable that stands in for a protected class.
5. **Substantiate every performance claim before launch, and fix the liability allocation in the contract.** The bar on contracting out protects injured persons, so cost may be allocated between commercial parties but not away from the person harmed.

The four bodies of law apply whether or not any AI-specific law does. Chapter 6 turns to the statutes that do mention AI, and asks which entity is the provider?

### Exam Focus

- The four bodies of law in this chapter are intellectual property, non-discrimination, consumer protection and product liability, and none of them names AI.
- Copyright asks a different question at each touchpoint: inputs (lawful copying for training), model (whether it contains copies), outputs (infringement or ownership).
- Bartz and Ross split on the same question: training was fair use on the Bartz record and not fair use in Ross, and in Bartz the pirated acquisition failed even though training was fair.
- Market substitution under the fourth fair use factor is where a commercial training use most often fails.
- Getty (weights are not a copy) conflicts with GEMA (memorisation is a reproduction), and copyright is territorial, so where training happened decides the law.
- The EU has no fair use: DSM Article 3 (research and cultural heritage, no opt-out) differs from Article 4 (anyone, commercial use allowed, subject to a machine-readable opt-out).
- Thaler holds that an AI system cannot be an author, prompts alone are not authorship, and human selection, arrangement and modification of AI output can be protected.
- Disparate treatment requires intent, including deliberate proxy use, while disparate impact needs none.
- Title VII's three steps are causation, business necessity and a refused less discriminatory alternative, and the standard is statutory, so an executive order cannot remove it.
- The four-fifths rule is a screening heuristic, not a legal standard: it flags a disparity for investigation and is not a clearance.
- Under ECOA and Regulation B, "failed to achieve a qualifying score" is not a sufficient adverse-action reason, because the reasons must describe the factors actually considered.
- Discrimination can enter through a proxy or the choice of the label, without any protected attribute in the feature set, as the Obermeyer study showed.
- Unfair acts cause substantial, unavoidable injury not outweighed by benefits, deceptive acts mislead through material representations or omissions, and neither requires intent.
- The CFPB's Regulation B rule (effective 21 July 2026) states that ECOA does not provide for the effects test, but intentional and proxy discrimination remain unlawful and the FHA impact route survives.
- The revised Product Liability Directive covers software and AI as a product, weighs continued learning in the defect test, presumes defect or causation where complexity makes proof excessively difficult, and excludes purely economic loss.
- Any answer resting on an "AI Liability Directive presumption" is wrong, because the AILD was withdrawn on 6 October 2025.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): Copyright, Fair Use, Fair Use (AI Training), Human Authorship Requirement, Intellectual Property, Machine-Readable Opt-Out (TDM), Patent, Text and Data Mining Exception, Trade Secret, Adverse Action Notice (ECOA/Reg B), Disparate Impact, Disparate Treatment, Four-Fifths Rule, Non-Discrimination Law, Reasonable Accommodation, Consumer Protection, UDAAP, UDAP, Deception (FTC Act Section 5), Unfairness (FTC Act Section 5), AI Liability Directive (Withdrawn), Design Defect, Product Liability, Product Liability Directive (EU) 2024/2853, Proxy Variable, Strict Liability.

### Further Reading

- [Bartz v. Anthropic PBC, order on fair use (N.D. Cal., 23 June 2025)](https://storage.courtlistener.com/recap/gov.uscourts.cand.434709/gov.uscourts.cand.434709.231.0_5.pdf): training as transformative fair use, with acquisition a separate exposure
- [Thomson Reuters Enterprise Centre v. Ross Intelligence (D. Del., 2025)](https://www.courtlistener.com/docket/17131648/thomson-reuters-enterprise-centre-gmbh-v-ross-intelligence-inc/): no fair use where the training use builds a market substitute
- [Getty Images v. Stability AI [2025] EWHC 2863 (Ch)](https://www.judiciary.uk/judgments/getty-images-v-stability-ai/): model weights that store no works are not an infringing copy, and copyright is territorial
- [Thaler v. Perlmutter, D.C. Cir. opinion (18 March 2025)](https://media.cadc.uscourts.gov/opinions/docs/2025/03/23-5233.pdf): the human authorship requirement; certiorari denied 2 March 2026
- [GEMA v. OpenAI, Munich Regional Court I (11 November 2025)](https://cms.law/en/deu/legal-updates/gema-vs.-openai-munich-regional-court-i-issues-landmark-copyright-decision): memorisation as reproduction, and the limit of the TDM exception
- [New York Times Co. v. Microsoft (S.D.N.Y., complaint 27 December 2023)](https://www.courtlistener.com/docket/68117049/the-new-york-times-company-v-microsoft-corporation/): training and output copyright claims pleaded together
- [US Copyright Office, Copyright and Artificial Intelligence](https://www.copyright.gov/ai/): the human authorship and disclosure guidance
- [Directive (EU) 2019/790 (DSM Directive)](https://eur-lex.europa.eu/eli/dir/2019/790/oj): the Article 3 and Article 4 text and data mining exceptions and the Article 4(3) opt-out
- [Regulation (EU) 2024/1689 (EU AI Act), Article 53](https://eur-lex.europa.eu/eli/reg/2024/1689/oj): the general-purpose model copyright policy and training-content summary duties
- [Defend Trade Secrets Act, 18 U.S.C. 1836](https://www.law.cornell.edu/uscode/text/18/1836): the federal trade secret definition and remedies
- [Directive (EU) 2016/943 on trade secrets](https://eur-lex.europa.eu/eli/dir/2016/943/oj): the EU definition of a trade secret and the secrecy condition
- [Open Source Initiative, licences](https://opensource.org/licenses): permissive and copyleft licence terms that travel with an integrated component
- [Mobley v. Workday, collective certification (N.D. Cal., 16 May 2025)](https://storage.courtlistener.com/recap/gov.uscourts.cand.408645/gov.uscourts.cand.408645.128.0.pdf): Title VII and ADA exposure through a vendor's screening tool
- [Obermeyer et al., Dissecting racial bias in a health algorithm, Science (25 October 2019)](https://www.science.org/doi/10.1126/science.aax2342): discrimination through a proxy and a label
- [NYDFS report on the Apple Card investigation (23 March 2021)](https://www.dfs.ny.gov/reports_and_publications/press_releases/pr202103231): assurance review of a third-party underwriting model
- [Title VII section 703(k), 42 U.S.C. 2000e-2](https://www.law.cornell.edu/uscode/text/42/2000e-2): the statutory disparate-impact standard that an executive order cannot remove
- [Uniform Guidelines on Employee Selection Procedures, 29 CFR 1607](https://www.ecfr.gov/current/title-29/subtitle-B/chapter-XIV/part-1607): the four-fifths rule and the adverse impact screening heuristic
- [Americans with Disabilities Act title I, 42 U.S.C. 12112](https://www.law.cornell.edu/uscode/text/42/12112): qualification standards and the reasonable accommodation duty
- [Equal Credit Opportunity Act, 15 U.S.C. 1691](https://www.law.cornell.edu/uscode/text/15/1691): the prohibition on credit discrimination
- [CFPB Regulation B, 12 CFR 1002.9](https://www.consumerfinance.gov/rules-policy/regulations/1002/9/): the adverse-action notification and principal reasons requirement
- [Executive Order 14281 (90 FR 17537)](https://www.federalregister.gov/documents/2025/04/28/2025-07378/restoring-equality-of-opportunity-and-meritocracy): the April 2025 order to deprioritise disparate-impact enforcement
- [CFPB Regulation B final rule (91 FR 21620)](https://www.federalregister.gov/documents/2026/04/22/2026-07804/equal-credit-opportunity-act-regulation-b): effective 21 July 2026; ECOA does not provide for the effects test
- [FTC Act section 5, 15 U.S.C. 45](https://www.law.cornell.edu/uscode/text/15/45): the unfair-or-deceptive standard, with the unfairness test at section 45(n)
- [FTC, Operation AI Comply (25 September 2024)](https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes): the crackdown on deceptive AI capability claims
- [FTC, Workado order (28 April 2025)](https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-order-requires-workado-back-artificial-intelligence-detection-claims): unsubstantiated AI accuracy claims must be backed by evidence
- [FTC, Rytr order set aside (22 December 2025)](https://www.ftc.gov/news-events/news/press-releases/2025/12/ftc-reopens-sets-aside-rytr-final-order-response-trump-administrations-ai-action-plan): the theory was set aside; deception about AI remains enforceable
- [Dodd-Frank Act sections 1031 and 1036, 12 U.S.C. 5531](https://www.law.cornell.edu/uscode/text/12/5531): the unfair, deceptive or abusive acts or practices prohibition
- [Directive (EU) 2024/2853 (revised Product Liability Directive)](https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng): software and AI are products; no-fault liability; presumptions; transpose by 9 December 2026
- [Benavides v. Tesla, Inc. (S.D. Fla., verdict 1 August 2025)](https://www.courtlistener.com/docket/59932667/benavides-v-tesla-inc/): defective driver-assistance software and the allocation of fault
- [AI Liability Directive withdrawal, OJ C/2025/5423](https://eur-lex.europa.eu/eli/C/2025/5423/oj): the fault-based proposal was formally withdrawn on 6 October 2025
