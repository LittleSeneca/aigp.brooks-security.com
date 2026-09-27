> **Proposal, not yet in the manuscript.** This replaces the Chapter 12 block in `aigp-book.md`. Original: 2,803 words. Everything below is manuscript content.

## Chapter 12: Assessing What You Adopt

Chapter 3 set out vendor policy. This chapter answers a different question: what is actually true about the system the organization is about to adopt, and how anyone came to know it.

Assurance is routinely confused with policy, and the confusion buys the wrong instrument: an attestation where a test was needed, a certificate where subgroup data was needed, a benchmark as an acceptance criterion. Each is a category error, and the exam tests the categories directly.

Assurance is not a gate that closes at go-live: the vendor retrains the model, the population shifts, the corpus ages, the certificate expires. Whatever was established at adoption has a shelf life: someone must own the re-check and define what triggers it. That is competency IV.B.

- **12.1** six assurance instruments, and the question each one answers.
- **12.2** what a vendor's own testing proves, and what to demand instead.
- **12.3** the model card against the system-level assessment.
- **12.4** independent evaluation, third-party audit, and what a certificate to a management system standard proves.
- **12.5** acceptance testing and benchmarking before adoption.
- **12.6** the monitoring obligations that survive adoption.
- **12.7** concentration, dependency and exit.
- **12.8** the failure mode this chapter exists to prevent: an overstated capability.

| Case | Citable as | Drawn on for |
|---|---|---|
| Apple Card underwriting review | New York State Department of Financial Services report, 23 March 2021 | What an assurance examination can and cannot establish about a third-party credit model |
| DORA and NIS2 | Regulation (EU) 2022/2554; Directive (EU) 2022/2555 | Audit, monitoring and exit terms as a legal expectation |
| FTC v. Evolv Technologies | FTC complaint and stipulated order, 26 November 2024 | Overstated capability, and the deployer that relied on it |
| KPMG Australia certified to ISO/IEC 42001 | KPMG Australia and BSI Australia media release, 17 October 2024 | What third-party certification of an AI management system looks like |
| New York State Comptroller audit of Local Law 144 enforcement | Office of the New York State Comptroller, audit 2024-N-6, 2 December 2025 | The gap between a bias-audit duty and the assurance it is meant to create |
| Change Healthcare ransomware attack | U.S. Congressional Research Service, IN12330 | Concentration risk when one provider anchors a sector |
| FDA predetermined change control plans | FDA guidance, content current 18 August 2025 | The regulatory model for pre-authorised model change |

### 12.1 Six Instruments, Six Questions

A **test** exercises a system with defined inputs and compares output with an expected result; it alone produces evidence about your configuration and users.

A **benchmark** is a fixed dataset and scoring convention, usually published; it establishes relative capability on a public task, not fitness for your use case.

An **attestation** is a declaration that a state of affairs is true, usually a self-attestation such as a security questionnaire; it establishes that a statement was made, not that it is true.

An **audit** is a systematic, documented examination of evidence against defined criteria by a party with the competence and independence to form an opinion; it gives findings and reasonable, not absolute, assurance.

A **certification** is a third party's formal confirmation, issued by a body accredited for the scope, that an organization, a management system, a person or a product conforms to a named standard; it establishes conformance of a scope, not that a model or output is correct.

A **conformity assessment** is the process under which conformity to requirements is demonstrated at all; it establishes that a legal compliance route was followed, not that the system performs well.

### 12.2 What a Vendor's Own Testing Proves

A vendor's testing is evidence produced by the party with an interest in the result: it tests what it designed the system for, on data it chose, and reports the result that best describes the product.

Demand the method before the number. Four requests do most of the work.

**Fairness testing by subgroup.** Aggregate accuracy conceals subgroup performance: a system can be accurate overall while materially worse for a subgroup that matters. Ask for results broken out by relevant subgroups with the metric named, because fairness metrics disagree by construction: disparate impact, equal opportunity difference and group calibration can rank the same model differently.

The Apple Card examination shows how much turns on what is measured. After complaints that women received lower credit limits, the New York State Department of Financial Services reviewed underwriting data for about 400,000 New York applicants and found no fair lending violation, but also that credit scoring and the anti-discrimination laws governing credit access need modernising and that the model's complexity made the allegation hard to test.

**Robustness results.** Performance on clean, in-distribution data says nothing about distribution shift, adversarial input, or out-of-scope questions. Ask for the failure modes, not only the success rate.

**Model documentation.** What the system was trained on, on whose data and under what rights, what it was evaluated against, and the vendor's stated limitations and out-of-scope uses.

