> **Proposal, not yet in the manuscript.** This replaces the Chapter 9 block in `aigp-book.md`. Original: 5,544 words. Everything below is manuscript content.

## Chapter 9: Training and Testing Data

Competency III.B asks five things of training data: a defendable legal right to collect and use it, quality judged against defined dimensions, fitness for the intended purpose, lineage and provenance records, and a testing regime that reaches past accuracy. A trained model is a claim about data, and every claim in this chapter is evidenced by a document with a name on it.

The distinction the chapter turns on is that discrimination usually enters through the label or the proxy rather than through a protected attribute. The canonical proof is the commercial health risk algorithm studied by Obermeyer and colleagues, which used health costs as a proxy for health need. Cost tracks access, insurance and wealth as well as illness, so Black patients at the same risk score were sicker than White patients, and re-targeting the label on active chronic conditions was estimated to raise the share of Black patients identified for extra care from 17.7 percent to 46.5 percent. The model never saw race. The label carried the harm.

- 9.1 Lawful basis, consent and secondary use
- 9.2 Rights in scraped, licensed and user-supplied data
- 9.3 Provenance and lineage
- 9.4 Representativeness and coverage
- 9.5 Labels, annotators and proxies: where discrimination enters
- 9.6 Data quality, completeness and accuracy
- 9.7 Train, validation and test splits, and leakage
- 9.8 Bias testing and disaggregated evaluation: what the aggregate hides
- 9.9 Fairness metrics and the impossibility result
- 9.10 Synthetic data: uses and risks
- 9.11 Documentation and versioning: datasheets and data cards
- 9.12 Retention and deletion of training data

| Case | Citable as | Drawn on for |
|---|---|---|
| Amazon recruiting tool | Reuters, 10 October 2018, by Jeffrey Dastin | Historical bias learned faithfully from past hiring data |
| Optum health risk algorithm | Obermeyer et al., Science, 25 October 2019, doi 10.1126/science.aax2342 | A proxy label carrying the discrimination |
| Clearview AI facial image database | Dutch DPA decision, 3 September 2024, EUR 30.5 million | Provenance, and collection without a lawful basis |
| Dutch childcare benefits scandal | Amnesty International, "Xenophobic Machines", October 2021; government resignation 15 January 2021 | Protected attributes used directly as fraud signals |
| Apple Card underwriting review | New York State Department of Financial Services, 23 March 2021 | A subgroup review of a third-party underwriting model |
| NYC Local Law 144 enforcement audit | New York State Comptroller, audit 2024-N-6, 2 December 2025 | A bias audit duty, and whether it changed behaviour |

### 9.1 Lawful Basis, Consent and Secondary Use

The organization confirms a **defendable legal right** to collect, process, store and analyse data before anyone judges whether it is good. Implicit consent buried in terms of use is not enough in the EU, and a privacy notice is a disclosure rather than a basis; the working standard for training data is counsel's written assertion backed by a source register.

**Secondary use** is the recurring failure: repurposing data beyond its collection purpose is function creep, needing a compatibility assessment or a fresh basis, with GDPR Article 5(1)(b) purpose limitation as the usual blocker. The EDPB's Opinion 28/2024 sets a three-step legitimate interest test, and its draft web scraping guidelines reason that consent is rarely workable at scale. Garante v. OpenAI closed an investigation on 20 December 2024 with a EUR 15 million fine.

### 9.2 Rights in Scraped, Licensed and User-Supplied Data

**Scraped data.** Public availability is neither a licence nor a lawful basis, and personal data collected from the web remains personal data. Copyright is separate: EU law permits text and data mining under Directive (EU) 2019/790 subject to a machine-readable rights reservation, and Getty Images v Stability AI (UK judgment, 4 November 2025) tests that boundary. The Dutch data protection authority fined Clearview AI EUR 30.5 million on 3 September 2024 over the unlawful collection of facial images: the failure was in how the corpus was built, not in how a model performed.

