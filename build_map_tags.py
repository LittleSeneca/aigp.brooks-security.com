#!/usr/bin/env python3
"""Generate map-data.js: mind map node tree (mirrors the Obsidian Map/ vault)
plus keyword-based tags pairing every quiz question and flashcard to nodes.

Rerun after editing quiz-data.js, flashcard-data.js, or the NODES table:
    python3 build_map_tags.py
"""
import json, re
from pathlib import Path

HERE = Path(__file__).parent

# ── Node tree ──────────────────────────────────────────────────────────────
# (id, label, parent, keywords). Keywords ending in '*' match as stems.
# Structure mirrors Map/: Parts I-III -> chapters -> section topics + refs.
NODES = [
    ("root", "AIGP", None, []),

    ("d1", "Domain I\nFoundations", "root", []),
    ("d2", "Domain II\nLaws, Standards & Frameworks", "root", []),
    ("d3", "Domain III\nAI Development", "root", []),
    ("d4", "Domain IV\nDeployment & Use", "root", []),

    # Ch 1 — AI and AI Governance
    ("ch1", "I.A · AI & the Case for Governance", "d1", ["ai governance"]),
    ("t_ai_types", "Types of AI", "ch1",
     ["narrow ai", "weak ai", "general ai", "agi", "superintelligence",
      "reactive machine*", "limited memory", "theory of mind", "self-aware",
      "turing", "machine learning", "deep learning", "neural network*",
      "supervised learning", "unsupervised", "reinforcement learning",
      "generative ai", "large language model*", "llm", "foundation model*",
      "transformer", "expert system*", "ai agent"]),
    ("t_ai_risks", "Risks & Harms", "ch1",
     ["harm*", "disinformation", "misinformation", "deepfake*",
      "hallucinat*", "job displacement", "surveillance", "societal risk*"]),
    ("t_ai_char", "Why AI Needs Governance", "ch1",
     ["black box", "opacity", "opaque", "autonom*", "unpredictab*", "emergent"]),
    ("t_rai", "Responsible AI Principles", "ch1",
     ["responsible ai", "trustworthy ai", "ethical ai", "ai ethics",
      "human-centric", "explainab*", "interpretab*"]),

    # Ch 2 — Organizational Readiness
    ("ch2", "I.B · Organizational Expectations", "d1", ["organizational readiness"]),
    ("t_roles", "Roles & Stakeholders", "ch2",
     ["chief privacy officer", "chief information security", "ciso",
      "governance committee", "ethics board", "ethics committee",
      "board of directors", "stakeholder engagement", "cross-functional",
      "raci"]),
    ("t_training", "Training & Awareness", "ch2",
     ["training program*", "awareness program*", "ai literacy", "upskill*"]),
    ("t_devdeploy", "Developers, Deployers & Users", "ch2",
     ["developer*", "deployer*"]),

    # Ch 3 — Updating Policies for AI
    ("ch3", "I.C · Lifecycle Policies", "d1", []),
    ("t_oversight", "Oversight & Automated Decisions", "ch3",
     ["human in the loop", "human-in-the-loop", "human on the loop",
      "human-on-the-loop", "human oversight", "automated decision*",
      "automated decision-making"]),
    ("t_policy", "Privacy & Security Policies", "ch3",
     ["acceptable use", "security polic*", "privacy polic*", "data retention"]),
    ("t_thirdparty", "Third-Party Risk", "ch3",
     ["third party", "third-party", "vendor*", "procurement", "supply chain",
      "contractual"]),

    # Ch 4 — Privacy and Data Protection Law
    ("ch4", "II.A · Data Privacy Laws", "d2", ["data protection law*"]),
    ("t_consent", "Notice, Choice & Consent", "ch4",
     ["consent", "notice", "purpose limitation", "opt-out", "opt out", "opt-in"]),
    ("t_minimization", "Minimization & Privacy by Design", "ch4",
     ["data minimization", "data minimisation", "privacy by design",
      "privacy by default", "pseudonymi*", "anonymi*"]),
    ("t_controller", "Controller Obligations", "ch4",
     ["data controller*", "data processor*", "dpia", "data protection impact",
      "lawful basis", "legitimate interest*", "data subject*"]),
    ("t_sensitive", "Sensitive Data", "ch4",
     ["special categor*", "sensitive data", "biometric*", "health data",
      "genetic"]),
    ("ref_gdpr", "GDPR", "ch4",
     ["gdpr", "general data protection", "article 22", "art. 22",
      "right to erasure", "right to be forgotten"]),

    # Ch 5 — Sectoral and Civil Laws
    ("ch5", "II.B · Other Existing Laws", "d2", []),
    ("t_ip", "IP & Copyright", "ch5",
     ["intellectual property", "copyright*", "patent*", "trade secret*",
      "fair use", "infringement"]),
    ("t_nondiscrim", "Non-Discrimination", "ch5",
     ["discriminat*", "disparate impact", "protected class*", "civil rights",
      "equal opportunity", "title vii", "fair lending", "ecoa", "fair housing"]),
    ("t_consumer", "Consumer Protection", "ch5",
     ["consumer protection", "ftc", "unfair or deceptive", "deceptive practice*"]),
    ("t_liability", "Product Liability", "ch5",
     ["product liability", "negligence", "strict liability", "defective", "tort"]),

    # Ch 6 — The EU AI Act
    ("ch6", "II.C · EU AI Act", "d2",
     ["eu ai act", "artificial intelligence act", "ai act"]),
    ("t_risktiers", "Risk Classification", "ch6",
     ["unacceptable risk", "prohibited practice*", "prohibited ai",
      "high-risk", "high risk", "limited risk", "minimal risk",
      "social scoring", "subliminal", "remote biometric", "annex iii"]),
    ("t_highrisk_req", "High-Risk Requirements", "ch6",
     ["conformity assessment*", "ce marking", "technical documentation",
      "notified bod*", "post-market monitoring",
      "fundamental rights impact"]),
    ("t_gpai", "GPAI Obligations", "ch6",
     ["general-purpose ai", "general purpose ai", "gpai", "systemic risk*",
      "flops"]),
    ("t_enforcement", "Enforcement & Penalties", "ch6",
     ["penalt*", "€35", "35 million", "ai office", "market surveillance",
      "annual turnover", "administrative fine*"]),
    ("t_timeline", "Timeline & Scope", "ch6",
     ["entry into force", "extraterritorial", "regulatory sandbox*",
      "transitional period*"]),
    ("ref_gpai_cop", "GPAI Code of Practice", "ch6", ["code of practice"]),

    # Ch 7 — AI Standards and Frameworks
    ("ch7", "II.D · Industry Standards & Tools", "d2", []),
    ("ref_oecd", "OECD AI Principles", "ch7", ["oecd"]),
    ("ref_nist_rmf", "NIST AI RMF", "ch7",
     ["nist ai rmf", "ai rmf", "nist risk management framework",
      "govern function", "map function", "measure function", "manage function",
      "trustworthiness characteristic*", "valid and reliable", "nist"]),
    ("ref_aria", "NIST ARIA", "ch7", ["aria", "red teaming", "field testing"]),
    ("ref_600", "NIST AI 600-1", "ch7", ["600-1", "generative ai profile"]),
    ("ref_42001", "ISO/IEC 42001", "ch7",
     ["42001", "ai management system", "annex sl", "pdca", "plan-do-check-act"]),
    ("ref_22989", "ISO/IEC 22989", "ch7", ["22989"]),
    ("ref_23894", "ISO/IEC 23894", "ch7", ["23894", "31000"]),

    # Ch 8 — AI System Design
    ("ch8", "III.A · Design & Building", "d3", ["system design", "design phase"]),
    ("t_lifecycle", "Lifecycle Documentation", "ch8",
     ["lifecycle", "life cycle", "model card*", "system card*", "datasheet*"]),
    ("t_usecase", "Business Context & Use Cases", "ch8",
     ["use case*", "feasibility", "business case*", "problem definition"]),
    ("t_impact", "Impact Assessments", "ch8",
     ["impact assessment*", "algorithmic impact"]),

    # Ch 9 — Data Governance and Model Training
    ("ch9", "III.B · Training & Testing Data", "d3", []),
    ("t_datagov", "Data Governance", "ch9",
     ["data governance", "data quality", "data catalog*", "metadata",
      "data steward*"]),
    ("t_lineage", "Lineage & Provenance", "ch9", ["lineage", "provenance"]),
    ("t_testing", "Model Testing", "ch9",
     ["cross-validation", "holdout", "test set", "validation set",
      "precision", "recall", "f1 score", "confusion matrix", "benchmark*",
      "a/b test*", "adversarial test*"]),
    ("t_bias", "Bias & Fairness", "ch9",
     ["bias*", "fairness", "demographic parity", "equalized odds",
      "representativeness", "representative data"]),
    ("t_train", "Training Data & Methods", "ch9",
     ["training data", "fine-tun*", "overfit*", "underfit*",
      "feature engineering", "labeling", "labelling", "annotation",
      "ground truth", "synthetic data"]),

    # Ch 10 — Deployment and Monitoring
    ("ch10", "III.C · Release & Monitoring", "d3", []),
    ("t_readiness", "Pre-release Readiness", "ch10",
     ["pre-release", "readiness", "red team*", "red-team*", "pilot",
      "staged rollout", "canary"]),
    ("t_deployment", "Deployment", "ch10",
     ["deployment", "deploy", "rollout", "production environment", "release"]),
    ("t_monitoring", "Continuous Monitoring", "ch10",
     ["monitoring", "monitor", "drift", "model decay",
      "performance degradation", "retrain*", "continuous evaluation"]),

    # IV.A — Evaluate factors for deployment decisions
    ("ch13", "IV.A · Deployment Evaluation", "d4", []),
    ("t_deployfactors", "Use Case & Readiness Factors", "ch13",
     ["business objective*", "workforce readiness", "data availability"]),
    ("t_modeltypes", "Model Type Differences", "ch13",
     ["proprietary model*", "open-source model*", "open source model*",
      "multimodal", "model selection", "model type*"]),
    ("t_deployopts", "Deployment Options", "ch13",
     ["cloud", "on-premises", "on-prem", "edge deployment",
      "retrieval augmented", "fine-tun*"]),

    # IV.B — Key assessment activities
    ("ch11", "IV.B · Assessment Activities", "d4", []),
    ("t_deployimpact", "Model Impact & Legal Review", "ch11",
     ["deployment risk*", "applicable law*"]),
    ("t_vendorterms", "Vendor, Open-Source & Proprietary Terms", "ch11",
     ["open source", "open-source", "licens*", "vendor terms"]),

    # IV.C — Govern deployment and use
    ("ch12", "IV.C · Deployment & Use Governance", "d4", []),
    ("t_riskmgmt", "Risk Management & Forecasting", "ch12",
     ["risk register*", "risk assessment*", "risk tolerance", "risk appetite",
      "residual risk", "likelihood", "mitigat*", "risk treatment"]),
    ("t_audit", "Audits & Assurance", "ch12",
     ["audit*", "assurance", "certification", "attestation"]),
    ("t_incident", "Incident Management", "ch12",
     ["incident*", "breach*", "disclosure*", "corrective action*",
      "root cause"]),
    ("t_records", "Business Records", "ch12",
     ["record keeping", "recordkeeping", "record-keeping", "business record*",
      "records management", "log retention", "logging"]),
    ("t_comms", "External Communications", "ch12",
     ["external communication*", "transparency report*",
      "public communication*"]),
    ("t_retire", "System Retirement", "ch12",
     ["retirement", "retire", "decommission*", "sunset", "end of life",
      "end-of-life"]),
]

