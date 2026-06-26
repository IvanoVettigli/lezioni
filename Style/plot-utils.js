/* ==========================================================================
   PLOT-UTILS.JS — Helper condivisi per i grafici Plotly
   --------------------------------------------------------------------------
   UN'unica implementazione, theme-aware: i colori vengono letti dalle
   variabili CSS del tema (theme.css), quindi i grafici si adattano da soli
   a tema scuro/chiaro senza duplicare codice e senza monkey-patch.

   API (window.Plt):
     Plt.linspace(a, b, n)               → array di n punti equispaziati
     Plt.evalForPlot(expr, xs, opts)     → valuta una funzione (math.js), null sui salti
     Plt.baseLayout(opts)                → layout Plotly già colorato dal tema
     Plt.config                          → config standard (responsive, no toolbar)
     Plt.draw(div, traces, layoutOpts)   → crea il grafico (Plotly.newPlot) e lo registra
     Plt.update(div, traces, layoutOpts) → aggiorna in-place (Plotly.react) — usalo con gli slider
     Plt.plotExpr(div, dataset)          → grafico di una funzione da data-attributes (esercizi)
   Al cambio tema (evento "themechange") tutti i grafici creati con draw/update
   vengono ri-colorati automaticamente.
   ========================================================================== */

(function () {
  const registry = new Set();   // grafici da ri-colorare al cambio tema
  const layouts = new WeakMap(); // ultimo layoutOpts usato per ogni div

  // Legge una variabile CSS del tema corrente
  function cssVar(name, fallback) {
    const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return v || fallback;
  }

  function themeColors() {
    return {
      plotBg:   cssVar('--surface-2', '#21262d'),
      grid:     cssVar('--border', '#30363d'),
      zero:     cssVar('--muted', '#8b949e'),
      font:     cssVar('--text', '#e6edf3'),
      primary:  cssVar('--primary', '#79c0ff'),
      accent:   cssVar('--accent', '#d2a8ff'),
      curve:    cssVar('--magenta', '#f06ab8'),
    };
  }

  function linspace(a, b, n) {
    const out = new Array(n);
    const step = (b - a) / (n - 1);
    for (let i = 0; i < n; i++) out[i] = a + i * step;
    return out;
  }

  // Valuta expr su xs; restituisce null su valori non finiti, fuori scala o sui salti (asintoti)
  function evalForPlot(expr, xs, opts = {}) {
    let compiled;
    try { compiled = math.parse(expr).compile(); }
    catch (e) { return xs.map(() => null); }

    const yLimit = opts.yLimit != null ? opts.yLimit : 1e6;
    const ys = xs.map((x) => {
      try {
        const v = compiled.evaluate({ x });
        if (typeof v !== 'number' || !isFinite(v) || Math.abs(v) > yLimit) return null;
        return v;
      } catch (e) { return null; }
    });
    // spezza la curva in corrispondenza di salti enormi di segno (asintoti verticali)
    for (let i = 1; i < ys.length; i++) {
      if (ys[i - 1] != null && ys[i] != null) {
        const dy = Math.abs(ys[i] - ys[i - 1]);
        const dx = Math.abs(xs[i] - xs[i - 1]) || 1;
        if (dy / dx > 200 && Math.sign(ys[i]) !== Math.sign(ys[i - 1])) ys[i] = null;
      }
    }
    return ys;
  }

  function baseLayout(opts = {}) {
    const c = themeColors();
    const xaxis = Object.assign({ zeroline: true }, opts.xaxis || {});
    const yaxis = Object.assign({ zeroline: true }, opts.yaxis || {});
    Object.assign(xaxis, { gridcolor: c.grid, zerolinecolor: c.zero, color: c.font });
    Object.assign(yaxis, { gridcolor: c.grid, zerolinecolor: c.zero, color: c.font });

    const layout = Object.assign({
      autosize: true,
      margin: { t: 25, b: 40, l: 50, r: 20 },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: c.plotBg,
      showlegend: false,
      font: { family: 'Inter, sans-serif', size: 12, color: c.font },
      hovermode: 'closest',
    }, opts);
    layout.xaxis = xaxis;
    layout.yaxis = yaxis;

    if (layout.showlegend) {
      layout.legend = Object.assign({
        font: { color: c.font },
        bgcolor: 'rgba(0,0,0,0)',
      }, opts.legend || {});
    } else {
      delete layout.legend;
    }
    return layout;
  }

  const config = { responsive: true, displayModeBar: false };

  function draw(div, traces, layoutOpts = {}) {
    div = typeof div === 'string' ? document.getElementById(div) : div;
    if (!div) return;
    layouts.set(div, layoutOpts);
    registry.add(div);
    Plotly.newPlot(div, traces, baseLayout(layoutOpts), config);
  }

  function update(div, traces, layoutOpts = {}) {
    div = typeof div === 'string' ? document.getElementById(div) : div;
    if (!div) return;
    layouts.set(div, layoutOpts);
    registry.add(div);
    Plotly.react(div, traces, baseLayout(layoutOpts), config);
  }

  // Grafico di una funzione descritta dai data-attributes (usato negli esercizi)
  //   data-expr  : espressione in x (sintassi math.js)
  //   data-xmin/xmax/ymin/ymax : finestra
  //   data-exclude : valori di x esclusi (virgola) → asintoti verticali tratteggiati
  //   data-hole  : "x,y" → cerchietto vuoto (discontinuità eliminabile, es. forme 0/0)
  //   data-asym  : valore L → retta orizzontale tratteggiata (limite / asintoto orizzontale)
  //   data-oblique : "m,q" → retta tratteggiata y = m·x + q (asintoto obliquo)
  function plotExpr(div, ds) {
    const xMin = parseFloat(ds.xmin != null ? ds.xmin : -6);
    const xMax = parseFloat(ds.xmax != null ? ds.xmax : 6);
    const yMin = parseFloat(ds.ymin != null ? ds.ymin : -10);
    const yMax = parseFloat(ds.ymax != null ? ds.ymax : 10);
    const excludes = (ds.exclude || '').split(',').map((s) => s.trim()).filter(Boolean).map(Number);
    const c = themeColors();

    const xs = linspace(xMin, xMax, 800);
    const ys = evalForPlot(ds.expr, xs, { yLimit: Math.max(Math.abs(yMin), Math.abs(yMax)) * 3 });

    const traces = [{
      x: xs, y: ys, type: 'scatter', mode: 'lines', name: 'f(x)',
      line: { color: c.curve, width: 2.5 }, connectgaps: false, hoverinfo: 'x+y',
    }];

    // Curva della derivata f'(x) tratteggiata (data-deriv="espressione in x")
    let showLegend = false;
    if (ds.deriv) {
      const dys = evalForPlot(ds.deriv, xs, { yLimit: Math.max(Math.abs(yMin), Math.abs(yMax)) * 3 });
      traces.push({
        x: xs, y: dys, type: 'scatter', mode: 'lines', name: "f '(x)",
        line: { color: c.accent, width: 2, dash: 'dash' }, connectgaps: false, hoverinfo: 'x+y',
      });
      showLegend = true;
    }

    if (excludes.length) {
      traces.push({
        x: excludes, y: excludes.map(() => 0), type: 'scatter', mode: 'markers',
        marker: { color: c.plotBg, size: 10, line: { color: c.curve, width: 2.5 } },
        hovertext: excludes.map((v) => `x = ${v} escluso`), hoverinfo: 'text',
      });
    }
    const shapes = excludes.map((v) => ({
      type: 'line', x0: v, x1: v, y0: yMin, y1: yMax,
      line: { color: c.curve, width: 1.5, dash: 'dash' },
    }));

    // "Buco" di una discontinuità eliminabile (forme 0/0)
    if (ds.hole) {
      const h = ds.hole.split(',').map(Number);
      traces.push({
        x: [h[0]], y: [h[1]], type: 'scatter', mode: 'markers',
        marker: { color: c.plotBg, size: 11, line: { color: c.curve, width: 2.5 } },
        hovertext: [`la funzione non è definita in x = ${h[0]}`], hoverinfo: 'text',
      });
    }
    // Retta orizzontale del limite / asintoto orizzontale
    if (ds.asym != null && ds.asym !== '') {
      shapes.push({
        type: 'line', xref: 'paper', x0: 0, x1: 1, y0: +ds.asym, y1: +ds.asym,
        line: { color: c.accent, width: 1.5, dash: 'dash' },
      });
    }
    // Asintoto obliquo y = m x + q  (data-oblique="m,q")
    if (ds.oblique) {
      const ob = ds.oblique.split(',').map(Number);
      shapes.push({
        type: 'line', x0: xMin, x1: xMax, y0: ob[0] * xMin + ob[1], y1: ob[0] * xMax + ob[1],
        line: { color: c.accent, width: 1.5, dash: 'dash' },
      });
    }

    draw(div, traces, {
      xaxis: { range: [xMin, xMax] },
      yaxis: { range: [yMin, yMax] },
      shapes,
      showlegend: showLegend,
      legend: { x: 0.02, y: 0.98, orientation: 'h' },
    });
  }

  // Ri-colora tutti i grafici quando cambia il tema (ri-applica baseLayout)
  document.addEventListener('themechange', () => {
    registry.forEach((div) => {
      if (div._fullLayout) Plotly.relayout(div, baseLayout(layouts.get(div) || {}));
    });
  });

  window.Plt = { linspace, evalForPlot, baseLayout, config, draw, update, plotExpr, themeColors, cssVar };
})();
