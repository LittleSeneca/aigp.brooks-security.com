// ═══════════ MIND MAP (radial map or indented tree from map-data.js) ═══════════
let mmSvg, mmZoom, mmSelectedNode = null, mmFitTransform = null, mmView = 'radial'; // phones: indented only
let quizNodeFilter = null, fcNodeFilter = null;
const DOMAIN_COLORS = { d1:'#6c8cff', d2:'#a78bfa', d3:'#34d399', d4:'#f472b6' };
const MM_BY_ID = Object.fromEntries(MM_NODES.map(n => [n.id, n]));
const FC_BY_TERM = Object.fromEntries(FLASHCARDS.map(f => [f.term, f.definition]));
// per-node search corpus: title + definition + full source notes
const MM_SEARCH_TEXT = Object.fromEntries(MM_NODES.map(n => {
  let t = n.label;
  if (n.term !== undefined) t += ' ' + (FC_BY_TERM[n.term] || '');
  if (NODE_DETAILS[n.id]) t += ' ' + NODE_DETAILS[n.id];
  return [n.id, t.toLowerCase()];
}));

// Question ids / flashcard terms per node, rolled up through descendants
const NODE_QS = {}, NODE_FCS = {}, MM_CHILDREN = {};
(function buildNodeIndexes(){
  MM_NODES.forEach(n => {
    NODE_QS[n.id] = new Set(); NODE_FCS[n.id] = new Set();
    if (n.parent) (MM_CHILDREN[n.parent] = MM_CHILDREN[n.parent] || []).push(n.id);
  });
  for (const [qid, tags] of Object.entries(QUESTION_TAGS)) tags.forEach(t => NODE_QS[t]?.add(qid));
  // cards attach ONLY at their leaf; ancestors get them via rollup, so a
  // node's card set is exactly its subtree's leaves — all leaves green ⇒ node green
  MM_NODES.forEach(n => { if (n.term !== undefined) NODE_FCS[n.id].add(n.term); });
  (function roll(id){
    (MM_CHILDREN[id] || []).forEach(c => {
      roll(c);
      NODE_QS[c].forEach(q => NODE_QS[id].add(q));
      NODE_FCS[c].forEach(f => NODE_FCS[id].add(f));
    });
  })('root');
  ALL_QUESTIONS.forEach(q => NODE_QS.root.add(q.id));
  FLASHCARDS.forEach(f => NODE_FCS.root.add(f.term));
})();

function nodeScore(id) {
  let answered = 0, correct = 0, rated = 0, mastered = 0;
  NODE_QS[id].forEach(qid => { const p = progress[qid]; if (p) { answered++; if (p.correct) correct++; } });
  NODE_FCS[id].forEach(t => { const m = mmMastery[t]; if (m !== undefined) rated++; if (m === true) mastered++; });
  const termTotal = NODE_FCS[id].size;
  // blended score: correct answers + mastered terms, over answered questions +
  // ALL descendant terms — unrated/unmastered leaves hold ancestors back from green
  const denom = answered + termTotal;
  const pct = denom ? Math.round((correct + mastered) / denom * 100) : 0;
  return { total: NODE_QS[id].size, answered, correct, rated, mastered, termTotal, pct };
}

function lerpHex(a, b, t) {
  const pa = parseInt(a.slice(1), 16), pb = parseInt(b.slice(1), 16);
  const ch = s => [(s >> 16) & 255, (s >> 8) & 255, s & 255];
  const [r1, g1, b1] = ch(pa), [r2, g2, b2] = ch(pb);
  const m = (x, y) => Math.round(x + (y - x) * t);
  return `rgb(${m(r1, r2)},${m(g1, g2)},${m(b1, b2)})`;
}

let mmMastery = {};
// one formula everywhere — term leaves blend their matched questions with
// their own flashcard rating, exactly like inner nodes blend their subtrees
function nodeColor(id) {
  const s = nodeScore(id);
  if (!s.answered && !s.rated) return '#4a4d5a';           // grey: not tested yet
  const p = s.pct / 100;
  return p < 0.5 ? lerpHex('#e74c3c', '#f39c12', p * 2)    // red → amber
                 : lerpHex('#f39c12', '#2ecc71', (p - 0.5) * 2); // amber → green
}
// labels follow the same rule, except untouched ones keep their CSS grey: the node grey is too dark to read as text
const mmTextFill = d => { const s = nodeScore(d.data.id); return s.answered || s.rated ? nodeColor(d.data.id) : null; };