DOMAIN_TO_NODE = {"Domain I": "d1", "Domain II": "d2",
                  "Domain III": "d3", "Domain IV": "d4"}

CHILDREN = {}
for nid, _, parent, _ in NODES:
    if parent:
        CHILDREN.setdefault(parent, []).append(nid)


def compile_kws(kws):
    pats = []
    for kw in kws:
        stem = kw.endswith("*")
        kw = kw.rstrip("*")
        pats.append(re.compile(r"\b" + re.escape(kw) + ("" if stem else r"\b"),
                               re.IGNORECASE))
    return pats


PATTERNS = {nid: compile_kws(kws) for nid, _, _, kws in NODES if kws}


def hits(node_id, text):
    return sum(len(p.findall(text)) for p in PATTERNS.get(node_id, []))


def subtree(node_id):
    out = [node_id]
    for c in CHILDREN.get(node_id, []):
        out.extend(subtree(c))
    return out


NODE_DOMAIN = {}
for nid, _, parent, _ in NODES:
    p = nid
    while p and not (len(p) == 2 and p.startswith("d")):
        p = next((pa for n2, _, pa, _ in NODES if n2 == p), None)
    NODE_DOMAIN[nid] = p


def tag_text(text, domain=None, chapter=None):
    """Return sorted node-id tags for a blob of text."""
    tags = set()
    scores = {nid: hits(nid, text) for nid in PATTERNS}
    dnode = DOMAIN_TO_NODE.get(domain)
    for nid, s in scores.items():
        if nid.startswith(("d", "root")):
            continue
        # cross-domain topics need 2+ hits, else generic words ("deploy",
        # "monitoring") spread one answer across half the map
        need = 1 if (dnode is None or NODE_DOMAIN.get(nid) == dnode) else 2
        if s >= need:
            tags.add(nid)
    if chapter:  # authoritative area tag from question metadata
        tags.add(chapter)
    else:
        # ponytail: keyword heuristic for chapter inference; needs >=2 total
        # hits in a chapter's subtree to avoid noise. Hand-tag outliers later
        # by editing map-data.js if a question lands oddly.
        best, best_score = None, 0
        for ch in [n for n, _, p, _ in NODES if n.startswith("ch")]:
            s = sum(scores.get(x, 0) for x in subtree(ch))
            if s > best_score:
                best, best_score = ch, s
        if best and best_score >= 2:
            tags.add(best)
    if domain:
        tags.add(DOMAIN_TO_NODE[domain])
    # a topic tag implies its ancestors; store only explicit tags — the JS
    # rolls scores up the tree, so ancestors are covered automatically.
    return sorted(tags)


