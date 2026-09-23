#!/usr/bin/env python3
"""Build the vault note "NIST AI RMF Playbook — Structured Reference.md" from NIST's playbook.json.

    python3 build_playbook_note.py [playbook.json] [-o NOTE.md] [--retrieved YYYY-MM-DD]

Data: https://airc.nist.gov/docs/playbook.json, a JSON array with one object per AI RMF
subcategory (fields: type, title, category, description, section_about, section_actions,
section_doc, section_ref, "AI Actors", Topic). NIST releases Playbook updates about twice a
year and says the next one will follow the AI RMF 1.0 revision, so download the file again
and rerun this script when that lands.

Generated from the data: the summary, actor and topic tables, and every subcategory block
(statement verbatim, AI Actors, Topics, the first 4-6 suggested actions, 2-3 documentation
questions). The long About prose and the reference lists are left out on purpose.

Written by hand: the PROSE section below and the category statements quoted from AI RMF 1.0
Tables 1-4. The script warns when the input differs from the file that text was checked
against; review the hand-written parts before publishing a regenerated note.
"""
import argparse
import difflib
import hashlib
import html
import json
import re
import sys
from collections import Counter, defaultdict
from datetime import date
from pathlib import Path

NOTE_NAME = "NIST AI RMF Playbook — Structured Reference.md"
CHECKED_SHA256 = "aecbee3d3c8820816d295b11d10fb61324b17c25c2ff39ee95e2aa5654555bba"  # 2026-09-23 file
CHECKED_ON = "2026-09-23"

# Condensing rules
ACTIONS_MIN, ACTIONS_MAX, ACTIONS_BUDGET = 4, 6, 900   # top-level bullets; chars before stopping at >= MIN
MAX_CHILDREN = 5                                       # sub-bullets shown under one action
PROMPTS_MIN, PROMPTS_MAX, PROMPTS_BUDGET = 2, 3, 420   # documentation questions per subcategory

