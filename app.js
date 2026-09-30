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



// Article Application Lab: Tan (2023), ICETECH proceedings paper
const articleQuiz=[
 {skill:"Text type · Problem–solution",q:"The paper identifies inconsistency in Malaysian CBA and a gap in teacher preparation, then proposes a standalone assessment-moderation module. What is the dominant organisational pattern of the paper?",o:["Problem–solution","Compare–contrast","Cause–effect only","Chronological narrative"],a:0,e:"The abstract explicitly frames a curriculum problem and proposes an additional moderation module as the potential solution. Other text types appear locally, but problem–solution is the dominant macro-structure."},
 {skill:"Text type · Cause–effect",q:"The paper argues that insufficient input on assessment moderation contributes to inconsistent CBA judgements and questionable reliability. Which reading pattern is being used in that part of the argument?",o:["Cause–effect","Definition–example","Compare–contrast","Sequence only"],a:0,e:"The reasoning links a proposed contributing cause, inadequate moderation input, with an effect, inconsistency and weakened reliability of CBA judgements."},
 {skill:"Text type · Compare–contrast",q:"Section 4 distinguishes moderation before CBA from moderation after CBA. If you organise their timing, purpose and procedures in two columns, which text structure are you applying?",o:["Compare–contrast","Problem–solution","Cause–effect","Narrative"],a:0,e:"The two-column reading move uses common criteria to identify similarities and differences between moderation for assessment and moderation of assessment."},
 {skill:"Text type · Expository",q:"The paper defines assessment moderation, explains its purposes, and describes procedures before and after CBA. What function do these sections mainly perform?",o:["Expository explanation","Personal narrative","Literary description","Chronological biography"],a:0,e:"These sections explain a concept and its procedures. That is an expository function even though the whole paper also advances an argument."},
 {skill:"Text type · Argumentative",q:"The recommendation that a standalone moderation component should be incorporated into the CBA teacher-training programme functions primarily as what?",o:["An argumentative claim that requires support","A neutral bibliographic detail","A purely descriptive fact","A chronological marker"],a:0,e:"The recommendation asks readers to accept a proposed curriculum change, so it functions as a claim supported by reasoning and cited evidence."},
 {skill:"Facts and opinions",q:"Which statement from the paper is best classified first as a verifiable factual claim rather than an evaluative judgement?",o:["Tier 3 training was conducted over three days with roughly six to seven hours of daily sessions.","Adding a standalone moderation module is the simple solution.","Moderation is the most essential component of CBA training.","The cascade model is the ideal approach in every context."],a:0,e:"The stated duration is a checkable programme detail. The other options contain evaluation, recommendation or overgeneralisation."},
 {skill:"Linear texts",q:"When you read the Introduction paragraph by paragraph, following sentences in their written order to build the argument, what kind of text are you mainly processing?",o:["Linear text","Non-linear text","Diagrammatic text only","Tabular text only"],a:0,e:"Continuous prose is read primarily in a linear sequence, even though the article as a whole also contains figures and a table."},
 {skill:"Non-linear texts",q:"Figure 1 presents the cascade-training pathway from Curriculum Development Division trainers to State Master Trainers, District Trainers and finally school teachers. What is the most appropriate way to process this element?",o:["Read it as a non-linear visual showing hierarchy and sequence.","Treat it as a paragraph and ignore spatial relations.","Read only the caption because the diagram adds no information.","Convert every label into a quotation before interpreting it."],a:0,e:"A figure encodes relationships spatially. The reader should trace direction, hierarchy and sequence rather than process it as continuous prose."},
 {skill:"Bias and objectivity",q:"The author argues that the lack of moderation input is a major curriculum problem. What is the strongest critical-reading move for checking the objectivity of this claim?",o:["Look for evidence, alternative explanations, counter-evidence and acknowledged limitations.","Reject the claim because the author proposes a solution.","Accept it because the paper has a DOI.","Count how many references appear in the bibliography."],a:0,e:"Objectivity is assessed by examining evidence selection, competing explanations, scope and limitations, not by automatically accepting or rejecting the writer's position."},
 {skill:"Evaluating arguments",q:"Which option best represents the paper's central reasoning chain?",o:["CBA inconsistency is a problem; moderation training is underdeveloped; a dedicated moderation module could strengthen judgement consistency and assessment quality.","CBA is inconsistent; therefore all classroom assessment should be replaced by public examinations.","Moderation is used internationally; therefore every moderation model will work identically in Malaysia.","Teachers attend cascade training; therefore training duration is the sole cause of CBA inconsistency."],a:0,e:"The paper connects the identified inconsistency and curriculum gap to a proposed moderation-training response. It does not argue for restoring public exams or claim one sole cause."},
 {skill:"Evaluating arguments · Evidence",q:"Which evidence would most directly strengthen the paper's claim that the proposed moderation module improves consistency?",o:["A study comparing teacher judgement consistency before and after the module, ideally with a suitable comparison design.","A larger number of citations in the introduction.","A redesigned cover page for the training module.","A survey asking whether teachers like the word 'moderation'."],a:0,e:"The proposal concerns changes in assessment consistency, so evidence measuring judgement consistency before and after implementation would directly test the claimed outcome."},
 {skill:"Writer's tone",q:"Which description best fits the overall tone of the paper?",o:["Academic, problem-focused and propositional","Humorous and conversational","Hostile and accusatory","Purely autobiographical"],a:0,e:"The paper identifies a curriculum problem, reviews supporting literature, proposes a module and discusses evaluation and limitations in an academic register."},
 {skill:"Writer's purpose",q:"What is the paper's main purpose?",o:["To examine a gap in CBA teacher training and propose how assessment moderation could be incorporated and evaluated.","To report the results of a completed randomised trial of the moderation module.","To provide a history of all Malaysian education reforms.","To rank Malaysian teachers according to assessment competence."],a:0,e:"The paper examines the teacher-training curriculum, identifies a moderation gap, proposes a standalone component and outlines its application and evaluation. It does not report a completed trial."},
 {skill:"Writer's point of view",q:"Which statement best characterises the author's point of view?",o:["The author supports incorporating moderation into CBA training while arguing for practical application, professional learning and evaluation of outcomes.","The author is neutral about whether moderation should be included.","The author argues that teacher professional judgement should be removed entirely.","The author presents moderation only as an administrative compliance exercise."],a:0,e:"The paper advocates incorporation of moderation while also discussing professional learning, teacher autonomy, practical procedures and programme evaluation."},
 {skill:"Text processing",q:"You need to find quickly where the paper explains when moderation should happen before and after CBA. What is the most efficient reading strategy?",o:["Scan the section headings and move directly to the subsection on when to apply assessment moderation.","Read every reference entry before the body text.","Begin with the copyright notice and read upward.","Ignore headings and search only for adjectives."],a:0,e:"Headings are text-processing cues. The subsection structure lets a reader locate the before/after procedures efficiently without rereading the entire paper."},
 {skill:"Linking ideas across texts",q:"The paper cites Smaill on pooling teachers' experiential and intellectual resources and Beutel and colleagues on building shared understanding of standards and evidence. How do these sources function together in the paper?",o:["They provide complementary support for moderation as collaborative quality assurance and professional learning.","They contradict each other about whether teachers should collaborate.","They are unrelated because one discusses resources and the other discusses standards.","They prove that the proposed Malaysian module has already been experimentally validated."],a:0,e:"The cited ideas reinforce different aspects of the same rationale: collaborative moderation can pool expertise, build shared standards and support professional learning."},
 {skill:"Summarising",q:"Which is the most accurate concise summary of the paper?",o:["The paper identifies a gap in Malaysian CBA teacher training, proposes a standalone assessment-moderation component, explains how moderation can operate before and after assessment, and outlines how the training could be evaluated.","The paper proves through an intervention trial that moderation eliminates all CBA inconsistency.","The paper mainly describes the history of Malaysian public examinations and recommends returning to them.","The paper compares four international moderation systems and selects one as the national model."],a:0,e:"A good summary preserves the paper's problem, proposed response, key procedural distinction and evaluation plan without adding results the paper did not report."},
 {skill:"Synthesising information",q:"Which statement best synthesises the paper's problem, proposed response and evaluation logic?",o:["Because inconsistent CBA judgements are linked to gaps in moderation preparation, the paper proposes explicit moderation training before and after assessment, but the value of that proposal should ultimately be judged through evidence of learning, changed practice and programme results.","CBA is inconsistent, so moderation training will certainly eliminate all inconsistency.","Moderation is collaborative, and collaboration is always beneficial in every educational setting.","The cascade model has several tiers, so the number of tiers alone determines assessment reliability."],a:0,e:"The strongest synthesis integrates the identified problem, the proposed mechanism and the paper's own evaluation framework while preserving uncertainty about outcomes."},
 {skill:"Source credibility",q:"The Atlantis Press article page confirms a DOI, conference proceedings title, publication date and open-access licence. Which conclusion would go beyond the evidence shown on that page and therefore require separate verification?",o:["The paper or proceedings currently has a particular Scopus quartile ranking.","The article has a DOI.","The article appears in the ICETECH 2022 proceedings.","The article is available as open access on the publisher's site."],a:0,e:"A quartile or current indexing status is not established simply by the article page. It should be verified in the relevant current indexing or metrics database."},
 {skill:"Reading to write",q:"You want to cite this paper in an academic essay. Which use is most defensible?",o:["Use it as a source for the rationale and proposed curriculum design for moderation, while not presenting it as experimental proof that the module causes improved reliability.","Use it as definitive causal proof that the proposed module eliminates inconsistency.","Use it to claim that all Malaysian teachers lack assessment competence.","Use the publication venue alone as proof that every claim in the article is correct."],a:0,e:"The paper is useful for its analysis, rationale and curriculum proposal, but it does not report an intervention trial establishing causal effectiveness."}
];

