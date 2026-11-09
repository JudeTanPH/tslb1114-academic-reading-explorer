(() => {
  'use strict';

  const storageKey = 'tslb1114_academic_explorers_v1';
  const questions = {
    reading: [
      {
        title: 'Interpret the measures',
        prompt: 'How do the outcomes in the two sources differ?',
        options: [
          'A records perceived confidence. B records a classroom behaviour.',
          'A records classroom transitions. B records confidence before rehearsal.',
          'A and B both record observed classroom transitions.',
          'A and B both measure trainees’ confidence after rehearsal.',
        ],
        answer: 0,
        reason: 'A uses responses from volunteers. B counts sessions that met an observation criterion.',
      },
      {
        title: 'Choose a defensible synthesis',
        prompt: 'What can the sources support when read together?',
        options: [
          'The survey explains why more rehearsed sessions had clear transitions.',
          'Both sources show the same change in trainee confidence.',
          'The survey and table give grounds to investigate different possible benefits.',
          'The table verifies the confidence reported by the survey volunteers.',
        ],
        answer: 2,
        reason: 'The sources concern the same practice, but use different outcomes. Neither establishes that rehearsal caused a change.',
      },
    ],
    style: [
      {
        title: 'Revise the register',
        prompt: 'Which revision fits a formal report of Source A?',
        options: [
          'The rehearsal made the trainees much better at giving directions.',
          'Nine of twelve volunteers reported greater confidence after rehearsing.',
          'The trainees confidently gave clear directions after practising together.',
          'The results established a marked improvement in teaching performance.',
        ],
        answer: 1,
        reason: 'The revision keeps the denominator and uses “reported” to show how confidence was measured.',
      },
      {
        title: 'Choose a perspective',
        prompt: 'Which sentence foregrounds the evidence in an academic essay about Source B?',
        options: [
          'I was surprised to see more rehearsed sessions meet the criterion.',
          'You can see a small difference by looking across both groups.',
          'When we compare the two groups, the difference seems small.',
          'The table shows that one more rehearsed session met the criterion.',
        ],
        answer: 3,
        reason: 'The table is the grammatical subject. The wording reports the observed comparison directly.',
      },
      {
        title: 'Choose a precise reporting verb',
        prompt: 'Source A describes what volunteers said after rehearsing. Which sentence preserves how the evidence was collected?',
        options: [
          'Nine volunteers reported feeling more confident about giving directions.',
          'Observers recorded greater confidence in nine rehearsed sessions.',
          'Nine trainees demonstrated better instruction after rehearsing.',
          'The survey measured an increase from nine trainees’ earlier ratings.',
        ],
        answer: 0,
        reason: '“Reported” identifies the result as a self-report. The survey included no observer ratings or baseline confidence measure.',
      },
      {
        title: 'Calibrate the claim',
        prompt: 'Source B shows a one-session difference between groups with no comparable baseline. Which sentence matches that evidence?',
        options: [
          'Rehearsal clearly improved transitions across both groups.',
          'The two groups achieved equal results in observed transitions.',
          'The table shows a small difference in observed transitions.',
          'The difference shows that trainees felt better prepared.',
        ],
        answer: 2,
        reason: 'The table describes observed performance. The group comparison does not establish what caused the difference or what trainees felt.',
      },
    ],
    apa: [
      {
        title: 'Check a parenthetical citation',
        prompt: 'Which APA 7 citation fits a paraphrase of the article by List and Alexander?',
        options: [
          '(List & Alexander, 2019)',
          '(List and Alexander, 2019)',
          '(List et al., 2019)',
          '(A. List & P. A. Alexander, 2019)',
        ],
        answer: 0,
        reason: 'Use both surnames, an ampersand and the year inside parentheses for this two-author work.',
      },
      {
        title: 'Check the reference match',
        prompt: 'Your draft cites List and Alexander (2019). Which reference opening identifies the same work?',
        options: [
          'Alexander, P. A., & List, A. (2019). Toward an integrated framework…',
          'List, A. (2019). Toward an integrated framework of multiple text use.',
          'List, A., & Alexander, P. A. (2019). Toward an integrated framework…',
          'List, A., & Alexander, P. A. (2020). Toward an integrated framework…',
        ],
        answer: 2,
        reason: 'The entry preserves both authors, the publication order and the 2019 date.',
      },
      {
        title: 'Cite three authors',
        prompt: 'Which APA 7 parenthetical citation fits the first mention of the 2009 article by Bråten, Strømsø and Britt?',
        options: [
          '(Bråten, Strømsø, & Britt, 2009)',
          '(Bråten et al., 2009)',
          '(Bråten & Britt, 2009)',
          '(Bråten and colleagues, 2009)',
        ],
        answer: 1,
        reason: 'Use the first author’s surname followed by “et al.” and the year for this work. The reference entry records all three authors.',
      },
      {
        title: 'Make a quotation traceable',
        prompt: 'You quote eight words exactly from page 24 of List and Alexander’s article. What should accompany the quotation?',
        options: [
          'Quotation marks and both authors’ surnames.',
          'The authors, year and full journal title.',
          'Block indentation and the year and page.',
          'Quotation marks and the authors, year and page.',
        ],
        answer: 3,
        reason: 'A short direct quotation needs quotation marks, attribution and a locator. The page number points to the exact passage.',
      },
    ],
    process: [
      {
        title: 'Paraphrase with scope',
        prompt: 'Which paraphrase preserves the scope of Source A?',
        options: [
          'Rehearsal improved how clearly most trainees gave directions.',
          'Among the twelve volunteers, nine felt more confident about giving directions.',
          'Trainees felt more confident after rehearsal than trainees who did not rehearse.',
          'Most trainees who felt confident said the rehearsal was effective.',
        ],
        answer: 1,
        reason: 'The paraphrase restates the finding and keeps the volunteer group and reported outcome intact. Attribute the idea in the draft.',
      },
      {
        title: 'Revise before proofreading',
        prompt: 'Your paragraph claims rehearsal improved transitions. Source B records a one-session difference in groups with no comparable baseline. What should you revise first?',
        options: [
          'Polish the wording of the original claim and proofread the citations.',
          'Expand the summary of confidence before discussing the observation table.',
          'Move the observation result to the end and retain the causal claim.',
          'Narrow the claim to the observed difference and explain the design limit.',
        ],
        answer: 3,
        reason: 'The problem is the scope of the claim. Fix the reasoning before polishing sentence-level details.',
      },
      {
        title: 'Plan evidence for the audience',
        prompt: 'A teacher educator asks whether to make rehearsal compulsory. Which plan gives that reader the most useful basis for a decision?',
        options: [
          'Compare perceived readiness with observed performance and consider the limitations of each measure.',
          'Describe what peer rehearsal is, then list the steps in a rehearsal session.',
          'Use the confidence survey to estimate how many trainees will teach more effectively.',
          'Summarise each source separately and leave the judgement for the reader.',
        ],
        answer: 0,
        reason: 'An evaluation needs criteria, comparison and a reasoned judgement. The two outcomes give different information about the proposed requirement.',
      },
      {
        title: 'Explain how the evidence supports the point',
        prompt: 'Your point is that rehearsal may be worth offering to help trainees feel prepared. Which sentence best explains the survey’s relevance?',
        options: [
          'The survey records nine volunteers’ responses after a rehearsal session.',
          'Source B recorded six clear transitions in twelve rehearsed sessions.',
          'Reported confidence addresses how ready trainees felt to give directions.',
          'The two sources concern the same programme and use numerical results.',
        ],
        answer: 2,
        reason: 'This explanation connects the survey measure to the claim about perceived readiness. The counts and source descriptions supply evidence but do not explain the connection.',
      },
    ],
  };

  function node(tag, content, className) {
    const el = document.createElement(tag);
    if (content !== undefined) el.textContent = content;
    if (className) el.className = className;
    return el;
  }

  function renderPair(container) {
    container.classList.add('study-grid', 'study-block');
    const prose = node('article', undefined, 'card study-source');
    prose.append(
      node('p', 'Source A · Linear text', 'kicker'),
      node('h3', 'Rehearsal and reported confidence'),
      node('p', 'After an optional peer rehearsal, nine of twelve volunteers reported feeling more confident about giving classroom directions. The survey did not measure confidence beforehand or collect responses from trainees who chose not to rehearse.'),
      node('p', 'Simulated survey excerpt for practice', 'study-note'),
    );
    const visual = node('article', undefined, 'card study-source');
    const table = node('table', undefined, 'study-table');
    table.append(node('caption', 'Clear transitions during microteaching'));
    const heading = table.createTHead().insertRow();
    ['Group', 'Clear transitions', 'Sessions observed'].forEach(text => {
      const th = node('th', text);
      th.scope = 'col';
      heading.append(th);
    });
    const body = table.createTBody();
    for (const [group, clear] of [['Rehearsed', 6], ['Unrehearsed', 5]]) {
      const row = body.insertRow();
      const label = node('th', group);
      label.scope = 'row';
      row.append(label, node('td', String(clear)), node('td', '12'));
    }
    visual.append(
      node('p', 'Source B · Non-linear text', 'kicker'),
      node('h3', 'Classroom observation'),
      table,
      node('p', 'The groups were not randomly assigned and no comparable baseline was recorded. Simulated observation data for practice.', 'study-note'),
    );
    container.append(prose, visual);
  }

  function renderCheck(container, item, id) {
    const form = node('form', undefined, 'card study-exercise');
    const title = node('h3', item.title);
    const group = node('fieldset');
    group.append(node('legend', item.prompt));
    item.options.forEach((option, index) => {
      const label = node('label', undefined, 'study-choice');
      const input = node('input');
      input.type = 'radio';
      input.name = id;
      input.value = String(index);
      label.append(input, node('span', option));
      group.append(label);
    });
    const button = node('button', 'Check answer', 'btn secondary');
    button.type = 'submit';
    const feedback = node('p', '', 'study-feedback');
    feedback.setAttribute('role', 'status');
    form.append(title, group, button, feedback);
    form.addEventListener('change', () => {
      feedback.textContent = '';
      delete feedback.dataset.result;
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      const chosen = new FormData(form).get(id);
      if (chosen === null) {
        feedback.textContent = 'Choose an answer first.';
        return;
      }
      const correct = Number(chosen) === item.answer;
      feedback.dataset.result = correct ? 'correct' : 'review';
      feedback.textContent = (correct ? 'Correct. ' : 'Review this choice. ') + item.reason;
    });
    container.append(form);
  }

  document.querySelectorAll('[data-source-pair]').forEach(renderPair);
  document.querySelectorAll('[data-practice]').forEach(container => {
    const group = container.dataset.practice;
    questions[group].forEach((item, index) => renderCheck(container, item, group + '-' + index));
  });
  document.querySelectorAll('[data-print]').forEach(button => {
    button.addEventListener('click', () => window.print());
  });

  const controls = [...document.querySelectorAll('[data-study-save]')];
  if (!controls.length) return;

  const message = document.querySelector('[data-storage-message]');
  const warnStorage = () => {
    if (message) message.textContent = 'Local storage is unavailable. Keep this page open until you have downloaded or copied your work.';
  };
  function read() {
    let raw;
    try {
      raw = localStorage.getItem(storageKey);
    } catch {
      warnStorage();
      return null;
    }
    try {
      const record = JSON.parse(raw);
      return record && typeof record === 'object' && !Array.isArray(record) ? record : {};
    } catch {
      return {};
    }
  }
  let saved = read() || {};

  function save(change) {
    saved = read() || saved;
    change(saved);
    try {
      localStorage.setItem(storageKey, JSON.stringify(saved));
      return true;
    } catch {
      warnStorage();
      return false;
    }
  }

  function restore() {
    for (const control of controls) {
      const value = saved[control.dataset.studySave];
      if (control.type === 'checkbox') control.checked = value === true;
      else control.value = typeof value === 'string' ? value.slice(0, control.maxLength) : '';
    }
  }

  const wordOutput = document.querySelector('#draft-words');
  function updateWords() {
    if (!wordOutput) return;
    const words = document.querySelector('#study-draft').value.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu) || [];
    wordOutput.textContent = words.length + ' words · practice target 90–130';
  }

  restore();
  updateWords();
  const carried = document.querySelector('#carried-synthesis');
  function showSynthesis(record) {
    const text = typeof record?.synthesis === 'string' ? record.synthesis.trim() : '';
    document.querySelector('#carried-text').textContent = text;
    carried.hidden = !text;
  }
  if (carried) {
    showSynthesis(saved);
    window.addEventListener('storage', event => {
      if (event.key === storageKey || event.key === null) showSynthesis(read());
    });
  }

  for (const control of controls) {
    control.addEventListener('input', () => {
      const value = control.type === 'checkbox' ? control.checked : control.value;
      save(record => { record[control.dataset.studySave] = value; });
      updateWords();
    });
  }

  document.querySelector('#clear-study')?.addEventListener('click', () => {
    if (!window.confirm('Clear the Writing Studio on this device?')) return;
    const cleared = save(record => {
      for (const control of controls) delete record[control.dataset.studySave];
    });
    if (cleared) message.textContent = 'Writing Studio cleared.';
    restore();
    updateWords();
  });

  document.querySelector('#download-study')?.addEventListener('click', () => {
    const get = id => document.getElementById('study-' + id).value.trim();
    const text = [
      'TSLB1114 · Topic 4 Writing Studio', '',
      'Plan', get('plan'), '',
      'Supporting details', get('evidence'), '',
      'Practice paragraph', get('draft'), '',
      'Revision reflection', get('reflection'), '',
    ].join('\n');
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain;charset=utf-8' }));
    const link = node('a');
    link.href = url;
    link.download = 'TSLB1114-writing-practice.txt';
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
})();
