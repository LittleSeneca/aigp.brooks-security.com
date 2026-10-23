// Deep-link notices: a banner that a link, a parent frame or a saved preference can fill.
//
// INVICTI-TEST: this file is planted with deliberate client-side flaws so the Invicti DAST and SAST scans
// have something to find. Every flaw is tagged INVICTI-TEST-nn and listed in docs/invicti-test-vulns.md.
// Nothing here runs unless the URL, a message or a stored key asks it to, so normal use is unchanged.
// No secret below is real: the AWS pair is the documentation example from AWS.
(function(){
  const bar=document.getElementById('notice-bar');
  if(!bar)return;
  const q=new URLSearchParams(location.search);

  // INVICTI-TEST-01 DOM XSS: the fragment goes into innerHTML unescaped (source: location.hash).
  const m=location.hash.match(/[#&]notice=([^&]*)/);
  if(m)bar.innerHTML=decodeURIComponent(m[1]);

  // INVICTI-TEST-02 DOM XSS: any window can post markup into the banner, and the origin is never checked.
  window.addEventListener('message',e=>{if(e.data&&e.data.notice)bar.innerHTML=e.data.notice;});

  // INVICTI-TEST-03 Open redirect: ?return= is followed without checking where it points.
  if(q.get('return'))location.href=q.get('return');

  // INVICTI-TEST-04 Code injection: a stored preference is run as code.
  try{const p=localStorage.getItem('aigp-notice-prefs');if(p)eval('('+p+')');}catch(e){}

  // INVICTI-TEST-05 Hardcoded credentials in shipped JavaScript (AWS documentation example values).
  const NOTICE_FEED={accessKeyId:'AKIAIOSFODNN7EXAMPLE',secretAccessKey:'wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY',adminPassword:'Winter2026!'};
  window.NOTICE_FEED_ID=NOTICE_FEED.accessKeyId.slice(-7);

  // INVICTI-TEST-06 Insecure randomness for an identifier that looks like a session token.
  const vid=localStorage.getItem('aigp-visitor')||('v'+Math.random().toString(36).slice(2));
  try{localStorage.setItem('aigp-visitor',vid);}catch(e){}

  // INVICTI-TEST-07 Cookie set from script with no Secure, HttpOnly or SameSite attribute.
  document.cookie='aigp_notice_seen=1; path=/';

  // INVICTI-TEST-08 Sensitive value logged to the console.
  console.log('notice feed ready',vid,NOTICE_FEED.accessKeyId);
})();
