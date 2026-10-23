#!/usr/bin/env python3
"""Generate search aliases for the study chat's corpus, offline, and commit them as chat_aliases.json.

Keyword search finds a section when the student uses the section's own words. It misses when they use
different ones: a section headed "Prohibited practices" is not found by "Which practices does the EU AI
Act prohibit?". Each alias is a short phrase a student might actually type to reach that section, which
build_chat_corpus.py then merges into the corpus as the section's `aliases`. The chat Lambda indexes
aliases like a heading (double weight).

This is a one-off, offline tool. It is deliberately NOT run by build_chat_corpus.py and NOT run in CI:
the CI build must never call a model. Run it by hand, commit chat_aliases.json, and the next deploy
picks it up.

    export ALIAS_BASE_URL=https://openrouter.ai/api/v1
    export ALIAS_MODEL=<a chat model>
    export ALIAS_API_KEY=<key>            # never commit this
    python3 tools/gen_chat_aliases.py --limit 50        # generate the next 50 sections
    python3 tools/gen_chat_aliases.py --dry-run         # print the prompts, call nothing

The endpoint is any OpenAI-compatible /chat/completions; nothing here is tied to a provider.

Re-running only regenerates sections whose id is new or whose text changed: every cached entry stores a
sha256 of the section text, and a mismatch (or an absent entry) means "generate". Results are written
after every section, so the run is resumable, and --limit keeps a batch to a sensible size.
"""
import argparse
import json
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
import build_chat_corpus as corpus_builder  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "chat_aliases.json"
MAX_ALIASES = 8
MAX_WORDS = 12
MAX_CHARS = 120
EM_DASH = "\u2014"
DEFAULT_BASE_URL = "https://openrouter.ai/api/v1"

SYSTEM = """You write search aliases for one section of an AIGP (AI Governance Professional) exam study corpus.

The aliases are what a student might type into a search box to reach this exact section. They are used for keyword search only, so they must share words with the section.

Rules:
- Use only the text of the section you are given. Do not introduce any fact, name, number or term that is not already in it.
- Return at most 8 aliases, most useful first.
- Each alias is a short phrase of at most 12 words.
- Cover: likely questions the section answers; synonyms for its terms; abbreviations and their expansions (for example DPIA and data protection impact assessment, or Article 5 and prohibited practices).
- Write aliases as a student would: lowercase or natural case, no leading "what is".
- Never use an em dash (—). Use a comma, a colon or parentheses instead.
- Do not use square brackets.

Return ONLY a JSON object, no prose and no code fence, of the form {"aliases": ["...", "..."]}."""

USER = """Section title: {title}
Breadcrumb: {breadcrumb}

Section text:
{text}"""


def _env(name, default=None):
    value = os.environ.get(name)
    return value if value else default


def http_chat(messages, model, base_url, api_key, temperature=0, timeout=60):
    """One OpenAI-compatible chat completion. Returns the assistant message content."""
    url = base_url.rstrip("/") + "/chat/completions"
    body = {"model": model, "messages": messages, "temperature": temperature}
    req = urllib.request.Request(
        url,
        data=json.dumps(body).encode(),
        headers={"Authorization": "Bearer " + api_key, "Content-Type": "application/json"},
    )
    with urllib.request.urlopen(req, timeout=timeout) as r:
        data = json.load(r)
    return data["choices"][0]["message"]["content"]


def parse_aliases(reply):
    """The aliases from a model reply, or None if the reply is not the expected JSON. Tolerates a code
    fence or surrounding prose by taking the first {...} block."""
    if not isinstance(reply, str):
        return None
    m = re.search(r"\{.*\}", reply, re.S)
    if not m:
        return None
    try:
        data = json.loads(m.group(0))
    except ValueError:
        return None
    names = data.get("aliases")
    if not isinstance(names, list) or not all(isinstance(a, str) for a in names):
        return None
    return [a.strip() for a in names if a.strip()]


