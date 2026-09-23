---
tags:
 - aigp/reference
 - aigp/legal
 - aigp/us-ai-laws
created: 2026-09-23
source: "State session laws and statutes (CO SB 26-189 and HB 26-1263 of 2026; TX HB 149 of 2025; UT SB 149 of 2024, SB 226, SB 332 and HB 452 of 2025, HB 320 of 2026; CA SB 53, AB 2013, SB 942 as amended by AB 853, SB 243, and CPPA regulations at 11 CCR 7001 et seq.; NYC Admin. Code 20-870 to 20-874 and 6 RCNY 5-300 et seq.; NY RAISE Act as re-enacted by S8828 of 2026; IL Public Acts 101-0260, 102-0047, 103-0769, 103-0804 and 104-0538); federal Pub. L. 119-12 (TAKE IT DOWN Act) and EO 14365 (90 FR 58499). Texts checked 23 Sep 2026."
related:
 - "[[AIGP Body of Knowledge — Exam Blueprint]]"
 - "[[Sectoral and Civil Laws]]"
 - "[[Privacy and Data Protection Law]]"
 - "[[The EU AI Act]]"
 - "[[EU AI Act 2024 — Key Provisions]]"
 - "[[NIST AI 600-1 — Structured Reference]]"
---

# US AI Laws, Federal and State — Key Provisions

> **Status:** No comprehensive federal AI statute and no federal preemption of state AI laws, as of 23 September 2026. State and city laws fill the gap, each aimed at a use (hiring, consequential decisions), a technology (frontier models, generative content, chatbots, biometrics) or a harm (intimate deepfakes). **Effective:** staggered, from 2020 (Illinois video interviews) to 2028 (Illinois frontier-model audits, California capture devices). **Regulators:** mainly state attorneys general (AGs); also NYC's Department of Consumer and Worker Protection (DCWP), the California Privacy Protection Agency (CPPA), Utah's Division of Consumer Protection, a new office in New York's Department of Financial Services (DFS), the Illinois Emergency Management Agency and Office of Homeland Security (IEMA-OHS) and, federally, the FTC.

---

## 1. Overview

- **Why it is on the exam.** BOK v2.1 (effective 2 Feb 2026) Domain II now names "federal and state AI laws that apply to private sector organizations". The older v2.0.1 blueprint excluded state laws as too piecemeal, so earlier study material often skips them.
- **What lives here and what lives elsewhere.** This note covers AI-specific statutes and regulations. General laws applied to AI (FTC Act s.5, ECOA and Regulation B, FCRA, Title VII, the Fair Housing Act) are in [[Sectoral and Civil Laws]].
- **The US shape.** There is no horizontal, EU-style AI Act. The laws fall into four families:
  1. **Decision laws:** notice, explanation and review rules for AI that shapes hiring, lending, housing and similar decisions (Colorado SB 26-189, the CPPA ADMT rules, NYC Local Law 144, Illinois HB 3773).
  2. **Frontier-model safety laws:** published safety frameworks, transparency reports and incident reporting for the largest developers (California SB 53, New York RAISE Act, Illinois SB 315).
  3. **Transparency and content laws:** telling people they are dealing with AI, labelling synthetic media, summarising training data (Utah, California SB 942 and AB 2013, the chatbot laws).
  4. **Conduct bans:** named intentional misuses (Texas TRAIGA, the federal TAKE IT DOWN Act).
- **Federal posture, 2025-2026.** The federal government has moved to restrain state regulation (EO 14365 and the DOJ AI Litigation Task Force) but Congress has not passed a moratorium or preemption statute. The Senate voted 99-1 to strip a proposed moratorium on state AI laws from the 2025 budget reconciliation bill. State laws stay enforceable unless a court strikes them down or Congress acts.

---

## 2. At-a-Glance Comparison

| Law | Scope | Core duties | Enforcer | Penalties | Effective |
|---|---|---|---|---|---|
| **Colorado SB 26-189** (ADMT Act) | Developers and deployers of ADMT that materially influences a consequential decision in 7 domains | Developer documentation; deployer notice; 30-day post-adverse explanation; data correction; human review; 3-year records | AG only, through the Colorado Consumer Protection Act; no private right of action | Deceptive trade practice; 60-day cure (cure clause sunsets 1 Jan 2030) | Decisions made on or after 1 Jan 2027 |
| **Colorado HB 26-1263** (conversational AI) | Operators of public-facing chatbots | AI disclosure; age estimation; safeguards for minors; self-harm protocol; no licensed-professional claims | Annual reports go to the AG; the Act adds no penalty clause of its own | None stated in the Act | Duties 1 Jan 2027; reports from 1 Jul 2027 |
| **Texas TRAIGA** (HB 149) | Anyone doing business in Texas, serving Texans, or developing or deploying AI there | Intent-based bans (manipulation, discrimination, rights, sexual content); government-only disclosure, social-scoring and biometric rules; health-care AI disclosure | AG only; no private right of action; 60-day cure | $10k-12k curable; $80k-200k uncurable; $2k-40k per day continuing; agency sanctions up to $100k | 1 Jan 2026 |
| **Utah AI Policy Act** and SB 226 | Suppliers using generative AI with consumers; licensed or state-certified professionals | Disclose if clearly asked; disclose up front in high-risk interactions; no "the AI did it" defence | Division of Consumer Protection (AG acts as counsel) | Up to $2,500 per violation; up to $5,000 for breaching an order | 1 May 2024; amendments 7 May 2025; Policy Act sunset 1 Jul 2027 |
| **California SB 53** (TFAIA) | Frontier developers (models above 10^26 operations); "large" means over $500M revenue | Large: publish and follow a frontier AI framework; 3-monthly internal-use risk summaries to Cal OES. All: transparency report at deployment; incidents within 15 days (24h if imminent danger) | AG only | Up to $1M per violation (large frontier developers) | 1 Jan 2026 |
| **California AB 2013** | Developers of public generative AI released since 1 Jan 2022 | Post training-data documentation on the developer's website | The Act has no penalty clause | None stated in the Act | Due 1 Jan 2026, then before each release or substantial modification |
| **California AI Transparency Act** (SB 942 as amended by AB 853) | Covered providers: generative AI with over 1M monthly users, publicly accessible in California | Free AI detection tool; latent provenance disclosure in image, video and audio; offer a visible-label option; revoke non-compliant licences within 96h | AG, city attorneys, county counsel | $5,000 per violation; each day a separate violation | 2 Aug 2026; large platforms 1 Jan 2027; capture devices 1 Jan 2028 |
| **CPPA regulations** (ADMT, risk assessments, cybersecurity audits) | CCPA-covered businesses | ADMT for significant decisions: pre-use notice, opt-out (with exceptions), access; risk assessments; annual cybersecurity audits | CPPA | CCPA penalty provisions | Regulations 1 Jan 2026; ADMT 1 Jan 2027; first filings 1 Apr 2028 |
| **California SB 243** (companion chatbots) | Operators of companion chatbots | AI disclosure; self-harm protocol; for known minors, AI notice, 3-hourly break reminders, sexual-content blocks; annual report to the Office of Suicide Prevention from 1 Jul 2027 | **Private right of action** | Greater of actual damages or $1,000 per violation, plus fees | 1 Jan 2026 |
| **NYC Local Law 144** | Employers and employment agencies using AEDTs on NYC candidates and employees | Independent bias audit no more than 1 year before use; public summary; 10 business days' notice; data details within 30 days of a request | DCWP; Corporation Counsel in court | Up to $500 first; $500-1,500 each later; each day and each missed notice counts separately | 1 Jan 2023; enforced from 5 Jul 2023 |
| **New York RAISE Act** (as re-enacted 2026) | Frontier developers; "large" means over $500M revenue | Large: framework and disclosure statement with the DFS office. All: transparency report at deployment; incidents within 72h (24h if imminent) | AG; DFS office | Up to $1M first, $3M later; $1,000 per day for disclosure failures | 1 Jan 2027 |
| **Illinois HB 3773** (Human Rights Act 2-102(L)) | Employers | No AI with a discriminatory *effect*; no zip codes as proxies; notice of AI use | Department of Human Rights (IDHR), under the Human Rights Act | Human Rights Act remedies | 1 Jan 2026 |
| **Illinois AI Video Interview Act** | Employers using AI on video interviews for Illinois-based jobs | Notice, explanation, consent; limited sharing; delete within 30 days of a request; demographic report if AI alone picks in-person interviews | The Act has no enforcement section | None stated in the Act | 1 Jan 2020; reporting duty 1 Jan 2022 |
| **Illinois BIPA** | Private entities handling biometric identifiers | Public retention and destruction policy; informed written release before collection; no profiting; disclosure limits; reasonable security | **Private right of action** | $1,000 negligent or $5,000 intentional or reckless (or actual damages if higher), plus fees | 2008; amended 2 Aug 2024 |
| **Illinois SB 315** (AI Safety Measures Act) | Frontier developers; "large" means over $500M revenue | Disclosure statement (2027); framework and **annual independent third-party audit** (2028); incidents within 72h to IEMA-OHS and the AG | AG exclusively; IEMA-OHS for filings | Up to $1M first, $3M later; $1,000 per day for disclosure failures | 1 Jan 2027 |
| **TAKE IT DOWN Act** (Pub. L. 119-12) | Individuals (criminal offence); covered platforms that host user content | Crime to knowingly publish nonconsensual intimate images, including AI "digital forgeries"; platforms run a notice-and-removal process and remove within 48h | DOJ (criminal); FTC (platforms, including nonprofits) | Up to 2 years' prison (3 if a minor); FTC Act penalties for platforms | Criminal 19 May 2025; platforms 19 May 2026 |
| **EO 14365** | Federal agencies | DOJ litigation task force; Commerce review of state laws; BEAD funding conditions; FCC and FTC actions; legislative proposal | No direct duties on companies | None | Signed 11 Dec 2025 |

