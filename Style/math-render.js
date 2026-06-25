/* ==========================================================================
   MATH-RENDER.JS — Rendering formule con KaTeX
   --------------------------------------------------------------------------
   Da usare SOLO nelle pagine-lezione (non serve negli indici).
   Richiamata da auto-render.min.js con onload="renderMathInDocument()".
   Idempotente: chiamarla più volte non duplica le formule.
   Delimitatori: $…$ e \(…\) inline; $$…$$ e \[…\] display.
   ========================================================================== */

const _KATEX_DELIMS = [
  { left: '$$', right: '$$', display: true },
  { left: '\\[', right: '\\]', display: true },
  { left: '\\(', right: '\\)', display: false },
  { left: '$',  right: '$',  display: false },
];

// Renderizza le formule in un elemento qualsiasi (per contenuti dinamici:
// soluzioni rivelate, feedback dei quiz, ecc.). Usato da interactive.js / quiz.js.
function renderMathIn(el) {
  if (!el || typeof renderMathInElement !== 'function') return;
  renderMathInElement(el, {
    delimiters: _KATEX_DELIMS,
    throwOnError: false,
    ignoredClasses: ['plot', 'plot-container'],
  });
}

let _mathRendered = false;
function renderMathInDocument() {
  if (_mathRendered) return;
  if (typeof renderMathInElement !== 'function') return;
  renderMathIn(document.body);
  _mathRendered = true;
}

window.addEventListener('load', () => setTimeout(renderMathInDocument, 200));
