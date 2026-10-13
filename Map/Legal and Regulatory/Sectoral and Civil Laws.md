---
tags:
 - aigp/domain-II
 - aigp/area
 - aigp/legal
created: 2026-07-11
updated: 2026-09-23
domain: "II: Understanding How Laws, Standards and Frameworks Apply to AI"
subdomain: "II.B: Understand How Other Types of Existing Laws Apply to AI"
source: "AIGP BOK v2.1 (effective 2 Feb 2026), competency II.B; primary sources listed under Sources, current to 23 Sep 2026"
related:
 - "[[Legal and Regulatory Index]]"
 - "[[AIGP Body of Knowledge — Exam Blueprint]]"
 - "[[Privacy and Data Protection Law]]"
 - "[[The EU AI Act]]"
 - "[[GPAI Code of Practice — Key Provisions]]"
 - "[[US AI Laws — Federal and State]]"
---

# Sectoral and Civil Laws

> **Domain II, Subdomain II.B** — Understanding How Other Types of Existing Laws Apply to AI

> **Status:** Current to 23 Sep 2026. **Exam weight:** II.B carries 4-6 of the 19-23 Domain II questions (BOK v2.1). **Moving parts:** the Ross, Getty and GEMA appeals, NYT v. OpenAI, and national transposition of the EU Product Liability Directive by 9 Dec 2026. Where a status could change, this note says "as of 2026".

## Performance Indicators

BOK v2.1 (approved 9 Sep 2025, effective 2 Feb 2026) lists four indicators under competency II.B, *understand how other types of existing laws apply to AI*:

- Understand how **intellectual property laws** apply to AI (e.g., prohibiting or limiting use of data for AI training)
- Understand how **nondiscrimination laws** apply to AI (e.g., in the employment, credit, lending, housing and insurance contexts)
- Understand how **consumer protection laws** apply to AI (e.g., prohibiting unfair and deceptive acts or practices)
- Understand how **product liability laws** apply to AI (e.g., prohibiting design and manufacturing defects)

> **Version note:** II.B is substantively unchanged from v2.0.1; v2.1 only tidies the wording ("nondiscrimination", "design and manufacturing defects"). The task *identify laws that apply to the AI model* was never a II.B indicator: v2.0.1 listed it under III.A and IV.B, and v2.1 dropped it.

---

## 1. Intellectual Property Laws and AI

### 1.1 Copyright Law and AI Training

**Copyright** protects "original works of authorship" fixed in a tangible medium (text, music, images, video, software code).

| Key Question | Relevance |
|-------------|-----------|
| Is training on copyrighted works a violation of the reproduction right? | Core legal debate |
| Does training constitute "transformative" use under fair use? | Primary developer defense |
| Are AI-generated outputs infringing if they resemble copyrighted works? | Emerging litigation focus |
| Does a trained model itself "contain" copies of the works? | Split between UK and German courts (2025) |

> **Where the cases stand:** see the dated tracker in §1.2. As of Sep 2026 no US appellate court has ruled on training and fair use.

#### Fair Use Doctrine (U.S.)

Courts weigh four factors (17 U.S.C. §107):

| Factor | Description |
|--------|-------------|
| Purpose and character of use | Commercial vs. non-profit; transformative vs. duplicative |
| Nature of the copyrighted work | Factual vs. creative |
| Amount and substantiality used | How much of the original was used |
| Effect on the market | Does the use compete with the original or its licensing market? Whether market dilution by AI output of the same kind counts is unsettled: *Kadrey* and the Copyright Office's 2025 training report accept the theory, *Bartz* rejected it |

> **Exam note:** Developers argue training is transformative because models learn patterns rather than keep copies. As of 2026 district courts have split: training was fair use on the records in *Bartz* and *Kadrey*, but not in *Thomson Reuters v. Ross*. Factor one (transformativeness) and factor four (market harm) decide the cases, and how the data was acquired can decide the exposure.

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

### 1.2 AI Copyright Case Tracker (as of 23 Sep 2026)

| Case | Court and date | Holding or status | Governance lesson |
|------|----------------|-------------------|-------------------|
| **Thaler v. Perlmutter** | D.C. Cir., 18 Mar 2025; Supreme Court denied cert. 2 Mar 2026 (No. 25-449) | The Copyright Act of 1976 requires a work to be authored "in the first instance by a human being"; an AI system cannot be the author. The work-made-for-hire argument failed: that provision transfers authorship of a human-created work, it does not make machines authors | Record the human contribution to AI-assisted works; never list the AI as author |
| **Thomson Reuters v. Ross Intelligence** | D. Del. (Bibas J., sitting by designation), 11 Feb 2025; 3d Cir. argued 11 Jun 2026, **pending** | Copying Westlaw headnotes to train a competing, **non-generative** legal search tool was not fair use: factors one and four favoured Thomson Reuters. First federal appeal on AI training and fair use | Training a direct market substitute on a competitor's content is the highest-risk pattern; license it |
| **Bartz v. Anthropic** | N.D. Cal. (Alsup J.), 23 Jun 2025; settlement final approval 20 Jul 2026 (Martínez-Olguín J.) | Training on the books and scanning purchased print books into digital copies were fair use; downloading pirated copies to build a permanent central library was not (on the summary judgment record). **$1.5 billion** non-reversionary settlement covering about 482,000 works | Provenance and acquisition drive exposure: audit sources and purge pirated or shadow-library data |
| **Kadrey v. Meta** | N.D. Cal. (Chhabria J.), 25 Jun 2025 | Summary judgment for Meta on training, but only because the 13 plaintiffs offered no evidence of market dilution; the ruling "does not stand for the proposition" that Meta's training was lawful. Torrent-distribution claims continue (leave to add a contributory infringement claim granted 25 Mar 2026) | A win on a thin record is not a safe harbour; assess market-dilution risk before training |
| **NYT v. Microsoft & OpenAI** | S.D.N.Y. (Stein J.), filed Dec 2023; centralised in *In re OpenAI, Inc. Copyright Infringement Litigation*, MDL No. 3143 (Apr 2025) | **Pending**: summary judgment briefing under way in Sep 2026. Covers both training and regurgitated outputs | Output controls against memorisation and regurgitation matter as much as input licensing |
| **Getty Images v. Stability AI** | UK High Court (Joanna Smith J.), 4 Nov 2025, **[2025] EWHC 2863 (Ch)** | Getty dropped its training claim (no evidence training occurred in the UK) and its outputs claim. The secondary infringement claim failed: an "article" can be intangible, but a model that does not store or reproduce the works, and never has, is not an "infringing copy". Limited, historic trade mark wins over Getty/iStock watermarks in older model versions. On 16 Dec 2025 ([2025] EWHC 3343 (Ch)) the judge gave Getty permission to appeal the secondary infringement ruling and refused Stability permission on the trade mark findings | Copyright is territorial: where training happens matters. Watermark regurgitation is a trade mark risk |
| **GEMA v. OpenAI** | Regional Court Munich I, 11 Nov 2025, 42 O 14139/24 | Lyrics of nine German songs memorised in GPT-4 and GPT-4o were reproductions **in the model** and in outputs. The TDM exception covers copies made to build the training corpus, not memorisation. OpenAI, not its users, is responsible for outputs from simple prompts. Not final: OpenAI has appealed to the Higher Regional Court of Munich | Test for memorisation; in the EU a model that can regurgitate works may itself hold copies |

