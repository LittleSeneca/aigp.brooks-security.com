---
tags:
 - aigp/reference
 - aigp/standards
 - aigp/nist
aliases:
 - NIST AI 600-1
 - GAI Profile
 - Generative AI Profile
 - AI RMF GAI Profile
source: "NIST AI 600-1 (July 2024)"
related:
 - "[[NIST AI RMF — Structured Reference]]"
 - "[[AI Standards and Frameworks]]"
 - "[[NIST ARIA — Structured Reference]]"
---

# NIST AI 600-1 — Structured Reference

> **Full Title:** Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile
> **Published:** July 2024
> **NIST AI 600-1**
> **DOI:** `10.6028/NIST.AI.600-1`
> **Contact:** `ai-inquiries@nist.gov`

---

## 1. Overview

NIST AI 600-1 is a **cross-sectoral profile** and companion resource for the [[NIST AI RMF — Structured Reference|AI RMF 1.0]] focused on **Generative AI (GAI)**. Developed pursuant to President Biden's Executive Order (EO) 14110 on Safe, Secure, and Trustworthy AI.

> [!summary] What Is an AI RMF Profile?
> A profile is an implementation of AI RMF functions, categories, and subcategories for a **specific setting, application, or technology** — based on the requirements, risk tolerance, and resources of the Framework user. Cross-sectoral profiles cover risks common across sectors (e.g., LLMs, cloud services, acquisition).

### Document Structure

| Section | Content |
|---------|---------|
| **Section 1** | Introduction — relationship to AI RMF, EO 14110, GAI PWG |
| **Section 2** | 12 GAI-specific risks defined and described |
| **Section 3** | Suggested actions organized by AI RMF subcategory (Govern, Map, Measure, Manage) |
| **Appendix A** | Four primary GAI considerations: Governance, Pre-Deployment Testing, Content Provenance, Incident Disclosure |
| **Appendix B** | References |

### Four Primary GAI Considerations (GAI PWG Focus)

1. **Governance** — Organizational structures, policies, third-party oversight
2. **Content Provenance** — Tracking origin and history of digital content
3. **Pre-Deployment Testing** — TEVV before release
4. **Incident Disclosure** — Reporting, documenting, and sharing incident information

---

## 2. The 12 GAI Risks

These are risks **unique to or exacerbated by** generative AI. Each is mapped to relevant AI RMF Trustworthy AI Characteristics.

> [!danger] Risk Categorization (Optional Framework)
> Organizations may further categorize these as:
> 1. **Technical / Model risks** (malfunction): Confabulation; Dangerous Recommendations; Data Privacy; Value Chain; Harmful Bias; Homogenization
> 2. **Misuse by humans** (malicious): CBRN; Data Privacy; Human-AI Configuration; Obscene Content; Information Integrity; Information Security
> 3. **Ecosystem / societal** (systemic): Data Privacy; Environmental; Intellectual Property

### Risk 1: CBRN Information or Capabilities

| Attribute | Detail |
|-----------|--------|
| **Definition** | Eased access to or synthesis of nefarious information/design capabilities related to chemical, biological, radiological, or nuclear weapons |
| **Trustworthy AI Characteristics** | Safe, Explainable and Interpretable |
| **Current evidence** | LLMs currently provide minimal assistance beyond search engines; physical synthesis still requires expertise and infrastructure |
| **Future concern** | Biological design tools (BDTs) may augment capabilities beyond text-based LLMs |

### Risk 2: Confabulation

| Attribute | Detail |
|-----------|--------|
| **Definition** | Production of confidently stated but erroneous or false content (colloquially "hallucinations" or "fabrications") |
| **Trustworthy AI Characteristics** | Fair with Harmful Bias Managed, Safe, Valid and Reliable, Explainable and Interpretable |
| **Mechanism** | Natural result of statistical prediction — models generate outputs approximating training data distribution |
| **Key concern** | Confabulated citations/logic may further mislead users into inappropriate trust |
| **Domains at risk** | Healthcare (misdiagnosis), legal (fake case citations), consequential decision-making |

