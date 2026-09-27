> **Proposal, not yet in the manuscript.** This replaces the Chapter 13 block in `aigp-book.md`. Original: about 7,350 words. Everything below is manuscript content.

## Chapter 13: Operating, Monitoring and Retiring

A system that passed its release gate is not thereby governed. Governance of a live system is a set of habits that repeat: someone watches, something is written down, and when the ground moves the record is revisited. This chapter is competency IV.C, the largest single block of governance content in Domain IV, and it follows a system from go-live to switch-off.

The material tests distinctions distractors are built from: oversight on paper is not oversight, a log that cannot be trusted is not evidence, and a threshold nobody owns is decoration. A security incident, a performance incident and a harmful-output incident are not the same event, and classifying one wrongly decides who leads, which clock runs and who outside the organization must be told. Decommissioning is a governed process with risks of its own.

- 13.1 Operating the System with Human Oversight
- 13.2 What to Log, and Why Logs Are the Evidence Base
- 13.3 Monitoring as a Designed Capability
- 13.4 Detecting Degradation, Drift and Emergent Failure
- 13.5 Incident Management for AI Systems
- 13.6 Breach and Incident Notification Duties
- 13.7 External Communication and Crisis Response
- 13.8 Internal Audit, Assurance and Management Review
- 13.9 Corrective Action and Algorithmic Disengagement
- 13.10 Retirement, Decommissioning and the Governance of End of Life

| Case | Citable as | Drawn on for |
|---|---|---|
| UK Post Office Horizon scandal | Post Office Horizon IT Inquiry, Volume 1 of the final report, 8 July 2025 | Automation bias, over-trust, years of undetected error |
| Change Healthcare ransomware attack | U.S. Congressional Research Service report IN12330, disclosed 21 February 2024 | Security incident, supply concentration, HIPAA investigation |
| Moffatt v. Air Canada | 2024 BCCRT 149, decided 14 February 2024 | A harmful-output incident, and accountability for what a system says |
| FTC v. Rite Aid | FTC press release and consent order, 19 December 2023 | Oversight failure, corrective action, algorithmic disgorgement |
| KPMG Australia ISO/IEC 42001 certification | KPMG Australia and BSI media release, 17 October 2024 | Third-party assurance of an AI management system |
| NYC Local Law 144 enforcement audit | New York State Comptroller, audit 2024-N-6, 2 December 2025 | The gap between an audit duty and changed behaviour |
| Zillow Offers wind-down | Zillow Group Q3 2021 shareholder letter, 2 November 2021 | The governed retirement of an AI-driven operation |
| Tesla Autopilot recall and NHTSA recall query | NHTSA recall 23V-838, recall query RQ24009 | Corrective action, and a regulator testing the remedy |
| Garante v. OpenAI | Garante decision of 20 December 2024, annulled by the Court of Rome in judgment 4153/2026 | An enforcement action reversed on appeal |

### 13.1 Operating the System with Human Oversight

Human oversight separates a deployed system from an operated one. Chapter 3.1 set the three levels: human-in-the-loop approves each consequential decision, human-on-the-loop supervises and can intervene, human-in-command sets bounds and can halt.

The four conditions from Chapter 3 hold: competence, information (a reason and a confidence), authority (an override exercisable without penalty), and time and volume (a review load small enough for attention).

Two failure modes are examinable. Automation bias is where a person treats the output as authoritative and stops testing it: the UK Post Office Horizon scandal is the deep case. An accounting system produced apparent shortfalls the Post Office treated as reliable, and hundreds of sub-postmasters were wrongly accused of theft and fraud; the inquiry, across about 225 days of hearings and 298 witnesses, found staff and management had deferred to the system over the people it accused.

The second is review that supplies cover rather than scrutiny: in FTC v. Rite Aid, the FTC found a facial recognition system that falsely tagged shoppers as shoplifters.

### 13.2 What to Log, and Why Logs Are the Evidence Base

Almost every duty in this chapter consumes logs: monitoring reads them, incident response reconstructs from them, and a person contesting a decision is owed them.

A useful log set records the input, output, confidence, model version, retrieved documents, any human reviewer, timestamps and the calling identity. Provenance means every output traces to the model version and the data behind it. Integrity means logs are append-only and hash-protected so they cannot be quietly altered; the purpose is nonrepudiation.