> **Getty vs GEMA:** the UK court treated model weights as not containing the works; the Munich court treated memorised works as reproduced in the parameters. Both are on appeal as of 2026. A first CJEU reference on generative AI and copyright, *Like Company v. Google Ireland* (C-250/25), was heard on 10 Mar 2026; judgment pending.

### 1.3 US Copyright Office AI Reports

| Part | Date | Key conclusions |
|------|------|-----------------|
| **Part 1: Digital Replicas** | 31 Jul 2024 | Recommends a federal law against unauthorised digital replicas that realistically but falsely depict a person |
| **Part 2: Copyrightability** | 29 Jan 2025 | Existing law is flexible enough. Outputs are protected only where a human author determined sufficient expressive elements: human work perceptible in the output, or creative selection, arrangement or modification. **Prompts alone are not enough.** AI assistance does not bar protection of the human contribution. No new rights for AI output are needed |
| **Part 3: Generative AI Training** | 9 May 2025 (pre-publication version; final version to follow with no substantive changes expected) | Several stages of training implicate exclusive rights, so the key question is fair use, decided case by case. Many training uses are likely transformative, but commercial use of vast troves of works to produce expressive content that competes with them, especially through illegal access, "goes beyond established fair use boundaries". Factor four should not be read narrowly: market dilution counts. Voluntary licensing should develop; government intervention is premature |

> **Registration guidance (16 Mar 2023, 88 FR 16190):** applicants have a duty to disclose AI-generated content and briefly explain the human author's contribution; more-than-de-minimis AI material must be excluded from the claim. Applications that omitted it should be corrected so the registration remains effective.

### 1.4 EU Text and Data Mining Exception and the AI Act

The DSM Directive (EU) 2019/790 (transposition deadline 7 Jun 2021) defines text and data mining as any automated technique that analyses digital text and data to generate information such as patterns, trends and correlations (Art. 2(2)).

| Provision | Who benefits or is bound | Opt-out? | Notes |
|-----------|--------------------------|----------|-------|
| **DSM Art. 3** | Research organisations and cultural heritage institutions, mining for scientific research, with lawful access | **No.** Contract terms overriding it are unenforceable (Art. 7(1)) | Copies stored with appropriate security; may be retained for research, including verification |
| **DSM Art. 4** | Anyone with lawful access, for any purpose including commercial training | **Yes.** Applies only if the use has not been "expressly reserved by their rightholders in an appropriate manner, such as machine-readable means in the case of content made publicly available online" (Art. 4(3)) | Copies kept as long as necessary for TDM. Recital 18: machine-readable means include metadata and a website's terms and conditions |
| **AI Act Art. 53(1)(c)** | Providers of general-purpose AI models | Must honour Art. 4(3) reservations | A policy to comply with EU copyright law, identifying and complying with reservations "including through state-of-the-art technologies". Recital 106: applies regardless of where the training took place |
| **AI Act Art. 53(1)(d)** | Providers of general-purpose AI models | — | A public, sufficiently detailed summary of training content, using the AI Office template (published 24 Jul 2025) |

- GPAI obligations (Chapter V) have applied since 2 Aug 2025; the Commission's fining powers under Art. 101 apply from 2 Aug 2026.
- **Open-source models are not exempt** from (c) and (d): Art. 53(2) lifts only points (a) and (b), and not at all for models with systemic risk.
- The **GPAI Code of Practice** copyright chapter commits signatories to respect robots.txt and other appropriate machine-readable protocols. The Commission consulted on opt-out protocols from 1 Dec 2025 to 23 Jan 2026 and will publish a list of generally agreed machine-readable solutions.
- The 2026 Digital Omnibus on AI (Regulation (EU) 2026/1744) did not change Art. 53(1)(c)-(d).

> **Fair use vs TDM:** fair use is a US defence weighed case by case; the EU has no fair use, only the Art. 3 and Art. 4 exceptions. A US developer that places a GPAI model on the EU market must still honour EU opt-outs.

### 1.5 Patent Law and AI-Generated Inventions

**Patent law** protects new, useful, and non-obvious inventions.

| Issue | Status |
|-------|--------|
| Use of patented data/algorithms in training | Requires license consideration |
| Patentability of AI-generated inventions | **Must have human inventor** |

