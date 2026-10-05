// ═══════════ TABS ═══════════
const phone = matchMedia('(max-width: 768px)'); // the CSS phone breakpoint
function switchTab(tab) {
  ['quiz','flashcards','test','mindmap','book'].forEach(t => {
    document.getElementById('panel-'+t).classList.toggle('hidden', t !== tab);
    document.getElementById('tab-'+t).classList.toggle('active', t === tab);
  });
  if (tab === 'mindmap') setTimeout(buildMindMap, 50);
  if (tab === 'test') renderTest();
  if (tab === 'book') { if (typeof BOOK_MD === 'undefined') loadBook(); else renderBookFromHash(); }
}

// Shared helpers — used app-wide, moved here from the QUIZ block
const isMulti=q=>Array.isArray(q.answer);
const hasLetter=(v,l)=>Array.isArray(v)?v.includes(l):v===l;
const isRight=(q,v)=>isMulti(q)?Array.isArray(v)&&v.length===q.answer.length&&q.answer.every(l=>v.includes(l)):v===q.answer;
const esc=v=>String(v).replace(/[&<>"']/g,c=>`&#${c.charCodeAt(0)};`); // for synced strings rendered as HTML
const fmtAns=v=>esc(Array.isArray(v)?v.join(', '):v);
const selectBadge=q=>isMulti(q)?`<span>Select ${q.answer.length}</span>`:'';