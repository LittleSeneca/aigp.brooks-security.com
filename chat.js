// ═══════════ CHAT ═══════════
// Study assistant for Google accounts (docs/specs/chat.md). A question is a job: POST /chat returns an id,
// then we poll /chat/status. The server enforces the Google-only rule and the weekly limit; hiding the tab
// is only a courtesy. Conversations are saved in this browser (see below) and listed in a sidebar.
const chatLog=document.getElementById('chat-log'),chatInput=document.getElementById('chat-input'),chatList=document.getElementById('chat-list');
const CHATS_KEY='aigp-chats',MAX_CHATS=50;
const chatIntro=chatLog.innerHTML;
let chats=chatLoad(),chatActive=null,chatBusy=null,chatPendingEl=null,chatQuotaKnown=false; // chatBusy: id of the conversation awaiting an answer
const isGoogleAuth=()=>!!auth&&auth.username.startsWith('g.');
// Chats live in this browser only (localStorage), newest first: {id, title, ts, messages:[{role, content, sources?}]}.
// Nothing is stored server-side beyond a job's 24 hours. Sign-out clears them with the rest of the device's data.
function chatLoad(){
  try{const c=JSON.parse(localStorage.getItem(CHATS_KEY));
    return Array.isArray(c)?c.filter(x=>x&&typeof x.id==='string'&&Array.isArray(x.messages)):[];}catch(e){return[];}
}
function chatSave(){
  chats.sort((a,b)=>b.ts-a.ts);chats=chats.slice(0,MAX_CHATS);
  try{localStorage.setItem(CHATS_KEY,JSON.stringify(chats));}catch(e){} // full or blocked: the chat still works this session
}
function chatForget(){chats=[];chatActive=null;localStorage.removeItem(CHATS_KEY);chatRenderAll();}
// Called from renderAuth. A session that is no longer a Google one takes the tab away and drops chats from memory
// (they stay in storage for the same person; sign-out removes them).
function renderChatAccess(){
  const ok=isGoogleAuth();
  document.getElementById('tab-chat').hidden=!ok;
  if(!ok){
    if(!document.getElementById('panel-chat').classList.contains('hidden'))switchTab('quiz');
    chatActive=null;chatQuotaKnown=false;chatRenderAll();
  }else if(!chatList.children.length)chatRenderAll();
}
function chatQuota(n){
  document.getElementById('chat-quota').textContent=n==null?'':`${n} of 200 prompts left this week`;
}
async function chatOpen(){
  chatInput.focus();
  if(chatQuotaKnown||!isGoogleAuth())return;
  try{chatQuota((await api('chat/usage',{token:auth.token})).remaining);chatQuotaKnown=true;}catch(e){chatQuota(null);}
}
const chatById=id=>chats.find(c=>c.id===id);
function chatRenderList(){
  chatList.replaceChildren();
  if(!chats.length){const li=document.createElement('li');li.className='chat-empty';li.textContent='No saved chats yet.';chatList.appendChild(li);return;}
  for(const c of chats){
    const li=document.createElement('li');li.className='chat-item'+(c.id===chatActive?' active':'');
    const open=document.createElement('button');open.type='button';open.className='open';open.textContent=c.title;open.title=c.title;
    open.onclick=()=>chatOpenConv(c.id);
    const del=document.createElement('button');del.type='button';del.className='del';del.textContent='✕';del.setAttribute('aria-label','Delete chat: '+c.title);
    del.onclick=()=>chatDelete(c.id);
    li.append(open,del);chatList.appendChild(li);
  }
}
function chatRenderLog(){
  chatLog.innerHTML=chatIntro;
  chatPendingEl=null;
  const c=chatById(chatActive);
  if(c)for(const m of c.messages){
    if(m.role==='user')chatAdd('user',m.content);
    else chatRender(chatAdd('assistant',''),m.content,m.sources||[]);
  }
  // The question still in flight belongs to this chat: show its progress where it will land.
  if(chatBusy&&chatBusy===chatActive)chatPendingEl=chatAdd('pending','Thinking…');
  chatLog.scrollTop=chatLog.scrollHeight;
}
function chatRenderAll(){chatRenderList();chatRenderLog();chatInput.disabled=!!chatBusy;}
function chatOpenConv(id){
  document.getElementById('chat-side').classList.remove('open');
  if(id===chatActive)return;
  chatActive=id;chatRenderAll();chatInput.focus();
}
// A new chat is only saved once it has a question in it, so clicking this repeatedly adds nothing.
function chatNew(){
  document.getElementById('chat-side').classList.remove('open');
  chatActive=null;chatRenderAll();chatInput.focus();
}
function chatDelete(id){
  const c=chatById(id);
  if(!c||!confirm(`Delete this chat?\n\n${c.title}`))return;
  chats=chats.filter(x=>x.id!==id);chatSave();
  if(chatBusy===id)chatBusy=null; // its answer, when it arrives, has nowhere to go and is dropped
  if(chatActive===id)chatActive=null;
  chatRenderAll();
}
function chatToggleSide(){
  const side=document.getElementById('chat-side'),open=side.classList.toggle('open');
  document.getElementById('chat-side-toggle').setAttribute('aria-expanded',open);
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
  let conv=chatById(chatActive);
  if(!conv){
    conv={id:Date.now().toString(36)+Math.random().toString(36).slice(2,6),title:q.length>60?q.slice(0,57)+'…':q,ts:Date.now(),messages:[]};
    chats.unshift(conv);chatActive=conv.id;
  }
  const history=conv.messages.slice(-10).map(m=>({role:m.role,content:m.content})); // plain turns only, no sources
  conv.messages.push({role:'user',content:q});conv.ts=Date.now();chatSave();
  chatInput.value='';chatBusy=conv.id;
  chatRenderAll();
  document.getElementById('chat-send').disabled=true;
  const session=auth.token,home=conv.id;
  let answer=null,failure=null;
  try{
    const {id,remaining}=await api('chat',{token:session,message:q,history});
    chatQuota(remaining);
    for(let i=0;i<200&&!answer&&!failure;i++){ // about 6 minutes: the server gives up on a job after 330 s
      await chatWait(i<3?1500:2500);
      const r=await api('chat/status',{token:session,id});
      if(r.status==='queued'||r.status==='running'){
        if(chatPendingEl&&chatPendingEl.isConnected)chatPendingEl.textContent=(r.steps.length?r.steps[r.steps.length-1]:'Thinking')+'…';
        continue;
      }
      chatQuota(r.remaining);
      if(r.status==='done')answer={role:'assistant',content:r.answer,sources:r.sources};else failure=r.error;
    }
    if(!answer&&!failure)failure='That took too long. Try again.';
  }catch(x){
    if(x.status===401){setAuth(null);alert(x.message);}
    if(x.status===429)chatQuota(0);
    failure=x.message;
  }
  // File the outcome under the chat that asked, wherever the reader is now. A chat deleted while waiting
  // clears chatBusy, and its answer is dropped.
  const live=chatBusy===home&&!!chatById(home);
  chatBusy=null;
  if(live){
    if(answer)conv.messages.push(answer);
    else{ // the question wasn't answered or counted: take it back out of the history and hand it back to retry
      conv.messages.pop();
      if(!conv.messages.length){chats=chats.filter(c=>c!==conv);if(chatActive===home)chatActive=null;}
      if(chatActive===home||chatActive===null)chatInput.value=q;
    }
    conv.ts=Date.now();chatSave();
  }
  document.getElementById('chat-send').disabled=false;
  chatRenderAll();
  if(failure&&live)chatAdd('error',failure);
  chatInput.focus();
}
// Enter sends; Shift+Enter makes a new line.
chatInput.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();document.getElementById('chat-form').requestSubmit();}});
// Another tab changed the saved chats: pick them up without touching what this tab is showing.
window.addEventListener('storage',e=>{if(e.key===CHATS_KEY){chats=chatLoad();if(chatActive&&!chatById(chatActive))chatActive=null;if(!chatBusy)chatRenderAll();else chatRenderList();}});