def clean_aliases(names):
    """Keep the aliases that satisfy the rules, in order, capped at MAX_ALIASES."""
    out = []
    for a in names:
        if EM_DASH in a or "[[" in a or "]]" in a:
            continue
        if len(a) > MAX_CHARS or len(a.split()) > MAX_WORDS:
            continue
        if a not in out:
            out.append(a)
    return out[:MAX_ALIASES]


def generate(section, ask):
    """Ask for one section's aliases, retrying a malformed reply up to twice, then giving up."""
    messages = [
        {"role": "system", "content": SYSTEM},
        {"role": "user", "content": USER.format(title=section["title"], breadcrumb=section["breadcrumb"], text=section["text"])},
    ]
    for _ in range(3):  # the first try plus two retries
        reply = ask(messages)
        names = parse_aliases(reply)
        if names is not None:
            return clean_aliases(names)
    return None


def load_cache(path):
    if not path.exists():
        return {}
    data = json.loads(path.read_text(encoding="utf-8"))
    return {k: v for k, v in data.items() if not k.startswith("_")}


def save_cache(path, cache):
    ordered = {k: cache[k] for k in sorted(cache)}
    path.write_text(json.dumps(ordered, ensure_ascii=False, indent=1, sort_keys=True) + "\n", encoding="utf-8")


def pending(sections, cache):
    """Sections whose id is new or whose text hash no longer matches the cached one (including a
    previous failure, which carries an empty alias list and is retried)."""
    out = []
    for s in sections:
        entry = cache.get(s["id"])
        if not entry or entry.get("hash") != corpus_builder.section_hash(s["text"]):
            out.append(s)
    return out


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--limit", type=int, default=0, help="generate at most N sections this run (0 = all pending)")
    ap.add_argument("--ids", help="comma-separated section ids to generate, overriding the pending set")
    ap.add_argument("--out", type=Path, default=OUT, help="cache file (default chat_aliases.json)")
    ap.add_argument("--dry-run", action="store_true", help="print the prompts for the first 3 sections; call nothing")
    args = ap.parse_args(argv)

    sections = corpus_builder.build_all(include_aliases=False)
    cache = load_cache(args.out)

    if args.ids:
        wanted = {i.strip() for i in args.ids.split(",") if i.strip()}
        todo = [s for s in sections if s["id"] in wanted]
    else:
        todo = pending(sections, cache)
    if args.limit:
        todo = todo[: args.limit]

    print(f"{len(sections):,} sections, {len(cache):,} cached, {len(todo):,} to generate")

    if args.dry_run:
        for s in todo[:3]:
            prompt = USER.format(title=s["title"], breadcrumb=s["breadcrumb"], text=s["text"][:800])
            print("\n" + "=" * 78)
            print(f"[{s['id']}]  ({len(s['text'])} chars)")
            print("-- system --\n" + SYSTEM)
            print("-- user --\n" + prompt)
        print(f"\ndry run: no model was called. {len(todo):,} section(s) pending.")
        return 0

    model = _env("ALIAS_MODEL")
    base_url = _env("ALIAS_BASE_URL", DEFAULT_BASE_URL)
    api_key = _env("ALIAS_API_KEY")
    if not model or not api_key:
        sys.exit("set ALIAS_MODEL and ALIAS_API_KEY (and optionally ALIAS_BASE_URL) first, or use --dry-run")

    def ask(messages):
        return http_chat(messages, model, base_url, api_key)

    done = failed = 0
    for i, s in enumerate(todo, 1):
        entry: dict = {"hash": corpus_builder.section_hash(s["text"])}
        try:
            names = generate(s, ask)
        except (urllib.error.URLError, KeyError, ValueError, TimeoutError) as exc:
            names = None
            entry["error"] = f"{type(exc).__name__}: {exc}"
        if names is None:
            entry["aliases"] = []
            entry.setdefault("error", "model did not return valid JSON after 2 retries")
            failed += 1
        else:
            entry["aliases"] = names
            done += 1
        cache[s["id"]] = entry
        save_cache(args.out, cache)  # write every time: the run is resumable
        print(f"{i}/{len(todo)} {s['id']}: {'failed' if names is None else str(len(names)) + ' aliases'}")
    print(f"done: {done} generated, {failed} failed, cache at {args.out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