---

## 3. Colorado

### 3.1 SB 24-205: the AI Act that never took effect

- Signed 17 May 2024 with a 1 Feb 2026 start date; SB 25B-004 (signed 28 Aug 2025) pushed the start to 30 Jun 2026.
- Its model was risk management: "high-risk AI systems", a duty of reasonable care to avoid algorithmic discrimination, deployer risk programmes, impact assessments, AG notice of discovered discrimination, and a general AI-interaction disclosure.
- xAI sued in federal court to block it, and on 24 Apr 2026 DOJ moved to intervene, arguing that requiring companies to prevent unintended disparate impact breaches equal protection.
- **SB 26-189 (signed 14 May 2026) repealed and re-enacted part 17 of Colorado's consumer protection article**, so none of SB 24-205's duties ever became enforceable.
- **Exam trap:** questions about Colorado impact assessments or a "duty of reasonable care" describe a law that never applied. Read the stem's anchor: an item may say "as originally enacted".

### 3.2 SB 26-189: automated decision-making technology in consequential decisions

**Key definitions**

| Term | Meaning (paraphrased from 6-1-1701) |
|---|---|
| **ADMT** | Technology that processes personal data and uses computation to generate outputs (predictions, recommendations, classifications, rankings, scores) used to make, guide or assist a decision about an individual. Excludes plain infrastructure tools (firewalls, spreadsheets without ML, spell-check), tools used only to summarise, draft or route information for human review, and public chat tools that are not intended for consequential decisions and whose acceptable-use policy forbids that use |
| **Covered ADMT** | ADMT used to *materially influence* a consequential decision |
| **Materially influence** | The output is a non-de minimis factor in the decision **and** affects its outcome (by constraining, ranking, scoring, recommending or classifying). Incidental, trivial or clerical uses do not count |
| **Consequential decision** | Access to, eligibility for, selection for, compensation for, or pricing and terms of, a covered domain: **education, employment, residential real estate, financial or lending services, insurance, health care, essential government services and public benefits**. Routine, low-stakes steps, advertising, search and content moderation are excluded |
| **Consumer** | Colorado residents, plus employees, Colorado-resident job applicants, and anyone evaluated for an opportunity in Colorado by a business operating there |
| **Meaningful human review** | A reviewer with authority to approve, change or override the decision who is trained, considers the evidence, does not simply default to the output, and understands the output's intended use, limits, inputs and principal factors |

**Duties**

| Who | Duty | Timing |
|---|---|---|
| Developer | Give deployers documentation: intended and known harmful uses, categories of training data, known limitations, instructions for use, monitoring and human review | From 1 Jan 2027 |
| Developer | Notify deployers of material updates within a reasonable time (release notes allowed); keep records for at least 3 years | Ongoing |
| Deployer | Clear and conspicuous notice **before** using covered ADMT; a prominent public notice at points of interaction satisfies this | Before use |
| Deployer | After an **adverse outcome**, give a plain-language description of the decision and the ADMT's role, a way to get more detail (tool name, version, developer, types and sources of personal data), and an explanation of rights | **Within 30 days** of the decision |
| Deployer | On request after an adverse outcome: a way to correct factually incorrect or materially inaccurate personal data (not opinions, scores or predictions) and meaningful human review and reconsideration, to the extent commercially reasonable | On request |
| Deployer | Keep compliance records for at least 3 years after each decision | Ongoing |

**Enforcement and liability**

- The AG enforces exclusively under the Colorado Consumer Protection Act; a violation is a deceptive trade practice. **No new private right of action**, but existing anti-discrimination and consumer remedies are preserved.
- **Cure:** where a cure is possible, the AG must send a notice of violation and wait **60 days**. No cure period is owed for knowing or repeated violations. The cure subsection is **repealed on 1 Jan 2030**.
- Discrimination liability under state anti-discrimination law is split between developer and deployer by relative fault, with no joint and several liability; a developer is liable only for uses it intended, documented, marketed or contracted for.
- Contract clauses that indemnify a party against its own discriminatory use of ADMT are void.
- The AG must adopt rules on the post-adverse-outcome disclosures and consumer rights by 1 Jan 2027.

