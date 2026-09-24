#!/usr/bin/env python3
"""Verify the mind map enrichment: structural gate plus a per-domain progress report.

There is no test suite in this repo, so this is the command that proves the
generated artifact is sound. It rebuilds node-details.js and checks it reproduces
byte-for-byte, then asserts the invariants that break silently:

  * every node resolves to exactly one enrichment entry
  * a node that carries authored content renders its sections in the right order
  * the Sources list is NOT swallowed into the collapsed "## Source Notes" fold
    (renderNodeDetail splits the markdown on that heading, so anything after it
    is hidden inside the fold)
  * every source has a title and an http(s) URL, rendered as a new-tab anchor
  * authored text carries no em dashes and no banned filler words

The gate applies to nodes that have authored content, so the command is useful
while domains II-IV are still being enriched: those domains report as pending
rather than failing. Duplicate definitions outside an enriched domain are
reported as notes, since last-file-wins hides them.

Usage:
    python3 verify_enrichment.py            # all domains
    python3 verify_enrichment.py d1         # one domain
Exit code is 0 when the gate passes.
"""
import hashlib
import json
import pathlib
import re
import subprocess
import sys

REPO = pathlib.Path(__file__).parent
DOMAINS = {
    "d1": "I    Foundations",
    "d2": "II   Laws, standards & frameworks",
    "d3": "III  Governing AI development",
    "d4": "IV   Governing AI deployment & use",
}

EM_DASH = "\u2014"
BANNED = re.compile(r"(?i)\b(delve|leverage|actionable|game-chang\w*|unpack|tapestry)\b")
SECTIONS = {
    "term": ["## Definition", "## Deep Dive", "## Exam Angle",
             "## Sources & Further Reading"],
    "node": ["## At a Glance", "## Deep Dive", "## Why It Matters for the Exam",
             "## Key Points", "## Sources & Further Reading"],
}
MAX_SHOWN = 15

failures, notes = [], []


def fail(domain, msg):
    failures.append(f"{domain}: {msg}")


def note(msg):
    notes.append(msg)


def key_of(node):
    """A term leaf is keyed `term:<name>`; every other node by its id."""
    return f"term:{node['term']}" if "term" in node else node["id"]


def subtree(nodes, root_id):
    kids = {}
    for n in nodes:
        kids.setdefault(n.get("parent"), []).append(n["id"])
    out, stack = [], [root_id]
    while stack:
        nid = stack.pop()
        out.append(nid)
        stack.extend(kids.get(nid, []))
    return out