> **Key Case: Thaler v. Vidal (2022)** — U.S. Federal Circuit held the Patent Act requires a **human inventor**, rejecting DABUS AI as named inventor. Most patent offices (USPTO, EPO) agree; only South Africa granted a DABUS patent.

> **[[Can AI Be an Inventor?]]** — Globally, courts and patent offices reject AI as inventor. Only natural persons qualify under current law.

### 1.6 Trade Secrets and AI Models

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

> **Transparency duties vs secrecy:** the AI Act's training-content summary is meant to be "generally comprehensive in its scope instead of technically detailed", taking trade secrets into account (recital 107).

### 1.7 Database Rights (EU)

Under the **EU Database Directive (96/9/EC)**, *sui generis* database rights protect substantial investment in compiling data.

- Rights holders can **prohibit extraction or reuse** of substantial parts
- AI developers may need licenses even for non-copyrightable content
- Relevant for structured datasets: medical records, scientific databases, financial archives
- The DSM Art. 3 and Art. 4 TDM exceptions also cover extraction from protected databases

### 1.8 AI Outputs and Infringement

Two factors determine if output infringes:
1. **Similarity** to protected work (and extent)
2. **Access** — did the AI train on the original?

| Liability Question | Potential Answer |
|--------------------|-----------------|
| Who is liable for infringing output? | Developer, trainer, end user, or model itself |
| Prevailing theories | Vicarious infringement, contributory liability |

> **Andersen v. Stability AI (filed 2023):** Artists allege Stable Diffusion creates derivative works mimicking their style. "In the style of [artist]" prompts may produce infringing content.

> **Output responsibility:** in *GEMA v. OpenAI* (2025) the Munich court held the model operator, not the user, responsible for outputs that reproduced lyrics in response to simple prompts. *NYT v. OpenAI* tests regurgitation in the US (pending).

### 1.9 Ownership of AI-Generated Content

**U.S. position (as of 2026):**
- Only works with **human authorship** are protected: *Thaler v. Perlmutter* (D.C. Cir. 2025; cert. denied 2 Mar 2026)
- The human authorship requirement does not bar works made **with the assistance of** AI; it denies authorship to the machine (D.C. Cir.)
- Prompts alone do not give enough control; human selection, arrangement and modification can be protected (Copyright Office, Part 2, Jan 2025)
- Applicants **must disclose** AI-generated content and exclude more-than-de-minimis AI material (registration guidance, Mar 2023)

| Use Type | Copyright Eligibility |
|----------|----------------------|
| **Tool-based use** — human guides and edits output | Eligible |
| **Autonomous generation** — minimal human input | Not eligible |

> **Zarya of the Dawn (2023):** Copyright Office revoked protection for Midjourney-generated images; human-written text retained protection.

### 1.10 Cross-border IP Complexities

IP laws are **territorial** — granted and enforced by individual jurisdictions.

| Jurisdiction | Key Distinction |
|-------------|-----------------|
| **United States** | Fair use doctrine, decided case by case; no copyright for purely AI-generated works |
| **European Union** | DSM Art. 3 (research, no opt-out) and Art. 4 (commercial, subject to machine-readable opt-outs); database rights; AI Act Art. 53 copyright policy and training summary for GPAI providers wherever training occurred |
| **United Kingdom** | *Getty v. Stability AI* (2025): training claim failed for lack of UK training; model weights held not to be an "infringing copy" (on appeal) |
| **Germany** | *GEMA v. OpenAI* (2025): memorisation in a model is reproduction; TDM exception covers corpus-building only (on appeal) |
| **China** | Recognizes copyright in AI-generated content (under human guidance) |
| **Japan** | Broad TDM for any purpose including commercial |
| **Canada/Australia** | Case-by-case; some openness to broader training exceptions |

> **Forum shopping** — plaintiffs seek favorable jurisdictions; organizations face multi-jurisdictional claims, conflicts of law, and extraterritorial enforcement. The AI Act's recital 106 deliberately removes the "train abroad" escape for GPAI models sold in the EU.

### 1.11 IP Risk Mitigation Strategies

**IP-Aware AI Governance Framework:**
- Due diligence for training data sources, including how each dataset was acquired (purchased, licensed, scraped, pirated)
- Review of licensing obligations (open-source, CC)
- Honour machine-readable TDM opt-outs (robots.txt and other protocols) for any model offered in the EU
- Memorisation and regurgitation testing before release
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
- Were all training datasets legally acquired or licensed? Are any from shadow libraries or pirate sites?
- Were open-source licenses respected (GPL, MIT, CC-BY)?
- Were EU rights reservations (Art. 4(3) opt-outs) identified and honoured?
- Does the model memorise or reproduce content resembling known copyrighted works?
- If we provide a GPAI model in the EU, is the Art. 53(1)(d) training summary published?
- Are users warned against improper use of outputs?
- Is the organization prepared to respond to takedown or litigation?

### 1.12 Where AI IP Regulation Is Heading

**United States:**
- No federal statute specifically governs AI training data (as of Sep 2026); the question is being settled in court
- The Copyright Office favours voluntary licensing and calls government intervention premature (Part 3), and recommends a federal digital-replica law (Part 1)
- Proposals seen in Congress: require developers to document data sources, restrict unauthorized use of copyrighted content for training, establish registries or licensing frameworks

**European Union:**
- AI Act Art. 53(1)(c)-(d) copyright policy and training summary, applying since 2 Aug 2025
- Commission work on generally agreed machine-readable opt-out protocols
- EU DSA and Copyright Directive — takedown mechanisms, platform liability

> **Key cases to watch:** *Thomson Reuters v. Ross* (3d Cir.), *In re OpenAI* including *NYT* (S.D.N.Y.), *Getty v. Stability AI* (Court of Appeal), *GEMA v. OpenAI* (OLG Munich), *Like Company v. Google Ireland* (CJEU). Also filed and not re-verified here: Disney & Universal v. Midjourney, Andersen v. Stability AI, GitHub Copilot litigation.