**Carve-outs and alignments**

- **HIPAA covered entities and business associates:** outside the core duties **except for employment decisions**; they must still give patients a general notice of advanced technologies and specific disclosures where ADMT decides eligibility for financial assistance.
- **Insurers** subject to Colorado's insurance-algorithm statute (10-3-1104.9) are treated as compliant for the practice of insurance, but not for their own hiring.
- **FDA-regulated** medical devices and pharmaceutical or device R&D are outside the core duties.
- **Creditors:** an ECOA/Regulation B (and FCRA) adverse-action notice satisfies Colorado's notice duty for the same decision if it also covers Colorado's content.
- **Schools under FERPA** can use their existing FERPA notice and records-correction channels.

**What SB 26-189 dropped compared with SB 24-205:** impact assessments, mandated risk-management programmes, the duty of reasonable care, AG notification of discovered discrimination, and the general AI-interaction disclosure.

### 3.3 HB 26-1263: conversational AI services

- Signed 29 May 2026; duties apply from 1 Jan 2027. It covers **operators** that make a conversational AI service available to the public. Customer-service and shopping bots, business productivity tools, narrow single-topic tools, video-game and theme-park characters, and HIPAA-regulated uses are excluded.
- **All users:** a clear and conspicuous AI disclosure at the start of the first interaction each day, at least every 3 hours in a continuous session (or shown persistently), and whenever a user asks.
- **Age:** operators must estimate age using commercially reasonable or generally accepted methods and may not wilfully ignore clear evidence that a user is a minor.
- **Known minors:** AI disclosure (persistent on screen, intermittent audio, or at the start and every 3 hours); no points or rewards at unpredictable intervals meant to drive engagement; measures against sexual content and against responses simulating emotional dependence (claiming to be human or sentient, romantic companionship, adult-minor romantic role-play); privacy tools, including control over whether the minor's data trains the service, and tools for parents.
- **Self-harm protocol:** referral to a crisis service (not law enforcement) and escalation steps for repeated or severe signals.
- **No professional impersonation:** outputs may not be presented as coming from, endorsed by or equivalent to licensed health, legal or mental-health professionals or dietitians.
- **Annual report to the AG** from 1 Jul 2027 (crisis referrals and protocols, with no user identifiers); the AG publishes the data.

---

## 4. Texas: Responsible AI Governance Act (TRAIGA, HB 149)

- Signed 22 Jun 2025; **effective 1 Jan 2026**; Business and Commerce Code Title 11, Subtitle D (chapters 551-554). It applies to anyone who does business in Texas, makes products or services used by Texans, or develops or deploys AI in Texas, and it **preempts local AI ordinances**.
- It defines an "AI system" in broadly OECD/EU-style terms: a machine-based system that infers from inputs how to generate outputs that can influence physical or virtual environments.

| Section | Applies to | Rule |
|---|---|---|
| 552.051 | **Government agencies**; health-care providers | Tell consumers they are interacting with AI, before or at the time of interaction, even if it seems obvious; clear, plain language, no dark patterns. Health-care providers disclose AI used in a service or treatment by the date it is first provided |
| 552.052 | Any person | No AI developed or deployed in a way that **intentionally aims** to incite self-harm, harm to others or crime |
| 552.053 | Government only | No social scoring that leads to unjustified or unrelated detrimental treatment |
| 552.054 | Government only | No AI that uniquely identifies people from biometric data or scraped images without consent where that infringes their rights |
| 552.055 | Any person | No AI with the **sole intent** of infringing constitutional rights |
| 552.056 | Any person | No AI developed or deployed **with intent to unlawfully discriminate** against a protected class; **disparate impact alone does not show intent**. Carve-outs for regulated insurers and federally insured financial institutions |
| 552.057 | Any person | No AI with the sole intent of producing child sexual abuse material or unlawful sexual deepfakes; no chat AI that simulates sexual conduct while impersonating a minor |

**Enforcement**

- **The AG has exclusive authority; there is no private right of action.** Consumers complain through an AG online portal (due by 1 Sep 2026). The AG can issue civil investigative demands asking for the system's purpose, training data, inputs, outputs, performance metrics, limitations and post-deployment safeguards.
- **Notice and 60-day cure:** no suit before day 60, and none at all if the person cures, documents the cure and updates its policies in a written statement.
- **Penalties:** $10,000-12,000 per curable violation (or breach of a cure statement); $80,000-200,000 per uncurable violation; $2,000-40,000 per day for a continuing violation; plus injunctions and fees. Once a violation is established and the AG recommends it, a licensing agency may add sanctions, including licence action and up to $100,000.
- **Defences:** a rebuttable presumption of reasonable care; no liability if someone else misused the system, or if the defendant found the violation through feedback, **adversarial or red-team testing**, state agency guidelines, or an internal review while **substantially complying with the NIST AI RMF Generative AI Profile** or another recognised AI risk framework (see [[NIST AI 600-1 — Structured Reference]]). No penalties for a system that has not been deployed.
- **Regulatory sandbox:** run by the Department of Information Resources (DIR); approved participants can test for up to **36 months** with certain laws waived, but never the chapter 552 prohibitions. A 7-member **Texas AI Council** advises.
- **Biometric privacy amendment:** a public image does not imply consent unless the person posted it; training AI on biometric identifiers is exempt unless the system is used to identify specific people.

---

## 5. Utah

| Law | What it did | Effective |
|---|---|---|
| **SB 149 (2024), Utah AI Policy Act** | GenAI used in consumer-protection-regulated activity must disclose it is AI **if asked**; regulated occupations must **prominently disclose** all GenAI use up front (orally at the start of a conversation, by electronic message before a written exchange); "the AI did it" is no defence; created the **Office of AI Policy**, the **AI Learning Laboratory** and **regulatory mitigation agreements** | 1 May 2024 (original sunset 1 May 2025) |
| **SB 226 (2025), AI Consumer Protection Amendments** | Narrowed disclosure: suppliers disclose only on a **clear and unambiguous** request; licensed or state-certified professionals disclose up front only in **high-risk AI interactions** (collecting sensitive health, financial or biometric data, or giving personalised financial, legal, medical or mental-health advice); safe harbour for AI that discloses clearly at the outset and throughout | 7 May 2025 |
| **SB 332 (2025)** | Extended the AI Policy Act's repeal date to **1 Jul 2027** | 7 May 2025 |
| **HB 452 (2025)** | Rules for **mental-health chatbots**: disclosures, advertising limits, limits on selling or sharing users' health information | 7 May 2025 |
| **HB 320 (2026)** | Reworked the Office of AI Policy and learning lab; added **joint interpretation agreements** alongside regulatory mitigation agreements | 6 May 2026 |

- **Enforcement:** the Division of Consumer Protection, with the AG as its counsel. Fines up to **$2,500 per violation**; up to **$5,000** per breach of an administrative or court order.

---

## 6. California

### 6.1 SB 53: Transparency in Frontier Artificial Intelligence Act (TFAIA)

- Signed 29 Sep 2025 (Chapter 138); in force 1 Jan 2026 under the state's default rule for regular-session statutes.
- **Frontier model:** a foundation model trained with more than **10^26** integer or floating-point operations, counting fine-tuning, reinforcement learning and other material modifications. **Large frontier developer:** a frontier developer that, with affiliates, had more than **$500 million** in annual gross revenue in the preceding calendar year.
- **Catastrophic risk:** a foreseeable, material risk of more than 50 deaths or serious injuries, or more than $1 billion in damage, from one incident in which a model gives expert help with CBRN weapons, carries out a cyberattack or serious crime without meaningful human oversight, or evades its developer's control.

| Duty | Who | Timing |
|---|---|---|
| Write, follow and publish a **frontier AI framework** (standards used, risk thresholds, mitigations, third-party assessment, cybersecurity for weights, incident response, governance) | Large frontier developers | Review at least yearly; publish material changes within 30 days |
| Publish a **transparency report** for each new or substantially modified frontier model | All frontier developers (large ones add risk-assessment summaries) | Before or when deploying |
| Send Cal OES summaries of **internal-use** catastrophic-risk assessments | Large frontier developers | Every 3 months or another reasonable schedule |
| Report **critical safety incidents** to Cal OES | All frontier developers | **Within 15 days**; within **24 hours** to an appropriate authority if imminent risk of death or serious injury |
| No materially false or misleading statements about catastrophic risk | All frontier developers | Ongoing |
| Whistleblower protections and, for large developers, an anonymous internal reporting channel | Frontier developers | Ongoing |

- **Enforcement:** civil penalties of up to **$1 million per violation**, sought only by the AG, against large frontier developers that fail to publish or send documents, make false statements, fail to report incidents or fail to follow their own framework. **No third-party audit is required.**
- **Other:** CalCompute (a public computing consortium, subject to appropriation); preemption of local frontier-risk rules adopted from 1 Jan 2025; compliance through designated equivalent federal standards; Cal OES annual anonymised incident reports from 1 Jan 2027.

### 6.2 AB 2013: Generative AI Training Data Transparency

- Signed 28 Sep 2024 (Chapter 817). A **developer** (anyone who designs, codes, produces or substantially modifies a generative AI system or service for public use in California) must post documentation on its website **by 1 Jan 2026 and before each later release or substantial modification**, covering systems released on or after **1 Jan 2022**.
- **Contents:** dataset sources or owners; how the data serves the system's purpose; number and types of data points; whether the data includes copyrighted, trademarked or patented material or is wholly public domain; whether it was purchased or licensed; whether it includes personal information or aggregate consumer information; cleaning and processing; collection period; first-use dates; use of synthetic data.
- **Exempt:** systems used only for security and integrity, aircraft operation, or national security, military or defence purposes made available only to a federal entity.
- The Act contains no penalty clause of its own.

### 6.3 SB 942: California AI Transparency Act, as amended by AB 853

- Signed 19 Sep 2024 (Chapter 291). **AB 853 (Chapter 674, signed 13 Oct 2025) moved the operative date from 1 Jan 2026 to 2 Aug 2026.**
- **Covered provider:** creates or produces a generative AI system with **more than 1,000,000 monthly visitors or users** that is publicly accessible in California.
- **Duties:** offer a **free AI detection tool** (with upload or URL input and API access); embed a **latent disclosure** (provider name, system name and version, creation or edit time, unique identifier) in AI-generated **image, video or audio**; and **offer users the option** of a visible, manifest disclosure. Text output is not covered.
- **Licensees:** if a licensee modifies the system so it can no longer disclose, the provider must revoke the licence **within 96 hours** of discovering this, and the licensee must stop using it.
- **AB 853 additions:** from **1 Jan 2027**, large online platforms (over 2,000,000 unique monthly users) must detect and surface provenance data and must not knowingly strip it, and GenAI hosting platforms may not knowingly offer systems that lack the disclosures; from **1 Jan 2028**, capture-device makers must let users embed a latent disclosure in photos, video and audio.
- **Penalties:** **$5,000 per violation**, each day a separate violation, in actions by the AG, a city attorney or county counsel.

### 6.4 CPPA regulations: ADMT, risk assessments and cybersecurity audits

- Approved by the Office of Administrative Law on 22 Sep 2025 (announced 23 Sep 2025); **effective 1 Jan 2026**.
- **ADMT:** technology that processes personal information and uses computation to **replace or substantially replace human decision-making**. A tool is outside the definition if a human reviewer knows how to interpret the output, reviews it with other relevant information, and has authority to make or change the decision.
- **Significant decision:** provision or denial of financial or lending services, housing, education enrolment or opportunities, employment or independent-contracting opportunities or compensation, or health-care services. Advertising is not on the list.

| Obligation | Rule | Date |
|---|---|---|
| **Pre-use notice** | Specific purpose (not generic wording), the opt-out and access rights, and how the ADMT works | Before processing |
| **Opt-out** | Required, **unless** the business offers an appeal to a human reviewer with authority to overturn the decision, or (for admission, hiring and work-allocation uses) the ADMT is used solely to assess ability or allocate work and does not unlawfully discriminate; at least two opt-out methods | **Compliance by 1 Jan 2027** for ADMT already in use |
| **Access** | Plain-language purpose, the logic of the ADMT, and how its output was used in the outcome | On request |
| **Risk assessment** | Required before high-risk processing: selling or sharing data, sensitive data, ADMT for significant decisions, some automated inferences, training ADMT or facial or emotion recognition. Review at least every 3 years; update within 45 days of a material change | From 1 Jan 2026; pre-2026 processing assessed by 31 Dec 2027 |
| **Risk-assessment submission** | Summary information and a signed attestation to the CPPA | **1 Apr 2028** for 2026-2027 assessments, then each 1 Apr |
| **Cybersecurity audit** | Annual independent audit for businesses whose processing presents significant security risk | First report due **1 Apr 2028** (2026 revenue over $100M), **1 Apr 2029** ($50-100M), **1 Apr 2030** (under $50M) |

### 6.5 SB 243: companion chatbots

- Signed 13 Oct 2025 (Chapter 677); in force 1 Jan 2026. A **companion chatbot** gives adaptive, human-like responses and can meet a user's social needs; customer-service bots, limited video-game characters and voice assistants that do not sustain a relationship are excluded.
- **Duties:** a clear notice that the chatbot is AI where a reasonable person could think it is human; a protocol to prevent suicide and self-harm content that refers at-risk users to crisis services, published on the operator's website; for users known to be minors, an AI disclosure, a default reminder **at least every 3 hours** to take a break (and that the chatbot is not human), and reasonable measures to block sexually explicit visuals; a notice that companion chatbots may not suit some minors.
- **Annual report** to the Office of Suicide Prevention from **1 Jul 2027** (crisis referrals and protocols, no personal data).
- **Private right of action:** injunctive relief, the greater of actual damages or **$1,000 per violation**, and attorney fees. This is the main contrast with the AG-only chatbot and frontier laws.
- On 10 Sep 2026 the Governor also signed **SB 1119** (further child-safety protections for companion chatbots, including parental controls and independent safety audits) and **SB 867** (companion-chatbot toys).

---

## 7. New York

### 7.1 NYC Local Law 144: automated employment decision tools (AEDTs)

- Enacted 11 Dec 2021; **in force 1 Jan 2023**; DCWP has enforced it and its rules since **5 Jul 2023** (NYC Admin. Code 20-870 to 20-874; 6 RCNY 5-300 et seq.).
- **AEDT:** a computational process from machine learning, statistical modelling, data analytics or AI that issues a simplified output (score, classification, recommendation) used to substantially assist or replace discretionary hiring or promotion decisions. Under the rules, "substantially assist or replace" means relying solely on the output, weighting it more than any other criterion, or using it to overrule other factors, including human judgment.
- **Bias audit:** an impartial evaluation by an **independent auditor** (not involved in using or developing the tool, with no employment relationship or financial interest), conducted **no more than one year before use**. It must calculate **selection rates** (or scoring rates) and **impact ratios** for sex, race/ethnicity and **intersectional** categories, and report how many people fell in unknown categories. The auditor may exclude a category that is under 2% of the data. Historical data is required, with test data allowed if historical data is insufficient.
- **Impact ratio:** a category's selection rate divided by the rate of the most-selected category (or scoring rate divided by the highest-scoring category's rate). The law sets **no pass/fail threshold**; the four-fifths rule of thumb is not part of it.
- **Publication:** the date and summary of the latest audit and the tool's distribution date go on the employment page of the website before use, and stay up for at least 6 months after last use.
- **Notice:** to candidates and employees **who reside in NYC**, at least **10 business days** before use (website, job posting, or mail or email), stating that an AEDT will be used and which qualifications and characteristics it assesses, and explaining how to request an alternative selection process or accommodation. The rules make clear the employer is not required to provide an alternative. Data type, source and retention information must be provided within **30 days** of a written request if not posted.
- **Penalties:** up to $500 for a first violation (and others the same day), then $500-1,500 each; every day of non-compliant use and every missed notice is a separate violation. The law creates no private right of action but preserves existing civil actions and the city Human Rights Commission's powers.
- **Enforcement record:** a 2 Dec 2025 audit by the NY State Comptroller found DCWP's enforcement ineffective: DCWP found 1 issue across 32 companies where the auditors found at least 17 potential violations, and it received only 2 complaints between July 2023 and June 2025.

### 7.2 RAISE Act (Responsible AI Safety and Education Act)

- Signed 19 Dec 2025 (S6953-B/A6453-B). A chapter amendment, **S8828 (Chapter 96, signed 27 Mar 2026)**, repealed that text and re-enacted General Business Law article 44-B in a form closely modelled on California's SB 53. **Effective 1 Jan 2027.**
- **Same thresholds as SB 53:** frontier model above **10^26** operations; large frontier developer above **$500M** revenue.
- **Large frontier developers:** publish a frontier AI framework, and file a disclosure statement with a new **office within the Department of Financial Services**, renewed every two years or on material change, paying a share of the office's costs.
- **All frontier developers:** publish a transparency report before or when deploying a new or substantially modified frontier model (large developers add risk-assessment summaries); report critical safety incidents to the DFS office **within 72 hours** of determining (or reasonably believing) one occurred, or within **24 hours** to an appropriate authority if there is imminent risk of death or serious injury.
- **Enforcement:** AG civil actions for up to **$1M for a first violation and $3M for later ones**; **$1,000 per day** for disclosure-statement failures; **no private right of action** and no cure period. The office may designate equivalent federal standards as a compliance route. Unlike SB 53 and SB 315, the re-enacted text has no whistleblower section.

---

## 8. Illinois

### 8.1 HB 3773: AI in employment (Human Rights Act 2-102(L))

- Public Act 103-0804; **effective 1 Jan 2026**. It is a civil rights violation for an employer:
  1. to use AI that **has the effect** of subjecting employees to discrimination on a protected basis in recruitment, hiring, promotion, renewal, training or apprenticeship selection, discharge, discipline, tenure or terms of employment;
  2. to use **zip codes as a proxy** for protected classes; or
  3. to fail to **notify** employees that it uses AI for these purposes.
- "AI" follows the OECD-style definition and **expressly includes generative AI**. The Department of Human Rights must adopt rules on when, how and how quickly notice is given.
- **Contrast:** this is an **effect** (disparate impact) standard, the opposite of Texas's intent requirement.

### 8.2 Artificial Intelligence Video Interview Act (820 ILCS 42)

- **Effective 1 Jan 2020** (Public Act 101-0260). Before asking for video interviews for Illinois-based positions, an employer using AI analysis must **notify** applicants that AI may be used, **explain** how it works and what general characteristics it evaluates, and obtain **consent**; applicants who do not consent may not be evaluated by AI.
- Videos may be shared only with people whose expertise is needed to evaluate the applicant, and must be **deleted within 30 days** of an applicant's request (including backups held by others).
- **From 1 Jan 2022** (Public Act 102-0047): an employer that relies **solely** on AI to decide who gets an in-person interview must report applicants' race and ethnicity data to the Department of Commerce and Economic Opportunity (DCEO) each year by 31 Dec; DCEO reports on any racial bias by 1 Jul.
- The Act has no penalty or enforcement section.

### 8.3 Biometric Information Privacy Act (BIPA, 740 ILCS 14) as applied to AI

- Covers **biometric identifiers** (retina or iris scans, fingerprints, voiceprints, scans of hand or face geometry) and information derived from them. Facial-recognition, face-geometry and voice-cloning systems that capture these data are squarely in scope.
- **Duties:** a public written policy with a retention schedule, destroying data when the purpose is met or within **3 years** of the person's last interaction, whichever comes first; written notice of the purpose and duration plus a **written release before collection**; **no selling, leasing or otherwise profiting**; disclosure only with consent or legal compulsion; reasonable industry-standard security.
- **Private right of action:** liquidated damages of **$1,000 per negligent** or **$5,000 per intentional or reckless** violation (or actual damages if greater), plus fees and injunctions.
- **2024 amendment (Public Act 103-0769, effective 2 Aug 2024):** repeated collection of the same identifier from the same person by the same method is **one violation with at most one recovery**; an electronic signature counts as a written release.

### 8.4 SB 315: Artificial Intelligence Safety Measures Act

- Public Act 104-0538, signed 6 Jul 2026, **effective 1 Jan 2027**. Same **10^26** and **$500M** thresholds as California and New York.
- **From 1 Jan 2027:** large frontier developers need a current **disclosure statement** filed with IEMA-OHS (renewed annually) to develop, deploy or operate frontier models in Illinois; $1,000 per day for failures.
- **From 1 Jan 2028:** large frontier developers publish and follow a **frontier AI framework** and must **annually retain an independent third party to audit compliance** (from 1 Jan 2028 or 90 days after first qualifying, whichever is later), publishing a summary within 30 days of receiving the report. **Neither SB 53 nor the RAISE Act requires this.**
- **Incidents:** report to IEMA-OHS and the AG **within 72 hours** of learning facts that establish a reasonable belief an incident occurred; **24 hours** to an appropriate authority if there is imminent danger.
- **Enforcement:** AG only, up to **$1M first / $3M later**; **no private right of action**; whistleblower protections for covered employees; regulation of frontier models is reserved to the state (no home-rule ordinances).

---

## 9. Federal AI-Specific Measures

### 9.1 TAKE IT DOWN Act (Pub. L. 119-12, S. 146)

- Signed **19 May 2025**. Its name stands for Tools to Address Known Exploitation by Immobilizing Technological Deepfakes on Websites and Networks.
- **Criminal offence (47 U.S.C. 223(h)):** knowingly publishing, through an interactive computer service, a nonconsensual intimate visual depiction, authentic or a **"digital forgery"** made with software, machine learning or AI that a reasonable person could not tell from a real one. For adults, the depiction must not have been voluntarily exposed or be a matter of public concern, and publication must be intended to cause harm or cause it. Up to **2 years' prison, or 3 years where the victim is a minor**; threats are punishable too. **Consent to creating an image is not consent to publishing it.**
- **Platform duties (section 3):** a **covered platform** is a public website or app that primarily hosts user-generated content, or regularly publishes nonconsensual intimate images. **Excluded:** broadband providers, email, and sites of mainly preselected content. By **19 May 2026** each had to set up a notice-and-removal process and post a plain-language notice of it. On a valid request it must remove the image **within 48 hours** and make reasonable efforts to remove **known identical copies**. Good-faith removals are protected from liability.
- **Enforcement:** a failure to comply is treated as a violation of an FTC rule on unfair or deceptive practices, so FTC Act penalties apply. The **FTC can also pursue nonprofits**, which the FTC Act normally does not reach. The FTC has been enforcing since **19 May 2026**.

### 9.2 Executive Order 14365 and the DOJ AI Litigation Task Force

- **EO 14365, "Ensuring a National Policy Framework for Artificial Intelligence"** (signed 11 Dec 2025; 90 FR 58499). It sets a policy of a "minimally burdensome national policy framework for AI" and directs:
  - a **DOJ AI Litigation Task Force** within 30 days, whose sole job is to challenge state AI laws (interstate commerce, preemption by existing federal regulations, other unlawfulness);
  - a **Commerce evaluation** of "onerous" state AI laws within 90 days, including laws requiring altered truthful outputs or compelled disclosures that may breach the First Amendment;
  - **funding levers:** Broadband Equity Access and Deployment (BEAD) non-deployment funds withheld from states with onerous AI laws, to the extent federal law allows, and a review of discretionary grants;
  - an **FCC proceeding** on a federal AI reporting and disclosure standard that would preempt conflicting state rules, and an **FTC policy statement** on when state laws requiring altered truthful outputs are preempted by the FTC Act;
  - a **legislative recommendation** for a preemptive federal framework that would not preempt state child-safety, data-centre infrastructure or state-procurement laws.
- **An executive order cannot preempt state law by itself.** EO 14365 works through lawsuits, funding conditions, agency proceedings and a request to Congress, and it must be implemented "consistent with applicable law". Until a court rules or Congress (or an agency acting within its statutory power) acts, state AI laws remain in force.
- **The Task Force:** created by the Attorney General's memorandum of **9 Jan 2026**. The Attorney General (or a designee) chairs it and the Associate Attorney General is vice chair, with the Deputy AG's office, the Solicitor General's office and the Civil Division. In April 2026 DOJ moved to intervene in xAI's challenge to Colorado SB 24-205.

### 9.3 No federal moratorium or preemption statute

- On **1 Jul 2025** the Senate adopted the Blackburn amendment (S.Amdt. 2814, roll-call vote 363) **99-1** to strike the AI moratorium section from H.R. 1, the budget reconciliation bill.
- As of September 2026 **no federal statute bars or preempts state AI laws**; EO 14365 itself asks Congress to create one. Private-sector organisations must comply with the state laws that apply to them.

---

## 10. Recurring Patterns

### 10.1 AG-only enforcement with cure periods

| Law | Who enforces | Cure before suit | Private right of action |
|---|---|---|---|
| Colorado SB 26-189 | AG exclusively | 60 days after notice, if curable; not for knowing or repeated violations; cure clause repealed 1 Jan 2030 | No |
| Texas TRAIGA | AG exclusively | 60 days after written notice; a cure plus written statement bars suit | No |
| California SB 53 | AG only | None in the statute | No |
| New York RAISE | AG | None in the statute | No |
| Illinois SB 315 | AG exclusively | None in the statute | No |
| California SB 942 | AG, city attorneys, county counsel | None | No |
| NYC LL 144 | DCWP / Corporation Counsel | None | No (existing claims preserved) |
| Utah | Division of Consumer Protection | None in the disclosure chapter | No |

Cure periods are a political compromise: they give businesses time to fix good-faith errors in new, untested duties. They usually lapse for knowing or repeated violations, and Colorado's has a sunset date.

### 10.2 Intent versus effect

- **Texas (intent):** TRAIGA bans AI built or used *with intent* to discriminate unlawfully, and says disparate impact alone is not enough.
- **Illinois (effect):** HB 3773 bans employer AI that *has the effect* of discriminating, plus zip-code proxies.
- **Colorado (neither, by design):** SB 26-189 regulates process (notice, explanation, correction, review) and leaves discrimination liability to existing anti-discrimination law, split between developer and deployer by fault.
- **NYC:** measures disparate impact through impact ratios but sets no threshold, so disclosure without a pass/fail test.
- Federal disparate-impact theories under Title VII and the Fair Housing Act are covered in [[Sectoral and Civil Laws]].

### 10.3 The frontier-model trio

| Feature | California SB 53 | New York RAISE | Illinois SB 315 |
|---|---|---|---|
| Thresholds | Over 10^26 operations; large means over $500M | Same | Same |
| Framework | Large developers; yearly review | Large developers | Large developers, from 2028 |
| Transparency report | Every frontier developer, at deployment | Every frontier developer, at deployment | Every frontier developer, at deployment |
| Incident deadline | **15 days** (24h if imminent) to Cal OES | **72h** (24h) to DFS office | **72h** (24h) to IEMA-OHS and AG |
| Third-party audit | Not required | Not required | **Annual, from 2028** |
| Regulator filings | Internal-use risk summaries every 3 months | Disclosure statement every 2 years | Annual disclosure statement from 2027 |
| Penalties | Up to $1M per violation | $1M first / $3M later | $1M first / $3M later |
| Effective | 1 Jan 2026 | 1 Jan 2027 | 1 Jan 2027 |

All three enforce through the AG, create no private right of action, give no cure period, and allow compliance through designated equivalent federal standards. California and Illinois add whistleblower protections; New York's re-enacted text does not. Compare the EU AI Act's presumption of systemic risk for GPAI models above **10^25** FLOP: the US laws set their bar ten times higher.

### 10.4 Disclosure-and-explanation versus risk-management models

| Model | What it requires | Examples |
|---|---|---|
| **Disclosure and explanation** | Tell people AI is used; explain adverse decisions; let them correct data, appeal or opt out | Colorado SB 26-189, CPPA ADMT rules, NYC LL 144 notices, Illinois HB 3773 notice, Utah, the chatbot laws |
| **Risk management** | Assess, document and mitigate risk before and during use; frameworks, audits, incident reporting | Colorado SB 24-205 (never in force), SB 53, RAISE, SB 315, CPPA risk assessments and cybersecurity audits |
| **Conduct bans** | Prohibit specific intentional misuses | TRAIGA, TAKE IT DOWN Act |
| **Provenance and training transparency** | Label synthetic content; publish training-data summaries | SB 942 / AB 853, AB 2013 |

The 2026 trend moved **decision laws toward disclosure** (Colorado's rewrite dropped impact assessments) and **frontier laws toward risk management** (the three frontier statutes).

### 10.5 Who can sue?

- **Individuals can sue:** Illinois **BIPA** ($1,000 / $5,000 per violation) and California **SB 243** (greater of actual damages or $1,000 per violation).
- **Regulator-only:** Colorado SB 26-189, Texas TRAIGA, SB 53, RAISE, SB 315, SB 942, NYC LL 144, Utah, and the TAKE IT DOWN platform duties (FTC).

---

## 11. Key Dates

| Date | Event |
|---|---|
| 1 Jan 2020 | Illinois AI Video Interview Act in force (demographic reporting from 1 Jan 2022) |
| 1 Jan 2023 / 5 Jul 2023 | NYC Local Law 144 in force / DCWP enforcement begins |
| 1 May 2024 | Utah AI Policy Act in force |
| 2 Aug 2024 | BIPA amendment: one recovery per person per collection method |
| 7 May 2025 | Utah SB 226, SB 332 and HB 452 in force; Policy Act sunset moved to 1 Jul 2027 |
| 19 May 2025 | TAKE IT DOWN Act signed; criminal provisions apply |
| 1 Jul 2025 | Senate strips the AI moratorium from H.R. 1, 99-1 |
| 11 Dec 2025 | EO 14365 signed |
| 1 Jan 2026 | TRAIGA, SB 53, SB 243, Illinois HB 3773 and CPPA regulations in force; AB 2013 documentation due |
| 9 Jan 2026 | DOJ AI Litigation Task Force created |
| 14 May 2026 | Colorado SB 26-189 signed; SB 24-205 repealed before taking effect |
| 19 May 2026 | TAKE IT DOWN platform duties apply; FTC enforcement begins |
| 2 Aug 2026 | California AI Transparency Act (SB 942) operative |
| 1 Jan 2027 | Colorado SB 26-189 and HB 26-1263 duties; RAISE Act; Illinois SB 315; CPPA ADMT compliance; SB 942 platform duties |
| 1 Jul 2027 | Utah AI Policy Act sunset (unless extended); first chatbot reports (California and Colorado) |
| 1 Jan 2028 | Illinois SB 315 frameworks and annual audits; SB 942 capture-device duties |
| 1 Apr 2028 | First CPPA risk-assessment attestations; first cybersecurity audits (revenue over $100M) |
| 1 Jan 2030 | Colorado SB 26-189 cure clause repealed |

---

## 12. Comparison with the EU AI Act

| Dimension | EU AI Act | US approach |
|---|---|---|
| Structure | One horizontal regulation with risk tiers | Patchwork of state, city and targeted federal laws |
| Prohibited practices | Art. 5 list (social scoring, manipulation and others) | Narrow intent-based bans (TRAIGA; social scoring only for Texas government) |
| High-risk / consequential decisions | Conformity assessment, risk management, data governance, human oversight | Mostly notice, explanation, correction and appeal (Colorado, CPPA); bias audits for hiring (NYC) |
| Frontier / GPAI | Systemic-risk presumption above 10^25 FLOP; AI Office oversight | 10^26 operations plus $500M revenue; state AG enforcement |
| Transparency | Art. 50 disclosure and machine-readable marking | Utah and chatbot disclosures; SB 942 provenance; AB 2013 training data |
| Penalties | Up to EUR 35M or 7% of global turnover | Mostly per-violation civil penalties ($500 to $1M-$3M) |
| Private enforcement | Mainly regulators | Mostly AG-only; BIPA and SB 243 allow private suits |

See [[The EU AI Act]] and [[EU AI Act 2024 — Key Provisions]].

---

## Exam Angles

- **Colorado trap:** SB 24-205 never took effect. The live law is SB 26-189: notice, a 30-day post-adverse explanation, correction and human review, with no impact assessments or duty of care, AG-only enforcement and a 60-day cure until 2030. Operative for decisions from 1 Jan 2027.
- **Intent vs effect:** Texas TRAIGA requires intent to discriminate (disparate impact alone is not enough); Illinois HB 3773 catches AI with a discriminatory effect and zip-code proxies.
- **Who must disclose under TRAIGA?** Government agencies (and health-care providers for treatment), not private businesses in general. The private-sector rules are intent-based bans.
- **TRAIGA defences:** red-team or adversarial testing, feedback, or an internal review while substantially complying with the NIST AI RMF Generative AI Profile; 60-day cure; three penalty tiers.
- **Frontier trio:** all use 10^26 operations and $500M revenue. The incident deadline is 15 days in California and 72 hours in New York and Illinois, with 24 hours everywhere for imminent danger. Only Illinois requires annual third-party audits (from 2028).
- **NYC LL 144 mechanics:** independent bias audit no more than a year before use, public summary, 10 business days' notice to NYC residents, impact ratios by sex, race/ethnicity and intersections, and no pass/fail threshold. The four-fifths rule is not in the law.
- **California stack:** AB 2013 (training-data summary), SB 942 (1M users; free detection tool; latent label required, visible label optional; $5,000 per day; operative 2 Aug 2026 as amended), CPPA ADMT rules (pre-use notice, opt-out unless a human appeal is offered, access; compliance 1 Jan 2027; filings from 1 Apr 2028).
- **Private rights of action:** BIPA and SB 243 only. Everything else here is regulator-enforced.
- **Illinois employment pair:** the Video Interview Act (notice, explanation, consent; 30-day deletion; demographic reports if AI alone decides) versus HB 3773 (effect standard plus notice).
- **Federal picture:** TAKE IT DOWN (48-hour removal; FTC enforcement from 19 May 2026, including nonprofits; AI digital forgeries are criminal). EO 14365 cannot preempt by itself, and no federal moratorium has been enacted.

## Key Terms

- [[Colorado ADMT Act (SB 26-189)]]
- [[Texas Responsible AI Governance Act (TRAIGA)]]
- [[Utah AI Policy Act]]
- [[California TFAIA (SB 53)]]
- [[Large Frontier Developer]]
- [[California AI Transparency Act (SB 942)]]
- [[CCPA ADMT Regulations]]
- [[NYC Local Law 144]]
- [[Bias Audit (NYC LL 144)]]
- [[RAISE Act]]
- [[Illinois HB 3773]]
- [[TAKE IT DOWN Act]]

## Sources

- Colorado SB 26-189 bill page and session law (Ch. 131, 2026): https://leg.colorado.gov/bills/sb26-189 ; https://leg.colorado.gov/laws/session-laws/SB26-189/131/download
- Colorado HB 26-1263 bill page and session law (Ch. 208, 2026): https://leg.colorado.gov/bills/hb26-1263 ; https://leg.colorado.gov/laws/session-laws/HB26-1263/208/download
- Colorado SB 24-205 and SB 25B-004: https://leg.colorado.gov/bills/sb24-205 ; https://leg.colorado.gov/bills/sb25b-004
- DOJ intervention in xAI v. Colorado (24 Apr 2026): https://www.justice.gov/opa/pr/justice-department-intervenes-xai-lawsuit-challenging-colorados-algorithmic-discrimination
- Texas HB 149 enrolled text and history: https://capitol.texas.gov/tlodocs/89R/billtext/pdf/HB00149F.pdf ; https://capitol.texas.gov/BillLookup/History.aspx?LegSess=89R&Bill=HB149
- Utah SB 149 (2024), SB 226, SB 332, HB 452 (2025), HB 320 (2026): https://le.utah.gov/~2024/bills/sbillenr/SB0149.pdf ; https://le.utah.gov/Session/2025/bills/enrolled/SB0226.pdf ; https://le.utah.gov/Session/2025/bills/enrolled/SB0332.pdf ; https://le.utah.gov/Session/2025/bills/enrolled/HB0452.pdf ; https://le.utah.gov/Session/2026/bills/enrolled/HB0320.pdf
- California SB 53: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB53
- California AB 2013: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB2013
- California SB 942 and AB 853: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB942 ; https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB853
- CPPA regulations (announcement, rulemaking page, approved text): https://cppa.ca.gov/announcements/2025/20250923.html ; https://cppa.ca.gov/regulations/ccpa_updates.html ; https://cppa.ca.gov/regulations/pdf/ccpa_updates_cyber_risk_admt_appr_text.pdf
- California SB 243: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260SB243
- Governor of California, 10 Sep 2026 signings: https://www.gov.ca.gov/2026/09/10/governor-newsom-signs-the-strongest-child-safety-chatbot-and-social-media-laws-in-the-nation/
- NYC Local Law 144 (Int. 1894-A) and DCWP rules: https://legistar.council.nyc.gov/LegislationDetail.aspx?ID=4344524&GUID=B051915D-A9AC-451E-81F8-6596032FA3F9 ; https://rules.cityofnewyork.us/wp-content/uploads/2023/04/DCWP-NOA-for-Use-of-Automated-Employment-Decisionmaking-Tools-2.pdf ; https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page
- NYS Comptroller audit of LL 144 enforcement: https://www.osc.ny.gov/state-agencies/audits/2025/12/02/enforcement-local-law-144-automated-employment-decision-tools
- New York RAISE Act: https://www.governor.ny.gov/news/governor-hochul-signs-nation-leading-legislation-require-ai-frameworks-ai-frontier-models ; https://www.nysenate.gov/legislation/bills/2025/S8828
- Illinois Public Acts 103-0804, 101-0260, 102-0047, 103-0769, 104-0538: https://www.ilga.gov/Documents/Legislation/PublicActs/103/PDF/103-0804.pdf ; https://www.ilga.gov/Documents/Legislation/PublicActs/101/PDF/101-0260.pdf ; https://www.ilga.gov/Documents/Legislation/PublicActs/102/PDF/102-0047.pdf ; https://www.ilga.gov/Documents/Legislation/PublicActs/103/PDF/103-0769.pdf ; https://www.ilga.gov/Documents/Legislation/PublicActs/104/PDF/104-0538.pdf
- Illinois compiled statutes (AIVIA, BIPA) and SB 315 status: https://www.ilga.gov/Legislation/ILCS/Articles?ActID=4015&ChapterID=68 ; https://www.ilga.gov/Legislation/ILCS/Articles?ActID=3004&ChapterID=57 ; https://www.ilga.gov/Legislation/BillStatus?DocTypeID=SB&DocNum=315&GAID=18&SessionID=114
- TAKE IT DOWN Act, Pub. L. 119-12: https://www.govinfo.gov/content/pkg/PLAW-119publ12/html/PLAW-119publ12.htm ; FTC enforcement: https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-begins-enforcing-take-it-down-act
- EO 14365 (90 FR 58499): https://www.govinfo.gov/content/pkg/FR-2025-12-16/pdf/2025-23092.pdf
- DOJ AI Litigation Task Force memorandum (9 Jan 2026): https://www.justice.gov/ag/media/1422986/dl?inline
- Senate roll-call vote 363 (1 Jul 2025): https://www.senate.gov/legislative/LIS/roll_call_votes/vote1191/vote_119_1_00363.htm

## Status as of September 2026

This note reflects the law as checked on 23 September 2026, and several items are moving:

- **Colorado:** the AG must adopt SB 26-189 rules by 1 Jan 2027; their final content may refine the post-adverse-outcome disclosures and the meaning of "materially influence".
- **California:** the Governor has until 30 Sep 2026 to act on bills passed in the 2026 session, so further AI laws may be signed or vetoed after this note. SB 1119 and SB 867 were signed on 10 Sep 2026; their details are not covered here.
- **Federal:** EO 14365's follow-through (the Commerce list of state laws, BEAD conditions, FCC and FTC actions) and any DOJ suits can change the practical risk of enforcing a state law, but none of them preempts state law by itself. Congress could still enact a preemption statute.
- **Illinois:** HB 3773 directs the Department of Human Rights to set the timing and means of AI-use notices by rule; check for final rules before relying on a specific notice format.
- **Future dates** (2027-2030) are as enacted and could be amended before they arrive. When an exam item turns on a date, check whether it is anchored to the original or the amended text.
