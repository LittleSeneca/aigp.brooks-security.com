> **Proposal, not yet in the manuscript.** This replaces the Chapter 10 block in `aigp-book.md`. Original: 3,737 words. Everything below is manuscript content.

## Chapter 10: Release and Monitoring

Release is where a governance program stops making claims about a design and starts making them about a running system: BOK competency III.C, the gate, the testing, the documentation, the change that reopens it, and the monitoring afterwards.

Two distinctions carry the weight. An evaluation samples a distribution, while an adversary chooses its input, so normal-use testing cannot speak to hostile use. A gate is one-time and artifact-specific; monitoring never finishes, and passing a gate does not license the version that follows it.

The chapter flags where its evidence is thin: drift detection requires a baseline and a ground truth, many systems have neither, and the record holds no case of it triggering a retrain or rollback, only failures to detect (10.8).

The sections run in lifecycle order:

- 10.1 Release gates and who signs
- 10.2 Pre-deployment testing: functional, performance and adversarial
- 10.3 Why normal-use testing fails against hostile use
- 10.4 Model cards and system documentation as release artifacts
- 10.5 Staged rollout: pilots, canary and shadow
- 10.6 Change control and re-evaluation
- 10.7 Monitoring in production: what to log and what to alert on
- 10.8 Drift, degradation and what detecting them requires
- 10.9 Rollback, kill switch and the safe state

| Case | Citable as | Drawn on for |
|---|---|---|
| Microsoft Tay | BBC News, 25 March 2016 (launched 23 March 2016) | Adversarial and misuse testing, and what normal-use testing cannot see |
| Tesla Autopilot recall 23V-838 | NHTSA Part 573 defect report filed 12 December 2023, 2,031,220 vehicles | A release delivered as corrective software, verified after deployment |
| NHTSA Recall Query RQ24009 | ODI resume opened 25 April 2024 | A regulator testing whether a released remedy was adequate |
| UK Post Office Horizon | Post Office Horizon IT Inquiry, final report volume 1, 8 July 2025 | Errors undetected for years, and over-trust in the system over the people it accused |
| FDA predetermined change control plans | Final guidance and guiding principles for AI-enabled medical devices | The release gate, pre-authorized change and the total product life cycle |

### 10.1 Release Gates and Who Signs

A **release gate** is a defined point before a system reaches users at which stated criteria must be evidenced and a named person accepts the release; its record must show what was checked, what was found and who decided.

A gate checks seven things:

1. Documentation is complete: model cards, system cards, test reports, licences.
2. Risk mitigations are implemented, or deferrals approved in writing.
3. Security hardening and incident response are validated.
4. Monitoring is instrumented and thresholds are set.
5. Compliance is verified against the register of applicable law.
6. Version control and traceability are intact, so the artifact released is the artifact approved.
7. Users and operations staff are trained.

Sign-offs divide along functions (legal, engineering, security, privacy, governance, independent validation), with one accountable business owner accepting the release; the team that built the model should not certify it. A deferral is a gate's most informative line: a limitation accepted with a rationale, an owner and an expiry is governance; the same limitation found after release is an incident.

### 10.2 Pre-Deployment Testing: Functional, Performance and Adversarial

**Functional testing** asks whether the system does the task, sliced by subgroup and condition, since one headline metric hides where it fails.

**Performance testing** asks whether the system survives its workload: latency and throughput, resource use under load, and behaviour during outages. **Stress testing** exercises expected and edge-case workloads; it is a performance technique, not a security one.

**Adversarial testing** asks what an attacker can do. **Red teaming** adds prompt injection, including indirect injection through retrieved content, jailbreaks, model extraction, and poisoning of training or retrieval data.

**Misuse and abuse testing** asks what a careless or hostile user does after release, including over-trust and workarounds around the control; it is the family most often skipped.

