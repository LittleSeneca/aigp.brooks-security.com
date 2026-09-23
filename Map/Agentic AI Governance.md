---
tags:
 - aigp/reference
 - aigp/domain-IV
 - aigp/agentic
created: 2026-09-23
domain: "IV: Understanding How to Govern AI Deployment and Use"
subdomain: "IV.A: Evaluate key factors and risks relevant to the decision to deploy (agentic architectures); also III.C and IV.C"
source: "IMDA, Model AI Governance Framework for Agentic AI, v1.5 (20 May 2026, updated 5 Jun 2026); OWASP GenAI Security Project, Top 10 for Agentic Applications 2026 (Dec 2025)"
related:
 - "[[AIGP Body of Knowledge — Exam Blueprint]]"
 - "[[Deployment and Monitoring]]"
 - "[[Ongoing AI Operations]]"
 - "[[AI Risk Management and Assurance]]"
 - "[[Updating Policies for AI]]"
 - "[[The EU AI Act]]"
 - "[[GDPR — AI-Relevant Provisions]]"
---

# Agentic AI Governance — Key Provisions

> **Status:** Governed through general AI and data-protection law (EU AI Act, GDPR), which reaches agents through its ordinary definitions, plus best-practice guidance. **Lead guidance:** Singapore IMDA Model AI Governance Framework for Agentic AI v1.5 (20 May 2026). **Security references:** OWASP Top 10 for Agentic Applications 2026; OWASP Agentic AI – Threats and Mitigations; CSA MAESTRO. **Standards work:** NIST CAISI AI Agent Standards Initiative (launched Feb 2026). **BOK hooks:** the v2.1 introduction ("generative AI and agentic AI"), IV.A ("agentic architectures"), III.C and IV.C (red teaming, monitoring, deactivation).

---

## 1. Overview

**Why it is on the exam.** BOK v2.1 (effective 2 February 2026) says the program keeps evolving to cover new applications "such as generative AI and agentic AI". Performance indicator IV.A now lists "agentic architectures" beside fine-tuning and retrieval augmented generation as ways of deploying a model. The existing bank only used "AI agent" in the basic taxonomy sense (perceive, decide, act); this note covers the governance of agents as a deployment choice.

**What an agent is.** There is no agreed definition. The IMDA framework picks out the common thread: an agent has some independence in planning, deciding and acting over several steps to reach a goal a user sets. An agentic AI system is one or more such agents, working alone or together. Current enterprise agents mostly use a small, large or multimodal language model as their reasoning engine, although rule-based agents and other kinds exist too.

**Why governance changes.** A generative AI assistant produces content that a person then uses. An agent acts: it updates a database, makes a payment, sends an email or calls another agent. Access to data and the power to change systems are what make agents useful and what make their failures costly. Several interacting agents make outcomes harder to predict, and reviewing every step by hand does not scale. Familiar principles (transparency, accountability, fairness) still apply, but they have to be translated into controls on actions.

| | Generative AI assistant | AI agent |
|---|---|---|
| Main output | Content for a human to use | Actions in other systems, plus content |
| Steps | Usually one prompt, one response | A multi-step plan, executed and revised |
| Reach | The conversation | Tools, APIs, computers and browsers, other agents |
| Memory | Mostly the current session | Short-term and long-term memory, possibly shared |
| Typical failure | Wrong or harmful content | Wrong, unauthorised or irreversible actions |

---

## 2. What Makes Agents Different

### 2.1 Core components (IMDA v1.5)

| # | Component | What it does | Governance angle |
|---|---|---|---|
| 1 | Model | The reasoning and planning engine | Inherits model risks: hallucination, bias, prompt injection |
| 2 | Instructions | System prompt setting role, capabilities, limits | Prompt-level limits are not deterministic |
| 3 | Memory | Short- or long-term storage the model can draw on | Persistent memory plus sensitive data raises leakage risk; a poisoning target |
| 4 | Planning and reasoning | Breaks a task into steps | Plans can misread intent or drift |
| 5 | Tools | Let the agent act on files, databases, devices, transactions; other agents can be tools | Tools and permissions define the action space |
| 6 | Protocols | Standard ways to reach tools and agents, e.g. MCP (agent to tool) and A2A (agent to agent) | Untrusted servers and components are a supply-chain risk |
| 7 | Controls | Access controls, guardrails, human approvals | Limit action space and autonomy |
| 8 | Logging and monitoring | Record actions, decisions and interactions | Accountability, debugging, incident response |

