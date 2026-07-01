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
        { file: 'Riepilogo_1_Funzioni_Dominio_Limiti.html', title: '📋 Riepilogo 1 · Funzioni, Dominio, Limiti', desc: 'Ripasso lez. 1-3: mappa concettuale cliccabile, sunti, grafici interattivi (simmetrie, trasformazioni), definizioni e dimostrazioni a scomparsa', type: 'riepilogo' },
        { file: 'Verifica_1_Funzioni_Dominio_Limiti.html', title: '📝 Verifica di prova · Funzioni, Dominio, Limiti', desc: 'Allenati con una verifica completa (lez. 1-3): 10 quesiti a scelta multipla a correzione automatica, 5 a risposta aperta e 5 in stile INVALSI con soluzioni guidate', type: 'verifica' },
        { file: '4_Indeterminate.html', title: 'Le forme indeterminate', desc: 'Le 7 forme e le tecniche per risolverle, con 21 esercizi svolti' },
        { file: '5_Notevoli_gerarchia_infiniti.html', title: 'Limiti notevoli e gerarchia degli infiniti', desc: 'Limiti goniometrici, numero e, log/esp e ordini di infinito (col fattoriale)' },
        { file: '6_Continuita_asintoti.html', title: 'Continuità e asintoti', desc: 'Definizione di continuità, tipi di discontinuità e asintoti (verticale, orizzontale, obliquo)' },
        { file: 'Riepilogo_2_Indeterminate_Notevoli_Continuita.html', title: '📋 Riepilogo 2 · Forme indeterminate, Notevoli, Continuità', desc: 'Ripasso lez. 4-6: mappa concettuale, sunti, dimostrazioni a scomparsa ed esercizi guidati con grafici', type: 'riepilogo' },
        { file: 'Verifica_2_Indeterminate_Notevoli_Continuita.html', title: '📝 Verifica di prova · Forme indeterminate, Notevoli, Continuità', desc: 'Allenati con una verifica completa (lez. 4-6): 10 quesiti a scelta multipla a correzione automatica, 5 a risposta aperta e 5 di ragionamento con soluzioni guidate', type: 'verifica' },
        { file: '7_Successioni_serie.html', title: 'Successioni e serie', desc: 'Successioni e progressioni, principio di induzione, somma di Gauss, Fibonacci e serie' },
        { file: '8_Rapporto_incrementale.html', title: 'Il rapporto incrementale e la derivata', desc: 'Rapporto incrementale, derivata come limite, interpretazioni di Newton e Leibniz, calcolo su 4 famiglie di funzioni' },
        { file: '9_Derivate.html', title: 'Le derivate: tabella, regole e teoremi', desc: 'Derivate fondamentali, regole di derivazione con dimostrazioni ed esercizi, teoremi di Rolle, Lagrange e Cauchy' },
        { file: 'Riepilogo_3_Successioni_Derivate.html', title: '📋 Riepilogo 3 · Successioni, Rapporto incrementale, Derivate', desc: 'Ripasso lez. 7-9: mappa concettuale, sunti, dimostrazioni a scomparsa ed esercizi guidati con grafici', type: 'riepilogo' },
        { file: 'Verifica_3_Successioni_Derivate.html', title: '📝 Verifica di prova · Successioni, Rapporto incrementale, Derivate', desc: 'Allenati con una verifica completa (lez. 7-9): 10 quesiti a scelta multipla a correzione automatica, 5 a risposta aperta e 5 di ragionamento con soluzioni guidate', type: 'verifica' },
        { file: '10_Integrali.html', title: 'Gli integrali', desc: 'Integrale indefinito e costante C, somme di Riemann, integrale definito e teorema fondamentale del calcolo' },
        { file: '11_Tecniche_calcolo_integrali.html', title: 'Tecniche di calcolo degli integrali', desc: 'Tabella, integrazione per parti e per sostituzione, simmetrie, corno di Gabriele e integrale di Gauss' },
        { file: '12_Studio_di_funzione.html', title: 'Studio di funzione', desc: 'La roadmap completa con grafici interattivi a step su 14 funzioni, dalle polinomiali alla Gaussiana e Maxwell' },
        { file: 'Riepilogo_4_Integrali_Studio_funzione.html', title: '📋 Riepilogo 4 · Integrali, Tecniche, Studio di funzione', desc: 'Ripasso lez. 10-12: mappa concettuale, sunti, dimostrazioni a scomparsa ed esercizi guidati con grafici', type: 'riepilogo' },
        { file: 'Verifica_4_Integrali_Studio_funzione.html', title: '📝 Verifica di prova · Integrali, Tecniche, Studio di funzione', desc: 'Allenati con una verifica completa (lez. 10-12): 10 quesiti a scelta multipla a correzione automatica, 5 a risposta aperta e 5 di ragionamento con soluzioni guidate', type: 'verifica' },
      ] },
    ],
  },

  fisica: {
    label: 'Fisica',
    icon: '⚛️',
    years: [
      { folder: 'Fisica_3', year: 3, title: 'Terzo anno',   lessons: [] },
      { folder: 'Fisica_4', year: 4, title: 'Quarto anno',  lessons: [] },
      { folder: 'Fisica_5', year: 5, title: 'Quinto anno',  lessons: [
        { file: '1_Corrente_elettrica.html', title: 'La corrente elettrica', desc: 'Corrente continua, elementi circuitali, le due leggi di Ohm, condensatori e capacità, collegamenti in serie e in parallelo, il multimetro' },
        { file: '2_Circuiti_elettrici.html', title: 'I circuiti elettrici', desc: 'Leggi di Kirchhoff, risoluzione circuiti, induttanza, corrente alternata vs continua, bolletta elettrica, motori e generatori' },
      ] },
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