The legal floor is thin but real: deployers of high-risk systems must keep automatically generated logs for at least six months (EU AI Act Article 26(6)), providers carry their own duty (Article 19), and GDPR Article 30 requires records of processing activities. Preserve the evidence before retraining, because retraining destroys the state needed to explain what happened. Never disable logging during an incident. Log content is personal data where it is: over-retention breaches storage limitation and early deletion destroys evidence.

### 13.3 Monitoring as a Designed Capability

Monitoring is designed before launch, not started afterwards. It must be specified: what is measured, against what baseline, at what threshold, and who acts; a metric with no owner and no action is a dashboard.

Baselines are recorded before go-live: input and output distributions, accuracy and error rates. The most common defect is a global baseline; a model can hold overall accuracy while failing badly for one group, so baselines belong per segment where the population is not homogeneous. Thresholds turn a reading into an action: each monitored quantity gets a warning level, an action level and a named person who acts. Leading indicators move before harm arrives; a tripwire is a leading indicator where any single crossing is treated as an incident.

Post-market monitoring is the legal form of this capability: EU AI Act Article 72 requires a documented plan, set before release, of what data is collected, how it is reviewed, and what thresholds trigger action. Monitoring reaches outside the system: the Change Healthcare ransomware attack was a concentration event, so dependencies belong in scope.

### 13.4 Detecting Degradation, Drift and Emergent Failure

Drift is movement in the world the model was fitted to. Covariate drift is a change in the distribution of inputs. Label drift is a change in the target. Concept drift is a change in the input-to-outcome relationship, the one that silently invalidates a score that still looks well calibrated. The operating task is to detect them and route a crossing to a named decision.

Degradation is loss of performance against the stated criteria. It is often gradual: accuracy falls a point, latency creeps up, the override rate rises. No single reading alarms; the trend does. It is also often invisible: if outcomes are learned only for approved cases, the declined cases never return a label and the model's error there stays unmeasured.

Emergent failure appears only in combination, at scale, or after a change elsewhere, and is invisible in the test set.

Detection is not response. The Tesla Autopilot matter shows the corrective and regulatory side: Tesla filed a defect report covering more than two million vehicles whose controls it described as possibly insufficient to prevent driver misuse, remedied it by software update, and NHTSA opened a recall query to test the remedy.

### 13.5 Incident Management for AI Systems

An incident is unexpected behaviour involving an AI system that causes, or could cause, harm, operational disruption or regulatory concern. The boundary against an issue is severity plus context: a misformatted date is an issue, while the same falsehood about a fee or entitlement is an incident because of who relied on it.

Classification determines the leader, the evidence and the clock.

A **security incident** concerns the confidentiality, integrity or availability of the system or its data. Change Healthcare is the worked case: ransomware on a critical claims-processing provider disrupted nationwide payments and drew a HIPAA investigation, a lesson in concentration.

A **performance incident** is the system failing its own stated criteria with no adversary behind it: accuracy degrades, a model update changes behaviour, an integration breaks. Horizon is the unrecognised performance incident and the Tesla recall query the corrective one.

A **harmful-output incident** is an output that harms a person though the system worked as designed. Moffatt v. Air Canada is the canonical case: a chatbot gave a customer wrong information about a bereavement fare, the customer relied on it, and the British Columbia Civil Resolution Tribunal held the airline liable for negligent misrepresentation, awarded about CAD 812, and rejected the argument that the chatbot was a separate legal entity responsible for its own statements. The organization answers for what its system says; Rite Aid is the same category at scale.

Ransomware becomes a performance incident when the system cannot run. The response order is contain, assess, investigate, remediate, notify, learn, with internal communication at triage and external notification on the legal clocks.

### 13.6 Breach and Incident Notification Duties

Notification is where an incident meets a deadline. The clock starts at awareness, not at confirmation, so an organization that waits to be sure may already be late; and the analysis of whether something must be notified is itself a record.