function nodeDomain(id) { // walk up to the d1-d4 ancestor
  let n = MM_BY_ID[id];
  while (n && !DOMAIN_COLORS[n.id]) n = MM_BY_ID[n.parent];
  return n ? n.id : null;
}

const mmStroke = d => d.data.term !== undefined ? 'none' : d.depth === 0 ? '#6c8cff' : '#5a5d6a';
function mmTitle(d) { // hover text, both views
  if (d.data.term !== undefined) {
    const m = mmMastery[d.data.term];
    const status = m === true ? 'mastered' : m === false ? 'needs review' : 'unrated';
    const s = nodeScore(d.data.id);
    const qs = s.total ? ` · ${s.correct}/${s.answered} of ${s.total} questions` : '';
    return `${d.data.term} (${status}${qs})\n${FC_BY_TERM[d.data.term] || ''}`;
  }
  const s = nodeScore(d.data.id);
  return `${d.data.label.replace(/\n/g, ' ')}\n${s.answered}/${s.total} answered · ${s.mastered}/${s.termTotal} terms mastered · score ${s.pct}%`;
}

function buildMindMap() {
  const container = document.getElementById('mindmap-graph');
  container.innerHTML = '';
  const W = container.clientWidth || 1000, H = container.clientHeight || 700;

  // hierarchy from MM_NODES
  const wrap = Object.fromEntries(MM_NODES.map(n => [n.id, { ...n, children: [] }]));
  MM_NODES.forEach(n => { if (n.parent) wrap[n.parent].children.push(wrap[n.id]); });
  const root = d3.hierarchy(wrap.root);
  mmMastery = getMastery();
  // the open drawer's counts may predate a quiz or flashcard session
  document.querySelectorAll('.mm-acts').forEach(el => { el.outerHTML = mmActs(el.dataset.id); });
  const indent = mmView === 'indent' || phone.matches;
  container.classList.toggle('indent', indent);
  if (indent) buildIndentTree(container, root, W); else buildRadialMap(container, root, W, H);
  // rebuilt on every tab or view switch: keep the search dimming and the selected node's highlight
  filterMMNodes();
  if (mmSelectedNode) highlightMM(mmSelectedNode);
}

function setMMView(v) {
  mmView = v;
  ['radial', 'indent'].forEach(x => document.getElementById('mm-view-' + x).classList.toggle('active', x === v));
  buildMindMap();
}
// crossing the phone breakpoint (resize, rotation) swaps the view
phone.addEventListener('change', () => {
  if (!document.getElementById('panel-mindmap').classList.contains('hidden')) buildMindMap();
});

// Indented tree after https://observablehq.com/@d3/indented-tree: a row per node, Score column on the right
function buildIndentTree(container, root, W) {
  const S = 24, I = 18; // row height, indent per level
  const scoreX = Math.min(W - 32, 500), labelX = d => d.depth * I + 10;
  const nodes = []; // pre-order, so rows (and tab order) read top to bottom
  root.eachBefore(d => { d.index = nodes.length; nodes.push(d); });

  const svg = d3.select(container).append('svg').style('height', (nodes.length + 2) * S + 'px')
    .on('click', () => selectMMNode(null)); // rows stop propagation, so this is empty space
  const g = svg.append('g').attr('transform', `translate(16,${S * 1.5})`);
  g.append('text').attr('class', 'mm-score').attr('x', scoreX).attr('y', -S).attr('dy', '0.32em')
    .attr('text-anchor', 'end').attr('font-weight', 600).text('Score');
  // reversed so each sibling's shorter elbow paints over the longer ones: every stretch
  // of the shared vertical carries the color of the child it leads to
  g.append('g').selectAll('path').data(root.links().reverse()).join('path')
    .attr('class', 'mm-link')
    .style('stroke', d => nodeColor(d.target.data.id))
    .attr('d', d => `M${d.source.depth * I},${d.source.index * S}V${d.target.index * S}h${I}`);

  const open = (e, d) => { e.stopPropagation(); selectMMNode(d.data.id); };
  const node = g.append('g').selectAll('g').data(nodes).join('g')
    .attr('class', 'mm-node')
    .attr('transform', d => `translate(0,${d.index * S})`)
    .attr('tabindex', 0).attr('role', 'button')
    .on('click', open)
    .on('keydown', (e, d) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(e, d); } });
  node.append('title').text(mmTitle);
  node.append('rect').attr('x', -16).attr('y', -S / 2).attr('width', W).attr('height', S).attr('fill', 'transparent');
  node.append('circle').attr('cx', d => d.depth * I).attr('r', d => 6 - d.depth * 0.75)
    .attr('fill', d => nodeColor(d.data.id)).attr('stroke', mmStroke);
  node.append('text')
    .attr('class', d => d.depth <= 2 ? 'node-label' : d.data.term !== undefined ? 'term-label' : null)
    .attr('x', labelX).attr('dy', '0.32em')
    .style('fill', mmTextFill)
    .text(d => d.data.label.replace(/\n/g, ' '))
    .each(function (d) { // ellipsize labels that would run into the Score column (narrow phones)
      for (let t = this.textContent; t && this.getComputedTextLength() > scoreX - 40 - labelX(d); )
        this.textContent = (t = t.slice(0, -1).trimEnd()) + '…';
    });
  node.append('text').attr('class', 'mm-score').attr('x', scoreX).attr('dy', '0.32em').attr('text-anchor', 'end')
    .style('fill', mmTextFill)
    .text(d => { const s = nodeScore(d.data.id); return s.answered || s.rated ? s.pct + '%' : '—'; });

  // back from a card's question or flashcard button with the drawer still open: show that row
  const sel = nodes.find(d => d.data.id === mmSelectedNode);
  if (sel) container.scrollTop = (sel.index + 1.5) * S - container.clientHeight / 2;
}