---

## 2. Non-Discrimination Laws and AI

### 2.1 Legal Foundations

**Protected classes** in U.S. civil rights laws: race, color, national origin, sex (including gender identity/sexual orientation), pregnancy, religion, disability, age, veteran status, genetic traits, familial status.

| Theory | Definition |
|--------|------------|
| **Disparate treatment** | Intentional discrimination based on protected class |
| **Disparate impact** | Neutral policies that disproportionately harm protected groups; **no intent required** |

> **Disparate Impact 101 (Title VII §703(k), 42 U.S.C. 2000e-2(k)):** the plaintiff shows that a particular practice causes a disparate impact; the employer must then show the practice is job related and consistent with business necessity; the plaintiff can still win by showing a less discriminatory alternative the employer refuses to adopt. Central to algorithmic bias cases. Because the standard is written into the statute, agency guidance or an executive order cannot remove it (§2.7).

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

#### EEOC Technical Assistance (2022-2023), Removed January 2025

The EEOC's May 2022 ADA and May 2023 Title VII technical assistance on AI was **removed from its website on 27 Jan 2025**. Guidance never created the law; the points below rest on the statutes and still apply:

| Key Takeaway (still good law) |
|-------------|
| Employers are responsible for the selection procedures they use, even if **third-party vendors** develop the tools |
| Vendor disclaimers do **not shield liability** |
| The ADA bars selection criteria that screen out qualified people with disabilities unless job related and consistent with business necessity (42 U.S.C. 12112(b)(6)); reasonable accommodations still apply to algorithmic assessments |
| Employers should audit and document algorithmic decision-making |

> **NYC Law 144:** Requires bias audits of automated employment decision tools, annual publication of audit results, and disclosures to candidates. First of its kind in U.S. See [[US AI Laws — Federal and State]] for state and local AI hiring rules.

### 2.3 Credit and Lending: ECOA and FCRA

#### Equal Credit Opportunity Act (ECOA, 1974)

Prohibits discrimination in any aspect of a credit transaction based on race, color, religion, national origin, sex, marital status or age (if the applicant can contract), because income comes from public assistance, or because the applicant exercised in good faith a right under the Consumer Credit Protection Act (15 U.S.C. §1691(a)).

| AI Requirement |
|---------------|
| No intentional discrimination (disparate treatment), including deliberate use of prohibited-basis proxies |
| Specific principal reasons for adverse action (AI **explainability**), 12 CFR 1002.9 |
| Fair access across protected groups |
| **Disparate impact:** since **21 Jul 2026** Regulation B states that ECOA does not provide for the "effects test"; for housing-related credit the Fair Housing Act still supports disparate-impact claims (§2.4) |

**Adverse action notice (Reg B §1002.9):** notice generally within 30 days of a completed application; the statement of reasons must be specific and give the principal reasons. Citing internal standards, or saying the applicant "failed to achieve a qualifying score" on the creditor's scoring system, is insufficient. The official commentary requires reasons that relate to and accurately describe the factors actually considered or scored, and notes that more than four reasons is unlikely to help.

> **CFPB circulars, withdrawn 12 May 2025:** Circular 2022-03 (adverse action and complex algorithms) said "black box" AI does not excuse lenders from giving specific reasons; Circular 2023-03 covered adverse action notices and the proper use of sample forms. The withdrawal removed guidance, not the rule: §1002.9(b)(2) is unchanged.

#### Fair Credit Reporting Act (FCRA, 1970)

Governs use of credit scores and third-party data. AI systems ingesting such data may qualify as **consumer reporting agencies (CRAs)** .

| Requirement |
|-------------|
| Accuracy and integrity of consumer data |
| Disclosure to consumers of decisions and data sources |
| Mechanisms to dispute errors |

- A **consumer report** is any communication by a CRA bearing on creditworthiness, character, reputation, personal characteristics or mode of living, used for credit, insurance, employment or another permissible purpose (15 U.S.C. 1681a(d)). Third-party algorithmic scores can fit.
- **Adverse action based on a consumer report** (15 U.S.C. 1681m): notice, the credit score used, the CRA's contact details, a statement that the CRA did not make the decision, and the right to a free report and to dispute.
- CFPB Circular 2024-06 (background dossiers and algorithmic scores for employment decisions) was withdrawn on 12 May 2025; the statutory definitions are unchanged.

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

> **Disparate impact under the FHA:** recognised by the Supreme Court in *Texas Dept. of Housing and Community Affairs v. Inclusive Communities Project* (2015). HUD proposed on **14 Jan 2026** to remove its discriminatory-effects regulations and leave the standard to the courts, and on **10 Aug 2026** issued a supplemental proposal that also targets its Title VI disparate-impact provisions (comments due 9 Oct 2026). **Neither is final** as of Sep 2026, and the Act-based theory does not depend on HUD's rule. Mortgage lending is covered by both ECOA and the FHA, so the FHA route survives the 2026 Regulation B change.

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

### 2.7 Federal Enforcement Shifts, 2025-2026: What Changed and What Did Not

