/* ==========================================================================
   RENDER.JS — Genera dinamicamente le pagine dal catalogo
   --------------------------------------------------------------------------
   Decide cosa renderizzare in base a <body data-page="…">:
     • "home"    → griglia materie/anni            (legge SITE_CATALOG)
     • "section" → lista lezioni di un anno         (data-section, data-folder)
     • "lab"     → schede PDF di laboratorio        (legge SITE_LAB)
   Da includere con "defer", dopo catalog.js.
   ========================================================================== */

(function () {
  const esc = (s) => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  function renderHome(root) {
    const cat = window.SITE_CATALOG || {};
    root.innerHTML = Object.keys(cat).map((key) => {
      const subj = cat[key];
      const cards = subj.years.map((y) => {
        const n = y.lessons ? y.lessons.length : 0;
        // y.meta sovrascrive il conteggio lezioni (es. "Schede PDF" per il Laboratorio)
        const meta = y.meta || (n === 0 ? 'In preparazione' : n === 1 ? '1 lezione' : n + ' lezioni');
        // y.badge sovrascrive l'etichetta della scheda (es. "Informatica", "Laboratorio")
        const badge = y.badge || (y.year ? esc(subj.label) + ' · ' + y.year + '°' : esc(subj.label));
        return `
          <a class="year-card" href="${esc(y.folder)}/index.html">
            <span class="yc-badge">${badge}</span>
            <span class="yc-title">${esc(y.title)}</span>
            <span class="yc-meta">${meta}</span>
          </a>`;
      }).join('');
      return `
        <div class="subject-block">
          <h2 class="subject-title"><span class="icon">${subj.icon || ''}</span>${esc(subj.label)}</h2>
          <div class="card-grid">${cards}</div>
        </div>`;
    }).join('');
  }

  function renderSection(root) {
    const cat = window.SITE_CATALOG || {};
    const sectionKey = document.body.dataset.section;
    const folder = document.body.dataset.folder;
    const subj = cat[sectionKey];
    const entry = subj && subj.years.find((y) => y.folder === folder);
    const lessons = (entry && entry.lessons) || [];

    if (!lessons.length) {
      root.innerHTML = `
        <div class="empty-state">
          <span class="es-emoji">🚧</span>
          Nessuna lezione ancora pubblicata per questa sezione.<br>
          Le lezioni compariranno qui appena saranno pronte.
        </div>`;
      return;
    }

    root.innerHTML = `<ol class="lesson-list">` + lessons.map((l, i) => `
      <li class="lesson-item">
        <a href="${esc(l.file)}">
          <span class="li-num">${i + 1}</span>
          <span class="li-body">
            <span class="li-title">${esc(l.title)}</span>
            ${l.desc ? `<span class="li-desc">${esc(l.desc)}</span>` : ''}
          </span>
        </a>
      </li>`).join('') + `</ol>`;
  }

  function renderLab(root) {
    const items = window.SITE_LAB || [];
    if (!items.length) {
      root.innerHTML = `
        <div class="empty-state">
          <span class="es-emoji">🧪</span>
          Nessuna scheda di laboratorio disponibile al momento.
        </div>`;
      return;
    }
    root.innerHTML = `<ul class="lab-list">` + items.map((it) => `
      <li class="lab-item">
        <span class="lab-icon">📄</span>
        <span class="lab-body">
          <span class="lab-title">${esc(it.title)}</span>
          ${it.desc ? `<span class="lab-desc">${esc(it.desc)}</span>` : ''}
          ${(it.tags && it.tags.length)
            ? `<span class="lab-tags">${it.tags.map((t) => `<span class="lab-tag">${esc(t)}</span>`).join('')}</span>`
            : ''}
        </span>
        <a class="btn btn-download" href="${esc(it.pdf)}" download>⬇ Scarica PDF</a>
      </li>`).join('') + `</ul>`;
  }

  function init() {
    const page = document.body.dataset.page;
    const root = document.getElementById('app');
    if (!root) return;
    if (page === 'home') renderHome(root);
    else if (page === 'section') renderSection(root);
    else if (page === 'lab') renderLab(root);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
