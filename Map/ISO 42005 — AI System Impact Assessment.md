---
tags:
 - aigp/reference
 - aigp/standards
 - aigp/iso
 - aigp/domain-II
created: 2026-09-23
source: "ISO/IEC 42005:2025, Information technology — Artificial intelligence (AI) — AI system impact assessment, first edition, 28 May 2025 (official abstract and preview table of contents); independent summaries by CMS (3 Sep 2025), Nemko, Scrut and cyberzoni"
aliases:
 - ISO 42005
 - ISO/IEC 42005
 - AI System Impact Assessment Standard
related:
 - "[[AIGP Body of Knowledge — Exam Blueprint]]"
 - "[[AI Standards and Frameworks]]"
 - "[[ISO 42001 — Structured Reference]]"
 - "[[ISO 23894 — AI Risk Management]]"
 - "[[ISO 22989 — Key Definitions]]"
 - "[[The EU AI Act]]"
 - "[[GDPR — AI-Relevant Provisions]]"
 - "[[AI System Design]]"
 - "[[AI Risk Management and Assurance]]"
---

# ISO/IEC 42005:2025 AI System Impact Assessment — Key Provisions

> **Status:** Published International Standard, first edition. Guidance only, so there is nothing to certify against. **Published:** 28 May 2025 (39 pages, paid). **Developed by:** ISO/IEC JTC 1/SC 42, Artificial intelligence. **Blueprint:** BOK v2.1 II.D names it as one of the three core ISO AI standards, with 22989 and 42001. It is also the natural method for the impact-assessment tasks in III.A and IV.B.

> **How this note was built.** The standard is copyrighted and sold (CHF 181 on the IEC webstore). This note paraphrases the official abstract, the clause and annex headings shown in ISO's free preview, and independent summaries. Clause numbers appear only where two sources agree. Nothing is reproduced from the standard's text.

---

## 1. Overview

ISO/IEC 42005 tells an organization how to set up and run a repeatable process for assessing how an AI system, and the ways it can foreseeably be used, may affect people: individuals, groups of individuals and society as a whole. It also describes what a finished assessment record should contain.

Three ideas carry most exam questions:

1. **It is guidance, not a requirements standard.** No one can be certified to 42005. The certifiable standard is ISO/IEC 42001, which *requires* an AI system impact assessment but says little about how to do one. 42005 fills that gap.
2. **Its lens is people, not the organization.** ISO/IEC 23894 manages risk to the organization's objectives. 42005 looks outward at the benefits and harms for those affected, and its findings then feed the organization's risk process.
3. **It runs across the lifecycle.** An assessment starts at design, gates deployment, and is revisited when the system, its use or its context changes.

---

## 2. Scope and applicability

| Question | Answer |
|---|---|
| **Who can use it?** | Any organization that develops, provides or uses AI systems, whatever its size, type or nature |
| **Whose impacts?** | Individuals, groups of individuals and societies that the system, or its foreseeable applications, can affect |
| **What does it cover?** | How and when to perform assessments across the AI system lifecycle, what to document, and how to integrate the work with AI risk management and an AI management system |
| **Certifiable?** | No. There is no 42005 certificate. Certification exists for 42001 management systems, issued by bodies that meet ISO/IEC 42006 |
| **Legal force?** | None of its own. It can supply content for legally required assessments (GDPR DPIA, EU AI Act FRIA) but does not replace them |
| **Sector** | Sector-neutral |

> **Trap:** "42005 is for AI developers." It is for organizations that develop, *provide or use* AI. A company that only deploys a vendor's model is squarely in scope and cannot simply adopt the vendor's view of the impacts.

---

## 3. Where 42005 sits in the ISO/IEC AI family

The standard's introduction places it in an ecosystem of governance, risk and conformity standards, each of which stresses the need to consider impacts on people.