**Evaluation methodology.** Who ran the evaluation, on what data, whether it was held out from tuning, the sample size and pass threshold, and whether anyone independent reproduced it.

### 12.3 Model Cards and System-Level Assessment

A **model card** documents a model: intended use, training data, evaluation metrics and results, limitations, and the authors' stated ethical considerations. It describes the model, not your deployment, and it dates.

Risk is composed at deployment, not inherited from the model. The card says nothing about your prompt template, retrieval corpus, guardrails, served population, or the decision your process extracts from the output.

A **system card** documents the deployed system. A system-level assessment is what the law demands of the adopting organization, and three instruments do it: the AI impact assessment, which ISO/IEC 42005 explains as the method behind the ISO/IEC 42001 requirement; the **data protection impact assessment** under GDPR Article 35; and the **fundamental rights impact assessment** under EU AI Act Article 27.

Read the card as an input to an assessment of the system you will run, not a substitute for one. Its absence is a diligence finding, not a legal breach; no regulator has yet acted against a deficient model card, but a vendor that cannot describe its training data cannot be assessed at all.

### 12.4 Independent Evaluation, Third-Party Audit, and What a Certificate Proves

Assurance worth the name comes from someone who does not sell the system.

**Independent evaluation** is testing or review by a party with no commercial stake in the result: your own red team, an accredited laboratory or a public evaluator. Independence means declared conflicts, a published method, and a result a third party could reproduce.

**Third-party audit** reaches the vendor's evidence through a right you hold rather than a favour, and EU regulation makes the direction explicit. The Digital Operational Resilience Act, Regulation (EU) 2022/2554, requires financial entities to manage ICT third-party risk, names concentration risk explicitly, and sets a defined list of contractual provisions for ICT agreements. The NIS2 Directive, Directive (EU) 2022/2555, requires supply chain security measures between an entity and its suppliers.

**Certification** is the third route. A certificate to a management system standard confirms that the organization has defined, operates and has been independently assessed against a management system within a stated scope. ISO/IEC 42001 is the AI management system standard, and on 17 October 2024 KPMG Australia announced it had been certified to it by BSI, the first organization globally in that position.

- It does not prove that any particular model is accurate, fair or lawful, that any output is correct, or that the scope covers the product you are buying; nor does it bind a version, so the configuration you deploy may not be the one assessed.
- It does not transfer your duties: deployer obligations under EU AI Act Article 26 and controller duties under the GDPR stay where they are, and an organization that repurposes a third party's general-purpose system into a high-risk use becomes the provider of that use under Article 25(1)(c), certified or not.

### 12.5 Acceptance Testing Before Adoption

The instrument that converts an assessment into a decision is the acceptance test, agreed in writing before signature. The criteria state what the system must do, in numeric terms, for the use case. The data is a test set drawn from your population, ideally with a portion the vendor has not tuned against. The threshold is the pass mark, set before results are known. The remedy is what happens on failure: the right to reject, require remediation or terminate.

Benchmarks belong at selection, not at acceptance. A leaderboard score measures capability on a public task, on data that may be contaminated by the training corpus, and does not predict performance on your inputs, so use it to shorten a longlist and test the survivors. The licence review belongs at acceptance too: a component you may not lawfully deploy fails for a reason no performance test surfaces.

Where a statute imposes an audit, the acceptance file has to carry it. New York City's Local Law 144 requires an annual independent bias audit of automated employment decision tools before an employer uses the tool. The New York State Comptroller's audit of the enforcement regime, published 2 December 2025, found enforcement ineffective: the responsible department received two complaints between July 2023 and June 2025, and a sweep of 32 companies' audits identified a single non-compliance issue. A statutory audit requirement is an obligation, not assurance, so the organization must still read the audit and act on it; weak enforcement does not reduce the duty.

### 12.6 Monitoring That Survives Adoption

Assurance decays. The contract may say the vendor will not change the model; the release notes will say otherwise eventually, so adoption must include the obligations that keep the assessment current.

The contractual ones are the six clauses Chapter 3 covers, notably model-change notification with notice to re-test and a re-testing right on material change.

Three obligations are operational. Monitor the input distribution, because a shift in user inputs signals behavioural change. Re-run subgroup performance on live traffic, since the acceptance result is a snapshot of a moving population. Track override and reversal rates, because a step change there reports failure before any complaint does.

