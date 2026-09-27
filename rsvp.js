// ═══════════ SPEED READER (RSVP) ═══════════
// A rapid serial visual presentation reader for the Book tab.
// Flashes words in a fixed spot with adjustable speed and chunk size,
// and highlights the corresponding text in the page.
//
// Desktop: always-visible pane to the right of the book content.
// Mobile (≤768px): full-screen overlay, driven by the same engine.

var RSVP = (function () {
  'use strict';

  // ── Constants ──────────────────────────────────────────────────────────
  var STORE_KEY = 'aigp-rsvp';
  var BLOCK_SELECTOR = 'h1, h2, h3, h4, p, li';
  var SKIP_SELECTOR  = 'table, pre, code';
  var GAP_MS         = 200;   // gap between blocks

  // ── State ──────────────────────────────────────────────────────────────
  var wpm           = 300;
  var wordsPerChunk = 2;
  var blocks        = [];       // [{el, tokens: [{text, start, end, parts}], fullText}]
  var blockIdx      = 0;
  var tokenIdx      = 0;
  var playing       = false;
  var timer         = null;
  var wrappedBlock  = null;     // currently wrapped block element
  var wrappedSpans  = [];       // .rsvp-w spans in wrapped block

  // ── DOM refs (populated by init) ───────────────────────────────────────
  var pane, display, chunk, beforeEl, pivotEl, afterEl;
  var wpmSlider, wpmVal, wordsSelect;
  var playBtn, prevBtn, nextBtn;
  var sectionLabel;

  // ── ORP ────────────────────────────────────────────────────────────────
  function orpIdx(text) {
    var n = text.length;
    return n <= 1 ? 0 : n <= 5 ? 1 : n <= 9 ? 2 : n <= 13 ? 3 : 4;
  }

  // ── Tokeniser ──────────────────────────────────────────────────────────
  // Walk all text nodes in a block, concatenate their text, find words
  // with /\S+/g, and map each word back to the node offsets it spans.
  // This naturally merges across adjacent text nodes when there is no
  // whitespace between them: "<strong>government</strong>-wide" → one token.
  function tokeniseBlock(el) {
    var walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    var textNodes = [];
    var node;
    while ((node = walker.nextNode())) {
      textNodes.push(node);
    }
    if (!textNodes.length) return { tokens: [], fullText: '' };

    // Build segments: position of each text node in the concatenated text
    var pos = 0;
    var segments = [];
    for (var i = 0; i < textNodes.length; i++) {
      var n = textNodes[i];
      var len = n.textContent.length;
      segments.push({ node: n, offset: 0, len: len, textStart: pos });
      pos += len;
    }
    var fullText = textNodes.map(function (n) { return n.textContent; }).join('');

    // Tokenise
    var tokens = [];
    var re = /\S+/g;
    var m;
    while ((m = re.exec(fullText)) !== null) {
      var wStart = m.index;
      var wEnd   = m.index + m[0].length;
      var parts   = [];

      for (var j = 0; j < segments.length; j++) {
        var seg     = segments[j];
        var segEnd  = seg.textStart + seg.len;
        if (wStart < segEnd && wEnd > seg.textStart) {
          var partStart = Math.max(wStart, seg.textStart) - seg.textStart + seg.offset;
          var partEnd   = Math.min(wEnd, segEnd) - seg.textStart + seg.offset;
          parts.push({ node: seg.node, start: partStart, end: partEnd });
        }
      }

      tokens.push({ text: m[0], start: wStart, end: wEnd, parts: parts });
    }

    return { tokens: tokens, fullText: fullText };
  }

  // Gather all readable blocks from the rendered document in order.
  function gatherBlocks() {
    var rendered = document.getElementById('book-rendered');
    if (!rendered) return;

    blocks = [];
    var candidates = rendered.querySelectorAll(BLOCK_SELECTOR);

    for (var i = 0; i < candidates.length; i++) {
      var el = candidates[i];

      // Skip if inside another candidate element
      var parent = el.parentElement;
      var skip = false;
      while (parent && parent !== rendered) {
        if (parent.matches(BLOCK_SELECTOR)) { skip = true; break; }
        parent = parent.parentElement;
      }
      if (skip) continue;

      // Skip if inside table, pre, or code
      parent = el.parentElement;
      while (parent && parent !== rendered) {
        if (parent.matches(SKIP_SELECTOR)) { skip = true; break; }
        parent = parent.parentElement;
      }
      if (skip) continue;

      var result = tokeniseBlock(el);
      if (result.tokens.length > 0) {
        blocks.push({ el: el, tokens: result.tokens, fullText: result.fullText });
      }
    }
  }

  // ── Highlighting ───────────────────────────────────────────────────────
  // Wrap each token in a block with <span class="rsvp-w" data-i="N">.
  // Ranges are grouped by text node and wrapped in reverse offset order
  // because wrapping forward invalidates the offsets of everything after it.
  function wrapBlock(el) {
    if (wrappedBlock === el) return;
    unwrapBlock();

    var b = blocks[blockIdx];
    if (!b || !b.tokens.length) return;

    // Collect all parts, grouped by node
    var byNode = [];
    for (var ti = 0; ti < b.tokens.length; ti++) {
      var parts = b.tokens[ti].parts;
      for (var pi = 0; pi < parts.length; pi++) {
        var p = parts[pi];
        byNode.push({ start: p.start, end: p.end, ti: ti, node: p.node });
      }
    }

    // Sort: group by node (using a stable sort that keeps same-node together),
    // then within each node, sort by start offset descending.
    // First, sort by some node ordering, then by start descending.
    // Simpler: just sort by start descending within each node by processing
    // one node at a time.

    // Group by node reference using an array-of-arrays
    var groups = [];
    var nodeMap = [];
    for (var g = 0; g < byNode.length; g++) {
      var item = byNode[g];
      var found = -1;
      for (var h = 0; h < nodeMap.length; h++) {
        if (nodeMap[h] === item.node) { found = h; break; }
      }
      if (found === -1) {
        found = nodeMap.length;
        nodeMap.push(item.node);
        groups.push([]);
      }
      groups[found].push(item);
    }

    wrappedSpans = [];
    for (var gi = 0; gi < groups.length; gi++) {
      var ranges = groups[gi];
      // Sort within this node by start offset descending
      ranges.sort(function (a, b) { return b.start - a.start; });

      for (var r = 0; r < ranges.length; r++) {
        var range = ranges[r];
        try {
          var domRange = document.createRange();
          domRange.setStart(range.node, range.start);
          domRange.setEnd(range.node, range.end);
          var span = document.createElement('span');
          span.className = 'rsvp-w';
          span.setAttribute('data-i', String(range.ti));
          domRange.surroundContents(span);
          wrappedSpans.push(span);
        } catch (e) {
          // surroundContents fails if the range crosses element boundaries.
          // Should not happen — parts are always within one text node.
        }
      }
    }

    wrappedBlock = el;
  }

  // Remove all .rsvp-w spans from the currently wrapped block and merge
  // split text nodes back with normalize().
  function unwrapBlock() {
    if (!wrappedBlock) return;

    // Clear highlights first
    var hl = wrappedBlock.querySelectorAll('.rsvp-hl');
    for (var i = 0; i < hl.length; i++) { hl[i].classList.remove('rsvp-hl'); }

    // Unwrap: collect spans, then replace each with its text content
    var spans = wrappedBlock.querySelectorAll('.rsvp-w');
    var spanArr = [];
    for (var j = 0; j < spans.length; j++) { spanArr.push(spans[j]); }
    for (var k = spanArr.length - 1; k >= 0; k--) {
      var s = spanArr[k];
      s.replaceWith(document.createTextNode(s.textContent));
    }

    wrappedBlock.normalize();
    wrappedBlock  = null;
    wrappedSpans = [];
  }

  // Highlight the spans whose data-i matches one of the given token indices.
  function highlightTokens(indices) {
    // Clear existing highlights
    var hl = document.querySelectorAll('.rsvp-hl');
    for (var i = 0; i < hl.length; i++) { hl[i].classList.remove('rsvp-hl'); }

    // Add new highlights
    var set = {};
    for (var j = 0; j < indices.length; j++) { set[indices[j]] = true; }

    for (var k = 0; k < wrappedSpans.length; k++) {
      var span = wrappedSpans[k];
      if (set[span.getAttribute('data-i')]) {
        span.classList.add('rsvp-hl');
      }
    }
  }

  // ── Display ────────────────────────────────────────────────────────────
  // Render the current chunk in the pane, using the original text from the
  // block's fullText so the pane text exactly matches the DOM text (AC2).
  function showChunk(tokens) {
    if (!tokens.length) return;

    var b = blocks[blockIdx];
    // Extract the exact text from fullText, normalising internal whitespace
    var raw = b.fullText.substring(tokens[0].start, tokens[tokens.length - 1].end);
    // Replace any whitespace (newlines, tabs, multiple spaces) with single spaces
    var text = raw.replace(/\s+/g, ' ').trim();

    var pivot = orpIdx(text);
    // orpIdx works on the whole chunk, so on a multi-word chunk it can land on the
    // space between two words. A space is not a pivot: it renders zero-width and
    // marks nothing, so walk forward to the next real character.
    while (pivot < text.length && /\s/.test(text.charAt(pivot))) pivot++;
    if (pivot >= text.length) pivot = Math.max(0, text.length - 1);

    beforeEl.textContent = text.substring(0, pivot);
    pivotEl.textContent  = text.charAt(pivot) || '';
    afterEl.textContent  = text.substring(pivot + 1);

    // Align the pivot letter at ~35% of the display width, and keep the whole chunk
    // inside the display.
    //
    // Two traps. First, getBoundingClientRect() on the previous chunk still carries its
    // transform, so measuring before clearing it poisons the result and the error
    // changes from chunk to chunk - which is what threw words off the left and right
    // edges of the pane. Clear the transform, then measure. Second, a chunk can be
    // wider than the display, where pivot alignment is meaningless: shrink the text to
    // fit rather than letting it slide under the clip.
    chunk.style.transform = 'none';
    chunk.style.fontSize  = '';

    var dispRect = display.getBoundingClientRect();
    var pad      = 10;
    var availW   = dispRect.width - pad * 2;

    if (availW > 0 && chunk.getBoundingClientRect().width > availW) {
      var baseFont = parseFloat(getComputedStyle(chunk).fontSize) || 32;
      var fitted   = Math.max(13, Math.floor(baseFont * availW / chunk.getBoundingClientRect().width));
      chunk.style.fontSize = fitted + 'px';
    }

    var chunkRect = chunk.getBoundingClientRect();
    var pivotRect = pivotEl.getBoundingClientRect();
    var offset    = pivotRect.left - (dispRect.left + dispRect.width * 0.35);

    // Clamp so that, after translating by -offset, the chunk still sits inside the
    // display. Offset too small pushes text off the left edge, too large off the right.
    var maxOffset = chunkRect.left - dispRect.left - pad;
    var minOffset = chunkRect.left + chunkRect.width - dispRect.right + pad;
    if (minOffset > maxOffset) {
      offset = (minOffset + maxOffset) / 2;   // cannot both pivot-align and fit: centre it
    } else {
      offset = Math.min(Math.max(offset, minOffset), maxOffset);
    }

    chunk.style.transform = 'translateX(' + (-offset) + 'px)';
  }

  // ── Dwell ──────────────────────────────────────────────────────────────
  function computeDwell(tokens) {
    var k    = tokens.length;
    var base = (k * 60000) / wpm;

    var last = tokens[tokens.length - 1].text;
    var mult = 1.0;

    // Sentence-final: .!? optionally followed by closing quote or bracket
    if (/[.!?][»"'\\)\]]?$/.test(last)) {
      mult = 2.0;
    } else if (/[,;:][»"'\\)\]]?$/.test(last)) {
      mult = 1.4;
    }

    // Long token (>12 chars) — combine multiplicatively, capped at 3.0
    for (var i = 0; i < tokens.length; i++) {
      if (tokens[i].text.length > 12) {
        mult = mult > 1.0 ? mult * 1.15 : 1.15;
        break;
      }
    }

    return base * Math.min(mult, 3.0);
  }

  // ── Current chunk ──────────────────────────────────────────────────────
  function currentChunkTokens() {
    var b = blocks[blockIdx];
    if (!b) return [];
    var end = Math.min(tokenIdx + wordsPerChunk, b.tokens.length);
    return b.tokens.slice(tokenIdx, end);
  }

  function currentChunkIndices() {
    var b = blocks[blockIdx];
    if (!b) return [];
    var end = Math.min(tokenIdx + wordsPerChunk, b.tokens.length);
    var indices = [];
    for (var i = tokenIdx; i < end; i++) { indices.push(i); }
    return indices;
  }

  // ── Navigation ─────────────────────────────────────────────────────────
  function advanceBy(chunks) {
    if (!blocks.length) return;
    var steps = chunks * wordsPerChunk;

    tokenIdx += steps;

    while (tokenIdx >= blocks[blockIdx].tokens.length) {
      tokenIdx -= blocks[blockIdx].tokens.length;
      blockIdx++;
      if (blockIdx >= blocks.length) {
        blockIdx = blocks.length - 1;
        tokenIdx = blocks[blockIdx].tokens.length; // past-the-end
        pause();
        return;
      }
    }

    _enterBlock();
  }

  function retreatBy(chunks) {
    if (!blocks.length) return;
    var steps = chunks * wordsPerChunk;
    tokenIdx -= steps;

    while (tokenIdx < 0) {
      blockIdx--;
      if (blockIdx < 0) {
        blockIdx = 0;
        tokenIdx = 0;
        _enterBlock();
        return;
      }
      tokenIdx += blocks[blockIdx].tokens.length;
    }

    _enterBlock();
  }

  function _enterBlock() {
    var b = blocks[blockIdx];
    if (!b) return;
    if (wrappedBlock !== b.el) {
      unwrapBlock();
      wrapBlock(b.el);
    }
  }

  // ── Scroll ─────────────────────────────────────────────────────────────
  // Scroll book-content instantly so the highlighted text is in the middle band.
  function scrollToHighlight() {
    if (!wrappedBlock || !wrappedSpans.length) return;
    // Only scroll on desktop (on mobile the overlay covers the page)
    if (phone.matches) return;

    var hl = wrappedBlock.querySelector('.rsvp-hl');
    if (!hl) return;

    var content = document.getElementById('book-content');
    if (!content) return;

    var contentRect = content.getBoundingClientRect();
    var hlRect      = hl.getBoundingClientRect();
    var middleTop   = contentRect.top + contentRect.height * 0.3;
    var middleBot   = contentRect.top + contentRect.height * 0.7;

    if (hlRect.top < middleTop || hlRect.bottom > middleBot) {
      var target = content.scrollTop + (hlRect.top - contentRect.top) - contentRect.height * 0.4;
      content.scrollTop = Math.max(0, target);
    }
  }

  // ── Playback ───────────────────────────────────────────────────────────
  function play() {
    if (playing) return;
    if (!blocks.length) return;
    if (tokenIdx >= blocks[blockIdx].tokens.length) {
      // At end — restart
      blockIdx = 0;
      tokenIdx = 0;
      unwrapBlock();
      wrapBlock(blocks[0].el);
    }
    playing = true;
    _updatePlayBtn();
    tick();
  }

  function pause() {
    playing = false;
    if (timer) { clearTimeout(timer); timer = null; }
    _updatePlayBtn();
    _save();
  }

  function toggle() {
    if (playing) { pause(); }
    else {
      if (phone.matches) {
        if (!pane.classList.contains('open')) {
          pane.classList.add('open');
        }
        play();
      } else {
        play();
      }
    }
  }

  function tick() {
    if (!playing) return;

    var tokens  = currentChunkTokens();
    if (!tokens.length) { pause(); return; }

    var indices = currentChunkIndices();
    showChunk(tokens);
    highlightTokens(indices);
    scrollToHighlight();

    var dwell = computeDwell(tokens);

    // Add gap if this chunk ends at a block boundary
    var isLastInBlock = (tokenIdx + tokens.length >= blocks[blockIdx].tokens.length);
    if (isLastInBlock && blockIdx + 1 < blocks.length) {
      dwell += GAP_MS;
    }

    timer = setTimeout(function () {
      advanceBy(1);
      if (playing) {
        _save();
        tick();
      }
    }, dwell);
  }

  function _updatePlayBtn() {
    if (playBtn) playBtn.textContent = playing ? '\u23F8' : '\u25B6';
  }

  function prevChunk() {
    if (playing) pause();
    retreatBy(1);
    var tokens = currentChunkTokens();
    if (tokens.length) {
      showChunk(tokens);
      highlightTokens(currentChunkIndices());
      scrollToHighlight();
    }
    _save();
  }

  function nextChunk() {
    if (playing) pause();
    // Don't advance past the end
    if (blockIdx >= blocks.length - 1 &&
        tokenIdx + wordsPerChunk >= blocks[blockIdx].tokens.length) {
      return;
    }
    advanceBy(1);
    var tokens = currentChunkTokens();
    if (tokens.length) {
      showChunk(tokens);
      highlightTokens(currentChunkIndices());
      scrollToHighlight();
    }
    _save();
  }

  // ── Mobile ─────────────────────────────────────────────────────────────
  function closeMobile() {
    pane.classList.remove('open');
    if (playing) pause();
  }

  // ── Persistence ────────────────────────────────────────────────────────
  function _save() {
    if (!blocks.length) return;
    try {
      var cur    = blocks[blockIdx];
      var docRev = typeof BOOK_MD !== 'undefined' ? BOOK_MD.length : 0;
      var anchor = '';

      // Find the section anchor for this block
      var heading = _findHeading(cur.el);
      if (heading && typeof BOOK_ANCHORS !== 'undefined') {
        for (var i = 0; i < BOOK_ANCHORS.length; i++) {
          if (BOOK_ANCHORS[i].el === heading) {
            anchor = BOOK_ANCHORS[i].target;
            break;
          }
        }
      }

      var data = {
        wpm: wpm,
        words: wordsPerChunk,
        blockIdx: blockIdx,
        tokenIdx: tokenIdx,
        anchor: anchor,
        docRev: docRev
      };
      localStorage.setItem(STORE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function _load() {
    try {
      var raw = localStorage.getItem(STORE_KEY);
      if (!raw) return false;
      var data = JSON.parse(raw);
      if (!data || typeof data !== 'object') return false;

      // Restore settings
      if (typeof data.wpm === 'number' && data.wpm >= 100 && data.wpm <= 1000) {
        wpm = data.wpm;
      }
      if ([1, 2, 3, 5].indexOf(data.words) !== -1) {
        wordsPerChunk = data.words;
      }

      // Restore position if document hasn't changed
      var docRev = typeof BOOK_MD !== 'undefined' ? BOOK_MD.length : 0;
      if (data.docRev === docRev && typeof data.blockIdx === 'number' && typeof data.tokenIdx === 'number') {
        if (data.blockIdx >= 0 && data.blockIdx < blocks.length) {
          blockIdx = data.blockIdx;
          tokenIdx = Math.min(data.tokenIdx, blocks[blockIdx].tokens.length);
          return true;
        }
      }

      // Try to find by anchor (document changed, re-slugify, etc.)
      if (data.anchor && blocks.length && typeof BOOK_ANCHORS !== 'undefined') {
        for (var i = 0; i < blocks.length; i++) {
          var heading = _findHeading(blocks[i].el);
          if (heading) {
            for (var j = 0; j < BOOK_ANCHORS.length; j++) {
              if (BOOK_ANCHORS[j].el === heading && BOOK_ANCHORS[j].target === data.anchor) {
                blockIdx = i;
                tokenIdx = 0;
                return true;
              }
            }
          }
        }
      }

      return false;
    } catch (e) {
      return false;
    }
  }

  // Find the nearest preceding h1-h3 heading for a block element.
  // Walks siblings and parents to locate the section this block belongs to.
  function _findHeading(el) {
    // Walk previous siblings
    var prev = el.previousElementSibling;
    while (prev) {
      if (/^H[1-3]$/.test(prev.tagName)) return prev;
      // If we hit another block element (p, li, h4), check if IT has a heading
      prev = prev.previousElementSibling;
    }
    // Check the parent section for a heading
    var parent = el.closest('.book-unit');
    if (parent) {
      var h = parent.querySelector('h1, h2, h3');
      if (h) return h;
    }
    return null;
  }

  // ── Controls ───────────────────────────────────────────────────────────
  function setWPM(val) {
    wpm = Math.max(100, Math.min(1000, val | 0));
    if (wpmSlider) wpmSlider.value = wpm;
    if (wpmVal) wpmVal.textContent = wpm;
    _save();
  }

  function setWords(val) {
    wordsPerChunk = val | 0;
    if (wordsSelect) wordsSelect.value = String(wordsPerChunk);
    // Refresh the current display with new chunk size
    if (blocks.length && blockIdx < blocks.length) {
      _enterBlock();
      var tokens = currentChunkTokens();
      if (tokens.length) {
        showChunk(tokens);
        highlightTokens(currentChunkIndices());
      }
    }
    _save();
  }

  // ── Section label ──────────────────────────────────────────────────────
  function updateSectionLabel(target) {
    if (!sectionLabel) return;
    if (!target) { sectionLabel.textContent = ''; return; }
    var el = document.querySelector('#book-toc-tree [data-target="' + target + '"]');
    sectionLabel.textContent = el ? el.textContent : '';
  }

  // ── Init / Reinit ──────────────────────────────────────────────────────
  function init() {
    // Cache DOM refs
    pane         = document.getElementById('rsvp-pane');
    display      = document.getElementById('rsvp-display');
    chunk        = document.getElementById('rsvp-chunk');
    beforeEl     = document.getElementById('rsvp-before');
    pivotEl      = document.getElementById('rsvp-pivot');
    afterEl      = document.getElementById('rsvp-after');
    wpmSlider    = document.getElementById('rsvp-wpm');
    wpmVal       = document.getElementById('rsvp-wpm-val');
    wordsSelect  = document.getElementById('rsvp-words');
    playBtn      = document.getElementById('rsvp-play');
    prevBtn      = document.getElementById('rsvp-prev');
    nextBtn      = document.getElementById('rsvp-next');
    sectionLabel = document.getElementById('book-section-label');

    if (!pane) return; // pane not in DOM yet

    // Stop any running playback
    if (playing) pause();
    unwrapBlock();

    // Re-gather blocks (DOM may have changed)
    gatherBlocks();

    var restored = _load();

    // Apply loaded settings to UI
    if (wpmSlider) wpmSlider.value = wpm;
    if (wpmVal) wpmVal.textContent = wpm;
    if (wordsSelect) wordsSelect.value = String(wordsPerChunk);

    if (!restored && blocks.length) {
      blockIdx = 0;
      tokenIdx = 0;
    }

    // Clamp position to valid range
    if (blockIdx >= blocks.length) { blockIdx = 0; tokenIdx = 0; }
    if (blocks.length && tokenIdx > blocks[blockIdx].tokens.length) {
      tokenIdx = blocks[blockIdx].tokens.length;
    }

    // Show initial chunk
    if (blocks.length && blockIdx < blocks.length) {
      wrapBlock(blocks[blockIdx].el);
      var tokens = currentChunkTokens();
      if (tokens.length) {
        showChunk(tokens);
        highlightTokens(currentChunkIndices());
      }
    }

    // Wire events
    if (wpmSlider) {
      wpmSlider.addEventListener('input', function () { setWPM(this.value); });
    }
    if (wordsSelect) {
      wordsSelect.addEventListener('change', function () { setWords(this.value); });
    }
    if (playBtn) {
      playBtn.addEventListener('click', toggle);
    }
    if (prevBtn) {
      prevBtn.addEventListener('click', prevChunk);
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', nextChunk);
    }

    // Mobile close button
    var closeBtn = document.getElementById('rsvp-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeMobile);
    }

    _updatePlayBtn();
  }

  // Re-gather blocks and re-init (called after book re-render)
  function reinit() {
    init();
  }

  // ── Keyboard ───────────────────────────────────────────────────────────
  // Called from keyboard.js. Checks that the Book tab is active and focus
  // is not in an input (guards against keyboard leaks — AC7).
  function handleKey(e) {
    // AC7: only respond while the Book tab is active
    var panel = document.getElementById('panel-book');
    if (!panel || panel.classList.contains('hidden')) {
      return false;
    }
    // AC7: don't handle if focus is in an input/select
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
      return false;
    }

    var k = e.key;
    if (k === ' ') {
      e.preventDefault();
      toggle();
      return true;
    }
    if (k === 'ArrowRight') {
      e.preventDefault();
      nextChunk();
      return true;
    }
    if (k === 'ArrowLeft') {
      e.preventDefault();
      prevChunk();
      return true;
    }
    return false;
  }

  // ── Public API ─────────────────────────────────────────────────────────
  return {
    init: init,
    reinit: reinit,
    updateSectionLabel: updateSectionLabel,
    handleKey: handleKey,
    toggle: toggle,
    play: play,
    pause: pause,
    get playing() { return playing; }
  };
})();