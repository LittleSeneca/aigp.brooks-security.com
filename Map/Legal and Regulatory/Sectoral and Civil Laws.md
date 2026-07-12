---
tags:
 - aigp/domain-II
 - aigp/area
 - aigp/legal
created: 2026-07-11
domain: "II: Understanding How Laws, Standards and Frameworks Apply to AI"
subdomain: "II.B: Understand How Other Types of Existing Laws Apply to AI"
related:
 - "[[Legal and Regulatory Index]]"
 - "[[Privacy and Data Protection Law]]"
 - "[[The EU AI Act]]"
 - "[[AIGP Exam Questions]]"
---

# Sectoral and Civil Laws

> **Domain II, Subdomain II.B** — Understanding How Other Types of Existing Laws Apply to AI

## Performance Indicators

- Understand how **intellectual property laws** apply to AI (e.g., prohibiting or limiting use of data for AI training)
- Understand how **non-discrimination laws** apply to AI (e.g., in employment, credit, lending, housing, and insurance)
- Understand how **consumer protection laws** apply to AI (e.g., prohibiting unfair and deceptive acts or practices)
- Understand how **product liability laws** apply to AI (e.g., prohibiting design or manufacturing defects)
- **Identify laws that apply to the AI model**

---

## 1. Intellectual Property Laws and AI

### 1.1 Copyright Law and AI Training

**Copyright** protects "original works of authorship" fixed in a tangible medium (text, music, images, video, software code).

| Key Question | Relevance |
|-------------|-----------|
| Is training on copyrighted works a violation of the reproduction right? | Core legal debate |
| Does training constitute "transformative" use under fair use? | Primary developer defense |
| Are AI-generated outputs infringing if they resemble copyrighted works? | Emerging litigation focus |

> **Notable:** Getty Images v. Stability AI (2023) — Getty sued for alleged use of millions of copyrighted images without permission; case pending.

#### Fair Use Doctrine (U.S.)

Courts weigh four factors:

| Factor | Description |
|--------|-------------|
| Purpose and character of use | Commercial vs. non-profit; transformative vs. duplicative |
| Nature of the copyrighted work | Factual vs. creative |
| Amount and substantiality used | How much of the original was used |
| Effect on the market | Does the use compete with the original? |

> **Exam note:** AI developers claim training is fair use because models learn patterns, not copy. This argument is increasingly challenged in court.

#### Training Data Dilemma

- AI systems scrape massive datasets from websites, forums, art repositories, codebases
- **GitHub Copilot litigation (2022):** Class-action alleged Copilot reproduced open-source code without proper attribution, violating licenses like GPL

#### Licensing Models for Training Data

| Approach | Example |
|----------|---------|
| Public domain content | U.S. government data, Project Gutenberg |
| Creative Commons (CC) licenses | Reuse with conditions |
| Paid licensing agreements | Shutterstock licensing images for training |
| Synthetic data generation | Reduces dependency on real-world datasets |

### 1.2 Patent Law and AI-Generated Inventions

**Patent law** protects new, useful, and non-obvious inventions.

| Issue | Status |
|-------|--------|
| Use of patented data/algorithms in training | Requires license consideration |
| Patentability of AI-generated inventions | **Must have human inventor** |

> **Key Case: Thaler v. Vidal (2022)** — U.S. Federal Circuit held the Patent Act requires a **human inventor**, rejecting DABUS AI as named inventor. Most patent offices (USPTO, EPO) agree; only South Africa granted a DABUS patent.

> **[[Can AI Be an Inventor?]]** — Globally, courts and patent offices reject AI as inventor. Only natural persons qualify under current law.

### 1.3 Trade Secrets and AI Models

**Trade secret** — confidential business information deriving economic value from not being generally known.

**AI-related trade secrets include:**
- Proprietary training datasets
- Model architecture and hyperparameters
- Fine-tuning methodologies
- Inference optimization algorithms
- Data preprocessing and augmentation techniques
- Deployment infrastructure and scaling methods

| Challenge | Description |
|-----------|-------------|
| Secrecy in collaborative environments | Multiple parties accessing datasets |
| Reverse-engineering from outputs | Outputs may reveal training data/algorithms |
| Transparency vs. secrecy | Ethical review requires visibility |
| Supply chain exposure | Third-party vendors handling sensitive data |

> **Example:** OpenAI shifted from publishing GPT models openly to proprietary GPT-4, citing safety and competitiveness — also shielding against IP infringement claims.

### 1.4 Database Rights (EU)