# ── Framework structure (AI RMF 1.0, NIST AI 100-1) ─────────────────────────────────────
FUNCTIONS = ["GOVERN", "MAP", "MEASURE", "MANAGE"]
FUNCTION_TEXT = {  # paraphrased from AI RMF 1.0 sections 5.1-5.4; the one quote is Fig. 5's caption
    "GOVERN": "Cross-cutting. GOVERN builds the culture, policies, accountability structures and "
              "processes for AI risk management. AI RMF 1.0 calls it \"a cross-cutting function to "
              "inform and be infused throughout the other three functions\". It applies to all "
              "stages of an organization's AI risk management, not to one system, and it keeps "
              "running as knowledge, culture and expectations change.",
    "MAP": "MAP establishes the context to frame risks for a specific AI system: purpose, users, "
           "setting, risk tolerance, categorization, benefits and costs, component and third-party "
           "risks, and impacts. Its outcomes are the basis for MEASURE and MANAGE and should give "
           "enough context for an initial go/no-go decision on whether to design, develop or "
           "deploy the system.",
    "MEASURE": "MEASURE uses quantitative, qualitative or mixed methods to analyze, assess, "
               "benchmark and monitor the risks identified in MAP. Systems are tested before "
               "deployment and regularly in operation, trustworthiness characteristics are "
               "evaluated, and the results feed MANAGE.",
    "MANAGE": "MANAGE allocates risk resources to mapped and measured risks, as GOVERN defines. "
              "It covers the go/no-go determination, risk treatment and response, third-party "
              "risks, post-deployment monitoring, and plans to respond to, recover from and "
              "communicate about incidents.",
}
CATEGORY_LABEL = {  # short labels (this note's own words)
    "GOVERN 1": "Policies, processes, procedures and practices",
    "GOVERN 2": "Accountability structures and training",
    "GOVERN 3": "Workforce diversity, equity, inclusion and accessibility",
    "GOVERN 4": "Risk-aware culture and communication",
    "GOVERN 5": "Engagement with relevant AI actors",
    "GOVERN 6": "Third-party software, data and supply chain",
    "MAP 1": "Context established and understood",
    "MAP 2": "System categorization",
    "MAP 3": "Capabilities, usage, benefits and costs",
    "MAP 4": "Risks and benefits of all components, incl. third-party",
    "MAP 5": "Impacts characterized",
    "MEASURE 1": "Methods and metrics",
    "MEASURE 2": "Evaluation for trustworthy characteristics",
    "MEASURE 3": "Tracking risks over time",
    "MEASURE 4": "Feedback on measurement efficacy",
    "MANAGE 1": "Prioritize and respond to assessed risks",
    "MANAGE 2": "Maximize benefits, minimize negative impacts",
    "MANAGE 3": "Third-party risks and benefits",
    "MANAGE 4": "Risk treatment, monitoring and communication plans",
}
CATEGORY_STATEMENT = {  # verbatim, AI RMF 1.0 Tables 1-4
    "GOVERN 1": "Policies, processes, procedures, and practices across the organization related to the mapping, measuring, and managing of AI risks are in place, transparent, and implemented effectively.",
    "GOVERN 2": "Accountability structures are in place so that the appropriate teams and individuals are empowered, responsible, and trained for mapping, measuring, and managing AI risks.",
    "GOVERN 3": "Workforce diversity, equity, inclusion, and accessibility processes are prioritized in the mapping, measuring, and managing of AI risks throughout the lifecycle.",
    "GOVERN 4": "Organizational teams are committed to a culture that considers and communicates AI risk.",
    "GOVERN 5": "Processes are in place for robust engagement with relevant AI actors.",
    "GOVERN 6": "Policies and procedures are in place to address AI risks and benefits arising from third-party software and data and other supply chain issues.",
    "MAP 1": "Context is established and understood.",
    "MAP 2": "Categorization of the AI system is performed.",
    "MAP 3": "AI capabilities, targeted usage, goals, and expected benefits and costs compared with appropriate benchmarks are understood.",
    "MAP 4": "Risks and benefits are mapped for all components of the AI system including third-party software and data.",
    "MAP 5": "Impacts to individuals, groups, communities, organizations, and society are characterized.",
    "MEASURE 1": "Appropriate methods and metrics are identified and applied.",
    "MEASURE 2": "AI systems are evaluated for trustworthy characteristics.",
    "MEASURE 3": "Mechanisms for tracking identified AI risks over time are in place.",
    "MEASURE 4": "Feedback about efficacy of measurement is gathered and assessed.",
    "MANAGE 1": "AI risks based on assessments and other analytical output from the MAP and MEASURE functions are prioritized, responded to, and managed.",
    "MANAGE 2": "Strategies to maximize AI benefits and minimize negative impacts are planned, prepared, implemented, documented, and informed by input from relevant AI actors.",
    "MANAGE 3": "AI risks and benefits from third-party entities are managed.",
    "MANAGE 4": "Risk treatments, including response and recovery, and communication plans for the identified and measured AI risks are documented and monitored regularly.",
}
RMF_WORDING = {  # verbatim AI RMF 1.0 text, shown only while the Playbook's wording still differs in substance
    "GOVERN 1.2": "The characteristics of trustworthy AI are integrated into organizational policies, processes, procedures, and practices.",
    "GOVERN 1.3": "Processes, procedures, and practices are in place to determine the needed level of risk management activities based on the organization’s risk tolerance.",
    "GOVERN 5.2": "Mechanisms are established to enable the team that developed or deployed AI systems to regularly incorporate adjudicated feedback from relevant AI actors into system design and implementation.",
    "MANAGE 1.2": "Treatment of documented AI risks is prioritized based on impact, likelihood, and available resources or methods.",
    "MEASURE 1.2": "Appropriateness of AI metrics and effectiveness of existing controls are regularly assessed and updated, including reports of errors and potential impacts on affected communities.",
    "MEASURE 2.6": "The AI system is evaluated regularly for safety risks – as identified in the MAP function. The AI system to be deployed is demonstrated to be safe, its residual negative risk does not exceed the risk tolerance, and it can fail safely, particularly if made to operate beyond its knowledge limits. Safety metrics reflect system reliability and robustness, real-time monitoring, and response times for AI system failures.",
}
ACTOR_ROLE = {  # AI RMF 1.0 Appendix A, paraphrased; keys are the Playbook's tag labels
    "AI Design": "Set the concept, objectives, assumptions and requirements; plan and collect data",
    "AI Development": "Build, select, calibrate, train and test models",
    "AI Deployment": "Put the system into use: piloting, legacy compatibility, regulatory compliance, organizational change, user experience",
    "Operation and Monitoring": "Operate the system and regularly assess its outputs and impacts",
    "TEVV": "Test, evaluate, verify and validate across the lifecycle; kept apart from model builders as a best practice",
    "Human Factors": "Human-centred design, end-user involvement, context of use, UX evaluation",
    "Domain Experts": "Sector or application expertise that guides design and helps interpret outputs",
    "AI Impact Assessment": "Assess accountability, harmful bias, impacts, product safety, liability and security",
    "Procurement": "Acquire AI models, products or services from third parties",
    "Governance and Oversight": "Management, fiduciary and legal authority: organizational management, senior leadership, the board",
    "Third-party entities": "External providers, developers, vendors and evaluators of data, models or systems",
    "End-Users": "Individuals or groups using the system for specific purposes",
    "Affected Individuals and Communities": "Anyone directly or indirectly affected, whether or not they interact with the system",
    "Other AI Actors": "Bodies that supply norms or guidance: trade associations, standards bodies, advocacy and civil society groups, researchers",
    "General Public": "People most likely to experience the impacts directly; they may motivate other actors' actions",
}
KNOWN_TOPIC_AS_ACTOR = {"Fairness and Bias"}  # 2026-09-23 data quirk (GOVERN 4.3); moved to Topics without a warning
SEVEN = ["Validity and Reliability", "Safety", "Secure and Resilient", "Accountability and Transparency",
         "Explainability and Interpretability", "Privacy", "Fairness and Bias"]

