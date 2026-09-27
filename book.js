// ═══════════ BOOK READER ═══════════
// book-data.js holds the aigp-book.md manuscript as BOOK_MD (see build_book.py).
// Pages split at every '# ' heading and every '## Chapter N:' heading.
const BOOK_KEY = 'aigp-book-last';
const BOOK_SKIP_SECS = ['Key Terms', 'Further Reading'];
let BOOK_UNITS = [];
const bookSlug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60);

function loadBook() {
  const s = document.createElement('script');
  s.src = 'book-data.js';
  s.onload = () => { parseBook(); buildBookToc(); renderBookDocument(); renderBookFromHash(); };
  document.body.appendChild(s);
}

function parseBook() {
  let cur = null;
  BOOK_MD.split('\n').forEach(line => {
    const m = /^# (.+)/.exec(line) || /^## (Chapter \d+: .+)/.exec(line);
    if (m) { cur = { title: m[1], id: bookSlug(m[1]), level: line.startsWith('# ') ? 1 : 2, lines: [] }; BOOK_UNITS.push(cur); }
    if (cur) cur.lines.push(line);
  });
  BOOK_UNITS = BOOK_UNITS.filter(u => u.title !== 'Contents');  // the sidebar is the contents
  BOOK_UNITS.forEach(u => {
    u.md = u.lines.join('\n'); delete u.lines;
    u.sections = u.level === 2 ? [...u.md.matchAll(/^### (.+)$/gm)].map(m => m[1]).filter(t => !BOOK_SKIP_SECS.includes(t)) : [];
  });
}

function toggleBookToc() {
  document.getElementById('book-toc').classList.toggle('open');
  document.getElementById('book-toc-overlay').classList.toggle('open');
}

function bookTocItem(cls, text, onclick) {
  const d = document.createElement('div');
  d.className = cls; d.textContent = text; d.onclick = onclick;
  return d;
}

function buildBookToc() {
  const tree = document.getElementById('book-toc-tree');
  tree.innerHTML = '';
  let partKids = null;
  BOOK_UNITS.forEach(u => {
    if (u.level === 1 && /^Part /.test(u.title)) {
      const kids = document.createElement('div');
      kids.className = 'book-toc-kids';   // open by default: the sidebar has to show where you are
      const head = bookTocItem('book-toc-part', u.title, () => {
        const open = kids.style.display === 'none';
        kids.style.display = open ? 'block' : 'none';
        head.classList.toggle('collapsed', !open);
        if (open) showBookUnit(u.id);
      });
      head.dataset.unit = u.id; head.dataset.target = u.id;
      tree.append(head, kids);
      partKids = kids;
    } else if (u.level === 2 && partKids) {
      const ch = bookTocItem('book-toc-chapter', u.title, () => showBookUnit(u.id));
      ch.dataset.unit = u.id; ch.dataset.target = u.id;
      partKids.appendChild(ch);
      u.sections.forEach(t => {
        const a = document.createElement('a');
        a.className = 'book-toc-section'; a.textContent = t; a.href = '#book/' + u.id + '/' + bookSlug(t);
        a.dataset.target = u.id + '/' + bookSlug(t);
        a.onclick = e => { e.preventDefault(); showBookUnit(u.id, bookSlug(t)); };
        partKids.appendChild(a);
      });
    } else {
      partKids = null;
      const d = bookTocItem('book-toc-chapter', u.title, () => showBookUnit(u.id));
      d.dataset.unit = u.id; d.dataset.target = u.id;
      tree.appendChild(d);
    }
  });
}

// ── The reader: one continuous document, with a scroll-spy sidebar ──────────
// Every unit renders into a single scrollable document, so the book reads
// straight through and needs no next/back. BOOK_ANCHORS is the document-ordered
// list of places the sidebar can point at: one per unit heading, plus one per
// teaching section of a chapter. The spy binary-searches it for whatever sits
// under the top of the viewport.
let BOOK_ANCHORS = [];
let BOOK_CURRENT = null;

function renderBookDocument() {
  const el = document.getElementById('book-rendered');
  const used = new Set();
  const unique = base => { let id = base, n = 2; while (used.has(id)) id = base + '-' + n++; used.add(id); return id; };

  el.innerHTML = BOOK_UNITS
    .map(u => '<section class="book-unit" data-unit="' + u.id + '">' + marked.parse(u.md) + '</section>')
    .join('\n');

  // Index by position, not by selector, so two units that slugify alike cannot
  // steal each other's anchors.
  const secs = [...el.children];
  BOOK_ANCHORS = [];
  BOOK_UNITS.forEach((u, i) => {
    const sec = secs[i];
    if (!sec) return;
    const head = sec.querySelector('h1, h2');
    if (head) { head.id = unique('h-' + u.id); BOOK_ANCHORS.push({ el: head, target: u.id, pos: 0 }); }
    // Only a chapter lists its sections in the sidebar, so only those are spy targets.
    const wanted = new Set(u.sections.map(bookSlug));
    sec.querySelectorAll('h3').forEach(h => {
      const slug = bookSlug(h.textContent.trim());
      if (!wanted.has(slug)) return;
      h.id = unique('h-' + u.id + '-' + slug);
      BOOK_ANCHORS.push({ el: h, target: u.id + '/' + slug, pos: 0 });
    });
  });

  el.querySelectorAll('a[href^="http"]').forEach(a => { a.target = '_blank'; a.rel = 'noopener'; });
  bookMeasure(false);
}

// Measured against the scroll container rather than the page, so the offsets
// hold wherever the container sits in the layout. Skipped while the tab is
// hidden, when every rect would read as zero.
function bookMeasure(respy) {
  const content = document.getElementById('book-content');
  if (!content || !BOOK_ANCHORS.length) return;
  if (document.getElementById('panel-book').classList.contains('hidden')) return;
  const base = content.getBoundingClientRect().top - content.scrollTop;
  BOOK_ANCHORS.forEach(a => { a.pos = a.el.getBoundingClientRect().top - base; });
  if (respy) bookSpy();
}

function bookSpy() {
  if (!BOOK_ANCHORS.length) return;
  const y = document.getElementById('book-content').scrollTop + 16;
  let lo = 0, hi = BOOK_ANCHORS.length - 1, cur = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (BOOK_ANCHORS[mid].pos <= y) { cur = mid; lo = mid + 1; } else { hi = mid - 1; }
  }
  bookActivate(BOOK_ANCHORS[cur].target);
}

function bookActivate(target) {
  if (target === BOOK_CURRENT) return;
  BOOK_CURRENT = target;
  let hit = null;
  document.querySelectorAll('#book-toc-tree [data-target]').forEach(d => {
    const on = d.dataset.target === target;
    d.classList.toggle('active', on);
    if (on) hit = d;
  });
  if (hit) {
    const kids = hit.closest('.book-toc-kids');
    if (kids && kids.style.display === 'none') {   // a folded part cannot show where you are
      kids.style.display = 'block';
      const head = kids.previousElementSibling;
      if (head) head.classList.remove('collapsed');
    }
    bookKeepTocVisible(hit);
  }
  try { localStorage.setItem(BOOK_KEY, target); } catch (e) {}
  try { history.replaceState(null, '', '#book/' + target); } catch (e) {}
}

// Scroll the sidebar and nothing else, so the active entry stays in view.
function bookKeepTocVisible(el) {
  if (phone.matches) return;   // on a phone the sidebar is a modal drawer; nothing to keep in view
  const toc = document.getElementById('book-toc');
  const r = el.getBoundingClientRect(), c = toc.getBoundingClientRect();
  const pad = 12;
  if (r.top < c.top + pad) toc.scrollTop -= (c.top + pad - r.top);
  else if (r.bottom > c.bottom - pad) toc.scrollTop += (r.bottom - c.bottom + pad);
}

function showBookUnit(id, sec) {
  if (!BOOK_ANCHORS.length) return;
  const key = sec ? id + '/' + sec : id;
  const a = BOOK_ANCHORS.find(x => x.target === key) || BOOK_ANCHORS.find(x => x.target === id);
  if (!a) return;
  document.getElementById('book-content').scrollTop = Math.max(0, a.pos - 12);
  bookActivate(a.target);
  if (document.getElementById('book-toc').classList.contains('open')) toggleBookToc();
}

function renderBookFromHash() {
  if (typeof BOOK_MD === 'undefined' || !BOOK_ANCHORS.length) return;
  bookMeasure(false);   // the panel may have last been laid out at a different size
  if (window.location.hash.startsWith('#book/')) {
    const [id, sec] = window.location.hash.slice(6).split('/');
    showBookUnit(id, sec);
    return;
  }
  const [id, sec] = (localStorage.getItem(BOOK_KEY) || '').split('/');
  if (id) showBookUnit(id, sec);
}

// The book scrolls inside #book-content, so that is the element the spy listens to.
(() => {
  let ticking = false;
  document.getElementById('book-content').addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { ticking = false; bookSpy(); });
  }, { passive: true });
  addEventListener('resize', () => bookMeasure(true));
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => bookMeasure(true));
})();

function filterBookToc(val) {
  const q = val.toLowerCase();
  document.querySelectorAll('.book-toc-section').forEach(a => a.classList.toggle('hidden', q && !a.textContent.toLowerCase().includes(q)));
  if (q) document.querySelectorAll('.book-toc-kids').forEach(k => { k.style.display = 'block'; });
}

window.addEventListener('hashchange', () => {
  if (!document.getElementById('panel-book').classList.contains('hidden')) renderBookFromHash();
});