Under the **EU Database Directive (96/9/EC)**, *sui generis* database rights protect substantial investment in compiling data.

- Rights holders can **prohibit extraction or reuse** of substantial parts
- AI developers may need licenses even for non-copyrightable content
- Relevant for structured datasets: medical records, scientific databases, financial archives

### 1.5 AI Outputs and Infringement

Two factors determine if output infringes:
1. **Similarity** to protected work (and extent)
2. **Access** — did the AI train on the original?

| Liability Question | Potential Answer |
|--------------------|-----------------|
| Who is liable for infringing output? | Developer, trainer, end user, or model itself |
| Prevailing theories | Vicarious infringement, contributory liability |

> **Andersen v. Stability AI (2023):** Artists allege Stable Diffusion creates derivative works mimicking their style. "In the style of [artist]" prompts may produce infringing content.

### 1.6 Ownership of AI-Generated Content

**U.S. Copyright Office position (2023):**
- Only works with **human authorship** are eligible for protection
- Applicants **must disclose AI involvement** in copyright registrations
- Omission may **invalidate** the registration

| Use Type | Copyright Eligibility |
|----------|----------------------|
| **Tool-based use** — human guides and edits output | Eligible |
| **Autonomous generation** — minimal human input | Not eligible |

> **Zarya of the Dawn (2023):** Copyright Office revoked protection for Midjourney-generated images; human-written text retained protection.

### 1.7 Cross-border IP Complexities

IP laws are **territorial** — granted and enforced by individual jurisdictions.

| Jurisdiction | Key Distinction |
|-------------|-----------------|
| **United States** | Fair use doctrine; no copyright for purely AI-generated works |
| **European Union** | Limited exceptions; database rights; TDM exceptions require opt-outs |
| **China** | Recognizes copyright in AI-generated content (under human guidance) |
| **Japan** | Broad TDM for any purpose including commercial |
| **Canada/Australia** | Case-by-case; some openness to broader training exceptions |

> **Forum shopping** — plaintiffs seek favorable jurisdictions; organizations face multi-jurisdictional claims, conflicts of law, and extraterritorial enforcement.

### 1.8 IP Risk Mitigation Strategies

**IP-Aware AI Governance Framework:**
- Due diligence for training data sources
- Review of licensing obligations (open-source, CC)
- Controls over model output usage
- Recordkeeping for data provenance and model lineage
- Codified policies

> **Best Practice: Data Provenance Logs** — Track origin, usage rights, and attribution requirements for each dataset. (See [[AI System Lifecycle and Governance]])

**Contractual Protections (AIaaS):**
- Clear allocation of liability between vendor and customer
- Indemnification clauses for third-party IP claims
- Usage restrictions
- Representations and warranties regarding training data

**Sample AI IP Risk Review Checklist:**
- Were all training datasets legally acquired or licensed?
- Were open-source licenses respected (GPL, MIT, CC-BY)?
- Does the model produce content resembling known copyrighted works?
- Are users warned against improper use of outputs?
- Is the organization prepared to respond to takedown or litigation?

### 1.9 Future of AI IP Regulation

**Proposed U.S. legislation:**
- Require developers to document data sources
- Prohibit unauthorized use of copyrighted content for training
- Establish registries or licensing frameworks

**EU initiatives:**
- EU AI Act introduces transparency obligations (document training data sources)
- EU DSA and Copyright Directive — takedown mechanisms, platform liability

> **Key cases to watch:** Disney & Universal v. Midjourney, Getty Images v. Stability AI, Andersen v. Stability AI, GitHub Copilot litigation

---

## 2. Non-Discrimination Laws and AI

### 2.1 Legal Foundations

**Protected classes** in U.S. civil rights laws: race, color, national origin, sex (including gender identity/sexual orientation), pregnancy, religion, disability, age, veteran status, genetic traits, familial status, income.

| Theory | Definition |
|--------|------------|
| **Disparate treatment** | Intentional discrimination based on protected class |
| **Disparate impact** | Neutral policies that disproportionately harm protected groups; **no intent required** |

> **Disparate Impact 101:** Plaintiffs must show (1) significant adverse impact on a protected class and (2) lack of business necessity or less discriminatory alternatives. Central to algorithmic bias cases.

#### Sources of Algorithmic Bias

| Source | Example |
|--------|---------|
| Biased training data | Historical decisions reflecting systemic discrimination |
| Proxy variables | Postal codes correlating with race |
| Opaque models | Black-box models masking bias |
| Feedback loops | Reinforcing existing inequality |
| Sampling bias | Under/overrepresentation of certain groups |

