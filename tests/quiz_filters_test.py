#!/usr/bin/env python3
"""Regression test for the quiz's answer reveal when a filter drops the answered question.

    python tests/quiz_filters_test.py

Needs `playwright` and a chromium build (`playwright install chromium`); everything else is
stdlib. It serves the repo on a throwaway port, so the app is exercised exactly as deployed.

The bug it pins: `recordAnswer` re-ran the filters *before* revealing the answer. With
Status = Unanswered (or anything that stops matching once answered) the answered question left
`filteredQuestions`, so `showQuestion(currentIndex, true)` drew a different question as if it
were the one just answered — and with no progress entry for it, it threw before drawing
anything at all. The click looked like it did nothing, and because `answered` had already been
set, every later click on an option was ignored too.
"""
import functools
import http.server
import os
import socketserver
import sys
import threading

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PROBE = """() => ({
  answered: answered,
  expl: !!document.querySelector('#question-area .explanation'),
  qtext: (document.querySelector('#question-area .q-text') || {}).textContent || '',
  nextText: filteredQuestions[currentIndex + 1] ? filteredQuestions[currentIndex + 1].question : null,
  prevText: filteredQuestions[currentIndex - 1] ? filteredQuestions[currentIndex - 1].question : null,
  nOpts: document.querySelectorAll('#question-area .option').length,
  colours: [...document.querySelectorAll('#question-area .option')].map(o => o.className),
  done: document.getElementById('answered-count').textContent,
  filtered: filteredQuestions.length,
})"""

FAILS = []


def ok(cond, msg):
    print(("    PASS  " if cond else "    FAIL  ") + msg)
    if not cond:
        FAILS.append(msg)


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, /, *args):  # noqa: A002 - stdlib signature
        pass


def serve():
    handler = functools.partial(Quiet, directory=REPO)
    httpd = socketserver.ThreadingTCPServer(("127.0.0.1", 0), handler)
    httpd.daemon_threads = True
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd, "http://127.0.0.1:%d" % httpd.server_address[1]


def click_option(page, nth=1):
    page.click("#question-area .option:nth-child(%d)" % nth)


def scenario(browser, url, name, status=None, difficulty=None, pre_js=None, step=0, nav="next"):
    print("\n== %s" % name)
    ctx = browser.new_context(viewport={"width": 1400, "height": 900}, locale="en-US")
    page = ctx.new_page()
    errs = []
    page.on("pageerror", lambda e: errs.append(str(e)))
    page.goto(url + "/study.html", wait_until="domcontentloaded")
    page.wait_for_timeout(900)
    if pre_js:
        page.evaluate(pre_js)
        page.wait_for_timeout(300)
    if status:
        page.select_option("#status-filter", status)
        page.wait_for_timeout(250)
    if difficulty:
        page.select_option("#difficulty-filter", difficulty)
        page.wait_for_timeout(250)
    for _ in range(step):
        page.click("#question-area .nav-row button:nth-child(3)")
        page.wait_for_timeout(200)

    pre = page.evaluate(PROBE)
    if pre["nOpts"] == 0:
        ok(False, "setup left no question to click (filter emptied the set)")
        ctx.close()
        return

    click_option(page)
    page.wait_for_timeout(350)
    post = page.evaluate(PROBE)

    ok(not errs, "no page error on the click (%s)" % (errs[:1] or "none"))
    ok(post["expl"], "the clicked answer is revealed")
    ok(post["qtext"] == pre["qtext"], "the revealed question is the one clicked")
    ok(sum(1 for c in post["colours"] if "correct" in c.split()) >= 1,
       "the correct option is marked")
    ok(sum(1 for c in post["colours"] if "dimmed" in c.split()) >= 1,
       "the other options are dimmed")
    ok(int(post["done"]) == int(pre["done"]) + 1,
       "Done went %s -> %s" % (pre["done"], post["done"]))

    click_option(page, 2)
    page.wait_for_timeout(250)
    post2 = page.evaluate(PROBE)
    ok(post2["done"] == post["done"], "a second click does not record another answer")
    ok(not errs, "still no page error after the second click")

    if nav == "prev":
        if pre["prevText"] is None:
            print("    SKIP  no question before this one to step back to")
        else:
            page.click("#question-area .nav-row button:nth-child(1)")
            page.wait_for_timeout(300)
            back = page.evaluate(PROBE)
            ok(back["qtext"] == pre["prevText"],
               "Prev opens the question that preceded the one just answered")
            ok(not back["expl"], "that question is not shown as answered")
        ctx.close()
        return

    page.click("#question-area .nav-row button:nth-child(3)")
    page.wait_for_timeout(300)
    nxt = page.evaluate(PROBE)
    ok(nxt["answered"] is False and not nxt["expl"], "Next opens an unanswered question")
    if pre["nextText"] is not None:
        ok(nxt["qtext"] == pre["nextText"],
           "Next opens the question that followed the one just answered")
    if nxt["nOpts"] > 0:
        click_option(page)
        page.wait_for_timeout(300)
        ok(page.evaluate(PROBE)["expl"], "that next question is answerable too")
    ctx.close()