**Licensed data.** The terms that matter are volume, permitted purposes, onward sharing, derivative works, expiry and audit rights.

**User-supplied data.** Prompts, uploads, feedback and employee files are user-supplied data, and the contract and notice govern them; whether the terms permit training on customer inputs and outputs is a disclosure duty and a negotiation point. EU AI Act Article 53 requires general-purpose model providers to publish a summary of the content used for training.

### 9.3 Provenance and Lineage

**Provenance** records where data came from and under what conditions: who collected it, when, by what method, under what licence and access rights, for what purpose, and with what limitations. **Lineage** records how and where it moved: ingestion, storage, transformation, consumption, maintenance and disposal, the systems that consumed it, and the retention and deletion operations applied.

Direction matters. **Backward lineage** traces a record to its origin, which is what a contested decision needs: which records of this person entered training. **Forward lineage** traces how an element flowed downstream, which is what an incident investigation needs. Article 10 requires documented lineage and version control for high-risk datasets, and Article 15(5) expects poisoning to be addressed where appropriate.

Access logs, data minimization and retention say who touched the data, how much was collected and how long it is kept: none is provenance or lineage.

### 9.4 Representativeness and Coverage

**Sufficiency** is enough volume to train effectively. **Representativeness** is whether the data covers the diversity of the environment the system will be deployed in, measured against the population it will serve rather than the population that happens to be in the data.

Outcomes are observed only where a prior decision was taken, so a model trained on past decisions sees a result only for the people a human or an earlier model approved. This is the selective labels problem: the model learns the world as filtered by past policy and is asked to score the population that policy excluded. Amazon's recruiting tool is the standard illustration: Reuters reported in October 2018 that a system trained on a decade of resumes from a male-dominated field penalised resumes containing the word "women's" and downgraded graduates of two women's colleges.

EU AI Act Article 10 makes representativeness a legal standard for high-risk systems: datasets must be relevant, sufficiently representative and as free from errors and bias as possible for the groups most likely to be affected.

### 9.5 Labels, Annotators and Proxies

**Data annotation** attaches descriptive information to data without altering it, and in supervised learning the label is the value the model is trained to predict. **Ground truth** is the target value for a single labeled element, and it is only as true as the process behind it. A label is a decision about what to measure and over what period, and it belongs in writing.

The label is frequently not the thing the organization cares about. It is a proxy, and the gap between proxy and construct is where **measurement bias** lives. Obermeyer and colleagues studied a widely used commercial algorithm that predicted health costs and was read as a prediction of health need. Among patients with the same risk score, Black patients were measurably sicker, and re-targeting the algorithm on active chronic conditions rather than cost was estimated to raise the share identified for additional care from 17.7 percent to 46.5 percent. The model had no race variable and no discriminatory intent; it predicted the wrong quantity, and the institution had chosen that quantity.

The opposite error is the explicit signal: in the Dutch childcare benefits scandal, a risk classification system used by the tax authority from 2013 treated nationality and dual citizenship as fraud indicators, thousands of families were wrongly accused, and the government resigned in January 2021.

Where people label by hand, the controls are annotation guidelines, labeler training, a documented disagreement rule, and **inter-rater reliability**, a measure of agreement among labelers. Who labels shapes what the labels say: hate speech datasets over-represent African American English in their abusive classes, so a classifier trained on them reads dialect as offence (Davidson et al., 2019). **Reinforcement learning with human feedback** (RLHF) turns an annotator pool's rankings into a reward model and then into the model's disposition (Santurkar et al., 2023).

### 9.6 Data Quality, Completeness and Accuracy

Quality is judged against dimensions rather than impressions: **accuracy** (values are correct), **completeness** (fields are populated), **integrity** (relationships across datasets hold), **timeliness** (the data is current) and **consistency** (formats and rules are followed).

