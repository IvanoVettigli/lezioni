/* ==========================================================================
   TOC.JS — Indice dei capitoli auto-generato (con scrollspy)
   --------------------------------------------------------------------------
   Scansiona le <section id="…"> dentro <main> che hanno un <h2> e costruisce
   una barra di navigazione a pillole, inserita subito dopo il breadcrumb.
   Da includere SOLO nelle pagine-lezione (con "defer").
   Nessun markup da aggiungere alla lezione: basta lo <script>.
   ========================================================================== */

(function () {
  function build() {
    const main = document.querySelector('main');
    if (!main) return;
    const sections = Array.from(main.querySelectorAll(':scope > section[id]'))
      .filter((s) => s.querySelector('h2'));
    if (sections.length < 2) return;

    const nav = document.createElement('nav');
    nav.className = 'lesson-toc';
    nav.setAttribute('aria-label', 'Indice della lezione');

    const head = document.createElement('button');
    head.type = 'button';
    head.className = 'toc-head';
    head.innerHTML = '<span>📑 Indice della lezione</span><span class="toc-caret">▾</span>';

    const list = document.createElement('ol');
    list.className = 'toc-list';

    const byId = {};
    sections.forEach((sec) => {
      const a = document.createElement('a');
      a.href = '#' + sec.id;
      a.innerHTML = sec.querySelector('h2').innerHTML; // math reso da KaTeX
      const li = document.createElement('li');
      li.appendChild(a);
      list.appendChild(li);
      byId[sec.id] = a;
    });

    nav.appendChild(head);
    nav.appendChild(list);

    const anchor = document.querySelector('.breadcrumb') || document.querySelector('header.hero');
    if (anchor && anchor.parentNode) anchor.parentNode.insertBefore(nav, anchor.nextSibling);
    else main.parentNode.insertBefore(nav, main);

    // Rende eventuali formule rimaste grezze nelle voci dell'indice
    if (typeof renderMathIn === 'function') renderMathIn(nav);

    // Apri/chiudi
    head.addEventListener('click', () => nav.classList.toggle('collapsed'));

    // Scrollspy: evidenzia il capitolo corrente
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            Object.values(byId).forEach((a) => a.classList.remove('active'));
            if (byId[e.target.id]) byId[e.target.id].classList.add('active');
          }
        });
      }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
      sections.forEach((s) => obs.observe(s));
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
