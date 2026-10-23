#!/usr/bin/env python3
"""Browser test for the Chat tab.

    python tests/chat_ui_test.py

Needs `playwright` and a chromium build, like quiz_filters_test.py. The API is stubbed with page.route,
so this checks the client only: who sees the tab, the question/poll flow, how history is sent, and that
a hostile model answer cannot put markup, links or handlers on the page.
"""
import functools
import http.server
import json
import os
import socketserver
import sys
import threading

from playwright.sync_api import sync_playwright

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FAILS = []

HOSTILE = (
    "Prohibited: social scoring. [[eu#a5]] <img src=x onerror=\"window.pwned=1\"> <script>window.pwned=2</script>\n\n"
    "[click](javascript:window.pwned=3) <a href=\"https://evil.example\" onclick=\"window.pwned=4\">link</a>\n\n"
    "# Big heading\n\n- one\n- two [[eu#a6]] [[invented]]\n\n<iframe src=\"https://evil.example\"></iframe>"
)
SOURCES = [{"id": "eu#a5", "title": "Article 5", "where": "EU AI Act > Article 5"}, {"id": "eu#a6", "title": "Article 6", "where": "EU AI Act > Article 6"}]


def ok(cond, msg):
    print(("    PASS  " if cond else "    FAIL  ") + msg)
    if not cond:
        FAILS.append(msg)


class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, /, *args):  # noqa: A002
        pass


def serve():
    httpd = socketserver.ThreadingTCPServer(("127.0.0.1", 0), functools.partial(Quiet, directory=REPO))
    httpd.daemon_threads = True
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd, "http://127.0.0.1:%d" % httpd.server_address[1]


def token(user):
    return f"{user}.100.9999999999.sig"


def open_app(browser, url, user=None, api=None):
    ctx = browser.new_context(viewport={"width": 1200, "height": 800})
    page = ctx.new_page()
    errs, seen = [], []
    page.on("pageerror", lambda e: errs.append(str(e)))

    def handle(route):
        action = route.request.url.split("/api/aigp/")[1]
        body = json.loads(route.request.post_data or "{}")
        seen.append((action, body))
        if action == "sync":
            return route.fulfill(status=200, content_type="application/json", body=json.dumps({"state": body["state"]}))
        status, payload = (api or (lambda a, b: (404, {"error": "no"})))(action, body)
        route.fulfill(status=status, content_type="application/json", body=json.dumps(payload))

    page.route("**/api/aigp/**", handle)
    if user:
        page.add_init_script("localStorage.setItem('aigp-auth', %s)" % json.dumps(json.dumps({"username": user, "token": token(user), "name": user + "@example.com"})))
    page.goto(url + "/study.html", wait_until="domcontentloaded")
    page.wait_for_timeout(700)
    return ctx, page, errs, seen


