---
tags:
 - aigp/domain-II
 - aigp/area
 - aigp/legal
 - aigp/eu-ai-act
created: 2026-07-11
updated: 2026-09-23
domain: "II: Understanding How Laws, Standards and Frameworks Apply to AI"
subdomain: "II.C: Understand the Main Elements of AI-Specific Laws (BOK v2.1)"
related:
 - "[[Legal and Regulatory Index]]"
 - "[[Sectoral and Civil Laws]]"
 - "[[AI Standards and Frameworks]]"
 - "[[EU AI Act 2024 — Key Provisions]]"
 - "[[GPAI Code of Practice — Key Provisions]]"
 - "[[South Korea AI Basic Act — Key Provisions]]"
 - "[[US AI Laws — Federal and State]]"
---

# The EU AI Act

> **Domain II, Subdomain II.C (BOK v2.1): AI-specific laws.** This note covers the EU AI Act, the anchor law for II.C. Under v2.1, II.C also covers South Korea's AI Basic Act (see [[South Korea AI Basic Act — Key Provisions]]) and US federal and state AI laws that apply to private-sector organisations (see [[US AI Laws — Federal and State]]).
>
> **Currency:** the Act was amended by the Digital Omnibus on AI, Regulation (EU) 2026/1744, in force 27 July 2026. It moved the high-risk dates to 2 December 2027 (Annex III) and 2 August 2028 (Annex I). See §6 for both timelines.

## Performance Indicators

*BOK v2.1, II.C, paraphrased. The subdomain carries 6–8 exam questions.*

- Explain how AI-specific laws sort AI into **risk tiers** (for example prohibited, high, limited and minimal risk), and place a given system or use in the right tier
- Know the core requirements for **risk management, data governance, technical documentation, conformity and impact assessments, and record keeping**
- Know the core requirements for **human oversight, transparency and notice to affected people, and quality management**
- Distinguish the separate obligations for **general-purpose AI models**
- Describe how these laws are **enforced** and the **penalties** for breaching them
- Explain how obligations differ by **role**, for example provider, deployer, importer or distributor

> [!note] What changed from BOK v2.0.1
> - **Title:** II.C was renamed from "the main elements of the EU AI Act" to "the main elements of AI-specific laws".
> - **Weight:** 6–8 questions, up from 5–7.
> - **Tiers:** the tier list is now given as examples ("e.g.") rather than as the EU's four tiers, so other laws' classification schemes count too.
> - **Requirements:** the old single requirements indicator is split in two, and impact assessments now sit alongside conformity assessments.
> - **Scope:** the Domain II introduction now names the EU AI Act, South Korea's AI Basic Act, and US federal and state AI laws that apply to private-sector organisations.

---

## 1. Risk Classification

The EU AI Act introduces a four-tier, risk-based classification framework. Each tier dictates the obligations developers, providers, and deployers must follow. Organizations outside the EU are adopting this scheme as a baseline.

### Risk Classification Overview

| Risk Category | Definition | Examples | Regulatory Requirements |
|---------------|------------|----------|------------------------|
| **Prohibited AI** | Poses unacceptable risk to rights/safety | Social scoring, subliminal manipulation | **Completely banned** |
| **High-risk AI** | Impacts fundamental rights or safety | Credit scoring, AI hiring tools | Conformity assessments, logging, oversight, CE marking |
| **Limited-risk AI** | Requires transparency but limited impact | Chatbots, synthetic media (deepfakes) | Disclosure, marking and labelling (Art. 50); opt-outs are good practice, not an Art. 50 duty |
| **Minimal-risk AI** | Poses negligible risk | Spam filters, streaming recommendations, grammar checkers | No requirements (voluntary best practices) |

---

### 1.1 Prohibited AI Systems

**Prohibited AI** refers to use cases that pose an unacceptable risk to safety, human dignity, or fundamental rights and are **banned outright**. These systems are not allowed to be placed on the market, put into service, or used anywhere in the EU.

**Examples of prohibited AI:**

| Prohibited Practice | Description |
|---------------------|-------------|
| **Subliminal manipulation** | AI that manipulates behavior by bypassing consciousness (e.g., neuro-influencing technologies) |
| **Social scoring** | Ranking individuals over time on social behaviour or personal traits, leading to unjustified or out-of-context detrimental treatment. The final text covers public **and** private actors |
| **Exploiting vulnerable groups** | Targeting children, elderly, or disabled individuals to distort behavior |
| **Real-time remote biometric identification in public spaces** | Banned with limited exceptions for serious crimes under judicial oversight |
| **Individual criminal offense risk assessment or prediction** | Predictive policing based solely on profiling |
| **Emotional recognition in workplaces and educational institutions** | Banned due to manipulation, discrimination, and pseudoscience risks |
| **Non-consensual intimate imagery and CSAM** *(added by the 2026 Digital Omnibus; applies from 2 Dec 2026)* | AI that generates or manipulates sexual imagery of identifiable people without their explicit consent ("nudification" apps), or child sexual abuse material (Art. 5(1)(ba)–(bb)) |

