/* ==========================================================================
   INTERACTIVE.JS — Comportamenti UI condivisi (event delegation)
   --------------------------------------------------------------------------
   Un solo meccanismo, dichiarativo: nelle lezioni NON serve scrivere JS per
   mostrare/nascondere soluzioni o grafici.

   SOLUZIONI / GRAFICI DEGLI ESERCIZI
     <div class="exercise" data-expr="..." data-xmin="-6" data-xmax="6">
       <button class="btn btn-toggle btn-solution">💡 Mostra soluzione</button>
       <button class="btn btn-toggle btn-graph">📈 Mostra grafico</button>
       <div class="solution"> ...passi e risultato... </div>
       <div class="plot-wrap"><div class="plot"></div></div>
     </div>

   TOGGLE GENERICO (per qualsiasi elemento)
     <button class="btn btn-toggle" data-target="#id" data-label-show="Mostra"
             data-label-hide="Nascondi">Mostra</button>
     <div id="id" class="toggle-target"> ...contenuto... </div>
   ========================================================================== */

(function () {
  function renderMath(el) { if (typeof renderMathIn === 'function') renderMathIn(el); }

  function setLabel(btn, shown) {
    const show = btn.dataset.labelShow;
    const hide = btn.dataset.labelHide;
    if (show && hide) { btn.textContent = shown ? hide : show; return; }
    // etichette di default per i bottoni standard
    const t = btn.textContent;
    if (btn.classList.contains('btn-solution')) {
      btn.textContent = shown ? '🙈 Nascondi soluzione' : '💡 Mostra soluzione';
    } else if (btn.classList.contains('btn-graph')) {
      btn.textContent = shown ? '🙈 Nascondi grafico' : '📈 Mostra grafico';
    } else if (t) {
      btn.textContent = t; // lascia invariato
    }
  }

  function toggleEl(el) {
    const shown = !el.classList.contains('show');
    el.classList.toggle('show', shown);
    return shown;
  }

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-toggle, .btn-solution, .btn-graph');
    if (!btn) return;

    // 1) target esplicito via data-target
    if (btn.dataset.target) {
      const el = document.querySelector(btn.dataset.target);
      if (el) { const shown = toggleEl(el); setLabel(btn, shown); if (shown) renderMath(el); }
      return;
    }

    const ex = btn.closest('.exercise') || btn.parentElement;

    // 2) bottone soluzione
    if (btn.classList.contains('btn-solution')) {
      const sol = ex.querySelector('.solution, .solution-content');
      if (sol) { const shown = toggleEl(sol); setLabel(btn, shown); if (shown) renderMath(sol); }
      return;
    }

    // 3) bottone grafico (plot lazy dai data-attributes dell'esercizio)
    if (btn.classList.contains('btn-graph')) {
      const wrap = ex.querySelector('.plot-wrap');
      const plot = ex.querySelector('.plot');
      if (!wrap || !plot) return;
      const shown = toggleEl(wrap);
      setLabel(btn, shown);
      if (shown) {
        if (!plot.dataset.plotted && window.Plt && ex.dataset.expr) {
          Plt.plotExpr(plot, ex.dataset);
          plot.dataset.plotted = '1';
        }
        if (window.Plotly) setTimeout(() => Plotly.Plots.resize(plot), 60);
      }
    }
  });
})();