### 2.2 Employment: AI in Hiring, Promotion, and Termination

**Key laws:** Title VII of Civil Rights Act, ADA, ADEA

**Title VII rule:** Selection procedures causing disparate impact are unlawful unless:
- Job-related and consistent with business necessity, AND
- No less discriminatory alternative is available

> **Amazon résumé screening tool (2018):** Abandoned after penalizing women's college graduates; trained on predominantly male résumés — classic **proxy discrimination**.

#### EEOC Guidance (May 2023)

| Key Takeaway |
|-------------|
| Employers are responsible for AI-based decisions even if **third-party vendors** develop the tools |
| Vendor disclaimers do **not shield liability** |
| Reasonable accommodations must be provided under ADA, even for algorithmic assessments |
| Employers should audit and document algorithmic decision-making |

> **NYC Law 144:** Requires bias audits of automated employment decision tools, annual publication of audit results, and disclosures to candidates. First of its kind in U.S.

### 2.3 Credit and Lending: ECOA and FCRA

#### Equal Credit Opportunity Act (ECOA, 1974)

Prohibits discrimination in credit transactions based on race, sex, marital status, religion, national origin, age, or receipt of public assistance.

| AI Requirement |
|---------------|
| No disparate impact or use of prohibited proxies |
| Clear reasons for adverse actions (AI **explainability**) |
| Fair access across protected groups |

> **CFPB warning (2022):** "Black box" AI algorithms do not excuse lenders from ECOA obligations. Specific reasons for credit denials must be provided.

#### Fair Credit Reporting Act (FCRA, 1970)

Governs use of credit scores and third-party data. AI systems ingesting such data may qualify as **consumer reporting agencies (CRAs)** .

| Requirement |
|-------------|
| Accuracy and integrity of consumer data |
| Disclosure to consumers of decisions and data sources |
| Mechanisms to dispute errors |

| | FCRA | ECOA |
|---|------|------|
| **Focus** | Consumer data and reports | Discrimination in lending |
| **Triggers** | Use of third-party consumer data | Protected class status |
| **Key Requirement** | Accurate, disputable reports | Equal access and justifiable criteria |
| **AI Implication** | Responsible data sourcing | Bias detection and justification logic |

> **Apple Card/Goldman Sachs (2019):** Multiple customers (including Steve Wozniak) reported receiving significantly lower credit limits than spouses with similar profiles. NYDFS investigation into algorithmic fairness — no intent found, but highlighted opacity risks.

### 2.4 Housing: Fair Housing Act (FHA, 1968)

**Protected characteristics:** race, color, religion, sex, national origin, disability, familial status.

#### Algorithmic Advertising and Targeting

**Differential exposure** — AI causes users/groups to receive different information, even when decision logic treats all equally.

> **HUD v. Facebook (2019):** Facebook enabled housing advertisers to exclude users by race, religion, gender, and postal code. Settled; new rules implemented for ad targeting.

**FHA violations include:**
- Discriminatory targeting (excluding users of specific ethnicity)
- Discriminatory impact (algorithm limits access to specific groups)
- Failure to monitor third-party tools

#### Tenant Screening

AI-powered tools using credit scores, criminal history, or eviction records may reflect systemic bias. Must meet accuracy, relevance, and non-discrimination standards under both FHA and FCRA.

### 2.5 Insurance: State-level Regulation

No single federal anti-discrimination statute for insurance. Regulation primarily at **U.S. state level**.

State laws typically prohibit unfair discrimination based on: race, religion, gender, disability, national/ethnic origin, veteran status, genetic information. Some states add sexual orientation, gender identity, occupation.

| State | Action |
|-------|--------|
| California, Hawaii, Massachusetts | Ban/restrict credit scores in auto insurance |
| Colorado SB21-169 | First state law requiring insurers to evaluate AI for unfair discrimination, submit bias testing documentation, implement governance policies |

#### Proxy Variables in Insurance

| Variable | Potential Proxy For |
|----------|--------------------|
| Postal code | Race, socioeconomic status, religion |
| Education level | Income or nationality |
| Occupation | Gender or class status |
| Credit history | Race (via systemic inequality) |

### 2.6 Non-Discrimination Risk Mitigation

**Bias Audits — Key Elements:**
- Statistical evaluation of training/test datasets
- Performance assessment across demographic subgroups
- Review of feature relevance and proxy risk
- Documentation of audit methodologies and results
- Ongoing post-deployment monitoring for bias drift

