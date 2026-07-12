// AIGP Quiz Questions — 621 total
const ALL_QUESTIONS = [
  {
    "id": "a1-1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A music streaming service suggests playlists based on listening history, and an email provider automatically routes junk mail to a spam folder. In the AI capability taxonomy, both systems are examples of",
    "options": [
      {
        "letter": "A",
        "text": "Artificial general intelligence"
      },
      {
        "letter": "B",
        "text": "AI agents"
      },
      {
        "letter": "C",
        "text": "Narrow AI"
      },
      {
        "letter": "D",
        "text": "Reinforcement learning techniques"
      }
    ],
    "answer": "C",
    "explanation": "Both systems perform a single, highly focused task — recommending music or filtering junk mail — which is the defining trait of narrow (weak) AI. Every AI system in production today is narrow AI; general intelligence remains theoretical, and an agent would need to perceive an environment and take autonomous action toward goals.",
    "area": "ch1"
  },
  {
    "id": "a1-2",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A smart-building system continuously reads temperature, occupancy, and air-quality sensors, then autonomously adjusts ventilation and heating to meet efficiency targets. In AI terms, this system is best classified as",
    "options": [
      {
        "letter": "A",
        "text": "An expert system"
      },
      {
        "letter": "B",
        "text": "An AI agent"
      },
      {
        "letter": "C",
        "text": "A generative model"
      },
      {
        "letter": "D",
        "text": "A data pipeline"
      }
    ],
    "answer": "B",
    "explanation": "The perceive-decide-act loop is the signature of an AI agent: it senses its environment through inputs and autonomously takes actions to achieve defined goals. Expert systems apply hand-coded rules without environmental interaction, and generative models produce content rather than take actions.",
    "area": "ch1"
  },
  {
    "id": "a1-3",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An online marketplace established in the EU holds years of customer purchase records collected to fulfill orders. It now wants to train an AI model on those records to develop new marketing strategies. Under the GDPR, what must the company do before proceeding?",
    "options": [
      {
        "letter": "A",
        "text": "Nothing — the data was lawfully collected and remains available for any internal use"
      },
      {
        "letter": "B",
        "text": "Rely on the consent customers gave at checkout, since marketing is a related activity"
      },
      {
        "letter": "C",
        "text": "Update the privacy policy silently and begin training after thirty days"
      },
      {
        "letter": "D",
        "text": "Establish a lawful basis for the new purpose, such as obtaining explicit customer consent"
      }
    ],
    "answer": "D",
    "explanation": "Purpose limitation prevents silently repurposing data collected for order fulfillment into AI training for marketing. The company must establish a lawful basis for the new, incompatible purpose — in practice, obtaining explicit consent for the analytics use. Checkout consent covered the original purpose only, and a quiet policy update is not a lawful basis.",
    "area": "ch1"
  },
  {
    "id": "a1-4",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A hospital data science team trains a diagnostic model using thousands of radiology images, each tagged by physicians as showing or not showing a tumor. Which learning approach is the team using?",
    "options": [
      {
        "letter": "A",
        "text": "Supervised learning"
      },
      {
        "letter": "B",
        "text": "Unsupervised learning"
      },
      {
        "letter": "C",
        "text": "Reinforcement learning"
      },
      {
        "letter": "D",
        "text": "Zero-shot learning"
      }
    ],
    "answer": "A",
    "explanation": "Training on data where each example carries a known correct label (tumor / no tumor) is supervised learning — the model learns to map inputs to labeled outputs. Unsupervised learning finds structure in unlabeled data, and reinforcement learning improves behavior through reward signals rather than labels.",
    "area": "ch1"
  },
  {
    "id": "a1-5",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An insurance company is developing an AI model that recommends premium rates for individual applicants. Which category of harm should the company's governance program treat as the primary risk of this system?",
    "options": [
      {
        "letter": "A",
        "text": "Environmental impact from model training"
      },
      {
        "letter": "B",
        "text": "Discriminatory bias against protected groups in pricing decisions"
      },
      {
        "letter": "C",
        "text": "Erosion of employee morale in the underwriting department"
      },
      {
        "letter": "D",
        "text": "Intellectual property leakage through the model's outputs"
      }
    ],
    "answer": "B",
    "explanation": "Consequential financial decisions about individuals — pricing, credit, coverage — carry bias as their primary harm: the model may systematically disadvantage protected demographics through learned proxies. Non-discrimination laws such as fair lending and insurance regulation make this both an ethical and a legal exposure.",
    "area": "ch1"
  },
  {
    "id": "a1-6",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "The same insurance company wants a safeguard ensuring its premium-recommendation AI does not produce unfair outcomes for individual applicants. Which control most directly addresses this goal?",
    "options": [
      {
        "letter": "A",
        "text": "Human-in-the-loop review of the model's recommendations before they take effect"
      },
      {
        "letter": "B",
        "text": "Encrypting the model weights at rest and in transit"
      },
      {
        "letter": "C",
        "text": "Migrating the model to a larger foundation model"
      },
      {
        "letter": "D",
        "text": "Increasing the model's training dataset size"
      }
    ],
    "answer": "A",
    "explanation": "Human-in-the-loop review places a person between the model's recommendation and the consequential decision, allowing unfair or anomalous outputs to be caught before they affect applicants. Encryption protects confidentiality, and more data or bigger models may improve accuracy but provide no direct fairness safeguard.",
    "area": "ch1"
  },
  {
    "id": "a1-7",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A short-video platform's recommendation algorithm decides which clips each user sees next. If the algorithm develops a bias toward inflammatory political content, which societal harm is most directly at stake?",
    "options": [
      {
        "letter": "A",
        "text": "Job displacement among professional video editors"
      },
      {
        "letter": "B",
        "text": "Unauthorized collection of viewer location data"
      },
      {
        "letter": "C",
        "text": "Manipulation of public opinion through amplified, skewed content exposure"
      },
      {
        "letter": "D",
        "text": "Excessive energy consumption in the platform's data centers"
      }
    ],
    "answer": "C",
    "explanation": "A biased content-ranking algorithm shapes what millions of people see, amplifying certain narratives and suppressing others — the mechanism behind opinion manipulation and echo chambers. The other options describe real but unrelated harm categories that do not follow from ranking bias.",
    "area": "ch1"
  },
  {
    "id": "a1-8",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "A university screens applications with a deep neural network that scores each candidate. A rejected applicant formally requests the reasons for the decision. What challenge is the university most likely to face?",
    "options": [
      {
        "letter": "A",
        "text": "Restoring the application data, which is deleted immediately after each decision"
      },
      {
        "letter": "B",
        "text": "Proving the applicant actually submitted an application"
      },
      {
        "letter": "C",
        "text": "Defending the security of the admissions portal against intrusion"
      },
      {
        "letter": "D",
        "text": "Producing a meaningful explanation of why the model rejected this specific applicant"
      }
    ],
    "answer": "D",
    "explanation": "Deep neural networks are opaque: their decisions emerge from millions of learned weights rather than legible rules, so producing a faithful, specific explanation for one rejection is genuinely difficult. This opacity is precisely why explainability requirements and contestability rights exist for consequential automated decisions.",
    "area": "ch1"
  },
  {
    "id": "a1-9",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "When designing the AI system that pilots an autonomous delivery drone over populated areas, which responsible AI principle must rank above all others?",
    "options": [
      {
        "letter": "A",
        "text": "Transparency"
      },
      {
        "letter": "B",
        "text": "Safety"
      },
      {
        "letter": "C",
        "text": "Cost efficiency"
      },
      {
        "letter": "D",
        "text": "Explainability"
      }
    ],
    "answer": "B",
    "explanation": "When a physical system operates around people, safety is the overriding design priority — failures cause bodily harm, not just bad predictions. Other principles still apply, but they are subordinate to preventing physical harm in embodied, safety-critical AI.",
    "area": "ch1"
  },
  {
    "id": "a1-10",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A stadium operator deploys facial recognition so staff can greet season-ticket holders by name as they enter. Which responsible AI principle should dominate the system's design?",
    "options": [
      {
        "letter": "A",
        "text": "Privacy"
      },
      {
        "letter": "B",
        "text": "Robustness"
      },
      {
        "letter": "C",
        "text": "Human-centricity"
      },
      {
        "letter": "D",
        "text": "Accuracy"
      }
    ],
    "answer": "A",
    "explanation": "The system processes biometric identifiers of thousands of people for a convenience purpose — a maximally privacy-sensitive design. Biometric identification triggers special-category data protections, so privacy (minimization, consent, retention limits) must lead the design, outranking performance concerns.",
    "area": "ch1"
  },
  {
    "id": "a2-1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "During model development, which role in the AI value chain is primarily responsible for curating the training dataset and running fairness evaluations?",
    "options": [
      {
        "letter": "A",
        "text": "The AI deployer"
      },
      {
        "letter": "B",
        "text": "The AI developer"
      },
      {
        "letter": "C",
        "text": "The end user"
      },
      {
        "letter": "D",
        "text": "The data protection officer"
      }
    ],
    "answer": "B",
    "explanation": "Developers build and train the model, which makes dataset curation and bias testing theirs: the decisions that shape the model's behavior happen in their hands. Deployers operationalize and monitor a finished model; users operate it; the DPO advises on privacy compliance rather than performing model development.",
    "area": "ch2"
  },
  {
    "id": "a2-2",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A ten-person startup is embedding AI into its product but has no dedicated compliance staff. Which governance structure fits its context best?",
    "options": [
      {
        "letter": "A",
        "text": "A board-level AI oversight committee with quarterly formal reviews"
      },
      {
        "letter": "B",
        "text": "A centralized AI governance office holding veto authority over releases"
      },
      {
        "letter": "C",
        "text": "Postponing all governance activity until the company reaches 100 employees"
      },
      {
        "letter": "D",
        "text": "A lightweight framework with named cross-functional champions owning key duties"
      }
    ],
    "answer": "D",
    "explanation": "Governance scales to organizational context: a small startup needs clear ownership without heavy machinery, which named champions across functions provide. Board committees and governance offices fit larger organizations, and deferring governance entirely leaves the highest-risk growth phase uncontrolled.",
    "area": "ch2"
  },
  {
    "id": "a2-3",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "Which situation best demonstrates cross-functional collaboration in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "A machine learning engineer independently approving their own model for release"
      },
      {
        "letter": "B",
        "text": "The legal department circulating a memo on new AI regulations"
      },
      {
        "letter": "C",
        "text": "Privacy counsel, a product owner, and a data scientist jointly reviewing a proposed AI use case"
      },
      {
        "letter": "D",
        "text": "The IT help desk logging user complaints about a chatbot"
      }
    ],
    "answer": "C",
    "explanation": "Cross-functional collaboration means multiple disciplines sharing a governance decision — here legal, business, and technical perspectives jointly evaluating one use case. A memo is one-way communication, self-approval is the absence of governance, and complaint logging is a single-function activity.",
    "area": "ch2"
  },
  {
    "id": "a2-4",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "Why should AI governance training be tailored to each stakeholder role rather than delivered as one generic course?",
    "options": [
      {
        "letter": "A",
        "text": "Each role interacts with AI systems differently and needs guidance specific to its duties"
      },
      {
        "letter": "B",
        "text": "Generic training would violate the EU AI Act's literacy requirements"
      },
      {
        "letter": "C",
        "text": "Only engineers can understand AI governance content"
      },
      {
        "letter": "D",
        "text": "Tailored training reduces the number of governance roles the organization needs"
      }
    ],
    "answer": "A",
    "explanation": "An executive weighing AI risk, a developer embedding controls, and a user deciding when to trust output each need different knowledge — training is effective when it maps to actual duties. Role-tailoring is best practice, not a literal legal mandate, and governance literacy matters for every role, not just engineers.",
    "area": "ch2"
  },
  {
    "id": "a2-5",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "In governance terms, what distinguishes AI users from the developers and deployers of the same system?",
    "options": [
      {
        "letter": "A",
        "text": "Users select the model architecture and training algorithms"
      },
      {
        "letter": "B",
        "text": "Users own the data pipeline and retraining schedule"
      },
      {
        "letter": "C",
        "text": "Users operate the system in real situations and are often the first to notice harmful or unexpected behavior"
      },
      {
        "letter": "D",
        "text": "Users conduct the pre-deployment conformity assessments"
      }
    ],
    "answer": "C",
    "explanation": "Users sit closest to the system's real-world effects — they see the odd recommendation, the unfair pattern, the confusing output — making them a critical detection layer when trained and given reporting channels. Architecture, pipelines, and conformity assessments belong to developers and deployers.",
    "area": "ch2"
  },
  {
    "id": "a2-6",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A company building AI-assisted diagnostic tools for hospitals is deciding how formal its AI governance should be. Given the heavily regulated healthcare context, which approach is most appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Informal team agreements revisited when problems arise"
      },
      {
        "letter": "B",
        "text": "A short ethics statement published on the company website"
      },
      {
        "letter": "C",
        "text": "Delegating governance entirely to each product team's judgment"
      },
      {
        "letter": "D",
        "text": "Formal review gates, thorough documentation, and audit-ready processes"
      }
    ],
    "answer": "D",
    "explanation": "Highly regulated sectors demand governance that can withstand regulator and auditor scrutiny: documented reviews, evidence trails, and repeatable processes. Informal or purely aspirational approaches cannot demonstrate compliance where health, safety, and sectoral law are engaged.",
    "area": "ch2"
  },
  {
    "id": "a2-7",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "In a RACI matrix used to assign AI governance duties, the letter 'A' designates the person who is",
    "options": [
      {
        "letter": "A",
        "text": "Advised"
      },
      {
        "letter": "B",
        "text": "Accountable"
      },
      {
        "letter": "C",
        "text": "Assigned"
      },
      {
        "letter": "D",
        "text": "Authorized"
      }
    ],
    "answer": "B",
    "explanation": "RACI stands for Responsible, Accountable, Consulted, Informed. The Accountable party ultimately owns the outcome and answers for it — and sound practice assigns exactly one Accountable person per activity, preventing the diffuse ownership that lets governance tasks fall through gaps.",
    "area": "ch2"
  },
  {
    "id": "a2-8",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Which governance responsibility belongs specifically to the deployer of an AI system rather than its developer?",
    "options": [
      {
        "letter": "A",
        "text": "Monitoring the operating system for performance degradation, drift, and emerging risks"
      },
      {
        "letter": "B",
        "text": "Selecting the model architecture and tuning its hyperparameters"
      },
      {
        "letter": "C",
        "text": "Curating and labeling the original training dataset"
      },
      {
        "letter": "D",
        "text": "Publishing the model's architecture research"
      }
    ],
    "answer": "A",
    "explanation": "Deployers operationalize the system and own its behavior in context: monitoring performance, watching for drift, overseeing day-to-day risk. Architecture, tuning, and training-data work happen on the development side before the system ever reaches the deployer.",
    "area": "ch2"
  },
  {
    "id": "a2-9",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the primary governance benefit of reviewing proposed AI use cases with a cross-functional group rather than a single department?",
    "options": [
      {
        "letter": "A",
        "text": "It shortens the development timeline"
      },
      {
        "letter": "B",
        "text": "It eliminates the need for written documentation"
      },
      {
        "letter": "C",
        "text": "It transfers legal liability to the review group"
      },
      {
        "letter": "D",
        "text": "Risks are evaluated holistically — legal, ethical, technical, and business perspectives together"
      }
    ],
    "answer": "D",
    "explanation": "Each discipline sees failure modes the others miss: lawyers spot regulatory exposure, ethicists spot fairness issues, engineers spot technical fragility, business owners spot operational impact. Joint review surfaces the full risk picture before commitment — it does not speed development, replace documentation, or move liability.",
    "area": "ch2"
  },
  {
    "id": "a2-10",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Which element would add the most value to an organization's AI governance training program?",
    "options": [
      {
        "letter": "A",
        "text": "A screensaver reminding staff that AI policies exist"
      },
      {
        "letter": "B",
        "text": "A case study walking through a real AI governance failure, its root causes, and the response"
      },
      {
        "letter": "C",
        "text": "A generic overview of programming languages used in machine learning"
      },
      {
        "letter": "D",
        "text": "An annual email linking to the unchanged policy document"
      }
    ],
    "answer": "B",
    "explanation": "Concrete failure case studies teach stakeholders what governance breakdown actually looks like, why it happened, and how to respond — converting abstract policy into recognizable patterns. Passive reminders and generic technical overviews build neither judgment nor accountability.",
    "area": "ch2"
  },
  {
    "id": "a3-1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "An organization is drafting its AI governance policy set. Which statement reflects the correct scope for lifecycle-based governance?",
    "options": [
      {
        "letter": "A",
        "text": "Governance activities should concentrate on the deployment stage, where risk materializes"
      },
      {
        "letter": "B",
        "text": "Governance applies only to systems that process personal or sensitive data"
      },
      {
        "letter": "C",
        "text": "Accountability and oversight mechanisms should attach to every stage, from use-case assessment through retirement"
      },
      {
        "letter": "D",
        "text": "Governance decisions belong to the data science team that best understands the models"
      }
    ],
    "answer": "C",
    "explanation": "Lifecycle-based governance is continuous: risks are introduced at every stage — use-case selection, data acquisition, training, release, operation, retirement — so accountability must attach at each of them. Deployment-only oversight misses design-stage risk, data-sensitivity scoping misses non-privacy harms, and single-team ownership defeats multidisciplinary review.",
    "area": "ch3"
  },
  {
    "id": "a3-2",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "A company strips names and contact details from customer records before using them to train a model, then treats the data as anonymous. What residual privacy risk should its policies address?",
    "options": [
      {
        "letter": "A",
        "text": "Anonymized data categorically may not be used for AI training in the EU"
      },
      {
        "letter": "B",
        "text": "The model or remaining attributes may enable re-identification of individuals through inference"
      },
      {
        "letter": "C",
        "text": "Anonymization always degrades model accuracy below usable levels"
      },
      {
        "letter": "D",
        "text": "Anonymized records consume substantially more storage than raw records"
      }
    ],
    "answer": "B",
    "explanation": "Removing direct identifiers is not anonymization: combinations of remaining quasi-identifiers, linkage with external datasets, and model-level attacks like inversion can re-identify individuals. Policies must treat claimed-anonymous training data as a live privacy risk requiring evaluation, not a solved problem.",
    "area": "ch3"
  },
  {
    "id": "a3-3",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Which requirement belongs in an organization's policy for managing third-party AI risk?",
    "options": [
      {
        "letter": "A",
        "text": "Vendors must supply model documentation and evidence of training-data provenance"
      },
      {
        "letter": "B",
        "text": "All third-party AI tools are banned to eliminate the risk category"
      },
      {
        "letter": "C",
        "text": "Vendor self-attestation questionnaires are accepted as sufficient assurance"
      },
      {
        "letter": "D",
        "text": "Only vendors holding an ISO/IEC 42001 certificate may be considered"
      }
    ],
    "answer": "A",
    "explanation": "Documentation and data provenance let the organization actually evaluate a vendor's model for legality, fairness, and fitness — the substance of third-party AI diligence. Blanket bans forfeit legitimate capability, unverified self-attestation is not assurance, and a single-certification gate both over-restricts and under-examines.",
    "area": "ch3"
  },
  {
    "id": "a3-4",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "An AI policy requires scheduled checks for model drift and performance degradation. To which lifecycle stage does this policy primarily apply?",
    "options": [
      {
        "letter": "A",
        "text": "Use-case approval"
      },
      {
        "letter": "B",
        "text": "Data acquisition"
      },
      {
        "letter": "C",
        "text": "Model training"
      },
      {
        "letter": "D",
        "text": "Post-deployment operation and monitoring"
      }
    ],
    "answer": "D",
    "explanation": "Drift only exists once a model meets live data, so drift-monitoring policy governs the operational stage: watching deployed behavior against the world as it changes. Earlier stages have their own controls — approval gates, data rights checks, validation — but drift detection is inherently post-deployment.",
    "area": "ch3"
  },
  {
    "id": "a3-5",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "When contracting for an AI-enabled service, which clause most strengthens the customer's governance position?",
    "options": [
      {
        "letter": "A",
        "text": "A clause exempting the vendor from responsibility for discriminatory outcomes"
      },
      {
        "letter": "B",
        "text": "A requirement that the vendor disclose its complete proprietary source code"
      },
      {
        "letter": "C",
        "text": "Audit rights plus disclosure of data sources and fairness-testing evidence"
      },
      {
        "letter": "D",
        "text": "A confidentiality term limited to ninety days after signature"
      }
    ],
    "answer": "C",
    "explanation": "Audit access and transparency about data origins and fairness testing give the customer the means to verify claims and manage inherited risk — the practical core of AI vendor contracting. Bias exemptions shift risk the wrong way, full source disclosure is unnecessary and unobtainable, and truncated confidentiality protects no one.",
    "area": "ch3"
  },
  {
    "id": "a3-6",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Why do privacy policies written before the AI era often fall short when applied to machine learning systems?",
    "options": [
      {
        "letter": "A",
        "text": "They prohibit all processing of personal data"
      },
      {
        "letter": "B",
        "text": "They apply only to paper records rather than digital ones"
      },
      {
        "letter": "C",
        "text": "They cover security incidents but not availability targets"
      },
      {
        "letter": "D",
        "text": "They never contemplated that trained models retain and can leak what they learned from data"
      }
    ],
    "answer": "D",
    "explanation": "Legacy policies govern data in databases; they say nothing about data persisting inside model weights, memorization leaking through outputs, or what a deletion request means for a trained model. That retention-in-the-model gap is a defining reason AI demands policy updates.",
    "area": "ch3"
  },
  {
    "id": "a3-7",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "Why do mature procurement programs assign risk tiers to AI vendors?",
    "options": [
      {
        "letter": "A",
        "text": "To fast-track contracts with the largest suppliers"
      },
      {
        "letter": "B",
        "text": "To scale the depth of diligence and ongoing controls to each vendor's risk level"
      },
      {
        "letter": "C",
        "text": "To rank vendors for co-marketing opportunities"
      },
      {
        "letter": "D",
        "text": "To cap the total number of vendor relationships"
      }
    ],
    "answer": "B",
    "explanation": "Tiering is proportionality applied to procurement: a vendor processing sensitive data or supporting critical functions warrants deep diligence and continuous monitoring, while a low-stakes tool gets a lighter path. Uniform treatment either wastes effort or under-controls the vendors that matter.",
    "area": "ch3"
  },
  {
    "id": "a3-8",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Which policy mechanism most directly enforces purpose limitation across an organization's AI data pipelines?",
    "options": [
      {
        "letter": "A",
        "text": "A use-case registry that records each dataset's approved applications and blocks unregistered uses"
      },
      {
        "letter": "B",
        "text": "A mandate that all datasets be stored on-premises"
      },
      {
        "letter": "C",
        "text": "A standing authorization for any internal team to reuse existing data"
      },
      {
        "letter": "D",
        "text": "A rule that only aggregated data may ever be collected"
      }
    ],
    "answer": "A",
    "explanation": "Purpose limitation fails through quiet repurposing, and a use-case registry attacks exactly that: every dataset's approved purposes are recorded, so a new use is visible, reviewable, and blockable. Storage location doesn't govern purpose, and blanket reuse authorization is the violation itself, formalized.",
    "area": "ch3"
  },
  {
    "id": "a3-9",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Which practice would most effectively reduce bias during AI model development?",
    "options": [
      {
        "letter": "A",
        "text": "Optimizing exclusively for overall accuracy on the full test set"
      },
      {
        "letter": "B",
        "text": "Encrypting the training data before model training begins"
      },
      {
        "letter": "C",
        "text": "Replacing all real training data with synthetic data"
      },
      {
        "letter": "D",
        "text": "Evaluating model performance separately across diverse demographic subgroups"
      }
    ],
    "answer": "D",
    "explanation": "Bias hides inside aggregate metrics: a model can post excellent overall accuracy while failing one subgroup badly. Disaggregated evaluation across demographic slices is what surfaces disparate performance so it can be corrected. Encryption addresses confidentiality, not fairness, and synthetic data inherits the biases of whatever generated it.",
    "area": "ch3"
  },
  {
    "id": "a3-10",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "In AI privacy risk, a 'model inversion' attack refers to",
    "options": [
      {
        "letter": "A",
        "text": "Flipping a model's classification labels after deployment"
      },
      {
        "letter": "B",
        "text": "Retraining a model on adversarially augmented data"
      },
      {
        "letter": "C",
        "text": "Exploiting access to a model to reconstruct the data it was trained on"
      },
      {
        "letter": "D",
        "text": "Reversing a model's optimization objective during fine-tuning"
      }
    ],
    "answer": "C",
    "explanation": "Model inversion turns the model itself into a disclosure channel: by systematically querying it, an attacker reconstructs training inputs — recognizable faces from a recognition model, sensitive records from a classifier. It is a core reason 'the model is not the data' fails as a privacy argument.",
    "area": "ch3"
  },
  {
    "id": "a4-1",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A wellness app wants its AI to process users' health information. Under GDPR Article 9, which condition most commonly legitimizes processing this special category data?",
    "options": [
      {
        "letter": "A",
        "text": "Implied consent inferred from continued app usage"
      },
      {
        "letter": "B",
        "text": "Explicit consent given by the user for the health-data processing"
      },
      {
        "letter": "C",
        "text": "The company's legitimate commercial interest in product improvement"
      },
      {
        "letter": "D",
        "text": "Performance of the app's standard terms of service"
      }
    ],
    "answer": "B",
    "explanation": "Article 9 prohibits processing special categories like health data unless a specific condition applies, and for consumer contexts the workhorse condition is explicit consent — a clear affirmative statement specific to the sensitive processing. Implied consent fails the standard entirely, and legitimate interests is not an Article 9 condition.",
    "area": "ch4"
  },
  {
    "id": "a4-2",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "In the AI context, the GDPR principle of purpose limitation means",
    "options": [
      {
        "letter": "A",
        "text": "Personal data is collected for specified, explicit purposes and not reused in incompatible ways"
      },
      {
        "letter": "B",
        "text": "Each AI system may serve no more than one business function"
      },
      {
        "letter": "C",
        "text": "Data collection should maximize future analytical options"
      },
      {
        "letter": "D",
        "text": "Third-party datasets may be used without examining their original collection purpose"
      }
    ],
    "answer": "A",
    "explanation": "Purpose limitation binds data to the purposes stated at collection; a new use — such as training an AI model — requires either compatibility with the original purpose or a fresh lawful basis. It limits data reuse, not system functionality, and it makes 'collect everything for later' the anti-pattern rather than the strategy.",
    "area": "ch4"
  },
  {
    "id": "a4-3",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Under GDPR Article 35, a Data Protection Impact Assessment is required when",
    "options": [
      {
        "letter": "A",
        "text": "Any personal data is processed for any purpose, however routine"
      },
      {
        "letter": "B",
        "text": "A system is used only by employees rather than customers"
      },
      {
        "letter": "C",
        "text": "Processing — such as large-scale use of special category data or systematic profiling — is likely to pose high risk to individuals' rights"
      },
      {
        "letter": "D",
        "text": "A low-risk administrative tool is rolled out to a single department"
      }
    ],
    "answer": "C",
    "explanation": "The DPIA trigger is likely high risk to individuals: Article 35 names systematic and extensive automated evaluation, large-scale special-category processing, and systematic public monitoring as canonical cases — AI profiling routinely qualifies. Routine, low-risk processing does not require one, whoever the users are.",
    "area": "ch4"
  },
  {
    "id": "a4-4",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "Within an AI project, the party acting as the GDPR data controller is the one that",
    "options": [
      {
        "letter": "A",
        "text": "Operates the cloud infrastructure hosting the training pipeline"
      },
      {
        "letter": "B",
        "text": "Determines why and how personal data will be processed"
      },
      {
        "letter": "C",
        "text": "Responds to security incidents affecting the dataset"
      },
      {
        "letter": "D",
        "text": "Writes the machine learning code under contract"
      }
    ],
    "answer": "B",
    "explanation": "The controller decides purposes and means — why the data is processed and how — and carries accountability for compliance. Hosting, incident response, and contracted development are activities a processor can perform on instructions; the decision-making role is what confers controller status, whatever the contract says.",
    "area": "ch4"
  },
  {
    "id": "a4-5",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "Which of the following data uses would demand the most stringent safeguards under privacy law?",
    "options": [
      {
        "letter": "A",
        "text": "Saving users' preferred display language"
      },
      {
        "letter": "B",
        "text": "A/B testing two versions of a landing page"
      },
      {
        "letter": "C",
        "text": "Scanning shoppers' faces to identify individuals entering a store"
      },
      {
        "letter": "D",
        "text": "Collecting email addresses for a requested newsletter"
      }
    ],
    "answer": "C",
    "explanation": "Facial identification processes biometric data to uniquely identify people — special category data under GDPR Article 9 — and does so in a surveillance context, compounding the sensitivity. Display preferences, layout tests, and requested newsletters involve ordinary data with low risk.",
    "area": "ch4"
  },
  {
    "id": "a4-6",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An AI system analyzing supermarket purchase patterns can predict which customers are likely pregnant. What privacy risk does this illustrate?",
    "options": [
      {
        "letter": "A",
        "text": "Overfitting to the training population's purchasing habits"
      },
      {
        "letter": "B",
        "text": "Excessive data retention beyond the stated storage period"
      },
      {
        "letter": "C",
        "text": "Inadequate encryption of the transaction database"
      },
      {
        "letter": "D",
        "text": "Inference of sensitive attributes the organization never collected, triggering heightened legal obligations"
      }
    ],
    "answer": "D",
    "explanation": "The system derives health-related information from ordinary shopping data — and inferred special-category data carries the same legal protections as collected special-category data. Inference risk means an organization can stumble into Article 9 territory without ever asking a sensitive question.",
    "area": "ch4"
  },
  {
    "id": "a4-7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "Which practice exemplifies privacy by design in an AI system?",
    "options": [
      {
        "letter": "A",
        "text": "Commissioning a privacy review after the system reaches production"
      },
      {
        "letter": "B",
        "text": "Building privacy protections into every lifecycle stage, from problem definition through monitoring"
      },
      {
        "letter": "C",
        "text": "Perfecting model accuracy first and retrofitting privacy controls afterward"
      },
      {
        "letter": "D",
        "text": "Transferring privacy compliance duties to the hosting vendor"
      }
    ],
    "answer": "B",
    "explanation": "Privacy by design — codified in GDPR Article 25 — makes privacy a design requirement from the start: minimization in the pipeline, protective defaults, retention limits in the architecture. Post-hoc reviews and retrofits are the pattern it exists to replace, and compliance accountability cannot be delegated to a vendor.",
    "area": "ch4"
  },
  {
    "id": "a4-8",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "Which scenario best demonstrates the data minimization principle in AI development?",
    "options": [
      {
        "letter": "A",
        "text": "Training on de-identified transaction records limited to the fields the model's purpose requires"
      },
      {
        "letter": "B",
        "text": "Ingesting every available customer attribute in case it proves useful later"
      },
      {
        "letter": "C",
        "text": "Merging datasets from unrelated products to enrich user profiles"
      },
      {
        "letter": "D",
        "text": "Retaining complete user histories indefinitely to support future models"
      }
    ],
    "answer": "A",
    "explanation": "Minimization means adequate, relevant, and limited to what the purpose needs — narrow fields, de-identified where possible, kept no longer than necessary. Speculative collection, cross-product enrichment, and indefinite retention are each the opposite instinct.",
    "area": "ch4"
  },
  {
    "id": "a4-9",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A controller engages an external AI service that will process its customers' personal data. What does GDPR Article 28 require?",
    "options": [
      {
        "letter": "A",
        "text": "A data processing agreement binding the vendor to documented instructions, security measures, sub-processor controls, and audit rights"
      },
      {
        "letter": "B",
        "text": "Transfer of all privacy liability to the vendor"
      },
      {
        "letter": "C",
        "text": "Publication of the vendor's model logic in the customer privacy notice"
      },
      {
        "letter": "D",
        "text": "A license permitting the vendor unlimited reuse of the training data"
      }
    ],
    "answer": "A",
    "explanation": "Article 28 requires a binding contract with any processor covering instructions, confidentiality, security, sub-processing, data subject rights support, breach notice, deletion or return, and audit rights. Accountability stays with the controller — it cannot be contracted away, and unlimited vendor data reuse would violate the instruction requirement outright.",
    "area": "ch4"
  },
  {
    "id": "a4-10",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A loan applicant is denied by a fully automated credit model with no human involvement. Under GDPR Article 22, what is the applicant entitled to?",
    "options": [
      {
        "letter": "A",
        "text": "Disclosure of the model's source code and training corpus"
      },
      {
        "letter": "B",
        "text": "Human intervention in the decision, the chance to present their view, and the right to contest the outcome"
      },
      {
        "letter": "C",
        "text": "Automatic reversal of the denial and approval of the loan"
      },
      {
        "letter": "D",
        "text": "Erasure of all their personal data from the lender's systems"
      }
    ],
    "answer": "B",
    "explanation": "For solely automated decisions with legal or similarly significant effects, Article 22's safeguards guarantee human intervention, the ability to express one's point of view, and the right to contest. It does not grant source-code access, automatic reversal, or erasure — it guarantees a human route of challenge.",
    "area": "ch4"
  },
  {
    "id": "a5-1",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A startup scrapes professional stock-photography sites and trains an image generator on the collected works without licenses. Which intellectual property concern does this raise most directly?",
    "options": [
      {
        "letter": "A",
        "text": "Patent infringement of the photographers' camera technology"
      },
      {
        "letter": "B",
        "text": "Copyright infringement through unauthorized reproduction of protected works in training"
      },
      {
        "letter": "C",
        "text": "Trademark dilution of the photography sites' brands"
      },
      {
        "letter": "D",
        "text": "Trade secret misappropriation of the sites' recommendation algorithms"
      }
    ],
    "answer": "B",
    "explanation": "Copying protected creative works into a training corpus without permission implicates the reproduction right, and fair use for AI training remains contested rather than settled. Patents, trademarks, and trade secrets protect different subject matter that scraping photographs does not touch.",
    "area": "ch5"
  },
  {
    "id": "a5-2",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A company uses an AI screening tool to rank job applicants. Under US federal employment law, which applicant characteristic is legally protected against discrimination?",
    "options": [
      {
        "letter": "A",
        "text": "Religion"
      },
      {
        "letter": "B",
        "text": "Commute distance"
      },
      {
        "letter": "C",
        "text": "Typing speed"
      },
      {
        "letter": "D",
        "text": "Preferred work schedule"
      }
    ],
    "answer": "A",
    "explanation": "Title VII of the Civil Rights Act protects race, color, religion, sex, and national origin in employment — AI screening tools must be evaluated for disparate impact across these categories. Commute distance, typing speed, and schedule preferences are not protected classes, though they can act as risky proxies for ones that are.",
    "area": "ch5"
  },
  {
    "id": "a5-3",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An online retailer's support 'representatives' are actually AI chatbots, and customers are never told. Under FTC Act Section 5, why is this practice risky?",
    "options": [
      {
        "letter": "A",
        "text": "Chatbots are prohibited from handling payment disputes"
      },
      {
        "letter": "B",
        "text": "The FTC requires all AI systems to be registered before consumer use"
      },
      {
        "letter": "C",
        "text": "AI-generated text is automatically classified as advertising"
      },
      {
        "letter": "D",
        "text": "Concealing that customers are interacting with AI can constitute a deceptive practice"
      }
    ],
    "answer": "D",
    "explanation": "Section 5 prohibits deceptive practices, and the FTC has signaled that leading reasonable consumers to believe they are dealing with a human when they are not can qualify. There is no federal AI registration regime — the exposure comes from the misleading impression, not from using AI itself.",
    "area": "ch5"
  },
  {
    "id": "a5-4",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "An autonomous lawn mower's obstacle-detection logic cannot reliably distinguish small children from shrubbery — a flaw present in every unit as specified. In product liability terms, this is a",
    "options": [
      {
        "letter": "A",
        "text": "Manufacturing defect"
      },
      {
        "letter": "B",
        "text": "Marketing defect"
      },
      {
        "letter": "C",
        "text": "Design defect"
      },
      {
        "letter": "D",
        "text": "Documentation defect"
      }
    ],
    "answer": "C",
    "explanation": "The danger lives in the product's intended design — every correctly built unit carries it — which is the definition of a design defect. A manufacturing defect would be a deviation in particular units from an otherwise safe design; failure to warn (marketing defect) concerns uncommunicated risks, not the flawed specification itself.",
    "area": "ch5"
  },
  {
    "id": "a5-5",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A fintech's AI model systematically offers worse credit terms to applicants from certain neighborhoods. Which US statute most directly prohibits this discriminatory credit outcome?",
    "options": [
      {
        "letter": "A",
        "text": "The Digital Millennium Copyright Act"
      },
      {
        "letter": "B",
        "text": "The Sherman Antitrust Act"
      },
      {
        "letter": "C",
        "text": "The Equal Credit Opportunity Act"
      },
      {
        "letter": "D",
        "text": "The Computer Fraud and Abuse Act"
      }
    ],
    "answer": "C",
    "explanation": "ECOA prohibits discrimination in credit decisions and applies with full force to algorithmic underwriting — neighborhood-based disparities often proxy for race, triggering fair-lending scrutiny. The other statutes govern copyright, competition, and computer intrusion, none of which reach credit discrimination.",
    "area": "ch5"
  },
  {
    "id": "a5-6",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A wellness app's chatbot dispenses specific treatment recommendations while presenting itself as a friendly companion, with no disclosure or medical licensure. Which body of law does this most directly implicate?",
    "options": [
      {
        "letter": "A",
        "text": "Consumer protection law prohibiting unfair and deceptive practices"
      },
      {
        "letter": "B",
        "text": "Copyright law governing the chatbot's responses"
      },
      {
        "letter": "C",
        "text": "Antitrust law on market concentration"
      },
      {
        "letter": "D",
        "text": "Securities law on forward-looking statements"
      }
    ],
    "answer": "A",
    "explanation": "Misleading consumers about the nature and qualifications behind health advice is classic UDAP territory — deception with a real risk of consumer injury. Sector health law may compound the exposure, but the direct hook among the options is consumer protection.",
    "area": "ch5"
  },
  {
    "id": "a5-7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "In an AI product liability suit, which defense argument is LEAST likely to succeed?",
    "options": [
      {
        "letter": "A",
        "text": "The plaintiff substantially misused the product beyond any foreseeable use"
      },
      {
        "letter": "B",
        "text": "The AI's behavior was too complex and emergent for the manufacturer to predict"
      },
      {
        "letter": "C",
        "text": "The alleged harm was not caused by the product"
      },
      {
        "letter": "D",
        "text": "The product conformed to a reasonable, state-of-the-art design"
      }
    ],
    "answer": "B",
    "explanation": "'Our own system was too complex to predict' is an admission, not a defense — manufacturers remain responsible for delivering reasonably safe products, and unpredictability argues for more testing and constraint, not absolution. Unforeseeable misuse, lack of causation, and reasonable design are recognized defenses.",
    "area": "ch5"
  },
  {
    "id": "a5-8",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Which US agency has issued guidance making clear that employers remain responsible for discrimination produced by the AI hiring tools they use?",
    "options": [
      {
        "letter": "A",
        "text": "The Federal Communications Commission"
      },
      {
        "letter": "B",
        "text": "The U.S. Copyright Office"
      },
      {
        "letter": "C",
        "text": "The Equal Employment Opportunity Commission"
      },
      {
        "letter": "D",
        "text": "The Securities and Exchange Commission"
      }
    ],
    "answer": "C",
    "explanation": "The EEOC enforces federal employment anti-discrimination law and has stated explicitly that using a vendor's AI tool does not transfer responsibility — the employer answers for disparate impact in its hiring process. The FCC, Copyright Office, and SEC regulate different domains.",
    "area": "ch5"
  },
  {
    "id": "a5-9",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An insurer's pricing model never uses race as an input, but it heavily weights postal code and shopping patterns. What is the key legal risk?",
    "options": [
      {
        "letter": "A",
        "text": "The model violates data minimization by using too few variables"
      },
      {
        "letter": "B",
        "text": "Postal codes are copyrighted works requiring a license"
      },
      {
        "letter": "C",
        "text": "The model's accuracy will be too low for regulatory approval"
      },
      {
        "letter": "D",
        "text": "The variables may act as proxies for protected characteristics, producing disparate impact"
      }
    ],
    "answer": "D",
    "explanation": "Facially neutral features that correlate strongly with protected traits let a model reconstruct and discriminate on those traits without ever seeing them — the proxy-discrimination pattern that disparate impact doctrine catches. Excluding the protected attribute is not a defense when its proxies carry the signal.",
    "area": "ch5"
  },
  {
    "id": "a5-10",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A vendor advertises that its product 'uses AI to detect fraud with 99.9% accuracy.' What does the FTC expect before such a claim is published?",
    "options": [
      {
        "letter": "A",
        "text": "Certification of the claim by an accredited standards body"
      },
      {
        "letter": "B",
        "text": "Competent and reliable evidence substantiating the claim, as with any advertising claim"
      },
      {
        "letter": "C",
        "text": "Nothing, provided the product genuinely uses machine learning"
      },
      {
        "letter": "D",
        "text": "Registration of the claim in a federal AI marketing database"
      }
    ],
    "answer": "B",
    "explanation": "The FTC applies ordinary advertising-substantiation doctrine to AI: performance claims need competent and reliable evidence before they are made. There is no certification or registration regime — and 'it plausibly might be true' has never been the standard.",
    "area": "ch5"
  },
  {
    "id": "a6-1",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Under the EU AI Act, which of the following practices falls in the prohibited (unacceptable-risk) category?",
    "options": [
      {
        "letter": "A",
        "text": "An AI copilot that assists pilots with weather-routing decisions"
      },
      {
        "letter": "B",
        "text": "A recommender system suggesting films on a streaming service"
      },
      {
        "letter": "C",
        "text": "Live facial-recognition scanning of crowds in a public square by authorities, outside the Act's narrow exceptions"
      },
      {
        "letter": "D",
        "text": "A machine-vision system inspecting welds on a factory line"
      }
    ],
    "answer": "C",
    "explanation": "Real-time remote biometric identification in publicly accessible spaces is on the Article 5 prohibited list, permitted only under narrow, judicially controlled law-enforcement exceptions. Routing assistance, media recommenders, and industrial inspection are minimal- or limited-risk uses.",
    "area": "ch6"
  },
  {
    "id": "a6-2",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Before a high-risk AI system reaches the EU market, what documentation must its provider prepare and maintain?",
    "options": [
      {
        "letter": "A",
        "text": "Technical documentation covering the system's design, risk management, data, testing, and performance per Annex IV"
      },
      {
        "letter": "B",
        "text": "A patent filing covering the system's core algorithms"
      },
      {
        "letter": "C",
        "text": "An environmental audit of training-related energy use"
      },
      {
        "letter": "D",
        "text": "A shareholder disclosure describing AI-related revenue"
      }
    ],
    "answer": "A",
    "explanation": "High-risk providers must produce comprehensive technical documentation — design, development process, risk management, data governance, testing and performance evidence — kept current and available to authorities for ten years. Patents, environmental audits, and investor disclosures are not AI Act conformity requirements.",
    "area": "ch6"
  },
  {
    "id": "a6-3",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "Under the EU AI Act, the entity that develops an AI system and places it on the EU market under its own name or trademark is the",
    "options": [
      {
        "letter": "A",
        "text": "Distributor"
      },
      {
        "letter": "B",
        "text": "Deployer"
      },
      {
        "letter": "C",
        "text": "Importer"
      },
      {
        "letter": "D",
        "text": "Provider"
      }
    ],
    "answer": "D",
    "explanation": "That is the Act's definition of the provider — the central duty-bearer owning conformity assessment, documentation, CE marking, and post-market monitoring. Importers bring foreign systems in, distributors pass them along, and deployers use them professionally; note that rebranding or substantially modifying a system can convert those roles into provider.",
    "area": "ch6"
  },
  {
    "id": "a6-4",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A hospital adopts a third-party high-risk AI system for triage. As the deployer, which obligation belongs to the hospital?",
    "options": [
      {
        "letter": "A",
        "text": "Affixing the CE marking to the system"
      },
      {
        "letter": "B",
        "text": "Performing the pre-market conformity assessment"
      },
      {
        "letter": "C",
        "text": "Assigning trained staff to exercise meaningful human oversight during use"
      },
      {
        "letter": "D",
        "text": "Registering the system's architecture with the European Patent Office"
      }
    ],
    "answer": "C",
    "explanation": "Deployers owe operational duties: using the system per its instructions, ensuring competent human oversight, monitoring operation, and reporting serious incidents. Conformity assessment and CE marking are the provider's pre-market obligations, and patent registration is not an AI Act concept.",
    "area": "ch6"
  },
  {
    "id": "a6-5",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "Which EU AI Act risk category carries essentially no new mandatory obligations?",
    "options": [
      {
        "letter": "A",
        "text": "Minimal-risk AI"
      },
      {
        "letter": "B",
        "text": "High-risk AI"
      },
      {
        "letter": "C",
        "text": "GPAI with systemic risk"
      },
      {
        "letter": "D",
        "text": "Limited-risk AI"
      }
    ],
    "answer": "A",
    "explanation": "Minimal-risk systems — spam filters, game AI, inventory forecasting — are left essentially unregulated, with voluntary codes encouraged. Limited-risk systems carry transparency duties, high-risk systems carry the full compliance program, and systemic-risk GPAI carries evaluation and mitigation obligations.",
    "area": "ch6"
  },
  {
    "id": "a6-6",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What subjects a general-purpose AI model to the EU AI Act's enhanced 'systemic risk' obligations?",
    "options": [
      {
        "letter": "A",
        "text": "Releasing the model under an open-source license"
      },
      {
        "letter": "B",
        "text": "A systemic-risk designation — presumed when training compute exceeds 10^25 FLOPs"
      },
      {
        "letter": "C",
        "text": "Training the model on data collected within the EU"
      },
      {
        "letter": "D",
        "text": "Deploying the model in more than one member state"
      }
    ],
    "answer": "B",
    "explanation": "Enhanced obligations — model evaluations, adversarial testing, risk mitigation, incident reporting, cybersecurity — attach to GPAI with systemic risk, presumed at training compute above 10^25 FLOPs or by Commission designation. Licensing model, data geography, and deployment breadth are not the trigger.",
    "area": "ch6"
  },
  {
    "id": "a6-7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An EU company imports a high-risk AI system built by a non-EU developer. Before placing it on the market, the importer must verify that",
    "options": [
      {
        "letter": "A",
        "text": "The system was retrained on European data"
      },
      {
        "letter": "B",
        "text": "The developer holds an EU software patent"
      },
      {
        "letter": "C",
        "text": "The system's source code has been escrowed with a notified body"
      },
      {
        "letter": "D",
        "text": "The provider completed conformity assessment and the system bears CE marking with required documentation"
      }
    ],
    "answer": "D",
    "explanation": "Importers are a verification checkpoint: they confirm the foreign provider performed conformity assessment, drew up the technical documentation, and affixed CE marking before the system enters the EU market. They verify conformity evidence — they do not re-perform the assessment, and no data-localization or escrow duty exists.",
    "area": "ch6"
  },
  {
    "id": "a6-8",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "An enterprise deploys a prohibited AI practice in the EU. What is the maximum administrative fine the AI Act authorizes?",
    "options": [
      {
        "letter": "A",
        "text": "€7.5 million or 1% of worldwide annual turnover"
      },
      {
        "letter": "B",
        "text": "€15 million or 3% of worldwide annual turnover"
      },
      {
        "letter": "C",
        "text": "€35 million or 7% of worldwide annual turnover, whichever is higher"
      },
      {
        "letter": "D",
        "text": "€20 million or 4% of worldwide annual turnover"
      }
    ],
    "answer": "C",
    "explanation": "Prohibited-practice violations sit at the top of the penalty ladder: up to €35 million or 7% of global annual turnover, whichever is higher. The 15/3 tier covers most other obligations, 7.5/1 covers misleading information to authorities — and 20/4 is GDPR's ceiling, a deliberate distractor.",
    "area": "ch6"
  },
  {
    "id": "a6-9",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Under the EU AI Act, a distributor of an AI system becomes exposed to liability when it",
    "options": [
      {
        "letter": "A",
        "text": "Continues making the system available despite reason to believe it is non-conforming"
      },
      {
        "letter": "B",
        "text": "Sells the system to more than one member state"
      },
      {
        "letter": "C",
        "text": "Offers the system alongside competing products"
      },
      {
        "letter": "D",
        "text": "Provides customer support in only one language"
      }
    ],
    "answer": "A",
    "explanation": "Distributors must verify CE marking and documentation and must not supply systems they have reason to consider non-compliant — awareness plus inaction is the liability trigger, and they must take corrective action or withdraw. Multi-state sales, product assortment, and support languages carry no such consequence.",
    "area": "ch6"
  },
  {
    "id": "a6-10",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "In the GPAI context, what function does a model card serve?",
    "options": [
      {
        "letter": "A",
        "text": "It certifies the model's compliance in place of conformity assessment"
      },
      {
        "letter": "B",
        "text": "It documents the model's characteristics, intended uses, and known limitations for downstream users"
      },
      {
        "letter": "C",
        "text": "It records the model's ownership for intellectual property registries"
      },
      {
        "letter": "D",
        "text": "It lists the hardware the model requires to run"
      }
    ],
    "answer": "B",
    "explanation": "A model card is transparency documentation: capabilities, training data summary, evaluation results, limitations, and appropriate uses — exactly the information downstream providers and deployers need to use the model responsibly. It informs; it does not certify, register ownership, or specify hardware.",
    "area": "ch6"
  },
  {
    "id": "a7-1",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What role do the OECD AI Principles play in the global AI governance landscape?",
    "options": [
      {
        "letter": "A",
        "text": "They impose binding regulations on OECD member countries"
      },
      {
        "letter": "B",
        "text": "They define laboratory testing protocols for AI safety claims"
      },
      {
        "letter": "C",
        "text": "They classify AI systems into enforceable risk tiers"
      },
      {
        "letter": "D",
        "text": "They provide a voluntary, values-based foundation for trustworthy AI that later frameworks build on"
      }
    ],
    "answer": "D",
    "explanation": "The OECD Principles are the first intergovernmental AI standard: five non-binding values (inclusive growth, human rights and fairness, transparency and explainability, robustness and safety, accountability) plus policy recommendations. They set shared vocabulary and values — risk tiers and enforcement came later, in instruments like the EU AI Act that drew on them.",
    "area": "ch7"
  },
  {
    "id": "a7-2",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A team working with the NIST AI RMF is characterizing an AI system's intended purpose, deployment context, stakeholders, and potential risks. Which Core function are they performing?",
    "options": [
      {
        "letter": "A",
        "text": "Govern"
      },
      {
        "letter": "B",
        "text": "Measure"
      },
      {
        "letter": "C",
        "text": "Map"
      },
      {
        "letter": "D",
        "text": "Manage"
      }
    ],
    "answer": "C",
    "explanation": "Map is the context function: establish what the system is for, where it operates, who it affects, and what risks arise in that frame. Govern is the cross-cutting culture-and-accountability layer, Measure assesses and tracks the mapped risks, and Manage prioritizes and responds to them.",
    "area": "ch7"
  },
  {
    "id": "a7-3",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "How does NIST ARIA relate to the NIST AI RMF?",
    "options": [
      {
        "letter": "A",
        "text": "ARIA is an evaluation program supplying testing methods and metrics that complement the RMF's risk process"
      },
      {
        "letter": "B",
        "text": "ARIA supersedes the RMF for high-risk sectors"
      },
      {
        "letter": "C",
        "text": "ARIA is the certification scheme organizations use to prove RMF compliance"
      },
      {
        "letter": "D",
        "text": "ARIA translates the RMF into binding federal regulation"
      }
    ],
    "answer": "A",
    "explanation": "ARIA evaluates AI systems in realistic conditions — model testing, red-teaming, and field testing — producing the kind of empirical evidence the RMF's Measure function calls for. It complements rather than replaces the framework, and neither instrument certifies or legally binds anyone.",
    "area": "ch7"
  },
  {
    "id": "a7-4",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What makes ISO/IEC 42001 distinctive among AI governance instruments?",
    "options": [
      {
        "letter": "A",
        "text": "It catalogs the capabilities of frontier AI models"
      },
      {
        "letter": "B",
        "text": "It defines a certifiable AI management system that organizations can be audited against"
      },
      {
        "letter": "C",
        "text": "It is the only legally binding AI standard in the EU"
      },
      {
        "letter": "D",
        "text": "It focuses exclusively on privacy engineering for AI"
      }
    ],
    "answer": "B",
    "explanation": "ISO/IEC 42001 is the first certifiable AI management system standard — the ISO 27001 of AI: Annex SL structure, PDCA cycle, required risk and impact assessments, and third-party certification audits. It is voluntary, organization-wide, and management-system-scoped rather than model-scoped.",
    "area": "ch7"
  },
  {
    "id": "a7-5",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "An AI contract dispute turns on what 'AI system' and 'trained model' precisely mean. Which standard exists to settle exactly this kind of terminology question?",
    "options": [
      {
        "letter": "A",
        "text": "ISO/IEC 27001"
      },
      {
        "letter": "B",
        "text": "ISO/IEC 23894"
      },
      {
        "letter": "C",
        "text": "ISO/IEC 22989"
      },
      {
        "letter": "D",
        "text": "ISO 31000"
      }
    ],
    "answer": "C",
    "explanation": "ISO/IEC 22989 is the AI vocabulary standard: 110+ formal definitions of AI concepts, lifecycle stages, roles, and trustworthiness properties, created so parties argue about substance rather than semantics. 27001 governs information security, 23894 gives AI risk guidance, and 31000 is generic risk management.",
    "area": "ch7"
  },
  {
    "id": "a7-6",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Which G7 initiative produced international guidance — including a voluntary code of conduct — for organizations developing advanced AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "The Bletchley Declaration"
      },
      {
        "letter": "B",
        "text": "The Hiroshima AI Process"
      },
      {
        "letter": "C",
        "text": "The Basel Framework"
      },
      {
        "letter": "D",
        "text": "The Ramsar Convention"
      }
    ],
    "answer": "B",
    "explanation": "The G7's Hiroshima AI Process (2023) produced international guiding principles and a voluntary code of conduct for developers of advanced AI and foundation models. Bletchley was the UK AI Safety Summit declaration (broader, non-G7), Basel governs banking, and Ramsar protects wetlands.",
    "area": "ch7"
  },
  {
    "id": "a7-7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "The IEEE 7000 series of standards addresses which dimension of AI and autonomous systems?",
    "options": [
      {
        "letter": "A",
        "text": "Semiconductor fabrication tolerances"
      },
      {
        "letter": "B",
        "text": "Network transport protocols for model serving"
      },
      {
        "letter": "C",
        "text": "Financial reporting of AI development costs"
      },
      {
        "letter": "D",
        "text": "Embedding ethical considerations into system design and engineering"
      }
    ],
    "answer": "D",
    "explanation": "IEEE 7000-series standards operationalize ethics-by-design: translating human values and ethical concerns into concrete engineering requirements during system development. They are engineering-process standards, not hardware, networking, or accounting specifications.",
    "area": "ch7"
  },
  {
    "id": "a7-8",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "NIST's ARIA program measures AI systems against trustworthiness attributes. Which of the following is one of them?",
    "options": [
      {
        "letter": "A",
        "text": "Quarterly revenue contribution"
      },
      {
        "letter": "B",
        "text": "Interpretability of system outputs"
      },
      {
        "letter": "C",
        "text": "Compatibility with legacy mainframes"
      },
      {
        "letter": "D",
        "text": "Brand recognition of the developer"
      }
    ],
    "answer": "B",
    "explanation": "ARIA evaluates trustworthiness characteristics — interpretability, robustness, fairness, safety — through model testing, red-teaming, and field testing with real users. Commercial and infrastructure attributes like revenue or mainframe compatibility are outside the trustworthiness construct.",
    "area": "ch7"
  },
  {
    "id": "a7-9",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An organization already certified against ISO/IEC 42001 asks what ISO/IEC 23894 would add. What is the correct answer?",
    "options": [
      {
        "letter": "A",
        "text": "Detailed AI risk management guidance — extending ISO 31000 — to deepen the risk discipline inside the management system"
      },
      {
        "letter": "B",
        "text": "A second certification covering the same management system scope"
      },
      {
        "letter": "C",
        "text": "Legal enforcement mechanisms for AI incidents"
      },
      {
        "letter": "D",
        "text": "Sector-specific rules applicable only to manufacturing"
      }
    ],
    "answer": "A",
    "explanation": "The two standards divide labor: 42001 builds the certifiable management system; 23894 supplies non-certifiable guidance on the AI risk management process itself, mirroring and extending ISO 31000 with AI-specific risk sources, objectives, and lifecycle mapping. It adds depth, not a second certificate.",
    "area": "ch7"
  },
  {
    "id": "a7-10",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "Why has UNESCO's Recommendation on the Ethics of AI gained particular traction in developing countries?",
    "options": [
      {
        "letter": "A",
        "text": "It supplies government-subsidized computing infrastructure"
      },
      {
        "letter": "B",
        "text": "It legally requires technology transfer from AI-producing nations"
      },
      {
        "letter": "C",
        "text": "Its emphasis on human rights, equity, and cultural diversity offers a values framework where national AI law is absent"
      },
      {
        "letter": "D",
        "text": "It bans the import of high-risk AI systems into signatory states"
      }
    ],
    "answer": "C",
    "explanation": "UNESCO's Recommendation (adopted by 190+ states) centers human rights, inclusion, sustainability, and cultural diversity — providing a ready-made, values-driven governance reference for countries without domestic AI legislation. It is normative, not a funding program, technology-transfer mandate, or import regime.",
    "area": "ch7"
  },
  {
    "id": "a8-1",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "Why should an organization document an AI system's lifecycle from the earliest design conversations onward?",
    "options": [
      {
        "letter": "A",
        "text": "To reduce cloud storage expenditure"
      },
      {
        "letter": "B",
        "text": "To create the traceability that governance, audits, and incident investigations depend on"
      },
      {
        "letter": "C",
        "text": "To satisfy open-source license attribution rules"
      },
      {
        "letter": "D",
        "text": "To shorten the deployment timeline"
      }
    ],
    "answer": "B",
    "explanation": "Lifecycle documentation is governance's memory: it lets auditors verify decisions, investigators trace failures to root causes, and regulators confirm compliance. Contemporaneous records are evidence; retroactive reconstruction is scrambling. Storage costs, licensing, and speed are not what documentation exists for.",
    "area": "ch8"
  },
  {
    "id": "a8-2",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "When establishing the business context for a proposed AI system, which question matters most?",
    "options": [
      {
        "letter": "A",
        "text": "Whether the model will use transformers or gradient boosting"
      },
      {
        "letter": "B",
        "text": "Which cloud region will host the training jobs"
      },
      {
        "letter": "C",
        "text": "Which organizational objectives the system will serve, and how success will be measured"
      },
      {
        "letter": "D",
        "text": "How many data scientists the vendor employs"
      }
    ],
    "answer": "C",
    "explanation": "Business context anchors everything downstream: objectives define success criteria, which define validation thresholds, monitoring targets, and eventually retirement triggers. Architecture and hosting are means, decided after the ends are clear — a system without defined objectives cannot even be evaluated.",
    "area": "ch8"
  },
  {
    "id": "a8-3",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "The primary purpose of conducting an AI impact assessment during system design is to",
    "options": [
      {
        "letter": "A",
        "text": "Surface and mitigate potential harms, compliance gaps, and ethical issues before resources are committed"
      },
      {
        "letter": "B",
        "text": "Generate marketing material describing the system's benefits"
      },
      {
        "letter": "C",
        "text": "Qualify the system for an ISO 27001 certificate"
      },
      {
        "letter": "D",
        "text": "Estimate the project's return on investment for the board"
      }
    ],
    "answer": "A",
    "explanation": "Impact assessments are the look-before-you-leap instrument: identify who could be affected and how, evaluate severity and likelihood, and change the design while change is cheap. They are risk instruments, not marketing collateral, security certifications, or financial models.",
    "area": "ch8"
  },
  {
    "id": "a8-4",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "Why do designers build human-in-the-loop checkpoints into AI systems that make consequential decisions?",
    "options": [
      {
        "letter": "A",
        "text": "To increase the system's inference throughput"
      },
      {
        "letter": "B",
        "text": "To remove the need for audit logging"
      },
      {
        "letter": "C",
        "text": "To guarantee a human can review, override, or halt the system's decisions in critical situations"
      },
      {
        "letter": "D",
        "text": "To lower the system's energy consumption"
      }
    ],
    "answer": "C",
    "explanation": "HITL design gives humans real intervention power at the moments that matter — reviewing high-stakes outputs before they take effect and overriding failures. It costs throughput rather than adding it, complements rather than replaces logging, and exists for accountability and safety.",
    "area": "ch8"
  },
  {
    "id": "a8-5",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "An organization weighing whether to build its own AI model instead of licensing one should recognize which downside of the proprietary path?",
    "options": [
      {
        "letter": "A",
        "text": "Losing access to third-party APIs"
      },
      {
        "letter": "B",
        "text": "Being forced to open-source the resulting model"
      },
      {
        "letter": "C",
        "text": "Automatically lower model accuracy"
      },
      {
        "letter": "D",
        "text": "Carrying the full regulatory, legal, and ethical obligations of the system's creator"
      }
    ],
    "answer": "D",
    "explanation": "Building your own model makes you its provider: conformity duties, documentation, liability for training-data rights, and answerability for its behavior all land in-house rather than being shared with a vendor. Control comes bundled with accountability — nothing about building in-house forces open-sourcing or degrades accuracy.",
    "area": "ch8"
  },
  {
    "id": "a8-6",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "During design-phase risk assessment, what does a probability/severity matrix contribute?",
    "options": [
      {
        "letter": "A",
        "text": "It selects the optimal neural network architecture"
      },
      {
        "letter": "B",
        "text": "It scores risks by likelihood and impact so treatment effort goes to the worst quadrant first"
      },
      {
        "letter": "C",
        "text": "It calculates the licensing value of the model's IP"
      },
      {
        "letter": "D",
        "text": "It schedules the project's development sprints"
      }
    ],
    "answer": "B",
    "explanation": "The matrix plots each identified risk on likelihood and severity axes, making priorities visible: high-likelihood/high-impact risks get treated first, trivial ones get accepted. It is a prioritization tool for finite mitigation resources, not an engineering or financial instrument.",
    "area": "ch8"
  },
  {
    "id": "a8-7",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "Which design choice most directly improves an AI system's explainability for its users?",
    "options": [
      {
        "letter": "A",
        "text": "Surfacing feature-importance information and plain-language reasons alongside each output"
      },
      {
        "letter": "B",
        "text": "Encrypting the model weights against tampering"
      },
      {
        "letter": "C",
        "text": "Publishing the raw training code without commentary"
      },
      {
        "letter": "D",
        "text": "Compressing the model for faster inference"
      }
    ],
    "answer": "A",
    "explanation": "Explainability means users can understand why an output happened — feature-importance scoring and contextual, human-readable explanations deliver exactly that. Weight encryption serves security, uncommented code serves nobody, and compression serves latency; none helps a user comprehend a decision.",
    "area": "ch8"
  },
  {
    "id": "a8-8",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "During design-phase risk identification, what does stakeholder mapping contribute that other techniques miss?",
    "options": [
      {
        "letter": "A",
        "text": "It benchmarks the model against competitor systems"
      },
      {
        "letter": "B",
        "text": "It documents the system's API endpoints"
      },
      {
        "letter": "C",
        "text": "It selects the training algorithm"
      },
      {
        "letter": "D",
        "text": "It reveals how different groups are differently affected by the system, exposing risks concentrated on specific populations"
      }
    ],
    "answer": "D",
    "explanation": "Risk is unevenly distributed: a system fine for most users may seriously harm one group. Stakeholder mapping enumerates everyone affected or influential — internal and external — and how, so impact assessments and design decisions account for differential effects instead of average ones.",
    "area": "ch8"
  },
  {
    "id": "a8-9",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "Which evidence best demonstrates that a newly built AI model is ready for production deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Documented results from shadow-mode operation alongside the existing process, meeting predefined criteria"
      },
      {
        "letter": "B",
        "text": "A press release announcing the model's launch date"
      },
      {
        "letter": "C",
        "text": "Strong benchmark scores reported verbally by the development team"
      },
      {
        "letter": "D",
        "text": "An executive's confidence after a product demonstration"
      }
    ],
    "answer": "A",
    "explanation": "Shadow mode runs the model on real inputs without affecting real decisions — producing documented, real-world evidence of behavior at zero user risk, judged against criteria set in advance. Announcements, undocumented scores, and demo impressions are not evidence.",
    "area": "ch8"
  },
  {
    "id": "a8-10",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "A software firm builds an AI screening system in-house and runs it in its own EU hiring process. Under the EU AI Act, the firm's role is",
    "options": [
      {
        "letter": "A",
        "text": "Distributor only"
      },
      {
        "letter": "B",
        "text": "Provider — and simultaneously deployer — carrying the provider's compliance obligations"
      },
      {
        "letter": "C",
        "text": "Importer"
      },
      {
        "letter": "D",
        "text": "Exempt, because the system is not sold externally"
      }
    ],
    "answer": "B",
    "explanation": "Developing a system and putting it into service under your own name makes you its provider even without selling it — and using it professionally makes you its deployer too. Both duty sets apply, and in-house use is no exemption; employment screening is squarely Annex III high-risk.",
    "area": "ch8"
  },
  {
    "id": "a9-1",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "Within AI development, what is data governance fundamentally meant to guarantee?",
    "options": [
      {
        "letter": "A",
        "text": "That models train faster on optimized storage"
      },
      {
        "letter": "B",
        "text": "That the data feeding models is lawfully held, high quality, and fit for the intended use"
      },
      {
        "letter": "C",
        "text": "That data scientists can access any dataset without friction"
      },
      {
        "letter": "D",
        "text": "That marketing teams receive richer customer profiles"
      }
    ],
    "answer": "B",
    "explanation": "Data governance is the upstream half of model governance: confirming legal authority to use each source, measuring quality, verifying fitness for the specific purpose, and assigning stewardship. Most model failures trace back to data failures — governance exists to catch them before training does.",
    "area": "ch9"
  },
  {
    "id": "a9-2",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "A regulator asks where a training dataset came from, how it was collected, and under what terms. Which data governance concept answers those questions?",
    "options": [
      {
        "letter": "A",
        "text": "Data provenance"
      },
      {
        "letter": "B",
        "text": "Data drift"
      },
      {
        "letter": "C",
        "text": "Feature engineering"
      },
      {
        "letter": "D",
        "text": "Data augmentation"
      }
    ],
    "answer": "A",
    "explanation": "Provenance is the data's birth certificate: origin, collection method, date, and the legal terms attached at acquisition. It is recorded when data arrives because it cannot be reconstructed later — and it underwrites every downstream claim that the training data was lawfully sourced.",
    "area": "ch9"
  },
  {
    "id": "a9-3",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A fraud-detection model is evaluated on a dataset where only 1% of transactions are fraudulent. Which metric gives the most honest picture of its performance?",
    "options": [
      {
        "letter": "A",
        "text": "Overall accuracy"
      },
      {
        "letter": "B",
        "text": "Training loss"
      },
      {
        "letter": "C",
        "text": "Inference latency"
      },
      {
        "letter": "D",
        "text": "F1 score"
      }
    ],
    "answer": "D",
    "explanation": "With 99% legitimate transactions, a model that flags nothing scores 99% accuracy while catching zero fraud — accuracy flatters do-nothing models on imbalanced data. The F1 score, balancing precision (trustworthy flags) and recall (fraud actually caught), exposes what accuracy hides.",
    "area": "ch9"
  },
  {
    "id": "a9-4",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A model passes validation with strong aggregate metrics, but the team never evaluated performance by demographic subgroup. What risk remains hidden?",
    "options": [
      {
        "letter": "A",
        "text": "Severe performance gaps for specific subpopulations, masked by the healthy averages"
      },
      {
        "letter": "B",
        "text": "Excessive memory consumption during inference"
      },
      {
        "letter": "C",
        "text": "License incompatibility in the training data"
      },
      {
        "letter": "D",
        "text": "Slow convergence in future retraining runs"
      }
    ],
    "answer": "A",
    "explanation": "Aggregate metrics are averages, and averages hide minorities: a model can post excellent overall numbers while failing one demographic badly. Subgroup validation is the only way to see disparate performance before deployment turns it into disparate impact.",
    "area": "ch9"
  },
  {
    "id": "a9-5",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "How do data lineage and data provenance differ?",
    "options": [
      {
        "letter": "A",
        "text": "Lineage applies to structured data; provenance to unstructured data"
      },
      {
        "letter": "B",
        "text": "They are interchangeable terms for the same record"
      },
      {
        "letter": "C",
        "text": "Provenance records where data originated; lineage tracks its journey through transformations to the training set"
      },
      {
        "letter": "D",
        "text": "Provenance is technical metadata; lineage is a legal concept"
      }
    ],
    "answer": "C",
    "explanation": "Provenance is the origin story — source, method, terms; lineage is the biography — every transformation, join, and filter between source and model. Together they let an organization trace any model behavior back through its data, and neither substitutes for the other.",
    "area": "ch9"
  },
  {
    "id": "a9-6",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "Which situation is an example of an adversarial risk to an AI system?",
    "options": [
      {
        "letter": "A",
        "text": "The model converges slowly during training"
      },
      {
        "letter": "B",
        "text": "Response times spike during peak traffic"
      },
      {
        "letter": "C",
        "text": "The model underperforms on rare classes"
      },
      {
        "letter": "D",
        "text": "An attacker submits subtly perturbed inputs engineered to force misclassification"
      }
    ],
    "answer": "D",
    "explanation": "Adversarial examples are deliberately crafted inputs — often imperceptibly altered — that flip a model's output. They are attacks, not accidents, which is why AI security testing includes adversarial robustness alongside conventional measures. Slow convergence, latency, and class imbalance are engineering problems, not adversaries.",
    "area": "ch9"
  },
  {
    "id": "a9-7",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "In counterfactual fairness testing, what exactly is being checked?",
    "options": [
      {
        "letter": "A",
        "text": "Whether the model performs equally well on future data"
      },
      {
        "letter": "B",
        "text": "Whether the model's decision for an individual would change if their protected attribute were different, all else equal"
      },
      {
        "letter": "C",
        "text": "Whether the model responds consistently to randomly generated inputs"
      },
      {
        "letter": "D",
        "text": "Whether inference latency varies across user groups"
      }
    ],
    "answer": "B",
    "explanation": "Counterfactual fairness asks the individual-level question: hold everything else constant, flip the protected attribute — does the decision change? If it does, the attribute (or its proxies) is driving outcomes. It complements group-level statistical metrics like demographic parity with a causal, per-person lens.",
    "area": "ch9"
  },
  {
    "id": "a9-8",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A model performs flawlessly in isolated testing, yet the team still runs integration tests before release. What do integration tests catch that model tests cannot?",
    "options": [
      {
        "letter": "A",
        "text": "Failures in how the model interacts with pipelines, APIs, interfaces, and downstream systems"
      },
      {
        "letter": "B",
        "text": "Errors in the model's mathematical foundations"
      },
      {
        "letter": "C",
        "text": "Legal noncompliance in the training data"
      },
      {
        "letter": "D",
        "text": "Excess GPU costs during training"
      }
    ],
    "answer": "A",
    "explanation": "Users experience the system, not the model: a perfect model fed by a silently reformatting pipeline or presented through a bias-amplifying interface still produces harm. Integration testing validates the assembled whole — data flows, API contracts, UI behavior, downstream consumption — which is where component-level assurance goes to die.",
    "area": "ch9"
  },
  {
    "id": "a9-9",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "During model training, which practice gives the earliest warning that learning is going wrong?",
    "options": [
      {
        "letter": "A",
        "text": "Reviewing production deployment logs"
      },
      {
        "letter": "B",
        "text": "Load-testing the inference API"
      },
      {
        "letter": "C",
        "text": "Watching convergence behavior and loss curves as training proceeds"
      },
      {
        "letter": "D",
        "text": "Auditing the project's cloud spend"
      }
    ],
    "answer": "C",
    "explanation": "Loss curves are training's vital signs: divergence, plateaus, or a validation loss climbing while training loss falls (overfitting's signature) appear during training, when intervention is cheap. Deployment logs and API load tests come later in the lifecycle; they cannot see a training run failing in real time.",
    "area": "ch9"
  },
  {
    "id": "a9-10",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What value do model cards add during testing and deployment?",
    "options": [
      {
        "letter": "A",
        "text": "They replace holdout testing with documented claims"
      },
      {
        "letter": "B",
        "text": "They accelerate training convergence"
      },
      {
        "letter": "C",
        "text": "They tune hyperparameters automatically"
      },
      {
        "letter": "D",
        "text": "They give stakeholders structured transparency into the model's intended use, performance, and limitations"
      }
    ],
    "answer": "D",
    "explanation": "A model card is standardized disclosure: purpose, training data summary, evaluation results across conditions, known limitations, and ethical considerations — the information deployers and reviewers need to use the model responsibly. Documentation informs judgment; it never substitutes for the testing itself.",
    "area": "ch9"
  },
  {
    "id": "a10-1",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "In AI governance documentation, the model card's job is to",
    "options": [
      {
        "letter": "A",
        "text": "Serve as the legal contract between provider and deployer"
      },
      {
        "letter": "B",
        "text": "Encrypt and checkpoint the model's weights"
      },
      {
        "letter": "C",
        "text": "Record the model's intended use, training data, evaluation results, and known limitations in a standard format"
      },
      {
        "letter": "D",
        "text": "Prove conformity in place of required technical documentation"
      }
    ],
    "answer": "C",
    "explanation": "The model card is the model's disclosure document — a standardized summary of what it is for, what it was trained on, how it performs, and where it fails. It complements rather than replaces contracts and regulatory technical documentation, and it has nothing to do with securing weights.",
    "area": "ch10"
  },
  {
    "id": "a10-2",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A hospital wants AI-powered monitoring on bedside devices where decisions are needed in milliseconds and patient data must not leave the room. Which deployment environment fits?",
    "options": [
      {
        "letter": "A",
        "text": "A multi-tenant public cloud region"
      },
      {
        "letter": "B",
        "text": "A shared hosting platform"
      },
      {
        "letter": "C",
        "text": "A centralized on-premises data center in another building"
      },
      {
        "letter": "D",
        "text": "Edge deployment on the device itself"
      }
    ],
    "answer": "D",
    "explanation": "Edge inference runs on the local device: no network round-trip (millisecond latency) and no transmission of sensitive data off-device (privacy) — exactly this scenario's constraints. The trade-off is harder updates and monitoring, which is why edge suits latency- and privacy-critical uses specifically.",
    "area": "ch10"
  },
  {
    "id": "a10-3",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "Why is version control considered a governance requirement, not just an engineering convenience, in AI deployment?",
    "options": [
      {
        "letter": "A",
        "text": "It blocks users from reading outdated manuals"
      },
      {
        "letter": "B",
        "text": "It creates the traceable history of models, data, code, and configurations that reproducibility, rollback, and audits depend on"
      },
      {
        "letter": "C",
        "text": "It encrypts models before release"
      },
      {
        "letter": "D",
        "text": "It collects user feedback from production"
      }
    ],
    "answer": "B",
    "explanation": "Governance questions are historical questions — which model version made this decision, trained on which data snapshot, under which configuration? Version control across models, data, code, and config is what makes those questions answerable, and rollback possible. Encryption and feedback collection are different controls entirely.",
    "area": "ch10"
  },
  {
    "id": "a10-4",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A credit model's accuracy decays even though incoming application data looks statistically identical to the training data. Economic conditions have changed how applicant features relate to default. This is",
    "options": [
      {
        "letter": "A",
        "text": "Concept drift"
      },
      {
        "letter": "B",
        "text": "Data drift"
      },
      {
        "letter": "C",
        "text": "Overfitting"
      },
      {
        "letter": "D",
        "text": "Data poisoning"
      }
    ],
    "answer": "A",
    "explanation": "The inputs haven't shifted — the world has: the relationship between features and outcomes changed underneath the model, which is concept drift. Data drift would show shifted input distributions; overfitting is a training-time failure; poisoning is an attack. The remedy is retraining on data reflecting the new reality.",
    "area": "ch10"
  },
  {
    "id": "a10-5",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What characterizes a retrieval-augmented generation (RAG) deployment?",
    "options": [
      {
        "letter": "A",
        "text": "The model retrains itself nightly on user conversations"
      },
      {
        "letter": "B",
        "text": "The model is compressed to fit on edge hardware"
      },
      {
        "letter": "C",
        "text": "The system retrieves relevant documents from a knowledge store at inference time and grounds its answers in them"
      },
      {
        "letter": "D",
        "text": "All training data is anonymized before ingestion"
      }
    ],
    "answer": "C",
    "explanation": "RAG bolts retrieval onto generation: fetch relevant sources, condition the model's answer on them — keeping knowledge current without retraining, enabling citations, and reducing (not eliminating) confabulation. Its new risk surface is the retrieval path, where poisoned documents can carry indirect prompt injections.",
    "area": "ch10"
  },
  {
    "id": "a10-6",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "Which function typically owns the tracking of data lineage and the enforcement of data-access policy in an AI-operating organization?",
    "options": [
      {
        "letter": "A",
        "text": "The marketing department"
      },
      {
        "letter": "B",
        "text": "The data governance function"
      },
      {
        "letter": "C",
        "text": "Individual end users"
      },
      {
        "letter": "D",
        "text": "The facilities team"
      }
    ],
    "answer": "B",
    "explanation": "Lineage tracking, access control enforcement, and policy compliance for data are the data governance function's core mandate — with named data stewards accountable per dataset. Users follow the policies; governance owns them.",
    "area": "ch10"
  },
  {
    "id": "a10-7",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "Why must a rollback plan exist before an AI deployment goes live?",
    "options": [
      {
        "letter": "A",
        "text": "So the system can be rapidly restored to a known-safe prior state the moment the new deployment misbehaves"
      },
      {
        "letter": "B",
        "text": "So the team can skip writing a model card"
      },
      {
        "letter": "C",
        "text": "So licensing costs can be renegotiated after launch"
      },
      {
        "letter": "D",
        "text": "So encryption-at-rest requirements are satisfied"
      }
    ],
    "answer": "A",
    "explanation": "When a deployed model starts causing harm, the fastest safe response is usually retreat to the previously validated version — but only if the retreat path (artifacts, criteria, authority to invoke) was prepared in advance. Improvising rollback during an incident multiplies the damage window.",
    "area": "ch10"
  },
  {
    "id": "a10-8",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "Which monitoring signal most strongly suggests a deployed model has developed a fairness problem?",
    "options": [
      {
        "letter": "A",
        "text": "GPU utilization dropping during off-peak hours"
      },
      {
        "letter": "B",
        "text": "A gradual decline in total API traffic"
      },
      {
        "letter": "C",
        "text": "Error rates diverging significantly between demographic groups"
      },
      {
        "letter": "D",
        "text": "Uniform latency across geographic regions"
      }
    ],
    "answer": "C",
    "explanation": "Fairness failures manifest as differential treatment: error or approval rates pulling apart across groups over time. That is why production monitoring must track fairness metrics by subgroup, not just aggregate performance — infrastructure signals like GPU load and latency say nothing about equity.",
    "area": "ch10"
  },
  {
    "id": "a10-9",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "In AI operations, what is a 'shadow model' used for?",
    "options": [
      {
        "letter": "A",
        "text": "Generating synthetic data to augment training sets"
      },
      {
        "letter": "B",
        "text": "Blocking unauthorized access to the production API"
      },
      {
        "letter": "C",
        "text": "Simulating attacker behavior during penetration tests"
      },
      {
        "letter": "D",
        "text": "Running in parallel with the production model so outputs can be compared continuously without affecting decisions"
      }
    ],
    "answer": "D",
    "explanation": "A shadow model sees the same live inputs as production but its outputs go nowhere — enabling continuous comparison that surfaces drift, degradation, or a challenger's readiness at zero user risk. It is an evaluation instrument, not a security control or data generator.",
    "area": "ch10"
  },
  {
    "id": "a10-10",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "Why should retraining frequency be driven by each model's volatility and risk exposure rather than a uniform calendar?",
    "options": [
      {
        "letter": "A",
        "text": "Because fixed schedules violate the EU AI Act"
      },
      {
        "letter": "B",
        "text": "Because models decay at different rates — fast-changing, high-stakes contexts need frequent updates while stable, low-risk ones don't"
      },
      {
        "letter": "C",
        "text": "Because retraining is only permitted during annual maintenance windows"
      },
      {
        "letter": "D",
        "text": "Because uniform schedules maximize cloud spend efficiency"
      }
    ],
    "answer": "B",
    "explanation": "A fraud model facing adaptive adversaries decays in weeks; a stable document classifier may hold for years. Retraining cadence is a risk decision: match update frequency to how fast the modeled world moves and how costly staleness is. Uniform calendars either waste resources or leave high-risk models stale — and no law mandates them.",
    "area": "ch10"
  },
  {
    "id": "a11-1",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "An organization wants to anticipate the downstream harms an AI system could cause once deployed. Which practice contributes most directly to that forecast?",
    "options": [
      {
        "letter": "A",
        "text": "Tracking the model's inference latency"
      },
      {
        "letter": "B",
        "text": "Mapping stakeholders to understand who could be affected and how"
      },
      {
        "letter": "C",
        "text": "Standardizing the version-numbering scheme"
      },
      {
        "letter": "D",
        "text": "Automating the data-labeling workflow"
      }
    ],
    "answer": "B",
    "explanation": "Downstream harm lands on people, so forecasting it starts by enumerating the people: stakeholder mapping identifies every group the system touches — directly, indirectly, and unintentionally — and how each could be hurt. Latency, versioning, and labeling automation are operational concerns that reveal nothing about who bears the consequences.",
    "area": "ch12"
  },
  {
    "id": "a11-2",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "When an AI assurance program commissions a red-team exercise, what is it trying to achieve?",
    "options": [
      {
        "letter": "A",
        "text": "Faster model convergence during retraining"
      },
      {
        "letter": "B",
        "text": "Lower inference costs through optimization"
      },
      {
        "letter": "C",
        "text": "Discovery of adversarial vulnerabilities, misuse paths, and failure modes that routine testing misses"
      },
      {
        "letter": "D",
        "text": "Automated promotion of models through the CI/CD pipeline"
      }
    ],
    "answer": "C",
    "explanation": "Red teaming is deliberate offense: dedicated attackers probe the system with jailbreaks, adversarial inputs, and misuse scenarios to find what cooperative testing never will. It exists because real adversaries and real users are creative — the exercise finds the failures before they do.",
    "area": "ch12"
  },
  {
    "id": "a11-3",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "When reviewing an AI vendor contract, which clause has the greatest bearing on the customer's own data governance obligations?",
    "options": [
      {
        "letter": "A",
        "text": "The data usage rights clause defining what the vendor may access, retain, and reuse"
      },
      {
        "letter": "B",
        "text": "The invoice payment schedule"
      },
      {
        "letter": "C",
        "text": "The marketing co-branding provisions"
      },
      {
        "letter": "D",
        "text": "The choice of arbitration venue"
      }
    ],
    "answer": "A",
    "explanation": "Whatever the vendor may do with your data becomes your compliance posture: retention beyond your schedules, reuse beyond your purposes, or training on your customers' records all flow from the data usage rights clause. Payment terms, branding, and venue matter commercially but do not shape data governance.",
    "area": "ch12"
  },
  {
    "id": "a11-4",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "After deployment, what is the most reliable way to detect that a model is drifting?",
    "options": [
      {
        "letter": "A",
        "text": "Re-reading the original design documentation quarterly"
      },
      {
        "letter": "B",
        "text": "Waiting for user complaints to accumulate"
      },
      {
        "letter": "C",
        "text": "Statistically monitoring input and output distributions for shifts against training baselines"
      },
      {
        "letter": "D",
        "text": "Comparing the org chart against the RACI matrix"
      }
    ],
    "answer": "C",
    "explanation": "Drift is a statistical phenomenon and is caught statistically: compare live input and output distributions against training-time baselines and alert on divergence. Complaints arrive only after harm has occurred, and documentation review tells you what the model was, not what it has become.",
    "area": "ch12"
  },
  {
    "id": "a11-5",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "A customer-facing AI assistant begins producing toxic responses in production. What should the operations team do first?",
    "options": [
      {
        "letter": "A",
        "text": "Contain the incident — take the assistant offline or restrict it — and escalate through the incident process"
      },
      {
        "letter": "B",
        "text": "Schedule additional training epochs for the next release"
      },
      {
        "letter": "C",
        "text": "Keep the system running while gathering a larger sample of failures"
      },
      {
        "letter": "D",
        "text": "Migrate the model to different hardware"
      }
    ],
    "answer": "A",
    "explanation": "Incident response order is containment first: stop ongoing harm by disabling or constraining the system, then investigate root cause with the pressure off. Continuing to run a system actively producing harmful output to 'gather data' extends the damage window, and hardware or training changes are remedies that come after diagnosis.",
    "area": "ch12"
  },
  {
    "id": "a11-6",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "In deployment terminology, a 'shadow deployment' means",
    "options": [
      {
        "letter": "A",
        "text": "Releasing a model publicly without announcing it"
      },
      {
        "letter": "B",
        "text": "Running an undocumented legacy model past its retirement date"
      },
      {
        "letter": "C",
        "text": "Rebranding an existing model under a new product name"
      },
      {
        "letter": "D",
        "text": "Running a candidate model on live inputs in parallel, with its outputs affecting no real decisions"
      }
    ],
    "answer": "D",
    "explanation": "Shadow deployment gives a candidate model real-world exposure with zero user risk: it sees production traffic, its outputs are recorded and compared, and nothing it says takes effect. It is the standard evidence-generating step before trusting a new model with consequences.",
    "area": "ch12"
  },
  {
    "id": "a11-7",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "Which legal instrument expressly obligates providers of high-risk AI systems to run post-market monitoring?",
    "options": [
      {
        "letter": "A",
        "text": "ISO/IEC 27001"
      },
      {
        "letter": "B",
        "text": "The EU AI Act"
      },
      {
        "letter": "C",
        "text": "The California Consumer Privacy Act"
      },
      {
        "letter": "D",
        "text": "Brazil's LGPD"
      }
    ],
    "answer": "B",
    "explanation": "The EU AI Act requires high-risk providers to operate documented post-market monitoring systems and report serious incidents — approval is conditional on continued good behavior, a pattern borrowed from medical-device law. ISO 27001 is a voluntary security standard, and CCPA/LGPD are privacy statutes without AI post-market regimes.",
    "area": "ch12"
  },
  {
    "id": "a11-8",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "How does threat modeling differ from a performance audit in AI assurance?",
    "options": [
      {
        "letter": "A",
        "text": "Threat modeling anticipates how attackers could compromise the system; a performance audit verifies its functional behavior against intended outcomes"
      },
      {
        "letter": "B",
        "text": "Threat modeling can only be performed after deployment"
      },
      {
        "letter": "C",
        "text": "Performance audits apply to infrastructure, never to AI systems"
      },
      {
        "letter": "D",
        "text": "They are two names for the same activity"
      }
    ],
    "answer": "A",
    "explanation": "They answer different questions: threat modeling is prospective and adversarial (what attack vectors exist — poisoning, inversion, injection?), while a performance audit is evaluative (does the system do what it claims, within tolerances?). Both belong in the assurance stack, ideally with threat modeling starting at design time.",
    "area": "ch12"
  },
  {
    "id": "a11-9",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "Why does prompt injection rank among the most serious risks for deployed generative AI?",
    "options": [
      {
        "letter": "A",
        "text": "It doubles the compute cost of each inference"
      },
      {
        "letter": "B",
        "text": "It corrupts training checkpoints stored on disk"
      },
      {
        "letter": "C",
        "text": "It only affects models during offline evaluation"
      },
      {
        "letter": "D",
        "text": "Crafted inputs can override the system's instructions and safety controls, producing harmful or unauthorized behavior"
      }
    ],
    "answer": "D",
    "explanation": "Prompt injection weaponizes the model's obedience to text: adversarial instructions — typed directly or hidden in retrieved documents — can hijack behavior, exfiltrate data, or bypass guardrails at inference time in production. It attacks the running system, not stored checkpoints, and defenses mitigate rather than eliminate it.",
    "area": "ch12"
  },
  {
    "id": "a11-10",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "After an AI incident is resolved, why should its record be linked into the organization's AI risk register?",
    "options": [
      {
        "letter": "A",
        "text": "To reduce future inference costs"
      },
      {
        "letter": "B",
        "text": "To consolidate all engineering documentation in one repository"
      },
      {
        "letter": "C",
        "text": "So the revealed risk is formally tracked, assigned an owner, and managed rather than forgotten once the incident closes"
      },
      {
        "letter": "D",
        "text": "To speed up vendor contract negotiations"
      }
    ],
    "answer": "C",
    "explanation": "An incident is empirical evidence that a risk is real: linking it to the register converts a one-time response into standing governance — the risk gets an owner, a treatment, and monitoring. Unlinked incidents produce organizations that fix the same failure repeatedly without ever learning.",
    "area": "ch12"
  },
  {
    "id": "a12-1",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "Why must AI incidents be formally documented rather than just fixed?",
    "options": [
      {
        "letter": "A",
        "text": "Documentation automatically improves the model's accuracy"
      },
      {
        "letter": "B",
        "text": "Records are needed to plan future marketing campaigns"
      },
      {
        "letter": "C",
        "text": "The records underpin audits, accountability, regulatory reporting, and organizational learning"
      },
      {
        "letter": "D",
        "text": "Documentation triggers the system's automatic retirement"
      }
    ],
    "answer": "C",
    "explanation": "Incident records are governance evidence: they satisfy regulatory reporting duties, give auditors the trail they ask for, establish who decided what, and feed lessons back into controls. A fixed-but-undocumented incident leaves the organization unable to prove its response — or to learn from it.",
    "area": "ch12"
  },
  {
    "id": "a12-2",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What defines a sound post-market monitoring plan for a deployed AI system?",
    "options": [
      {
        "letter": "A",
        "text": "Ongoing, documented evaluation of the system's real-world performance, risks, and unintended effects"
      },
      {
        "letter": "B",
        "text": "A one-time performance certification at launch"
      },
      {
        "letter": "C",
        "text": "Integration with real-time stock trading feeds"
      },
      {
        "letter": "D",
        "text": "Legal review of every individual user interaction"
      }
    ],
    "answer": "A",
    "explanation": "Post-market monitoring is continuous and documented by design: collect operating data, evaluate performance and fairness against expectations, watch for unintended effects, and feed findings into corrective action. Launch-time certification is exactly the one-and-done pattern the requirement exists to prevent.",
    "area": "ch12"
  },
  {
    "id": "a12-3",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "An organization is drafting public-facing communications about its AI system. What belongs in that description?",
    "options": [
      {
        "letter": "A",
        "text": "The API keys and system credentials"
      },
      {
        "letter": "B",
        "text": "The complete source code repository"
      },
      {
        "letter": "C",
        "text": "Promotional slogans emphasizing capabilities only"
      },
      {
        "letter": "D",
        "text": "The system's purpose, its known limitations, and the role humans play in its decisions"
      }
    ],
    "answer": "D",
    "explanation": "Honest external communication covers what the system does, where it falls short, and how humans oversee it — the transparency that builds justified trust and survives FTC scrutiny. Credentials and source code are security disasters, and capability-only messaging is the AI-washing pattern regulators target.",
    "area": "ch12"
  },
  {
    "id": "a12-4",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What purpose does an AI system retirement policy serve?",
    "options": [
      {
        "letter": "A",
        "text": "Ensuring systems remain in service as long as technically possible"
      },
      {
        "letter": "B",
        "text": "Defining the triggers and controlled procedures for responsibly deactivating systems"
      },
      {
        "letter": "C",
        "text": "Concealing decommissioning decisions from stakeholders"
      },
      {
        "letter": "D",
        "text": "Routing user complaints away from support channels"
      }
    ],
    "answer": "B",
    "explanation": "A retirement (deactivation) policy predefines when a system should die — risk thresholds, obsolescence, regulatory change — and how: dependency wind-down, data disposition, stakeholder notice, record preservation. It turns end-of-life into a governed decision instead of an emergency or an indefinite drift.",
    "area": "ch12"
  },
  {
    "id": "a12-5",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "Which circumstance would most likely require localizing an AI system for a particular market?",
    "options": [
      {
        "letter": "A",
        "text": "Uniform user behavior across all regions"
      },
      {
        "letter": "B",
        "text": "Consistently high satisfaction scores in the home market"
      },
      {
        "letter": "C",
        "text": "Regional legal requirements — such as data residency mandates — or significant cultural differences"
      },
      {
        "letter": "D",
        "text": "Stable input data distributions worldwide"
      }
    ],
    "answer": "C",
    "explanation": "Localization is driven by divergence: data sovereignty laws requiring in-country processing, regional regulations imposing different obligations, or cultural and linguistic differences that change what appropriate behavior means. Uniformity and stability argue for the opposite — one global deployment.",
    "area": "ch12"
  },
  {
    "id": "a12-6",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "In AI operations, how do 'issues' differ from 'incidents'?",
    "options": [
      {
        "letter": "A",
        "text": "Issues are lower-severity problems tracked and remediated routinely; incidents are significant failures that trigger response protocols"
      },
      {
        "letter": "B",
        "text": "Issues always involve loss of user data"
      },
      {
        "letter": "C",
        "text": "Incidents occur only in training environments"
      },
      {
        "letter": "D",
        "text": "Incidents are optional to record, while issues must be reported to regulators"
      }
    ],
    "answer": "A",
    "explanation": "The distinction is severity and response: issues (bugs, degradations, complaints) flow through routine tracking and prioritization, while incidents (significant failures, harm events) invoke containment, investigation, and possibly disclosure. Mature programs predefine the threshold — and watch issue trends as the early-warning system for incidents.",
    "area": "ch12"
  },
  {
    "id": "a12-7",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "When an AI model is deactivated, why should it be archived instead of immediately deleted?",
    "options": [
      {
        "letter": "A",
        "text": "To leave open the option of undocumented reuse in other products"
      },
      {
        "letter": "B",
        "text": "To reduce storage and maintenance costs"
      },
      {
        "letter": "C",
        "text": "To improve search rankings for the product documentation"
      },
      {
        "letter": "D",
        "text": "Because legal discovery, audits, and accountability obligations may require examining the retired model and its records"
      }
    ],
    "answer": "D",
    "explanation": "The questions don't retire with the model: litigation may demand reconstruction of a past decision, auditors may examine historical behavior, and regulatory retention duties — like the EU AI Act's ten-year documentation period — outlive deployment. Archival per the retention schedule preserves that evidence; premature deletion can look like spoliation.",
    "area": "ch12"
  },
  {
    "id": "a12-8",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is a critical step when preparing to retire an AI system?",
    "options": [
      {
        "letter": "A",
        "text": "Disabling user feedback channels ahead of the shutdown"
      },
      {
        "letter": "B",
        "text": "Inventorying everything that depends on the system and planning transitions or fallbacks"
      },
      {
        "letter": "C",
        "text": "Publishing the model weights publicly"
      },
      {
        "letter": "D",
        "text": "Boosting the model's throughput for its final months"
      }
    ],
    "answer": "B",
    "explanation": "Systems accumulate silent dependents — downstream applications, workflows, integrations — and switching one off without a dependency inventory breaks them without warning. Retirement planning maps those dependencies and arranges successors or fallbacks so the shutdown is a transition, not an outage.",
    "area": "ch12"
  },
  {
    "id": "a12-9",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "Under which instrument must high-risk AI systems be registered in a public EU database?",
    "options": [
      {
        "letter": "A",
        "text": "The EU AI Act"
      },
      {
        "letter": "B",
        "text": "The GDPR"
      },
      {
        "letter": "C",
        "text": "The California Consumer Privacy Act"
      },
      {
        "letter": "D",
        "text": "ISO/IEC 42001"
      }
    ],
    "answer": "A",
    "explanation": "The EU AI Act requires providers to register high-risk systems in the EU database before placing them on the market — part of the transparency infrastructure alongside technical documentation and CE marking. GDPR governs personal data without an AI registry, CCPA is state privacy law, and ISO 42001 is a voluntary standard.",
    "area": "ch12"
  },
  {
    "id": "a12-10",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "Which approach best communicates an AI system's limitations to its users?",
    "options": [
      {
        "letter": "A",
        "text": "Omitting limitations so users don't lose confidence"
      },
      {
        "letter": "B",
        "text": "Plain-language explanations illustrated with concrete, realistic examples"
      },
      {
        "letter": "C",
        "text": "Deliberately vague phrasing to limit liability exposure"
      },
      {
        "letter": "D",
        "text": "Publishing only a dense technical appendix"
      }
    ],
    "answer": "B",
    "explanation": "Users calibrate their reliance correctly only when limitations are stated clearly and made tangible — 'the assistant can cite documents that don't exist; verify references' beats a paragraph of hedged legalese. Hiding or burying limitations invites over-reliance and, when harm follows, deception exposure.",
    "area": "ch12"
  },
  {
    "id": "ext-1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the primary purpose of AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "To minimize the financial costs of building and operating AI applications"
      },
      {
        "letter": "B",
        "text": "To maximize AI system speed and computational performance above all other goals"
      },
      {
        "letter": "C",
        "text": "To completely eliminate every possible risk that AI technology might introduce"
      },
      {
        "letter": "D",
        "text": "To ensure responsible development, deployment, and use of AI systems"
      }
    ],
    "answer": "D",
    "explanation": "AI governance aims to ensure responsible development, deployment, and use of AI systems by establishing frameworks, policies, and practices that address ethical, legal, and societal concerns. 2. 3. 4. 5. 6. 2 itizes cost over governance principles. by establishing frameworks and practices that address ethical, legal, and societal concerns."
  },
  {
    "id": "ext-2",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "Which of the following best defines “AI governance”?",
    "options": [
      {
        "letter": "A",
        "text": "The exclusive responsibility of the legal department to authorize any AI project"
      },
      {
        "letter": "B",
        "text": "A one-time assessment and review conducted before an AI system goes into production"
      },
      {
        "letter": "C",
        "text": "A framework of policies, processes, and controls for managing AI systems throughout their lifecycle"
      },
      {
        "letter": "D",
        "text": "The engineering discipline focused solely on training and tuning machine learning algorithms"
      }
    ],
    "answer": "C",
    "explanation": "AI governance is a comprehensive framework encompassing policies, processes, and controls that manage AI systems throughout their entire lifecycle, from conception to retirement."
  },
  {
    "id": "ext-3",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An organization is establishing its AI governance program. Which element should be prioritized first?",
    "options": [
      {
        "letter": "A",
        "text": "Purchasing advanced monitoring and observability platforms for all AI systems"
      },
      {
        "letter": "B",
        "text": "Adopting every available AI standard and framework simultaneously at once"
      },
      {
        "letter": "C",
        "text": "Recruiting additional machine learning engineers and data scientists right away"
      },
      {
        "letter": "D",
        "text": "Defining clear governance objectives aligned with organizational values and risk appetite"
      }
    ],
    "answer": "D",
    "explanation": "Establishing clear governance objectives aligned with organizational values and risk appetite provides the foundation for all other governance activities. This ensures that subsequent decisions about tools (A), personnel (B), and standards (C) are purposeful and aligned with organizational needs. Without clear objectives, other investments may be misdirected or ineffective. to provide the foundation for all other governance activities."
  },
  {
    "id": "ext-4",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What distinguishes AI governance from traditional IT governance?",
    "options": [
      {
        "letter": "A",
        "text": "AI governance can be managed without any specialized technical knowledge or expertise"
      },
      {
        "letter": "B",
        "text": "AI governance removes the requirement for human review of automated system decisions"
      },
      {
        "letter": "C",
        "text": "AI governance addresses unique challenges like algorithmic bias, explainability, and autonomous decisions"
      },
      {
        "letter": "D",
        "text": "AI governance is primarily concerned with how training data is stored and organized"
      }
    ],
    "answer": "C",
    "explanation": "AI governance must address unique challenges specific to AI systems, including algorithmic bias, model explainability, autonomous decision-making, and evolving capabilities. While building on IT governance principles, it requires specialized approaches. that traditional IT governance does not cover."
  },
  {
    "id": "ext-5",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Which stakeholder group typically has PRIMARY accountability for AI governance in an organization?",
    "options": [
      {
        "letter": "A",
        "text": "Outside advisory firms and consultants hired on temporary contract engagements"
      },
      {
        "letter": "B",
        "text": "The marketing department that promotes AI products and services to the public"
      },
      {
        "letter": "C",
        "text": "The data science and engineering teams that build and train the AI models"
      },
      {
        "letter": "D",
        "text": "Senior leadership and the board of directors"
      }
    ],
    "answer": "D",
    "explanation": "Senior leadership and the board of directors hold primary accountability for AI governance as they set organizational strategy, risk appetite, and ensure adequate resources and oversight. While data science teams (A) implement governance, they don’t hold ultimate accountability. External consultants (B) provide guidance but don’t have organizational accountability. Marketing (D) may be stakeholders but not primary accountable parties. hold primary accountability as they set organizational strategy, risk appetite, and ensure adequate resources and oversight."
  },
  {
    "id": "ext-6",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "A multinational corporation is designing its AI governance structure. The company operates in healthcare, finance, and retail sectors across 15 countries. Which approach would be MOST effective?",
    "options": [
      {
        "letter": "A",
        "text": "Allow each business unit complete autonomy in governance decisions"
      },
      {
        "letter": "B",
        "text": "Outsource all governance decisions to external legal counsel"
      },
      {
        "letter": "C",
        "text": "Establish a centralized governance framework with sector-specific and regional adaptations"
      },
      {
        "letter": "D",
        "text": "Implement identical governance policies across all sectors and regions"
      }
    ],
    "answer": "C",
    "explanation": "A centralized framework with sector-specific and regional adaptations balances consistency with necessary flexibility. This approach ensures core principles are maintained while accommodating different regulatory requirements (healthcare vs. finance) and regional laws (15 countries)."
  },
  {
    "id": "ext-7",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the relationship between AI governance and AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "AI governance replaces the need for ethical considerations"
      },
      {
        "letter": "B",
        "text": "AI ethics is only relevant for academic research, not business applications"
      },
      {
        "letter": "C",
        "text": "They are completely unrelated concepts"
      },
      {
        "letter": "D",
        "text": "AI ethics provides philosophical principles that inform AI governance frameworks"
      }
    ],
    "answer": "D",
    "explanation": "AI ethics provides the philosophical and moral principles (fairness, transparency, accountability) that inform and guide the development of AI governance frameworks and policies. Governance operationalizes ethical principles into practical controls."
  },
  {
    "id": "ext-8",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Which of the following is a key characteristic of effective AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Delegating all governance responsibilities exclusively to technical engineering teams"
      },
      {
        "letter": "B",
        "text": "Establishing fixed policies that remain completely unchanged throughout the lifecycle"
      },
      {
        "letter": "C",
        "text": "Limiting governance activities to the initial design and development phases only"
      },
      {
        "letter": "D",
        "text": "Continuous monitoring and adaptation to emerging risks and technologies"
      }
    ],
    "answer": "D",
    "explanation": "Effective AI governance requires continuous monitoring and adaptation because AI technologies, risks, regulations, and societal expectations evolve rapidly."
  },
  {
    "id": "ext-9",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What does “AI literacy” mean in the context of AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Being able to write production-grade ML code and train deep neural networks"
      },
      {
        "letter": "B",
        "text": "Holding an advanced research degree such as a PhD in machine learning or AI"
      },
      {
        "letter": "C",
        "text": "Understanding AI capabilities, limitations, and implications sufficient for informed decision-making"
      },
      {
        "letter": "D",
        "text": "Knowing how to operate popular AI-powered consumer apps and voice assistants"
      }
    ],
    "answer": "C",
    "explanation": "AI literacy in governance contexts means having sufficient understanding of AI capabilities, limitations, risks, and implications to make informed decisions about AI systems, regardless of technical coding ability."
  },
  {
    "id": "ext-10",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An organization’s AI governance committee includes representatives from legal, IT, business units, ethics, and risk management. What is the PRIMARY benefit of this multidisciplinary approach?",
    "options": [
      {
        "letter": "A",
        "text": "It removes the need for independent third-party audits of AI systems entirely"
      },
      {
        "letter": "B",
        "text": "It deliberately slows down AI projects to prevent any risky innovation efforts"
      },
      {
        "letter": "C",
        "text": "It ensures comprehensive consideration of technical, legal, ethical, and business perspectives"
      },
      {
        "letter": "D",
        "text": "It significantly lowers the overall budget required for AI system development"
      }
    ],
    "answer": "C",
    "explanation": "A multidisciplinary governance committee ensures that AI decisions consider technical feasibility, legal compliance, ethical implications, business value, and risk management—providing comprehensive oversight. providing holistic oversight of AI decisions."
  },
  {
    "id": "ext-11",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "A company’s AI governance framework includes a tiered risk classification system. A proposed AI system would make autonomous decisions about employee performance reviews and terminations. How should this system MOST likely be classified?",
    "options": [
      {
        "letter": "A",
        "text": "High risk, requiring enhanced governance, human oversight, and extensive documentation"
      },
      {
        "letter": "B",
        "text": "Medium risk, needing only standard governance procedures and routine review cycles"
      },
      {
        "letter": "C",
        "text": "Prohibited use case that the organization should not develop under any circumstances"
      },
      {
        "letter": "D",
        "text": "Low risk, requiring only minimal oversight and basic documentation requirements"
      }
    ],
    "answer": "A",
    "explanation": "An AI system making autonomous decisions about employment termination involves significant individual rights, potential discrimination, and legal implications, warranting high-risk classification with enhanced governance, mandatory human oversight, and extensive documentation. While not necessarily prohibited (D), it requires stringent controls. due to significant impact on individual rights, potential discrimination, and legal implications."
  },
  {
    "id": "ext-12",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the purpose of an AI governance policy?",
    "options": [
      {
        "letter": "A",
        "text": "To provide detailed technical implementation specifications for each AI model built"
      },
      {
        "letter": "B",
        "text": "To automate human decision-making processes through AI-driven workflow systems"
      },
      {
        "letter": "C",
        "text": "To establish principles, rules, and guidelines for responsible AI use within an organization"
      },
      {
        "letter": "D",
        "text": "To accelerate AI project delivery by removing bureaucratic approval gate requirements"
      }
    ],
    "answer": "C",
    "explanation": "AI governance policies establish the principles, rules, and guidelines that define how an organization will responsibly develop, deploy, and use AI systems. 6"
  },
  {
    "id": "ext-13",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Which of the following scenarios BEST illustrates the need for AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "A team relies on standard email software for internal and external communication"
      },
      {
        "letter": "B",
        "text": "A company uses a basic calculator application for routine arithmetic tasks daily"
      },
      {
        "letter": "C",
        "text": "A business uses conventional word processing software to create office documents"
      },
      {
        "letter": "D",
        "text": "An organization deploys a facial recognition system for employee building access"
      }
    ],
    "answer": "D",
    "explanation": "Facial recognition for employee access involves AI technology with significant privacy, bias, and rights implications, clearly requiring governance oversight. involving significant privacy, bias, and rights implications that require governance oversight."
  },
  {
    "id": "ext-14",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is meant by “AI accountability” in governance contexts?",
    "options": [
      {
        "letter": "A",
        "text": "Clear assignment of responsibility for AI system decisions and outcomes to human actors"
      },
      {
        "letter": "B",
        "text": "The ability to blame AI systems when errors occur"
      },
      {
        "letter": "C",
        "text": "Eliminating human involvement in AI decisions"
      },
      {
        "letter": "D",
        "text": "Ensuring AI systems can explain their own decisions without human interpretation"
      }
    ],
    "answer": "A",
    "explanation": "AI accountability means clearly assigning responsibility for AI system decisions, outcomes, and impacts to specific human actors or organizational roles, ensuring someone is answerable for the system’s behavior."
  },
  {
    "id": "ext-15",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An organization is developing its first AI governance framework. Which document should typically be created FIRST?",
    "options": [
      {
        "letter": "A",
        "text": "Pre-written incident response playbooks for handling AI system failures quickly"
      },
      {
        "letter": "B",
        "text": "Detailed technical implementation procedures for model development pipelines"
      },
      {
        "letter": "C",
        "text": "Standard contract templates for negotiating terms with AI technology vendors"
      },
      {
        "letter": "D",
        "text": "AI governance charter or policy defining scope, principles, and governance structure"
      }
    ],
    "answer": "D",
    "explanation": "An AI governance charter or policy should be created first as it establishes the foundation: scope, principles, governance structure, roles, and responsibilities. This guides all subsequent documents. Technical procedures (A), vendor templates (C), and incident playbooks (D) are important but should be developed based on the foundational governance framework. 7 which establishes the foundation for all subsequent documents."
  },
  {
    "id": "ext-16",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "A financial services company is establishing AI governance. Regulators have not yet issued specific AI guidance for their sector. What approach should the company take?",
    "options": [
      {
        "letter": "A",
        "text": "Wait until regulators publish official AI guidance before taking any action"
      },
      {
        "letter": "B",
        "text": "Implement only minimal governance since no specific AI regulations have been issued"
      },
      {
        "letter": "C",
        "text": "Proactively establish governance based on existing regulations, industry standards, and ethical principles"
      },
      {
        "letter": "D",
        "text": "Adopt another company's governance framework verbatim without any customization"
      }
    ],
    "answer": "C",
    "explanation": "Organizations should proactively establish governance based on existing applicable regulations (data protection, non-discrimination), industry standards (NIST AI RMF), and ethical principles, rather than waiting for sector-specific AI regulations. This demonstrates due diligence and prepares for future regulations."
  },
  {
    "id": "ext-17",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What role does transparency play in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Transparency obligations apply only to AI systems operated by government agencies"
      },
      {
        "letter": "B",
        "text": "Transparency is unnecessary when an AI system achieves high accuracy scores"
      },
      {
        "letter": "C",
        "text": "Transparency requires publicly disclosing all proprietary algorithms to competitors"
      },
      {
        "letter": "D",
        "text": "Transparency helps stakeholders understand AI system capabilities, limitations, and decision-making processes"
      }
    ],
    "answer": "D",
    "explanation": "Transparency in AI governance means providing stakeholders with appropriate information about AI system capabilities, limitations, and decision-making processes to enable informed decisions and build trust. to enable informed decisions and build trust."
  },
  {
    "id": "ext-18",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Which of the following is an example of an AI governance control?",
    "options": [
      {
        "letter": "A",
        "text": "Requiring impact assessments before deploying high-risk AI systems"
      },
      {
        "letter": "B",
        "text": "Acquiring cloud computing infrastructure to host and run AI workloads at scale"
      },
      {
        "letter": "C",
        "text": "Expanding the data science team by hiring additional machine learning engineers"
      },
      {
        "letter": "D",
        "text": "Selecting the fastest available GPU hardware to accelerate model training speed"
      }
    ],
    "answer": "A",
    "explanation": "Requiring impact assessments before deploying high-risk AI systems is a governance control that ensures risks are identified and evaluated before deployment. 8 to ensure risks are identified and evaluated before deployment."
  },
  {
    "id": "ext-19",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the primary difference between AI governance and AI risk management?",
    "options": [
      {
        "letter": "A",
        "text": "AI governance handles only technical matters while risk management is purely administrative"
      },
      {
        "letter": "B",
        "text": "AI governance is the broader framework; risk management is a key component within it"
      },
      {
        "letter": "C",
        "text": "AI risk management deals exclusively with cybersecurity threats and system vulnerabilities"
      },
      {
        "letter": "D",
        "text": "AI governance and AI risk management are interchangeable terms for the same concept"
      }
    ],
    "answer": "B",
    "explanation": "AI governance is the comprehensive framework of policies, processes, and controls for managing AI systems, while AI risk management is a critical component within governance focused specifically on identifying, assessing, and mitigating AI-related risks."
  },
  {
    "id": "ext-20",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An AI governance program includes regular training for employees. What is the PRIMARY purpose of this training?",
    "options": [
      {
        "letter": "A",
        "text": "To completely remove every possible risk associated with deploying AI systems"
      },
      {
        "letter": "B",
        "text": "To replace the need for formal AI governance policies and control frameworks entirely"
      },
      {
        "letter": "C",
        "text": "To transform every employee into a fully qualified AI model developer and engineer"
      },
      {
        "letter": "D",
        "text": "To build AI literacy and ensure employees understand their roles in responsible AI use"
      }
    ],
    "answer": "D",
    "explanation": "Training builds AI literacy across the organization and ensures employees understand their specific roles and responsibilities in responsible AI development and use, supporting governance implementation. supporting governance implementation across the organization."
  },
  {
    "id": "ext-21",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "A company’s AI governance framework requires different approval levels based on risk. A proposed chatbot for customer service would access customer data but not make binding decisions. Which approval level is MOST appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "No formal approval needed; the development team can proceed independently"
      },
      {
        "letter": "B",
        "text": "Full board-level approval with mandatory external third-party audit and review"
      },
      {
        "letter": "C",
        "text": "Mid-level approval requiring review by data protection, legal, and business stakeholders"
      },
      {
        "letter": "D",
        "text": "Automatic sign-off by the development team with no external stakeholder review"
      }
    ],
    "answer": "C",
    "explanation": "A customer service chatbot accessing customer data presents moderate risks (privacy, data protection, customer experience) warranting mid-level approval with review by relevant stakeholders (data protection, legal, business). It’s not high-risk enough for board approval (D) but requires more than team-level decisions (A, B) due to data access and customer interaction. 9 given moderate risks from customer data access and interaction."
  },
  {
    "id": "ext-22",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is an AI governance framework?",
    "options": [
      {
        "letter": "A",
        "text": "A commercial software application designed to monitor AI system performance"
      },
      {
        "letter": "B",
        "text": "A regulatory mandate that applies exclusively to publicly traded corporations"
      },
      {
        "letter": "C",
        "text": "A specific type of machine learning algorithm used for classification tasks"
      },
      {
        "letter": "D",
        "text": "A structured approach defining how an organization governs AI throughout its lifecycle"
      }
    ],
    "answer": "D",
    "explanation": "An AI governance framework is a structured approach that defines how an organization will govern AI systems throughout their lifecycle, including policies, processes, roles, and controls."
  },
  {
    "id": "ext-23",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Which principle is MOST important when establishing AI governance in a global organization?",
    "options": [
      {
        "letter": "A",
        "text": "Implementing the strictest regulations from any jurisdiction globally"
      },
      {
        "letter": "B",
        "text": "Ignoring international regulations and focusing only on headquarters location"
      },
      {
        "letter": "C",
        "text": "Balancing global consistency with local regulatory and cultural requirements"
      },
      {
        "letter": "D",
        "text": "Establishing separate, uncoordinated governance for each country"
      }
    ],
    "answer": "C",
    "explanation": "Global AI governance should balance consistency in core principles and practices with necessary adaptations for local regulations, cultural norms, and business contexts."
  },
  {
    "id": "ext-24",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "Who should be involved in AI governance within an organization?",
    "options": [
      {
        "letter": "A",
        "text": "A cross-functional team including technical, legal, ethical, business, and risk management reps"
      },
      {
        "letter": "B",
        "text": "Only the IT department, since AI systems are fundamentally technology products"
      },
      {
        "letter": "C",
        "text": "Only outside consulting firms hired to advise on governance best practices externally"
      },
      {
        "letter": "D",
        "text": "Only C-suite executives and senior leaders without input from operational teams"
      }
    ],
    "answer": "A",
    "explanation": "Effective AI governance requires cross-functional involvement including technical experts, legal counsel, ethics specialists, business leaders, and risk management professionals to address the multifaceted nature of AI systems. 10 to address the multifaceted nature of AI systems."
  },
  {
    "id": "ext-25",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An organization’s AI governance maturity is being assessed. Which characteristic indicates a MATURE governance program?",
    "options": [
      {
        "letter": "A",
        "text": "Governance is integrated into AI lifecycle processes with continuous monitoring and improvement"
      },
      {
        "letter": "B",
        "text": "AI governance policies exist but are not regularly reviewed or updated"
      },
      {
        "letter": "C",
        "text": "Governance responsibilities are unclear and informally assigned"
      },
      {
        "letter": "D",
        "text": "Governance consists of a single policy document created three years ago"
      }
    ],
    "answer": "A",
    "explanation": "Mature AI governance is characterized by integration into lifecycle processes, continuous monitoring, regular updates, and ongoing improvement—demonstrating that governance is operational and adaptive."
  },
  {
    "id": "ext-26",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is machine learning?",
    "options": [
      {
        "letter": "A",
        "text": "A programming language specifically designed for data analysis and statistical modeling"
      },
      {
        "letter": "B",
        "text": "A type of specialized computer hardware designed for processing large datasets"
      },
      {
        "letter": "C",
        "text": "A database management system optimized for handling unstructured data at scale"
      },
      {
        "letter": "D",
        "text": "A subset of AI where systems learn patterns from data without explicit programming for every scenario"
      }
    ],
    "answer": "D",
    "explanation": "Machine learning is a subset of AI that enables systems to learn patterns from data and improve performance without being explicitly programmed for every possible scenario."
  },
  {
    "id": "ext-501",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What distinguishes “narrow AI” from “general AI”?",
    "options": [
      {
        "letter": "A",
        "text": "Narrow AI is designed for specific tasks; general AI would have human-like intelligence across domains"
      },
      {
        "letter": "B",
        "text": "Narrow AI is an older legacy technology that predates general AI research efforts"
      },
      {
        "letter": "C",
        "text": "Narrow AI demands more computational resources than general AI would ever require"
      },
      {
        "letter": "D",
        "text": "Narrow AI systems cost significantly less to develop than general AI systems do"
      }
    ],
    "answer": "A",
    "explanation": "Narrow AI (also called weak AI) is designed for specific tasks like image recognition or language translation, while general AI (strong AI) would possess human-like intelligence capable of 11 performing diverse tasks and transferring knowledge between domains. General AI does not currently exist."
  },
  {
    "id": "ext-27",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is supervised learning?",
    "options": [
      {
        "letter": "A",
        "text": "A type of AI system designed to supervise and monitor the productivity of human workers"
      },
      {
        "letter": "B",
        "text": "Learning that requires continuous internet connectivity to access cloud-based training infrastructure"
      },
      {
        "letter": "C",
        "text": "Learning that requires a human supervisor to approve each model decision during operation"
      },
      {
        "letter": "D",
        "text": "A machine learning approach where models learn from labeled input-output training pairs"
      }
    ],
    "answer": "D",
    "explanation": "Supervised learning is a machine learning approach where models are trained on labeled data (input-output pairs), learning to map inputs to correct outputs."
  },
  {
    "id": "ext-28",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A company is developing an AI system to detect fraudulent transactions. Which type of machine learning is MOST appropriate?",
    "options": [
      {
        "letter": "A",
        "text": "Rule-based detection systems are sufficient; machine learning is not needed for fraud detection"
      },
      {
        "letter": "B",
        "text": "Supervised learning using labeled historical fraud data, combined with unsupervised anomaly detection"
      },
      {
        "letter": "C",
        "text": "Unsupervised learning alone, since novel fraud patterns are inherently unpredictable"
      },
      {
        "letter": "D",
        "text": "Reinforcement learning where the model learns through trial-and-error reward signals"
      }
    ],
    "answer": "B",
    "explanation": "Fraud detection typically benefits from supervised learning using historical labeled examples of fraudulent and legitimate transactions, often combined with unsupervised anomaly detection to identify novel fraud patterns."
  },
  {
    "id": "ext-29",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is a neural network in AI?",
    "options": [
      {
        "letter": "A",
        "text": "A computing system inspired by biological neural networks, processing information through interconnected nodes"
      },
      {
        "letter": "B",
        "text": "A social networking platform designed for AI researchers and developers to collaborate"
      },
      {
        "letter": "C",
        "text": "A physical network of interconnected computers that share processing workloads"
      },
      {
        "letter": "D",
        "text": "A specialized type of high-speed internet connection optimized for AI data transfers"
      }
    ],
    "answer": "A",
    "explanation": "A neural network is a computing system inspired by biological neural networks, consisting of interconnected nodes (neurons) that process information through weighted connections, enabling pattern recognition and learning."
  },
  {
    "id": "ext-30",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “deep learning”?",
    "options": [
      {
        "letter": "A",
        "text": "Learning processes that occur in underwater or deep-sea exploration environments"
      },
      {
        "letter": "B",
        "text": "Machine learning using neural networks with multiple layers to learn hierarchical representations of data"
      },
      {
        "letter": "C",
        "text": "An especially difficult learning process requiring advanced mathematical expertise"
      },
      {
        "letter": "D",
        "text": "Learning that takes an extended period of time, often spanning months or years of training"
      }
    ],
    "answer": "B",
    "explanation": "Deep learning is a subset of machine learning that uses neural networks with multiple layers (deep neural networks) to automatically learn hierarchical representations of data, enabling sophisticated pattern recognition."
  },
  {
    "id": "ext-31",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is natural language processing (NLP)?",
    "options": [
      {
        "letter": "A",
        "text": "A specialized type of programming language designed for artificial intelligence applications"
      },
      {
        "letter": "B",
        "text": "A data storage format optimized for unstructured language and text content"
      },
      {
        "letter": "C",
        "text": "AI technology that enables computers to understand, interpret, and generate human language"
      },
      {
        "letter": "D",
        "text": "A methodology and set of techniques for teaching foreign languages to human learners"
      }
    ],
    "answer": "C",
    "explanation": "Natural language processing (NLP) is an AI technology that enables computers to understand, interpret, and generate human language, powering applications like chatbots, translation, and sentiment analysis."
  },
  {
    "id": "ext-32",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A large language model (LLM) is being considered for customer service. What is a key characteristic of LLMs that governance should address?",
    "options": [
      {
        "letter": "A",
        "text": "LLMs do not require any training data beyond basic model configuration parameters"
      },
      {
        "letter": "B",
        "text": "LLMs never produce factual errors and always generate verified, accurate information"
      },
      {
        "letter": "C",
        "text": "LLMs can generate plausible but factually incorrect information, known as hallucinations"
      },
      {
        "letter": "D",
        "text": "LLMs are inherently immune to bias from training data and always produce neutral outputs"
      }
    ],
    "answer": "C",
    "explanation": "LLMs can generate plausible-sounding but factually incorrect information (hallucinations), which is a critical governance concern requiring verification mechanisms and appropriate use case selection."
  },
  {
    "id": "ext-33",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is computer vision in AI?",
    "options": [
      {
        "letter": "A",
        "text": "A type of high-resolution monitor display technology for professional graphics workstations"
      },
      {
        "letter": "B",
        "text": "Technology enabling computers to interpret and understand visual information from images and video"
      },
      {
        "letter": "C",
        "text": "Software designed specifically for creating, editing, and rendering digital graphics and artwork"
      },
      {
        "letter": "D",
        "text": "AI systems that consistently outperform human visual perception across all tasks and conditions"
      }
    ],
    "answer": "B",
    "explanation": "Computer vision is AI technology that enables computers to interpret and understand visual information from images and videos, powering applications like facial recognition, object detection, and medical image analysis."
  },
  {
    "id": "ext-34",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is the primary difference between traditional software and AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Traditional software consistently executes faster than any AI-based alternative approach"
      },
      {
        "letter": "B",
        "text": "AI systems are consistently more expensive to develop and operate than traditional software"
      },
      {
        "letter": "C",
        "text": "Traditional software follows explicit programmed rules; AI systems learn patterns and behaviors from data"
      },
      {
        "letter": "D",
        "text": "AI systems do not require the same level of testing and quality assurance as traditional software"
      }
    ],
    "answer": "C",
    "explanation": "Traditional software follows explicit rules programmed by developers, while AI systems learn patterns and behaviors from data, making their behavior more probabilistic and data-dependent. This fundamental difference drives unique governance needs."
  },
  {
    "id": "ext-35",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "An organization is evaluating whether to build a custom AI model or use a pre-trained foundation model. From a governance perspective, what is a key consideration?",
    "options": [
      {
        "letter": "A",
        "text": "Pre-trained foundation models eliminate all governance concerns including bias, transparency, and accountability"
      },
      {
        "letter": "B",
        "text": "Custom-built models inherently provide better governance outcomes regardless of implementation quality"
      },
      {
        "letter": "C",
        "text": "The choice between custom and pre-trained models has no meaningful implications for AI governance"
      },
      {
        "letter": "D",
        "text": "Custom models offer more control over data and behavior; pre-trained models enable faster deployment"
      }
    ],
    "answer": "D",
    "explanation": "Custom models provide greater control over training data, architecture, and behavior but require significant resources and expertise. Pre-trained models offer faster deployment but may contain unknown biases, limitations, or behaviors from their original training. Both require governance but with different focus areas."
  },
  {
    "id": "ext-36",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is reinforcement learning?",
    "options": [
      {
        "letter": "A",
        "text": "A method for strengthening and hardening computer hardware against physical stress"
      },
      {
        "letter": "B",
        "text": "Learning that requires constant reinforcement and feedback from human teachers"
      },
      {
        "letter": "C",
        "text": "A machine learning approach where agents learn by interacting with an environment and receiving rewards or penalties"
      },
      {
        "letter": "D",
        "text": "A specific type of supervised learning that uses labeled training examples"
      }
    ],
    "answer": "C",
    "explanation": "Reinforcement learning is a machine learning approach where agents learn optimal behaviors by interacting with an environment and receiving rewards for desired actions and penalties for undesired ones."
  },
  {
    "id": "ext-37",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “transfer learning” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Moving AI systems and models between different cloud service providers"
      },
      {
        "letter": "B",
        "text": "Applying knowledge learned from one task to improve performance on a different but related task"
      },
      {
        "letter": "C",
        "text": "Transferring raw data files between computers over a network connection"
      },
      {
        "letter": "D",
        "text": "Transferring legal ownership and intellectual property rights of AI models"
      }
    ],
    "answer": "B",
    "explanation": "Transfer learning involves applying knowledge learned from one task or domain to improve performance on a related task, often by fine-tuning pre-trained models. This is common with foundation models."
  },
  {
    "id": "ext-38",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is an AI algorithm?",
    "options": [
      {
        "letter": "A",
        "text": "A set of rules, procedures, and mathematical operations that an AI system follows to process data and make decisions"
      },
      {
        "letter": "B",
        "text": "A programming language used for writing software applications and scripts"
      },
      {
        "letter": "C",
        "text": "A type of database optimized for storing and retrieving structured information"
      },
      {
        "letter": "D",
        "text": "A physical hardware component within a computer system, such as a processor or memory module"
      }
    ],
    "answer": "A",
    "explanation": "An AI algorithm is a set of rules, procedures, and mathematical operations that an AI system follows to process data, learn patterns, and make decisions or predictions."
  },
  {
    "id": "ext-39",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “explainable AI” (XAI)?",
    "options": [
      {
        "letter": "A",
        "text": "AI systems designed to provide understandable explanations for their decisions, predictions, and behaviors"
      },
      {
        "letter": "B",
        "text": "AI systems restricted to making only simple, low-complexity decisions"
      },
      {
        "letter": "C",
        "text": "AI systems capable of speaking and translating between multiple human languages"
      },
      {
        "letter": "D",
        "text": "AI software that is easy to install and configure without technical expertise"
      }
    ],
    "answer": "A",
    "explanation": "Explainable AI (XAI) refers to AI systems designed to provide understandable explanations for their decisions, predictions, and behaviors, enabling humans to understand how and why the system reached specific conclusions. This is crucial for governance, trust, and accountability.”"
  },
  {
    "id": "ext-40",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "A healthcare organization is implementing an AI diagnostic tool. The tool is highly accurate but operates as a “black box” with limited explainability. From a governance perspective, what is the MOST appropriate action?",
    "options": [
      {
        "letter": "A",
        "text": "Reject the tool entirely due to the inherent lack of explainability, regardless of accuracy"
      },
      {
        "letter": "B",
        "text": "Implement with enhanced governance including mandatory human oversight, documented limitations, and continuous monitoring"
      },
      {
        "letter": "C",
        "text": "Use the tool only for non-critical, low-stakes diagnostic decisions where errors are acceptable"
      },
      {
        "letter": "D",
        "text": "Deploy immediately since the tool's high accuracy rate is sufficient justification"
      }
    ],
    "answer": "B",
    "explanation": "High-stakes healthcare applications require enhanced governance even with accurate systems. Implementing with strong controls (mandatory human oversight, clear documentation of limitations, continuous monitoring, and appropriate use case restrictions) balances the tool’s value with explainability limitations."
  },
  {
    "id": "ext-41",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is training data in machine learning?",
    "options": [
      {
        "letter": "A",
        "text": "The dataset used to teach a machine learning model by exposing it to examples from which it learns patterns"
      },
      {
        "letter": "B",
        "text": "Data collected about human employees during corporate training and development programs"
      },
      {
        "letter": "C",
        "text": "Data that has been encrypted for secure storage and transmission across networks"
      },
      {
        "letter": "D",
        "text": "Statistical data about organizational training programs and their effectiveness metrics"
      }
    ],
    "answer": "A",
    "explanation": "Training data is the dataset used to teach a machine learning model by exposing it to examples from which it learns patterns, relationships, and behaviors. The quality and representativeness of training data significantly impact model performance and fairness."
  },
  {
    "id": "ext-42",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “overfitting” in machine learning?",
    "options": [
      {
        "letter": "A",
        "text": "When a model is too large in size to deploy efficiently on target hardware"
      },
      {
        "letter": "B",
        "text": "When the training process takes an unusually long time to complete"
      },
      {
        "letter": "C",
        "text": "Using excessive computing power and resources during the model training process"
      },
      {
        "letter": "D",
        "text": "When a model memorizes training data too specifically, including noise, and fails to generalize to new data"
      }
    ],
    "answer": "D",
    "explanation": "Overfitting occurs when a model learns the training data too specifically, including noise and peculiarities, resulting in excellent performance on training data but poor generalization to new, unseen data. This is a key concern in model development and testing."
  },
  {
    "id": "ext-43",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is a “feature” in machine learning?",
    "options": [
      {
        "letter": "A",
        "text": "A specific type of neural network architecture used for deep learning tasks"
      },
      {
        "letter": "B",
        "text": "A special capability or functionality that distinguishes one AI system from another"
      },
      {
        "letter": "C",
        "text": "An individual measurable property or characteristic of the data used as input to a machine learning model"
      },
      {
        "letter": "D",
        "text": "A software bug or defect in the code that affects system behavior"
      }
    ],
    "answer": "C",
    "explanation": "A feature is an individual measurable property or characteristic of the data used as input to a machine learning model (e.g., age, income, temperature). Feature selection and engineering significantly impact model performance."
  },
  {
    "id": "ext-44",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “bias” in the context of AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Systematic errors or unfair outcomes in AI systems that favor or disadvantage particular groups"
      },
      {
        "letter": "B",
        "text": "A purely statistical term describing variance in data with no ethical or social implications"
      },
      {
        "letter": "C",
        "text": "A specific type of neural network architecture used for classification problems"
      },
      {
        "letter": "D",
        "text": "A personal opinion or preference held by an individual AI developer or engineer"
      }
    ],
    "answer": "A",
    "explanation": "Bias in AI refers to systematic errors or unfair outcomes that favor or disadvantage particular groups, often resulting from biased training data, algorithm design, or deployment contexts. This has significant ethical and legal implications."
  },
  {
    "id": "ext-45",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "An AI model trained primarily on data from one demographic group is being considered for deployment across diverse populations. What is the PRIMARY governance concern?",
    "options": [
      {
        "letter": "A",
        "text": "The model will be prohibitively expensive to deploy across multiple demographic groups"
      },
      {
        "letter": "B",
        "text": "The model will operate too slowly due to processing diverse input data patterns"
      },
      {
        "letter": "C",
        "text": "The model may exhibit bias and perform poorly for underrepresented groups, leading to unfair or discriminatory outcomes"
      },
      {
        "letter": "D",
        "text": "The model will require excessive data storage capacity to handle diverse populations"
      }
    ],
    "answer": "C",
    "explanation": "Training data that doesn’t represent the deployment population can lead to biased models that perform poorly for underrepresented groups, causing unfair outcomes and potential discrimination. This is a critical governance concern requiring data representativeness assessment and bias testing."
  },
  {
    "id": "ext-46",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is an AI model?",
    "options": [
      {
        "letter": "A",
        "text": "A mathematical representation of patterns and relationships learned from data, used to make predictions"
      },
      {
        "letter": "B",
        "text": "A fashion industry model who uses AI tools for portfolio and career management"
      },
      {
        "letter": "C",
        "text": "A physical robot or mechanical device that performs automated manufacturing tasks"
      },
      {
        "letter": "D",
        "text": "A relational database system designed for storing and querying structured records"
      }
    ],
    "answer": "A",
    "explanation": "An AI model is a mathematical representation of patterns and relationships learned from data, used to make predictions, classifications, or decisions on new data. It’s the output of the training process. on new inputs. It's the output of the training process."
  },
  {
    "id": "ext-47",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “model drift” in AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Degradation of model performance over time as real-world data patterns change and diverge from training data"
      },
      {
        "letter": "B",
        "text": "Intentional, planned modifications to model parameters as part of scheduled updates"
      },
      {
        "letter": "C",
        "text": "Physical movement or relocation of AI hardware systems between data centers"
      },
      {
        "letter": "D",
        "text": "Moving trained models between different server environments or deployment platforms"
      }
    ],
    "answer": "A",
    "explanation": "Model drift (or concept drift) occurs when the statistical properties of real-world data change over time, causing model performance to degrade as the model becomes less aligned with current patterns. This requires ongoing monitoring and potential retraining."
  },
  {
    "id": "ext-48",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the purpose of testing data in machine learning?",
    "options": [
      {
        "letter": "A",
        "text": "Raw data collected from sensors and logs without any human annotation or labeling"
      },
      {
        "letter": "B",
        "text": "Data stored in a data warehouse and organized for business intelligence reporting"
      },
      {
        "letter": "C",
        "text": "Data that is automatically generated by an AI system during its inference phase"
      },
      {
        "letter": "D",
        "text": "Data that has been labeled or categorized by humans to provide examples for supervised machine learning"
      }
    ],
    "answer": "D",
    "explanation": "Testing data (or test set) is used to evaluate how well a trained model performs on new, unseen data, providing an estimate of real-world performance and helping detect overfitting."
  },
  {
    "id": "ext-49",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “ensemble learning” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Collaborative learning that occurs when groups of people study together"
      },
      {
        "letter": "B",
        "text": "Combining multiple diverse AI models together to improve overall predictive performance and robustness"
      },
      {
        "letter": "C",
        "text": "Training machine learning models on musical compositions and ensemble performances"
      },
      {
        "letter": "D",
        "text": "A specific type of unsupervised learning that uses clustering techniques"
      }
    ],
    "answer": "B",
    "explanation": "Ensemble learning combines multiple AI models (often diverse types) to improve overall performance, accuracy, and robustness beyond what individual models achieve. Common techniques include bagging, boosting, and stacking."
  },
  {
    "id": "ext-50",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "An organization is implementing a generative AI system that creates content. Which technical characteristic poses the GREATEST governance challenge?",
    "options": [
      {
        "letter": "A",
        "text": "The system's user interface design quality and visual presentation layer aesthetics"
      },
      {
        "letter": "B",
        "text": "The system's raw processing speed and computational throughput benchmark metrics"
      },
      {
        "letter": "C",
        "text": "The ability to generate novel content that may include misinformation, bias, or privacy-violating outputs"
      },
      {
        "letter": "D",
        "text": "The system's energy consumption profile and environmental sustainability footprint"
      }
    ],
    "answer": "C",
    "explanation": "Generative AI’s ability to create novel content poses significant governance challenges including potential generation of misinformation, biased or harmful content, privacy violations, and copyright infringement. These risks require robust governance controls including content filtering, human review, and use case restrictions."
  },
  {
    "id": "ext-51",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is algorithmic bias?",
    "options": [
      {
        "letter": "A",
        "text": "A technical preference for selecting certain algorithms over others based on performance"
      },
      {
        "letter": "B",
        "text": "Systematic and unfair discrimination in AI outputs that disadvantages certain groups based on protected traits"
      },
      {
        "letter": "C",
        "text": "A type of malicious software or computer virus that specifically targets AI infrastructure"
      },
      {
        "letter": "D",
        "text": "A software bug or coding error that causes the program to compute incorrect results"
      }
    ],
    "answer": "B",
    "explanation": "Algorithmic bias refers to systematic and unfair discrimination in AI system outputs that disadvantages certain groups based on characteristics like race, gender, age, or other protected attributes. This can result from biased training data, algorithm design, or deployment contexts."
  },
  {
    "id": "ext-52",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "Which of the following is an example of AI-related harm?",
    "options": [
      {
        "letter": "A",
        "text": "Faster data processing capabilities that improve overall operational efficiency metrics"
      },
      {
        "letter": "B",
        "text": "Automated generation of business reports and performance summary dashboard displays"
      },
      {
        "letter": "C",
        "text": "A facial recognition system that has significantly higher error rates for certain demographic groups"
      },
      {
        "letter": "D",
        "text": "Improved customer service responsiveness through the use of automated chatbot systems"
      }
    ],
    "answer": "C",
    "explanation": "A facial recognition system with higher error rates for certain demographic groups represents AI-related harm through discriminatory performance that can lead to misidentification and unfair treatment. representing discriminatory performance that can lead to misidentification and unfair treatment."
  },
  {
    "id": "ext-53",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “privacy harm” in the context of AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Damage to computer hardware components caused by electrical surges or mechanical failure"
      },
      {
        "letter": "B",
        "text": "Financial losses incurred through standard business operations and normal market shifts"
      },
      {
        "letter": "C",
        "text": "Physical injuries or bodily harm caused to individuals by AI-controlled heavy machinery"
      },
      {
        "letter": "D",
        "text": "Unauthorized collection, use, or disclosure of personal information, or invasive inferences without consent"
      }
    ],
    "answer": "D",
    "explanation": "Privacy harm in AI contexts includes unauthorized collection, use, or disclosure of personal information, as well as invasive inferences about individuals that they haven’t consented to or may not be aware of. AI systems can aggregate data to make sensitive inferences. AI systems can aggregate data to make sensitive inferences about individuals."
  },
  {
    "id": "ext-54",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An AI system used for credit decisions consistently denies applications from a particular neighborhood. What type of harm does this potentially represent?",
    "options": [
      {
        "letter": "A",
        "text": "No harm exists as long as the system's overall accuracy metrics are acceptable"
      },
      {
        "letter": "B",
        "text": "Only a minor technical error in the model that can be corrected in the next update"
      },
      {
        "letter": "C",
        "text": "Discriminatory harm that may violate fair lending laws and perpetuate systemic inequality in credit access"
      },
      {
        "letter": "D",
        "text": "An acceptable and standard business practice within the financial services industry"
      }
    ],
    "answer": "C",
    "explanation": "Systematically denying credit to a particular neighborhood may constitute discriminatory harm, potentially violating fair lending laws (like the Equal Credit Opportunity Act) and perpetuating systemic inequality, even if correlated with default rates. This requires investigation for proxy discrimination and disparate impact."
  },
  {
    "id": "ext-55",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “data poisoning” in AI security?",
    "options": [
      {
        "letter": "A",
        "text": "Applying encryption to data to protect it from unauthorized access or disclosure"
      },
      {
        "letter": "B",
        "text": "Deleting all data from a system's storage, rendering it completely inoperable"
      },
      {
        "letter": "C",
        "text": "Intentionally manipulating training data to cause AI systems to learn incorrect patterns or backdoors"
      },
      {
        "letter": "D",
        "text": "Corrupting recipe and food-related data in culinary recommendation applications"
      }
    ],
    "answer": "C",
    "explanation": "Data poisoning is a security attack where adversaries intentionally manipulate training data to cause AI systems to learn incorrect patterns, behaviors, or backdoors, compromising system integrity and reliability."
  },
  {
    "id": "ext-56",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is an “adversarial attack” on an AI system?",
    "options": [
      {
        "letter": "A",
        "text": "Deliberately crafted inputs designed to cause AI systems to make mistakes or behave unexpectedly"
      },
      {
        "letter": "B",
        "text": "Hardware failures and physical component malfunctions in computing infrastructure"
      },
      {
        "letter": "C",
        "text": "Competing AI companies attempting to outperform each other in the marketplace"
      },
      {
        "letter": "D",
        "text": "Negative reviews and critical feedback posted by users of AI products"
      }
    ],
    "answer": "A",
    "explanation": "Adversarial attacks involve deliberately crafted inputs (often imperceptible to humans) designed to cause AI systems to make mistakes, misclassify data, or behave unexpectedly. This is a significant security concern."
  },
  {
    "id": "ext-57",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "A healthcare AI system occasionally makes diagnostic errors. When evaluating the harm, which factor is MOST important from a governance perspective?",
    "options": [
      {
        "letter": "A",
        "text": "The upfront and ongoing cost of the AI system and its infrastructure"
      },
      {
        "letter": "B",
        "text": "The severity of harm, affected populations, and whether errors are systematic or random in nature"
      },
      {
        "letter": "C",
        "text": "Only the system's average accuracy rate across the entire population"
      },
      {
        "letter": "D",
        "text": "The total number of errors regardless of their impact, severity, or distribution"
      }
    ],
    "answer": "B",
    "explanation": "Governance must evaluate harm comprehensively: severity (minor vs. life-threatening), affected populations (whether errors disproportionately impact certain groups), and whether errors are systematic (indicating bias) or random. This informs appropriate risk mitigation."
  },
  {
    "id": "ext-58",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “automation bias”?",
    "options": [
      {
        "letter": "A",
        "text": "The tendency for humans to favor suggestions from automated systems, even when those suggestions are incorrect"
      },
      {
        "letter": "B",
        "text": "A general resistance or bias against adopting automation in workplace environments"
      },
      {
        "letter": "C",
        "text": "Bias introduced during the automated manufacturing and assembly of hardware components"
      },
      {
        "letter": "D",
        "text": "A specific subtype of algorithmic bias that affects model training processes"
      }
    ],
    "answer": "A",
    "explanation": "Automation bias is the human tendency to favor suggestions or decisions from automated systems, even when they’re incorrect or when contradictory information is available. This can lead to over-reliance on AI systems and failure to exercise appropriate human judgment."
  },
  {
    "id": "ext-59",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “model inversion” as a privacy risk?",
    "options": [
      {
        "letter": "A",
        "text": "A standard mathematical operation used in linear algebra and matrix computations"
      },
      {
        "letter": "B",
        "text": "Running AI models backward or in reverse to undo their computations"
      },
      {
        "letter": "C",
        "text": "Inverting the colors of images processed by computer vision systems"
      },
      {
        "letter": "D",
        "text": "An attack where adversaries reconstruct training data or infer sensitive information from model outputs"
      }
    ],
    "answer": "D",
    "explanation": "Model inversion is a privacy attack where adversaries use model outputs and queries to reconstruct training data or infer sensitive information about individuals in the training set, potentially exposing private information."
  },
  {
    "id": "ext-60",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “fairness” in the context of AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Ensuring AI systems have intuitive, easy-to-use interfaces and user experiences"
      },
      {
        "letter": "B",
        "text": "Making AI systems available free of charge to all users and organizations"
      },
      {
        "letter": "C",
        "text": "Ensuring AI systems do not discriminate unfairly and provide equitable outcomes across different groups"
      },
      {
        "letter": "D",
        "text": "Treating every input identically without considering contextual differences between groups"
      }
    ],
    "answer": "C",
    "explanation": "Fairness in AI means ensuring systems don’t discriminate unfairly against individuals or groups and provide equitable outcomes, though defining and measuring fairness can be complex with multiple mathematical definitions."
  },
  {
    "id": "ext-61",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Which of the following represents a “dual-use” concern with AI?",
    "options": [
      {
        "letter": "A",
        "text": "AI technology developed for beneficial purposes that could also be misused for harmful applications"
      },
      {
        "letter": "B",
        "text": "Using a single AI system simultaneously for two different business tasks"
      },
      {
        "letter": "C",
        "text": "Two separate companies independently using the same AI model or service"
      },
      {
        "letter": "D",
        "text": "AI systems equipped with two processors for parallel computation"
      }
    ],
    "answer": "A",
    "explanation": "Dual-use concerns arise when AI technology developed for beneficial purposes (e.g., deepfake detection, language models) could also be misused for harmful purposes (e.g., creating deepfakes, generating misinformation). This requires governance consideration of potential misuse.”"
  },
  {
    "id": "ext-62",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "An AI system for resume screening is found to disadvantage female candidates. Investigation reveals the training data included historical hiring decisions that reflected past discrimination. What type of harm is this, and what’s the root cause?",
    "options": [
      {
        "letter": "A",
        "text": "A random error caused by poor algorithm design and implementation choices"
      },
      {
        "letter": "B",
        "text": "A privacy harm resulting from an unauthorized data breach during model training"
      },
      {
        "letter": "C",
        "text": "Discriminatory harm where historical bias in training data is learned and perpetuated by the AI system"
      },
      {
        "letter": "D",
        "text": "No meaningful harm since the system is accurately reflecting historical patterns in the data"
      }
    ],
    "answer": "C",
    "explanation": "This is discriminatory harm where historical bias in training data (past discriminatory hiring decisions) is learned and perpetuated by the AI system, amplifying existing inequality. This demonstrates how AI can encode and scale historical discrimination."
  },
  {
    "id": "ext-63",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “transparency” as it relates to AI harms?",
    "options": [
      {
        "letter": "A",
        "text": "Providing visibility into AI system capabilities, limitations, and decision-making processes"
      },
      {
        "letter": "B",
        "text": "Publishing clear and transparent pricing information for AI products and services"
      },
      {
        "letter": "C",
        "text": "Using transparent glass materials in computer monitor and display manufacturing"
      },
      {
        "letter": "D",
        "text": "Making all source code, training data, and model weights publicly available"
      }
    ],
    "answer": "A",
    "explanation": "Transparency in AI means providing appropriate visibility into system capabilities, limitations, decision-making processes, and potential harms, enabling stakeholders to make informed decisions and hold systems accountable."
  },
  {
    "id": "ext-64",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “representational harm” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Physical injuries or bodily harm resulting from AI-controlled machinery and robots"
      },
      {
        "letter": "B",
        "text": "Damage to an organization's public reputation and brand value from AI incidents"
      },
      {
        "letter": "C",
        "text": "When AI systems reinforce stereotypes, denigrate certain groups, or fail to recognize them appropriately"
      },
      {
        "letter": "D",
        "text": "Harm caused to underlying data representations and encoding schemes within AI systems"
      }
    ],
    "answer": "C",
    "explanation": "Representational harm occurs when AI systems reinforce stereotypes, denigrate certain groups, or fail to recognize them appropriately (e.g., image recognition failing to recognize certain ethnicities, or language models generating stereotypical content). This affects dignity and social standing."
  },
  {
    "id": "ext-65",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is a “false positive” in AI system errors?",
    "options": [
      {
        "letter": "A",
        "text": "A positive outcome where the system correctly identifies the target condition"
      },
      {
        "letter": "B",
        "text": "A general system malfunction or hardware failure unrelated to prediction accuracy"
      },
      {
        "letter": "C",
        "text": "A correct prediction where the model's output matches the ground truth label"
      },
      {
        "letter": "D",
        "text": "When a system incorrectly identifies something as present or true when it is actually absent or false"
      }
    ],
    "answer": "D",
    "explanation": "A false positive occurs when an AI system incorrectly identifies something as present, true, or positive when it’s actually absent, false, or negative (e.g., flagging a legitimate transaction as 24 fraudulent). The impact depends on the use case."
  },
  {
    "id": "ext-66",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "In a criminal justice AI system, which type of error is typically considered MORE harmful from an ethical perspective?",
    "options": [
      {
        "letter": "A",
        "text": "False negatives, because failing to predict reoffending creates greater risk to public safety"
      },
      {
        "letter": "B",
        "text": "Neither type of error matters as long as the system's overall accuracy rate is sufficiently high"
      },
      {
        "letter": "C",
        "text": "False positives and false negatives carry exactly equal weight in criminal justice contexts"
      },
      {
        "letter": "D",
        "text": "False positives, due to the risk of unjustly restricting individual liberty based on incorrect predictions"
      }
    ],
    "answer": "D",
    "explanation": "In criminal justice contexts, false positives (incorrectly predicting reoffending) are often considered more ethically problematic because they may result in unjust detention or denial of liberty based on incorrect predictions. However, this involves complex ethical trade-offs."
  },
  {
    "id": "ext-67",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “model opacity”?",
    "options": [
      {
        "letter": "A",
        "text": "Models whose parameters and weights have been encrypted for security purposes"
      },
      {
        "letter": "B",
        "text": "The difficulty in understanding how an AI model makes decisions, often called the black box problem"
      },
      {
        "letter": "C",
        "text": "Physical darkness or insufficient brightness in computer display screens"
      },
      {
        "letter": "D",
        "text": "AI models specifically designed for processing and analyzing image data"
      }
    ],
    "answer": "B",
    "explanation": "Model opacity (or the “black box” problem) refers to the difficulty in understanding how complex AI models, particularly deep neural networks, make decisions, which creates challenges for accountability, debugging, and trust."
  },
  {
    "id": "ext-68",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “allocative harm” in AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Harm caused by poor resource allocation decisions within IT departments"
      },
      {
        "letter": "B",
        "text": "Physical injuries caused by malfunctioning robots in industrial settings"
      },
      {
        "letter": "C",
        "text": "Harm resulting from inefficient data storage allocation and management"
      },
      {
        "letter": "D",
        "text": "When AI systems unfairly distribute opportunities, resources, or services to different groups"
      }
    ],
    "answer": "D",
    "explanation": "Allocative harm occurs when AI systems unfairly distribute opportunities, resources, or services (e.g., credit, jobs, healthcare) to different groups, resulting in material disadvantage. This is 25 distinct from representational harm."
  },
  {
    "id": "ext-69",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "An AI system exhibits high overall accuracy but significantly lower accuracy for a minority group. From a harm perspective, what is the PRIMARY concern?",
    "options": [
      {
        "letter": "A",
        "text": "Only a minor technical problem that requires routine parameter adjustments to resolve"
      },
      {
        "letter": "B",
        "text": "Disparate impact and discriminatory harm to the minority group regardless of high overall accuracy metrics"
      },
      {
        "letter": "C",
        "text": "The minority group's data quality is the root problem, not the AI system's design or deployment"
      },
      {
        "letter": "D",
        "text": "No significant concern exists since the system demonstrates high overall accuracy across the population"
      }
    ],
    "answer": "B",
    "explanation": "Significantly lower accuracy for a minority group represents disparate impact and discriminatory harm, regardless of high overall accuracy. This can violate anti-discrimination laws and ethical principles. Governance must address performance disparities across groups."
  },
  {
    "id": "ext-70",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “informed consent” in the context of AI and data?",
    "options": [
      {
        "letter": "A",
        "text": "Consent obtained without providing detailed explanations of how the data will be processed"
      },
      {
        "letter": "B",
        "text": "Individuals' voluntary agreement to data use based on clear understanding of purposes, risks, and their rights"
      },
      {
        "letter": "C",
        "text": "Consent forms that are written in simple, plain language regardless of completeness of disclosure"
      },
      {
        "letter": "D",
        "text": "Automatic consent that is implied when individuals choose to use a technology or service"
      }
    ],
    "answer": "B",
    "explanation": "Informed consent means individuals voluntarily agree to data collection and use based on clear, understandable information about purposes, risks, implications, and their rights. This is fundamental to privacy and autonomy.”"
  },
  {
    "id": "ext-71",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “function creep” in AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Gradual accumulation of errors and bugs in the system's codebase over time"
      },
      {
        "letter": "B",
        "text": "Gradual expansion of AI system use beyond its original purpose without proper governance review"
      },
      {
        "letter": "C",
        "text": "Physical movement or relocation of AI hardware across different facilities"
      },
      {
        "letter": "D",
        "text": "Slow or degraded system performance that affects user experience and productivity"
      }
    ],
    "answer": "B",
    "explanation": "Function creep occurs when an AI system gradually expands beyond its original purpose or scope without proper governance, risk assessment, or consent, potentially creating new harms. For example, a health monitoring system used for employee surveillance."
  },
  {
    "id": "ext-72",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “data minimization” as a principle for reducing AI harms?",
    "options": [
      {
        "letter": "A",
        "text": "Reducing the total number of databases and data repositories across the organization"
      },
      {
        "letter": "B",
        "text": "Using compression algorithms to make individual data files smaller in size"
      },
      {
        "letter": "C",
        "text": "Collecting and processing only the minimum personal data necessary for the specified purpose"
      },
      {
        "letter": "D",
        "text": "Minimizing the financial costs associated with data storage and infrastructure"
      }
    ],
    "answer": "C",
    "explanation": "Data minimization is the principle of collecting and processing only the minimum personal data necessary for the specified purpose, reducing privacy risks and potential harms from data breaches or misuse."
  },
  {
    "id": "ext-73",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “surveillance harm” in AI contexts?",
    "options": [
      {
        "letter": "A",
        "text": "Injuries or occupational hazards affecting security personnel and staff"
      },
      {
        "letter": "B",
        "text": "Harm from excessive monitoring that chills legitimate behavior, invades privacy, or enables social control"
      },
      {
        "letter": "C",
        "text": "Physical damage or vandalism affecting surveillance camera equipment"
      },
      {
        "letter": "D",
        "text": "Harm caused by the absence or insufficient deployment of security cameras"
      }
    ],
    "answer": "B",
    "explanation": "Surveillance harm arises from excessive or inappropriate monitoring enabled by AI systems (e.g., facial recognition, behavior tracking) that chills free behavior, invades privacy, or enables inappropriate control or discrimination. This affects autonomy and freedom."
  },
  {
    "id": "ext-74",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "A city implements an AI system for predictive policing that directs officers to certain neighborhoods. The system is trained on historical crime data. What is the MOST significant potential harm?",
    "options": [
      {
        "letter": "A",
        "text": "Reduced overall police efficiency due to reliance on algorithmic recommendations"
      },
      {
        "letter": "B",
        "text": "No harm exists as long as the system's predictions are statistically accurate"
      },
      {
        "letter": "C",
        "text": "Only privacy concerns related to the collection of location and demographic data"
      },
      {
        "letter": "D",
        "text": "Feedback loops that perpetuate over-policing of already over-policed communities, amplifying systemic bias"
      }
    ],
    "answer": "D",
    "explanation": "Predictive policing systems trained on historical data can create feedback loops: over- policed communities generate more crime data, leading to more predicted crime, resulting in more policing, perpetuating and amplifying historical bias and discriminatory enforcement."
  },
  {
    "id": "ext-75",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “environmental harm” related to AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Energy consumption and carbon emissions from training and running large-scale AI models"
      },
      {
        "letter": "B",
        "text": "Physical damage or interference with environmental sensor equipment and instrumentation"
      },
      {
        "letter": "C",
        "text": "AI systems applied in environmental science for climate modeling and ecology research"
      },
      {
        "letter": "D",
        "text": "AI systems designed and deployed for environmental monitoring and conservation purposes"
      }
    ],
    "answer": "A",
    "explanation": "Environmental harm from AI includes significant energy consumption and carbon emissions from training and operating large AI models, particularly large language models and deep learning systems, contributing to climate change."
  },
  {
    "id": "ext-76",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the primary goal of “Responsible AI”?",
    "options": [
      {
        "letter": "A",
        "text": "Maximizing AI system processing speed and computational throughput above all else"
      },
      {
        "letter": "B",
        "text": "Developing and deploying AI systems that are ethical, fair, transparent, and accountable"
      },
      {
        "letter": "C",
        "text": "Eliminating or minimizing human involvement in AI-related decisions and processes"
      },
      {
        "letter": "D",
        "text": "Reducing the financial costs and timeline of AI development projects"
      }
    ],
    "answer": "B",
    "explanation": "Responsible AI aims to develop and deploy AI systems that embody ethical principles including fairness, transparency, accountability, privacy, and safety, ensuring AI benefits society while minimizing harms."
  },
  {
    "id": "ext-77",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "Which of the following is a core principle of AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "Automating every organizational decision to eliminate human bias from all processes"
      },
      {
        "letter": "B",
        "text": "Fairness and non-discrimination in system design, development, and outcomes"
      },
      {
        "letter": "C",
        "text": "Maximizing shareholder returns and profitability from AI system investments"
      },
      {
        "letter": "D",
        "text": "Pursuing the highest possible technical complexity in model architecture and design"
      }
    ],
    "answer": "B",
    "explanation": "Fairness and non-discrimination is a core principle of AI ethics, ensuring AI systems don’t unfairly disadvantage individuals or groups. Other core principles include transparency, accountability, privacy, and safety."
  },
  {
    "id": "ext-78",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What does “accountability” mean in the context of AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "Clear assignment of responsibility for AI decisions and outcomes, with mechanisms for redress"
      },
      {
        "letter": "B",
        "text": "Maintaining accurate financial records and audit trails for AI project expenditures"
      },
      {
        "letter": "C",
        "text": "Counting and cataloging the total number of AI systems deployed across the organization"
      },
      {
        "letter": "D",
        "text": "Fully automated decision-making that requires no human involvement or oversight"
      }
    ],
    "answer": "A",
    "explanation": "Accountability in AI ethics means clearly assigning responsibility for AI system decisions, outcomes, and impacts to specific individuals or organizations, with mechanisms for explanation, redress, and remedy when harms occur."
  },
  {
    "id": "ext-79",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “human agency” in AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "AI systems designed to mimic and replicate human behavior and decision patterns"
      },
      {
        "letter": "B",
        "text": "Employment agencies that specialize in placing workers in AI-related positions"
      },
      {
        "letter": "C",
        "text": "Government bodies and regulatory agencies that oversee AI development and deployment"
      },
      {
        "letter": "D",
        "text": "Preserving human autonomy, control, and decision-making authority in interactions with AI systems"
      }
    ],
    "answer": "D",
    "explanation": "Human agency in AI ethics refers to preserving human autonomy, control, and meaningful decision-making authority, ensuring AI systems augment rather than replace human judgment in significant decisions."
  },
  {
    "id": "ext-80",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An AI system makes recommendations that humans typically follow without review. From an ethical perspective, what is the PRIMARY concern?",
    "options": [
      {
        "letter": "A",
        "text": "The system costs too much to operate and maintain relative to the value it provides"
      },
      {
        "letter": "B",
        "text": "The system has become too efficient, creating dependency on its recommendations"
      },
      {
        "letter": "C",
        "text": "Erosion of human agency and accountability, with automation bias leading to uncritical acceptance of AI outputs"
      },
      {
        "letter": "D",
        "text": "The system operates too slowly to be practical for real-time decision-making needs"
      }
    ],
    "answer": "C",
    "explanation": "When humans routinely accept AI recommendations without meaningful review, this erodes human agency and accountability, with automation bias leading to uncritical acceptance even of errors. This is ethically problematic, especially for high-stakes decisions."
  },
  {
    "id": "ext-81",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “beneficence” as an AI ethics principle?",
    "options": [
      {
        "letter": "A",
        "text": "Making charitable donations and philanthropic contributions from AI company profits"
      },
      {
        "letter": "B",
        "text": "AI systems should actively promote well-being and benefit both individuals and society at large"
      },
      {
        "letter": "C",
        "text": "Ensuring AI systems command premium pricing that reflects their development costs"
      },
      {
        "letter": "D",
        "text": "Maximizing the financial benefits and monetary returns generated by AI investments"
      }
    ],
    "answer": "B",
    "explanation": "Beneficence is the ethical principle that AI systems should promote well-being and provide benefits to individuals and society, actively contributing to human flourishing. This is paired with non-maleficence (avoiding harm)."
  },
  {
    "id": "ext-82",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “non-maleficence” in AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "Preventing AI systems from becoming too powerful or capable relative to human abilities"
      },
      {
        "letter": "B",
        "text": "The obligation to avoid causing harm through the design, development, and deployment of AI systems"
      },
      {
        "letter": "C",
        "text": "Restricting AI use exclusively to non-medical and non-healthcare applications"
      },
      {
        "letter": "D",
        "text": "Avoiding AI systems that are expensive to build, train, and maintain in production"
      }
    ],
    "answer": "B",
    "explanation": "Non-maleficence is the ethical obligation to avoid causing harm through AI systems, requiring proactive identification and mitigation of potential harms. This is a foundational principle from medical ethics applied to AI."
  },
  {
    "id": "ext-83",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "Two AI ethics principles appear to conflict: transparency (explaining decisions) and privacy (protecting data). How should this tension BEST be resolved?",
    "options": [
      {
        "letter": "A",
        "text": "Always prioritize privacy over transparency, withholding all explanation to protect personal data"
      },
      {
        "letter": "B",
        "text": "Disregard both principles when they conflict and rely solely on accuracy as the governing metric"
      },
      {
        "letter": "C",
        "text": "Always prioritize transparency over privacy, disclosing all information regardless of sensitivity"
      },
      {
        "letter": "D",
        "text": "Balance both principles through context-specific approaches like privacy-preserving explanation techniques"
      }
    ],
    "answer": "D",
    "explanation": "Ethical tensions require context-specific balancing rather than absolute prioritization. Privacy-preserving explanation techniques, aggregate explanations, and appropriate disclosure levels 30 can balance transparency and privacy."
  },
  {
    "id": "ext-84",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “dignity” in the context of AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "Assigning formal titles and hierarchical rankings to different categories of AI systems"
      },
      {
        "letter": "B",
        "text": "Developing AI systems that are expensive and exclusive, conveying status and prestige"
      },
      {
        "letter": "C",
        "text": "Designing AI systems exclusively for government and public sector applications"
      },
      {
        "letter": "D",
        "text": "Respecting the inherent worth and fundamental rights of individuals in AI system design and deployment"
      }
    ],
    "answer": "D",
    "explanation": "Dignity in AI ethics means respecting the inherent worth, rights, and humanity of individuals, ensuring AI systems don’t dehumanize, objectify, or treat people merely as data points. This includes respecting autonomy and avoiding degrading treatment."
  },
  {
    "id": "ext-85",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “value alignment” in AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "Aligning and organizing data records within databases and storage systems"
      },
      {
        "letter": "B",
        "text": "Aligning AI project budgets and costs with organizational financial planning cycles"
      },
      {
        "letter": "C",
        "text": "Performing financial valuation and ROI analysis of AI system investments"
      },
      {
        "letter": "D",
        "text": "Ensuring AI systems' goals, behaviors, and decision criteria align with human values and societal norms"
      }
    ],
    "answer": "D",
    "explanation": "Value alignment refers to ensuring AI systems’ goals, behaviors, and outcomes align with human values, ethical principles, and societal norms, rather than pursuing objectives that conflict with human interests. This is particularly important for advanced AI systems."
  },
  {
    "id": "ext-86",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “justice” as an AI ethics principle?",
    "options": [
      {
        "letter": "A",
        "text": "Legal proceedings and litigation specifically involving AI systems and technologies"
      },
      {
        "letter": "B",
        "text": "AI systems purpose-built for courtroom and judicial decision-making applications"
      },
      {
        "letter": "C",
        "text": "Fair distribution of AI benefits and burdens across society, avoiding exacerbation of existing inequality"
      },
      {
        "letter": "D",
        "text": "Imposing punitive sanctions and penalties on AI systems that produce errors"
      }
    ],
    "answer": "C",
    "explanation": "Justice in AI ethics concerns fair distribution of AI benefits and burdens across society, ensuring AI doesn’t exacerbate existing inequalities or create new ones, and that all groups can benefit from AI advances. 31"
  },
  {
    "id": "ext-87",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An AI system could significantly benefit wealthy users but may disadvantage low-income users who lack access. Which ethical principle is MOST relevant?",
    "options": [
      {
        "letter": "A",
        "text": "Technical innovation — advancing the state of the art regardless of distributional consequences"
      },
      {
        "letter": "B",
        "text": "Commercial profitability — maximizing financial returns for the organization and its shareholders"
      },
      {
        "letter": "C",
        "text": "Operational efficiency — optimizing system throughput and minimizing resource consumption"
      },
      {
        "letter": "D",
        "text": "Justice and equitable access — ensuring AI benefits are distributed fairly across all socioeconomic groups"
      }
    ],
    "answer": "D",
    "explanation": "Justice and equitable access are most relevant when AI benefits are distributed unequally, potentially exacerbating existing inequalities. Ethical AI development should consider accessibility and avoid creating or widening digital divides."
  },
  {
    "id": "ext-88",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “explicability” in AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "The ability to explain AI system decisions and behaviors in terms that affected people can understand"
      },
      {
        "letter": "B",
        "text": "The capability to export model weights and parameters to external systems and platforms"
      },
      {
        "letter": "C",
        "text": "Making AI system architectures more complex and sophisticated to improve performance"
      },
      {
        "letter": "D",
        "text": "Filtering and moderating explicit or inappropriate content from AI training data and outputs"
      }
    ],
    "answer": "A",
    "explanation": "Explicability (closely related to explainability) is the ability to explain AI system decisions, behaviors, and outcomes in terms that relevant stakeholders can understand, supporting transparency and accountability."
  },
  {
    "id": "ext-89",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “contestability” in AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "Identifying controversial or disputed applications of AI technology in public discourse"
      },
      {
        "letter": "B",
        "text": "The ability for individuals to challenge, appeal, or seek human review of AI-driven decisions affecting them"
      },
      {
        "letter": "C",
        "text": "Creating competitive marketplaces where multiple AI systems compete on performance"
      },
      {
        "letter": "D",
        "text": "Developing AI systems that can compete against each other in benchmark evaluations"
      }
    ],
    "answer": "B",
    "explanation": "Contestability is the principle that individuals should be able to challenge, appeal, or seek human review of AI system decisions that significantly affect them, ensuring accountability and redress mechanisms. This is particularly important for high-stakes decisions. 32"
  },
  {
    "id": "ext-90",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "An organization must choose between two AI systems: System A is more accurate but less explainable; System B is less accurate but more explainable. The application is loan approval. Which ethical consideration should MOST influence the decision?",
    "options": [
      {
        "letter": "A",
        "text": "Always select the most accurate system regardless of explainability or transparency concerns"
      },
      {
        "letter": "B",
        "text": "Always select the most explainable system regardless of any accuracy trade-offs involved"
      },
      {
        "letter": "C",
        "text": "Balance accuracy with explainability, considering legal requirements and the context of the decisions being made"
      },
      {
        "letter": "D",
        "text": "Base the selection decision solely on the comparative acquisition and operational costs"
      }
    ],
    "answer": "C",
    "explanation": "Loan approval involves significant individual impact and legal requirements (e.g., adverse action notices under ECOA). The decision should balance accuracy with explainability, considering legal obligations, the need for contestability, and the ability to identify and address discrimination. Absolute prioritization (A or C) ignores important trade-offs."
  },
  {
    "id": "ext-91",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “privacy by design” in AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "Designing private, soundproof office spaces for AI development and engineering teams"
      },
      {
        "letter": "B",
        "text": "Conducting AI system design activities in private, away from public scrutiny or oversight"
      },
      {
        "letter": "C",
        "text": "Integrating privacy protections into AI system design from the earliest stages, not as a retrospective fix"
      },
      {
        "letter": "D",
        "text": "Configuring end-user privacy settings and preference panels within application interfaces"
      }
    ],
    "answer": "C",
    "explanation": "Privacy by design means integrating privacy protections into AI system design from the beginning, making privacy a core feature rather than an afterthought or add-on. This includes data minimization, purpose limitation, and security measures."
  },
  {
    "id": "ext-92",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “dual use” as an ethical concern in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Using a single AI system to perform two different business functions simultaneously"
      },
      {
        "letter": "B",
        "text": "Two separate users or organizations sharing access to the same AI model instance"
      },
      {
        "letter": "C",
        "text": "AI systems equipped with dual processors for parallel computation and redundancy"
      },
      {
        "letter": "D",
        "text": "AI technologies that can be applied to both beneficial purposes and harmful misuse by different actors"
      }
    ],
    "answer": "D",
    "explanation": "Dual use refers to AI technologies that can be used for both beneficial and harmful purposes (e.g., facial recognition for security vs. surveillance, language models for education vs. misinformation). This creates ethical obligations to consider potential misuse. 33"
  },
  {
    "id": "ext-93",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “informed consent” in AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "Consent obtained without providing any explanation of the data processing purposes or risks"
      },
      {
        "letter": "B",
        "text": "Implied consent that is automatically assumed when an individual uses a particular technology or service"
      },
      {
        "letter": "C",
        "text": "Consent forms that present information in a detailed and thorough format regardless of comprehension"
      },
      {
        "letter": "D",
        "text": "Individuals' voluntary agreement based on clear understanding of how their data will be used and the implications"
      }
    ],
    "answer": "D",
    "explanation": "Informed consent requires individuals to voluntarily agree to data collection and use based on clear, understandable information about purposes, risks, implications, and their rights, respecting autonomy.”"
  },
  {
    "id": "ext-94",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An AI system collects data for one purpose but the organization wants to use it for a different purpose. What ethical principle is MOST relevant?",
    "options": [
      {
        "letter": "A",
        "text": "Cost reduction — reusing existing data eliminates the expense of new data collection initiatives"
      },
      {
        "letter": "B",
        "text": "Purpose limitation — data collected for one purpose generally cannot be repurposed without additional consent"
      },
      {
        "letter": "C",
        "text": "Operational efficiency — repurposing data reduces the cost and effort of collecting new datasets"
      },
      {
        "letter": "D",
        "text": "Technical innovation — new use cases for existing data drive faster AI development cycles"
      }
    ],
    "answer": "B",
    "explanation": "Purpose limitation (using data only for specified purposes) and informed consent (obtaining agreement for new uses) are most relevant. Using data for purposes beyond original consent violates privacy principles and may violate data protection laws."
  },
  {
    "id": "ext-95",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "An AI ethics framework includes principles of fairness, transparency, and accountability. However, implementing all three fully would make the system commercially unviable. How should this be approached?",
    "options": [
      {
        "letter": "A",
        "text": "Implement ethics principles only if key competitors in the market are also doing"
      },
      {
        "letter": "B",
        "text": "Abandon the AI project entirely whenever any ethical tension or trade-off is identified"
      },
      {
        "letter": "C",
        "text": "Disregard ethical concerns to ensure commercial viability and speed to market"
      },
      {
        "letter": "D",
        "text": "Assess whether AI is appropriate for the use case, explore technical mitigations, and find acceptable trade-offs"
      }
    ],
    "answer": "D",
    "explanation": "Ethical tensions require thoughtful analysis: assess whether the use case is appropriate for AI given constraints, explore technical solutions (e.g., privacy-preserving techniques), and find acceptable balances that meet minimum ethical and legal standards. If this isn’t possible, the use case 34 may be inappropriate."
  },
  {
    "id": "ext-96",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “algorithmic transparency”?",
    "options": [
      {
        "letter": "A",
        "text": "Using transparent physical materials in computer display and monitor manufacturing"
      },
      {
        "letter": "B",
        "text": "Providing visibility into how algorithms function, make decisions, and affect the individuals subject to them"
      },
      {
        "letter": "C",
        "text": "Disclosing transparent, publicly-available pricing for algorithmic products and services"
      },
      {
        "letter": "D",
        "text": "Publishing all source code, training data, and model weights as open-source artifacts"
      }
    ],
    "answer": "B",
    "explanation": "Algorithmic transparency means providing appropriate visibility into how algorithms work, make decisions, and impact individuals, enabling understanding, accountability, and trust. The level of transparency should be appropriate for stakeholders."
  },
  {
    "id": "ext-97",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “meaningful human control” in AI ethics?",
    "options": [
      {
        "letter": "A",
        "text": "Building AI systems that can understand and interpret the semantic meaning of human communications"
      },
      {
        "letter": "B",
        "text": "Ensuring humans retain appropriate authority to oversee, intervene in, and override AI system decisions"
      },
      {
        "letter": "C",
        "text": "Controlling and minimizing the financial costs associated with AI system development and operations"
      },
      {
        "letter": "D",
        "text": "Developing gesture-based control interfaces that let humans direct AI systems through physical movement"
      }
    ],
    "answer": "B",
    "explanation": "Meaningful human control ensures humans retain appropriate authority and ability to oversee, intervene in, and override AI system decisions, particularly for high-stakes applications. This preserves human agency and accountability."
  },
  {
    "id": "ext-98",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “safety” as an AI ethics principle?",
    "options": [
      {
        "letter": "A",
        "text": "Ensuring AI systems operate reliably and predictably without causing unintended harm to people or property"
      },
      {
        "letter": "B",
        "text": "Occupational health and safety standards for AI developers and engineering teams"
      },
      {
        "letter": "C",
        "text": "Physical safety protocols for handling AI hardware components and server equipment"
      },
      {
        "letter": "D",
        "text": "Data backup and disaster recovery safety measures for training datasets"
      }
    ],
    "answer": "A",
    "explanation": "Safety in AI ethics means ensuring systems operate reliably, predictably, and securely without causing unintended harm, including technical safety (avoiding failures) and broader safety (avoiding harmful outcomes). 35"
  },
  {
    "id": "ext-99",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “sustainability” as an emerging AI ethics principle?",
    "options": [
      {
        "letter": "A",
        "text": "Considering the environmental footprint and long-term societal effects of AI systems throughout their lifecycle"
      },
      {
        "letter": "B",
        "text": "Sustaining and growing AI company profitability and shareholder returns over time"
      },
      {
        "letter": "C",
        "text": "Developing sustainable, recurring-revenue business models around AI products and services"
      },
      {
        "letter": "D",
        "text": "Maintaining AI systems in operation indefinitely without ever retiring or replacing them"
      }
    ],
    "answer": "A",
    "explanation": "Sustainability in AI ethics involves considering environmental impacts (energy consumption, carbon emissions) and long-term societal effects, ensuring AI development doesn’t compromise future generations’ well-being."
  },
  {
    "id": "ext-100",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "An AI system embodies all major ethical principles but would displace 30% of a company’s workforce. From an ethical perspective, what is the MOST appropriate approach?",
    "options": [
      {
        "letter": "A",
        "text": "Consider broader ethical obligations including just transition planning, retraining programs, and stakeholder engagement"
      },
      {
        "letter": "B",
        "text": "Deploy the system immediately since it satisfies all major ethical principles at the system level"
      },
      {
        "letter": "C",
        "text": "Deploy the system quietly without stakeholder consultation to avoid controversy and resistance"
      },
      {
        "letter": "D",
        "text": "Never deploy any AI system that results in any degree of workforce displacement"
      }
    ],
    "answer": "A",
    "explanation": "Ethical AI deployment requires considering broader obligations beyond system-level ethics, including impacts on workers, just transition planning, retraining opportunities, stakeholder engagement, and societal effects. System ethics alone is insufficient."
  },
  {
    "id": "ext-101",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "Who are “stakeholders” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Only government regulators and agencies that have statutory authority over AI"
      },
      {
        "letter": "B",
        "text": "Only the company's shareholders and investors who hold equity in the organization"
      },
      {
        "letter": "C",
        "text": "All individuals, groups, and entities affected by or holding a legitimate interest in AI systems and their outcomes"
      },
      {
        "letter": "D",
        "text": "Only the AI developers and engineers who build and maintain the technical systems"
      }
    ],
    "answer": "C",
    "explanation": "Stakeholders in AI governance include all individuals, groups, and entities affected by or having legitimate interest in AI systems, including developers, users, affected individuals, regulators, civil society, and the broader public."
  },
  {
    "id": "ext-102",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "Which stakeholder group typically has PRIMARY responsibility for implementing AI governance within an organization?",
    "options": [
      {
        "letter": "A",
        "text": "Senior leadership and designated governance roles such as an AI ethics board or chief ethics officer"
      },
      {
        "letter": "B",
        "text": "External consultants and advisory firms brought in for specific governance projects"
      },
      {
        "letter": "C",
        "text": "Only the data science team, since governance is inherently a technical discipline"
      },
      {
        "letter": "D",
        "text": "Only the legal department, since AI governance is fundamentally a compliance function"
      }
    ],
    "answer": "A",
    "explanation": "Senior leadership and designated governance roles (AI ethics boards, compliance officers, risk management) have primary responsibility for implementing AI governance, though implementation requires cross-functional collaboration."
  },
  {
    "id": "ext-103",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What role do “affected individuals” play as stakeholders in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "They should be responsible for designing and building all AI systems that affect them"
      },
      {
        "letter": "B",
        "text": "No meaningful role — affected individuals are passive recipients of AI system outcomes"
      },
      {
        "letter": "C",
        "text": "They provide essential perspectives on real-world impacts, risks, and fairness, and should have a voice in governance"
      },
      {
        "letter": "D",
        "text": "They become relevant stakeholders only after measurable harms have already occurred"
      }
    ],
    "answer": "C",
    "explanation": "Affected individuals are crucial stakeholders who provide important perspectives on AI impacts, risks, and fairness. Meaningful stakeholder engagement includes their voices in governance decisions, impact assessments, and system design."
  },
  {
    "id": "ext-104",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the role of regulators as stakeholders in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "To design, develop, and deploy AI systems on behalf of regulated organizations"
      },
      {
        "letter": "B",
        "text": "To establish legal requirements, issue interpretive guidance, and enforce compliance with applicable laws"
      },
      {
        "letter": "C",
        "text": "To replace organizational governance structures with direct regulatory oversight"
      },
      {
        "letter": "D",
        "text": "To provide funding and investment capital for AI research and development activities"
      }
    ],
    "answer": "B",
    "explanation": "Regulators establish legal requirements, provide guidance and standards, and enforce compliance, creating the external governance environment within which organizations operate. They don’t develop systems (A), replace organizational governance (C), or primarily fund development (D)."
  },
  {
    "id": "ext-105",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An organization is developing an AI system for healthcare. Which stakeholders should be engaged in governance decisions?",
    "options": [
      {
        "letter": "A",
        "text": "Only hospital administrators and healthcare facility management personnel"
      },
      {
        "letter": "B",
        "text": "Only the internal development team and engineering staff building the system"
      },
      {
        "letter": "C",
        "text": "Healthcare providers, patients, ethicists, legal experts, data protection officers, and affected communities"
      },
      {
        "letter": "D",
        "text": "Only the external AI technology vendor supplying the underlying platform"
      }
    ],
    "answer": "C",
    "explanation": "Healthcare AI requires engagement with diverse stakeholders including healthcare providers (users), patients (affected individuals), ethicists (ethical implications), legal experts (compliance), data protection officers (privacy), and affected communities (broader impacts)."
  },
  {
    "id": "ext-106",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is “stakeholder engagement” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Systematically involving relevant stakeholders in governance decisions, impact assessments, and policy development"
      },
      {
        "letter": "B",
        "text": "Engaging a single representative to speak on behalf of all stakeholder categories"
      },
      {
        "letter": "C",
        "text": "Conducting one-time surveys after AI systems have been fully deployed"
      },
      {
        "letter": "D",
        "text": "Sending periodic email newsletters updating stakeholders on completed AI projects"
      }
    ],
    "answer": "A",
    "explanation": "Stakeholder engagement means systematically involving relevant stakeholders in governance decisions, impact assessments, and system design through consultation, participation, and collaboration."
  },
  {
    "id": "ext-107",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is the role of civil society organizations as stakeholders in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "They certify AI products for commercial sale through proprietary standards"
      },
      {
        "letter": "B",
        "text": "They develop and deploy AI systems on behalf of government agencies and regulators"
      },
      {
        "letter": "C",
        "text": "They advocate for public interest, provide independent oversight, and represent the voices of affected communities"
      },
      {
        "letter": "D",
        "text": "They primarily provide venture capital funding for AI startups and innovation"
      }
    ],
    "answer": "C",
    "explanation": "Civil society organizations play important roles advocating for public interest, providing independent oversight, representing affected communities, and contributing expertise on social impacts and rights. They don’t control development (C) but provide valuable external perspectives."
  },
  {
    "id": "ext-108",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "Different stakeholder groups have conflicting interests regarding an AI system: developers want rapid deployment, legal wants extensive review, affected communities want more transparency, and business wants cost minimization. How should these conflicts be BEST resolved?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy the system first and address stakeholder concerns after operational issues arise"
      },
      {
        "letter": "B",
        "text": "Allow the most politically powerful stakeholder group to determine the final outcome"
      },
      {
        "letter": "C",
        "text": "Use structured governance processes to balance competing interests, prioritizing legal compliance and harm prevention"
      },
      {
        "letter": "D",
        "text": "Disregard the concerns of stakeholders who hold less organizational influence or leverage"
      }
    ],
    "answer": "C",
    "explanation": "Stakeholder conflicts require structured governance processes that balance legitimate interests while prioritizing legal compliance, harm prevention, and ethical principles. This may involve trade-offs but should not simply defer to power (A), ignore stakeholders (B), or delay addressing concerns (D)."
  },
  {
    "id": "ext-109",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the role of data subjects as stakeholders?",
    "options": [
      {
        "letter": "A",
        "text": "They are passive data points with no role in governance"
      },
      {
        "letter": "B",
        "text": "They serve as expert consultants who advise on AI system architecture and design"
      },
      {
        "letter": "C",
        "text": "They are government-designated representatives who authorize all data processing activities"
      },
      {
        "letter": "D",
        "text": "They are individuals whose personal data is processed, holding rights to information, access, and control"
      }
    ],
    "answer": "D",
    "explanation": "Data subjects are individuals whose personal data is collected and used by AI systems. They have legal rights (under laws like GDPR) to information, access, correction, and control over their data, making them key stakeholders."
  },
  {
    "id": "ext-110",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “participatory design” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Publishing design documents for stakeholder review with no feedback mechanism"
      },
      {
        "letter": "B",
        "text": "Allowing stakeholders to vote on pre-determined design options after completion"
      },
      {
        "letter": "C",
        "text": "Holding design meetings where stakeholders observe but do not contribute"
      },
      {
        "letter": "D",
        "text": "Involving affected stakeholders directly in the design process to ensure systems address real needs and concerns"
      }
    ],
    "answer": "D",
    "explanation": "Participatory design involves meaningfully involving affected stakeholders in the AI system design process to ensure systems meet actual needs, address concerns, and incorporate diverse perspectives. This goes beyond consultation to active participation."
  },
  {
    "id": "ext-111",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What role do AI developers play as stakeholders?",
    "options": [
      {
        "letter": "A",
        "text": "They are exempt from governance requirements since they understand the technology"
      },
      {
        "letter": "B",
        "text": "They set high-level governance policy independent of organizational leadership direction"
      },
      {
        "letter": "C",
        "text": "They implement governance requirements and bear professional responsibility for ethical development practices"
      },
      {
        "letter": "D",
        "text": "They have sole authority to approve all AI deployments without further review"
      }
    ],
    "answer": "C",
    "explanation": "AI developers are key stakeholders who implement governance requirements and have professional responsibility for ethical development, including considering impacts, following best practices, and raising concerns."
  },
  {
    "id": "ext-112",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An AI system will significantly impact a marginalized community. What is the MOST appropriate approach to stakeholder engagement?",
    "options": [
      {
        "letter": "A",
        "text": "Proactive, meaningful engagement with community representatives throughout development, with genuine influence on decisions"
      },
      {
        "letter": "B",
        "text": "Publish documentation explaining why community input was ultimately not incorporated"
      },
      {
        "letter": "C",
        "text": "Notify the community after deployment is complete and the system is operational"
      },
      {
        "letter": "D",
        "text": "Include one token community representative on a committee dominated by technical staff"
      }
    ],
    "answer": "A",
    "explanation": "Significant impacts on marginalized communities require proactive, meaningful engagement with community representatives throughout development, with attention to power dynamics, accessibility, and ensuring genuine influence on decisions."
  },
  {
    "id": "ext-113",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the role of ethics committees or boards in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "To approve all AI purchases and vendor contracts above a monetary threshold"
      },
      {
        "letter": "B",
        "text": "To replace the legal department's compliance review function entirely"
      },
      {
        "letter": "C",
        "text": "To provide ethical oversight, review high-risk AI systems, and advise on complex ethical issues that arise"
      },
      {
        "letter": "D",
        "text": "To serve as the public relations front for AI-related media inquiries"
      }
    ],
    "answer": "C",
    "explanation": "Ethics committees or boards provide ethical oversight, review high-risk AI systems, advise on ethical issues, and help organizations navigate ethical dilemmas. They complement but don’t replace legal compliance (C) and don’t develop systems (D)."
  },
  {
    "id": "ext-114",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “stakeholder mapping” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Creating an organizational chart of internal departments and reporting lines"
      },
      {
        "letter": "B",
        "text": "Drawing a geographical map showing where different stakeholder groups are physically located"
      },
      {
        "letter": "C",
        "text": "Systematically identifying and analyzing stakeholders, their interests, influence, and potential impacts on each"
      },
      {
        "letter": "D",
        "text": "Compiling a simple list of stakeholder names without further analysis or prioritization"
      }
    ],
    "answer": "C",
    "explanation": "Stakeholder mapping is the process of systematically identifying relevant stakeholders, analyzing their interests, concerns, influence, and relationships to inform engagement strategies and governance decisions."
  },
  {
    "id": "ext-115",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "An organization’s AI governance includes a stakeholder advisory board with representatives from affected communities. The board raises concerns about a planned AI system, but addressing concerns would significantly delay deployment. What should the organization do?",
    "options": [
      {
        "letter": "A",
        "text": "Acknowledge the concerns in meeting minutes but proceed with deployment as planned"
      },
      {
        "letter": "B",
        "text": "Ignore the board's input entirely since advisory bodies lack formal decision-making power"
      },
      {
        "letter": "C",
        "text": "Seriously consider the concerns, investigate further, and delay deployment if significant risks are found"
      },
      {
        "letter": "D",
        "text": "Disband the advisory board because it is creating obstacles to timely deployment dates"
      }
    ],
    "answer": "C",
    "explanation": "Advisory boards provide valuable perspectives that should be seriously considered. Concerns from affected community representatives warrant investigation and may indicate significant risks requiring mitigation before deployment. Ignoring stakeholders (A), deploying despite concerns (B), or disbanding the board (D) undermines governance and stakeholder engagement."
  },
  {
    "id": "ext-116",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the role of legal counsel as stakeholders in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "To write and commit all source code for AI system implementations and feature development"
      },
      {
        "letter": "B",
        "text": "To ensure compliance with applicable laws and advise on legal risks associated with AI deployment"
      },
      {
        "letter": "C",
        "text": "To manage public relations and media communications about AI-related incidents and issues"
      },
      {
        "letter": "D",
        "text": "To replace the board of directors as the organization's ultimate governance authority"
      }
    ],
    "answer": "B",
    "explanation": "Legal counsel ensures AI systems comply with applicable laws and regulations, advises on legal risks, and helps navigate regulatory requirements. They don’t prevent development (A), develop algorithms (C), or handle marketing (D)."
  },
  {
    "id": "ext-117",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “transparency to stakeholders” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Providing identical, undifferentiated information to all stakeholders regardless of their role"
      },
      {
        "letter": "B",
        "text": "Providing stakeholders with appropriate information about AI systems relevant to their specific interests and needs"
      },
      {
        "letter": "C",
        "text": "Releasing elaborate marketing materials about AI products"
      },
      {
        "letter": "D",
        "text": "Disclosing every stakeholder's personal information publicly for accountability"
      }
    ],
    "answer": "B",
    "explanation": "Transparency to stakeholders means providing appropriate information about AI systems relevant to their interests, rights, and needs—which varies by stakeholder group. This doesn’t require revealing all technical details (A) or trade secrets."
  },
  {
    "id": "ext-118",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What role do customers or users play as stakeholders?",
    "options": [
      {
        "letter": "A",
        "text": "They provide feedback, hold rights to information and safety, and are directly affected by system outcomes"
      },
      {
        "letter": "B",
        "text": "They are responsible for auditing the AI system's underlying training data and algorithms"
      },
      {
        "letter": "C",
        "text": "They must approve all technical architecture decisions before development can even begin"
      },
      {
        "letter": "D",
        "text": "They have no meaningful role beyond passively consuming whatever the AI system produces"
      }
    ],
    "answer": "A",
    "explanation": "Customers and users are key stakeholders who provide feedback, have rights to information and safety, and are directly affected by system performance, usability, and impacts."
  },
  {
    "id": "ext-119",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An AI system affects multiple stakeholder groups differently: it benefits customers but may disadvantage workers. How should governance address this?",
    "options": [
      {
        "letter": "A",
        "text": "Disregard distributional impacts and focus solely on aggregate net benefit"
      },
      {
        "letter": "B",
        "text": "Prioritize worker interests since they are the most vulnerable stakeholder group"
      },
      {
        "letter": "C",
        "text": "Prioritize customer benefits since they generate revenue for the organization"
      },
      {
        "letter": "D",
        "text": "Consider impacts on all stakeholder groups and seek to balance benefits and harms in a fair and transparent manner"
      }
    ],
    "answer": "D",
    "explanation": "Governance should consider impacts on all stakeholder groups and seek fair balancing of benefits and harms, not simply prioritizing by size (A), ignoring groups (B), or focusing only on financial stakeholders (D). This may involve mitigation measures for disadvantaged groups."
  },
  {
    "id": "ext-120",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What is the role of industry associations as stakeholders?",
    "options": [
      {
        "letter": "A",
        "text": "They enforce binding regulations and have authority to impose penalties for non-compliance"
      },
      {
        "letter": "B",
        "text": "They directly develop and operate commercial AI systems on behalf of member companies"
      },
      {
        "letter": "C",
        "text": "They develop voluntary standards, share best practices, and facilitate coordinated governance approaches across the industry"
      },
      {
        "letter": "D",
        "text": "They replace internal governance functions within individual organizations entirely"
      }
    ],
    "answer": "C",
    "explanation": "Industry associations develop standards, share best practices, facilitate industry-wide governance approaches, and provide forums for collaboration. They complement but don’t replace regulation (C)."
  },
  {
    "id": "ext-121",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “accountability to stakeholders” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Filing annual financial disclosure reports with securities and exchange commission regulators"
      },
      {
        "letter": "B",
        "text": "Being answerable to stakeholders for AI system decisions, impacts, and governance effectiveness"
      },
      {
        "letter": "C",
        "text": "Counting and cataloging the total number of stakeholders in a centralized database system"
      },
      {
        "letter": "D",
        "text": "Maintaining detailed employment records for all staff who interact with stakeholders directly"
      }
    ],
    "answer": "B",
    "explanation": "Accountability to stakeholders means being answerable to them for AI system decisions, impacts, and governance practices, including providing explanations, addressing concerns, and offering redress when appropriate."
  },
  {
    "id": "ext-122",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "An organization’s AI governance framework requires stakeholder engagement, but engaging all potentially affected stakeholders for every AI system is impractical. What is the MOST appropriate approach?",
    "options": [
      {
        "letter": "A",
        "text": "Use a risk-based approach: deeper engagement for higher-risk systems, representative sampling for others"
      },
      {
        "letter": "B",
        "text": "Publish a single public notice and consider the stakeholder engagement obligation satisfied"
      },
      {
        "letter": "C",
        "text": "Attempt exhaustive engagement with every conceivable stakeholder regardless of practicality"
      },
      {
        "letter": "D",
        "text": "Engage only the most influential stakeholder groups and disregard all other perspectives"
      }
    ],
    "answer": "A",
    "explanation": "A risk-based approach to stakeholder engagement is practical and appropriate: higher- risk systems warrant more extensive engagement with affected stakeholders, while lower-risk systems may use representative engagement or other proportionate approaches."
  },
  {
    "id": "ext-123",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "What role do academic researchers play as stakeholders?",
    "options": [
      {
        "letter": "A",
        "text": "They contribute research, subject-matter expertise, and independent analysis of AI systems and governance"
      },
      {
        "letter": "B",
        "text": "They certify AI systems and issue legally-binding compliance determinations and approvals"
      },
      {
        "letter": "C",
        "text": "They provide venture capital funding for AI startups emerging from university research labs"
      },
      {
        "letter": "D",
        "text": "They develop and sell commercial AI products to industry and government clients directly"
      }
    ],
    "answer": "A",
    "explanation": "Academic researchers contribute valuable research, expertise, and independent analysis of AI systems, impacts, and governance approaches, informing evidence-based governance."
  },
  {
    "id": "ext-124",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "What is “stakeholder trust” and why is it important in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "A contractual warranty specified in vendor service-level agreements and procurement terms"
      },
      {
        "letter": "B",
        "text": "Stakeholders' confidence that AI systems and governance processes are trustworthy, which is essential for sustainable deployment"
      },
      {
        "letter": "C",
        "text": "A simple binary metric that is either fully present or entirely absent at any given time"
      },
      {
        "letter": "D",
        "text": "A legally enforceable fiduciary duty automatically owed to every AI system stakeholder"
      }
    ],
    "answer": "B",
    "explanation": "Stakeholder trust is confidence in AI systems and governance practices, essential for acceptance, adoption, and sustainable deployment. Trust is built through transparency, accountability, engagement, and demonstrated responsibility."
  },
  {
    "id": "ext-125",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An AI system’s stakeholders include regulators, users, affected individuals, developers, and civil society. These groups have different information needs. How should transparency be approached?",
    "options": [
      {
        "letter": "A",
        "text": "Publish a single, brief public notice and consider all transparency obligations satisfied"
      },
      {
        "letter": "B",
        "text": "Disclose information only to regulators and withhold it from all other stakeholder groups"
      },
      {
        "letter": "C",
        "text": "Tailor transparency to different stakeholder needs while meeting minimum legal requirements applicable"
      },
      {
        "letter": "D",
        "text": "Provide all stakeholders with the complete, unfiltered technical documentation regardless of relevance"
      }
    ],
    "answer": "C",
    "explanation": "Effective transparency tailors information to different stakeholder needs (e.g., technical details for developers, impact information for affected individuals, compliance documentation for regulators) while meeting minimum legal requirements for all. Domain II:"
  },
  {
    "id": "ext-126",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is the EU AI Act?",
    "options": [
      {
        "letter": "A",
        "text": "A comprehensive EU legal framework that regulates AI systems based on their level of risk to rights and safety"
      },
      {
        "letter": "B",
        "text": "A voluntary industry code of conduct with no binding legal force or enforcement mechanism"
      },
      {
        "letter": "C",
        "text": "A trade agreement between EU member states governing AI exports"
      },
      {
        "letter": "D",
        "text": "A technical standard published by an international standards organization"
      }
    ],
    "answer": "A",
    "explanation": "The EU AI Act is a comprehensive legal framework that regulates AI systems based on risk levels (unacceptable, high, limited, minimal), establishing requirements for high-risk systems and prohibiting certain applications. It’s legally binding, not voluntary (A), and is regulation, not a trade agreement (C) or technical standard (D)."
  },
  {
    "id": "ext-127",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "Under the EU AI Act, which of the following is classified as an “unacceptable risk” AI practice?",
    "options": [
      {
        "letter": "A",
        "text": "AI systems deployed for weather forecasting and meteorological data analysis"
      },
      {
        "letter": "B",
        "text": "Government social scoring systems that evaluate or classify citizens based on their social behavior or personal traits"
      },
      {
        "letter": "C",
        "text": "Email spam filters that automatically detect and block unwanted commercial messages"
      },
      {
        "letter": "D",
        "text": "AI-powered chatbots used for routine customer service and basic inquiry responses"
      }
    ],
    "answer": "B",
    "explanation": "The EU AI Act prohibits “unacceptable risk” practices including social scoring by governments, which threatens fundamental rights. 45"
  },
  {
    "id": "ext-128",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is a “high-risk” AI system under the EU AI Act?",
    "options": [
      {
        "letter": "A",
        "text": "AI systems deployed solely for entertainment, gaming, or recreational purposes"
      },
      {
        "letter": "B",
        "text": "AI systems that process only anonymized or synthetic data with no personal information"
      },
      {
        "letter": "C",
        "text": "AI systems that pose significant risks to the health, safety, or fundamental rights of natural persons"
      },
      {
        "letter": "D",
        "text": "AI systems used exclusively for internal administrative purposes like scheduling"
      }
    ],
    "answer": "C",
    "explanation": "High-risk AI systems under the EU AI Act are those that pose significant risks to health, safety, or fundamental rights, such as AI in critical infrastructure, employment, law enforcement, or biometric identification. Classification is based on risk to rights and safety, not cost (A), energy use (C), or company size (D)."
  },
  {
    "id": "ext-129",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Under the EU AI Act, what are the key obligations for providers of high-risk AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Only publishing a privacy policy notice on the provider's public-facing website"
      },
      {
        "letter": "B",
        "text": "Only a one-time registration filing with a designated national regulatory authority"
      },
      {
        "letter": "C",
        "text": "Risk management, data governance, technical documentation, transparency, human oversight, and accuracy obligations"
      },
      {
        "letter": "D",
        "text": "Only conducting an annual independent financial audit of AI-related expenditures"
      }
    ],
    "answer": "C",
    "explanation": "Providers of high-risk AI systems must implement comprehensive obligations including risk management systems, data governance, technical documentation, transparency, human oversight, and accuracy/robustness requirements."
  },
  {
    "id": "ext-130",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A company develops an AI system for resume screening that will be used by employers in the EU. How should this be classified under the EU AI Act, and what are the implications?",
    "options": [
      {
        "letter": "A",
        "text": "Treat as minimal risk since resume screening is just a routine administrative activity"
      },
      {
        "letter": "B",
        "text": "Self-certify compliance through an internal memo without any external review or audit"
      },
      {
        "letter": "C",
        "text": "Classify as high-risk for employment under the EU AI Act and comply with risk management requirements"
      },
      {
        "letter": "D",
        "text": "Classify as an unacceptable risk practice and abandon the entire AI project completely"
      }
    ],
    "answer": "C",
    "explanation": "AI systems for employment decisions (including resume screening) are explicitly listed as high-risk under the EU AI Act, requiring compliance with extensive requirements including risk management, bias testing, data governance, documentation, and human oversight. It’s not minimal risk (A), not prohibited (C), and is clearly covered (D). 46 AI systems for employment decisions are explicitly listed as high-risk under the EU AI Act."
  },
  {
    "id": "ext-131",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is the primary purpose of AI regulation?",
    "options": [
      {
        "letter": "A",
        "text": "To mandate that all AI systems be developed and released exclusively as open-source projects"
      },
      {
        "letter": "B",
        "text": "To prevent or block all AI research and commercial development activities globally"
      },
      {
        "letter": "C",
        "text": "To ensure AI systems are safe, trustworthy, and respect fundamental rights while enabling beneficial innovation"
      },
      {
        "letter": "D",
        "text": "To maximize corporate profits and shareholder returns from AI products and services"
      }
    ],
    "answer": "C",
    "explanation": "AI regulation aims to ensure AI systems are safe, trustworthy, and respect fundamental rights while enabling beneficial innovation—balancing protection with innovation."
  },
  {
    "id": "ext-132",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “extraterritorial application” of AI regulations?",
    "options": [
      {
        "letter": "A",
        "text": "Regulations that specifically address AI systems used in outer space and extraterrestrial environments"
      },
      {
        "letter": "B",
        "text": "Regulations that only apply to organizations physically headquartered within the jurisdiction's borders"
      },
      {
        "letter": "C",
        "text": "Regulations that apply to organizations outside the regulating jurisdiction if they offer services or affect people within it"
      },
      {
        "letter": "D",
        "text": "Regulations governing the physical export of AI hardware components across borders"
      }
    ],
    "answer": "C",
    "explanation": "Extraterritorial application means regulations apply to organizations outside the jurisdiction if they offer AI systems or services to individuals within it. For example, the EU AI Act applies to non-EU companies offering AI systems in the EU."
  },
  {
    "id": "ext-133",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is algorithmic accountability legislation?",
    "options": [
      {
        "letter": "A",
        "text": "Laws requiring organizations to provide transparency, meaningful explanation, and accountability for algorithmic decisions"
      },
      {
        "letter": "B",
        "text": "Laws requiring companies to register and pay licensing fees for each algorithm they deploy"
      },
      {
        "letter": "C",
        "text": "Legislation mandating that all algorithms be written in a specific programming language"
      },
      {
        "letter": "D",
        "text": "Regulations governing the physical safety of computing hardware running algorithmic processes"
      }
    ],
    "answer": "A",
    "explanation": "Algorithmic accountability legislation requires transparency, explanation, and responsibility for algorithmic decision-making, often including impact assessments, auditing, and redress mechanisms. 47"
  },
  {
    "id": "ext-134",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Which legal principle is MOST relevant when AI systems make decisions affecting individuals?",
    "options": [
      {
        "letter": "A",
        "text": "Trade secret protections that shield all algorithmic processes from any form of disclosure"
      },
      {
        "letter": "B",
        "text": "Due process rights and the right to a meaningful explanation of decisions that significantly affect individuals"
      },
      {
        "letter": "C",
        "text": "Strict liability that holds organizations responsible regardless of fault or circumstances"
      },
      {
        "letter": "D",
        "text": "The principle of caveat emptor, placing responsibility entirely on the affected individual"
      }
    ],
    "answer": "B",
    "explanation": "Due process and the right to explanation are fundamental legal principles when AI systems make decisions affecting individuals, ensuring fairness, transparency, and the ability to challenge decisions."
  },
  {
    "id": "ext-135",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A US company develops an AI system, trains it on data from multiple countries, and deploys it globally. Which regulations might apply?",
    "options": [
      {
        "letter": "A",
        "text": "No regulations apply since AI governance is entirely voluntary for all private companies"
      },
      {
        "letter": "B",
        "text": "Only the regulations of the country where the training data was originally collected"
      },
      {
        "letter": "C",
        "text": "Potentially multiple overlapping regulations including the EU AI Act, GDPR, and various national AI laws"
      },
      {
        "letter": "D",
        "text": "Only US federal law applies since the company is incorporated in the United States"
      }
    ],
    "answer": "C",
    "explanation": "Global AI systems may be subject to multiple jurisdictions’ regulations based on where data is collected, where the system is deployed, and where individuals are affected. This includes the EU AI Act (extraterritorial application), GDPR (for EU data subjects), and various national laws."
  },
  {
    "id": "ext-136",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is the purpose of AI impact assessments required by some regulations?",
    "options": [
      {
        "letter": "A",
        "text": "To calculate the projected financial return on investment for the AI project initiative"
      },
      {
        "letter": "B",
        "text": "To assess the environmental sustainability of the data center infrastructure footprint"
      },
      {
        "letter": "C",
        "text": "To measure employee satisfaction with the AI development process and team workflow"
      },
      {
        "letter": "D",
        "text": "To systematically evaluate potential risks, harms, and impacts on fundamental rights before deploying AI"
      }
    ],
    "answer": "D",
    "explanation": "AI impact assessments systematically evaluate potential risks, harms, and impacts on fundamental rights, safety, and other concerns before deployment, informing risk mitigation and governance decisions. 48 informing risk mitigation and governance decisions."
  },
  {
    "id": "ext-137",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “regulatory sandboxing” in AI regulation?",
    "options": [
      {
        "letter": "A",
        "text": "Controlled environments where innovative AI systems can be tested under regulatory supervision with temporary flexibility"
      },
      {
        "letter": "B",
        "text": "Completely unregulated spaces where AI systems can be deployed without any form of oversight"
      },
      {
        "letter": "C",
        "text": "Physical sandboxes used for safely testing AI-powered robots and hardware prototypes"
      },
      {
        "letter": "D",
        "text": "Standard software testing frameworks used for unit and integration testing of AI components"
      }
    ],
    "answer": "A",
    "explanation": "Regulatory sandboxes are controlled environments where organizations can test innovative AI systems under regulatory supervision, often with some regulatory flexibility, enabling innovation while managing risks."
  },
  {
    "id": "ext-138",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “sectoral regulation” of AI?",
    "options": [
      {
        "letter": "A",
        "text": "Industry-specific regulations that address AI use in particular sectors such as healthcare, finance, and transportation"
      },
      {
        "letter": "B",
        "text": "Regulations that only address the physical safety of AI hardware in industrial settings"
      },
      {
        "letter": "C",
        "text": "A single, universal AI regulation that applies identically across all industries"
      },
      {
        "letter": "D",
        "text": "Internal company policies that carry no external legal or regulatory force"
      }
    ],
    "answer": "A",
    "explanation": "Sectoral regulation refers to industry-specific regulations addressing AI in particular sectors (healthcare, finance, transportation) that may have unique requirements beyond general AI regulations."
  },
  {
    "id": "ext-139",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Under emerging AI regulations, what is typically required for “high-risk” AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "A single-page disclosure form filed with the company's internal tax authorities"
      },
      {
        "letter": "B",
        "text": "Conformity assessments, technical documentation, risk management systems, and post-market monitoring"
      },
      {
        "letter": "C",
        "text": "A one-time registration fee paid to a national regulatory body for formal approval"
      },
      {
        "letter": "D",
        "text": "A voluntary pledge to follow industry best practices without any external verification"
      }
    ],
    "answer": "B",
    "explanation": "High-risk AI systems typically require conformity assessments, comprehensive documentation, risk management systems, and ongoing monitoring under regulations like the EU AI Act. 49"
  },
  {
    "id": "ext-140",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An AI system is classified as high-risk under the EU AI Act. The organization argues it should be reclassified as lower risk because it includes human oversight. Is this argument valid?",
    "options": [
      {
        "letter": "A",
        "text": "Yes — implementing human oversight automatically reduces the system's risk classification by one tier"
      },
      {
        "letter": "B",
        "text": "Yes — any risk mitigation measure, however minimal, permits immediate reclassification to a lower tier"
      },
      {
        "letter": "C",
        "text": "No — risk classification is determined by the system's intended purpose and context, not by mitigation measures applied afterward"
      },
      {
        "letter": "D",
        "text": "Risk classification is irrelevant as long as the organization documents its mitigation efforts internally"
      }
    ],
    "answer": "C",
    "explanation": "Risk classification under the EU AI Act is based on the system’s intended purpose and context (e.g., employment, law enforcement), not on mitigation measures. Human oversight is a requirement for high-risk systems, not a factor that reduces classification."
  },
  {
    "id": "ext-141",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “AI transparency legislation”?",
    "options": [
      {
        "letter": "A",
        "text": "Laws mandating that all AI training data be published as publicly accessible open datasets"
      },
      {
        "letter": "B",
        "text": "Legislation requiring the use of transparent physical materials in computer hardware manufacturing"
      },
      {
        "letter": "C",
        "text": "Laws requiring organizations to disclose when AI is being used and provide information about its capabilities and decision processes"
      },
      {
        "letter": "D",
        "text": "Regulations requiring transparent, publicly-disclosed pricing for all AI products"
      }
    ],
    "answer": "C",
    "explanation": "AI transparency legislation requires disclosure of AI use, capabilities, limitations, and decision-making processes to enable informed decisions and accountability."
  },
  {
    "id": "ext-142",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is the relationship between the EU AI Act and GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "GDPR and the EU AI Act are completely independent, governing entirely separate domains with no overlap"
      },
      {
        "letter": "B",
        "text": "The EU AI Act automatically overrides GDPR whenever there is any conflict or inconsistency between them"
      },
      {
        "letter": "C",
        "text": "The AI Act complements GDPR: GDPR governs personal data processing in AI, while the AI Act adds product-level safety and risk requirements"
      },
      {
        "letter": "D",
        "text": "The EU AI Act fully replaces and supersedes GDPR for all AI-related data processing operations"
      }
    ],
    "answer": "C",
    "explanation": "The EU AI Act complements GDPR rather than replacing it. GDPR continues to apply to personal data processing in AI systems, while the EU AI Act addresses broader AI-specific risks. Organizations must comply with both. 50"
  },
  {
    "id": "ext-143",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “prohibited AI” under emerging regulations?",
    "options": [
      {
        "letter": "A",
        "text": "AI models that achieve accuracy rates below a specified performance threshold"
      },
      {
        "letter": "B",
        "text": "AI systems that have not yet received regulatory approval for commercial deployment"
      },
      {
        "letter": "C",
        "text": "AI practices deemed unacceptable due to the severity of their threat to fundamental rights, safety, and human dignity"
      },
      {
        "letter": "D",
        "text": "AI technologies that are too expensive for most organizations to implement"
      }
    ],
    "answer": "C",
    "explanation": "Prohibited AI refers to practices deemed unacceptable due to serious threats to fundamental rights, such as social scoring by governments or manipulative AI. Prohibition is based on rights threats, not cost (A), developer identity (C), or complexity (D)."
  },
  {
    "id": "ext-144",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “algorithmic auditing” as required by some regulations?",
    "options": [
      {
        "letter": "A",
        "text": "A cybersecurity penetration test targeting the network infrastructure hosting AI workloads"
      },
      {
        "letter": "B",
        "text": "A technical code review focused solely on programming style, syntax, and documentation quality"
      },
      {
        "letter": "C",
        "text": "A standard financial audit examining the costs and revenues of AI development projects"
      },
      {
        "letter": "D",
        "text": "Systematic independent examination of AI systems to assess regulatory compliance, fairness, accuracy, and risk management"
      }
    ],
    "answer": "D",
    "explanation": "Algorithmic auditing is systematic examination of AI systems to assess compliance with regulations, fairness, accuracy, and other requirements, often by independent third parties."
  },
  {
    "id": "ext-145",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A company uses an AI system that was compliant with regulations when deployed two years ago. New regulations have since been enacted. What is the company’s obligation?",
    "options": [
      {
        "letter": "A",
        "text": "Assess the system against new regulatory requirements and implement necessary changes within transition periods"
      },
      {
        "letter": "B",
        "text": "Ignore the new regulations entirely and wait for enforcement action before taking steps"
      },
      {
        "letter": "C",
        "text": "Continue operating unchanged since the system was compliant at the original deployment date"
      },
      {
        "letter": "D",
        "text": "Immediately shut down the system pending a complete redesign and rebuild from scratch"
      }
    ],
    "answer": "A",
    "explanation": "Organizations must assess existing systems against new regulations and implement necessary changes, typically within specified transition periods. Regulations often include provisions for existing systems."
  },
  {
    "id": "ext-146",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “regulatory compliance” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Complying only with voluntary technical standards and industry guidelines"
      },
      {
        "letter": "B",
        "text": "Complying exclusively with internal company policies without regard to external legal obligations"
      },
      {
        "letter": "C",
        "text": "Adhering to all applicable laws, regulations, and legal requirements governing AI systems"
      },
      {
        "letter": "D",
        "text": "Following voluntary best practices without reference to any legally binding requirements"
      }
    ],
    "answer": "C",
    "explanation": "Regulatory compliance means adhering to applicable laws, regulations, and legal requirements for AI systems, which is mandatory."
  },
  {
    "id": "ext-147",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “right to explanation” in AI regulation?",
    "options": [
      {
        "letter": "A",
        "text": "The right of organizations to explain their AI technology to other businesses and partners"
      },
      {
        "letter": "B",
        "text": "The exclusive right of companies to explain their AI systems to regulators upon request"
      },
      {
        "letter": "C",
        "text": "The right of individuals to receive meaningful information about algorithmic decisions that significantly affect them"
      },
      {
        "letter": "D",
        "text": "The right of developers to write detailed explanatory documentation for their algorithms"
      }
    ],
    "answer": "C",
    "explanation": "Right to explanation refers to individuals’ right to receive meaningful information about how algorithmic decisions affecting them were made, enabling understanding and contestation. This is recognized in various regulations including GDPR."
  },
  {
    "id": "ext-148",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “AI governance framework” in regulatory context?",
    "options": [
      {
        "letter": "A",
        "text": "The structure of laws, regulations, standards, and policies that collectively govern the use of AI systems"
      },
      {
        "letter": "B",
        "text": "An architectural framework used for constructing buildings that house AI infrastructure"
      },
      {
        "letter": "C",
        "text": "A physical framework or chassis used to mount AI hardware in data centers"
      },
      {
        "letter": "D",
        "text": "A software development framework designed for building AI applications"
      }
    ],
    "answer": "A",
    "explanation": "An AI governance framework in regulatory context refers to the structure of laws, regulations, standards, and policies that govern AI development and deployment.”"
  },
  {
    "id": "ext-149",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Under the EU AI Act, who is considered a “provider” of an AI system?",
    "options": [
      {
        "letter": "A",
        "text": "Only cloud service providers that host and serve AI model inference on their infrastructure"
      },
      {
        "letter": "B",
        "text": "Only commercial entities that sell AI systems directly for monetary compensation to customers"
      },
      {
        "letter": "C",
        "text": "Only the individual developers who wrote the original lines of source code for the system"
      },
      {
        "letter": "D",
        "text": "An entity that develops an AI system or places it on the market under their own name or trademark"
      }
    ],
    "answer": "D",
    "explanation": "Under the EU AI Act, a “provider” is an entity that develops an AI system or has it developed and places it on the market or puts it into service under their own name or trademark. This includes various business models."
  },
  {
    "id": "ext-150",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An organization modifies an open-source AI model significantly and deploys it for high-risk use. Under the EU AI Act, what is their likely regulatory status?",
    "options": [
      {
        "letter": "A",
        "text": "Open-source models are categorically exempt from all provisions of the EU AI Act"
      },
      {
        "letter": "B",
        "text": "They become a provider with full regulatory obligations applicable to high-risk AI systems"
      },
      {
        "letter": "C",
        "text": "No obligations exist since the original model was released under an open-source license"
      },
      {
        "letter": "D",
        "text": "Only the original developer of the open-source model bears any regulatory obligations"
      }
    ],
    "answer": "B",
    "explanation": "Significantly modifying an AI system and deploying it for high-risk use typically makes the organization a “provider” under the EU AI Act with full obligations, regardless of the original open- source status."
  },
  {
    "id": "ext-151",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “legal liability” in AI contexts?",
    "options": [
      {
        "letter": "A",
        "text": "The obligation to pay corporate income taxes on revenue generated by AI products"
      },
      {
        "letter": "B",
        "text": "Legal responsibility for harms, damages, or injuries caused by the design or operation of AI systems"
      },
      {
        "letter": "C",
        "text": "Insurance coverage purchased to protect against financial losses from AI incidents"
      },
      {
        "letter": "D",
        "text": "Financial responsibility for retaining legal counsel during AI-related litigation"
      }
    ],
    "answer": "B",
    "explanation": "Legal liability in AI contexts refers to legal responsibility for harms or damages caused by AI systems, determining who can be held accountable and must provide compensation."
  },
  {
    "id": "ext-152",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “product liability” as it applies to AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Legal responsibility for harm caused by defective AI products, analogous to traditional product liability law"
      },
      {
        "letter": "B",
        "text": "Liability related to the pricing structure and revenue model of AI products"
      },
      {
        "letter": "C",
        "text": "Liability arising from how AI products are marketed and advertised to consumers"
      },
      {
        "letter": "D",
        "text": "Liability associated with product packaging, labeling, and shipping of AI hardware"
      }
    ],
    "answer": "A",
    "explanation": "Product liability is legal responsibility for harm caused by defective products. As AI systems are increasingly treated as products, product liability frameworks may apply, though questions remain about how traditional product liability applies to learning systems."
  },
  {
    "id": "ext-153",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “regulatory enforcement” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Enforcement of voluntary technical standards by industry consortiums and working groups"
      },
      {
        "letter": "B",
        "text": "Enforcement of private contractual obligations through civil litigation"
      },
      {
        "letter": "C",
        "text": "Government actions to ensure AI regulatory compliance, including investigation, sanction, and remediation authority"
      },
      {
        "letter": "D",
        "text": "Enforcement of internal company policies and codes of conduct by HR departments"
      }
    ],
    "answer": "C",
    "explanation": "Regulatory enforcement refers to government actions to ensure compliance with AI regulations, including investigations, audits, and penalties for non-compliance."
  },
  {
    "id": "ext-154",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What are typical penalties for non-compliance with the EU AI Act?",
    "options": [
      {
        "letter": "A",
        "text": "No monetary penalties, since compliance with the AI Act is entirely voluntary and self-regulated"
      },
      {
        "letter": "B",
        "text": "Only non-binding warning letters and advisory notices issued by regulatory authorities"
      },
      {
        "letter": "C",
        "text": "Fines up to millions of euros or a percentage of annual global turnover, scaled to the severity and type of violation"
      },
      {
        "letter": "D",
        "text": "Only intangible reputational consequences with no formal financial enforcement mechanism"
      }
    ],
    "answer": "C",
    "explanation": "The EU AI Act includes significant penalties for non-compliance, with fines up to €35 million or 7% of global annual turnover (whichever is higher) for the most serious violations, similar to GDPR’s penalty structure."
  },
  {
    "id": "ext-155",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A company’s AI system complies with all technical requirements of the EU AI Act but is used in a discriminatory manner by deployers. Who bears primary legal responsibility?",
    "options": [
      {
        "letter": "A",
        "text": "Only the AI system provider, since technical compliance is their responsibility alone"
      },
      {
        "letter": "B",
        "text": "Potentially both provider and deployer — deployers bear independent obligations for how the system is actually used"
      },
      {
        "letter": "C",
        "text": "Only the end users who operated the system in a discriminatory manner bear responsibility"
      },
      {
        "letter": "D",
        "text": "No party bears liability since the system is technically compliant with regulatory requirements"
      }
    ],
    "answer": "B",
    "explanation": "The EU AI Act establishes obligations for both providers and deployers. While providers must ensure technical compliance, deployers have obligations for proper use, monitoring, and human oversight. Discriminatory use by deployers may create deployer liability, though providers may also have obligations regarding foreseeable misuse."
  },
  {
    "id": "ext-156",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “regulatory harmonization” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Aligning internal company policies and procedures across different business units"
      },
      {
        "letter": "B",
        "text": "Aligning AI regulations across different jurisdictions to reduce conflicts, duplication, and compliance complexity"
      },
      {
        "letter": "C",
        "text": "Achieving musical harmony and aesthetic consistency in the drafting of regulatory text"
      },
      {
        "letter": "D",
        "text": "Harmonizing technical interoperability standards independent of legal or regulatory alignment"
      }
    ],
    "answer": "B",
    "explanation": "Regulatory harmonization refers to efforts to align AI regulations across jurisdictions to reduce conflicts, compliance complexity, and barriers to innovation while maintaining protection standards."
  },
  {
    "id": "ext-157",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “regulatory fragmentation” and why is it a concern for AI?",
    "options": [
      {
        "letter": "A",
        "text": "Divergent and conflicting regulations across jurisdictions that create compliance complexity and market barriers"
      },
      {
        "letter": "B",
        "text": "Disconnected and uncoordinated internal company policies on AI governance"
      },
      {
        "letter": "C",
        "text": "The physical shredding, tearing, or fragmentation of printed regulatory documents"
      },
      {
        "letter": "D",
        "text": "Inconsistent or fragmented technical standards for AI model interoperability"
      }
    ],
    "answer": "A",
    "explanation": "Regulatory fragmentation refers to divergent or conflicting regulations across jurisdictions, creating compliance complexity, increased costs, and potential barriers to innovation for organizations operating globally. This is a significant concern for AI given its global nature."
  },
  {
    "id": "ext-158",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “regulatory guidance” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "GPS-based navigation and mapping tools designed for use by regulatory agency staff"
      },
      {
        "letter": "B",
        "text": "Non-binding advice and interpretive guidance from regulators on how to understand and comply with AI regulations"
      },
      {
        "letter": "C",
        "text": "Detailed technical specifications that prescribe exact implementation methods"
      },
      {
        "letter": "D",
        "text": "Legally binding regulations that carry the full force and effect of statutory law"
      }
    ],
    "answer": "B",
    "explanation": "Regulatory guidance is non-binding advice from regulators on interpreting and complying with regulations, helping organizations understand requirements and expectations. It’s not mandatory (C) but is influential."
  },
  {
    "id": "ext-159",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “regulatory uncertainty” and how does it affect AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Unpredictable and volatile market conditions affecting customer demand for AI products"
      },
      {
        "letter": "B",
        "text": "Ambiguity within technical standards and specifications for AI system interoperability"
      },
      {
        "letter": "C",
        "text": "Ambiguity about current or forthcoming regulatory requirements, making advance compliance planning difficult for organizations"
      },
      {
        "letter": "D",
        "text": "Individual regulators expressing uncertainty about their own job responsibilities and career paths"
      }
    ],
    "answer": "C",
    "explanation": "Regulatory uncertainty refers to lack of clarity about current or future regulations, making it difficult for organizations to plan compliance strategies and investments. This is common in rapidly evolving AI regulation."
  },
  {
    "id": "ext-160",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An organization operates in multiple jurisdictions with different AI regulations. Some regulations conflict. What is the MOST appropriate approach?",
    "options": [
      {
        "letter": "A",
        "text": "Comply with the most stringent applicable regulation or implement jurisdiction-specific compliance approaches where necessary"
      },
      {
        "letter": "B",
        "text": "Disregard all regulations since conflicting requirements across jurisdictions make compliance impossible"
      },
      {
        "letter": "C",
        "text": "Randomly select one jurisdiction's regulatory framework and comply exclusively with that set of rules"
      },
      {
        "letter": "D",
        "text": "Comply only with the least stringent regulatory regime to minimize the organizational compliance burden"
      }
    ],
    "answer": "A",
    "explanation": "When facing conflicting regulations, organizations typically either comply with the most stringent regulation (ensuring compliance everywhere) or implement jurisdiction-specific approaches where necessary. This may require technical measures to differentiate by jurisdiction."
  },
  {
    "id": "ext-161",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “regulatory reporting” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Reporting the content of regulations to the media and general public for transparency"
      },
      {
        "letter": "B",
        "text": "Standard financial accounting reports filed with securities and tax regulators"
      },
      {
        "letter": "C",
        "text": "Internal bug reports documenting software defects in AI system implementations"
      },
      {
        "letter": "D",
        "text": "Mandatory disclosure of specified information about AI systems and their operation to regulatory authorities"
      }
    ],
    "answer": "D",
    "explanation": "Regulatory reporting refers to required disclosure of information about AI systems to regulatory authorities, such as incident reports, compliance documentation, or system registrations."
  },
  {
    "id": "ext-162",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “regulatory oversight” of AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Oversight exercised exclusively by corporate boards of directors and audit committees"
      },
      {
        "letter": "B",
        "text": "Ongoing monitoring, supervision, and enforcement activities conducted by designated regulatory authorities"
      },
      {
        "letter": "C",
        "text": "Technical monitoring of system performance metrics without any legal or compliance dimension"
      },
      {
        "letter": "D",
        "text": "Public oversight and scrutiny directed at the performance of regulatory agencies themselves"
      }
    ],
    "answer": "B",
    "explanation": "Regulatory oversight refers to ongoing monitoring and supervision of AI systems by regulatory authorities to ensure compliance, including audits, investigations, and enforcement actions."
  },
  {
    "id": "ext-163",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Under emerging AI regulations, what is typically required when an AI system causes significant harm?",
    "options": [
      {
        "letter": "A",
        "text": "Mandatory incident reporting to relevant regulatory authorities within specified statutory timeframes"
      },
      {
        "letter": "B",
        "text": "Reporting is required only during the organization's annual regulatory filing cycle"
      },
      {
        "letter": "C",
        "text": "Reporting is required only if the incident is discovered and publicized by the media"
      },
      {
        "letter": "D",
        "text": "No reporting requirement exists for AI-related harms or incidents under current regulations"
      }
    ],
    "answer": "A",
    "explanation": "Emerging AI regulations typically require incident reporting to authorities within specified timeframes when AI systems cause or contribute to significant harm, similar to data breach notification requirements."
  },
  {
    "id": "ext-164",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "A software development methodology focused on data protection engineering practices"
      },
      {
        "letter": "B",
        "text": "An international technical standard that specifies requirements for AI system documentation"
      },
      {
        "letter": "C",
        "text": "The EU General Data Protection Regulation, governing the processing of personal data across the European Union"
      },
      {
        "letter": "D",
        "text": "A specific type of AI algorithm designed for privacy-preserving data analysis"
      }
    ],
    "answer": "C",
    "explanation": "GDPR (General Data Protection Regulation) is the EU’s comprehensive data protection law governing the processing of personal data, with significant implications for AI systems that process personal data."
  },
  {
    "id": "ext-165",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “personal data” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Any information relating to an identified or identifiable natural person, directly or indirectly"
      },
      {
        "letter": "B",
        "text": "Only names, physical addresses, and government-issued identification numbers"
      },
      {
        "letter": "C",
        "text": "Only financial and banking information such as account numbers and transaction records"
      },
      {
        "letter": "D",
        "text": "Only sensitive data revealing health, biometric, or political information"
      }
    ],
    "answer": "A",
    "explanation": "Personal data under GDPR is any information relating to an identified or identifiable natural person, including names, identification numbers, location data, online identifiers, and factors specific to identity."
  },
  {
    "id": "ext-166",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "How does GDPR apply to AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "GDPR categorically exempts all AI and machine learning systems from its requirements"
      },
      {
        "letter": "B",
        "text": "GDPR applies only to AI systems deployed in healthcare and medical diagnostic applications"
      },
      {
        "letter": "C",
        "text": "GDPR applies whenever AI systems process personal data, requiring a lawful basis, transparency, and data subject rights"
      },
      {
        "letter": "D",
        "text": "GDPR does not apply to AI systems since they process data algorithmically rather than manually"
      }
    ],
    "answer": "C",
    "explanation": "GDPR applies when AI systems process personal data, requiring organizations to establish lawful basis, ensure transparency, respect data subject rights, and implement appropriate safeguards. AI doesn’t receive special exemptions."
  },
  {
    "id": "ext-167",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “automated decision-making” under GDPR Article 22?",
    "options": [
      {
        "letter": "A",
        "text": "Decisions based solely on automated processing that produce legal or similarly significant effects on the individual"
      },
      {
        "letter": "B",
        "text": "Routine automated administrative functions such as email auto-replies and calendar scheduling"
      },
      {
        "letter": "C",
        "text": "Any output produced by any type of AI or machine learning system, regardless of the impact on individuals"
      },
      {
        "letter": "D",
        "text": "Any decision-making process that involves the use of any computer or digital system at any stage"
      }
    ],
    "answer": "A",
    "explanation": "GDPR Article 22 addresses decisions based solely on automated processing (including profiling) that produce legal effects or similarly significantly affect individuals, providing special protections including the right not to be subject to such decisions in certain circumstances. 58"
  },
  {
    "id": "ext-168",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An AI system processes personal data to make credit decisions. Under GDPR, what are the key requirements?",
    "options": [
      {
        "letter": "A",
        "text": "Only obtaining the data subject's consent to the collection of their personal data"
      },
      {
        "letter": "B",
        "text": "Lawful basis for processing, transparency about the automated logic, and the right to human intervention and contestation"
      },
      {
        "letter": "C",
        "text": "Only implementing appropriate technical data security measures and encryption for stored data"
      },
      {
        "letter": "D",
        "text": "No specific GDPR requirements apply to AI systems making credit or other financial determinations"
      }
    ],
    "answer": "B",
    "explanation": "AI systems making credit decisions involve automated decision-making with significant effects, requiring lawful basis (likely legitimate interest or contract), transparency about the automated decision-making, rights to human intervention and explanation under Article 22, and other GDPR requirements."
  },
  {
    "id": "ext-169",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “data minimization” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Deleting all personal data from organizational systems and databases entirely"
      },
      {
        "letter": "B",
        "text": "Applying compression algorithms to reduce the file size of stored personal data"
      },
      {
        "letter": "C",
        "text": "Collecting only personal data that is adequate, relevant, and limited to what is necessary for the specified purposes"
      },
      {
        "letter": "D",
        "text": "Reducing the financial expenditure on data storage infrastructure and cloud services"
      }
    ],
    "answer": "C",
    "explanation": "Data minimization is a GDPR principle requiring that personal data collected be adequate, relevant, and limited to what is necessary for the specified purposes. This is particularly important for AI training data."
  },
  {
    "id": "ext-170",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “purpose limitation” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Limiting only the duration for which personal data may be retained in storage systems"
      },
      {
        "letter": "B",
        "text": "Personal data must be collected for specified, explicit, and legitimate purposes and not further processed in incompatible ways"
      },
      {
        "letter": "C",
        "text": "Limiting the total number of processing purposes to exactly one per data collection event"
      },
      {
        "letter": "D",
        "text": "Limiting the total number of third-party data processors that may access the personal data"
      }
    ],
    "answer": "B",
    "explanation": "Purpose limitation requires that personal data be collected for specified, explicit, and legitimate purposes and not further processed in a manner incompatible with those purposes. This affects AI systems that might repurpose data. 59"
  },
  {
    "id": "ext-171",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “consent” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Agreement that is automatically assumed whenever an individual uses a digital service or application"
      },
      {
        "letter": "B",
        "text": "Any form of agreement or acknowledgment regardless of specificity or the information provided"
      },
      {
        "letter": "C",
        "text": "Agreement that is implied or inferred from an individual's conduct without any express indication"
      },
      {
        "letter": "D",
        "text": "Freely given, specific, informed, and unambiguous indication of the data subject's agreement to processing of their personal data"
      }
    ],
    "answer": "D",
    "explanation": "GDPR requires consent to be freely given, specific, informed, and unambiguous, with clear affirmative action. Pre-ticked boxes or inactivity don’t constitute consent."
  },
  {
    "id": "ext-172",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An AI system was trained on personal data collected with consent for one purpose. The organization wants to use the trained model for a different purpose. What does GDPR require?",
    "options": [
      {
        "letter": "A",
        "text": "Automatic permission is granted for any subsequent AI training or processing use case"
      },
      {
        "letter": "B",
        "text": "No additional requirements exist since the data was originally collected with valid consent"
      },
      {
        "letter": "C",
        "text": "Only providing a brief notification to data subjects, without any further obligation"
      },
      {
        "letter": "D",
        "text": "Assess compatibility with the original purpose; if incompatible, a new lawful basis such as fresh consent is required"
      }
    ],
    "answer": "D",
    "explanation": "GDPR’s purpose limitation principle requires assessing whether the new purpose is compatible with the original purpose. If incompatible, a new lawful basis (potentially new consent) is required. AI training doesn’t exempt organizations from this requirement."
  },
  {
    "id": "ext-173",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is a “Data Protection Impact Assessment” (DPIA) under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "An assessment focused exclusively on the quality and accuracy of the personal data being processed"
      },
      {
        "letter": "B",
        "text": "A financial impact assessment projecting the return on investment from data processing activities"
      },
      {
        "letter": "C",
        "text": "An assessment calculating the financial costs of data storage and processing infrastructure"
      },
      {
        "letter": "D",
        "text": "A systematic assessment of processing operations that are likely to result in high risk to individuals' rights and freedoms"
      }
    ],
    "answer": "D",
    "explanation": "A DPIA is a systematic assessment of processing operations likely to result in high risk to individuals’ rights and freedoms, required before such processing begins. Many AI systems require DPIAs. 60"
  },
  {
    "id": "ext-174",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "When is a DPIA required for AI systems under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "A DPIA is required only for AI systems deployed in healthcare and clinical medical diagnostic contexts"
      },
      {
        "letter": "B",
        "text": "A DPIA is required only after an AI system has already malfunctioned or caused measurable harm"
      },
      {
        "letter": "C",
        "text": "When processing is likely to result in high risk, such as systematic monitoring or large-scale processing of sensitive data"
      },
      {
        "letter": "D",
        "text": "A DPIA is never required for AI systems since they are automatically exempt from GDPR obligations"
      }
    ],
    "answer": "C",
    "explanation": "DPIAs are required when processing is likely to result in high risk to individuals’ rights, including systematic monitoring, large-scale processing of special category data, or automated decision-making with legal or similarly significant effects—common in AI systems."
  },
  {
    "id": "ext-175",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An organization conducts a DPIA for an AI system and identifies high residual risks that cannot be adequately mitigated. What should the organization do under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Consult with the relevant supervisory authority before proceeding with the processing activity"
      },
      {
        "letter": "B",
        "text": "Deploy the system without any further action since all identified risks were documented"
      },
      {
        "letter": "C",
        "text": "Proceed with deployment since the DPIA process has been formally completed"
      },
      {
        "letter": "D",
        "text": "Disregard the residual risks as an acceptable cost of technological innovation"
      }
    ],
    "answer": "A",
    "explanation": "Under GDPR, if a DPIA indicates high residual risks that cannot be adequately mitigated, the organization must consult with the supervisory authority before proceeding with the processing."
  },
  {
    "id": "ext-176",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “special category data” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Data stored in specialized or proprietary file formats that require custom software tools to access"
      },
      {
        "letter": "B",
        "text": "Data that is particularly expensive to collect, store, and process at commercial scale and volume"
      },
      {
        "letter": "C",
        "text": "Sensitive data revealing racial origin, political opinions, health, biometrics, and similar categories that require heightened protection"
      },
      {
        "letter": "D",
        "text": "Data obtained from premium third-party data brokers and specialized commercial data providers"
      }
    ],
    "answer": "C",
    "explanation": "Special category data (formerly “sensitive data”) includes personal data revealing racial/ethnic origin, political opinions, religious beliefs, health, sex life, sexual orientation, biometric data, and genetic data, requiring additional protections under GDPR. 61"
  },
  {
    "id": "ext-177",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An AI system processes biometric data for identification. What additional GDPR requirements apply?",
    "options": [
      {
        "letter": "A",
        "text": "Explicit consent or another Article 9 exception is required, plus enhanced security, DPIA, and data protection measures"
      },
      {
        "letter": "B",
        "text": "Biometric data used for identification purposes is fully exempt from GDPR requirements"
      },
      {
        "letter": "C",
        "text": "No additional requirements beyond standard GDPR obligations for general personal data"
      },
      {
        "letter": "D",
        "text": "Only the standard data protection requirements that apply to all categories of personal data"
      }
    ],
    "answer": "A",
    "explanation": "Biometric data used for identification is special category data under GDPR, requiring explicit consent or another Article 9 exception (e.g., substantial public interest with appropriate safeguards), plus enhanced protections."
  },
  {
    "id": "ext-178",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is the “right to access” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "The right to obtain confirmation of whether personal data is being processed and to access that personal data"
      },
      {
        "letter": "B",
        "text": "The right to inspect and examine the complete source code of AI systems processing personal data"
      },
      {
        "letter": "C",
        "text": "The right to access the public internet and browse websites freely without any restrictions"
      },
      {
        "letter": "D",
        "text": "The right to enter and physically access the buildings and premises of any company or organization"
      }
    ],
    "answer": "A",
    "explanation": "The right to access (Article 15) allows data subjects to obtain confirmation of whether their personal data is being processed and access to that data, plus information about processing."
  },
  {
    "id": "ext-179",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A data subject requests access to their personal data processed by an AI system. What information must be provided under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Only high-level aggregate statistics derived from the personal data, not the underlying records"
      },
      {
        "letter": "B",
        "text": "No information needs to be provided if the processing is performed by an AI system"
      },
      {
        "letter": "C",
        "text": "The personal data itself, purposes of processing, categories of data, recipients, retention period, and information about their rights"
      },
      {
        "letter": "D",
        "text": "Only the raw, unprocessed personal data values without any contextual or explanatory information"
      }
    ],
    "answer": "C",
    "explanation": "GDPR requires providing the personal data plus comprehensive information about processing including purposes, categories, recipients, retention periods, rights, and meaningful information about automated decision-making logic. 62"
  },
  {
    "id": "ext-180",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An AI model was trained on personal data. A data subject exercises their right to erasure (“right to be forgotten”). What are the organization’s obligations?",
    "options": [
      {
        "letter": "A",
        "text": "All erasure requests relating to data used in AI training may be categorically refused"
      },
      {
        "letter": "B",
        "text": "No obligation exists since the data has been incorporated into a trained machine learning model"
      },
      {
        "letter": "C",
        "text": "Complex obligations potentially including erasing the training data and assessing whether the model itself must be retrained or deleted"
      },
      {
        "letter": "D",
        "text": "Only the original source data must be erased; the trained model can be retained unchanged"
      }
    ],
    "answer": "C",
    "explanation": "The right to erasure creates complex obligations for AI systems. Organizations must erase the personal data where required and assess whether the trained model perpetuates the data (potentially requiring retraining or other measures). Simply erasing original data while retaining a model trained on it may be insufficient."
  },
  {
    "id": "ext-181",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “data portability” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "The right to receive personal data in a structured, commonly used, machine-readable format and transmit it to another controller"
      },
      {
        "letter": "B",
        "text": "The portability of trained AI models and their parameters between different computing platforms"
      },
      {
        "letter": "C",
        "text": "The physical portability and transportability of server hardware between data center locations"
      },
      {
        "letter": "D",
        "text": "The right to receive personal data on portable physical storage devices such as USB drives"
      }
    ],
    "answer": "A",
    "explanation": "Data portability (Article 20) allows data subjects to receive their personal data in a structured, commonly used, machine-readable format and transmit it to another controller."
  },
  {
    "id": "ext-182",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “privacy by design” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Creating and drafting standalone privacy policies and data protection notices as legal documents"
      },
      {
        "letter": "B",
        "text": "Integrating data protection principles and safeguards into systems and processes from the initial design stage onward"
      },
      {
        "letter": "C",
        "text": "Designing private, soundproof office spaces for data processing and engineering staff"
      },
      {
        "letter": "D",
        "text": "Designing segregated network infrastructure for isolating data processing workloads"
      }
    ],
    "answer": "B",
    "explanation": "Privacy by design (Article 25) requires integrating data protection into processing activities and business practices from the design stage, implementing appropriate technical and organizational measures. This is crucial for AI systems. 63"
  },
  {
    "id": "ext-183",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “privacy by default” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Ensuring that, by default, only personal data necessary for each specific processing purpose is collected and processed"
      },
      {
        "letter": "B",
        "text": "Applying encryption to all stored data by default without further configuration"
      },
      {
        "letter": "C",
        "text": "Setting default passwords on all user accounts that process personal data"
      },
      {
        "letter": "D",
        "text": "Configuring default privacy preference settings within software application interfaces"
      }
    ],
    "answer": "A",
    "explanation": "Privacy by default (Article 25) requires that by default, only personal data necessary for each specific purpose is processed, regarding amount, extent of processing, storage period, and accessibility."
  },
  {
    "id": "ext-184",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An AI system processes personal data of EU residents but the company is based outside the EU. Does GDPR apply?",
    "options": [
      {
        "letter": "A",
        "text": "GDPR applies only if the organization maintains physical offices, staff, or servers on EU territory"
      },
      {
        "letter": "B",
        "text": "No — GDPR applies exclusively to organizations legally incorporated within an EU member state"
      },
      {
        "letter": "C",
        "text": "GDPR has no application to any organization or processing activity located outside the European Union"
      },
      {
        "letter": "D",
        "text": "Yes — GDPR applies extraterritorially when organizations offer goods or services to, or monitor, individuals in the EU"
      }
    ],
    "answer": "D",
    "explanation": "GDPR has extraterritorial application, applying to organizations outside the EU if they offer goods/services to EU data subjects or monitor their behavior, regardless of where the organization is established."
  },
  {
    "id": "ext-185",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An AI system makes inferences about individuals (e.g., predicting health conditions) from non-sensitive data. Are these inferences protected under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Inferences qualify as personal data only if the underlying attributes were explicitly collected from the individual"
      },
      {
        "letter": "B",
        "text": "No — statistical inferences and algorithmic predictions are not classified as personal data under GDPR"
      },
      {
        "letter": "C",
        "text": "Yes — inferences about identified individuals are personal data; GDPR applies, especially if the inferences reveal special category data"
      },
      {
        "letter": "D",
        "text": "AI-generated inferences and predictions are categorically exempt from the scope of GDPR regulation"
      }
    ],
    "answer": "C",
    "explanation": "Inferences about identified or identifiable individuals constitute personal data under GDPR. If inferences reveal special category information (e.g., health), additional protections may apply even if derived from non-sensitive data. This is a significant issue for AI systems. 64"
  },
  {
    "id": "ext-186",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “lawful basis” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Confirmation that the proposed data processing is technically feasible within the current IT infrastructure"
      },
      {
        "letter": "B",
        "text": "Internal approval obtained from the organization's legal department before processing activities begin"
      },
      {
        "letter": "C",
        "text": "Any commercial or business rationale that the data controller considers to be sufficient justification"
      },
      {
        "letter": "D",
        "text": "One of six legal grounds: consent, contract, legal obligation, vital interests, public task, or legitimate interests"
      }
    ],
    "answer": "D",
    "explanation": "Lawful basis refers to one of six legal grounds required for processing personal data under GDPR: consent, contract, legal obligation, vital interests, public task, or legitimate interests. Every processing operation requires a lawful basis."
  },
  {
    "id": "ext-187",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "For an AI system that analyzes customer behavior for marketing, which lawful basis is MOST appropriate under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Legal obligation — processing necessary for compliance with a statutory obligation of the controller"
      },
      {
        "letter": "B",
        "text": "Public task — processing necessary for the performance of a task in the public interest"
      },
      {
        "letter": "C",
        "text": "Legitimate interests, subject to a balancing test weighing the organization's interests against individuals' rights, or consent"
      },
      {
        "letter": "D",
        "text": "Vital interests — necessary to protect the life of the data subject or another natural person"
      }
    ],
    "answer": "C",
    "explanation": "Marketing analytics typically relies on legitimate interests (after conducting a balancing test showing interests aren’t overridden by data subjects’ rights) or consent. Vital interests (A) is for life-or-death situations. Legal obligation (C) and public task (D) don’t apply to commercial marketing."
  },
  {
    "id": "ext-188",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “transparency” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Publishing transparent, publicly-available pricing information for data processing services"
      },
      {
        "letter": "B",
        "text": "Providing clear, concise, and accessible information to data subjects about how their personal data is being processed"
      },
      {
        "letter": "C",
        "text": "Using transparent physical materials in the construction of computer monitors and display screens"
      },
      {
        "letter": "D",
        "text": "Designing buildings with transparent glass walls for data processing facilities"
      }
    ],
    "answer": "B",
    "explanation": "Transparency under GDPR requires providing clear, accessible, and understandable information to data subjects about how their personal data is processed, including purposes, legal basis, retention, and rights."
  },
  {
    "id": "ext-189",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What information must be provided to data subjects when collecting personal data for AI training under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Information must be provided only if the data subject submits a formal written request to receive it"
      },
      {
        "letter": "B",
        "text": "Identity of the controller, processing purposes, lawful basis, retention period, data subject rights, and automated decision-making info"
      },
      {
        "letter": "C",
        "text": "No information is legally required to be provided to data subjects under any provision of GDPR"
      },
      {
        "letter": "D",
        "text": "Only the legal name and registered business address of the organization that collected the data"
      }
    ],
    "answer": "B",
    "explanation": "GDPR requires comprehensive information at collection including controller identity, purposes, lawful basis, retention period, data subject rights, and information about automated decision-making. This applies to AI training data."
  },
  {
    "id": "ext-190",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An organization uses “legitimate interests” as lawful basis for AI processing. A data subject objects to the processing. What must the organization do?",
    "options": [
      {
        "letter": "A",
        "text": "Ignore the objection and continue processing without any further assessment, response, or documentation"
      },
      {
        "letter": "B",
        "text": "Continue processing without conducting any evaluation of whether the objection has legal merit"
      },
      {
        "letter": "C",
        "text": "Stop processing unless the controller can demonstrate compelling legitimate grounds that override the data subject's rights"
      },
      {
        "letter": "D",
        "text": "Only stop processing if the data subject pays a reasonable administrative fee for handling the objection"
      }
    ],
    "answer": "C",
    "explanation": "Under GDPR Article 21, when a data subject objects to processing based on legitimate interests, the organization must stop processing unless it can demonstrate compelling legitimate grounds that override the individual’s interests, rights, and freedoms, or for legal claims."
  },
  {
    "id": "ext-191",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “data security” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Appropriate technical and organizational measures to protect personal data against unauthorized access, loss, or destruction"
      },
      {
        "letter": "B",
        "text": "Implementing data encryption as the sole and exclusive security measure, without additional controls"
      },
      {
        "letter": "C",
        "text": "Enforcing strong password complexity policies as the only necessary data protection measure"
      },
      {
        "letter": "D",
        "text": "Stationing uniformed physical security guards at the entrances to data center facilities and server rooms"
      }
    ],
    "answer": "A",
    "explanation": "Data security under GDPR (Article 32) requires appropriate technical and organizational measures to ensure security appropriate to the risk, including encryption, pseudonymization, confidentiality, integrity, availability, and resilience."
  },
  {
    "id": "ext-192",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “pseudonymization” under GDPR and why is it relevant for AI?",
    "options": [
      {
        "letter": "A",
        "text": "Processing personal data so it can no longer be attributed to a specific individual without additional, separately-stored information"
      },
      {
        "letter": "B",
        "text": "Using fictitious or made-up names in place of real personal identifiers without any technical safeguards"
      },
      {
        "letter": "C",
        "text": "Irreversibly removing all identifying information so that re-identification becomes permanently impossible"
      },
      {
        "letter": "D",
        "text": "Applying standard encryption algorithms to data at rest and in transit across the processing pipeline"
      }
    ],
    "answer": "A",
    "explanation": "Pseudonymization processes personal data so it can no longer be attributed to a specific data subject without additional information (kept separately), reducing risk while maintaining data utility for AI. It’s not full anonymization (C) and is more specific than encryption (D)."
  },
  {
    "id": "ext-193",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “anonymization” under GDPR?",
    "options": [
      {
        "letter": "A",
        "text": "Using anonymous or pseudonymous online accounts and usernames for accessing digital services"
      },
      {
        "letter": "B",
        "text": "Irreversibly removing identifying information so individuals can no longer be identified, taking the data outside the scope of GDPR"
      },
      {
        "letter": "C",
        "text": "Temporarily removing names from records while retaining the technical ability to re-identify individuals later"
      },
      {
        "letter": "D",
        "text": "Applying encryption to personal data, which is a reversible measure rather than true anonymization"
      }
    ],
    "answer": "B",
    "explanation": "Anonymization irreversibly removes identifying information so individuals can no longer be identified by any means, taking the data outside GDPR’s scope. True anonymization is difficult, especially for AI datasets."
  },
  {
    "id": "ext-194",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An AI system is trained on “anonymized” data, but the model can be used to re-identify individuals. What are the GDPR implications?",
    "options": [
      {
        "letter": "A",
        "text": "Anonymization permanently and unconditionally exempts the resulting data from all GDPR requirements"
      },
      {
        "letter": "B",
        "text": "Re-identification of individuals from supposedly anonymized data is technically impossible"
      },
      {
        "letter": "C",
        "text": "The data may not be effectively anonymized; GDPR may continue to apply, requiring a compliance assessment and appropriate safeguards"
      },
      {
        "letter": "D",
        "text": "No GDPR implications exist since the data was formally declared anonymized before being used for training"
      }
    ],
    "answer": "C",
    "explanation": "If individuals can be re-identified (including through model inversion or other attacks), the data may not be truly anonymized and GDPR may still apply. True anonymization is difficult with AI systems."
  },
  {
    "id": "ext-195",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An organization transfers personal data to a third country for AI processing. What GDPR requirements apply?",
    "options": [
      {
        "letter": "A",
        "text": "No specific legal requirements govern the international transfer of personal data under GDPR"
      },
      {
        "letter": "B",
        "text": "Any international transfer of personal data is permitted without restriction, safeguard, or authorization"
      },
      {
        "letter": "C",
        "text": "An adequacy decision, appropriate safeguards such as Standard Contractual Clauses, or a qualifying derogation is required"
      },
      {
        "letter": "D",
        "text": "Only notifying the data subject is required before transferring their personal data internationally"
      }
    ],
    "answer": "C",
    "explanation": "GDPR Chapter V governs international transfers, requiring adequacy decisions, appropriate safeguards (Standard Contractual Clauses, Binding Corporate Rules), or specific derogations. Post-Schrems II, additional assessment of third country laws is required."
  },
  {
    "id": "ext-196",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is the purpose of AI standards?",
    "options": [
      {
        "letter": "A",
        "text": "To replace binding laws and regulations with entirely voluntary and optional guidance"
      },
      {
        "letter": "B",
        "text": "To provide common frameworks, guidelines, and technical specs that support responsible AI development"
      },
      {
        "letter": "C",
        "text": "To increase the financial costs and regulatory burden on AI developers and deployers"
      },
      {
        "letter": "D",
        "text": "To prevent or prohibit all AI research and commercial development activities globally"
      }
    ],
    "answer": "B",
    "explanation": "AI standards provide common frameworks, guidelines, and technical specifications for responsible AI development, promoting consistency, interoperability, and best practices. They complement regulations. They complement regulations by promoting consistency and best practices."
  },
  {
    "id": "ext-197",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is ISO/IEC 42001?",
    "options": [
      {
        "letter": "A",
        "text": "A standardized data format for exchanging AI training datasets between systems"
      },
      {
        "letter": "B",
        "text": "A programming language designed specifically for AI and machine learning development"
      },
      {
        "letter": "C",
        "text": "The international standard specifying requirements for an AI management system within an organization"
      },
      {
        "letter": "D",
        "text": "A specific type of AI algorithm or model architecture for classification tasks"
      }
    ],
    "answer": "C",
    "explanation": "ISO/IEC 42001 is an international standard specifying requirements for establishing, implementing, maintaining, and continually improving an AI management system within organizations. 68"
  },
  {
    "id": "ext-198",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is the NIST AI Risk Management Framework (AI RMF)?",
    "options": [
      {
        "letter": "A",
        "text": "A certification program that formally accredits AI systems as compliant with US law"
      },
      {
        "letter": "B",
        "text": "A mandatory US federal regulation with binding legal force and enforcement mechanisms"
      },
      {
        "letter": "C",
        "text": "A detailed technical specification that prescribes exact AI algorithm implementation methods"
      },
      {
        "letter": "D",
        "text": "A voluntary framework from NIST providing guidance on managing AI risks throughout the system lifecycle"
      }
    ],
    "answer": "D",
    "explanation": "The NIST AI RMF is a voluntary framework providing guidance for managing AI risks throughout the lifecycle, organized around four functions: Govern, Map, Measure, and Manage. It’s not mandatory regulation (A), not technical specifications (C), and not a certification (D)."
  },
  {
    "id": "ext-199",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What are the four functions of the NIST AI RMF?",
    "options": [
      {
        "letter": "A",
        "text": "Build, Test, Deploy, Monitor — a standard software development lifecycle"
      },
      {
        "letter": "B",
        "text": "Design, Develop, Deploy, Decommission — a system engineering lifecycle model"
      },
      {
        "letter": "C",
        "text": "Plan, Do, Check, Act — the ISO continuous improvement cycle"
      },
      {
        "letter": "D",
        "text": "Govern, Map, Measure, Manage"
      }
    ],
    "answer": "D",
    "explanation": "The NIST AI RMF is organized around four functions: Govern (cultivate culture and structures), Map (understand context and risks), Measure (assess and benchmark), and Manage (prioritize and respond to risks)."
  },
  {
    "id": "ext-200",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is the purpose of the OECD AI Principles?",
    "options": [
      {
        "letter": "A",
        "text": "To establish international standards promoting AI that is innovative, trustworthy, and respects human rights and democratic values"
      },
      {
        "letter": "B",
        "text": "To create binding international law that compels all signatory nations to adopt identical AI regulations"
      },
      {
        "letter": "C",
        "text": "To develop technical AI algorithms and models on behalf of member governments"
      },
      {
        "letter": "D",
        "text": "To certify individual AI systems through a centralized international accreditation body"
      }
    ],
    "answer": "A",
    "explanation": "The OECD AI Principles provide internationally agreed principles for responsible AI stewardship, including inclusive growth, sustainable development, human-centered values, transparency, robustness, and accountability. They’re not binding law (A), don’t develop algorithms (C), or certify systems (D)."
  },
  {
    "id": "ext-201",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What are “AI ethics guidelines”?",
    "options": [
      {
        "letter": "A",
        "text": "Guidelines governing the personal ethical conduct and behavior of individual AI developers"
      },
      {
        "letter": "B",
        "text": "Detailed technical specifications prescribing exact implementation methods for AI systems"
      },
      {
        "letter": "C",
        "text": "Non-binding principles and recommendations that guide organizations in developing and deploying ethical AI systems"
      },
      {
        "letter": "D",
        "text": "Legally binding requirements that carry the full force of statutory or regulatory law"
      }
    ],
    "answer": "C",
    "explanation": "AI ethics guidelines are frameworks providing principles and recommendations for ethical AI development and deployment, often addressing fairness, transparency, accountability, and human rights. They’re typically not legally binding (C) and are broader than technical specs (D)."
  },
  {
    "id": "ext-202",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “algorithmic impact assessment” as a best practice?",
    "options": [
      {
        "letter": "A",
        "text": "A structured evaluation of potential algorithmic harms, fairness implications, and the broader societal impacts of an AI system"
      },
      {
        "letter": "B",
        "text": "An assessment limited to technical performance metrics such as accuracy, latency, and throughput"
      },
      {
        "letter": "C",
        "text": "An assessment analyzing only the market positioning and competitive landscape for the AI product"
      },
      {
        "letter": "D",
        "text": "An assessment focused exclusively on the financial costs and projected return on investment"
      }
    ],
    "answer": "A",
    "explanation": "Algorithmic impact assessment is a best practice involving systematic evaluation of potential impacts, risks, and harms (including on rights, fairness, and society) before deploying AI systems, informing risk mitigation."
  },
  {
    "id": "ext-203",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is a “model card” in AI best practices?",
    "options": [
      {
        "letter": "A",
        "text": "A financial credit card issued for purchasing access to commercial AI models and APIs"
      },
      {
        "letter": "B",
        "text": "A playing card used in games that happen to feature AI-related themes and imagery"
      },
      {
        "letter": "C",
        "text": "A professional business card distributed by AI developers and researchers at conferences"
      },
      {
        "letter": "D",
        "text": "A structured transparency document describing an AI model's intended use, performance, and limitations"
      }
    ],
    "answer": "D",
    "explanation": "A model card is documentation providing transparent information about a machine learning model including intended use, training data, performance metrics, limitations, and fairness considerations."
  },
  {
    "id": "ext-204",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What information should a model card typically include?",
    "options": [
      {
        "letter": "A",
        "text": "Only the technical architecture, layer configuration, and parameter count of the model"
      },
      {
        "letter": "B",
        "text": "Only the name, affiliation, and contact information of the model's original developer"
      },
      {
        "letter": "C",
        "text": "Intended use, performance across subgroups, known limitations, training data characteristics, and ethical considerations"
      },
      {
        "letter": "D",
        "text": "Only the model's aggregate accuracy score on a standard held-out test dataset"
      }
    ],
    "answer": "C",
    "explanation": "Model cards should include comprehensive information: model details, intended use cases, training data characteristics, performance metrics (including across demographic groups), known limitations, and ethical considerations."
  },
  {
    "id": "ext-205",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “red teaming” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Using computer equipment and peripherals that are colored red for visual identification"
      },
      {
        "letter": "B",
        "text": "A political advocacy activity focused on AI regulation and technology policy"
      },
      {
        "letter": "C",
        "text": "A specific type of neural network architecture used for computer vision tasks"
      },
      {
        "letter": "D",
        "text": "Adversarial testing where teams deliberately attempt to find flaws, vulnerabilities, or harmful outputs in AI systems"
      }
    ],
    "answer": "D",
    "explanation": "Red teaming in AI involves adversarial testing where a team deliberately attempts to find vulnerabilities, biases, failure modes, or ways to cause the AI system to behave inappropriately, improving robustness."
  },
  {
    "id": "ext-206",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “fairness testing” as an AI best practice?",
    "options": [
      {
        "letter": "A",
        "text": "Testing whether the system fairly competes in the marketplace against other AI products"
      },
      {
        "letter": "B",
        "text": "Testing whether the system's pricing model is fair to the organization and its customers"
      },
      {
        "letter": "C",
        "text": "Evaluating whether an AI system produces equitable outcomes and error rates across different demographic groups and subpopulations"
      },
      {
        "letter": "D",
        "text": "Evaluating only the system's aggregate accuracy without examining subgroup performance"
      }
    ],
    "answer": "C",
    "explanation": "Fairness testing systematically evaluates AI system performance and outcomes across different demographic groups to identify disparities, biases, or discriminatory impacts, enabling mitigation."
  },
  {
    "id": "ext-207",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An organization conducts fairness testing and finds their AI system has 95% accuracy overall but only 75% accuracy for a minority group. What should be done according to best practices?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy the system as-is since the aggregate accuracy across all groups is acceptably high"
      },
      {
        "letter": "B",
        "text": "Report only the aggregate accuracy metric and withhold the disaggregated subgroup results"
      },
      {
        "letter": "C",
        "text": "Investigate the accuracy disparity, identify root causes, and implement mitigation before deployment"
      },
      {
        "letter": "D",
        "text": "Disregard the subgroup performance disparity as statistically insignificant random noise"
      }
    ],
    "answer": "C",
    "explanation": "Best practices require investigating root causes of performance disparities, attempting to improve performance for disadvantaged groups (through better data, algorithm adjustments, or other means), assessing whether deployment is appropriate given remaining disparities, and documenting decisions. and document decisions about any remaining disparities."
  },
  {
    "id": "ext-208",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “explainability testing” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Measuring the raw processing speed and computational throughput of the AI system"
      },
      {
        "letter": "B",
        "text": "Testing whether the accompanying documentation is well-written and grammatically correct"
      },
      {
        "letter": "C",
        "text": "Evaluating the financial costs associated with developing and operating the AI system"
      },
      {
        "letter": "D",
        "text": "Evaluating whether AI system decisions and behaviors can be explained and understood by the people affected by them"
      }
    ],
    "answer": "D",
    "explanation": "Explainability testing evaluates whether AI system explanations are accurate (faithful to actual system behavior), understandable to intended audiences, and useful for their purposes (decision-making, debugging, accountability)."
  },
  {
    "id": "ext-209",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “continuous monitoring” as an AI best practice?",
    "options": [
      {
        "letter": "A",
        "text": "Ongoing observation of AI system behavior, performance, and impacts to detect drift, degradation, or emerging risks"
      },
      {
        "letter": "B",
        "text": "Monitoring AI systems only during the initial model development and testing phases"
      },
      {
        "letter": "C",
        "text": "Monitoring limited exclusively to cybersecurity threats, intrusions, and security incidents"
      },
      {
        "letter": "D",
        "text": "A single monitoring checkpoint conducted once at the moment of initial production deployment"
      }
    ],
    "answer": "A",
    "explanation": "Continuous monitoring involves ongoing monitoring of AI system performance, fairness, accuracy, and impacts after deployment to detect model drift, emerging biases, or other issues requiring intervention."
  },
  {
    "id": "ext-210",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “human-in-the-loop” (HITL) as a best practice?",
    "options": [
      {
        "letter": "A",
        "text": "Designing AI systems so that human judgment and intervention are integrated into critical decision-making processes"
      },
      {
        "letter": "B",
        "text": "Placing human operators physically inside the mechanical loops and circuits of computing hardware"
      },
      {
        "letter": "C",
        "text": "Limiting human involvement to only the initial training phase of the AI model lifecycle"
      },
      {
        "letter": "D",
        "text": "Restricting human participation to hardware testing and quality assurance activities"
      }
    ],
    "answer": "A",
    "explanation": "Human-in-the-loop (HITL) maintains meaningful human involvement in AI system operation and decision-making, ensuring human oversight, intervention capability, and final authority for important decisions."
  },
  {
    "id": "ext-211",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “human-on-the-loop” (HOTL)?",
    "options": [
      {
        "letter": "A",
        "text": "Exactly the same concept as human-in-the-loop with no meaningful distinction between them"
      },
      {
        "letter": "B",
        "text": "An arrangement where humans participate only during the initial model training phase"
      },
      {
        "letter": "C",
        "text": "A human overseer monitors the AI system's operation and can intervene or override decisions when necessary"
      },
      {
        "letter": "D",
        "text": "An approach where humans are entirely removed from all AI decision-making and oversight processes"
      }
    ],
    "answer": "C",
    "explanation": "Human-on-the-loop (HOTL) involves humans monitoring AI system operation with the ability to intervene when necessary, but not reviewing every individual decision—appropriate for lower-risk applications. This differs from HITL (A) where humans review each decision."
  },
  {
    "id": "ext-212",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An AI system makes thousands of decisions daily. Implementing human-in-the-loop for every decision is impractical. What is the MOST appropriate approach according to best practices?",
    "options": [
      {
        "letter": "A",
        "text": "Remove all human oversight entirely and rely exclusively on the AI system's automated decisions"
      },
      {
        "letter": "B",
        "text": "Only initiate human review after errors have been reported by affected individuals"
      },
      {
        "letter": "C",
        "text": "Require full human review of every individual decision regardless of practical constraints or volume"
      },
      {
        "letter": "D",
        "text": "Use a risk-based approach: human review for high-stakes decisions, with automated monitoring and sampling for routine determinations"
      }
    ],
    "answer": "D",
    "explanation": "Best practices suggest a risk-based approach: human-in-the-loop for high-stakes decisions, human-on-the-loop with exception-based review (flagging unusual cases) for routine decisions, plus continuous monitoring for patterns. This balances oversight with practicality."
  },
  {
    "id": "ext-213",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “version control” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Tracking only the physical hardware components, server configurations, and infrastructure"
      },
      {
        "letter": "B",
        "text": "Controlling only the version history of the application source code in a code repository"
      },
      {
        "letter": "C",
        "text": "Managing only the versioning and revision history of written documentation and policies"
      },
      {
        "letter": "D",
        "text": "Tracking changes to models, training data, code, and configurations to ensure reproducibility and enable rollback"
      }
    ],
    "answer": "D",
    "explanation": "Version control for AI systems involves tracking and managing different versions of models, training data, code, and configurations, enabling reproducibility, rollback, and audit trails."
  },
  {
    "id": "ext-214",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “reproducibility” as an AI best practice?",
    "options": [
      {
        "letter": "A",
        "text": "The ability to independently reconstruct and verify AI model results using the same data, code, and configurations"
      },
      {
        "letter": "B",
        "text": "The ability to reproduce and duplicate the system's written documentation and manuals"
      },
      {
        "letter": "C",
        "text": "The ability to reproduce only the specific errors and failure modes of the AI system"
      },
      {
        "letter": "D",
        "text": "The ability to physically reproduce and manufacture AI hardware components and processors"
      }
    ],
    "answer": "A",
    "explanation": "Reproducibility is the ability to recreate AI system results and behaviors using the same data, code, and conditions, essential for validation, debugging, and accountability. This requires careful version control and documentation."
  },
  {
    "id": "ext-215",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “data quality assessment” in AI best practices?",
    "options": [
      {
        "letter": "A",
        "text": "Evaluating the quality and effectiveness of data visualization dashboards and charts"
      },
      {
        "letter": "B",
        "text": "Evaluating training data for accuracy, completeness, representativeness, and freedom from problematic biases before use"
      },
      {
        "letter": "C",
        "text": "Calculating the total financial cost of acquiring, storing, and maintaining the dataset"
      },
      {
        "letter": "D",
        "text": "Assessing the quality and durability of the physical storage media holding the data"
      }
    ],
    "answer": "B",
    "explanation": "Data quality assessment evaluates training and operational data for accuracy, completeness, representativeness, and potential biases, as data quality fundamentally impacts AI system performance and fairness."
  },
  {
    "id": "ext-216",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “bias testing” in AI development?",
    "options": [
      {
        "letter": "A",
        "text": "Evaluating only the technical and architectural biases in the model's design and code"
      },
      {
        "letter": "B",
        "text": "Testing for biases in the organization's market positioning and competitive strategy plans"
      },
      {
        "letter": "C",
        "text": "Evaluating whether AI model outputs exhibit systematic disparities across demographic groups"
      },
      {
        "letter": "D",
        "text": "Testing only for the personal biases and prejudices held by individual AI developers"
      }
    ],
    "answer": "C",
    "explanation": "Bias testing systematically evaluates AI systems for unfair biases in outputs, performance, or impacts across different demographic or other groups, using various fairness metrics and testing methodologies."
  },
  {
    "id": "ext-217",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An organization follows all technical best practices for AI development but doesn’t engage stakeholders or consider societal impacts. Is this sufficient?",
    "options": [
      {
        "letter": "A",
        "text": "Yes — following all technical best practices is fully sufficient for responsible AI governance"
      },
      {
        "letter": "B",
        "text": "Yes — as long as the AI system achieves a sufficiently high level of accuracy on test data"
      },
      {
        "letter": "C",
        "text": "No — technical best practices alone are insufficient; stakeholder engagement and broader governance considerations are also essential"
      },
      {
        "letter": "D",
        "text": "Stakeholder engagement and governance are entirely optional activities with no bearing on responsibility"
      }
    ],
    "answer": "C",
    "explanation": "Comprehensive AI best practices extend beyond technical measures to include stakeholder engagement, impact assessment, consideration of societal implications, and ongoing governance. Technical excellence alone is insufficient for responsible AI."
  },
  {
    "id": "ext-218",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is “documentation” as an AI best practice?",
    "options": [
      {
        "letter": "A",
        "text": "Only detailed technical specifications and architecture diagrams for the AI model"
      },
      {
        "letter": "B",
        "text": "Only end-user manuals and basic operating instructions for the deployed AI system"
      },
      {
        "letter": "C",
        "text": "Only legal contracts, regulatory filings, and compliance-related documentation files"
      },
      {
        "letter": "D",
        "text": "Comprehensive records covering system design, data sources, model decisions, risk assessments, and governance"
      }
    ],
    "answer": "D",
    "explanation": "Documentation as a best practice involves comprehensive recording of AI system development processes, design decisions, testing results, performance metrics, limitations, and governance decisions, supporting accountability and knowledge transfer."
  },
  {
    "id": "ext-219",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “incident response planning” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Planning limited exclusively to physical hardware failures and equipment malfunctions"
      },
      {
        "letter": "B",
        "text": "Pre-defined procedures for detecting, responding to, containing, and learning from AI system failures"
      },
      {
        "letter": "C",
        "text": "Planning focused solely on financial losses, budget overruns, and cost overrun scenarios"
      },
      {
        "letter": "D",
        "text": "Planning that addresses only cybersecurity breaches and unauthorized access incidents"
      }
    ],
    "answer": "B",
    "explanation": "Incident response planning for AI involves preparing procedures for detecting, responding to, mitigating, and learning from AI system failures, harms, biases, or unexpected behaviors, including communication, remediation, and improvement processes."
  },
  {
    "id": "ext-220",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "Why do some industries have specific AI regulations?",
    "options": [
      {
        "letter": "A",
        "text": "To intentionally make regulatory compliance more difficult and burdensome for organizations"
      },
      {
        "letter": "B",
        "text": "For no substantive reason — sector-specific regulation is purely an administrative artifact"
      },
      {
        "letter": "C",
        "text": "To prevent or prohibit the use of AI technologies in those specific industry sectors"
      },
      {
        "letter": "D",
        "text": "Because different sectors present unique risks, harms, and regulatory traditions that generic AI rules may not adequately address"
      }
    ],
    "answer": "D",
    "explanation": "Industry-specific AI regulations exist because AI risks, impacts, and appropriate governance vary significantly by industry context (healthcare vs. finance vs. transportation), requiring tailored requirements beyond general AI regulations."
  },
  {
    "id": "ext-221",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is unique about AI regulation in healthcare?",
    "options": [
      {
        "letter": "A",
        "text": "Only general-purpose AI regulations apply, with no additional healthcare-specific obligations"
      },
      {
        "letter": "B",
        "text": "No regulatory requirements of any kind apply to AI systems used in healthcare settings"
      },
      {
        "letter": "C",
        "text": "Additional requirements for safety, clinical validation, patient privacy under HIPAA, and medical device regulations may apply"
      },
      {
        "letter": "D",
        "text": "AI systems deployed in healthcare are completely unregulated under current US and EU law"
      }
    ],
    "answer": "C",
    "explanation": "Healthcare AI faces unique regulatory requirements addressing patient safety, medical device regulations (FDA in US, MDR in EU), clinical validation, health data privacy (HIPAA, GDPR), and diagnostic accuracy."
  },
  {
    "id": "ext-222",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An AI system provides diagnostic suggestions to physicians. How might it be regulated in healthcare?",
    "options": [
      {
        "letter": "A",
        "text": "Only general software quality regulations apply, with no medical or health-specific requirements"
      },
      {
        "letter": "B",
        "text": "No healthcare-specific regulations apply to AI systems that only provide diagnostic suggestions"
      },
      {
        "letter": "C",
        "text": "Healthcare AI systems are entirely exempt from all regulatory oversight and requirements"
      },
      {
        "letter": "D",
        "text": "It may be regulated as a medical device requiring approval, with additional requirements for clinical evidence, safety, and data privacy"
      }
    ],
    "answer": "D",
    "explanation": "AI systems providing diagnostic suggestions may be regulated as medical devices (Software as a Medical Device - SaMD) requiring regulatory approval (FDA clearance/approval in US, CE marking in EU), clinical validation, and ongoing safety monitoring."
  },
  {
    "id": "ext-223",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is HIPAA and how does it relate to AI in healthcare?",
    "options": [
      {
        "letter": "A",
        "text": "A category of healthcare organization such as a hospital system or clinical practice group"
      },
      {
        "letter": "B",
        "text": "An international technical standard specifying healthcare data interoperability requirements"
      },
      {
        "letter": "C",
        "text": "The US law protecting health information privacy, applying to AI systems that process protected health data"
      },
      {
        "letter": "D",
        "text": "A specific type of AI algorithm designed for medical image classification and analysis"
      }
    ],
    "answer": "C",
    "explanation": "HIPAA (Health Insurance Portability and Accountability Act) is US law protecting health information privacy and security, applying to AI systems that process protected health information (PHI), requiring safeguards, patient rights, and breach notification."
  },
  {
    "id": "ext-224",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is unique about AI regulation in financial services?",
    "options": [
      {
        "letter": "A",
        "text": "Financial regulators impose requirements for fairness in lending, model risk management, and anti-discrimination compliance"
      },
      {
        "letter": "B",
        "text": "Only general-purpose AI regulations apply, with no financial sector-specific requirements"
      },
      {
        "letter": "C",
        "text": "No regulatory requirements apply to AI systems used in financial services activities"
      },
      {
        "letter": "D",
        "text": "AI systems deployed in financial services are entirely unregulated under current US and EU law"
      }
    ],
    "answer": "A",
    "explanation": "Financial services AI faces unique regulatory requirements addressing fair lending (ECOA, Fair Housing Act), credit reporting (FCRA), anti-discrimination, market manipulation, algorithmic trading, and financial stability risks."
  },
  {
    "id": "ext-225",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An AI system makes credit decisions. What US laws are MOST relevant?",
    "options": [
      {
        "letter": "A",
        "text": "Only general principles of contract law and standard commercial transactions apply"
      },
      {
        "letter": "B",
        "text": "The Equal Credit Opportunity Act, Fair Credit Reporting Act, and fair lending anti-discrimination laws"
      },
      {
        "letter": "C",
        "text": "Only individual state laws apply, with no applicable federal regulatory framework"
      },
      {
        "letter": "D",
        "text": "No specific federal laws apply to AI systems that make credit or lending decisions"
      }
    ],
    "answer": "B",
    "explanation": "AI credit decisions are subject to ECOA (prohibiting discrimination, requiring adverse action notices), FCRA (governing credit reporting), and Fair Housing Act (for housing-related credit), plus general AI regulations."
  },
  {
    "id": "ext-226",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A bank’s AI credit model is accurate but has disparate impact on a protected class. The bank argues there’s no intentional discrimination. What is the legal situation?",
    "options": [
      {
        "letter": "A",
        "text": "Disparate impact can violate fair lending laws regardless of intent; the bank must demonstrate business necessity"
      },
      {
        "letter": "B",
        "text": "Only intentional, deliberate discrimination is prohibited under US fair lending statutes"
      },
      {
        "letter": "C",
        "text": "There is no legal issue since the organization had no subjective intent to discriminate"
      },
      {
        "letter": "D",
        "text": "High aggregate accuracy eliminates all legal and regulatory concerns regardless of disparate impact"
      }
    ],
    "answer": "A",
    "explanation": "Fair lending laws prohibit both disparate treatment (intentional discrimination) and disparate impact (policies with discriminatory effects even without intent). If disparate impact exists, the bank must demonstrate business necessity and that less discriminatory alternatives aren’t available."
  },
  {
    "id": "ext-227",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is unique about AI regulation in employment?",
    "options": [
      {
        "letter": "A",
        "text": "No regulatory requirements apply to AI systems used in employment and hiring contexts"
      },
      {
        "letter": "B",
        "text": "AI systems used in employment decisions are completely unregulated under current US law"
      },
      {
        "letter": "C",
        "text": "Only general-purpose AI regulations apply, with no employment-specific legal obligations"
      },
      {
        "letter": "D",
        "text": "Anti-discrimination laws enforced by the EEOC apply, requiring that AI screening tools not disadvantage protected classes"
      }
    ],
    "answer": "D",
    "explanation": "Employment AI faces unique regulatory requirements addressing anti-discrimination laws (Title VII, ADA, ADEA), labor laws, worker rights, and transparency requirements for automated employment decisions."
  },
  {
    "id": "ext-228",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An AI system screens job applications. What legal requirements typically apply?",
    "options": [
      {
        "letter": "A",
        "text": "Anti-discrimination laws, EEOC guidance on algorithmic fairness, and potentially state and local AI hiring regulations"
      },
      {
        "letter": "B",
        "text": "No specific legal or regulatory requirements apply to AI-powered job application screening"
      },
      {
        "letter": "C",
        "text": "Only general software development and quality assurance requirements are relevant"
      },
      {
        "letter": "D",
        "text": "Employment AI systems are categorically exempt from all anti-discrimination and labor laws"
      }
    ],
    "answer": "A",
    "explanation": "AI employment screening is subject to anti-discrimination laws (Title VII, ADA, ADEA), potential requirements for transparency and human review (EEOC guidance, NYC Local Law 144), and validation that screening criteria are job-related and consistent with business necessity."
  },
  {
    "id": "ext-229",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is unique about AI regulation in law enforcement?",
    "options": [
      {
        "letter": "A",
        "text": "Only general-purpose AI regulations apply, with no law enforcement-specific limitations"
      },
      {
        "letter": "B",
        "text": "Constitutional due process, equal protection, and privacy protections apply, with growing use restrictions"
      },
      {
        "letter": "C",
        "text": "No regulatory or constitutional requirements constrain AI use in law enforcement"
      },
      {
        "letter": "D",
        "text": "Law enforcement use of AI is entirely unregulated under current US constitutional law"
      }
    ],
    "answer": "B",
    "explanation": "Law enforcement AI faces heightened scrutiny and restrictions regarding civil rights, due process, Fourth Amendment concerns, and potential for discriminatory enforcement, with some jurisdictions banning certain applications like facial recognition."
  },
  {
    "id": "ext-230",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What are common concerns about AI in criminal justice?",
    "options": [
      {
        "letter": "A",
        "text": "There are no specific or unique concerns regarding AI use in criminal justice contexts"
      },
      {
        "letter": "B",
        "text": "Only concerns about the financial cost of procurement and system implementation matter"
      },
      {
        "letter": "C",
        "text": "Only technical performance and prediction accuracy concerns are relevant to criminal justice"
      },
      {
        "letter": "D",
        "text": "Due process violations, racial and socioeconomic bias, lack of transparency, and wrongful decision risks"
      }
    ],
    "answer": "D",
    "explanation": "AI in criminal justice raises serious concerns about bias perpetuating discriminatory enforcement, lack of transparency in consequential decisions, due process violations, and feedback loops that amplify existing inequality in the justice system."
  },
  {
    "id": "ext-231",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A jurisdiction uses AI for predictive policing. Civil rights groups challenge it as discriminatory. What factors would courts likely consider?",
    "options": [
      {
        "letter": "A",
        "text": "Only the commercial reputation and market track record of the technology vendor are significant"
      },
      {
        "letter": "B",
        "text": "Only the system's aggregate technical accuracy and predictive precision metrics matter"
      },
      {
        "letter": "C",
        "text": "Only the procurement cost and ongoing maintenance expenses of the AI system are relevant"
      },
      {
        "letter": "D",
        "text": "Disparate impact on protected groups, quality of training data, feedback loops, and constitutional due process considerations"
      }
    ],
    "answer": "D",
    "explanation": "Courts would likely consider disparate impact on protected groups, whether the system perpetuates historical bias in policing data, due process and Fourth Amendment concerns, whether there’s adequate justification, and whether less discriminatory alternatives exist."
  },
  {
    "id": "ext-232",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is unique about AI regulation in transportation?",
    "options": [
      {
        "letter": "A",
        "text": "Only general-purpose AI regulations apply, with no transportation-specific requirements"
      },
      {
        "letter": "B",
        "text": "Safety-critical regulatory frameworks apply, including vehicle safety standards and liability rules for autonomous systems"
      },
      {
        "letter": "C",
        "text": "No regulatory requirements apply to AI systems used in transportation and mobility"
      },
      {
        "letter": "D",
        "text": "AI systems deployed in transportation are entirely unregulated under current US and international law"
      }
    ],
    "answer": "B",
    "explanation": "Transportation AI, particularly autonomous vehicles, faces unique regulatory requirements addressing safety standards, testing requirements, liability frameworks, and sector-specific regulations from transportation authorities."
  },
  {
    "id": "ext-233",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What regulatory challenges are unique to autonomous vehicles?",
    "options": [
      {
        "letter": "A",
        "text": "There are no regulatory challenges unique to autonomous vehicles beyond standard AI"
      },
      {
        "letter": "B",
        "text": "Only insurance underwriting and premium calculation challenges are significant concerns"
      },
      {
        "letter": "C",
        "text": "Safety certification, real-time reliability, liability allocation, and ethical decision-making in crashes"
      },
      {
        "letter": "D",
        "text": "Only technical engineering challenges related to sensor accuracy and processing speed"
      }
    ],
    "answer": "C",
    "explanation": "Autonomous vehicles face unique regulatory challenges including safety validation methodologies, liability determination when AI is driving, ethical decision-making frameworks for unavoidable accidents, and regulatory approval processes that differ from traditional vehicles."
  },
  {
    "id": "ext-234",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is unique about AI regulation in education?",
    "options": [
      {
        "letter": "A",
        "text": "Only general-purpose AI regulations apply, with no education-specific legal obligations"
      },
      {
        "letter": "B",
        "text": "Student privacy laws like FERPA, anti-discrimination requirements, and scrutiny of algorithmic decisions"
      },
      {
        "letter": "C",
        "text": "AI systems deployed in education are entirely unregulated under current US federal law"
      },
      {
        "letter": "D",
        "text": "No regulatory requirements apply to AI systems used in educational settings"
      }
    ],
    "answer": "B",
    "explanation": "Education AI faces unique requirements addressing student privacy (FERPA in US), fairness in educational opportunities and outcomes, developmental appropriateness, and concerns about automated decisions affecting educational trajectories."
  },
  {
    "id": "ext-235",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An AI system makes college admissions decisions. What regulatory and ethical concerns apply?",
    "options": [
      {
        "letter": "A",
        "text": "There are no specific regulatory or ethical concerns about AI in college admissions"
      },
      {
        "letter": "B",
        "text": "Only technical concerns about model accuracy and predictive performance are relevant"
      },
      {
        "letter": "C",
        "text": "Only concerns about the financial cost of implementing AI admissions tools matter"
      },
      {
        "letter": "D",
        "text": "Fairness and non-discrimination, transparency in criteria, student privacy, and perpetuating inequities risk"
      }
    ],
    "answer": "D",
    "explanation": "AI admissions systems raise concerns about anti-discrimination laws (Title VI), fairness in educational opportunity, transparency in consequential decisions, and potential for perpetuating or amplifying educational inequality."
  },
  {
    "id": "ext-236",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A university’s AI admissions system has disparate impact on certain racial groups but the university argues it’s based on “objective” academic metrics. Is this legally defensible?",
    "options": [
      {
        "letter": "A",
        "text": "Yes — reliance on objective, quantitative metrics fully eliminates all legal concerns about discrimination"
      },
      {
        "letter": "B",
        "text": "No — using objective metrics does not eliminate legal risk; disparate impact can violate anti-discrimination laws regardless of the measures used"
      },
      {
        "letter": "C",
        "text": "Yes — as long as the AI system demonstrates high aggregate accuracy, there is no legal exposure"
      },
      {
        "letter": "D",
        "text": "University admissions decisions are categorically exempt from all anti-discrimination laws"
      }
    ],
    "answer": "B",
    "explanation": "Under Title VI and related laws, disparate impact can be illegal even with facially neutral criteria. The university must demonstrate educational necessity and that less discriminatory alternatives aren’t available. “Objective” metrics that perpetuate historical inequality may not be defensible."
  },
  {
    "id": "ext-237",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is unique about AI regulation in insurance?",
    "options": [
      {
        "letter": "A",
        "text": "No regulatory requirements apply to AI systems used in insurance underwriting and pricing"
      },
      {
        "letter": "B",
        "text": "State insurance regulators, anti-discrimination laws, and restrictions on the use of certain data categories in underwriting apply"
      },
      {
        "letter": "C",
        "text": "Only general-purpose AI regulations apply, with no insurance-specific requirements"
      },
      {
        "letter": "D",
        "text": "AI systems deployed in the insurance sector are entirely unregulated under US state and federal law"
      }
    ],
    "answer": "B",
    "explanation": "Insurance AI faces unique requirements balancing actuarial fairness with anti-discrimination laws, state insurance regulations, and concerns about proxy discrimination and access to insurance."
  },
  {
    "id": "ext-238",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is “proxy discrimination” in insurance AI?",
    "options": [
      {
        "letter": "A",
        "text": "Discrimination occurring in the context of shareholder proxy voting and corporate governance matters"
      },
      {
        "letter": "B",
        "text": "Using proxy servers and intermediary network infrastructure to process and route insurance data"
      },
      {
        "letter": "C",
        "text": "Discrimination carried out by third-party proxy companies acting on behalf of insurance carriers"
      },
      {
        "letter": "D",
        "text": "Using seemingly neutral variables that closely correlate with protected characteristics, serving as substitutes for prohibited factors"
      }
    ],
    "answer": "D",
    "explanation": "Proxy discrimination occurs when AI uses seemingly neutral variables (e.g., zip code, occupation) that correlate with protected characteristics (race, gender), resulting in discriminatory outcomes even without explicitly using protected characteristics. This is a significant concern in insurance."
  },
  {
    "id": "ext-239",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is unique about AI regulation in content moderation?",
    "options": [
      {
        "letter": "A",
        "text": "Only general-purpose AI regulations apply, with no content-moderation-specific rules"
      },
      {
        "letter": "B",
        "text": "AI-powered content moderation systems are entirely unregulated under US and EU law"
      },
      {
        "letter": "C",
        "text": "No regulatory requirements apply to AI systems used for online content moderation"
      },
      {
        "letter": "D",
        "text": "Platform liability rules, transparency obligations, due process, and risk of disproportionate censorship"
      }
    ],
    "answer": "D",
    "explanation": "Content moderation AI faces unique challenges balancing free speech concerns, platform liability (Section 230 in US, DSA in EU), removal of harmful content, and concerns about bias in moderation decisions."
  },
  {
    "id": "ext-240",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What is the EU Digital Services Act (DSA) and how does it relate to AI?",
    "options": [
      {
        "letter": "A",
        "text": "An EU regulation imposing transparency, risk management, and due diligence obligations on online platforms using AI for content moderation"
      },
      {
        "letter": "B",
        "text": "An international technical standard that specifies interoperability requirements for AI platforms"
      },
      {
        "letter": "C",
        "text": "A voluntary industry guideline with no binding legal force or formal enforcement mechanisms"
      },
      {
        "letter": "D",
        "text": "A multilateral trade agreement between EU member states governing digital services and AI trade"
      }
    ],
    "answer": "A",
    "explanation": "The DSA is EU regulation governing online platforms and services, including requirements for algorithmic transparency, content moderation, risk assessment for very large platforms, and user rights. It significantly affects AI used in content moderation and recommendation."
  },
  {
    "id": "ext-241",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A social media platform’s AI content moderation system removes more content from certain political viewpoints. What regulatory and ethical issues arise?",
    "options": [
      {
        "letter": "A",
        "text": "Social media platforms have unlimited and unreviewable discretion over all moderation"
      },
      {
        "letter": "B",
        "text": "Only technical issues related to the accuracy of the content classifier are relevant"
      },
      {
        "letter": "C",
        "text": "No legal or ethical issues exist because the moderation is done by an automated system"
      },
      {
        "letter": "D",
        "text": "Potential viewpoint discrimination, lack of transparency, and insufficient due process and appeal mechanisms"
      }
    ],
    "answer": "D",
    "explanation": "Viewpoint-based content moderation raises concerns about bias, free speech implications (especially for government-related platforms), transparency requirements under laws like the DSA, and need for effective appeal mechanisms. While platforms have discretion, it’s not unlimited."
  },
  {
    "id": "ext-242",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is unique about AI regulation in advertising?",
    "options": [
      {
        "letter": "A",
        "text": "AI-powered advertising and marketing systems are entirely unregulated under current US and EU law"
      },
      {
        "letter": "B",
        "text": "Only general-purpose AI regulations apply, with no advertising-specific legal obligations or restrictions"
      },
      {
        "letter": "C",
        "text": "No regulatory requirements of any kind apply to AI systems used in advertising and digital marketing"
      },
      {
        "letter": "D",
        "text": "Consumer protection, truth-in-advertising, and privacy regulations governing targeted advertising based on personal data"
      }
    ],
    "answer": "D",
    "explanation": "Advertising AI faces requirements addressing consumer protection, truth in advertising (FTC in US), anti-discrimination in ad targeting (particularly for housing, employment, credit), and transparency."
  },
  {
    "id": "ext-243",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What legal issues arise from AI-targeted advertising?",
    "options": [
      {
        "letter": "A",
        "text": "Privacy violations, manipulative targeting, discriminatory ad delivery, and lack of transparency about personalization methods"
      },
      {
        "letter": "B",
        "text": "Only concerns about the financial cost and return on investment of AI-driven campaigns matter"
      },
      {
        "letter": "C",
        "text": "There are no legal or regulatory issues associated with AI-targeted advertising and marketing"
      },
      {
        "letter": "D",
        "text": "Only technical performance and delivery optimization issues related to ad placement are relevant"
      }
    ],
    "answer": "A",
    "explanation": "AI-targeted advertising raises legal issues including discriminatory ad targeting (particularly problematic for housing, employment, credit under Fair Housing Act, ECOA), privacy concerns, potential manipulation, and deceptive practices."
  },
  {
    "id": "ext-244",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is unique about AI regulation in critical infrastructure?",
    "options": [
      {
        "letter": "A",
        "text": "Heightened safety, security, and reliability requirements with sector-specific regulators overseeing critical infrastructure AI"
      },
      {
        "letter": "B",
        "text": "AI systems in critical infrastructure are completely unregulated under current US and EU law"
      },
      {
        "letter": "C",
        "text": "Only general-purpose AI regulations apply, with no infrastructure-specific obligations"
      },
      {
        "letter": "D",
        "text": "No regulatory requirements apply to AI systems deployed in critical infrastructure sectors"
      }
    ],
    "answer": "A",
    "explanation": "AI in critical infrastructure (energy, water, telecommunications) faces heightened requirements for security, safety, resilience, and reliability due to potential for catastrophic failures affecting public safety and national security."
  },
  {
    "id": "ext-245",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What additional considerations apply to AI in critical infrastructure?",
    "options": [
      {
        "letter": "A",
        "text": "National security implications, cascading failure risks, physical safety, and exceptional reliability needs"
      },
      {
        "letter": "B",
        "text": "There are no additional governance considerations beyond those for any standard AI"
      },
      {
        "letter": "C",
        "text": "Only financial cost considerations related to procurement and maintenance budgets matter"
      },
      {
        "letter": "D",
        "text": "Only computational performance and system throughput considerations are truly relevant"
      }
    ],
    "answer": "A",
    "explanation": "AI in critical infrastructure requires additional considerations including cybersecurity against attacks, physical safety of the public, resilience and redundancy, fail-safe mechanisms, and national security implications of AI failures or compromises."
  },
  {
    "id": "ext-246",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An energy company uses AI to manage the electrical grid. What regulatory framework likely applies?",
    "options": [
      {
        "letter": "A",
        "text": "Energy sector regulations, critical infrastructure protection, and reliability standards from FERC and NERC"
      },
      {
        "letter": "B",
        "text": "No regulatory requirements of any kind apply to AI systems managing electrical grids"
      },
      {
        "letter": "C",
        "text": "Only individual state-level regulations apply, with no applicable federal framework"
      },
      {
        "letter": "D",
        "text": "Only general-purpose AI regulations apply without any sector-specific regulatory overlay"
      }
    ],
    "answer": "A",
    "explanation": "AI managing electrical grids faces a combination of energy sector regulations (FERC in US), critical infrastructure protection requirements (NERC CIP), safety standards, cybersecurity requirements, and general AI regulations. This multi-layered regulatory framework reflects the critical nature of the infrastructure. reflecting the critical nature of energy infrastructure."
  },
  {
    "id": "ext-247",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "What is unique about AI regulation in government services?",
    "options": [
      {
        "letter": "A",
        "text": "Only general-purpose AI regulations apply, with no government-specific legal obligations or limitations"
      },
      {
        "letter": "B",
        "text": "Constitutional due process, equal protection, administrative law, and growing legislative oversight of algorithmic government decisions"
      },
      {
        "letter": "C",
        "text": "Government use of AI is entirely unregulated under current US constitutional and statutory frameworks"
      },
      {
        "letter": "D",
        "text": "No regulatory or constitutional requirements apply to AI systems used by government agencies"
      }
    ],
    "answer": "B",
    "explanation": "Government AI faces unique requirements including constitutional constraints (Fourth Amendment, Equal Protection), due process requirements, transparency obligations, heightened accountability, and restrictions on certain applications."
  },
  {
    "id": "ext-248",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "What constitutional issues arise from government use of AI?",
    "options": [
      {
        "letter": "A",
        "text": "There are no constitutional issues raised by government deployment and use of AI systems"
      },
      {
        "letter": "B",
        "text": "Only budgetary and fiscal appropriations issues raise constitutional questions"
      },
      {
        "letter": "C",
        "text": "Due process, equal protection, the right to a hearing, and prohibitions on arbitrary or discriminatory government action"
      },
      {
        "letter": "D",
        "text": "Only technical implementation and system integration issues are constitutionally relevant"
      }
    ],
    "answer": "C",
    "explanation": "Government AI raises constitutional issues including Fourth Amendment concerns (surveillance, searches), Fifth/Fourteenth Amendment due process (fair procedures, notice), Equal Protection (discrimination), and First Amendment (chilling effects on speech/association)."
  },
  {
    "id": "ext-249",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A government agency uses AI for benefit eligibility determinations. What legal requirements likely apply?",
    "options": [
      {
        "letter": "A",
        "text": "No specific legal or regulatory requirements apply to government AI determinations"
      },
      {
        "letter": "B",
        "text": "Due process protections, transparency, non-discrimination, and the right to meaningful human review and appeal"
      },
      {
        "letter": "C",
        "text": "Government agencies have unlimited and unreviewable discretion over benefit decisions"
      },
      {
        "letter": "D",
        "text": "Only general software quality and IT procurement requirements are relevant here"
      }
    ],
    "answer": "B",
    "explanation": "Government AI for benefit determinations must comply with due process requirements (notice, explanation, meaningful appeal), Equal Protection (non-discrimination), Administrative Procedure Act (reasoned decision-making), and transparency requirements. Government discretion is constrained by constitutional and statutory requirements. Government discretion is constrained by constitutional and statutory law."
  },
  {
    "id": "ext-250",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Why is sector-specific AI regulation important?",
    "options": [
      {
        "letter": "A",
        "text": "Different industries face distinct risks, governance traditions, and regulatory frameworks that a single generic AI regulation cannot address"
      },
      {
        "letter": "B",
        "text": "To intentionally increase regulatory complexity and make compliance more burdensome for organizations"
      },
      {
        "letter": "C",
        "text": "For no substantive policy reason — sector-specific regulation is purely coincidental and arbitrary"
      },
      {
        "letter": "D",
        "text": "To prevent or block AI innovation and technological advancement in key industry sectors"
      }
    ],
    "answer": "A",
    "explanation": "Sector-specific AI regulation is important because AI risks, impacts, stakeholder concerns, and appropriate governance vary significantly by context (healthcare vs. finance vs. law enforcement), requiring tailored approaches that address sector-specific concerns beyond what general AI regulations can provide. Domain III:"
  },
  {
    "id": "ext-251",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "The stages of AI system development from conception through retirement"
      },
      {
        "letter": "B",
        "text": "The professional career progression path followed by AI developers and researchers"
      },
      {
        "letter": "C",
        "text": "The physical operational lifespan of the hardware infrastructure running AI workloads"
      },
      {
        "letter": "D",
        "text": "The product lifecycle stages of the commercial companies that build and sell AI tools"
      }
    ],
    "answer": "A",
    "explanation": "The AI lifecycle encompasses all stages of AI system development, deployment, and management from initial conception and planning through design, development, testing, deployment, monitoring, and eventual retirement. encompassing planning, design, development, testing, deployment, monitoring, and decommissioning."
  },
  {
    "id": "ext-252",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What are the typical stages of the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Planning, Design, Development, Testing, Deployment, Monitoring, Maintenance, Retirement"
      },
      {
        "letter": "B",
        "text": "Research and discovery, product development, and commercial sales and marketing rollout"
      },
      {
        "letter": "C",
        "text": "Initial concept exploration, middle-stage prototyping, and final production launch phase"
      },
      {
        "letter": "D",
        "text": "Vendor evaluation and procurement, installation and setup, and ongoing operational usage"
      }
    ],
    "answer": "A",
    "explanation": "The AI lifecycle typically includes planning/scoping, design, development/training, testing/validation, deployment, monitoring, maintenance/updates, and retirement/decommissioning."
  },
  {
    "id": "ext-253",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "Why is lifecycle governance important for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "It guarantees that AI projects will be delivered on schedule and within the allocated budget"
      },
      {
        "letter": "B",
        "text": "It eliminates the need for human judgment by automating all oversight and review decisions"
      },
      {
        "letter": "C",
        "text": "It simplifies AI development by reducing the number of required technical review checkpoints"
      },
      {
        "letter": "D",
        "text": "It ensures responsible oversight at each stage, enabling early detection and mitigation of risks"
      }
    ],
    "answer": "D",
    "explanation": "Lifecycle governance is crucial because AI systems evolve, their performance changes, new risks emerge, and different governance activities are appropriate at different stages. Governance must be integrated throughout the lifecycle, not just at deployment. rather than discovering problems only after deployment."
  },
  {
    "id": "ext-254",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What should occur during the planning stage of the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Writing the initial training code and preparing the first version of the training dataset"
      },
      {
        "letter": "B",
        "text": "Drafting the marketing materials and user documentation for the upcoming product release"
      },
      {
        "letter": "C",
        "text": "Selecting the specific machine learning framework and hardware infrastructure to be used"
      },
      {
        "letter": "D",
        "text": "Defining the problem, objectives, success criteria, stakeholders, and governance requirements upfront"
      }
    ],
    "answer": "D",
    "explanation": "The planning stage should include defining clear objectives, assessing feasibility and appropriateness of AI, identifying potential risks and impacts, determining governance requirements, 87 establishing success criteria, and considering alternatives. to establish a clear foundation before design begins."
  },
  {
    "id": "ext-255",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What is a “use case assessment” in AI lifecycle governance?",
    "options": [
      {
        "letter": "A",
        "text": "Reviewing the completeness and accuracy of the written use case documentation artifacts"
      },
      {
        "letter": "B",
        "text": "Evaluating whether AI is appropriate for the intended use case, considering risks, benefits, and alternatives"
      },
      {
        "letter": "C",
        "text": "Estimating how many people will use the system on a daily or monthly usage basis"
      },
      {
        "letter": "D",
        "text": "Assessing the quality and usability of the graphical user interface design mockups"
      }
    ],
    "answer": "B",
    "explanation": "Use case assessment evaluates whether AI is appropriate and beneficial for the intended use case, considering potential risks, benefits, ethical implications, and whether non-AI alternatives might be more appropriate. This is a critical early governance activity. including whether non-AI alternatives might be more suitable."
  },
  {
    "id": "ext-256",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "During use case assessment, an organization identifies that an AI system could automate a task but would eliminate jobs and has high bias risk. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Ignore the social and employment impacts entirely and proceed with the automation plan"
      },
      {
        "letter": "B",
        "text": "Abandon all automation initiatives completely regardless of their potential net benefits"
      },
      {
        "letter": "C",
        "text": "Proceed immediately since automation is always beneficial regardless of any side effects"
      },
      {
        "letter": "D",
        "text": "Conduct comprehensive impact assessment, explore bias mitigation, consider just transition for workers"
      }
    ],
    "answer": "D",
    "explanation": "Governance should recommend comprehensive impact assessment, exploration of bias mitigation strategies, consideration of just transition planning for affected workers, stakeholder engagement, and careful evaluation of whether benefits justify risks and whether the use case is appropriate. engage stakeholders, and carefully weigh automation benefits against social impacts."
  },
  {
    "id": "ext-257",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “requirements definition” in AI lifecycle governance?",
    "options": [
      {
        "letter": "A",
        "text": "Determining only the hardware and infrastructure specifications needed for training"
      },
      {
        "letter": "B",
        "text": "Specifying only the staffing plan and team structure for the development effort"
      },
      {
        "letter": "C",
        "text": "Specifying functional, performance, ethical, and governance requirements for the AI system"
      },
      {
        "letter": "D",
        "text": "Defining only the financial budget and resource allocation plan for the AI project"
      }
    ],
    "answer": "C",
    "explanation": "Requirements definition specifies what the AI system must do (functional), how well it must perform (performance), ethical requirements (fairness, transparency), and governance requirements (documentation, oversight), guiding development. to guide development and ensure all necessary dimensions are addressed."
  },
  {
    "id": "ext-258",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What governance activities should occur during the design stage?",
    "options": [
      {
        "letter": "A",
        "text": "Creating only the user interface wireframes and visual design mockup deliverables"
      },
      {
        "letter": "B",
        "text": "No governance activities are required during the design stage of AI project work"
      },
      {
        "letter": "C",
        "text": "Architecture review, privacy by design, fairness considerations, explainability planning, security design"
      },
      {
        "letter": "D",
        "text": "Developing only the technical system architecture and data flow diagram documents"
      }
    ],
    "answer": "C",
    "explanation": "Design stage governance includes architecture review for governance requirements, privacy by design, fairness considerations in algorithm selection, explainability planning, security design, and documentation of design decisions."
  },
  {
    "id": "ext-259",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “privacy by design” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Integrating privacy protections into AI system design from the beginning"
      },
      {
        "letter": "B",
        "text": "Adding privacy features after development is complete and the system is ready to launch"
      },
      {
        "letter": "C",
        "text": "Designing physical office spaces to ensure employee privacy and confidentiality at work"
      },
      {
        "letter": "D",
        "text": "Writing standalone privacy policy documents separate from the system architecture design"
      }
    ],
    "answer": "A",
    "explanation": "Privacy by design means integrating privacy protections into AI system design from the beginning, including data minimization, purpose limitation, security measures, and privacy-enhancing technologies, rather than adding privacy as an afterthought. including data minimization, purpose limitation, security measures, and privacy-enhancing technologies."
  },
  {
    "id": "ext-260",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What is “fairness by design” in AI development?",
    "options": [
      {
        "letter": "A",
        "text": "Ensuring fair labor practices and safe working conditions for the AI development team"
      },
      {
        "letter": "B",
        "text": "Proactively designing AI systems to promote fairness and mitigate bias from the beginning"
      },
      {
        "letter": "C",
        "text": "Setting competitive market pricing that is accessible and fair to all customer segments"
      },
      {
        "letter": "D",
        "text": "Negotiating equitable contract terms and service-level agreements with AI technology vendors"
      }
    ],
    "answer": "B",
    "explanation": "Fairness by design means proactively designing AI systems to promote fairness and mitigate bias from the beginning, including careful feature selection, representative training data, fair89 ness-aware algorithms, and bias testing, rather than addressing fairness after development. including careful feature selection, representative training data, and fairness-aware algorithms."
  },
  {
    "id": "ext-261",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "During design, a team must choose between two algorithms: one is more accurate but less explainable; the other is less accurate but more explainable. The application is loan approval. What factors should governance consider?",
    "options": [
      {
        "letter": "A",
        "text": "Always choose the more explainable algorithm regardless of the accuracy difference gap"
      },
      {
        "letter": "B",
        "text": "Select the algorithm randomly since both options present acceptable trade-offs to weigh"
      },
      {
        "letter": "C",
        "text": "Balance accuracy with explainability considering legal requirements, contestability, and discrimination risk"
      },
      {
        "letter": "D",
        "text": "Always choose the more accurate algorithm regardless of the explainability concerns"
      }
    ],
    "answer": "C",
    "explanation": "Governance should balance accuracy with explainability considering legal requirements (adverse action notices), contestability needs, risk of discrimination (explainability helps identify bias), stakeholder expectations, and the specific use case. Loan approval’s significant impact and legal requirements favor explainability. Loan approval's significant impact and legal requirements favor explainability."
  },
  {
    "id": "ext-262",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data collection” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Acquiring physical data storage hardware such as servers and disk arrays for the project"
      },
      {
        "letter": "B",
        "text": "Collecting competitive intelligence and market research data about rival organizations"
      },
      {
        "letter": "C",
        "text": "Gathering training, validation, and testing data for AI system development"
      },
      {
        "letter": "D",
        "text": "Gathering only end-user feedback and customer satisfaction survey response data"
      }
    ],
    "answer": "C",
    "explanation": "Data collection involves gathering training, validation, and testing data for AI system development, with governance ensuring data quality, representativeness, lawful collection, and appropriate consent."
  },
  {
    "id": "ext-263",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What governance considerations apply to training data collection?",
    "options": [
      {
        "letter": "A",
        "text": "Only the technical specifications such as data format, volume, and ingestion pipeline"
      },
      {
        "letter": "B",
        "text": "No governance oversight is necessary during the training data collection phase"
      },
      {
        "letter": "C",
        "text": "Only the financial cost and budget impact of acquiring or purchasing datasets matters"
      },
      {
        "letter": "D",
        "text": "Lawful collection, consent/legal basis, representativeness, bias assessment, data quality, and documentation"
      }
    ],
    "answer": "D",
    "explanation": "Training data collection governance includes ensuring lawful collection, appropriate consent or legal basis, representativeness of deployment population, bias assessment, data quality evaluation, and comprehensive documentation of data sources and characteristics."
  },
  {
    "id": "ext-264",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “model training” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "The process of teaching an AI model to recognize patterns from training data"
      },
      {
        "letter": "B",
        "text": "Conducting classroom sessions to teach employees how to operate and use AI applications"
      },
      {
        "letter": "C",
        "text": "Physical fitness and wellness training programs provided for AI development staff members"
      },
      {
        "letter": "D",
        "text": "Creating written training manuals and instructional documentation for end users of the system"
      }
    ],
    "answer": "A",
    "explanation": "Model training is the process of teaching an AI model to recognize patterns and relationships from training data through iterative learning algorithms, producing a trained model for deployment."
  },
  {
    "id": "ext-265",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What governance activities should occur during model training?",
    "options": [
      {
        "letter": "A",
        "text": "Tracking only the compute cost and cloud resource consumption during training runs"
      },
      {
        "letter": "B",
        "text": "Monitoring for bias, tracking experiments, version control, documentation of decisions, and validation"
      },
      {
        "letter": "C",
        "text": "No governance activities are needed while the model is actively being trained"
      },
      {
        "letter": "D",
        "text": "Monitoring only the technical metrics such as loss curves and gradient descent norms"
      }
    ],
    "answer": "B",
    "explanation": "Training governance includes monitoring for emerging bias, tracking experiments and hyperparameters, version control of models and data, documentation of decisions and trade-offs, and validation of intermediate results."
  },
  {
    "id": "ext-266",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "During training, a model shows high accuracy on training data but exhibits bias against a protected group. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Ignore the bias finding entirely and proceed with the standard deployment pipeline"
      },
      {
        "letter": "B",
        "text": "Deploy the model immediately since its overall training accuracy is acceptably high enough"
      },
      {
        "letter": "C",
        "text": "Document the bias observation in a report but take no corrective or mitigation action"
      },
      {
        "letter": "D",
        "text": "Investigate root causes, attempt bias mitigation via data augmentation and algorithm adjustments"
      }
    ],
    "answer": "D",
    "explanation": "Governance should recommend investigating root causes of bias, attempting mitigation strategies (collecting more representative data, adjusting algorithms, applying fairness constraints), retesting after mitigation, and documenting decisions and trade-offs. Deploying biased systems (A) or ignoring bias (C) is irresponsible. Documentation alone (D) is insufficient. retest after mitigation, and document decisions and trade-offs."
  },
  {
    "id": "ext-267",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “model validation” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Verifying that user accounts and authentication credentials are configured correctly"
      },
      {
        "letter": "B",
        "text": "Checking that vendor contracts and procurement agreements are properly executed and signed"
      },
      {
        "letter": "C",
        "text": "Evaluating whether a trained model meets requirements and performs appropriately before deployment"
      },
      {
        "letter": "D",
        "text": "Confirming that parking permits and access badges for AI developers are valid and current"
      }
    ],
    "answer": "C",
    "explanation": "Model validation evaluates whether a trained model meets functional, performance, fairness, and safety requirements before deployment, using validation data and various testing methodologies."
  },
  {
    "id": "ext-268",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What should model validation include from a governance perspective?",
    "options": [
      {
        "letter": "A",
        "text": "Assessing only the overall technical performance metrics on a standard benchmark dataset"
      },
      {
        "letter": "B",
        "text": "Testing only the aggregate prediction accuracy score on a held-out validation dataset"
      },
      {
        "letter": "C",
        "text": "Accuracy, fairness across groups, robustness, explainability, safety, and alignment with requirements"
      },
      {
        "letter": "D",
        "text": "Evaluating only the inference speed and prediction latency of the trained model output"
      }
    ],
    "answer": "C",
    "explanation": "Comprehensive model validation includes accuracy/performance metrics, fairness testing across demographic groups, robustness to adversarial inputs, explainability verification, safety testing, and confirmation of alignment with all requirements."
  },
  {
    "id": "ext-269",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “testing” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Reviewing only the written documentation for completeness and grammatical correctness"
      },
      {
        "letter": "B",
        "text": "Systematically evaluating AI system functionality, performance, safety, and fairness before deployment"
      },
      {
        "letter": "C",
        "text": "Verifying only that the hardware infrastructure meets minimum technical specifications"
      },
      {
        "letter": "D",
        "text": "Assessing only the graphical user interface for visual consistency and layout usability"
      }
    ],
    "answer": "B",
    "explanation": "Testing systematically evaluates AI system functionality, performance, safety, fairness, robustness, and other requirements using various testing methodologies before deployment. using various testing methodologies."
  },
  {
    "id": "ext-270",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What types of testing should be conducted for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Performing only unit tests on individual code modules and software components in isolation"
      },
      {
        "letter": "B",
        "text": "Functional, performance, fairness, robustness, security, explainability, and integration testing"
      },
      {
        "letter": "C",
        "text": "Conducting only user acceptance testing with a small group of representative end users"
      },
      {
        "letter": "D",
        "text": "Running only regression tests to verify that existing features still function correctly"
      }
    ],
    "answer": "B",
    "explanation": "Comprehensive AI testing includes functional testing (does it work as intended), performance testing (accuracy, speed), fairness testing (across groups), robustness testing (edge cases, adversarial inputs), security testing, explainability testing, and integration testing."
  },
  {
    "id": "ext-271",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "An AI system passes all technical tests but stakeholder testing reveals it’s confusing to users and explanations are inadequate. Should it be deployed?",
    "options": [
      {
        "letter": "A",
        "text": "Yes, proceed with deployment since all technical performance tests have passed successfully"
      },
      {
        "letter": "B",
        "text": "Deploy the system now and schedule usability fixes for a future maintenance release window"
      },
      {
        "letter": "C",
        "text": "Yes, deploy the system because users will naturally adapt to the interface over time anyway"
      },
      {
        "letter": "D",
        "text": "No, address usability and explainability issues before deployment, as these affect real-world effectiveness"
      }
    ],
    "answer": "D",
    "explanation": "Technical performance alone is insufficient. Usability and explainability issues affect real-world effectiveness, user trust, and accountability. Governance should require addressing these issues before deployment, as confused users may misuse the system or be unable to exercise oversight. and user trust."
  },
  {
    "id": "ext-272",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “deployment” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Installing and configuring only the physical hardware servers that support the system backend"
      },
      {
        "letter": "B",
        "text": "Launching only the promotional marketing campaign and external communication materials"
      },
      {
        "letter": "C",
        "text": "Publishing only the technical documentation and API reference materials to the developer portal"
      },
      {
        "letter": "D",
        "text": "Releasing the AI system into production use in the real-world environment"
      }
    ],
    "answer": "D",
    "explanation": "Deployment is releasing the AI system into production use in the real-world environment where it will make actual decisions or provide actual services to users."
  },
  {
    "id": "ext-273",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What governance activities should occur at deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Executing only the technical steps to push code and models to production server environments"
      },
      {
        "letter": "B",
        "text": "Coordinating only the external marketing and public relations announcements and press releases"
      },
      {
        "letter": "C",
        "text": "No governance activities are required at the deployment stage of the AI system lifecycle"
      },
      {
        "letter": "D",
        "text": "Final approval, deployment documentation, user training, monitoring setup, and incident response prep"
      }
    ],
    "answer": "D",
    "explanation": "Deployment governance includes final approval based on testing results, comprehensive deployment documentation, user training on appropriate use and limitations, monitoring system setup, and incident response preparation."
  },
  {
    "id": "ext-274",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “monitoring” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Ongoing observation of AI system performance, fairness, and impacts after deployment"
      },
      {
        "letter": "B",
        "text": "Observing competitor activities and market positioning trends in the AI industry sector"
      },
      {
        "letter": "C",
        "text": "Tracking real-time stock market prices and financial market indicators and indices daily"
      },
      {
        "letter": "D",
        "text": "Measuring employee productivity metrics and workforce utilization and efficiency rates"
      }
    ],
    "answer": "A",
    "explanation": "Monitoring involves ongoing observation of AI system performance, accuracy, fairness, impacts, and behavior after deployment to detect issues like model drift, emerging bias, or unexpected behaviors requiring intervention. to detect issues like model drift, emerging bias, or unexpected behaviors."
  },
  {
    "id": "ext-275",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What should be monitored in deployed AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Tracking only the total number of API calls and system usage volume statistics over time"
      },
      {
        "letter": "B",
        "text": "Performance metrics, fairness across groups, model drift, user feedback, incidents, and real-world impacts"
      },
      {
        "letter": "C",
        "text": "Watching only the error rate and exception count recorded in application log files daily"
      },
      {
        "letter": "D",
        "text": "Monitoring only whether the server infrastructure remains online and available to all users"
      }
    ],
    "answer": "B",
    "explanation": "Comprehensive monitoring includes performance metrics (accuracy, latency), fairness metrics across demographic groups, model drift detection, user feedback, incident tracking, and real- world impacts. 94"
  },
  {
    "id": "ext-276",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "Monitoring detects that an AI system’s accuracy has degraded from 95% to 85% over six months. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Ignore the accuracy degradation entirely since it remains above a minimum acceptable bar"
      },
      {
        "letter": "B",
        "text": "Investigate root causes like model drift and data shifts, assess impact, determine if intervention is needed"
      },
      {
        "letter": "C",
        "text": "Keep the system running without changes because 85% accuracy is still relatively high"
      },
      {
        "letter": "D",
        "text": "Send a simple notification to users but continue operating the system as-is unchanged"
      }
    ],
    "answer": "B",
    "explanation": "Significant performance degradation requires investigation of root causes (model drift, changing data distributions), impact assessment, determination of whether retraining or other intervention is needed, and documentation. Continuing without investigation (A) or ignoring the issue (C) is irresponsible. Notification alone (D) is insufficient. and document all findings and decisions."
  },
  {
    "id": "ext-277",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “model maintenance” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Ongoing activities to keep AI systems performing appropriately, including updates, retraining, and fixes"
      },
      {
        "letter": "B",
        "text": "Performing only routine hardware maintenance such as server replacements and system upgrades"
      },
      {
        "letter": "C",
        "text": "Maintaining only the written documentation and keeping technical reference manuals current"
      },
      {
        "letter": "D",
        "text": "Managing only the ongoing relationships and support contracts with AI technology vendors"
      }
    ],
    "answer": "A",
    "explanation": "Model maintenance includes ongoing activities to keep AI systems performing appropriately, such as retraining with new data, updating algorithms, fixing bugs, and adapting to changing conditions."
  },
  {
    "id": "ext-278",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "When should an AI model be retrained?",
    "options": [
      {
        "letter": "A",
        "text": "When monitoring detects performance degradation, bias emergence, or significant data distribution changes"
      },
      {
        "letter": "B",
        "text": "Never; once a model is deployed to production it should remain unchanged permanently"
      },
      {
        "letter": "C",
        "text": "Only when a sufficient number of users have submitted formal written complaints directly"
      },
      {
        "letter": "D",
        "text": "Only after the model has completely failed and stopped producing any usable outputs"
      }
    ],
    "answer": "A",
    "explanation": "Models should be retrained when monitoring detects performance degradation, emerging bias, significant changes in data distributions, or at planned intervals based on the use case. Waiting for complete failure (C) or relying only on complaints (D) is reactive and risky. 95"
  },
  {
    "id": "ext-279",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “model updating” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Redesigning only the user interface and visual presentation layer of the application frontend"
      },
      {
        "letter": "B",
        "text": "Replacing only the physical hardware components that support and run the AI system software"
      },
      {
        "letter": "C",
        "text": "Modifying AI models to improve performance, address issues, or adapt to changing conditions"
      },
      {
        "letter": "D",
        "text": "Revising only the written documentation and technical reference materials for the system"
      }
    ],
    "answer": "C",
    "explanation": "Model updating involves modifying AI models to improve performance, address identified issues (bias, errors), adapt to changing conditions, or incorporate new capabilities."
  },
  {
    "id": "ext-280",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What governance considerations apply when updating deployed AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Checking only that the updated model achieves sufficient performance on benchmark tests"
      },
      {
        "letter": "B",
        "text": "No governance oversight is required when updating models that are already in production"
      },
      {
        "letter": "C",
        "text": "Testing updated models, assessing impacts of changes, version control, documentation, and user notification"
      },
      {
        "letter": "D",
        "text": "Running only basic technical smoke tests to confirm the updated model loads correctly"
      }
    ],
    "answer": "C",
    "explanation": "Model update governance includes testing updated models (ensuring improvements don’t introduce new issues), assessing impacts of changes, version control, comprehensive documentation of changes and rationale, and appropriate user notification."
  },
  {
    "id": "ext-281",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "An organization updates an AI model to improve accuracy. The update improves overall accuracy but worsens fairness for a minority group. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy the update immediately since the overall accuracy metric has measurably improved"
      },
      {
        "letter": "B",
        "text": "Release the update now and plan to address the fairness regression in a subsequent release"
      },
      {
        "letter": "C",
        "text": "Do not deploy; investigate the fairness regression and attempt to achieve both accuracy and fairness gains"
      },
      {
        "letter": "D",
        "text": "Disregard the fairness concern because accuracy is the primary performance indicator to track"
      }
    ],
    "answer": "C",
    "explanation": "Governance should not approve updates that worsen fairness, even if overall accuracy improves. The organization should investigate the fairness regression, attempt to achieve both improvements, and carefully document trade-offs if simultaneous improvement proves impossible. Deploying despite fairness regression (A, C) or ignoring fairness (D) is irresponsible. 96"
  },
  {
    "id": "ext-282",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “incident management” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Handling only cybersecurity breaches and information security incident response workflows"
      },
      {
        "letter": "B",
        "text": "Processes for detecting, responding to, and learning from AI system failures, harms, or unexpected behaviors"
      },
      {
        "letter": "C",
        "text": "Managing only personnel-related workplace incidents and employee dispute resolution processes"
      },
      {
        "letter": "D",
        "text": "Addressing only customer support complaints and help desk service ticket request queues"
      }
    ],
    "answer": "B",
    "explanation": "Incident management encompasses processes for detecting, responding to, mitigating, and learning from AI system failures, harms, biases, or unexpected behaviors, including root cause analysis and corrective actions."
  },
  {
    "id": "ext-283",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What should an AI incident response process include?",
    "options": [
      {
        "letter": "A",
        "text": "Executing only technical patches and code fixes to resolve the immediate system problem quickly"
      },
      {
        "letter": "B",
        "text": "Sending only notification messages to affected users without any further investigative steps"
      },
      {
        "letter": "C",
        "text": "Producing only written documentation and incident reports for the internal records archive"
      },
      {
        "letter": "D",
        "text": "Detection, assessment, containment, investigation, remediation, communication, and learning/improvement"
      }
    ],
    "answer": "D",
    "explanation": "Comprehensive incident response includes detection mechanisms, impact assessment, containment (stopping harm), investigation of root causes, remediation, appropriate communication to stakeholders, and learning/improvement to prevent recurrence."
  },
  {
    "id": "ext-284",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “decommissioning” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Taking only the physical hardware servers offline and disposing of the equipment properly"
      },
      {
        "letter": "B",
        "text": "Removing appointed commissioners and governance board members from their official roles"
      },
      {
        "letter": "C",
        "text": "The process of retiring an AI system from use, including data handling and transition planning"
      },
      {
        "letter": "D",
        "text": "Terminating the employment contracts of staff members assigned to the AI project team"
      }
    ],
    "answer": "C",
    "explanation": "Decommissioning is the process of retiring an AI system from use, including decisions about data retention/deletion, transition to alternative systems, user notification, and documentation of the system’s history and lessons learned. and documentation of the system's history and lessons learned."
  },
  {
    "id": "ext-285",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What governance considerations apply when decommissioning an AI system?",
    "options": [
      {
        "letter": "A",
        "text": "Simply turning off the system without any formal process or stakeholder communication"
      },
      {
        "letter": "B",
        "text": "Data retention/deletion decisions, transition planning, user notification, documentation, and lessons learned"
      },
      {
        "letter": "C",
        "text": "Considering only the financial cost implications and budget adjustments that are required"
      },
      {
        "letter": "D",
        "text": "Executing only the technical steps to power down servers and remove all network access"
      }
    ],
    "answer": "B",
    "explanation": "Decommissioning governance includes decisions about data retention or deletion (considering legal requirements and privacy), transition planning to alternative systems, user notification, comprehensive documentation of the system’s history, and capturing lessons learned."
  },
  {
    "id": "ext-286",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "An AI system is being decommissioned. It was trained on personal data. What are the data governance obligations?",
    "options": [
      {
        "letter": "A",
        "text": "Retain all personal data indefinitely for potential future analysis and research purposes"
      },
      {
        "letter": "B",
        "text": "Assess legal retention requirements, data subject rights, determine appropriate retention or deletion actions"
      },
      {
        "letter": "C",
        "text": "Transfer the entire dataset unchanged to the replacement AI system without any review"
      },
      {
        "letter": "D",
        "text": "Delete all data immediately with no further assessment of any legal obligations or duties"
      }
    ],
    "answer": "B",
    "explanation": "Decommissioning requires assessing legal retention requirements (some data may need to be retained), considering data subject rights (including erasure requests), determining appropriate retention or deletion based on legal and business needs, documenting decisions, and ensuring secure deletion of data not retained. document decisions, and ensure secure deletion of data not retained."
  },
  {
    "id": "ext-287",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “lifecycle documentation” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Tracking only the product development lifecycle for commercial software product releases"
      },
      {
        "letter": "B",
        "text": "Recording only the career progression and employment lifecycle of staff and team members"
      },
      {
        "letter": "C",
        "text": "Documenting only the lifecycle stages of physical hardware and infrastructure assets"
      },
      {
        "letter": "D",
        "text": "Comprehensive recording of decisions, processes, and outcomes throughout the AI system lifecycle"
      }
    ],
    "answer": "D",
    "explanation": "Lifecycle documentation involves comprehensive recording of decisions, processes, testing results, incidents, and outcomes throughout the AI system lifecycle, supporting accountability, knowledge transfer, and compliance."
  },
  {
    "id": "ext-288",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "Why is comprehensive lifecycle documentation important?",
    "options": [
      {
        "letter": "A",
        "text": "The sole purpose of documentation is to provide legal protection in the event of lawsuits"
      },
      {
        "letter": "B",
        "text": "Lifecycle documentation provides no meaningful benefit and is an unnecessary burden"
      },
      {
        "letter": "C",
        "text": "Supports accountability, enables auditing, facilitates knowledge transfer, demonstrates compliance, enables learning"
      },
      {
        "letter": "D",
        "text": "Documentation is useful only for creating marketing content and sales collateral materials"
      }
    ],
    "answer": "C",
    "explanation": "Comprehensive lifecycle documentation supports accountability for decisions, enables internal and external auditing, facilitates knowledge transfer, demonstrates regulatory compliance, and enables organizational learning from successes and failures."
  },
  {
    "id": "ext-289",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “version control” in AI lifecycle governance?",
    "options": [
      {
        "letter": "A",
        "text": "Tracking and managing different versions of models, data, code, and configurations throughout the lifecycle"
      },
      {
        "letter": "B",
        "text": "Managing only the revision history of governance policy documents and procedure manuals"
      },
      {
        "letter": "C",
        "text": "Tracking only the firmware versions and serial numbers of physical hardware components"
      },
      {
        "letter": "D",
        "text": "Controlling only the release versions of application software and programming libraries used"
      }
    ],
    "answer": "A",
    "explanation": "Version control in AI involves tracking and managing different versions of models, training data, code, configurations, and documentation throughout the lifecycle, enabling reproducibility, rollback, and audit trails."
  },
  {
    "id": "ext-290",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What is “change management” in the AI lifecycle?",
    "options": [
      {
        "letter": "A",
        "text": "Processes for controlling and documenting changes to AI systems throughout the lifecycle"
      },
      {
        "letter": "B",
        "text": "Overseeing only organizational restructuring and reporting line modification processes"
      },
      {
        "letter": "C",
        "text": "Handling only budget revisions and financial resource reallocation requests and reviews"
      },
      {
        "letter": "D",
        "text": "Managing only personnel reassignments and team restructuring decisions and approvals"
      }
    ],
    "answer": "A",
    "explanation": "Change management in AI involves processes for proposing, reviewing, approving, implementing, and documenting changes to AI systems throughout the lifecycle, ensuring changes are controlled and their impacts assessed. ensuring changes are reviewed, approved, and their impacts assessed."
  },
  {
    "id": "ext-291",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "An organization has multiple AI systems at different lifecycle stages. How should lifecycle governance be structured?",
    "options": [
      {
        "letter": "A",
        "text": "Use an identical one-size-fits-all governance process for every AI system regardless of risk"
      },
      {
        "letter": "B",
        "text": "Risk-based approach with governance intensity proportional to system risk, but consistent processes overall"
      },
      {
        "letter": "C",
        "text": "Apply no governance to systems classified as low risk, regardless of the context or use case"
      },
      {
        "letter": "D",
        "text": "Manage each system independently with completely separate, uncoordinated governance structures"
      }
    ],
    "answer": "B",
    "explanation": "Effective lifecycle governance uses a risk-based approach where governance intensity is proportional to system risk, but maintains consistent processes and standards across all systems for efficiency and consistency."
  },
  {
    "id": "ext-292",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What is “lifecycle governance integration”?",
    "options": [
      {
        "letter": "A",
        "text": "Merging different AI system lifecycles into a single unified project timeline and schedule"
      },
      {
        "letter": "B",
        "text": "Consolidating only the governance committee and team membership structures across projects"
      },
      {
        "letter": "C",
        "text": "Integrating only the documentation artifacts and records across different lifecycle stages"
      },
      {
        "letter": "D",
        "text": "Embedding governance activities into each lifecycle stage rather than treating governance as separate"
      }
    ],
    "answer": "D",
    "explanation": "Lifecycle governance integration means embedding governance activities, requirements, and checkpoints into each lifecycle stage rather than treating governance as a separate, parallel process. This ensures governance is proactive and integrated into development workflows."
  },
  {
    "id": "ext-293",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is data governance for AI?",
    "options": [
      {
        "letter": "A",
        "text": "Managing the physical infrastructure and facilities that host data center operations"
      },
      {
        "letter": "B",
        "text": "Overseeing only the storage hardware and media where data files are physically kept"
      },
      {
        "letter": "C",
        "text": "Administering only the database management systems and their technical configuration settings"
      },
      {
        "letter": "D",
        "text": "Policies, processes, and controls for managing data throughout the AI lifecycle"
      }
    ],
    "answer": "D",
    "explanation": "Data governance for AI encompasses policies, processes, and controls for managing data quality, privacy, security, lineage, and appropriate use throughout the AI lifecycle, from collection through retention and deletion. 100"
  },
  {
    "id": "ext-294",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "Why is data governance particularly important for AI?",
    "options": [
      {
        "letter": "A",
        "text": "Data governance is not especially important for AI compared to traditional software applications"
      },
      {
        "letter": "B",
        "text": "Data governance is important only for controlling the financial costs of data storage and processing"
      },
      {
        "letter": "C",
        "text": "AI system quality and fairness depend fundamentally on training data quality, representativeness, and appropriate use"
      },
      {
        "letter": "D",
        "text": "Data governance matters solely for meeting regulatory compliance and passing audit requirements"
      }
    ],
    "answer": "C",
    "explanation": "Data governance is critical for AI because AI system quality, accuracy, fairness, and behavior depend fundamentally on training data quality, representativeness, and appropriate use. “Garbage in, garbage out” is particularly relevant for AI. —'garbage in, garbage out' is particularly relevant for AI."
  },
  {
    "id": "ext-295",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What is “data quality” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Data that is expensive to acquire or requires significant upfront financial investment capital"
      },
      {
        "letter": "B",
        "text": "The physical quality and reliability of the data storage hardware and infrastructure components"
      },
      {
        "letter": "C",
        "text": "The visual quality and aesthetic presentation of data in charts and dashboard visualizations"
      },
      {
        "letter": "D",
        "text": "Data accuracy, completeness, consistency, timeliness, and fitness for AI purposes"
      }
    ],
    "answer": "D",
    "explanation": "Data quality for AI encompasses accuracy (correctness), completeness (no critical gaps), consistency (no contradictions), timeliness (current enough), and fitness for purpose (appropriate for the AI task). Poor data quality leads to poor AI performance. — poor data quality leads to poor AI performance."
  },
  {
    "id": "ext-296",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What data quality issues can affect AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Only the financial cost of procuring and maintaining training datasets is a meaningful concern"
      },
      {
        "letter": "B",
        "text": "Data quality issues do not meaningfully affect AI system performance or behavioral outcomes"
      },
      {
        "letter": "C",
        "text": "Inaccurate labels, missing values, inconsistent formats, outdated data, and unrepresentative samples"
      },
      {
        "letter": "D",
        "text": "Only problems with physical data storage infrastructure and disk drive failures truly matter"
      }
    ],
    "answer": "C",
    "explanation": "Data quality issues affecting AI include inaccurate labels (wrong training signals), missing values (incomplete information), inconsistent formats (integration problems), outdated data (not reflecting current patterns), and unrepresentative samples (bias). 101"
  },
  {
    "id": "ext-297",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "Training data contains 90% examples from one demographic group and 10% from another. The AI system will be deployed equally across both groups. What data governance issue exists?",
    "options": [
      {
        "letter": "A",
        "text": "The primary concern is financial; cost-effective data collection resolves the governance"
      },
      {
        "letter": "B",
        "text": "Since the training data is factually correct, it will produce fair and unbiased model"
      },
      {
        "letter": "C",
        "text": "This is a purely technical engineering problem addressable through better model"
      },
      {
        "letter": "D",
        "text": "Representativeness issue; the training data doesn’t reflect the deployment population"
      }
    ],
    "answer": "D",
    "explanation": "This is a representativeness issue where training data doesn’t reflect the deployment population, likely causing the AI system to perform better for the overrepresented group. Data governance should identify this issue and require more representative data collection or other mitigation."
  },
  {
    "id": "ext-298",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data lineage” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Documentation of data origins, transformations, and movement through the AI lifecycle"
      },
      {
        "letter": "B",
        "text": "Data lineage identifies the physical and cloud storage locations of datasets."
      },
      {
        "letter": "C",
        "text": "Data lineage refers to procedures for backing up and restoring AI training datasets."
      },
      {
        "letter": "D",
        "text": "Data lineage tracks the professional genealogy of data science team members."
      }
    ],
    "answer": "A",
    "explanation": "Data lineage documents data origins (sources), transformations (processing steps), and movement through the AI lifecycle, enabling traceability, reproducibility, and accountability."
  },
  {
    "id": "ext-299",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "Why is data lineage important for AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Data lineage has no meaningful relevance to AI governance or regulatory compliance"
      },
      {
        "letter": "B",
        "text": "Lineage tracking is only needed for technical debugging and engineering purposes"
      },
      {
        "letter": "C",
        "text": "Lineage is only relevant when preparing for a formal third-party audit engagement"
      },
      {
        "letter": "D",
        "text": "It enables traceability, reproducibility, impact assessment, compliance demonstration, and root cause analysis"
      }
    ],
    "answer": "D",
    "explanation": "Data lineage enables traceability of data sources, reproducibility of results, assessment of data change impacts, demonstration of compliance with data regulations, and root cause analysis when issues arise. 102"
  },
  {
    "id": "ext-300",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data provenance” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Information about data origins, ownership, and chain of custody"
      },
      {
        "letter": "B",
        "text": "Data lineage identifies the physical and cloud storage locations of datasets."
      },
      {
        "letter": "C",
        "text": "Data lineage refers to procedures for backing up and restoring AI training datasets."
      },
      {
        "letter": "D",
        "text": "Data provenance refers specifically to datasets from the Provence region of France."
      }
    ],
    "answer": "A",
    "explanation": "Data provenance provides information about data origins, ownership, collection methods, and chain of custody, supporting trust, quality assessment, and compliance."
  },
  {
    "id": "ext-301",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What is “training data bias” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Training data bias occurs when charts present information in a misleading way."
      },
      {
        "letter": "B",
        "text": "Training data bias refers to uneven data distribution across storage systems."
      },
      {
        "letter": "C",
        "text": "Systematic skews or unrepresentativeness in training data that can lead to biased AI"
      },
      {
        "letter": "D",
        "text": "Training data bias refers to financial disparities in dataset acquisition costs."
      }
    ],
    "answer": "C",
    "explanation": "Training data bias refers to systematic skews, unrepresentativeness, or historical biases in training data that can lead to biased AI system outputs and discriminatory outcomes. Addressing training data bias is a critical governance activity."
  },
  {
    "id": "ext-302",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "Historical hiring data shows a company predominantly hired men for technical roles. This data is used to train an AI resume screening system. What governance issue exists?",
    "options": [
      {
        "letter": "A",
        "text": "Historical bias in training data will likely be learned and perpetuated by the AI system"
      },
      {
        "letter": "B",
        "text": "Existing legal frameworks and anti-discrimination laws fully address this governance"
      },
      {
        "letter": "C",
        "text": "Data that accurately mirrors real-world patterns cannot introduce bias"
      },
      {
        "letter": "D",
        "text": "This is a purely technical engineering problem addressable through better model"
      }
    ],
    "answer": "A",
    "explanation": "Historical bias in training data (past discriminatory hiring) will likely be learned and perpetuated by the AI system, amplifying historical discrimination. Governance should identify this issue and require mitigation (data augmentation, fairness constraints) or alternative approaches. 103"
  },
  {
    "id": "ext-303",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data representativeness” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Data representativeness concerns how effectively data can be rendered in charts."
      },
      {
        "letter": "B",
        "text": "Data representativeness refers to how storage architectures model data relationships."
      },
      {
        "letter": "C",
        "text": "Data representativeness means training data reflects the organization's brand and values."
      },
      {
        "letter": "D",
        "text": "Training data that adequately represents the population the system will encounter in deployment"
      }
    ],
    "answer": "D",
    "explanation": "Data representativeness means training data adequately represents the population, scenarios, and conditions the AI system will encounter in deployment, ensuring the system performs appropriately across all deployment contexts."
  },
  {
    "id": "ext-304",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "How can data representativeness be assessed?",
    "options": [
      {
        "letter": "A",
        "text": "Comparing only the financial cost of acquiring different data sources is adequate"
      },
      {
        "letter": "B",
        "text": "Checking only the total volume and file size of the training dataset is sufficient"
      },
      {
        "letter": "C",
        "text": "Data representativeness cannot be systematically assessed by any known methodology"
      },
      {
        "letter": "D",
        "text": "Compare training data demographics and characteristics against the intended deployment population to identify gaps"
      }
    ],
    "answer": "D",
    "explanation": "Data representativeness can be assessed by comparing training data demographics and characteristics to the expected deployment population, analyzing coverage of relevant scenarios and edge cases, and identifying gaps or underrepresented groups."
  },
  {
    "id": "ext-305",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data minimization” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Data minimization means reducing quality standards to collect less detailed data."
      },
      {
        "letter": "B",
        "text": "Collecting and retaining only the minimum data necessary for AI purposes"
      },
      {
        "letter": "C",
        "text": "Data minimization focuses on reducing expenditure on data acquisition and storage."
      },
      {
        "letter": "D",
        "text": "Data minimization refers to file compression techniques to reduce storage footprint."
      }
    ],
    "answer": "B",
    "explanation": "Data minimization is the principle of collecting and retaining only the minimum personal data necessary for specified AI purposes, reducing privacy risks and compliance obligations. 104"
  },
  {
    "id": "ext-306",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "An AI system could use 50 data features but analysis shows 15 features provide similar performance. What does data minimization suggest?",
    "options": [
      {
        "letter": "A",
        "text": "Organizations should actively seek additional features beyond the initial 50."
      },
      {
        "letter": "B",
        "text": "Use only the 15 necessary features, reducing privacy risk and complexity"
      },
      {
        "letter": "C",
        "text": "Feature reduction should only be considered when storage costs become prohibitive."
      },
      {
        "letter": "D",
        "text": "All available features should be used since more data always improves model accuracy."
      }
    ],
    "answer": "B",
    "explanation": "Data minimization suggests using only the 15 necessary features, reducing privacy risk (less personal data processed), model complexity, and potential for spurious correlations, while maintaining performance."
  },
  {
    "id": "ext-307",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data retention” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Data retention means keeping data science staff to maintain institutional knowledge."
      },
      {
        "letter": "B",
        "text": "Data retention refers to archiving charts and dashboard configurations."
      },
      {
        "letter": "C",
        "text": "Data retention preserves physical hard drives and storage media for archives."
      },
      {
        "letter": "D",
        "text": "Policies and practices for how long data is kept and when it’s deleted"
      }
    ],
    "answer": "D",
    "explanation": "Data retention encompasses policies and practices for how long different types of data (training data, operational data, personal data) are kept and when they must be deleted, balancing legal requirements, business needs, and privacy principles."
  },
  {
    "id": "ext-308",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What factors should inform data retention policies for AI?",
    "options": [
      {
        "letter": "A",
        "text": "The only meaningful concern is the cost and logistics of data storage infrastructure."
      },
      {
        "letter": "B",
        "text": "Retention policies should be determined by business leadership priorities alone."
      },
      {
        "letter": "C",
        "text": "Legal requirements, data subject rights, business needs, privacy principles"
      },
      {
        "letter": "D",
        "text": "Retention duration is constrained solely by storage capacity and infrastructure limits."
      }
    ],
    "answer": "C",
    "explanation": "Data retention policies should balance legal requirements (some data must be retained, some must be deleted), data subject rights (erasure requests), legitimate business needs (model improvement), privacy principles (storage limitation), and security considerations. 105"
  },
  {
    "id": "ext-309",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "An organization wants to retain all training data indefinitely for potential future model improvements. What governance issues arise?",
    "options": [
      {
        "letter": "A",
        "text": "The only issue is a narrow technical consideration about database performance and query latency"
      },
      {
        "letter": "B",
        "text": "The only concern is the financial cost of additional storage infrastructure and cloud services"
      },
      {
        "letter": "C",
        "text": "No governance issues arise since retaining more data always improves future model performance"
      },
      {
        "letter": "D",
        "text": "Conflicts with storage limitation and data minimization principles, increases privacy risk, and may violate data subject rights"
      }
    ],
    "answer": "D",
    "explanation": "Indefinite retention conflicts with the storage limitation principle (GDPR), increases privacy risk (more data at risk of breach), may violate data subject rights (erasure requests), and requires strong justification of ongoing necessity. Governance should require defined retention periods with justification."
  },
  {
    "id": "ext-310",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data security” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Technical and organizational measures to protect training and operational data from unauthorized access, loss, alteration, or misuse"
      },
      {
        "letter": "B",
        "text": "Implementing encryption as the sole and exclusive data protection measure with no additional controls"
      },
      {
        "letter": "C",
        "text": "Enforcing strong password policies as the only necessary security protection for AI data"
      },
      {
        "letter": "D",
        "text": "Stationing physical security guards at the entrances to data center facilities and server rooms"
      }
    ],
    "answer": "A",
    "explanation": "Data security encompasses technical and organizational measures to protect data from unauthorized access, loss, alteration, or misuse throughout the AI lifecycle, including encryption, access controls, and security monitoring."
  },
  {
    "id": "ext-311",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What data security measures are particularly important for AI training data?",
    "options": [
      {
        "letter": "A",
        "text": "Standard physical security measures like locked facilities sufficiently protect AI data."
      },
      {
        "letter": "B",
        "text": "Access controls, encryption, secure storage, audit logging, and data poisoning protection"
      },
      {
        "letter": "C",
        "text": "Standard enterprise IT security practices sufficiently protect AI training data."
      },
      {
        "letter": "D",
        "text": "Standard network perimeter defenses like firewalls provide adequate protection."
      }
    ],
    "answer": "B",
    "explanation": "AI training data requires access controls (limiting who can access), encryption (at rest and in transit), secure storage, audit logging (tracking access), and protection against data poisoning attacks."
  },
  {
    "id": "ext-312",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data privacy” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Data privacy means storing datasets on private, non-shared infrastructure."
      },
      {
        "letter": "B",
        "text": "Encryption at rest and in transit fully addresses all privacy requirements for AI data."
      },
      {
        "letter": "C",
        "text": "Protecting personal information and respecting individuals’ privacy rights"
      },
      {
        "letter": "D",
        "text": "Role-based access controls alone satisfy all data privacy governance requirements."
      }
    ],
    "answer": "C",
    "explanation": "Data privacy in AI governance involves protecting personal information and respecting individuals’ privacy rights (consent, access, erasure) throughout the AI lifecycle, implementing privacy-by-design principles and complying with privacy regulations."
  },
  {
    "id": "ext-313",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What is “synthetic data” and how does it relate to data governance?",
    "options": [
      {
        "letter": "A",
        "text": "Synthetic data refers to datasets from chemical compound synthesis processes."
      },
      {
        "letter": "B",
        "text": "Synthetic data is collected from industrial manufacturing synthesis workflows."
      },
      {
        "letter": "C",
        "text": "Synthetic data consists of material science data about synthetic polymers."
      },
      {
        "letter": "D",
        "text": "Artificially generated data mimicking real data characteristics, potentially reducing privacy risks"
      }
    ],
    "answer": "D",
    "explanation": "Synthetic data is artificially generated data that mimics real data’s statistical properties and characteristics without containing actual personal information, potentially reducing privacy risks while maintaining utility for AI training. However, governance must ensure synthetic data doesn’t enable re-identification."
  },
  {
    "id": "ext-314",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "An organization generates synthetic data from real personal data for AI training. Does this eliminate privacy concerns?",
    "options": [
      {
        "letter": "A",
        "text": "Generating synthetic data inevitably increases privacy risks beyond the original data."
      },
      {
        "letter": "B",
        "text": "Synthetic data completely eliminates all privacy concerns by design."
      },
      {
        "letter": "C",
        "text": "Privacy regulations do not apply to AI systems trained on synthetic data."
      },
      {
        "letter": "D",
        "text": "No, synthetic data may still enable re-identification or reveal information"
      }
    ],
    "answer": "D",
    "explanation": "Synthetic data doesn’t automatically eliminate privacy concerns. Depending on generation methods, synthetic data may still enable re-identification, reveal information about individuals in the original dataset, or inherit biases. Privacy assessment is still needed."
  },
  {
    "id": "ext-315",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data labeling” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Data labeling adds titles and legends to data charts and visualizations."
      },
      {
        "letter": "B",
        "text": "Data labeling manages inventory of physical data storage devices and media."
      },
      {
        "letter": "C",
        "text": "Data labeling assigns identification tags to physical data center infrastructure."
      },
      {
        "letter": "D",
        "text": "The process of annotating training data with correct outputs or categories"
      }
    ],
    "answer": "D",
    "explanation": "Data labeling is the process of annotating training data with correct outputs, categories, or tags that the AI system should learn to predict. Label quality significantly impacts AI system performance and fairness."
  },
  {
    "id": "ext-316",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What governance considerations apply to data labeling?",
    "options": [
      {
        "letter": "A",
        "text": "No governance oversight is needed for data labeling activities or their resulting outputs"
      },
      {
        "letter": "B",
        "text": "Only tracking the speed and throughput rate of the labeling production pipeline is relevant"
      },
      {
        "letter": "C",
        "text": "Labeler training, quality control procedures, bias mitigation in labeling guidelines, and inter-rater reliability measurement"
      },
      {
        "letter": "D",
        "text": "Only monitoring the financial cost per labeled data point and the overall labeling budget matters"
      }
    ],
    "answer": "C",
    "explanation": "Data labeling governance includes labeler training (ensuring understanding of categories), quality control (checking label accuracy), bias mitigation (diverse labelers, clear guidelines), inter- rater reliability measurement, and documentation of labeling processes and decisions."
  },
  {
    "id": "ext-317",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "Data labelers consistently mislabel examples from a particular demographic group due to unfamiliarity. What governance issue exists and how should it be addressed?",
    "options": [
      {
        "letter": "A",
        "text": "The stated concern is unfounded and existing governance processes provide sufficient"
      },
      {
        "letter": "B",
        "text": "Systematic labeling bias needing labeler training, diverse teams, and quality audits"
      },
      {
        "letter": "C",
        "text": "This is a purely technical engineering problem addressable through better model"
      },
      {
        "letter": "D",
        "text": "The primary concern is financial; cost-effective data collection resolves the governance"
      }
    ],
    "answer": "B",
    "explanation": "Systematic mislabeling due to unfamiliarity creates labeling bias that will be learned by the AI system, causing biased outputs. Governance should address this through labeler training, diverse labeling teams with relevant expertise, clear guidelines, and quality audits focusing on potentially problematic categories."
  },
  {
    "id": "ext-318",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data augmentation” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Data augmentation increases the budget for data acquisition and licensing."
      },
      {
        "letter": "B",
        "text": "Data augmentation enhances charts with additional visual annotations."
      },
      {
        "letter": "C",
        "text": "Techniques to artificially increase training data diversity and size"
      },
      {
        "letter": "D",
        "text": "Data augmentation expands storage capacity for growing training datasets."
      }
    ],
    "answer": "C",
    "explanation": "Data augmentation uses techniques to artificially increase training data diversity and size (e.g., rotating images, paraphrasing text) to improve model robustness and address data scarcity."
  },
  {
    "id": "ext-319",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "How can data augmentation support fairness in AI?",
    "options": [
      {
        "letter": "A",
        "text": "The only benefit of augmentation is reducing the financial cost of collecting new real-world data"
      },
      {
        "letter": "B",
        "text": "Data augmentation has no meaningful role in supporting or improving AI fairness outcomes"
      },
      {
        "letter": "C",
        "text": "Augmentation only helps by increasing the total volume of training data regardless of distribution"
      },
      {
        "letter": "D",
        "text": "By generating additional synthetic or transformed examples for underrepresented groups to achieve more balanced training data"
      }
    ],
    "answer": "D",
    "explanation": "Data augmentation can support fairness by generating additional examples for underrepresented groups, helping balance training data and improve model performance across all groups. However, augmentation must be done carefully to avoid introducing artifacts."
  },
  {
    "id": "ext-320",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data preprocessing” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Transforming raw data into a format suitable for AI model training"
      },
      {
        "letter": "B",
        "text": "Data preprocessing compresses and deduplicates data before archival storage."
      },
      {
        "letter": "C",
        "text": "Data preprocessing handles billing and invoicing for data acquisition."
      },
      {
        "letter": "D",
        "text": "Data preprocessing formats and renders charts for visualization dashboards."
      }
    ],
    "answer": "A",
    "explanation": "Data preprocessing transforms raw data into a format suitable for AI model training through cleaning, normalization, feature engineering, and other transformations. Preprocessing decisions significantly impact model behavior."
  },
  {
    "id": "ext-321",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What governance considerations apply to data preprocessing?",
    "options": [
      {
        "letter": "A",
        "text": "Only narrow technical performance and throughput considerations are governance-relevant for preprocessing"
      },
      {
        "letter": "B",
        "text": "Only tracking the computational cost and runtime of preprocessing operations matters for governance"
      },
      {
        "letter": "C",
        "text": "Documenting all preprocessing transformations, assessing for introduced bias, and ensuring information integrity and reproducibility"
      },
      {
        "letter": "D",
        "text": "No governance oversight is required for any data preprocessing steps in the AI development pipeline"
      }
    ],
    "answer": "C",
    "explanation": "Data preprocessing governance includes documenting all transformations (enabling reproducibility), assessing whether preprocessing introduces or amplifies bias, ensuring important information isn’t lost, and maintaining preprocessing reproducibility."
  },
  {
    "id": "ext-322",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "During preprocessing, missing values for income are filled with the median income. This disproportionately affects low-income individuals who are more likely to have missing data. What governance issue exists?",
    "options": [
      {
        "letter": "A",
        "text": "Preprocessing decision may introduce bias by systematically misrepresenting low-income"
      },
      {
        "letter": "B",
        "text": "This is a purely technical engineering problem addressable through better model"
      },
      {
        "letter": "C",
        "text": "Model speed and throughput are the primary metrics that matter for responsible deployment."
      },
      {
        "letter": "D",
        "text": "This preprocessing technique is standard industry practice validated across many AI"
      }
    ],
    "answer": "A",
    "explanation": "This preprocessing decision may introduce bias by systematically misrepresenting low- income individuals (who are more likely to have missing data) as having median income, potentially affecting model fairness. Governance should identify this issue and consider alternative approaches (separate models, different imputation methods)."
  },
  {
    "id": "ext-323",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “feature engineering” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Feature engineering refers to architectural design of physical structures."
      },
      {
        "letter": "B",
        "text": "Creating or selecting input variables (features) for AI models"
      },
      {
        "letter": "C",
        "text": "Feature engineering designs consumer-facing product functionality and interfaces."
      },
      {
        "letter": "D",
        "text": "Feature engineering designs and implements new software product capabilities."
      }
    ],
    "answer": "B",
    "explanation": "Feature engineering involves creating, selecting, or transforming input variables (features) for AI models to improve performance, often requiring domain expertise. Feature choices significantly impact model behavior and fairness."
  },
  {
    "id": "ext-324",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What governance considerations apply to feature engineering?",
    "options": [
      {
        "letter": "A",
        "text": "Only the computational efficiency and runtime cost of computing each engineered feature matters"
      },
      {
        "letter": "B",
        "text": "No governance oversight is needed for feature engineering decisions or their downstream effects on outcomes"
      },
      {
        "letter": "C",
        "text": "Avoiding proxy discrimination, documenting the rationale for feature choices, and assessing fairness implications"
      },
      {
        "letter": "D",
        "text": "Only technical model performance and aggregate accuracy considerations are relevant to feature selection"
      }
    ],
    "answer": "C",
    "explanation": "Feature engineering governance includes avoiding features that serve as proxies for protected characteristics, documenting feature choices and rationale, assessing fairness implications, and ensuring legal compliance (e.g., not using prohibited factors in credit decisions)."
  },
  {
    "id": "ext-325",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "A feature that improves model accuracy is highly correlated with a protected characteristic. Should it be used?",
    "options": [
      {
        "letter": "A",
        "text": "Never include any feature that exhibits any statistical correlation with a protected characteristic whatsoever"
      },
      {
        "letter": "B",
        "text": "Assess whether it acts as a proxy for the protected characteristic, evaluate less discriminatory alternatives, and document the analysis"
      },
      {
        "letter": "C",
        "text": "Include the feature only if it qualifies as the single most important predictor in the entire model"
      },
      {
        "letter": "D",
        "text": "Use the feature without reservation since it demonstrably improves model accuracy on held-out test data"
      }
    ],
    "answer": "B",
    "explanation": "Features correlated with protected characteristics require careful analysis: assess whether they serve as proxies causing discrimination, evaluate fairness implications, consider legal requirements (some jurisdictions prohibit proxies), explore alternatives, and document the decision with justification. Simple rules (A, C, D) don’t account for context and trade-offs."
  },
  {
    "id": "ext-326",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data sharing” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Data sharing refers to distributing charts and dashboards to stakeholders."
      },
      {
        "letter": "B",
        "text": "Providing data to other parties, requiring governance to ensure appropriate use"
      },
      {
        "letter": "C",
        "text": "Data sharing splits the financial costs of cloud storage across departments."
      },
      {
        "letter": "D",
        "text": "Data sharing co-locates equipment from different teams in shared facilities."
      }
    ],
    "answer": "B",
    "explanation": "Data sharing involves providing data to other parties (partners, researchers, vendors) and requires governance to ensure appropriate use, adequate protection, legal compliance, and respect for data subject rights."
  },
  {
    "id": "ext-327",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What governance controls should apply to data sharing for AI?",
    "options": [
      {
        "letter": "A",
        "text": "Existing organizational processes and general IT controls provide adequate oversight."
      },
      {
        "letter": "B",
        "text": "Technical controls like encryption and access management suffice for data sharing."
      },
      {
        "letter": "C",
        "text": "Managing budgets and financial controls is the primary governance concern for data"
      },
      {
        "letter": "D",
        "text": "Data sharing agreements, purpose limitations, security requirements, and compliance verification"
      }
    ],
    "answer": "D",
    "explanation": "Data sharing governance includes data sharing agreements (defining permitted uses), purpose limitations, security requirements for recipients, compliance verification, and appropriate data subject notification or consent."
  },
  {
    "id": "ext-328",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data anonymization” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Removing identifying information so individuals cannot be re-identified"
      },
      {
        "letter": "B",
        "text": "Data anonymization collects data without recording subject identities."
      },
      {
        "letter": "C",
        "text": "Data anonymization stores datasets in unlabeled, anonymous storage locations."
      },
      {
        "letter": "D",
        "text": "Data anonymization creates charts not revealing individual data points."
      }
    ],
    "answer": "A",
    "explanation": "Data anonymization involves removing or transforming identifying information so individuals cannot be re-identified by any reasonable means. True anonymization is challenging, especially for rich AI datasets."
  },
  {
    "id": "ext-329",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What challenges exist in anonymizing data for AI?",
    "options": [
      {
        "letter": "A",
        "text": "Anonymization difficulties stem from algorithmic limits solvable with better techniques."
      },
      {
        "letter": "B",
        "text": "Rich datasets enable re-identification, anonymization may reduce data utility"
      },
      {
        "letter": "C",
        "text": "The main obstacle to effective data anonymization is the financial implementation cost."
      },
      {
        "letter": "D",
        "text": "Data anonymization is a straightforward process with no significant governance challenges."
      }
    ],
    "answer": "B",
    "explanation": "Anonymizing AI data is challenging because rich datasets with many features enable re- identification through combination, anonymization techniques may reduce data utility for AI, and AI models themselves may enable inference attacks revealing information about training data."
  },
  {
    "id": "ext-330",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "An organization anonymizes training data by removing names and addresses. The data includes age, zip code, and medical conditions. Is this sufficient anonymization?",
    "options": [
      {
        "letter": "A",
        "text": "Encryption ensures removing names and addresses achieves complete anonymization."
      },
      {
        "letter": "B",
        "text": "Insufficient; quasi-identifiers like age and zip code combinations can enable re-identification"
      },
      {
        "letter": "C",
        "text": "True data anonymization cannot be achieved with any current technology."
      },
      {
        "letter": "D",
        "text": "Anonymization obligations do not apply to data used solely for model training."
      }
    ],
    "answer": "B",
    "explanation": "Removing direct identifiers (names, addresses) is insufficient. Combinations of quasi- identifiers (age, zip code, medical conditions) may enable re-identification, especially with external datasets. Additional techniques (generalization, suppression, differential privacy) may be needed."
  },
  {
    "id": "ext-331",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “data access control” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "The process of encrypting all datasets at rest and in transit"
      },
      {
        "letter": "B",
        "text": "A technique for compressing training data to reduce storage requirements"
      },
      {
        "letter": "C",
        "text": "The legal requirement to publish all data sources used by an AI system"
      },
      {
        "letter": "D",
        "text": "Policies and mechanisms determining who can access what data for AI purposes"
      }
    ],
    "answer": "D",
    "explanation": "Data access control encompasses policies and technical mechanisms determining who can access what data for AI purposes, implementing least privilege and need-to-know principles. The other options describe unrelated activities."
  },
  {
    "id": "ext-332",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What principles should guide data access control for AI?",
    "options": [
      {
        "letter": "A",
        "text": "All personnel across the organization should have unrestricted access to all available data"
      },
      {
        "letter": "B",
        "text": "Only senior management and executives should be granted access to organizational data"
      },
      {
        "letter": "C",
        "text": "Least privilege access, need-to-know basis, role-based access controls, comprehensive audit logging, and regular access reviews"
      },
      {
        "letter": "D",
        "text": "Only members of the technical engineering and data science staff should have data access"
      }
    ],
    "answer": "C",
    "explanation": "Data access control should follow least privilege (minimum necessary access), need-to- know (access only for legitimate purposes), role-based access control, comprehensive audit logging, and regular access reviews."
  },
  {
    "id": "ext-333",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "A data scientist requests access to production data containing personal information for model improvement. What governance considerations apply?",
    "options": [
      {
        "letter": "A",
        "text": "Grant unrestricted access immediately since data scientists require real data to perform meaningful work"
      },
      {
        "letter": "B",
        "text": "Deny all access to production data under any circumstances and regardless of the stated purpose or need"
      },
      {
        "letter": "C",
        "text": "Assess the necessity, evaluate alternatives like anonymized or synthetic data, and implement access controls with appropriate oversight"
      },
      {
        "letter": "D",
        "text": "Grant access only if personally authorized in writing by the organization's chief executive officer"
      }
    ],
    "answer": "C",
    "explanation": "Governance should assess whether access is necessary, consider alternatives (anonymized or synthetic data), implement appropriate access controls and monitoring if access is granted, time-limit the access, and document justification. Blanket approval (A) or denial (C) don’t account for legitimate needs and risk management."
  },
  {
    "id": "ext-334",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “model development” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "The procurement process for acquiring third-party AI vendors"
      },
      {
        "letter": "B",
        "text": "The final stage of deploying an AI system into production"
      },
      {
        "letter": "C",
        "text": "The process of designing, training, and refining AI models"
      },
      {
        "letter": "D",
        "text": "The audit procedure used to certify a model against ISO standards"
      }
    ],
    "answer": "C",
    "explanation": "Model development encompasses the process of designing AI model architecture, training models on data, and refining them through iterative improvement to meet requirements.”"
  },
  {
    "id": "ext-335",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “algorithm selection” in model development?",
    "options": [
      {
        "letter": "A",
        "text": "Selecting which cloud provider will host the trained model"
      },
      {
        "letter": "B",
        "text": "Choosing appropriate machine learning algorithms based on the problem, data"
      },
      {
        "letter": "C",
        "text": "Ranking candidate vendors during AI procurement"
      },
      {
        "letter": "D",
        "text": "Choosing which employees may modify production models"
      }
    ],
    "answer": "B",
    "explanation": "Algorithm selection involves choosing appropriate machine learning algorithms based on the problem type, data characteristics, performance requirements, explainability needs, and other constraints. 114"
  },
  {
    "id": "ext-336",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What factors should influence algorithm selection from a governance perspective?",
    "options": [
      {
        "letter": "A",
        "text": "Model speed and throughput are the primary metrics that matter for responsible deployment."
      },
      {
        "letter": "B",
        "text": "The primary concern is financial; cost-effective data collection resolves the governance"
      },
      {
        "letter": "C",
        "text": "Standard accuracy benchmarks are the only governance metric needed for responsible AI."
      },
      {
        "letter": "D",
        "text": "Accuracy, explainability, fairness, computational needs, and alignment with use case risk level"
      }
    ],
    "answer": "D",
    "explanation": "Algorithm selection should consider accuracy/performance, explainability needs (especially for high-stakes decisions), fairness characteristics, computational requirements, and alignment with use case risk level. High-risk applications may require more explainable algorithms."
  },
  {
    "id": "ext-337",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “hyperparameter tuning” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Adjusting algorithm configuration parameters to optimize performance through experimentation"
      },
      {
        "letter": "B",
        "text": "Encrypting model weights before deployment to production"
      },
      {
        "letter": "C",
        "text": "Selecting the human reviewers who approve model outputs"
      },
      {
        "letter": "D",
        "text": "Documenting a model's intended use in a model card"
      }
    ],
    "answer": "A",
    "explanation": "Hyperparameter tuning involves adjusting algorithm configuration parameters (learning rate, number of layers, etc.) to optimize model performance, requiring systematic experimentation.”"
  },
  {
    "id": "ext-338",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What governance considerations apply to hyperparameter tuning?",
    "options": [
      {
        "letter": "A",
        "text": "Only tracking the computational expense and runtime duration of each tuning experiment matters"
      },
      {
        "letter": "B",
        "text": "Documenting all experiments, guarding against overfitting, and considering fairness implications across hyperparameter choices"
      },
      {
        "letter": "C",
        "text": "No governance considerations apply to hyperparameter tuning activities, experiments, or their outcomes"
      },
      {
        "letter": "D",
        "text": "Only narrow technical performance and model accuracy improvements are governance-relevant considerations"
      }
    ],
    "answer": "B",
    "explanation": "Hyperparameter tuning governance includes documenting experiments and decisions, avoiding overfitting to validation data, considering fairness implications of different configurations, and ensuring reproducibility."
  },
  {
    "id": "ext-339",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “model training” in AI development?",
    "options": [
      {
        "letter": "A",
        "text": "The process of validating a model against regulatory requirements"
      },
      {
        "letter": "B",
        "text": "Migrating a model from a test environment into production"
      },
      {
        "letter": "C",
        "text": "The certification of a model by an external audit body"
      },
      {
        "letter": "D",
        "text": "The process of teaching an AI model to recognize patterns from training data"
      }
    ],
    "answer": "D",
    "explanation": "Model training is the process of teaching an AI model to recognize patterns and relationships from training data through iterative learning algorithms, producing a trained model. The other options describe unrelated activities."
  },
  {
    "id": "ext-340",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What should be monitored during model training from a governance perspective?",
    "options": [
      {
        "letter": "A",
        "text": "Only the final aggregate accuracy score on the held-out test dataset"
      },
      {
        "letter": "B",
        "text": "Performance across subgroups, fairness indicators, convergence behavior, overfitting signals, and resource utilization trends"
      },
      {
        "letter": "C",
        "text": "Only the direct financial cost of the compute resources consumed during training"
      },
      {
        "letter": "D",
        "text": "Only the total wall-clock time required for the training run to complete"
      }
    ],
    "answer": "B",
    "explanation": "Training monitoring should include performance metrics (accuracy, loss), fairness metrics across groups, convergence behavior, overfitting indicators (training vs. validation performance), and resource usage."
  },
  {
    "id": "ext-341",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "During training, a model achieves 98% accuracy on training data but only 75% on validation data. What does this indicate and what should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Focus exclusively on further optimizing training set accuracy and ignore the validation metrics"
      },
      {
        "letter": "B",
        "text": "Indicates overfitting; recommend regularization, more diverse training data, or early stopping to improve generalization to new data"
      },
      {
        "letter": "C",
        "text": "Disregard the validation set performance gap as statistically insignificant noise in the measurements"
      },
      {
        "letter": "D",
        "text": "Deploy immediately since the 98% training accuracy confirms excellent model performance"
      }
    ],
    "answer": "B",
    "explanation": "Large gap between training and validation performance indicates overfitting—the model learned training data too specifically and doesn’t generalize. Governance should recommend overfitting reduction techniques (regularization, more training data, simpler model architecture) before deployment."
  },
  {
    "id": "ext-342",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “model validation” in AI development?",
    "options": [
      {
        "letter": "A",
        "text": "Evaluating whether a trained model meets requirements using validation data not seen in training"
      },
      {
        "letter": "B",
        "text": "Confirming that training data was collected with proper consent"
      },
      {
        "letter": "C",
        "text": "The primary governance consideration is managing financial costs and budget constraints."
      },
      {
        "letter": "D",
        "text": "Publishing model performance metrics to external stakeholders"
      }
    ],
    "answer": "A",
    "explanation": "Model validation evaluates whether a trained model meets functional, performance, fairness, and other requirements using validation data (separate from training data) before deployment. The other options describe unrelated activities."
  },
  {
    "id": "ext-343",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What is the purpose of using separate validation data?",
    "options": [
      {
        "letter": "A",
        "text": "The primary governance consideration is managing financial costs and budget constraints."
      },
      {
        "letter": "B",
        "text": "To provide unbiased evaluation of model performance on data it hasn’t seen during training"
      },
      {
        "letter": "C",
        "text": "Separating test data is only needed to satisfy regulatory checklist requirements."
      },
      {
        "letter": "D",
        "text": "Separating test data increases development complexity without clear benefit."
      }
    ],
    "answer": "B",
    "explanation": "Separate validation data provides unbiased evaluation of how the model performs on data it hasn’t seen during training, helping detect overfitting and estimate real-world performance. Using training data for validation would give overly optimistic results."
  },
  {
    "id": "ext-344",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “model testing” in AI development?",
    "options": [
      {
        "letter": "A",
        "text": "Systematically evaluating model functionality, performance, safety, and fairness before deployment"
      },
      {
        "letter": "B",
        "text": "Collecting user feedback after the model reaches production"
      },
      {
        "letter": "C",
        "text": "The primary governance consideration is managing financial costs and budget constraints."
      },
      {
        "letter": "D",
        "text": "Negotiating acceptance criteria with the AI vendor"
      }
    ],
    "answer": "A",
    "explanation": "Model testing systematically evaluates model functionality (does it work as intended), performance (accuracy, speed), safety (failure modes), and fairness (across groups) using various testing methodologies before deployment. The other options describe unrelated activities."
  },
  {
    "id": "ext-345",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What types of testing should AI models undergo?",
    "options": [
      {
        "letter": "A",
        "text": "Only user acceptance testing with a small panel of internal stakeholders is sufficient"
      },
      {
        "letter": "B",
        "text": "Only measuring inference latency and throughput under various simulated load conditions"
      },
      {
        "letter": "C",
        "text": "Only testing aggregate accuracy on a standard held-out test dataset is adequate"
      },
      {
        "letter": "D",
        "text": "Functional accuracy, subgroup fairness, adversarial robustness, security resilience, explainability, and edge case behavior"
      }
    ],
    "answer": "D",
    "explanation": "Comprehensive AI model testing includes functional testing (correct behavior), performance testing (accuracy, speed), fairness testing (across groups), robustness testing (edge cases, adversarial inputs), security testing, explainability testing, and edge case testing."
  },
  {
    "id": "ext-346",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "A model passes accuracy testing with 92% overall accuracy but fairness testing reveals 95% accuracy for one group and 85% for another. Should it be deployed?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy immediately; 92% overall accuracy exceeds most industry benchmarks"
      },
      {
        "letter": "B",
        "text": "Investigation needed; a 10-point accuracy gap may indicate bias that requires correction"
      },
      {
        "letter": "C",
        "text": "A modest accuracy gap between demographic groups is expected and not concerning."
      },
      {
        "letter": "D",
        "text": "Reject the model permanently; any accuracy gap between groups is disqualifying"
      }
    ],
    "answer": "B",
    "explanation": "A 10-point accuracy gap between groups may indicate bias and could lead to discriminatory outcomes. Governance should require investigation of root causes, attempted mitigation, and careful evaluation of whether remaining disparities are acceptable given the use case and legal requirements."
  },
  {
    "id": "ext-347",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “performance testing” for AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Evaluating model accuracy, speed, and other performance metrics"
      },
      {
        "letter": "B",
        "text": "Assessing whether end users are satisfied with the model's interface"
      },
      {
        "letter": "C",
        "text": "Measuring the productivity of the data science team"
      },
      {
        "letter": "D",
        "text": "Estimating the operating cost of the model in production"
      }
    ],
    "answer": "A",
    "explanation": "Performance testing evaluates model accuracy, precision, recall, speed, resource usage, and other performance metrics against requirements. The other options describe unrelated activities."
  },
  {
    "id": "ext-348",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What performance metrics should be evaluated for AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Accuracy, precision, recall, F1 score, error rates, and performance across demographic subgroups"
      },
      {
        "letter": "B",
        "text": "Model speed and throughput are the primary metrics that matter for responsible deployment."
      },
      {
        "letter": "C",
        "text": "The primary concern is financial; cost-effective data collection resolves the governance"
      },
      {
        "letter": "D",
        "text": "Evaluating aggregate accuracy across all predictions is sufficient."
      }
    ],
    "answer": "A",
    "explanation": "Comprehensive performance evaluation includes overall accuracy, precision (positive prediction accuracy), recall (sensitivity), F1 score (balance), false positive/negative rates (error types), and critically, performance across demographic groups to identify disparities."
  },
  {
    "id": "ext-349",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “fairness testing” for AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Fairness testing evaluates whether AI marketing claims are truthful and non-deceptive."
      },
      {
        "letter": "B",
        "text": "Fairness testing examines whether AI contract terms are equitable for all parties."
      },
      {
        "letter": "C",
        "text": "Evaluating whether model performance and outcomes are equitable"
      },
      {
        "letter": "D",
        "text": "Fairness testing assesses whether AI-influenced pricing is consistent across customers."
      }
    ],
    "answer": "C",
    "explanation": "Fairness testing evaluates whether model performance (accuracy, error rates) and outcomes (predictions, decisions) are equitable across different demographic groups, identifying potential discrimination."
  },
  {
    "id": "ext-350",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What fairness metrics might be used in AI model testing?",
    "options": [
      {
        "letter": "A",
        "text": "No established fairness metrics exist for evaluating AI model outputs and outcomes"
      },
      {
        "letter": "B",
        "text": "Standard accuracy, precision, and recall metrics are fully sufficient for fairness evaluation"
      },
      {
        "letter": "C",
        "text": "Demographic parity, equalized odds, equal opportunity, predictive parity, and disparate impact ratio across protected groups"
      },
      {
        "letter": "D",
        "text": "Only financial metrics such as cost savings and return on investment are relevant indicators"
      }
    ],
    "answer": "C",
    "explanation": "Fairness metrics include demographic parity (equal positive prediction rates), equalized odds (equal true/false positive rates), equal opportunity (equal true positive rates), predictive parity (equal precision), and disparate impact ratios. Different metrics may be appropriate for different contexts."
  },
  {
    "id": "ext-351",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "Different fairness metrics sometimes conflict—optimizing for one worsens another. How should this be addressed in governance?",
    "options": [
      {
        "letter": "A",
        "text": "Defer the choice of fairness metric to the model vendor"
      },
      {
        "letter": "B",
        "text": "Avoid measuring fairness at all until regulators mandate specific metrics"
      },
      {
        "letter": "C",
        "text": "All conflicting fairness metrics can and should be simultaneously optimized."
      },
      {
        "letter": "D",
        "text": "Choose the most appropriate fairness metric for the context, documenting unavoidable trade-offs"
      }
    ],
    "answer": "D",
    "explanation": "Fairness metric conflicts require choosing the most appropriate metric(s) for the specific use case, legal context, and stakeholder values, documenting trade-offs, and ensuring minimum fairness standards are met even if perfect fairness across all metrics is impossible."
  },
  {
    "id": "ext-352",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “robustness testing” for AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Robustness testing evaluates physical durability of hardware running AI workloads."
      },
      {
        "letter": "B",
        "text": "Robustness testing verifies documentation accuracy under varying conditions."
      },
      {
        "letter": "C",
        "text": "Robustness testing assesses AI marketing resilience against competitive pressure."
      },
      {
        "letter": "D",
        "text": "Evaluating model performance on edge cases, unusual inputs, and adversarial examples"
      }
    ],
    "answer": "D",
    "explanation": "Robustness testing evaluates how models perform on edge cases, unusual inputs, distribution shifts, and adversarial examples, assessing whether models fail gracefully or catastrophically."
  },
  {
    "id": "ext-353",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What is “adversarial testing” for AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Adversarial testing evaluates AI systems against hostile legal contract terms."
      },
      {
        "letter": "B",
        "text": "Adversarial testing compares AI performance against competitor benchmarks."
      },
      {
        "letter": "C",
        "text": "Deliberately attempting to cause model failures or incorrect outputs through crafted"
      },
      {
        "letter": "D",
        "text": "Adversarial testing uses internal staff attempting to deliberately misuse the system."
      }
    ],
    "answer": "C",
    "explanation": "Adversarial testing deliberately attempts to cause model failures, incorrect outputs, or unintended behaviors through carefully crafted inputs, helping identify vulnerabilities and improve robustness."
  },
  {
    "id": "ext-354",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "Adversarial testing reveals that small, imperceptible changes to inputs can cause a model to make incorrect predictions. What does this indicate and what should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Indicates vulnerability to adversarial attacks; recommend robustness improvements and adversarial training"
      },
      {
        "letter": "B",
        "text": "Only document the finding in a technical report without implementing any corrective measures"
      },
      {
        "letter": "C",
        "text": "No concern exists since the adversarial perturbations are imperceptible to human observers"
      },
      {
        "letter": "D",
        "text": "Deploy the system without modification since real-world adversaries lack the capability to craft such inputs"
      }
    ],
    "answer": "A",
    "explanation": "Vulnerability to adversarial examples indicates the model could be manipulated in deployment. Governance should recommend robustness improvements (adversarial training, input validation), consider whether the use case is appropriate given the vulnerability, and implement monitoring for potential attacks."
  },
  {
    "id": "ext-355",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “explainability testing” for AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Explainability testing measures the computational cost of generating explanations."
      },
      {
        "letter": "B",
        "text": "Explainability testing verifies that explanation procedures are documented."
      },
      {
        "letter": "C",
        "text": "Explainability testing evaluates how well explanations support marketing claims."
      },
      {
        "letter": "D",
        "text": "Evaluating whether model explanations are accurate, understandable, and useful"
      }
    ],
    "answer": "D",
    "explanation": "Explainability testing evaluates whether model explanations are accurate (faithful to actual model behavior), understandable to intended audiences, and useful for their purposes (decision- making, debugging, accountability)."
  },
  {
    "id": "ext-356",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What should explainability testing verify?",
    "options": [
      {
        "letter": "A",
        "text": "Explanation accuracy (faithfulness), comprehensibility for intended audiences"
      },
      {
        "letter": "B",
        "text": "Explanations must follow consistent templates and format requirements."
      },
      {
        "letter": "C",
        "text": "Simply documenting that explanations exist satisfies governance requirements."
      },
      {
        "letter": "D",
        "text": "Explanations should meet minimum length and conciseness requirements."
      }
    ],
    "answer": "A",
    "explanation": "Explainability testing should verify explanation accuracy/faithfulness (do explanations reflect actual model behavior), comprehensibility for intended audiences, consistency across similar cases, and usefulness for intended purposes."
  },
  {
    "id": "ext-357",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “edge case testing” for AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Edge case testing evaluates AI behavior on building perimeters and ledges."
      },
      {
        "letter": "B",
        "text": "Edge case testing verifies model performance specifically on edge computing devices."
      },
      {
        "letter": "C",
        "text": "Edge case testing assesses whether AI provides competitive business advantages."
      },
      {
        "letter": "D",
        "text": "Testing model behavior on unusual, rare, or boundary conditions"
      }
    ],
    "answer": "D",
    "explanation": "Edge case testing evaluates model behavior on unusual, rare, or boundary conditions that may not be well-represented in training data but could occur in deployment, identifying potential failure modes. 121"
  },
  {
    "id": "ext-358",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "Why is edge case testing particularly important for AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Edge case testing is performed solely to satisfy external regulatory and compliance requirements"
      },
      {
        "letter": "B",
        "text": "AI models may fail on rare cases poorly represented in training data, causing serious harm in high-stakes scenarios"
      },
      {
        "letter": "C",
        "text": "Edge case testing provides no meaningful value beyond standard accuracy benchmarking"
      },
      {
        "letter": "D",
        "text": "Edge case testing is only conducted for completeness of the testing checklist, with no practical benefit"
      }
    ],
    "answer": "B",
    "explanation": "Edge case testing is important because AI models may perform poorly or fail on rare cases not well-represented in training data, and these edge cases may involve high-stakes situations (medical emergencies, safety-critical scenarios) where failures cause significant harm."
  },
  {
    "id": "ext-359",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "Edge case testing reveals a model performs poorly on a rare but high-stakes scenario. The scenario occurs in less than 0.1% of cases. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Only add a note in the model documentation acknowledging the known performance limitation"
      },
      {
        "letter": "B",
        "text": "Deploy the system without any modification since the edge case is too rare to justify engineering effort"
      },
      {
        "letter": "C",
        "text": "Ignore the finding since the scenario occurs in less than 0.1% of all cases and is statistically negligible"
      },
      {
        "letter": "D",
        "text": "Assess the potential severity of harm from failure on this edge case and implement safeguards such as human review when the scenario is detected"
      }
    ],
    "answer": "D",
    "explanation": "Even rare edge cases warrant attention if they’re high-stakes. Governance should recommend assessing potential harm, implementing safeguards (human review when edge cases are detected, user warnings), considering whether use case restrictions are needed, and clearly documenting the limitation. Rarity doesn’t eliminate responsibility for high-stakes failures."
  },
  {
    "id": "ext-360",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “security testing” for AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Security testing evaluates physical barriers and facility access controls."
      },
      {
        "letter": "B",
        "text": "Security testing evaluates human security personnel protecting AI systems."
      },
      {
        "letter": "C",
        "text": "Evaluating model vulnerabilities to data poisoning, model inversion, and adversarial examples"
      },
      {
        "letter": "D",
        "text": "Security testing verifies security policies and procedures are documented."
      }
    ],
    "answer": "C",
    "explanation": "Security testing evaluates AI model vulnerabilities to various attacks including data poisoning, model inversion (extracting training data), membership inference (determining if data was in training set), and adversarial examples."
  },
  {
    "id": "ext-361",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What security threats should AI model testing address?",
    "options": [
      {
        "letter": "A",
        "text": "Data poisoning, model inversion, membership inference, adversarial examples"
      },
      {
        "letter": "B",
        "text": "Standard physical security measures like locked facilities sufficiently protect AI data."
      },
      {
        "letter": "C",
        "text": "Standard network perimeter defenses like firewalls provide adequate protection."
      },
      {
        "letter": "D",
        "text": "Strong passwords and multi-factor authentication satisfy security requirements."
      }
    ],
    "answer": "A",
    "explanation": "AI model security testing should address data poisoning (manipulating training data), model inversion (extracting training data), membership inference (privacy attacks), adversarial examples (causing misclassification), and model theft (stealing model parameters)."
  },
  {
    "id": "ext-362",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “integration testing” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Integration testing measures financial costs of connecting AI with existing systems."
      },
      {
        "letter": "B",
        "text": "Integration testing evaluates AI system adoption by the social community."
      },
      {
        "letter": "C",
        "text": "Integration testing verifies system integration procedures are documented."
      },
      {
        "letter": "D",
        "text": "Testing how AI models integrate with other system components and workflows"
      }
    ],
    "answer": "D",
    "explanation": "Integration testing evaluates how AI models integrate with other system components, data pipelines, user interfaces, and workflows, ensuring the complete system functions correctly."
  },
  {
    "id": "ext-363",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "Why is integration testing important for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Integration testing is only relevant for narrow technical debugging and engineering troubleshooting purposes"
      },
      {
        "letter": "B",
        "text": "AI models operate within larger systems; integration defects can cause failures, amplify bias, or create unintended harmful behaviors"
      },
      {
        "letter": "C",
        "text": "Integration testing provides no meaningful governance value beyond what unit testing already covers"
      },
      {
        "letter": "D",
        "text": "Integration testing matters only for generating documentation artifacts to satisfy audit requirements"
      }
    ],
    "answer": "B",
    "explanation": "Integration testing is important because AI models operate within larger systems, and integration issues can cause system failures, amplify biases, create unintended feedback loops, or res123 ult in inappropriate use of model outputs."
  },
  {
    "id": "ext-364",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "Integration testing reveals that while the AI model is fair, the system’s user interface presents results in a way that amplifies bias. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Only document the UI presentation issue in the system's known limitations register"
      },
      {
        "letter": "B",
        "text": "Address the UI presentation issue; fairness must be evaluated holistically at the system level, not just within the isolated model"
      },
      {
        "letter": "C",
        "text": "Assign blame exclusively to the user interface design team and escalate through their management chain"
      },
      {
        "letter": "D",
        "text": "No action is needed since the underlying AI model itself has been verified as fair and unbiased"
      }
    ],
    "answer": "B",
    "explanation": "Fairness must be evaluated at the system level, not just the model level. If the user interface amplifies bias (e.g., by how results are presented or ordered), the overall system is unfair regardless of model fairness. Governance should require addressing the UI issue."
  },
  {
    "id": "ext-365",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “user acceptance testing” (UAT) for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "User acceptance testing evaluates whether users will pay proposed system fees."
      },
      {
        "letter": "B",
        "text": "Testing whether the AI system meets user needs and expectations in realistic scenarios"
      },
      {
        "letter": "C",
        "text": "User acceptance testing verifies account creation and authentication work correctly."
      },
      {
        "letter": "D",
        "text": "User acceptance testing checks user manuals and help documentation completeness."
      }
    ],
    "answer": "B",
    "explanation": "User acceptance testing evaluates whether the AI system meets user needs, expectations, and workflows in realistic scenarios, involving actual users testing the system before full deployment."
  },
  {
    "id": "ext-366",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What value does user acceptance testing provide for AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "The only governance benefit of UAT is generating required documentation for the compliance file"
      },
      {
        "letter": "B",
        "text": "Identifies usability problems, inappropriate trust or distrust in the system, user misunderstandings, and real-world failure modes"
      },
      {
        "letter": "C",
        "text": "User acceptance testing provides no value to AI governance beyond what automated testing already covers"
      },
      {
        "letter": "D",
        "text": "UAT delivers only narrow technical validation of system functionality and performance under load"
      }
    ],
    "answer": "B",
    "explanation": "UAT provides governance value by identifying usability issues, inappropriate trust or distrust in the system, misunderstandings about capabilities/limitations, and real-world applicability 124 problems that technical testing might miss."
  },
  {
    "id": "ext-367",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “regression testing” for AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Regression testing validates statistical regression coefficients in the model."
      },
      {
        "letter": "B",
        "text": "Testing that model updates don’t introduce new problems or degrade existing functionality"
      },
      {
        "letter": "C",
        "text": "Regression testing verifies update procedures and changelogs are documented."
      },
      {
        "letter": "D",
        "text": "Regression testing evaluates financial impact of model updates on budgets."
      }
    ],
    "answer": "B",
    "explanation": "Regression testing verifies that model updates, retraining, or changes don’t introduce new problems, degrade existing functionality, or worsen fairness, ensuring improvements don’t come with unacceptable trade-offs."
  },
  {
    "id": "ext-368",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "When should regression testing be performed for AI models?",
    "options": [
      {
        "letter": "A",
        "text": "Regression testing should be conducted on a fixed annual schedule regardless of system changes"
      },
      {
        "letter": "B",
        "text": "Whenever models are updated, retrained, or any changes are made to the system, its data, or its deployment environment"
      },
      {
        "letter": "C",
        "text": "Regression testing for AI models is never necessary after the initial deployment has been validated"
      },
      {
        "letter": "D",
        "text": "Regression testing is only needed once, at the point of initial production deployment"
      }
    ],
    "answer": "B",
    "explanation": "Regression testing should be performed whenever models are updated, retrained, or system changes are made to ensure changes don’t introduce new problems or degrade existing performance/fairness."
  },
  {
    "id": "ext-369",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "Regression testing after a model update shows improved overall accuracy but worsened fairness. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Deploy because aggregate accuracy gains outweigh any fairness trade-offs."
      },
      {
        "letter": "B",
        "text": "Fairness regressions are acceptable if offset by overall accuracy improvements."
      },
      {
        "letter": "C",
        "text": "Do not deploy; investigate the fairness regression, deploy only if trade-offs are unavoidable"
      },
      {
        "letter": "D",
        "text": "Deploy the update immediately and address fairness regression in a later patch."
      }
    ],
    "answer": "C",
    "explanation": "Governance should not approve updates that worsen fairness even if accuracy improves. The organization should investigate the fairness regression, attempt to achieve both improvements, and only proceed if trade-offs are carefully evaluated and documented as unavoidable. 125"
  },
  {
    "id": "ext-370",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “test data” in AI development?",
    "options": [
      {
        "letter": "A",
        "text": "Test data comprises written test plans and validation protocol documentation."
      },
      {
        "letter": "B",
        "text": "A separate dataset for final evaluation, not used during training or validation"
      },
      {
        "letter": "C",
        "text": "Test data benchmarks and evaluates the hardware running AI workloads."
      },
      {
        "letter": "D",
        "text": "Test data consists of metadata describing testing procedures and protocols."
      }
    ],
    "answer": "B",
    "explanation": "Test data is a separate dataset (distinct from training and validation data) used to evaluate final model performance, providing an unbiased estimate of real-world performance."
  },
  {
    "id": "ext-371",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "Why must test data be kept separate from training and validation data?",
    "options": [
      {
        "letter": "A",
        "text": "To provide unbiased evaluation of model performance without any data leakage from training"
      },
      {
        "letter": "B",
        "text": "Separating test data increases development complexity without clear benefit."
      },
      {
        "letter": "C",
        "text": "Keeping test data separate is done primarily to increase storage infrastructure costs."
      },
      {
        "letter": "D",
        "text": "Separating test data is only needed to satisfy regulatory checklist requirements."
      }
    ],
    "answer": "A",
    "explanation": "Test data must be kept completely separate to provide unbiased evaluation of model performance without any data leakage from training or validation, giving the most accurate estimate of real-world performance. Using training or validation data for final testing would give overly optimistic results."
  },
  {
    "id": "ext-372",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "What is “test coverage” in AI model testing?",
    "options": [
      {
        "letter": "A",
        "text": "The percentage of source code lines executed by unit tests"
      },
      {
        "letter": "B",
        "text": "The number of testers assigned to a model release"
      },
      {
        "letter": "C",
        "text": "The extent to which testing evaluates different scenarios, edge cases"
      },
      {
        "letter": "D",
        "text": "The share of the annual budget allocated to quality assurance"
      }
    ],
    "answer": "C",
    "explanation": "Test coverage refers to the extent to which testing evaluates different scenarios, edge cases, input variations, and demographic groups, ensuring comprehensive evaluation rather than narrow testing. The other options describe unrelated activities."
  },
  {
    "id": "ext-373",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What indicates inadequate test coverage for an AI model?",
    "options": [
      {
        "letter": "A",
        "text": "Low testing costs demonstrate that the organization has efficient, adequate coverage."
      },
      {
        "letter": "B",
        "text": "Testing doesn’t include edge cases, demographic groups, adversarial examples"
      },
      {
        "letter": "C",
        "text": "A 100% test pass rate confirms test coverage is sufficient and the model is ready."
      },
      {
        "letter": "D",
        "text": "Rapid test execution reliably indicates that test coverage is comprehensive."
      }
    ],
    "answer": "B",
    "explanation": "Inadequate test coverage is indicated by testing that doesn’t include edge cases, all relevant demographic groups, adversarial examples, realistic scenarios, or various input conditions, leaving potential issues undetected."
  },
  {
    "id": "ext-374",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "An AI model passes all defined tests, but post-deployment, issues arise in scenarios that weren’t tested. What does this indicate about the testing process?",
    "options": [
      {
        "letter": "A",
        "text": "Post-deployment failures indicate the model is fundamentally flawed and must be replaced."
      },
      {
        "letter": "B",
        "text": "Test coverage was inadequate; testing didn’t include scenarios that occur in real"
      },
      {
        "letter": "C",
        "text": "Issues stem from users not following procedures, not from inadequate test coverage."
      },
      {
        "letter": "D",
        "text": "Comprehensive AI testing is inherently impossible, so post-deployment issues are expected."
      }
    ],
    "answer": "B",
    "explanation": "Post-deployment issues in untested scenarios indicate inadequate test coverage—testing didn’t include scenarios that occur in real-world deployment. Governance should require more comprehensive test coverage including realistic scenarios, edge cases, and diverse conditions."
  },
  {
    "id": "ext-375",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "What is “continuous testing” in AI model governance?",
    "options": [
      {
        "letter": "A",
        "text": "Ongoing testing throughout development and after deployment to detect issues early"
      },
      {
        "letter": "B",
        "text": "Continuous testing runs automated test suites in an infinite loop without stopping."
      },
      {
        "letter": "C",
        "text": "Continuous testing means regularly updating test documentation for current procedures."
      },
      {
        "letter": "D",
        "text": "Continuous testing applies only to systems operating 24/7 without any downtime."
      }
    ],
    "answer": "A",
    "explanation": "Continuous testing involves ongoing testing throughout development (not just at the end) and after deployment to detect issues early, monitor for model drift, and ensure continued performance and fairness. Domain IV:"
  },
  {
    "id": "ext-376",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is AI deployment?",
    "options": [
      {
        "letter": "A",
        "text": "AI deployment publishes technical documentation and user guides for AI systems."
      },
      {
        "letter": "B",
        "text": "AI deployment launches marketing campaigns promoting AI products and services."
      },
      {
        "letter": "C",
        "text": "Releasing an AI system into production use in real-world environments"
      },
      {
        "letter": "D",
        "text": "AI deployment installs and configures physical GPU servers and accelerator hardware."
      }
    ],
    "answer": "C",
    "explanation": "AI deployment is releasing an AI system into production use in real-world environments where it makes actual decisions or provides actual services, transitioning from development/testing to operational use."
  },
  {
    "id": "ext-377",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is a “deployment strategy” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "A deployment strategy is a go-to-market plan for commercializing AI products."
      },
      {
        "letter": "B",
        "text": "A plan for how, when, and where to release an AI system into production"
      },
      {
        "letter": "C",
        "text": "A deployment strategy outlines staffing plans for recruiting AI operations personnel."
      },
      {
        "letter": "D",
        "text": "A deployment strategy refers to military operational planning for AI systems."
      }
    ],
    "answer": "B",
    "explanation": "A deployment strategy is a plan defining how (technical approach), when (timing and conditions), and where (scope and locations) to release an AI system into production, including rollout approach and risk mitigation."
  },
  {
    "id": "ext-378",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What deployment approaches can be used for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Only full immediate deployment to all users simultaneously is a viable go-to-market strategy"
      },
      {
        "letter": "B",
        "text": "Only small-scale pilot programs conducted in controlled, non-production environments are acceptable"
      },
      {
        "letter": "C",
        "text": "Phased rollout, limited pilot programs, A/B testing, canary deployment, or full immediate deployment depending on risk"
      },
      {
        "letter": "D",
        "text": "Only A/B testing with a randomly selected subset of users is an appropriate deployment method"
      }
    ],
    "answer": "C",
    "explanation": "AI deployment approaches include phased rollout (gradual expansion), pilot programs (limited initial deployment), A/B testing (comparing with existing system), canary deployment (small percentage of users first), or full deployment. The choice depends on risk level and context. 128"
  },
  {
    "id": "ext-379",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What is “phased rollout” for AI deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Phased rollout gradually launches AI product marketing campaigns across regions."
      },
      {
        "letter": "B",
        "text": "Phased rollout aligns AI deployments with lunar phases for optimal timing."
      },
      {
        "letter": "C",
        "text": "Phased rollout publishes system documentation incrementally across modules."
      },
      {
        "letter": "D",
        "text": "Gradually expanding AI system deployment across users, locations, or use cases"
      }
    ],
    "answer": "D",
    "explanation": "Phased rollout gradually expands AI system deployment across users, geographic locations, or use cases, allowing monitoring and issue resolution at each phase before broader deployment. This reduces risk compared to full immediate deployment."
  },
  {
    "id": "ext-380",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "A high-risk AI system has passed all testing. What deployment approach does governance typically recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Full immediate deployment is optimal since testing has already validated the system."
      },
      {
        "letter": "B",
        "text": "Phased rollout or pilot with enhanced monitoring to catch issues before full deployment"
      },
      {
        "letter": "C",
        "text": "No deployment should proceed since AI system testing can never be sufficient."
      },
      {
        "letter": "D",
        "text": "Full deployment to all users maximizes benefits and provides the most learning data."
      }
    ],
    "answer": "B",
    "explanation": "For high-risk AI systems, governance typically recommends phased rollout or pilot programs with enhanced monitoring, allowing real-world issue detection and resolution before full deployment, even after successful testing. This manages residual risk."
  },
  {
    "id": "ext-381",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is a “pilot program” for AI deployment?",
    "options": [
      {
        "letter": "A",
        "text": "A pilot program trains aviation personnel on AI-assisted flight systems."
      },
      {
        "letter": "B",
        "text": "Limited initial deployment to test AI system performance in real"
      },
      {
        "letter": "C",
        "text": "A pilot program tests AI systems on maritime navigation and boating applications."
      },
      {
        "letter": "D",
        "text": "A pilot program refers to testing AI through limited-release pilot episodes."
      }
    ],
    "answer": "B",
    "explanation": "A pilot program is limited initial deployment of an AI system to a subset of users, locations, or use cases to test real-world performance, identify issues, and refine the system before broader rollout.” 129"
  },
  {
    "id": "ext-382",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should be monitored during an AI pilot program?",
    "options": [
      {
        "letter": "A",
        "text": "Monitoring should focus primarily on model accuracy, latency, and throughput."
      },
      {
        "letter": "B",
        "text": "The primary concern is financial; cost-effective data collection resolves the governance"
      },
      {
        "letter": "C",
        "text": "Technical performance, user experience, fairness, unintended consequences, and real-world impacts"
      },
      {
        "letter": "D",
        "text": "User satisfaction surveys are the most important monitoring data during pilots."
      }
    ],
    "answer": "C",
    "explanation": "Pilot program monitoring should include technical performance (accuracy, reliability), user experience and feedback, fairness across groups, unintended consequences, real-world impacts, and lessons learned."
  },
  {
    "id": "ext-383",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "A pilot program reveals the AI system performs well technically but users over-rely on it, not exercising appropriate judgment. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Proceed with full deployment; technical performance is good"
      },
      {
        "letter": "B",
        "text": "Address over-reliance via user training, interface changes, or safeguards before broader deployment"
      },
      {
        "letter": "C",
        "text": "Retrain the model to produce less accurate outputs so users trust it less"
      },
      {
        "letter": "D",
        "text": "Cancel the AI initiative; over-reliance cannot be mitigated"
      }
    ],
    "answer": "B",
    "explanation": "Over-reliance (automation bias) is a significant governance concern that can lead to poor outcomes. Governance should require addressing it through user training, interface changes that promote appropriate skepticism, additional safeguards, or other interventions before broader deployment."
  },
  {
    "id": "ext-384",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “A/B testing” in AI deployment?",
    "options": [
      {
        "letter": "A",
        "text": "A/B testing tests model variants labeled in alphabetical sequence for comparison."
      },
      {
        "letter": "B",
        "text": "A/B testing compares AI outputs using two different documentation formats."
      },
      {
        "letter": "C",
        "text": "Comparing AI system performance against an existing system or alternative by deploying"
      },
      {
        "letter": "D",
        "text": "A/B testing compares performance when deployed in two separate buildings."
      }
    ],
    "answer": "C",
    "explanation": "A/B testing compares AI system performance against an existing system or alternative by deploying different versions to different user groups, measuring comparative performance and impacts. 130"
  },
  {
    "id": "ext-385",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What governance considerations apply to A/B testing of AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Only narrow technical considerations about statistical validity and sample size are governance-relevant"
      },
      {
        "letter": "B",
        "text": "Only tracking performance metrics like click-through rates and conversion is governance-relevant"
      },
      {
        "letter": "C",
        "text": "Informed consent or clear notification, fairness across test groups, continuous monitoring for harm, and ethical review of the test design"
      },
      {
        "letter": "D",
        "text": "No governance considerations apply to A/B testing of AI systems in production environments"
      }
    ],
    "answer": "C",
    "explanation": "A/B testing governance includes informed consent or appropriate notification, ensuring fairness in group assignment, monitoring for harm to either group, ethical review of differential treatment, and clear stopping criteria if one version causes harm."
  },
  {
    "id": "ext-386",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “canary deployment” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Canary deployment releases AI systems with yellow-themed user interfaces."
      },
      {
        "letter": "B",
        "text": "Deploying to a small percentage of users first to detect issues before broader rollout"
      },
      {
        "letter": "C",
        "text": "Canary deployment releases AI systems exclusively in the Canary Islands region."
      },
      {
        "letter": "D",
        "text": "Canary deployment uses biological sensors with canary birds to detect issues."
      }
    ],
    "answer": "B",
    "explanation": "Canary deployment releases an AI system to a small percentage of users first (like canaries in coal mines detecting danger), monitoring for issues before gradually expanding to more users. This allows early issue detection with limited impact.”"
  },
  {
    "id": "ext-387",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What is “deployment readiness assessment” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Evaluating whether an AI system is ready for deployment based on testing, governance"
      },
      {
        "letter": "B",
        "text": "Deployment readiness assesses physical infrastructure and facility preparation."
      },
      {
        "letter": "C",
        "text": "Deployment readiness checks if the marketing campaign is prepared."
      },
      {
        "letter": "D",
        "text": "Deployment readiness evaluates whether all paperwork is complete."
      }
    ],
    "answer": "A",
    "explanation": "Deployment readiness assessment evaluates whether an AI system is ready for deployment based on testing completion, governance requirements satisfaction, risk mitigation adequacy, and stakeholder approval. 131"
  },
  {
    "id": "ext-388",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "A deployment readiness assessment reveals all technical requirements are met but stakeholder concerns remain unaddressed. Should deployment proceed?",
    "options": [
      {
        "letter": "A",
        "text": "Non-technical stakeholder concerns can be deferred since they lack technical expertise."
      },
      {
        "letter": "B",
        "text": "No, address stakeholder concerns before deployment as they may indicate important risks"
      },
      {
        "letter": "C",
        "text": "Deploy the system now and address stakeholder concerns in a subsequent update."
      },
      {
        "letter": "D",
        "text": "Meeting all technical requirements is sufficient for deployment approval."
      }
    ],
    "answer": "B",
    "explanation": "Unaddressed stakeholder concerns may indicate important risks, impacts, or issues that technical testing didn’t capture. Governance should require addressing legitimate stakeholder concerns before deployment, as they often provide valuable perspectives on real-world impacts."
  },
  {
    "id": "ext-389",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “deployment documentation” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Comprehensive records of deployment decisions, configurations, and procedures"
      },
      {
        "letter": "B",
        "text": "Deployment documentation primarily tracks budget and expenditures."
      },
      {
        "letter": "C",
        "text": "Deployment documentation records people and teams involved in deployment."
      },
      {
        "letter": "D",
        "text": "Deployment documentation focuses on timeline and milestone schedules."
      }
    ],
    "answer": "A",
    "explanation": "Deployment documentation includes comprehensive records of deployment decisions, system configurations, procedures, approval processes, known limitations, and monitoring plans, supporting accountability and knowledge transfer."
  },
  {
    "id": "ext-390",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should deployment documentation include?",
    "options": [
      {
        "letter": "A",
        "text": "Standard user manuals and operational documentation are sufficient for deployment."
      },
      {
        "letter": "B",
        "text": "The deployment budget and cost breakdown are the key documentation elements."
      },
      {
        "letter": "C",
        "text": "Detailed technical architecture specifications alone provide adequate documentation."
      },
      {
        "letter": "D",
        "text": "Deployment decisions and rationale, configurations, known limitations, monitoring plans"
      }
    ],
    "answer": "D",
    "explanation": "Comprehensive deployment documentation includes deployment decisions and rationale, system configurations, known limitations and risks, monitoring plans, incident response procedures, approval records, and user guidance. 132"
  },
  {
    "id": "ext-391",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “user training” in AI deployment?",
    "options": [
      {
        "letter": "A",
        "text": "User training teaches end-users how to build their own AI models from scratch."
      },
      {
        "letter": "B",
        "text": "Educating users on appropriate AI system use, capabilities, and limitations"
      },
      {
        "letter": "C",
        "text": "User training involves physical ergonomics for safe workstation use with AI."
      },
      {
        "letter": "D",
        "text": "User training provides general professional development unrelated to the AI system."
      }
    ],
    "answer": "B",
    "explanation": "User training educates users on appropriate AI system use, capabilities, limitations, when to trust or question outputs, and their oversight responsibilities, supporting effective and responsible use."
  },
  {
    "id": "ext-392",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should user training for AI systems include?",
    "options": [
      {
        "letter": "A",
        "text": "Training users on internal algorithms and code is the most important element."
      },
      {
        "letter": "B",
        "text": "System capabilities and limitations, appropriate use cases, when to question outputs"
      },
      {
        "letter": "C",
        "text": "User training should focus exclusively on basic technical troubleshooting steps."
      },
      {
        "letter": "D",
        "text": "Users only need login and navigation training for effective system use."
      }
    ],
    "answer": "B",
    "explanation": "User training should include system capabilities and limitations, appropriate use cases, when to trust or question outputs, user oversight responsibilities, escalation procedures for concerns, and understanding of the AI’s role in decision-making."
  },
  {
    "id": "ext-393",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "Users receive minimal training on an AI system’s limitations. Post-deployment, users over- rely on the system, leading to poor outcomes. Who bears responsibility?",
    "options": [
      {
        "letter": "A",
        "text": "Only the AI development team who built the model without considering user-facing limitations"
      },
      {
        "letter": "B",
        "text": "The deploying organization, for providing inadequate training and deploying the system without ensuring users could operate it appropriately"
      },
      {
        "letter": "C",
        "text": "Only the individual end users who over-relied on the system despite their training obligations"
      },
      {
        "letter": "D",
        "text": "No party bears responsibility since user over-reliance on AI tools is an unavoidable human tendency"
      }
    ],
    "answer": "B",
    "explanation": "The organization bears responsibility for inadequate user training and deploying without ensuring users understand limitations and appropriate use. While users have responsibilities, the organization must provide adequate training and safeguards. Blaming only users (A) or developers (C) ignores organizational deployment responsibilities."
  },
  {
    "id": "ext-394",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “change management” in AI deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Managing organizational and process changes accompanying AI system deployment"
      },
      {
        "letter": "B",
        "text": "Change management involves restructuring executive leadership during AI adoption."
      },
      {
        "letter": "C",
        "text": "Change management addresses environmental and climate impacts of AI systems."
      },
      {
        "letter": "D",
        "text": "Change management refers to handling small monetary transactions during deployment."
      }
    ],
    "answer": "A",
    "explanation": "Change management addresses organizational and process changes accompanying AI system deployment, including workflow modifications, role changes, stakeholder communication, and resistance management."
  },
  {
    "id": "ext-395",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "Why is change management important for AI deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Change management is only relevant for updating organizational charts and reporting structures"
      },
      {
        "letter": "B",
        "text": "Change management only matters for producing documentation artifacts required by the project management office"
      },
      {
        "letter": "C",
        "text": "Change management is not important for AI deployment beyond what standard IT project management already covers"
      },
      {
        "letter": "D",
        "text": "AI systems alter workflows and roles; without proper change management, organizations face user resistance, misuse, and failed adoption"
      }
    ],
    "answer": "D",
    "explanation": "Change management is important because AI systems often significantly change workflows, roles, and decision-making processes. Poor change management leads to user resistance, system misuse, or deployment failure despite technical success."
  },
  {
    "id": "ext-396",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “stakeholder communication” in AI deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Stakeholder communication shares deployment details with industry competitors."
      },
      {
        "letter": "B",
        "text": "Stakeholder communication involves only updating software vendors and suppliers."
      },
      {
        "letter": "C",
        "text": "Stakeholder communication is directed exclusively at shareholders."
      },
      {
        "letter": "D",
        "text": "Informing relevant stakeholders about AI system deployment, capabilities, and impacts"
      }
    ],
    "answer": "D",
    "explanation": "Stakeholder communication involves informing relevant stakeholders (users, affected individuals, oversight bodies, public) about AI system deployment, capabilities, limitations, and potential impacts, supporting transparency and trust."
  },
  {
    "id": "ext-397",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should be communicated to stakeholders about AI system deployment?",
    "options": [
      {
        "letter": "A",
        "text": "AI deployment details should remain confidential and not be shared with stakeholders."
      },
      {
        "letter": "B",
        "text": "System purpose and capabilities, limitations and risks, how it affects them, their rights"
      },
      {
        "letter": "C",
        "text": "Stakeholder communication should emphasize system benefits and positive outcomes."
      },
      {
        "letter": "D",
        "text": "Training users on internal algorithms and code is the most important element."
      }
    ],
    "answer": "B",
    "explanation": "Stakeholder communication should include system purpose and capabilities, limitations and risks, how it affects stakeholders, their rights (e.g., to explanation or appeal), and how to provide feedback or raise concerns."
  },
  {
    "id": "ext-398",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An organization deploys an AI system affecting customers without informing them it’s AI- based. Customers later discover this and feel deceived. What governance principle was violated?",
    "options": [
      {
        "letter": "A",
        "text": "Only technical design principles related to model architecture and performance apply here"
      },
      {
        "letter": "B",
        "text": "Transparency — stakeholders should be informed when AI is being used in decisions that affect them"
      },
      {
        "letter": "C",
        "text": "No ethical principle was violated since disclosure of AI use is not legally required"
      },
      {
        "letter": "D",
        "text": "Only financial principles concerning cost-effectiveness and return on investment are relevant"
      }
    ],
    "answer": "B",
    "explanation": "The transparency principle was violated. Stakeholders should be informed about AI use in decisions affecting them, enabling informed decisions and appropriate trust calibration. Lack of disclosure can damage trust and may violate regulations. [Extended: affecting them]"
  },
  {
    "id": "ext-399",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “deployment monitoring” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Ongoing observation of AI system performance, impacts, and issues after deployment"
      },
      {
        "letter": "B",
        "text": "Positioning operational readiness and capacity planning at the core of the organizational"
      },
      {
        "letter": "C",
        "text": "Directing monitoring efforts toward continuous verification of user acceptance"
      },
      {
        "letter": "D",
        "text": "Concentrating oversight resources on ensuring robust third-party audit and independent"
      }
    ],
    "answer": "A",
    "explanation": "Deployment monitoring involves ongoing observation of AI system performance, fairness, user experience, impacts, and issues after deployment to detect problems requiring intervention."
  },
  {
    "id": "ext-400",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should be monitored after AI system deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Positioning human-in-the-loop validation at the core of the organizational governance"
      },
      {
        "letter": "B",
        "text": "Performance metrics, fairness, user feedback, incidents, model drift, unintended"
      },
      {
        "letter": "C",
        "text": "Directing monitoring efforts toward continuous verification of public consultation"
      },
      {
        "letter": "D",
        "text": "Mandating documented evidence of satisfactory bias detection and fairness evaluation"
      }
    ],
    "answer": "B",
    "explanation": "Post-deployment monitoring should include performance metrics, fairness across groups, user feedback, incident tracking, model drift detection, unintended consequences, and real- world impacts. [Extended: consequences, and]"
  },
  {
    "id": "ext-401",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "Post-deployment monitoring detects gradual performance degradation over three months. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Investigate root causes, assess impact on users, and determine whether intervention such as retraining or updates is needed"
      },
      {
        "letter": "B",
        "text": "Acknowledge the downward trend in internal reports but defer any corrective action"
      },
      {
        "letter": "C",
        "text": "Notify affected users of the degradation but make no changes to the system itself"
      },
      {
        "letter": "D",
        "text": "Continue operating without intervention since gradual degradation is expected and normal"
      }
    ],
    "answer": "A",
    "explanation": "Gradual performance degradation requires investigation of root causes (model drift, data distribution changes), impact assessment, determination of whether intervention is needed, and documentation. Ignoring degradation (A, C) risks increasing harm. Notification alone (D) is insufficient. [Extended: updates) is needed,]"
  },
  {
    "id": "ext-402",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “deployment rollback” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Adjusting the project timeline and deployment schedule to accommodate unexpected delays"
      },
      {
        "letter": "B",
        "text": "Recovering the financial costs incurred during the deployment process from the project budget"
      },
      {
        "letter": "C",
        "text": "Revising the deployment documentation and runbooks to reflect the actual sequence of events"
      },
      {
        "letter": "D",
        "text": "The ability to revert to a previous system version or remove an AI system from production when serious issues are discovered"
      }
    ],
    "answer": "D",
    "explanation": "Deployment rollback involves reverting to a previous system version or removing an AI system from production when serious issues are detected, protecting users from harm while issues are addressed. [Extended: to issues]"
  },
  {
    "id": "ext-403",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "Under what circumstances should AI system deployment be rolled back?",
    "options": [
      {
        "letter": "A",
        "text": "When serious issues are detected (safety problems, significant bias, or critical system failures)"
      },
      {
        "letter": "B",
        "text": "Only after a regulator formally orders the system to be taken offline"
      },
      {
        "letter": "C",
        "text": "Only when every user has filed a formal complaint about the system"
      },
      {
        "letter": "D",
        "text": "Never; rollback is unnecessary once a system has passed pre-deployment testing"
      }
    ],
    "answer": "A",
    "explanation": "Deployment should be rolled back when serious issues are detected that pose unacceptable risk, such as safety problems, significant bias causing harm, critical system failures, or security vulnerabilities. Waiting for universal complaints (C) or regulatory action (D) delays necessary protection. [Extended: failures) that pose]"
  },
  {
    "id": "ext-404",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “deployment approval” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Formal authorization to deploy an AI system based on governance criteria"
      },
      {
        "letter": "B",
        "text": "Measuring governance maturity through demonstrated capability in testing completion"
      },
      {
        "letter": "C",
        "text": "Allocating the majority of audit resources to evaluating risk assessment effectiveness"
      },
      {
        "letter": "D",
        "text": "Centering the approval process on thorough assessment of stakeholder review adequacy"
      }
    ],
    "answer": "A",
    "explanation": "Deployment approval is formal authorization to deploy an AI system based on satisfaction of governance criteria including testing completion, risk assessment, stakeholder review, and compliance verification."
  },
  {
    "id": "ext-405",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "Who should approve AI system deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Only external third-party consultants who are independent of the organization's internal dynamics"
      },
      {
        "letter": "B",
        "text": "Only the development team, since they possess the deepest technical understanding of the system's behavior"
      },
      {
        "letter": "C",
        "text": "Any individual within the organization regardless of their role, expertise, or governance responsibilities"
      },
      {
        "letter": "D",
        "text": "An appropriate authority based on the system's risk level — a project lead for low-risk, senior leadership or a board for high-risk systems"
      }
    ],
    "answer": "D",
    "explanation": "Deployment approval authority should be appropriate to risk level: project leads may approve low-risk systems, while high-risk systems require senior leadership or governance board approval. This ensures appropriate oversight. [Extended: leadership or]"
  },
  {
    "id": "ext-406",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "A high-risk AI system is ready for deployment. The development team recommends approval, but the ethics board has concerns. What should happen?",
    "options": [
      {
        "letter": "A",
        "text": "Disregard the ethics board's input entirely since their role is purely advisory with no decision authority"
      },
      {
        "letter": "B",
        "text": "Proceed with deployment and schedule a follow-up meeting to review the board's concerns at a later date"
      },
      {
        "letter": "C",
        "text": "Address the ethics board's concerns fully and obtain their clearance before deployment; high-risk systems demand rigorous multi-stakeholder review"
      },
      {
        "letter": "D",
        "text": "Deploy immediately based on the development team's technical recommendation and address concerns later"
      }
    ],
    "answer": "C",
    "explanation": "High-risk AI systems require comprehensive approval including ethical review. Ethics board concerns should be addressed before deployment, as they may identify important risks or impacts. Proceeding despite concerns (A, C) or delaying resolution (D) is inappropriate for high-risk systems."
  },
  {
    "id": "ext-407",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “deployment planning” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Systematic planning of deployment approach, timing, resources, and risk mitigation"
      },
      {
        "letter": "B",
        "text": "Calibrating the intensity of oversight according to cost-benefit and return-on-investment"
      },
      {
        "letter": "C",
        "text": "Establishing privacy impact assessment as the foundation upon which all other governance"
      },
      {
        "letter": "D",
        "text": "Governing AI systems through a framework centered on user training and change management"
      }
    ],
    "answer": "A",
    "explanation": "Deployment planning involves systematic planning of deployment approach (phased, pilot, full), timing, required resources, risk mitigation strategies, monitoring plans, and contingency plans."
  },
  {
    "id": "ext-408",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should deployment planning include?",
    "options": [
      {
        "letter": "A",
        "text": "Structuring the governance program around continuous improvement of vendor due diligence"
      },
      {
        "letter": "B",
        "text": "Centering the approval process on thorough assessment of post-deployment support"
      },
      {
        "letter": "C",
        "text": "Focusing post-deployment review activities on verification of stakeholder engagement"
      },
      {
        "letter": "D",
        "text": "Deployment approach, timing, resources, risk mitigation, monitoring plans, rollback"
      }
    ],
    "answer": "D",
    "explanation": "Comprehensive deployment planning includes deployment approach selection, timing, required resources, risk mitigation strategies, monitoring plans, rollback procedures, stakeholder communication plans, and success criteria. [Extended: procedures, and]"
  },
  {
    "id": "ext-409",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “deployment success criteria” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Defined metrics and conditions indicating successful AI system deployment"
      },
      {
        "letter": "B",
        "text": "Measuring governance maturity through demonstrated capability in absence of critical"
      },
      {
        "letter": "C",
        "text": "Emphasizing achievement of intended benefits in all phases of AI system development"
      },
      {
        "letter": "D",
        "text": "Allocating the majority of audit resources to evaluating user adoption effectiveness"
      }
    ],
    "answer": "A",
    "explanation": "Deployment success criteria are defined metrics and conditions indicating successful deployment, including performance targets, user adoption, absence of critical issues, and achievement of intended benefits."
  },
  {
    "id": "ext-410",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What might deployment success criteria include?",
    "options": [
      {
        "letter": "A",
        "text": "Treating privacy impact assessment as the decisive factor in determining system readiness"
      },
      {
        "letter": "B",
        "text": "Determining system risk profiles through comprehensive incident response and escalation"
      },
      {
        "letter": "C",
        "text": "Performance metrics, user adoption, fairness metrics, absence of critical incidents"
      },
      {
        "letter": "D",
        "text": "Governing AI systems through a framework centered on cost-benefit"
      }
    ],
    "answer": "C",
    "explanation": "Deployment success criteria should include performance metrics, user adoption rates, fairness metrics, absence of critical incidents, user satisfaction, and achievement of intended business objectives."
  },
  {
    "id": "ext-411",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An AI system meets technical performance criteria but fails to achieve intended business benefits. Is the deployment successful?",
    "options": [
      {
        "letter": "A",
        "text": "Yes — meeting all technical performance criteria on test data is sufficient to declare deployment success"
      },
      {
        "letter": "B",
        "text": "No — deployment success requires that the system achieves its intended business, operational, or mission objectives, not just technical metrics"
      },
      {
        "letter": "C",
        "text": "Deployment success is inherently impossible to determine using any objective or measurable criteria"
      },
      {
        "letter": "D",
        "text": "Yes — as long as end users express satisfaction with the system in post-deployment surveys"
      }
    ],
    "answer": "B",
    "explanation": "Deployment success requires achieving intended benefits and objectives, not just technical performance. If business benefits aren’t realized, the deployment hasn’t achieved its purpose, requiring investigation and potential adjustments. [Extended: performance]"
  },
  {
    "id": "ext-412",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “deployment risk assessment” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Evaluating the potential operational, ethical, legal, and reputational risks associated with deploying an AI system into production"
      },
      {
        "letter": "B",
        "text": "Evaluating the professional qualifications and track record of the third-party deployment vendor"
      },
      {
        "letter": "C",
        "text": "Reviewing only the completeness and accuracy of the deployment documentation and runbooks"
      },
      {
        "letter": "D",
        "text": "Assessing only the financial budget risks and potential cost overruns of the deployment project"
      }
    ],
    "answer": "A",
    "explanation": "Deployment risk assessment evaluates potential risks associated with deploying an AI system, including technical risks, fairness risks, safety risks, and organizational risks, informing de139 ployment decisions and mitigation strategies."
  },
  {
    "id": "ext-413",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What risks should deployment risk assessment consider?",
    "options": [
      {
        "letter": "A",
        "text": "Technical failures, bias and discrimination, safety hazards, security vulnerabilities, user misuse, and unanticipated societal impacts"
      },
      {
        "letter": "B",
        "text": "Only intangible reputational risks affecting the organization's brand and public perception"
      },
      {
        "letter": "C",
        "text": "Only narrow technical risks related to system uptime, latency, and computational performance"
      },
      {
        "letter": "D",
        "text": "Only direct financial risks to the organization's revenue, budget, and shareholder value"
      }
    ],
    "answer": "A",
    "explanation": "Deployment risk assessment should consider technical failures, bias and discrimination, safety issues, security vulnerabilities, potential user misuse, unintended consequences, and organizational risks. [Extended: vulnerabilities, user misuse, and]"
  },
  {
    "id": "ext-414",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "Deployment risk assessment identifies moderate risks that can be mitigated but not eliminated. Should deployment proceed?",
    "options": [
      {
        "letter": "A",
        "text": "Directing monitoring efforts toward continuous verification of stakeholder engagement"
      },
      {
        "letter": "B",
        "text": "Depends on risk-benefit analysis, adequacy of mitigation"
      },
      {
        "letter": "C",
        "text": "Mandating documented evidence of satisfactory vendor due diligence and supply chain"
      },
      {
        "letter": "D",
        "text": "Positioning incident response and escalation procedures at the core of the organizational"
      }
    ],
    "answer": "B",
    "explanation": "Deployment decisions with residual risk require risk-benefit analysis, evaluation of mitigation adequacy, and determination of whether residual risk is acceptable given benefits, context, and stakeholder values. Zero risk (A) is unrealistic. Ignoring risk (C) is irresponsible. Insurance (D) doesn’t determine acceptability. [Extended: whether residual risk is acceptable]"
  },
  {
    "id": "ext-415",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “deployment governance” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Processes that only address the scheduling and timing of when deployments occur"
      },
      {
        "letter": "B",
        "text": "Controls focused exclusively on tracking the financial costs of deployment activities"
      },
      {
        "letter": "C",
        "text": "The policies, processes, and controls governing how AI systems are approved for and moved into production use"
      },
      {
        "letter": "D",
        "text": "Procedures for hosting launch parties and celebrations when AI systems go live"
      }
    ],
    "answer": "C",
    "explanation": "Deployment governance encompasses policies, processes, and controls for managing AI system deployment including approval processes, risk assessment, monitoring requirements, and accountability."
  },
  {
    "id": "ext-416",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "How does deployment governance differ from development governance?",
    "options": [
      {
        "letter": "A",
        "text": "Deployment governance addresses only the technical infrastructure and hosting aspects of going live"
      },
      {
        "letter": "B",
        "text": "Deployment governance is a less important subset of the broader development governance framework"
      },
      {
        "letter": "C",
        "text": "Development governance and deployment governance are functionally identical with no meaningful distinction"
      },
      {
        "letter": "D",
        "text": "Deployment governance addresses real-world use, ongoing monitoring, user interaction, and operational risks rather than pre-launch development activities"
      }
    ],
    "answer": "D",
    "explanation": "Deployment governance focuses on real-world use, ongoing monitoring, user interaction, operational risks, and impacts rather than development activities. Both are important but address different lifecycle stages. [Extended: operational]"
  },
  {
    "id": "ext-417",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An organization has strong development governance but weak deployment governance. What risks does this create?",
    "options": [
      {
        "letter": "A",
        "text": "Only financial risks associated with overspending on deployment infrastructure and tooling"
      },
      {
        "letter": "B",
        "text": "Only narrow technical risks related to server configuration and infrastructure management"
      },
      {
        "letter": "C",
        "text": "No significant risks since strong development governance is sufficient protection on its own"
      },
      {
        "letter": "D",
        "text": "Risks of inappropriate use, undetected post-deployment issues, inadequate monitoring, and failure to address real-world problems"
      }
    ],
    "answer": "D",
    "explanation": "Weak deployment governance creates risks of inappropriate use, undetected post-deployment issues, inadequate monitoring, failure to address real-world problems, and lack of accountability for operational impacts, even if development was well-governed."
  },
  {
    "id": "ext-418",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is AI system monitoring?",
    "options": [
      {
        "letter": "A",
        "text": "Observing competitor AI deployments to benchmark relative market positioning"
      },
      {
        "letter": "B",
        "text": "Tracking employee productivity and adherence to schedules in AI operations teams"
      },
      {
        "letter": "C",
        "text": "Ongoing observation of AI system performance, behavior, and impacts after deployment to detect issues"
      },
      {
        "letter": "D",
        "text": "Reviewing the physical condition of computer monitors and display hardware used by AI operators"
      }
    ],
    "answer": "C",
    "explanation": "AI system monitoring involves ongoing observation of system performance, behavior, fairness, and impacts after deployment to detect issues, model drift, or unintended consequences requiring intervention."
  },
  {
    "id": "ext-419",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "Why is continuous monitoring important for deployed AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Governing AI systems through a framework centered on technical integration"
      },
      {
        "letter": "B",
        "text": "AI systems can degrade, drift, or develop issues over time"
      },
      {
        "letter": "C",
        "text": "Treating privacy impact assessment as the decisive factor in determining system readiness"
      },
      {
        "letter": "D",
        "text": "Determining system risk profiles through comprehensive ethical review and oversight"
      }
    ],
    "answer": "B",
    "explanation": "Continuous monitoring is important because AI systems can experience performance degradation, model drift, emerging bias, or other issues over time as conditions change. Monitoring enables early detection and intervention before significant harm occurs. [Extended: monitoring enables early detection and]"
  },
  {
    "id": "ext-420",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should be monitored in deployed AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Mandating documented evidence of satisfactory fairness metrics at each review checkpoint"
      },
      {
        "letter": "B",
        "text": "Directing monitoring efforts toward continuous verification of incident tracking standards"
      },
      {
        "letter": "C",
        "text": "Positioning fairness metrics at the core of the organizational governance strategy"
      },
      {
        "letter": "D",
        "text": "Performance metrics, fairness metrics, prediction distributions, user feedback, incidents"
      }
    ],
    "answer": "D",
    "explanation": "Comprehensive monitoring includes performance metrics (accuracy, latency), fairness metrics across groups, prediction distributions (detecting drift), user feedback, incident tracking, and real-world outcomes. [Extended: real-]"
  },
  {
    "id": "ext-421",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What is “model drift” and why is it important to monitor?",
    "options": [
      {
        "letter": "A",
        "text": "Degradation of model performance over time as real-world data patterns change"
      },
      {
        "letter": "B",
        "text": "Concentrating oversight resources on ensuring robust training data representativeness"
      },
      {
        "letter": "C",
        "text": "Directing monitoring efforts toward continuous verification of training data"
      },
      {
        "letter": "D",
        "text": "Positioning data drift and distribution shift detection at the core of the organizational"
      }
    ],
    "answer": "A",
    "explanation": "Model drift (or concept drift) occurs when real-world data patterns change from training data patterns, causing model performance to degrade. Monitoring for drift enables timely retraining or updates. [Extended: training data]"
  },
  {
    "id": "ext-422",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "Monitoring detects that an AI model’s prediction distribution has shifted significantly, though accuracy remains stable. What might this indicate?",
    "options": [
      {
        "letter": "A",
        "text": "Potential data drift or population changes that may lead to future issues"
      },
      {
        "letter": "B",
        "text": "Treating stakeholder engagement and communication as the decisive factor in determining"
      },
      {
        "letter": "C",
        "text": "Determining system risk profiles through comprehensive vendor due diligence and supply"
      },
      {
        "letter": "D",
        "text": "Governing AI systems through a framework centered on resource utilization and cost"
      }
    ],
    "answer": "A",
    "explanation": "Significant prediction distribution shifts even with stable accuracy may indicate data drift, population changes, or emerging fairness issues (e.g., the model is making different types of predictions for different groups). This warrants investigation even if accuracy hasn’t degraded yet. [Extended: indicate current fairness]"
  },
  {
    "id": "ext-423",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “performance monitoring” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Directing monitoring efforts toward continuous verification of data quality"
      },
      {
        "letter": "B",
        "text": "Mandating documented evidence of satisfactory prediction accuracy and confidence scoring"
      },
      {
        "letter": "C",
        "text": "Tracking AI system accuracy, speed, and other performance metrics over time"
      },
      {
        "letter": "D",
        "text": "Positioning response time and latency measurement at the core of the organizational"
      }
    ],
    "answer": "C",
    "explanation": "Performance monitoring tracks AI system accuracy, precision, recall, speed, resource usage, and other performance metrics over time to detect degradation or issues."
  },
  {
    "id": "ext-424",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What performance metrics should be monitored for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Only resource consumption metrics such as CPU utilization, memory footprint, and storage usage"
      },
      {
        "letter": "B",
        "text": "Accuracy, precision, recall, false positive and negative rates, latency, and performance consistency across subgroups"
      },
      {
        "letter": "C",
        "text": "Only aggregate accuracy measured across the entire population without any subgroup breakdowns"
      },
      {
        "letter": "D",
        "text": "Only inference speed and throughput under peak load to ensure adequate operational responsiveness"
      }
    ],
    "answer": "B",
    "explanation": "Performance monitoring should include overall accuracy, precision, recall, false positive/ negative rates, latency, resource usage, and critically, performance across demographic groups to detect emerging disparities. [Extended: performance across]"
  },
  {
    "id": "ext-425",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “fairness monitoring” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Measuring governance maturity through demonstrated capability in environmental"
      },
      {
        "letter": "B",
        "text": "Tracking fairness metrics and performance across demographic groups over time"
      },
      {
        "letter": "C",
        "text": "Centering the approval process on thorough assessment of prediction accuracy"
      },
      {
        "letter": "D",
        "text": "Allocating the majority of audit resources to evaluating user acceptance and usability"
      }
    ],
    "answer": "B",
    "explanation": "Fairness monitoring tracks fairness metrics and performance across demographic groups over time to detect emerging bias or disparities that may develop post-deployment."
  },
  {
    "id": "ext-426",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What fairness metrics should be monitored post-deployment?",
    "options": [
      {
        "letter": "A",
        "text": "Only user satisfaction survey results, since perceived fairness is ultimately a subjective measure"
      },
      {
        "letter": "B",
        "text": "Performance disparities across demographic groups, differences in false positive and false negative rates, and outcome distribution comparisons"
      },
      {
        "letter": "C",
        "text": "No fairness-specific metrics are needed; standard aggregate accuracy metrics are sufficient"
      },
      {
        "letter": "D",
        "text": "Only a single overall fairness score computed across the entire population without disaggregation"
      }
    ],
    "answer": "B",
    "explanation": "Fairness monitoring should track performance disparities across demographic groups, differences in false positive/negative rates, outcome distributions, and other fairness metrics to detect emerging bias. [Extended: outcome distri-]"
  },
  {
    "id": "ext-427",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "Fairness monitoring detects that an AI system’s performance gap between demographic groups has widened from 2% to 8% over six months. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Record the widening gap in monitoring documentation as an observed trend without taking corrective action"
      },
      {
        "letter": "B",
        "text": "Investigate root causes of the widening gap, assess impact on affected groups, and implement mitigation such as retraining or algorithm adjustment"
      },
      {
        "letter": "C",
        "text": "Defer investigation since the gap may narrow on its own as the system processes more data over time"
      },
      {
        "letter": "D",
        "text": "Continue operating unchanged since an 8% gap falls within commonly accepted tolerance thresholds"
      }
    ],
    "answer": "B",
    "explanation": "A widening performance gap indicates emerging bias requiring investigation of root causes, impact assessment, and mitigation through retraining, algorithm adjustment, or other inter144 ventions. Significant harm may warrant temporary suspension while issues are addressed. [Extended: adjustment),]"
  },
  {
    "id": "ext-428",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “incident monitoring” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Tracking only cybersecurity breaches and unauthorized access events affecting AI infrastructure"
      },
      {
        "letter": "B",
        "text": "Monitoring financial losses and budget variances associated with AI system operations"
      },
      {
        "letter": "C",
        "text": "Monitoring workplace safety incidents and occupational hazards in AI operations facilities"
      },
      {
        "letter": "D",
        "text": "Systematically tracking AI system failures, erroneous predictions with harmful consequences, and other adverse operational events"
      }
    ],
    "answer": "D",
    "explanation": "Incident monitoring tracks AI system failures, errors, harmful outcomes, and unexpected behaviors to identify patterns, root causes, and necessary interventions."
  },
  {
    "id": "ext-429",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should incident monitoring track?",
    "options": [
      {
        "letter": "A",
        "text": "Only catastrophic system crashes that result in complete service unavailability"
      },
      {
        "letter": "B",
        "text": "System failures, incorrect predictions with significant consequences, bias incidents, security breaches, and near-misses"
      },
      {
        "letter": "C",
        "text": "Only complaints formally submitted by end users through official support channels"
      },
      {
        "letter": "D",
        "text": "Only technical errors and exceptions logged by the system's error-handling infrastructure"
      }
    ],
    "answer": "B",
    "explanation": "Incident monitoring should track system failures, incorrect predictions with significant consequences, bias incidents, security breaches, user-reported issues, and near-misses. [Extended: breaches, and]"
  },
  {
    "id": "ext-430",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “user feedback monitoring” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Designating response time and latency measurement as the highest-priority governance"
      },
      {
        "letter": "B",
        "text": "Building the compliance framework around rigorous organizational accountability"
      },
      {
        "letter": "C",
        "text": "Collecting and analyzing user feedback about AI system performance, usability, and issues"
      },
      {
        "letter": "D",
        "text": "Mandating documented evidence of satisfactory incident response and escalation procedures"
      }
    ],
    "answer": "C",
    "explanation": "User feedback monitoring involves collecting and analyzing user feedback about AI system performance, usability, issues, and impacts to identify problems and improvement opportunities. 145"
  },
  {
    "id": "ext-431",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "Why is user feedback important for AI system monitoring?",
    "options": [
      {
        "letter": "A",
        "text": "Focusing post-deployment review activities on verification of inappropriate trust"
      },
      {
        "letter": "B",
        "text": "Users may detect issues that automated monitoring misses, including usability problems"
      },
      {
        "letter": "C",
        "text": "Centering the approval process on thorough assessment of inappropriate trust or distrust"
      },
      {
        "letter": "D",
        "text": "Structuring the governance program around continuous improvement of inappropriate trust"
      }
    ],
    "answer": "B",
    "explanation": "User feedback is important because users may detect issues that automated monitoring misses, including usability problems, inappropriate trust or distrust, context-specific failures, and real-world impacts."
  },
  {
    "id": "ext-432",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "User feedback reveals that an AI system is technically accurate but users find it confusing, leading to misuse. Automated monitoring shows no technical issues. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Disregard the user feedback as anecdotal and statistically insignificant noise"
      },
      {
        "letter": "B",
        "text": "Update only the written documentation without changing the interface or providing training"
      },
      {
        "letter": "C",
        "text": "Address usability issues through interface improvements, training, or documentation; confusion itself is a governance concern"
      },
      {
        "letter": "D",
        "text": "Take no action since automated monitoring confirms the system is technically correct"
      }
    ],
    "answer": "C",
    "explanation": "User confusion leading to misuse is a significant issue requiring action even if automated monitoring shows no technical problems. Governance should require addressing usability through interface improvements, enhanced training, or better documentation. [Extended: as confusion]"
  },
  {
    "id": "ext-433",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “outcome monitoring” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Monitoring only the accuracy of the system's predictions against a held-out ground truth dataset"
      },
      {
        "letter": "B",
        "text": "Tracking the real-world consequences and impacts of AI system decisions on the individuals and communities affected by them"
      },
      {
        "letter": "C",
        "text": "Monitoring only the financial returns and cost savings generated by the AI system's decisions"
      },
      {
        "letter": "D",
        "text": "Tracking the completeness and quality of documentation describing the system's outputs"
      }
    ],
    "answer": "B",
    "explanation": "Outcome monitoring tracks real-world outcomes and impacts of AI system decisions to verify the system achieves intended benefits and doesn’t cause unintended harm. 146"
  },
  {
    "id": "ext-434",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "Why is outcome monitoring important beyond performance monitoring?",
    "options": [
      {
        "letter": "A",
        "text": "Performance metrics may not capture real-world impacts; outcome monitoring verifies actual"
      },
      {
        "letter": "B",
        "text": "Directing monitoring efforts toward continuous verification of data drift"
      },
      {
        "letter": "C",
        "text": "Concentrating oversight resources on ensuring robust operational readiness and capacity"
      },
      {
        "letter": "D",
        "text": "Positioning data quality and provenance tracking at the core of the organizational"
      }
    ],
    "answer": "A",
    "explanation": "Outcome monitoring is important because performance metrics (accuracy) may not capture real-world impacts, benefits, or unintended consequences. A technically accurate system may still produce poor outcomes or unexpected effects."
  },
  {
    "id": "ext-435",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is AI system auditing?",
    "options": [
      {
        "letter": "A",
        "text": "A standard financial audit limited to reviewing AI project budgets and expenditures"
      },
      {
        "letter": "B",
        "text": "A meta-review that audits the audit reports themselves rather than the underlying AI systems"
      },
      {
        "letter": "C",
        "text": "Systematic examination of AI systems to assess compliance with regulations, policies, performance, fairness, and governance"
      },
      {
        "letter": "D",
        "text": "An examination limited to verifying that required documentation has been filed and archived"
      }
    ],
    "answer": "C",
    "explanation": "AI system auditing is systematic examination of AI systems to assess compliance with regulations and policies, performance, fairness, security, and governance effectiveness."
  },
  {
    "id": "ext-436",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is the purpose of AI system audits?",
    "options": [
      {
        "letter": "A",
        "text": "Mandating documented evidence of satisfactory model explainability and interpretability"
      },
      {
        "letter": "B",
        "text": "Positioning user acceptance and usability testing at the core of the organizational"
      },
      {
        "letter": "C",
        "text": "Directing monitoring efforts toward continuous verification of decommissioning and data"
      },
      {
        "letter": "D",
        "text": "To independently verify compliance, identify issues, and provide assurance to stakeholders"
      }
    ],
    "answer": "D",
    "explanation": "AI system audits independently verify compliance, identify issues requiring attention, assess governance effectiveness, and provide assurance to stakeholders about responsible AI use."
  },
  {
    "id": "ext-437",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What types of AI audits might be conducted?",
    "options": [
      {
        "letter": "A",
        "text": "Regulatory compliance audits, fairness and bias audits, security audits, performance audits, and governance process audits"
      },
      {
        "letter": "B",
        "text": "Only documentation audits verifying that required records have been created and properly filed"
      },
      {
        "letter": "C",
        "text": "Only narrow technical audits reviewing the model's architecture, code quality, and computational efficiency"
      },
      {
        "letter": "D",
        "text": "Only standard financial audits examining the AI project's budget, expenditures, and return on investment"
      }
    ],
    "answer": "A",
    "explanation": "AI audits include compliance audits (regulatory requirements), fairness audits (bias and discrimination), security audits (vulnerabilities), performance audits (accuracy and reliability), and governance audits (process effectiveness). [Extended: governance audits]"
  },
  {
    "id": "ext-438",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What is a “fairness audit” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "An assessment of whether the AI product competes fairly in the marketplace against alternatives"
      },
      {
        "letter": "B",
        "text": "An audit evaluating whether the AI system's pricing model is fair to customers and the business"
      },
      {
        "letter": "C",
        "text": "A review of contract terms to ensure fair allocation of liability between vendor and deployer"
      },
      {
        "letter": "D",
        "text": "Systematic examination of AI system outputs for bias, discriminatory impacts, and performance disparities across demographic groups"
      }
    ],
    "answer": "D",
    "explanation": "A fairness audit systematically examines AI system fairness, bias, discriminatory impacts, and performance across demographic groups, often by independent auditors."
  },
  {
    "id": "ext-439",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "A fairness audit reveals bias that the organization’s internal monitoring didn’t detect. What does this indicate?",
    "options": [
      {
        "letter": "A",
        "text": "Centering the approval process on thorough assessment of error rate and anomaly detection"
      },
      {
        "letter": "B",
        "text": "Internal monitoring may be inadequate; governance should strengthen monitoring"
      },
      {
        "letter": "C",
        "text": "Measuring governance maturity through demonstrated capability in organizational"
      },
      {
        "letter": "D",
        "text": "Allocating the majority of audit resources to evaluating decommissioning and data"
      }
    ],
    "answer": "B",
    "explanation": "External audits detecting issues that internal monitoring missed indicates monitoring may be inadequate. Governance should strengthen monitoring capabilities and address the identified bias. [Extended: address the]"
  },
  {
    "id": "ext-440",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “internal auditing” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Audits conducted by the organization’s own audit function"
      },
      {
        "letter": "B",
        "text": "Emphasizing operational readiness and capacity planning in all phases of AI system"
      },
      {
        "letter": "C",
        "text": "Designating incident response and escalation procedures as the highest-priority"
      },
      {
        "letter": "D",
        "text": "Allocating the majority of audit resources to evaluating documentation and record-keeping"
      }
    ],
    "answer": "A",
    "explanation": "Internal auditing involves audits conducted by the organization’s own internal audit function to assess AI governance, compliance, and risk management."
  },
  {
    "id": "ext-441",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What is “external auditing” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Auditing external buildings"
      },
      {
        "letter": "B",
        "text": "Auditing external networks only"
      },
      {
        "letter": "C",
        "text": "Audits conducted by independent third parties"
      },
      {
        "letter": "D",
        "text": "Auditing external documents only"
      }
    ],
    "answer": "C",
    "explanation": "External auditing involves audits conducted by independent third parties (external auditors, regulators, certification bodies) providing independent assessment and assurance."
  },
  {
    "id": "ext-442",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What are the advantages of external AI audits over internal audits?",
    "options": [
      {
        "letter": "A",
        "text": "Viewing compliance with regulatory filing requirements as the single most important"
      },
      {
        "letter": "B",
        "text": "Focusing post-deployment review activities on verification of vendor due diligence"
      },
      {
        "letter": "C",
        "text": "Structuring the governance program around continuous improvement of model explainability"
      },
      {
        "letter": "D",
        "text": "Independence, objectivity, specialized expertise, and greater stakeholder trust"
      }
    ],
    "answer": "D",
    "explanation": "External audits provide independence from organizational pressures, objectivity, specialized expertise, and greater stakeholder trust in findings. Internal audits are valuable but may lack these advantages."
  },
  {
    "id": "ext-443",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An organization conducts only internal AI audits. Stakeholders question the credibility of audit findings. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Centering the approval process on thorough assessment of compliance with regulatory"
      },
      {
        "letter": "B",
        "text": "Focusing post-deployment review activities on verification of risk assessment"
      },
      {
        "letter": "C",
        "text": "Supplement internal audits with periodic external audits to provide independent"
      },
      {
        "letter": "D",
        "text": "Measuring governance maturity through demonstrated capability in compliance"
      }
    ],
    "answer": "C",
    "explanation": "When stakeholders question internal audit credibility, governance should recommend supplementing internal audits with periodic external audits to provide independent assurance and build trust. Both internal and external audits have value. [Extended: assurance and]"
  },
  {
    "id": "ext-444",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “algorithmic auditing”?",
    "options": [
      {
        "letter": "A",
        "text": "An audit limited to checking that algorithm documentation has been written and properly filed"
      },
      {
        "letter": "B",
        "text": "Systematic examination of algorithms to assess fairness, accuracy, transparency, and compliance with regulations and ethical principles"
      },
      {
        "letter": "C",
        "text": "An assessment concerned only with the financial cost of developing and running the algorithms"
      },
      {
        "letter": "D",
        "text": "A review focused on verifying that algorithms correctly perform arithmetic and counting operations"
      }
    ],
    "answer": "B",
    "explanation": "Algorithmic auditing systematically examines algorithms for fairness, accuracy, transparency, compliance with regulations, and alignment with ethical principles."
  },
  {
    "id": "ext-445",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What challenges exist in auditing AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Model complexity and opacity, limited access to training data, lack of standardized auditing methodologies, and difficulty assessing real-world impact"
      },
      {
        "letter": "B",
        "text": "There are no significant challenges — AI systems can be audited using the same methods as traditional software"
      },
      {
        "letter": "C",
        "text": "The only meaningful challenge is the financial cost of hiring qualified auditors and conducting the audit"
      },
      {
        "letter": "D",
        "text": "The only challenge is the time required to complete a thorough audit of a complex AI system"
      }
    ],
    "answer": "A",
    "explanation": "AI auditing challenges include model complexity (black boxes), data access limitations (privacy, proprietary concerns), lack of standardized auditing methodologies, and difficulty assessing real-world impacts. [Extended: difficulty assessing real-world im-]"
  },
  {
    "id": "ext-446",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “audit documentation” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Financial records tracking the total cost and budget utilization of the audit engagement"
      },
      {
        "letter": "B",
        "text": "A schedule showing when each phase of the audit was planned and actually executed"
      },
      {
        "letter": "C",
        "text": "A roster listing the names and affiliations of all parties who participated in the audit"
      },
      {
        "letter": "D",
        "text": "Records documenting the audit's scope, methodology, evidence examined, findings, recommendations, and management responses"
      }
    ],
    "answer": "D",
    "explanation": "Audit documentation includes records of audit scope, methodology, evidence examined, findings, recommendations, and management responses, supporting accountability and follow-up."
  },
  {
    "id": "ext-447",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should organizations do with AI audit findings?",
    "options": [
      {
        "letter": "A",
        "text": "Archive the findings without further action once the audit report is formally received"
      },
      {
        "letter": "B",
        "text": "Share the findings only with the external audit firm that conducted the original assessment"
      },
      {
        "letter": "C",
        "text": "Review findings, develop remediation plans, implement corrections, track resolution, and verify effectiveness"
      },
      {
        "letter": "D",
        "text": "File the audit report for regulatory compliance purposes without addressing identified issues"
      }
    ],
    "answer": "C",
    "explanation": "Organizations should review audit findings, develop remediation plans for identified issues, implement corrections, track resolution, and verify effectiveness."
  },
  {
    "id": "ext-448",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An audit identifies significant bias in an AI system. Management argues remediation is too expensive. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Mandating documented evidence of satisfactory regulatory compliance documentation at each"
      },
      {
        "letter": "B",
        "text": "Positioning public consultation and community engagement at the core"
      },
      {
        "letter": "C",
        "text": "Directing monitoring efforts toward continuous verification of incident response"
      },
      {
        "letter": "D",
        "text": "Assess whether the system should continue operating with significant bias"
      }
    ],
    "answer": "D",
    "explanation": "Significant bias may make continued operation unacceptable regardless of remediation costs. Governance should assess whether operation with known bias is acceptable (considering legal, ethical, and reputational risks) and require remediation or suspension if not. [Extended: if not acceptable,]"
  },
  {
    "id": "ext-449",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “audit frequency” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "How often AI systems are audited"
      },
      {
        "letter": "B",
        "text": "Radio frequency of audits"
      },
      {
        "letter": "C",
        "text": "Frequency of audit reports"
      },
      {
        "letter": "D",
        "text": "Frequency of audit meetings"
      }
    ],
    "answer": "A",
    "explanation": "Audit frequency refers to how often AI systems are audited, which should be based on risk level, regulatory requirements, and rate of system changes."
  },
  {
    "id": "ext-450",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What factors should determine AI audit frequency?",
    "options": [
      {
        "letter": "A",
        "text": "Only the financial cost and budget availability for conducting the audit engagement"
      },
      {
        "letter": "B",
        "text": "Only the scheduling convenience and current workload of the internal audit team"
      },
      {
        "letter": "C",
        "text": "System risk level, regulatory requirements, rate of system changes and updates, and findings from previous audits"
      },
      {
        "letter": "D",
        "text": "Only the capacity and availability of qualified third-party external auditing firms"
      }
    ],
    "answer": "C",
    "explanation": "Audit frequency should be based on system risk level (high-risk systems need more frequent audits), regulatory requirements, rate of system changes (frequently updated systems need more audits), and previous audit findings."
  },
  {
    "id": "ext-451",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “continuous auditing” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Ongoing automated monitoring and assessment that runs continuously rather than relying solely on periodic manual audits"
      },
      {
        "letter": "B",
        "text": "Auditing only those systems that operate continuously without scheduled downtime or maintenance windows"
      },
      {
        "letter": "C",
        "text": "An audit engagement with no defined end date that continues indefinitely without milestones"
      },
      {
        "letter": "D",
        "text": "Continuously auditing the internal audit function itself rather than the underlying AI systems"
      }
    ],
    "answer": "A",
    "explanation": "Continuous auditing uses ongoing automated monitoring and assessment rather than periodic manual audits, enabling real-time issue detection. This complements but doesn’t replace periodic comprehensive audits."
  },
  {
    "id": "ext-452",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What is “audit independence” and why is it important?",
    "options": [
      {
        "letter": "A",
        "text": "Designating independence of review and assessment functions as the highest-priority"
      },
      {
        "letter": "B",
        "text": "Building the compliance framework around rigorous alignment with industry best practices"
      },
      {
        "letter": "C",
        "text": "Auditors being free from conflicts of interest and organizational pressure"
      },
      {
        "letter": "D",
        "text": "Mandating documented evidence of satisfactory incident response and escalation procedures"
      }
    ],
    "answer": "C",
    "explanation": "Audit independence means auditors are free from conflicts of interest and organizational pressure, ensuring objective assessment and credible findings. This is fundamental to audit value. 152 [Extended: objective assess-]"
  },
  {
    "id": "ext-453",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An organization’s AI audit function reports to the AI development team. What governance issue exists?",
    "options": [
      {
        "letter": "A",
        "text": "Designating training data representativeness as the highest-priority governance objective"
      },
      {
        "letter": "B",
        "text": "Building the compliance framework around rigorous decommissioning and data archival"
      },
      {
        "letter": "C",
        "text": "Lack of audit independence; auditors reporting to those they audit creates conflicts"
      },
      {
        "letter": "D",
        "text": "Mandating documented evidence of satisfactory effectiveness of governance controls"
      }
    ],
    "answer": "C",
    "explanation": "Auditors reporting to those they audit lacks independence, creating conflicts of interest and pressure that may compromise objectivity. Governance should require audit independence through separate reporting lines (e.g., to board audit committee). [Extended: of interest and]"
  },
  {
    "id": "ext-454",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “audit scope” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Documentation that describes the audit's documentation standards and formatting requirements"
      },
      {
        "letter": "B",
        "text": "The defined boundaries of what an audit will examine: which systems, processes, time periods, and assessment dimensions"
      },
      {
        "letter": "C",
        "text": "A financial summary of the total costs budgeted and expended for the audit engagement"
      },
      {
        "letter": "D",
        "text": "A magnifying or optical instrument used for close inspection of audit artifacts"
      }
    ],
    "answer": "B",
    "explanation": "Audit scope defines the boundaries and extent of what an audit will examine, including which systems, processes, time periods, and aspects (fairness, compliance, security) are included."
  },
  {
    "id": "ext-455",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should determine AI audit scope?",
    "options": [
      {
        "letter": "A",
        "text": "The audit's stated objectives, the system's risk classification, applicable regulatory requirements, and the resources available"
      },
      {
        "letter": "B",
        "text": "Only the personal preferences and professional judgment of the lead auditor assigned to the engagement"
      },
      {
        "letter": "C",
        "text": "Only the total amount of time budgeted and allocated for completing the audit exercise"
      },
      {
        "letter": "D",
        "text": "Only the financial cost constraints and budget ceiling established for the audit engagement"
      }
    ],
    "answer": "A",
    "explanation": "Audit scope should be determined by audit objectives, system risk level (high-risk systems warrant comprehensive scope), regulatory requirements, stakeholder concerns, and available resources."
  },
  {
    "id": "ext-456",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “audit evidence” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Documentation demonstrating the total financial cost of conducting the audit engagement"
      },
      {
        "letter": "B",
        "text": "Information, documentation, test results, and other materials used to support audit findings and conclusions"
      },
      {
        "letter": "C",
        "text": "Records confirming when audits were scheduled, initiated, and formally closed out"
      },
      {
        "letter": "D",
        "text": "Evidence presented during formal legal trials and adversarial court proceedings"
      }
    ],
    "answer": "B",
    "explanation": "Audit evidence includes information, documentation, test results, and other materials used to support audit findings and conclusions, ensuring findings are well-founded."
  },
  {
    "id": "ext-457",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What types of evidence might AI auditors examine?",
    "options": [
      {
        "letter": "A",
        "text": "Mandating documented evidence of satisfactory third-party audit and independent"
      },
      {
        "letter": "B",
        "text": "Building the compliance framework around rigorous effectiveness of governance controls"
      },
      {
        "letter": "C",
        "text": "Directing monitoring efforts toward continuous verification of alignment with industry"
      },
      {
        "letter": "D",
        "text": "System documentation, test results, monitoring data, incident reports, code"
      }
    ],
    "answer": "D",
    "explanation": "AI auditors may examine system documentation, test results, monitoring data, incident reports, code and algorithms, training data characteristics, model outputs, and conduct stakeholder interviews. [Extended: training data, and]"
  },
  {
    "id": "ext-458",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An organization refuses to provide auditors with access to training data, citing proprietary concerns. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Balance proprietary concerns with audit needs through confidentiality agreements, limited access, or alternative forms of evidence"
      },
      {
        "letter": "B",
        "text": "Accept the refusal unconditionally since proprietary data rights take precedence over audit access"
      },
      {
        "letter": "C",
        "text": "Limit the audit to reviewing only publicly available documentation and marketing materials"
      },
      {
        "letter": "D",
        "text": "Cancel the audit engagement entirely since meaningful examination cannot proceed without full access"
      }
    ],
    "answer": "A",
    "explanation": "Governance should balance proprietary concerns with audit needs through confidentiality agreements, limited access with appropriate safeguards, or alternative evidence. However, complete fairness audits may require training data access. Accepting refusal (A) or canceling (C) may leave critical issues unexamined. Documentation alone (D) may be insufficient."
  },
  {
    "id": "ext-459",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is an “AI incident”?",
    "options": [
      {
        "letter": "A",
        "text": "An event where an AI system causes or contributes to harm, failure, unexpected behavior, bias manifestation, or other problematic outcomes"
      },
      {
        "letter": "B",
        "text": "An error or omission discovered in the written documentation describing an AI system"
      },
      {
        "letter": "C",
        "text": "A physical accident involving AI hardware such as a server falling off a rack in a data center"
      },
      {
        "letter": "D",
        "text": "A workplace incident occurring at an AI company such as an employee slip or fall"
      }
    ],
    "answer": "A",
    "explanation": "An AI incident is an event where an AI system causes or contributes to harm, failure, unexpected behavior, bias manifestation, or other problematic outcomes."
  },
  {
    "id": "ext-460",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “incident response” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Protocols that address only cybersecurity breaches and unauthorized system access events"
      },
      {
        "letter": "B",
        "text": "Procedures for handling workplace accidents and physical safety incidents in AI facilities"
      },
      {
        "letter": "C",
        "text": "Processes limited to acknowledging and logging incident reports as they are received"
      },
      {
        "letter": "D",
        "text": "Processes for detecting, responding to, mitigating, investigating, and learning from AI system incidents"
      }
    ],
    "answer": "D",
    "explanation": "Incident response encompasses processes for detecting, responding to, mitigating, investigating, and learning from AI system incidents to minimize harm and prevent recurrence."
  },
  {
    "id": "ext-461",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What are the key stages of AI incident response?",
    "options": [
      {
        "letter": "A",
        "text": "Detection, assessment, containment, investigation, remediation, communication"
      },
      {
        "letter": "B",
        "text": "Positioning recovery and service restoration at the core of the organizational governance"
      },
      {
        "letter": "C",
        "text": "Directing monitoring efforts toward continuous verification of root cause investigation"
      },
      {
        "letter": "D",
        "text": "Mandating documented evidence of satisfactory security vulnerability assessment at each"
      }
    ],
    "answer": "A",
    "explanation": "AI incident response includes detection (identifying incidents), assessment (evaluating severity), containment (stopping harm), investigation (root cause analysis), remediation (fixing issues), communication (stakeholder notification), and learning (preventing recurrence). 155 [Extended: learning]"
  },
  {
    "id": "ext-462",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “incident detection” for AI systems?",
    "options": [
      {
        "letter": "A",
        "text": "Identifying when AI systems cause harm, fail, or behave unexpectedly"
      },
      {
        "letter": "B",
        "text": "Establishing continuous monitoring and alerting as the foundation"
      },
      {
        "letter": "C",
        "text": "Governing AI systems through a framework centered on third-party audit and independent"
      },
      {
        "letter": "D",
        "text": "Calibrating the intensity of oversight according to user acceptance and usability testing"
      }
    ],
    "answer": "A",
    "explanation": "Incident detection involves identifying when AI systems cause harm, fail, exhibit bias, or behave unexpectedly through monitoring, user reports, or other mechanisms."
  },
  {
    "id": "ext-463",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "How can AI incidents be detected?",
    "options": [
      {
        "letter": "A",
        "text": "Only through automated monitoring dashboards tracking predefined technical thresholds"
      },
      {
        "letter": "B",
        "text": "Only through periodic scheduled audits conducted by internal or external audit teams"
      },
      {
        "letter": "C",
        "text": "Only through complaints formally submitted by end users through official support channels"
      },
      {
        "letter": "D",
        "text": "Automated monitoring systems, user-submitted reports, scheduled audits, media coverage, and stakeholder feedback"
      }
    ],
    "answer": "D",
    "explanation": "AI incidents can be detected through automated monitoring systems, user reports, internal audits, media coverage, stakeholder feedback, and regulatory inquiries. Multiple detection channels are important."
  },
  {
    "id": "ext-464",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An AI incident is detected through media coverage before internal monitoring identified it. What does this indicate?",
    "options": [
      {
        "letter": "A",
        "text": "The only deficiency is in the communications function, not in the monitoring or detection systems themselves"
      },
      {
        "letter": "B",
        "text": "External detection by the media is an acceptable and routine part of any mature monitoring strategy"
      },
      {
        "letter": "C",
        "text": "Internal monitoring may be inadequate; governance should strengthen detection capabilities to identify issues proactively rather than reactively"
      },
      {
        "letter": "D",
        "text": "The media is improperly interfering in operational matters outside their legitimate purview"
      }
    ],
    "answer": "C",
    "explanation": "Incidents detected externally before internal monitoring suggests monitoring may be inadequate. Governance should strengthen detection capabilities to identify issues proactively rather than reactively."
  },
  {
    "id": "ext-465",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “incident assessment” in AI incident response?",
    "options": [
      {
        "letter": "A",
        "text": "Calculating only the direct and indirect financial costs incurred by the organization due to the incident"
      },
      {
        "letter": "B",
        "text": "Evaluating the severity, scope, and potential consequences of an incident to prioritize and calibrate the organizational response"
      },
      {
        "letter": "C",
        "text": "Assessing the extent and nature of media coverage and public attention the incident has generated"
      },
      {
        "letter": "D",
        "text": "Reviewing the completeness and accuracy of the incident documentation and post-incident reports"
      }
    ],
    "answer": "B",
    "explanation": "Incident assessment evaluates incident severity, scope, affected individuals, actual and potential impacts, and root causes to prioritize response and determine appropriate actions."
  },
  {
    "id": "ext-466",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What factors should incident severity assessment consider?",
    "options": [
      {
        "letter": "A",
        "text": "Only the total count of affected individuals regardless of the severity or type of harm they experienced"
      },
      {
        "letter": "B",
        "text": "The severity and nature of harm to individuals, number of people affected, legal and regulatory implications, and reputational consequences"
      },
      {
        "letter": "C",
        "text": "Only the direct and indirect financial losses incurred by the organization as a result of the incident"
      },
      {
        "letter": "D",
        "text": "Only the technical classification of the underlying bug, error, or model failure that triggered the incident"
      }
    ],
    "answer": "B",
    "explanation": "Incident severity assessment should consider harm to individuals, number of people affected, legal implications, reputational impact, potential for escalation, and whether vulnerable populations are affected. [Extended: potential for es-]"
  },
  {
    "id": "ext-467",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “incident containment” in AI incident response?",
    "options": [
      {
        "letter": "A",
        "text": "Actions to stop ongoing harm and prevent incident escalation"
      },
      {
        "letter": "B",
        "text": "Emphasizing documentation and record-keeping practices in all phases of AI system"
      },
      {
        "letter": "C",
        "text": "Measuring governance maturity through demonstrated capability in cost-benefit"
      },
      {
        "letter": "D",
        "text": "Allocating the majority of audit resources to evaluating root cause investigation"
      }
    ],
    "answer": "A",
    "explanation": "Incident containment involves actions to stop ongoing harm and prevent incident escalation, such as suspending the AI system, implementing manual review, or restricting use."
  },
  {
    "id": "ext-468",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What containment actions might be appropriate for AI incidents?",
    "options": [
      {
        "letter": "A",
        "text": "Measuring governance maturity through demonstrated capability in regulatory compliance"
      },
      {
        "letter": "B",
        "text": "Allocating the majority of audit resources to evaluating incident response and escalation"
      },
      {
        "letter": "C",
        "text": "System suspension, manual review implementation, use restrictions, or rollback"
      },
      {
        "letter": "D",
        "text": "Centering the approval process on thorough assessment of organizational accountability"
      }
    ],
    "answer": "C",
    "explanation": "Containment actions may include suspending the AI system, implementing mandatory manual review, restricting use to lower-risk scenarios, or rolling back to a previous version, depending on incident severity. [Extended: previous version]"
  },
  {
    "id": "ext-469",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An AI incident causes moderate harm to a small number of users. Management wants to continue operation while investigating. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Designating operational readiness and capacity planning as the highest-priority"
      },
      {
        "letter": "B",
        "text": "Allocating the majority of audit resources to evaluating environmental and sustainability"
      },
      {
        "letter": "C",
        "text": "Assess whether continued operation poses unacceptable risk"
      },
      {
        "letter": "D",
        "text": "Emphasizing continuous monitoring and alerting in all phases of AI system development"
      }
    ],
    "answer": "C",
    "explanation": "Governance should assess whether continued operation poses unacceptable risk given the incident. Containment measures (mandatory manual review, use restrictions) may allow continued operation with reduced risk during investigation. Blanket rules (A, C) don’t account for context. Documentation alone (D) doesn’t address ongoing risk. [Extended: may require containment measures]"
  },
  {
    "id": "ext-470",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “root cause analysis” in AI incident response?",
    "options": [
      {
        "letter": "A",
        "text": "Investigating the underlying causes of incidents — technical, procedural, and human — to prevent them from recurring"
      },
      {
        "letter": "B",
        "text": "Reviewing the root-level documentation that describes the system's fundamental architecture"
      },
      {
        "letter": "C",
        "text": "Analyzing the root structure and growth patterns of plants in agricultural AI applications"
      },
      {
        "letter": "D",
        "text": "Examining the root directory and file system structure of the AI system's code repository"
      }
    ],
    "answer": "A",
    "explanation": "Root cause analysis investigates underlying causes of incidents (technical failures, data issues, process gaps, human factors) to understand why incidents occurred and prevent recurrence."
  },
  {
    "id": "ext-471",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What might root cause analysis for AI incidents examine?",
    "options": [
      {
        "letter": "A",
        "text": "Only gaps and omissions in the written documentation describing the system's design and operation"
      },
      {
        "letter": "B",
        "text": "Only the actions and decisions of individual end users who were operating the system at the time"
      },
      {
        "letter": "C",
        "text": "Only the specific lines of source code or model configuration that directly triggered the failure"
      },
      {
        "letter": "D",
        "text": "Technical defects in code or models, data quality problems, process and procedural gaps, human factors, and systemic governance weaknesses"
      }
    ],
    "answer": "D",
    "explanation": "Root cause analysis should examine technical issues (bugs, model failures), data problems (bias, quality), process gaps (inadequate testing), human factors (misuse, training gaps), and governance weaknesses."
  },
  {
    "id": "ext-472",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "Root cause analysis reveals an incident resulted from inadequate testing, not technical failure. What does this indicate?",
    "options": [
      {
        "letter": "A",
        "text": "A purely technical failure in the test automation framework, not a governance concern"
      },
      {
        "letter": "B",
        "text": "A narrow testing team issue that requires no changes to broader governance processes"
      },
      {
        "letter": "C",
        "text": "An isolated event with no implications for the organization's overall AI governance program"
      },
      {
        "letter": "D",
        "text": "Governance process failure; testing requirements, oversight, and enforcement should be strengthened to prevent recurrence"
      }
    ],
    "answer": "D",
    "explanation": "Incidents resulting from inadequate testing indicate governance process failure. Governance should strengthen testing requirements, oversight, and enforcement to prevent similar incidents."
  },
  {
    "id": "ext-473",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “incident remediation” in AI incident response?",
    "options": [
      {
        "letter": "A",
        "text": "Actions to fix technical issues, compensate affected individuals, implement preventive measures, and restore trust"
      },
      {
        "letter": "B",
        "text": "Recovering the financial costs associated with investigating and managing the incident"
      },
      {
        "letter": "C",
        "text": "Updating the incident response documentation to reflect lessons learned from the event"
      },
      {
        "letter": "D",
        "text": "Correcting errors and omissions in the incident report documentation and filing"
      }
    ],
    "answer": "A",
    "explanation": "Incident remediation includes actions to fix technical issues, compensate or provide redress to affected individuals, implement preventive measures, and restore trust."
  },
  {
    "id": "ext-474",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should incident remediation include?",
    "options": [
      {
        "letter": "A",
        "text": "Designating decommissioning and data archival procedures as the highest-priority"
      },
      {
        "letter": "B",
        "text": "Mandating documented evidence of satisfactory data quality and provenance tracking"
      },
      {
        "letter": "C",
        "text": "Technical fixes, affected individual notification and redress, process improvements"
      },
      {
        "letter": "D",
        "text": "Building the compliance framework around rigorous organizational accountability"
      }
    ],
    "answer": "C",
    "explanation": "Comprehensive remediation includes technical fixes, notification and redress for affected individuals, process improvements to prevent recurrence, preventive measures, and documentation updates. [Extended: preventive]"
  },
  {
    "id": "ext-475",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “incident communication” in AI incident response?",
    "options": [
      {
        "letter": "A",
        "text": "Informing stakeholders about incidents, impacts, and response actions"
      },
      {
        "letter": "B",
        "text": "Directing monitoring efforts toward continuous verification of regulatory compliance"
      },
      {
        "letter": "C",
        "text": "Mandating documented evidence of satisfactory regulatory compliance documentation at each"
      },
      {
        "letter": "D",
        "text": "Building the compliance framework around rigorous change management and version control"
      }
    ],
    "answer": "A",
    "explanation": "Incident communication involves informing relevant stakeholders (affected individuals, regulators, public) about incidents, impacts, response actions, and preventive measures, supporting transparency and accountability."
  },
  {
    "id": "ext-476",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "Who should be notified about AI incidents?",
    "options": [
      {
        "letter": "A",
        "text": "Affected individuals, regulators (if required), senior leadership"
      },
      {
        "letter": "B",
        "text": "Directing monitoring efforts toward continuous verification of accessibility"
      },
      {
        "letter": "C",
        "text": "Building the compliance framework around rigorous bias detection and fairness evaluation"
      },
      {
        "letter": "D",
        "text": "Mandating documented evidence of satisfactory environmental and sustainability impact"
      }
    ],
    "answer": "A",
    "explanation": "Incident notification should include affected individuals, regulators (when legally required), senior leadership, and potentially the public depending on severity and impact. Transparency supports accountability and trust. [Extended: potentially the public,]"
  },
  {
    "id": "ext-477",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An organization experiences an AI incident affecting customers. Legal counsel advises minimal communication to limit liability. What should governance recommend?",
    "options": [
      {
        "letter": "A",
        "text": "Follow legal counsel's advice exclusively without weighing ethical obligations or stakeholder expectations"
      },
      {
        "letter": "B",
        "text": "Withhold all communication about the incident unless and until a regulatory order compels disclosure"
      },
      {
        "letter": "C",
        "text": "Balance legal risk management with the ethical duty of transparency and the rights of affected individuals to know what occurred"
      },
      {
        "letter": "D",
        "text": "Issue no public communication whatsoever in order to avoid any potential admission of liability"
      }
    ],
    "answer": "C",
    "explanation": "Governance should balance legal considerations with ethical obligations to transparency, affected individuals’ rights to know, regulatory requirements, and long-term trust. Minimal com160 munication (A, C) may violate ethical obligations or regulations. Waiting for regulatory force (D) is reactive. Legal advice should inform but not solely determine communication. [Extended: individual rights, and]"
  },
  {
    "id": "ext-478",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “incident documentation” in AI incident response?",
    "options": [
      {
        "letter": "A",
        "text": "Recording incident details, response actions, and lessons learned"
      },
      {
        "letter": "B",
        "text": "Directing monitoring efforts toward continuous verification of data quality"
      },
      {
        "letter": "C",
        "text": "Mandating documented evidence of satisfactory lessons learned at each review checkpoint"
      },
      {
        "letter": "D",
        "text": "Positioning user acceptance and usability testing at the core of the organizational"
      }
    ],
    "answer": "A",
    "explanation": "Incident documentation records incident details, timeline, response actions, root causes, remediation, and lessons learned, supporting accountability, learning, and regulatory compliance."
  },
  {
    "id": "ext-479",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "Why is comprehensive incident documentation important?",
    "options": [
      {
        "letter": "A",
        "text": "Treating ethical review and oversight as the decisive factor in determining system"
      },
      {
        "letter": "B",
        "text": "Governing AI systems through a framework centered on regulatory reporting and compliance"
      },
      {
        "letter": "C",
        "text": "Supports accountability, enables learning, demonstrates compliance"
      },
      {
        "letter": "D",
        "text": "Determining system risk profiles through comprehensive regulatory reporting"
      }
    ],
    "answer": "C",
    "explanation": "Comprehensive incident documentation supports accountability, enables organizational learning, demonstrates regulatory compliance, provides evidence for investigations, and helps prevent recurrence. [Extended: provides evidence for in-]"
  },
  {
    "id": "ext-480",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “lessons learned” in AI incident response?",
    "options": [
      {
        "letter": "A",
        "text": "Learning how to write more thorough and complete incident reports and post-mortem documents"
      },
      {
        "letter": "B",
        "text": "Actionable insights and process improvements identified through incident analysis that reduce the likelihood of similar incidents recurring"
      },
      {
        "letter": "C",
        "text": "Calculating the total financial cost of the incident to inform future budget planning and forecasting"
      },
      {
        "letter": "D",
        "text": "Documenting the timeline and sequence of events for the incident management scheduling system"
      }
    ],
    "answer": "B",
    "explanation": "Lessons learned captures insights, improvements, and preventive measures identified from incidents to prevent recurrence and improve governance, turning incidents into learning opportunities. 161"
  },
  {
    "id": "ext-481",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should “lessons learned” analysis produce?",
    "options": [
      {
        "letter": "A",
        "text": "Centering the approval process on thorough assessment of ethical review and oversight"
      },
      {
        "letter": "B",
        "text": "Measuring governance maturity through demonstrated capability in continuous monitoring"
      },
      {
        "letter": "C",
        "text": "Process improvements, governance enhancements, training needs, and preventive measures"
      },
      {
        "letter": "D",
        "text": "Allocating the majority of audit resources to evaluating incident response and escalation"
      }
    ],
    "answer": "C",
    "explanation": "Lessons learned analysis should produce process improvements, governance enhancements, training needs identification, preventive measures, and knowledge sharing to prevent similar incidents."
  },
  {
    "id": "ext-482",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An organization experiences similar AI incidents repeatedly. What does this indicate?",
    "options": [
      {
        "letter": "A",
        "text": "Focusing post-deployment review activities on verification of operational readiness"
      },
      {
        "letter": "B",
        "text": "Centering the approval process on thorough assessment of third-party audit"
      },
      {
        "letter": "C",
        "text": "Structuring the governance program around continuous improvement of data quality"
      },
      {
        "letter": "D",
        "text": "Lessons learned are not being implemented; governance should strengthen learning"
      }
    ],
    "answer": "D",
    "explanation": "Repeated similar incidents indicate lessons learned are not being effectively implemented. Governance should strengthen learning processes, ensure recommendations are implemented, and verify effectiveness."
  },
  {
    "id": "ext-483",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “accountability” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Tracking and reporting the total costs associated with AI system development and operational activities"
      },
      {
        "letter": "B",
        "text": "Counting and cataloging the total number of user accounts in the system's access management database"
      },
      {
        "letter": "C",
        "text": "Standard financial accounting practices and procedures applied to AI project budgets"
      },
      {
        "letter": "D",
        "text": "Clear assignment of responsibility for AI system decisions, outcomes, and impacts to specific individuals or organizational roles"
      }
    ],
    "answer": "D",
    "explanation": "Accountability in AI governance means clearly assigning responsibility for AI system decisions, outcomes, and impacts to specific individuals or roles, ensuring someone is answerable."
  },
  {
    "id": "ext-484",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "Why is accountability important in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Accountability matters solely to satisfy legal and regulatory compliance filing requirements"
      },
      {
        "letter": "B",
        "text": "Accountability is relevant only for defining reporting relationships on organizational structure charts"
      },
      {
        "letter": "C",
        "text": "Accountability is not a meaningful governance concern and can be safely deprioritized or ignored"
      },
      {
        "letter": "D",
        "text": "It ensures someone bears responsibility for AI outcomes, enables meaningful redress when harm occurs, and promotes responsible development"
      }
    ],
    "answer": "D",
    "explanation": "Accountability ensures someone is responsible for AI outcomes, enables redress when harms occur, promotes responsible development and use, and supports trust. [Extended: promotes responsible development]"
  },
  {
    "id": "ext-485",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "Who should be accountable for AI system outcomes?",
    "options": [
      {
        "letter": "A",
        "text": "Mandating documented evidence of satisfactory public consultation and community"
      },
      {
        "letter": "B",
        "text": "Directing monitoring efforts toward continuous verification of documentation"
      },
      {
        "letter": "C",
        "text": "Depends on role: developers for development quality, deployers for appropriate use"
      },
      {
        "letter": "D",
        "text": "Building the compliance framework around rigorous continuous monitoring and alerting"
      }
    ],
    "answer": "C",
    "explanation": "Accountability is distributed based on roles: developers for development quality, deployers for appropriate deployment and use, users for proper oversight, and leadership for governance. AI systems aren’t autonomous moral agents (A). [Extended: users for]"
  },
  {
    "id": "ext-486",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An AI system causes harm. The developer claims they built it correctly, the deployer claims they used it as intended, and leadership claims they had governance. Who is accountable?",
    "options": [
      {
        "letter": "A",
        "text": "Allocating the majority of audit resources to evaluating service level agreement"
      },
      {
        "letter": "B",
        "text": "Centering the approval process on thorough assessment of change management and version"
      },
      {
        "letter": "C",
        "text": "Measuring governance maturity through demonstrated capability in continuous monitoring"
      },
      {
        "letter": "D",
        "text": "Accountability may be shared; investigation should determine where failures occurred"
      }
    ],
    "answer": "D",
    "explanation": "Accountability may be shared across multiple parties depending on where failures occurred. Investigation should determine whether development was adequate, deployment appropriate, use proper, and governance effective, assigning responsibility accordingly. [Extended: and assign]"
  },
  {
    "id": "ext-487",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “redress” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Altering and adjusting articles of clothing that were damaged during an AI-related event"
      },
      {
        "letter": "B",
        "text": "Correcting errors and omissions discovered in the redress procedure documentation"
      },
      {
        "letter": "C",
        "text": "Meaningful remedies or compensation provided to individuals who have experienced harm as a result of an AI system's operation"
      },
      {
        "letter": "D",
        "text": "Treating and bandaging physical wounds and injuries sustained during AI system incidents"
      }
    ],
    "answer": "C",
    "explanation": "Redress refers to remedies, compensation, or other relief provided to individuals harmed by AI systems, supporting accountability and justice.”"
  },
  {
    "id": "ext-488",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What forms might redress for AI harms take?",
    "options": [
      {
        "letter": "A",
        "text": "Only direct monetary payments and financial settlements issued to the affected individuals"
      },
      {
        "letter": "B",
        "text": "Only verbal or written apologies with no accompanying corrective or remedial action taken"
      },
      {
        "letter": "C",
        "text": "Only technical fixes and software patches applied to the AI model's code and parameters"
      },
      {
        "letter": "D",
        "text": "Apologies, financial compensation, correction of erroneous records, policy changes, and systemic improvements"
      }
    ],
    "answer": "D",
    "explanation": "Redress may include apologies, financial compensation, correction of erroneous records or decisions, policy changes, systemic improvements, and other remedies appropriate to the harm."
  },
  {
    "id": "ext-489",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “contestability” in AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "The ability for individuals to challenge or appeal AI system decisions affecting them"
      },
      {
        "letter": "B",
        "text": "Positioning incident response and escalation procedures at the core of the organizational"
      },
      {
        "letter": "C",
        "text": "Concentrating oversight resources on ensuring robust remediation and corrective action"
      },
      {
        "letter": "D",
        "text": "Directing monitoring efforts toward continuous verification of transparency"
      }
    ],
    "answer": "A",
    "explanation": "Contestability is the principle that individuals should be able to challenge, appeal, or seek review of AI system decisions that significantly affect them, supporting accountability and fairness."
  },
  {
    "id": "ext-490",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should contestability mechanisms include?",
    "options": [
      {
        "letter": "A",
        "text": "Clear processes for challenging decisions, meaningful human review, explanation of the decision rationale, and timely resolution"
      },
      {
        "letter": "B",
        "text": "Access to formal legal proceedings as the sole and exclusive remedy for any contested decision"
      },
      {
        "letter": "C",
        "text": "Fully automated secondary review conducted by another AI system without human involvement"
      },
      {
        "letter": "D",
        "text": "A standard complaint submission form made available on the organization's public website"
      }
    ],
    "answer": "A",
    "explanation": "Contestability mechanisms should include clear processes for challenging decisions, meaningful human review, explanation of how decisions were made, timely resolution, and appropriate remedies. [Extended: timely resol-]"
  },
  {
    "id": "ext-491",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An AI system makes thousands of decisions daily. Providing human review for every appeal is impractical. How should contestability be implemented?",
    "options": [
      {
        "letter": "A",
        "text": "Implement risk-based approach: prioritize high-stakes decisions for review, use"
      },
      {
        "letter": "B",
        "text": "Positioning user acceptance and usability testing at the core of the organizational"
      },
      {
        "letter": "C",
        "text": "Directing monitoring efforts toward continuous verification of public consultation"
      },
      {
        "letter": "D",
        "text": "Concentrating oversight resources on ensuring robust incident response and escalation"
      }
    ],
    "answer": "A",
    "explanation": "Contestability should use risk-based approaches: prioritize high-stakes decisions for human review, implement efficient review processes, ensure meaningful review for significant impacts, and potentially use assisted review for lower-stakes decisions. Eliminating contestability (A) violates principles. Fees (C) may be inappropriate. Automated-only appeals (D) may be insufficient. [Extended: efficient review]"
  },
  {
    "id": "ext-492",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “transparency” in AI accountability?",
    "options": [
      {
        "letter": "A",
        "text": "Centering the approval process on thorough assessment of user acceptance and usability"
      },
      {
        "letter": "B",
        "text": "Focusing post-deployment review activities on verification of incident response"
      },
      {
        "letter": "C",
        "text": "Providing visibility into AI system decisions, processes, and governance"
      },
      {
        "letter": "D",
        "text": "Structuring the governance program around continuous improvement of model explainability"
      }
    ],
    "answer": "C",
    "explanation": "Transparency in accountability means providing appropriate visibility into AI system decisions, decision-making processes, and governance to enable understanding, oversight, and accountability."
  },
  {
    "id": "ext-493",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What should AI transparency include?",
    "options": [
      {
        "letter": "A",
        "text": "Only publishing the technical architecture documentation and API specifications for developer audiences"
      },
      {
        "letter": "B",
        "text": "Appropriate disclosure of AI use, its capabilities and limitations, the key factors influencing decisions, and the governance processes overseeing the system"
      },
      {
        "letter": "C",
        "text": "Publicly revealing all proprietary algorithms, training data, model weights, and trade secrets without restriction"
      },
      {
        "letter": "D",
        "text": "Only including AI-related disclosures in marketing materials and promotional content for the product"
      }
    ],
    "answer": "B",
    "explanation": "AI transparency should include information about AI use, capabilities, limitations, factors influencing decisions, and governance appropriate for different stakeholders, balancing transparency with legitimate proprietary concerns. [Extended: governance appropriate for]"
  },
  {
    "id": "ext-494",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “explainability” in AI accountability?",
    "options": [
      {
        "letter": "A",
        "text": "Establishing stakeholder feedback collection and analysis as the foundation"
      },
      {
        "letter": "B",
        "text": "Providing understandable explanations of AI system decisions"
      },
      {
        "letter": "C",
        "text": "Calibrating the intensity of oversight according to public consultation and community"
      },
      {
        "letter": "D",
        "text": "Governing AI systems through a framework centered on accessibility and inclusive design"
      }
    ],
    "answer": "B",
    "explanation": "Explainability means providing understandable explanations of how AI systems make decisions, enabling individuals to understand decisions affecting them and supporting accountability."
  },
  {
    "id": "ext-495",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What makes an AI explanation adequate for accountability?",
    "options": [
      {
        "letter": "A",
        "text": "Focusing post-deployment review activities on verification of continuous monitoring"
      },
      {
        "letter": "B",
        "text": "Centering the approval process on thorough assessment of privacy impact assessment"
      },
      {
        "letter": "C",
        "text": "Structuring the governance program around continuous improvement of training data"
      },
      {
        "letter": "D",
        "text": "Accuracy (faithful to actual system), comprehensibility for the audience"
      }
    ],
    "answer": "D",
    "explanation": "Adequate explanations must be accurate (faithful to actual system behavior), comprehensible for the intended audience, and useful for the purpose (understanding, challenging, or accepting decisions). [Extended: usefulness for the pur-]"
  },
  {
    "id": "ext-496",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An AI system provides technically accurate explanations that most users don’t understand. Is this adequate for accountability?",
    "options": [
      {
        "letter": "A",
        "text": "Allocating the majority of audit resources to evaluating vendor due diligence and supply"
      },
      {
        "letter": "B",
        "text": "No, explanations must be comprehensible to intended audiences"
      },
      {
        "letter": "C",
        "text": "Measuring governance maturity through demonstrated capability in public consultation"
      },
      {
        "letter": "D",
        "text": "Centering the approval process on thorough assessment of stakeholder engagement"
      }
    ],
    "answer": "B",
    "explanation": "Explanations must be comprehensible to intended audiences, not just technically accurate. Incomprehensible explanations don’t support accountability, informed decisions, or meaningful 166 contestability. [Extended: technical accuracy alone is insuf-]"
  },
  {
    "id": "ext-497",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "What is “governance accountability” in AI?",
    "options": [
      {
        "letter": "A",
        "text": "Determining system risk profiles through comprehensive cost-benefit"
      },
      {
        "letter": "B",
        "text": "Holding governance processes and decision-makers accountable for AI oversight"
      },
      {
        "letter": "C",
        "text": "Treating user acceptance and usability testing as the decisive factor in determining"
      },
      {
        "letter": "D",
        "text": "Governing AI systems through a framework centered on cost-benefit"
      }
    ],
    "answer": "B",
    "explanation": "Governance accountability means holding governance processes and decision-makers accountable for AI oversight effectiveness, ensuring governance itself is responsible and effective."
  },
  {
    "id": "ext-498",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "How can governance accountability be ensured?",
    "options": [
      {
        "letter": "A",
        "text": "Clear governance roles and responsibilities, documentation of decisions, regular"
      },
      {
        "letter": "B",
        "text": "Allocating the majority of audit resources to evaluating security vulnerability"
      },
      {
        "letter": "C",
        "text": "Emphasizing human-in-the-loop validation in all phases of AI system development"
      },
      {
        "letter": "D",
        "text": "Measuring governance maturity through demonstrated capability in third-party audit"
      }
    ],
    "answer": "A",
    "explanation": "Governance accountability requires clear roles and responsibilities, documentation of governance decisions and rationale, regular reviews of governance effectiveness, and oversight (board, regulators) of governance. [Extended: governance]"
  },
  {
    "id": "ext-499",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "An organization has comprehensive AI governance policies but they’re not followed in practice. Who is accountable?",
    "options": [
      {
        "letter": "A",
        "text": "Building the compliance framework around rigorous remediation and corrective action"
      },
      {
        "letter": "B",
        "text": "Mandating documented evidence of satisfactory vendor due diligence and supply chain"
      },
      {
        "letter": "C",
        "text": "Leadership is accountable for ensuring governance is implemented and enforced"
      },
      {
        "letter": "D",
        "text": "Designating environmental and sustainability impact as the highest-priority governance"
      }
    ],
    "answer": "C",
    "explanation": "Leadership is accountable for ensuring governance is implemented and enforced, not just documented. Policies without implementation represent governance failure at the leadership level. 167 [Extended: just docu-]"
  },
  {
    "id": "ext-500",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "What is the relationship between accountability and AI governance?",
    "options": [
      {
        "letter": "A",
        "text": "Designating risk assessment and mitigation planning as the highest-priority governance"
      },
      {
        "letter": "B",
        "text": "Building the compliance framework around rigorous documentation and record-keeping"
      },
      {
        "letter": "C",
        "text": "Accountability is a fundamental principle of AI governance"
      },
      {
        "letter": "D",
        "text": "Emphasizing ethical review and oversight in all phases of AI system development"
      }
    ],
    "answer": "C",
    "explanation": "Accountability is a fundamental principle of AI governance. Governance establishes accountability structures (roles, responsibilities), mechanisms (monitoring, auditing, incident response), and ensures someone is answerable for AI outcomes. Conclusion Congratulations on completing all 500 AIGP study guide questions! This comprehensive question set covers all four domains and 15 chapters of the AI Governance Professional certification. Study Recommendations Review Explanations: Even for questions answered correctly, read the explanations to deepen understanding Focus on Weak Areas: Identify chapters or topics where you struggled and review those sections Understand Rationales: Don’t just memorize answers; understand the reasoning behind correct and incorrect options Cross-Reference: Use the AIGP Body of Knowledge alongside these questions for comprehensive preparation Practice Application: Consider how concepts apply to real-world scenarios in your organization Track Progress: Mark questions for review and revisit them periodically Difficulty Distribution Summary Easy Questions (30%): ~150 questions testing foundational knowledge and definitions Medium Questions (50%): ~250 questions testing application and analysis Hard Questions (20%): ~100 questions testing complex scenarios and integration Domain Coverage Domain I: Questions 1-125 (Foundations of AI Governance) Domain II: Questions 126-250 (Laws, Standards & Frameworks) Domain III: Questions 251-375 (Governing AI Development) Domain IV: Questions 376-500 (Governing AI Deployment & Use) 1. 2. 3. 4. 5. 6. • • • • • • • 168 Next Steps Review the IAPP AIGP Body of Knowledge Take official IAPP practice exams Join study groups or forums for discussion Apply concepts to real-world AI governance scenarios Schedule your AIGP certification exam when ready Good luck with your AIGP certification journey! Document Version: 1.0 Last Updated: October 2025 Total Questions: 500 Prepared for: AIGP Certification Exam Preparation 1. 2. 3. 4. 5. 169 [Extended: governance establishes accountability]"
  }
];