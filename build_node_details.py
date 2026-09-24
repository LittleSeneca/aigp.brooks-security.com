#!/usr/bin/env python3
"""Generate node-details.js: a source-faithful text corpus for every mind map
node, extracted verbatim from the Map/ vault notes.

Term (tier-4) leaves are NOT in this file: their detail is the flashcard
definition, already available at runtime via FLASHCARDS.

Rerun after editing the vault notes or the SELECTORS table:
    python3 build_node_details.py
"""
import json, re
from pathlib import Path

HERE = Path(__file__).parent
MAP = HERE / "Map"

P1 = "Foundations"
P2 = "Legal and Regulatory"
P3 = "AI Lifecycle"
CH = {
    1: f"{P1}/AI and AI Governance.md",
    2: f"{P1}/Organizational Readiness.md",
    3: f"{P1}/Updating Policies for AI.md",
    4: f"{P2}/Privacy and Data Protection Law.md",
    5: f"{P2}/Sectoral and Civil Laws.md",
    6: f"{P2}/The EU AI Act.md",
    7: f"{P2}/AI Standards and Frameworks.md",
    8: f"{P3}/AI System Design.md",
    9: f"{P3}/Data Governance and Model Training.md",
    10: f"{P3}/Deployment and Monitoring.md",
    11: f"{P3}/AI Risk Management and Assurance.md",
    12: f"{P3}/Ongoing AI Operations.md",
}
BLUEPRINT = "AIGP Body of Knowledge — Exam Blueprint.md"
RECALL = "Framework Recall Cards — AIGP Study Kit.md"  # CC BY-NC-SA 4.0, third-party