# ── PROSE (hand-written; re-check whenever the source file changes) ─────────────────────
def prose_overview(n_cat, n_sub):
    return f"""## 1. Overview

The **NIST AI RMF Playbook** is NIST's online companion to **NIST AI 100-1, the AI Risk Management Framework (AI RMF 1.0, January 2023)**. The Framework's Core states *outcomes*: four functions (GOVERN, MAP, MEASURE, MANAGE) divided into {n_cat} categories and {n_sub} subcategories (Tables 1–4 of AI RMF 1.0). The Playbook supplies the *how*. NIST says it "provides suggested actions for achieving the outcomes laid out in the AI Risk Management Framework (AI RMF) Core", with suggestions aligned to each subcategory. The RMF points readers there too: for each function it says the related practices "are described in the NIST AI RMF Playbook". Both belong to NIST's Trustworthy and Responsible AI Resource Center (AIRC, airc.nist.gov).

| | AI RMF 1.0 (NIST AI 100-1) | AI RMF Playbook |
|---|---|---|
| What it is | The framework: Part 1 foundational information, Part 2 the Core and Profiles | Online companion, one entry per Core subcategory |
| What it gives you | Outcome statements (functions, categories, subcategories), trustworthiness characteristics, profiles | Suggested actions, transparency and documentation prompts, AI transparency resources, references, plus AI Actor and Topic tags |
| Status | Voluntary, rights-preserving, non-sector-specific, use-case agnostic | Voluntary; "neither a checklist nor set of steps to be followed in its entirety" |
| Updates | Living document; formal community review expected no later than 2028; being revised as of 2026 | Updates "approximately twice per year"; next update after the AI RMF is revised |
| Format | Versioned publication (PDF) | Web pages by function, plus PDF, CSV, Excel and JSON downloads |

**Status points a question writer can use**

- **Voluntary.** "Playbook suggestions are voluntary." NIST says organizations can borrow "as many – or as few – suggestions as apply to their industry use case or interests". The same applies to the Framework: "The AI RMF and the Playbook are intended for voluntary use."
- **Not a checklist or a sequence.** The Playbook FAQ says users are not expected to implement every suggestion or to work through them as an ordered series of steps. AI RMF 1.0 says the same of the Core: its actions "do not constitute a checklist, nor are they necessarily an ordered set of steps".
- **No certification.** Neither the RMF nor the Playbook sets up a certification or conformity-assessment scheme. (The "certifications" in MAP 3.4 are proficiency standards for system operators, not certification of the organization.)
- **Living resource.** Comments go to AIframework@nist.gov. AI RMF 1.0 says they are "reviewed and integrated on a semi-annual basis", and the Playbook page says updates are released about twice a year.
- **As of September 2026.** NIST says "The AI RMF 1.0 is being revised as part of the White House AI Action Plan" and "The Playbook will be updated after the AI RMF is revised." NIST's March 2026 AI update lists the Action Plan task to "revise the NIST AI Risk Management Framework to eliminate references to misinformation, Diversity, Equity, and Inclusion, and climate change". In the current Playbook, the entries closest to those themes are GOVERN 3 (workforce diversity, equity, inclusion and accessibility), MAP 1.2 (demographically diverse, interdisciplinary teams) and MEASURE 2.12 (environmental impact); no entry mentions misinformation. For the exam (BOK v2.1), learn AI RMF 1.0 and the Playbook as published.

For the Framework itself (trustworthiness characteristics, lifecycle, profiles, the full tables) see [[NIST AI RMF — Structured Reference]]. This note adds what the Playbook says to *do* for each subcategory.
"""