| Date | Action | What changed | What still applies |
|------|--------|--------------|--------------------|
| 27 Jan 2025 | EEOC removes its AI technical assistance (May 2022 ADA; May 2023 Title VII) | No current EEOC guidance on AI hiring tools | Title VII §703(k), ADA, ADEA; employer liability for vendor tools; private suits |
| 23 Apr 2025 | **Executive Order 14281**, *Restoring Equality of Opportunity and Meritocracy* (90 FR 17537) | Policy "to eliminate the use of disparate-impact liability in all contexts to the maximum degree possible"; agencies deprioritise enforcement, naming 42 U.S.C. 2000e-2 (sec. 4); AG and EEOC Chair review pending matters (sec. 6); Title VI effects rules revoked or targeted for repeal (secs. 3, 5) | An executive order cannot amend a statute; courts, states and private plaintiffs are not bound |
| 12 May 2025 | CFPB withdraws dozens of guidance documents, including Circulars 2022-03, 2023-03 and 2024-06 | AI adverse action and algorithmic-score guidance gone | Reg B §1002.9 specific-reasons rule; FCRA §1681m notices and §1681a(d) definition |
| Published 22 Apr 2026; effective **21 Jul 2026** | CFPB final rule amending Regulation B (91 FR 21620) | §1002.6(a) now states that ECOA does not provide for the "effects test", i.e. disparate-impact liability; the CFPB acted "consistent with E.O. 14281" | Disparate treatment and intentional proxy use remain unlawful; FHA disparate impact for housing credit; state fair-lending laws |
| 14 Jan 2026; supplement 10 Aug 2026 | HUD proposes removing its FHA discriminatory-effects regulations (and Title VI disparate-impact provisions) | **Proposed only**, not final as of Sep 2026 | FHA disparate impact under *Inclusive Communities* (2015) |

> **Governance takeaway:** federal agencies have pulled back from disparate impact, but the statutes and private suits still apply, and state and local AI rules keep growing. Continue disparate-impact testing, proxy review and documentation; the legal exposure has shifted toward private plaintiffs and states rather than disappeared.

---

## 3. Consumer Protection Laws and AI

### 3.1 FTC Act Section 5

Section 5(a) declares "unfair or deceptive acts or practices in or affecting commerce" unlawful (15 U.S.C. §45(a)(1)). The FTC may take action against:

| Type | Definition |
|------|------------|
| **Unfair acts** | Cause or likely to cause substantial injury; not reasonably avoidable; not outweighed by benefits (§45(n)) |
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
| **Everalbum (final May 2021)** | Facial recognition switched on by default despite promises; kept photos of deactivated users | Delete the photos and the models and algorithms built from them (algorithmic disgorgement); express consent for face recognition |
| **Amazon Alexa (May 2023)** | Kept children's voice recordings and undermined parents' deletion requests (COPPA) | $25 million; deletion and privacy safeguards |
| **Rite Aid (Dec 2023)** | AI facial recognition used 2012-2020 without accuracy testing, false-positive monitoring or staff training; false matches fell disproportionately on people of color | 5-year ban on facial recognition for surveillance; delete images and algorithms built from them; safeguards programme |
| **Operation AI Comply (Sep 2024)** | Five actions: DoNotPay's "robot lawyer" claims, Rytr's review generator, and three "AI-powered" online-storefront income schemes (Ascend Ecom, Ecommerce Empire Builders, FBA Machine) | DoNotPay paid $193,000 and must substantiate claims; storefront schemes halted by court orders |
| **Workado (Apr 2025)** | Claimed its AI content detector was 98% accurate without evidence | Order requiring it to back up accuracy claims |
| **Rytr order set aside (22 Dec 2025)** | FTC found the complaint did not support a Section 5 violation and the order unduly burdened AI innovation (AI Action Plan) | Order vacated; the FTC says it will still pursue AI used to deceive consumers |

> **2026 posture:** the FTC now targets fraud and tangible consumer harm rather than tools that could be misused (the Rytr theory), but deception about what AI can do remains squarely actionable (Workado, DoNotPay). Section 5 itself has not changed. "There is no AI exemption from the laws on the books" (FTC, Operation AI Comply, 2024).

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

### 3.6 Fake Reviews and Endorsements

- **FTC Endorsement Guides (2023 update):** prohibit **fake or unverified reviews**; businesses are accountable for deceptive reviews even if generated by **affiliates or third-party vendors**
- **Consumer Reviews and Testimonials Rule (final, announced 14 Aug 2024):** bans creating, selling or buying reviews or testimonials that misrepresent that they come from someone who does not exist, **such as AI-generated fake reviews**, or from someone with no actual experience of the product; lets the FTC seek civil penalties against knowing violators

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

> **EU answer:** the PLD's defect test expressly weighs "the effect on the product of any ability to continue to learn or acquire new features after it is placed on the market" (Art. 7(2)(c)).

### 4.3 AI as a "Product"

| Traditional view | Emerging view |
|-----------------|---------------|
| Software = service (not tangible good) | Embedded software controlling hardware = product |
| Licensing agreements govern (not sales) | Courts treat AI as part of product system when it controls physical hardware or replaces human judgment |

> **Restatement (Third) of Torts:** Defines product as "tangible personal property distributed commercially." Embedded software operating physical products (autopilot, insulin pumps, drones) may qualify.

> **EU contrast:** the PLD ends the debate for the EU. Software is a product "irrespective of the mode of its supply or usage": stored on a device, accessed through a network or cloud, or supplied as software-as-a-service; AI system providers under the AI Act are treated as manufacturers (recital 13). Information, such as the content of e-books or the mere source code, is not a product.

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

> Legal ambiguity about **joint and several liability** in AI contexts complicates litigation. The EU PLD answers part of this: operators liable for the same damage are jointly and severally liable (Art. 12).

### 4.9 EU Product Liability Directive (EU) 2024/2853 (Adopted)

> **Status:** Adopted 23 Oct 2024; published OJ 18 Nov 2024; in force 8 Dec 2024. Member States must transpose by **9 Dec 2026**, and it applies to products placed on the market or put into service **after 9 Dec 2026**. It repeals Directive 85/374/EEC from 9 Dec 2026, but the 1985 Directive still governs products placed on the market before then. **Maximum harmonisation** (Art. 3): no stricter or looser national rules. Liability is **no-fault**: the claimant proves defect, damage and causation (Art. 10(1)).