A dataset is fit or unfit for a stated purpose, and **fitness for purpose** joins quality to use. The recurring defects are contradictions between sources, missing values, broken joins, duplicates, and schema drift after a migration.

Missingness is itself a signal, because a field populated only for the customers who completed a longer process teaches the model the process as well as the population. **Data quality review** is the formal check for completeness gaps and systematic deviations. The evidence is a profile with a metric per dimension, a threshold and an owner; under Chapter 2's RACI, **data owners** approve use cases and **data stewards** keep quality and documentation.

### 9.7 Train, Validation and Test Splits, and Leakage

Three datasets do three jobs. **Training data** is what the model learns from. **Validation data** tunes it and chooses between candidates. **Test data** (evaluation data) is held back from both and used once, as the estimate of final performance.

**Test set leakage** is overlap between training and test data, and it inflates performance. Its common forms: the same person or document appearing on both sides of a random split; near-duplicate records; a feature derived from the label; and preprocessing fitted before the split, where statistics computed over the whole dataset carry test information back into training.

The discipline that prevents it runs in one order: split before any transformation, and fit every preprocessing step on the training portion only; split by entity rather than by row; use out-of-time splits where the process is time-dependent; and version the split and hold it fixed.

### 9.8 Bias Testing and Disaggregated Evaluation

**Bias testing** evaluates outputs for unfair differences across demographic groups, sensitive attributes and protected characteristics. **Performance parity** measures whether metrics such as accuracy and error rates vary across groups. **Counterfactual fairness** asks whether the decision would change if a sensitive attribute were altered with everything else held constant, usually run as a flip test, and it is the closest of the two to the question a regulator or a complainant asks.

An aggregate accuracy figure is a weighted average, so a system at 97 percent overall can sit at 70 percent for a small group without the aggregate moving enough to notice.

So the reporting standard is per subgroup: accuracy alongside the false positive and false negative rates, with the subgroup sample size and an uncertainty range, against a threshold set before the test for when a gap is a finding rather than noise. Slice by more than one attribute at a time, and test the proxies rather than only the attributes. The rule is to assess **outcomes**, not features.

The regulatory layer is uneven. The New York State Department of Financial Services reviewed underwriting data for roughly 400,000 applicants on the Apple Card in 2021 and found no fair lending violation, while concluding that the laws governing credit access need modernising. The New York State Comptroller's audit of New York City Local Law 144, of 2 December 2025, found the bias audit duty weakly enforced: two complaints in two years, and one non-compliance issue across 32 companies' audits.

### 9.9 Fairness Metrics and the Impossibility Result

- **Demographic parity**: equal positive (approval) rates across groups.
- **Equalized odds**: equal error rates, so true positive and false positive rates match across groups (Hardt et al., 2016).
- **Calibration within groups**: a score means the same thing in every group.
- The **disparate impact ratio**: one group's positive rate divided by the most favoured group's, which US enforcement guidance treats as suggesting adverse impact below roughly 80 percent.

These metrics conflict, and the conflict is a theorem rather than an implementation defect. Where base rates differ between groups, a score cannot simultaneously be calibrated within groups and satisfy equal error rates (Kleinberg et al., 2016; Chouldechova, 2016).

| Measure | Option 1: equal error rates | Option 2: equal approval rates |
|---|---|---|
| Repayers approved (A / B) | 90% / 90% | 90% / 100% |
| Defaulters approved (A / B) | 20% / 20% | 20% / 32.5% |
| Overall approval rate (A / B) | 86.5% / 76.0% | 86.5% / 86.5% |
| Disparate impact ratio (B / A) | 0.88 | 1.00 |
| Equalized odds | Met | Not met |
| Demographic parity | Not met | Met |

Option 1 holds repayers in both groups to the same standard and leaves Group B with a lower approval rate. Neither option is neutral; each chooses which error to distribute, and to whom. Fairlearn, AIF360 and the What-If Tool will all compute these metrics, and none can say which promise the organization owes the people it scores.