| Obligation | Who owes it | To whom | Clock |
|---|---|---|---|
| GDPR Article 33, personal data breach | The controller | The supervisory authority | 72 hours from awareness |
| GDPR Article 34, high-risk personal data breach | The controller | Affected data subjects | Without undue delay |
| EU AI Act Article 73, serious incident | Providers of high-risk AI systems | The market surveillance authority | Generally 15 days from awareness; 10 days for a death; sooner for widespread infringement or serious and irreversible disruption |
| HIPAA Breach Notification Rule | Covered entities and business associates | Affected individuals, and the Secretary for large breaches | Without unreasonable delay and no later than 60 days from discovery |
| NIS2 Article 23, significant incident | Essential and important entities | The competent authority or CSIRT | Early warning within 24 hours, incident notification within 72 hours, final report within one month |

Article 73 is a provider duty for high-risk systems, so a limited-risk chatbot giving a wrong answer to consumers is not an Article 73 case even when it is an incident. GDPR Article 33 is a controller duty attached to personal data, not to AI as such, so an AI incident with no personal data breach does not start the 72 hours. HIPAA reaches the healthcare pipeline; the Change Healthcare attack ran on both HIPAA and security lines. Clocks can run in parallel; the shortest is the working deadline, and the decision to notify belongs in the playbook with a named owner.

In December 2024 the Italian data protection authority announced a 15 million euro fine against OpenAI with a six-month public information campaign; the Court of Rome annulled that fine in judgment 4153/2026, decided in March 2026, on one-stop-shop jurisdiction grounds, without reaching the merits. The fine was never collected; the case illustrates an enforcement action reversed on appeal, not a standing penalty.

### 13.7 External Communication and Crisis Response

When an AI system has harmed people, how the organization speaks is part of the governance record. Ad hoc statements are how an organization contradicts itself; the plan is written before the incident.

The plan names people: an authorised voice, one spokesperson per incident type, a technical explainer, legal counsel, and a named approver for anything that leaves the building.

What gets said follows a defensible template: what happened, what is known and not yet known, who is affected, what the organization is doing, and how to reach a person. A communication log records each statement, its time, its approver and the facts it rested on. Two temptations are fatal: speculating about the cause before the investigation supports it, and overclaiming.

Crisis response is the harder judgement, how fast to speak against how much is known. Silence while a harm is visible reads as evasion; Horizon is the cautionary example, where the institution defended the system for years against the people it had accused. Separate what is known from what is under investigation, commit to a time for an update, and keep it.

### 13.8 Internal Audit, Assurance and Management Review

Assurance is the program of checking whether a system deserves trust and showing that work to others; an audit is one technique inside it. A first-party audit is internal, a second-party audit is a customer or partner auditing a supplier, and a third-party audit is by an independent external auditor.

Internal audit is the organization's independent check on its own controls, and its value depends on independence and a reporting line that reaches the governing body. Its AI scope maps onto four questions: performance, model validation, red teaming and compliance.

KPMG Australia became the first organisation globally certified to ISO/IEC 42001 by the certification body BSI, announced on 17 October 2024.

Management review is the internal counterpart and a scheduled duty. New York City's Local Law 144 requires a bias audit of automated employment decision tools, and the New York State Comptroller's audit of the city's enforcement, published on 2 December 2025, found enforcement ineffective: two complaints between July 2023 and June 2025, and a sweep of 32 companies that found a single non-compliance issue. A duty existed; it had changed little behaviour. Assurance tests whether controls work, not whether the paperwork exists.

### 13.9 Corrective Action and Algorithmic Disengagement

Corrective action is the repair phase: fix the problem, verify the fix, and update the record so the correction is traceable to the finding that caused it; a fix that is not recorded leaves the risk register asserting a state that is no longer true. Options scale with severity: retrain, roll back a version, add a control at the system layer, constrain the use case, or retire it. The EU AI Act gives high-risk providers a duty at the top of that scale, in Article 20, to withdraw, disable or recall a non-conforming system and inform the supply chain. The Tesla Autopilot recall is a corrective release a regulator then tested.

**Algorithmic disgorgement** is the destruction of a model, and of the models and artifacts built from it, when the data behind it should never have been used. FTC v. Rite Aid is the enforcement example: alongside a five year ban on using facial recognition for security or surveillance, the consent order required deletion of the images and of the algorithms built from them. **Algorithmic disengagement** names the organizational counterpart: a model built on unlawfully obtained data may have to be taken out of service entirely. Enforcement on unlawfully collected biometric data, such as the Dutch data protection authority's decision on Clearview AI, turns on the absence of a lawful basis for building the database. Every model trained on the tainted data is then a candidate for removal, along with checkpoints, embeddings and downstream models.