let aqIndex=0, aqScore=0, aqAnswered=false;
function renderArticleQuiz(){
 const area=$('#articleQuizArea');
 if(!area)return;
 const q=articleQuiz[aqIndex]; aqAnswered=false;
 $('#articleQuizProgress').style.width=(aqIndex/articleQuiz.length*100)+'%';
 area.innerHTML=`<div class="quiz-meta"><span class="pill">Question ${aqIndex+1} of ${articleQuiz.length}</span><span class="skill-pill">${q.skill}</span></div>
 <h3 style="font-size:1.35rem">${q.q}</h3>
 <div class="options">${q.o.map((x,i)=>`<button data-i="${i}">${x}</button>`).join('')}</div>
 <div class="feedback" id="articleQfb"></div>
 <button class="btn primary hidden" id="articleQnext" style="margin-top:14px">${aqIndex===articleQuiz.length-1?'Finish article lab':'Next question'}</button>`;
 $$('#articleQuizArea .options button').forEach(b=>b.onclick=()=>{
  if(aqAnswered)return;
  aqAnswered=true;
  const n=+b.dataset.i;
  if(n===q.a){aqScore++;b.classList.add('correct')}else{
   b.classList.add('wrong');
   $$('#articleQuizArea .options button')[q.a].classList.add('correct');
  }
  $('#articleQfb').textContent=(n===q.a?'Well supported. ':'Reconsider the evidence. ')+q.e;
  $('#articleQfb').classList.add('show');
  $('#articleScore').textContent=aqScore+' / '+articleQuiz.length;
  $('#articleQnext').classList.remove('hidden');
  localStorage.setItem('tslb1114_article_score',aqScore);
 });
 $('#articleQnext').onclick=()=>{if(aqIndex<articleQuiz.length-1){aqIndex++;renderArticleQuiz()}else{finishArticleQuiz()}};
}
function finishArticleQuiz(){
 $('#articleQuizProgress').style.width='100%';
 $('#articleQuizArea').innerHTML=`<h3>Article application lab complete</h3><p>You scored <b>${aqScore}/${articleQuiz.length}</b>.</p>
 <div class="keyidea"><b>Interpret the score diagnostically.</b> The skill label on each question shows which Topic 3 reading subskill to revisit. Re-open the article and verify the evidence rather than memorising the answer.</div>`;
 const pct=aqScore/articleQuiz.length;
 $('#articleScoreMsg').textContent=pct>=.85?"Strong transfer across Topic 3 skills. Focus next on explaining why each reading decision is defensible.":pct>=.65?"Good application. Revisit the specific skill labels attached to the questions you missed.":"Re-read the article strategically using headings, figures, claim-evidence links and source relationships.";
 localStorage.setItem('tslb1114_article_complete','yes');
}
const restartArticle=$('#restartArticleQuiz');
if(restartArticle)restartArticle.onclick=()=>{aqIndex=0;aqScore=0;$('#articleScore').textContent='0 / '+articleQuiz.length;$('#articleScoreMsg').textContent='Use the article as evidence. Re-read strategically when needed.';renderArticleQuiz()};
renderArticleQuiz();

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
