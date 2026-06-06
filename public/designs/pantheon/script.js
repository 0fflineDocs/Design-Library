/* ΠΑΝΘΕΩΝ — interactivity
   - scrollspy on sidebar (IntersectionObserver)
   - text filter across visible cards + total count
   - overlay open/close for deity entries
   - keyboard: "/" focuses filter; Esc closes overlay
*/

(function () {
  const ENTRIES = window.PANTHEON_ENTRIES || {};

  const navLinks = document.querySelectorAll('#nav a[data-target]');
  const sections = ['primordials', 'titans', 'olympians', 'personifications', 'bestiary']
    .map(id => document.getElementById(id)).filter(Boolean);

  function setActive(id) {
    navLinks.forEach(a => {
      a.classList.toggle('active', a.dataset.target === id);
    });
  }

  // Observe section visibility
  if (sections.length && 'IntersectionObserver' in window) {
    const visible = new Map();
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => visible.set(e.target.id, e.intersectionRatio));
      // pick the section with the highest ratio
      let best = null, bestRatio = 0;
      visible.forEach((ratio, id) => {
        if (ratio > bestRatio) { bestRatio = ratio; best = id; }
      });
      if (best) setActive(best);
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });
    sections.forEach(s => io.observe(s));
  }

  // Smooth scroll on nav click (native scroll-behavior is fine if user prefers reduced motion)
  navLinks.forEach(a => {
    a.addEventListener('click', (ev) => {
      const id = a.dataset.target;
      if (!id) return;
      const target = document.getElementById(id);
      if (!target) return;
      ev.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 12;
      window.scrollTo({ top: offset, behavior: 'smooth' });
      history.replaceState(null, '', '#' + id);
    });
  });

  const input = document.getElementById('filter');
  const countEl = document.getElementById('count');
  const cards = Array.from(document.querySelectorAll('[data-entry]'));
  const total = cards.length;
  if (countEl) {
    const totalEl = countEl.parentElement.querySelector('strong:last-child');
    if (totalEl) totalEl.textContent = total;
    countEl.textContent = total;
  }

  // Pre-compute search haystacks
  cards.forEach(c => {
    const txt = c.textContent.toLowerCase();
    const id = (c.dataset.entry || '').toLowerCase();
    c._haystack = (txt + ' ' + id).replace(/\s+/g, ' ').trim();
  });

  function applyFilter() {
    const q = (input.value || '').toLowerCase().trim();
    let shown = 0;
    cards.forEach(c => {
      const match = !q || c._haystack.includes(q);
      c.classList.toggle('hidden', !match);
      if (match) shown++;
    });
    if (countEl) countEl.textContent = shown;
  }
  if (input) {
    input.addEventListener('input', applyFilter);
  }

  const overlay = document.getElementById('overlay');
  const closeBtn = document.getElementById('overlay-close');
  const elCat = document.getElementById('entry-cat');
  const elName = document.getElementById('entry-name');
  const elGk = document.getElementById('entry-gk');
  const elRoman = document.getElementById('entry-roman');
  const elBody = document.getElementById('entry-body');
  const elMeta = document.getElementById('entry-meta');

  function openEntry(id) {
    const data = ENTRIES[id];
    if (!data) return; // no extended entry — leave card alone
    elCat.textContent = data.cat || '';
    elName.textContent = data.name || '';
    elGk.textContent = data.gk || '';
    elRoman.textContent = data.roman || '';
    elBody.innerHTML = window.DOMPurify
      ? DOMPurify.sanitize(data.body || '')
      : (data.body || '');
    elMeta.textContent = '';
    if (data.meta) {
      Object.entries(data.meta).forEach(([k, v]) => {
        const div = document.createElement('div');
        const dt = document.createElement('dt'); dt.textContent = k;
        const dd = document.createElement('dd'); dd.textContent = v;
        div.appendChild(dt); div.appendChild(dd);
        elMeta.appendChild(div);
      });
    }
    overlay.classList.add('open');
    overlay.querySelector('.overlay-card').scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeEntry() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  cards.forEach(c => {
    c.addEventListener('click', () => openEntry(c.dataset.entry));
    c.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' || ev.key === ' ') {
        ev.preventDefault();
        openEntry(c.dataset.entry);
      }
    });
    c.setAttribute('tabindex', '0');
    c.setAttribute('role', 'button');
  });

  closeBtn.addEventListener('click', closeEntry);
  overlay.addEventListener('click', (ev) => {
    if (ev.target === overlay) closeEntry();
  });

  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') {
      if (overlay.classList.contains('open')) closeEntry();
      else if (document.activeElement === input) { input.blur(); input.value = ''; applyFilter(); }
    } else if (ev.key === '/' && document.activeElement !== input) {
      ev.preventDefault();
      input.focus(); input.select();
    }
  });

  if (location.hash) {
    const id = location.hash.slice(1);
    const target = document.getElementById(id);
    if (target) requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }
})();