### 13.10 Retirement, Decommissioning and the Governance of End of Life

A system ends, and the ending is governed. Decommissioning is a process with its own risks, records and failure modes, and the organization must plan its exit before it needs one.

Retirement is triggered by regulatory change, drift-driven performance degradation, business reprioritisation, an unmitigable security or ethical finding, withdrawal of a third-party model, or localisation requirements. When a vendor deprecates a model the deployer faces a forced migration on the vendor's timetable, so the notice period and the re-evaluation right belong in the contract, and in the EU DORA and NIS2 make exit terms and concentration risk a legal expectation.

The deactivation sequence is repeatable; its order is examinable.

1. Map stakeholders and their transition needs.
2. Analyse usage and dependencies to find every downstream tool calling the system.
3. Notify and educate users within the contractual and legal notice periods.
4. Capture a final audit snapshot: inputs, weights, performance metrics and decision logs.
5. Disable APIs, terminate model endpoints and update access controls.
6. Monitor after deactivation for consequences the analysis missed.

Step two is where retire-in-haste fails: a dependency analysis routinely finds tools and feeds still calling an endpoint nobody listed, and each needs a fallback before the endpoint is terminated. The operational risks are business continuity, data integrity, access revocation and residual shutdown fallout. The Zillow Offers wind-down retired a large AI-driven operation in public, cutting roughly 25 percent of its workforce after the valuation model failed to forecast home prices accurately at scale.

Past applicants can contest decisions under ECOA and Regulation B or exercise their rights under the GDPR, so decision outputs may need to be kept for years. Archive final model versions, training-data lineage, performance logs, incident records and regulated decision outputs; destroy redundant training data, checkpoints and unneeded personal data.

Two obligations complete the end of life: notice to users, customers, partners and regulators within the contractual and legal periods, because abrupt retirement carries litigation risk; and a post-retirement review of the root cause, the impact on users, and the knowledge the next team needs.

The deactivation capability must exist before it is needed. For high-risk systems the EU AI Act sets the floor: Article 14(4)(e) requires a stop function that halts the system in a safe state, and Article 26(5) requires a deployer aware of a risk to suspend use and inform the provider and the relevant authority. NIST AI RMF MANAGE 2.4 asks for mechanisms to supersede, disengage or deactivate a system. A deactivation policy states who may trigger a stop and what a safe state is.

### Exam Focus

This chapter maps to competency IV.C, the largest block in Domain IV.

