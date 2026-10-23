// ═══════════ CHAT ═══════════
// Study assistant for Google accounts (docs/specs/chat.md). A question is a job: POST /chat returns an id,
// then we poll /chat/status. The server enforces the Google-only rule and the weekly limit; hiding the tab
// is only a courtesy. The conversation lives in memory, so a reload starts a new one.
const chatLog=document.getElementById('chat-log'),chatInput=document.getElementById('chat-input');
let chatHistory=[],chatBusy=false,chatQuotaKnown=false;
const isGoogleAuth=()=>!!auth&&auth.username.startsWith('g.');
// Called from renderAuth. A session that is no longer a Google one takes the tab, and any open conversation, away.
function renderChatAccess(){
  const ok=isGoogleAuth();
  document.getElementById('tab-chat').hidden=!ok;
  if(!ok){
    if(!document.getElementById('panel-chat').classList.contains('hidden'))switchTab('quiz');
    if(chatHistory.length||chatLog.querySelector('.chat-msg'))chatClear();
    chatQuotaKnown=false;
  }
}
function chatQuota(n){
  document.getElementById('chat-quota').textContent=n==null?'':`${n} of 200 questions left this week`;
}
async function chatOpen(){
  chatInput.focus();
  if(chatQuotaKnown||!isGoogleAuth())return;
  try{chatQuota((await api('chat/usage',{token:auth.token})).remaining);chatQuotaKnown=true;}catch(e){chatQuota(null);}
}
function chatClear(){
  if(chatBusy)return;
  chatHistory=[];
  chatLog.querySelectorAll('.chat-msg').forEach(m=>m.remove());
}
function chatAdd(cls,text){
  const d=document.createElement('div');d.className='chat-msg '+cls;d.textContent=text;
  chatLog.appendChild(d);chatLog.scrollTop=chatLog.scrollHeight;return d;
}
// The model's answer is untrusted HTML once rendered: it can be steered by the question and by anything
// quoted from the materials. Parse inertly, keep an allowlist of formatting tags and no attributes at all
// (so no links, images, handlers or styles), and unwrap anything else.
const CHAT_TAGS=new Set('P BR STRONG B EM I CODE PRE UL OL LI BLOCKQUOTE H3 H4 H5 H6 TABLE THEAD TBODY TR TH TD HR SUP'.split(' '));
function chatSanitize(html){
  const doc=new DOMParser().parseFromString(html,'text/html');
  const walk=(src,dst)=>{
    for(const n of src.childNodes){
      if(n.nodeType===3)dst.appendChild(document.createTextNode(n.nodeValue));
      else if(n.nodeType===1){
        if(['SCRIPT','STYLE','IFRAME','OBJECT','EMBED','TEMPLATE','NOSCRIPT'].includes(n.tagName))continue;
        if(CHAT_TAGS.has(n.tagName)){const e=document.createElement(n.tagName);walk(n,e);dst.appendChild(e);}
        else walk(n,dst); // h1/h2, links, images and the rest keep their text, not their markup
      }
    }
  };
  const out=document.createElement('div');walk(doc.body,out);return out;
}
function chatRender(el,text,sources){
  // [[section-id]] becomes [n], numbered in order of first use; ids the server didn't resolve are dropped.
  const num=new Map(sources.map((s,i)=>[s.id,i+1]));
  const md=text.replace(/\[\[([^\[\]\s]+)\]\]/g,(m,id)=>num.has(id)?`[${num.get(id)}]`:'');
  el.replaceChildren(...chatSanitize(marked.parse(md)).childNodes);
  if(sources.length){
    const box=document.createElement('div');box.className='chat-sources';box.append('Sources');
    const ol=document.createElement('ol');
    sources.forEach(s=>{const li=document.createElement('li');li.textContent=`${s.title} (${s.where})`;ol.appendChild(li);});
    box.appendChild(ol);el.appendChild(box);
  }
}
const chatWait=ms=>new Promise(r=>setTimeout(r,ms));
async function chatSubmit(e){
  e.preventDefault();
  const q=chatInput.value.trim();
  if(!q||chatBusy||!isGoogleAuth())return;
  chatBusy=true;chatInput.value='';
  const send=document.getElementById('chat-send');send.disabled=true;
  chatAdd('user',q);
  const pending=chatAdd('pending','Thinking…');
  const session=auth.token;
  try{
    const {id,remaining}=await api('chat',{token:session,message:q,history:chatHistory});
    chatQuota(remaining);
    for(let i=0;i<200;i++){ // about 6 minutes: the server gives up on a job after 330 s
      await chatWait(i<3?1500:2500);
      const r=await api('chat/status',{token:session,id});
      if(r.status==='queued'||r.status==='running'){
        pending.textContent=(r.steps.length?r.steps[r.steps.length-1]:'Thinking')+'…';
        chatLog.scrollTop=chatLog.scrollHeight;continue;
      }
      chatQuota(r.remaining);
      if(r.status==='done'){
        pending.className='chat-msg assistant';chatRender(pending,r.answer,r.sources);
        chatHistory.push({role:'user',content:q},{role:'assistant',content:r.answer});
        chatHistory=chatHistory.slice(-10);
      }else{pending.className='chat-msg error';pending.textContent=r.error;}
      return;
    }
    throw new Error('That took too long. Try again.');
  }catch(x){
    if(x.status===401){setAuth(null);alert(x.message);}
    if(x.status===429)chatQuota(0);
    pending.className='chat-msg error';pending.textContent=x.message;
  }finally{
    chatBusy=false;send.disabled=false;chatInput.focus();chatLog.scrollTop=chatLog.scrollHeight;
  }
}
// Enter sends; Shift+Enter makes a new line.
chatInput.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();document.getElementById('chat-form').requestSubmit();}});