| Standard | Role | How it relates to 42005 |
|---|---|---|
| **ISO/IEC 22989:2022** | Concepts and terminology | Supplies the shared vocabulary (AI system, stakeholder roles, trustworthiness properties) the assessment uses |
| **ISO/IEC 38507** | Governance implications of AI for governing bodies | A board uses impact findings to check that AI use fits the organization's values and goals |
| **ISO/IEC 23894:2023** | AI risk management guidance, built on ISO 31000 | Organizational-risk lens. 42005's Annex B explains how impact findings feed that risk process |
| **ISO/IEC 42001:2023** | Certifiable AI management system (AIMS) | Requires AI system impact assessment (clauses 6.1.4 and 8.4; Annex A objective A.5). 42005's Annex A explains using 42005 inside a 42001 AIMS |
| **ISO/IEC 42006:2025** | Requirements for bodies that audit and certify an AIMS against 42001 | Indirect. A 42001 audit tests the impact-assessment requirements; 42005 is one way to meet them and is never itself certified |

> **Blueprint note:** BOK v2.1 II.D names 22989, 42001 and 42005 as "the core ISO AI standards". ISO/IEC 23894 is not on that list (v2.0.1 named only 22989 and 42001), but 42005's Annex B keeps it in view.

---

## 4. Key concepts

| Concept | Meaning in this context |
|---|---|
| **AI system impact assessment** | ISO/IEC 42001 (definition 3.24) describes it as a formal, documented process in which an organization that develops, provides or uses AI identifies, evaluates and addresses impacts on individuals, groups and societies. 42005 is the detailed guidance for that process |
| **Impact** | Two-sided: benefits *and* harms. The assessment asks for measures that address both |
| **Actual and reasonably foreseeable impacts** | Not only what the designers intend. Includes how the system could fail and how it could foreseeably be misused |
| **Intended vs unintended uses** | The record describes the uses the organization plans and the uses it does not plan but that could occur |
| **Interested parties** | Split into those directly affected (for example, applicants scored by a model) and other relevant parties |
| **Sensitive and restricted uses** | The organization sets thresholds that flag uses needing closer scrutiny because of their potential effect on people, or uses limited by law or policy. Flagged cases get escalation and formal approval |
| **Impact scales** | Organization-defined scales for rating how significant an impact is, used with those thresholds |

---

## 5. Building the process (Clause 5)

Clause 5 is about the organization's *process*, set up before any single system is assessed. Its elements, in order:

| # | Element | What the organization settles |
|---|---|---|
| 1 | Write the process down | A documented procedure and templates (Annex E is an example template) |
| 2 | Integrate with other management processes | Ties into enterprise risk, compliance, privacy and the AIMS instead of running as a stand-alone exercise |
| 3 | Timing | Which lifecycle stages require an assessment, and what prompts a reassessment |
| 4 | Scope | Which system, version, uses and boundaries an assessment covers |
| 5 | Responsibilities | Who performs, who contributes, who reviews and who approves |
| 6 | Thresholds | Criteria for sensitive uses, restricted uses and impact scales that decide depth, escalation and sign-off |
| 7 | Perform | Carry out the assessment |
| 8 | Analyse | Interpret the results and decide what to do |
| 9 | Record and report | Keep the record and report results to the right audiences |
| 10 | Approve | Formal approval of the assessment and its outcome |
| 11 | Monitor and review | Keep the assessment current while the system operates |

> **Memory hook:** *write it down → plug it in → when → what → who → thresholds → do → analyse → record → approve → review.*

---

## 6. Timing and reassessment

**When to assess.** The sources agree on a lifecycle approach rather than a one-off check:

- **At design**, while the use case is still being shaped and changes are cheap.
- **Before deployment**, as a gate before release or go-live.
- **During operation**, through monitoring and periodic review.
- **On significant change**, whenever the system, its use or its context shifts.

**Reassessment triggers** (the categories on which the sources agree):