def main():
    want = sys.argv[1:] or list(DOMAINS)
    unknown = [d for d in want if d not in DOMAINS]
    if unknown:
        sys.exit(f"unknown domain(s): {', '.join(unknown)} (expected {', '.join(DOMAINS)})")

    print("== inputs ==")
    files = {}
    for p in sorted((REPO / "enrichments").glob("*.json")):
        files[p.name] = json.loads(p.read_text())
    nodes = json.loads(re.search(r"const MM_NODES = (\[.*?\]);\n",
                                 (REPO / "map-data.js").read_text(), re.S).group(1))
    byid = {n["id"]: n for n in nodes}
    print(f"  {len(files)} enrichment files, {len(nodes)} map nodes")

    owner, dupes = {}, []
    for name, obj in files.items():
        for k in obj:
            if k in owner:
                dupes.append((k, owner[k], name))
            owner[k] = name

    print("\n== gate: regeneration fidelity ==")
    before = (REPO / "node-details.js").read_bytes()
    proc = subprocess.run([sys.executable, "build_node_details.py"], cwd=REPO,
                          capture_output=True, text=True)
    if proc.returncode != 0:
        fail("build", f"build_node_details.py exited {proc.returncode}: {proc.stderr.strip()[:200]}")
    if "nodes lacking enrichment: 0" not in proc.stdout:
        fail("build", "build reported nodes lacking enrichment")
    after = (REPO / "node-details.js").read_bytes()
    if hashlib.sha256(before).hexdigest() != hashlib.sha256(after).hexdigest():
        fail("build", "regenerated node-details.js differs from the committed file")
    else:
        print(f"  PASS  node-details.js regenerates byte-for-byte ({len(after)} bytes, "
              f"sha256 {hashlib.sha256(after).hexdigest()[:16]})")
    print(f"  {'PASS' if 'nodes lacking enrichment: 0' in proc.stdout else 'FAIL'}  "
          f"{proc.stdout.strip()}")

    details = json.loads(re.search(r"const NODE_DETAILS = (\{.*\});\n",
                                   after.decode(), re.S).group(1))

    print("\n== per-domain ==")
    print(f"  {'domain':5} {'nodes':>5} {'terms':>5} {'w/ deep dive':>12} {'w/ sources':>10} "
          f"{'avg deep dive':>13} {'avg sources':>11}  status")
    enriched_keys = set()
    for d in want:
        ids = subtree(nodes, d)
        keys = [key_of(byid[i]) for i in ids]
        terms = sum(1 for i in ids if "term" in byid[i])

        with_dd = [k for k in keys if k in owner and files[owner[k]][k].get("deep_dive")]
        with_src = [k for k in keys if k in owner and files[owner[k]][k].get("sources")]
        dds = [len(files[owner[k]][k]["deep_dive"]) for k in with_dd]
        nss = [len(files[owner[k]][k]["sources"]) for k in with_src]
        avg = lambda xs: sum(xs) // len(xs) if xs else 0
        status = ("enriched" if len(with_dd) == len(ids) and len(with_src) == len(ids)
                  else "partial" if with_dd or with_src else "pending")
        if status == "enriched":
            enriched_keys.update(keys)
        print(f"  {d:5} {len(ids):5} {terms:5} {len(with_dd):12} {len(with_src):10} "
              f"{avg(dds):13} {avg(nss):11}  {status}")

        for i, k in zip(ids, keys):
            if k not in owner:
                fail(d, f"{i} ({k}) has no enrichment entry")
        if status == "pending":
            note(f"{d} ({DOMAINS[d].split()[1]}) is not enriched yet: "
                 f"{len(ids)} nodes pending")

    print("\n== gate: authored content ==")
    checked = 0
    for d in want:
        for i in subtree(nodes, d):
            k = key_of(byid[i])
            if k not in owner or k not in enriched_keys:
                continue
            entry = files[owner[k]][k]
            kind = "term" if "term" in byid[i] else "node"
            checked += 1

            md = details.get(i, "")
            pos = [md.find(h) for h in SECTIONS[kind]]
            if not all(p >= 0 for p in pos) or pos != sorted(pos):
                fail(d, f"{i} sections missing or out of order "
                        f"({dict(zip(SECTIONS[kind], pos))})")
            if "## Source Notes" in md and \
                    "## Sources & Further Reading" in md.split("\n## Source Notes\n")[-1]:
                fail(d, f"{i} Sources section is inside the Source Notes fold")
            if 'target="_blank" rel="noopener"' not in md:
                fail(d, f"{i} sources do not render as new-tab anchors")
            for s in entry.get("sources", []):
                if not str(s.get("url", "")).startswith(("http://", "https://")) or not s.get("title"):
                    fail(d, f"{i} has a malformed source entry: {s!r}")
            if EM_DASH in json.dumps(entry, ensure_ascii=False):
                fail(d, f"{i} has an em dash in authored content")
            hits = set(BANNED.findall(json.dumps(entry, ensure_ascii=False)))
            if hits:
                fail(d, f"{i} has banned filler words: {sorted(hits)}")

    print(f"  {'PASS' if not failures else 'FAIL'}  {checked} enriched node(s) checked "
          f"for section order, the Source Notes fold, anchor rendering, "
          f"source shape, em dashes and filler")

    if dupes:
        in_enriched = [x for x in dupes if x[0] in enriched_keys]
        for k, first, second in in_enriched:
            fail("dup", f"{k} defined twice ({first}, {second})")
        others = sorted({x[0] for x in dupes if x[0] not in enriched_keys})
        if others:
            note(f"{len(others)} node(s) defined in two by-type files, last wins "
                 f"(pre-existing, not yet consolidated): {', '.join(others)}")

    print(f"\n{'GATE PASSED' if not failures else 'GATE FAILED'}: "
          f"{len(failures)} problem(s), {len(notes)} note(s)")
    for f in failures[:MAX_SHOWN]:
        print("  -", f)
    if len(failures) > MAX_SHOWN:
        print(f"  ... and {len(failures) - MAX_SHOWN} more")
    for n in notes:
        print("  ~", n)
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