> [!warning] Terminology Note
> Some commenters note that "hallucination" and "fabrication" anthropomorphize GAI, which itself is a risk (see Human-AI Configuration).

### Risk 3: Dangerous, Violent, or Hateful Content

| Attribute | Detail |
|-----------|--------|
| **Definition** | Eased production of and access to violent, inciting, radicalizing, or threatening content; difficulty controlling public exposure to hateful/denigrating/stereotyping content |
| **Trustworthy AI Characteristics** | Safe, Secure and Resilient |
| **Includes** | Self-harm recommendations, criminal/illegal activity instructions, jailbreaking to circumvent output controls |
| **Mental health concern** | Users may disclose mental health issues to chatbots; negative reactions to unhelpful responses in distress |

### Risk 4: Data Privacy

| Attribute | Detail |
|-----------|--------|
| **Definition** | Leakage and unauthorized use, disclosure, or de-anonymization of biometric, health, location, PII, or sensitive data |
| **Trustworthy AI Characteristics** | Accountable and Transparent, Privacy Enhanced, Safe, Secure and Resilient |
| **Key mechanisms** | Training data memorization, inference of PII from disparate sources, lack of transparency about training data |
| **Downstream impact** | Wrong inferences of PII can lead to representational or allocative harms |

### Risk 5: Environmental Impacts

| Attribute | Detail |
|-----------|--------|
| **Definition** | High compute resource utilization in training/operating GAI models, related outcomes adversely impacting ecosystems |
| **Trustworthy AI Characteristics** | Accountable and Transparent, Safe |
| **Scale** | Training a single transformer LLM ≈ carbon emissions of 300 round-trip flights (SF↔NY) |
| **Inference** | Generative tasks more energy/carbon-intensive than discriminative tasks |
| **No agreed method** | Currently no standardized method to estimate environmental impacts from GAI |

### Risk 6: Harmful Bias and Homogenization

| Attribute | Detail |
|-----------|--------|
| **Definition** | Amplification of historical/societal/systemic biases; performance disparities between sub-groups or languages; undesired output homogeneity |
| **Trustworthy AI Characteristics** | Fair with Harmful Bias Managed, Valid and Reliable |
| **Examples** | Text-to-image models underrepresenting women/racial minorities in professional roles |
| **Homogenization** | Skewed, overly uniform output distributions; foundation models as "bottlenecks" / single points of failure |
| **Model collapse** | Over-reliance on synthetic data → data points disappearing from output distribution |

### Risk 7: Human-AI Configuration

| Attribute | Detail |
|-----------|--------|
| **Definition** | Arrangements of or interactions between human and AI system resulting in inappropriate anthropomorphization, algorithmic aversion, automation bias, over-reliance, or emotional entanglement |
| **Trustworthy AI Characteristics** | Accountable and Transparent, Explainable and Interpretable, Fair with Harmful Bias Managed, Privacy Enhanced, Safe, Valid and Reliable |
| **Algorithmic aversion** | Human experts unnecessarily avoiding GAI's beneficial uses |
| **Automation bias** | Excessive deference to automated systems; exacerbates confabulation and bias risks |

### Risk 8: Information Integrity

| Attribute | Detail |
|-----------|--------|
| **Definition** | Lowered barriers to generate and support exchange/consumption of content that may not distinguish fact from opinion/fiction, or could be leveraged for large-scale dis-/misinformation campaigns |
| **Trustworthy AI Characteristics** | Accountable and Transparent, Safe, Valid and Reliable, Interpretable and Explainable |
| **Misinformation** | Unintentional production/dissemination of false content (often from confabulations) |
| **Disinformation** | Deliberate production/dissemination at scale; highly realistic deepfakes |
| **Real-world impact** | Synthetic Pentagon blast image went viral, briefly dropped stock market |

### Risk 9: Information Security