function buildRadialMap(container, root, W, H) {
  // radius grows with leaf count so outer key-term labels don't collide;
  // 16px of arc per leaf keeps labels clear of each other
  const R = Math.max(Math.min(W, H) / 2 - 40, root.leaves().length * 16 / (2 * Math.PI));
  d3.tree().size([2 * Math.PI, R]).separation((a, b) => (a.parent === b.parent ? 1 : 2) / a.depth)(root);

  mmSvg = d3.select(container).append('svg').attr('viewBox', [-W / 2, -H / 2, W, H]);
  const g = mmSvg.append('g');
  mmZoom = d3.zoom().scaleExtent([0.15, 6]).on('zoom', e => g.attr('transform', e.transform));
  mmSvg.call(mmZoom);
  mmSvg.on('click', e => { if (e.target === mmSvg.node()) selectMMNode(null); });
  // start zoomed to fit the whole map
  const fit = Math.min(1, Math.min(W, H) / (2 * R + 280));
  mmFitTransform = d3.zoomIdentity.scale(fit);
  mmSvg.call(mmZoom.transform, mmFitTransform);

  // a link takes its child's color: grey until touched, then that subtree's rolled-up score
  g.append('g').selectAll('path').data(root.links()).join('path')
    .attr('class', 'mm-link')
    .style('stroke', d => nodeColor(d.target.data.id)) // style, not attr: .mm-link's CSS stroke beats attributes
    .attr('stroke-opacity', d => d.target.depth === 1 ? 0.9 : 0.5)
    .attr('stroke-width', d => d.target.depth === 1 ? 2 : 1.2)
    .attr('d', d3.linkRadial().angle(d => d.x).radius(d => d.y));

  const radius = d => d.data.term !== undefined ? 3
    : d.depth === 0 ? 26 : d.depth === 1 ? 15 : d.depth === 2 ? 9
    : Math.min(8, 3.5 + Math.sqrt(NODE_QS[d.data.id].size) * 0.45);

  const node = g.append('g').selectAll('g').data(root.descendants()).join('g')
    .attr('class', 'mm-node')
    .attr('transform', d => d.depth === 0 ? null :
      `rotate(${d.x * 180 / Math.PI - 90}) translate(${d.y},0)`);

  node.append('circle')
    .attr('r', radius)
    .attr('fill', d => nodeColor(d.data.id))
    .attr('stroke', mmStroke)
    .on('click', (e, d) => { e.stopPropagation(); selectMMNode(d.data.id); })
    .append('title').text(mmTitle);

  node.append('text')
    .attr('class', d => d.depth <= 1 ? 'node-label' : d.data.term !== undefined ? 'term-label' : null)
    .attr('dy', d => d.depth === 1 ? -(radius(d) + 8) : '0.32em')
    .attr('x', d => d.depth <= 1 ? 0 : (d.x < Math.PI) === !d.children ? radius(d) + 5 : -(radius(d) + 5))
    .attr('text-anchor', d => d.depth <= 1 ? 'middle' : (d.x < Math.PI) === !d.children ? 'start' : 'end')
    .attr('transform', d => d.depth === 0 ? null
      : d.depth === 1 ? `rotate(${90 - d.x * 180 / Math.PI})`   // horizontal domain labels
      : d.x >= Math.PI ? 'rotate(180)' : null)
    .style('fill', d => d.depth ? mmTextFill(d) : null) // AIGP's label sits on its own circle, so it stays light
    .text(d => d.data.label.replace(/\n/g, ' '));
}