EXAM_ANGLES = [
    "**Framework vs Playbook.** AI RMF 1.0 defines *what*: the outcome for each category and subcategory. The Playbook gives *how*: suggested actions, documentation prompts and references for each subcategory. \"Where do I find concrete steps for MEASURE 2.11?\" is the Playbook. \"What outcome does MEASURE 2.11 require?\" is the RMF Core.",
    "**Status traps.** Voluntary, not a checklist, not an ordered sequence, no certification. Options saying an organization must implement every suggested action, must work through subcategories in order, or can be certified against the Playbook are wrong.",
    "**GOVERN is cross-cutting.** It informs and is infused throughout the other three functions and applies to all stages of the organization's risk management. MAP, MEASURE and MANAGE apply to specific systems and lifecycle stages. Once governance is in place, most users start with MAP and continue to MEASURE or MANAGE, iterating as needed.",
    "**Placing a scenario.** Organization-wide policy, roles, training, culture and third-party policy point to GOVERN. Purpose, users, setting, risk tolerance, categorization, benefits and costs, component risks and impacts point to MAP. Metrics, TEVV and evaluation of trustworthiness characteristics point to MEASURE. Go/no-go decisions, risk treatment, third-party monitoring, post-deployment monitoring and incident communication point to MANAGE.",
    "**MEASURE 2 mirrors the trustworthiness characteristics.** 2.5 valid and reliable, 2.6 safe, 2.7 secure and resilient, 2.8 transparency and accountability, 2.9 explainable and interpretable, 2.10 privacy, 2.11 fairness and bias. 2.12 adds environmental impact and 2.13 checks TEVV effectiveness. With 13 subcategories it is the largest category.",
    "**Look-alike pairs.** MEASURE 2.4 (production behaviour monitored, e.g. drift alerts against pre-deployment tests) vs MANAGE 4.1 (the post-deployment monitoring plan: user input, appeal and override, decommissioning, incident response, recovery, change management). GOVERN 6.1 (third-party policies) vs MAP 4.1 (mapping component, legal and IP risks) vs MANAGE 3.1–3.2 (monitoring third-party resources and pre-trained models). GOVERN 1.7 (decommissioning policies) vs MANAGE 2.4 (mechanisms to supersede, disengage or deactivate).",
    "**AI actors.** The Playbook tags each subcategory with the Appendix A actor groups most involved. TEVV is tagged on every MEASURE subcategory. AI Deployment and Operation and Monitoring are tagged on every MANAGE subcategory. Governance and Oversight dominates GOVERN. Affected individuals and communities count as AI actors even if they never use the system.",
    "**Risk response vocabulary.** MANAGE 1.3: responses to high-priority risks can include mitigating, transferring, avoiding or accepting. MANAGE 1.4: residual risk is \"the sum of all unmitigated risks\", documented for downstream acquirers and end users.",
    "**Wording and currency.** Where the Playbook words a statement differently from the RMF tables (the RMF text is shown under those statements in sections 6–9), use the RMF text. AI RMF 1.0 is under revision as of 2026 and the Playbook will follow; answer from the versions currently published.",
]
KEY_TERMS = ["Suggested Actions (AI RMF Playbook)", "Transparency and Documentation Prompts (AI RMF Playbook)",
             "AI Actors (NIST AI RMF)", "AI RMF Subcategory", "NIST AI RMF Playbook"]
SOURCES = [
    "https://airc.nist.gov/airmf-resources/playbook/",
    "https://airc.nist.gov/airmf-resources/playbook/faq/",
    "https://airc.nist.gov/docs/playbook.json",
    "https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook",
    "https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf",
    "https://www.nist.gov/itl/ai-risk-management-framework",
    "https://www.nist.gov/itl/ai-risk-management-framework/ai-risk-management-framework-faqs",
    "https://www.nist.gov/system/files/documents/2026/03/27/03_AI%20Update-March.pdf",
]

# ── Cleaning and parsing ────────────────────────────────────────────────────────────────
BULLET = re.compile(r"^(?:[-•●◦▪]\s*|[*+]\s+|\d+[.)]\s+)(?=\S)(.*)$")


def clean(s):
    """Remove HTML/markdown artifacts and stray spacing from one line; keep NIST's wording."""
    s = html.unescape(s)
    s = re.sub(r"(?i)<br\s*/?>", " ", s)
    s = re.sub(r"</?[a-zA-Z][^>]*>", "", s)            # any other HTML tag
    s = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", s)     # [text](url) -> text
    s = re.sub(r"^#{1,6}\s*", "", s.strip())           # stray heading marks
    s = re.sub(r"\*\*|__|`", "", s)                    # bold / code markers
    s = re.sub(r"[​-‍﻿]", "", s).replace(" ", " ")
    s = re.sub(r"\s+", " ", s).strip()
    s = re.sub(r"\s+([.,;:?!)])", r"\1", s)            # "actors ." -> "actors."
    s = re.sub(r"\(\s+", "(", s)
    if s.endswith("”") and s.count("“") < s.count("”"):   # unbalanced trailing quote
        s = s[:-1].rstrip()
    if s.endswith('"') and s.count('"') % 2:
        s = s[:-1].rstrip()
    return s