| Attribute | Detail |
|-----------|--------|
| **Definition** | Lowered barriers for offensive cyber capabilities; expanded attack surface (prompt injection, data poisoning) |
| **Trustworthy AI Characteristics** | Privacy Enhanced, Safe, Secure and Resilient, Valid and Reliable |
| **Offensive** | LLMs discovering vulnerabilities, writing exploit code, GAI-powered security co-pilots |
| **Defensive gaps** | Direct prompt injection, indirect prompt injection (exploiting LLM-integrated apps), data poisoning |
| **Disclosure risk** | Querying closed production models can elicit previously undisclosed information |

### Risk 10: Intellectual Property

| Attribute | Detail |
|-----------|--------|
| **Definition** | Eased production/replication of copyrighted, trademarked, or licensed content without authorization; exposure of trade secrets; plagiarism |
| **Trustworthy AI Characteristics** | Accountable and Transparent, Fair with Harmful Bias Managed, Privacy Enhanced |
| **Legal status** | Relationship of GAI to copyright actively debated in legal fora; training data memorization may infringe copyright |
| **Likeness concern** | Use/emulation of personal identity, likeness, or voice without permission |

### Risk 11: Obscene, Degrading, and/or Abusive Content

| Attribute | Detail |
|-----------|--------|
| **Definition** | Eased production of and access to illegal non-consensual intimate imagery (NCII) of adults, and/or child sexual abuse material (CSAM) |
| **Trustworthy AI Characteristics** | Fair with Harmful Bias Managed, Safe, Privacy Enhanced |
| **Scale** | Moved from niche internet forums to mainstream, automated, scaled online businesses |
| **Training data risk** | Commonly used GAI training datasets found to contain known CSAM images |
| **Disproportionate impact** | NCII disproportionately impacts women and sexual minorities |

### Risk 12: Value Chain and Component Integration

| Attribute | Detail |
|-----------|--------|
| **Definition** | Non-transparent or untraceable integration of upstream third-party components; improper supplier vetting; diminished accountability for downstream users |
| **Trustworthy AI Characteristics** | Accountable and Transparent, Explainable and Interpretable, Fair, Privacy Enhanced, Safe, Secure and Resilient, Valid and Reliable |
| **Exacerbated for GAI** | Training data too large for humans to vet; extensive reuse of limited foundation models; integration into many devices/services |
| **Benchmark instability** | Label errors in test datasets affect benchmark stability used during model selection |

---

## 3. Risk Dimensions

GAI risks vary along multiple dimensions:

| Dimension | Description |
|-----------|-------------|
| **AI Lifecycle Stage** | Design, development, deployment, operation, decommissioning |
| **Scope** | Model/system level → Application/implementation level → Ecosystem level |
| **Source** | GAI model itself (inputs/outputs), human behavior, human-AI interactions |
| **Time Scale** | Abrupt (immediate emotional harm) → Extended (long-term disinformation erosion of trust) |

---

## 4. Suggested Actions — Govern Function

The suggested actions are organized by AI RMF subcategories and tagged with Action IDs. Below are the key Govern subcategories covered:

### Govern 1.1 — Legal & Regulatory Requirements

| Action ID | Key Action |
|-----------|------------|
| GV-1.1-001 | Align GAI development/use with applicable laws (data privacy, copyright, IP) |

### Govern 1.2 — Trustworthy AI Characteristics in Policies

| Action ID | Key Action |
|-----------|------------|
| GV-1.2-001 | Establish transparency policies for training data origin/history |
| GV-1.2-002 | Evaluate risk-relevant capabilities and robustness of safety measures pre-deployment and ongoing |

### Govern 1.3 — Risk Tolerance Determination

| Action ID | Key Action |
|-----------|------------|
| GV-1.3-001 | Consider GAI-specific factors when defining risk tiers (information integrity, psychological impacts, malicious use, etc.) |
| GV-1.3-002 | Establish minimum thresholds for performance/assurance as part of deployment "go/no-go" policies |
| GV-1.3-003 | Establish test plan and response policy for CBRN/offensive cyber capabilities before developing highly capable models |
| GV-1.3-004 | Obtain input from stakeholder communities to identify unacceptable use |
| GV-1.3-005 | Maintain updated hierarchy of identified and expected GAI risks |
| GV-1.3-006 | Reevaluate risk tolerances for unacceptable negative risk and broad GAI risks |
| GV-1.3-007 | Devise a plan to halt development or deployment of systems posing unacceptable negative risk |