function renderNodeDetail(id) {
  const n = MM_BY_ID[id];
  let md = NODE_DETAILS[id];
  if (md === undefined && n.term !== undefined) {
    const m = mmMastery[n.term];
    const status = m === true ? '✓ mastered' : m === false ? '✗ needs review' : 'unrated';
    md = `> [!source] Flashcards\n\n**${n.term}** — *${status}*\n\n${FC_BY_TERM[n.term] || ''}`;
  }
  if (md === undefined) return '<p>No notes for this node.</p>';
  md = md
    .replace(/^> \[!source\] (.+)$/gm, '<div class="src-badge">📄 $1</div>')
    .replace(/^> \[!(\w+)\][+-]? ?(.*)$/gm, (_, t, rest) =>
      `> **${t[0].toUpperCase() + t.slice(1)}${rest ? ':' : ''}** ${rest}`)
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '<span class="wikilink">$2</span>')
    .replace(/\[\[([^\]]+)\]\]/g, '<span class="wikilink">$1</span>');
  // fold the verbatim extracts (up to 135k characters) so the child cards below stay in sight
  const [text, src] = md.split(/\n## Source Notes\n([\s\S]*)/);
  return marked.parse(text) + (src ? `<details class="mm-src"><summary><svg class="ico mm-chev" aria-hidden="true"><use href="#i-chevron"/></svg>📄 Source notes</summary>${marked.parse(src)}</details>` : '');
}

// Drawer tree: each child is a collapsed card whose text and own cards are built on first open
const mmDepth = id => MM_BY_ID[id].parent ? 1 + mmDepth(MM_BY_ID[id].parent) : 0;
const mmSection = id => `<details class="mm-sec${MM_CHILDREN[id] ? '' : ' leaf'}" data-id="${id}" style="--d:${mmDepth(id)}"><summary><svg class="ico mm-chev" aria-hidden="true"><use href="#i-chevron"/></svg>${esc(MM_BY_ID[id].label.replace(/\n/g, ' '))}</summary></details>`;
// a card's question and flashcard buttons, labeled correct/total and mastered/total (the score still colors the map)
function mmActs(id) {
  const s = nodeScore(id);
  const btn = (go, icon, tip, n, of) => of ? `<button onclick="${go}('${id}')" title="${tip}" aria-label="${tip}"><svg class="ico" aria-hidden="true"><use href="#${icon}"/></svg>${n}/${of}</button>` : '';
  return `<div class="mm-acts" data-id="${id}">` +
    btn('mmStudyNode', 'i-quiz', `Study questions: ${s.correct} of ${s.total} correct`, s.correct, s.total) +
    btn('mmReviewCards', 'i-cards', `Review flashcards: ${s.mastered} of ${s.termTotal} mastered`, s.mastered, s.termTotal) + '</div>';
}
function mmFill(sec) { // a card's buttons, text and collapsed child cards, built once
  const id = sec.dataset.id;
  if (sec.children.length < 2) sec.insertAdjacentHTML('beforeend',
    `<div class="mm-sec-body">${mmActs(id)}${renderNodeDetail(id)}${(MM_CHILDREN[id] || []).map(mmSection).join('')}</div>`);
}
const mmUnder = (id, anc) => id === anc || (!!MM_BY_ID[id].parent && mmUnder(MM_BY_ID[id].parent, anc));
// fill a card as its title is clicked, before it opens, so even its first open has content to animate
document.getElementById('mm-drawer-body').addEventListener('click', e => {
  const sec = e.target.closest('summary')?.parentNode;
  if (sec?.dataset.id) mmFill(sec);
});
// toggle doesn't bubble, so listen in the capture phase
document.getElementById('mm-drawer-body').addEventListener('toggle', e => {
  const sec = e.target, id = sec.dataset.id;
  if (!id) return; // a Source notes fold, not a node
  if (sec.open) {
    mmFill(sec);
    // focus moves to the opened card unless it's already there or deeper (selectMMNode opening a node's parents)
    if (!mmSelectedNode || !mmUnder(mmSelectedNode, id)) focusMMNode(id);
  }
  // closing a card goes back up one node; closing AIGP, which has none, closes the drawer
  else focusMMNode(MM_BY_ID[id].parent);
}, true);

