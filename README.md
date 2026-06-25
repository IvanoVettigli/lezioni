# Lezioni di Matematica, Informatica e Fisica

Sito web statico con le lezioni di **Matematica** (1ª–5ª), **Fisica** (3ª–5ª) e
**Informatica**, più le **schede di laboratorio** in PDF. Pensato per essere
pubblicato su **GitHub Pages**.

## Struttura

```
index.html              ← home con i 9 link (5 Matematica · 3 Fisica · 1 Informatica)
Matematica_1 … _5/      ← una cartella per anno, con index.html (elenco lezioni) + le lezioni
Fisica_3 … _5/          ← idem per fisica
Informatica/            ← lezioni di informatica
Laboratorio/            ← schede di laboratorio in PDF + index.html con i download
Style/                  ← tutto il codice condiviso (CSS + JS)
  ├─ theme.css            variabili dei temi, reset, layout
  ├─ components.css       card, liste, callout, tabelle, indice capitoli
  ├─ interactive.css      esercizi, slider, demo, quiz (solo lezioni)
  ├─ theme.js             tema scuro/chiaro (default: scuro) + pulsante
  ├─ catalog.js           ★ catalogo: l'UNICO file da editare per i contenuti
  ├─ render.js            genera home / indici / laboratorio dal catalogo
  ├─ math-render.js       rendering formule (KaTeX)
  ├─ plot-utils.js        helper Plotly theme-aware (grafici)
  ├─ interactive.js       toggle soluzioni/grafici negli esercizi
  ├─ quiz.js              quiz a scelta multipla / risposta aperta
  ├─ toc.js               indice dei capitoli auto-generato (navigazione)
  └─ _template-lezione.html  modello da copiare per una nuova lezione
```

## Tecnologie (sempre le stesse, per coerenza)

- **KaTeX 0.16.9** — formule matematiche (`$…$`, `$$…$$`)
- **Plotly 2.27.0** — grafici interattivi
- **math.js 12.4.1** — calcolo/valutazione espressioni nelle demo
- Tema **scuro di default**, chiaro attivabile col pulsante (preferenza salvata in `localStorage`)

## Aggiungere una lezione

1. Copia `Style/_template-lezione.html` nella cartella dell'anno (es. `Matematica_5/`)
   e rinominalo, es. `1_Funzioni.html`.
2. Scrivi il contenuto (titolo, sezioni, formule, grafici).
3. Apri `Style/catalog.js` e aggiungi una riga nell'array `lessons` dell'anno giusto:

   ```js
   { file: '1_Funzioni.html', title: 'Le funzioni', desc: 'Dominio, codominio, grafici' }
   ```

La lezione comparirà automaticamente nell'indice dell'anno.

## Aggiungere una scheda di laboratorio

1. Metti il PDF nella cartella `Laboratorio/`.
2. In `Style/catalog.js` aggiungi una riga a `SITE_LAB`:

   ```js
   { title: 'Legge di Hooke', pdf: 'Hooke.pdf', desc: 'Costante elastica di una molla', tags: ['Fisica 3'] }
   ```

## Pubblicazione su GitHub Pages

1. Crea un repository su GitHub e carica questi file.
2. Settings → Pages → Source: `main` / root.
3. Il sito sarà su `https://<utente>.github.io/<repo>/`.

> Nota: il sito funziona anche aperto in locale (doppio clic su `index.html`),
> perché i dati arrivano da `catalog.js` (nessuna chiamata `fetch`, niente CORS).
