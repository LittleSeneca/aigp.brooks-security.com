---
tags:
 - aigp/reference
 - aigp/standards
 - aigp/gpai
created: 2026-07-11
domain: "II: Understanding How Laws, Standards and Frameworks Apply to AI"
subdomain: "II.C: Understand the Main Elements of the EU AI Act"
related:
 - "[[AIGP Body of Knowledge — Exam Blueprint]]"
 - "[[EU AI Act 2024 — Key Provisions]]"
 - "[[AI Standards and Frameworks]]"
 - "[[The EU AI Act]]"
 - "[[AI Risk Management and Assurance]]"
---

# GPAI Code of Practice — Key Provisions

> **Source:** Code of Practice for General-Purpose AI Models (2025), published by the European AI Office under Article 56 of the EU AI Act.

---

## 1. Overview and Purpose

The **GPAI Code of Practice** is a compliance-facilitation instrument issued under **Article 56 of the EU AI Act**. It provides detailed Measures that signatory GPAI providers commit to implementing in order to demonstrate compliance with:

| Article | Obligation | Applies To |
|---------|-----------|------------|
| **Art 53(1)(a)** | Technical documentation (Annex XI) | All GPAI providers |
| **Art 53(1)(b)** | Information to downstream providers (Annex XII) | All GPAI providers |
| **Art 53(1)(c)** | Copyright policy compliance | All GPAI providers |
| **Art 53(1)(d)** | Public training-content summary | All GPAI providers |
| **Art 55(1)** | Systemic risk assessment & mitigation | **GPAI with systemic risk only** |

> **Critical nuance:** Adherence to the Code does **NOT** constitute conclusive evidence of compliance with EU AI Act obligations. It is a demonstration aid, not a safe harbor.

---

## 2. Structure of the Code — Three Chapters

| Chapter | Working Groups | Target Providers | Key Focus |
|---------|---------------|------------------|-----------|
| **Transparency** | WG 1 (Oliver, Bommasani) | All GPAI providers | Model documentation, downstream info, Annex XI/XII |
| **Copyright** | WG 1 (Peukert, Castets-Renard) | All GPAI providers | Copyright policy, opt-out compliance (Art 4(3) CDSM), anti-infringement |
| **Safety & Security** | WG 2–4 (Samwald, Bengio, Schaake) | Systemic-risk GPAI only | SSF, risk identification/analysis, mitigations, incident reporting, cybersecurity |

---

## 3. Transparency Chapter (All GPAI Providers)

### 3.1 Commitment 1: Documentation

**Legal basis:** Articles 53(1)(a), 53(1)(b), 53(2), 53(7); Annexes XI and XII AI Act

| Measure | Requirement | Details |
|---------|------------|---------|
| **1.1** | Draw up & maintain Model Documentation | Use the **Model Documentation Form**; update for model changes; retain for **10 years** after market placement |
| **1.2** | Provide information to downstream providers & AI Office | Publicly disclose contact info; respond to downstream providers within **14 days** (save exceptional circumstances); provide to AI Office upon request under Art 91/75(3) |
| **1.3** | Quality, integrity & security of information | Control documented information; follow established protocols and technical standards |

> **Open-source exception (Art 53(2)):** Transparency obligations do not apply to free and open-source GPAI models unless the model is classified as **systemic risk**. Modifiers who fine-tune a model become the provider of the modified model (proportionality principle per recital 109).

### 3.2 Model Documentation Form

The Form captures information for two audiences:

| Audience | Access Condition |
|----------|-----------------|
| **Downstream providers** | Provided upon request; enables integration & downstream compliance |
| **AI Office / national competent authorities** | Only upon formal request with stated legal basis and purpose |

**Confidentiality:** All recipients are bound by Art 78 AI Act — must protect IP, trade secrets, and confidential business information.

---

## 4. Copyright Chapter (All GPAI Providers)

**Legal basis:** Article 53(1)(c) AI Act; Directive (EU) 2019/790 (CDSM Directive), particularly Art 4(3)

### 4.1 Key Commitments

| Measure | Commitment | Key Details |
|---------|-----------|-------------|
| **1.1** | Copyright policy | Draw up, maintain, and implement a single-document copyright policy; assign organizational responsibility |
| **1.2** | Lawful access only | Do not circumvent paywalls/TPMs; exclude websites persistently flagged as infringing by EU/EEA courts |
| **1.3** | Respect rights reservations | Comply with **robots.txt** (IETF RFC 9309); comply with other machine-readable opt-out protocols; make crawler info publicly available; notify rightsholders of updates |
| **1.4** | Mitigate infringing outputs | Technical safeguards against reproducing training content; prohibit copyright-infringing uses in ToS/acceptable use policy |
| **1.5** | Point of contact & complaints | Designate electronic contact for rightsholders; implement complaint mechanism; act on complaints diligently |