> **Count check:** the table above is illustrative. As enacted, Art. 5(1) lists eight practices, (a)–(h), including untargeted facial-image scraping and biometric categorisation by sensitive traits. As amended by the 2026 Omnibus it lists ten.

> **Exception:** Real-time biometric identification may be permitted under strict conditions (national security threats, ongoing criminal investigations) but must be individually authorized by a legal authority.

> **Exam note:** Developers (vendor organizations) must ensure their system design, training data, and use cases do not cross into prohibited territory.

---

### 1.2 High-Risk AI Systems

**High-risk AI** systems have the potential to significantly affect people's rights, lives, or safety and are subject to the most stringent regulatory controls.

**Categories of High-risk AI (Annex III):**

- Biometric identification and categorization
- Critical infrastructure management (energy grids, wastewater, traffic control)
- Education and vocational training (AI grading tools, lesson planning)
- Employment, worker management, and access to self-employment (AI interviews, performance evaluations)
- Access to and enjoyment of essential private and public services (credit scoring, welfare benefits)
- Law enforcement (crime prediction tools)
- Migration, asylum, and border control
- Administration of justice and democratic processes

**Core Compliance Requirements:**

- **Conformity assessments** — demonstrated before market placement
- **Risk management and data governance** — data quality, bias minimization, operational risk management
- **Human oversight** — meaningful human intervention and escalation capability
- **Technical documentation and logging** — lifecycle documentation and automatic logging

> **CE Marking:** High-risk AI systems must bear the CE mark to indicate conformity with EU standards — similar to other product safety marks.

---

### 1.3 Limited-Risk AI Systems

**Limited-risk AI** refers to AI systems that interact with users but do not significantly impact safety or rights.

| Examples | Transparency Obligations |
|----------|-------------------------|
| Chatbots and virtual assistants | **Disclosure of AI use** — users must be informed they are interacting with AI |
| AI-generated media (deepfakes, synthetic voices) | **Synthetic media disclosure** — generated content must be labeled as such |
| Educational tools (AI learning assistants) | **User autonomy** — offering an opt-out or a human alternative is good practice; Art. 50 itself requires disclosure, not an opt-out |
| Social media filters/avatars | |

> **Art. 50 in one line:** providers must make chatbots disclose that they are AI and mark synthetic output in machine-readable form. Deployers must disclose deepfakes, emotion-recognition and biometric-categorisation use, and AI-generated text published on matters of public interest (unless it was human-reviewed under editorial responsibility). These duties apply from **2 August 2026**. As amended by the 2026 Omnibus, generative systems already on the market before then have until **2 December 2026** for marking.

> **Dark patterns note:** Even limited-risk systems using dark patterns or manipulative UI may trigger scrutiny under consumer protection laws (separate from the EU AI Act and GDPR). See [[Consumer Protection and AI|Privacy and Data Protection Law]].

---

### 1.4 Minimal-Risk AI Systems

**Minimal-risk AI** systems pose negligible or no risk to users or society. They represent the majority of AI systems and are largely unregulated.

**Examples:** Spam filters, recommendation engines (Netflix, YouTube, Amazon Prime), AI-enabled grammar checkers.

**Encouraged practices:** Voluntary codes of conduct, ethical guidelines, transparency practices. Documenting design and training now may reduce compliance costs later if reclassification occurs.

---

### 1.5 Risk Reclassification and Monitoring

Systems initially categorized as minimal- or limited-risk may become high-risk depending on their use context. **Continuous monitoring and reassessment** are advised.

---

## 2. Classification Requirements

> **Note:** There are no requirements for *prohibited AI* — these systems are not allowed at all. Requirements apply to the three permitted tiers.

### 2.1 High-Risk AI: Full Compliance Framework

High-risk AI carries the most stringent requirements. These mirror requirements found in mature systems development lifecycle frameworks.

#### Risk Management System

Must be documented and ongoing:

- Proactively identify known and foreseeable risks (intended use + reasonably foreseeable misuse)
- Evaluate and monitor risks throughout the system lifecycle
- Implement risk control measures to eliminate or reduce identified risks

**Reference frameworks:** NIST SP 800-37, ISO/IEC 27001, ISO/IEC 31000, ISO/IEC 23894:2023

> **Exam note:** These frameworks are helpful guidance but not a substitute for the EU AI Act's explicit requirements.

#### Data and Data Governance