**AI Model Bias Audit Checklist:**
- Disparate impact metrics tested
- Protected class proxies removed or justified
- Business necessity for impactful features documented
- Model outputs are explainable and reviewable

**Vendor Contract Requirements:**
- Conduct and share bias audit results
- Disclose data sources and model documentation
- Agree to indemnify for regulatory violations
- Assist with explainability and adverse action notices

> **Red flags that trigger legal scrutiny:** opaque models, unjustified use of proxies (credit history, postal code, education), inability to provide specific adverse action reasons, no disparate impact testing, denial of reasonable accommodations.

---

## 3. Consumer Protection Laws and AI

### 3.1 FTC Act Section 5

The FTC may take action against:

| Type | Definition |
|------|------------|
| **Unfair acts** | Cause or likely to cause substantial injury; not reasonably avoidable; not outweighed by benefits |
| **Deceptive acts** | Mislead or likely to mislead a reasonable consumer; material representations or omissions |

| | Unfair or Deceptive Act | Fraud |
|---|---|---|
| **Liability** | Civil | Often criminal |
| **Intent** | Not required | Required |
| **Scope** | Broad application | Narrow, specific conduct |
| **Enforcement** | FTC, states | DOJ, AGs, plaintiffs |

### 3.2 State-Level UDAP Laws

Every U.S. state has "mini-FTC Acts":

| State | Law |
|-------|-----|
| **California** | Unfair Competition Law (UCL) — prohibits unlawful, unfair, or fraudulent acts |
| **Massachusetts** | Consumer Protection Law 93A — triple damages for deceptive conduct |
| **New York** | GBL §349 — focuses on deceptive conduct |

### 3.3 FTC's AI Enforcement Focus

**FTC's Five AI Governance Questions:**
1. Are AI datasets biased or incomplete?
2. Do AI-powered decisions discriminate against protected groups?
3. Can consumers opt out of automated decisions?
4. Is the organization transparent about when and how AI is used?
5. Can the organization explain and justify AI-powered decisions?

**Key enforcement actions:**

| Case | Issue | Outcome |
|------|-------|---------|
| **Everalbum (2021)** | Facial recognition without notice; retained biometric data post-deactivation | Delete models/data; disclose practices |
| **CuraLife (2022)** | Falsely marketed AI-based diabetes insights | Substantiation required for AI health claims |
| **Amazon Alexa (2019)** | Retained children's voice recordings; COPPA violations | Settlement; fined |

### 3.4 Dark Patterns and Manipulative Interfaces

**Dark patterns** — UI designs that trick, coerce, or confuse consumers:
- Hidden/unclear opt-out and unsubscribe buttons
- "Confirm-shaming" (e.g., "No thanks, I like paying full price")
- Deceptively labeled toggles
- AI-powered real-time A/B testing that reduces clarity

> AI exacerbates these risks by **personalizing manipulation at scale** — adapting content in real time based on behavioral predictions.

### 3.5 Chatbots, Deepfakes, and AI Impersonation

**Undisclosed AI interactions** in legal, health, spiritual, or financial contexts may constitute a material omission under UDAP.

**Deepfake risks:**
- Fabricated celebrity endorsements
- False evidence of events or statements
- Impersonation scams
- Non-consensual intimate images

> **Take It Down Act (2025, U.S.):** Criminalizes distribution of non-consensual intimate images including AI deepfakes. UK's Online Safety Act similarly criminalizes.

**Deepfake Red Flags:**
- Unrealistically high-quality endorsements/confessions
- Videos without metadata or original source
- Synthetic voice in customer service without notice
- Out-of-character statements

### 3.6 FTC Endorsement Guides (2023 Update)

- Require disclosure of **AI-generated testimonials**
- Prohibit **fake or unverified reviews**
- Businesses accountable for deceptive reviews even if generated by **affiliates or third-party vendors**

### 3.7 Consumer Protection Risk Mitigation

**Transparency and disclosure requirements:**
- Clear disclosure that users are interacting with AI
- Accessible explanations of how decisions are made
- Contextual disclaimers that AI is not professional advice
- Model limitations statements
- Easy escalation paths to human representatives

> Disclosures must be **prominent** (not buried in ToS), **in plain language**, and provided **at time of AI use**.

**AI Marketing Compliance Checklist:**
- All AI performance claims supported by quantitative/qualitative evidence
- Scope of AI's role clearly stated (human-assisted vs. fully automated)
- Disclaimers visible where needed
- Third-party tool limitations disclosed
- Testimonials authentic and appropriately labeled

