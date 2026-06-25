/* ==========================================================================
   QUIZ.JS — Quiz condiviso (scelta multipla + risposta aperta)
   --------------------------------------------------------------------------
   Nella lezione basta:
     1) un contenitore:  <div id="quiz-app"></div>
     2) i dati:          <script>window.quizData = [ {…}, {…} ];</script>

   Domanda a scelta multipla:
     { type: 'mc', diff: 'easy'|'medium'|'hard', text: 'testo $LaTeX$',
       options: ['a','b','c','d'], correct: 0, explain: 'spiegazione' }

   Domanda a risposta aperta (valutata per parole chiave):
     { type: 'open', text: 'domanda',
       keywords: ['parola1','parola2',…], requiredMatches: 2, explain: '…' }

   Tutta la UI (domande, pulsanti, punteggio) è generata qui.
   ========================================================================== */

(function () {
  const root = document.getElementById('quiz-app');
  if (!root || typeof window.quizData === 'undefined') return;
  const data = window.quizData;
  const DIFF = { easy: 'Facile', medium: 'Medio', hard: 'Difficile' };

  root.innerHTML =
    '<div id="quiz-container"></div>' +
    '<div class="quiz-actions">' +
      '<button class="btn btn-primary" id="quiz-submit">📊 Calcola punteggio</button>' +
      '<button class="btn" id="quiz-reset">⟲ Ricomincia</button>' +
    '</div>' +
    '<div class="quiz-score" id="quiz-score">' +
      '<span class="qs-num" id="quiz-score-num"></span>' +
      '<span class="qs-msg" id="quiz-score-msg"></span>' +
    '</div>';

  const container = root.querySelector('#quiz-container');
  container.innerHTML = data.map((q, i) => {
    const head = `<div class="q-head"><span class="q-num">${i + 1}</span>` +
      (q.diff ? `<span class="q-diff ${q.diff}">${DIFF[q.diff] || 'Medio'}</span>` : '') +
      `</div><div class="q-text">${q.text}</div>`;
    const body = (q.type === 'open')
      ? `<div class="quiz-open"><textarea id="q${i}-text" placeholder="Scrivi la tua risposta…"></textarea></div>`
      : `<ul class="quiz-options">${q.options.map((opt, j) =>
          `<li><label data-idx="${j}"><input type="radio" name="q${i}" value="${j}"><span>${opt}</span></label></li>`
        ).join('')}</ul>`;
    return `<div class="quiz-question">${head}${body}<div class="feedback" id="fb-${i}"></div></div>`;
  }).join('');

  if (typeof renderMathIn === 'function') renderMathIn(container);

  function labels(i) {
    return container.querySelectorAll(`.quiz-question:nth-child(${i + 1}) .quiz-options label`);
  }

  function gradeMC(q, i, fb) {
    const ls = labels(i);
    ls.forEach((l) => l.classList.remove('correct', 'incorrect', 'expected'));
    const chosen = document.querySelector(`input[name="q${i}"]:checked`);
    if (!chosen) {
      if (ls[q.correct]) ls[q.correct].classList.add('expected');
      fb.classList.add('show', 'ko');
      fb.innerHTML = '⚠ Nessuna risposta selezionata. ' + (q.explain || '');
      return 0;
    }
    const idx = +chosen.value;
    if (idx === q.correct) {
      ls[idx].classList.add('correct');
      fb.classList.add('show', 'ok');
      fb.innerHTML = '✓ Corretto! ' + (q.explain || '');
      return 1;
    }
    ls[idx].classList.add('incorrect');
    if (ls[q.correct]) ls[q.correct].classList.add('expected');
    fb.classList.add('show', 'ko');
    fb.innerHTML = '✗ Non corretta. ' + (q.explain || '');
    return 0;
  }

  function gradeOpen(q, i, fb) {
    const ans = (document.getElementById(`q${i}-text`).value || '').toLowerCase();
    if (!ans.trim()) {
      fb.classList.add('show', 'ko');
      fb.innerHTML = '⚠ Risposta vuota. ' + (q.explain || '');
      return 0;
    }
    const matches = q.keywords.filter((k) => ans.includes(k.toLowerCase())).length;
    const need = q.requiredMatches || 1;
    if (matches >= need) {
      fb.classList.add('show', 'ok');
      fb.innerHTML = `✓ Buona risposta! (parole chiave: ${matches}/${q.keywords.length}). ` + (q.explain || '');
      return 1;
    }
    if (matches > 0) {
      fb.classList.add('show', 'partial');
      fb.innerHTML = `~ Risposta parziale (parole chiave: ${matches}/${q.keywords.length}, ne servivano ${need}). ` + (q.explain || '');
      return 0;
    }
    fb.classList.add('show', 'ko');
    fb.innerHTML = '✗ Risposta lontana dal concetto richiesto. ' + (q.explain || '');
    return 0;
  }

  function evaluate() {
    let score = 0;
    data.forEach((q, i) => {
      const fb = document.getElementById(`fb-${i}`);
      fb.className = 'feedback';
      score += (q.type === 'open') ? gradeOpen(q, i, fb) : gradeMC(q, i, fb);
      if (typeof renderMathIn === 'function') renderMathIn(fb);
    });

    const box = document.getElementById('quiz-score');
    document.getElementById('quiz-score-num').textContent = `${score} / ${data.length}`;
    const r = score / data.length;
    document.getElementById('quiz-score-msg').textContent =
      r === 1 ? 'Perfetto! Hai padroneggiato i concetti della lezione.'
      : r >= 0.8 ? 'Ottimo risultato: pochi dettagli da rivedere.'
      : r >= 0.6 ? 'Bene, ma puoi migliorare: rileggi dove hai sbagliato.'
      : r >= 0.4 ? 'Sufficiente: torna ai concetti chiave e riprova.'
      : 'Rivedi la lezione con calma e ritenta.';
    box.classList.add('show');
    box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function reset() {
    data.forEach((q, i) => {
      const fb = document.getElementById(`fb-${i}`);
      if (fb) fb.className = 'feedback';
      if (q.type === 'open') {
        const ta = document.getElementById(`q${i}-text`);
        if (ta) ta.value = '';
      } else {
        document.querySelectorAll(`input[name="q${i}"]`).forEach((r) => (r.checked = false));
        labels(i).forEach((l) => l.classList.remove('correct', 'incorrect', 'expected'));
      }
    });
    document.getElementById('quiz-score').classList.remove('show');
  }

  root.querySelector('#quiz-submit').addEventListener('click', evaluate);
  root.querySelector('#quiz-reset').addEventListener('click', reset);
})();
