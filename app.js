const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

window.addEventListener('scroll', ()=>{
 const h=document.documentElement;
 const pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
 $('#scrollProgress').style.width=Math.max(0,Math.min(100,pct))+'%';
});

const typeData={
 cause:{
  title:"Cause & effect",
  text:"Distinguish a stated causal claim from sequence or association. Pay attention to causal strength: “caused” is stronger than “contributed to” or “was associated with”.",
  cue:"Ask: What is the proposed cause? What is the effect? What evidence supports the link? What alternative causes remain?",
  svg:`<svg viewBox="0 0 520 230"><circle cx="90" cy="115" r="54" fill="#20a0a0"/><text x="90" y="120" text-anchor="middle" fill="white" font-weight="800">CAUSE</text><path d="M150 115 H350" stroke="#f2b84b" stroke-width="8"/><polygon points="350,100 390,115 350,130" fill="#f2b84b"/><circle cx="430" cy="115" r="54" fill="#fff" opacity=".94"/><text x="430" y="120" text-anchor="middle" fill="#0b1f33" font-weight="800">EFFECT</text></svg>`
 },
 compare:{
  title:"Compare & contrast",
  text:"Use the same criteria across the items. Separate collections of facts are not yet a comparison.",
  cue:"Ask: What is the comparison criterion? Where are A and B genuinely similar or different?",
  svg:`<svg viewBox="0 0 520 230"><circle cx="215" cy="115" r="85" fill="#20a0a0" opacity=".85"/><circle cx="305" cy="115" r="85" fill="#f2b84b" opacity=".85"/><text x="165" y="120" text-anchor="middle" fill="white" font-weight="800">A</text><text x="355" y="120" text-anchor="middle" fill="#0b1f33" font-weight="800">B</text><text x="260" y="120" text-anchor="middle" fill="#0b1f33" font-weight="900">SHARED</text></svg>`
 },
 problem:{
  title:"Problem–solution",
  text:"Analyse the chain. A practical-sounding recommendation is weak if the problem, cause and proposed solution are loosely connected.",
  cue:"Ask: What is the problem? What causes it? How exactly does the proposed response address that cause?",
  svg:`<svg viewBox="0 0 520 230"><rect x="35" y="82" width="130" height="70" rx="18" fill="#c95d63"/><text x="100" y="122" text-anchor="middle" fill="white" font-weight="800">PROBLEM</text><path d="M170 117 H245" stroke="#94a7af" stroke-width="6"/><rect x="250" y="82" width="90" height="70" rx="18" fill="#f2b84b"/><text x="295" y="122" text-anchor="middle" fill="#0b1f33" font-weight="800">CAUSE</text><path d="M345 117 H395" stroke="#94a7af" stroke-width="6"/><rect x="400" y="72" width="95" height="90" rx="18" fill="#20a0a0"/><text x="448" y="122" text-anchor="middle" fill="white" font-weight="800">SOLUTION</text></svg>`
 },
 expository:{
  title:"Expository",
  text:"Expository texts explain, describe, classify or inform. Read the conceptual structure rather than assuming the text is automatically neutral or complete.",
  cue:"Look for definition → category → process → example → relationship → implication.",
  svg:`<svg viewBox="0 0 520 230"><rect x="190" y="20" width="140" height="52" rx="16" fill="#f2b84b"/><text x="260" y="53" text-anchor="middle" fill="#0b1f33" font-weight="800">CONCEPT</text><path d="M260 72 V110 M260 110 H95 M260 110 H425" stroke="#aec0c5" stroke-width="5"/><rect x="25" y="120" width="140" height="65" rx="16" fill="#20a0a0"/><rect x="190" y="120" width="140" height="65" rx="16" fill="#20a0a0"/><rect x="355" y="120" width="140" height="65" rx="16" fill="#20a0a0"/><text x="95" y="159" text-anchor="middle" fill="white" font-weight="800">DEFINE</text><text x="260" y="159" text-anchor="middle" fill="white" font-weight="800">EXPLAIN</text><text x="425" y="159" text-anchor="middle" fill="white" font-weight="800">EXAMPLE</text></svg>`
 },
 argument:{
  title:"Argumentative",
  text:"Separate the position from the evidence and reasoning used to support it. Then identify qualifications, assumptions and counterpositions.",
  cue:"Claim → evidence → reasoning → qualification / rebuttal → implication.",
  svg:`<svg viewBox="0 0 520 230"><rect x="20" y="85" width="110" height="62" rx="15" fill="#0b1f33"/><text x="75" y="123" text-anchor="middle" fill="white" font-weight="800">CLAIM</text><rect x="205" y="25" width="115" height="62" rx="15" fill="#20a0a0"/><text x="262" y="63" text-anchor="middle" fill="white" font-weight="800">EVIDENCE</text><rect x="205" y="145" width="115" height="62" rx="15" fill="#f2b84b"/><text x="262" y="183" text-anchor="middle" fill="#0b1f33" font-weight="800">REASON</text><path d="M135 116 H190 M325 56 H385 M325 176 H385" stroke="#b6c3c8" stroke-width="5"/><rect x="390" y="75" width="110" height="82" rx="15" fill="#fff"/><text x="445" y="108" text-anchor="middle" fill="#0b1f33" font-weight="800">SCOPE</text><text x="445" y="130" text-anchor="middle" fill="#0b1f33" font-size="13">qualify / rebut</text></svg>`
 }
};
function setType(k){
 const d=typeData[k]; $('#typeText').innerHTML=`<h3>${d.title}</h3><p>${d.text}</p><div class="keyidea"><b>Reader move:</b> ${d.cue}</div>`;
 $('#typeVisual').innerHTML=d.svg;
 $$('.type-tabs button').forEach(b=>b.classList.toggle('active',b.dataset.type===k));
}
$$('.type-tabs button').forEach(b=>b.addEventListener('click',()=>setType(b.dataset.type))); setType('cause');