One obligation is structural. A material change to the model, the data or the use calls for re-acceptance: run the test again against the original criteria and record the result. FDA guidance on predetermined change control plans, current as of 18 August 2025, is the clearest template: a manufacturer states what may change, how it will be verified, and how safety will be monitored.

### 12.7 Concentration, Dependency and Exit

Four questions frame the dependency review: what happens if the vendor changes the model, withdraws it, fails, or is breached?

**Concentration** is the systemic question. When many organizations in a sector depend on one provider, a single failure is a sector failure. DORA requires financial entities to manage ICT concentration risk and hold exit strategies. The Change Healthcare ransomware attack illustrates it: disclosed on 21 February 2024, it disrupted healthcare payment flows nationwide because so much of the claims pipeline ran through one provider. Count how many of your critical systems depend on the same supplier.

**Change** is the performance question: a retrained or version-swapped model behaves differently, and the protection is the re-test clause in 12.6 plus a retained acceptance baseline.

**Withdrawal** is the continuity question. A retired model or discontinued API becomes a migration project the deployer cannot schedule. Contract for notice, for continuity of a supported version, and for data portability. Where the vendor will not commit, keep the interface to the model narrow, so substituting a provider is a configuration change rather than a rebuild.

**Failure** is the exit question. An exit plan names the alternative, the data return and deletion terms, and any escrow arrangement. An internally built model gives control of training data and direct answers to a regulator, but it also makes the organization the provider, with provider duties. Dependency is a choice between two accountabilities, not an escape from one.

### 12.8 Evaluating Claims Honestly

The failure mode this chapter exists to prevent: a capability is overstated, the deployer builds its assessment on the claim, and the harm arrives through the gap. **FTC v. Evolv Technologies** is the case. The Commission alleged that the company overstated its AI weapons screening system's detection capability while schools buying it were locked into multi-year contracts, and the stipulated order of 26 November 2024 bars unsupported AI claims and allows affected K to 12 customers to cancel. The harm landed on the deployers, who had relied on the vendor's claims for the safety of children.

Treat every claim as requiring substantiation rather than assuming it. Record the claim, the evidence behind it, who verified it and when, and the residual gap. A capability claim needs the test set, the conditions and the subgroup breakdown; a compliance claim needs the scope statement and the validity dates; a performance claim needs the measurement method, not the percentage. Anything unsubstantiated is a residual risk with a named owner.

Do not repeat unverified claims in your own documents: an organization that adopts a vendor's overstated number and passes it on has made its own representation, and its exposure does not depend on the vendor's. The assessment phase ends with a signed record of what the system is, what was tested, what could not be verified, and who owns the gap.

Assurance is a cycle of instruments rather than a certificate on a wall: what matters is what the organization knows about this system, how it came to know it, and what it will do when the answer changes.

### Exam Focus

- An attestation is a representation and its value depends on the maker's accountability, not on verification. Anything a vendor says about itself, including a completed questionnaire, is an attestation.
- A benchmark is a public test suite for general capability, so it belongs at selection, never as the sole acceptance criterion.
- A certificate to a management system standard is a point-in-time statement about an organization's management system within a scope. It does not certify a model, an output, a configuration or a version.
- The distractor is "the vendor is certified to ISO/IEC 42001, so the system is compliant". Certification is issued by an accredited certification body, and the standard certifies the AI management system rather than the product.
- A model card documents the model, so it is an input to a system-level assessment, never a substitute for one.
- No regulator has yet enforced specifically against a deficient model card, so the absence of one is a diligence and documentation finding.
- The DPIA falls on the controller under GDPR Article 35, the FRIA falls on specified deployers before first use under EU AI Act Article 27, and an ISO/IEC 42005 assessment is voluntary guidance no one can be certified to.
- The demand on vendor testing is the method before the number: subgroup breakdown with the metric named, robustness and failure modes, model documentation, and evaluation methodology including whether the data was held out and by whom.
- Fairness metrics disagree by construction, so "the vendor tested for bias" is incomplete until the metric and the subgroups are named.
- Aggregate accuracy can be high while subgroup performance is materially worse, which is the specific reason subgroup testing is required.
- DORA (Regulation (EU) 2022/2554) and NIS2 (Directive (EU) 2022/2555) make audit rights, monitoring, concentration management and exit terms an EU legal expectation, not a negotiating preference.
- A 24-hour vendor incident-notification window is a negotiated term, not a legal rule.
- The four dependency questions are change, withdrawal, failure and breach, and an internally built model substitutes provider duties for vendor dependency rather than removing accountability.
- An overstated capability claim is the named failure mode, and the FTC's Evolv order shows the harm landing on the deployer that relied on the claim.
- Acceptance testing needs criteria, population-drawn data, a pre-set threshold and a remedy on failure. A benchmark score is not acceptance.
- Re-acceptance is required after a material model, data or use change, and the FDA predetermined change control plan is the template for pre-authorising change with verification and monitoring attached.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): AI Assurance, AI Impact Assessment, AI Management System (AIMS), Audit, Benchmarking, Bias Audit (NYC LL 144), Conformity Assessment, Data Protection Impact Assessment (DPIA), Model Card, Open Source Agreement, Proprietary Model Deployment Obligations, Red Teaming, Robustness, System Card, Third-Party Risk Management (TPRM), Vendor Agreement, Verification & Validation.

