# vuln-lab

Deliberately vulnerable source, for the Invicti SAST and SCA scans to find. Nothing here is deployed,
imported, tested or run: the deploy workflow stages an explicit file list, and `tests/vuln_lab_guard_test.py`
fails if that list ever mentions this folder. No secret in it is real.

Each flaw is tagged `INVICTI-TEST-nn` and catalogued in `docs/invicti-test-vulns.md`.