def parse_list(text):
    """Split a Playbook markdown block into (lead_in, items); each item is [text, [children]]."""
    text = html.unescape(text or "").replace("\r\n", "\n").replace("\r", "\n").replace("\t", "    ")
    text = re.sub(r"(?i)<br\s*/?>", "\n", text)
    lead, items, top = [], [], None
    for raw in text.split("\n"):
        if not raw.strip():
            continue
        indent = len(raw) - len(raw.lstrip(" "))
        m = BULLET.match(raw.strip())
        if m:
            body = clean(m.group(1))
            if not body:
                continue
            if top is None or indent < top:
                top = indent
            if indent <= top + 1 or not items:
                items.append([body, []])
            else:
                items[-1][1].append(body)
        elif items:                                   # continuation of the previous bullet
            last = items[-1]
            if last[1] and indent > top + 1:
                last[1][-1] = clean(last[1][-1] + " " + raw)
            else:
                last[0] = clean(last[0] + " " + raw)
        else:
            lead.append(clean(raw))
    return " ".join(x for x in lead if x), items


def doc_sections(text):
    """Split section_doc into {lowercased heading: body}; '' holds any text before the first heading."""
    parts = re.split(r"(?m)^[ \t]*#{1,6}[ \t]*(.*?)[ \t]*$", text or "")
    out = {"": parts[0]}
    for i in range(1, len(parts) - 1, 2):
        out[parts[i].strip().lower()] = parts[i + 1]
    return out


def norm(s):
    s = s.lower().replace("’", "'").replace("–", "-").replace("—", "-")
    return re.sub(r"\s+", " ", s).strip().rstrip(".")


def similar(a, b):
    return difflib.SequenceMatcher(None, a.lower(), b.lower()).ratio() >= 0.8


def pick_actions(items):
    """First 4-6 top-level suggested actions (question-form bullets are misfiled prompts: skipped)."""
    usable = [it for it in items if not (it[0].endswith("?") and not it[1])]
    shown, size = [], 0
    for it in usable:
        if len(shown) >= ACTIONS_MAX or (len(shown) >= ACTIONS_MIN and size >= ACTIONS_BUDGET):
            break
        shown.append(it)
        size += len(it[0]) + sum(len(c) for c in it[1][:MAX_CHILDREN])
    return shown, len(usable), len(items) - len(usable)


def pick_prompts(items):
    """First 2-3 distinct documentation questions, trimmed of commentary after the last '?'."""
    flat = []
    for text, kids in items:
        flat += [text] + kids
    questions = [t[: t.rindex("?") + 1] for t in flat if "?" in t]
    statements = [t for t in flat if "?" not in t]
    picked = []
    for pool in (questions, statements):              # statements only if too few questions
        for t in pool:
            if len(picked) >= PROMPTS_MAX or (len(picked) >= PROMPTS_MIN and sum(map(len, picked)) + len(t) > PROMPTS_BUDGET):
                break
            if not any(similar(t, p) for p in picked):
                picked.append(t)
        if len(picked) >= PROMPTS_MIN:
            break
    return picked


def md(s):
    """Escape the few characters that would change meaning in Obsidian/marked."""
    s = s.replace("<", "&lt;").replace("*", r"\*")
    return re.sub(r"#(?=\w)", r"\#", s)


def key(title):
    fn, num = title.split()
    cat, sub = num.split(".")
    return FUNCTIONS.index(fn), int(cat), int(sub)


def ranges(titles, all_by_fn):
    """Compact list: 'MEASURE 1.1–1.2, 2.3–2.13 · MANAGE all'."""
    by_fn = defaultdict(list)
    for t in sorted(titles, key=key):
        by_fn[t.split()[0]].append(tuple(int(x) for x in t.split()[1].split(".")))
    out = []
    for fn in FUNCTIONS:
        nums = by_fn.get(fn)
        if not nums:
            continue
        if len(nums) == all_by_fn[fn]:
            out.append(f"all {fn}")
            continue
        runs, start, prev = [], nums[0], nums[0]
        for n in nums[1:] + [None]:
            if n and n[0] == prev[0] and n[1] == prev[1] + 1:
                prev = n
                continue
            runs.append(f"{start[0]}.{start[1]}" + (f"–{prev[0]}.{prev[1]}" if prev != start else ""))
            start = prev = n
        out.append(f"{fn} " + ", ".join(runs))
    return " · ".join(out)