| Topic | Rule | Where |
|-------|------|-------|
| **Product** | All movables, including electricity, digital manufacturing files, raw materials and **software**; software, including AI systems, is a product however supplied (device, cloud, SaaS) | Art. 4(1); recital 13 |
| **FOSS carve-out** | Free and open-source software developed or supplied **outside the course of a commercial activity** is excluded; supply for a price, or for personal data used beyond security and interoperability, is commercial. A manufacturer that integrates non-commercial FOSS into its product is liable for it; the FOSS developer is not | Art. 2(2); recitals 14-15 |
| **Who is liable** | Manufacturer; manufacturer of a defective component (including software) integrated under its control; for non-EU makers, the importer, authorised representative, then fulfilment service provider; distributors and some online platforms if they fail to identify an EU operator within one month; anyone who **substantially modifies** a product outside the manufacturer's control | Art. 8 |
| **Damage** | Death or personal injury, **including medically recognised damage to psychological health**; damage to property (not the product itself, not property used exclusively for professional purposes); **destruction or corruption of data not used for professional purposes** | Art. 6; recital 21 |
| **Defectiveness** | Safety a person is entitled to expect or that law requires, considering foreseeable use, continued learning after placement, interconnected products, when the product left the manufacturer's control, cybersecurity requirements, and recalls | Art. 7 |
| **Disclosure** | Once the claimant shows plausibility, the court can order the defendant to disclose relevant evidence; limited to what is necessary and proportionate, with trade-secret protection | Art. 9 |
| **Presumptions** | **Defect** presumed if the defendant fails to disclose, the product breaches mandatory safety requirements, or there is an obvious malfunction; **causation** presumed if the damage is typical of the defect; either or both presumed where **technical or scientific complexity** makes proof excessively difficult and the claimant shows likelihood (machine learning is a named example). All **rebuttable** | Art. 10; recital 48 |
| **Defences** | Not placing on the market; defect arose later; compliance with legal requirements; development risk (state of scientific and technical knowledge); component and modifier defences. **No later-defect defence** where the defect is due to a related service, software including updates, a lack of updates needed for safety, or a substantial modification, if within the manufacturer's control | Art. 11 |
| **Development risk** | Judged at placing on the market or while the product is within the manufacturer's control; Member States may keep or introduce liability despite it, subject to notification | Arts. 11(1)(e), 18 |
| **No contracting out** | Liability to the injured person cannot be limited or excluded by contract or national law | Art. 15 |
| **Time limits** | 3-year limitation from awareness; claims expire 10 years after placing on the market (or after a substantial modification), 25 years for latent personal injury | Arts. 16-17 |
| **Software supply chain** | A manufacturer that integrates software cannot recover from a micro or small software-component maker if it contractually waived that right | Art. 12(2) |

> **Continuous learning and updates:** a substantial modification made through a software update, or through the continuous learning of an AI system, counts as placing the modified product on the market at that time (recital 40).

### 4.10 AI Liability Directive (Withdrawn)

The Commission proposed a fault-based **AI Liability Directive** on 28 Sep 2022 (COM(2022) 496), alongside the PLD proposal. It would have given national courts power to order disclosure of evidence about high-risk AI systems suspected of causing damage and created a rebuttable **presumption of causality** to ease victims' burden of proof.

- Work was suspended until the AI Act was adopted and resumed in 2024; the Parliament's internal market committee (IMCO) then called the proposal premature and unnecessary (May 2025)
- The Commission announced withdrawal in its **2025 work programme** (COM(2025) 45, 11 Feb 2025) and approved it on 16 Jul 2025
- Withdrawal published in **OJ C/2025/5423 on 6 Oct 2025**
- The 2026 Digital Omnibus on AI added no liability rules

| | PLD (EU) 2024/2853 | AI Liability Directive |
|---|---|---|
| **Status** | Adopted; transpose by 9 Dec 2026 | **Withdrawn** (OJ C/2025/5423, 6 Oct 2025) |
| **Basis** | No-fault (defective product) | Fault-based (national tort claims) |
| **Scope** | Defective products, including software and AI systems | Harm caused by AI systems |
| **Claimant aids** | Disclosure; presumptions of defect and causation | Would have added disclosure for high-risk AI and a presumption of causality |

> **Consequence:** there is no EU-level fault-based AI liability regime. Victims rely on the revised PLD for defective products and on national tort law for fault. Any exam answer that relies on an "AI Liability Directive presumption" is wrong as of 2026.

### 4.11 Product Liability Risk Mitigation

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
- For EU products placed on the market after 9 Dec 2026: a security-update policy, update logs, and a substantial-modification check before each release (the PLD keeps the manufacturer liable for updates within its control)
- Evidence readiness: documentation that can be disclosed under PLD Art. 9 without exposing trade secrets unnecessarily

---

## Key Takeaways

1. **Regulations have not caught up to AI's paradigms.** Existing regulations and case law are challenged by AI capabilities. Organizations should err on the side of caution and conduct rigorous diligence.

2. **Understand how IP laws affect AI training and outputs.** AI systems trained on copyrighted content may infringe IP rights. In the US, fair use is decided case by case and courts have split (*Bartz*, *Kadrey*, *Ross*); in the EU, commercial training relies on the DSM Art. 4 exception and must honour machine-readable opt-outs, and GPAI providers owe a copyright policy and training summary (AI Act Art. 53). Secure licenses, document provenance, and never rely on pirated sources. Only humans can be authors (*Thaler*, cert. denied 2026).

3. **Recognize how non-discrimination laws apply to AI in regulated sectors.** Title VII, ECOA, and FHA prohibit intentional and unintentional discrimination with disparate impact. Federal agencies pulled back in 2025-2026 (EEOC guidance removed, EO 14281, the CFPB's Reg B rule effective 21 Jul 2026, HUD's proposal), but Title VII §703(k), FHA disparate impact and private suits remain. Audit for bias and proxy variables tied to protected traits, and keep adverse action reasons specific.