Training, validation, and testing datasets must be **high-quality, relevant, representative, and as free from errors and bias as possible**.

- Bias mitigation strategies
- Data relevance to intended purpose
- Data lineage documentation and version control
- Compliance with all applicable privacy laws (including GDPR)

**Data governance frameworks:** DMBOK, COBIT, DGI Framework. See also [[Data Governance and Management|Data Governance and Model Training]].

#### Technical Documentation

Provider must maintain detailed, formally managed documentation:

- System architecture and specifications
- Algorithms and training methodologies
- Risk management and human oversight protocols

#### Record Keeping and Logging

Logs must be maintained throughout the AI system lifecycle to support:

- Post-market monitoring
- Event and incident investigation
- Audit readiness and accountability
- Change management at business and system levels

#### Conformity Assessment

Before market placement:

- Internal control (self-assessment) in some cases
- Third-party assessment by a **Notified Body** in other cases
- **CE marking** once conformity is confirmed

#### Human Oversight

AI systems must be designed for:

- **Detection** of anomalies or signs of malfunction (disaster recovery: take offline and fix)
- **Effective override or shut-off mechanisms** — pause AI use without disrupting critical business processes
- **Human-in-the-loop decision review** — for loan approvals, employment screening, medical diagnosis, etc.

#### Transparency and User Instructions

Users must receive clear instructions including:

- Intended purpose and limitations
- Human oversight responsibilities
- Performance metrics and conditions of use (accuracy levels, expected error rates, environmental/data quality requirements)
- Contact points for reporting incidents or questions

#### Quality Management System (QMS)

Must include:

- Policies and procedures for design, development, testing, and control
- Corrective and preventive action procedures
- Documentation control
- Processes for monitoring, reporting, and logging (including post-market surveillance)
- Resource and training management

**Reference standard:** ISO 9000.

> **Lifecycle documentation:** Required not only pre-market but throughout the system's use — including updates, retraining events, and downstream adaptations by deployers.

---

### 2.2 Limited-Risk AI: Targeted Transparency Obligations

#### Disclosure Requirements

- Inform users when interacting with AI systems (chatbots, virtual assistants)
- Inform users when viewing synthetic or manipulated content (deepfakes, images, text)

#### Notification and User Autonomy

- Conspicuous notifications that a system is AI-driven
- Easily found opt-out mechanisms or human interaction alternatives (good practice; not required by Art. 50)
- Transparent instructions on system use and limitations

#### Documentation and Accountability

- Maintain records of how transparency mechanisms are implemented
- Monitor for misleading outputs that could impair user autonomy

> **Regulatory intersection:** Limited-risk systems may still fall under broader EU privacy and/or consumer protection laws.

---

### 2.3 Minimal-Risk AI: Voluntary Best Practices

No mandatory requirements. Encouraged:

- Simple notices where AI functionality may affect user decisions
- Avoid misleading or manipulative design patterns
- Maintain internal logs and quality checks
- Consider accessibility accommodations and avoid reinforcing harmful stereotypes

> **Forward-looking:** Minimal-risk systems deployed at scale or adapted to new contexts (education, public policy) could face reclassification. Voluntary documentation now reduces compliance costs later.

---

### 2.4 Avoid Checkbox Compliance

Organizations should pursue the **spirit and intention** of requirements, not just minimum "checkbox compliance." Align compliance measures with mission, objectives, and culture.

---

## 3. Requirements for General-Purpose AI (GPAI)

### 3.1 Defining GPAI

**General-purpose AI (GPAI)** systems are models that can serve multiple intended purposes and be integrated into a variety of downstream systems or applications.

| Concept | Definition |
|---------|------------|
| **Foundation model** | The base technical artifact |
| **General-purpose AI** | Usage and availability across diverse applications |

**Examples:** LLMs (GPT-family, Llama, Claude), foundation models for vision (CLIP, SAM), multimodal models (text, images, video, audio).

---

### 3.2 General Obligations for GPAI Providers

#### Technical Documentation and Transparency

- Model architecture, training data sources, and capabilities
- Intended and foreseeable uses
- Known limitations, biases, and failure modes
- Disclosure of fine-tuning on sensitive data
- Risk identification and mitigation mechanisms

#### Model Evaluation and Testing

Risk assessments must evaluate:

- Accuracy and robustness across various tasks
- Bias and fairness across demographics
- Environmental impact (energy consumption)

> Where GPAI is expected to be integrated into high-risk applications, additional testing and safeguards are required.

#### Data Governance

Document training dataset composition and provenance; mitigate copyright risks, personal data inclusion, and representational bias. See also [[Data Governance and Management|Data Governance and Model Training]].

> **Transparency Summary Sheet:** The EU AI Act encourages standardized GPAI model cards or factsheets summarizing key characteristics and risks for downstream users.