CHAPTER_FILES = {
    "ch1": "Foundations/AI and AI Governance.md",
    "ch2": "Foundations/Organizational Readiness.md",
    "ch3": "Foundations/Updating Policies for AI.md",
    "ch4": "Legal and Regulatory/Privacy and Data Protection Law.md",
    "ch5": "Legal and Regulatory/Sectoral and Civil Laws.md",
    "ch6": "Legal and Regulatory/The EU AI Act.md",
    "ch7": "Legal and Regulatory/AI Standards and Frameworks.md",
    "ch8": "AI Lifecycle/AI System Design.md",
    "ch9": "AI Lifecycle/Data Governance and Model Training.md",
    "ch10": "AI Lifecycle/Deployment and Monitoring.md",
    "ch11": "AI Lifecycle/AI Risk Management and Assurance.md",
    "ch12": "AI Lifecycle/Ongoing AI Operations.md",
}


def norm_term(t):
    t = re.sub(r"\([^)]*\)", "", t).lower()
    return re.sub(r"[^a-z0-9]+", " ", t).strip()


def load_key_terms():
    """term (normalized) -> chapter id, from '## Key Terms' vault sections."""
    out = {}
    for ch, rel in CHAPTER_FILES.items():
        src = (HERE / "Map" / rel).read_text()
        m = re.search(r"^## Key Terms\n(.*?)(?=^## |\Z)", src, re.M | re.S)
        if not m:
            continue
        for term in re.findall(r"\[\[([^\]|]+)", m.group(1)):
            out.setdefault(norm_term(term), ch)
    return out