# Each selector: (file, heading_prefix). Prefix "" = whole note body.
# A knowledge area's own entry holds what its topic children don't claim
# (Performance Indicators, unassigned sections, Key Takeaways).
PI, EE = "## Performance Indicators", "## Key Takeaways"
SELECTORS = {
    "root": [("AIGP Study Index.md", ""),
             ("AIGP FSG — Official Study Guide.md", ""),
             (BLUEPRINT, "## Exam Structure"),
             (BLUEPRINT, "## Version 2.1 — What Changed"),
             (BLUEPRINT, "## Key Standards Referenced in the BOK"),
             (RECALL, "## Blueprint calibration"), (RECALL, "## Test-day tactics")],
    "d1": [(f"{P1}/Foundations Index.md", ""), (BLUEPRINT, "## Domain I"),
           (RECALL, "## Governance mechanics")],
    "d2": [(f"{P2}/Legal and Regulatory Index.md", ""), (BLUEPRINT, "## Domain II")],
    "d3": [(f"{P3}/AI Lifecycle Index.md", ""), (BLUEPRINT, "## Domain III"),
           (RECALL, "## Development & data")],
    "d4": [(f"{P3}/AI Lifecycle Index.md", ""), (BLUEPRINT, "## Domain IV"),
           (RECALL, "## Deployment, monitoring & retirement")],

    "ch1": [(CH[1], PI), (CH[1], EE)],
    "t_ai_types": [(CH[1], "## 1.")],
    "t_ai_risks": [(CH[1], "## 2.")],
    "t_ai_char": [(CH[1], "## 3.")],
    "t_rai": [(CH[1], "## 4.")],

    "ch2": [(CH[2], PI), (CH[2], "## 4."), (CH[2], EE)],
    "t_roles": [(CH[2], "## 1."), (CH[2], "## 2.")],
    "t_training": [(CH[2], "## 3.")],
    "t_devdeploy": [(CH[2], "## 5.")],

    "ch3": [(CH[3], PI), (CH[3], EE)],
    "t_oversight": [(CH[3], "## 1.")],
    "t_policy": [(CH[3], "## 2.")],
    "t_thirdparty": [(CH[3], "## 3.")],

    "ch4": [(CH[4], PI), (CH[4], "## 3."), (CH[4], EE)],
    "t_consent": [(CH[4], "## 1.")],
    "t_minimization": [(CH[4], "## 2.")],
    "t_controller": [(CH[4], "## 4.")],
    "t_sensitive": [(CH[4], "## 5.")],
    "ref_gdpr": [("GDPR — AI-Relevant Provisions.md", ""), (RECALL, "## GDPR applied to AI")],

    "ch5": [(CH[5], PI), (CH[5], EE), (RECALL, "## US and sectoral law")],
    "t_ip": [(CH[5], "## 1.")],
    "t_nondiscrim": [(CH[5], "## 2.")],
    "t_consumer": [(CH[5], "## 3.")],
    "t_liability": [(CH[5], "## 4.")],

    "ch6": [(CH[6], PI), (CH[6], "## 5."), (CH[6], EE),
            ("EU AI Act 2024 — Key Provisions.md", ""), (RECALL, "## EU AI Act")],
    "t_risktiers": [(CH[6], "## 1.")],
    "t_highrisk_req": [(CH[6], "## 2.")],
    "t_gpai": [(CH[6], "## 3.")],
    "t_enforcement": [(CH[6], "## 4.")],
    "t_timeline": [(CH[6], "## 6.")],
    "ref_gpai_cop": [("GPAI Code of Practice — Key Provisions.md", "")],
    "t_korea": [("South Korea AI Basic Act — Key Provisions.md", ""),
                (RECALL, "## South Korean AI Basic Act")],
    "t_us_ai": [("US AI Laws — Federal and State.md", "")],

    "ch7": [(CH[7], PI), (CH[7], "## 4."), (CH[7], "## 5."), (CH[7], EE),
            (RECALL, "## ISO/IEC standards")],
    "ref_oecd": [(CH[7], "## 1."),
                 ("OECD AI Principles — Structured Reference.md", ""),
                 (RECALL, "## OECD AI Principles")],
    "ref_nist_rmf": [(CH[7], "## 2."),
                     ("NIST AI RMF — Structured Reference.md", ""),
                     (RECALL, "## NIST AI Risk Management Framework")],
    "ref_playbook": [("NIST AI RMF Playbook — Structured Reference.md", "")],
    "ref_600": [("NIST AI 600-1 — Structured Reference.md", "")],
    "ref_42001": [("ISO 42001 — Structured Reference.md", "")],
    "ref_42005": [("ISO 42005 — AI System Impact Assessment.md", "")],
    "ref_22989": [("ISO 22989 — Key Definitions.md", "")],
    "ref_23894": [("ISO 23894 — AI Risk Management.md", "")],

    "ch8": [(CH[8], PI), (CH[8], "## 4."), (CH[8], "## 5."), (CH[8], EE)],
    "t_lifecycle": [(CH[8], "## 1.")],
    "t_usecase": [(CH[8], "## 2.")],
    "t_impact": [(CH[8], "## 3.")],

    "ch9": [(CH[9], PI), (CH[9], EE)],
    "t_datagov": [(CH[9], "## 1.")],
    "t_lineage": [(CH[9], "## 2.")],
    "t_testing": [(CH[9], "## 3."), (CH[9], "## 4.")],
    "t_bias": [(CH[9], "### 3.7"),
               (CH[5], "#### Sources of Algorithmic Bias"),
               (CH[4], "### Hidden Bias in AI Training Sets"),
               ("NIST AI RMF — Structured Reference.md",
                "### The Three Categories of AI Bias")],
    "t_train": [(CH[9], "### 1.5"),
                (CH[9], "#### Regularization Techniques"),
                (CH[9], "### 4.5"),
                (CH[8], "### 1.3")],

    "ch10": [(CH[10], PI), (CH[10], EE)],
    "t_readiness": [(CH[10], "## 1.")],
    "t_deployment": [(CH[10], "## 2.")],
    "t_monitoring": [(CH[10], "## 3.")],

    "ch11": [(CH[8], "## 6.")],
    "ch13": [(CH[10], "### 1.3")],
    "t_agentic": [("Agentic AI Governance.md", "")],
    "t_riskmgmt": [(CH[11], "## 1.")],
    "t_audit": [(CH[11], "## 2.")],
    "t_incident": [(CH[11], "## 3.")],

    "ch12": [(CH[12], PI), (CH[11], PI), (CH[11], EE), (CH[12], EE)],
    "t_records": [(CH[12], "## 1.")],
    "t_comms": [(CH[12], "## 2.")],
    "t_retire": [(CH[12], "## 3.")],
}