### 9.10 Synthetic Data

**Synthetic data** is artificially generated records that imitate the structure and statistical patterns of a real dataset without copying individual records.

Privacy: a generator trained on personal data can reproduce details of real people, so synthetic records are not automatically anonymous and an anonymity claim needs a test rather than an assertion. Synthetic datasets can re-leak information about their sources (Stadler et al., 2022), and models can emit memorized training text on request (Carlini et al., 2021). Utility: synthetic data preserves the gaps and biases of its source. Provenance: a synthetic dataset has a lineage of its own, and if the real data behind the generator was collected without a basis the synthetic output inherits the problem.

The controls are ordinary ones applied honestly: a re-identification test before synthetic records enter training; real data held out to check the model performs on reality; and the same versioning as any other dataset. Synthetic data cannot fix a label problem, so a subgroup gap it appears to fill should be tested for whether it is a gap of volume or of construct.

### 9.11 Documentation and Versioning

The **datasheet** is the standard description of a dataset, and its sections are the questions worth asking: motivation, composition (what it contains, what is excluded), collection process, preprocessing, uses (recommended and discouraged), distribution and maintenance. A **data card** is the shorter, decision-oriented form used at scale inside an organization.

Documentation does two jobs. It forces the questions that are easy to skip under delivery pressure: which subgroup is missing, what this label means, what was excluded and why. And it is the evidence base a regulator reads, which is why Article 10 requires documented data governance including lineage and version control. Versioning makes that verifiable, because every dataset, split and pipeline carries an identifier and a model's registry entry points to the exact versions it consumed.

### 9.12 Retention and Deletion of Training Data

Retention is the harder half of documentation, because the answer rarely reaches the derived artifacts. Training data is copied into extracts, feature stores, embeddings, caches, checkpoints and finally the model's parameters. A schedule that covers the source system and the training table and stops there leaves every derived copy in place, and the derived copies are where disclosure risk concentrates: membership inference tests whether a specific person's record was in the training set, and unintended memorization is a model reproducing fragments of the data on request.

GDPR Article 17 supplies a right to erasure, and the ICO's guidance sets the operational expectations. The defensible position is written before it is discovered: where a record was used to train a model, deleting the record does not unwind the training, and machine unlearning is an active research direction rather than a dependable production guarantee at the scale of a large model (Bourtoule et al., 2021).

Keeping data indefinitely in case it becomes useful is a retention decision by default. Collection without a basis is not cured by later deletion, which is the other half of the Clearview AI decision.

### Exam Focus

These distinctions and traps recur in items on training and testing data.