- Oversight fails in two ways: automation bias, where the human defers to the system, and review that supplies cover rather than scrutiny. Horizon is the case for the first and Rite Aid for the second.
- The four conditions for real oversight (competence, information, authority, time and volume) decay silently after launch, so they need a periodic check, not a one-time design.
- Logs are the evidence base for monitoring, incident response, audit and notification; the two properties that matter are provenance and integrity, with nonrepudiation the purpose of append-only, hash-protected storage.
- The log floors: EU AI Act Article 26(6) at least six months for deployers of high-risk systems, Article 19 for providers, GDPR Article 30 records of processing. Preserve evidence before retraining and never disable logging during an incident.
- Baselines come before launch and belong per segment, because a stable aggregate can hide a failing subgroup. A threshold with no owner and no action is a dashboard, not monitoring.
- Tripwires are leading indicators where any single crossing is treated as an incident.
- Drift has three types: covariate (inputs move), label (the target moves), concept (the input to outcome relationship moves). Degradation is usually gradual and often invisible because declined cases never return a label.
- Emergent failure appears only at scale, in combination, or after a change elsewhere, and detection is not the same as response: a drift alert must route to a named decision.
- Classify an incident before responding. A security incident turns on confidentiality, integrity or availability (Change Healthcare). A performance incident is the system failing its own criteria with no adversary (Horizon, Tesla). A harmful-output incident harms a person though the system worked as designed (Moffatt, Rite Aid). The class picks the leader, the evidence and the clock.
- Ordering rules: preserve evidence before retraining, never disable logging, internal communication starts at triage, and external notification follows the legal clocks.
- The notification clocks: GDPR Article 33 in 72 hours to the authority, GDPR Article 34 to data subjects without undue delay, EU AI Act Article 73 for high-risk providers at generally 15 days, 10 days for a death, sooner for widespread infringement, HIPAA no later than 60 days, NIS2 at 24 hours early warning, 72 hours notification, one month final report.
- Article 73 is a provider duty for high-risk systems, so a limited-risk chatbot's wrong answer to consumers is not an Article 73 case. GDPR Article 33 attaches to personal data, not to AI.
- The clock generally starts at awareness, not at confirmation, and the analysis of whether notification is owed is itself a record, whether or not it was owed.
- Garante v. OpenAI is an enforcement action reversed on appeal: the Court of Rome annulled the 15 million euro fine in judgment 4153/2026 on one-stop-shop jurisdiction grounds and it was never collected. Do not treat it as a standing penalty.
- Assurance is the program and an audit is one technique; audits are first party (internal), second party (a customer or partner auditing a supplier) or third party (independent). ISO/IEC 42001 certification, as with KPMG Australia's in October 2024, is a third-party assessment of the management system, not of a single model.
- The NYC Local Law 144 enforcement audit shows a duty on paper that changed little behaviour, so assurance tests whether controls work rather than whether documents exist.
- Corrective action is fix, verify, and update the record; EU AI Act Article 20 gives high-risk providers a duty to withdraw, disable or recall a non-conforming system.
- Algorithmic disgorgement destroys a model and its derivatives when the data behind it should not have been used (FTC v. Rite Aid deleted the images and the algorithms built from them). Algorithmic disengagement is the organizational version, and it depends on forward lineage tracing.
- Decommissioning is a governed process with its own risks (business continuity, data integrity, access revocation, residual consequences), the controlled sequence captures a final audit snapshot before endpoints are disabled, and dependencies are analysed before termination.
- An exit must be planned before it is needed: vendor model deprecation is a forced migration on the vendor's timetable, so notice and re-evaluation rights belong in the contract, with DORA and NIS2 the EU baseline for exit terms.
- The deactivation floor: EU AI Act Article 14(4)(e) stop function to a safe state, Article 26(5) suspend and inform, NIST AI RMF MANAGE 2.4 disengage. A safe state and a drilled fallback are the parts most often missing.

### Key Terms

The following terms are used in this chapter and defined in the Glossary (Appendix B): AI Assurance, Audit, Automation Bias, Corrective Action, Deactivation Policy, Decommissioning, Drift Detection, External Communication Plan, Incident Management, Issue Management, Localization Policy, MITRE ATLAS, Nonrepudiation, Operation & Monitoring, Post-Market Monitoring, Probability Severity Matrix, Public Disclosure, Record Keeping, Resilience, Risk, STRIDE, Tripwire.

### Further Reading