| Trigger | Example |
|---|---|
| Change of intended use or purpose | A demand-forecasting model starts being used to rate individual workers |
| Significant change to the system | New data types, retraining, or an updated or replaced model or algorithm |
| Change in the legal or policy environment | A new law, regulation or internal policy now applies to the use |
| Monitoring or feedback reveals something new | Impacts appear that the assessment did not anticipate |

> **42001 link:** clause 8.4 of ISO/IEC 42001 calls for AI system impact assessments at planned intervals or when significant changes are proposed. 42005 gives the detail for deciding what counts and how deep to go.

---

## 7. What the assessment records (Clause 6)

| Element | What goes in |
|---|---|
| **Scope** | The system, version and uses the assessment covers |
| **AI system information** | Description; functions and capabilities; purpose; intended uses; unintended uses |
| **Data information and quality** | Data sources and characteristics; documentation of data quality |
| **Algorithm and model information** | Algorithms used or developed; models used and how they were developed |
| **Deployment environment** | Geographical area and languages; complexity and constraints of the setting |
| **Relevant interested parties** | Directly affected parties; other relevant parties |
| **Actual and reasonably foreseeable impacts** | Benefits and harms; failures and reasonably foreseeable misuse |
| **Measures** | Actions that address the harms and benefits identified |

> **Trap:** An impact assessment is not just a list of harms. A record with no benefits, no unintended uses or no foreseeable misuse is incomplete.

---

## 8. Harms and benefits

- Assess positive and negative impacts on individuals, groups and society.
- Annex C offers a taxonomy of harms and benefits spanning themes such as fairness, transparency, privacy and environmental effects.
- Consider how the system could fail, and how it could be misused in ways that are reasonably foreseeable.
- Measures work in both directions: reduce or remove harms, and secure the intended benefits.
- Judge impacts in context. The same model can have very different impacts in another country, language or population, which is why the deployment environment is part of the record.

---

## 9. The annexes (all informative)

| Annex | Subject | Reach for it when… |
|---|---|---|
| **A** | Guidance for use with ISO/IEC 42001 | Meeting 42001's impact-assessment requirements inside an AIMS |
| **B** | Guidance for use with ISO/IEC 23894 | Feeding impact findings into the organization's AI risk management |
| **C** | Harms and benefits taxonomy | Brainstorming and categorizing impacts |
| **D** | Aligning the AI system impact assessment with other assessments | Coordinating with other assessments the organization already runs |
| **E** | Example of an AI system impact assessment template | Starting a first assessment |

> **Mnemonic:** **A** = AIMS (42001) · **B** = the risk standard (23894) · **C** = catalogue of harms and benefits · **D** = dovetail with other assessments · **E** = example template.

---

## 10. Relationship to ISO/IEC 42001

| | ISO/IEC 42001:2023 | ISO/IEC 42005:2025 |
|---|---|---|
| **Type** | Requirements standard, certifiable | Guidance, not certifiable |
| **Level** | The whole AI management system | Individual AI systems and their impacts |
| **Impact assessment** | Requires a process (clause 6.1.4, planning) and its performance (clause 8.4, operation). Normative Annex A objective A.5, "Assessing impacts of AI systems": A.5.2 process, A.5.3 documentation, A.5.4 impacts on individuals or groups, A.5.5 societal impacts | Explains how to design that process and what each record should contain; Annex A maps the two |
| **Edition** | Still the first (2023) edition as of September 2026 | First edition, May 2025 |

> **Trap:** A 42001 certificate never "covers 42005". The auditor tests 42001's own clauses. Following 42005 is simply a well-regarded way to meet them.

---

## 11. Relationship to ISO/IEC 23894

| | ISO/IEC 23894:2023 | ISO/IEC 42005:2025 |
|---|---|---|
| **Question asked** | What could stop the organization meeting its objectives? | How could this system affect people and society, for better or worse? |
| **Lens** | Risk to the organization | Impacts on individuals, groups and societies |
| **Lineage** | Extends ISO 31000 with AI-specific guidance | Annex B shows how impact findings feed the risk process |
| **Output** | Risk treatment decisions | Impact record, measures, approval |

