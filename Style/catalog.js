/* ==========================================================================
   CATALOG.JS — Catalogo centrale del sito
   --------------------------------------------------------------------------
   QUESTO è l'UNICO file da modificare per aggiungere contenuti.
   La home e le pagine-indice di ogni anno si generano da qui (render.js).

   COME AGGIUNGERE UNA LEZIONE
   ---------------------------
   1. Crea il file HTML dentro la cartella dell'anno (es. Matematica_5/),
      partendo da Style/_template-lezione.html
   2. Aggiungi una riga nell'array "lessons" dell'anno giusto qui sotto:
        { file: "1_Funzioni.html", title: "Le funzioni", desc: "Dominio, codominio, grafici" }
   Fatto: comparirà automaticamente nell'indice dell'anno.

   COME AGGIUNGERE UNA SCHEDA DI LABORATORIO
   -----------------------------------------
   1. Metti il PDF dentro Laboratorio/
   2. Aggiungi una riga in SITE_LAB:
        { title: "Legge di Hooke", pdf: "Hooke.pdf", desc: "...", tags: ["Fisica 3"] }
   ========================================================================== */

window.SITE_CATALOG = {
  matematica: {
    label: 'Matematica con elementi di Informatica',
    icon: '📐',
    years: [
      { folder: 'Matematica_1', year: 1, title: 'Primo anno',   lessons: [] },
      { folder: 'Matematica_2', year: 2, title: 'Secondo anno', lessons: [] },
      { folder: 'Matematica_3', year: 3, title: 'Terzo anno',   lessons: [] },
      { folder: 'Matematica_4', year: 4, title: 'Quarto anno',  lessons: [] },
      { folder: 'Matematica_5', year: 5, title: 'Quinto anno',  lessons: [
        { file: '1_Funzioni.html', title: 'Le funzioni', desc: 'Dominio, codominio, simmetrie, trasformazioni, inversa e composizione' },
        { file: '2_Dominio.html', title: 'Il dominio di una funzione', desc: 'Campo di esistenza: fratte, radici, logaritmi, trigonometriche' },
        { file: '3_Limiti.html', title: 'I limiti di una funzione', desc: 'Definizione ε-δ, le quattro tipologie, limiti laterali, teoremi' },
        { file: '4_Indeterminate.html', title: 'Le forme indeterminate', desc: 'Le 7 forme e le tecniche per risolverle, con 21 esercizi svolti' },
        { file: '5_Notevoli_gerarchia_infiniti.html', title: 'Limiti notevoli e gerarchia degli infiniti', desc: 'Limiti goniometrici, numero e, log/esp e ordini di infinito (col fattoriale)' },
      ] },
    ],
  },

  fisica: {
    label: 'Fisica',
    icon: '⚛️',
    years: [
      { folder: 'Fisica_3', year: 3, title: 'Terzo anno',   lessons: [] },
      { folder: 'Fisica_4', year: 4, title: 'Quarto anno',  lessons: [] },
      { folder: 'Fisica_5', year: 5, title: 'Quinto anno',  lessons: [] },
      { folder: 'Laboratorio', year: null, title: '🧪 Laboratorio', meta: 'Schede PDF', lessons: [] },
    ],
  },
};

/* Schede di laboratorio (solo link di download ai PDF in Laboratorio/) */
window.SITE_LAB = [
  {
    title: 'Misure dirette e indirette e propagazione delle incertezze',
    pdf: 'Misure_dirette_indirette_propagazione.pdf',
    desc: 'Strumenti di misura, cifre significative, errore assoluto e relativo, propagazione delle incertezze',
    tags: ['Fisica 1°'],
  },
  {
    title: 'Misura dell\'accelerazione di gravità con il pendolo semplice',
    pdf: 'Misura_accelerazione_gravita_pendolo.pdf',
    desc: 'Periodo del pendolo, regressione lineare, stima sperimentale di g con analisi degli errori',
    tags: ['Fisica 1°'],
  },
  {
    title: 'Verifica sperimentale della legge di Hooke',
    pdf: 'Verifica_legge_di_Hooke.pdf',
    desc: 'Allungamento di una molla in funzione del carico, misura della costante elastica k',
    tags: ['Fisica 1°'],
  },
  {
    title: 'Verifica sperimentale della legge di Ohm',
    pdf: 'Legge_di_Ohm.pdf',
    desc: 'Circuiti in serie e parallelo, misura di tensione e corrente, calcolo della resistenza',
    tags: ['Fisica 3°'],
  },
  {
    title: 'Simulare un semaforo con Arduino',
    pdf: 'Semaforo_Arduino.pdf',
    desc: 'Programmazione di un microcontrollore, LED, temporizzazione e logica di controllo',
    tags: ['Fisica 3°', 'Informatica'],
  },
];