function selectMMNode(id) { // a map click: the drawer opens on this node inside its full chain of parent cards
  if (id) {
    const body = document.getElementById('mm-drawer-body'), path = [id];
    while (MM_BY_ID[path[0]].parent) path.unshift(MM_BY_ID[path[0]].parent);
    body.innerHTML = mmSection(path[0]);
    const full = document.getElementById('mm-drawer').classList.contains('full');
    body.firstChild.firstChild.insertAdjacentHTML('beforeend', `<span class="mm-bar">`
      + `<button class="mm-full" onclick="mmToggleFull(this)" title="Full width" aria-label="Full width" aria-pressed="${full}"><svg class="ico mm-max" aria-hidden="true"><use href="#i-maximize"/></svg><svg class="ico mm-min" aria-hidden="true"><use href="#i-minimize"/></svg></button>`
      + `<button onclick="selectMMNode(null)" title="Close (Esc)" aria-label="Close">✕</button></span>`);
    let sec = body.firstChild;
    path.forEach((p, i) => {
      if (i) sec = sec.querySelector(`:scope > .mm-sec-body > [data-id="${p}"]`);
      mmFill(sec);
      sec.open = true;
    });
    // bring the clicked card up to just under AIGP's pinned title bar
    body.scrollTop = 0;
    body.scrollTop = sec.getBoundingClientRect().top - body.getBoundingClientRect().top - body.firstChild.firstChild.offsetHeight - 4;
  }
  focusMMNode(id);
}

// desktop: the drawer widens over the whole map and back; the choice stays until switched back
function mmToggleFull(b) { b.setAttribute('aria-pressed', document.getElementById('mm-drawer').classList.toggle('full')); }

function focusMMNode(id) { // the map follows the card last opened or closed
  mmSelectedNode = id;
  const drawer = document.getElementById('mm-drawer');
  if (!id) { drawer.classList.remove('open'); highlightMM(null); return; }
  drawer.classList.add('open');
  highlightMM(id);
  // the indented view scrolls the focused row into sight
  d3.selectAll('#mindmap-graph.indent .mm-node').filter(d => d.data.id === id).node()?.scrollIntoView({ block: 'nearest' });
}

function highlightMM(id) {
  const keep = new Set();
  if (id) {
    (function down(n){ keep.add(n); (MM_CHILDREN[n] || []).forEach(down); })(id);
    let n = MM_BY_ID[id]; while (n) { keep.add(n.id); n = MM_BY_ID[n.parent]; }
  }
  d3.selectAll('.mm-node').attr('opacity', d => !id || keep.has(d.data.id) ? 1 : 0.15);
  d3.selectAll('.mm-link').attr('opacity', d => !id || keep.has(d.target.data.id) ? 1 : 0.08);
}

function filterMMNodes() {
  const q = document.getElementById('mm-search').value.trim().toLowerCase();
  const hits = q ? new Set(MM_NODES.filter(n => MM_SEARCH_TEXT[n.id].includes(q)).map(n => n.id)) : null;
  d3.selectAll('.mm-node').attr('opacity', d => !hits || hits.has(d.data.id) ? 1 : 0.08);
  d3.selectAll('.mm-link').attr('opacity', d => !hits || hits.has(d.target.data.id) ? 1 : 0.06);
  document.getElementById('mm-search-count').textContent =
    hits ? `${hits.size} node${hits.size === 1 ? '' : 's'} match` : '';
}

function resetMM() {
  document.getElementById('mm-search').value = '';
  filterMMNodes();
  selectMMNode(null);
  const c = document.getElementById('mindmap-graph');
  if (c.classList.contains('indent')) c.scrollTo({ top: 0, behavior: 'smooth' });
  else mmSvg.transition().duration(500).call(mmZoom.transform, mmFitTransform || d3.zoomIdentity);
}

function mmStudyNode(id) {
  quizNodeFilter = id;
  const chip = document.getElementById('quiz-node-chip');
  chip.textContent = '🗺 ' + MM_BY_ID[id].label.replace(/\n/g, ' ') + ' ✕';
  chip.classList.remove('hidden');
  switchTab('quiz');
  onFilterChange();
}
function clearQuizNode() {
  quizNodeFilter = null;
  document.getElementById('quiz-node-chip').classList.add('hidden');
  onFilterChange();
}
function mmReviewCards(id) {
  fcNodeFilter = id;
  const chip = document.getElementById('fc-node-chip');
  chip.textContent = '🗺 ' + MM_BY_ID[id].label.replace(/\n/g, ' ') + ' ✕';
  chip.classList.remove('hidden');
  switchTab('flashcards');
  applyFCFilter();
}
function clearFCNode() {
  fcNodeFilter = null;
  document.getElementById('fc-node-chip').classList.add('hidden');
  applyFCFilter();
}