4. **Identify consumer protection risks posed by AI deception or opacity.** Fake reviews, undisclosed AI, misleading claims, and dark patterns violate FTC Act and state UDAP laws. Be transparent, substantiate claims, provide clear information. The FTC set aside the Rytr order in Dec 2025 but still pursues deceptive AI claims (Workado, DoNotPay).

5. **Apply product liability principles to AI-driven physical systems.** Design defect, manufacturing defect, and failure to warn apply. AI's adaptive behavior complicates causation — requiring rigorous testing, version tracking, and post-market monitoring. In the EU, software and AI are products under Directive (EU) 2024/2853 (transpose by 9 Dec 2026), with presumptions that ease proof; the AI Liability Directive was withdrawn.

6. **Integrate legal compliance into the AI lifecycle.** Embed legal review, bias mitigation, documentation, and human oversight throughout development, especially for systems affecting rights, safety, or access to critical services.

---

## Exam Angles

- **Fair use vs TDM:** fair use is a US defence weighed case by case; the EU uses DSM Art. 3 (research organisations, no opt-out) and Art. 4 (anyone, subject to machine-readable opt-outs online). Swapping them is a classic distractor.
- **Case status traps (as of Sep 2026):** *Thaler* is final (cert. denied 2 Mar 2026); *Bartz* is settled ($1.5 billion, approved 20 Jul 2026); *Ross*, *Getty* and *GEMA* are on appeal; *NYT v. OpenAI* is pending. Getty is no longer "pending" at first instance.
- **One-fact deciders:** acquisition source (*Bartz*), market-dilution evidence (*Kadrey*), competing substitute (*Ross*), training location (*Getty*), memorisation (*GEMA*).
- **AI Act Art. 53(1)(c)-(d):** applies to GPAI providers wherever training happened (recital 106), and open-source models are not exempt from these two duties.
- **Prompts are not authorship:** human selection, arrangement and edits of AI output can be protected; prompts alone cannot (Copyright Office Part 2).
- **Withdrawn guidance or an executive order does not repeal a statute:** Title VII §703(k) disparate impact, Reg B adverse action reasons and FCRA notices still bind.
- **Credit after 21 Jul 2026:** ECOA disparate impact is gone from Regulation B, but mortgage lending still faces FHA disparate impact (*Inclusive Communities*, 2015). HUD's deletion of its effects rule is proposed, not final.
- **PLD:** adopted, not proposed; software including AI is a product; presumptions are rebuttable; psychological harm and non-professional data loss count; non-commercial FOSS is excluded; applies to products placed on the market after 9 Dec 2026.
- **AI Liability Directive:** withdrawn (OJ C/2025/5423, 6 Oct 2025); answers that rely on its presumption of causality are wrong.
- **FTC:** substantiate AI performance claims (Workado, DoNotPay); Rytr was set aside because it condemned a tool for possible misuse, not because AI deception became lawful.

---

## Key Terms

- **[[Fair Use]]** — U.S. doctrine permitting limited unauthorized use of copyrighted material based on four-factor test
- **[[Fair Use (AI Training)]]** — How courts apply the four factors to training; split district rulings (*Bartz*, *Kadrey*, *Ross*), no appellate ruling as of Sep 2026
- **[[Text and Data Mining Exception]]** — DSM Directive Art. 3 (research, no opt-out) and Art. 4 (anyone, subject to rights reservations)
- **[[Machine-Readable Opt-Out (TDM)]]** — Rightsholder reservation under DSM Art. 4(3) for online content; GPAI providers must honour it (AI Act Art. 53(1)(c))
- **[[Human Authorship Requirement]]** — US rule that only human-authored works are protected (*Thaler v. Perlmutter*, cert. denied 2026)
- **[[Product Liability Directive (EU) 2024/2853]]** — Revised EU no-fault regime: software and AI are products; disclosure and presumptions; transpose by 9 Dec 2026
- **[[AI Liability Directive (Withdrawn)]]** — Fault-based proposal of 2022, withdrawn by OJ notice of 6 Oct 2025
- **[[Executive Order 14281]]** — April 2025 order to deprioritise disparate-impact enforcement; cannot amend statutes
- **[[Adverse Action Notice (ECOA/Reg B)]]** — Specific principal reasons for credit denials (12 CFR 1002.9); still required for AI models
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

---

## Sources

