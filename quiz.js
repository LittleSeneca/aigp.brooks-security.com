// ═══════════ QUIZ ═══════════
let currentIndex = -1, filteredQuestions = [], selectedAnswer = null, answered = false;
const QS_KEY = 'aigp-quiz-progress';
let progress = (() => { try { return JSON.parse(localStorage.getItem(QS_KEY)) || {}; } catch(e) { return {}; } })();
// Multi-select ("Select N") questions carry an array answer, scored all-or-nothing like the real exam
function applyFilters() {
  const d = document.getElementById('domain-filter').value;
  const diff = document.getElementById('difficulty-filter').value, st = document.getElementById('status-filter').value;
  filteredQuestions = ALL_QUESTIONS.filter(q => {
    if (quizNodeFilter && !NODE_QS[quizNodeFilter].has(q.id)) return false;
    if (d !== 'all' && q.domain !== d) return false;
    if (diff !== 'all' && q.difficulty !== diff) return false;
    if (st !== 'all') { const p = progress[q.id]; if (st === 'unanswered' && p !== undefined) return false; if (st === 'correct' && (!p || !p.correct)) return false; if (st === 'incorrect' && (!p || p.correct)) return false; }
    return true;
  });
  document.getElementById('total-count').textContent = filteredQuestions.length;
}
function updateStats() { applyFilters(); updateCounters(); }
function updateCounters() { let c=0,ic=0,a=0; for(const k in progress){a++;if(progress[k].correct)c++;else ic++;} document.getElementById('correct-count').textContent=c; document.getElementById('incorrect-count').textContent=ic; document.getElementById('answered-count').textContent=a; document.getElementById('pct').textContent=(a>0?Math.round(c/a*100):0)+'%'; document.getElementById('progress-correct').style.width=(c/ALL_QUESTIONS.length*100)+'%'; document.getElementById('progress-incorrect').style.width=(ic/ALL_QUESTIONS.length*100)+'%'; }
function showQuestion(i, reveal=false) {
  if(!filteredQuestions.length){document.getElementById('question-area').innerHTML='<div class="empty"><h2>No questions</h2></div>';return;}
  currentIndex=Math.max(0,Math.min(i,filteredQuestions.length-1));const q=filteredQuestions[currentIndex];selectedAnswer=[];answered=reveal;const qp=progress[q.id];
  // A reveal with no answer behind it would mark every option wrong, so fall back to a fresh
  // question instead of drawing a verdict we don't hold (and never leave the click unanswered).
  if(reveal&&!qp){reveal=false;answered=false;}
  // reveal (colored options + explanation) only for an answer picked in THIS view;
  // navigating to a previously-answered question stays fresh with a ✓/✗ badge instead
  let badge='';if(qp&&!reveal){const r=qp.right??(qp.correct?1:0),w=qp.wrong??(qp.correct?0:1);badge=`<span class="tally"><span class="yes">✓ ${r}</span><span class="no">✗ ${w}</span></span>`;}
  let meta=(q.domain?`<span>${q.domain}</span>`:'')+(q.difficulty?`<span class="diff-${q.difficulty.toLowerCase()}">${q.difficulty}</span>`:'')+selectBadge(q)+`<span>#${currentIndex+1}/${filteredQuestions.length}</span>`;
  let opts=q.options.map(o=>{let cls='option';if(reveal)cls+=hasLetter(q.answer,o.letter)?' correct':hasLetter(qp.answer,o.letter)?' incorrect':' dimmed';return`<div class="${cls}" data-l="${o.letter}" onclick="pickAnswer('${o.letter}')"><div class="option-letter">${o.letter}</div><div class="option-text">${o.text}</div></div>`}).join('');
  const check=isMulti(q)&&!reveal?`<button id="multi-submit" class="primary" style="margin-top:10px" disabled onclick="recordAnswer([...selectedAnswer].sort())">Check answer (0/${q.answer.length})</button>`:'';
  let expl='';if(reveal){const ok=qp.correct;expl=`<div class="explanation visible"><strong style="color:${ok?'var(--correct)':'var(--incorrect)'}">${ok?'✓':'✗'} ${ok?'Correct':'Incorrect'}</strong>${isMulti(q)&&!ok?` — correct: <b>${fmtAns(q.answer)}</b>`:''}${q.explanation?'<br><br>'+q.explanation:''}</div>`;}
  const last=q.options[q.options.length-1].letter;
  document.getElementById('question-area').innerHTML=`<div class="card">${badge}<div class="q-meta">${meta}</div><div class="q-text">${q.question}</div><div class="options">${opts}</div>${check}${expl}</div><div class="nav-row"><button onclick="prevQuestion()" ${currentIndex===0?'disabled':''}>← Prev</button><button class="primary" onclick="pickRandom()">🎲</button><button onclick="nextQuestion()">Next →</button></div><div class="kbd-hint"><span class="kbd">A</span>-<span class="kbd">${last}</span> ${isMulti(q)?'select · <span class="kbd">Enter</span> check':'answer'} · <span class="kbd">→</span> next · <span class="kbd">←</span> prev</div>`;
}
function pickAnswer(l){if(answered)return;const q=filteredQuestions[currentIndex];
  if(isMulti(q)){const i=selectedAnswer.indexOf(l);i<0?selectedAnswer.push(l):selectedAnswer.splice(i,1);
    document.querySelectorAll('#question-area .option').forEach(el=>el.classList.toggle('selected',selectedAnswer.includes(el.dataset.l)));
    const b=document.getElementById('multi-submit');b.disabled=selectedAnswer.length!==q.answer.length;b.textContent=`Check answer (${selectedAnswer.length}/${q.answer.length})`;return;}
  recordAnswer(l);}