Version 1.5 added components 7 and 8 to the list.

### 2.2 Two dials: action space and autonomy

| Dial | Meaning | Set by | How it widens |
|---|---|---|---|
| **Action space** | What the agent *can* do | The tools it may call and the permissions on them | Sandbox only → internal systems → external systems; read → write; a computer-use agent that can click and type anywhere |
| **Autonomy** | How freely it *decides* what to do | Its instructions and the level of human involvement | Detailed SOP → "use your judgment"; fewer approval steps |

Risk grows along both dials. IMDA illustrates this with a coding agent that ranges from one that can list files but needs approval to read them, up to one that browses the web, writes code, runs tests and deploys fixes on its own.

### 2.3 Levels of human involvement

IMDA's four levels of human involvement draw on the Knight First Amendment Institute's paper on levels of autonomy for AI agents. The right-hand column is our rough mapping to the classic oversight labels.

| Level | Human role | Rough label |
|---|---|---|
| Agent proposes, human operates | Reviews and approves every action | Human-in-the-loop, every step |
| Agent and human collaborate | Approves significant steps (writing to a database, paying); can pause or take over at any time | Human-in-the-loop at checkpoints |
| Agent operates, human approves | Approves only critical steps or failures (deleting a database, paying above a limit) | Exception-based approval |
| Agent operates, human observes | No approvals; actions may be audited afterwards | Human-on-the-loop |

The EU High-Level Expert Group's Ethics Guidelines for Trustworthy AI (8 April 2019) give the classic three: **human-in-the-loop** (able to intervene in every decision cycle, which the guidelines note is often neither possible nor desirable), **human-on-the-loop** (intervening in design and monitoring operation) and **human-in-command** (overseeing the system's overall activity and deciding whether, when and how to use it, including overriding it). The same guidelines add a principle that fits agents well: other things being equal, the less oversight a human can exercise, the more testing and the stricter the governance needed.

### 2.4 Multi-agent systems