const claims=[
 {t:"Attendance increased from 71% to 83% after the reminder system was introduced.",a:"Factual claim",why:"The numerical claim can be checked against records or data. That does not by itself prove the reminder system caused the increase."},
 {t:"The reminder system was the most effective intervention.",a:"Evaluative claim",why:"“Most effective” applies a judgement criterion and needs comparative evidence."},
 {t:"The increase may reflect improved clarity in the instructions.",a:"Interpretive claim",why:"This proposes an explanation for an observed pattern and needs supporting reasoning or evidence."},
 {t:"Criterion-focused feedback is preferable because it gives learners a clearer next action.",a:"Evaluative claim",why:"The statement recommends one approach using an explicit reason. It requires evidence that the reason holds in the relevant context."}
];
let ci=0;
function drawClaim(){
 const c=claims[ci]; $('#claimPrompt').textContent=c.t; $('#claimFeedback').className='feedback'; $('#claimFeedback').textContent='';
 const opts=["Factual claim","Interpretive claim","Evaluative claim"];
 $('#claimOptions').innerHTML=opts.map(o=>`<button data-o="${o}">${o}</button>`).join('');
 $$('#claimOptions button').forEach(b=>b.onclick=()=>{
   $$('#claimOptions button').forEach(x=>x.disabled=true);
   b.classList.add(b.dataset.o===c.a?'correct':'wrong');
   $('#claimFeedback').textContent=(b.dataset.o===c.a?'Correct. ':'Not quite. ')+c.why;
   $('#claimFeedback').classList.add('show');
 });
}
$('#nextClaim').onclick=()=>{ci=(ci+1)%claims.length;drawClaim()};drawClaim();

$$('.argpart').forEach(g=>{
 const go=()=>$('#argExplain').textContent=g.dataset.info;
 g.addEventListener('click',go); g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' ')go()});
});

const qInfo={
 Q1:"Q1 is the highest quarter within a particular journal category and year. It is useful context about journal-level standing, not a guarantee about the quality of a specific article.",
 Q2:"Q2 is the second quarter within a particular category and year. It should not be read as a simple pass/fail judgement about a journal or its articles.",
 Q3:"Q3 is the third quarter within a particular category and year. The article itself still needs to be evaluated for method, evidence and relevance.",
 Q4:"Q4 is the fourth quarter within a particular category and year. Q4 does not mean “predatory” and does not automatically make an article unusable."
};
$$('.qband').forEach(b=>b.onclick=()=>$('#qExplain').textContent=qInfo[b.dataset.q]);
$$('.myth button').forEach(b=>b.onclick=()=>b.parentElement.classList.toggle('open'));

