(() => {
  'use strict';

  const motion = window.anime;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const canAnimate = () => !reduced.matches && typeof motion?.animate === 'function';

  for (const lab of document.querySelectorAll('[data-lesson-flow]')) {
    const choices = [...lab.querySelectorAll('[data-flow-choice]')];
    const panels = choices.map(choice => document.getElementById(choice.hash.slice(1)));
    if (!choices.length || panels.some(panel => !panel || !lab.contains(panel))) continue;

    const progress = lab.querySelector('[data-flow-progress]');
    const actions = lab.querySelector('[data-flow-actions]');
    const previous = lab.querySelector('[data-flow-previous]');
    const next = lab.querySelector('[data-flow-next]');
    const status = lab.querySelector('[data-flow-status]');
    let current = -1;
    let reveal;
    let advance;

    function show(index, animateChange) {
      if (index < 0 || index >= panels.length || index === current) return;
      reveal?.revert();
      current = index;
      choices.forEach((choice, position) => {
        const selected = position === index;
        if (selected) choice.setAttribute('aria-current', 'step');
        else choice.removeAttribute('aria-current');
        panels[position].hidden = !selected;
      });
      if (actions) {
        previous.disabled = index === 0;
        next.textContent = index === panels.length - 1 ? 'Restart example' : 'Next step';
        status.textContent = 'Step ' + (index + 1) + ' of ' + panels.length;
      }

      const animated = animateChange && canAnimate();
      if (progress) {
        advance?.cancel();
        const scale = (index + 1) / panels.length;
        if (animated) advance = motion.animate(progress, { scaleX: scale, duration: 380, ease: 'inOutQuint' });
        else progress.style.transform = 'scaleX(' + scale + ')';
      }
      if (animated) {
        reveal = motion.animate(panels[index], {
          opacity: [0.72, 1], translateY: [8, 0], duration: 300, ease: 'outQuart',
        });
      }
    }

    choices.forEach((choice, index) => {
      choice.addEventListener('click', event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        show(index, true);
      });
    });
    previous?.addEventListener('click', () => show(current - 1, true));
    next?.addEventListener('click', () => show((current + 1) % panels.length, true));

    const hashIndex = () => choices.findIndex(choice => choice.hash === window.location.hash);
    window.addEventListener('hashchange', () => show(hashIndex(), false));
    reduced.addEventListener('change', () => {
      if (!reduced.matches) return;
      reveal?.revert();
      advance?.cancel();
      if (progress) progress.style.transform = 'scaleX(' + ((current + 1) / panels.length) + ')';
    });
    if (actions) actions.hidden = false;
    if (progress) progress.parentElement.hidden = false;
    show(Math.max(0, hashIndex()), false);
  }

  const citationControls = document.querySelector('[data-citation-controls]');
  if (citationControls) {
    const figure = citationControls.closest('figure');
    const buttons = [...citationControls.querySelectorAll('[data-citation-trace]')];
    const status = citationControls.querySelector('[data-citation-status]');
    let pulse;
    citationControls.hidden = false;
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const field = button.dataset.citationTrace;
        pulse?.revert();
        figure.dataset.tracing = field;
        buttons.forEach(control => control.setAttribute('aria-pressed', String(control === button)));
        status.textContent = field === 'authors'
          ? 'The citation uses both surnames. The reference gives the surnames and initials in the same order.'
          : 'Both lines show 2019. Match the year before checking the article title and publication details.';
        if (canAnimate()) {
          pulse = motion.animate(figure.querySelectorAll('.citation-' + field), {
            opacity: [0.64, 1], duration: 360, delay: motion.stagger(80), ease: 'outQuart',
          });
        }
      });
    });
  }

  if (canAnimate() && !window.location.hash) {
    motion.animate('#home .hero-actions', {
      opacity: [0.76, 1], translateY: [6, 0], duration: 360, ease: 'outExpo',
    });
  }

  if (canAnimate() && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (canAnimate()) {
          motion.animate(entry.target.querySelectorAll('li'), {
            opacity: [0.72, 1], translateY: [8, 0], duration: 320,
            delay: motion.stagger(65), ease: 'outQuart',
          });
        }
      }
    }, { threshold: 0.3 });
    document.querySelectorAll('.writing-figure .figure-flow').forEach(flow => observer.observe(flow));
  }
})();