### Govern 1.4 — Transparent Risk Management

| Action ID | Key Action |
|-----------|------------|
| GV-1.4-001 | Prevent GAI systems from generating CSAM, NCII, or illegal content |
| GV-1.4-002 | Establish transparent acceptable use policies addressing illegal uses |

### Govern 1.6 — AI System Inventory

| Action ID | Key Action |
|-----------|------------|
| GV-1.6-001 | Enumerate organizational GAI systems for inventory |
| GV-1.6-003 | Include in inventory: data provenance, known issues, human oversight roles, IP considerations, underlying foundation models |

### Govern 3.2 — Human-AI Configuration Roles

| Action ID | Key Action |
|-----------|------------|
| GV-3.2-001 | Bolster oversight with independent evaluations proportional to identified risks |
| GV-3.2-003 | Define acceptable use policies for GAI interfaces, modalities, and human-AI configurations |
| GV-3.2-005 | Engage in threat modeling to anticipate potential risks from GAI systems |

### Govern 4.1 — Safety-First Mindset

| Action ID | Key Action |
|-----------|------------|
| GV-4.1-001 | Establish continual improvement processes for GAI risk measurement |
| GV-4.1-002 | Establish risk measurement in context of use with standardized measurement protocols and structured public feedback |

### Govern 6.1 — Third-Party Risk Management

| Action ID | Key Action |
|-----------|------------|
| GV-6.1-001 | Categorize GAI content types with associated third-party rights |
| GV-6.1-004 | Draft SLAs specifying content ownership, usage rights, security, provenance |
| GV-6.1-005 | Implement use-case-based supplier risk assessment framework |
| GV-6.1-009 | Update due diligence processes for GAI acquisition/procurement |

---

## 5. Suggested Actions — Map Function

### Map 1.1 — Intended Purpose & Context

| Action ID | Key Action |
|-----------|------------|
| MP-1.1-001 | Identify intended purposes considering internal vs. external use, fine-tuning, data sources (RAG) |
| MP-1.1-002 | Document expected/acceptable context of use with socio-cultural and domain experts |
| MP-1.1-003 | Document risk measurement plans addressing cognitive biases, known incidents, foreseeable misuse |
| MP-1.1-004 | Identify and document foreseeable illegal uses surpassing risk tolerances |

### Map 1.2 — Interdisciplinary Teams

| Action ID | Key Action |
|-----------|------------|
| MP-1.2-001 | Establish interdisciplinary teams reflecting diverse capabilities, demographics, domain expertise |
| MP-1.2-002 | Verify data/benchmarks and feedback exercise participants are representative of user populations |

### Map 4.1 — Legal & Third-Party Risk Mapping

| Action ID | Key Action |
|-----------|------------|
| MP-4.1-001 | Conduct periodic monitoring of AI-generated content for privacy risks |
| MP-4.1-005 | Establish policies for data collection, retention, and minimum quality |
| MP-4.1-008 | Re-evaluate risks when adapting GAI models to new domains |

### Map 5.1 — Impact Likelihood & Magnitude

| Action ID | Key Action |
|-----------|------------|
| MP-5.1-001 | Apply TEVV practices for content provenance |
| MP-5.1-002 | Identify and rank potential content provenance harms (misinformation, deepfakes, NCII) |
| MP-5.1-003 | Consider disclosing use of GAI to end users in relevant contexts |
| MP-5.1-005 | Conduct adversarial role-playing, GAI red-teaming, or chaos testing |

---

## 6. Suggested Actions — Measure Function

### Measure 1.1 — Risk Measurement Approaches