> **Important:** The Copyright Chapter is **complementary** to the Art 53(1)(d) obligation to publish a training-content summary (template to be provided by the AI Office). Adherence to this Chapter does **not** constitute compliance with substantive copyright law — that remains for Member State courts and the CJEU.

---

## 5. Safety & Security Chapter (Systemic-Risk GPAI Only)

**Legal basis:** Articles 55(1) and 56(5) AI Act

**Ten Commitments** structure the entire systemic risk management lifecycle:

### 5.1 Commitments Overview

| # | Commitment | Purpose |
|---|-----------|---------|
| **1** | Safety & Security Framework (SSF) | Adopt a state-of-the-art SSF; create → implement → update; notify AI Office |
| **2** | Systemic risk identification | Structured process to identify risks; develop systemic risk scenarios |
| **3** | Systemic risk analysis | Gather model-independent info; model evaluations; risk modelling; risk estimation; post-market monitoring |
| **4** | Risk acceptance determination | Define acceptance criteria (risk tiers); determine if risks are acceptable; decision to proceed/not proceed |
| **5** | Safety mitigations | Implement safety mitigations across model lifecycle (filtering, monitoring, staging access, etc.) |
| **6** | Security mitigations | Cybersecurity against unauthorized access, model theft, (self-)exfiltration; apply Appendices 4.1–4.5 |
| **7** | Model Reports | Create and maintain Safety & Security Model Reports; notify AI Office |
| **8** | Responsibility allocation | Define oversight, ownership, support, and assurance roles across organizational levels |
| **9** | Serious incident reporting | Track, document, and report serious incidents to AI Office and national authorities |
| **10** | Additional documentation & transparency | Detailed technical docs on request (retain 10 years); publish summarized Framework and Model Reports |

---

## 6. Systemic Risk — Qualification Thresholds

### 6.1 Definition (Art 3(65) AI Act)

> *"Systemic risk" = a risk specific to the **high-impact capabilities** of GPAI models, having a **significant impact on the Union market** due to their reach, or due to actual/reasonably foreseeable negative effects on public health, safety, public security, fundamental rights, or society as a whole, that can be **propagated at scale across the value chain**.*

### 6.2 What Triggers Systemic Risk Classification

| Factor | Description |
|--------|-------------|
| **Compute thresholds** | Exceptionally high training compute (e.g., >10²⁵ FLOPs — illustrative) |
| **High-impact capabilities** | Capabilities matching/exceeding the most advanced GPAI models (Art 3(64)) |
| **Wide deployment** | Integration into critical infrastructure or across industry sectors |
| **Autonomous influence** | Demonstrated ability to autonomously influence behavior at scale |
| **Commission designation** | European Commission may designate models as systemic risk based on criteria in Art 51 |

---

## 7. Systemic Risk Types (Appendix 1.1 & 1.4)

### 7.1 Five Risk Categories

| Type | Examples |
|------|---------|
| **Public health** | Biosecurity risks, pandemic-enabling capabilities |
| **Safety** | Major accidents, critical infrastructure disruption |
| **Public security** | Cyber-attacks, CBRN weapon proliferation |
| **Fundamental rights** | Discrimination, privacy violations, surveillance |
| **Society as a whole** | Democratic process undermining, concentration of power, CSAM, NCII |

### 7.2 Specified Systemic Risks (Appendix 1.4) — Must Be Assessed

1. **CBRN:** Enabling chemical, biological, radiological, nuclear attacks or accidents
2. **Loss of control:** Humans losing ability to direct, modify, or shut down a model (misalignment, self-replication, power-seeking)
3. **Cyber offence:** Large-scale sophisticated cyber-attacks on critical systems
4. **Harmful manipulation:** Strategic distortion of human behaviour/beliefs targeting large populations or high-stakes decision-makers

---

## 8. Obligations Comparison: Standard vs. Systemic-Risk GPAI

| Obligation | Standard GPAI | GPAI with Systemic Risk |
|-----------|:---:|:---:|
| Technical documentation (Art 53(1)(a)) | ✅ Required | ✅ Required |
| Downstream provider info (Art 53(1)(b)) | ✅ Required | ✅ Required |
| Copyright policy (Art 53(1)(c)) | ✅ Required | ✅ Required |
| Public training-content summary (Art 53(1)(d)) | ✅ Required | ✅ Required |
| Safety & Security Framework (SSF) | ❌ | ✅ **Required** |
| Systemic risk identification & analysis | ❌ | ✅ **Required** |
| Model evaluations (state-of-the-art) | Encouraged | ✅ **Required** |
| Safety mitigations | ❌ | ✅ **Required** |
| Cybersecurity (Appendix 4 standard) | Best practice | ✅ **Required** |
| Safety & Security Model Report | ❌ | ✅ **Required** (every 6 months for most capable) |
| Independent external evaluations | ❌ | ✅ **Required** (unless safe-ref model or unavailable) |
| Serious incident reporting to AI Office | ❌ | ✅ **Required** |
| Systemic risk responsibility allocation | ❌ | ✅ **Required** |
| Post-market monitoring | ❌ | ✅ **Required** |
| EU legal representative | ❌ | ✅ **Required** |
| Open-source exemption (Art 53(2)) | ✅ Available | ❌ Not available |

---

## 9. Safety & Security Framework (SSF) — Commitment 1

The SSF is the central governance instrument for systemic-risk GPAI.

### 9.1 Framework Contents

| Element | Description |
|---------|-------------|
| **Trigger points** | When lighter-touch evaluations are conducted along the lifecycle |
| **Risk acceptance criteria** | Systemic risk tiers and how they map to acceptance decisions |
| **Mitigation descriptions** | What safety/security mitigations are needed per risk tier |
| **Timeline estimates** | When models are expected to exceed current risk tiers |
| **External input process** | How governments/others can influence go/no-go decisions |
| **Responsibility allocation** | How systemic risk duties are distributed across the org |
| **Update process** | How the Framework itself is reviewed and updated |

### 9.2 Framework Lifecycle

```
CREATE → IMPLEMENT → UPDATE (continuously)
 ↓
NOTIFY AI Office (within 5 business days of confirmation)
 ↓
FRAMEWORK ASSESSMENT (every 12 months or when materially undermined)
 ├── Adequacy assessment
 └── Adherence assessment (with remediation plans if needed)
```

---

## 10. Model Evaluations (Commitment 3, Appendix 3)

### 10.1 Core Requirements

| Requirement | Detail |
|-------------|--------|
| **Scientific rigour** | High internal validity, external validity, reproducibility |
| **Model elicitation** | State-of-the-art techniques; minimize under-elicitation; prevent sandbagging/deception |
| **Mitigation effectiveness** | Assess under adversarial pressure (jailbreaking, fine-tuning attacks) |
| **Independent external evaluators** | Qualified external teams must conduct evaluations (unless exemptions apply) |
| **Adequate resources** | 20+ business days; adequate compute, staffing, access to model internals |

### 10.2 Evaluation Methods (Examples)

- Q&A sets, task-based evaluations, benchmarks
- Red-teaming & adversarial testing
- Human uplift studies
- Model organisms, simulations
- Proxy evaluations for classified materials

---

## 11. Cybersecurity Requirements (Commitment 6, Appendix 4)

### 11.1 Security Goal

Providers must define a **Security Goal** specifying which threat actors to protect against:
- **Non-state external threats:** ~10 experienced cybersecurity professionals, EUR 1M budget, multi-month operation
- **Insider threats:** Hostile employees, industrial espionage, model self-exfiltration
- **Other expected threat actors**

### 11.2 Five Security Domains

| Appendix | Domain | Key Mitigations |
|----------|--------|----------------|
| **4.1** | General security | MFA, zero trust, phishing filtering, patch management, removable media policies |
| **4.2** | Unreleased model weights | Encryption (256-bit + TPM), confidential computing, physical access control, secure registry |
| **4.3** | Interface hardening | Output rate limiting, security reviews of interfaces, limited personnel with non-hardened access |
| **4.4** | Insider threats | Background checks, insider threat training, sandboxed execution, training data tamper checks |
| **4.5** | Security assurance | Independent external reviews, red-teaming, bug bounties, EDR/IDS, personnel integrity testing |

> **Exemption:** Models whose capabilities are inferior to at least one model whose parameters are publicly available for download are exempt from Commitment 6.

---

## 12. Serious Incident Reporting (Commitment 9)

### 12.1 Information Required (Measure 9.2)

1. Start/end dates of the incident
2. Resulting harm and affected victims/groups
3. Chain of events leading to the incident
4. Model involved
5. Evidence of model involvement
6. Signatory's response actions
7. Recommendations for authorities
8. Root cause analysis (model outputs, inputs, mitigation failures)
9. Patterns from post-market monitoring (including near misses)

### 12.2 Reporting Deadlines

| Severity | Deadline After Awareness |
|----------|-------------------------|
| **Critical infrastructure disruption** (serious & irreversible) | **2 days** |
| **Serious cybersecurity breach** (incl. model weight exfiltration) | **5 days** |
| **Death of a person** | **10 days** |
| **Serious harm** (health, fundamental rights, property, environment) | **15 days** |
| **Unresolved incidents** (interim update) | Every **4 weeks** after initial report |
| **Final report** (after resolution) | Within **60 days** of resolution |

### 12.3 Retention

Documentation retained for at least **5 years** from date of documentation or incident resolution (whichever later).

---

## 13. Governance & Responsibility (Commitment 8)

### 13.1 Four Responsibility Types

| Responsibility | Role | Organizational Level |
|---------------|------|---------------------|
| **Oversight** | Supervise systemic risk management | Supervisory board / risk committee / independent body |
| **Ownership** | Manage systemic risks day-to-day | Executive management (Head of Research, Head of Product) |
| **Support & Monitoring** | Conduct risk assessments; monitor processes | Independent executive (CRO, VP Safety & Security) — must be **separate** from core business |
| **Assurance** | Internal/external audit of adequacy | Chief Audit Executive / Internal Audit / sub-committee |

### 13.2 Healthy Risk Culture Indicators (Measure 8.3)

- Tone from the top communicating the SSF
- Clear communication and challenge of risk decisions
- Incentives aligned against excessive risk-taking
- Anonymous surveys confirming staff comfort raising concerns
- Active internal reporting channels
- Whistleblower protection policy (published, communicated annually)
- No retaliation against reporters

---

## 14. How the Code Relates to the EU AI Act

| Aspect | EU AI Act | GPAI Code of Practice |
|--------|----------|----------------------|
| **Legal force** | Binding regulation | Voluntary (compliance demonstration aid) |
| **Issuing authority** | EU co-legislators | European AI Office (Art 56 mandate) |
| **Scope** | All AI systems + GPAI models | GPAI models only |
| **Obligations** | Prescribed in Arts 53 & 55 | Detailed Measures operationalizing Arts 53 & 55 |
| **Enforcement** | National competent authorities; AI Office | Relied upon by providers to demonstrate compliance |
| **Updates** | Amendment via legislative process | Continuous evolution; Framework updates every 12 months |
| **Presumption of conformity** | Not provided by Code alone | Code adherence ≠ conclusive compliance evidence |

> **Art 56(6) AI Act:** The Commission may approve the Code and give it general validity within the Union by implementing act. Until then, it serves as a guiding compliance instrument.

---

## 15. Key Definitions (Glossary)

| Term | Definition (Summarized) |
|------|------------------------|
| **State of the art** | Forefront of research, governance, and technology, beyond best practice |
| **Best practice** | Accepted among systemic-risk GPAI providers as the best processes for risk assessment/mitigation |
| **Appropriate** | Suitable and necessary — best practice, state of the art, or more innovative techniques |
| **Model elicitation** | Technical work to systematically enhance a model's capabilities for accurate measurement |
| **Near miss** | A situation in which a serious incident could have, but did not, materialize |
| **Systemic risk scenario** | A scenario in which a systemic risk might materialize |
| **Systemic risk tiers** | Tiers in the Framework corresponding to a certain level of systemic risk |
| **Safety margin** | Buffer in acceptance criteria accounting for uncertainties in assessments, mitigations, and capability changes |
| **Safe reference model** | A previously assessed model serving as benchmark for evaluating newer models (Appendix 2.1) |
| **Similarly safe or safer model** | Model with no materially different risk scenarios and ≤ benchmark scores compared to safe reference (Appendix 2.2) |

---

## 16. Exam Relevance

For the **AIGP exam**, focus on:

1. **Three chapters** and which GPAI providers they apply to
2. **Articles 53 vs. 55** — transparency/copyright (all) vs. safety/security (systemic risk only)
3. **Systemic risk triggers** — compute thresholds, high-impact capabilities, Commission designation
4. **Safety & Security Framework** as the central governance instrument
5. **Serious incident reporting deadlines** — 2/5/10/15 day tiers
6. **Independent external evaluations** requirement for systemic-risk models
7. **Governance structure** — four responsibility types (oversight, ownership, support, assurance)
8. **Code is NOT conclusive evidence** of compliance — a frequent exam trap
9. **Open-source exemption** (Art 53(2)) — applies to transparency/copyright, NOT to systemic risk models
10. **Copyright** — Art 4(3) CDSM Directive opt-out; robots.txt compliance

---

> **Related notes:** [[The EU AI Act]] covers the statutory GPAI framework; [[AI Standards and Frameworks]] covers OECD, NIST, and ISO standards referenced throughout; [[AI Risk Management and Assurance]] connects to systemic risk management practices.