def scenarios(browser, url):
    print("\n== who sees the tab")
    for user, expect in [(None, False), ("alice", False), ("g.12345", True)]:
        ctx, page, errs, _ = open_app(browser, url, user)
        ok(page.is_visible("#tab-chat") == expect, f"user={user!r}: tab {'shown' if expect else 'hidden'}")
        ok(not errs, f"user={user!r}: no page errors {errs}")
        ctx.close()

    print("\n== question, polling, sanitised answer, history")
    polls = {"n": 0}

    def api(action, body):
        if action == "chat/usage":
            return 200, {"remaining": 143, "limit": 200}
        if action == "chat":
            return 202, {"id": "job1", "remaining": 142}
        if action == "chat/status":
            polls["n"] += 1
            if polls["n"] < 2:
                return 200, {"status": "running", "steps": ["Searching: prohibited"], "remaining": 142}
            return 200, {"status": "done", "steps": [], "answer": HOSTILE, "sources": SOURCES, "remaining": 142}
        return 404, {"error": "no"}

    ctx, page, errs, seen = open_app(browser, url, "g.12345", api)
    page.click("#tab-chat")
    page.wait_for_timeout(400)
    ok("143 of 200" in page.inner_text("#chat-quota"), "quota loads when the tab opens")
    page.fill("#chat-input", "Which practices are prohibited?")
    page.keyboard.press("Enter")
    page.wait_for_selector(".chat-msg.assistant", timeout=15000)
    ok("142 of 200" in page.inner_text("#chat-quota"), "quota updates after the answer")
    a = page.inner_html(".chat-msg.assistant")
    ok(page.evaluate("window.pwned") is None, "no injected script or handler ran")
    ok(page.query_selector(".chat-msg.assistant img, .chat-msg.assistant script, .chat-msg.assistant a, .chat-msg.assistant iframe") is None, "no img, script, link or iframe in the answer")
    ok(page.evaluate("() => [...document.querySelectorAll('.chat-msg.assistant *:not(.chat-sources):not(.chat-sources *)')].every(e => e.attributes.length === 0)"), "no attributes on any element the model produced")
    ok("Prohibited: social scoring. [1]" in page.inner_text(".chat-msg.assistant"), "[[id]] became [1]")
    ok("[2]" in a and "invented" not in a and "[[" not in a, "second citation numbered, unknown id dropped")
    ok("Big heading" in a and "<h1" not in a, "h1 unwrapped to text")
    ok(page.locator(".chat-sources li").count() == 2 and "Article 6 (EU AI Act > Article 6)" in page.inner_text(".chat-sources"), "sources list")
    ok(page.evaluate("document.getElementById('chat-send').disabled") is False, "input re-enabled")

    page.fill("#chat-input", "And Article 6?")
    polls["n"] = 5
    page.click("#chat-send")
    page.wait_for_function("document.querySelectorAll('.chat-msg.assistant').length === 2", timeout=15000)
    second = [b for a_, b in seen if a_ == "chat"][-1]
    ok([m["role"] for m in second["history"]] == ["user", "assistant"] and second["history"][0]["content"] == "Which practices are prohibited?", "second question carries the first turn")
    ok(second["token"] == token("g.12345") and second["message"] == "And Article 6?", "token and message sent")

    ok(page.locator(".chat-item").count() == 1 and "Which practices are prohibited?" in page.inner_text(".chat-item.active .open"), "one saved chat, titled by its first question, shown active")
    ok(page.is_visible("#chat-clear") is False if page.query_selector("#chat-clear") else True, "the old New conversation button is gone")

    print("\n== sidebar: new chat, switching, persistence, delete")
    page.click("#chat-new")
    ok(page.locator(".chat-msg").count() == 0 and page.locator(".chat-item").count() == 1, "New chat shows an empty log and saves nothing yet")
    page.click("#chat-new")
    ok(page.locator(".chat-item").count() == 1, "New chat again adds nothing")
    page.fill("#chat-input", "What is GOVERN 1?")
    polls["n"] = 5
    page.click("#chat-send")
    page.wait_for_selector(".chat-msg.assistant", timeout=15000)
    third = [b for a_, b in seen if a_ == "chat"][-1]
    ok(third["history"] == [], "a new chat starts with no history")
    ok(page.locator(".chat-item").count() == 2 and "GOVERN 1" in page.inner_text(".chat-item.active .open"), "second chat listed first and active")
    page.locator(".chat-item .open").nth(1).click()
    ok(page.locator(".chat-msg.user").count() == 2 and page.locator(".chat-msg.assistant").count() == 2, "opening the first chat restores both turns")
    ok(page.locator(".chat-msg.assistant").first.locator(".chat-sources li").count() == 2, "restored answers keep their sources")
    page.reload()
    page.wait_for_timeout(700)
    page.click("#tab-chat")
    ok(page.locator(".chat-item").count() == 2, "chats survive a reload")
    ok(page.evaluate("JSON.parse(localStorage.getItem('aigp-chats')).every(c => c.messages.every(m => m.role && m.content))"), "stored shape is plain")

    page.once("dialog", lambda d: d.accept())
    page.locator(".chat-item").nth(1).hover()
    page.locator(".chat-item .del").nth(1).click()
    ok(page.locator(".chat-item").count() == 1, "delete removes a chat")

    print("\n== an answer lands in the chat that asked, even after switching away")
    polls["n"] = -3  # three running polls before done
    page.click("#chat-new")
    page.fill("#chat-input", "Slow question?")
    page.click("#chat-send")
    page.wait_for_selector(".chat-msg.pending")
    page.locator(".chat-item .open").nth(1).click()  # the older chat, while the slow one is in flight
    ok(page.locator(".chat-msg.pending").count() == 0, "other chat shows no pending marker")
    page.locator(".chat-item .open").first.click()
    ok(page.locator(".chat-msg.pending").count() == 1, "the asking chat shows its pending marker again")
    page.wait_for_selector(".chat-msg.assistant", timeout=20000)
    ok(page.locator(".chat-msg.user").inner_text() == "Slow question?" and page.locator(".chat-msg.assistant").count() == 1, "answer filed under the asking chat")
    ok(not errs, f"no page errors {errs}")

    print("\n== sign-out removes the tab and, with it, saved chats")
    page.on("dialog", lambda d: d.accept())
    page.evaluate("signOut()")
    page.wait_for_timeout(800)
    ok(page.evaluate("localStorage.getItem('aigp-chats')") is None, "saved chats cleared from storage")
    ok(not page.is_visible("#tab-chat") and page.is_visible("#panel-quiz"), "tab hidden, back on Quiz")
    ctx.close()

    print("\n== errors")
    def api_err(action, body):
        if action == "chat/usage":
            return 200, {"remaining": 0, "limit": 200}
        if action == "chat":
            return 429, {"error": "You've used all 200 questions for this week.", "remaining": 0}
        return 404, {"error": "no"}

    ctx, page, errs, _ = open_app(browser, url, "g.12345", api_err)
    page.click("#tab-chat")
    page.fill("#chat-input", "hello")
    page.click("#chat-send")
    page.wait_for_selector(".chat-msg.error", timeout=5000)
    ok("used all 200" in page.inner_text(".chat-msg.error") and "0 of 200" in page.inner_text("#chat-quota"), "weekly limit message and quota 0")
    ok(page.input_value("#chat-input") == "hello" and page.locator(".chat-item").count() == 0, "a refused question is handed back and no empty chat is saved")
    ctx.close()

    def api_fail(action, body):
        if action == "chat/usage":
            return 200, {"remaining": 10, "limit": 200}
        if action == "chat":
            return 202, {"id": "j", "remaining": 9}
        return 200, {"status": "error", "steps": [], "error": "The model is unavailable right now.", "remaining": 10}

    ctx, page, errs, _ = open_app(browser, url, "g.12345", api_fail)
    page.click("#tab-chat")
    page.fill("#chat-input", "hello")
    page.click("#chat-send")
    page.wait_for_selector(".chat-msg.error", timeout=8000)
    ok("unavailable" in page.inner_text(".chat-msg.error") and "10 of 200" in page.inner_text("#chat-quota"), "job error shown, quota restored")
    ctx.close()


def main():
    httpd, url = serve()
    with sync_playwright() as p:
        browser = p.chromium.launch()
        scenarios(browser, url)
        browser.close()
    httpd.shutdown()
    print("\n%s" % ("FAILED: %d" % len(FAILS) if FAILS else "all passed"))
    sys.exit(1 if FAILS else 0)


if __name__ == "__main__":
    main()