const journals=[
 {n:"Journal A: Learning Inquiry Review",facts:["ISSN matches official record","Peer-review process described","Editorial board affiliations verifiable","Indexing claim independently confirmed"],correct:"likely",why:"The evidence shown is internally consistent and independently verifiable. You would still evaluate the individual article."},
 {n:"Journal B: Global Universal Science & Education",facts:["Promises decision in 48 hours","Claims five unfamiliar 'impact factors'","Editorial board names have no affiliations","Repeated unsolicited submission emails"],correct:"red",why:"Several serious, mutually reinforcing warning signs are present. This pattern warrants substantial concern."},
 {n:"Journal C: New Directions in Teacher Learning",facts:["Launched last year","Open access","APC clearly stated","Peer review described","Not currently in Scopus"],correct:"verify",why:"New, open access and non-Scopus are not proof of predatory conduct. Verify the publisher, editorial board, peer-review practice and other transparency indicators."},
 {n:"Journal D: Applied Classroom Studies",facts:["Website says 'Scopus Indexed'","No ISSN shown on page","Peer-review page is vague","Publisher details are visible"],correct:"verify",why:"I cannot confirm this from the information shown. The Scopus claim should be checked directly by exact title or ISSN, and the review policy needs closer verification."}
];
const jd=$('#journalDetector');
journals.forEach((j,i)=>{
 const d=document.createElement('div');d.className='journal';
 d.innerHTML=`<h3>${j.n}</h3><div class="meta">${j.facts.map(x=>`<span class="tag">${x}</span>`).join('')}</div>
 <div class="choice-row"><button data-v="likely">Likely credible</button><button data-v="verify">Verify further</button><button data-v="red">Multiple serious red flags</button></div><div class="feedback"></div>`;
 d.querySelectorAll('button').forEach(b=>b.onclick=()=>{
  const f=d.querySelector('.feedback');f.textContent=(b.dataset.v===j.correct?'Good reasoning. ':'Reconsider. ')+j.why;f.classList.add('show');
 });
 jd.appendChild(d);
});

const dtext={
1:"Identify the source type first. A peer-reviewed article, policy document, news report and infographic require different verification questions.",
2:"Define the claim you want to use. A source may be credible for one claim but irrelevant or too weak for another.",
3:"Check author expertise and publication venue. Authority helps establish context, but does not substitute for evidence.",
4:"Where peer review is relevant, check that the process is described transparently. Peer review is quality control, not a truth certificate.",
5:"If indexing is claimed, verify it directly in the official database. Do not rely on a badge, email or screenshot.",
6:"Use metrics as context. Name the metric, year and category. Do not convert a journal-level quartile into an article-level quality judgement.",
7:"Return to the article itself. If the method, evidence and reasoning support the claim within its limits, you can decide whether to use it confidently, with qualification, or not yet."
};
let lastD=0;
$$('.dstep').forEach(b=>b.onclick=()=>{
 const n=+b.dataset.d; lastD=Math.max(lastD,n); $$('.dstep').forEach(x=>x.classList.toggle('active',+x.dataset.d<=lastD)); $('#decisionOutput').textContent=dtext[n];
});

$$('.synth').forEach(b=>b.onclick=()=>{
 $$('.synth').forEach(x=>x.classList.remove('good','bad')); const good=b.dataset.good==='1'; b.classList.add(good?'good':'bad');
 $('#synthFeedback').textContent=good?"Strong synthesis: it integrates the outcome, explanation and implementation qualification without claiming more than the source set supports.":"This is not yet a defensible synthesis. Either it lists sources without integrating them, or it overclaims causation and generality.";
 $('#synthFeedback').classList.add('show');
});