**Security testing** is a fourth family, and it is distinct from the adversarial one. Adversarial testing asks whether the model can be made to behave wrongly; security testing asks whether the surrounding system can be breached, treating the model as one component of an attack surface that also includes the API, the retrieval store, the tool and plugin layer, the training pipeline and the deployment environment. Penetration testing, dependency and supply-chain scanning, and access-control review belong here. A model that resists jailbreaks can still sit behind an unauthenticated endpoint or a retrieval corpus an attacker can write to, which is why the two families are reported separately rather than collapsed into one line.

Two rules decide whether evidence counts: test the release candidate, since evidence attaches to an artifact, and test the system rather than the model alone, since the deployed system is a pipeline of feeds and features.

### 10.3 Why Normal-Use Testing Fails Against Hostile Use

**Microsoft Tay** is the case that made the gap visible. Microsoft launched a conversational bot on Twitter on 23 March 2016; within a day it was posting inflammatory content and the company shut it down. The failure was not a model that worked for cooperative testers and then broke: it was a system released into a population containing people who wanted to break it, with no testing that modelled them, and the learning loop made the attack durable because hostile input became training signal.

### 10.4 Model Cards and System Documentation as Release Artifacts

Three documents are often conflated. A **model card** is a short document released with a trained model (Mitchell et al., 2019). A **system card** describes the deployed system: components, human process, environment and monitoring. A **datasheet** describes the dataset.

A model card carries four contents that do governance work:

- **Intended use:** who the system is for, on which population; the reference point for secondary use.
- **Out-of-scope use:** the settings the evidence does not cover, where the commonest harm sits.
- **Performance by subgroup:** a distribution rather than a headline figure, where a fairness problem surfaces before a complaint.
- **Limitations:** the boundary of what the organization will defend in writing.

Article 13 of the EU AI Act requires instructions for use stating intended purpose, performance and limitations.

### 10.5 Staged Rollout: Pilots, Canary and Shadow

**Shadow deployment** runs the new version on real inputs and records its outputs without using them. No decision changes, so it is the cheapest comparison, but with nothing following from those outputs there is no outcome data for the new version.

**A pilot** is limited real use, with human cover over a bounded population. A pilot is a release, not a test: once real people are affected, the gate, documentation and monitoring duties apply; in the EU it carries conditions under Article 60 and informed consent under Article 61.

**A canary deployment** routes a small share of real traffic to the new version, the incumbent serving the rest. The design question is the abort criterion; a canary without one is a slow full release.

### 10.6 Change Control and Re-Evaluation

Anything that can change an output is a change, whether or not anyone touched the model; define the change classes and gate each.

| Change | What it invalidates, and what it needs |
|---|---|
| Threshold or configuration | The operating point, not the training. Re-run the evaluation |
| Retrain on new data | The validation evidence. Revalidate, then compare in shadow |
| Vendor model version update | The whole evaluation, and a change you did not make. Enforce notice and re-test |
| Process change (new user group, workflow) | Intended-use statement and oversight design |

A change invalidates the evidence for the part that changed, and the registry pairs each artifact with its approval, so a version with no approval is unapproved. Re-evaluation follows a threshold breach, an incident, a regulatory change, a scheduled review or a materially different version; Article 25 of the EU AI Act can also move provider obligations onto a deployer that substantially modifies a system.

The FDA model is the clearest: AI-enabled medical devices follow a **total product life cycle**, and a manufacturer can pre-authorize a **predetermined change control plan** covering what it intends to change, how each change will be verified and how safety will be monitored; changes inside the plan need no new submission; those outside it do.

### 10.7 Monitoring in Production: What to Log and What to Alert On

Monitoring reports what is happening; **observability** answers why a particular output happened, needing traceable prediction paths and logged versions.

What to log, at minimum:

- Per decision or response: model version and configuration, input features or prompt, output and score, reason codes or explanation payload, guardrail action, and retention and access control.
- The human action (accept, override, refer, escalate) with actor and reason, because override behaviour cannot be monitored if unrecorded.
- The outcome, when it arrives, linked to the decision: the ground truth, and the hardest part (10.8).

What to alert on, each with a threshold, an owner and a defined response:

- Input or prediction distribution movement beyond a stated tolerance against the baseline.
- Missing-value rates, format violations, and runs of identical values in a field that should vary; a field silently set to one repeated value reads as valid data and defeats a missing-value alarm.
- Human override rate by subgroup over time, often the first signal that the process has broken while the model behaves as built.

A production failure is detected only in a comparison: inputs or outputs now against release, or intended outcomes against actual ones; accuracy needs labels that arrive late or never.

### 10.8 Drift, Degradation and What Detecting Them Requires

**Data drift**, also called **covariate shift**, is a change in the statistical properties of inputs, so production data diverges from training data. **Label drift** is a change in the distribution of outcomes, and **concept drift** a change in the relationship between them, the dangerous one, because the inputs look familiar while the outputs are wrong.

Detection needs a recorded baseline: a two-sample test on inputs, such as Kolmogorov-Smirnov or chi-square, or the **population stability index** against the training distribution, as does monitoring predictions and confidence. Confirming degradation needs labels that often arrive late, only for cases acted on, or never.

The honest limitation is that detection requires two things frequently absent: a **baseline**, the recorded input and output distributions at release, and a **ground truth**, an outcome signal reliable enough to score against. Many deployed systems have neither, because the baseline was never a deliverable and the ground truth is missing where the decision is a judgement or a generation.

The public record is silent in a way that is itself the finding: this book's case library holds no case in which drift detection triggered a retrain or a rollback on a named production system. That absence is not evidence that monitoring works; it fits a trigger chain rarely instrumented or documented, so what the record shows is the failure to detect.

**UK Post Office Horizon** is the deepest case on that failure. Horizon produced apparent shortfalls treated as reliable, and hundreds of sub-postmasters were wrongly accused of theft and fraud; the inquiry's first volume, published on 8 July 2025, called it one of the UK's biggest miscarriages of justice. The lesson is not that a threshold was missed: the system was treated as authoritative, so discrepancies were attributed to the people it accused rather than to the system or its data, and no error signal was routed back into an investigation. Automation bias turned a monitoring gap into a governance choice.

### 10.9 Rollback, Kill Switch and the Safe State

Three controls are routinely confused. A **fail-safe plan** is a fallback decided in advance: halt safely, hand over to a backup system, or revert to a manual process, one of the redundancy solutions in EU AI Act Article 15(4). A **rollback procedure** reverses a release by redeploying the prior approved artifact, where the fail-safe responds to behaviour. A **kill switch** disables the system, and Article 14 expects high-risk systems to be interruptible by a stop button.

Three requirements decide whether these work:

- Define the safe state in the domain: for a consequential decision, referral to a human rather than an automated refusal.
- Keep the prior version deployable, because rollback is cheap only where the artifact, its configuration and its environment are versioned; an unrehearsed rollback is a plan, not a procedure.
- Make the switch reachable by the person on duty, not only its builders; name in advance who may pull it, and log every activation.

Over-trust is a fallback problem, not only a design one: where safety depends on a human staying engaged, the gate has to test the human behaviour. Tesla's 23V-838 defect report, filed on 12 December 2023 and covering 2,031,220 vehicles equipped with Autopilot, described the driver controls as possibly insufficient to prevent misuse and remedied the defect by software update; NHTSA opened Recall Query RQ24009 on 25 April 2024 to test whether the remedy worked. A corrective release is still a release, verified on the deployed population rather than before it.

### Exam Focus

This chapter maps to BOK competency III.C, governing release, monitoring and maintenance.