| Action ID | Key Action |
|-----------|------------|
| MS-1.1-001 | Employ methods to trace origin and modifications of digital content |
| MS-1.1-003 | Disaggregate evaluation metrics by demographic factors |
| MS-1.1-004 | Develop suite of metrics for structured public feedback exercises |
| MS-1.1-005 | Evaluate novel methods for measuring GAI-related risks (content provenance, CBRN, cyber) |
| MS-1.1-006 | Implement continuous monitoring to identify whether GAI outputs are equitable across sub-populations |
| MS-1.1-009 | Track and document risks that cannot be measured quantitatively |

### Measure 2.5 — Validity & Reliability

| Action ID | Key Action |
|-----------|------------|
| MS-2.5-001 | Avoid extrapolating GAI performance from narrow, non-systematic assessments |
| MS-2.5-003 | Review and verify sources/citations in GAI outputs during pre-deployment and ongoing monitoring |
| MS-2.5-004 | Track instances of anthropomorphization in GAI system interfaces |
| MS-2.5-006 | Regularly review security and safety guardrails, especially in novel circumstances |

### Measure 2.6 — Safety

| Action ID | Key Action |
|-----------|------------|
| MS-2.6-001 | Assess adverse health/wellbeing impacts for value chain actors exposed to explicit/violent content |
| MS-2.6-002 | Assess harmful bias, IP infringement, data privacy violations, CBRN in training data |
| MS-2.6-006 | Verify systems properly handle queries that may give rise to malicious/illegal usage |
| MS-2.6-007 | Regularly evaluate GAI system vulnerabilities to circumvention of safety measures |

### Measure 2.7 — Security & Resilience

| Action ID | Key Action |
|-----------|------------|
| MS-2.7-001 | Apply established security measures: backdoors, data breaches, model theft, prompt injection |
| MS-2.7-007 | Perform AI red-teaming to assess resilience against attacks on other systems, GAI attacks, ML attacks |
| MS-2.7-008 | Verify fine-tuning does not compromise safety and security controls |

### Measure 2.11 — Fairness & Bias

| Action ID | Key Action |
|-----------|------------|
| MS-2.11-001 | Apply use-case appropriate benchmarks to quantify systemic bias, stereotyping, denigration |
| MS-2.11-002 | Conduct fairness assessments: measure performance across demographic groups, field testing, AI red-teaming |
| MS-2.11-004 | Review sources of bias in training and TEVV data: distribution differences, proxies, digital divide |
| MS-2.11-005 | Assess proportion of synthetic to non-synthetic training data to mitigate model collapse |

### Measure 2.12 — Environmental

| Action ID | Key Action |
|-----------|------------|
| MS-2.12-002 | Document anticipated environmental impacts in product design decisions |
| MS-2.12-003 | Measure or estimate environmental impacts (energy, water) for training, fine-tuning, deployment |

---

## 7. Suggested Actions — Manage Function

### Manage 1.3 — Risk Response

| Action ID | Key Action |
|-----------|------------|
| MG-1.3-001 | Document trade-offs and decision processes; consider staged release; mitigate/transfer/avoid risks exceeding tolerance |
| MG-1.3-002 | Monitor robustness and effectiveness of risk controls via red-teaming, field testing, user feedback |

### Manage 2.2 — Sustaining Deployed System Value

| Action ID | Key Action |
|-----------|------------|
| MG-2.2-001 | Compare GAI outputs against organizational risk tolerance, guidelines, and principles |
| MG-2.2-005 | Engage in due diligence to analyze GAI output for harmful content, CBRN, NCII |
| MG-2.2-008 | Use structured feedback mechanisms to capture user input about AI-generated content |

### Manage 2.4 — Supersede / Disengage / Deactivate

| Action ID | Key Action |
|-----------|------------|
| MG-2.4-001 | Maintain communication plans for deactivation, including for open-source models |
| MG-2.4-002 | Establish procedures for escalating GAI incidents when deactivation criteria met |
| MG-2.4-004 | Establish and regularly review criteria warranting deactivation in accordance with risk tolerances |

### Manage 3.1 — Third-Party Monitoring