const quiz=[
 {q:"A journal is listed as Q1 in SCImago. What can you conclude?",o:["Every article is high quality.","The journal is in the highest SJR quarter for a stated category/year.","The journal is definitely peer reviewed forever.","The article is suitable for your assignment."],a:1,e:"Quartile is journal-level contextual information. It does not establish article-level quality or relevance."},
 {q:"A journal website displays a 'Scopus Indexed' badge. What is the best next step?",o:["Accept the badge.","Check the exact title or ISSN in official Scopus Sources.","Reject the journal because it uses a badge.","Check only Google Scholar."],a:1,e:"Indexing claims should be independently verified in the official source database."},
 {q:"Which statement about peer review is most defensible?",o:["Peer-reviewed articles are true.","Peer review is an important quality-control process, but readers must still evaluate the article.","Peer review and Scopus indexing are the same thing.","Only Q1 journals use peer review."],a:1,e:"Peer review reduces some risks but is not a truth certificate."},
 {q:"Which feature alone proves a journal is predatory?",o:["Charging an APC.","Being open access.","Being Q4.","None of these alone."],a:3,e:"Predatory publishing is better identified through a pattern of deceptive or non-transparent practices."},
 {q:"“The intervention caused the improvement” is stronger than the data show when the study only reports a before/after pattern with no comparison group. What reading issue is this?",o:["Tone","Causal overreach","Formatting","Citation style"],a:1,e:"Association or sequence does not automatically establish causation."},
 {q:"Which is the strongest synthesis move?",o:["Summarise Source A, then Source B, then Source C.","State only what all sources agree on.","Integrate agreement, difference and qualification around the synthesis question.","Choose the highest-ranked journal and ignore the others."],a:2,e:"Synthesis organises information by idea and relationship, not by source order."},
 {q:"A sentence states a checkable numerical result. It should be classified first as:",o:["Automatically true","A factual claim that still requires verification","An opinion","A bias marker"],a:1,e:"Classification and verification are different tasks."},
 {q:"Which is the best evidence of bias?",o:["One word you dislike","A pattern of selective evidence, framing or unequal treatment of alternatives","Any strong conclusion","Any first-person pronoun"],a:1,e:"Bias is better inferred from patterns of evidence and framing than from one isolated cue."},
 {q:"A Q4 journal publishes a methodologically strong article highly relevant to your question. What should you do?",o:["Reject it solely because it is Q4.","Evaluate and use it according to evidence, relevance and limitations.","Call it predatory.","Treat it as equal to a systematic review regardless of design."],a:1,e:"Quartile does not replace article-level evaluation."},
 {q:"Which description best matches academic reading in this topic?",o:["Reading every line at the same speed.","Collecting as many quotations as possible.","Controlled selection and evidence-based interpretation.","Agreeing with peer-reviewed sources."],a:2,e:"The course frames academic reading as purposeful, strategic and evidence-based."}
];
let qi=0,score=0,answered=false;
function renderQuiz(){
 const q=quiz[qi]; answered=false;
 $('#quizProgress').style.width=(qi/quiz.length*100)+'%';
 $('#quizArea').innerHTML=`<div class="pill">Question ${qi+1} of ${quiz.length}</div><h3 style="font-size:1.35rem">${q.q}</h3>
 <div class="options">${q.o.map((x,i)=>`<button data-i="${i}">${x}</button>`).join('')}</div><div class="feedback" id="qfb"></div><button class="btn primary hidden" id="qnext" style="margin-top:14px">${qi===quiz.length-1?'Finish':'Next question'}</button>`;
 $$('#quizArea .options button').forEach(b=>b.onclick=()=>{
  if(answered)return;answered=true;const n=+b.dataset.i;if(n===q.a){score++;b.classList.add('correct')}else{b.classList.add('wrong');$$('#quizArea .options button')[q.a].classList.add('correct')}
  $('#qfb').textContent=(n===q.a?'Correct. ':'Not quite. ')+q.e;$('#qfb').classList.add('show');$('#score').textContent=score+' / 10';$('#qnext').classList.remove('hidden');
  localStorage.setItem('tslb1114_score',score);
 });
 $('#qnext').onclick=()=>{ if(qi<quiz.length-1){qi++;renderQuiz()}else{finishQuiz()} };
}
function finishQuiz(){
 $('#quizProgress').style.width='100%';
 $('#quizArea').innerHTML=`<h3>Challenge complete</h3><p>You scored <b>${score}/10</b>.</p><div class="keyidea"><b>Use the result diagnostically.</b> Revisit the section behind any item you could not justify with evidence.</div>`;
 $('#scoreMsg').textContent=score>=8?"Strong control. Keep checking scope and evidence even when the source looks authoritative.":score>=6?"Good foundation. Revisit the Source Credibility Lab and Synthesis Lab for the items you missed.":"Revisit the core distinction between article evidence, journal context and cross-text relationships.";
 localStorage.setItem('tslb1114_complete','yes');
}
$('#restartQuiz').onclick=()=>{qi=0;score=0;$('#score').textContent='0 / 10';$('#scoreMsg').textContent='Answer the questions using evidence, not shortcuts.';renderQuiz()};
renderQuiz();

$('#resetProgress').onclick=()=>{localStorage.removeItem('tslb1114_score');localStorage.removeItem('tslb1114_complete');qi=0;score=0;$('#score').textContent='0 / 10';renderQuiz();window.scrollTo({top:0,behavior:'smooth'})};
