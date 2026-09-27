// ═══════════ KEYBOARD ═══════════
document.addEventListener('keydown', e => {
  if(e.target.tagName==='SELECT'||e.target.tagName==='INPUT'||authDlg.open)return;
  const k=e.key.toUpperCase();
  if(k==='ESCAPE'&&!document.getElementById('panel-mindmap').classList.contains('hidden')){e.preventDefault();selectMMNode(null);return;}
  const qi=!document.getElementById('panel-quiz').classList.contains('hidden');
  const fi=!document.getElementById('panel-flashcards').classList.contains('hidden');
  const ti=!document.getElementById('panel-test').classList.contains('hidden');
  if(ti&&exam&&testView==='exam'){if(/^[A-F]$/.test(k)){const q=exam.questions[exam.index];if(q.options.some(o=>o.letter===k)){e.preventDefault();answerExam(k);}}if(k==='ARROWRIGHT'){e.preventDefault();nextExam();}if(k==='ARROWLEFT'){e.preventDefault();prevExam();}return;}
  if(fi){if(k==='ARROWLEFT'){e.preventDefault();prevCard();}if(k==='ARROWRIGHT'){e.preventDefault();nextCard();}if(k===' '){e.preventDefault();flipCard();}if(k==='R'){e.preventDefault();randomCard();}if(k==='1'){e.preventDefault();rateCard(false);}if(k==='2'){e.preventDefault();rateCard(true);}return;}
  if(qi){if(/^[A-F]$/.test(k)&&!answered&&filteredQuestions.length>0){const q=filteredQuestions[currentIndex];if(q.options.some(o=>o.letter===k))pickAnswer(k);}
    if(k==='ENTER'&&!answered&&filteredQuestions.length>0){const q=filteredQuestions[currentIndex];if(isMulti(q)&&selectedAnswer.length===q.answer.length){e.preventDefault();recordAnswer([...selectedAnswer].sort());return;}}if(k==='ARROWRIGHT'){e.preventDefault();nextQuestion();}if(k==='ARROWLEFT'){e.preventDefault();prevQuestion();}if(k==='R'){e.preventDefault();pickRandom();}if(k==='ENTER'&&answered){e.preventDefault();nextQuestion();}}
  if(typeof RSVP!=='undefined'&&RSVP.handleKey(e))return;
});

// Flashcard placement (domain/chapter) from the term's mind map ancestry
const FC_PLACE = {};
MM_NODES.forEach(n => {
  if (n.term === undefined) return;
  let domain = null, chapter = null;
  for (let x = MM_BY_ID[n.parent]; x; x = MM_BY_ID[x.parent]) {
    if (/^ch\d+$/.test(x.id)) chapter = x.id;
    if (DOMAIN_COLORS[x.id]) domain = x.id;
  }
  FC_PLACE[n.term] = { domain, chapter };
});
document.getElementById('fcard-chapter').innerHTML =
  '<option value="all">All Areas</option>' +
  MM_NODES.filter(n => /^ch\d+$/.test(n.id))
    .map(n => `<option value="${n.id}">${n.label}</option>`).join('');
function resetFCFilters(){
  ['fcard-domain','fcard-chapter','fcard-filter'].forEach(id => document.getElementById(id).value = 'all');
  document.getElementById('fcard-search').value = '';
  clearFCNode();
}