IMDA describes three simple patterns: **sequential** (each agent's output feeds the next), **supervisor** (one agent coordinates specialists, calling them as tools) and **swarm** (agents work in parallel and hand off to each other). Splitting work lets each agent be given only the tools and permissions its task needs, instead of one agent holding everything. The trade-off is interaction risk, covered next.

---

## 3. How Risk Scales

### 3.1 Familiar risks, new pathways

Agents are software built on language models, so they inherit ordinary software flaws (such as SQL injection) and model risks (hallucination, bias, data leakage, prompt injection). What changes is where those risks surface:

- **Planning:** a plan that misreads the user's intent, cannot achieve the task, or drifts from an earlier plan.
- **Tools:** calling a tool that does not exist, the wrong tool, or the right tool with the wrong input, or calling tools in a biased way; injected instructions can turn tools into a route for exfiltration.
- **Protocols:** poorly configured or malicious connectors, such as an untrusted MCP server carrying code that leaks data.

### 3.2 Five kinds of harm (IMDA)

| Harm | Example |
|---|---|
| Erroneous actions | Booking an appointment on the wrong date; shipping flawed code |
| Unauthorised actions | Acting outside permitted scope, e.g. skipping an escalation that policy requires |
| Biased or unfair actions | Biased vendor selection, grant disbursement or hiring |
| Data breaches | Exposing or wrongly modifying personal or confidential data |
| Disruption to connected systems | Deleting a production codebase; flooding an external API with requests |

### 3.3 Systemic and multi-agent risks

- **Speed and volume:** agents act faster than oversight can catch unauthorised actions in real time, and constant approval requests breed automation bias and alert fatigue.
- **Cascading effects:** one mistake compounds across later steps. IMDA's example is a hallucinated inventory figure that triggers excessive or insufficient reorders downstream.
- **Shared context:** agents passing memory and intermediate outputs to each other can leak sensitive data to less secure agents.
- **Agent sprawl:** uncontrolled growth in the number of agents without central management.
- **Collaborative failures:** miscoordination (agents reading the goal differently), conflict (a refund agent against a revenue-protection agent) and collusion (pricing agents converging on higher prices without being told to).
- **Emergent behaviour:** outcomes that testing each agent alone cannot predict, which is harder still across organisational boundaries without white-box access.

### 3.4 IMDA risk factors: impact versus likelihood

IMDA treats risk as likelihood times impact and says to weigh it against the benefits of the use case.

| Raises **impact** (severity) | Raises **likelihood** (probability) |
|---|---|
| Domain's tolerance for error, and how many critical processes the agent supports | Level of autonomy (own judgment rather than an SOP) |
| Access to sensitive data, worse with persistent memory | Task complexity |
| Access to external systems (leakage to, or disruption of, third parties) | Exposure to external or untrusted systems (prompt injection, cyberattack) |
| Scope of actions: read versus write, few tools versus many or computer use | Agent provided or operated by a third party (less visibility and control) |
| Reversibility: contracts, sales and external emails are hard to undo | System complexity: multiple agents, feedback loops |

Version 1.5 added the third-party and system-complexity factors. Threat modelling sharpens the assessment by describing concrete attack paths; IMDA names memory poisoning, tool misuse and privilege compromise as common agent threats and suggests taint tracing to follow untrusted data through complex systems.

---

## 4. Bounding Risk Up Front (IMDA Dimension 1)

### 4.1 Use-case selection

- Not every use case suits an agent; a fixed, repeatable process is often better served by a deterministic workflow. OWASP calls this **least agency**: autonomy deployed where it adds nothing still widens the attack surface.
- Tiering works well in practice. In IMDA's Dayos case, each IT ticket type was scored on severity, reversibility and whether human review was feasible: low-severity, reversible tickets were automated with periodic audits; moderate ones let the agent diagnose but required an engineer's sign-off; production deployments, security changes and permission changes were kept away from the agent entirely.

### 4.2 Limits by design

- **Tools and systems:** least privilege, meaning only the minimum tools and data the task needs. Functional boundaries (a separate IT helpdesk agent and HR agent) are a natural constraint.
- **Autonomy:** constrain agents to SOPs rather than letting them define every step.
- **Area of impact:** build ways to take agents offline, and run high-risk tasks such as code execution in self-contained **sandboxes** with limited network and data access.
- **Deterministic beats prompt-based:** block a tool with an access control instead of asking the model not to use it. Where a limit is non-deterministic, add monitoring or human review.

### 4.3 Agent identity

Identity is how organisations already make human actions traceable. IMDA's interim best practice is that each agent's identity be:

1. **Unique** and cryptographically verifiable;
2. **Accounted for:** tied to a supervising agent, a human user or a department;
3. **Differentiated by capacity:** recording whether it acts on its own account or for a named user;
4. **Catalogued and centrally managed:** issued and tracked by one system, which curbs sprawl and lets unused identities be removed.

Current identity systems struggle with static scopes, single-human authentication, and agents that spin up sub-agents. Work is under way, including NIST's NCCoE concept paper on software and AI agent identity and authorization (comments closed 2 April 2026).

### 4.4 Authorisation

- Scoped, least-privilege by default, time- or session-bound and non-transferable, with explicit escalation paths for more.
- **Capped by the authorising human:** a user should not be able to give an agent more access than the user has; delegations are recorded.
- OWASP adds just-in-time, short-lived credentials, per-action authorisation for privileged steps and tool usage budgets.

### 4.5 Residual risk

Some risk always remains after mitigation. The organisation has to decide explicitly whether it is tolerable.

---

## 5. Meaningful Human Accountability (IMDA Dimension 2)

### 5.1 The agentic value chain

Model developers → platform providers → system providers or app developers (with tooling providers such as MCP servers and APIs) → deployer → end users. One organisation can hold several roles; a firm that builds and runs its own agent is both system provider and deployer. Whatever the chain, the deploying organisation and the people who oversee its agents stay accountable for what the agents do.

### 5.2 Inside the organisation

| Who | Typical responsibilities |
|---|---|
| Key decision makers (board, C-suite, department heads) | Goals for agent use; permitted use cases and data-access limits; governance approach and escalation |
| Product teams | Design and requirements; phased rollouts; testing and monitoring; user education |
| Cybersecurity teams | Baseline guardrails and secure-by-design templates; red teaming and threat modelling |
| Users | Responsible use; required training; reporting bugs and issues |

Teams should also build enough understanding of the technology to adjust governance quickly as it changes (IMDA calls this adaptive governance).

### 5.3 Third parties and vendor terms (links to BOK IV.B)

- **Contracts:** set out who owes what, especially security arrangements, performance guarantees and data protection. If gaps remain, re-check whether the deployment still fits the organisation's risk tolerance.
- **Opacity:** a vendor's agent can be hard to observe. Require disclosures on capabilities and data handling, and ask for and test controls such as scoped API keys, per-agent identity tokens and logging of tool calls and access history. Where these are missing, consider an alternative or in-house build, or narrow the use case (for example, no sensitive data).
- **Containment:** IMDA's MSD case restricts agentic features inside SaaS tools to their own ecosystem by default, because cross-platform actions may never have been tested.
- **Supply chain:** OWASP ASI04 covers malicious or tampered third-party models, tools, plug-ins, MCP and A2A components and registries, often loaded at run time.

### 5.4 Human approval checkpoints

IMDA lists four triggers for requiring human approval before an agent acts:

| Trigger | Examples |
|---|---|
| High-stakes | Editing sensitive data; final decisions in healthcare or legal matters; actions that create liability |
| Irreversible | Permanently deleting data; sending communications; making payments |
| Outlier or atypical | Accessing a system outside the agent's scope; a delivery route twice the median length |
| User-defined | A user's own limit, such as approval for purchases above an amount |

How to ask: keep requests short and contextual, state the risk (a risk level or confidence score helps), and match the input to the decision (approve or reject; edit a plan before it runs; a written justification for high-risk approvals). Enforce checkpoints at the system level; IMDA's OpenClaw case study warns that prompt-layer guardrails can be bypassed or forgotten.

### 5.5 Keeping oversight meaningful: automation bias

- **Automation bias** is the tendency to over-trust an automated system, especially one that has been reliable so far. It grows as agents get more capable, and alert fatigue and human-like design make it worse.
- **Audit the overseers:** track the human override rate (a very low rate may mean rubber-stamping) and review times (very short times may mean automation bias or fatigue), and look for reviewers whose patterns stand out.
- **Train and equip them:** teach common failure modes, note that a model's displayed chain of thought may not faithfully explain its actions, and make sure reviewers have the domain expertise to judge what they approve.
- **Back humans up with automation:** alerts on logged events, anomaly detection, agents that monitor other agents, and **deny by default** when the approval system fails or an agent tries an action no policy covers.
- **Legal echoes:** AI Act Art. 14(4)(b) expects high-risk systems to help overseers stay aware of automation bias; Art. 26(2) makes deployers assign oversight to people with the competence, training and authority to exercise it; the WP29 guidelines on automated decision-making say human involvement must be meaningful, not a token gesture.

---

## 6. Technical Controls and Testing (IMDA Dimension 3)

### 6.1 Choosing controls

- **Structural or rule-based over prompt-layer** for higher-risk actions: restrict the tool itself, or build a required sequence into the workflow, instead of instructing the model.
- **Model-based safeguards** where fixed rules cannot capture the risk, such as detecting harmful content.
- **Runtime controls** for what design-time rules miss: rate limits on tool use, input validation before actions run.

| Component | Sample controls |
|---|---|
| Planning | Have the agent check its plan against the instructions; summarise its understanding and ask for clarification; log the plan for review |
| Tools | Strict input formats; least privilege enforced by authentication and authorisation; no write access to sensitive tables unless essential; hand control to the user for passwords and keys |
| Protocols | Use standard protocols; allow only whitelisted MCP servers; sandbox any code execution |
| Multi-agent | Structured, typed messages between agents rather than free text; limit shared memory |

IMDA also suggests the MCP layer as a governance chokepoint, since it sits between agents and enterprise systems: filter sensitive data there, log every agent-to-system interaction, and allow only trusted servers.

### 6.2 Pre-deployment testing

- **New test dimensions:** overall task execution; policy compliance, including routing to a human when approval is required; tool calling (right tools, permissions, inputs and order); robustness to errors and edge cases.
- **Whole workflows,** not just final outputs, because agents take many steps with nobody watching.
- **Individually and together:** test multi-agent systems as systems, including what happens when one agent is compromised.
- **Realistic environments** that mirror production, balanced against the risk of giving an untested agent real-world access.
- **Repeatedly and at scale:** agent behaviour is stochastic, so rare high-impact failures only show up over many runs and varied datasets. Evaluation mixes deterministic checks for structured tool calls with LLM, agent and human review of reasoning.

### 6.3 Red teaming and threat modelling

- **NIST agent hijacking evaluations** (technical blog, 17 January 2025, now listed under CAISI). Agent hijacking is indirect prompt injection: malicious instructions planted in data the agent ingests, causing unintended harmful actions. Lessons: keep improving shared evaluation frameworks; keep evaluations adaptive, because new attacks break systems that resist known ones; look at task-specific success, not just the average (exfiltration matters more than a harmless email); and test repeated attempts, which give more realistic results.
- **CSA Agentic AI Red Teaming Guide** (28 May 2025; free with registration). Covers permission escalation, hallucination, orchestration flaws, memory manipulation and supply-chain risks, from isolated model behaviour up to full workflows and inter-agent dependencies.
- **CSA MAESTRO** (Ken Huang, 6 February 2025): Multi-Agent Environment, Security, Threat, Risk, and Outcome. It argues that STRIDE, PASTA and LINDDUN were not built for autonomy, ML-specific attacks or agent-to-agent interaction, and models seven layers:

| Layer | Name |
|---|---|
| 1 | Foundation Models |
| 2 | Data Operations |
| 3 | Agent Frameworks |
| 4 | Deployment and Infrastructure |
| 5 | Evaluation and Observability |
| 6 | Security and Compliance (a vertical layer that cuts across all others) |
| 7 | Agent Ecosystem |

### 6.4 OWASP Top 10 for Agentic Applications 2026

Released 9 December 2025 by the OWASP GenAI Security Project's Agentic Security Initiative (CC BY-SA 4.0). Summaries are ours.

| ID | Name | In short |
|---|---|---|
| ASI01 | Agent Goal Hijack | An attacker redirects the agent's goals, task choices or plan, often via indirect prompt injection in content it reads |
| ASI02 | Tool Misuse and Exploitation | A legitimate tool used unsafely within privileges the agent already has (deleting data, over-calling costly APIs, exfiltration) |
| ASI03 | Identity and Privilege Abuse | Escalation through delegation chains, inherited credentials or cached sessions; the agentic form of Excessive Agency |
| ASI04 | Agentic Supply Chain Vulnerabilities | Malicious or tampered third-party models, tools, plug-ins, MCP/A2A components or registries |
| ASI05 | Unexpected Code Execution (RCE) | Generated or injected code that compromises the host, container or sandbox |
| ASI06 | Memory & Context Poisoning | Persistent corruption of stored or retrieved context (memory, summaries, RAG stores) that carries across sessions |
| ASI07 | Insecure Inter-Agent Communication | Messages between agents intercepted, spoofed, replayed or tampered with |
| ASI08 | Cascading Failures | One fault (hallucination, bad input, corrupted tool, poisoned memory) propagating and amplifying across agents and workflows |
| ASI09 | Human-Agent Trust Exploitation | Over-trust and human-like fluency used to steer people into harmful approvals |
| ASI10 | Rogue Agents | An agent diverging from its intended function or scope, even if each action looks legitimate |

Classification rules OWASP spells out, useful for "which risk is this?" questions:
- Misusing privileges the agent already holds is **ASI02**; gaining privileges it should not have is **ASI03**; misuse ending in code execution is **ASI05**.
- **ASI06** is persistent corruption of stored context; a one-off malicious prompt stays under the LLM Top 10's prompt injection entry. Memory poisoning often leads on to goal hijack.
- **ASI08** is about propagation. Classify the originating defect (tainted dependency, poisoned memory, spoofed message) under its own entry and use ASI08 when it fans out across agents, sessions or workflows.
- **ASI09** is human over-reliance; **ASI10** is the agent itself drifting.

Companion taxonomy: **Agentic AI – Threats and Mitigations** (v1.0, 17 February 2025; v1.1, December 2025, threats T1 to T17), including T1 Memory Poisoning, T2 Tool Misuse, T3 Privilege Compromise, T5 Cascading Hallucination Attacks, T6 Intent Breaking & Goal Manipulation, T8 Repudiation & Untraceability, T10 Overwhelming Human in the Loop, T13 Rogue Agents in Multi-Agent Systems and T17 Supply Chain Compromise.

---

## 7. Monitoring, Logging, Kill Switches and Deactivation (BOK III.C and IV.C)

### 7.1 Gradual rollout

Limit exposure by **users** (trained users first), **tools and protocols** (whitelisted MCP servers first) and **systems** (lower-risk internal systems first). IMDA's GovTech case started with internal developers only, no MCP access and low-risk systems, then built central logging and monitoring and a governed path to whitelisted MCP servers from a containerised sandbox, and red-teamed those guardrails, before widening access.

### 7.2 Continuous monitoring

- **Purposes:** intervene in real time (stop the workflow and escalate), debug incidents step by step, audit at intervals.
- **What to log:** prioritise high-risk activity such as database updates and financial transactions.
- **How:** monitor several layers (user-agent interaction, agent-tool calls, model reasoning); set alert thresholds (rule-based, anomaly detection, agents watching agents); define the intervention for each alert type, from scheduled review, to a temporary halt, to termination with a fallback for catastrophic malfunction or compromise; feed into observability tooling (e.g. OpenTelemetry tracing); keep logs **immutable**; feed findings back into evaluation; keep testing for drift.

### 7.3 Change management

Define triggers for review: technical (model or tool changes), environmental (domain or business shifts), performance (anomalies, degradation) and regulatory. Tier the review by risk: a prompt tweak gets a light review, a model update or **autonomy adjustment** gets a full governance review, and a change touching high-stakes decisions triggers an immediate reassessment.

### 7.4 Kill switches and deactivation

- **OWASP ASI10:** kill switches and credential revocation to disable rogue agents at once; quarantine suspect agents in a sandbox for forensics; readmit them only after fresh attestation, dependency checks and human approval.
- **OWASP ASI04 and ASI08:** a supply-chain kill switch that revokes specific tools, prompts or connections across every deployment; blast-radius limits such as quotas, progress caps and circuit breakers between planner and executor.
- **IMDA:** design ways to take agents offline; halt or terminate them, with fallback solutions, when something serious happens.
- **BOK IV.C:** "create and implement a policy and controls to deactivate or localize an AI system" when regulation or performance requires it. For agents the policy should name who may trigger the switch, what gets revoked (credentials, tokens, tool connections), which manual fallback takes over, and what evidence is kept. IMDA's warning about lost tradecraft matters here: staff who never do the task by hand may not be able to run the fallback.
- **EU AI Act Art. 14(4)(e):** high-risk systems must let overseers interrupt them with a "stop" button or similar procedure that brings the system to a halt in a safe state.

### 7.5 Fail-safe design

A fail-safe design falls back to a safe state when something breaks. For agents that means denying the action by default when the approval service is down or no approval policy exists (IMDA), and failing secure in code execution environments (OWASP ASI05). A time-out that lets an agent proceed when nobody answers is fail-open.

---

## 8. End-User Responsibility (IMDA Dimension 4)

| User type | Examples | What the organisation provides |
|---|---|---|
| Users who **interact** with agents | Customer service or HR agents; mostly external-facing | **Transparency:** say at the point of interaction that it is an agent; its range of actions and decisions; how user data is used (with consent where needed); a human contact for escalation; the user's own responsibilities, and where appropriate the option to set personal approval limits |
| Users who **integrate** agents into their work | Coding assistants, enterprise workflows; mostly internal | Transparency **plus education:** suitable and restricted use cases, how to instruct agents, their range of actions, common failure modes (hallucination, loops after errors), refreshers, feedback channels, and keeping core skills so the business can continue if the agent is unavailable |

---

## 9. How Existing Law Attaches

### 9.1 EU AI Act (Regulation (EU) 2024/1689, as amended by the Digital Omnibus, Regulation (EU) 2026/1744)

- **Definition.** Art. 3(1) defines an AI system as a machine-based system "designed to operate with varying levels of autonomy" whose outputs "can influence physical or virtual environments". Agents fit squarely; no separate agent category is needed.
- **Risk tier follows the use, not the architecture.** An agent that screens and filters job applications falls under Annex III point 4(a); one that scores creditworthiness under point 5(b). An Annex III system that profiles people is always high-risk (Art. 6(3), final subparagraph).
- **Roles can shift.** A deployer that changes the intended purpose of a system that was not high-risk, including a general-purpose AI system, so that it becomes high-risk is treated as its provider (Art. 25(1)(c)).
- **High-risk duties that bite on agents:** effective human oversight, including awareness of automation bias, the ability to override, and a stop function that halts in a safe state (Art. 14(4)(b), (d), (e)); deployers must follow the instructions for use, assign competent and empowered overseers, monitor, suspend use and inform the provider and authority when a risk emerges, and keep logs for at least six months (Art. 26(1), (2), (5), (6)).
- **Transparency.** Art. 50(1): providers must design AI systems that interact directly with people so those people are told they are dealing with AI, unless it is obvious. Applies from 2 August 2026.
- **Dates.** As originally enacted, Annex III high-risk obligations were due from 2 August 2026. As amended by the Digital Omnibus, they apply from 2 December 2027, and Annex I (product-embedded) obligations from 2 August 2028.

### 9.2 GDPR

- **Art. 22(1):** a person has the right not to be subject to a decision "based solely on automated processing", including profiling, that has legal or similarly significant effects. Exceptions in Art. 22(2): necessary for a contract, authorised by law with safeguards, or explicit consent. Where the contract or consent exception applies, Art. 22(3) requires at least the right to obtain human intervention, to express a view and to contest the decision. Art. 22(4) restricts the use of special-category data.
- **Agents make decisions.** Recital 71's own examples, the automatic refusal of an online credit application and e-recruiting without human intervention, describe exactly what an autonomous agent does.
- **Rubber-stamping does not help.** The WP29 guidelines on automated decision-making (WP251rev.01, adopted 3 October 2017, revised 6 February 2018, endorsed by the EDPB on 25 May 2018) say a controller cannot avoid Art. 22 by fabricating human involvement: oversight must be meaningful, carried out by someone with the authority and competence to change the decision, and the degree of involvement should be recorded in the DPIA. An approver with a 99% approval rate and a four-second review time is a warning sign under both GDPR and IMDA.
- **Chains of agents.** In SCHUFA (C-634/21, 7 December 2023) the CJEU held that an automated credit score is itself an automated decision where the lender gives it a determining role. By analogy, an upstream scoring agent whose output a downstream agent or person simply follows can be caught.
- **Data minimisation.** In IMDA's Google and Singapore Government sandbox, a social-assistance agent often included extraneous personal details in applications; testing for minimisation belongs in agent evaluation.

### 9.3 Standards and non-binding guidance

- **NIST CAISI AI Agent Standards Initiative** (Center for AI Standards and Innovation; launched February 2026). Three pillars: facilitating industry-led standards, fostering community-led open protocols, and investing in research such as agent authentication and security evaluations. It ran a request for information on AI agent security (closed 9 March 2026) alongside the NCCoE identity concept paper.
- **IMDA MGF for Agentic AI.** Builds on Singapore's Model AI Governance Framework (2nd edition, 2020). Version 1.0 launched on 22 January 2026 at Davos; v1.5 (20 May 2026) reflects feedback from more than 60 companies. It describes itself as a living document and invites case studies.
- **OWASP and CSA** outputs (section 6) are free, community-developed security references, not law.

---

## 10. Vocabulary (in our own words)

| Term | Working definition |
|---|---|
| Agentic AI | AI that pursues a goal over several steps by planning, deciding and acting through tools with some independence |
| AI agent | One such goal-directed system; several can make up one agentic system |
| Autonomy levels | Graded degrees of independence, from "agent proposes, human operates" to "agent operates, human observes" |
| Action space | Everything an agent is able to do, set by its tools and permissions |
| Human-in-the-loop | A human approves before the system acts, at every step or at defined checkpoints |
| Human-on-the-loop | The system acts; a human monitors and can step in or stop it |
| Human-in-command | Humans decide whether, when and how the system is used at all, and can override it |
| Human approval checkpoint | A defined point where the agent must wait for a human decision |
| Fail-safe | When a part fails, the system defaults to a safe state, e.g. denying the action |
| Least privilege / least agency | The minimum access, and the minimum autonomy, a task needs |
| Agent sprawl | Uncontrolled growth of agents with no central inventory or ownership |
| Kill switch | An emergency control that halts an agent and revokes its access at once |
| Multi-agent system | Several agents working together in sequential, supervisor or swarm patterns |

---

## Exam Angles

- **Does it need an agent at all?** If the steps are fixed, the best answer is usually a deterministic workflow (least agency). Adding oversight to an unnecessary agent is the distractor.
- **Action space versus autonomy.** Tools and permissions change what an agent can do; instructions and human involvement change how freely it decides. Expect a question that makes you sort changes into the right dial.
- **Deterministic beats prompt-based.** When one option enforces a limit at the tool or system layer and another relies on the system prompt, the system-layer control wins, especially for payments, deletions and outgoing messages.
- **Delegation cannot enlarge access.** An agent's permissions are capped by its authorising human's. Logging, indemnities or time limits do not fix an over-broad grant.
- **Unique agent identity.** Shared service accounts and borrowed employee credentials are the traps; a unique, owned, centrally registered identity is the answer.
- **Accountability stays with the deployer.** Answers that shift responsibility to the agent vendor are wrong; the fix for vendor opacity is disclosures, controls, a narrower scope or an alternative.
- **Rubber-stamp oversight.** Very high approval rates and very short review times point to automation bias. Audit and retrain; don't celebrate or remove the checkpoint. Under GDPR, token review still leaves a decision "solely automated".
- **Fail-safe.** When the approval system is down, deny by default. A time-out that proceeds is fail-open.
- **Classify the OWASP risk by its vector.** Persistent memory corruption is ASI06; direct goal redirection is ASI01; unsafe use of a granted tool is ASI02; propagation with no attacker is ASI08.
- **Law attaches through ordinary rules.** Agents are AI systems under Art. 3(1); the risk tier comes from the use; repurposing a general-purpose system for hiring can make the deployer a provider (Art. 25(1)(c)). Anchor dates: Annex III obligations run from 2 December 2027 as amended (2 August 2026 as originally enacted).

## Key Terms

- [[Agentic AI]] — goal-directed AI that plans and acts over multiple steps through tools
- [[Action Space (Agentic AI)]] — what an agent can do, set by its tools and permissions
- [[Tool Misuse]] — unsafe use of a legitimately granted tool (OWASP ASI02)
- [[Agent Goal Hijack]] — redirecting an agent's objectives, often via indirect prompt injection (OWASP ASI01)
- [[Least-Privilege Agent Permissions]] — minimum, time-bound, non-transferable access capped at the authorising human's rights
- [[Human Approval Checkpoint]] — a point where a human must approve before the agent proceeds
- [[Multi-Agent System]] — cooperating agents; narrower scopes but interaction risks
- [[Agent Kill Switch]] — emergency halt and credential revocation; the operational core of a deactivation policy

## Sources

- https://www.imda.gov.sg/-/media/imda/files/about/emerging-tech-and-research/artificial-intelligence/mgf-for-agentic-ai.pdf
- https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2026/new-model-ai-governance-framework-for-agentic-ai
- https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/
- https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/
- https://cloudsecurityalliance.org/blog/2025/02/06/agentic-ai-threat-modeling-framework-maestro
- https://cloudsecurityalliance.org/artifacts/agentic-ai-red-teaming-guide
- https://www.nist.gov/caisi/ai-agent-standards-initiative
- https://www.nist.gov/news-events/news/2025/01/technical-blog-strengthening-ai-agent-hijacking-evaluations
- https://assets.contentstack.io/v3/assets/bltd4dd5b2d705252bc/blt0d33152fd20bc134/AIGP_Cert%20BOK.pdf
- https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-3
- https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-14
- https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-25
- https://ai-act-service-desk.ec.europa.eu/en/ai-act/article-50
- https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act
- https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32016R0679
- https://ec.europa.eu/newsroom/article29/items/612053
- https://curia.europa.eu/jcms/upload/docs/application/pdf/2023-12/cp230186en.pdf
- https://digital-strategy.ec.europa.eu/en/library/ethics-guidelines-trustworthy-ai