# ── Build ───────────────────────────────────────────────────────────────────────────────
def build(entries):
    warn, notes = [], []
    known = {norm(a).replace("-", " "): a for a in ACTOR_ROLE}
    by_title, empty_actor, dup_actor, not_actor, q_actions = {}, [], [], [], []
    for e in entries:
        t = clean(e.get("title", ""))
        if not re.fullmatch(r"(GOVERN|MAP|MEASURE|MANAGE) \d+\.\d+", t):
            warn.append(f"skipped entry with unexpected title {t!r}")
            continue
        if (e.get("type") or "").upper() != t.split()[0]:
            warn.append(f"{t}: type {e.get('type')!r} does not match title")
        raw_actors = [clean(a) for a in e.get("AI Actors") or []]
        actors, topics = [], list(dict.fromkeys(clean(x) for x in e.get("Topic") or [] if clean(x)))
        for a in raw_actors:
            label = known.get(norm(a).replace("-", " "))
            if label is None:
                not_actor.append(f"'{a}' ({t})")
                if a not in topics:
                    topics.append(a)
                if a not in KNOWN_TOPIC_AS_ACTOR:
                    warn.append(f"{t}: actor tag {a!r} is not in ACTOR_ROLE; shown as a topic. "
                                "If NIST has added a new actor group, add it to ACTOR_ROLE.")
            elif label in actors:
                dup_actor.append(f"{t} ({label})")
            else:
                actors.append(label)
        if not raw_actors:
            empty_actor.append(t)
        lead, items = parse_list(e.get("section_actions"))
        shown, total, skipped = pick_actions(items)
        if skipped:
            q_actions.append(t)
        secs = doc_sections(e.get("section_doc"))
        qbody = next((v for k, v in secs.items() if "document" in k), secs[""])
        qlead, qitems = parse_list(qbody)
        if qlead:
            qitems = [[qlead, []]] + qitems
        res_body = next((v for k, v in secs.items() if "resource" in k), "")
        by_title[t] = dict(title=t, fn=t.split()[0], cat=t.rsplit(".", 1)[0],
                           statement=clean(e.get("description", "")), actors=actors, topics=topics,
                           lead=lead, shown=shown, total=total, prompts=pick_prompts(qitems),
                           resources=parse_resources(res_body))
        if not shown:
            warn.append(f"{t}: no suggested actions parsed")
        if len(by_title[t]["prompts"]) < PROMPTS_MIN:
            warn.append(f"{t}: fewer than {PROMPTS_MIN} documentation prompts")
    rows = sorted(by_title.values(), key=lambda r: key(r["title"]))
    cats = list(dict.fromkeys(r["cat"] for r in rows))
    for c in cats:
        if c not in CATEGORY_STATEMENT:
            warn.append(f"{c}: no category statement on file (add it from the RMF)")
    fn_count = Counter(r["fn"] for r in rows)
    if empty_actor:
        notes.append("No AI Actor tags in playbook.json for: " + ", ".join(empty_actor) + ".")
    if not_actor:
        notes.append("Tagged as an actor but not an AI RMF actor group, so shown under Topics instead: " + "; ".join(not_actor) + ".")
    if dup_actor:
        notes.append("Duplicate actor tag removed: " + "; ".join(dup_actor) + ".")
    if q_actions:
        notes.append("A suggested action phrased as a question (really a documentation prompt) was skipped in: " + ", ".join(q_actions) + ".")
    differs = [t for t in RMF_WORDING if t in by_title and norm(RMF_WORDING[t]) != norm(by_title[t]["statement"])]
    if differs:
        notes.append("Statement wording differs in substance from AI RMF 1.0, so the RMF text is shown underneath: " + ", ".join(differs) + ".")
    return rows, cats, fn_count, notes, warn, set(differs)


def parse_resources(body):
    """[(url_key, label)] for one entry's AI Transparency Resources list."""
    out = []
    for line in (body or "").split("\n"):
        urls = re.findall(r"\]\((https?://[^)\s]+)\)", line)
        label = clean(re.sub(r"\[(?:URL|LINK|PDF)\]\([^)]*\)", "", line, flags=re.I))
        label = re.sub(r"^[-*•]\s*", "", label).strip(" .,:;-")
        if urls or label:
            out.append(((urls[0].lower().rstrip("/") if urls else label.lower()), label))
    return out


