// ═══════════ TEST (timed exam) ═══════════
const TEST_KEY='aigp-test-history';
const QUESTION_BY_ID=Object.fromEntries(ALL_QUESTIONS.map(q=>[q.id,q]));
const TEST_MODES={
  full:    {label:'Full Exam',     limitMs:3*60*60*1000, n:100},
  practice:{label:'Practice Quiz', limitMs:1*60*60*1000, n:25},
};
// BOK v2.1 blueprint midpoints (16-20 / 19-23 / 21-25 / 21-25 scored questions)
const DOMAIN_WEIGHTS={'Domain I':18,'Domain II':21,'Domain III':23,'Domain IV':23};
const TIERS=['Easy','Medium','Hard','Painful'];
let testView='menu';   // 'menu' | 'exam' | 'review'
let exam=null;         // active attempt in memory
let reviewIdx=null, reviewQ=0;

function getTestHistory(){try{return JSON.parse(localStorage.getItem(TEST_KEY))||[]}catch(e){return[]}}
function saveTestHistory(h){localStorage.setItem(TEST_KEY,JSON.stringify(h));}
function fmtClock(ms){ms=Math.max(0,ms);const s=Math.floor(ms/1000),h=Math.floor(s/3600),m=Math.floor(s%3600/60),ss=s%60;return (h?h+':'+String(m).padStart(2,'0'):''+m)+':'+String(ss).padStart(2,'0');}
function fmtDate(ts){const d=new Date(ts);return d.toLocaleDateString(undefined,{month:'short',day:'numeric'})+' '+d.toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'});}
function sampleN(pool,n){const a=[...pool],out=[];for(let i=0;i<n&&a.length;i++)out.push(a.splice(Math.floor(Math.random()*a.length),1)[0]);return out;}
function buildExamQuestions(n){
  // split n across domains by blueprint weight (largest remainder), then evenly across difficulty tiers
  const doms=Object.keys(DOMAIN_WEIGHTS),tot=doms.reduce((s,d)=>s+DOMAIN_WEIGHTS[d],0);
  const raw=doms.map(d=>n*DOMAIN_WEIGHTS[d]/tot),cnt=raw.map(Math.floor);
  doms.map((_,i)=>i).sort((a,b)=>(raw[b]-cnt[b])-(raw[a]-cnt[a])).slice(0,n-cnt.reduce((s,c)=>s+c,0)).forEach(i=>cnt[i]++);
  let out=[];
  // ponytail: assumes every domain×tier pool holds its share (smallest is ~10); top up from the domain if pools ever run short
  doms.forEach((d,i)=>TIERS.forEach((t,j)=>{out=out.concat(sampleN(ALL_QUESTIONS.filter(q=>q.domain===d&&q.difficulty===t),Math.floor(cnt[i]/4)+(j<cnt[i]%4?1:0)));}));
  return out.sort((a,b)=>TIERS.indexOf(a.difficulty)-TIERS.indexOf(b.difficulty));
}

function renderTest(){renderHistory();if(testView==='exam')renderExam();else if(testView==='review')renderReview();else renderMenu();}

function renderHistory(){
  const h=getTestHistory(),el=document.getElementById('test-history');
  if(!h.length){el.innerHTML='<div class="empty-hist">No attempts yet. Start a test to build your history.</div>';return;}
  el.innerHTML=h.map((a,i)=>{const pct=Math.round(a.correct/a.total*100);return `<div class="attempt-item ${testView==='review'&&reviewIdx===i?'active':''}" onclick="openAttempt(${i})"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><span class="attempt-mode">${esc(a.mode)}</span><span class="attempt-score" style="color:${pct>=70?'var(--correct)':'var(--incorrect)'}">${a.correct}/${a.total}</span></div><div class="attempt-meta">${pct}% · ${fmtDate(a.ts)}</div></div>`;}).join('');
}

function renderMenu(){
  document.getElementById('test-main').innerHTML=`
    <h2 style="margin-bottom:4px">Choose a test</h2>
    <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:6px">No answer feedback while the test is running — you only see how many you've answered and how many are left. Questions run easy → medium → hard → painful. The clock keeps running if you switch tabs.</p>
    <div class="mode-cards">
      <div class="mode-card" onclick="startExam('full')"><h2>Full Exam</h2><div class="mc-spec">100 questions · 3 hours</div><div class="mc-desc">Domains weighted like the real blueprint (21 / 25 / 27 / 27), each spread evenly across easy → painful.</div></div>
      <div class="mode-card" onclick="startExam('practice')"><h2>Practice Quiz</h2><div class="mc-spec">25 questions · 1 hour</div><div class="mc-desc">The same blueprint weighting (5 / 6 / 7 / 7) — a shorter timed warm-up.</div></div>
    </div>`;
}

function startExam(key){
  const m=TEST_MODES[key];
  exam={mode:m.label,limitMs:m.limitMs,startTime:Date.now(),questions:buildExamQuestions(m.n),answers:{},index:0,timerId:null};
  testView='exam';
  exam.timerId=setInterval(tickTest,1000);
  renderExam();
}
function tickTest(){
  if(!exam)return;
  const remaining=exam.limitMs-(Date.now()-exam.startTime);
  const t=document.getElementById('test-timer');
  if(t){t.textContent=fmtClock(remaining);t.classList.toggle('warn',remaining<=5*60*1000);}
  if(remaining<=0)submitExam(true);
}
function renderExam(){
  if(!exam)return;
  const q=exam.questions[exam.index],n=exam.questions.length,ans=Object.keys(exam.answers).length;
  const remaining=exam.limitMs-(Date.now()-exam.startTime);
  const meta=(q.domain?`<span>${q.domain}</span>`:'')+(q.difficulty?`<span class="diff-${q.difficulty.toLowerCase()}">${q.difficulty}</span>`:'')+selectBadge(q)+`<span>Question ${exam.index+1} of ${n}</span>`;
  const opts=q.options.map(o=>`<div class="option${hasLetter(exam.answers[q.id],o.letter)?' selected':''}" onclick="answerExam('${o.letter}')"><div class="option-letter">${o.letter}</div><div class="option-text">${o.text}</div></div>`).join('');
  const grid=exam.questions.map((qq,i)=>`<div class="qcell ${exam.answers[qq.id]?'answered':''} ${i===exam.index?'current':''}" onclick="gotoExam(${i})">${i+1}</div>`).join('');
  document.getElementById('test-main').innerHTML=`
    <div class="controls" style="align-items:center">
      <span class="test-timer ${remaining<=5*60*1000?'warn':''}" id="test-timer">${fmtClock(remaining)}</span>
      <span style="font-size:0.85rem;color:var(--text-muted)">${ans} answered · ${n-ans} left</span>
      <button style="margin-left:auto;background:var(--correct);border-color:var(--correct);color:#fff" onclick="submitExam(false)">Submit ${exam.mode}</button>
    </div>
    <div class="card"><div class="q-meta">${meta}</div><div class="q-text">${q.question}</div><div class="options">${opts}</div></div>
    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:14px"><button onclick="prevExam()" ${exam.index===0?'disabled':''}>← Prev</button><button onclick="nextExam()" ${exam.index===n-1?'disabled':''}>Next →</button></div>
    <div class="qgrid">${grid}</div>
    <div class="kbd-hint"><span class="kbd">A</span>-<span class="kbd">${q.options[q.options.length-1].letter}</span> ${isMulti(q)?'select':'answer'} · <span class="kbd">→</span> next · <span class="kbd">←</span> prev · click a number to jump</div>`;
}
function answerExam(l){if(!exam)return;const q=exam.questions[exam.index];
  if(isMulti(q)){const a=exam.answers[q.id]||[],i=a.indexOf(l);i<0?a.push(l):a.splice(i,1);if(a.length)exam.answers[q.id]=a.sort();else delete exam.answers[q.id];}
  else exam.answers[q.id]=l;
  renderExam();}
function prevExam(){if(exam&&exam.index>0){exam.index--;renderExam();}}
function nextExam(){if(exam&&exam.index<exam.questions.length-1){exam.index++;renderExam();}}
function gotoExam(i){if(exam){exam.index=i;renderExam();}}
function submitExam(auto){
  if(!exam)return;
  if(!auto){const un=exam.questions.length-Object.keys(exam.answers).length;if(!confirm(`Submit ${exam.mode}? ${un} question${un===1?'':'s'} still unanswered.`))return;}
  clearInterval(exam.timerId);
  const items=exam.questions.map(q=>{const chosen=exam.answers[q.id]||null;return {qid:q.id,chosen,correct:isRight(q,chosen)};});
  const correct=items.filter(it=>it.correct).length;
  const h=getTestHistory();h.unshift({ts:Date.now(),mode:exam.mode,total:items.length,correct,timeUsedMs:Date.now()-exam.startTime,auto:!!auto,items});saveTestHistory(h);syncSoon();
  exam=null;reviewIdx=0;reviewQ=0;testView='review';renderTest();
  if(auto)setTimeout(()=>alert('Time is up — your test was submitted automatically.'),50);
}
function renderReview(){
  const h=getTestHistory(),a=h[reviewIdx];
  if(!a){testView='menu';renderTest();return;}
  const pct=Math.round(a.correct/a.total*100);
  const grid=a.items.map((it,i)=>`<div class="qcell ${it.correct?'pass':'fail'} ${i===reviewQ?'current':''}" onclick="reviewGoto(${i})">${i+1}</div>`).join('');
  const it=a.items[reviewQ],q=QUESTION_BY_ID[it.qid];
  let detail='<div class="card"><div class="q-text">This question is no longer in the question bank.</div></div>';
  if(q){
    const meta=(q.domain?`<span>${q.domain}</span>`:'')+(q.difficulty?`<span class="diff-${q.difficulty.toLowerCase()}">${q.difficulty}</span>`:'')+selectBadge(q)+`<span>Question ${reviewQ+1} of ${a.total}</span>`;
    const opts=q.options.map(o=>{let cls='option';if(hasLetter(q.answer,o.letter))cls+=' correct';else if(hasLetter(it.chosen,o.letter))cls+=' incorrect';else cls+=' dimmed';return `<div class="${cls}"><div class="option-letter">${o.letter}</div><div class="option-text">${o.text}</div></div>`;}).join('');
    detail=`<div class="card"><div class="q-meta">${meta}</div><div class="q-text">${q.question}</div><div class="options">${opts}</div><div class="explanation visible"><strong style="color:${it.correct?'var(--correct)':'var(--incorrect)'}">${it.correct?'✓ Correct':'✗ Incorrect'}</strong> — ${it.chosen?`you answered <b>${fmtAns(it.chosen)}</b>`:'<b>not answered</b>'}, correct answer <b>${fmtAns(q.answer)}</b>.${q.explanation?'<br><br>'+q.explanation:''}</div></div>`;
  }
  document.getElementById('test-main').innerHTML=`
    <div class="controls" style="align-items:center">
      <span style="font-size:1rem;font-weight:700">${esc(a.mode)}</span>
      <span class="attempt-score" style="color:${pct>=70?'var(--correct)':'var(--incorrect)'}">${a.correct}/${a.total} · ${pct}%</span>
      <span style="font-size:0.78rem;color:var(--text-muted)">${fmtDate(a.ts)} · took ${fmtClock(a.timeUsedMs)}${a.auto?' · auto-submitted':''}</span>
      <button style="margin-left:auto" onclick="backToMenu()">+ New Test</button>
    </div>
    <div class="qgrid">${grid}</div>
    ${detail}`;
}
function reviewGoto(i){reviewQ=i;renderReview();}
function openAttempt(i){if(exam){if(!confirm('Leave the current test? Progress will be lost and not saved.'))return;clearInterval(exam.timerId);exam=null;}testView='review';reviewIdx=i;reviewQ=0;renderTest();}
function backToMenu(){testView='menu';reviewIdx=null;renderTest();}