DEPTH = {}
for nid, _, parent, _ in NODES:
    DEPTH[nid] = 0 if parent is None else DEPTH[parent] + 1

# reference vault notes searched (in order) for terms nothing else places
REF_NOTES = [
    ("ref_22989", "ISO 22989 — Key Definitions.md"),
    ("ref_nist_rmf", "NIST AI RMF — Structured Reference.md"),
    ("ref_42001", "ISO 42001 — Structured Reference.md"),
    ("ref_oecd", "OECD AI Principles — Structured Reference.md"),
]

# ponytail: hand placements — always win over the keyword heuristic.
# Extend here when a flashcard orphans or lands on the wrong node.
HAND_PLACED = {
    "Adversarial Example": "t_testing", "Data Acquisition": "t_datagov",
    "Deactivation Policy": "t_retire", "Deterministic Output": "t_ai_types",
    "Echo Chamber": "t_ai_risks", "Integration Testing": "t_testing",
    "Personally Identifiable Information (PII)": "t_sensitive",
    "Reasoning AI": "t_ai_types", "Robotics": "t_ai_types",
    "Security Testing": "t_testing", "Speed and Scale": "t_ai_char",
    "Stakeholder Mapping": "t_roles", "Unit Testing": "t_testing",
    # re-homes of mis-heuristic'd terms
    "Red Teaming": "t_readiness", "Competent Authorities": "t_enforcement",
    "Data Provenance": "t_lineage",
    # vault-sourced cards for previously childless tier-3 topics
    "Model Inversion Attack": "t_policy",
    "Membership Inference Attack": "t_policy",
    "AI Data Retention Policy": "t_policy",
    "Third-Party Risk Management (TPRM)": "t_thirdparty",
    "AI Vendor Due Diligence": "t_thirdparty",
    "Sub-Tier Dependencies": "t_thirdparty",
    "European AI Office": "t_enforcement",
    "National Competent Authorities (EU AI Act)": "t_enforcement",
    "EU AI Act Penalty Tiers": "t_enforcement",
    "Market Surveillance Powers": "t_enforcement",
    "Entry into Force (EU AI Act)": "t_timeline",
    "AI Act Milestone — February 2, 2025": "t_timeline",
    "AI Act Milestone — August 2, 2026": "t_timeline",
    "GPAI Transitional Period": "t_timeline",
    "Transparency Chapter (GPAI CoP)": "ref_gpai_cop",
    "Copyright Chapter (GPAI CoP)": "ref_gpai_cop",
    "Safety & Security Chapter (GPAI CoP)": "ref_gpai_cop",
    "Article 56 (EU AI Act)": "ref_gpai_cop",
    "Generative AI Profile (NIST AI 600-1)": "ref_600",
    "Confabulation": "ref_600",
    "Content Provenance (NIST AI 600-1)": "ref_600",
    "Executive Order 14110": "ref_600",
    "ISO 31000:2018": "ref_23894",
    "AI Risk Sources (ISO 23894 Annex B)": "ref_23894",
    "Production Readiness Evaluation": "t_readiness",
    "Stress Testing (AI)": "t_readiness",
    # no term may hang directly off a chapter — tier 3 is topics only
    "AI Governance Stakeholder": "t_roles",
    "Algorithmic Bias": "t_bias",
    "Bias (Systematic Deviation)": "t_bias",
    "Bias Testing": "t_bias",
    "Human in the Loop": "t_oversight",
    "AI User": "t_devdeploy",
    "Data Protection Impact Assessment (DPIA)": "t_controller",
    "Impact Assessment": "t_impact",
    "Model": "t_ai_types",
    "Risk": "t_riskmgmt",
    "AI System": "t_ai_types",
    "Automation": "t_oversight",
    "Differential Privacy": "t_minimization",
    "Ethics by Design": "t_rai",
    "Inference": "t_ai_types",
    "Privacy": "t_minimization",
    "Prompt Injection": "t_policy",
    "Use Case Assessment": "t_usecase",
    "Federated Learning": "t_minimization",
    "AI Provider": "t_highrisk_req",
    "EU AI Act": "t_timeline",
    "Business Context": "t_usecase",
    "Data Drift": "t_monitoring",
    "Reliability": "ref_nist_rmf",
    "Concept Drift": "t_monitoring",
    "Brittleness": "t_testing",
    "Downstream Harm": "t_ai_risks",
    "Feedback Loop": "t_monitoring",
    "ISO/IEC 42001": "ref_42001",
    "MITRE ATLAS": "t_riskmgmt",
    "NIST AI Risk Management Framework (AI RMF)": "ref_nist_rmf",
    "Robustness": "ref_22989",
    "Secondary Use": "t_consent",
    "Cross-Border Data Transfer": "ref_gdpr",
    "Incident Management": "t_incident",
    "Issue Management": "t_incident",
    "Localization Policy": "t_records",
    # BOK IV.A / IV.B placements
    "Business Objectives": "t_deployfactors",
    "Workforce Readiness": "t_deployfactors",
    "Classic AI": "t_modeltypes",
    "Proprietary vs. Open-Source Models": "t_modeltypes",
    "Small vs. Large Models": "t_modeltypes",
    "Language vs. Multimodal Models": "t_modeltypes",
    "Retrieval Augmented Generation (RAG)": "t_deployopts",
    "Fine-Tuning": "t_deployopts",
    "Cloud, On-Premises & Edge Deployment": "t_deployopts",
    "AI Impact Assessment": "t_deployimpact",
    "Vendor Agreement": "t_vendorterms",
    "Open Source Agreement": "t_vendorterms",
    "Proprietary Model Deployment Obligations": "t_vendorterms",
    "Post-Market Monitoring": "t_highrisk_req",
}


