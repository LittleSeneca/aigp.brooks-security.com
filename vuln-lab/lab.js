// A Node helper. Never run: it exists for the SAST scan (see README.md).
const { exec } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');

// INVICTI-TEST-40 Hardcoded JWT signing secret.
const JWT_SECRET = 'super-secret-signing-key';

// INVICTI-TEST-41 Command injection through exec with a concatenated string.
function convert(name, cb) { exec('convert ' + name + ' out.png', cb); }

// INVICTI-TEST-42 Prototype pollution: a recursive merge with no key filter.
function merge(target, src) {
  for (const k in src) {
    if (typeof src[k] === 'object' && src[k] !== null) { target[k] = merge(target[k] || {}, src[k]); }
    else { target[k] = src[k]; }
  }
  return target;
}

// INVICTI-TEST-43 ReDoS: nested quantifiers backtrack catastrophically.
const SLUG = /^(([a-z0-9]+)+-?)+$/;

// INVICTI-TEST-44 Weak cipher and a fixed IV.
function seal(text) {
  const c = crypto.createCipheriv('des-ecb', Buffer.from('8bytekey'), null);
  return c.update(text, 'utf8', 'hex') + c.final('hex');
}

// INVICTI-TEST-45 Path traversal through a user-supplied file name.
function readNote(name) { return fs.readFileSync('/srv/notes/' + name, 'utf8'); }

// INVICTI-TEST-46 eval of a string built from input, and innerHTML with the same input.
function render(el, expr) { el.innerHTML = '<b>' + eval(expr) + '</b>'; }

module.exports = { convert, merge, SLUG, seal, readNote, render, JWT_SECRET };
