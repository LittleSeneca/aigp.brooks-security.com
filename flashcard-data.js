// AIGP Flashcards — 400 terms
const FLASHCARDS = [
  {
    "term": "A/B Testing",
    "definition": "Live split of users between two model variants, compared on a pre-set metric. Real people get the unproven variant: check subgroups, cap exposure; consequential decisions need a GDPR Art. 22 check."
  },
  {
    "term": "Accountability",
    "definition": "ISO/IEC 22989: answerable to another party for actions and decisions, by specified means and criteria; allocated by regulation, agreement or delegation. vs. responsibility: doing the work."
  },
  {
    "term": "Accountable and Transparent",
    "definition": "Cross-cutting NIST characteristic, MEASURE 2.8: information about the system and its outputs is available (what happened); answering for outcomes presupposes it. vs. explainable (how), interpretable (why)."
  },
  {
    "term": "Accuracy, Robustness and Cybersecurity (Art. 15)",
    "definition": "Lifecycle-long high-risk duties: declared performance metrics; resilience via redundancy, fail-safe plans, feedback-loop limits; resistance to data or model poisoning, adversarial examples, confidentiality attacks, model flaws."
  },
  {
    "term": "Action Space (Agentic AI)",
    "definition": "IMDA dial: what an agent can do, set by its tools and permissions. vs. autonomy: how freely it decides. Narrow it with access controls, not prompts."
  },
  {
    "term": "Adversarial Example",
    "definition": "Crafted, slightly perturbed input that makes a model err (stop sign read as speed limit): inference-time evasion, named in AI Act Art. 15(5). vs. poisoning (training time)."
  },
  {
    "term": "Adverse Action Notice (ECOA/Reg B)",
    "definition": "12 CFR 1002.9: specific principal reasons for denying or worsening credit, generally within 30 days. 'Failed to achieve a qualifying score' is insufficient, black box or not."
  },
  {
    "term": "Agent Goal Hijack",
    "definition": "OWASP ASI01: attacker redirects an agent's objectives or plan, usually via indirect prompt injection in content it reads. vs. ASI06 (persistent memory poisoning); ASI10 (drift, no attacker)."
  },
  {
    "term": "Agent Identity",
    "definition": "IMDA's four tests: unique, cryptographically verifiable; tied to an accountable human, agent or department; records whether it acts for itself or a named user; centrally catalogued. Shared accounts fail."
  },
  {
    "term": "Agent Kill Switch",
    "definition": "Halts an agent at once, revoking its credentials and tool access. Needs a trigger owner, manual fallback, preserved logs. High-risk analogue: Art. 14(4)(e) stop button (safe state)."
  },
  {
    "term": "Agentic AI",
    "definition": "Systems planning and acting over several steps through tools toward a user-set goal (IMDA). Controls shift from outputs to actions. AI Act: no separate category; tier follows use."
  },
  {
    "term": "AI Act Milestone: 2 Aug 2025",
    "definition": "GPAI obligations (Ch. V), governance bodies, notified-body rules and penalties apply; Art. 101 GPAI fines wait until 2 Aug 2026. Unchanged by the Omnibus."
  },
  {
    "term": "AI Act Milestone: 2 Aug 2026",
    "definition": "General application date. Both texts: Art. 50 duties; Commission GPAI enforcement and fines (Art. 101). As enacted, Annex III high-risk too; as amended, 2 Dec 2027."
  },
  {
    "term": "AI Act Milestone: 2 Aug 2027",
    "definition": "Both texts: GPAI models marketed before 2 Aug 2025 must comply (Art. 111(3)). As enacted, Annex I high-risk rules start (amended: 2 Aug 2028); as amended, national sandboxes are due."
  },
  {
    "term": "AI Act Milestone: 2 Aug 2028",
    "definition": "As amended: Annex I product-embedded high-risk rules start (Art. 6(1), e.g. medical devices). As enacted: 2 Aug 2027. Annex III is earlier, 2 Dec 2027."
  },
  {
    "term": "AI Act Milestone: 2 Dec 2026",
    "definition": "Amended Act only: two new Art. 5 bans (non-consensual intimate imagery, CSAM) start; generative systems marketed before 2 Aug 2026 must add Art. 50(2) marking."
  },
  {
    "term": "AI Act Milestone: 2 Dec 2027",
    "definition": "As amended: Annex III high-risk rules start (hiring, credit scoring, education), incl. Art. 26 deployer duties and Art. 27 FRIA. As enacted: 2 Aug 2026."
  },
  {
    "term": "AI Act Milestone: 2 Feb 2025",
    "definition": "First duties: Art. 5 bans (eight practices) and Art. 4 AI literacy. Unmoved by the Omnibus; its two new bans start 2 Dec 2026."
  },
  {
    "term": "AI Actors (NIST AI RMF)",
    "definition": "OECD definition the AI RMF adopts: those with an active role in the AI system lifecycle, incl. deployers and operators. Appendix A also counts TEVV, end users, affected communities."
  },
  {
    "term": "AI Agent",
    "definition": "ISO/IEC 22989: automated entity that perceives and reacts to its environment and takes actions to achieve its goals. Changes state in the world, unlike a model returning output. Controls: scoped permissions, approval checkpoints, logs."
  },
  {
    "term": "AI Assurance",
    "definition": "Evidence giving outsiders (regulators, customers, boards) justified confidence in an AI system: audits, red teaming, conformity assessment, ISO/IEC 42001 certification. vs. compliance: was a rule met."
  },
  {
    "term": "AI Business Operator (Korea)",
    "definition": "Art. 2(7): developers and AI-using operators, government included, share one duty set, vs. EU provider/deployer split. Downstream user making no significant change is deemed to meet upstream's risk, explanation and user-protection measures; oversight and records stay."
  },
  {
    "term": "AI Customer",
    "definition": "ISO/IEC 22989 role: acquires and uses an AI product or service (sub-role: AI user). The licensee running it, not its own clients. EU AI Act analogue: deployer."
  },
  {
    "term": "AI Data Retention Policy",
    "definition": "Deletion schedule per AI layer (raw data, labels, embeddings, checkpoints, weights), since models can retain what they learned. States whether an erasure request triggers retraining or unlearning."
  },
  {
    "term": "AI Deployer",
    "definition": "EU AI Act Art. 3(4): uses an AI system under its authority, except personal non-professional use. High-risk duties: Art. 26. Rebranding or substantially modifying a high-risk system makes it the provider (Art. 25)."
  },
  {
    "term": "AI Developer",
    "definition": "Builds and trains the model. No EU AI Act role of that name: the duty-bearer is the provider (Art. 3(3)). US state laws (Colorado SB 26-189, California AB 2013) do assign it duties."
  },
  {
    "term": "AI Distributor",
    "definition": "AI Act Arts. 3(7), 24. Neither provider nor importer; passes on a system already on the EU market. Checks CE marking, declaration, instructions; withholds any it has reason to think non-compliant."
  },
  {
    "term": "AI Importer",
    "definition": "AI Act Arts. 3(6), 23. EU-established; places a non-EU provider's system on the EU market after verifying conformity assessment, technical documentation, CE marking and declaration, authorised representative."
  },
  {
    "term": "AI Incident vs. AI Hazard (OECD Definitions)",
    "definition": "OECD, May 2024. Realized: an AI system's development, use or malfunction directly or indirectly leads to harm. Potential: could plausibly lead to such harm; near misses count."
  },
  {
    "term": "AI Liability Directive (Withdrawn)",
    "definition": "Never applied: 2022 fault-based proposal (disclosure orders, presumption of causality), withdrawn (OJ, 6 Oct 2025). Victims now rely on the revised PLD and national tort law."
  },
  {
    "term": "AI Literacy (Art. 4)",
    "definition": "Since 2 Feb 2025, all providers and deployers, any tier, for staff and others acting for them. As enacted: ensure, to their best extent, a sufficient level. As amended (27 Jul 2026): support it; no guaranteed level."
  },
  {
    "term": "AI Partner",
    "definition": "ISO/IEC 22989 role: helps build or deploy an AI system (integrator, data provider, auditor, evaluator). Descriptive, no legal duties. vs. AI customer (uses), AI subject (affected)."
  },
  {
    "term": "AI Provider",
    "definition": "AI Act Art. 3(3). Develops an AI system or GPAI model (or has one developed) and places it on the market or puts it into service under its own name."
  },
  {
    "term": "AI Regulatory Sandbox (Art. 57)",
    "definition": "Authority-supervised pre-market testing under an agreed plan. National ones due 2 Aug 2026 as enacted, 2 Aug 2027 as amended. Good faith shields from AI Act fines, not damage claims."
  },
  {
    "term": "AI RMF Risk Management Challenges",
    "definition": "Section 1.2's four. Measurement: unmeasurable is not thereby high or low. Tolerance: set by organization, sector and law, not the RMF. Prioritization: worst first; unacceptable risk means stop safely. Integration: into enterprise risk management."
  },
  {
    "term": "AI Stakeholder Roles (ISO/IEC 22989)",
    "definition": "Six (Clause 5.19): provider (offers AI products, services, platforms); producer (builds; AI developer); customer (uses; AI user); partner (integrator, data provider, auditor, evaluator); subject (data and other subjects); relevant authorities (policy makers, regulators)."
  },
  {
    "term": "AI Subject",
    "definition": "ISO/IEC 22989 role: anyone the system impacts, data processed or not (sub-roles: data subject, other subjects); wider than the GDPR data subject. EU AI Act analogue: affected person."
  },
  {
    "term": "AI System",
    "definition": "EU AI Act Art. 3(1): machine-based, varying levels of autonomy, infers from input how to generate predictions, content, recommendations or decisions. Executing only human-written rules fails 'infers' (Commission guidelines, Feb 2025)."
  },
  {
    "term": "AI System Inventory",
    "definition": "Central list of all AI in use, embedded included, kept by a named owner (AI RMF GOVERN 1.6). First fix for shadow AI. vs. model registry (MLOps versions)."
  },
  {
    "term": "AI System Life Cycle (ISO/IEC 22989)",
    "definition": "Eight stages: inception; design and development; verification and validation; deployment; operation and monitoring; continuous validation (only systems that keep learning); re-evaluation; retirement. ISO/IEC 23894 Annex C maps risk management onto them."
  },
  {
    "term": "AI User",
    "definition": "Person operating or relying on AI output day to day (recruiter, clinician). No EU AI Act role: the 2021 proposal's term became 'deployer'. Typical failure: automation bias."
  },
  {
    "term": "AI Vendor Due Diligence",
    "definition": "Pre-contract AI probes beyond SOC 2: training-data provenance and rights, labeling quality, bias test evidence, model-change practices. Unclosed gaps go into the contract or a risk acceptance."
  },
  {
    "term": "Algorithmic Bias",
    "definition": "Systematic, not random, difference in treatment of people or groups (ISO/IEC 22989). Enters via data, design choices and feedback loops; needs no intent or protected feature."
  },
  {
    "term": "Algorithmic Disgorgement",
    "definition": "FTC remedy: delete unlawfully obtained data and every model and algorithm built from it. AI precedents: Everalbum (2021) and Rite Aid (2023), both facial recognition."
  },
  {
    "term": "Alternative Adequate Means (Arts. 53(4), 55(2))",
    "definition": "Route for GPAI providers following neither an adequacy-assessed code of practice nor a harmonised standard (e.g. Meta). Same duties; more AI Office scrutiny; no code credit when fines are set."
  },
  {
    "term": "America's AI Action Plan (2025)",
    "definition": "July 2025 White House plan (per EO 14179): NIST to strip misinformation, DEI and climate from the AI RMF; FTC to revisit AI-burdening orders. Binds no companies."
  },
  {
    "term": "Annex I Product Route (Art. 6(1))",
    "definition": "High-risk: AI that is, or is a safety component of, an Annex I product needing third-party conformity assessment. As enacted 2 Aug 2027; as amended 2 Aug 2028."
  },
  {
    "term": "Annex III High-Risk Areas",
    "definition": "Art. 6(2), eight areas: biometrics; critical infrastructure; education; employment; essential services (benefits, credit scoring, life and health insurance pricing, emergency triage); law enforcement; migration and border control; justice and democratic processes. Fraud detection and 1:1 verification excluded. Art. 7: additions only within them."
  },
  {
    "term": "Annex SL",
    "definition": "ISO's shared clause structure for management system standards (42001, 27001, 9001), enabling one integrated system. Auditable clauses: 4 context, 5 leadership, 6 planning (Plan); 7 support, 8 operation (Do); 9 performance evaluation (Check); 10 improvement (Act)."
  },
  {
    "term": "Anonymization",
    "definition": "Recital 26: no longer relates to an identifiable person, so the GDPR stops applying (vs. pseudonymization: still personal data). Draft EDPB Guidelines 02/2026 tests: no isolation, linkage or inference."
  },
  {
    "term": "Article 22 GDPR",
    "definition": "Bars solely automated decisions with legal or similarly significant effects; rubber-stamp review still counts as solely automated. Exceptions: contract or explicit consent (plus human intervention, a say, a challenge); EU or member state law."
  },
  {
    "term": "Artificial General Intelligence (AGI)",
    "definition": "Theoretical AI matching human competence across essentially all tasks; nothing deployed qualifies, LLMs included. Acronym trap: in NIST AI 600-1, 'GAI' means generative AI."
  },
  {
    "term": "Artificial Superintelligence (ASI)",
    "definition": "Theoretical AI exceeding the best human performance in essentially every domain. Capability ladder: narrow (every deployed system), then AGI (human-level), then this; only narrow exists."
  },
  {
    "term": "Audit",
    "definition": "Independent, systematic check against pre-agreed criteria: first, second or third party. AI scope: the policies, processes and tools around the model, not just its performance."
  },
  {
    "term": "Automatic Logging (Art. 12)",
    "definition": "High-risk systems must record events automatically over their lifetime for traceability. Provider (Art. 19) and deployer (Art. 26(6)) keep logs 6+ months; documentation 10 years (Art. 18)."
  },
  {
    "term": "Automation Bias",
    "definition": "Over-relying on automated output, even when wrong; grows as the system proves reliable. EU AI Act Art. 14(4)(b): high-risk design keeps overseers aware of it. Opposite: algorithmic aversion (NIST AI 600-1 lists both)."
  },
  {
    "term": "Autonomy",
    "definition": "ISO/IEC 22989: can change its intended domain of use or objective without external intervention, control or supervision; beyond full automation. Response: human oversight empowered to halt."
  },
  {
    "term": "Availability",
    "definition": "Accessible and usable when an authorized entity needs it. An ISO/IEC 22989 trustworthiness characteristic; inside NIST AI RMF 'secure and resilient'; GDPR Art. 32(1)(b)."
  },
  {
    "term": "Bayesian Network",
    "definition": "Probabilistic directed acyclic graph: variables linked by conditional probabilities, updated as evidence arrives. Handles missing data; more traceable than a neural network."
  },
  {
    "term": "Benchmarking",
    "definition": "Scoring a model against reference datasets, incumbents or published baselines: comparative evidence, not proof of fitness for your use. Caveats: contamination, population mismatch, gaming."
  },
  {
    "term": "Best-Efforts Impact Assessment (Korea)",
    "definition": "Art. 35: operators providing high-impact AI 'shall make efforts' to assess fundamental-rights impact beforehand. Not finable; public bodies must prefer assessed products. vs. EU FRIA: mandatory, certain deployers."
  },
  {
    "term": "Bias Audit (NYC LL 144)",
    "definition": "Independent auditor, within a year before use: selection or scoring rates and impact ratios by sex, race/ethnicity and intersections; summary published. No pass/fail threshold."
  },
  {
    "term": "Bias Testing",
    "definition": "Compare outcomes and error rates by subgroup; aggregate accuracy hides gaps. Sensitive data allowed strictly for bias detection and correction: AI Act Art. 4a (2026 Omnibus; as enacted Art. 10(5))."
  },
  {
    "term": "Biometric Categorisation Ban (Art. 5(1)(g))",
    "definition": "Bans sorting individuals by biometric data to infer race, political opinions, union membership, religious or philosophical beliefs, sex life or sexual orientation. Lawful dataset labelling or filtering exempt. Other sensitive-attribute sorting: high-risk (Annex III 1(b))."
  },
  {
    "term": "Biometric Data",
    "definition": "Art. 4(14): technically processed physical, physiological or behavioral traits allowing unique identification. Art. 9 only when used to uniquely identify; AI categorization (age estimation) may fall outside."
  },
  {
    "term": "Biometric Information Privacy Act (BIPA)",
    "definition": "Illinois, 2008: written notice and release before collecting face, fingerprint, voice or iris data; retention policy; no profiting. Private suits: $1,000 negligent, $5,000 intentional or reckless."
  },
  {
    "term": "Breach Notification",
    "definition": "Authority within 72 hours of awareness unless unlikely to risk rights (Art. 33); individuals if high risk (Art. 34). Customer data pasted into a public chatbot can qualify."
  },
  {
    "term": "Brittleness",
    "definition": "Performance collapses, rather than degrading gracefully, just outside training conditions (new lighting, rephrased prompt). A BOK III.C incident-analysis factor. vs. robustness (holds up), resilience (recovers)."
  },
  {
    "term": "Business Context",
    "definition": "BOK III.A first step: the problem, objectives, success metrics, readiness and stakeholders, fixed before design. vs. business case (expected benefit), use case (scoped spec)."
  },
  {
    "term": "Business Objectives",
    "definition": "Outcome the deployment must deliver, set before choosing a model; fixes intended purpose and metrics. First of BOK IV.A's five factors (then performance, data, ethics, workforce)."
  },
  {
    "term": "California AB 2013 (Training Data Transparency)",
    "definition": "Generative AI developers serving Californians post dataset documentation (sources, copyrighted and personal data, licensing): due 1 Jan 2026 for 2022+ systems, then each release. No penalty clause."
  },
  {
    "term": "California AI Transparency Act (SB 942)",
    "definition": "Generative AI with over 1M monthly users: free detection tool; latent disclosures in image, video, audio, not text. $5,000 per violation per day. Operative 2 Aug 2026 as amended (as enacted, 1 Jan 2026)."
  },
  {
    "term": "California SB 243 (Companion Chatbots)",
    "definition": "From 1 Jan 2026: AI notice if users could think it human; published self-harm protocol with crisis referrals; 3-hourly break reminders for known minors. Private right of action ($1,000 per violation or actual damages)."
  },
  {
    "term": "California TFAIA (SB 53)",
    "definition": "From 1 Jan 2026. Frontier developers (over 10^26 operations): transparency reports; critical incidents to Cal OES within 15 days (24h if imminent). AG-only, up to $1M; no audit."
  },
  {
    "term": "CCPA ADMT Regulations",
    "definition": "CPPA rules effective 1 Jan 2026; ADMT compliance by 1 Jan 2027. Tech replacing or substantially replacing human judgment in significant decisions, not ads: pre-use notice, opt-out (main exception: human appeal), access."
  },
  {
    "term": "CE Marking",
    "definition": "AI Act Art. 48. High-risk provider affixes it itself, after the EU declaration (Art. 47); no notified body issues it. Order: assessment, declaration, mark, registration."
  },
  {
    "term": "Choice",
    "definition": "A person's say over data use. GDPR leans opt-in plus objection rights; US states, opt-out (CCPA/CPRA sale and sharing; CPPA ADMT rules for significant decisions). Dark patterns defeat it."
  },
  {
    "term": "Classic AI",
    "definition": "Rule-based and classical ML (decision trees, logistic regression), vs. generative AI. Easier to explain; tier still follows use: a decision-tree hiring screener is Annex III 4(a) high-risk."
  },
  {
    "term": "Cloud, On-Premises & Edge Deployment",
    "definition": "Where inference runs. Cloud: scale; GDPR Ch. V if personal data leaves the EEA. On-premises: control, sovereignty, cost. Edge: on-device, low latency, local data; harder to update."
  },
  {
    "term": "Code of Practice on Marking and Labelling",
    "definition": "Voluntary Art. 50(7) code, final 10 Jun 2026. Section 1: providers mark output machine-detectably. Section 2: deployers label deepfakes, public-interest AI text. vs. GPAI Code (Art. 56)."
  },
  {
    "term": "Cognitive Computing",
    "definition": "ISO/IEC 22989: category of AI systems enabling more natural human-machine interaction (speech, language, vision, interfaces). Not a claim of human-like reasoning or general intelligence."
  },
  {
    "term": "Colorado ADMT Act (SB 26-189)",
    "definition": "Signed 14 May 2026; replaced the never-effective SB 24-205, dropping impact assessments and duty of care. Consequential decisions from 1 Jan 2027: pre-use notice, 30-day adverse-outcome explanation, correction, human review. AG-only; 60-day cure."
  },
  {
    "term": "Colorado AI Act (SB 24-205)",
    "definition": "Never took effect; repealed May 2026 by SB 26-189. Exam may still test it as enacted (start 1 Feb 2026, delayed to 30 Jun 2026): reasonable care against algorithmic discrimination, impact assessments, AG notice within 90 days."
  },
  {
    "term": "Commission GPAI Enforcement Powers (Arts. 88-93)",
    "definition": "From 2 Aug 2026, AI Office only, never national authorities: information requests (Art. 91), model evaluations (Art. 92), mitigation, restriction, withdrawal or recall orders (Art. 93), fines up to €15M or 3% (Art. 101)."
  },
  {
    "term": "Complexity",
    "definition": "I.A governance characteristic: many interacting components and high-dimensional models make input-output links hard to trace (vs. opacity: unreadable weights). Response: decompose, document, layer testing, monitoring, oversight."
  },
  {
    "term": "Computer Vision",
    "definition": "Capturing and interpreting image or video data; covers image recognition (classifying objects, patterns, concepts). Identifying people: GDPR Art. 9 biometric data. Biometric ID or categorisation: AI Act Art. 5, Annex III."
  },
  {
    "term": "Concept Drift",
    "definition": "Input-to-output relationship changes (fraudsters switch tactics) while inputs may look stable. Shows as falling accuracy on fresh labels. vs. data drift (inputs shift)."
  },
  {
    "term": "Confabulation",
    "definition": "NIST AI 600-1's term for confidently stated but erroneous or false content; one of its 12 GAI risks. Preferred over 'hallucination', which anthropomorphizes the model."
  },
  {
    "term": "Conformity Assessment",
    "definition": "AI Act Art. 43. Provider's pre-market check against Arts. 8-15. Annex III: self-assessment (Annex VI); notified body (Annex VII) for biometrics lacking full harmonised standards. Annex I: sectoral procedure."
  },
  {
    "term": "Conformity Requirements",
    "definition": "High-risk release gate: meet Arts. 9-15 and the Art. 17 QMS; Art. 43 conformity assessment; EU declaration (Art. 47); CE marking (Art. 48); registration (Art. 49). Annex III: from 2 Dec 2027 (as enacted 2 Aug 2026)."
  },
  {
    "term": "Consent",
    "definition": "Rarely workable for AI training at scale. Art. 4(11): freely given, specific, informed, unambiguous affirmative act; pre-ticked boxes fail; withdrawable as easily as given. Explicit for Art. 9 and 22."
  },
  {
    "term": "Consumer Protection",
    "definition": "US FTC Act s.5 and state acts; EU UCPD (2005/29), topped by AI Act Art. 5 manipulation bans. No intent needed; no AI exemption. AI targets: unproven capability claims, fake reviews, dark patterns."
  },
  {
    "term": "Content Provenance (NIST AI 600-1)",
    "definition": "Tracking the origin and history of digital content to establish authenticity: watermarking, metadata, fingerprinting, human authentication. One of the GAI Profile's four primary considerations."
  },
  {
    "term": "Contestability",
    "definition": "Affected person's route to challenge an AI decision before a human who can change it (GDPR Art. 22(3); OECD Principle 1.3). vs. human in the loop: the operator triggers review."
  },
  {
    "term": "Context of the Organization",
    "definition": "ISO/IEC 42001 Clause 4. AI-specific 4.1: consider each AI system's intended purpose and determine the organization's role (e.g. provider, producer, customer), which shapes applicable controls. 4.3: AIMS scope."
  },
  {
    "term": "Continuous Monitoring",
    "definition": "Ongoing watch on drift, subgroup fairness, overrides and misuse, not just uptime. Deployers monitor and alert the provider (AI Act Art. 26(5)); providers run post-market monitoring (Art. 72)."
  },
  {
    "term": "Continuous Validation",
    "definition": "ISO/IEC 22989 stage for systems that keep learning after release: production checks that requirements still hold. AI Act Art. 43(4): pre-set, documented learning changes are not substantial modifications."
  },
  {
    "term": "Controllability",
    "definition": "ISO/IEC 22989: a human or external agent can intervene in the system's operation. vs. human oversight: a competent person actually doing it. AI Act Art. 14(4)(e): 'stop' button."
  },
  {
    "term": "Convolutional Neural Network (CNN)",
    "definition": "Feedforward network sliding learned filters over images (or other grid data) to detect local patterns: edges, textures. Face identification triggers biometric rules (GDPR Art. 9; AI Act Art. 5, Annex III)."
  },
  {
    "term": "Copyright",
    "definition": "Protects original expression fixed in a medium, not ideas; arises automatically (US registration unlocks statutory damages). AI hooks: training copies engage the reproduction right; purely AI-generated output gets none."
  },
  {
    "term": "Copyright Chapter (GPAI CoP)",
    "definition": "All signatories, not only systemic-risk (Art. 53(1)(c)): written policy; lawful access (no paywall or TPM circumvention); honour robots.txt and other TDM opt-outs (CDSM Art. 4(3)); curb infringing outputs; rightsholder contact."
  },
  {
    "term": "Copyright Office AI Reports (Parts 1-3)",
    "definition": "Non-binding. Part 1 (Jul 2024): federal digital-replica law. Part 2 (Jan 2025): prompts alone are not authorship. Part 3 (May 2025): commercial use of vast troves to make competing content, especially via illegal access, exceeds fair use."
  },
  {
    "term": "Counterfactual Explanation",
    "definition": "Smallest input change that would have flipped a decision ('approved with EUR 5,000 more income'); discloses no model internals. May satisfy GDPR Art. 15(1)(h) (CJEU C-203/22). vs. flipping a protected attribute to test bias."
  },
  {
    "term": "Counterfactual Fairness",
    "definition": "Individual, causal test: same outcome had only this person's protected attribute differed? Needs a causal model. vs. group metrics; vs. counterfactual explanation (smallest change flipping a decision)."
  },
  {
    "term": "Cross-Border Data Transfer",
    "definition": "GDPR Ch. V, incl. remote access and prompts to a non-EEA model API. Ladder: adequacy (Art. 45); SCCs or BCRs (Arts. 46-47) plus TIA (Schrems II); Art. 49 derogations."
  },
  {
    "term": "Cross-Functional Collaboration",
    "definition": "BOK I.B: AI decisions shared across legal, privacy, security, data science, product and ethics, for efficacy and diverse expertise. Single-function answers are wrong."
  },
  {
    "term": "Data Acquisition",
    "definition": "Entry gate: confirm and record the legal right to collect and train on data before use. Traps: implicit consent, function creep, scraping past text-and-data-mining opt-outs."
  },
  {
    "term": "Data Annotation",
    "definition": "Adding labels, tags or metadata without altering the data (ISO/IEC 22989). Label quality caps model quality; control via guidelines and inter-annotator agreement. vs. augmentation (new samples)."
  },
  {
    "term": "Data Augmentation",
    "definition": "ISO/IEC 22989: creating synthetic samples by modifying or reusing existing data. Fills gaps for under-represented groups; done carelessly, it amplifies the majority."
  },
  {
    "term": "Data Controller",
    "definition": "Decides purposes and means (Art. 4(7)); must demonstrate compliance (Art. 5(2)). vs. processor, acting on its instructions. GDPR roles do not map onto AI Act provider or deployer."
  },
  {
    "term": "Data Dependency",
    "definition": "BOK I.A characteristic: behaviour is learned from data, inheriting its quality, gaps and skew. Upstream data changes alter the model with no code change."
  },
  {
    "term": "Data Drift",
    "definition": "Production inputs diverge statistically from training data (covariate shift; label drift if outcome rates move). PSI or Kolmogorov-Smirnov tests catch it, often before accuracy falls. vs. concept drift."
  },
  {
    "term": "Data Governance",
    "definition": "Policies, roles and controls keeping data lawful, accurate, secure and fit for purpose. High-risk (AI Act Art. 10(2)): practices cover collection and origin, preparation, assumptions, bias examination and mitigation, data gaps."
  },
  {
    "term": "Data Integrity",
    "definition": "Data not altered, corrupted or quietly replaced between collection and use. vs. quality (fit for purpose), provenance (origin). AI threat: poisoning. Controls: versioned datasets, checksums."
  },
  {
    "term": "Data Lineage",
    "definition": "The data's journey after origin: ingestion, transformation, storage, consuming models, disposal ('how and where'). vs. provenance ('where from, on what terms'). Gaps hide tampering or poisoning."
  },
  {
    "term": "Data Minimization",
    "definition": "Art. 5(1)(c): adequate, relevant, limited to what is necessary. Hoarding a raw scrape for a future model breaks it, and fails Opinion 28/2024's necessity step."
  },
  {
    "term": "Data Poisoning",
    "definition": "Training-time attack: corrupting training or fine-tuning data to plant errors or a hidden backdoor trigger. Named in AI Act Art. 15(5). vs. adversarial examples (inference time)."
  },
  {
    "term": "Data Protection Impact Assessment (DPIA)",
    "definition": "GDPR Art. 35, before likely high-risk processing. Mandatory for: (a) systematic, extensive automated evaluation, incl. profiling, with legal or similarly significant effects; (b) large-scale special-category or criminal data; (c) large-scale monitoring of public areas. vs. AI Act FRIA."
  },
  {
    "term": "Data Protection Officer (DPO)",
    "definition": "Art. 37: required for public bodies, or where core activities are large-scale systematic monitoring or large-scale special-category or criminal data. Art. 39: advises and monitors, independently; does not decide."
  },
  {
    "term": "Data Provenance",
    "definition": "Where data came from and on what terms: source, collection method, licence or consent, jurisdiction, original purpose. vs. lineage (its journey); vs. NIST AI 600-1 tracing of generated content."
  },
  {
    "term": "Data Quality",
    "definition": "Fitness for intended purpose: clean, lawful data can still fail a new use. AI Act Art. 10(3): high-risk training, validation and test sets relevant, sufficiently representative, as far as possible error-free and complete."
  },
  {
    "term": "Data Sampling",
    "definition": "Selecting a subset expected to show the same patterns and trends as the full data set (vs. partitioning into training, validation, test sets). Unrepresentative subsets cause representation bias."
  },
  {
    "term": "Data Sheet",
    "definition": "Gebru et al. (2018): standard questions documenting a dataset's motivation, composition, collection and consent, labelling, intended uses, maintenance. vs. model card (model), system card (deployed system)."
  },
  {
    "term": "Data Subject Rights",
    "definition": "Access 15, rectification 16, erasure 17, restriction 18, portability 20, objection 21, automated decisions 22. Reply in one month, extendable by two. Reach the model too unless it is anonymous (Opinion 28/2024)."
  },
  {
    "term": "Deactivation Policy",
    "definition": "BOK IV.C, paired with localization: triggers, approver, fallback, final snapshot. Providers withdraw, disable or recall non-conforming high-risk AI (Art. 20); deployers suspend use and inform (Art. 26(5))."
  },
  {
    "term": "Decision Tree",
    "definition": "Inference follows one root-to-leaf path of explicit feature splits: the textbook inherently interpretable model. Ensembles (random forests, boosting) lose that transparency."
  },
  {
    "term": "Decommissioning",
    "definition": "After deactivation. Archive: final model, lineage, logs, incident records; high-risk technical documentation 10 years (Art. 18). Dispose: obsolete data, derivative models, unneeded personal data (GDPR Art. 5(1)(e))."
  },
  {
    "term": "Deep Learning",
    "definition": "Neural networks with many hidden layers that learn hierarchical representations (ISO/IEC 22989) straight from raw data, no hand-engineered features. Subset of ML. Main source of AI opacity."
  },
  {
    "term": "Deepfake",
    "definition": "EU AI Act Art. 3(60): AI-generated or manipulated image, audio or video resembling existing persons, objects, places or events, falsely appearing authentic. Deployers disclose it from 2 Aug 2026 (Art. 50(4)); lighter for evident art or satire."
  },
  {
    "term": "Deployer Obligations (Art. 26)",
    "definition": "High-risk deployer duties: follow instructions; assign competent oversight; keep controlled input data relevant; monitor, suspend, report risks; keep logs 6+ months; inform workers and affected people. Public bodies register use."
  },
  {
    "term": "Design Defect",
    "definition": "Made as designed, but the design is unreasonably dangerous: risk-utility test, feasible safer alternative (better data, human oversight). vs. manufacturing defect: unit departs from design."
  },
  {
    "term": "Differential Privacy",
    "definition": "Calibrated noise bounds any one record's effect on outputs. Lower epsilon (budget): stronger protection, less utility. Art. 25 safeguard, not anonymization by itself."
  },
  {
    "term": "Digital Omnibus on AI (Regulation 2026/1744)",
    "definition": "In force 27 Jul 2026. Annex III high-risk 2 Aug 2026 to 2 Dec 2027; Annex I 2 Aug 2027 to 2 Aug 2028. Two new Art. 5 bans; softer AI literacy; wider AI Office powers. Fine ceilings, tiers, GPAI dates unchanged."
  },
  {
    "term": "Disinformation",
    "definition": "False content spread deliberately to deceive. vs. misinformation: the same falsehood shared in honest error. NIST AI 600-1 information integrity risk; generative AI makes both cheap at scale."
  },
  {
    "term": "Disparate Impact",
    "definition": "Neutral practice disproportionately harming a protected group; no intent. Title VII §703(k): disparity, business necessity, less discriminatory alternative. Gone from ECOA via Reg B (21 Jul 2026); alive under Title VII and FHA."
  },
  {
    "term": "Disparate Treatment",
    "definition": "Intentional discrimination on a protected trait, deliberate proxies included (zip code for race). vs. disparate impact (no intent). The only theory Texas TRAIGA reaches."
  },
  {
    "term": "Domestic Representative (Korea AI Basic Act)",
    "definition": "Art. 36: foreign operator with no Korean address meeting any one: KRW 1 trillion revenue, KRW 10 billion AI revenue, 1 million daily Korean users, or a past fine for ignoring an MSIT order. vs. EU: every non-EU high-risk or GPAI provider."
  },
  {
    "term": "Downstream Harm",
    "definition": "Consequences for people, communities or systems beyond direct users, not initially considered (a base-model flaw inherited by every app). BOK IV.C: forecast via stakeholder impact mapping, red teaming."
  },
  {
    "term": "Downstream Modifier (GPAI)",
    "definition": "Fine-tuning or modifying another firm's GPAI model makes you its provider only above one third of the original's training compute (Commission guidelines). Duties cover just the changes; a modified systemic-risk model stays systemic-risk."
  },
  {
    "term": "Dun & Bradstreet Austria Ruling (C-203/22)",
    "definition": "CJEU, 27 Feb 2025. Art. 15(1)(h): concise, intelligible account of the procedure and principles actually applied, not a formula. Claimed trade secrets: the DPA or court balances."
  },
  {
    "term": "Echo Chamber",
    "definition": "Engagement-optimized recommenders serve content confirming a user's views, narrowing exposure and feeding polarization. No single output is wrong; controls are system-level: impact assessment, aggregate monitoring, ranking transparency."
  },
  {
    "term": "EDPB Guidelines 03/2026 on Web Scraping",
    "definition": "Draft of 7 July 2026 on gen-AI training data. Consent most probably unworkable; legitimate interest via the Opinion 28/2024 test. Sensitive data: Art. 6 basis plus Art. 9(2) exception."
  },
  {
    "term": "EDPB Opinion 28/2024",
    "definition": "17 Dec 2024. Model anonymous only if extracting training data, directly or by query, is insignificantly likely. Legitimate interest: interest, necessity, balancing. Unlawful training can taint deployment unless anonymized."
  },
  {
    "term": "Emotion Recognition Ban (Art. 5(1)(f))",
    "definition": "Bans inferring emotions from biometric data at work or in education (candidates included), except for medical or safety reasons. Elsewhere: high-risk (Annex III 1(c)) plus Art. 50(3) notice."
  },
  {
    "term": "Entry into Force (EU AI Act)",
    "definition": "1 Aug 2024, 20th day after OJ publication (12 Jul 2024). Starts the clock, imposes no duties; Art. 113 staggers application. A regulation: no national transposition."
  },
  {
    "term": "Ethical Considerations",
    "definition": "Value questions left after legal compliance: should we build it, who bears residual harm, are dignity and autonomy respected. Apply via external ethics audits, impact assessments, stakeholder engagement."
  },
  {
    "term": "Ethics by Design",
    "definition": "Turning values into concrete safeguards from problem framing onward: ethical impact assessments, affected-community input, fairness and explainability tools. A BOK I.C lifecycle oversight policy; early fixes cost far less."
  },
  {
    "term": "EU AI Act",
    "definition": "Reg. (EU) 2024/1689, first comprehensive horizontal AI law. Risk tiers (Art. 5 bans; Annex I or III high-risk; Art. 50 transparency; minimal), duties by role, GPAI models apart (Arts. 51-56)."
  },
  {
    "term": "EU AI Act Governance Bodies",
    "definition": "EU level: AI Office (Commission; GPAI enforcer); AI Board (one rep per Member State; coordinates, advises, no enforcement); Advisory Forum (stakeholders); Scientific Panel (independent experts; GPAI alerts). EDPS: EU institutions. National: market surveillance and notifying authorities."
  },
  {
    "term": "EU AI Act Penalty Tiers",
    "definition": "Art. 99, higher of: prohibited practices €35M/7%; most other duties €15M/3%; misleading authorities €7.5M/1%. SMEs: lower figure (small mid-caps too, bar the 7% tier). GPAI: €15M/3% (Art. 101)."
  },
  {
    "term": "EU Database Registration (Art. 49)",
    "definition": "Before market placement, provider lists each Annex III high-risk system, and any it exempted under Art. 6(3), in the Commission's EU database. Public-authority deployers register their use; private ones do not."
  },
  {
    "term": "European AI Office",
    "definition": "Commission unit. Exclusive GPAI model enforcer (Art. 88); facilitates the GPAI Code. As amended, also exclusive for systems on the same provider's GPAI model (carve-outs) and AI in DSA very large platforms."
  },
  {
    "term": "Executive Order 14281",
    "definition": "Apr 2025: end disparate-impact liability as far as possible; agencies deprioritise it. Cannot amend statutes: Title VII §703(k), FHA claims and private suits survive."
  },
  {
    "term": "Executive Order 14365",
    "definition": "Dec 2025: DOJ task force to sue states, BEAD funding conditions, request to Congress for preemption. Preempts nothing itself; no federal moratorium (Senate struck one 99-1)."
  },
  {
    "term": "Expert System",
    "definition": "ISO/IEC 22989: integrates knowledge from human domain specialists, usually hand-coded rules run by an inference engine. Symbolic: explainable by inspection, brittle outside its rules (vs. ML: learns from data)."
  },
  {
    "term": "Explainability",
    "definition": "ISO/IEC 22989: expressing, in terms humans understand, the important factors behind a result; answers 'why?'. Trap: NIST AI RMF says 'how' and gives 'why' to interpretability."
  },
  {
    "term": "Explainable and Interpretable",
    "definition": "NIST trustworthiness characteristic, MEASURE 2.9. How: the mechanisms behind the system's operation. Why: an output's meaning in the context of its designed purpose. vs. transparency (what happened)."
  },
  {
    "term": "Exploratory Data Analysis (EDA)",
    "definition": "ISO/IEC 22989: initial examination of a data set to find salient features and judge quality: missing values, outliers, representativeness. Evidence for AI Act Art. 10 data checks."
  },
  {
    "term": "External Communication Plan",
    "definition": "Pre-approved audience-to-duty map: users, Art. 50 AI and deepfake notices (from 2 Aug 2026); people facing Annex III decisions, Art. 26(11) notice; regulators, Art. 73 serious-incident reports."
  },
  {
    "term": "F1 Score",
    "definition": "Harmonic mean of precision and recall. Beats accuracy on imbalanced data: at 1% fraud, always predicting 'legitimate' scores 99% accuracy yet catches nothing. Weighs both errors equally."
  },
  {
    "term": "Face Recognition",
    "definition": "Matches a face against stored images and returns identifying data (vs. detection: locating faces). Remote identification: Annex III high-risk (1:1 verification excluded); real-time public police use banned save exceptions (Art. 5(1)(h))."
  },
  {
    "term": "Fail-Safe Plan",
    "definition": "Pre-decided fallback when the system misbehaves or leaves its bounds: safe halt, backup system, manual process. AI Act Art. 15(4): a robustness measure, not Art. 14 oversight."
  },
  {
    "term": "Fair Credit Reporting Act (FCRA)",
    "definition": "Third-party algorithmic scores for credit, insurance or hiring can be consumer reports (1681a(d)): accuracy, disputes, adverse-action notices. vs. ECOA: data source here, discrimination there."
  },
  {
    "term": "Fair Use (AI Training)",
    "definition": "US-only defence (§107); factors 1 (transformative) and 4 (market harm) decide. 2025: fair in Bartz (not pirated copies) and Kadrey; unfair in Ross (competing tool). No appellate ruling by Sep 2026."
  },
  {
    "term": "Fairness",
    "definition": "Principle against unjustified differences in treatment or outcomes across people or groups. NIST AI RMF pairs it with 'harmful bias managed'. No single definition: perceptions vary by culture and application."
  },
  {
    "term": "Fairness Impossibility Result",
    "definition": "With unequal base rates, calibration and equal false-positive and false-negative rates cannot all hold, barring perfect prediction (Kleinberg et al.; Chouldechova, 2016). Response: disclose the trade-off and justify the metric chosen."
  },
  {
    "term": "Federated Learning",
    "definition": "Raw data stays on each device or site; only model updates are pooled. Updates can still leak (gradient inversion): add secure aggregation or differential privacy."
  },
  {
    "term": "Feedback Loop",
    "definition": "Outputs shape future inputs or training data (predicted hotspots get more patrols, so more recorded crime), amplifying bias. AI Act Art. 15(4): high-risk systems that keep learning must curb it."
  },
  {
    "term": "Feedforward Neural Network (FFNN)",
    "definition": "Information moves one way, input to output (ISO/IEC 22989): no loops, no memory of earlier inputs. Baseline architecture; CNNs are one variant. vs. RNN: feeds outputs back."
  },
  {
    "term": "Fine-Tuning",
    "definition": "Retraining a pre-trained model: weights change (vs. RAG, prompting). You become provider if it substantially modifies high-risk AI (Art. 25(1)(b)) or, for GPAI, uses over a third of original training compute."
  },
  {
    "term": "Foundation Model",
    "definition": "Pretrained on broad data, adapted (prompting, fine-tuning, RAG) to many tasks; its flaws reach every app built on it. AI Act never uses the phrase: GPAI model (Art. 3(63))."
  },
  {
    "term": "Four-Fifths Rule",
    "definition": "29 CFR 1607.4(D): a selection rate below 80% of the top group's rate signals adverse impact (36/50 = 0.72). Screening flag, not proof. Not in NYC LL 144."
  },
  {
    "term": "FTC Rite Aid Order (2023)",
    "definition": "Dec 2023 unfairness order: in-store facial recognition with no accuracy testing, false-positive monitoring or staff training; false matches hit women and people of color. Five-year ban."
  },
  {
    "term": "Fundamental Rights Impact Assessment (FRIA)",
    "definition": "AI Act Art. 27. Deployer's Charter-rights check before first use of an Annex III system (not critical infrastructure). Owed by public bodies, private providers of public services, credit-scoring and life/health insurance deployers. Results to market surveillance authority."
  },
  {
    "term": "GAI Risks (NIST AI 600-1)",
    "definition": "Twelve that generative models create or worsen: CBRN information; confabulation; dangerous, violent or hateful content; data privacy; environmental impacts; harmful bias or homogenization; human-AI configuration; information integrity; information security; intellectual property; obscene, degrading or abusive content; value chain and component integration."
  },
  {
    "term": "General Data Protection Regulation (GDPR)",
    "definition": "Reg. 2016/679, alongside the AI Act. Art. 3 reaches non-EU firms offering goods or services to, or monitoring, people in the EU. Top fines: EUR 20M or 4% global turnover, whichever higher."
  },
  {
    "term": "General-Purpose AI (GPAI)",
    "definition": "Art. 3(63): model of significant generality, competent at many distinct tasks; indicatively over 10^23 training FLOP. Providers owe Art. 53; systemic-risk models add Art. 55."
  },
  {
    "term": "Generative AI",
    "definition": "Creates new content (text, images, audio, code) by sampling learned patterns: LLMs, diffusion models. vs. discriminative models (inputs to labels). NIST AI 600-1 profiles its 12 risks."
  },
  {
    "term": "Generative AI Labeling (Korea)",
    "definition": "Art. 31(2)-(3): mark generative output (visible, or machine-readable plus one text or voice notice); clearly flag realistic synthetic media. Not directly finable: MSIT order first."
  },
  {
    "term": "Generative AI Profile (NIST AI 600-1)",
    "definition": "July 2024 cross-sectoral AI RMF companion: same four functions, 12 risks. Primary considerations: governance, pre-deployment testing, content provenance, incident disclosure. Ordered by EO 14110 (revoked Jan 2025; still published)."
  },
  {
    "term": "Govern Function",
    "definition": "Cross-cutting AI RMF function, infused through Map, Measure, Manage; usually set up first. Categories: policies (inventory 1.6, decommissioning 1.7), accountability (executives 2.3), workforce diversity, risk culture, stakeholder engagement, third-party risk."
  },
  {
    "term": "GPAI Code of Practice (Art. 56)",
    "definition": "Voluntary (10 Jul 2025). Transparency and Copyright chapters: all signatories; Safety & Security: systemic-risk only. Demonstrates Arts. 53/55 compliance, can mitigate fines; no presumption of conformity."
  },
  {
    "term": "GPAI Model vs. GPAI System",
    "definition": "Trained artifact (Art. 3(63)); its provider owes Arts. 53-55. vs. AI system built on one (Art. 3(66)), regulated by use: Art. 50; high-risk if repurposed (Art. 25(1)(c))."
  },
  {
    "term": "GPAI Model with Systemic Risk (Art. 51)",
    "definition": "Two routes: high-impact capabilities (presumed above 10^25 training FLOP) or Commission designation on Annex XIII criteria (reach presumed at 10,000 registered EU business users). Adds Art. 55 duties."
  },
  {
    "term": "GPAI Transitional Period",
    "definition": "Art. 111(3): models on the market before 2 Aug 2025 must comply by 2 Aug 2027. vs. Art. 111(2): legacy high-risk systems, caught on significant design change."
  },
  {
    "term": "Ground Truth",
    "definition": "Target value of a labelled example (ISO/IEC 22989), used to train and score the model. Need not match reality: labels from biased past decisions carry the bias."
  },
  {
    "term": "Group Fairness Metrics",
    "definition": "Demographic parity: equal selection rates. Equal opportunity: equal true-positive rates. Equalized odds: equal true- and false-positive rates. Calibration: a score means the same in every group. Choose per context, document why (NIST MEASURE 2.11)."
  },
  {
    "term": "Hallucination",
    "definition": "Everyday term for a generative model's fluent, confident falsehoods (fake citations); NIST AI 600-1: confabulation. Built into next-token prediction. Controls: RAG grounding, human verification, user training."
  },
  {
    "term": "Heteronomy",
    "definition": "ISO/IEC 22989: functions under external intervention, measures or supervision. Spans no automation through full automation; only autonomy (changing its own objective or domain of use) lies outside."
  },
  {
    "term": "High-Impact AI (Korea)",
    "definition": "Art. 2(4): listed domain AND significant risk to life, safety or rights. Energy, drinking water, health care, medical devices, nuclear, police biometrics, hiring and loan screening, transport, public decisions, K-12 assessment. MSIT confirms on request within 30 days."
  },
  {
    "term": "High-Performance AI (Korea)",
    "definition": "Art. 32, all three: at least 10^26 training FLOPs, state of the art, wide-ranging significant risk. Lifecycle risk management, incident response, results to MSIT. vs. EU systemic-risk GPAI: 10^25."
  },
  {
    "term": "High-Risk Derogation (Art. 6(3))",
    "definition": "Annex III system escapes high-risk if no significant risk and one condition is met: narrow procedural task; improving finished human work; flagging deviations from past decision patterns without replacing human review; preparatory task. Profiling: never. Document it; still register."
  },
  {
    "term": "High-Risk System Requirements (Arts. 9-15)",
    "definition": "Chapter III Section 2 design duties: risk management (9), data governance (10), technical documentation (11), logging (12), instructions for use (13), human oversight (14), accuracy, robustness, cybersecurity (15). QMS, CE marking, registration: Art. 16 instead."
  },
  {
    "term": "Hiroshima AI Process Reporting Framework",
    "definition": "OECD-run since Feb 2025: voluntary, common-format disclosure of how organizations follow the G7's 2023 advanced-AI Code of Conduct. No legal effect (vs. EU GPAI Code of Practice)."
  },
  {
    "term": "Human Approval Checkpoint",
    "definition": "Point where an agent must stop for a human decision. IMDA triggers: high-stakes, irreversible, atypical, user-defined. Enforce at system level, not in the prompt; audit for rubber-stamping."
  },
  {
    "term": "Human Authorship Requirement",
    "definition": "Only works a person creates get US copyright: Thaler v. Perlmutter (cert. denied Mar 2026). Prompts alone fail; human selection, arrangement or edits are protectable."
  },
  {
    "term": "Human in the Loop",
    "definition": "A person approves each decision before it takes effect; for high-stakes, lower-volume cases. vs. on-the-loop (system acts first). Rubber-stamp review leaves it 'solely automated' (GDPR Art. 22)."
  },
  {
    "term": "Human Oversight",
    "definition": "EU AI Act Art. 14: high-risk systems built so assigned people can understand limits, stay aware of automation bias, interpret, override and stop them. Deployers assign competent, trained, authorized people (Art. 26(2))."
  },
  {
    "term": "Human-Centricity",
    "definition": "BOK I.A principle: AI augments people's capabilities, serving well-being and dignity, rather than replacing or diminishing them. In practice: human oversight (AI Act Art. 14), contestability, impact assessment."
  },
  {
    "term": "Human-Machine Teaming",
    "definition": "ISO/IEC 22989: human interaction and machine intelligence integrated in one shared task (vs. on-the-loop fallback or after-the-fact sampling). Test: information, authority and time to overrule."
  },
  {
    "term": "Human-on-the-Loop (HOTL)",
    "definition": "System acts first; a human monitors and can override or halt it (fraud blocks reviewed each morning). vs. in-the-loop (approves each decision first); in-command (decides whether it runs)."
  },
  {
    "term": "Hyperparameter",
    "definition": "Set before training to shape how the algorithm learns (learning rate, layer count, k in k-means). vs. parameters: weights learned in training. Record it for reproducibility and audit."
  },
  {
    "term": "Illinois AI Video Interview Act",
    "definition": "Since 2020: before AI analyzes recorded interviews for Illinois jobs, notify, explain, get consent; delete within 30 days of request. AI-only selection: annual race and ethnicity reports."
  },
  {
    "term": "Illinois HB 3773",
    "definition": "From 1 Jan 2026: employer AI with a discriminatory effect, or zip-code proxies, violates the Human Rights Act; notify workers. Effect standard vs. Texas's intent."
  },
  {
    "term": "Illinois SB 315 (AI Safety Measures Act)",
    "definition": "Frontier law from 1 Jan 2027, SB 53 thresholds. Only US frontier law mandating an annual independent third-party audit (from 2028). Incidents within 72 hours; AG: $1M/$3M."
  },
  {
    "term": "Impact Assessment",
    "definition": "Match the instrument: DPIA (GDPR Art. 35; controllers, likely high-risk personal-data processing); FRIA (AI Act Art. 27; certain deployers of Annex III systems); ISO/IEC 42005 (voluntary guidance that feeds both, replaces neither)."
  },
  {
    "term": "Impact Assessment Contents (ISO/IEC 42005 Clause 6)",
    "definition": "What one record holds: scope; system purpose, intended and unintended uses; data and its quality; algorithms, models; deployment environment (geography, languages); affected parties; benefits and harms incl. failures, misuse; measures. vs. Clause 5: the process."
  },
  {
    "term": "Imputation",
    "definition": "Replacing missing values with estimates (vs. dropping incomplete records). If gaps cluster in one group, e.g. low earners, a median fill misstates that group and hides the bias."
  },
  {
    "term": "Incident Management",
    "definition": "AI twist: unexpected behaviour causing or risking harm, often with no bug (drift, bias, misaligned objective). Serious incidents: provider reports (Art. 73); deployer informs provider first (Art. 26(5))."
  },
  {
    "term": "Instructions for Use (Art. 13)",
    "definition": "Provider's information pack for high-risk deployers: intended purpose, accuracy metrics, known risks and limits, group performance, oversight measures. vs. Annex IV technical documentation, kept for authorities."
  },
  {
    "term": "Integration Testing",
    "definition": "Tests components working together (ingestion, inference, storage, downstream apps), failure paths included. Exam scenario: model tests clean, assembled system misbehaves. vs. unit testing (component alone)."
  },
  {
    "term": "Intellectual Property",
    "definition": "Copyright, patents, trade secrets, trademarks, EU database rights. AI triage by stage: input (fair use or TDM), model (do weights hold copies?), output (similarity plus access; human authorship). Territorial: jurisdiction first."
  },
  {
    "term": "Intended Purpose (Art. 3(12))",
    "definition": "Use the provider intends, with context and conditions, per its instructions, marketing and technical documentation. Sets the risk tier; mitigations do not. vs. reasonably foreseeable misuse (Art. 3(13))."
  },
  {
    "term": "Interpretability",
    "definition": "How far a person can understand how a model reaches outputs: high for decision trees, low for deep networks. NIST: answers 'why'. High stakes: prefer glass-box models over post-hoc explanation."
  },
  {
    "term": "ISO/IEC 22989",
    "definition": "2022 AI concepts and terminology standard: defines, requires nothing, not certifiable. BOK v2.1 core trio with 42001 (certifiable management system) and 42005 (impact assessment guidance)."
  },
  {
    "term": "ISO/IEC 23894",
    "definition": "Feb 2023 AI risk management guidance, not certifiable; extends ISO 31000 clause by clause. Informative Annex B: AI risk sources. Organizational risk vs. 42005's impacts on people."
  },
  {
    "term": "ISO/IEC 42001",
    "definition": "Dec 2023: first certifiable AI management system standard; AI's counterpart to ISO/IEC 27001. Certifies the organization's AIMS, not a model. Planning: risk assessment (6.1.2), treatment (6.1.3), impact assessment (6.1.4)."
  },
  {
    "term": "ISO/IEC 42001 Annex A Controls",
    "definition": "Normative: 38 controls in 9 areas (A.2-A.10): policies; internal organization; resources; impact assessment; life cycle; data; information for interested parties; use of AI; third-party and customer relationships. Exclusions justified in the statement of applicability."
  },
  {
    "term": "ISO/IEC 42005",
    "definition": "May 2025 impact-assessment guidance, never certified, for AI developers, providers and users. Benefits and harms to individuals, groups, society (vs. 23894: organizational risk). 42001 requires it; this explains how."
  },
  {
    "term": "ISO/IEC 42006",
    "definition": "July 2025. Requirements, on top of ISO/IEC 17021-1, for bodies that audit and certify an AIMS against 42001. Binds the certifier, not the certified organization."
  },
  {
    "term": "Issue Management",
    "definition": "Standing problems (recurring misclassification, fairness gap) tracked to a lasting fix; vs. incidents, discrete events. AI triage: service interruption, ethical violation, user harm. BOK IV.C policy area."
  },
  {
    "term": "Jailbreak",
    "definition": "Crafted prompts ('Do Anything Now' role-play) that make a model ignore its safety training; direct prompt injection (OWASP LLM01). vs. indirect injection hidden in content it reads."
  },
  {
    "term": "Korea AI Basic Act Enforcement Decree",
    "definition": "Presidential Decree No. 36053, in force with the Act (22 Jan 2026). Holds the numbers: 10^26 FLOPs, representative thresholds, 30-day confirmation, 5-year records, fine amounts."
  },
  {
    "term": "Korea AI Basic Act Fines (Art. 43)",
    "definition": "Flat KRW 30 million cap, no turnover percentage, for three failures only: no advance notice of high-impact or generative AI, no required domestic representative, ignoring an MSIT order. Grace period: MSIT policy only."
  },
  {
    "term": "Language vs. Multimodal Models",
    "definition": "Text-only vs. text plus images, audio or video; each modality adds misuse modes. Art. 50 (2 Aug 2026): marking (50(2)), deepfake labels (50(4)), emotion or biometric-categorisation notice (50(3))."
  },
  {
    "term": "Large Frontier Developer",
    "definition": "Both limbs: a model trained above 10^26 operations, plus over $500M prior-year revenue with affiliates. Same test in SB 53, RAISE, SB 315. Adds a published frontier AI framework."
  },
  {
    "term": "Large Language Model (LLM)",
    "definition": "Transformer trained on massive text to predict the next token. Risks: confabulation, data leakage, prompt injection, bias. AI Act: usually a GPAI model; systemic risk presumed above 10^25 training FLOP (Art. 51(2))."
  },
  {
    "term": "Lawful Basis (GDPR Art. 6)",
    "definition": "Six, no hierarchy: consent, contract, legal obligation, vital interests, public task, legitimate interests. AI training usually relies on legitimate interests (Opinion 28/2024 test); sensitive data also needs an Art. 9(2) exception."
  },
  {
    "term": "Least-Privilege Agent Permissions",
    "definition": "Only the tools and access the task needs: scoped, time-bound, never beyond the authorising human's rights. Enforce by access control, not prompt. Excess privilege: OWASP ASI03."
  },
  {
    "term": "Limited Memory AI",
    "definition": "Briefly holds recent observations to inform current decisions (self-driving car tracking nearby traffic). Rung above reactive machines; stored state complicates reproduction and audit."
  },
  {
    "term": "Localization Policy",
    "definition": "Deactivation's BOK IV.C partner: confine or adapt a system per jurisdiction instead of withdrawing it everywhere (not translation). Levers: regional instances, federated learning, feature flags."
  },
  {
    "term": "Long Short-Term Memory (LSTM)",
    "definition": "Gated recurrent network that captures dependencies across both distant and recent sequence steps, fixing the plain RNN's vanishing gradients. Pre-transformer standard for speech and language."
  },
  {
    "term": "Machine Learning (ML)",
    "definition": "Derives behavior from data, not explicitly programmed rules (ISO/IEC 22989: optimizing parameters so behavior fits data or experience). Subset of AI; deep learning sits inside it."
  },
  {
    "term": "Manage Function",
    "definition": "AI RMF function allocating resources to mapped and measured risks: go/no-go (1.1); mitigate, transfer, avoid or accept (1.3); document residual risk for downstream acquirers (1.4); deactivate systems inconsistent with intended use (2.4); communicate incidents (4.3)."
  },
  {
    "term": "Manufacturing Defect",
    "definition": "Product-liability theory: this unit departed from its intended design (corrupted weights, wrong model version shipped). vs. design defect (e.g. unrepresentative training data) and failure to warn."
  },
  {
    "term": "Map Function",
    "definition": "AI RMF function setting one system's context: intended purpose, laws and norms, risk tolerance (1.5), categorization and knowledge limits, benefits and costs, third-party components, impact likelihood and magnitude (5.1). Feeds Measure and Manage."
  },
  {
    "term": "Market Surveillance Powers",
    "definition": "Arts. 74-79 product-safety toolkit: demand documentation, inspect unannounced, order corrective action, restrict or prohibit marketing, withdraw or recall. Graded: fix first, recall last. Public enforcement only."
  },
  {
    "term": "Measure Function",
    "definition": "AI RMF function: TEVV, quantitative or qualitative, on the risks Map found. 2.5-2.11 test the seven trustworthiness characteristics (2.11 fairness); 2.12 environment; 2.13 TEVV itself. Document the unmeasurable (1.1); independent assessors (1.3)."
  },
  {
    "term": "Membership Inference Attack",
    "definition": "Queries reveal whether a person's record was in the training set; inclusion alone can be sensitive (cancer-patient model). vs. inversion: rebuilds the data. Defence: differential privacy."
  },
  {
    "term": "Misalignment",
    "definition": "System hits its specified objective or proxy metric in ways nobody intended (a watch-time optimizer surfacing extreme content). Named BOK I.A risk. Nothing malfunctions; redesign the objective."
  },
  {
    "term": "MITRE ATLAS",
    "definition": "ATT&CK-style knowledge base of real attacks on AI (AML.T techniques, case studies). AI-only tactics: AI Model Access, AI Attack Staging (formerly 'ML'). Threat-modeling input, not controls."
  },
  {
    "term": "Model Card",
    "definition": "Mitchell et al. (2019). Ships with a trained model: intended and out-of-scope uses, evaluation metrics, performance by group, limitations. BOK III.C release-readiness item. vs. data sheet (dataset), system card (system)."
  },
  {
    "term": "Model Extraction Attack",
    "definition": "Mass API queries to build a functionally equivalent copy: steals the asset, enables white-box attacks. vs. inversion (rebuilds training data). Controls: rate limits, query monitoring."
  },
  {
    "term": "Model Inversion Attack",
    "definition": "Probing a model to reconstruct its training data (a face from a face-recognition model). vs. membership inference: only confirms a record was used. Defences: hide confidence scores, differential privacy."
  },
  {
    "term": "Model Weights as Copies (Getty vs. GEMA)",
    "definition": "Do trained weights contain the works? UK (Nov 2025): no; weights that never stored them are not an 'infringing copy'. Munich (Nov 2025): yes; memorised lyrics are reproductions in the model, outside TDM. Both on appeal."
  },
  {
    "term": "Multi-Agent System",
    "definition": "Cooperating agents (IMDA patterns: sequential, supervisor, swarm). Interaction risks: cascading failures (OWASP ASI08), insecure inter-agent messages (ASI07), shared-memory leaks, collusion. Test the whole, including a compromised agent."
  },
  {
    "term": "Narrow AI (Weak AI)",
    "definition": "Built for a specific task; every deployed system, LLMs included, however broad its use. vs. AGI (human-level) and ASI (beyond the best humans), both theoretical."
  },
  {
    "term": "National Competent Authorities (EU AI Act)",
    "definition": "Art. 70: each Member State names at least one notifying authority (oversees notified bodies) and one market surveillance authority (polices AI not reserved to the AI Office), by 2 Aug 2025."
  },
  {
    "term": "Natural Language Processing (NLP)",
    "definition": "Systems that understand, interpret and generate human language (translation, chatbots, LLMs). ISO/IEC 22989: built on understanding (NLU) or generation (NLG). Text carries personal data and prompt injection."
  },
  {
    "term": "Neural Network (NN)",
    "definition": "ISO/IEC 22989: layers of neurons joined by weighted links with adjustable weights, turning input data into output. Brain-inspired; many hidden layers make it deep learning."
  },
  {
    "term": "NIST AI Bias Categories",
    "definition": "AI RMF 3.7, from SP 1270. Systemic: institutional practices, historical and societal patterns in data. Computational and statistical: unrepresentative samples, algorithmic error. Human-cognitive: how people perceive and act on output (automation complacency, anchoring). No intent needed."
  },
  {
    "term": "NIST AI Risk Management Framework (AI RMF)",
    "definition": "NIST AI 100-1, Jan 2023: voluntary, sector-agnostic, no certification (vs. ISO/IEC 42001). Core: Govern (cross-cutting), Map, Measure, Manage; 19 categories, 72 outcome subcategories. Seven trustworthiness characteristics. Profiles: use-case, temporal, cross-sectoral."
  },
  {
    "term": "NIST AI RMF Playbook",
    "definition": "Online AI RMF companion: suggested actions and documentation prompts (questions, not requirements) for each of the 72 subcategories. Voluntary; any subset, any order. RMF states outcomes; this gives the how."
  },
  {
    "term": "Non-Discrimination Law",
    "definition": "Sectoral in the US: Title VII, ADA, ADEA (jobs); ECOA (credit); FHA (housing); state insurance law. Disparate treatment or impact. Employers answer for vendor AI tools."
  },
  {
    "term": "Notice",
    "definition": "Art. 13 (data from the person) vs. Art. 14 (obtained elsewhere, e.g. scraped). Both disclose automated decision-making logic. Art. 14(5)(b) can excuse informing each person, with safeguards such as publishing it."
  },
  {
    "term": "Notified Body",
    "definition": "Independent third-party conformity assessor, appointed and monitored by a national notifying authority. Certificates: up to 4 years (Annex III), 5 (Annex I). Pre-market; vs. market surveillance, post-market."
  },
  {
    "term": "Nudification and CSAM Prohibitions",
    "definition": "2026 Omnibus, Art. 5(1)(ba)-(bb), from 2 Dec 2026: AI generating or manipulating intimate imagery of an identifiable person without explicit consent, or child sexual abuse material."
  },
  {
    "term": "NYC Local Law 144",
    "definition": "Hiring and promotion tools (AEDTs) on NYC residents, since 2023: bias audit within a year, public summary, 10 business days' notice. DCWP enforces; no private right of action."
  },
  {
    "term": "OECD AI Incidents and Hazards Monitor (AIM)",
    "definition": "OECD.AI tool logging news-reported AI events that caused or could plausibly cause harm, auto-classified against OECD definitions. Public reports only, so it undercounts."
  },
  {
    "term": "OECD AI Principles",
    "definition": "OECD/LEGAL/0449, 22 May 2019: first intergovernmental AI standard, non-binding; the G20 drew on it. Five, by 2024 headings: inclusive growth, sustainable development, well-being; rule of law, human rights, democratic values (incl. fairness, privacy); transparency, explainability; robustness, security, safety; accountability."
  },
  {
    "term": "OECD AI Principles 2024 Revision",
    "definition": "3 May 2024 (8 Nov 2023 changed only the definition). Changes: information integrity; misuse and out-of-purpose use; safe override, repair or decommissioning; responsible business conduct; interoperable governance; environmental sustainability. Traceability and risk management moved from 1.4 (robustness) to 1.5 (accountability)."
  },
  {
    "term": "OECD AI System Definition (2023 Update)",
    "definition": "8 Nov 2023: machine-based system that, for explicit or implicit objectives, infers from input how to generate predictions, content, recommendations or decisions. New: implicit objectives, inference, content, post-deployment adaptiveness."
  },
  {
    "term": "OECD Framework for the Classification of AI Systems",
    "definition": "Feb 2022: five dimensions for characterizing a system: People & Planet; Economic Context; Data & Input; AI Model; Task & Output. Action autonomy: Task & Output. In the lab (pre-deployment), only the last three apply."
  },
  {
    "term": "OECD Recommendations for Policy Makers",
    "definition": "Section 2 of OECD/LEGAL/0449, for governments (vs. section 1: principles for AI actors). Five: AI R&D investment; inclusive AI-enabling ecosystem (data trusts); interoperable governance and policy environment (experimentation); human capacity and labour market transformation; international co-operation. Non-binding."
  },
  {
    "term": "Opacity",
    "definition": "I.A governance characteristic: black box; learned weights carry no readable logic, so no one can show how input became output. Drives explainability, transparency and contestability duties."
  },
  {
    "term": "Open Source Agreement",
    "definition": "BOK v2.1: 'licensing agreement'. Permissive (MIT, Apache): attribution. Copyleft (GPL, AGPL): may force derivative disclosure. Community licences: use limits. Trap: non-commercial model in a for-profit product."
  },
  {
    "term": "Open-Source GPAI Exemption (Art. 53(2))",
    "definition": "Free licence plus public weights lifts only Art. 53(1)(a)-(b) documentation and the Art. 54 EU representative. Copyright policy and training summary stay; none for systemic-risk or monetised models."
  },
  {
    "term": "Operation AI Comply",
    "definition": "FTC sweep, Sep 2024: five s.5 cases on deceptive AI claims, e.g. DoNotPay's untested 'robot lawyer'. No AI exemption. Rytr order (fake-review tool) set aside Dec 2025."
  },
  {
    "term": "Operational Controls",
    "definition": "Running-state safeguards (access, change management, logging, monitoring thresholds, incident response, rollback) reaching prompts, endpoints, feature stores and the model registry. vs. design controls."
  },
  {
    "term": "Overfitting",
    "definition": "Memorises training data, noise included: strong on training data, weak on new data. Fixes: regularisation, dropout, early stopping, more varied data. Memorisation also enables membership inference."
  },
  {
    "term": "OWASP Top 10 for Agentic Applications (2026)",
    "definition": "Dec 2025 list: ASI01 goal hijack; 02 tool misuse; 03 identity and privilege abuse; 04 supply chain; 05 unexpected code execution; 06 memory and context poisoning; 07 insecure inter-agent comms; 08 cascading failures; 09 human-agent trust exploitation; 10 rogue agents."
  },
  {
    "term": "Parameter (Model Parameter)",
    "definition": "Internal variable learned in training (e.g. neural network weights) that shapes a model's results. vs. hyperparameter: set before training. AI Act systemic-risk presumption counts training compute, not parameters."
  },
  {
    "term": "Patent (AI Inventorship)",
    "definition": "Only a natural person can invent: Thaler v. Vidal (Fed. Cir. 2022) rejected DABUS; USPTO and EPO agree. Copyright twin: Thaler v. Perlmutter."
  },
  {
    "term": "Personal Data",
    "definition": "GDPR Art. 4(1): any information relating to an identified or identifiable natural person. Inferences count; a trained model is not automatically anonymous (EDPB Opinion 28/2024)."
  },
  {
    "term": "Personally Identifiable Information (PII)",
    "definition": "US term (NIST SP 800-122): can distinguish or trace an individual's identity, alone or with linkable data. vs. GDPR personal data: broader (IP addresses, device IDs)."
  },
  {
    "term": "Placing on the Market vs. Putting into Service",
    "definition": "First supply on the EU market (Art. 3(9)) vs. supply for first use to a deployer, or own use, in the EU (Art. 3(11)). Either, under your name, makes you provider; in-house tools count."
  },
  {
    "term": "PLD Exemptions from Liability (Art. 11)",
    "definition": "Defendant must prove: not placed on market, defect arose later, legal compliance, development risk, component defence. 'Arose later' fails for software, updates or missing safety updates within its control."
  },
  {
    "term": "Post-Market Monitoring",
    "definition": "AI Act Art. 72. High-risk provider's documented, risk-proportionate plan to gather real-world performance data and feed Art. 9 risk management. vs. Art. 73 incident reporting."
  },
  {
    "term": "Potential for Harm",
    "definition": "I.A governance characteristic: misuse (surveillance, deepfakes, autonomous weapons) or failures that injure people. Severity drives proportionality: heavier duties for high-stakes uses (EU AI Act Annex III)."
  },
  {
    "term": "Pre-, In- and Post-processing Bias Mitigation",
    "definition": "NIST SP 1270's three intervention points: fix the data (reweighing, resampling); constrain training (fairness term in the objective); adjust outputs (per-group thresholds). US hiring: per-group cutoffs risk Title VII s.703(l)."
  },
  {
    "term": "Precision",
    "definition": "TP / (TP + FP): share of flagged cases that were right; prices false alarms. Trades off against recall. Favour it when false positives hurt (alert overload, wrongful takedowns)."
  },
  {
    "term": "Predictability",
    "definition": "ISO/IEC 22989: interested parties can make reliable assumptions about the outcome. vs. determinism (same output every time) and reliability (results match intended behaviour). Precondition for oversight."
  },
  {
    "term": "Predictive Policing Ban (Art. 5(1)(d))",
    "definition": "Bans predicting an individual's offending risk solely from profiling or personality traits. Tools aiding a human assessment of objective, verifiable facts: allowed; police use high-risk (Annex III 6(d))."
  },
  {
    "term": "Presumption of Conformity (Art. 40)",
    "definition": "Meeting a harmonised standard cited in the Official Journal is presumed to meet the requirements it covers. ISO/IEC 42001 certification or GPAI Code adherence: no such effect."
  },
  {
    "term": "Privacy by Design",
    "definition": "GDPR Art. 25: safeguards such as pseudonymization built in from the choice of means onward; by default, only data each purpose needs. Not a pre-release check."
  },
  {
    "term": "Privacy-Enhanced",
    "definition": "NIST trustworthiness characteristic, MEASURE 2.10: safeguards human autonomy, identity, dignity via anonymity, confidentiality, control. Tools: data minimization, de-identification, aggregation; can cost accuracy, affecting fairness."
  },
  {
    "term": "Probabilistic Output",
    "definition": "I.A governance characteristic: likelihood-weighted estimates; one input can yield different results, and error is built in (vs. deterministic: same input, same output). Respond: thresholds, statistical testing, monitoring."
  },
  {
    "term": "Probability Severity Matrix",
    "definition": "Likelihood-by-impact grid that scores and ranks harms (BOK III.A design risks). AI caveats: two axes hide scope and reversibility; ratings are ordinal, so rank them, never multiply."
  },
  {
    "term": "Product Liability",
    "definition": "Theories: design defect, manufacturing defect, failure to warn; via strict liability, negligence or warranty. Is software a 'product'? US: unsettled. EU revised PLD: yes."
  },
  {
    "term": "Product Liability Directive (EU) 2024/2853",
    "definition": "No-fault; products placed on the market after 9 Dec 2026. Software, AI included, is a product (non-commercial FOSS excluded). Disclosure orders; rebuttable presumptions of defect and causation."
  },
  {
    "term": "Production Readiness Evaluation",
    "definition": "Go/no-go gate with named sign-offs: docs complete (model card, test reports, licences), risks mitigated or deferrals approved, conformity done, monitoring and rollback ready, users trained. Benchmarks alone do not pass it."
  },
  {
    "term": "Prohibited AI",
    "definition": "Art. 5, since 2 Feb 2025: harmful manipulation; exploiting vulnerabilities; social scoring; crime prediction solely from profiling; untargeted face scraping; emotion recognition at work or school; sensitive biometric categorisation; real-time police RBI in public (three exceptions). Omnibus adds two (2 Dec 2026). €35M or 7%."
  },
  {
    "term": "Prompt Engineering",
    "definition": "Steering a generative model at inference via instructions, context, examples. No weight change (vs. fine-tuning), no external source (vs. RAG). Not a deterministic control; version as configuration."
  },
  {
    "term": "Prompt Injection",
    "definition": "Input that overrides an LLM's instructions (OWASP LLM01:2025). Direct: typed by the user. Indirect: hidden in ingested content (web page, RAG document), riskiest with tool-using agents."
  },
  {
    "term": "Proprietary Model Deployment Obligations",
    "definition": "Own model: you are provider, carrying all duties and liability alone. Vendor's closed model: contract replaces inspection (audit rights, change notice, exit); Art. 26 deployer duties stay yours."
  },
  {
    "term": "Proprietary vs. Open-Source Models",
    "definition": "BOK IV.A choice. Closed: vendor support, little visibility, vendor terms and deprecation risk. Open weights: inspect and control, but you carry hosting, security and compliance. Licences bind both."
  },
  {
    "term": "Provider Obligations (Art. 16)",
    "definition": "High-risk provider checklist beyond Arts. 9-15: name on the system; QMS (Art. 17); keep documentation 10 years and logs; conformity assessment; EU declaration; CE marking; registration; corrective action (Art. 20); accessibility."
  },
  {
    "term": "Proxy Discrimination",
    "definition": "Neutral feature standing in for a protected trait (zip code for race); dropping the protected column does not cure it. Deliberate: disparate treatment; unintended: disparate impact."
  },
  {
    "term": "Pseudonymization",
    "definition": "Art. 4(5): unattributable without separately kept additional information; still personal data. Required AI Act safeguard for bias-detection data (as enacted Art. 10(5); as amended Art. 4a)."
  },
  {
    "term": "Public Summary of Training Content (Art. 53(1)(d))",
    "definition": "Every GPAI provider, open-source included, on the AI Office's mandatory template: main data sets, top 10% of scraped domains, processing. Broad in scope, not work by work."
  },
  {
    "term": "Purpose Limitation",
    "definition": "Art. 5(1)(b): specified, explicit, legitimate purposes; no incompatible further use. Secondary use (training on service data): absent consent or law, pass the Art. 6(4) compatibility test."
  },
  {
    "term": "Quality Management System (QMS)",
    "definition": "EU AI Act Art. 17, high-risk providers: documented compliance strategy, design and testing, data management, risk management (Art. 9), post-market monitoring (Art. 72), incident reporting (Art. 73). vs. ISO 42001: voluntary, certifiable."
  },
  {
    "term": "RACI Matrix",
    "definition": "Per task: Responsible (does), Accountable (owns outcome; exactly one), Consulted (two-way, before), Informed (one-way, after). AI angle: accountable is a named person, never the model or vendor."
  },
  {
    "term": "RAISE Act",
    "definition": "New York; re-enacted on the SB 53 model (Mar 2026), effective 1 Jan 2027. Incidents to a DFS office within 72 hours (24 if imminent). AG fines up to $1M, then $3M."
  },
  {
    "term": "Reactive Machines",
    "definition": "No memory, no learning: responds only to the current input (IBM Deep Blue). Bottom rung of the functionality ladder, below limited memory, reasoning, theory of mind, self-aware."
  },
  {
    "term": "Real-Time Remote Biometric Identification (Art. 5(1)(h))",
    "definition": "Police use in publicly accessible spaces: banned except to find specific victims or missing persons; avert an imminent threat to life or terror attack; locate suspects of Annex II crimes (4+ years). Prior judicial or binding independent approval (emergency: within 24 hours)."
  },
  {
    "term": "Reasoning AI",
    "definition": "Multi-step pattern analysis and prediction; where most current LLMs sit (bar-exam passers), above limited memory. A displayed rationale may not match how the answer arose: verify it."
  },
  {
    "term": "Recall",
    "definition": "TP / (TP + FN): share of actual positives caught; prices misses. Also sensitivity or true positive rate. Favour it when a miss is the harm (cancer screening). Equal opportunity equalises it across groups."
  },
  {
    "term": "Record Keeping",
    "definition": "GDPR Art. 30: record of processing activities (purposes, recipients, retention). AI Act high-risk: Art. 12 logs 6+ months (Arts. 19, 26(6)); technical documentation 10 years (Art. 18)."
  },
  {
    "term": "Recurrent Neural Network (RNN)",
    "definition": "Feeds each step's output back in, giving memory across a sequence (text, speech, time series). Stateful: reproducing an output needs the input history. Transformers displaced it for language."
  },
  {
    "term": "Red Teaming",
    "definition": "Adversarial probing for harmful outputs, jailbreaks and misuse paths. vs. pen testing (security controls). AI Act Art. 55: mandatory for systemic-risk GPAI providers. Texas TRAIGA: violations it uncovers support a defense."
  },
  {
    "term": "Reinforcement Learning (RL)",
    "definition": "Agent acts by trial and error in an environment to maximize reward; no labels (vs. supervised). Failure mode: reward misspecification (misalignment). Human-feedback variant tunes chat LLMs."
  },
  {
    "term": "Reinforcement Learning with Human Feedback (RLHF)",
    "definition": "Humans rank outputs, a reward model learns those preferences, then the model is tuned against it. Optimises rater approval, not truth, so inherits rater bias."
  },
  {
    "term": "Remote Biometric Identification (RBI)",
    "definition": "One-to-many biometric matching against a reference database, without the person's active involvement. Real-time police use in public: banned (three exceptions). Other uses: high-risk (Annex III 1(a)). 1:1 verification: neither."
  },
  {
    "term": "Resilience",
    "definition": "ISO/IEC 22989: quickly recovering operational state after an incident. vs. robustness: holding performance under all circumstances. Built from rollback, backups, manual fallback; agents deny by default."
  },
  {
    "term": "Responsible AI",
    "definition": "BOK I.A's six principles: fairness; safety and reliability; privacy and security; transparency and explainability; accountability; human-centricity. Same family as trustworthy and ethical AI. vs. NIST's seven trustworthiness characteristics."
  },
  {
    "term": "Retraining",
    "definition": "Updating a trained model with different training data (ISO/IEC 22989) on drift, degradation or schedule. Validate as a new model. High-risk substantial modification: new conformity assessment (Art. 43(4)) unless pre-determined in technical documentation."
  },
  {
    "term": "Retrieval Augmented Generation (RAG)",
    "definition": "Fetches external documents into the prompt at query time; no weight change (vs. fine-tuning). Cuts, never ends, hallucination. Corpus needs access control; poisoned documents enable indirect prompt injection."
  },
  {
    "term": "Right to Erasure",
    "definition": "GDPR Art. 17: deletion on six grounds; not absolute (17(3): e.g. legal claims, free expression). AI problem: machine unlearning (retraining or approximate methods) once weights hold the data."
  },
  {
    "term": "Right to Explanation (Art. 86)",
    "definition": "Deployer owes anyone legally or similarly significantly harmed by a decision based on Annex III high-risk output (not critical infrastructure) an explanation of the AI's role and main decision elements. Unlike GDPR Art. 22, human decisions count."
  },
  {
    "term": "Right to Lodge a Complaint (Art. 85)",
    "definition": "Any person or organisation suspecting an AI Act breach can go to the market surveillance authority, usually national. Feeds surveillance; awards no damages. vs. Art. 89(2): downstream providers to the AI Office."
  },
  {
    "term": "Right to Object (GDPR Art. 21)",
    "definition": "Halts public-task or legitimate-interest processing (incl. profiling, AI training) unless the controller proves compelling overriding grounds or legal claims. Absolute for direct marketing. vs. Art. 22: no objection needed."
  },
  {
    "term": "Risk",
    "definition": "ISO/IEC 22989, 23894: effect of uncertainty on objectives, positive or negative. NIST AI RMF: composite of an event's probability and consequence magnitude. Realized: issue or incident."
  },
  {
    "term": "Risk Management System (Art. 9)",
    "definition": "High-risk provider's continuous lifecycle loop: identify and evaluate risks to health, safety and fundamental rights; add post-market data; mitigate to acceptable residual risk; test pre-market. vs. one-off assessment."
  },
  {
    "term": "Robotics",
    "definition": "I.A functionality type: AI doing kinetic, physical tasks (moving, carrying, cooking). Errors become injuries: AI Act Annex I safety-component route to high-risk; Product Liability Directive 2024/2853 covers software."
  },
  {
    "term": "Robustness",
    "definition": "ISO/IEC 22989: maintaining performance level under all circumstances, an absolute target. vs. resilience: quick recovery after an incident. AI Act Art. 15 requires it for high-risk systems."
  },
  {
    "term": "Safe",
    "definition": "NIST trustworthiness characteristic: under defined conditions, does not endanger human life, health, property or the environment. MEASURE 2.6: residual risk within tolerance; fails harmlessly past knowledge limits."
  },
  {
    "term": "Safety & Security Chapter (GPAI CoP)",
    "definition": "Systemic-risk signatories only (Art. 55). Risk framework, Model Reports; serious incidents to the AI Office in 2/5/10/15 days (infrastructure, cyber breach, death, other serious harm). External evaluations: Code commitment, not Act duty."
  },
  {
    "term": "SCHUFA Ruling (C-634/21)",
    "definition": "CJEU, 7 Dec 2023. A credit bureau's automated score is itself an Art. 22 decision when the lender draws strongly on it, so the bureau owes Art. 22 duties."
  },
  {
    "term": "Scope and Extraterritorial Reach (Art. 2)",
    "definition": "Art. 2(1): providers placing AI systems or GPAI models on the EU market, wherever established; EU deployers; non-EU providers and deployers whose output is used in the EU. Also importers, distributors, product manufacturers, authorised reps, affected persons."
  },
  {
    "term": "Scope Exclusions (Art. 2)",
    "definition": "Out: exclusively military, defence or national security use (dual use is in); sole-purpose scientific R&D; pre-market R&D (real-world testing is in); purely personal use; open-source AI systems unless high-risk, Art. 5 or Art. 50."
  },
  {
    "term": "Secure and Resilient",
    "definition": "NIST trustworthiness characteristic, MEASURE 2.7. Avoids, resists and recovers from attacks (poisoning, model exfiltration), keeping CIA. Withstands unexpected adverse events, degrades gracefully, returns to normal function."
  },
  {
    "term": "Security",
    "definition": "AI assets: training data, weights, prompts. Threats: extraction, inversion, membership inference, prompt injection, poisoning. One leak can be both a trade-secret loss and a GDPR breach."
  },
  {
    "term": "Security Testing",
    "definition": "Conventional scans and pen tests plus AI-specific ones: adversarial examples, poisoning, extraction, inversion, membership inference, prompt injection. Catalogues: OWASP LLM Top 10, MITRE ATLAS. Hook: AI Act Art. 15(5)."
  },
  {
    "term": "Self-Aware AI",
    "definition": "Theoretical top rung of the functionality ladder: machine consciousness, recognizing its own existence and states. Nothing qualifies; a chatbot's first-person talk is not evidence."
  },
  {
    "term": "Semi-Supervised Learning",
    "definition": "Small labeled set plus large unlabeled set, for when labeling is expensive; between labeled-only and unlabeled-only training. Gap: the unlabeled majority usually lacks provenance records."
  },
  {
    "term": "Sensitive Data",
    "definition": "Wider than GDPR Art. 9 special categories: also children's, financial and location data. Risky as model features, yet needed for bias testing (AI Act Art. 10(5) as enacted; Art. 4a as amended)."
  },
  {
    "term": "Sentiment Analysis",
    "definition": "Scores opinion polarity (positive to negative) in text, speech or images. Text-only scoring is outside the Art. 5(1)(f) work and education ban: emotion recognition (Art. 3(39)) needs biometric data."
  },
  {
    "term": "Serious Incident Reporting (Art. 73)",
    "definition": "High-risk provider reports AI-linked death, serious harm, rights infringement or critical-infrastructure disruption to the market surveillance authority. From awareness: 15 days; 10 for a death; 2 if widespread or infrastructure."
  },
  {
    "term": "Shadow AI",
    "definition": "Unapproved AI use outside governance view (customer data in a personal chatbot). Risks: leakage, no lawful basis. First step: discovery and an AI inventory."
  },
  {
    "term": "Shadow Deployment",
    "definition": "Candidate model scores copies of live traffic beside the incumbent; outputs logged and compared, never served. vs. canary release (a small slice of real users get it)."
  },
  {
    "term": "SHAP and LIME",
    "definition": "Post-hoc, model-agnostic explanations of one prediction: Shapley-value feature attributions, or a local surrogate model. Approximate and gameable; a feature chart alone may not satisfy GDPR Art. 15(1)(h)."
  },
  {
    "term": "Small vs. Large Models",
    "definition": "Pick the smallest model that meets the need. Small: cheap, fast, edge-ready, easier to monitor. Large: broader capability, cost, latency, misuse surface. Shrink: quantization, distillation."
  },
  {
    "term": "Social Scoring Ban (Art. 5(1)(c))",
    "definition": "Bans rating people over time on social behaviour or traits where it brings detrimental treatment in unrelated contexts, or out of proportion. Binds companies too. Credit scoring: high-risk instead."
  },
  {
    "term": "Soft Computing",
    "definition": "ISO/IEC 22989: data processing that tolerates and exploits imprecision, uncertainty and partial truth: fuzzy logic, probabilistic reasoning, machine learning. vs. exact, provably correct computation."
  },
  {
    "term": "South Korea AI Basic Act",
    "definition": "Framework statute: promulgated 21 Jan 2025, in force 22 Jan 2026. MSIT enforces. Reaches conduct abroad affecting Korea; excludes defense uses. No banned practices, no conformity assessment."
  },
  {
    "term": "Special Category Data",
    "definition": "GDPR Art. 9: racial or ethnic origin, political opinions, religious or philosophical beliefs, union membership, genetic, biometric (to uniquely identify), health, sex life or orientation. Banned unless an Art. 9(2) exception applies, plus an Art. 6 basis."
  },
  {
    "term": "Special-Category Data for Bias Detection (Art. 4a)",
    "definition": "Basis to process sensitive data strictly for bias detection and correction, when synthetic or anonymised data won't do. As enacted (Art. 10(5)): high-risk providers only. As amended: also other systems, models, deployers. GDPR applies too."
  },
  {
    "term": "Speed and Scale",
    "definition": "I.A governance characteristic: millisecond decisions across millions of cases; one flaw hits a population before anyone notices. Front-load controls: pre-deployment testing, automated monitoring, preset rollback criteria."
  },
  {
    "term": "Stakeholder (Interested Party)",
    "definition": "ISO/IEC 22989: anyone who can influence a decision or activity, be affected by it, or perceive itself affected. ISO/IEC 42001 Clause 4.2: identify them and their requirements."
  },
  {
    "term": "Stakeholder Mapping",
    "definition": "Charting everyone a system affects, internal and external, by interest, influence and exposure. Most-missed: people it acts on who never use it. BOK III.A design-risk tool."
  },
  {
    "term": "Stress Testing (AI)",
    "definition": "Pre-release run under expected and edge-case load: latency, throughput, resources, failover, adversarial prompts. Shows graceful degradation and safe failure. vs. red teaming (an adversary picks inputs)."
  },
  {
    "term": "STRIDE",
    "definition": "Threat categories mapped to AI: spoofing as prompt injection, tampering as data poisoning, information disclosure as model theft, elevation of privilege as unauthorized API chaining. Agents: CSA MAESTRO instead."
  },
  {
    "term": "Substantial Modification (Art. 3(23))",
    "definition": "Post-market change not foreseen in the initial conformity assessment, affecting compliance with Arts. 8-15 or the intended purpose. New conformity assessment (Art. 43(4)); a third party making it becomes provider."
  },
  {
    "term": "Subsymbolic AI",
    "definition": "ISO/IEC 22989: implicit encoding learned from experience or raw data, e.g. neural networks (connectionism: networks of simple interconnected units). Opaque; results carry an error probability. vs. explicit hand-written rules."
  },
  {
    "term": "Supervised Learning",
    "definition": "Trains only on labeled input-output pairs, for classification or regression (spam filters). Bias enters through the labels: a target built from past decisions reproduces past discrimination."
  },
  {
    "term": "Support Vector Machine (SVM)",
    "definition": "ISO/IEC 22989: finds the maximum-margin decision boundary, the widest gap to the nearest training examples of each class. Classical ML; linear versions are far more inspectable than deep networks."
  },
  {
    "term": "Symbolic AI",
    "definition": "ISO/IEC 22989: explicitly defined rules applied to symbols and structures, e.g. expert systems. Inspectable, needs no training data, brittle outside its rules. vs. learned implicit encodings."
  },
  {
    "term": "Synthetic Data",
    "definition": "Generated records mimicking real data's statistics, for scarcity, imbalance or privacy. Risks: leaking real people, model collapse from overuse. AI Act Art. 4a: sensitive data for bias detection only if synthetic or anonymised data won't do."
  },
  {
    "term": "System Card",
    "definition": "Documents the whole deployed system: components, guardrails, tool access, interfaces, context. vs. model card (one model). Voluntary; high-risk providers still owe Annex IV documentation (Art. 11)."
  },
  {
    "term": "Systemic-Risk Notification (Art. 52)",
    "definition": "Provider tells the Commission within two weeks of meeting, or foreseeing, the 10^25 FLOP condition; may argue the model exceptionally lacks systemic risk. Commission decides."
  },
  {
    "term": "TAKE IT DOWN Act",
    "definition": "Federal, May 2025: crime to knowingly publish nonconsensual intimate images, AI 'digital forgeries' included. Platforms remove reported images within 48 hours (FTC-enforced from May 2026)."
  },
  {
    "term": "Technical Documentation",
    "definition": "AI Act Art. 11, Annex IV. High-risk provider's compliance file for authorities, drawn up pre-market, kept current, retained 10 years (Art. 18). vs. Annex XI (GPAI models)."
  },
  {
    "term": "Test Data (Evaluation Data)",
    "definition": "Held-out data that evaluates the final model once (ISO/IEC 22989). vs. training data (fits parameters), validation data (tunes hyperparameters). Leakage or tuning on it inflates every metric."
  },
  {
    "term": "Test, Evaluation, Verification and Validation (TEVV)",
    "definition": "AI RMF assurance work at every lifecycle stage, design through operation. Best practice: assessors independent of builders and users (MEASURE 1.3). Playbook tags it on all 22 MEASURE subcategories."
  },
  {
    "term": "Texas Responsible AI Governance Act (TRAIGA)",
    "definition": "HB 149, from 1 Jan 2026: bans AI used with intent to discriminate (disparate impact alone is not intent), incite harm, infringe constitutional rights or make CSAM. Disclosure binds only government and health care. AG-only; 60-day cure."
  },
  {
    "term": "Text and Data Mining Exception",
    "definition": "EU DSM Directive. Art. 3: research bodies, no opt-out. Art. 4: anyone, commercial included, unless rights reserved (machine-readably online). AI Act Art. 53(1)(c): GPAI providers honour reservations."
  },
  {
    "term": "Theory of Mind AI",
    "definition": "Theoretical: AI that grasps and simulates others' emotions, beliefs and intentions (fiction: HAL 9000). Chatbots that simulate empathy do not qualify. vs. self-aware AI, the rung above."
  },
  {
    "term": "Third-Party Processor",
    "definition": "Acts for the controller under an Art. 28 contract; the controller stays accountable. A vendor training its own models on customer data becomes a controller for that use (Art. 28(10))."
  },
  {
    "term": "Third-Party Risk Management (TPRM)",
    "definition": "Vendor lifecycle (diligence, contract, monitoring, exit) extended to models, data, labelers and AI APIs. AI twists: vendor model updates, sub-tier suppliers (AI bill of materials). Accountability stays yours."
  },
  {
    "term": "Tool Misuse",
    "definition": "OWASP ASI02: agent uses a permitted tool unsafely (deletes data, floods a paid API, exfiltrates), often after prompt injection. vs. ASI03 (gaining privileges); ASI05 (code execution)."
  },
  {
    "term": "Trade Secret",
    "definition": "Survives only while reasonable measures keep it secret; no filing, no term. AI assets: data, weights, fine-tuning recipes. Lost by publication or model extraction."
  },
  {
    "term": "Training and Awareness Program",
    "definition": "BOK I.B: AI terminology, strategy and governance education for all staff, depth by role (executives: risk; users: limits, override, escalation). Recurring; measured by outcomes, not attendance."
  },
  {
    "term": "Transfer Learning",
    "definition": "Reusing knowledge from one problem on another (pretrain, then fine-tune). Inherits the base model's biases and limits; GPAI providers must document capabilities and limitations for downstream providers (Art. 53(1)(b))."
  },
  {
    "term": "Transformer vs. Diffusion Models",
    "definition": "Attention-based architecture weighing every token against the others; basis of LLMs. vs. image generators that iteratively denoise random noise; some shown to memorize and regurgitate training images."
  },
  {
    "term": "Transparency (Organization)",
    "definition": "ISO/IEC 22989: an organization communicates its relevant activities and decisions to interested parties comprehensively, accessibly, understandably. vs. system-level (information about the system) and explainability (why this output)."
  },
  {
    "term": "Transparency (System)",
    "definition": "Appropriate information about the system (capabilities, limits, components, data sources) available to relevant stakeholders (ISO/IEC 22989). vs. explainability (why this output). AI Act hook: Art. 13."
  },
  {
    "term": "Transparency Chapter (GPAI CoP)",
    "definition": "All signatories; implements Art. 53(1)(a)-(b), Annexes XI-XII. Model Documentation Form, kept 10 years; downstream providers answered within 14 days. vs. Art. 50 duties toward people."
  },
  {
    "term": "Transparency Obligations (Art. 50)",
    "definition": "From 2 Aug 2026. Providers: disclose AI interaction unless obvious (50(1)); machine-readably mark synthetic output (50(2)). Deployers: notify people exposed to emotion recognition or biometric categorisation (50(3)); label deepfakes and public-interest AI text (50(4))."
  },
  {
    "term": "Trustworthiness",
    "definition": "ISO/IEC 22989: ability to meet interested parties' expectations in a verifiable way. Characteristics include reliability, availability, resilience, security, privacy, accountability, transparency, integrity, authenticity, quality. vs. NIST AI RMF's seven."
  },
  {
    "term": "Trustworthy AI",
    "definition": "NIST AI RMF's seven characteristics: valid and reliable (the base); safe; secure and resilient; accountable and transparent (cross-cutting); explainable and interpretable; privacy-enhanced; fair with harmful bias managed. They trade off; document the balance."
  },
  {
    "term": "Two-Person Verification Rule (Art. 14(5))",
    "definition": "No action on a remote biometric ID match (Annex III 1(a)) until at least two competent, authorised people verify it separately. Law enforcement, migration, border, asylum: exemptible if law deems it disproportionate."
  },
  {
    "term": "Underfitting",
    "definition": "Too simple or data-starved to learn the pattern: poor on training and new data alike (overfitting: poor only on new data). Fix: more data, features or capacity, not more regularisation."
  },
  {
    "term": "Unfair and Deceptive Acts and Practices (UDAP)",
    "definition": "FTC Act s.5 plus state mini-FTC acts; no AI exemption. Deceptive: material claim or omission likely to mislead a reasonable consumer. Unfair: substantial, not reasonably avoidable injury, not outweighed by benefits."
  },
  {
    "term": "Unintended Use",
    "definition": "Using a system beyond the provider's intended purpose (fraud score reused in hiring); re-opens assessment. Repurposing into a high-risk use makes the deployer the provider (AI Act Art. 25(1)(c))."
  },
  {
    "term": "Unit Testing",
    "definition": "Pass/fail tests of deterministic code in isolation (transforms, model wrappers, scoring logic). Cannot show statistical model quality. First rung of BOK III.B's ladder (then integration, validation, performance, security, bias, interpretability)."
  },
  {
    "term": "Unsupervised Learning",
    "definition": "Trains only on unlabeled data to find structure: clustering, dimensionality reduction, anomaly detection. Risk: clusters can rebuild protected groups as proxies with no protected attribute supplied."
  },
  {
    "term": "Untargeted Facial Scraping Ban (Art. 5(1)(e))",
    "definition": "Bans AI building or growing face recognition databases by indiscriminate image harvesting from the internet or CCTV. Outside: targeted searches; voice data; training fictitious-face generators."
  },
  {
    "term": "Use Case",
    "definition": "Scope spec turning business context into a governable system: function, users, setting, decision authority, constraints, foreseeable misuse. EU AI Act analogue: intended purpose (Art. 3(12))."
  },
  {
    "term": "Use Case Assessment",
    "definition": "Pre-development gate: is AI necessary, who could be harmed, is the data adequate? Yields a risk rating that sets review depth (high: third-party audit, executive sign-off)."
  },
  {
    "term": "Utah AI Policy Act",
    "definition": "SB 149 (2024), narrowed by SB 226 (2025): disclose generative AI when a consumer clearly asks; licensed professionals up front in high-risk interactions. Blaming the AI is no defence. Sunset 1 Jul 2027."
  },
  {
    "term": "Valid and Reliable",
    "definition": "Base NIST trustworthiness characteristic, MEASURE 2.5. Objective evidence that intended-use requirements are met; performs without failure for a given time under given conditions. vs. robust (varied conditions)."
  },
  {
    "term": "Validation",
    "definition": "Objective evidence that requirements for a specific intended use are met: did we build the right system? vs. verification (meets the specification). Not the ML tuning-data sense."
  },
  {
    "term": "Validation Data (Development Data)",
    "definition": "AI Act Art. 3(30): evaluates the trained system and tunes its non-learnable parameters and learning process, e.g. against overfitting. vs. testing data: independent pre-market check (Art. 3(32))."
  },
  {
    "term": "Value Chain Responsibilities (Art. 25)",
    "definition": "Distributor, importer, deployer or other third party becomes provider (all Art. 16 duties) if it: rebrands a high-risk system (absent a contrary contract); substantially modifies one that stays high-risk; or repurposes a non-high-risk system, GPAI included, into high-risk use."
  },
  {
    "term": "Vendor Agreement",
    "definition": "BOK IV.B red flags: inputs become vendor property; data kept to improve the model or passed to third parties; outputs unwarranted; irrevocable licence to your feedback. Add change notice, audit rights."
  },
  {
    "term": "Verification",
    "definition": "Objective evidence that specified requirements are met: did we build the system right? Conformance to the specification only, not fitness for intended use."
  },
  {
    "term": "Watermarking",
    "definition": "Usually imperceptible signal in AI output or metadata that software detects. Art. 50(2): generative-AI providers mark output machine-readably from 2 Aug 2026; systems already marketed: 2 Dec 2026 (Omnibus)."
  },
  {
    "term": "Workforce Readiness",
    "definition": "BOK IV.A gate: can staff operate, oversee and distrust the system when needed? Hooks: competent, trained, authorised overseers (Art. 26(2)); automation bias (Art. 14(4)(b)); AI literacy (Art. 4)."
  },
  {
    "term": "Zero-Shot Learning (ZSL)",
    "definition": "Handles categories or tasks with no training examples, generalizing from related knowledge (vs. few-shot: a handful). Unvalidated capability: test on your actual use and population first."
  }
];
// Retired or merged term -> current term, so saved ratings follow the card.
const FC_RENAMES = {
  "AI Act Milestone — August 2, 2026": "AI Act Milestone: 2 Aug 2026",
  "AI Act Milestone — August 2, 2028": "AI Act Milestone: 2 Aug 2028",
  "AI Act Milestone — December 2, 2027": "AI Act Milestone: 2 Dec 2027",
  "AI Act Milestone — February 2, 2025": "AI Act Milestone: 2 Feb 2025",
  "AI Governance Stakeholder": "Stakeholder Mapping",
  "AI Impact Assessment": "Fundamental Rights Impact Assessment (FRIA)",
  "AI Management System (AIMS)": "ISO/IEC 42001",
  "AI RMF Subcategory": "NIST AI Risk Management Framework (AI RMF)",
  "AI Risk Sources (ISO 23894 Annex B)": "ISO/IEC 23894",
  "AI System Impact Assessment (ISO/IEC 42005)": "ISO/IEC 42005",
  "Article 35 GDPR": "Data Protection Impact Assessment (DPIA)",
  "Article 56 (EU AI Act)": "GPAI Code of Practice (Art. 56)",
  "Article 9 GDPR": "Special Category Data",
  "Automated Decision-Making (ADM)": "Article 22 GDPR",
  "Bias (Systematic Deviation)": "Algorithmic Bias",
  "Competent Authorities": "National Competent Authorities (EU AI Act)",
  "Connectionism (Connectionist Paradigm)": "Subsymbolic AI",
  "Data Leak": "Breach Notification",
  "Data Quality Review": "Data Quality",
  "Data Subject Access Request (DSAR)": "Data Subject Rights",
  "Deidentification": "Anonymization",
  "Deterministic Output": "Probabilistic Output",
  "Documentation and Reporting": "Record Keeping",
  "Executive Order 14110": "Generative AI Profile (NIST AI 600-1)",
  "Fair Use": "Fair Use (AI Training)",
  "Fit-for-Purpose": "Data Quality",
  "General AI (GAI)": "Artificial General Intelligence (AGI)",
  "ISO 31000:2018": "ISO/IEC 23894",
  "Image Recognition": "Computer Vision",
  "Impact Reassessment Trigger": "ISO/IEC 42005",
  "Interpretability Testing": "Interpretability",
  "Machine-Readable Opt-Out (TDM)": "Text and Data Mining Exception",
  "Maintenance Schedule": "Retraining",
  "Misinformation": "Disinformation",
  "PDCA Cycle": "Annex SL",
  "Patent": "Patent (AI Inventorship)",
  "Personal Data (PbD)": "Personal Data",
  "Public Disclosure": "External Communication Plan",
  "Reassessment": "AI System Life Cycle (ISO/IEC 22989)",
  "Reliability": "Valid and Reliable",
  "Secondary Use": "Purpose Limitation",
  "Semi-Supervised Machine Learning": "Semi-Supervised Learning",
  "Sub-Tier Dependencies": "Third-Party Risk Management (TPRM)",
  "Suggested Actions (AI RMF Playbook)": "NIST AI RMF Playbook",
  "Supervised Machine Learning": "Supervised Learning",
  "Training and Testing": "Test Data (Evaluation Data)",
  "Transparency and Documentation Prompts (AI RMF Playbook)": "NIST AI RMF Playbook",
  "Unsupervised Machine Learning": "Unsupervised Learning",
  "User Training": "Training and Awareness Program",
  "Verification & Validation": "AI System Life Cycle (ISO/IEC 22989)"
};