def place_flashcard(term, tags, key_terms):
    """Pick the single parent node for a term's leaf on the map."""
    kt_ch = key_terms.get(norm_term(term))
    # fuzzy: containment either way against key-term entries
    if not kt_ch:
        n = norm_term(term)
        for k, ch in key_terms.items():
            if n and (n in k or k in n):
                kt_ch = ch
                break
    topics = sorted([t for t in tags if not t.startswith("ch")],
                    key=lambda t: -DEPTH[t])
    if kt_ch:
        within = [t for t in topics if t in subtree(kt_ch)]
        return within[0] if within else kt_ch
    if topics:
        return topics[0]
    chapters = [t for t in tags if t.startswith("ch")]
    return chapters[0] if chapters else None


def load_js_array(path, varname):
    src = Path(path).read_text()
    start = src.index("[", src.index(varname))
    depth = 0
    for i, c in enumerate(src[start:], start):
        if c == "[":
            depth += 1
        elif c == "]":
            depth -= 1
            if depth == 0:
                return json.loads(src[start:i + 1])
    raise ValueError("unbalanced brackets in " + str(path))


def main():
    questions = load_js_array(HERE / "quiz-data.js", "ALL_QUESTIONS")
    flashcards = load_js_array(HERE / "flashcard-data.js", "FLASHCARDS")

    q_tags = {}
    for q in questions:
        text = " ".join([q["question"]] +
                        [o["text"] for o in q["options"]] +
                        [q.get("explanation", "")])
        chapter = q.get("area") if re.fullmatch(r"ch\d+", q.get("area", "")) else None
        q_tags[q["id"]] = tag_text(text, domain=q.get("domain"), chapter=chapter)

    fc_tags = {}
    for f in flashcards:
        fc_tags[f["term"]] = tag_text(f["term"] + " " + f["definition"])

    nodes_out = [{"id": n, "label": l, "parent": p} for n, l, p, _ in NODES]

    # tag questions to the key-term leaves they mention, so quiz answers
    # color the outer ring too (not just flashcard ratings)
    def term_patterns(term):
        pats = []
        base = re.sub(r"\s*\([^)]*\)", "", term).strip()
        # skip short single words ("Model", "Risk") — they match everything
        if len(base) >= 8 or len(base.split()) >= 2:
            pats.append(re.compile(r"\b" + re.escape(base) + r"\b", re.I))
        m = re.search(r"\(([^)]+)\)", term)
        if m and re.fullmatch(r"[A-Z]{3,}", m.group(1).strip()):
            pats.append(re.compile(r"\b" + m.group(1).strip() + r"\b"))
        return pats

    q_texts = {q["id"]: " ".join([q["question"]] +
                                 [o["text"] for o in q["options"]] +
                                 [q.get("explanation", "")])
               for q in questions}
    term_pats = {f["term"]: term_patterns(f["term"]) for f in flashcards}

    # outermost layer: one leaf per flashcard key term
    key_terms = load_key_terms()
    ref_texts = [(nid, norm_term((HERE / "Map" / rel).read_text()))
                 for nid, rel in REF_NOTES]
    orphans = 0
    for i, f in enumerate(flashcards):
        parent = (HAND_PLACED.get(f["term"])
                  or place_flashcard(f["term"], fc_tags[f["term"]], key_terms)
                  or next((nid for nid, txt in ref_texts
                           if norm_term(f["term"]) in txt), None))
        if not parent:
            orphans += 1
            print("  ORPHAN (not on map):", f["term"])
            continue
        kt = f"kt{i}"
        nodes_out.append({"id": kt, "label": f["term"], "parent": parent,
                          "term": f["term"]})
        matched = [qid for qid, text in q_texts.items()
                   if any(p.search(text) for p in term_pats[f["term"]])]
        # ponytail: a term matching >40 questions is too generic to mean
        # anything ("AI System" hits a third of the bank) — flashcard-only
        if len(matched) <= 40:
            for qid in matched:
                q_tags[qid].append(kt)
    # ── push-down pass: no question may stop above a term leaf ──────────
    # Invariant: any tagged node with children must have >=1 tagged child,
    # so an ancestor's question set is exactly the union of its children's —
    # completing all leaves then turns the ancestor green by definition.
    STOP = set("which what that this with from their would should could about "
               "following most best when have been they them then than were "
               "will your does into only such also each other more must under "
               "these those between where while during within".split())

    def toks(text):
        return set(re.findall(r"[a-z]{4,}", text.lower())) - STOP

    by_id = {n["id"]: n for n in nodes_out}
    child_ids = {}
    for n in nodes_out:
        if n.get("parent"):
            child_ids.setdefault(n["parent"], []).append(n["id"])
    kw_by_id = {nid: kws for nid, _, _, kws in NODES}
    fc_def = {f["term"]: f["definition"] for f in flashcards}
    node_toks = {}

    def subtree_toks(nid):
        if nid not in node_toks:
            n = by_id[nid]
            t = toks(n["label"]) | toks(" ".join(kw_by_id.get(nid, [])))
            if "term" in n:
                t |= toks(fc_def[n["term"]])
            for c in child_ids.get(nid, []):
                t |= subtree_toks(c)
            node_toks[nid] = t
        return node_toks[nid]

    subtree_toks("root")

    pushed = 0
    for qid, text in q_texts.items():
        tags, qtok = set(q_tags[qid]), toks(text)
        for _ in range(5):  # tree depth bound
            add = set()
            for t in tags:
                ch = child_ids.get(t)
                if ch and not (tags & set(ch)):
                    add.add(max(ch, key=lambda c: len(qtok & node_toks[c])))
            if not add:
                break
            tags |= add
            pushed += len(add)
        q_tags[qid] = sorted(tags)

    out = (
        "// GENERATED by build_map_tags.py — do not edit by hand.\n"
        "// Node tree mirrors the Obsidian Map/ vault; tags pair every\n"
        "// question and flashcard to mind map nodes via keyword matching.\n"
        f"const MM_NODES = {json.dumps(nodes_out, indent=1)};\n"
        f"const QUESTION_TAGS = {json.dumps(q_tags, indent=0)};\n"
    )
    (HERE / "map-data.js").write_text(out)

    # ── report ──
    from collections import Counter
    c = Counter(t for tags in q_tags.values() for t in tags)
    labels = {n: l.replace("\n", " ") for n, l, _, _ in NODES}
    print(f"{len(questions)} questions, {len(flashcards)} flashcards tagged")
    no_ch = sum(1 for t in q_tags.values() if not any(x.startswith("ch") for x in t))
    no_topic = sum(1 for t in q_tags.values()
                   if not any(x.startswith(("t_", "ref_")) for x in t))
    fc_untagged = sum(1 for t in fc_tags.values() if not t)
    print(f"questions w/o chapter: {no_ch}, w/o topic: {no_topic}; "
          f"flashcards untagged: {fc_untagged}")
    print(f"key-term leaves: {len(flashcards) - orphans} placed, "
          f"{orphans} orphaned (not shown on map)")
    violations = no_leaf = 0
    for qid, tags in q_tags.items():
        ts = set(tags)
        if not any(t.startswith("kt") for t in ts):
            no_leaf += 1
        for t in ts:
            ch = child_ids.get(t)
            if ch and not (ts & set(ch)):
                violations += 1
    print(f"push-down: {pushed} tags added; coverage violations: {violations}; "
          f"questions not reaching a term leaf: {no_leaf}")
    with_kids = {n["parent"] for n in nodes_out if n.get("parent")}
    childless = [n for n, _, _, _ in NODES
                 if DEPTH[n] == 3 and n not in with_kids]
    if childless:
        print("WARNING — childless tier-3 nodes:", ", ".join(childless))
    ch_terms = [n["label"] for n in nodes_out
                if n.get("term") and re.match(r"^ch\d+$", n["parent"] or "")]
    if ch_terms:
        print(f"WARNING — {len(ch_terms)} terms parented directly to a "
              f"chapter (add to HAND_PLACED):", "; ".join(ch_terms))
    print("\nquestions per node:")
    for n, _, _, _ in NODES:
        if c.get(n):
            print(f"  {c[n]:4d}  {labels[n]}")


if __name__ == "__main__":
    main()