- A release gate is a decision with an artifact rather than a meeting, and its record must show what was checked, what was found and who signed. Reviewers must be independent of the team that built the system.
- A deferral at the gate, accepted with a rationale, an owner and an expiry, is governance; the same limitation found after release is an incident.
- The pre-market file for a high-risk EU AI Act system is the conformity assessment (Article 43), technical documentation (Article 11 and Annex IV), the declaration of conformity, CE marking and database registration, and the post-market monitoring plan (Article 72) is written before release.
- Functional testing covers correctness and subgroup slices, performance testing covers load, latency and failover, and stress testing is a performance technique rather than a security one.
- Red teaming is the adversarial family, and prompt injection, jailbreaks, model extraction and poisoning belong to it. Misuse and abuse testing asks what a careless or hostile user does after release.
- Microsoft Tay is the standard pre-deployment testing failure for a generative system: the gap was adversarial and misuse testing, not normal-use testing, and the learning loop made the attack durable.
- A model card describes the model, a system card the deployed system, a datasheet the dataset. The four contents that do governance work are intended use, out-of-scope use, performance by subgroup, and limitations.
- Where a system is released to another organization, the card and the instructions for use travel with it, because the downstream deployer inherits duties it can only meet if it knows what it has.
- An evaluation samples a distribution while an adversary optimizes inside it, so normal-use testing measures cooperation rather than robustness.
- Shadow deployment changes no decision and so produces no outcome data for the new version; a pilot is a release rather than a test; a canary needs an abort criterion, an owner and a share large enough to produce a signal.
- A corrective release is still a release: recall 23V-838 remedied 2,031,220 vehicles by software update, and NHTSA opened Recall Query RQ24009 to test whether the remedy was adequate, which put the verification after deployment.
- Change control invalidates the evidence for the part that changed. A change outside the predetermined envelope requires a new authorization, which is the FDA predetermined change control plan model, and a substantial modification can move provider duties onto a deployer under Article 25.
- Monitoring says what is happening and observability says why. Accuracy needs labels and is therefore lagging; the early warning sits in inputs, proxies and human override behaviour.
- A field silently set to one repeated value reads as valid data and defeats a missing-value alarm, and a rising override rate is often the first signal that the process has broken while the model is behaving as built.
- Data drift is a change in inputs, label drift a change in outcomes, and concept drift a change in the relationship between them. Kolmogorov-Smirnov, chi-square and the population stability index detect movement in inputs, and all require a recorded baseline.
- No verified case in this book's case library shows drift detection triggering a retrain or rollback on a named production system. The record shows failures to detect, and the correct answer to a drift question is normally that detection requires a baseline and a ground truth, and that many systems have neither.
- A fail-safe responds to behaviour, a rollback reverses a release, and a kill switch disables the system. Article 15(4) covers backup and fail-safe plans and Article 14 covers interruption. An unrehearsed rollback is a plan rather than a procedure, and an unrecorded threshold breach is the same as no threshold.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): Release Gate, Production Readiness Evaluation, Model Card, System Card, Data Sheet, Stress Testing (AI), Red Teaming, Misuse Testing, Continuous Monitoring, Observability, Data Drift, Concept Drift, Label Drift, Covariate Shift, Population Stability Index (PSI), Baseline, Ground Truth, Shadow Mode, Canary Deployment, Rollback Procedure, Fail-Safe Plan, Kill Switch, Change Control, Post-Market Monitoring, Retraining, Feedback Loop.

### Further Reading