**Ongoing monitoring:**
- Routine performance and fairness audits
- Red teaming for abusive/manipulative behavior
- Logging and reviewing user complaints
- Monitoring for hallucinations, false positives, unsafe responses
- Security monitoring for prompt injection, data poisoning

| Red Flag | Why Risky |
|----------|-----------|
| "100% accurate" AI claim | Deceptive unless provable |
| AI chatbot gives medical/legal advice | Could mislead into unsafe decisions |
| No disclosure of AI interaction | Violates material disclosure expectations |
| Optimizing UI for engagement over clarity | May trigger dark pattern enforcement |
| AI-generated reviews/endorsements | Likely deceptive unless disclosed |
| Claims based on outdated/biased data | May cause unfair outcomes without recourse |

---

## 4. Product Liability Laws and AI

### 4.1 Theories of Product Liability

| Theory | Definition |
|--------|------------|
| **Design defect** | Product manufactured as intended but design is unreasonably dangerous |
| **Manufacturing defect** | Product deviates from intended design due to manufacturing error |
| **Failure to warn (marketing defect)** | Product lacks adequate instructions or warnings about risks |

**Applied through:**

| Standard | Requirement |
|----------|-------------|
| **Strict liability** | No need to prove negligence — only that product was defective and caused harm |
| **Negligence** | Must show failure to act with reasonable care |
| **Breach of warranty** | Based on contractual promises about safety/performance |

| | Strict Liability | Negligence |
|---|---|---|
| **Standard** | Defective product causes harm | Failure to act with reasonable care |
| **Intent** | Not required | Required (failure to prevent foreseeable harm) |
| **Common Use** | Design/manufacturing defects | Inadequate testing, supervision, warning |
| **AI Example** | Autonomous vacuum explodes due to flaw | AI decision causes harm due to poor oversight |

### 4.2 What Is a "Defect" in AI?

AI complicates traditional defect analysis:
- Behavior is **dynamic and context-sensitive**
- Models may **drift** after deployment
- Outputs are **probabilistic, not deterministic**

> **Uber autonomous vehicle (2018):** Software failed to classify pedestrian as hazard. Was the defect in algorithm, sensor configuration, or testing protocol? Ambiguity illustrates difficulty pinpointing defects in adaptive systems.

### 4.3 AI as a "Product"

| Traditional view | Emerging view |
|-----------------|---------------|
| Software = service (not tangible good) | Embedded software controlling hardware = product |
| Licensing agreements govern (not sales) | Courts treat AI as part of product system when it controls physical hardware or replaces human judgment |

> **Restatement (Third) of Torts:** Defines product as "tangible personal property distributed commercially." Embedded software operating physical products (autopilot, insulin pumps, drones) may qualify.

### 4.4 Risk-Utility Balancing

Courts apply the **risk-utility test**: "Was the risk of harm outweighed by the product's utility, and could a **reasonable alternative design** have reduced the risk?"

**Plaintiffs may allege:**
- Insufficient or improper training data used
- Safer model architectures available but ignored
- Design failed to include human oversight
- Safer default behavior was feasible

### 4.5 Manufacturing Defects in AI

| AI Manufacturing Defects |
|--------------------------|
| Faulty sensors/cameras in autonomous vehicles |
| Corrupted firmware or software deployment |
| Hardware failures impairing AI perception |
| Integration errors between AI and mechanical components |
| Third-party component compatibility issues |

> AI manufacturers are often **integrators** assembling components from multiple sources.

### 4.6 Failure to Warn

Must warn consumers about **non-obvious dangers**. Duty is **ongoing** — extends post-deployment as risks evolve.

| Warning Triggers |
|-----------------|
| User instructions omit known AI accuracy limitations |
| Disclaimers buried or not in plain language |
| Users unaware AI is controlling outcomes |
| Edge cases and risk conditions not disclosed |

> **Tesla Autopilot:** "Autopilot" and "Full Self-Driving" branding led to consumer misunderstanding. Mid-2025: federal jury awarded **>$240 million** in damages for 2019 Autopilot-related death.

**Continuing duty to warn** may include software update notices, safety alerts, recall announcements, and public disclosures.

### 4.7 Preemption

| Claim | Potential Preemption |
|-------|---------------------|
| Design defect in AI medical device | May be preempted by FDA approval |
| Failure to warn about AI in drones | Unlikely to be preempted |
| Post-sale updates causing harm | Less likely to be protected |