> **Exam pattern:** "harm to the people affected" points to a 42005 impact assessment; "risk to the business" points to 23894 risk management. Each feeds the other. A harm that barely registers as organizational risk can still be a significant impact on the people who bear it.

---

## 12. Comparison: 42005 vs GDPR DPIA vs EU AI Act FRIA

| | ISO/IEC 42005 impact assessment | GDPR Art. 35 DPIA | EU AI Act Art. 27 FRIA |
|---|---|---|---|
| **Nature** | Voluntary guidance | Legal duty when triggered | Legal duty for in-scope deployers |
| **Who** | Any organization developing, providing or using AI | The controller, seeking the DPO's advice where one is designated | Deployers that are bodies governed by public law or private entities providing public services, plus deployers of Annex III 5(b) creditworthiness and 5(c) life/health-insurance pricing systems |
| **Trigger** | The organization's own lifecycle points and thresholds | Processing likely to result in a high risk to people's rights and freedoms (Art. 35(1)); the listed cases in Art. 35(3) include systematic, extensive profiling with legal or similarly significant effects | Before first use of an Art. 6(2) (Annex III) high-risk system; Annex III point 2 (critical infrastructure) is excluded |
| **Focus** | Benefits and harms to individuals, groups and society | Risks to data subjects from processing personal data | Impact on the fundamental rights of the people and groups affected |
| **Core content** | System, data, model, deployment environment, interested parties, impacts (including failures and misuse), measures | Description and purposes; necessity and proportionality; risks; measures to address them (Art. 35(7)) | Deployer's processes; period and frequency of use; categories of people affected; specific risks of harm; human oversight; measures if risks materialize, including governance and complaints (Art. 27(1)(a)–(f)) |
| **Outward step** | None required (internal approval) | Prior consultation with the supervisory authority if high risk remains without mitigation (Art. 36(1)) | Notify the market surveillance authority of the results, using the AI Office template |
| **Keeping current** | Monitor, review, reassess on triggers | Review at least when the risk changes (Art. 35(11)) | Update when any element changes during use |
| **Overlap** | Annex D helps align it with other assessments | — | Where a DPIA already meets some FRIA obligations, the FRIA builds on it rather than duplicating it (Art. 27(4)) |
| **Timing** | Available since May 2025 | Applies today | Applies with the Annex III high-risk regime: 2 Dec 2027 as amended by the 2026 Digital Omnibus (originally 2 Aug 2026) |

> **Rule of thumb:** One well-built 42005 record can feed both the DPIA and the FRIA, but neither law accepts a voluntary standard in place of its own assessment. 42005 is not a harmonised standard, so it gives no presumption of conformity under AI Act Art. 40, which covers harmonised standards published in the Official Journal.

---

## 13. Worked example

A regional bank licenses a vendor's credit-scoring model for EU consumer lending. Assume the AI Act's Annex III deployer obligations are in application.

1. **Scope and thresholds.** Scoring the creditworthiness of individuals crosses the bank's sensitive-use threshold, so the assessment escalates to the AI governance committee for approval.
2. **System, data and model information.** The bank requests the vendor's documentation to complete these sections. Deploying rather than building does not remove the need to understand them.
3. **Deployment environment and interested parties.** Markets and languages served; applicants (directly affected); co-borrowers, guarantors and supervisors (other relevant parties).
4. **Impacts.** Benefits (faster decisions, wider access to credit) and harms (unfair denials, reasons that cannot be explained, errors from stale data), including foreseeable misuse such as reusing scores for marketing.
5. **Legal overlay.** The same evidence feeds a GDPR Art. 35 DPIA (profiling with significant effects) and an AI Act Art. 27 FRIA (the bank deploys an Annex III 5(b) system). The bank must still complete both, and must notify the FRIA results.
6. **Reassessment.** Triggered when the vendor retrains or replaces the model, or when the bank extends the score to a new product.

---

## Exam Angles

- **Guidance vs requirements.** 42005 is guidance and cannot be certified. 42001 is the certifiable AIMS standard. 42006 sets rules for the bodies that certify 42001.
- **People, not the balance sheet.** 42005 assesses impacts on individuals, groups and societies; 23894 manages risk to the organization. Annex B connects them.
- **Both directions.** Benefits and harms, with measures for each. "Only negative impacts" is a wrong answer.
- **Lifecycle, not one-off.** Design, pre-deployment, operation, and reassessment on significant change. "Once, just before launch" is wrong.
- **Users are in scope.** Organizations that develop, provide *or use* AI can apply it. A deployer cannot simply rely on its vendor.
- **Annex map.** A = 42001, B = 23894, C = harms and benefits taxonomy, D = aligning with other assessments, E = example template.
- **42001 hooks.** Clauses 6.1.4 and 8.4 and Annex A objective A.5 require AI system impact assessment; 42005 explains how.
- **No legal shortcut.** A 42005 record can feed a DPIA or FRIA but never replaces them, and it gives no AI Act presumption of conformity.
- **Structure.** Clause 5 is the process; Clause 6 is what one assessment records (system, data, model, deployment environment, interested parties, impacts, measures).
- **Currency.** 42005 was published on 28 May 2025; 42001 is still the 2023 edition.

## Key Terms

- [[ISO/IEC 42005]]
- [[AI System Impact Assessment (ISO/IEC 42005)]]
- [[Impact Reassessment Trigger]]
- [[ISO/IEC 42006]]

## Sources

- https://webstore.iec.ch/en/publication/107659 (ISO/IEC 42005:2025 abstract, date, pages, price, committee)
- https://www.iso.org/standard/42005 (official ISO page; refused automated access, so the abstract was checked on the IEC webstore)
- https://cdn.standards.iteh.ai/samples/iso/iso-iec-42005-2025/08d7e571c9c3429d82aceca0b4746d01/iso-iec-42005-2025.pdf (ISO's free preview: contents, foreword, introduction)
- https://cms.law/en/aut/legal-updates/iso-iec-42005-2025-a-new-blueprint-for-legal-and-commercial-leaders-navigating-ai-risk-and-governance
- https://digital.nemko.com/insights/iso-iec-42005-ai-impact-assessment-framework-guide
- https://digital.nemko.com/standards/iso-iec-42005
- https://www.scrut.io/post/iso-42005
- https://www.pillar.security/blog/understanding-iso-42005-ai-impact-assessment
- https://cyberzoni.com/standards/iso-42005/
- https://webstore.iec.ch/en/publication/90574 (ISO/IEC 42001:2023, first edition)
- https://cdn.standards.iteh.ai/samples/81230/4c1911ebc9a641fcb6ee21aa09c28ad3/ISO-IEC-42001-2023.pdf (42001 preview: definition 3.24, clauses 6.1.4 and 8.4)
- https://advisera.com/articles/iso-42001-clauses-requirements/
- https://cyberzoni.com/standards/iso-42001/clause-8/
- https://isomanaged.com/knowledge-base/iso-standards/iso-42001/iso-42001-annex-a-controls/iso-42001-annex-a-5-assessing-impacts-of-ai-systems
- https://www.isms.online/iso-42001/annex-a-controls/a-5-assessing-impacts-of-ai-systems/
- https://webstore.iec.ch/en/publication/108460 (ISO/IEC 42006:2025)
- https://artificialintelligenceact.eu/article/27/ · https://artificialintelligenceact.eu/annex/3/ · https://artificialintelligenceact.eu/article/40/
- https://gdpr-info.eu/art-35-gdpr/ · https://gdpr-info.eu/art-36-gdpr/
- https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force