def render(rows, cats, fn_count, notes, differs, retrieved, sha, created):
    n_sub, n_cat = len(rows), len(cats)
    L = ["---", "tags:", " - aigp/reference", " - aigp/standards", " - aigp/nist", f"created: {created}"]
    if retrieved != created:
        L.append(f"updated: {retrieved}")
    L += [f'source: "NIST AI RMF Playbook (airc.nist.gov), public domain; retrieved {retrieved}"',
         "related:", ' - "[[AIGP Body of Knowledge — Exam Blueprint]]"', ' - "[[NIST AI RMF — Structured Reference]]"',
         ' - "[[AI Standards and Frameworks]]"', ' - "[[NIST AI 600-1 — Structured Reference]]"', "---", "",
         "# NIST AI RMF Playbook — Structured Reference", "",
         "> **Status:** Voluntary companion to AI RMF 1.0 (NIST AI 100-1); no certification scheme. "
         "**Maintained by:** NIST, in the Trustworthy and Responsible AI Resource Center (airc.nist.gov). "
         "**Updates:** about twice a year; NIST says the next update follows the AI RMF 1.0 revision under way in 2026. "
         f"**Data:** playbook.json retrieved {retrieved}, {n_sub} subcategory entries. **BOK:** v2.1 II.D.", ""]
    L += prose_overview(n_cat, n_sub).split("\n")

    # 2. Anatomy
    res = Counter()
    labels = {}
    for r in rows:
        for k, lab in dict(r["resources"]).items():
            res[k] += 1
            if lab and (k not in labels or len(lab) < len(labels[k])):
                labels[k] = lab
    top_res = "; ".join(f"{labels.get(k, k)} ({c})" for k, c in res.most_common(4))
    L += ["## 2. Anatomy of a Playbook entry", "",
          "Each subcategory has one entry. The first four parts below are the section headings on the AIRC web "
          "pages; AI Actors and Topic are tags carried in the JSON export.", "",
          "| Part | JSON field | What it holds | In this note |", "|---|---|---|---|",
          "| About | `section_about` | Background on the outcome and why it matters | Left out (long prose) |",
          "| Suggested Actions | `section_actions` | Voluntary steps toward the outcome | First 4–6 top-level bullets |",
          "| Transparency and Documentation: \"Organizations can document the following\" | `section_doc` | Questions to answer when documenting the outcome | 2–3 per subcategory |",
          "| Transparency and Documentation: \"AI Transparency Resources\" | `section_doc` | Documentation frameworks and checklists | Summarized below |",
          "| References | `section_ref` | Research, guidance and regulatory sources | Left out |",
          "| AI Actors (tag) | `AI Actors` | Appendix A actor groups most involved | Kept |",
          "| Topic (tag) | `Topic` | Subject tags such as Third-party or AI Incidents | Kept |", "",
          f"Most often listed as AI Transparency Resources (number of entries): {top_res}.", "",
          "**How this note was built.**", "",
          f"- Generated by `build_playbook_note.py` from playbook.json ({n_sub} entries; SHA-256 `{sha[:12]}…`, retrieved {retrieved}). Rerun it when NIST updates the Playbook.",
          "- Subcategory statements are verbatim from the Playbook. Category statements are verbatim from AI RMF 1.0 Tables 1–4.",
          f"- Suggested actions: the first {ACTIONS_MIN}–{ACTIONS_MAX} top-level bullets in Playbook order, with at most {MAX_CHILDREN} sub-bullets each. HTML and markdown artifacts are removed; NIST's wording, including its occasional typos, is otherwise unchanged. The count shows how many the Playbook lists.",
          f"- Documentation prompts: the first {PROMPTS_MIN}–{PROMPTS_MAX} distinct questions in Playbook order, trimmed of commentary after the last question mark.",
          "- AI Actors and Topics are the Playbook's tags. \"all seven\" stands for the seven trustworthiness-characteristic topic tags.", ""]
    if notes:
        L += ["**Data notes (generated).**", ""] + [f"- {n}" for n in notes] + [""]

    # 3. Summary tables
    L += ["## 3. Functions, categories and subcategories", "",
          "| Function | Categories | Subcategories | Most-tagged AI Actors |", "|---|---|---|---|"]
    actor_fn = defaultdict(Counter)
    for r in rows:
        for a in r["actors"]:
            actor_fn[a][r["fn"]] += 1
    for fn in FUNCTIONS:
        top2 = sorted(((c[fn], a) for a, c in actor_fn.items() if c[fn]), key=lambda x: (-x[0], x[1]))[:2]
        L.append(f"| {fn} | {sum(1 for c in cats if c.startswith(fn + ' '))} | {fn_count[fn]} | "
                 + ", ".join(f"{a} ({n})" for n, a in top2) + " |")
    L += [f"| **Total** | **{n_cat}** | **{n_sub}** | |", "",
          "| Function | Category | Focus | Subcategories | Count |", "|---|---|---|---|---|"]
    for c in cats:
        subs = [r["title"] for r in rows if r["cat"] == c]
        span = subs[0] if len(subs) == 1 else f"{subs[0]}–{subs[-1].split()[1]}"
        L.append(f"| {c.split()[0]} | {c} | {CATEGORY_LABEL.get(c, '')} | {span} | {len(subs)} |")
    L.append("")

    # 4. AI Actors
    L += ["## 4. AI Actors in the Playbook", "",
          "AI RMF 1.0 adopts the OECD definition of AI actors: \"those who play an active role in the AI system lifecycle, including organizations and individuals that deploy or operate AI\". Appendix A describes their tasks. The Playbook tags each subcategory with the groups most involved; counts below are subcategories tagged.", "",
          "| AI Actor (Playbook tag) | Role (AI RMF Appendix A, paraphrased) | GOVERN | MAP | MEASURE | MANAGE | Total |",
          "|---|---|---|---|---|---|---|"]
    for a, c in sorted(actor_fn.items(), key=lambda kv: (-sum(kv[1].values()), kv[0])):
        L.append(f"| {a} | {ACTOR_ROLE[a]} | " + " | ".join(str(c[fn] or "–") for fn in FUNCTIONS) + f" | {sum(c.values())} |")
    L.append("")

    # 5. Topic finder
    topic_titles = defaultdict(list)
    for r in rows:
        for tp in r["topics"]:
            topic_titles[tp].append(r["title"])
    L += ["## 5. Topic finder", "", "Where each Playbook topic tag appears. Use it to answer \"which subcategory covers X?\"", "",
          "| Topic tag | Entries | Subcategories |", "|---|---|---|"]
    for tp, ts in sorted(topic_titles.items(), key=lambda kv: (-len(kv[1]), kv[0])):
        L.append(f"| {tp} | {len(ts)} | {ranges(ts, fn_count)} |")
    L.append("")

    # 6-9. Functions
    for i, fn in enumerate(FUNCTIONS, start=6):
        fn_cats = [c for c in cats if c.startswith(fn + " ")]
        L += [f"## {i}. {fn} ({len(fn_cats)} categories, {fn_count[fn]} subcategories)", "", FUNCTION_TEXT[fn], ""]
        for c in fn_cats:
            L += [f"### {c} — {CATEGORY_LABEL.get(c, '')}".rstrip(" —"), ""]
            if c in CATEGORY_STATEMENT:
                L += [f"*AI RMF 1.0 category statement:* {CATEGORY_STATEMENT[c]}", ""]
            for r in (r for r in rows if r["cat"] == c):
                L += render_entry(r, r["title"] in differs)
    L += ["## Exam Angles", ""] + [f"- {x}" for x in EXAM_ANGLES] + [""]
    L += ["## Key Terms", ""] + [f"- [[{t}]]" for t in KEY_TERMS] + [""]
    L += ["## Sources", ""] + [f"- {u}" for u in SOURCES] + [""]
    return "\n".join(L)


