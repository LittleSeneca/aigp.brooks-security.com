// ═══════════ ACCOUNT & SYNC ═══════════
// Optional. localStorage stays the working copy on every device; each sync sends
// all of it and gets back the server's merge (docs/specs/cross-device-sync.md).
// aigp-auth is the session ({username, token, resetAt?}). aigp-last-user names whose progress this
// browser holds: it outlives an expired session, so the next account to sign in here can't absorb it.
const AUTH_KEY='aigp-auth',OWNER_KEY='aigp-last-user',authDlg=document.getElementById('auth-dlg');
const readAuth=()=>{try{return JSON.parse(localStorage.getItem(AUTH_KEY))}catch(e){return null}};
let auth=readAuth(),syncGen=0,syncTimer=null,lastSync=0;
// Changing session also bumps the generation, so a response from the old session is never applied.
function setAuth(a){auth=a;syncGen++;a?localStorage.setItem(AUTH_KEY,JSON.stringify(a)):localStorage.removeItem(AUTH_KEY);renderAuth();}
function localState(){return{quiz:progress,mastery:getMastery(),counts:getCounts(),tests:getTestHistory(),resetAt:auth?.resetAt||0};}
async function api(action,body){
  const r=await fetch('/api/aigp/'+action,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)})
    .catch(()=>{throw new Error("Can't reach the server. Check your connection.");});
  const j=await r.json().catch(()=>({})); // API Gateway and CloudFront errors carry no {error}
  if(!r.ok)throw Object.assign(new Error(j.error||(r.status===429?'Too many attempts right now. Try again in a minute.':`Server error (${r.status}).`)),{status:r.status});
  return j;
}
function syncSoon(){syncGen++;if(!auth)return;clearTimeout(syncTimer);syncTimer=setTimeout(sync,1500);}
async function sync(){
  if(!auth)return false;
  clearTimeout(syncTimer);const g=syncGen,r=auth.resetAt;
  try{
    const {state}=await api('sync',{token:auth.token,state:localState()});
    lastSync=Date.now();
    // A 200 means the server stored the reset, clamped to its own clock. Stop resending this
    // device's raw value, or a fast clock would push the reset forward on every later sync.
    // Written directly: setAuth would bump the generation and skip applying this response.
    if(r&&auth?.resetAt===r){delete auth.resetAt;localStorage.setItem(AUTH_KEY,JSON.stringify(auth));}
    // Something changed while the request was in flight: resend rather than overwrite it.
    if(g===syncGen)applyState(state);else syncSoon();
    return true;
  }catch(e){
    if(e.status===401){setAuth(null);alert(e.message);}
    else if(authDlg.open)document.getElementById('auth-err').textContent=e.message;
    return false; // offline is fine: local progress is intact and the next sync catches up
  }finally{renderAuth();}
}
function applyState(s){
  const reviewTs=testView==='review'?getTestHistory()[reviewIdx]?.ts:null;
  localStorage.setItem(QS_KEY,JSON.stringify(s.quiz));saveMastery(s.mastery);saveCounts(s.counts);saveTestHistory(s.tests);
  progress=s.quiz;
  // Refresh totals only; never move the quiz or flashcard cursor. The mind map recolors when next opened.
  updateCounters();updateFCStats();
  if(reviewTs!=null)reviewIdx=s.tests.findIndex(t=>t.ts===reviewTs);
  if(testView==='menu')renderTest();else renderHistory();
}
// Both sign-in paths end here: a password login (legacy) or the token Google's callback hands back.
async function finishSignIn(r){
  const owner=localStorage.getItem(OWNER_KEY);
  if(owner&&owner!==r.username){
    if(!confirm(`This browser has progress from ${owner}. Discard it and sign in as ${r.username}?`))return;
    clearLocalProgress();chatForget(); // saved chats are the previous person's too
  }
  localStorage.setItem(OWNER_KEY,r.username);
  setAuth({username:r.username,token:r.token,name:r.name});
  await sync(); // uploads whatever this device already had
}
async function authSubmit(e){ // legacy password accounts only; registration is retired
  e.preventDefault();
  const err=document.getElementById('auth-err');err.textContent='';
  try{
    const r=await api('login',{username:document.getElementById('auth-user').value,password:document.getElementById('auth-pass').value});
    document.getElementById('auth-pass').value='';
    await finishSignIn(r);
  }catch(x){err.textContent=x.message;}
}
// /auth/callback sends the browser back to /#login=<token>&name=<email> (or #auth_error=<message>).
// Take it off the URL at once so a token never lingers in history or a copied link.
async function consumeGoogleReturn(){
  const h=new URLSearchParams(location.hash.slice(1));
  if(!h.has('login')&&!h.has('auth_error'))return false;
  history.replaceState(null,'',location.pathname+location.search);
  if(h.has('auth_error')){openAuth();document.getElementById('auth-err').textContent=h.get('auth_error');return true;}
  // The token is "<username>.<createdAt>.<expiry>.<sig>"; the username may itself contain dots.
  const token=h.get('login'),username=token.split('.').slice(0,-3).join('.');
  await finishSignIn({username,token,name:h.get('name')||undefined});
  return true; // finishSignIn already synced
}
async function signOut(){
  if(!confirm("Sign out? This device's progress is cleared. It stays saved in your account."))return;
  // Clearing keeps the next person on a shared browser from merging your progress into their account.
  // Refusing by default keeps unsynced work; the override keeps a shared machine from staying signed in.
  const since=lastSync?new Date(lastSync).toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'}):'you signed in on this device';
  if(!await sync()&&!confirm(`Can't reach the server. Sign out anyway? Changes on this device since ${since} will be lost.`))return;
  localStorage.removeItem(OWNER_KEY);setAuth(null);clearLocalProgress();chatForget();
}
function openAuth(){document.getElementById('auth-err').textContent='';renderAuth();authDlg.showModal();}
function renderAuth(){
  renderChatAccess();
  const b=document.getElementById('auth-btn');b.querySelector('.lbl').textContent=auth?(auth.name||auth.username):'Sign in';b.querySelector('use').setAttribute('href',auth?'#i-synced':'#i-cloud');
  document.getElementById('auth-out').hidden=!!auth;document.getElementById('auth-in').hidden=!auth;
  if(auth){document.getElementById('auth-name').textContent=auth.name||auth.username;
    document.getElementById('auth-last').textContent=lastSync?'Last synced '+new Date(lastSync).toLocaleTimeString(undefined,{hour:'numeric',minute:'2-digit'})+'.':'Not synced yet on this device.';}
}
// Sync needs the /api origin, so it is off when the app is opened from disk.
if(location.protocol!=='file:'){
  document.getElementById('auth-btn').hidden=false;renderAuth();consumeGoogleReturn().then(handled=>{if(!handled)sync();});
  // Pull the other devices' progress on return. Tab switches fire both events; the timer collapses them.
  const syncShortly=()=>{if(auth){clearTimeout(syncTimer);syncTimer=setTimeout(sync,300);}};
  document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')syncShortly();});
  window.addEventListener('focus',syncShortly);
  // Another tab wrote progress or changed the session: drop any in-flight response (it predates
  // that write) and reload what this tab keeps in memory, so it never writes a stale copy back.
  window.addEventListener('storage',e=>{
    if(e.key&&!e.key.startsWith('aigp-'))return;
    syncGen++;auth=readAuth();
    try{progress=JSON.parse(localStorage.getItem(QS_KEY))||{};}catch(x){progress={};}
    updateCounters();updateFCStats();renderAuth();
  });
}