| Action ID | Key Action |
|-----------|------------|
| MG-3.1-001 | Apply organizational risk tolerances to third-party datasets, fine-tuned models, domain adaptations |
| MG-3.1-002 | Test GAI value chain risks (data poisoning, malware, labor practices, data privacy compliance) |
| MG-3.1-003 | Re-assess model risks after fine-tuning or RAG implementation for unevaluated applications |

### Manage 3.2 — Pre-Trained Model Monitoring

| Action ID | Key Action |
|-----------|------------|
| MG-3.2-001 | Apply XAI techniques for continuous improvement |
| MG-3.2-005 | Implement content filters to prevent inappropriate/harmful/false/illegal content including CSAM and NCII |
| MG-3.2-008 | Use human moderation systems aligned with socio-cultural norms where AI performs poorly |
| MG-3.2-009 | Decommission or retrain pre-trained models performing outside defined limits |

### Manage 4.1 — Post-Deployment Monitoring

| Action ID | Key Action |
|-----------|------------|
| MG-4.1-001 | Collaborate with external researchers to maintain awareness of emerging best practices |
| MG-4.1-002 | Maintain post-deployment monitoring for confabulation, CBRN, and cyber risks |
| MG-4.1-005 | Share transparency reports detailing steps taken to enhance transparency and accountability |

### Manage 4.3 — Incident Communication

| Action ID | Key Action |
|-----------|------------|
| MG-4.3-001 | Conduct after-action assessments for GAI system incidents |
| MG-4.3-002 | Record and track GAI system reported errors, near-misses, and negative impacts |
| MG-4.3-003 | Report GAI incidents in compliance with legal/regulatory requirements |

---

## 8. Appendix A — Four Primary GAI Considerations (Detailed)

### A.1 Governance

> [!info] Key Points
> - **Organizational:** GAI may call for different levels of oversight, additional human review, more documentation
> - **Broader AI actor set:** Data labelers, content moderators, code reviewers, text generators, summarization, search, chat
> - **Governance tools:** Acceptable use policies, risk-based controls, accessibility accommodations, whistleblower protections, workforce diversity
> - **Third-party:** Varying risk controls for foundation models vs. fine-tuned models vs. embedded tools; SBOMs, SLAs, SSAE reports

### A.2 Pre-Deployment Testing

> [!warning] Key Limitations
> - Current TEVV processes may be inadequate, non-systematic, or mismatched to deployment contexts
> - Anecdotal testing (video games, human standardized tests) does not guarantee validity or reliability
> - Benchmarks and in silico techniques may not extrapolate to real-world conditions
> - Measurement gaps exacerbated by prompt sensitivity and heterogeneity of use contexts

> [!tip] Structured Public Feedback Methods
> - **Participatory engagement:** Focus groups, small user studies, surveys
> - **Field testing:** UX, usability, structured randomized experiments
> - **AI Red-teaming:** Structured exercises to find flaws/vulnerabilities in controlled environments

#### AI Red-Teaming Types

| Type | Description |
|------|-------------|
| **General Public** | Non-expert users with lived experiences; more effective with large groups |
| **Expert** | Specialists with domain expertise (medicine, biotech, cybersecurity) |
| **Combination** | Expert + general public; experts modify/verify prompts from general public |
| **Human/AI** | GAI-led red-teaming with specialist/non-specialist oversight; more cost-effective |

### A.3 Content Provenance

> [!info] Definition
> Provenance data tracking records the **origin and history** of digital content, allowing authenticity to be determined. Techniques include:
> - **Digital watermarking** (overt and covert)
> - **Metadata recording** (creator, date/time, location, modifications, sources)
> - **Digital fingerprinting**
> - **Human authentication**

#### Provenance Tracking Approaches

| Approach | Description |
|----------|-------------|
| **Training data provenance** | Track origin of data and metadata for GAI systems |
| **Documentation** | Document provenance data limitations |
| **Deployment monitoring** | Monitor system capabilities through rigorous TEVV |
| **Human evaluation** | Evaluate how humans engage with GAI content and provenance techniques |

### A.4 Incident Disclosure