def multi_scenario(browser, url, name, status=None, difficulty=None):
    """A "Select N" question commits through the same recordAnswer, so it crashed the same way."""
    print("\n== %s" % name)
    ctx = browser.new_context(viewport={"width": 1400, "height": 900}, locale="en-US")
    page = ctx.new_page()
    errs = []
    page.on("pageerror", lambda e: errs.append(str(e)))
    page.goto(url + "/study.html", wait_until="domcontentloaded")
    page.wait_for_timeout(900)
    if status:
        page.select_option("#status-filter", status)
        page.wait_for_timeout(250)
    if difficulty:
        page.select_option("#difficulty-filter", difficulty)
        page.wait_for_timeout(250)
    picked = page.evaluate(
        "() => { const i = filteredQuestions.findIndex(isMulti); if (i < 0) return null;"
        "        showQuestion(i); return filteredQuestions[i].answer.length; }")
    if not picked:
        ok(False, "no multi-select question in the filtered set")
        ctx.close()
        return
    for n in range(picked):
        click_option(page, n + 1)
        page.wait_for_timeout(120)
    page.click("#multi-submit")
    page.wait_for_timeout(350)
    post = page.evaluate(PROBE)
    ok(not errs, "no page error checking a Select N answer (%s)" % (errs[:1] or "none"))
    ok(post["expl"], "the Select N answer is revealed")


def main():
    from playwright.sync_api import sync_playwright

    httpd, url = serve()
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True, channel="chromium")
            scenario(browser, url, "Status = Unanswered + difficulty change (reported bug)",
                     status="unanswered", difficulty="Medium")
            scenario(browser, url, "Status = Unanswered alone", status="unanswered")
            scenario(browser, url, "Status = Unanswered + mind-map node filter",
                     status="unanswered", pre_js="() => mmStudyNode('ch1')")
            scenario(browser, url, "Status = Unanswered, stepping back from the reveal",
                     status="unanswered", difficulty="Medium", step=1, nav="prev")
            scenario(browser, url, "Status = all, stepping back from the reveal (control)",
                     step=1, nav="prev")
            multi_scenario(browser, url, "Status = Unanswered, a Select N question",
                           status="unanswered", difficulty="Hard")
            scenario(browser, url, "difficulty change alone (control)", difficulty="Medium")
            scenario(browser, url, "no filters (control)")
            browser.close()
    finally:
        httpd.shutdown()

    print("\n%s" % ("FAILED: %d assertion(s)" % len(FAILS) if FAILS else "OK: all assertions passed"))
    return 1 if FAILS else 0


if __name__ == "__main__":
    sys.exit(main())
