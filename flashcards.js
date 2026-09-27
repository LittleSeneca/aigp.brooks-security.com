// ═══════════ FLASHCARDS ═══════════
let fcMode='term',fcIndex=0,fcFiltered=[...FLASHCARDS],fcFlipped=false;
const FC_MASTERY_KEY='aigp-flashcard-mastery';
function getMastery(){try{return JSON.parse(localStorage.getItem(FC_MASTERY_KEY))||{}}catch(e){return{};}}
function saveMastery(m){localStorage.setItem(FC_MASTERY_KEY,JSON.stringify(m));}
const FC_COUNTS_KEY='aigp-flashcard-counts';
function getCounts(){try{return JSON.parse(localStorage.getItem(FC_COUNTS_KEY))||{}}catch(e){return{};}}
function saveCounts(c){localStorage.setItem(FC_COUNTS_KEY,JSON.stringify(c));}
const DOMAIN_LABELS={d1:'Domain I',d2:'Domain II',d3:'Domain III',d4:'Domain IV'};
function updateFCStats(){const m=getMastery();let c=0,w=0;for(const k in m){if(m[k]===true)c++;else if(m[k]===false)w++;}const done=c+w,total=FLASHCARDS.length;document.getElementById('fc-correct').textContent=c;document.getElementById('fc-wrong').textContent=w;document.getElementById('fc-done').textContent=done;document.getElementById('fc-score').textContent=(done?Math.round(c/done*100):0)+'%';document.getElementById('fc-progress-correct').style.width=(c/total*100)+'%';document.getElementById('fc-progress-incorrect').style.width=(w/total*100)+'%';}
function applyFCFilter(){const filter=document.getElementById('fcard-filter').value;const dom=document.getElementById('fcard-domain').value;const chp=document.getElementById('fcard-chapter').value;const q=(document.getElementById('fcard-search')?.value||'').toLowerCase();const mastery=getMastery();fcFiltered=FLASHCARDS.filter(f=>{if(fcNodeFilter&&!NODE_FCS[fcNodeFilter].has(f.term))return false;if(dom!=='all'&&FC_PLACE[f.term]?.domain!==dom)return false;if(chp!=='all'&&FC_PLACE[f.term]?.chapter!==chp)return false;if(q&&!f.term.toLowerCase().includes(q)&&!f.definition.toLowerCase().includes(q))return false;if(filter==='mastered'&&!mastery[f.term])return false;if(filter==='needs-review'&&mastery[f.term]!==false)return false;if(filter==='unrated'&&mastery[f.term]!==undefined)return false;return true;});fcIndex=0;fcFlipped=false;if(!fcFiltered.length){document.getElementById('fcard-front-title').textContent='No cards';document.getElementById('fcard-back-text').textContent='';document.getElementById('fcard-counter').textContent='0/0';document.getElementById('fcard-domain-badge').textContent='';document.getElementById('fcard-tally').innerHTML='';return;}showCard(0);}
function filterFlashcards(){applyFCFilter();}
function setFCMode(m){fcMode=m;fcFlipped=false;document.getElementById('mode-term').classList.toggle('active',m==='term');document.getElementById('mode-def').classList.toggle('active',m==='def');document.getElementById('flashcard-inner').classList.remove('flipped');showCard(fcIndex);}
function rateCard(knew){
  if(!fcFiltered.length)return;
  const el=document.querySelector('.flashcard');
  if(el.classList.contains('rate-yes')||el.classList.contains('rate-no'))return; // ignore double-taps mid-flash
  const term=fcFiltered[fcIndex].term;
  const mastery=getMastery();mastery[term]=knew;saveMastery(mastery);
  const counts=getCounts();counts[term]=counts[term]||{yes:0,no:0};counts[term][knew?'yes':'no']++;counts[term].ts=Date.now();saveCounts(counts);syncSoon();
  updateFCStats();
  el.classList.add(knew?'rate-yes':'rate-no');
  setTimeout(()=>{el.classList.remove('rate-yes','rate-no');nextCard();},450);
}
function showCard(i){if(!fcFiltered.length)return;fcIndex=Math.max(0,Math.min(i,fcFiltered.length-1));fcFlipped=false;document.getElementById('flashcard-inner').classList.remove('flipped');const card=fcFiltered[fcIndex];document.getElementById('fcard-front-title').textContent=fcMode==='term'?card.term:card.definition;document.getElementById('fcard-back-text').textContent=fcMode==='term'?card.definition:card.term;document.getElementById('fcard-counter').textContent=`${fcIndex+1}/${fcFiltered.length}`;const dom=FC_PLACE[card.term]?.domain;document.getElementById('fcard-domain-badge').textContent=dom?DOMAIN_LABELS[dom]:'';const ct=getCounts()[card.term];document.getElementById('fcard-tally').innerHTML=(ct&&(ct.yes||ct.no))?`<span class="yes">✓ ${ct.yes||0}</span><span class="no">✗ ${ct.no||0}</span>`:'';}
function flipCard(){if(!fcFiltered.length)return;fcFlipped=!fcFlipped;document.getElementById('flashcard-inner').classList.toggle('flipped',fcFlipped);}
function nextCard(){if(fcIndex<fcFiltered.length-1)showCard(fcIndex+1);}
function prevCard(){if(fcIndex>0)showCard(fcIndex-1);}
function randomCard(){if(fcFiltered.length)showCard(Math.floor(Math.random()*fcFiltered.length));}