- BOK v2.1 (IAPP, effective 2 Feb 2026), competency II.B; BOK v2.0.1 for comparison
- Directive (EU) 2024/2853 (Product Liability Directive): https://eur-lex.europa.eu/eli/dir/2024/2853/oj/eng
- AI Liability Directive withdrawal, OJ C/2025/5423 (6 Oct 2025): https://eur-lex.europa.eu/eli/C/2025/5423/oj
- European Parliament Legislative Train, AI liability directive: https://www.europarl.europa.eu/legislative-train/theme-a-europe-fit-for-the-digital-age/file-ai-liability-directive
- Directive (EU) 2019/790 (DSM Directive): https://eur-lex.europa.eu/eli/dir/2019/790/oj
- Regulation (EU) 2024/1689 (AI Act), Art. 53 and recitals 106-107: https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng
- Regulation (EU) 2026/1744 (Digital Omnibus on AI): https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng
- AI Office training-content summary template (24 Jul 2025): https://digital-strategy.ec.europa.eu/en/library/explanatory-notice-and-template-public-summary-training-content-general-purpose-ai-models
- Commission consultation on TDM opt-out protocols (1 Dec 2025 - 23 Jan 2026): https://digital-strategy.ec.europa.eu/en/consultations/commission-launches-consultation-protocols-reserving-rights-text-and-data-mining-under-ai-act-and
- US Copyright Office, Copyright and AI (Parts 1-3): https://www.copyright.gov/ai/
- Copyright Office Part 2 release (29 Jan 2025): https://www.copyright.gov/newsnet/2025/1060.html
- Copyright Office Part 3 pre-publication report (9 May 2025): https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-3-Generative-AI-Training-Report-Pre-Publication-Version.pdf
- Copyright Office registration guidance (16 Mar 2023): https://www.copyright.gov/ai/ai_policy_guidance.pdf
- Thaler v. Perlmutter, D.C. Cir. No. 23-5233 (18 Mar 2025): https://www.copyright.gov/ai/docs/court-of-appeals-decision-affirming-refusal-of-registration.pdf
- Thaler v. Perlmutter, Supreme Court docket No. 25-449 (cert. denied 2 Mar 2026): https://www.supremecourt.gov/search.aspx?filename=/docket/docketfiles/html/public/25-449.html
- Thomson Reuters v. Ross, D. Del. opinion (11 Feb 2025): https://www.ded.uscourts.gov/sites/ded/files/opinions/20-613_5.pdf
- Ross Third Circuit argument (11 Jun 2026): https://www.lawnext.com/2026/06/at-3rd-circuit-judges-press-ross-and-thomson-reuters-on-fair-use-ai-training-and-market-harm.html
- Bartz v. Anthropic settlement site and court orders (final approval 20 Jul 2026): https://www.anthropiccopyrightsettlement.com/
- Kadrey v. Meta, order of 25 Jun 2025 (Dkt. 598): https://storage.courtlistener.com/recap/gov.uscourts.cand.415175/gov.uscourts.cand.415175.598.0.pdf
- Kadrey v. Meta, order of 25 Mar 2026: https://cdn.arstechnica.net/wp-content/uploads/2026/03/Kadrey-v-Meta-Order-Granting-Motion-for-Leave-3-25-26.pdf
- In re OpenAI Copyright Infringement Litigation, MDL 3143 docket: https://www.courtlistener.com/docket/69879510/in-re-openai-inc-copyright-infringement-litigation/
- Getty Images v. Stability AI [2025] EWHC 2863 (Ch): https://caselaw.nationalarchives.gov.uk/ewhc/ch/2025/2863
- Getty v. Stability AI (Re Form of Order) [2025] EWHC 3343 (Ch), 16 Dec 2025 (permission to appeal): https://caselaw.nationalarchives.gov.uk/ewhc/ch/2025/3343
- GEMA v. OpenAI, LG München I press release 11/2025: https://www.justiz.bayern.de/gerichte-und-behoerden/landgericht/muenchen-1/presse/2025/11.php
- Like Company v. Google Ireland (C-250/25), CJEU hearing 10 Mar 2026 (European Commission IP Helpdesk): https://intellectual-property-helpdesk.ec.europa.eu/news-events/news/cjeu-grand-chamber-rules-music-sampling-and-pastiche-first-cjeu-hearing-generative-ai-and-copyright-2026-04-24_en
- GEMA on OpenAI's appeal to the Higher Regional Court of Munich: https://www.gema.de/de/w/suno-entscheidung-2026
- Title VII §703(k), 42 U.S.C. 2000e-2: https://www.law.cornell.edu/uscode/text/42/2000e-2
- ADA, 42 U.S.C. 12112: https://www.law.cornell.edu/uscode/text/42/12112
- EEOC AI guidance removal (27 Jan 2025): https://www.klgates.com/The-Changing-Landscape-of-AI-Federal-Guidance-for-Employers-Reverses-Course-with-New-Administration-1-31-2025
- Executive Order 14281 (90 FR 17537): https://www.federalregister.gov/documents/2025/04/28/2025-07378/restoring-equality-of-opportunity-and-meritocracy
- CFPB withdrawn guidance list: https://www.consumerfinance.gov/compliance/guidance/withdrawn-guidance/
- CFPB Regulation B final rule (91 FR 21620, effective 21 Jul 2026): https://www.federalregister.gov/documents/2026/04/22/2026-07804/equal-credit-opportunity-act-regulation-b
- 12 CFR 1002.9 and commentary: https://www.consumerfinance.gov/rules-policy/regulations/1002/9/
- FCRA, 15 U.S.C. 1681a and 1681m: https://www.law.cornell.edu/uscode/text/15/1681m
- HUD proposed rule (14 Jan 2026): https://www.federalregister.gov/documents/2026/01/14/2026-00590/huds-implementation-of-the-fair-housing-acts-disparate-impact-standard
- HUD supplemental proposal (10 Aug 2026): https://www.federalregister.gov/documents/2026/08/10/2026-16228/huds-implementation-of-the-fair-housing-acts-disparate-impact-standard-amendments-to-huds-title-vi
- FTC Act §5, 15 U.S.C. 45: https://www.law.cornell.edu/uscode/text/15/45
- FTC Operation AI Comply (25 Sep 2024): https://www.ftc.gov/news-events/news/press-releases/2024/09/ftc-announces-crackdown-deceptive-ai-claims-schemes
- FTC Rite Aid (19 Dec 2023): https://www.ftc.gov/news-events/news/press-releases/2023/12/rite-aid-banned-using-ai-facial-recognition-after-ftc-says-retailer-deployed-technology-without
- FTC Rytr order set aside (22 Dec 2025): https://www.ftc.gov/news-events/news/press-releases/2025/12/ftc-reopens-sets-aside-rytr-final-order-response-trump-administrations-ai-action-plan
- FTC Workado (28 Apr 2025): https://www.ftc.gov/news-events/news/press-releases/2025/04/ftc-order-requires-workado-back-artificial-intelligence-detection-claims
- FTC Everalbum (7 May 2021): https://www.ftc.gov/news-events/news/press-releases/2021/05/ftc-finalizes-settlement-photo-app-developer-related-misuse-facial-recognition-technology
- FTC/DOJ Amazon Alexa (31 May 2023): https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-doj-charge-amazon-violating-childrens-privacy-law-keeping-kids-alexa-voice-recordings-forever
- FTC fake reviews rule (14 Aug 2024): https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials
