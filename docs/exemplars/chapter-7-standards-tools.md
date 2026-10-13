> **Proposal, not yet in the manuscript.** This replaces the Chapter 7 block in `aigp-book.md`. Original: 5,899 words. Everything below is manuscript content.

## Chapter 7: Standards, Frameworks and Certification

Regulation usually says what must be achieved and rarely says how, and that gap is where standards live. A **standard** is a document, published by a recognised body, that says how a thing is done; a **regulation** is a legal instrument that binds named parties. Standards are voluntary and instruments are binding, and a voluntary standard becomes consequential when it is cited in law, written into a contract, or used to evidence compliance.

Three mechanisms do that work: **incorporation by reference**, a law naming a standard so its content becomes required; **contractual adoption**, parties agreeing to be measured against it; and **evidentiary use**, a regulator, auditor or court treating conformity as proof of due care.

None is law itself, and one limit runs through the chapter: a certificate attests that an organization runs a management system, not that any particular AI system is safe, fair or lawful.

This chapter covers the values baseline (7.1), the NIST framework and its implementing layers (7.2 to 7.4), the ISO standards (7.5 to 7.8), the EU harmonised standards and the certifiers (7.9), the four terms most often confused (7.10), and a practical map (7.11).

| Case | Citable as | Drawn on for |
|---|---|---|
| OECD Recommendation on AI | OECD/LEGAL/0449, adopted 22 May 2019, revised 2023 and 2024 | The values baseline, and a definition a binding law tracks |
| NIST AI RMF and Playbook | NIST AI 100-1, January 2023, plus the AI RMF Playbook | Four functions, GOVERN as cross-cutting, the characteristics |
| NIST AI 600-1, Generative AI Profile | Published 26 July 2024 | Twelve generative risks, and a profile carrying legal weight |
| ISO/IEC 22989 | Published 2022 by ISO/IEC JTC 1/SC 42 | The vocabulary layer, and verification against validation |
| ISO/IEC 42001 | Published December 2023, first edition | The certifiable management system standard |
| ISO/IEC 42006 | Published July 2025, first edition | Who may audit and certify an AI management system |
| EN 18286:2026 | Published by CEN-CENELEC, July 2026 | The first harmonised AI Act standard |
| Texas TRAIGA | House Bill 149, signed 22 June 2025, effective 1 January 2026 | A voluntary framework given legal weight as a defence |

### 7.1 The OECD AI Principles

The values baseline is the **OECD Recommendation on Artificial Intelligence** (OECD/LEGAL/0449), adopted on 22 May 2019, the first intergovernmental AI standard and the source of the definition later instruments use. It is not binding; its 47 adherents as of September 2026, the EU among them, make a political commitment. G20 leaders welcomed G20 AI Principles drawn from it at the Osaka Summit in June 2019.

Five values-based principles are addressed to AI actors under the headings the 2024 revision gave them, alongside five recommendations to policy makers. The 2024 revision added language on information integrity, use outside the intended purpose, and misuse; there are still five principles.

The 2023 revision of the AI system definition supplies the boundary test an inventory needs: a machine-based system that infers from its input how to generate outputs such as predictions, content, recommendations or decisions. Article 3(1) of the EU AI Act closely tracks the wording, so a voluntary definition marks the edge of a binding law. Its role is policy influence rather than certification, and nothing is certified to it.

### 7.2 The NIST AI Risk Management Framework

The **NIST AI Risk Management Framework** (AI RMF 1.0, published as NIST AI 100-1 in January 2023) is the US government's voluntary, sector-agnostic framework, built through open consultation. It is a framework rather than a standard, and there is no certification against it, which is the distinction most often tested. The AI RMF Playbook followed in 2023 and the Generative AI Profile in July 2024.

Its normative content sits in four functions, and they are not a sequence.

| Function | Job |
|---|---|
| GOVERN | The cross-cutting foundation: policies, roles and responsibilities, oversight, risk tolerance, and a culture of raising concerns |
| MAP | Understand context: intended purpose and foreseeable misuse, design and data, stakeholders, risks |
| MEASURE | Assess: metrics, evaluation including testing and red teaming, monitoring, risk documentation |
| MANAGE | Respond: risk treatment, incident response, integration with enterprise risk, risk through retirement |

**GOVERN runs through the other three rather than starting them.** It is the function most relevant to a governance professional, because culture and appetite are set there. MEASURE works against seven **trustworthiness characteristics**: valid and reliable; safe; secure and resilient; accountable and transparent; explainable and interpretable; privacy-enhanced; and fair with harmful bias managed. The AI RMF treats risk as emergent and systemic rather than a fixed catalogue of known threats, unlike the NIST Cybersecurity Framework.

### 7.3 The AI RMF Playbook

The framework's 72 subcategories carry its normative content. For each, the **AI RMF Playbook** gives **suggested actions**, **transparency and documentation prompts** and **references**. It is the RMF's implementation layer, not a second framework, and because the actions are suggestions, an organization can adopt, adapt or document why it chose otherwise.

### 7.4 NIST AI 600-1, the Generative AI Profile

**NIST AI 600-1**, the Generative AI Profile, implements the AI RMF for a specific setting, technology or sector: cross-sectoral, published on 26 July 2024 pursuant to Executive Order 14110, later revoked but still published. It tailors the RMF without replacing it, and names twelve risks:

1. CBRN information or capabilities.
2. **Confabulation**: confidently stated false content, or "hallucination".
3. Dangerous, violent or hateful content.
4. Data privacy: leakage, memorization, inference and de-anonymization.
5. Environmental impacts.
6. Harmful bias and homogenization.
7. Human-AI configuration: anthropomorphization, automation bias, over-reliance, emotional entanglement.
8. Information integrity: misinformation and disinformation.
9. Information security: prompt injection, data poisoning, offensive cyber capability.
10. Intellectual property.
11. Obscene or abusive content, including non-consensual intimate imagery and child sexual abuse material.
12. Value chain and component integration.

Four primary considerations serve as a pre-deployment checklist: **governance**, **pre-deployment testing** through TEVV (testing, evaluation, verification and validation), **content provenance**, and **incident disclosure**.

Texas's **TRAIGA** (House Bill 149, signed 22 June 2025, effective 1 January 2026) expressly recognizes substantial compliance with this profile as a defence. It is not a general safe harbour, and its prohibitions turn on intent, but a legislature wrote a voluntary NIST document into a statute.

### 7.5 ISO/IEC 22989, the Vocabulary Layer

The ISO and IEC standards build on one another; the vocabulary comes first. **ISO/IEC 22989**, Information technology, Artificial intelligence, Artificial intelligence concepts and terminology, was published in 2022 by ISO/IEC JTC 1/SC 42. Its more than 110 defined concepts give everyone the same words without prescribing how to run a program, and the IEC webstore publishes it free of charge.

**Verification** asks whether the system was built right, against its specifications; **validation** asks whether the right system was built, fit for its intended use. **Robustness** is maintaining performance under all circumstances and **resilience** is recovering operational state after an incident. **Reliability** is distinct from accuracy. **Explainability** answers why a particular output came out as it did; **transparency** is information made available about the system.

22989 also supplies roles that do not match the EU AI Act: the **AI provider** makes a system available, the **AI producer** builds it, the **AI customer** uses it, the **AI subject** is the person affected, and **relevant authorities** regulate. Map them to the Act's provider, deployer, importer and distributor.

### 7.6 ISO/IEC 42001, the Certifiable Management System

**ISO/IEC 42001**, Information technology, Artificial intelligence, Management system, is the first certifiable standard for an **AI management system (AIMS)**. Published in December 2023 as a first edition, it specifies requirements for establishing, implementing and continually improving an AIMS. Certifiability is what sets it apart from 22989 (terminology), 42005 (impact-assessment guidance) and 23894 (risk guidance): an organization can be audited against 42001 and issued a certificate, and cannot for the others.

It follows the **Annex SL** high-level structure common to ISO management systems on a Plan-Do-Check-Act cycle, and addresses five trustworthiness dimensions, including transparency and explainability and fairness and non-discrimination.

Impact assessment is a requirement of the system, not an add-on: clause 6.1.4 has the organization define an AI system impact assessment process, clause 8.4 has it perform those assessments at planned intervals or on significant change, and Annex A objective A.5 adds controls on the process and its documentation.

Certification is a market expectation, not a legal requirement. It gives no presumption of conformity with the EU AI Act and does not satisfy the Article 17 quality management system duty for high-risk providers; what is certified is the organization's management system, not any particular AI system.

### 7.7 ISO/IEC 42005 and Impact Assessment

**ISO/IEC 42005**, Information technology, Artificial intelligence, AI system impact assessment, was published on 28 May 2025 by ISO/IEC JTC 1/SC 42 as a first edition of 39 pages. It is guidance on how and when to assess an AI system's impacts on people, groups and societies, what to document, and how to integrate with an AIMS. Nothing is certified to it.

Reassessment runs on three triggers: a change in intended use, a significant system change in data or model, and a new legal or policy requirement. Because 42005 is not a harmonised standard it gives no presumption of conformity, and a 42005 assessment can inform a GDPR Article 35 or EU AI Act Article 27 assessment without replacing either.

### 7.8 ISO/IEC 23894 and Organizational Risk

**ISO/IEC 23894**, Information technology, Artificial intelligence, Guidance on risk management, was published in 2023. It gives guidance on managing risk related to AI, built on **ISO 31000**, whose definition of risk is "the effect of uncertainty on objectives". It is guidance and not certifiable, and its subject is risk management of AI, not using AI to do risk management.

23894 adds the AI-specific risk sources and the mapping onto the AI system life cycle.

The split is the direction of the question. **42005 asks about impacts on people, and 23894 asks about risk to the organization.** 23894 is nonetheless not one of the three core ISO standards named in BOK v2.1 for Domain II.D.

### 7.9 ISO/IEC 42006 and the EU Harmonised Standards

**ISO/IEC 42006**, Information technology, Artificial intelligence, Requirements for bodies providing audit and certification of artificial intelligence management systems, was published in July 2025 as a first edition. It sets requirements, additional to **ISO/IEC 17021-1**, for the bodies that audit and certify AI management systems against 42001: 42006 regulates the certifiers, not the certified.

**CEN-CENELEC JTC 21** develops harmonised standards in support of the EU AI Act. **EN 18286:2026**, Artificial intelligence, Quality management system for EU AI Act regulatory purposes, was published by CEN and CENELEC in July 2026, the first harmonised standard produced for the Act, serving the Article 17 quality management system.

Under **Article 40**, a high-risk AI system in conformity with a harmonised standard cited in the Official Journal is presumed to conform with the requirements it covers, and under **Article 53(4)** general-purpose model providers get the same route. That presumption is a legal effect no private standard possesses, and it attaches only once the standard is cited in the Official Journal, separate from publication by CEN.

### 7.10 Certification, Conformity Assessment, Attestation and Audit

**Conformity assessment** is the umbrella: the process of demonstrating that specified requirements are met, by the first party (the organization), second party (a customer) or third party (an independent body). **Audit** is the evidence-gathering activity inside it: a systematic, independent examination against stated criteria, producing findings. An audit is not itself an approval.

**Certification** is a subset: third-party attestation by an accredited body that an organization, its management system, or a product meets a defined standard, producing a certificate with a defined scope and validity period. ISO/IEC 42001 certification is of the organization's management system. Under the EU AI Act, **Article 43** sends most Annex III high-risk systems through internal control without a notified body, and where one is required the outcome is a declaration and CE marking, not a management-system certificate.

**Attestation** is the broadest term: a formal statement by a responsible party that something is true, which does not require an accredited third party.

A certificate is evidence that a management system exists and operates, not proof that a particular system is safe or lawful.

### 7.11 A Practical Map


| The question | The instrument | Why |
|---|---|---|
| What is good practice, and where does an AI system begin? | OECD AI Principles and the 2023 definition | Values and the boundary test |
| What process must risk management follow? | NIST AI RMF, functions and characteristics | Sector-agnostic, voluntary, no certification |
| How do we act on each subcategory? | AI RMF Playbook | Suggested actions, prompts and references |
| What changes for generative systems? | NIST AI 600-1 | Twelve risks and a pre-deployment checklist |
| What do the words mean, precisely? | ISO/IEC 22989 | The shared vocabulary |
| How do we make the program auditable and certifiable? | ISO/IEC 42001 | The certifiable management system standard |
| How do we assess impact on people? | ISO/IEC 42005 | The method 42001 requires and does not provide |
| How do we fold AI risk into enterprise risk? | ISO/IEC 23894, on ISO 31000 | Risk to the organization, not impact on people |
| Who may certify us, and how? | ISO/IEC 42006 and ISO/IEC 17021-1 | Rules for the bodies |
| How does a standard become a legal presumption? | CEN-CENELEC JTC 21 harmonised standards, EN 18286:2026 | Presumption of conformity once cited |

### Exam Focus

- A standard is voluntary and an instrument is binding, but a voluntary standard becomes consequential when it is cited in law, adopted in a contract, or used to evidence compliance. Know all three mechanisms.
- The OECD Recommendation (22 May 2019, revised 8 November 2023 and 3 May 2024) is non-binding, keeps five principles under 2024 headings, separates principles for AI actors from recommendations to governments, and has a policy-influence role rather than a certification role.
- The 2023 OECD AI system definition is closely tracked by EU AI Act Article 3(1), so a voluntary definition marks the boundary of a binding law.
- The NIST AI RMF is a framework, not a standard, with no certification against it. GOVERN is cross-cutting rather than a first phase, and it is the function most relevant to a governance professional.
- NIST's seven trustworthiness characteristics should be known verbatim: valid and reliable; safe; secure and resilient; accountable and transparent; explainable and interpretable; privacy-enhanced; and fair with harmful bias managed.
- The BOK names the Playbook directly: the risk process is the AI RMF, per-subcategory guidance is the Playbook, and generative AI specifically is NIST AI 600-1.
- NIST AI 600-1 names twelve generative risks. Confabulation is the formal term for hallucination, and automation bias is a human-AI configuration risk.
- The AI 600-1 four primary considerations are governance, pre-deployment testing through TEVV, content provenance and incident disclosure.
- Texas's TRAIGA expressly recognizes substantial compliance with the NIST AI 600-1 profile as a defence. It is not a general safe harbour.
- The ISO/IEC 22989 trustworthiness cluster is the most tested vocabulary: robustness against resilience, reliability against accuracy, verification against validation, explainability against transparency. 22989 roles are not the EU AI Act's provider, deployer, importer and distributor.
- 42001 requires the impact assessment (clause 6.1.4 and clause 8.4) and 42005 explains how to run one. 42006 regulates the certifiers rather than the certified organization, and it is a favourite distractor.
- ISO/IEC 42006 is the 2025 edition, and 42005 is the 2025 edition. Do not rely on memory for the year.
- 42005 asks about impacts on people and 23894 asks about risk to the organization. 42005 reassessment triggers are intended use, significant system change, and a new legal or policy requirement.
- BOK v2.1 II.D names a closed set of three core ISO standards (22989, 42001 and 42005), so 23894 may answer an item on AI risk management but never an item on the core three.
- EN 18286:2026 is the first harmonised AI Act standard, produced by CEN-CENELEC JTC 21, and it targets the Article 17 quality management system. Presumption of conformity under Articles 40 and 53(4) attaches only once a harmonised standard is cited in the Official Journal.
- Conformity assessment is the umbrella, audit is the evidence-gathering activity, certification is third-party attestation by an accredited body, and attestation is the broadest term. The trap is to treat a certificate as proof that a system is safe or lawful, when it only evidences a management system.

### Key Terms

The terms used in this chapter are defined in the Glossary (Appendix B): Attestation, AI Hazard, AI Incident, AI Management System (AIMS), AI RMF Playbook, Annex SL, Certification, Conformity Assessment, Confabulation, Content Provenance, Explainability, Generative AI Profile (NIST AI 600-1), Govern Function, ISO/IEC 22989, ISO/IEC 23894, ISO/IEC 42001, ISO/IEC 42005, ISO/IEC 42006, ISO/IEC 17021-1, Manage Function, Map Function, Measure Function, NIST AI Risk Management Framework (AI RMF), OECD AI Principles, OECD AI System Definition (2023 Update), Reliability, Resilience, Robustness, Transparency, Trustworthiness, Validation, Verification.

### Further Reading

- [OECD Recommendation on AI (OECD/LEGAL/0449)](https://legalinstruments.oecd.org/en/instruments/OECD-LEGAL-0449): the text and its revisions
- [OECD.AI: AI principles](https://oecd.ai/en/ai-principles): the five principles
- [OECD.AI: classification framework](https://oecd.ai/en/classification): the five dimensions
- [OECD.AI: incidents and hazards](https://oecd.ai/en/incidents): the hazard definitions
- [NIST AI Risk Management Framework (AI 100-1)](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf): functions and characteristics
- [NIST AI RMF landing page](https://www.nist.gov/itl/ai-risk-management-framework): the official hub
- [NIST AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/): actions by subcategory
- [NIST AI 600-1, Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf): the twelve generative risks
- [ISO/IEC 22989 (free from IEC)](https://webstore.iec.ch/en/publication/77839): the free terminology standard
- [ISO/IEC 22989 (ISO catalogue)](https://www.iso.org/standard/74296.html): concepts and terminology, 2022
- [ISO/IEC 42001 (ISO catalogue)](https://www.iso.org/standard/42001): the management system standard
- [ISO/IEC 42001 (IEC webstore)](https://webstore.iec.ch/en/publication/90574): with Annex A objective A.5
- [ISO/IEC 42005 (ISO catalogue)](https://www.iso.org/standard/42005): impact assessment guidance
- [ISO/IEC 42005 (IEC webstore)](https://webstore.iec.ch/en/publication/107659): the assessment method
- [ISO/IEC 23894 (ISO catalogue)](https://www.iso.org/standard/77304.html): AI risk management
- [ISO/IEC 42006 (ISO catalogue)](https://www.iso.org/standard/42006): requirements for certifying bodies
- [ISO/IEC 42006 (IEC webstore)](https://webstore.iec.ch/en/publication/108460): the certifiers of AIMS
- [ISO/IEC 17021-1 (ISO catalogue)](https://www.iso.org/standard/61651.html): general certifying-body requirements
- [ISO 31000 (ISO catalogue)](https://www.iso.org/standard/65694.html): the general risk standard
- [CEN-CENELEC: EN 18286 in the spotlight](https://www.cencenelec.eu/news-events/news/2026/en-in-the-spotlight/2026-07-30-ai-quality-management/): the first harmonised standard
- [CEN-CENELEC JTC 21](https://www.cencenelec.eu/areas-of-work/cen-cenelec-topics/artificial-intelligence/): the harmonised-standards committee
- [EU AI Act, Article 40 (harmonised standards)](https://artificialintelligenceact.eu/article/40/): presumption of conformity
- [EU AI Act, Article 43 (conformity assessment)](https://artificialintelligenceact.eu/article/43/): internal control
- [EU AI Act, Article 53 (obligations for providers of general-purpose AI models)](https://artificialintelligenceact.eu/article/53/): the Article 53(4) route
- [EU AI Act, Article 17 (quality management system)](https://artificialintelligenceact.eu/article/17/): the EN 18286 obligation
- [EU AI Act, Article 3 (definitions)](https://artificialintelligenceact.eu/article/3/): the AI system definition
- [EU AI Act, Article 14 (human oversight)](https://artificialintelligenceact.eu/article/14/): the oversight design duty
- [EU AI Act, Article 27 (fundamental rights impact assessment)](https://artificialintelligenceact.eu/article/27/): the deployer assessment
- [GDPR Article 35 (data protection impact assessment)](https://gdpr-info.eu/art-35-gdpr/): the privacy assessment
- [Texas Responsible Artificial Intelligence Governance Act, House Bill 149](https://capitol.texas.gov/tlodocs/89R/billtext/html/HB00149F.htm): the TRAIGA defence