### Further Reading

- [NYDFS report on the Apple Card investigation (23 March 2021)](https://www.dfs.ny.gov/reports_and_publications/press_releases/pr202103231): an assurance examination of a third-party underwriting model
- [DORA, Regulation (EU) 2022/2554](https://eur-lex.europa.eu/eli/reg/2022/2554/oj): ICT third-party risk, concentration risk and exit strategies
- [EIOPA overview of the Digital Operational Resilience Act](https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en): what DORA requires of entities and their ICT providers
- [NIS2, Directive (EU) 2022/2555](https://eur-lex.europa.eu/eli/dir/2022/2555/oj): supply chain security duties with suppliers
- [FTC v. Evolv Technologies (complaint and order, 26 November 2024)](https://www.ftc.gov/news-events/news/press-releases/2024/11/ftc-takes-action-against-evolv-technologies-deceiving-users-about-its-ai-powered-security-screening): overstated detection capability and the deployers who relied on it
- [KPMG Australia certified to ISO/IEC 42001 by BSI (17 October 2024)](https://kpmg.com/au/en/media/media-releases/2024/10/kpmg-first-company-to-achieve-ai-management-system-standard-certification-by-bsi.html): the first certification to the AI management system standard
- [New York State Comptroller, audit of Local Law 144 enforcement (2 December 2025)](https://www.osc.ny.gov/state-agencies/audits/2025/12/02/enforcement-local-law-144-automated-employment-decision-tools): the gap between a bias-audit duty and its enforcement
- [U.S. Congressional Research Service, the Change Healthcare cyberattack (IN12330)](https://www.congress.gov/crs_external_products/IN/HTML/IN12330.web.html): concentration risk when a sector depends on one provider
- [FDA, predetermined change control plans for machine learning enabled devices](https://www.fda.gov/medical-devices/software-medical-device-samd/predetermined-change-control-plans-machine-learning-enabled-medical-devices-guiding-principles): the template for pre-authorising change with verification and monitoring
- [Model Cards for Model Reporting (Mitchell et al., 2019)](https://arxiv.org/abs/1810.03993): the model card as a documentation artifact
- [ISO/IEC 42001:2023 (AI management system)](https://webstore.iec.ch/en/publication/90574): the certifiable AI management system standard
- [ISO/IEC 42005:2025 (AI system impact assessment)](https://webstore.iec.ch/en/publication/107659): the method behind the impact assessment ISO/IEC 42001 requires
- [International Accreditation Forum](https://iaf.nu/): why the accreditation behind a certification body matters
- [EU AI Act, Article 15 (accuracy, robustness and cybersecurity)](https://artificialintelligenceact.eu/article/15/): the performance and robustness requirements behind vendor test evidence
- [EU AI Act, Article 43 (conformity assessment)](https://artificialintelligenceact.eu/article/43/): how conformity is demonstrated for high-risk systems
- [EU AI Act, Article 25 (responsibilities along the value chain)](https://artificialintelligenceact.eu/article/25/): when a deployer becomes the provider, certification or not
- [EU AI Act, Article 26 (obligations of deployers)](https://artificialintelligenceact.eu/article/26/): the deployer duties that no certificate transfers
- [EU AI Act, Article 27 (fundamental rights impact assessment)](https://artificialintelligenceact.eu/article/27/): who must perform a FRIA and when
- [EU AI Act, Article 72 (post-market monitoring)](https://artificialintelligenceact.eu/article/72/): the monitoring obligation that survives market placement
- [GDPR, Article 35 (data protection impact assessment)](https://gdpr-info.eu/art-35-gdpr/): the DPIA trigger and required content
- [NIST AI Risk Management Framework (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): Measure and Manage functions as the process behind recurring assurance
- [NIST AI 600-1, generative AI profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): evaluation, testing and third-party claims for generative systems