- Discrimination usually enters through the label or the proxy, not a protected attribute; deleting attributes does not remove it, because correlated features carry the signal, so test outcomes rather than features.
- Obermeyer et al. (Science, 25 October 2019) is the proxy case: health cost stood in for health need, and re-targeting the label was estimated to raise the Black share identified for extra care from 17.7 percent to 46.5 percent.
- The Amazon recruiting tool (Reuters, 10 October 2018) is the historical-bias case: the model learned past hiring patterns, penalising women's resumes and women's colleges.
- A lawful basis comes before quality; implicit consent in terms of use is not enough in the EU, and counsel's written assertion is the standard for training data.
- Secondary use is function creep: it needs a compatibility assessment or a fresh basis under GDPR Article 5(1)(b), and internal availability does not make data trainable.
- EDPB Opinion 28/2024 sets a three-step legitimate interest test whose balancing step decides scraping cases; the web scraping guidelines remain a draft.
- Public availability is neither a licence nor a lawful basis. Clearview AI (Dutch DPA, 3 September 2024, EUR 30.5 million) is the provenance case: the failure was collection, not model performance.
- Provenance is origin and conditions; lineage is movement and transformation. Access logs, data minimization and retention are the classic distractors; backward lineage serves a challenged decision, forward lineage an incident investigation.
- The Dutch childcare benefits scandal is the opposite error to a proxy: nationality and dual citizenship were used as fraud signals directly, built into the risk criteria.
- Quality has five dimensions (accuracy, completeness, integrity, timeliness, consistency); sufficiency (volume) differs from representativeness (diversity of the serving population).
- Selective labels: outcomes are observed only where a prior decision was taken, so training data reflects past policy, and the group least served is least represented.
- Training data teaches, validation data tunes, test data judges. Leakage is overlap between training and test data, including preprocessing fitted before the split, entity duplication, and benchmark contamination.
- An aggregate accuracy figure is a weighted average that can hide a subgroup failure, so bias testing reports subgroup metrics with sample sizes and a pre-declared threshold. Counterfactual fairness is closest to a regulator's question.
- Demographic parity, equalized odds and calibration conflict where base rates differ, and the conflict is a theorem (Kleinberg et al., 2016; Chouldechova, 2016); choosing among them is a documented governance decision.
- The disparate impact ratio divides one group's rate by the most favoured group's. New York City requires Local Law 144 impact ratios to be disclosed without a pass or fail threshold.
- Rows to read in the conflict table: equal error rates leave different approval rates; equal approval rates are bought by approving more of the lower-base-rate group's defaulters.
- Synthetic data lowers privacy risk without removing it: a generator trained on personal data can reproduce real records, and synthetic output inherits its provenance.
- A datasheet describes a dataset, a data card summarises one, a model card describes a model, and a system card describes the deployed system.
- Retention reaches derived artifacts: checkpoints, embeddings, feature stores and caches. Deleting a source record does not unwind a training run, and machine unlearning is not yet a production guarantee.
- Label definitions, annotator instructions and the annotator pool are governance artifacts, and a systematic disagreement along demographic lines is a finding about the label.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): Data Acquisition, Data Governance, Data Quality, Data Sheet, Data Lineage, Data Provenance, Data Poisoning, Algorithmic Bias, Bias (Systematic Deviation), Bias Testing, Counterfactual Fairness, Data Dependency, Data Quality Review, Fairness, Fit-for-Purpose, Responsible AI, Training and Testing, Data Annotation, Ground Truth, Overfitting, Underfitting, Reinforcement Learning with Human Feedback (RLHF), Synthetic Data, Test Data (Evaluation Data), Transparency (System), Precision, Recall.

### Further Reading

