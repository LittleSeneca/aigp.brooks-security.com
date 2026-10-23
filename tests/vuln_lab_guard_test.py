#!/usr/bin/env python3
"""Guards the planted Invicti test vulnerabilities (docs/invicti-test-vulns.md).

    python3 tests/vuln_lab_guard_test.py

Checks that vuln-lab/ can never be staged for deploy, and that every INVICTI-TEST-nn tag in the repo is
listed in the catalogue, so a planted flaw cannot go undocumented.
"""
import os
import re
import subprocess
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FAILS = []


def ok(cond, msg):
    print(("ok   " if cond else "FAIL ") + msg)
    if not cond:
        FAILS.append(msg)


def tracked():
    out = subprocess.run(["git", "ls-files", "-z"], cwd=REPO, capture_output=True, text=True, check=True).stdout
    return [f for f in out.split("\0") if f]


deploy = open(os.path.join(REPO, ".github/workflows/deploy-aigp.yml")).read()
ok("vuln-lab" not in deploy, "the deploy workflow never mentions vuln-lab")
ok("notices.js" in deploy, "notices.js is staged, so the DAST scan can see its flaws")

catalogue = open(os.path.join(REPO, "docs/invicti-test-vulns.md")).read()
listed = set(re.findall(r"^\| (\d\d) \|", catalogue, re.M))
used = set()
for f in tracked():
    if f in ("docs/invicti-test-vulns.md", "tests/vuln_lab_guard_test.py"):
        continue
    try:
        text = open(os.path.join(REPO, f), errors="ignore").read()
    except (IsADirectoryError, FileNotFoundError):
        continue
    used |= set(re.findall(r"INVICTI-TEST-(\d\d)", text))
ok(bool(used), "planted tags exist (%d)" % len(used))
ok(used <= listed, "every tag in the repo is catalogued" + ("" if used <= listed else ": missing %s" % sorted(used - listed)))
ok(listed <= used, "every catalogued tag exists in the repo" + ("" if listed <= used else ": stale %s" % sorted(listed - used)))

for f in tracked():
    if f.startswith("vuln-lab/") and f.endswith(".py"):
        ok(True, "vuln-lab source present: " + f)

sys.exit(1 if FAILS else 0)