---

### 3.3 GPAI with Systemic Risk — Enhanced Obligations

#### What Qualifies as Systemic Risk?

- **Compute presumption:** cumulative training compute above 10²⁵ FLOP creates a rebuttable presumption of high-impact capabilities (Art. 51(2)). The provider must notify the Commission within two weeks of meeting, or knowing it will meet, the threshold (Art. 52(1)).
- **Commission designation:** on its own initiative or after a qualified alert from the Scientific Panel (Art. 90), using the Annex XIII criteria. These include parameters, data size, compute, modalities, benchmarks, autonomy and tool access, and reach, which is presumed at 10,000 or more registered EU business users.
- **Indicative GPAI threshold:** the Commission's July 2025 guidelines treat a model trained with more than 10²³ FLOP that can generate language, images or video as indicatively general-purpose.

#### Enhanced Requirements

| Requirement | Standard GPAI | GPAI with Systemic Risk |
|-------------|:---:|:---:|
| Technical documentation and downstream information (Art. 53(1)(a)–(b), Annexes XI–XII) | Yes, unless an exempt open-source model | Yes (no open-source exemption) |
| Copyright policy and public training-content summary (Art. 53(1)(c)–(d)) | Yes | Yes |
| EU authorised representative for non-EU providers (Art. 54) | Yes, unless an exempt open-source model | Yes (no open-source exemption) |
| Notify the Commission of the model (Art. 52(1)) | No | **Yes** |
| Model evaluation incl. documented adversarial testing (Art. 55(1)(a)) | No | **Yes** |
| Assess and mitigate Union-level systemic risks (Art. 55(1)(b)) | No | **Yes** |
| Track and report serious incidents to the AI Office (Art. 55(1)(c)) | No | **Yes** |
| Adequate cybersecurity for the model and its infrastructure (Art. 55(1)(d)) | No | **Yes** |

> **Statute vs. extras:** the Act requires adversarial testing to be *conducted and documented*, not published. "External audits", public red-team reports or researcher APIs are not Art. 55 obligations. The AI Office can, however, demand information and access to evaluate a model (Arts. 91–92). Where extra measures appear in study materials, check whether they come from the voluntary GPAI Code of Practice rather than the Act (see [[GPAI Code of Practice — Key Provisions]]).

**Enforcement timing:** GPAI obligations apply from 2 August 2025. The Commission's enforcement powers, including Art. 101 fines of up to 3% or €15m, apply from **2 August 2026**. Models placed on the market before 2 August 2025 have until **2 August 2027**. The 2026 Omnibus did not change these dates.

---

### 3.4 Obligations for Distributors and Deployers of GPAI

Organizations integrating GPAI into downstream systems (especially high-risk) must:

- Verify model's conformity with published documentation
- Assess their own use case for potential elevation in risk classification
- Ensure transparency toward end users

---

### 3.5 Open-Source GPAI Considerations

Open-source GPAI developers may be **exempt from some obligations** if they do not derive commercial benefit or maintain operational control. However, **deployers remain responsible** for downstream compliance.

### 3.6 Encouraged Practices Across All GPAI Models

- Voluntary codes of conduct addressing accessibility, inclusiveness, environmental sustainability, and misuse prevention (election manipulation, malware generation, fraud)
- Collaborate with academia and civil society
- Support open benchmarks and transparency initiatives

---

## 4. Enforcement and Penalties

### 4.1 Oversight and Supervisory Authorities

| Authority | Role |
|-----------|------|
| **European AI Office** (housed within European Commission) | Supervises and enforces GPAI model obligations (the Commission has exclusive powers under Art. 88), with fines from 2 Aug 2026; issues guidance and facilitates codes of practice. **As amended by the 2026 Omnibus (Art. 75(1))** it is also *exclusively* competent for AI systems built on a GPAI model by the same provider or group (with carve-outs) and for AI in DSA-designated very large online platforms and search engines |
| **National competent authorities** (one or more per member state) | Market surveillance; handle complaints; investigate breaches; impose penalties within jurisdiction, for all AI systems not reserved to the AI Office |
| **European Data Protection Supervisor** | Supervises AI systems used by EU institutions, bodies and agencies |

### 4.2 Inspection Powers and Remedies

Authorities may:

- Require access to technical documentation
- Perform unannounced inspections (including digital audits)
- Mandate and verify corrective actions
- Suspend or prohibit marketing of AI systems
- Require withdrawal or recall of non-compliant systems
- Direct updates, retraining, or labeling changes
- Require notification of affected users

> Individuals affected by non-compliant AI may seek remedies under national civil liability frameworks or file complaints through data protection/consumer protection channels.