- [EU AI Act, Article 10 (data and data governance)](https://artificialintelligenceact.eu/article/10/)
- [EU AI Act, Article 15 (accuracy, robustness and cybersecurity)](https://artificialintelligenceact.eu/article/15/)
- [EU AI Act, Article 53 (obligations for providers of general-purpose AI models)](https://artificialintelligenceact.eu/article/53/)
- [GDPR, Article 5 (principles, including purpose limitation)](https://gdpr-info.eu/art-5-gdpr/)
- [GDPR, Article 9 (special categories)](https://gdpr-info.eu/art-9-gdpr/)
- [GDPR, Article 17 (right to erasure)](https://gdpr-info.eu/art-17-gdpr/)
- [EDPB Opinion 28/2024 on AI models and personal data](https://www.edpb.europa.eu/system/files/2024-12/edpb_opinion_202428_ai-models_en.pdf)
- [EDPB draft Guidelines 03/2026 on web scraping](https://www.edpb.europa.eu/public-consultations/guidelines-032026-on-web-scraping-in-the-context-of-generative-ai_en)
- [ICO guidance on AI and data protection](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/guidance-on-ai-and-data-protection/)
- [ICO guidance on the right to erasure](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-erasure/)
- [Datasheets for Datasets (Gebru et al.)](https://arxiv.org/abs/1803.09010)
- [Model Cards for Model Reporting (Mitchell et al.)](https://arxiv.org/abs/1810.03993)
- [Data Cards (Pushkarna et al.)](https://arxiv.org/abs/2204.01075)
- [ISO/IEC 22989:2022 (free from IEC)](https://webstore.iec.ch/en/publication/77839)
- [NIST AI RMF (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf)
- [NIST SP 1270, Towards a Standard for Identifying and Managing Bias in AI](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf)
- [NIST AI 100-2, Adversarial Machine Learning taxonomy](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2023.pdf)
- [Suresh and Guttag, sources of harm across the machine learning life cycle](https://arxiv.org/abs/1901.10002)
- [The Selective Labels Problem (Lakkaraju et al.)](https://www.cs.cornell.edu/home/kleinber/kdd17-selective.pdf)
- [Kleinberg et al., Inherent Trade-Offs in the Fair Determination of Risk Scores](https://arxiv.org/abs/1609.05807)
- [Chouldechova, Fair prediction with disparate impact](https://arxiv.org/abs/1610.07524)
- [Hardt et al., Equality of Opportunity in Supervised Learning](https://arxiv.org/abs/1610.02413)
- [Fairness and Machine Learning (Barocas, Hardt and Narayanan)](https://fairmlbook.org/)
- [Fairlearn](https://fairlearn.org/)
- [AIF360 (Trusted AI)](https://github.com/Trusted-AI/AIF360)
- [What-If Tool](https://pair-code.github.io/what-if-tool/)
- [EEOC Uniform Guidelines questions and answers](https://www.eeoc.gov/laws/guidance/questions-and-answers-clarify-and-provide-common-interpretation-uniform-guidelines)
- [Synthetic Data, Anonymisation Groundhog Day (Stadler et al.)](https://arxiv.org/abs/2011.07018)
- [The Secret Sharer (Carlini et al.)](https://arxiv.org/abs/1802.08232)
- [Extracting Training Data from Large Language Models (Carlini et al.)](https://arxiv.org/abs/2012.07805)
- [Machine Unlearning (Bourtoule et al.)](https://arxiv.org/abs/1912.03817)
- [Racial Bias in Hate Speech and Abusive Language Detection Datasets (Davidson et al.)](https://arxiv.org/abs/1905.12516)
- [Whose Opinions Do Language Models Reflect? (Santurkar et al.)](https://arxiv.org/abs/2303.17548)
- [NLP Evaluation in trouble (Sainz et al.)](https://arxiv.org/abs/2310.18018)
- [Reuters: Amazon scraps secret AI recruiting tool that showed bias against women (10 October 2018)](https://www.reuters.com/article/business/amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSL2N1VB1FQ/)
- [Obermeyer et al., Dissecting racial bias in an algorithm used to manage the health of populations (Science, 25 October 2019)](https://www.science.org/doi/10.1126/science.aax2342)
- [Dutch DPA decision on Clearview AI (3 September 2024)](https://www.autoriteitpersoonsgegevens.nl/en/documents/decision-fine-clearview-ai)
- [Amnesty International, Xenophobic Machines](https://www.amnesty.org/en/latest/news/2021/10/xenophobic-machines-dutch-child-benefit-scandal/)
- [New York State Department of Financial Services, Report on Apple Card Investigation (23 March 2021)](https://www.dfs.ny.gov/reports_and_publications/press_releases/pr202103231)
- [New York State Comptroller, audit of Local Law 144 enforcement (2 December 2025)](https://www.osc.ny.gov/state-agencies/audits/2025/12/02/enforcement-local-law-144-automated-employment-decision-tools)
- [Garante v. OpenAI (20 December 2024)](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10085432)
- [Getty Images v Stability AI (UK judgment, 4 November 2025)](https://www.judiciary.uk/judgments/getty-images-v-stability-ai/)
- [Directive (EU) 2019/790 (text and data mining)](https://eur-lex.europa.eu/eli/dir/2019/790/oj)