- [Microsoft Tay, Microsoft apology over racist chatbot fiasco (BBC News, 25 March 2016)](https://www.bbc.com/news/technology-35902104): the canonical pre-deployment testing failure for a learning system
- [NHTSA Part 573 Safety Recall Report 23V-838 (filed 12 December 2023)](https://static.nhtsa.gov/odi/rcl/2023/RCLRPT-23V838-8276.PDF): the defect report covering 2,031,220 vehicles, remedied by software update
- [NHTSA Office of Defects Investigation, Recall Query RQ24009 (opened 25 April 2024)](https://static.nhtsa.gov/odi/inv/2024/INOA-RQ24009-12046.pdf): a regulator assessing whether a released remedy was adequate
- [Post Office Horizon IT Inquiry, final report volume 1 (8 July 2025)](https://www.postofficehorizoninquiry.org.uk/news/chair-calls-swift-action-deliver-full-and-fair-compensation-urgent-report): errors undetected for years, and over-trust in the system over the people it accused
- [FDA, Predetermined Change Control Plans for Machine Learning-Enabled Medical Devices: guiding principles](https://www.fda.gov/medical-devices/software-medical-device-samd/predetermined-change-control-plans-machine-learning-enabled-medical-devices-guiding-principles): pre-authorized model change and the total product life cycle
- [FDA, Marketing Submission Recommendations for a Predetermined Change Control Plan for AI-Enabled Device Software Functions (final guidance)](https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence): what a change control plan must contain
- [Model Cards for Model Reporting (Mitchell et al., 2019)](https://arxiv.org/abs/1810.03993): the model card format and its four governance contents
- [Datasheets for Datasets](https://arxiv.org/abs/1803.09010): the dataset documentation a system card and datasheet owe
- [EU AI Act, Article 43 (conformity assessment)](https://artificialintelligenceact.eu/article/43/): the pre-release conformity route for high-risk systems
- [EU AI Act, Article 15 (accuracy, robustness and cybersecurity)](https://artificialintelligenceact.eu/article/15/): Article 15(4) is where backup and fail-safe plans sit
- [EU AI Act, Article 14 (human oversight)](https://artificialintelligenceact.eu/article/14/): the ability to interrupt a high-risk system through a stop button
- [EU AI Act, Article 9 (risk management system)](https://artificialintelligenceact.eu/article/9/): risk management as a continuous iterative process across the life cycle
- [EU AI Act, Article 60 (testing in real world conditions)](https://artificialintelligenceact.eu/article/60/) and [Article 61 (informed consent)](https://artificialintelligenceact.eu/article/61/): the legal frame for pilots
- [EU AI Act, Article 72 (post-market monitoring)](https://artificialintelligenceact.eu/article/72/): the monitoring plan that must be written before release
- [EU AI Act, Article 73 (serious incident reporting)](https://artificialintelligenceact.eu/article/73/): the reporting clock that monitoring and triage must meet
- [EU AI Act, Article 25 (responsibilities along the AI value chain)](https://artificialintelligenceact.eu/article/25/): how a substantial modification can move provider duties downstream
- [EU AI Act, Article 13 (transparency and instructions for use)](https://artificialintelligenceact.eu/article/13/): intended purpose, performance characteristics and known limitations
- [EU AI Act, Annex IV (technical documentation)](https://artificialintelligenceact.eu/annex/4/): the documentation contents a readiness review has to see
- [Bank of England PRA, SS1/23 model risk management principles for banks](https://www.bankofengland.co.uk/prudential-regulation/publication/2023/may/model-risk-management-principles-for-banks): independent validation, tiered approval and ongoing monitoring
- [NIST AI Risk Management Framework (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) and the [AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/): MEASURE and MANAGE actions on monitoring, change and deactivation
- [NIST AI 600-1, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): pre-deployment testing and monitoring guidance for generative systems
- [NIST AI 100-2, Adversarial Machine Learning taxonomy](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2023.pdf): the attack taxonomy behind red teaming and adversarial test design
- [MITRE ATLAS](https://atlas.mitre.org/): adversarial tactics and techniques for AI systems, useful for scoping red team work
- [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/): prompt injection, insecure output handling and the practical attack classes
- [NIST SP 1270, Towards a Standard for Identifying and Managing Bias in AI](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.1270.pdf): the human-cognitive category that covers automation bias
- [ICO, explaining decisions made with AI](https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/artificial-intelligence/explaining-decisions-made-with-artificial-intelligence/): keeping explanations accurate and available after deployment
- [Hidden Technical Debt in Machine Learning Systems (Sculley et al., 2015)](https://papers.nips.cc/paper/5656-hidden-technical-debt-in-machine-learning-systems.pdf): why the surrounding pipeline, not the model, is where production failure concentrates
- [Failing Loudly: an empirical study of methods for detecting dataset shift](https://arxiv.org/abs/1810.11953): what drift detection methods actually require to work
- [OECD AI Incidents Monitor](https://oecd.ai/en/incidents): where AI incidents and hazards are recorded, including the reporting often absent from the record