> [!info] AI Incident Definition
> "An event, circumstance, or series of events where the development, use, or malfunction of one or more AI systems directly or indirectly contributes to: injury/harm to health; disruption of critical infrastructure; violations of human rights or applicable law; harm to property, communities, or environment."

| Key Challenge | Current State |
|---------------|---------------|
| **No formal channels** | No formal mechanisms exist for AI incident reporting |
| **Ad hoc tracking** | Public databases exist but make ad hoc decisions about what to track |
| **Documentation need** | Logging, recording, analyzing incidents can facilitate sharing |
| **Third-party risk** | LLM plugins often have distributed, inconsistent access control |

---

## 9. AI RMF Subcategory Coverage

The GAI Profile covers selected subcategories across all four AI RMF functions:

| Function | Subcategories Covered | Count of Suggested Actions |
|----------|-----------------------|---------------------------|
| **GOVERN** | 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 2.1, 3.2, 4.1, 4.2, 4.3, 5.1, 6.1, 6.2 | ~50+ |
| **MAP** | 1.1, 1.2, 2.1, 2.2, 2.3, 3.4, 4.1, 5.1, 5.2 | ~30+ |
| **MEASURE** | 1.1, 1.3, 2.2, 2.3, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 3.2, 3.3, 4.2 | ~50+ |
| **MANAGE** | 1.3, 2.2, 2.3, 2.4, 3.1, 3.2, 4.1, 4.2, 4.3 | ~30+ |

> [!note] Future Updates
> Not every AI RMF subcategory is included. Future revisions will add additional subcategories, risks, and suggested actions as the GAI space evolves.

---

## 10. AI Actor Tasks

Applicable tasks referenced throughout the Profile:

| Actor Task | Relevance |
|------------|-----------|
| **Governance and Oversight** | Most Govern actions |
| **AI Design** | Threat modeling, safety-first design |
| **AI Development** | Training data curation, model documentation |
| **AI Deployment** | Acceptable use, post-deployment monitoring |
| **AI Impact Assessment** | Mapping risks, evaluating impacts |
| **TEVV** | Test, evaluation, validation, verification |
| **Operation and Monitoring** | Ongoing monitoring, incident response |
| **Procurement** | Third-party diligence, SLAs |
| **Domain Experts** | Context-specific expertise |
| **End Users** | Feedback, field testing participation |
| **Affected Individuals and Communities** | Participatory engagement |
| **Human Factors** | Human-AI configuration evaluation |

---

## 11. Connections to Other Frameworks

- **[[NIST AI RMF — Structured Reference]]** — AI 600-1 is a cross-sectoral profile of the AI RMF; uses the same Govern/Map/Measure/Manage structure
- **[[NIST ARIA — Structured Reference]]** — ARIA's initial risk testing draws from AI 600-1's 12 GAI risks; ARIA serves the AI RMF Measure function
- **[[AI Standards and Frameworks]]** — AI 600-1 represents NIST's profile-based approach to sector/technology-specific AI risk management
- **[[AIGP Body of Knowledge — Exam Blueprint]]** — Directly relevant to Domain II (Laws, Standards & Frameworks, II.D), Domain III (Governing AI Development) and Domain IV (Governing AI Deployment & Use)

---

## 12. Key Takeaways for AIGP Exam

> [!tip] Exam Relevance
> 1. **AI 600-1 is a profile** — implementation of AI RMF for a specific technology (GAI)
> 2. **12 risks** are the core — know them, their categories, and associated trustworthiness characteristics
> 3. **Four primary considerations** — Governance, Pre-Deployment Testing, Content Provenance, Incident Disclosure
> 4. **Action IDs follow pattern** — GV/MP/MS/MG - function.subcategory-sequence
> 5. **Structured public feedback** — three types: participatory engagement, field testing, AI red-teaming
> 6. **Confabulation vs. hallucination** — NIST prefers "confabulation" (avoids anthropomorphization)
> 7. **Risk dimensions** — lifecycle stage, scope, source, time scale
> 8. **Third-party throughout** — Govern 6, Map 4, Manage 3 all address value chain risks