### 4.8 AI Supply Chain Complexity

AI supply chain actors: hardware vendors, cloud service providers, model developers, data brokers, system integrators. Each may **blame others** in litigation.

> Legal ambiguity about **joint and several liability** in AI contexts complicates litigation.

### 4.9 EU Product Liability Directive (Proposed)

European Commission proposals:
- Cover **software and digital updates**
- **Presumption of defect** in high-risk AI cases (e.g., autonomous vehicles)
- **Expanded liability** to developers and deployers, not just manufacturers

### 4.10 Product Liability Risk Mitigation

**AI-Specific Safety Testing:**
- Edge-case behavior in non-deterministic environments
- Bias and fairness audits for outputs affecting physical outcomes
- Simulation testing for rare but catastrophic events
- Human-AI interaction risks (overreliance, confusion)
- Vulnerability testing: adversarial patch, prompt injection, data poisoning
- Digital twins / sandboxed environments
- Stress testing with unpredictable inputs (fuzzing)

**AI System Bill of Materials (AI-SBOM):**

| Element | Purpose |
|---------|---------|
| Model version and ID | Identify which version caused harm |
| Dataset sources | Reveal bias or licensing issues |
| Preprocessing steps | Explain unexpected model behavior |
| Firmware/software logs | Validate configuration at time of error |
| Update timestamps | Determine if recent changes were causal |

**Post-Deployment Governance:**
- Real-world performance monitoring
- Event/incident escalation procedures
- Contingency plans: **model rollback**, **human override**
- Automated alerting for performance changes, unusual patterns, claims of harm

---

## Key Takeaways

1. **Regulations have not caught up to AI's paradigms.** Existing regulations and case law are challenged by AI capabilities. Organizations should err on the side of caution and conduct rigorous diligence.

2. **Understand how IP laws affect AI training and outputs.** AI systems trained on copyrighted content may infringe IP rights. Assess fair use, secure licenses, document data provenance.

3. **Recognize how non-discrimination laws apply to AI in regulated sectors.** Title VII, ECOA, and FHA prohibit intentional and unintentional discrimination with disparate impact. Audit for bias and proxy variables tied to protected traits.

4. **Identify consumer protection risks posed by AI deception or opacity.** Fake reviews, undisclosed AI, misleading claims, and dark patterns violate FTC Act and state UDAP laws. Be transparent, substantiate claims, provide clear information.

5. **Apply product liability principles to AI-driven physical systems.** Design defect, manufacturing defect, and failure to warn apply. AI's adaptive behavior complicates causation — requiring rigorous testing, version tracking, and post-market monitoring.

6. **Integrate legal compliance into the AI lifecycle.** Embed legal review, bias mitigation, documentation, and human oversight throughout development, especially for systems affecting rights, safety, or access to critical services.

---

## Key Terms

- **[[Fair Use]]** — U.S. doctrine permitting limited unauthorized use of copyrighted material based on four-factor test
- **[[Disparate Impact]]** — Neutral policy disproportionately harming protected groups; no intent required
- **[[Disparate Treatment]]** — Intentional discrimination based on protected class
- **[[Proxy Variables]]** — Factors correlating with protected characteristics (e.g., postal code → race)
- **[[Trade Secret]]** — Confidential business information with economic value from not being publicly known
- **[[Dark Patterns]]** — UI designs that trick or coerce consumers into unintended choices
- **[[UDAP]]** — Unfair or Deceptive Acts or Practices; basis for consumer protection enforcement
- **[[Strict Liability]]** — Liability without need to prove negligence; product was defective and caused harm
- **[[Design Defect]]** — Product manufactured as intended but design is unreasonably dangerous
- **[[Failure to Warn]]** — Inadequate instructions or warnings about product risks
- **[[Risk-Utility Test]]** — Balances risk of harm against product utility; considers reasonable alternative design
- **[[AI-SBOM]]** — AI System Bill of Materials documenting dependencies and subcomponents
- **[[Data Provenance]]** — Record of data sources, usage rights, and attribution requirements
- **[[Model Drift]]** — AI model performance changing after deployment
- **[[FTC Section 5]]** — FTC authority to act against unfair or deceptive acts or practices
- **[[ECOA]]** — Equal Credit Opportunity Act; prohibits discrimination in credit transactions
- **[[FCRA]]** — Fair Credit Reporting Act; governs credit scores and third-party consumer data
- **[[FHA]]** — Fair Housing Act; prohibits discrimination in sale, rental, and financing of housing