### 4.3 Whistleblower Protections

Art. 87 applies the EU Whistleblower Directive (EU) 2019/1937 to reports of AI Act infringements and to the protection of the people who make them. The AI Office runs an online whistleblower tool for people connected to providers of AI systems or GPAI models. It also runs a complaint tool and a complaints channel for downstream providers that integrate another provider's GPAI model.

---

### 4.4 Penalty Framework

| Violation Type | Maximum Fine |
|----------------|-------------|
| **Prohibited AI practices** | Up to **€35 million or 7%** of global annual turnover (whichever higher) |
| **Non-compliance with high-risk obligations** | Up to **€15 million or 3%** of turnover (whichever higher) |
| **Incorrect, incomplete, or misleading information** | Up to **€7.5 million or 1%** of turnover (whichever higher) |
| **GPAI model providers** (Art. 101, imposed by the Commission, from 2 Aug 2026) | Up to **€15 million or 3%** of worldwide turnover (whichever higher) |

> **Smaller firms:** for SMEs and start-ups, every fine is capped at whichever figure is *lower* (Art. 99(6)). As amended by the 2026 Omnibus, small mid-caps get the same lower-figure cap for the €15m/3% and €7.5m/1% tiers only, not for prohibited-practice fines (Art. 99(6a)).
>
> **No fines yet:** as of September 2026 no AI Act fine has been publicly announced. The AI Office says its first tool is "technical compliance dialogues".

> **Penalties compared to GDPR:** The EU AI Act's penalties resemble GDPR's but may exceed them for the most egregious violations.

---

### 4.5 Factors in Assessing Penalties

Authorities consider:

- Nature and significance of the breach
- Whether non-compliance was **intentional or negligent**
- Previous history of violations
- Degree of cooperation with authorities

> **Voluntary disclosure benefit:** Organizations that voluntarily disclose incidents or deficiencies and cooperate with authorities may receive reduced penalties.

**Post-enforcement:** Organizations may be required to submit to third-party audits, implement compliance remediation plans, and report on remediation progress periodically.

---

### 4.6 Cross-Border Enforcement and Extraterritoriality

#### Mutual Assistance Framework

National authorities cooperate through:
- Sharing information on investigations
- Supporting cross-border enforcement actions
- Coordinating activities through the European AI Office

#### Extraterritorial Application

The EU AI Act applies to **non-EU entities** if they:
- Place AI systems on the EU market
- Make AI systems available to users located in the EU
- Deploy AI outside the EU if the system affects EU persons
- Develop GPAI models that are integrated into EU-facing applications

> **Non-EU providers must:** Appoint an EU-based legal representative, ensure conformity assessments are in place, and meet all transparency and documentation requirements.

---

## 5. Organizational Context

Compliance obligations depend on the role an organization plays in the AI supply chain.

### 5.1 Role Definitions and Obligations

| Role | Definition | Key Obligations |
|------|------------|-----------------|
| **Provider** | Develops an AI system/GPAI model and places it on the EU market under its own name/brand | Risk management, conformity assessments, technical documentation, CE marking, EU database registration, post-market monitoring, incident reporting |
| **Deployer** | Uses AI systems in professional activities (not private use) | Human oversight during use, monitor performance and report incidents, ensure input data quality, maintain logs, use per provider instructions |
| **Importer** | Places AI systems from non-EU countries onto the EU market | Verify CE marking and conformity assessment, ensure documentation is complete, register in EU database, cooperate with authorities |
| **Distributor** | Makes AI systems available in EU market without modifying them (e.g., app stores, marketplaces) | Verify CE marking is present, confirm provider/importer contact info visible, suspend distribution if non-compliance suspected, cooperate with authorities |

---

### 5.2 Important Role Dynamics

- **Deployers become providers** if they substantially modify an AI system or develop their own downstream application using GPAI — they inherit full provider obligations.
- **Importers are legally liable** if they place a non-compliant AI system on the market. Contracts should clarify responsibility boundaries.
- **Cloud-based AI platforms** (AI-as-a-Service) can blur roles; contractual designation of responsibilities is recommended.
- **An organization can hold multiple roles** (e.g., both importer and distributor).

---

### 5.3 Shared Horizontal Duties

Across all roles, organizations must:

- Cooperate with national competent authorities and regulators
- Respond to incident reports
- Maintain records (logs, updates, notices)

> **Best practice:** Conduct an "AI role assessment" for each system to determine your role and resulting compliance obligations.

---

## 6. EU AI Act Implementation Timeline (as enacted vs. as amended by the 2026 Digital Omnibus)