// Reveal the answer, then refresh the counters — and leave the filtered set alone. Re-applying the
// filters here is what made a batch shift under the reader: with Status = Unanswered the question
// just answered dropped out of filteredQuestions the instant it was answered, so the counter read
// "#1" of a shrinking total and Prev could never step back to it, because it was no longer in the
// list at all. A batch you are working through now stays put, and re-evaluates when a filter
// changes (onFilterChange), on a fresh draw (pickRandom) or on load.
function recordAnswer(l){const q=filteredQuestions[currentIndex];answered=true;const correct=isRight(q,l);const prev=progress[q.id];const r=(prev?(prev.right??(prev.correct?1:0)):0)+(correct?1:0);const w=(prev?(prev.wrong??(prev.correct?0:1)):0)+(correct?0:1);progress[q.id]={answer:l,correct,timestamp:Date.now(),right:r,wrong:w};localStorage.setItem(QS_KEY,JSON.stringify(progress));syncSoon();showQuestion(currentIndex,true);updateCounters();}
function nextQuestion(){if(currentIndex<filteredQuestions.length-1)showQuestion(currentIndex+1);}
function prevQuestion(){if(currentIndex>0)showQuestion(currentIndex-1);}
function pickRandom(){applyFilters();if(filteredQuestions.length)showQuestion(Math.floor(Math.random()*filteredQuestions.length));}
function resetFilters(){['domain-filter','difficulty-filter','status-filter'].forEach(id=>document.getElementById(id).value='all');onFilterChange();}
function onFilterChange(){applyFilters();updateStats();currentIndex=0;if(filteredQuestions.length>0)showQuestion(0);else document.getElementById('question-area').innerHTML='<div class="empty"><h2>No questions match</h2></div>';}
function resetQuizProgress(){
  if(!confirm('Delete all progress — question answers, flashcard ratings, and exam history? This cannot be undone.'))return;
  clearLocalProgress();
  // Signed in, the reset reaches every device: entries older than it are dropped. It lives in
  // the session, so a signed-out reset clears only this browser and can't leak into an account.
  if(auth){setAuth({...auth,resetAt:Date.now()});syncSoon();}
}
function clearLocalProgress(){
  localStorage.removeItem(QS_KEY);
  localStorage.removeItem(FC_MASTERY_KEY);
  localStorage.removeItem(FC_COUNTS_KEY);
  localStorage.removeItem(TEST_KEY);
  progress={};
  if(exam){clearInterval(exam.timerId);exam=null;}
  testView='menu';reviewIdx=null;
  onFilterChange();
  applyFCFilter();
  updateFCStats();
  renderTest();
  selectMMNode(null);
  buildMindMap();
}