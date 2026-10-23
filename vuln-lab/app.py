"""A small notes service. Never run: it exists for the SAST scan (see README.md)."""
import hashlib
import os
import pickle
import random
import sqlite3
import subprocess
import tempfile
import xml.etree.ElementTree as ET

import requests
import yaml
from flask import Flask, redirect, request

app = Flask(__name__)

# INVICTI-TEST-20 Hardcoded credentials and secret key.
DB_PASSWORD = "Summer2026!"
app.secret_key = "dev-secret-key-do-not-use"


@app.route("/notes")
def notes():
    db = sqlite3.connect("notes.db")
    # INVICTI-TEST-21 SQL injection: the query is built by concatenation.
    rows = db.execute("SELECT * FROM notes WHERE owner = '" + request.args["owner"] + "'").fetchall()
    return str(rows)


@app.route("/ping")
def ping():
    # INVICTI-TEST-22 OS command injection: user input reaches a shell.
    return subprocess.check_output("ping -c 1 " + request.args["host"], shell=True)


@app.route("/import", methods=["POST"])
def import_note():
    # INVICTI-TEST-23 Insecure deserialization (pickle) of request data.
    note = pickle.loads(request.data)
    # INVICTI-TEST-24 Unsafe YAML load.
    meta = yaml.load(request.args.get("meta", "{}"), Loader=yaml.Loader)
    return str((note, meta))


@app.route("/file")
def read_file():
    # INVICTI-TEST-25 Path traversal: the name is joined to a base directory unchecked.
    return open(os.path.join("/srv/notes", request.args["name"])).read()


@app.route("/fetch")
def fetch():
    # INVICTI-TEST-26 SSRF, and TLS verification turned off.
    return requests.get(request.args["url"], verify=False).text


@app.route("/go")
def go():
    # INVICTI-TEST-27 Open redirect.
    return redirect(request.args["to"])


@app.route("/xml", methods=["POST"])
def parse_xml():
    # INVICTI-TEST-28 XML parsing of untrusted input with the standard library parser.
    return ET.fromstring(request.data).tag


@app.route("/hello")
def hello():
    # INVICTI-TEST-29 Reflected XSS: input is placed in HTML unescaped.
    return "<h1>Hello " + request.args.get("name", "") + "</h1>"


def hash_password(pw):
    # INVICTI-TEST-30 Weak hash (MD5), unsalted, used for passwords.
    return hashlib.md5(pw.encode()).hexdigest()


def reset_token():
    # INVICTI-TEST-31 Predictable token from a non-cryptographic generator.
    return "".join(random.choice("abcdef0123456789") for _ in range(16))


def scratch_file():
    # INVICTI-TEST-32 Insecure temporary file (race between name and open).
    return tempfile.mktemp()


if __name__ == "__main__":
    # INVICTI-TEST-33 Debug mode on, listening on every interface.
    app.run(host="0.0.0.0", debug=True)