- [EU AI Act, Article 26 (obligations of deployers)](https://artificialintelligenceact.eu/article/26/): Article 26(6) log retention and Article 26(5) suspend and inform
- [EU AI Act, Article 73 (reporting of serious incidents)](https://artificialintelligenceact.eu/article/73/): who reports, what counts as serious, and the timelines
- [EU AI Act, Article 72 (post-market monitoring)](https://artificialintelligenceact.eu/article/72/): the monitoring plan that supplies incident detection
- [EU AI Act, Article 20 (corrective actions and duty of information)](https://artificialintelligenceact.eu/article/20/): withdrawal, disabling and recall for non-conforming systems
- [EU AI Act, Article 14 (human oversight)](https://artificialintelligenceact.eu/article/14/): the stop function that halts a high-risk system in a safe state
- [EU AI Act, Article 19 (automatically generated logs)](https://artificialintelligenceact.eu/article/19/): the provider's log-keeping duty that pairs with Article 26(6)
- [EU AI Act, Article 11 (technical documentation)](https://artificialintelligenceact.eu/article/11/): the provider documentation duties and the Annex IV contents
- [GDPR, Article 33 (notification of a personal data breach)](https://gdpr-info.eu/art-33-gdpr/): the 72-hour supervisory authority clock
- [GDPR, Article 34 (communication of a breach to the data subject)](https://gdpr-info.eu/art-34-gdpr/): when affected individuals must be told directly
- [GDPR, Article 30 (records of processing activities)](https://gdpr-info.eu/art-30-gdpr/): the controller's record-keeping duty behind automated decision logging
- [HIPAA Breach Notification Rule](https://www.hhs.gov/hipaa/for-professionals/breach-notification/index.html): individual and Secretary notice, no later than 60 days from discovery
- [NIST AI RMF (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): the MANAGE function, including MANAGE 2.4 on disengaging a system
- [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/): the subcategories on monitoring, incident response and management review
- [ISO/IEC 42001:2023 (AI management system)](https://webstore.iec.ch/en/publication/90574): documented information, logging, incident reporting and management review
- [ISO/IEC 42006:2025 (requirements for AIMS audit and certification bodies)](https://webstore.iec.ch/en/publication/108460): who may certify an ISO/IEC 42001 management system
- [ISO/IEC 23894:2023 (AI risk management)](https://webstore.iec.ch/en/publication/82914): the AI extension of ISO 31000 and the dynamic principle
- [OECD AI Incidents and Hazards Monitor](https://oecd.ai/en/incidents): real-world incident evidence for monitoring and forecasting
- [Post Office Horizon IT Inquiry, Volume 1 of the final report (8 July 2025)](https://www.postofficehorizoninquiry.org.uk/news/chair-calls-swift-action-deliver-full-and-fair-compensation-urgent-report): automation bias, over-trust and years of undetected error
- [Change Healthcare cyberattack and response, CRS report IN12330](https://www.congress.gov/crs_external_products/IN/HTML/IN12330.web.html): a security incident, supply concentration and a HIPAA investigation
- [Moffatt v. Air Canada, 2024 BCCRT 149](https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html): a harmful-output incident and accountability for what a system says
- [FTC v. Rite Aid](https://www.ftc.gov/news-events/news/press-releases/2023/12/rite-aid-banned-using-ai-facial-recognition-after-ftc-says-retailer-deployed-technology-without): oversight failure, use ban and algorithmic disgorgement
- [KPMG Australia ISO/IEC 42001 certification (17 October 2024)](https://kpmg.com/au/en/media/media-releases/2024/10/kpmg-first-company-to-achieve-ai-management-system-standard-certification-by-bsi.html): third-party assurance of an AI management system
- [NYC Local Law 144 enforcement audit (2 December 2025)](https://www.osc.ny.gov/state-agencies/audits/2025/12/02/enforcement-local-law-144-automated-employment-decision-tools): the gap between an audit duty and changed behaviour
- [Zillow Group Q3 2021 shareholder letter](https://www.sec.gov/Archives/edgar/data/1617640/000161764021000085/exhibit993.htm): a controlled retirement of an AI-driven operation
- [NHTSA Part 573 recall report 23V-838](https://static.nhtsa.gov/odi/rcl/2023/RCLRPT-23V838-8276.PDF): a corrective release for an automated driving feature, later tested by a recall query
- [Garante v. OpenAI, decision of 20 December 2024](https://www.garanteprivacy.it/home/docweb/-/docweb-display/docweb/10085432): the fine and the six-month information campaign
- [Court of Rome annuls the Garante's OpenAI fine, judgment 4153/2026](https://www.dpoworkspace.eu/en/news/tribunale-roma-annulla-sanzione-openai-15-milioni-sportello-unico): the annulment on one-stop-shop jurisdiction grounds
- [DORA (Regulation (EU) 2022/2554)](https://www.eiopa.europa.eu/digital-operational-resilience-act-dora_en): ICT third-party risk, concentration and exit terms for financial entities
- [NIS2 (Directive (EU) 2022/2555)](https://eur-lex.europa.eu/eli/dir/2022/2555/oj): supply-chain security and the Article 23 incident reporting clocks
- [FDA predetermined change control plans for machine learning enabled devices](https://www.fda.gov/medical-devices/software-medical-device-samd/predetermined-change-control-plans-machine-learning-enabled-medical-devices-guiding-principles): the model for pre-authorised model change
- [Clearview AI, Dutch DPA decision (3 September 2024)](https://www.autoriteitpersoonsgegevens.nl/en/documents/decision-fine-clearview-ai): unlawfully collected data as the premise failure behind disengagement