> [!warning] Which dates will the exam use?
> BOK v2.1 was approved on 9 September 2025 and took effect on 2 February 2026, before the Digital Omnibus on AI (Regulation (EU) 2026/1744) was agreed. Live exam items may still use the **original** dates, such as "high-risk rules apply 2 August 2026" and "Annex I systems 2 August 2027". Read each stem for its anchor ("as originally enacted" or "as amended by the 2026 Digital Omnibus"). If there is none, ask whether the fact being tested changed at all. Prohibitions, GPAI dates and penalty ceilings did not.

### 6.1 The two timelines side by side

| Date | As enacted (Regulation (EU) 2024/1689) | As amended by the 2026 Digital Omnibus (Regulation (EU) 2026/1744) |
|------|----------------------------------------|---------------------------------------------------------------------|
| **12 Jul 2024** | Published in the Official Journal | Same |
| **1 Aug 2024** | Entry into force; no obligations yet | Same |
| **2 Feb 2025** | Prohibited practices (eight, Art. 5(1)(a)–(h)) and AI literacy (Art. 4) apply | Same. The softened Art. 4 wording applies from 27 Jul 2026 |
| **2 May 2025** | GPAI codes of practice due | GPAI Code published 10 Jul 2025; adequacy confirmed 1 Aug 2025 |
| **2 Aug 2025** | GPAI obligations, governance bodies, penalty regime (except Art. 101), notified bodies; Member States designate authorities | Same |
| **2 Aug 2026** | General date of application: Annex III high-risk rules, Art. 50 transparency, Commission GPAI enforcement including Art. 101 fines, national sandboxes due | **Still applies** for Art. 50 transparency and Commission GPAI enforcement including **Art. 101 fines**. It **no longer** applies to high-risk rules or sandboxes |
| **27 Jul 2026** | — | Omnibus enters into force |
| **2 Dec 2026** | — | **Two new Art. 5 prohibitions** (non-consensual intimate imagery; CSAM). **Art. 50(2) marking deadline** for generative systems already on the market before 2 Aug 2026 (Art. 111(4)) |
| **2 Aug 2027** | Annex I (Art. 6(1)) product-embedded high-risk rules; GPAI models placed before 2 Aug 2025 must comply | GPAI legacy deadline unchanged. **National sandboxes operational** (Art. 57(1)). Annex I moves to 2028 |
| **2 Dec 2027** | — | **Annex III high-risk rules** (Ch. III §§1–3, incl. Art. 26 deployer duties and Art. 27 FRIA) |
| **2 Aug 2028** | — | **Annex I product-embedded high-risk rules** |
| **2 Aug 2030** | Legacy high-risk systems intended for public authorities must comply | Same |

### 6.2 Grace periods and transitional provisions

- **GPAI models placed on the market before 2 Aug 2025:** until **2 Aug 2027** (Art. 111(3)), unchanged by the Omnibus. The Commission's guidelines say legacy providers need not retrain or "unlearn" a model where that is impossible or disproportionate, provided they disclose and justify it.
- **High-risk systems already on the market before their category's high-risk date:** caught only if their design changes significantly afterwards (Art. 111(2), now keyed to the Chapter III application date). Systems intended for public authorities must comply by 2 Aug 2030 in any case.
- **Generative systems already on the market before 2 Aug 2026:** Art. 50(2) marking by **2 Dec 2026** (Art. 111(4), added by the Omnibus).
- **Codes of practice:** voluntary. Adhering to a code the Commission has assessed as adequate is a straightforward way to *demonstrate* compliance with Arts. 53 and 55, and the Commission focuses its enforcement on monitoring adherence. Adherence is **not a presumption of conformity**: under Arts. 53(4) and 55(2) only harmonised standards give that. Non-signatories must demonstrate "alternative adequate means", for example through a gap analysis, and can expect more information requests. Commitments kept under an adequate code can count as a mitigating factor when fines are set (Art. 101(1); Commission GPAI guidelines, paras 91–97).

### 6.3 What else the 2026 Digital Omnibus changed

