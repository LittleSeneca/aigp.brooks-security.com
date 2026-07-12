// AIGP Quiz Questions — 742 total
const ALL_QUESTIONS = [
  {
    "id": "q-1",
    "area": "ch1",
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
    "explanation": "Both systems perform a single, highly focused task — recommending music or filtering junk mail — which is the defining trait of narrow (weak) AI. Every AI system in production today is narrow AI; general intelligence remains theoretical, and an agent would need to perceive an environment and take autonomous action toward goals."
  },
  {
    "id": "q-2",
    "area": "ch1",
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
    "explanation": "The perceive-decide-act loop is the signature of an AI agent: it senses its environment through inputs and autonomously takes actions to achieve defined goals. Expert systems apply hand-coded rules without environmental interaction, and generative models produce content rather than take actions."
  },
  {
    "id": "q-3",
    "area": "ch1",
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
    "explanation": "Purpose limitation prevents silently repurposing data collected for order fulfillment into AI training for marketing. The company must establish a lawful basis for the new, incompatible purpose — in practice, obtaining explicit consent for the analytics use. Checkout consent covered the original purpose only, and a quiet policy update is not a lawful basis."
  },
  {
    "id": "q-4",
    "area": "ch1",
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
    "explanation": "Training on data where each example carries a known correct label (tumor / no tumor) is supervised learning — the model learns to map inputs to labeled outputs. Unsupervised learning finds structure in unlabeled data, and reinforcement learning improves behavior through reward signals rather than labels."
  },
  {
    "id": "q-5",
    "area": "ch1",
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
    "explanation": "Consequential financial decisions about individuals — pricing, credit, coverage — carry bias as their primary harm: the model may systematically disadvantage protected demographics through learned proxies. Non-discrimination laws such as fair lending and insurance regulation make this both an ethical and a legal exposure."
  },
  {
    "id": "q-6",
    "area": "ch1",
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
    "explanation": "Human-in-the-loop review places a person between the model's recommendation and the consequential decision, allowing unfair or anomalous outputs to be caught before they affect applicants. Encryption protects confidentiality, and more data or bigger models may improve accuracy but provide no direct fairness safeguard."
  },
  {
    "id": "q-7",
    "area": "ch1",
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
    "explanation": "A biased content-ranking algorithm shapes what millions of people see, amplifying certain narratives and suppressing others — the mechanism behind opinion manipulation and echo chambers. The other options describe real but unrelated harm categories that do not follow from ranking bias."
  },
  {
    "id": "q-8",
    "area": "ch1",
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
    "explanation": "Deep neural networks are opaque: their decisions emerge from millions of learned weights rather than legible rules, so producing a faithful, specific explanation for one rejection is genuinely difficult. This opacity is precisely why explainability requirements and contestability rights exist for consequential automated decisions."
  },
  {
    "id": "q-9",
    "area": "ch1",
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
    "explanation": "When a physical system operates around people, safety is the overriding design priority — failures cause bodily harm, not just bad predictions. Other principles still apply, but they are subordinate to preventing physical harm in embodied, safety-critical AI."
  },
  {
    "id": "q-10",
    "area": "ch1",
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
    "explanation": "The system processes biometric identifiers of thousands of people for a convenience purpose — a maximally privacy-sensitive design. Biometric identification triggers special-category data protections, so privacy (minimization, consent, retention limits) must lead the design, outranking performance concerns."
  },
  {
    "id": "q-11",
    "area": "ch2",
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
    "explanation": "Developers build and train the model, which makes dataset curation and bias testing theirs: the decisions that shape the model's behavior happen in their hands. Deployers operationalize and monitor a finished model; users operate it; the DPO advises on privacy compliance rather than performing model development."
  },
  {
    "id": "q-12",
    "area": "ch2",
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
    "explanation": "Governance scales to organizational context: a small startup needs clear ownership without heavy machinery, which named champions across functions provide. Board committees and governance offices fit larger organizations, and deferring governance entirely leaves the highest-risk growth phase uncontrolled."
  },
  {
    "id": "q-13",
    "area": "ch2",
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
    "explanation": "Cross-functional collaboration means multiple disciplines sharing a governance decision — here legal, business, and technical perspectives jointly evaluating one use case. A memo is one-way communication, self-approval is the absence of governance, and complaint logging is a single-function activity."
  },
  {
    "id": "q-14",
    "area": "ch2",
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
    "explanation": "An executive weighing AI risk, a developer embedding controls, and a user deciding when to trust output each need different knowledge — training is effective when it maps to actual duties. Role-tailoring is best practice, not a literal legal mandate, and governance literacy matters for every role, not just engineers."
  },
  {
    "id": "q-15",
    "area": "ch2",
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
    "explanation": "Users sit closest to the system's real-world effects — they see the odd recommendation, the unfair pattern, the confusing output — making them a critical detection layer when trained and given reporting channels. Architecture, pipelines, and conformity assessments belong to developers and deployers."
  },
  {
    "id": "q-16",
    "area": "ch2",
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
    "explanation": "Highly regulated sectors demand governance that can withstand regulator and auditor scrutiny: documented reviews, evidence trails, and repeatable processes. Informal or purely aspirational approaches cannot demonstrate compliance where health, safety, and sectoral law are engaged."
  },
  {
    "id": "q-17",
    "area": "ch2",
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
    "explanation": "RACI stands for Responsible, Accountable, Consulted, Informed. The Accountable party ultimately owns the outcome and answers for it — and sound practice assigns exactly one Accountable person per activity, preventing the diffuse ownership that lets governance tasks fall through gaps."
  },
  {
    "id": "q-18",
    "area": "ch2",
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
    "explanation": "Deployers operationalize the system and own its behavior in context: monitoring performance, watching for drift, overseeing day-to-day risk. Architecture, tuning, and training-data work happen on the development side before the system ever reaches the deployer."
  },
  {
    "id": "q-19",
    "area": "ch2",
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
    "explanation": "Each discipline sees failure modes the others miss: lawyers spot regulatory exposure, ethicists spot fairness issues, engineers spot technical fragility, business owners spot operational impact. Joint review surfaces the full risk picture before commitment — it does not speed development, replace documentation, or move liability."
  },
  {
    "id": "q-20",
    "area": "ch2",
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
    "explanation": "Concrete failure case studies teach stakeholders what governance breakdown actually looks like, why it happened, and how to respond — converting abstract policy into recognizable patterns. Passive reminders and generic technical overviews build neither judgment nor accountability."
  },
  {
    "id": "q-21",
    "area": "ch3",
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
    "explanation": "Lifecycle-based governance is continuous: risks are introduced at every stage — use-case selection, data acquisition, training, release, operation, retirement — so accountability must attach at each of them. Deployment-only oversight misses design-stage risk, data-sensitivity scoping misses non-privacy harms, and single-team ownership defeats multidisciplinary review."
  },
  {
    "id": "q-22",
    "area": "ch3",
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
    "explanation": "Removing direct identifiers is not anonymization: combinations of remaining quasi-identifiers, linkage with external datasets, and model-level attacks like inversion can re-identify individuals. Policies must treat claimed-anonymous training data as a live privacy risk requiring evaluation, not a solved problem."
  },
  {
    "id": "q-23",
    "area": "ch3",
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
    "explanation": "Documentation and data provenance let the organization actually evaluate a vendor's model for legality, fairness, and fitness — the substance of third-party AI diligence. Blanket bans forfeit legitimate capability, unverified self-attestation is not assurance, and a single-certification gate both over-restricts and under-examines."
  },
  {
    "id": "q-24",
    "area": "ch3",
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
    "explanation": "Drift only exists once a model meets live data, so drift-monitoring policy governs the operational stage: watching deployed behavior against the world as it changes. Earlier stages have their own controls — approval gates, data rights checks, validation — but drift detection is inherently post-deployment."
  },
  {
    "id": "q-25",
    "area": "ch3",
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
    "explanation": "Audit access and transparency about data origins and fairness testing give the customer the means to verify claims and manage inherited risk — the practical core of AI vendor contracting. Bias exemptions shift risk the wrong way, full source disclosure is unnecessary and unobtainable, and truncated confidentiality protects no one."
  },
  {
    "id": "q-26",
    "area": "ch3",
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
    "explanation": "Legacy policies govern data in databases; they say nothing about data persisting inside model weights, memorization leaking through outputs, or what a deletion request means for a trained model. That retention-in-the-model gap is a defining reason AI demands policy updates."
  },
  {
    "id": "q-27",
    "area": "ch3",
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
    "explanation": "Tiering is proportionality applied to procurement: a vendor processing sensitive data or supporting critical functions warrants deep diligence and continuous monitoring, while a low-stakes tool gets a lighter path. Uniform treatment either wastes effort or under-controls the vendors that matter."
  },
  {
    "id": "q-28",
    "area": "ch3",
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
    "explanation": "Purpose limitation fails through quiet repurposing, and a use-case registry attacks exactly that: every dataset's approved purposes are recorded, so a new use is visible, reviewable, and blockable. Storage location doesn't govern purpose, and blanket reuse authorization is the violation itself, formalized."
  },
  {
    "id": "q-29",
    "area": "ch3",
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
    "explanation": "Bias hides inside aggregate metrics: a model can post excellent overall accuracy while failing one subgroup badly. Disaggregated evaluation across demographic slices is what surfaces disparate performance so it can be corrected. Encryption addresses confidentiality, not fairness, and synthetic data inherits the biases of whatever generated it."
  },
  {
    "id": "q-30",
    "area": "ch3",
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
    "explanation": "Model inversion turns the model itself into a disclosure channel: by systematically querying it, an attacker reconstructs training inputs — recognizable faces from a recognition model, sensitive records from a classifier. It is a core reason 'the model is not the data' fails as a privacy argument."
  },
  {
    "id": "q-31",
    "area": "ch4",
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
    "explanation": "Article 9 prohibits processing special categories like health data unless a specific condition applies, and for consumer contexts the workhorse condition is explicit consent — a clear affirmative statement specific to the sensitive processing. Implied consent fails the standard entirely, and legitimate interests is not an Article 9 condition."
  },
  {
    "id": "q-32",
    "area": "ch4",
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
    "explanation": "Purpose limitation binds data to the purposes stated at collection; a new use — such as training an AI model — requires either compatibility with the original purpose or a fresh lawful basis. It limits data reuse, not system functionality, and it makes 'collect everything for later' the anti-pattern rather than the strategy."
  },
  {
    "id": "q-33",
    "area": "ch4",
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
    "explanation": "The DPIA trigger is likely high risk to individuals: Article 35 names systematic and extensive automated evaluation, large-scale special-category processing, and systematic public monitoring as canonical cases — AI profiling routinely qualifies. Routine, low-risk processing does not require one, whoever the users are."
  },
  {
    "id": "q-34",
    "area": "ch4",
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
    "explanation": "The controller decides purposes and means — why the data is processed and how — and carries accountability for compliance. Hosting, incident response, and contracted development are activities a processor can perform on instructions; the decision-making role is what confers controller status, whatever the contract says."
  },
  {
    "id": "q-35",
    "area": "ch4",
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
    "explanation": "Facial identification processes biometric data to uniquely identify people — special category data under GDPR Article 9 — and does so in a surveillance context, compounding the sensitivity. Display preferences, layout tests, and requested newsletters involve ordinary data with low risk."
  },
  {
    "id": "q-36",
    "area": "ch4",
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
    "explanation": "The system derives health-related information from ordinary shopping data — and inferred special-category data carries the same legal protections as collected special-category data. Inference risk means an organization can stumble into Article 9 territory without ever asking a sensitive question."
  },
  {
    "id": "q-37",
    "area": "ch4",
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
    "explanation": "Privacy by design — codified in GDPR Article 25 — makes privacy a design requirement from the start: minimization in the pipeline, protective defaults, retention limits in the architecture. Post-hoc reviews and retrofits are the pattern it exists to replace, and compliance accountability cannot be delegated to a vendor."
  },
  {
    "id": "q-38",
    "area": "ch4",
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
    "explanation": "Minimization means adequate, relevant, and limited to what the purpose needs — narrow fields, de-identified where possible, kept no longer than necessary. Speculative collection, cross-product enrichment, and indefinite retention are each the opposite instinct."
  },
  {
    "id": "q-39",
    "area": "ch4",
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
    "explanation": "Article 28 requires a binding contract with any processor covering instructions, confidentiality, security, sub-processing, data subject rights support, breach notice, deletion or return, and audit rights. Accountability stays with the controller — it cannot be contracted away, and unlimited vendor data reuse would violate the instruction requirement outright."
  },
  {
    "id": "q-40",
    "area": "ch4",
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
    "explanation": "For solely automated decisions with legal or similarly significant effects, Article 22's safeguards guarantee human intervention, the ability to express one's point of view, and the right to contest. It does not grant source-code access, automatic reversal, or erasure — it guarantees a human route of challenge."
  },
  {
    "id": "q-41",
    "area": "ch5",
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
    "explanation": "Copying protected creative works into a training corpus without permission implicates the reproduction right, and fair use for AI training remains contested rather than settled. Patents, trademarks, and trade secrets protect different subject matter that scraping photographs does not touch."
  },
  {
    "id": "q-42",
    "area": "ch5",
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
    "explanation": "Title VII of the Civil Rights Act protects race, color, religion, sex, and national origin in employment — AI screening tools must be evaluated for disparate impact across these categories. Commute distance, typing speed, and schedule preferences are not protected classes, though they can act as risky proxies for ones that are."
  },
  {
    "id": "q-43",
    "area": "ch5",
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
    "explanation": "Section 5 prohibits deceptive practices, and the FTC has signaled that leading reasonable consumers to believe they are dealing with a human when they are not can qualify. There is no federal AI registration regime — the exposure comes from the misleading impression, not from using AI itself."
  },
  {
    "id": "q-44",
    "area": "ch5",
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
    "explanation": "The danger lives in the product's intended design — every correctly built unit carries it — which is the definition of a design defect. A manufacturing defect would be a deviation in particular units from an otherwise safe design; failure to warn (marketing defect) concerns uncommunicated risks, not the flawed specification itself."
  },
  {
    "id": "q-45",
    "area": "ch5",
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
    "explanation": "ECOA prohibits discrimination in credit decisions and applies with full force to algorithmic underwriting — neighborhood-based disparities often proxy for race, triggering fair-lending scrutiny. The other statutes govern copyright, competition, and computer intrusion, none of which reach credit discrimination."
  },
  {
    "id": "q-46",
    "area": "ch5",
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
    "explanation": "Misleading consumers about the nature and qualifications behind health advice is classic UDAP territory — deception with a real risk of consumer injury. Sector health law may compound the exposure, but the direct hook among the options is consumer protection."
  },
  {
    "id": "q-47",
    "area": "ch5",
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
    "explanation": "'Our own system was too complex to predict' is an admission, not a defense — manufacturers remain responsible for delivering reasonably safe products, and unpredictability argues for more testing and constraint, not absolution. Unforeseeable misuse, lack of causation, and reasonable design are recognized defenses."
  },
  {
    "id": "q-48",
    "area": "ch5",
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
    "explanation": "The EEOC enforces federal employment anti-discrimination law and has stated explicitly that using a vendor's AI tool does not transfer responsibility — the employer answers for disparate impact in its hiring process. The FCC, Copyright Office, and SEC regulate different domains."
  },
  {
    "id": "q-49",
    "area": "ch5",
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
    "explanation": "Facially neutral features that correlate strongly with protected traits let a model reconstruct and discriminate on those traits without ever seeing them — the proxy-discrimination pattern that disparate impact doctrine catches. Excluding the protected attribute is not a defense when its proxies carry the signal."
  },
  {
    "id": "q-50",
    "area": "ch5",
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
    "explanation": "The FTC applies ordinary advertising-substantiation doctrine to AI: performance claims need competent and reliable evidence before they are made. There is no certification or registration regime — and 'it plausibly might be true' has never been the standard."
  },
  {
    "id": "q-51",
    "area": "ch6",
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
    "explanation": "Real-time remote biometric identification in publicly accessible spaces is on the Article 5 prohibited list, permitted only under narrow, judicially controlled law-enforcement exceptions. Routing assistance, media recommenders, and industrial inspection are minimal- or limited-risk uses."
  },
  {
    "id": "q-52",
    "area": "ch6",
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
    "explanation": "High-risk providers must produce comprehensive technical documentation — design, development process, risk management, data governance, testing and performance evidence — kept current and available to authorities for ten years. Patents, environmental audits, and investor disclosures are not AI Act conformity requirements."
  },
  {
    "id": "q-53",
    "area": "ch6",
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
    "explanation": "That is the Act's definition of the provider — the central duty-bearer owning conformity assessment, documentation, CE marking, and post-market monitoring. Importers bring foreign systems in, distributors pass them along, and deployers use them professionally; note that rebranding or substantially modifying a system can convert those roles into provider."
  },
  {
    "id": "q-54",
    "area": "ch6",
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
    "explanation": "Deployers owe operational duties: using the system per its instructions, ensuring competent human oversight, monitoring operation, and reporting serious incidents. Conformity assessment and CE marking are the provider's pre-market obligations, and patent registration is not an AI Act concept."
  },
  {
    "id": "q-55",
    "area": "ch6",
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
    "explanation": "Minimal-risk systems — spam filters, game AI, inventory forecasting — are left essentially unregulated, with voluntary codes encouraged. Limited-risk systems carry transparency duties, high-risk systems carry the full compliance program, and systemic-risk GPAI carries evaluation and mitigation obligations."
  },
  {
    "id": "q-56",
    "area": "ch6",
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
    "explanation": "Enhanced obligations — model evaluations, adversarial testing, risk mitigation, incident reporting, cybersecurity — attach to GPAI with systemic risk, presumed at training compute above 10^25 FLOPs or by Commission designation. Licensing model, data geography, and deployment breadth are not the trigger."
  },
  {
    "id": "q-57",
    "area": "ch6",
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
    "explanation": "Importers are a verification checkpoint: they confirm the foreign provider performed conformity assessment, drew up the technical documentation, and affixed CE marking before the system enters the EU market. They verify conformity evidence — they do not re-perform the assessment, and no data-localization or escrow duty exists."
  },
  {
    "id": "q-58",
    "area": "ch6",
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
    "explanation": "Prohibited-practice violations sit at the top of the penalty ladder: up to €35 million or 7% of global annual turnover, whichever is higher. The 15/3 tier covers most other obligations, 7.5/1 covers misleading information to authorities — and 20/4 is GDPR's ceiling, a deliberate distractor."
  },
  {
    "id": "q-59",
    "area": "ch6",
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
    "explanation": "Distributors must verify CE marking and documentation and must not supply systems they have reason to consider non-compliant — awareness plus inaction is the liability trigger, and they must take corrective action or withdraw. Multi-state sales, product assortment, and support languages carry no such consequence."
  },
  {
    "id": "q-60",
    "area": "ch6",
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
    "explanation": "A model card is transparency documentation: capabilities, training data summary, evaluation results, limitations, and appropriate uses — exactly the information downstream providers and deployers need to use the model responsibly. It informs; it does not certify, register ownership, or specify hardware."
  },
  {
    "id": "q-61",
    "area": "ch7",
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
    "explanation": "The OECD Principles are the first intergovernmental AI standard: five non-binding values (inclusive growth, human rights and fairness, transparency and explainability, robustness and safety, accountability) plus policy recommendations. They set shared vocabulary and values — risk tiers and enforcement came later, in instruments like the EU AI Act that drew on them."
  },
  {
    "id": "q-62",
    "area": "ch7",
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
    "explanation": "Map is the context function: establish what the system is for, where it operates, who it affects, and what risks arise in that frame. Govern is the cross-cutting culture-and-accountability layer, Measure assesses and tracks the mapped risks, and Manage prioritizes and responds to them."
  },
  {
    "id": "q-63",
    "area": "ch7",
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
    "explanation": "ARIA evaluates AI systems in realistic conditions — model testing, red-teaming, and field testing — producing the kind of empirical evidence the RMF's Measure function calls for. It complements rather than replaces the framework, and neither instrument certifies or legally binds anyone."
  },
  {
    "id": "q-64",
    "area": "ch7",
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
    "explanation": "ISO/IEC 42001 is the first certifiable AI management system standard — the ISO 27001 of AI: Annex SL structure, PDCA cycle, required risk and impact assessments, and third-party certification audits. It is voluntary, organization-wide, and management-system-scoped rather than model-scoped."
  },
  {
    "id": "q-65",
    "area": "ch7",
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
    "explanation": "ISO/IEC 22989 is the AI vocabulary standard: 110+ formal definitions of AI concepts, lifecycle stages, roles, and trustworthiness properties, created so parties argue about substance rather than semantics. 27001 governs information security, 23894 gives AI risk guidance, and 31000 is generic risk management."
  },
  {
    "id": "q-66",
    "area": "ch7",
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
    "explanation": "The G7's Hiroshima AI Process (2023) produced international guiding principles and a voluntary code of conduct for developers of advanced AI and foundation models. Bletchley was the UK AI Safety Summit declaration (broader, non-G7), Basel governs banking, and Ramsar protects wetlands."
  },
  {
    "id": "q-67",
    "area": "ch7",
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
    "explanation": "IEEE 7000-series standards operationalize ethics-by-design: translating human values and ethical concerns into concrete engineering requirements during system development. They are engineering-process standards, not hardware, networking, or accounting specifications."
  },
  {
    "id": "q-68",
    "area": "ch7",
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
    "explanation": "ARIA evaluates trustworthiness characteristics — interpretability, robustness, fairness, safety — through model testing, red-teaming, and field testing with real users. Commercial and infrastructure attributes like revenue or mainframe compatibility are outside the trustworthiness construct."
  },
  {
    "id": "q-69",
    "area": "ch7",
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
    "explanation": "The two standards divide labor: 42001 builds the certifiable management system; 23894 supplies non-certifiable guidance on the AI risk management process itself, mirroring and extending ISO 31000 with AI-specific risk sources, objectives, and lifecycle mapping. It adds depth, not a second certificate."
  },
  {
    "id": "q-70",
    "area": "ch7",
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
    "explanation": "UNESCO's Recommendation (adopted by 190+ states) centers human rights, inclusion, sustainability, and cultural diversity — providing a ready-made, values-driven governance reference for countries without domestic AI legislation. It is normative, not a funding program, technology-transfer mandate, or import regime."
  },
  {
    "id": "q-71",
    "area": "ch8",
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
    "explanation": "Lifecycle documentation is governance's memory: it lets auditors verify decisions, investigators trace failures to root causes, and regulators confirm compliance. Contemporaneous records are evidence; retroactive reconstruction is scrambling. Storage costs, licensing, and speed are not what documentation exists for."
  },
  {
    "id": "q-72",
    "area": "ch8",
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
    "explanation": "Business context anchors everything downstream: objectives define success criteria, which define validation thresholds, monitoring targets, and eventually retirement triggers. Architecture and hosting are means, decided after the ends are clear — a system without defined objectives cannot even be evaluated."
  },
  {
    "id": "q-73",
    "area": "ch8",
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
    "explanation": "Impact assessments are the look-before-you-leap instrument: identify who could be affected and how, evaluate severity and likelihood, and change the design while change is cheap. They are risk instruments, not marketing collateral, security certifications, or financial models."
  },
  {
    "id": "q-74",
    "area": "ch8",
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
    "explanation": "HITL design gives humans real intervention power at the moments that matter — reviewing high-stakes outputs before they take effect and overriding failures. It costs throughput rather than adding it, complements rather than replaces logging, and exists for accountability and safety."
  },
  {
    "id": "q-75",
    "area": "ch8",
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
    "explanation": "Building your own model makes you its provider: conformity duties, documentation, liability for training-data rights, and answerability for its behavior all land in-house rather than being shared with a vendor. Control comes bundled with accountability — nothing about building in-house forces open-sourcing or degrades accuracy."
  },
  {
    "id": "q-76",
    "area": "ch8",
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
    "explanation": "The matrix plots each identified risk on likelihood and severity axes, making priorities visible: high-likelihood/high-impact risks get treated first, trivial ones get accepted. It is a prioritization tool for finite mitigation resources, not an engineering or financial instrument."
  },
  {
    "id": "q-77",
    "area": "ch8",
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
    "explanation": "Explainability means users can understand why an output happened — feature-importance scoring and contextual, human-readable explanations deliver exactly that. Weight encryption serves security, uncommented code serves nobody, and compression serves latency; none helps a user comprehend a decision."
  },
  {
    "id": "q-78",
    "area": "ch8",
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
    "explanation": "Risk is unevenly distributed: a system fine for most users may seriously harm one group. Stakeholder mapping enumerates everyone affected or influential — internal and external — and how, so impact assessments and design decisions account for differential effects instead of average ones."
  },
  {
    "id": "q-79",
    "area": "ch8",
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
    "explanation": "Shadow mode runs the model on real inputs without affecting real decisions — producing documented, real-world evidence of behavior at zero user risk, judged against criteria set in advance. Announcements, undocumented scores, and demo impressions are not evidence."
  },
  {
    "id": "q-80",
    "area": "ch8",
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
    "explanation": "Developing a system and putting it into service under your own name makes you its provider even without selling it — and using it professionally makes you its deployer too. Both duty sets apply, and in-house use is no exemption; employment screening is squarely Annex III high-risk."
  },
  {
    "id": "q-81",
    "area": "ch9",
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
    "explanation": "Data governance is the upstream half of model governance: confirming legal authority to use each source, measuring quality, verifying fitness for the specific purpose, and assigning stewardship. Most model failures trace back to data failures — governance exists to catch them before training does."
  },
  {
    "id": "q-82",
    "area": "ch9",
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
    "explanation": "Provenance is the data's birth certificate: origin, collection method, date, and the legal terms attached at acquisition. It is recorded when data arrives because it cannot be reconstructed later — and it underwrites every downstream claim that the training data was lawfully sourced."
  },
  {
    "id": "q-83",
    "area": "ch9",
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
    "explanation": "With 99% legitimate transactions, a model that flags nothing scores 99% accuracy while catching zero fraud — accuracy flatters do-nothing models on imbalanced data. The F1 score, balancing precision (trustworthy flags) and recall (fraud actually caught), exposes what accuracy hides."
  },
  {
    "id": "q-84",
    "area": "ch9",
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
    "explanation": "Aggregate metrics are averages, and averages hide minorities: a model can post excellent overall numbers while failing one demographic badly. Subgroup validation is the only way to see disparate performance before deployment turns it into disparate impact."
  },
  {
    "id": "q-85",
    "area": "ch9",
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
    "explanation": "Provenance is the origin story — source, method, terms; lineage is the biography — every transformation, join, and filter between source and model. Together they let an organization trace any model behavior back through its data, and neither substitutes for the other."
  },
  {
    "id": "q-86",
    "area": "ch9",
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
    "explanation": "Adversarial examples are deliberately crafted inputs — often imperceptibly altered — that flip a model's output. They are attacks, not accidents, which is why AI security testing includes adversarial robustness alongside conventional measures. Slow convergence, latency, and class imbalance are engineering problems, not adversaries."
  },
  {
    "id": "q-87",
    "area": "ch9",
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
    "explanation": "Counterfactual fairness asks the individual-level question: hold everything else constant, flip the protected attribute — does the decision change? If it does, the attribute (or its proxies) is driving outcomes. It complements group-level statistical metrics like demographic parity with a causal, per-person lens."
  },
  {
    "id": "q-88",
    "area": "ch9",
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
    "explanation": "Users experience the system, not the model: a perfect model fed by a silently reformatting pipeline or presented through a bias-amplifying interface still produces harm. Integration testing validates the assembled whole — data flows, API contracts, UI behavior, downstream consumption — which is where component-level assurance goes to die."
  },
  {
    "id": "q-89",
    "area": "ch9",
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
    "explanation": "Loss curves are training's vital signs: divergence, plateaus, or a validation loss climbing while training loss falls (overfitting's signature) appear during training, when intervention is cheap. Deployment logs and API load tests come later in the lifecycle; they cannot see a training run failing in real time."
  },
  {
    "id": "q-90",
    "area": "ch9",
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
    "explanation": "A model card is standardized disclosure: purpose, training data summary, evaluation results across conditions, known limitations, and ethical considerations — the information deployers and reviewers need to use the model responsibly. Documentation informs judgment; it never substitutes for the testing itself."
  },
  {
    "id": "q-91",
    "area": "ch10",
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
    "explanation": "The model card is the model's disclosure document — a standardized summary of what it is for, what it was trained on, how it performs, and where it fails. It complements rather than replaces contracts and regulatory technical documentation, and it has nothing to do with securing weights."
  },
  {
    "id": "q-92",
    "area": "ch10",
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
    "explanation": "Edge inference runs on the local device: no network round-trip (millisecond latency) and no transmission of sensitive data off-device (privacy) — exactly this scenario's constraints. The trade-off is harder updates and monitoring, which is why edge suits latency- and privacy-critical uses specifically."
  },
  {
    "id": "q-93",
    "area": "ch10",
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
    "explanation": "Governance questions are historical questions — which model version made this decision, trained on which data snapshot, under which configuration? Version control across models, data, code, and config is what makes those questions answerable, and rollback possible. Encryption and feedback collection are different controls entirely."
  },
  {
    "id": "q-94",
    "area": "ch10",
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
    "explanation": "The inputs haven't shifted — the world has: the relationship between features and outcomes changed underneath the model, which is concept drift. Data drift would show shifted input distributions; overfitting is a training-time failure; poisoning is an attack. The remedy is retraining on data reflecting the new reality."
  },
  {
    "id": "q-95",
    "area": "ch10",
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
    "explanation": "RAG bolts retrieval onto generation: fetch relevant sources, condition the model's answer on them — keeping knowledge current without retraining, enabling citations, and reducing (not eliminating) confabulation. Its new risk surface is the retrieval path, where poisoned documents can carry indirect prompt injections."
  },
  {
    "id": "q-96",
    "area": "ch10",
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
    "explanation": "Lineage tracking, access control enforcement, and policy compliance for data are the data governance function's core mandate — with named data stewards accountable per dataset. Users follow the policies; governance owns them."
  },
  {
    "id": "q-97",
    "area": "ch10",
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
    "explanation": "When a deployed model starts causing harm, the fastest safe response is usually retreat to the previously validated version — but only if the retreat path (artifacts, criteria, authority to invoke) was prepared in advance. Improvising rollback during an incident multiplies the damage window."
  },
  {
    "id": "q-98",
    "area": "ch10",
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
    "explanation": "Fairness failures manifest as differential treatment: error or approval rates pulling apart across groups over time. That is why production monitoring must track fairness metrics by subgroup, not just aggregate performance — infrastructure signals like GPU load and latency say nothing about equity."
  },
  {
    "id": "q-99",
    "area": "ch10",
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
    "explanation": "A shadow model sees the same live inputs as production but its outputs go nowhere — enabling continuous comparison that surfaces drift, degradation, or a challenger's readiness at zero user risk. It is an evaluation instrument, not a security control or data generator."
  },
  {
    "id": "q-100",
    "area": "ch10",
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
    "explanation": "A fraud model facing adaptive adversaries decays in weeks; a stable document classifier may hold for years. Retraining cadence is a risk decision: match update frequency to how fast the modeled world moves and how costly staleness is. Uniform calendars either waste resources or leave high-risk models stale — and no law mandates them."
  },
  {
    "id": "q-101",
    "area": "ch12",
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
    "explanation": "Downstream harm lands on people, so forecasting it starts by enumerating the people: stakeholder mapping identifies every group the system touches — directly, indirectly, and unintentionally — and how each could be hurt. Latency, versioning, and labeling automation are operational concerns that reveal nothing about who bears the consequences."
  },
  {
    "id": "q-102",
    "area": "ch12",
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
    "explanation": "Red teaming is deliberate offense: dedicated attackers probe the system with jailbreaks, adversarial inputs, and misuse scenarios to find what cooperative testing never will. It exists because real adversaries and real users are creative — the exercise finds the failures before they do."
  },
  {
    "id": "q-103",
    "area": "ch12",
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
    "explanation": "Whatever the vendor may do with your data becomes your compliance posture: retention beyond your schedules, reuse beyond your purposes, or training on your customers' records all flow from the data usage rights clause. Payment terms, branding, and venue matter commercially but do not shape data governance."
  },
  {
    "id": "q-104",
    "area": "ch12",
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
    "explanation": "Drift is a statistical phenomenon and is caught statistically: compare live input and output distributions against training-time baselines and alert on divergence. Complaints arrive only after harm has occurred, and documentation review tells you what the model was, not what it has become."
  },
  {
    "id": "q-105",
    "area": "ch12",
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
    "explanation": "Incident response order is containment first: stop ongoing harm by disabling or constraining the system, then investigate root cause with the pressure off. Continuing to run a system actively producing harmful output to 'gather data' extends the damage window, and hardware or training changes are remedies that come after diagnosis."
  },
  {
    "id": "q-106",
    "area": "ch12",
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
    "explanation": "Shadow deployment gives a candidate model real-world exposure with zero user risk: it sees production traffic, its outputs are recorded and compared, and nothing it says takes effect. It is the standard evidence-generating step before trusting a new model with consequences."
  },
  {
    "id": "q-107",
    "area": "ch12",
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
    "explanation": "The EU AI Act requires high-risk providers to operate documented post-market monitoring systems and report serious incidents — approval is conditional on continued good behavior, a pattern borrowed from medical-device law. ISO 27001 is a voluntary security standard, and CCPA/LGPD are privacy statutes without AI post-market regimes."
  },
  {
    "id": "q-108",
    "area": "ch12",
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
    "explanation": "They answer different questions: threat modeling is prospective and adversarial (what attack vectors exist — poisoning, inversion, injection?), while a performance audit is evaluative (does the system do what it claims, within tolerances?). Both belong in the assurance stack, ideally with threat modeling starting at design time."
  },
  {
    "id": "q-109",
    "area": "ch12",
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
    "explanation": "Prompt injection weaponizes the model's obedience to text: adversarial instructions — typed directly or hidden in retrieved documents — can hijack behavior, exfiltrate data, or bypass guardrails at inference time in production. It attacks the running system, not stored checkpoints, and defenses mitigate rather than eliminate it."
  },
  {
    "id": "q-110",
    "area": "ch12",
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
    "explanation": "An incident is empirical evidence that a risk is real: linking it to the register converts a one-time response into standing governance — the risk gets an owner, a treatment, and monitoring. Unlinked incidents produce organizations that fix the same failure repeatedly without ever learning."
  },
  {
    "id": "q-111",
    "area": "ch12",
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
    "explanation": "Incident records are governance evidence: they satisfy regulatory reporting duties, give auditors the trail they ask for, establish who decided what, and feed lessons back into controls. A fixed-but-undocumented incident leaves the organization unable to prove its response — or to learn from it."
  },
  {
    "id": "q-112",
    "area": "ch12",
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
    "explanation": "Post-market monitoring is continuous and documented by design: collect operating data, evaluate performance and fairness against expectations, watch for unintended effects, and feed findings into corrective action. Launch-time certification is exactly the one-and-done pattern the requirement exists to prevent."
  },
  {
    "id": "q-113",
    "area": "ch12",
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
    "explanation": "Honest external communication covers what the system does, where it falls short, and how humans oversee it — the transparency that builds justified trust and survives FTC scrutiny. Credentials and source code are security disasters, and capability-only messaging is the AI-washing pattern regulators target."
  },
  {
    "id": "q-114",
    "area": "ch12",
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
    "explanation": "A retirement (deactivation) policy predefines when a system should die — risk thresholds, obsolescence, regulatory change — and how: dependency wind-down, data disposition, stakeholder notice, record preservation. It turns end-of-life into a governed decision instead of an emergency or an indefinite drift."
  },
  {
    "id": "q-115",
    "area": "ch12",
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
    "explanation": "Localization is driven by divergence: data sovereignty laws requiring in-country processing, regional regulations imposing different obligations, or cultural and linguistic differences that change what appropriate behavior means. Uniformity and stability argue for the opposite — one global deployment."
  },
  {
    "id": "q-116",
    "area": "ch12",
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
    "explanation": "The distinction is severity and response: issues (bugs, degradations, complaints) flow through routine tracking and prioritization, while incidents (significant failures, harm events) invoke containment, investigation, and possibly disclosure. Mature programs predefine the threshold — and watch issue trends as the early-warning system for incidents."
  },
  {
    "id": "q-117",
    "area": "ch12",
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
    "explanation": "The questions don't retire with the model: litigation may demand reconstruction of a past decision, auditors may examine historical behavior, and regulatory retention duties — like the EU AI Act's ten-year documentation period — outlive deployment. Archival per the retention schedule preserves that evidence; premature deletion can look like spoliation."
  },
  {
    "id": "q-118",
    "area": "ch12",
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
    "explanation": "Systems accumulate silent dependents — downstream applications, workflows, integrations — and switching one off without a dependency inventory breaks them without warning. Retirement planning maps those dependencies and arranges successors or fallbacks so the shutdown is a transition, not an outage."
  },
  {
    "id": "q-119",
    "area": "ch12",
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
    "explanation": "The EU AI Act requires providers to register high-risk systems in the EU database before placing them on the market — part of the transparency infrastructure alongside technical documentation and CE marking. GDPR governs personal data without an AI registry, CCPA is state privacy law, and ISO 42001 is a voluntary standard."
  },
  {
    "id": "q-120",
    "area": "ch12",
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
    "explanation": "Users calibrate their reliance correctly only when limitations are stated clearly and made tangible — 'the assistant can cite documents that don't exist; verify references' beats a paragraph of hedged legalese. Hiding or burying limitations invites over-reliance and, when harm follows, deception exposure."
  },
  {
    "id": "q-121",
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
    "id": "q-122",
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
    "id": "q-123",
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
    "id": "q-124",
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
    "id": "q-125",
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
    "id": "q-126",
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
    "id": "q-127",
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
    "id": "q-128",
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
    "id": "q-129",
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
    "id": "q-130",
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
    "id": "q-131",
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
    "id": "q-132",
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
    "id": "q-133",
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
    "id": "q-134",
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
    "id": "q-135",
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
    "id": "q-136",
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
    "id": "q-137",
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
    "id": "q-138",
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
    "id": "q-139",
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
    "id": "q-140",
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
    "id": "q-141",
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
    "id": "q-142",
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
    "id": "q-143",
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
    "id": "q-144",
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
    "id": "q-145",
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
    "id": "q-146",
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
    "id": "q-147",
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
    "id": "q-148",
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
    "id": "q-149",
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
    "id": "q-150",
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
    "id": "q-151",
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
    "id": "q-152",
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
    "id": "q-153",
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
    "id": "q-154",
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
    "id": "q-155",
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
    "id": "q-156",
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
    "id": "q-157",
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
    "id": "q-158",
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
    "id": "q-159",
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
    "id": "q-160",
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
    "id": "q-161",
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
    "id": "q-162",
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
    "id": "q-163",
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
    "id": "q-164",
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
    "id": "q-165",
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
    "id": "q-166",
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
    "id": "q-167",
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
    "id": "q-168",
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
    "id": "q-169",
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
    "id": "q-170",
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
    "id": "q-171",
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
    "id": "q-172",
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
    "id": "q-173",
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
    "id": "q-174",
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
    "id": "q-175",
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
    "id": "q-176",
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
    "id": "q-177",
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
    "id": "q-178",
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
    "id": "q-179",
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
    "id": "q-180",
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
    "id": "q-181",
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
    "id": "q-182",
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
    "id": "q-183",
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
    "id": "q-184",
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
    "id": "q-185",
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
    "id": "q-186",
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
    "id": "q-187",
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
    "id": "q-188",
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
    "id": "q-189",
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
    "id": "q-190",
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
    "id": "q-191",
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
    "id": "q-192",
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
    "id": "q-193",
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
    "id": "q-194",
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
    "id": "q-195",
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
    "id": "q-196",
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
    "id": "q-197",
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
    "id": "q-198",
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
    "id": "q-199",
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
    "id": "q-200",
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
    "id": "q-201",
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
    "id": "q-202",
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
    "id": "q-203",
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
    "id": "q-204",
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
    "id": "q-205",
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
    "id": "q-206",
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
    "id": "q-207",
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
    "id": "q-208",
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
    "id": "q-209",
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
    "id": "q-210",
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
    "id": "q-211",
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
    "id": "q-212",
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
    "id": "q-213",
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
    "id": "q-214",
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
    "id": "q-215",
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
    "id": "q-216",
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
    "id": "q-217",
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
    "id": "q-218",
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
    "id": "q-219",
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
    "id": "q-220",
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
    "id": "q-221",
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
    "id": "q-222",
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
    "id": "q-223",
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
    "id": "q-224",
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
    "id": "q-225",
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
    "id": "q-226",
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
    "id": "q-227",
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
    "id": "q-228",
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
    "id": "q-229",
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
    "id": "q-230",
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
    "id": "q-231",
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
    "id": "q-232",
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
    "id": "q-233",
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
    "id": "q-234",
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
    "id": "q-235",
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
    "id": "q-236",
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
    "id": "q-237",
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
    "id": "q-238",
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
    "id": "q-239",
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
    "id": "q-240",
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
    "id": "q-241",
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
    "id": "q-242",
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
    "id": "q-243",
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
    "id": "q-244",
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
    "id": "q-245",
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
    "id": "q-246",
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
    "id": "q-247",
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
    "id": "q-248",
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
    "id": "q-249",
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
    "id": "q-250",
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
    "id": "q-251",
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
    "id": "q-252",
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
    "id": "q-253",
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
    "id": "q-254",
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
    "id": "q-255",
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
    "id": "q-256",
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
    "id": "q-257",
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
    "id": "q-258",
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
    "id": "q-259",
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
    "id": "q-260",
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
    "id": "q-261",
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
    "id": "q-262",
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
    "id": "q-263",
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
    "id": "q-264",
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
    "id": "q-265",
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
    "id": "q-266",
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
    "id": "q-267",
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
    "id": "q-268",
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
    "id": "q-269",
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
    "id": "q-270",
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
    "id": "q-271",
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
    "id": "q-272",
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
    "id": "q-273",
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
    "id": "q-274",
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
    "id": "q-275",
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
    "id": "q-276",
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
    "id": "q-277",
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
    "id": "q-278",
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
    "id": "q-279",
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
    "id": "q-280",
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
    "id": "q-281",
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
    "id": "q-282",
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
    "id": "q-283",
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
    "id": "q-284",
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
    "id": "q-285",
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
    "id": "q-286",
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
    "id": "q-287",
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
    "id": "q-288",
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
    "id": "q-289",
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
    "id": "q-290",
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
    "id": "q-291",
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
    "id": "q-292",
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
    "id": "q-293",
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
    "id": "q-294",
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
    "id": "q-295",
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
    "id": "q-296",
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
    "id": "q-297",
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
    "id": "q-298",
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
    "id": "q-299",
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
    "id": "q-300",
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
    "id": "q-301",
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
    "id": "q-302",
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
    "id": "q-303",
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
    "id": "q-304",
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
    "id": "q-305",
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
    "id": "q-306",
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
    "id": "q-307",
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
    "id": "q-308",
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
    "id": "q-309",
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
    "id": "q-310",
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
    "id": "q-311",
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
    "id": "q-312",
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
    "id": "q-313",
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
    "id": "q-314",
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
    "id": "q-315",
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
    "id": "q-316",
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
    "id": "q-317",
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
    "id": "q-318",
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
    "id": "q-319",
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
    "id": "q-320",
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
    "id": "q-321",
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
    "id": "q-322",
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
    "id": "q-323",
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
    "id": "q-324",
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
    "id": "q-325",
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
    "id": "q-326",
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
    "id": "q-327",
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
    "id": "q-328",
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
    "id": "q-329",
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
    "id": "q-330",
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
    "id": "q-331",
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
    "id": "q-332",
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
    "id": "q-333",
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
    "id": "q-334",
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
    "id": "q-335",
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
    "id": "q-336",
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
    "id": "q-337",
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
    "id": "q-338",
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
    "id": "q-339",
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
    "id": "q-340",
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
    "id": "q-341",
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
    "id": "q-342",
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
    "id": "q-343",
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
    "id": "q-344",
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
    "id": "q-345",
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
    "id": "q-346",
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
    "id": "q-347",
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
    "id": "q-348",
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
    "id": "q-349",
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
    "id": "q-350",
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
    "id": "q-351",
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
    "id": "q-352",
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
    "id": "q-353",
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
    "id": "q-354",
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
    "id": "q-355",
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
    "id": "q-356",
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
    "id": "q-357",
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
    "id": "q-358",
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
    "id": "q-359",
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
    "id": "q-360",
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
    "id": "q-361",
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
    "id": "q-362",
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
    "id": "q-363",
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
    "id": "q-364",
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
    "id": "q-365",
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
    "id": "q-366",
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
    "id": "q-367",
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
    "id": "q-368",
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
    "id": "q-369",
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
    "id": "q-370",
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
    "id": "q-371",
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
    "id": "q-372",
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
    "id": "q-373",
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
    "id": "q-374",
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
    "id": "q-375",
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
    "id": "q-376",
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
    "id": "q-377",
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
    "id": "q-378",
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
    "id": "q-379",
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
    "id": "q-380",
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
    "id": "q-381",
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
    "id": "q-382",
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
    "id": "q-383",
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
    "id": "q-384",
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
    "id": "q-385",
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
    "id": "q-386",
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
    "id": "q-387",
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
    "id": "q-388",
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
    "id": "q-389",
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
    "id": "q-390",
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
    "id": "q-391",
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
    "id": "q-392",
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
    "id": "q-393",
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
    "id": "q-394",
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
    "id": "q-395",
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
    "id": "q-396",
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
    "id": "q-397",
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
    "id": "q-398",
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
    "id": "q-399",
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
    "id": "q-400",
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
    "id": "q-401",
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
    "id": "q-402",
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
    "id": "q-403",
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
    "id": "q-404",
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
    "id": "q-405",
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
    "id": "q-406",
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
    "id": "q-407",
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
    "id": "q-408",
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
    "id": "q-409",
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
    "id": "q-410",
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
    "id": "q-411",
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
    "id": "q-412",
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
    "id": "q-413",
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
    "id": "q-414",
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
    "id": "q-415",
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
    "id": "q-416",
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
    "id": "q-417",
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
    "id": "q-418",
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
    "id": "q-419",
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
    "id": "q-420",
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
    "id": "q-421",
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
    "id": "q-422",
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
    "id": "q-423",
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
    "id": "q-424",
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
    "id": "q-425",
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
    "id": "q-426",
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
    "id": "q-427",
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
    "id": "q-428",
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
    "id": "q-429",
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
    "id": "q-430",
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
    "id": "q-431",
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
    "id": "q-432",
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
    "id": "q-433",
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
    "id": "q-434",
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
    "id": "q-435",
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
    "id": "q-436",
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
    "id": "q-437",
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
    "id": "q-438",
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
    "id": "q-439",
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
    "id": "q-440",
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
    "id": "q-441",
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
    "id": "q-442",
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
    "id": "q-443",
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
    "id": "q-444",
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
    "id": "q-445",
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
    "id": "q-446",
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
    "id": "q-447",
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
    "id": "q-448",
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
    "id": "q-449",
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
    "id": "q-450",
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
    "id": "q-451",
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
    "id": "q-452",
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
    "id": "q-453",
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
    "id": "q-454",
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
    "id": "q-455",
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
    "id": "q-456",
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
    "id": "q-457",
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
    "id": "q-458",
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
    "id": "q-459",
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
    "id": "q-460",
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
    "id": "q-461",
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
    "id": "q-462",
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
    "id": "q-463",
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
    "id": "q-464",
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
    "id": "q-465",
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
    "id": "q-466",
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
    "id": "q-467",
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
    "id": "q-468",
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
    "id": "q-469",
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
    "id": "q-470",
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
    "id": "q-471",
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
    "id": "q-472",
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
    "id": "q-473",
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
    "id": "q-474",
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
    "id": "q-475",
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
    "id": "q-476",
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
    "id": "q-477",
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
    "id": "q-478",
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
    "id": "q-479",
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
    "id": "q-480",
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
    "id": "q-481",
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
    "id": "q-482",
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
    "id": "q-483",
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
    "id": "q-484",
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
    "id": "q-485",
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
    "id": "q-486",
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
    "id": "q-487",
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
    "id": "q-488",
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
    "id": "q-489",
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
    "id": "q-490",
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
    "id": "q-491",
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
    "id": "q-492",
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
    "id": "q-493",
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
    "id": "q-494",
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
    "id": "q-495",
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
    "id": "q-496",
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
    "id": "q-497",
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
    "id": "q-498",
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
    "id": "q-499",
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
    "id": "q-500",
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
    "id": "q-501",
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
    "id": "q-502",
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
    "id": "q-503",
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
    "id": "q-504",
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
    "id": "q-505",
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
    "id": "q-506",
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
    "id": "q-507",
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
    "id": "q-508",
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
    "id": "q-509",
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
    "id": "q-510",
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
    "id": "q-511",
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
    "id": "q-512",
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
    "id": "q-513",
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
    "id": "q-514",
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
    "id": "q-515",
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
    "id": "q-516",
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
    "id": "q-517",
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
    "id": "q-518",
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
    "id": "q-519",
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
    "id": "q-520",
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
    "id": "q-521",
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
    "id": "q-522",
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
    "id": "q-523",
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
    "id": "q-524",
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
    "id": "q-525",
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
    "id": "q-526",
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
    "id": "q-527",
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
    "id": "q-528",
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
    "id": "q-529",
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
    "id": "q-530",
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
    "id": "q-531",
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
    "id": "q-532",
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
    "id": "q-533",
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
    "id": "q-534",
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
    "id": "q-535",
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
    "id": "q-536",
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
    "id": "q-537",
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
    "id": "q-538",
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
    "id": "q-539",
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
    "id": "q-540",
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
    "id": "q-541",
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
    "id": "q-542",
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
    "id": "q-543",
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
    "id": "q-544",
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
    "id": "q-545",
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
    "id": "q-546",
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
    "id": "q-547",
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
    "id": "q-548",
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
    "id": "q-549",
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
    "id": "q-550",
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
    "id": "q-551",
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
    "id": "q-552",
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
    "id": "q-553",
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
    "id": "q-554",
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
    "id": "q-555",
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
    "id": "q-556",
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
    "id": "q-557",
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
    "id": "q-558",
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
    "id": "q-559",
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
    "id": "q-560",
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
    "id": "q-561",
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
    "id": "q-562",
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
    "id": "q-563",
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
    "id": "q-564",
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
    "id": "q-565",
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
    "id": "q-566",
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
    "id": "q-567",
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
    "id": "q-568",
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
    "id": "q-569",
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
    "id": "q-570",
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
    "id": "q-571",
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
    "id": "q-572",
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
    "id": "q-573",
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
    "id": "q-574",
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
    "id": "q-575",
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
    "id": "q-576",
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
    "id": "q-577",
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
    "id": "q-578",
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
    "id": "q-579",
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
    "id": "q-580",
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
    "id": "q-581",
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
    "id": "q-582",
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
    "id": "q-583",
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
    "id": "q-584",
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
    "id": "q-585",
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
    "id": "q-586",
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
    "id": "q-587",
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
    "id": "q-588",
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
    "id": "q-589",
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
    "id": "q-590",
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
    "id": "q-591",
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
    "id": "q-592",
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
    "id": "q-593",
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
    "id": "q-594",
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
    "id": "q-595",
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
    "id": "q-596",
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
    "id": "q-597",
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
    "id": "q-598",
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
    "id": "q-599",
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
    "id": "q-600",
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
    "id": "q-601",
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
    "id": "q-602",
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
    "id": "q-603",
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
    "id": "q-604",
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
    "id": "q-605",
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
    "id": "q-606",
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
    "id": "q-607",
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
    "id": "q-608",
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
    "id": "q-609",
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
    "id": "q-610",
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
    "id": "q-611",
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
    "id": "q-612",
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
    "id": "q-613",
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
    "id": "q-614",
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
    "id": "q-615",
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
    "id": "q-616",
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
    "id": "q-617",
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
    "id": "q-618",
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
    "id": "q-619",
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
    "id": "q-620",
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
    "id": "q-621",
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
  },
  {
    "id": "q-622",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An assessor reviewing an insurer's claims-processing model against the NIST AI RMF finds it deficient on the accountable and transparent trustworthiness characteristic. Which remediation most directly addresses the gap?",
    "options": [
      {
        "letter": "A",
        "text": "Publish technical explanations of how the model derives each individual prediction"
      },
      {
        "letter": "B",
        "text": "Release the model's source code and weights for public inspection"
      },
      {
        "letter": "C",
        "text": "Make information about design decisions and outputs available to stakeholders and designate who is answerable for outcomes"
      },
      {
        "letter": "D",
        "text": "Run demographic bias testing and publish subgroup performance metrics"
      }
    ],
    "answer": "C",
    "explanation": "In the NIST AI RMF, this characteristic means information about the AI system's design decisions and outputs is available to stakeholders and responsibility for the system is clearly owned. Option A describes the separate 'explainable and interpretable' characteristic, B is a lay reading of transparency as open-sourcing, and D addresses the 'fair with harmful bias managed' characteristic."
  },
  {
    "id": "q-623",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A Dutch electronics retailer resells a third-party workplace-monitoring AI system to EU businesses without altering it, acting as an AI distributor under the EU AI Act. Before making the system available, what must the retailer verify?",
    "options": [
      {
        "letter": "A",
        "text": "That the system bears the required CE marking and is accompanied by the required documentation"
      },
      {
        "letter": "B",
        "text": "That the system has been re-tested and certified under the retailer's own quality management system"
      },
      {
        "letter": "C",
        "text": "That the provider is established in the EU or has appointed an authorized representative there"
      },
      {
        "letter": "D",
        "text": "That the system's training data was collected with a lawful basis under the GDPR"
      }
    ],
    "answer": "A",
    "explanation": "This supply-chain role makes an AI system available on the EU market without affecting its compliance, and its core duty is to verify the CE marking and required documentation before distribution. Option B describes provider obligations (a quality management system), C describes the importer's check, and D is a data protection duty that sits with the controller, not this role."
  },
  {
    "id": "q-624",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "Under ISO/IEC 22989 terminology, a bank's loan-approval documentation must account for the interests of each AI subject. Who does this refer to?",
    "options": [
      {
        "letter": "A",
        "text": "The engineer responsible for operating and maintaining the model"
      },
      {
        "letter": "B",
        "text": "The topic or domain area the model was trained to handle"
      },
      {
        "letter": "C",
        "text": "The legal entity that owns and commercializes the system"
      },
      {
        "letter": "D",
        "text": "A person who interacts with or is affected by the system's decisions"
      }
    ],
    "answer": "D",
    "explanation": "In ISO/IEC 22989, this term denotes an individual affected by or interacting with an AI system, such as a loan applicant. Option A is an operator role, B is a lay misreading of 'subject' as subject matter, and C is the AI provider or producer, not the affected individual."
  },
  {
    "id": "q-625",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A policy briefing distinguishes today's AI systems from a hypothetical future artificial superintelligence. What capability would qualify a system for that label?",
    "options": [
      {
        "letter": "A",
        "text": "Matching average human performance across most cognitive tasks"
      },
      {
        "letter": "B",
        "text": "Exceeding the best human performance in essentially every domain, from creativity to decision-making"
      },
      {
        "letter": "C",
        "text": "Outperforming human experts in one narrow specialty such as protein-structure prediction"
      },
      {
        "letter": "D",
        "text": "Operating fully autonomously without any human oversight or control"
      }
    ],
    "answer": "B",
    "explanation": "The term describes a theoretical AI that surpasses human intelligence in all domains, including creativity, problem-solving, emotional understanding, and decision-making. Option A describes artificial general intelligence (human-level), C describes narrow AI, and D describes autonomy, which is a mode of operation rather than a level of intelligence."
  },
  {
    "id": "q-626",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "The EU AI Act requires providers of high-risk AI systems to report serious incidents to the competent authorities. To whom would a provider actually send such a report?",
    "options": [
      {
        "letter": "A",
        "text": "The designated regulatory oversight bodies of the member states concerned"
      },
      {
        "letter": "B",
        "text": "The notified body that assessed the system's conformity before launch"
      },
      {
        "letter": "C",
        "text": "An internal committee of suitably qualified compliance officers"
      },
      {
        "letter": "D",
        "text": "The European Data Protection Board in Brussels"
      }
    ],
    "answer": "A",
    "explanation": "The term refers to the regulatory or oversight bodies designated by member states to supervise and enforce the law, such as market surveillance authorities. Option B is a private conformity assessment body, not a regulator; C is a lay misreading of 'competent' as skilled internal staff; and D is a GDPR body, not the AI Act's supervisory recipient for incident reports."
  },
  {
    "id": "q-627",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A radiology startup selects a convolutional neural network for its tumor-detection product. What property of this architecture motivates the choice?",
    "options": [
      {
        "letter": "A",
        "text": "It maintains a memory of earlier inputs, letting each prediction depend on what came before"
      },
      {
        "letter": "B",
        "text": "It weighs relationships among all parts of the input simultaneously through attention"
      },
      {
        "letter": "C",
        "text": "It combines the votes of many independently trained decision trees"
      },
      {
        "letter": "D",
        "text": "It slides learned filters across the image to detect local patterns such as edges and textures"
      }
    ],
    "answer": "D",
    "explanation": "This is a feedforward network with convolution in at least one layer: learned filters pass over local regions of the input, making it well suited to spatial data like medical images. Option A describes a recurrent network, B describes a transformer's attention mechanism, and C describes a random forest ensemble."
  },
  {
    "id": "q-628",
    "area": "ch9",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "Before an insurer trains an underwriting model, its governance policy mandates a data quality review. What does this step examine?",
    "options": [
      {
        "letter": "A",
        "text": "Whether the model's predictions meet the accuracy targets set for release"
      },
      {
        "letter": "B",
        "text": "Whether the dataset is complete and free of systematic deviations that would impair its usefulness"
      },
      {
        "letter": "C",
        "text": "Whether a lawful basis exists for processing each category of personal data involved"
      },
      {
        "letter": "D",
        "text": "Whether the data is encrypted and access to it is restricted to authorized staff"
      }
    ],
    "answer": "B",
    "explanation": "This process checks data for completeness, systematic deviations such as bias, and other factors that would impair its usefulness for an AI system. Option A is model evaluation rather than a data check, C is a legal or DPIA review, and D is a data security assessment."
  },
  {
    "id": "q-629",
    "area": "ch4",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A hospital applies deidentification to patient records before providing them to an AI vendor for model development. What did the hospital do to the records?",
    "options": [
      {
        "letter": "A",
        "text": "Encrypted them so that only the vendor's authorized staff can decrypt and read them"
      },
      {
        "letter": "B",
        "text": "Replaced the real records with artificial ones generated to mimic their statistical properties"
      },
      {
        "letter": "C",
        "text": "Removed or generalized the fields that could reveal who each patient is"
      },
      {
        "letter": "D",
        "text": "Moved them into a restricted enclave the vendor can query but never export"
      }
    ],
    "answer": "C",
    "explanation": "The term covers techniques such as pseudonymization, aggregation, and generalization that remove or obscure personally identifying information from a dataset. Option A is encryption, a security control that leaves the identifying data intact; B describes synthetic data generation; and D describes a data clean room or enclave arrangement."
  },
  {
    "id": "q-630",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Following adoption of the EU AI Act, a compliance team maps which supervisory tasks belong to the European AI Office. Which task belongs on that list?",
    "options": [
      {
        "letter": "A",
        "text": "Coordinating supervision of general-purpose AI models with systemic risk and issuing guidance"
      },
      {
        "letter": "B",
        "text": "Conducting day-to-day market surveillance of high-risk systems within each member state"
      },
      {
        "letter": "C",
        "text": "Accrediting the notified bodies that perform third-party conformity assessments"
      },
      {
        "letter": "D",
        "text": "Hearing individual complaints about automated decisions and awarding remedies"
      }
    ],
    "answer": "A",
    "explanation": "This body, housed within the European Commission, coordinates supervision of GPAI models with systemic risk, maintains the public database of high-risk AI systems, and issues guidance and best practices. Option B belongs to national competent authorities, C to national accreditation bodies, and D to data protection authorities and courts."
  },
  {
    "id": "q-631",
    "area": "ch4",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "Five hospitals want to jointly improve a sepsis-prediction model but cannot share patient records, so they adopt federated learning. How does the joint model get trained?",
    "options": [
      {
        "letter": "A",
        "text": "Each hospital anonymizes its records and uploads them to a shared central repository"
      },
      {
        "letter": "B",
        "text": "A trusted third party pools the encrypted records and trains on them after decryption"
      },
      {
        "letter": "C",
        "text": "The hospitals compute on secret-shared data so no party ever sees another's plaintext inputs"
      },
      {
        "letter": "D",
        "text": "Each hospital trains on its own data locally, and only model updates leave the premises"
      }
    ],
    "answer": "D",
    "explanation": "In this approach, training happens across decentralized sites using local data, and only model parameters or updates are exchanged, so raw data never moves to a central server. Options A and B still centralize the data, defeating the privacy benefit, and C describes secure multi-party computation, a different privacy-enhancing technology."
  },
  {
    "id": "q-632",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A provider placed its general-purpose AI model on the EU market in June 2025. Applying the GPAI transitional period, when must the model fully comply with the AI Act's obligations for such models?",
    "options": [
      {
        "letter": "A",
        "text": "Immediately, when those obligations began applying on August 2, 2025"
      },
      {
        "letter": "B",
        "text": "By August 2, 2027, two years after those obligations took effect"
      },
      {
        "letter": "C",
        "text": "By August 2, 2026, alongside the Act's main high-risk requirements"
      },
      {
        "letter": "D",
        "text": "Only if the model undergoes a substantial modification after the rules took effect"
      }
    ],
    "answer": "B",
    "explanation": "Models placed on the market before August 2, 2025 benefit from a grace period running until August 2, 2027 to reach full compliance with the Act's GPAI obligations. Option A applies to models placed on the market after that date, C confuses the timeline with the general application date for other obligations, and D describes the legacy treatment of certain pre-existing high-risk systems, not GPAI models."
  },
  {
    "id": "q-633",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A manufacturer with an enterprise risk program built on ISO 31000:2018 is now adopting ISO/IEC 23894 for its AI systems. What should the risk team expect?",
    "options": [
      {
        "letter": "A",
        "text": "To retire the older standard, since the AI-specific standard replaces it"
      },
      {
        "letter": "B",
        "text": "To pursue certification, since the older standard defines an auditable management system"
      },
      {
        "letter": "C",
        "text": "To keep its existing principles, framework, and process structure, with AI-specific guidance layered on"
      },
      {
        "letter": "D",
        "text": "To run two separate programs, because the standards use incompatible risk vocabularies"
      }
    ],
    "answer": "C",
    "explanation": "This is the generic risk management standard whose clause structure — principles (Clause 4), framework (Clause 5), and process (Clause 6) — ISO/IEC 23894 mirrors and extends with AI-specific guidance; it is extended, not replaced. Option A wrongly assumes replacement, B confuses it with a certifiable management system standard like ISO/IEC 42001, and D contradicts the deliberate clause-by-clause alignment."
  },
  {
    "id": "q-634",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An AI governance team at a logistics firm begins the Map function of the NIST AI RMF for a new route-optimization system. Which activity are they performing?",
    "options": [
      {
        "letter": "A",
        "text": "Establishing the system's purpose and context and identifying whom its risks could affect"
      },
      {
        "letter": "B",
        "text": "Applying quantitative and qualitative methods to score the risks already identified"
      },
      {
        "letter": "C",
        "text": "Prioritizing the scored risks and allocating resources to respond to them"
      },
      {
        "letter": "D",
        "text": "Writing the organization-wide policies and accountability structures for AI risk"
      }
    ],
    "answer": "A",
    "explanation": "This NIST AI RMF function establishes context to frame AI risks: understanding system purpose and categorization, weighing benefits and costs, and connecting risks to impacts on individuals and society. Option B describes the Measure function, C the Manage function, and D the Govern function."
  },
  {
    "id": "q-635",
    "area": "ch9",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "A legal-tech firm runs named entity recognition over a corpus of merger agreements. What output does the pipeline produce?",
    "options": [
      {
        "letter": "A",
        "text": "A judgment of whether each clause is favorable or unfavorable to the client"
      },
      {
        "letter": "B",
        "text": "A short abstract summarizing the key obligations in each agreement"
      },
      {
        "letter": "C",
        "text": "Clusters of agreements grouped by the themes they share"
      },
      {
        "letter": "D",
        "text": "Labeled spans marking parties, dates, jurisdictions, and monetary amounts in the text"
      }
    ],
    "answer": "D",
    "explanation": "This NLP task recognizes and labels the names of entities in word sequences and assigns them categories such as person, organization, date, or amount. Option A is classification or sentiment analysis, B is text summarization, and C is topic modeling or clustering."
  },
  {
    "id": "q-636",
    "area": "ch11",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "Before building a commercial product on a freely downloadable language model, in-house counsel reviews the model's open source agreement. What is counsel most likely checking?",
    "options": [
      {
        "letter": "A",
        "text": "The uptime commitments and support response times the model's maintainers promise"
      },
      {
        "letter": "B",
        "text": "Whether commercial use is permitted and whether derivative models must carry the same terms"
      },
      {
        "letter": "C",
        "text": "How the vendor will process the company's personal data, as the GDPR requires"
      },
      {
        "letter": "D",
        "text": "The indemnities offered if the model's outputs infringe a third party's copyright"
      }
    ],
    "answer": "B",
    "explanation": "These license terms govern use of openly released models and may restrict commercial use, require attribution, or impose copyleft provisions that bind derivatives to the same terms. Option A describes a service-level agreement, C a data processing agreement, and D indemnification clauses typical of negotiated proprietary vendor contracts."
  },
  {
    "id": "q-637",
    "area": "ch10",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A fintech's governance board will not sign off on launching a credit-scoring model until it passes a production readiness evaluation. What does this gate involve?",
    "options": [
      {
        "letter": "A",
        "text": "Continuous monitoring of the live system for drift and degraded performance"
      },
      {
        "letter": "B",
        "text": "Unit and integration testing of the codebase during each development sprint"
      },
      {
        "letter": "C",
        "text": "A structured pre-launch review of safety, benchmarked performance, regulatory conformity, and operational plans"
      },
      {
        "letter": "D",
        "text": "Stress-testing the serving infrastructure to confirm it can absorb peak traffic"
      }
    ],
    "answer": "C",
    "explanation": "This is a structured pre-deployment review confirming the system is production-worthy across safety, accountability, suitability for its intended context, regulatory conformity, performance benchmarking, and operational planning. Option A happens after deployment, B is routine development testing, and D is load testing, which addresses only one narrow operational dimension."
  },
  {
    "id": "q-638",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An analytics team building a demand-forecasting tool from daily sales history chooses a recurrent neural network. What makes this architecture suited to the task?",
    "options": [
      {
        "letter": "A",
        "text": "It feeds each step's output back into the network, so earlier observations shape later predictions"
      },
      {
        "letter": "B",
        "text": "It applies sliding filters that detect local patterns within a fixed window of the input"
      },
      {
        "letter": "C",
        "text": "It retrains itself repeatedly on the same data until the error stops improving"
      },
      {
        "letter": "D",
        "text": "It attends to every time step at once rather than processing them in order"
      }
    ],
    "answer": "A",
    "explanation": "In this architecture, the current layer receives both the previous layer's output and the output of the previous processing step, giving it a memory of earlier sequence elements — ideal for time-series data. Option B describes a convolutional network, C is a lay misreading of the name as repeated retraining, and D describes a transformer's attention mechanism."
  },
  {
    "id": "q-639",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A vendor describes its scheduling engine as built on soft computing techniques. What characterizes this approach?",
    "options": [
      {
        "letter": "A",
        "text": "It runs entirely in software, requiring no specialized hardware accelerators"
      },
      {
        "letter": "B",
        "text": "It relies on lightweight models small enough to run on low-power edge devices"
      },
      {
        "letter": "C",
        "text": "It guarantees exact, provably correct answers through formal deterministic methods"
      },
      {
        "letter": "D",
        "text": "It tolerates imprecision, uncertainty, and partial truth to reach robust, workable solutions"
      }
    ],
    "answer": "D",
    "explanation": "This field of data processing tolerates and exploits imprecision, uncertainty, and partial truth — as in fuzzy logic — to make problem-solving more transparent and robust. Options A and B are lay misreadings of 'soft' as software-only or lightweight, and C describes the opposite: conventional 'hard' computing with exact deterministic methods."
  },
  {
    "id": "q-640",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A data scientist trains a support vector machine to flag fraudulent insurance claims. How does the trained model decide where to draw the line between the two classes?",
    "options": [
      {
        "letter": "A",
        "text": "It averages the predictions of many decision trees fitted on random subsets of the data"
      },
      {
        "letter": "B",
        "text": "It selects the boundary that leaves the widest possible gap to the closest training examples of each class"
      },
      {
        "letter": "C",
        "text": "It assigns each new claim to the class of the most similar claims it has already seen"
      },
      {
        "letter": "D",
        "text": "It multiplies the estimated probabilities of each feature value occurring within each class"
      }
    ],
    "answer": "B",
    "explanation": "This algorithm finds the decision boundary with maximum margin — the separator farthest from the nearest training points of each class. Option A describes a random forest, C describes k-nearest neighbors, and D describes a naive Bayes classifier."
  },
  {
    "id": "q-641",
    "area": "ch2",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A hospital system's AI governance lead is tasked with standing up a training and awareness program. What should the lead deliver?",
    "options": [
      {
        "letter": "A",
        "text": "A pipeline that retrains the organization's models on fresh clinical data each quarter"
      },
      {
        "letter": "B",
        "text": "A technical certification track reserved for the data science staff"
      },
      {
        "letter": "C",
        "text": "Education on AI terminology, strategy, and governance, tailored to each role across the organization"
      },
      {
        "letter": "D",
        "text": "A public campaign informing patients about the hospital's use of AI tools"
      }
    ],
    "answer": "C",
    "explanation": "This organizational program delivers AI terminology, strategy, and governance education to all stakeholders, tailored to how each role interacts with AI. Option A is a lay misreading of 'training' as model retraining, B is too narrow because the program covers all stakeholders, and D is external communication or transparency notice rather than internal education."
  },
  {
    "id": "q-642",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An ISO/IEC 22989-aligned quality plan requires verification & validation before an autonomous warehouse forklift system ships. Which pair of questions does this activity answer?",
    "options": [
      {
        "letter": "A",
        "text": "Does the system meet its specifications, and does it fulfill its intended use in its target context?"
      },
      {
        "letter": "B",
        "text": "Are users who they claim to be, and are their access rights correctly enforced?"
      },
      {
        "letter": "C",
        "text": "Is the training data accurate, and has its provenance been independently confirmed?"
      },
      {
        "letter": "D",
        "text": "Can the system withstand attack, and does it protect the personal data it processes?"
      }
    ],
    "answer": "A",
    "explanation": "The paired activities test a system against its specifications and confirm it satisfies its intended use in the operational context. Option B is a lay misreading of 'verification' as identity checking, C is data quality and provenance review, and D covers security and privacy testing, which are separate assurance activities."
  },
  {
    "id": "q-643",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "While documenting an insurance pricing model for an internal audit, a data scientist notes that every neuron in the network applies an activation function. What role does this component play?",
    "options": [
      {
        "letter": "A",
        "text": "It assigns the initial random values to the network's weights before training begins"
      },
      {
        "letter": "B",
        "text": "It determines whether the trained model is approved for release into production"
      },
      {
        "letter": "C",
        "text": "It transforms the weighted sum of a neuron's inputs, typically in a nonlinear way, before passing the result onward"
      },
      {
        "letter": "D",
        "text": "It gradually reduces the step size the optimizer takes as training converges"
      }
    ],
    "answer": "C",
    "explanation": "An activation function is applied to the weighted combination of all inputs to a neuron and is typically nonlinear, which is what lets networks model complex relationships. Option A describes weight initialization, B is a deployment or release gate (a lay misreading of 'activation'), and D describes a learning-rate schedule."
  },
  {
    "id": "q-644",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A Rotterdam-based firm acts as the AI importer for a high-risk fleet-routing system built by a Singaporean developer. Under the EU AI Act, what must the firm do before making the system available on the EU market?",
    "options": [
      {
        "letter": "A",
        "text": "Verify that the foreign provider has completed the required conformity assessment and that the system bears the CE marking"
      },
      {
        "letter": "B",
        "text": "Carry out the conformity assessment itself and draw up the system's technical documentation"
      },
      {
        "letter": "C",
        "text": "Ensure human oversight arrangements and log retention during the system's operational use"
      },
      {
        "letter": "D",
        "text": "Obtain a marketing authorization for the system from the European AI Office"
      }
    ],
    "answer": "A",
    "explanation": "Under the EU AI Act, an importer places an AI system from a third country on the EU market and must verify that the provider has carried out the conformity procedure and that the CE marking and documentation are in place before distribution. Option B describes the provider's own obligations, C describes deployer duties during use, and D invents an authorization the AI Office does not issue."
  },
  {
    "id": "q-645",
    "area": "ch3",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A hospital's procurement office conducts AI vendor due diligence before licensing a diagnostic triage tool. Which line of inquiry most clearly distinguishes this review from the hospital's standard software vendor assessment?",
    "options": [
      {
        "letter": "A",
        "text": "Confirming the vendor's financial stability and cyber-liability insurance coverage"
      },
      {
        "letter": "B",
        "text": "Reviewing the vendor's SOC 2 report, uptime commitments, and penetration-test results"
      },
      {
        "letter": "C",
        "text": "Checking references with other health systems that already use the product"
      },
      {
        "letter": "D",
        "text": "Probing the provenance of the training data, the quality of its labeling, and how the model's outputs can be explained"
      }
    ],
    "answer": "D",
    "explanation": "AI vendor due diligence extends ordinary procurement review to AI-specific risks such as model and training-data provenance, labeling quality, explainability, safety filters, and vulnerable dependencies. Options A, B, and C are all legitimate checks, but they belong to conventional third-party risk reviews that apply to any software supplier."
  },
  {
    "id": "q-646",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A newswire service integrates an automatic summarization model into its editorial workflow. What output should editors expect the model to produce for each incoming article?",
    "options": [
      {
        "letter": "A",
        "text": "A ranked list of related articles retrieved from the archive"
      },
      {
        "letter": "B",
        "text": "A shorter text that retains the article's important semantic content"
      },
      {
        "letter": "C",
        "text": "A version of the article rendered in the reader's preferred language"
      },
      {
        "letter": "D",
        "text": "A set of topic labels assigning the article to sections of the site"
      }
    ],
    "answer": "B",
    "explanation": "Automatic summarization is the task of shortening natural language content while preserving its important semantic information. Option A describes information retrieval, C describes machine translation, and D describes text classification — all common NLP tasks, but not this one."
  },
  {
    "id": "q-647",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A university research group describes its work as falling squarely within connectionism. Which approach is the group most likely taking?",
    "options": [
      {
        "letter": "A",
        "text": "Encoding expert knowledge as explicit if-then rules that a reasoning engine executes"
      },
      {
        "letter": "B",
        "text": "Linking multiple independent AI services together through shared APIs and data pipelines"
      },
      {
        "letter": "C",
        "text": "Evolving candidate programs through mutation and selection across many generations"
      },
      {
        "letter": "D",
        "text": "Modeling cognition with networks of many simple interconnected computational units"
      }
    ],
    "answer": "D",
    "explanation": "Connectionism is a form of cognitive modeling that uses networks of interconnected, generally simple computational units — the paradigm underlying neural networks. Option A describes the symbolic paradigm, B is a lay misreading of 'connection' as system integration, and C describes evolutionary computation."
  },
  {
    "id": "q-648",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A startup providing a general-purpose AI model signs the EU's GPAI Code of Practice and asks counsel what the Copyright Chapter commits it to, given that its model is not classified as systemic-risk. Which answer is correct?",
    "options": [
      {
        "letter": "A",
        "text": "It applies to the startup regardless of risk classification and requires a policy honoring text-and-data-mining opt-out reservations under the CDSM Directive, plus measures against infringing outputs"
      },
      {
        "letter": "B",
        "text": "It does not apply, because that chapter binds only providers of models designated as posing systemic risk"
      },
      {
        "letter": "C",
        "text": "It requires the startup to obtain a license for every dataset used in training before the model may stay on the market"
      },
      {
        "letter": "D",
        "text": "It requires the startup to indemnify downstream deployers against any infringement claims arising from model outputs"
      }
    ],
    "answer": "A",
    "explanation": "The Copyright Chapter of the GPAI Code of Practice applies to all signatory GPAI providers, not just systemic-risk ones, and centers on a copyright policy, compliance with Article 4(3) CDSM text-and-data-mining opt-outs, and safeguards against infringing outputs. Option B confuses it with the Safety and Security Chapter's scope, while C and D overstate the commitments — the chapter requires neither universal licensing nor downstream indemnification."
  },
  {
    "id": "q-649",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "Before training a demand-forecasting model, a retail analytics team performs data sampling on two years of transaction records. What is the team doing?",
    "options": [
      {
        "letter": "A",
        "text": "Generating synthetic transactions to enlarge the training corpus"
      },
      {
        "letter": "B",
        "text": "Correcting mislabeled entries and removing duplicate records"
      },
      {
        "letter": "C",
        "text": "Selecting a subset of records expected to show the same patterns and trends as the full dataset"
      },
      {
        "letter": "D",
        "text": "Dividing the records into separate training, validation, and test partitions"
      }
    ],
    "answer": "C",
    "explanation": "Data sampling is the process of selecting a subset of data expected to exhibit patterns and trends similar to the larger dataset. Option A describes synthetic data generation or augmentation, B describes data cleansing, and D describes dataset partitioning — related preparation steps, but distinct from sampling."
  },
  {
    "id": "q-650",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "An auditor reviewing a public agency's benefits-eligibility engine is told the system produces deterministic output. What can the auditor rely on when testing it?",
    "options": [
      {
        "letter": "A",
        "text": "Every decision the system issues will be substantively correct under the governing regulations"
      },
      {
        "letter": "B",
        "text": "Submitting the same applicant data twice will always return exactly the same result"
      },
      {
        "letter": "C",
        "text": "Each decision will be accompanied by a calibrated confidence score"
      },
      {
        "letter": "D",
        "text": "The system will generate a plain-language rationale for each determination"
      }
    ],
    "answer": "B",
    "explanation": "Deterministic output means results are entirely predictable given the same inputs, as in traditional rule-based systems, in contrast to probabilistic AI outputs. That guarantees reproducibility, not correctness (A), and it says nothing about confidence scoring (C) or explanation generation (D)."
  },
  {
    "id": "q-651",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A US policy analyst is tracing the origin of a NIST publication back to a directive in Executive Order 14110. Which document is the analyst most likely researching?",
    "options": [
      {
        "letter": "A",
        "text": "The AI Risk Management Framework 1.0, NIST's voluntary framework for trustworthy AI"
      },
      {
        "letter": "B",
        "text": "Special Publication 800-53, the catalog of security and privacy controls for federal systems"
      },
      {
        "letter": "C",
        "text": "The NIST Privacy Framework for managing privacy risk in products and services"
      },
      {
        "letter": "D",
        "text": "NIST AI 600-1, the Generative AI Profile that accompanies the AI RMF"
      }
    ],
    "answer": "D",
    "explanation": "Executive Order 14110, the 2023 US order on safe, secure, and trustworthy AI, directed NIST to develop the Generative AI Profile published as NIST AI 600-1, a companion to the AI RMF. The AI RMF 1.0 itself (A) predates the order and stems from a congressional mandate, while SP 800-53 (B) and the Privacy Framework (C) are unrelated to the order's AI directives."
  },
  {
    "id": "q-652",
    "area": "ch10",
    "domain": "Domain III",
    "difficulty": "Hard",
    "question": "The monitoring team for an HR screening model reports that a feedback loop has emerged since deployment. Which observation supports that conclusion?",
    "options": [
      {
        "letter": "A",
        "text": "The model's shortlisting decisions determine who gets hired, hiring records feed the next retraining cycle, and the model's original skew grows stronger each cycle"
      },
      {
        "letter": "B",
        "text": "Recruiters have been submitting thumbs-up and thumbs-down ratings on candidate recommendations through the interface"
      },
      {
        "letter": "C",
        "text": "The applicant population has shifted demographically since launch, degrading the model's accuracy against its training baseline"
      },
      {
        "letter": "D",
        "text": "An external actor has been submitting fabricated applications designed to corrupt the next training dataset"
      }
    ],
    "answer": "A",
    "explanation": "A feedback loop is a cycle in which a system's outputs influence its future inputs, potentially amplifying biases or errors over time — here, the model shapes hiring outcomes that then become its own training data. Option B is ordinary user feedback collection, C describes data or population drift from external change, and D describes a data-poisoning attack."
  },
  {
    "id": "q-653",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A law firm associate drafting a brief with a generative AI assistant is warned by the firm's AI policy about hallucination. Which incident is that policy warning about?",
    "options": [
      {
        "letter": "A",
        "text": "The assistant declines to answer a legitimate legal question because it misjudges the request as improper"
      },
      {
        "letter": "B",
        "text": "The assistant reproduces confidential language from another client's matter in its draft"
      },
      {
        "letter": "C",
        "text": "The assistant cites a convincing, well-formatted judicial opinion that does not actually exist"
      },
      {
        "letter": "D",
        "text": "The assistant's drafting quality slowly degrades as the law evolves beyond its training data"
      }
    ],
    "answer": "C",
    "explanation": "Hallucination is the phenomenon in which a model generates plausible-sounding but factually incorrect or fabricated information, such as an invented case citation — a signature risk of LLM deployment. Option A is over-refusal, B is a confidentiality or data-leakage failure, and D describes model staleness or drift."
  },
  {
    "id": "q-654",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A capabilities taxonomy in a governance briefing classifies a logistics company's autonomous delivery vehicles as limited memory AI. What does this classification indicate about the vehicles' software?",
    "options": [
      {
        "letter": "A",
        "text": "It responds only to current sensor readings and carries no stored experience between moments"
      },
      {
        "letter": "B",
        "text": "It retains recent observations, such as surrounding traffic, and uses that stored experience to improve its decisions"
      },
      {
        "letter": "C",
        "text": "It models the intentions and likely beliefs of nearby drivers and pedestrians"
      },
      {
        "letter": "D",
        "text": "Its onboard storage is deliberately capped, so it cannot process high-resolution map data"
      }
    ],
    "answer": "B",
    "explanation": "Limited memory AI retains information for short periods and draws on past experience to improve decisions, with autonomous vehicles processing recent traffic data as the classic example. Option A describes reactive machines, the tier below it in the standard taxonomy; C describes theory-of-mind AI, a tier above; and D is a lay misreading about hardware capacity."
  },
  {
    "id": "q-655",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A machinery manufacturer's high-risk AI safety component is suspected of non-compliance, and a member-state authority invokes its market surveillance powers under the EU AI Act. Which action falls within those powers?",
    "options": [
      {
        "letter": "A",
        "text": "Sentencing the manufacturer's responsible managers to criminal penalties"
      },
      {
        "letter": "B",
        "text": "Reclassifying the system as a prohibited practice by amending the Act's annexes"
      },
      {
        "letter": "C",
        "text": "Compelling access to technical documentation, conducting unannounced inspections, and requiring the system's withdrawal from the market"
      },
      {
        "letter": "D",
        "text": "Revoking the designation of the notified body that certified the system"
      }
    ],
    "answer": "C",
    "explanation": "Market surveillance powers under the EU AI Act include requiring access to documentation, performing unannounced inspections and digital audits, mandating corrective actions, suspending or prohibiting marketing, and ordering withdrawal or recall. Criminal sentencing (A) belongs to member-state criminal law, amending annexes (B) is a European Commission power, and withdrawing a notified body's designation (D) rests with the notifying authority."
  },
  {
    "id": "q-656",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A Spanish company harmed by a competitor's non-compliant recruitment AI system is advised to raise the matter with the national competent authorities rather than a Brussels institution. Under the EU AI Act, why is that the right channel?",
    "options": [
      {
        "letter": "A",
        "text": "Member-state authorities handle complaints, investigate breaches, and impose penalties for AI systems within their own jurisdiction"
      },
      {
        "letter": "B",
        "text": "Only bodies at member-state level may certify high-risk systems before they are placed on the market"
      },
      {
        "letter": "C",
        "text": "Member-state authorities draft the harmonized technical standards that give systems a presumption of conformity"
      },
      {
        "letter": "D",
        "text": "Member-state authorities supervise providers of general-purpose AI models across the entire Union"
      }
    ],
    "answer": "A",
    "explanation": "National competent authorities under the EU AI Act are the one or more bodies each member state designates for market surveillance, complaint handling, breach investigation, and penalties within their jurisdiction. Certification of high-risk systems (B) is done by notified bodies, harmonized standards (C) come from European standardization organizations like CEN-CENELEC, and Union-wide GPAI supervision (D) belongs to the European AI Office."
  },
  {
    "id": "q-657",
    "area": "ch4",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A chatbot vendor's data governance program requires scrubbing personally identifiable information from conversation logs before they are reused for model tuning. Which log element still needs to be removed under this requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Aggregated counts of daily active users per region"
      },
      {
        "letter": "B",
        "text": "Transcripts that have been irreversibly anonymized so they can no longer be linked to anyone"
      },
      {
        "letter": "C",
        "text": "The system prompts and configuration text captured alongside each session"
      },
      {
        "letter": "D",
        "text": "The IP addresses and device identifiers recorded with each user session"
      }
    ],
    "answer": "D",
    "explanation": "Personally identifiable information is any information that can identify a specific individual directly or indirectly, which includes IP addresses, device identifiers, location data, and other online identifiers. Aggregated statistics (A) and properly anonymized transcripts (B) no longer relate to an identifiable person, and system configuration text (C) contains no personal data at all."
  },
  {
    "id": "q-658",
    "area": "ch11",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "During contract negotiations for a third-party underwriting model, a bank's counsel briefs the board on proprietary model deployment obligations. Which point best captures what counsel is warning about?",
    "options": [
      {
        "letter": "A",
        "text": "The bank must release any fine-tuned derivative of the model under the same public license as the original"
      },
      {
        "letter": "B",
        "text": "The bank takes on heavier contractual duties while depending on vendor claims it cannot independently verify, raising its liability exposure and its reliance on the vendor for updates and incident support"
      },
      {
        "letter": "C",
        "text": "The bank automatically assumes the provider role for the model and must register it in the EU database under its own name"
      },
      {
        "letter": "D",
        "text": "The bank must retrain an equivalent model in-house within a defined period to eliminate its dependence on the vendor"
      }
    ],
    "answer": "B",
    "explanation": "Proprietary model deployment obligations are the heightened duties that accompany deploying a closed third-party model: increased contractual obligations, reliance on vendor claims that cannot be independently verified, higher potential liability exposure, and dependence on the vendor for updates, incident support, and continuity. Option A imports a copyleft concept from open-source licensing, C describes role reassignment that occurs only in specific circumstances such as substantial modification or rebranding, and D invents a retraining duty that no framework imposes."
  },
  {
    "id": "q-659",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A mid-sized model developer whose general-purpose model falls below the systemic-risk threshold signs the EU's GPAI Code of Practice, then asks how the Safety & Security Chapter affects its compliance program. What is the accurate answer?",
    "options": [
      {
        "letter": "A",
        "text": "It requires the developer to stand up serious-incident reporting and cybersecurity measures like every other signatory"
      },
      {
        "letter": "B",
        "text": "It applies in a lighter, simplified form because the developer qualifies as a smaller enterprise"
      },
      {
        "letter": "C",
        "text": "It requires annual independent penetration testing of the model before each new release"
      },
      {
        "letter": "D",
        "text": "It does not bind the developer, because that chapter's commitments attach only to providers of models classified as posing systemic risk"
      }
    ],
    "answer": "D",
    "explanation": "The Safety & Security Chapter of the GPAI Code of Practice applies only to providers of GPAI models with systemic risk, covering a safety and security framework, risk identification and analysis, mitigations, serious-incident reporting, and cybersecurity. A non-systemic-risk signatory is bound instead by the chapters that apply to all providers. Options A and C wrongly extend systemic-risk commitments to every signatory, and B invents an SME-tiered version of the chapter."
  },
  {
    "id": "q-660",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A telecom call center adds a speech recognition component to its quality-assurance pipeline. What does this component produce from each recorded call?",
    "options": [
      {
        "letter": "A",
        "text": "A text representation of the words the caller and agent spoke"
      },
      {
        "letter": "B",
        "text": "A determination of which enrolled individual is speaking on the line"
      },
      {
        "letter": "C",
        "text": "A synthesized spoken rendering of the agent's written call notes"
      },
      {
        "letter": "D",
        "text": "A classification of the caller's emotional state based on vocal tone"
      }
    ],
    "answer": "A",
    "explanation": "Speech recognition converts a speech signal into a representation of the speech content — that is, it turns spoken audio into text. Option B describes speaker recognition or voice biometrics, C describes speech synthesis (text-to-speech, the reverse direction), and D describes emotion recognition."
  },
  {
    "id": "q-661",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A regulator reviewing an insurer's claims-routing tool learns it was built with symbolic AI. What should the regulator expect to find when examining how the tool works?",
    "options": [
      {
        "letter": "A",
        "text": "Layers of numeric weights distributed across a trained network, with logic that is hard to trace"
      },
      {
        "letter": "B",
        "text": "Explicitly defined rules that manipulate structured representations, making the decision logic inspectable"
      },
      {
        "letter": "C",
        "text": "A retrieval mechanism that matches each new claim to the most similar historical cases"
      },
      {
        "letter": "D",
        "text": "Mathematical and logical notation used in the interface to present results to adjusters"
      }
    ],
    "answer": "B",
    "explanation": "Symbolic AI manipulates symbols and structures according to explicitly defined rules, which makes its reasoning inherently more transparent and inspectable. Option A describes the connectionist approach, C describes case-based or nearest-neighbor reasoning, and D is a lay misreading of 'symbolic' as referring to on-screen notation."
  },
  {
    "id": "q-662",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A compliance lead maps her company's commitments under the Transparency Chapter of the GPAI Code of Practice. Which obligation belongs on that list for every signatory provider?",
    "options": [
      {
        "letter": "A",
        "text": "Embedding machine-readable markings so synthetic audio and images are detectable as artificially generated"
      },
      {
        "letter": "B",
        "text": "Notifying individuals whenever they are interacting with an AI system rather than a human"
      },
      {
        "letter": "C",
        "text": "Maintaining model documentation and supplying required information to downstream providers, consistent with the Annex XI and XII obligations of Article 53"
      },
      {
        "letter": "D",
        "text": "Publishing the model's weights and training code for public scrutiny"
      }
    ],
    "answer": "C",
    "explanation": "The Transparency Chapter of the GPAI Code of Practice applies to all GPAI providers and operationalizes Articles 53(1)(a)-(b): preparing and maintaining model documentation and providing information to downstream providers per Annexes XI and XII. Options A and B are Article 50 transparency duties for AI systems, a different part of the Act, and D confuses documentation duties with open-sourcing, which the chapter does not require."
  },
  {
    "id": "q-663",
    "area": "ch9",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A hospital's AI assurance team reports that its chest X-ray triage model is vulnerable to adversarial example attacks. Which finding from their testing supports that conclusion?",
    "options": [
      {
        "letter": "A",
        "text": "Analysts submitted crafted prompts that caused the system to disclose its internal configuration"
      },
      {
        "letter": "B",
        "text": "Analysts inserted mislabeled scans into the training pipeline, degrading the model over several retraining cycles"
      },
      {
        "letter": "C",
        "text": "Analysts added tiny pixel-level changes to scans, imperceptible to radiologists, that made the model miss visible abnormalities"
      },
      {
        "letter": "D",
        "text": "Analysts issued high volumes of structured queries and reconstructed a functional copy of the model"
      }
    ],
    "answer": "C",
    "explanation": "An adversarial example is an input deliberately crafted with small, often human-imperceptible perturbations that cause a model to produce incorrect predictions. Option A describes prompt injection, B describes data poisoning of the training set, and D describes model extraction — all real attacks on AI systems, but none involves manipulating an individual inference-time input."
  },
  {
    "id": "q-664",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A governance analyst is mapping stakeholders for a warehouse robotics deployment using the ISO/IEC 22989 role taxonomy. Which party should she record as the AI manufacturer?",
    "options": [
      {
        "letter": "A",
        "text": "The cloud vendor that hosts the model and exposes it through an API"
      },
      {
        "letter": "B",
        "text": "The logistics company that operates the robots in its distribution centers"
      },
      {
        "letter": "C",
        "text": "The warehouse employees whose movements the robots' sensors track"
      },
      {
        "letter": "D",
        "text": "The robotics firm that builds and assembles the system into a finished product"
      }
    ],
    "answer": "D",
    "explanation": "Under ISO/IEC 22989, the AI manufacturer is the entity that builds or assembles the AI system. Option A is closer to an AI platform or service provider, B is the organization using the system in operation, and C describes AI subjects — the people affected by or sensed by the system."
  },
  {
    "id": "q-665",
    "area": "ch4",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A bank rejects consumer loan applications using a fully automated scoring model with no employee involvement. Its privacy counsel warns that this practice implicates Article 22 GDPR. To address that concern, what must the bank do?",
    "options": [
      {
        "letter": "A",
        "text": "Give declined applicants a way to obtain meaningful human involvement in the decision and to contest the outcome"
      },
      {
        "letter": "B",
        "text": "Complete a data protection impact assessment before continuing to operate the scoring model"
      },
      {
        "letter": "C",
        "text": "Notify its lead supervisory authority within 72 hours of any incident affecting applicant data"
      },
      {
        "letter": "D",
        "text": "Appoint a data protection officer to oversee all credit-decisioning activities"
      }
    ],
    "answer": "A",
    "explanation": "Article 22 GDPR grants data subjects the right not to be subject to decisions based solely on automated processing that produce legal or similarly significant effects, and where such processing is permitted it requires safeguards including the right to obtain human intervention and to contest the decision. Option B relates to Article 35 (DPIAs), C to Article 33 breach notification, and D to Article 37 DPO designation — real GDPR duties, but not what Article 22 requires."
  },
  {
    "id": "q-666",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An insurance underwriting team tells auditors that its risk-assessment tool is built on a Bayesian network. Which description of the tool's internal structure is consistent with that claim?",
    "options": [
      {
        "letter": "A",
        "text": "Layers of interconnected artificial neurons whose weights are tuned through backpropagation"
      },
      {
        "letter": "B",
        "text": "A directed acyclic graph whose nodes represent variables linked by conditional probability relationships"
      },
      {
        "letter": "C",
        "text": "An ensemble of decision trees whose individual outputs are combined by majority vote"
      },
      {
        "letter": "D",
        "text": "A library of expert-written if-then rules applied in sequence to each application"
      }
    ],
    "answer": "B",
    "explanation": "A Bayesian network is a probabilistic model that represents variables and their conditional dependencies in a directed acyclic graph and uses probabilistic inference to update beliefs from evidence. Option A describes a neural network, C a random-forest-style tree ensemble, and D a rule-based expert system — none of which encodes probabilistic dependencies in a graph structure."
  },
  {
    "id": "q-667",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A news organization deploying a generative AI drafting tool builds its risk program around NIST AI 600-1 and assigns one working group to content provenance. Which activity belongs to that working group?",
    "options": [
      {
        "letter": "A",
        "text": "Running structured red-team exercises against the tool before each release"
      },
      {
        "letter": "B",
        "text": "Verifying that the licenses on training datasets permit commercial use of the material"
      },
      {
        "letter": "C",
        "text": "Standing up a process to report and share information about harmful output events"
      },
      {
        "letter": "D",
        "text": "Attaching verifiable metadata and markings that record where generated media came from and how it was edited"
      }
    ],
    "answer": "D",
    "explanation": "Content provenance in NIST AI 600-1 concerns tracking the origin and history of digital content, for example through provenance metadata and watermarking of AI-generated media; it is one of the profile's four primary generative AI considerations. Option A is pre-deployment testing, C is incident disclosure — the other named considerations alongside governance — and B is training-data license diligence, which concerns the provenance of inputs rather than of generated content."
  },
  {
    "id": "q-668",
    "area": "ch4",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A German retailer wants a California-based vendor to fine-tune a recommendation model using its EU customers' purchase histories. Its DPO objects that the plan involves a cross-border data transfer. What would resolve the DPO's objection?",
    "options": [
      {
        "letter": "A",
        "text": "Obtaining prior written authorization from the retailer's lead supervisory authority for each shipment of data"
      },
      {
        "letter": "B",
        "text": "Relying on an adequacy decision, standard contractual clauses, or binding corporate rules to cover the arrangement"
      },
      {
        "letter": "C",
        "text": "Keeping a duplicate copy of every customer record on servers physically located inside Germany"
      },
      {
        "letter": "D",
        "text": "Notifying the affected customers within 72 hours of the data leaving the European Economic Area"
      }
    ],
    "answer": "B",
    "explanation": "A cross-border data transfer is the movement of personal data outside the EU/EEA, which the GDPR permits only with appropriate safeguards such as an adequacy decision, standard contractual clauses, or binding corporate rules. Option A overstates the rule — routine transfers do not need per-shipment regulator authorization; C describes data localization, which is not what Chapter V requires; and D confuses transfer safeguards with breach-notification timing."
  },
  {
    "id": "q-669",
    "area": "ch9",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "Before licensing a training corpus for its claims-processing model, an insurer's data governance lead asks the vendor to supply the data sheet for the corpus. What is she expecting to receive?",
    "options": [
      {
        "letter": "A",
        "text": "A document describing how the records were collected, what they contain, and the uses for which they are and are not suited"
      },
      {
        "letter": "B",
        "text": "A report of the resulting model's accuracy, error rates, and performance across subgroups"
      },
      {
        "letter": "C",
        "text": "A technical specification listing the storage hardware and compute requirements for hosting the corpus"
      },
      {
        "letter": "D",
        "text": "A spreadsheet export containing a representative sample of the raw records themselves"
      }
    ],
    "answer": "A",
    "explanation": "A data sheet is a standardized document describing a dataset's composition, collection process, recommended uses, and limitations, supporting responsible data governance for AI training. Option B describes a model card, which documents a model rather than a dataset; C reflects the lay reading of 'datasheet' as a hardware spec; and D confuses documentation about the data with the data itself."
  },
  {
    "id": "q-670",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A parliamentary committee questions a video platform about evidence that its recommendation engine creates an echo chamber effect. What effect on users is the committee concerned about?",
    "options": [
      {
        "letter": "A",
        "text": "Users' viewing histories being amplified to far wider audiences than they intended"
      },
      {
        "letter": "B",
        "text": "The recommender degrading over time as it is retrained on its own generated suggestions"
      },
      {
        "letter": "C",
        "text": "Users being steered toward content that confirms what they already believe, with less exposure to opposing views"
      },
      {
        "letter": "D",
        "text": "The same small set of videos being duplicated across every user's feed regardless of interest"
      }
    ],
    "answer": "C",
    "explanation": "An echo chamber arises when AI-driven recommendation systems reinforce users' existing beliefs by limiting exposure to diverse perspectives, contributing to polarization. Option A describes an unwanted-amplification privacy harm, B describes model degradation from feedback loops in training, and D describes a loss of personalization — the opposite of the highly tailored filtering that produces echo chambers."
  },
  {
    "id": "q-671",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An auditor assessing a hiring-screening tool against the NIST AI RMF concludes that it fails the explainable and interpretable trustworthiness characteristic. Which observation supports that conclusion?",
    "options": [
      {
        "letter": "A",
        "text": "The vendor cannot produce evidence that the tool's scores are accurate or consistent across repeated runs"
      },
      {
        "letter": "B",
        "text": "Neither recruiters nor rejected candidates can get a meaningful account of how a score was produced or what it signifies in context"
      },
      {
        "letter": "C",
        "text": "The tool's rejection rates differ substantially between demographic groups with similar qualifications"
      },
      {
        "letter": "D",
        "text": "The tool has no documented fallback behavior when it encounters inputs outside its training distribution"
      }
    ],
    "answer": "B",
    "explanation": "Explainable and interpretable is the NIST AI RMF trustworthiness characteristic requiring that the mechanisms behind an AI system's operation can be described and that its outputs can be understood in the context of their purpose. Option A maps to the valid-and-reliable characteristic, C to fair-with-harmful-bias-managed, and D to safe and resilient — each a separate RMF characteristic, not a failure of understandability."
  },
  {
    "id": "q-672",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A governance training course states that a fraud-scoring model is a feedforward neural network. Which statement about how the model processes a transaction is accurate?",
    "options": [
      {
        "letter": "A",
        "text": "The signal moves through the layers in a single direction from input to output, with no loops back to earlier layers"
      },
      {
        "letter": "B",
        "text": "The model retains a memory of prior transactions by cycling outputs back into its hidden layers"
      },
      {
        "letter": "C",
        "text": "The model slides small learned filters across the input to detect local patterns"
      },
      {
        "letter": "D",
        "text": "The model weighs every element of an input sequence against every other element using attention scores"
      }
    ],
    "answer": "A",
    "explanation": "In a feedforward neural network, information flows in only one direction, from the input layer through any hidden layers to the output layer, without cycles. Option B describes a recurrent neural network, C a convolutional neural network, and D a transformer's attention mechanism — all neural architectures, but not ones limited to one-way flow."
  },
  {
    "id": "q-673",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A conformity assessment file prepared under ISO/IEC 22989 concepts describes a factory welding robot as exhibiting a high degree of heteronomy. What does this tell the assessor about the robot?",
    "options": [
      {
        "letter": "A",
        "text": "It adapts its own behavior over time by learning from conditions on the production line"
      },
      {
        "letter": "B",
        "text": "It is assembled from components and subsystems sourced from many different suppliers"
      },
      {
        "letter": "C",
        "text": "It operates under external supervision and constraint, with outside intervention shaping what it does"
      },
      {
        "letter": "D",
        "text": "It can pursue its assigned tasks for long periods without any human involvement at all"
      }
    ],
    "answer": "C",
    "explanation": "Heteronomy in ISO/IEC 22989 characterizes a system that functions under the constraint of external intervention, measures, or supervision — the counterpart of autonomy. Option D describes autonomy itself, A describes adaptability, and B trades on the lay reading of 'hetero-' as meaning merely diverse or mixed components."
  },
  {
    "id": "q-674",
    "area": "ch12",
    "domain": "Domain IV",
    "difficulty": "Hard",
    "question": "During an AI governance audit, a logistics company produces the localization policy from the business records for its route-optimization system. What should the auditor expect this document to establish?",
    "options": [
      {
        "letter": "A",
        "text": "How the system's interface and outputs are translated and culturally adapted for each market it serves"
      },
      {
        "letter": "B",
        "text": "Which regional business units are delegated authority to configure and customize the system"
      },
      {
        "letter": "C",
        "text": "A requirement that engineering staff supporting the system be employed within the home jurisdiction"
      },
      {
        "letter": "D",
        "text": "The geographic regions and jurisdictions in which the system is permitted to operate and process data"
      }
    ],
    "answer": "D",
    "explanation": "A localization policy sets procedures for restricting an AI system's operation to specific geographic regions, jurisdictions, or contexts, often driven by data residency or regulatory mandates. Option A reflects the software-industry reading of 'localization' as translation and cultural adaptation, B concerns decentralized governance authority, and C concerns workforce location — none addresses where the system itself may run."
  },
  {
    "id": "q-675",
    "area": "ch3",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A hospital's threat-modeling exercise concludes that its readmission-prediction model is exposed to a membership inference attack scenario that its existing privacy policy never contemplated. If such an attack succeeded, what would the attacker learn?",
    "options": [
      {
        "letter": "A",
        "text": "The full contents of patient records, reconstructed field by field from the model's outputs"
      },
      {
        "letter": "B",
        "text": "Whether a particular patient's record was included in the data used to train the model"
      },
      {
        "letter": "C",
        "text": "Sensitive attributes about patients, such as diagnoses, inferred from other known fields"
      },
      {
        "letter": "D",
        "text": "Valid credentials allowing the attacker to enroll as an authorized user of the model's API"
      }
    ],
    "answer": "B",
    "explanation": "A membership inference attack determines whether a specific individual's record was part of a model's training set — an AI-specific privacy threat that traditional privacy policies typically fail to address. Option A describes model inversion or reconstruction, C describes attribute inference, and D trades on the lay reading of 'membership' as account access."
  },
  {
    "id": "q-676",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A telecom's customer-service platform is documented, using ISO/IEC 22989 terminology, as performing natural language generation. Which function of the platform does that documentation refer to?",
    "options": [
      {
        "letter": "A",
        "text": "Transcribing the words a caller speaks into written form for the agent's screen"
      },
      {
        "letter": "B",
        "text": "Classifying each incoming message by the customer's underlying intent"
      },
      {
        "letter": "C",
        "text": "Retrieving the knowledge-base article that best matches a customer's question"
      },
      {
        "letter": "D",
        "text": "Composing fluent text replies from the structured account data the system holds"
      }
    ],
    "answer": "D",
    "explanation": "Natural language generation is the task of converting semantic or structured data into natural language output. Option A is speech recognition, B is natural language understanding applied to intent classification, and C is information retrieval — all language-related tasks, but none produces new text from an internal representation."
  },
  {
    "id": "q-677",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A public agency's procurement panel gives a benefits-eligibility system a high rating for predictability in the ISO/IEC 22989 sense. What did the panel conclude about the system?",
    "options": [
      {
        "letter": "A",
        "text": "Interested parties can form reliable assumptions about what outcomes the system will produce"
      },
      {
        "letter": "B",
        "text": "The system is highly accurate at forecasting which applicants will need benefits in the future"
      },
      {
        "letter": "C",
        "text": "The system returns a byte-identical result every time the same input is submitted"
      },
      {
        "letter": "D",
        "text": "The system's documentation lets reviewers follow the reasoning behind each individual decision"
      }
    ],
    "answer": "A",
    "explanation": "Predictability in ISO/IEC 22989 is the property of an AI system that enables interested parties to make reliable assumptions about its outcomes. Option B reflects the lay reading of the word as forecasting accuracy, C describes determinism or reproducibility, and D describes explainability — related assurance properties that the standard treats separately."
  },
  {
    "id": "q-678",
    "area": "ch8",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A vendor preparing to place a high-risk AI recruitment tool on the EU market learns it must put a quality management system in place. What does satisfying this obligation involve?",
    "options": [
      {
        "letter": "A",
        "text": "Demonstrating that the tool exceeds a minimum accuracy benchmark on an independent test set"
      },
      {
        "letter": "B",
        "text": "Hiring a dedicated team of reviewers to manually check a sample of the tool's outputs each week"
      },
      {
        "letter": "C",
        "text": "Documenting the processes, procedures, and responsibilities that govern the tool's design, testing, and compliance across its lifecycle"
      },
      {
        "letter": "D",
        "text": "Obtaining a certificate for its corporate processes from an accredited third-party certification body"
      }
    ],
    "answer": "C",
    "explanation": "A quality management system is a formalized, documented framework of processes, procedures, and responsibilities for ensuring an AI system's quality and regulatory compliance throughout its lifecycle, and the EU AI Act requires providers of high-risk systems to maintain one. Option A confuses the systemic obligation with a single performance threshold, B reduces it to manual output review, and D mistakes it for third-party certification, which is not what the obligation itself consists of."
  },
  {
    "id": "q-679",
    "area": "ch4",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An ed-tech firm collected webcam footage from students solely to verify exam integrity. Its ethics board later blocks a proposal, citing an impermissible secondary use. Which proposal did the board most likely block?",
    "options": [
      {
        "letter": "A",
        "text": "Using the exam footage to train a new product that scores student engagement during ordinary lectures"
      },
      {
        "letter": "B",
        "text": "Engaging a vetted subprocessor to store the footage while proctoring continues unchanged"
      },
      {
        "letter": "C",
        "text": "Retaining the footage for two years after each exam in case of grade disputes"
      },
      {
        "letter": "D",
        "text": "Capturing higher-resolution video than proctoring strictly requires"
      }
    ],
    "answer": "A",
    "explanation": "Secondary use is the use of data, an AI system, or its outputs for purposes beyond the original intended use case, creating unanticipated risks that require governance oversight. Option B is a processing arrangement for the same purpose, C is a retention question, and D is a data-minimization problem — all governance issues, but none involves repurposing beyond the original use."
  },
  {
    "id": "q-680",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "To improve accessibility, a public benefits portal adds a speech synthesis feature, as the capability is defined in ISO/IEC 22989. What can users now do?",
    "options": [
      {
        "letter": "A",
        "text": "Dictate their application answers instead of typing them into the forms"
      },
      {
        "letter": "B",
        "text": "Hear the portal read page content aloud in a computer-generated voice"
      },
      {
        "letter": "C",
        "text": "Prove their identity by having the system recognize the sound of their voice"
      },
      {
        "letter": "D",
        "text": "Ask free-form questions and have the system work out what they mean"
      }
    ],
    "answer": "B",
    "explanation": "Speech synthesis is the generation of artificial speech — the system produces audible spoken output, as in text-to-speech features. Option A describes speech recognition (speech-to-text), C describes speaker verification or identification, and D describes natural language understanding — neighboring speech and language capabilities that do not generate audio."
  },
  {
    "id": "q-681",
    "area": "ch8",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A generative AI provider already publishes a model card for its flagship model and now releases a system card as well. What information does the new document add?",
    "options": [
      {
        "letter": "A",
        "text": "Benchmark scores and error analyses for the underlying model on standard evaluation datasets"
      },
      {
        "letter": "B",
        "text": "A description of the composition, collection methods, and limitations of the training corpus"
      },
      {
        "letter": "C",
        "text": "An inventory of the compute infrastructure and hardware on which the service runs"
      },
      {
        "letter": "D",
        "text": "Documentation of the deployed product as a whole — its architecture, intended uses, limitations, safeguards, and ethical considerations"
      }
    ],
    "answer": "D",
    "explanation": "A system card is a transparency document covering an AI system end to end — architecture, training data at a high level, intended use, limitations, and ethical considerations — with a broader scope than a model card, which documents a single model. Option A is the model card's territory, B describes a datasheet for a dataset, and C is an infrastructure inventory rather than a transparency artifact."
  },
  {
    "id": "q-682",
    "area": "ch9",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "A manufacturer's visual inspection model for circuit boards is diagnosed with underfitting during validation. Which pattern of results led to that diagnosis?",
    "options": [
      {
        "letter": "A",
        "text": "Near-perfect accuracy on the images it was trained on but frequent errors on boards from the live line"
      },
      {
        "letter": "B",
        "text": "Accuracy that was strong at launch but has declined as board designs changed over time"
      },
      {
        "letter": "C",
        "text": "Poor accuracy on the training images and on new production images alike"
      },
      {
        "letter": "D",
        "text": "Reliable detection on one product line but markedly worse results on another"
      }
    ],
    "answer": "C",
    "explanation": "Underfitting occurs when a model is too simple to capture the underlying patterns in its data, producing poor performance on both training data and new data. Option A describes overfitting, B describes model or data drift after deployment, and D describes uneven performance across subpopulations, which points to a representativeness or bias issue rather than model capacity."
  },
  {
    "id": "q-683",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "An auditor documenting a hospital's clinical triage system under ISO/IEC 22989 terminology must list each AI component separately. Which item on the auditor's worksheet correctly belongs on that list?",
    "options": [
      {
        "letter": "A",
        "text": "The natural-language module that extracts symptoms from clinicians' free-text notes"
      },
      {
        "letter": "B",
        "text": "The hospital's data governance committee that oversees the system"
      },
      {
        "letter": "C",
        "text": "The service-level agreement with the cloud provider hosting the system"
      },
      {
        "letter": "D",
        "text": "The clinical validation study performed before the system went live"
      }
    ],
    "answer": "A",
    "explanation": "Under ISO/IEC 22989, an AI component is a functional element that constitutes an AI system — such as a model or processing module that performs part of the system's function. A governance committee is an organizational stakeholder, an SLA is a contractual artifact, and a validation study is an assurance activity; none of these is a functional element of the system itself."
  },
  {
    "id": "q-684",
    "area": "ch10",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A logistics firm's governance register classifies the systems integrator working on its route-optimization rollout as an AI partner. Which characteristic of the integrator justifies that classification?",
    "options": [
      {
        "letter": "A",
        "text": "It relies on the deployed system's outputs to make its own dispatch decisions"
      },
      {
        "letter": "B",
        "text": "It is affected by the system's routing decisions without ever interacting with it"
      },
      {
        "letter": "C",
        "text": "It works jointly with the firm on building and rolling out the system"
      },
      {
        "letter": "D",
        "text": "It supplied the historical shipment data on which the model was trained"
      }
    ],
    "answer": "C",
    "explanation": "An AI partner is an entity that collaborates in the development or deployment of an AI system — a systems integrator helping configure and roll out the model fits squarely. An entity that consumes outputs is a user, one affected without interacting is an AI subject, and one that merely supplies training data is a data provider rather than a collaborator in development or deployment."
  },
  {
    "id": "q-685",
    "area": "ch4",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A European insurer's data protection officer halts the launch of an AI underwriting tool, citing an unfulfilled obligation under Article 35 GDPR. What must the insurer complete before proceeding?",
    "options": [
      {
        "letter": "A",
        "text": "Collection of explicit consent from every applicant whose data will be processed"
      },
      {
        "letter": "B",
        "text": "A structured assessment of the processing's risks to individuals and the measures planned to address them"
      },
      {
        "letter": "C",
        "text": "Designation of a representative established within the European Union"
      },
      {
        "letter": "D",
        "text": "Notification to the supervisory authority within 72 hours of any personal data incident"
      }
    ],
    "answer": "B",
    "explanation": "Article 35 GDPR requires a Data Protection Impact Assessment before processing that is likely to result in a high risk to individuals — a threshold AI underwriting typically meets. Explicit consent relates to lawful bases under Articles 6 and 9, appointing an EU representative is Article 27, and 72-hour breach notification is Article 33."
  },
  {
    "id": "q-686",
    "area": "ch9",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "During pre-deployment evaluation, a testing team flags a warehouse-robotics vision model for brittleness. Which observation most directly supports that finding?",
    "options": [
      {
        "letter": "A",
        "text": "Accuracy collapses when packages appear under lighting conditions slightly different from the training footage"
      },
      {
        "letter": "B",
        "text": "Response times exceed acceptable limits when many robots query the model at once"
      },
      {
        "letter": "C",
        "text": "The model returns slightly different predictions on repeated runs over the same image"
      },
      {
        "letter": "D",
        "text": "Performance erodes gradually over months as warehouse inventory patterns change"
      }
    ],
    "answer": "A",
    "explanation": "Brittleness is a model's tendency to fail catastrophically on inputs only slightly outside its training distribution, indicating poor robustness and generalization — a sudden accuracy collapse under marginally different lighting is the classic sign. Slow response under load is a performance or scalability issue, run-to-run variation is nondeterminism, and gradual erosion as real-world patterns shift is model drift."
  },
  {
    "id": "q-687",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A manufacturer beginning its ISO/IEC 42001 implementation is asked by the certification auditor for evidence addressing the context of the organization. Which artifact best responds to that request?",
    "options": [
      {
        "letter": "A",
        "text": "The AI policy signed by top management demonstrating leadership commitment"
      },
      {
        "letter": "B",
        "text": "The register of identified AI risks and their selected treatment options"
      },
      {
        "letter": "C",
        "text": "Internal audit results and minutes from the latest management review"
      },
      {
        "letter": "D",
        "text": "An analysis of internal and external issues and interested-party expectations relevant to the AI management system"
      }
    ],
    "answer": "D",
    "explanation": "Context of the organization is ISO/IEC 42001 Clause 4: understanding the internal and external factors, stakeholder needs, and legal requirements that shape the scope of the AI management system. A signed policy evidences leadership (Clause 5), a risk register evidences planning (Clause 6), and audit results with management review minutes evidence performance evaluation (Clause 9)."
  },
  {
    "id": "q-688",
    "area": "ch9",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "A retail company outsources data annotation for the image set that will train its shelf-monitoring model. What will the contractor's staff actually do with the images?",
    "options": [
      {
        "letter": "A",
        "text": "Attach descriptive tags to each image while leaving the underlying files unchanged"
      },
      {
        "letter": "B",
        "text": "Remove blurry and duplicate images so only usable examples remain"
      },
      {
        "letter": "C",
        "text": "Edit the images to blur any shoppers' faces before training begins"
      },
      {
        "letter": "D",
        "text": "Generate additional synthetic images to enlarge the training set"
      }
    ],
    "answer": "A",
    "explanation": "Data annotation adds descriptive information to data without altering the data itself — here, tagging images so the model can learn from them. Removing bad examples is data cleansing, blurring faces alters the data and is a form of masking or de-identification, and generating synthetic images is data augmentation."
  },
  {
    "id": "q-689",
    "area": "ch4",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A former job applicant submits a data subject access request to a company that screened her with an AI hiring tool. Which response by the company satisfies the request?",
    "options": [
      {
        "letter": "A",
        "text": "Erasing her records from the applicant-tracking system"
      },
      {
        "letter": "B",
        "text": "Providing her a copy of her personal data along with details of how it was processed"
      },
      {
        "letter": "C",
        "text": "Suspending any further processing of her file while she disputes the outcome"
      },
      {
        "letter": "D",
        "text": "Correcting the score the screening tool inaccurately assigned to her"
      }
    ],
    "answer": "B",
    "explanation": "A data subject access request entitles the individual to obtain her personal data and information about how it is processed — which can be difficult when AI models have memorized training data. Erasure, restriction of processing, and rectification are distinct data subject rights that respond to different requests."
  },
  {
    "id": "q-690",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "In August 2024, a compliance officer tells leadership that although the EU AI Act's entry into force has occurred, the company faces no enforceable requirements yet. Why is the officer correct?",
    "options": [
      {
        "letter": "A",
        "text": "As with EU directives, the Act first requires transposition into each member state's national law"
      },
      {
        "letter": "B",
        "text": "The Act cannot bind anyone until the Commission publishes the supporting harmonized standards"
      },
      {
        "letter": "C",
        "text": "That date merely started the phased compliance timeline, with obligations becoming applicable in later staggered stages"
      },
      {
        "letter": "D",
        "text": "The Act exempts a company until it first places a high-risk system on the EU market"
      }
    ],
    "answer": "C",
    "explanation": "The EU AI Act entered into force on August 1, 2024, which started the clock on a staggered applicability schedule but imposed no immediate obligations — prohibitions, GPAI rules, and high-risk requirements apply at later dates. The Act is a regulation, so it needs no national transposition; harmonized standards support compliance but do not gate the Act's binding effect; and applicability dates are calendar-based, not triggered by a company's first product placement."
  },
  {
    "id": "q-691",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "While training a deep neural network for electricity demand forecasting, an engineer reports an exploding gradient problem. What is the engineer observing?",
    "options": [
      {
        "letter": "A",
        "text": "The training job's memory consumption grows until it crashes the GPU hardware"
      },
      {
        "letter": "B",
        "text": "Error signals compound during backpropagation, producing weight updates so large that training destabilizes"
      },
      {
        "letter": "C",
        "text": "Updates to early layers shrink toward zero, so learning in those layers stalls"
      },
      {
        "letter": "D",
        "text": "The model memorizes its training examples and performs poorly on new data"
      }
    ],
    "answer": "B",
    "explanation": "An exploding gradient occurs when large error gradients accumulate during backpropagation, causing very large weight updates that make the model unstable. Runaway memory use is a resource problem, updates shrinking toward zero is the vanishing gradient problem, and memorizing training data is overfitting."
  },
  {
    "id": "q-692",
    "area": "ch9",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "Before training a dermatology triage model, a hospital's data governance board conducts a fit-for-purpose review of the proposed dataset. Which question is the board primarily trying to answer?",
    "options": [
      {
        "letter": "A",
        "text": "Whether every record in the dataset was collected under a valid lawful basis"
      },
      {
        "letter": "B",
        "text": "Whether each record can be traced back to its original source system"
      },
      {
        "letter": "C",
        "text": "Whether the dataset is stored in formats compatible with the hospital's retention tooling"
      },
      {
        "letter": "D",
        "text": "Whether the data's quality, quantity, and representativeness are adequate for this specific use case"
      }
    ],
    "answer": "D",
    "explanation": "A fit-for-purpose assessment asks whether data is appropriate and adequate for the specific AI use case, weighing quality, quantity, representativeness, and relevance to the intended task. Lawful basis is a compliance question, traceability to source is data provenance or lineage, and storage formats concern interoperability and records management."
  },
  {
    "id": "q-693",
    "area": "ch3",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A bank configures its AI loan-adjudication workflow to operate with a human in the loop. How does the workflow function?",
    "options": [
      {
        "letter": "A",
        "text": "A credit officer reviews each model recommendation and can override it before any decision is issued"
      },
      {
        "letter": "B",
        "text": "The system decides autonomously while staff periodically audit aggregate outcomes for anomalies"
      },
      {
        "letter": "C",
        "text": "Customer feedback ratings are folded into the model's next retraining cycle"
      },
      {
        "letter": "D",
        "text": "An ethics committee approved the system's design before it was deployed"
      }
    ],
    "answer": "A",
    "explanation": "Human in the loop means a human reviews, validates, or overrides individual AI decisions in high-stakes scenarios, preserving accountability for each consequential outcome. Periodic auditing of an autonomous system is human-on-the-loop oversight, feedback-driven retraining is a learning mechanism rather than decision review, and a pre-deployment ethics approval is a one-time governance gate."
  },
  {
    "id": "q-694",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A fintech team replaces its basic recurrent network with a long short-term memory architecture for transaction-fraud detection. What improvement is the team most likely seeking?",
    "options": [
      {
        "letter": "A",
        "text": "Processing entire transaction sequences in parallel through attention mechanisms"
      },
      {
        "letter": "B",
        "text": "A smaller footprint so the model can run on point-of-sale devices"
      },
      {
        "letter": "C",
        "text": "Capturing dependencies across both distant and recent events in a transaction sequence"
      },
      {
        "letter": "D",
        "text": "The ability to learn fraud patterns without any labeled fraud examples"
      }
    ],
    "answer": "C",
    "explanation": "A long short-term memory network is a recurrent architecture that performs well on sequential data with both long- and short-term dependencies, overcoming the plain RNN's difficulty retaining distant context. Parallel attention-based processing describes Transformers, a small on-device footprint is an efficiency concern the name does not imply, and learning without labels is unsupervised learning."
  },
  {
    "id": "q-695",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "A city deploys a traffic-management AI that behaved benignly in every test, yet a post-incident governance review attributes the harms that emerged in production to misalignment. What did the review most likely conclude?",
    "options": [
      {
        "letter": "A",
        "text": "The system pursued a poorly specified objective, producing unintended harmful behavior once deployed"
      },
      {
        "letter": "B",
        "text": "Live traffic data had shifted away from the distribution the model was trained on"
      },
      {
        "letter": "C",
        "text": "Integration faults between the model and the city's signal infrastructure corrupted its outputs"
      },
      {
        "letter": "D",
        "text": "The project had drifted from the priorities set out in the city's adopted AI strategy"
      }
    ],
    "answer": "A",
    "explanation": "Misalignment is the risk that an AI system whose behavior appears benign in testing causes unintended harm in deployment, typically because its objectives were poorly specified. Distribution shift in live data is drift, faulty interconnection is an engineering integration defect, and deviation from a strategy document is organizational misalignment rather than the AI risk the term denotes."
  },
  {
    "id": "q-696",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An insurer's claims platform routes every incoming customer email through a natural language understanding module before a human ever sees it. What is this module's job?",
    "options": [
      {
        "letter": "A",
        "text": "Drafting fluent reply messages for adjusters to send back to customers"
      },
      {
        "letter": "B",
        "text": "Converting recorded customer voicemails into written text"
      },
      {
        "letter": "C",
        "text": "Translating messages written in foreign languages into English"
      },
      {
        "letter": "D",
        "text": "Extracting each message's meaning into a structured representation of intent and key details"
      }
    ],
    "answer": "D",
    "explanation": "Natural language understanding extracts information from text or speech in natural language and produces a description or representation of it — here, structured intents and entities from free-text emails. Producing fluent replies is natural language generation, voice-to-text conversion is speech recognition, and cross-language conversion is machine translation."
  },
  {
    "id": "q-697",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "Completing a NIST AI RMF profile, a public benefits agency must rate its eligibility-screening system against the privacy-enhanced trustworthiness characteristic. Which evidence is most relevant to that rating?",
    "options": [
      {
        "letter": "A",
        "text": "Penetration-test results and the role-based access controls protecting the system"
      },
      {
        "letter": "B",
        "text": "Proof that only necessary data fields are collected, records are de-identified, and consent choices are honored"
      },
      {
        "letter": "C",
        "text": "Model documentation explaining to reviewers how the system reaches its outputs"
      },
      {
        "letter": "D",
        "text": "Statistical parity metrics comparing outcomes across applicant demographic groups"
      }
    ],
    "answer": "B",
    "explanation": "The privacy-enhanced characteristic in the NIST AI RMF concerns safeguards for human autonomy, identity, and dignity, evidenced by data minimization, anonymization or de-identification, and consent mechanisms. Penetration tests and access controls speak to the secure and resilient characteristic, output documentation to explainability, and demographic parity metrics to fairness and bias management."
  },
  {
    "id": "q-698",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A vendor markets its university help-desk bot as performing question answering as defined in ISO/IEC 22989. Which behavior distinguishes the bot from a conventional search tool?",
    "options": [
      {
        "letter": "A",
        "text": "It returns a ranked list of documents likely to contain relevant material"
      },
      {
        "letter": "B",
        "text": "It determines the single most appropriate response to what a student asked in everyday language"
      },
      {
        "letter": "C",
        "text": "It maintains conversational context and manages turn-taking across a long dialogue"
      },
      {
        "letter": "D",
        "text": "It condenses lengthy policy documents into short overviews for students"
      }
    ],
    "answer": "B",
    "explanation": "Question answering is the task of determining the most appropriate answer to a question posed in natural language, rather than pointing the user at material to read. A ranked document list is information retrieval, managing conversational state is dialogue management, and condensing documents is text summarization."
  },
  {
    "id": "q-699",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "After a regional cloud outage and an attempted data-poisoning attack, a hospital reviews whether its sepsis-prediction system proved secure and resilient in the NIST AI RMF sense. Which outcome would support a positive finding?",
    "options": [
      {
        "letter": "A",
        "text": "Clinicians retained the ability to override every prediction throughout both events"
      },
      {
        "letter": "B",
        "text": "The system's outputs remained interpretable to clinical reviewers during the disruption"
      },
      {
        "letter": "C",
        "text": "The system protected its data and operations during both events and returned to normal function afterward"
      },
      {
        "letter": "D",
        "text": "The system collected no more patient information than necessary during the incident window"
      }
    ],
    "answer": "C",
    "explanation": "The secure and resilient characteristic in the NIST AI RMF means the system can withstand adverse events and recover to normal function while maintaining confidentiality, integrity, and availability. Human override capability relates to accountability and oversight, interpretability of outputs to explainability, and limiting data collection to the privacy-enhanced characteristic."
  },
  {
    "id": "q-700",
    "area": "ch10",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A media-streaming company schedules stress testing of its recommendation service for the week before public launch. Which activity belongs in that test plan?",
    "options": [
      {
        "letter": "A",
        "text": "Collecting satisfaction scores from beta users about recommendation quality"
      },
      {
        "letter": "B",
        "text": "Auditing the licenses attached to the datasets used in training"
      },
      {
        "letter": "C",
        "text": "Tracking gradual shifts in output quality over the first months after release"
      },
      {
        "letter": "D",
        "text": "Measuring response times and failover behavior while the service is pushed past expected peak load"
      }
    ],
    "answer": "D",
    "explanation": "Stress testing an AI system before release covers latency and throughput benchmarks, memory and compute usage under load, failover behavior during outages, and evaluation against adversarial or malicious prompts. Gathering beta-user satisfaction is acceptance testing, license auditing is a data compliance review, and tracking gradual post-release quality shifts is production drift monitoring."
  },
  {
    "id": "q-701",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "In an AI-literacy course, an instructor places theory of mind AI between limited-memory systems and self-aware AI on a capability spectrum. What defines this middle category?",
    "options": [
      {
        "letter": "A",
        "text": "Systems that react to current inputs without retaining any record of past experience"
      },
      {
        "letter": "B",
        "text": "Systems that use stored past observations to inform their current decisions"
      },
      {
        "letter": "C",
        "text": "Hypothetical machines able to grasp and simulate human emotions, beliefs, and intentions"
      },
      {
        "letter": "D",
        "text": "Hypothetical machines possessing consciousness of their own internal states"
      }
    ],
    "answer": "C",
    "explanation": "Theory of mind AI is a theoretical advanced category of AI that could understand and simulate human emotions, beliefs, intentions, and thoughts — fiction's HAL-9000 is the standard illustration. Purely input-driven systems are reactive machines, systems drawing on stored observations are limited-memory AI, and machines conscious of their own states describe self-aware AI."
  },
  {
    "id": "q-702",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A grocery chain applies unsupervised machine learning to its loyalty-card transaction history to discover shopper segments. What characterizes the training data used for this project?",
    "options": [
      {
        "letter": "A",
        "text": "Transactions that analysts have tagged with the segment each shopper belongs to"
      },
      {
        "letter": "B",
        "text": "A feedback signal rewarding the system after each successful grouping attempt"
      },
      {
        "letter": "C",
        "text": "A small hand-tagged seed set blended with a large volume of untagged records"
      },
      {
        "letter": "D",
        "text": "Raw transaction records with no target labels attached to any of them"
      }
    ],
    "answer": "D",
    "explanation": "Unsupervised machine learning uses only unlabeled data during training, letting the model discover structure such as customer segments on its own. Analyst-tagged targets describe supervised learning, reward signals describe reinforcement learning, and mixing a labeled seed set with unlabeled data describes semi-supervised learning."
  },
  {
    "id": "q-703",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A freight brokerage licenses a route-optimization model from a software vendor and runs it in daily operations. When mapping stakeholders under ISO/IEC 22989, which party should the governance team record as the AI customer?",
    "options": [
      {
        "letter": "A",
        "text": "The software vendor that developed the model and licenses it out"
      },
      {
        "letter": "B",
        "text": "The shippers who receive quotes generated with the model's help"
      },
      {
        "letter": "C",
        "text": "The freight brokerage that acquired the model and operates it"
      },
      {
        "letter": "D",
        "text": "The transport regulator that oversees the brokerage's operations"
      }
    ],
    "answer": "C",
    "explanation": "In ISO/IEC 22989's stakeholder taxonomy, the AI customer is the entity that acquires or uses the AI system — here, the brokerage. Option A is the AI provider, option B describes end consumers of the brokerage's service (a natural lay reading of 'customer'), and option D is a relevant authority, a separate stakeholder role."
  },
  {
    "id": "q-704",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An HR-technology firm builds a resume-screening system and sells it to employers across the EU. Under the EU AI Act, the AI provider must complete conformity assessment and affix CE marking to this high-risk system. Who holds these obligations?",
    "options": [
      {
        "letter": "A",
        "text": "The firm that developed the system and placed it on the market"
      },
      {
        "letter": "B",
        "text": "Each employer that uses the system to screen its applicants"
      },
      {
        "letter": "C",
        "text": "The cloud platform that hosts the system's inference workloads"
      },
      {
        "letter": "D",
        "text": "The reseller that distributes the system in national markets"
      }
    ],
    "answer": "A",
    "explanation": "The AI provider is the entity that develops an AI system (or has one developed) and makes it available on the market, and the EU AI Act places the heaviest high-risk obligations — including conformity assessment and CE marking — on it. Option B describes deployers, who have their own lighter duties; option C is a lay misreading of 'provider' as a cloud service provider; option D is a distributor, a distinct operator role under the Act."
  },
  {
    "id": "q-705",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A general-purpose AI model developer becomes a signatory to the code of practice established under Article 56 of the EU AI Act. What legal effect does adherence have?",
    "options": [
      {
        "letter": "A",
        "text": "It creates a safe harbor precluding enforcement action by the AI Office"
      },
      {
        "letter": "B",
        "text": "It offers a recognized means of demonstrating compliance, without conclusively establishing it"
      },
      {
        "letter": "C",
        "text": "It exempts the developer from the Act's transparency and documentation duties"
      },
      {
        "letter": "D",
        "text": "It substitutes for the required conformity assessment of the model"
      }
    ],
    "answer": "B",
    "explanation": "Article 56 of the EU AI Act is the legal basis for the GPAI Code of Practice facilitated by the European AI Office; adherence helps providers demonstrate compliance with their GPAI obligations but is neither conclusive evidence of compliance nor a safe harbor. Options A and C overstate its effect — signatories remain fully subject to enforcement and to the Act's duties — and option D confuses the code with conformity assessment procedures, which it does not replace."
  },
  {
    "id": "q-706",
    "area": "ch13",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "An insurer maintains separate governance review tracks for classic AI and for generative systems. Which of its tools belongs on the classic AI track?",
    "options": [
      {
        "letter": "A",
        "text": "A fine-tuned large language model that drafts claim-denial letters"
      },
      {
        "letter": "B",
        "text": "A diffusion model that produces synthetic accident images for training"
      },
      {
        "letter": "C",
        "text": "A foundation-model assistant that summarizes adjusters' case notes"
      },
      {
        "letter": "D",
        "text": "A logistic-regression engine that scores incoming claims for fraud"
      }
    ],
    "answer": "D",
    "explanation": "Classic AI refers to traditional approaches — rule-based systems, statistical methods, and simpler machine-learning algorithms such as regression — as contrasted with modern generative AI and LLMs. Options A, B, and C are all generative or foundation-model systems, even though tools like chatbots may now feel 'classic' in the everyday sense of being commonplace."
  },
  {
    "id": "q-707",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A hospital's AI management system, aligned to ISO/IEC 42001, requires continuous validation for its deployed sepsis-prediction model. Which practice fulfills the requirement?",
    "options": [
      {
        "letter": "A",
        "text": "Ongoing checks that the live model still meets its specified requirements as production conditions change"
      },
      {
        "letter": "B",
        "text": "Repetition of the full acceptance test suite before each new model version is released"
      },
      {
        "letter": "C",
        "text": "A standing pipeline that automatically retrains the model on the latest patient data each month"
      },
      {
        "letter": "D",
        "text": "An annual third-party audit of the model's technical documentation and event logs"
      }
    ],
    "answer": "A",
    "explanation": "Continuous validation is the ongoing verification that a system continues to meet its requirements in production, not just at release points. Option B only re-verifies at discrete release milestones, option C is model maintenance (retraining), which changes the system rather than verifying it, and option D is a periodic documentation audit rather than verification of live performance against requirements."
  },
  {
    "id": "q-708",
    "area": "ch9",
    "domain": "Domain III",
    "difficulty": "Medium",
    "question": "A supervisory authority's guidance lists data dependency among the characteristics that make AI systems harder to govern than conventional software. What risk does this characteristic point to?",
    "options": [
      {
        "letter": "A",
        "text": "Operations halt whenever the system loses its connection to live data feeds"
      },
      {
        "letter": "B",
        "text": "Staff come to rely on the system's outputs and stop applying their own judgment"
      },
      {
        "letter": "C",
        "text": "The system's outcomes inherit the quality and skew of its data, yielding inaccurate or unfair results"
      },
      {
        "letter": "D",
        "text": "The organization becomes locked into a single data vendor's proprietary formats"
      }
    ],
    "answer": "C",
    "explanation": "Data dependency refers to AI systems' heavy reliance on the quality, volume, and diversity of the data they learn from, so poor or biased data produces inaccurate or unfair outcomes — a core reason bias governance is needed. Option A is an availability concern, option B describes automation bias among users, and option D is vendor lock-in; each is a plausible lay reading of 'depending on data' but not what the characteristic means."
  },
  {
    "id": "q-709",
    "area": "ch12",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "During a model-risk audit at a regional bank, the examiner asks to see the deactivation policy for a legacy credit-scoring system. Which document satisfies the request?",
    "options": [
      {
        "letter": "A",
        "text": "The procedure for revoking user accounts and access rights when employees depart"
      },
      {
        "letter": "B",
        "text": "The documented triggers and controlled steps for safely taking the system out of service"
      },
      {
        "letter": "C",
        "text": "The data retention schedule governing deletion of the system's historical records"
      },
      {
        "letter": "D",
        "text": "The incident runbook for failing over to a backup model during service outages"
      }
    ],
    "answer": "B",
    "explanation": "A deactivation policy documents how an AI system is safely retired — the regulatory, performance, or safety triggers for shutdown and the controlled steps to take it offline. Option A is access management ('deactivating' accounts, a lay misreading), option C is records management, and option D is business continuity, which keeps the system running rather than winding it down."
  },
  {
    "id": "q-710",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A medical-device startup tells investors its AI development process follows ethics by design. Which practice best substantiates the claim?",
    "options": [
      {
        "letter": "A",
        "text": "An independent ethics board reviews and approves each product shortly before launch"
      },
      {
        "letter": "B",
        "text": "A corporate code of AI ethics is published and signed annually by all employees"
      },
      {
        "letter": "C",
        "text": "A retrospective audit checks released products against ethical principles each year"
      },
      {
        "letter": "D",
        "text": "Ethical considerations are weighed at every stage, from problem framing through deployment and monitoring"
      }
    ],
    "answer": "D",
    "explanation": "Ethics by design means integrating ethical considerations throughout the AI lifecycle, beginning at problem definition and continuing through deployment and monitoring — not bolting them on at a single point. Option A is an end-stage gate, option B is a statement of principles without process integration, and option C is after-the-fact review; all are legitimate practices but none embeds ethics into the design process itself."
  },
  {
    "id": "q-711",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "Before any model is built, a retail analytics team spends two weeks on exploratory data analysis of the loyalty-card dataset. What is the team doing?",
    "options": [
      {
        "letter": "A",
        "text": "Examining distributions, patterns, and anomalies to understand the data's salient features and quality"
      },
      {
        "letter": "B",
        "text": "Engineering new predictive variables from the raw transaction fields"
      },
      {
        "letter": "C",
        "text": "Comparing candidate algorithms' accuracy on a held-out validation sample"
      },
      {
        "letter": "D",
        "text": "Generating synthetic records to enlarge underrepresented customer segments"
      }
    ],
    "answer": "A",
    "explanation": "Exploratory data analysis is the initial examination of data to identify its salient features and assess its quality before modeling begins. Option B is feature engineering, option C is model selection and evaluation, and option D is data augmentation — all later or different lifecycle activities that a lay reading of 'exploring the data' could plausibly suggest."
  },
  {
    "id": "q-712",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A U.S. media company already using the NIST AI RMF asks its risk team to also apply the Generative AI Profile as it rolls out synthetic-content tools. What does the profile add?",
    "options": [
      {
        "letter": "A",
        "text": "A certifiable standard the company can be formally audited against for the new tools"
      },
      {
        "letter": "B",
        "text": "Binding federal requirements for companies deploying synthetic-content systems"
      },
      {
        "letter": "C",
        "text": "A cross-sectoral set of risks unique to this technology class, with actions organized by the framework's functions"
      },
      {
        "letter": "D",
        "text": "A benchmark suite for scoring the factual accuracy of the tools' outputs"
      }
    ],
    "answer": "C",
    "explanation": "The Generative AI Profile (NIST AI 600-1, July 2024) is a cross-sectoral companion to the AI RMF developed under Executive Order 14110; it identifies twelve GAI-specific risks and suggests actions organized by the Govern, Map, Measure, and Manage functions. It is voluntary guidance, not a certifiable standard (A) or binding regulation (B), and it offers risk-management actions rather than technical benchmarks for output accuracy (D)."
  },
  {
    "id": "q-713",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An air-navigation service provider designs its new conflict-detection tool around human-machine teaming. Which operating arrangement reflects that design choice?",
    "options": [
      {
        "letter": "A",
        "text": "Controllers audit a random sample of the tool's alerts at the end of each shift"
      },
      {
        "letter": "B",
        "text": "Controllers and the tool work traffic together, integrating human judgment with machine analysis in one workflow"
      },
      {
        "letter": "C",
        "text": "The tool manages routine traffic autonomously while a controller stands by to take over on failure"
      },
      {
        "letter": "D",
        "text": "Controllers and the tool alternate responsibility for the airspace on a fixed schedule"
      }
    ],
    "answer": "B",
    "explanation": "Human-machine teaming, per ISO/IEC 22989, is the integration of human interaction and machine intelligence — humans and the AI system working jointly within the same task. Option A is after-the-fact sampling oversight, option C is a human-on-the-loop fallback arrangement, and option D divides the work rather than integrating it; none combines human and machine contributions in a shared workflow."
  },
  {
    "id": "q-714",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A humanitarian logistics NGO procures a machine translation system to support field operations across several countries. Which capability is it buying?",
    "options": [
      {
        "letter": "A",
        "text": "Transcription of spoken radio traffic into written text"
      },
      {
        "letter": "B",
        "text": "Extraction of printed text from photographed shipping documents"
      },
      {
        "letter": "C",
        "text": "Conversion of legacy software code into a modern programming language"
      },
      {
        "letter": "D",
        "text": "Automatic rendering of text or speech from one human language into another"
      }
    ],
    "answer": "D",
    "explanation": "Machine translation is the task of automatically translating text or speech from one natural language into another using a computer system. Option A is speech recognition (speech-to-text), option B is optical character recognition, and option C is code migration — 'translating' code, a plausible lay reading, but not the natural-language task the term denotes."
  },
  {
    "id": "q-715",
    "area": "ch12",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "After a suspected model-poisoning attempt, a fintech's security team is directed to map the observed activity to MITRE ATLAS. What kind of resource will they be working with?",
    "options": [
      {
        "letter": "A",
        "text": "A knowledge base of adversary tactics and techniques aimed specifically at AI systems"
      },
      {
        "letter": "B",
        "text": "A public registry of software vulnerabilities indexed by CVE identifiers"
      },
      {
        "letter": "C",
        "text": "A framework cataloging attacker behavior across enterprise IT networks generally"
      },
      {
        "letter": "D",
        "text": "A crowdsourced repository of reported real-world AI incidents and harms"
      }
    ],
    "answer": "A",
    "explanation": "MITRE ATLAS (Adversarial Threat Landscape for Artificial-Intelligence Systems) is a knowledge base of adversary tactics and techniques specific to attacks on AI systems, modeled after MITRE ATT&CK. Option B describes CVE/NVD vulnerability databases, option C describes MITRE ATT&CK itself, which covers enterprise IT rather than AI-specific threats, and option D describes an AI incident database."
  },
  {
    "id": "q-716",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An education nonprofit adopting the AI RMF wants concrete suggestions rather than high-level principles, so its risk lead consults the NIST AI RMF Playbook. What should the lead expect to find?",
    "options": [
      {
        "letter": "A",
        "text": "A scored self-assessment that assigns the organization a formal maturity rating"
      },
      {
        "letter": "B",
        "text": "A compliance checklist that U.S. federal contractors are required to complete"
      },
      {
        "letter": "C",
        "text": "Voluntary suggested actions, references, and guidance for putting each framework function into practice"
      },
      {
        "letter": "D",
        "text": "The certification criteria that accredited auditors use to assess conformance"
      }
    ],
    "answer": "C",
    "explanation": "The NIST AI RMF Playbook is the companion guide to the AI RMF, offering practical implementation guidance, suggested actions, use-case examples, and references for operationalizing the Govern, Map, Measure, and Manage functions. It is voluntary and non-prescriptive: it is not a scored maturity model (A), not a mandatory contractor checklist (B), and the AI RMF has no certification scheme for auditors to apply (D)."
  },
  {
    "id": "q-717",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "During procurement, a vendor discloses that its diagnostic model produces probabilistic output. What should the hospital's clinical team expect from the system?",
    "options": [
      {
        "letter": "A",
        "text": "It will decline to answer whenever it is uncertain about a case"
      },
      {
        "letter": "B",
        "text": "It will attach likelihoods to its findings rather than issue definitive yes-or-no determinations"
      },
      {
        "letter": "C",
        "text": "It will select patient cases for clinician review on a randomized basis"
      },
      {
        "letter": "D",
        "text": "It will change its answers over time because it retrains on each new case"
      }
    ],
    "answer": "B",
    "explanation": "Probabilistic output means the system's results are expressed as probabilities rather than certainties, in contrast to deterministic systems whose outputs are fully predictable. Option A describes an abstention or rejection mechanism, option C misreads 'probabilistic' as random sampling, and option D describes continuous learning — none of which follows from outputs being probability-based."
  },
  {
    "id": "q-718",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "In a briefing on types of AI, a consultant classifies a factory's optical defect-detection system among reactive machines. What did the consultant conclude about the system?",
    "options": [
      {
        "letter": "A",
        "text": "It responds to alerts within milliseconds, fast enough for real-time production lines"
      },
      {
        "letter": "B",
        "text": "It builds on stored records of past defects to refine its future judgments"
      },
      {
        "letter": "C",
        "text": "It anticipates operators' intentions by modeling their goals and attention"
      },
      {
        "letter": "D",
        "text": "It maps each current input to a response using fixed rules, with no memory or learning"
      }
    ],
    "answer": "D",
    "explanation": "Reactive machines are AI systems that respond to the current stimulus using pre-programmed rules, with no memory of past inputs and no learning capability — IBM's Deep Blue is the classic example. Option A is a lay misreading of 'reactive' as fast reaction time, option B describes limited-memory AI, and option C describes theory-of-mind AI, the next levels up in the standard typology."
  },
  {
    "id": "q-719",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A board member asks whether the company's conversational assistant, which readily describes its own limitations, qualifies as self-aware AI. What is the accurate answer?",
    "options": [
      {
        "letter": "A",
        "text": "No — that category is purely theoretical, requiring machine consciousness, and no existing system meets it"
      },
      {
        "letter": "B",
        "text": "Yes, if the assistant can accurately describe its own capabilities and confidence levels"
      },
      {
        "letter": "C",
        "text": "Yes, provided the assistant passes a rigorous Turing-style evaluation"
      },
      {
        "letter": "D",
        "text": "Only if the assistant monitors its own performance and flags its own errors"
      }
    ],
    "answer": "A",
    "explanation": "Self-aware AI is the highest theoretical level in the types-of-AI hierarchy: a system possessing consciousness that recognizes its own existence, which does not currently exist. Options B and D mistake self-description and self-monitoring — behaviors today's systems can exhibit — for consciousness, and option C confuses the category with the Turing test, which measures conversational indistinguishability, not awareness."
  },
  {
    "id": "q-720",
    "area": "ch3",
    "domain": "Domain I",
    "difficulty": "Hard",
    "question": "An insurer's third-party risk lead is criticized for assessing only the contracted AI vendor and ignoring sub-tier dependencies. What should the assessment additionally cover?",
    "options": [
      {
        "letter": "A",
        "text": "The vendor's cheaper service plans, which carry weaker uptime and support commitments"
      },
      {
        "letter": "B",
        "text": "The insurer's own downstream applications that consume the vendor's model outputs"
      },
      {
        "letter": "C",
        "text": "The layers beneath the vendor: subcontracted labeling firms, scraped training data, and outdated libraries"
      },
      {
        "letter": "D",
        "text": "The vendor's financial solvency, insurance coverage, and business-continuity posture"
      }
    ],
    "answer": "C",
    "explanation": "Sub-tier dependencies are the hidden supply-chain risks below a contracted AI vendor — subcontracted data-labeling teams, models trained on scraped or copyrighted data, and aging code libraries — and a core TPRM challenge is deciding how many levels down to probe. Option A misreads 'tier' as pricing tiers, option B looks downstream inside the insurer rather than upstream in the supply chain, and option D is standard first-tier vendor due diligence."
  },
  {
    "id": "q-721",
    "area": "ch4",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A telecom operator concludes that the vendor running its AI churn-prediction platform acts as a third-party processor of subscriber data under the GDPR. What must the operator put in place before the processing continues?",
    "options": [
      {
        "letter": "A",
        "text": "A joint-controllership arrangement allocating responsibilities between the two companies"
      },
      {
        "letter": "B",
        "text": "Fresh consent from every subscriber authorizing the vendor's involvement"
      },
      {
        "letter": "C",
        "text": "Prior authorization for the arrangement from the competent supervisory authority"
      },
      {
        "letter": "D",
        "text": "A contract binding the vendor to its instructions and specifying scope, safeguards, and responsibilities"
      }
    ],
    "answer": "D",
    "explanation": "A third-party processor handles personal data on behalf of the controller, and GDPR Article 28 requires a binding contract (data processing agreement) defining the processing's scope, safeguards, and each party's responsibilities. Option A applies only where two parties jointly determine purposes and means (Article 26), option B is unnecessary because engaging a processor does not itself require consent, and option C reflects no general GDPR authorization requirement for processor engagements."
  },
  {
    "id": "q-722",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A NIST AI RMF assessment concludes that a utility's load-forecasting model fails the valid and reliable trustworthiness characteristic. Which finding supports that conclusion?",
    "options": [
      {
        "letter": "A",
        "text": "Grid operators cannot obtain an understandable rationale for the model's forecasts"
      },
      {
        "letter": "B",
        "text": "The forecasts are frequently inaccurate, and performance swings widely between runs under the same conditions"
      },
      {
        "letter": "C",
        "text": "The training data includes household smart-meter records collected without a lawful basis"
      },
      {
        "letter": "D",
        "text": "The model forecasts demand less accurately for rural districts than for urban ones"
      }
    ],
    "answer": "B",
    "explanation": "Valid and reliable is the NIST AI RMF trustworthiness characteristic requiring accurate outputs (validity) delivered consistently under specified conditions (reliability), so frequent inaccuracy plus inconsistent run-to-run performance is a direct failure. Option A maps to the explainable-and-interpretable characteristic, option C to privacy-enhanced, and option D to fair-with-harmful-bias-managed — each a different characteristic in the framework."
  },
  {
    "id": "q-723",
    "area": "ch3",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A streaming-media company is updating its AI data retention policy as part of a broader AI governance rollout. Which issue, commonly missed when adapting traditional retention rules, must the new policy address?",
    "options": [
      {
        "letter": "A",
        "text": "How long system logs and access records must be kept to support security investigations"
      },
      {
        "letter": "B",
        "text": "Whether archived data sits in a jurisdiction with adequate data protection law"
      },
      {
        "letter": "C",
        "text": "That deleted training data may effectively persist in the parameters of models trained on it"
      },
      {
        "letter": "D",
        "text": "How frequently backup media are rotated and then securely destroyed"
      }
    ],
    "answer": "C",
    "explanation": "An AI data retention policy governs how long training data is kept after model development and must confront the fact that information can persist inside the trained model itself even after the raw data is deleted — a common gap when privacy policies are updated for AI. Option A is conventional log-retention practice, B is a cross-border transfer question, and D is ordinary records-management hygiene; none captures the AI-specific persistence problem."
  },
  {
    "id": "q-724",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "An AI governance team wants a ready-made catalog of AI risk sources, such as system opacity and degree of automation, to seed its risk register. A consultant points them to ISO/IEC 23894. Which part of the standard serves this purpose?",
    "options": [
      {
        "letter": "A",
        "text": "Annex B, which is offered as informative guidance"
      },
      {
        "letter": "B",
        "text": "Annex A, which is offered as informative guidance"
      },
      {
        "letter": "C",
        "text": "Annex C, which is offered as informative guidance"
      },
      {
        "letter": "D",
        "text": "Clause 6, which sets out normative process requirements"
      }
    ],
    "answer": "A",
    "explanation": "Annex B of ISO/IEC 23894 is the informative annex cataloging AI-specific origins of risk. Annex A instead lists common AI-related objectives, Annex C maps risk management processes onto the AI system life cycle, and the core clauses (including Clause 6) describe the risk management process itself rather than a catalog to draw from."
  },
  {
    "id": "q-725",
    "area": "ch4",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A DPO reviewing a health-tech startup's model training pipeline halts the project, citing Article 9 GDPR. Which characteristic of the training data most likely triggered the objection?",
    "options": [
      {
        "letter": "A",
        "text": "It was collected from EU residents but is stored on servers in the United States"
      },
      {
        "letter": "B",
        "text": "It was scraped from public websites without informing the individuals concerned"
      },
      {
        "letter": "C",
        "text": "It will be used to make fully automated decisions about individual patients"
      },
      {
        "letter": "D",
        "text": "It includes patients' medical histories, which may not be processed unless an exception applies"
      }
    ],
    "answer": "D",
    "explanation": "Article 9 GDPR prohibits processing special categories of personal data — including health, race, religion, and biometric data — unless one of its specific exceptions applies, which makes it a central constraint on AI training data. Option A raises Chapter V cross-border transfer rules, B concerns transparency duties under Article 14, and C implicates Article 22 on automated decision-making."
  },
  {
    "id": "q-726",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A vendor brochure describes its hospital assistant platform as cognitive computing, using the term in its ISO/IEC 22989 sense. What capability is the vendor actually claiming?",
    "options": [
      {
        "letter": "A",
        "text": "The system reasons with human-level general intelligence across unrelated domains"
      },
      {
        "letter": "B",
        "text": "The system supports more natural interaction between people and machines"
      },
      {
        "letter": "C",
        "text": "The system's hardware mimics the structure of biological neurons"
      },
      {
        "letter": "D",
        "text": "The system can fully explain the internal logic behind each of its outputs"
      }
    ],
    "answer": "B",
    "explanation": "In ISO/IEC 22989, cognitive computing is a category of AI systems that enables more natural interaction between humans and machines. Option A describes artificial general intelligence, C describes neuromorphic hardware, and D describes explainability — all easy lay misreadings of a system that 'thinks,' but none is what the term denotes."
  },
  {
    "id": "q-727",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "An ISO/IEC 22989-based audit of an autonomous parcel-sorting robot includes a controllability assessment. What must the auditors verify?",
    "options": [
      {
        "letter": "A",
        "text": "That a human or an external agent can step in and intervene while the system is operating"
      },
      {
        "letter": "B",
        "text": "That the system produces the same output every time it receives the same input"
      },
      {
        "letter": "C",
        "text": "That only authorized personnel are able to access and reconfigure the system"
      },
      {
        "letter": "D",
        "text": "That the system keeps performing within specification as input conditions drift"
      }
    ],
    "answer": "A",
    "explanation": "Controllability is the property of an AI system that enables a human or another external agent to intervene in the system's operation. Option B describes determinism or reliability, C describes access control (a natural but incorrect reading of 'control'), and D describes robustness under changing conditions."
  },
  {
    "id": "q-728",
    "area": "ch8",
    "domain": "Domain III",
    "difficulty": "Easy",
    "question": "During an audit of a manufacturing defect-detection model, the lead engineer raises a data integrity concern about the sensor feeds used for training. What is she questioning?",
    "options": [
      {
        "letter": "A",
        "text": "Whether the sensor data was gathered with a lawful basis and proper notice"
      },
      {
        "letter": "B",
        "text": "Whether individual machines could be re-identified from the collected readings"
      },
      {
        "letter": "C",
        "text": "Whether the training sample represents every product line the model will inspect"
      },
      {
        "letter": "D",
        "text": "Whether the readings have stayed accurate, consistent, and untampered over their lifecycle"
      }
    ],
    "answer": "D",
    "explanation": "Data integrity refers to the accuracy, consistency, and trustworthiness of data throughout its lifecycle; corrupted or tampered data makes an AI system's outputs unreliable. Option A is about lawfulness of collection, B is a privacy and re-identification issue, and C is about representativeness and bias — adjacent data-quality concerns, but not integrity."
  },
  {
    "id": "q-729",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Easy",
    "question": "A bank must explain to a regulator how its credit model, a decision tree, denied a specific application. What can the bank walk the regulator through?",
    "options": [
      {
        "letter": "A",
        "text": "The weighted connections the applicant's data passed through across successive layers"
      },
      {
        "letter": "B",
        "text": "The sequence of branching feature tests the application followed from the start to a final outcome"
      },
      {
        "letter": "C",
        "text": "The most similar past applicants whose recorded outcomes determined this prediction"
      },
      {
        "letter": "D",
        "text": "The independent per-feature likelihoods that were combined into a single final score"
      }
    ],
    "answer": "B",
    "explanation": "In a decision tree, inference is encoded as a path from the root to a leaf node, so a denial can be traced as a readable series of branching tests on the applicant's features. Option A describes a neural network, C describes a nearest-neighbor method, and D describes a naive Bayes-style probabilistic model."
  },
  {
    "id": "q-730",
    "area": "ch6",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A social-media firm is found to have run a banned emotion-inference system on its employees, and the regulator applies the EU AI Act penalty tiers. What is the maximum administrative fine the firm faces?",
    "options": [
      {
        "letter": "A",
        "text": "Up to EUR 20 million or 4 percent of worldwide annual turnover, whichever is higher"
      },
      {
        "letter": "B",
        "text": "Up to EUR 15 million or 3 percent of worldwide annual turnover, whichever is higher"
      },
      {
        "letter": "C",
        "text": "Up to EUR 35 million or 7 percent of worldwide annual turnover, whichever is higher"
      },
      {
        "letter": "D",
        "text": "Up to EUR 7.5 million or 1 percent of worldwide annual turnover, whichever is higher"
      }
    ],
    "answer": "C",
    "explanation": "Emotion inference in the workplace is a prohibited practice under Article 5, which sits in the top penalty tier: up to EUR 35 million or 7 percent of global annual turnover, whichever is higher. Option B is the tier for non-compliance with high-risk obligations, D is the tier for supplying incorrect or misleading information to authorities, and A is the GDPR's maximum, not the AI Act's."
  },
  {
    "id": "q-731",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An airport security briefing states that the new gate cameras perform face recognition as defined in ISO/IEC 22989. What does the system do?",
    "options": [
      {
        "letter": "A",
        "text": "Compares each captured image against stored facial images and returns identifying data for any match"
      },
      {
        "letter": "B",
        "text": "Locates and counts faces appearing in the video stream without linking them to individuals"
      },
      {
        "letter": "C",
        "text": "Estimates travelers' emotional state from facial expressions in order to flag agitation"
      },
      {
        "letter": "D",
        "text": "Checks that a presented face belongs to a live person rather than a photo or a mask"
      }
    ],
    "answer": "A",
    "explanation": "ISO/IEC 22989 defines face recognition as automatic pattern recognition that compares stored images of human faces with an actual face image and displays any match together with identifying data. Option B is face detection, C is emotion recognition, and D is liveness or presentation-attack detection — related biometric functions that do not identify a person."
  },
  {
    "id": "q-732",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "A university adopting the NIST AI RMF begins with the Govern function before touching any individual system. Which activity belongs to this phase?",
    "options": [
      {
        "letter": "A",
        "text": "Cataloging the context, purpose, and stakeholders of each AI system in use"
      },
      {
        "letter": "B",
        "text": "Selecting quantitative metrics and testing regimes to assess identified risks"
      },
      {
        "letter": "C",
        "text": "Prioritizing assessed risks and allocating resources to respond to the largest ones"
      },
      {
        "letter": "D",
        "text": "Standing up accountability structures, policies, and a risk-aware culture across the institution"
      }
    ],
    "answer": "D",
    "explanation": "The Govern function of the NIST AI RMF establishes the organizational culture of risk management — policies, accountability structures, workforce considerations, and third-party oversight — and it cuts across the other three functions. Option A belongs to Map, B to Measure, and C to Manage."
  },
  {
    "id": "q-733",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "Before releasing a sepsis-prediction model, a hospital's validation team schedules interpretability testing. What will the team evaluate?",
    "options": [
      {
        "letter": "A",
        "text": "Whether accuracy holds when the model is applied to new patient populations"
      },
      {
        "letter": "B",
        "text": "Whether crafted inputs can push the model into dangerous misclassifications"
      },
      {
        "letter": "C",
        "text": "Whether clinicians can understand and explain in human terms why the model reached its outputs"
      },
      {
        "letter": "D",
        "text": "Whether the model's on-screen guidance is accurately translated for non-English-speaking staff"
      }
    ],
    "answer": "C",
    "explanation": "Interpretability testing assesses whether an AI system's decisions can be understood and explained in human terms, which is critical in high-stakes domains like healthcare. Option A is generalization testing, B is adversarial robustness testing, and D trades on the everyday sense of 'interpreting' language rather than the machine learning meaning."
  },
  {
    "id": "q-734",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Medium",
    "question": "An insurer has finished its Map and Measure work under the NIST AI RMF and now turns to the Manage function. What does this stage involve?",
    "options": [
      {
        "letter": "A",
        "text": "Documenting each system's intended purpose, context of use, and affected stakeholders"
      },
      {
        "letter": "B",
        "text": "Prioritizing the assessed risks, acting on the most significant, and monitoring and recovering from incidents"
      },
      {
        "letter": "C",
        "text": "Defining board-level accountability, policies, and risk culture for the organization"
      },
      {
        "letter": "D",
        "text": "Applying quantitative benchmarks and test protocols to gauge each identified risk"
      }
    ],
    "answer": "B",
    "explanation": "The Manage function allocates risk resources to the risks that were mapped and measured: prioritizing them, responding to and recovering from AI incidents, and maintaining ongoing monitoring. Option A describes the Map function, C describes Govern, and D describes Measure."
  },
  {
    "id": "q-735",
    "area": "ch3",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A life insurer exposes its underwriting model through a public quoting API. The security team warns that a model inversion attack could create GDPR liability. What is the team worried an attacker will do?",
    "options": [
      {
        "letter": "A",
        "text": "Reconstruct sensitive attributes of the people whose records trained the model by probing its outputs"
      },
      {
        "letter": "B",
        "text": "Submit subtly perturbed applications that force the model into favorable misclassifications"
      },
      {
        "letter": "C",
        "text": "Replicate a working copy of the underwriting model through systematic bulk queries"
      },
      {
        "letter": "D",
        "text": "Seed the insurer's future training data with records that implant a hidden backdoor"
      }
    ],
    "answer": "A",
    "explanation": "A model inversion attack reconstructs sensitive training data from a model's outputs or parameters, which is why a trained model can itself become a source of personal-data exposure. Option B is an evasion attack using adversarial examples, C is model extraction or theft, and D is data poisoning."
  },
  {
    "id": "q-736",
    "area": "ch5",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "A U.S. retailer's HR chief argues its new AI resume screener is effectively unregulated because the state has passed no AI statute. The general counsel disagrees, pointing to non-discrimination law. What is the counsel's strongest point?",
    "options": [
      {
        "letter": "A",
        "text": "The EU AI Act reaches U.S. employers whenever any job applicant holds EU citizenship"
      },
      {
        "letter": "B",
        "text": "The FTC has issued binding rules that classify all hiring algorithms as high-risk systems"
      },
      {
        "letter": "C",
        "text": "Comprehensive state privacy statutes require an opt-out from any profiling used in employment"
      },
      {
        "letter": "D",
        "text": "Statutes such as Title VII cover hiring outcomes whether a human or an algorithm produced them"
      }
    ],
    "answer": "D",
    "explanation": "Non-discrimination law — Title VII, the ADA, and the ADEA in employment, along with ECOA in credit and the FHA in housing — prohibits unfair treatment based on protected characteristics, and it applies to AI-driven decisions just as it does to human ones. Option A overstates the AI Act's extraterritorial reach, B describes FTC rules that do not exist, and C misstates how state privacy laws treat employment screening."
  },
  {
    "id": "q-737",
    "area": "ch12",
    "domain": "Domain IV",
    "difficulty": "Easy",
    "question": "An AI governance committee at a logistics firm reviews the probability severity matrix produced during the annual risk assessment. What does this artifact show?",
    "options": [
      {
        "letter": "A",
        "text": "A calibration check comparing the model's predicted likelihoods with observed outcomes"
      },
      {
        "letter": "B",
        "text": "Identified risks placed on a grid by how likely they are and how much harm they would cause"
      },
      {
        "letter": "C",
        "text": "Past incidents classified into response-priority levels with target resolution times for each"
      },
      {
        "letter": "D",
        "text": "A table crossing the model's predicted classes against actual classes from test data"
      }
    ],
    "answer": "B",
    "explanation": "A probability severity matrix plots each risk's likelihood against its potential impact, typically on a grid, so the organization can quantify and prioritize risks. Option A is model calibration analysis, C is incident triage classification, and D is a confusion matrix — each a plausible reading of 'probability' or 'severity,' but not this risk assessment tool."
  },
  {
    "id": "q-738",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "An AIGP study session classifies today's frontier large language models as reasoning AI within a capability taxonomy. What does that classification convey about these models?",
    "options": [
      {
        "letter": "A",
        "text": "They deduce conclusions from an explicit knowledge base using formal logic rules"
      },
      {
        "letter": "B",
        "text": "They match human-level general intelligence across any domain they encounter"
      },
      {
        "letter": "C",
        "text": "They perform advanced pattern analysis and prediction, enough to pass standardized tests"
      },
      {
        "letter": "D",
        "text": "They possess genuine understanding and awareness of the content they produce"
      }
    ],
    "answer": "C",
    "explanation": "Reasoning AI denotes systems with advanced pattern analysis and prediction capabilities — the category where most current LLMs sit, capable of passing standardized tests. Option A describes symbolic, logic-based AI (a natural misreading of 'reasoning'), B describes artificial general intelligence, and D attributes consciousness that no current classification claims."
  },
  {
    "id": "q-739",
    "area": "ch1",
    "domain": "Domain I",
    "difficulty": "Easy",
    "question": "A retail analytics team can afford to hand-label only two percent of its forty million product images, so it adopts semi-supervised learning. How will the team train its classifier?",
    "options": [
      {
        "letter": "A",
        "text": "Learn from the small labeled portion, then use those patterns to assign labels to the unlabeled remainder"
      },
      {
        "letter": "B",
        "text": "Let the model discover natural clusters in the images without using any labels at all"
      },
      {
        "letter": "C",
        "text": "Train on fully labeled data while human reviewers audit half of the model's outputs"
      },
      {
        "letter": "D",
        "text": "Reward or penalize the model as it interacts with an environment and observes the results"
      }
    ],
    "answer": "A",
    "explanation": "Semi-supervised learning combines a small amount of labeled data with a large amount of unlabeled data: the model learns from the labeled examples and then predicts labels for the rest. Option B is unsupervised learning, C reads 'semi-supervised' as partial human oversight of outputs, and D is reinforcement learning."
  },
  {
    "id": "q-740",
    "area": "ch7",
    "domain": "Domain II",
    "difficulty": "Hard",
    "question": "In an ISO/IEC 22989 training course, an instructor classifies a deep learning vision model as subsymbolic AI. Which characteristic of the model justifies that label?",
    "options": [
      {
        "letter": "A",
        "text": "It pursues its assigned objectives without any ongoing human direction"
      },
      {
        "letter": "B",
        "text": "It processes images rather than words or other linguistic input"
      },
      {
        "letter": "C",
        "text": "Its outputs are probabilistic estimates rather than definitive answers"
      },
      {
        "letter": "D",
        "text": "It encodes what it has learned implicitly in parameters derived from raw data"
      }
    ],
    "answer": "D",
    "explanation": "Subsymbolic AI is based on techniques and models that use an implicit encoding of information derived from experience or raw data — as in a neural network's learned weights — in contrast to symbolic AI's explicit, human-readable representations. Option A describes autonomy, B misreads 'symbolic' as meaning linguistic content, and C confuses the classification with probabilistic output."
  },
  {
    "id": "q-741",
    "area": "ch3",
    "domain": "Domain I",
    "difficulty": "Medium",
    "question": "A logistics company licenses a pretrained routing model and outsources data labeling, then asks its AI governance lead to review the existing third-party risk management program. She concludes the program cannot handle these suppliers as written. Which gap is she most likely citing?",
    "options": [
      {
        "letter": "A",
        "text": "The program reviews vendors only annually rather than continuously monitoring their financial health"
      },
      {
        "letter": "B",
        "text": "Its questionnaires were built for conventional software, not opaque models, unknown data origins, or shifting API behavior"
      },
      {
        "letter": "C",
        "text": "It does not extend its assessments down to the subcontractors used by each direct vendor"
      },
      {
        "letter": "D",
        "text": "It lacks any requirement for periodic onsite security audits at each supplier's facilities"
      }
    ],
    "answer": "B",
    "explanation": "For AI, third-party risk management must evolve beyond traditional vendor checklists to govern outsourced components like pretrained models, labeling services, and algorithmic APIs — covering black-box algorithms, datasets of unknown origin, and unpredictable model behavior. Options A, C, and D are ordinary TPRM maturity improvements that would still leave the AI-specific blind spot untouched."
  },
  {
    "id": "q-742",
    "area": "ch11",
    "domain": "Domain IV",
    "difficulty": "Medium",
    "question": "A hospital signs a vendor agreement for a clinical note-taking LLM service. Months later it discovers the provider has been fine-tuning its public models on the hospital's prompts. Which element of the contract was most likely missing or deficient?",
    "options": [
      {
        "letter": "A",
        "text": "A cap limiting each party's liability for indirect and consequential damages"
      },
      {
        "letter": "B",
        "text": "Service-level guarantees covering uptime and response latency"
      },
      {
        "letter": "C",
        "text": "Terms specifying how the provider may use the customer's data"
      },
      {
        "letter": "D",
        "text": "A right to terminate for convenience with a pro-rated refund"
      }
    ],
    "answer": "C",
    "explanation": "A vendor agreement with an AI provider should specify data usage rights along with performance guarantees, liability allocation, audit rights, and compliance obligations; here the missing piece is the data usage provision that would have barred training on the hospital's inputs. Options A, B, and D are standard commercial terms that would not have prevented the provider's reuse of customer data."
  }
];