def strip_frontmatter(src):
    if src.startswith("---"):
        end = src.find("\n---", 3)
        if end != -1:
            src = src[end + 4:]
    return src.strip()


def extract(src, prefix):
    """Return the block from the heading starting with `prefix` up to the
    next heading of the same or higher level."""
    lines = src.splitlines()
    start = level = None
    for i, ln in enumerate(lines):
        if start is None:
            if ln.startswith(prefix):
                start, level = i, len(ln) - len(ln.lstrip("#"))
        elif re.match(r"^#{1,%d} " % level, ln):
            return "\n".join(lines[start:i]).strip()
    if start is None:
        raise KeyError(f"heading {prefix!r} not found")
    return "\n".join(lines[start:]).strip()


def main():
    cache = {}

    def note(rel):
        if rel not in cache:
            cache[rel] = strip_frontmatter((MAP / rel).read_text())
        return cache[rel]

    # ── inputs ───────────────────────────────────────────────────────────
    mapjs = (HERE / "map-data.js").read_text()
    nodes = json.loads(re.search(r"const MM_NODES = (\[.*?\]);\n", mapjs,
                                 re.S).group(1))

    fcsrc = (HERE / "flashcard-data.js").read_text()
    flashcards = json.loads(fcsrc[fcsrc.index("["):fcsrc.rindex("]") + 1])
    fc_def = {f["term"]: f["definition"] for f in flashcards}

    enrich = {}
    for p in sorted((HERE / "enrichments").glob("*.json")):
        enrich.update(json.loads(p.read_text()))

    details, missing_enrich = {}, []

    for n in nodes:
        nid = n["id"]
        e = enrich.get(nid) or (enrich.get("term:" + n["term"]) if "term" in n else None) or {}
        # no badge, path, counts, Related Concepts or Appears In: the drawer's card tree and buttons carry the structure
        parts = []

        if "term" in n:
            parts.append(f"## Definition\n\n{fc_def.get(n['term'], '')}")
            if e.get("deep_dive"):
                parts.append(f"## Deep Dive\n\n{e['deep_dive']}")
            if e.get("exam_tip"):
                parts.append(f"## Exam Angle\n\n> [!tip] {e['exam_tip']}")
            else:
                missing_enrich.append(nid)
        else:
            if e.get("overview"):
                parts.append(f"## At a Glance\n\n{e['overview']}")
            if e.get("exam"):
                parts.append(f"## Why It Matters for the Exam\n\n{e['exam']}")
            if e.get("key_points"):
                parts.append("## Key Points\n\n" +
                             "\n".join(f"- {k}" for k in e["key_points"]))
            if not e:
                missing_enrich.append(nid)
            if nid in SELECTORS:
                blocks = []
                for rel_f, prefix in SELECTORS[nid]:
                    src = note(rel_f)
                    body = src if prefix == "" else extract(src, prefix)
                    blocks.append(f"> [!source] {Path(rel_f).stem}\n\n{body}")
                parts.append("## Source Notes\n\n" + "\n\n---\n\n".join(blocks))

        details[nid] = "\n\n".join(parts)

    out = (
        "// GENERATED by build_node_details.py — do not edit by hand.\n"
        "// Consistent per-node template: authored enrichments (enrichments/*.json)\n"
        "// + programmatic structure + verbatim Map/ vault extracts.\n"
        f"const NODE_DETAILS = {json.dumps(details, ensure_ascii=False)};\n"
    )
    (HERE / "node-details.js").write_text(out)

    total = sum(len(v) for v in details.values())
    print(f"{len(details)} nodes, {total//1024} KB total; "
          f"nodes lacking enrichment: {len(missing_enrich)}")
    if missing_enrich:
        print("  missing:", ", ".join(missing_enrich[:12]),
              "..." if len(missing_enrich) > 12 else "")


if __name__ == "__main__":
    main()
