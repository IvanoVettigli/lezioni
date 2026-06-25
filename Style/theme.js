/* ==========================================================================
   THEME.JS — Gestione tema scuro/chiaro
   --------------------------------------------------------------------------
   Da includere nel <head> SENZA defer, così la prima parte (applicazione
   del tema salvato) gira prima del rendering ed evita il "flash" di tema.
   Default: SCURO. Il tema chiaro si attiva con la classe .light su <html>.
   ========================================================================== */

/* 1) Applica subito il tema salvato (eseguito durante il parsing dell'<head>) */
(function applySavedTheme() {
  try {
    if (localStorage.getItem('theme') === 'light') {
      document.documentElement.classList.add('light');
    }
  } catch (e) { /* localStorage non disponibile: resta dark */ }
})();

/* 2) Inietta il pulsante e gestisce il toggle (a DOM pronto) */
(function themeToggle() {
  const html = document.documentElement;
  const isLight = () => html.classList.contains('light');

  // Notifica il cambio tema; i grafici (plot-utils.js) si ri-colorano da soli.
  function notifyThemeChange() {
    document.dispatchEvent(new CustomEvent('themechange', { detail: { light: isLight() } }));
  }

  function makeButton() {
    let btn = document.getElementById('theme-toggle');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'theme-toggle';
      btn.type = 'button';
      btn.setAttribute('aria-label', 'Cambia tema');
      document.body.appendChild(btn);
    }
    const sync = () => { btn.textContent = isLight() ? '🌙 Scuro' : '☀️ Chiaro'; };
    sync();
    btn.addEventListener('click', () => {
      html.classList.toggle('light');
      try { localStorage.setItem('theme', isLight() ? 'light' : 'dark'); } catch (e) {}
      sync();
      notifyThemeChange();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', makeButton);
  } else {
    makeButton();
  }
})();