- **AI literacy (Art. 4):** now a duty to *take measures to support* AI literacy, with no guaranteed level for any individual. The Commission and Member States must actively promote literacy and publish practical examples.
- **Two new prohibitions (Art. 5(1)(ba)–(bb)), from 2 Dec 2026:** AI that generates or manipulates realistic intimate or sexual imagery of an identifiable person without explicit consent, and AI that generates child sexual abuse material. Placing a system on the market is caught only if that is its intended purpose, or a foreseeable outcome it lacks reasonable safeguards against.
- **Special-category data for bias detection (new Art. 4a):** replaces Art. 10(5) and extends the legal basis beyond high-risk providers to other AI systems and models. Strict necessity and six safeguards apply, including no effective alternative data, pseudonymisation, access controls, no onward transfer, deletion, and records. GDPR applies on top.
- **AI Office:** exclusive competence over AI systems built on a GPAI model by the same provider or group (carve-outs: Annex I products, critical infrastructure, certain law-enforcement, border and financial systems, justice) and over AI in DSA very large platforms and search engines. It gains investigation, inspection, commitment and fining procedures (Arts. 75a–75d), and can run a Union-level sandbox.
- **National sandboxes:** operational by **2 Aug 2027** instead of 2 Aug 2026.
- **Small mid-caps:** simplified technical documentation, proportionate QMS, priority sandbox access and lower-figure fine caps (for the 15/3 and 7.5/1 tiers) extend beyond SMEs to SMCs.
- **Registration of Art. 6(3) "not high-risk" systems:** still required, with less information (no summary of grounds, no list of Member States).
- **Also:** FRIAs can reuse DPIA content; machinery moves to the Annex I sectoral route; CRA-compliant systems are deemed to meet Art. 15 cybersecurity. Article-level detail is in [[EU AI Act 2024 — Key Provisions]] §13.

### 6.4 Commission guidance and implementation status (September 2026)

| Instrument | Date | Status |
|---|---|---|
| Prohibited-practices guidelines; AI-system-definition guidelines | 4 and 6 Feb 2025 | Final, non-binding |
| GPAI guidelines | 18 Jul 2025 | Final. Indicative GPAI criterion 10²³ FLOP; systemic risk presumed above 10²⁵ FLOP; a modifier becomes the provider above **one third** of the original training compute |
| Training-content summary template (Art. 53(1)(d)) | 24 Jul 2025 | Final; mandatory for GPAI providers |
| GPAI serious-incident reporting template (Art. 55) | 4 Nov 2025 | Final |
| High-risk serious-incident guidance and template (Art. 73) | 26 Sep 2025 | Draft (consultation closed 7 Nov 2025) |
| Code of Practice on Marking and Labelling (Code of Practice on Transparency of AI-generated Content) | 10 Jun 2026 | Final and assessed adequate; about 190 signatories by end of July 2026 |
| Art. 50 transparency guidelines | 20 Jul 2026 | Final |
| Art. 6 high-risk classification guidelines | Draft 19 May 2026 | **Still draft**; the 2 Feb 2026 statutory deadline was missed; final expected by end of 2026 |
| Scientific Panel (60 experts) and Advisory Forum | 1 Jun 2026 | Appointed for two-year terms |
| EN 18286:2026, QMS standard for Art. 17 | Jul 2026 | Published by CEN-CENELEC; gives a presumption of conformity only once cited in the OJ |
| Fines | — | None publicly announced as of Sept 2026 |

### 6.5 GPAI Code of Practice: who has signed

As of the Commission's list (updated 31 July 2026), **21 providers** have signed the full Code. They include Amazon, Anthropic, Google, IBM, Microsoft, Mistral AI and OpenAI, as well as several EU firms such as Aleph Alpha. **xAI signed only the Safety & Security chapter**, so it must show Transparency and Copyright compliance by alternative adequate means. **Meta does not appear on the list.** Signatories run a Signatory Taskforce chaired by the AI Office. Details: [[GPAI Code of Practice — Key Provisions]].

---

## Key Takeaways

1. **AI systems are classified into four risk tiers: prohibited, high-risk, limited-risk, and minimal-risk.** This classification determines the level of regulatory control. Prohibited systems are banned outright. High-risk systems face the most stringent obligations.

2. **High-risk AI systems must meet detailed compliance obligations before market placement.** Requirements include conformity assessments, technical documentation, risk management procedures, human oversight, post-market monitoring, and business records.

3. **General-purpose AI (GPAI) models face their own requirements, scaled by systemic impact.** All GPAI providers owe technical documentation, downstream information, a copyright policy and a public training-content summary; non-EU providers also need an EU authorised representative. Systemic-risk models (presumed above 10²⁵ FLOP) add notification, model evaluation with adversarial testing, risk mitigation, serious-incident reporting and cybersecurity.

4. **The role an organization plays (provider, deployer, importer, or distributor) determines its legal responsibilities.** Providers carry the heaviest burden. Deployers ensure safe implementation and oversight. Importers verify compliance for non-EU systems. Distributors must act upon credible non-compliance alerts.

5. **Penalties under the EU AI Act can reach up to €35 million or 7% of global turnover.** The tiered enforcement system calibrates penalties to violation severity. Prohibited practices incur the highest fines; even documentation failures can result in substantial penalties.

6. **Dates depend on the legal state.** As enacted, Annex III high-risk rules applied from 2 August 2026 and Annex I product rules from 2 August 2027. As amended by the Digital Omnibus on AI (Regulation (EU) 2026/1744, in force 27 July 2026), they apply from 2 December 2027 and 2 August 2028. 2 August 2026 still starts Art. 50 transparency and the Commission's GPAI enforcement, and 2 December 2026 brings the two new prohibitions. The exam blueprint predates the Omnibus, so know both columns.