def render_topics(topics):
    if all(t in topics for t in SEVEN):
        rest = [t for t in topics if t not in SEVEN]
        if "Trustworthy Characteristics" in rest:
            rest[rest.index("Trustworthy Characteristics")] = "Trustworthy Characteristics (all seven)"
        else:
            rest.append("Trustworthy Characteristics (all seven)")
        topics = rest
    return ", ".join(topics) or "none tagged"


def render_entry(r, show_rmf):
    out = [f"#### {r['title']}", "", f"> {md(r['statement'])}"]
    if show_rmf:
        out += [">", f"> *AI RMF 1.0 wording:* {md(RMF_WORDING[r['title']])}"]
    actors = ", ".join(r["actors"]) or "none tagged in playbook.json"
    out += ["", f"*AI Actors:* {actors} · *Topics:* {render_topics(r['topics'])}", ""]
    n = len(r["shown"])
    count = f"{n} of {n}" if n == r["total"] else f"first {n} of {r['total']}"
    out.append(f"**Suggested actions** ({count}):" + (f" *{md(r['lead'])}*" if r["lead"] else ""))
    for text, kids in r["shown"]:
        out.append(f"- {md(text)}")
        out += [f"    - {md(k)}" for k in kids[:MAX_CHILDREN]]
        if len(kids) > MAX_CHILDREN:
            out.append(f"    - *…and {len(kids) - MAX_CHILDREN} more*")
    out += ["", "**Documentation prompts:**"] + [f"- {md(q)}" for q in r["prompts"]] + [""]
    return out


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("json_path", nargs="?", default="playbook.json", help="NIST playbook.json (default: ./playbook.json)")
    ap.add_argument("-o", "--out", default=NOTE_NAME, help=f"output note (default: ./{NOTE_NAME})")
    ap.add_argument("--retrieved", default=date.today().isoformat(), help="date the JSON was downloaded (YYYY-MM-DD)")
    ap.add_argument("--created", default=CHECKED_ON, help=f"note's original creation date (default: {CHECKED_ON})")
    a = ap.parse_args()
    raw = Path(a.json_path).read_bytes()
    sha = hashlib.sha256(raw).hexdigest()
    entries = json.loads(raw)
    if not isinstance(entries, list):
        sys.exit("playbook.json should be a JSON array of subcategory objects")
    rows, cats, fn_count, notes, warn, differs = build(entries)
    text = render(rows, cats, fn_count, notes, differs, a.retrieved, sha, a.created)
    Path(a.out).write_text(text, encoding="utf-8")
    print(f"wrote {a.out}: {len(rows)} subcategories, {len(cats)} categories, "
          f"{len(text.encode('utf-8')) / 1024:.1f} KB, {text.count(chr(10)) + 1} lines")
    print("  per function:", {fn: fn_count[fn] for fn in FUNCTIONS})
    if sha != CHECKED_SHA256:
        warn.insert(0, f"source differs from the {CHECKED_ON} file the hand-written text was checked "
                       "against: review FUNCTION_TEXT, CATEGORY_*, RMF_WORDING and the PROSE section")
    for w in warn:
        print("  WARNING:", w, file=sys.stderr)


if __name__ == "__main__":
    main()