7. **II.C is broader than the EU.** Under BOK v2.1, "AI-specific laws" also means South Korea's AI Basic Act and US federal and state AI laws. Compare their risk tiers, role definitions and enforcement with the EU model ([[South Korea AI Basic Act — Key Provisions]], [[US AI Laws — Federal and State]]).

---

## Key Terms

- **[[EU AI Act]]** — Landmark EU legislative framework governing AI design, deployment, and oversight via a risk-based classification system
- **[[Prohibited AI]]** — AI practices banned outright (social scoring, subliminal manipulation, real-time biometric ID in public spaces)
- **[[High-Risk AI]]** — AI systems significantly affecting rights/safety; most stringent controls (conformity assessments, CE marking, human oversight)
- **[[Limited-Risk AI]]** — AI systems requiring transparency but with limited impact (chatbots, deepfakes)
- **[[Minimal-Risk AI]]** — AI systems posing negligible risk; largely unregulated (spam filters, recommendation engines)
- **[[General-Purpose AI (GPAI)]]** — Models serving multiple purposes and integrable into diverse downstream systems (LLMs, foundation models)
- **[[Systemic Risk]]** — GPAI classification presumed above 10²⁵ FLOP of training compute (Art. 51(2)) or designated by the Commission using the Annex XIII criteria (e.g. reach, modalities, benchmarks)
- **[[CE Marking]]** — EU conformity mark required for high-risk AI systems before market placement
- **[[Notified Body]]** — Third-party organization authorized to conduct conformity assessments for high-risk AI
- **[[Conformity Assessment]]** — Process of demonstrating compliance with EU AI Act requirements before market placement
- **[[European AI Office]]** — Commission body that supervises and enforces GPAI obligations; as amended in 2026, also exclusively competent for AI systems built on a provider's own GPAI model and for AI in very large online platforms and search engines
- **[[Provider]]** — Entity that develops an AI system and places it on the EU market under its own name
- **[[Deployer]]** — Entity using AI systems in professional activities (not private use)
- **[[Importer]]** — Entity placing non-EU AI systems onto the EU market
- **[[Distributor]]** — Entity making AI systems available in the EU without modification (app stores, marketplaces)
- **[[Model Card]]** — Standardized factsheet summarizing GPAI characteristics, limitations, and risks
- **[[Human in the Loop]]** — Meaningful human oversight/intervention in consequential AI decisions
- **[[Extraterritoriality]]** — EU AI Act applies to non-EU entities placing AI on the EU market or affecting EU persons
- **[[Digital Omnibus on AI (Regulation 2026/1744)]]** — 2026 amending regulation, in force 27 July 2026: new high-risk dates, softer AI literacy duty, two new prohibitions, Art. 4a, wider AI Office competence
- **[[AI Act Milestone — December 2, 2027]]** — As amended by the 2026 Omnibus: Annex III high-risk rules apply
- **[[AI Act Milestone — August 2, 2028]]** — As amended by the 2026 Omnibus: Annex I product-embedded high-risk rules apply
- **[[Code of Practice on Marking and Labelling]]** — Voluntary Commission-backed code (final 10 June 2026) for Art. 50 marking of AI output and labelling of deepfakes and public-interest text
- **[[Nudification and CSAM Prohibitions]]** — Art. 5(1)(ba)–(bb), added by the 2026 Omnibus, applying from 2 December 2026

---

## Sources

- Regulation (EU) 2024/1689 (AI Act), OJ L, 12.7.2024: http://data.europa.eu/eli/reg/2024/1689/oj
- Regulation (EU) 2026/1744 (Digital Omnibus on AI), OJ L, 24.7.2026: http://data.europa.eu/eli/reg/2026/1744/oj
- AI Act Service Desk, implementation timeline: https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act
- Commission, "AI Omnibus enters into force": https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force
- Commission, enforcement of the AI Act: https://digital-strategy.ec.europa.eu/en/policies/enforcement-ai-act
- Commission, GPAI Code of Practice and signatories: https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
- Commission GPAI guidelines: https://digital-strategy.ec.europa.eu/en/library/guidelines-scope-obligations-providers-general-purpose-ai-models-under-ai-act
- Code of Practice on Transparency of AI-generated Content: https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
- Draft Art. 6 guidelines consultation: https://digital-strategy.ec.europa.eu/en/consultations/targeted-consultation-draft-guidelines-classification-high-risk-artificial-intelligence-systems
- IAPP, AIGP Body of Knowledge v2.1 (effective 2 February 2026)
