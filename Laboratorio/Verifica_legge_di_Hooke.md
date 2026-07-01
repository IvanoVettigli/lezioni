---
title: "Esperienza laboratoriale di fisica"
subtitle: "Verifica sperimentale della legge di Hooke e misura della costante elastica"
author: ""
date: ""
lang: it
fontsize: 12pt
geometry: margin=2.5cm
numbersections: true
toc: true
toc-depth: 2
header-includes:
  - \usepackage{tikz}
  - \usetikzlibrary{arrows.meta,decorations.pathmorphing,patterns}
  - \usepackage{icomma}
  - \usepackage{booktabs}
  - \usepackage{amsmath}
  - \usepackage{float}
  - \usepackage{enumitem}
---

# Introduzione e obiettivi

In questa esperienza studieremo il comportamento di una molla: come si deforma
quando le applichiamo una forza e se vale la **legge di Hooke**, che prevede
una proporzionalità diretta tra forza applicata e allungamento.

Gli obiettivi sono:

- verificare sperimentalmente la legge di Hooke su una molla reale;
- misurare la **costante elastica** $k$ della molla e stimarne l'incertezza;
- costruire il grafico $F$ in funzione di $\Delta x$ e verificare che sia una
  retta passante per l'origine;
- ricavare $k$ dal coefficiente angolare della retta (metodo grafico).

# Richiami teorici

## La forza elastica e la legge di Hooke

Quando una molla viene allungata o compressa rispetto alla sua lunghezza
**a riposo** $L_0$, essa esercita una **forza di richiamo** diretta verso la
posizione di equilibrio. Questa forza si chiama **forza elastica** e obbedisce
alla **legge di Hooke** (Robert Hooke, 1678):

$$F = -k\,\Delta x$$

dove:

- $F$ è la forza elastica (N);
- $k$ è la **costante elastica** della molla (N/m): più è grande, più la molla
  è rigida;
- $\Delta x = L - L_0$ è l'**allungamento** rispetto alla lunghezza a riposo (m);
- il segno **meno** indica che la forza è di richiamo (opposta allo spostamento).

> **Attenzione: allungamento $\neq$ lunghezza.**
> $\Delta x$ è la *differenza* tra la lunghezza con il peso appeso ($L$) e la
> lunghezza a riposo ($L_0$): $\Delta x = L - L_0$.
> È fondamentale misurare $L_0$ prima di appendere qualsiasi peso.

```{=latex}
\begin{figure}[H]
\centering
\begin{tikzpicture}[font=\footnotesize, line width=0.8pt,
    spring/.style={decorate, decoration={coil, aspect=0.4,
                   segment length=4pt, amplitude=5pt}}]
  % ===== sinistra: a riposo =====
  \fill[gray!25] (-1.8,0.1) rectangle (-0.3,0.3);
  \foreach \i in {-1.7,-1.4,-1.1,-0.8,-0.5}{
    \draw[gray!60, line width=0.4pt] (\i,0.1) -- ++(0.2,0.17);
  }
  \draw[thick] (-1.8,0.1) -- (-0.3,0.1);
  \fill (-1.05,0.1) circle (0.04);
  % molla a riposo
  \draw[spring] (-1.05,0.1) -- (-1.05,-2.8);
  \fill (-1.05,-2.8) circle (0.04);
  % bracket L0
  \draw[{|-|}] (-1.7,0.1) -- (-1.7,-2.8) node[midway,left] {$L_0$};
  \node[below, font=\scriptsize] at (-1.05,-3.1) {a riposo};

  % ===== destra: con massa =====
  \fill[gray!25] (0.3,0.1) rectangle (1.8,0.3);
  \foreach \i in {0.4,0.7,1.0,1.3,1.6}{
    \draw[gray!60, line width=0.4pt] (\i,0.1) -- ++(0.2,0.17);
  }
  \draw[thick] (0.3,0.1) -- (1.8,0.1);
  \fill (1.05,0.1) circle (0.04);
  % molla allungata (L0 + delta_x)
  \draw[spring] (1.05,0.1) -- (1.05,-4.0);
  % massa
  \fill[gray!30] (0.65,-4.0) rectangle (1.45,-4.55);
  \draw (0.65,-4.0) rectangle (1.45,-4.55);
  \node at (1.05,-4.28) {$m$};
  % bracket L
  \draw[{|-|}] (1.75,0.1) -- (1.75,-4.0) node[midway,right] {$L$};
  % bracket delta_x (trattino orizzontale al livello di L0)
  \draw[dashed, gray!60, line width=0.5pt] (-1.05,-2.8) -- (0.30,-2.8);
  \draw[dashed, gray!60, line width=0.5pt] (1.05,-2.8) -- (0.30,-2.8);
  \draw[{|-|}, gray!80] (0.30,-2.8) -- (0.30,-4.0) node[midway,left,gray!80] {$\Delta x$};
  \node[below, font=\scriptsize] at (1.05,-4.75) {con massa $m$};
\end{tikzpicture}
\caption{Molla a riposo (sinistra) e con una massa $m$ appesa (destra). L'allungamento $\Delta x = L - L_0$ è la differenza tra le due lunghezze.}
\end{figure}
```

## La legge di Hooke come proporzionalità diretta

Considerando solo il modulo (e quindi $\Delta x > 0$ e $F > 0$ nel nostro
esperimento dove applichiamo pesi verso il basso):

$$F = k\,\Delta x$$

Questa è una **proporzionalità diretta**: raddoppiando l'allungamento, la forza
raddoppia. Confrontandola con l'equazione di una retta $y = m\,x$:

| Retta nel piano              | Legge di Hooke                    |
| :--------------------------- | :-------------------------------- |
| $y = m\,x$                   | $F = k\,\Delta x$                 |
| $y$ → variabile dipendente   | $F$ → forza (N)                   |
| $x$ → variabile indipendente | $\Delta x$ → allungamento (m)     |
| $m$ → coefficiente angolare  | $k$ → costante elastica (N/m)     |
| retta per l'origine          | se $\Delta x = 0$, allora $F = 0$ |

Se la legge di Hooke vale, riportando $F$ (asse $y$) in funzione di $\Delta x$
(asse $x$) si ottiene una **retta passante per l'origine**, il cui coefficiente
angolare è proprio $k$.

> **Nota.** Una molla rigida (grande $k$) dà una retta ripida nel grafico;
> una molla morbida (piccolo $k$) dà una retta poco inclinata.

## Forza peso e massa

La forza applicata alla molla è il **peso** dei corpi appesi, non la loro massa.
La forza peso si calcola come:

$$P = m\,g \qquad (g = 9{,}81\ \text{m/s}^2)$$

dove $m$ è la massa in kg. Nel nostro esperimento riporteremo sempre la forza
peso $P$ (in newton) nelle tabelle e nel grafico, in modo da ottenere $k$ in N/m
direttamente dal coefficiente angolare.

> **Nota pratica.** Le masse dei pesetti sono spesso indicate in grammi.
> Convertite in kg dividendo per 1000 prima di calcolare $P = m\,g$.

## Propagazione dell'errore su $k$

La costante elastica si stima da ogni misura come $k_i = P_i / \Delta x_i$.
Poiché è un rapporto, l'errore relativo si propaga come:

$$\frac{\Delta k}{k} = \frac{\Delta P}{P} + \frac{\Delta(\Delta x)}{\Delta x}$$

L'incertezza su $\Delta x = L - L_0$ è la somma delle incertezze sulle due
lunghezze (differenza di misure dirette):

$$\Delta(\Delta x) = \Delta L + \Delta L_0$$

In pratica, calcoleremo $k_i$ per ogni pesetto aggiunto e stima l'incertezza
come semidispersione e scarto quadratico medio dei valori $k_i$.

## Media, semidispersione e scarto quadratico medio

(Si rimanda all'esperienza n. 1 per i dettagli; si riportano le formule per
comodità.)

$$\bar{k} = \frac{1}{n}\sum_{i=1}^{n} k_i \qquad\qquad
\Delta k_{\text{semidisp.}} = \frac{k_{\max} - k_{\min}}{2} \qquad\qquad
\sigma_k = \sqrt{\frac{\sum_{i=1}^{n}(k_i - \bar{k})^2}{n}}$$

## Confrontare una misura con un'altra

Due stime di $k$ (per esempio quella della media dei rapporti e quella del
metodo grafico) sono **compatibili** se i loro intervalli di incertezza si
sovrappongono, cioè se:

$$|k_1 - k_2| \leq \Delta k_1 + \Delta k_2$$

\newpage

\begin{center}
\fbox{\parbox{0.95\linewidth}{\centering
Nome e cognome: \rule{4cm}{0.4pt} \quad Classe: \rule{1cm}{0.4pt} \quad
Data: \rule{2cm}{0.4pt} \\[4pt]
Componenti del gruppo: \rule{11cm}{0.4pt}
}}
\end{center}

\vspace{0.3cm}

# Scheda di laboratorio

## Materiale occorrente

- una **molla elicoidale** appesa a un supporto verticale;
- un set di **pesetti di massa nota** (almeno 6--8 valori);
- un **metro** o una **squadretta** per misurare le lunghezze;
- questa scheda, una matita e una calcolatrice.

> **Istruzioni di montaggio.**
> Appendete la molla al supporto e lasciatela a riposo (senza pesi). Misurate
> $L_0$. Appendete i pesetti uno alla volta e **aspettate che la molla sia
> ferma** prima di misurare la lunghezza.
> Non superate il carico massimo della molla (verificate con il docente).

## Strumenti di misura

| Strumento                 | Portata | Sensibilità | Errore massimo |
| :------------------------ | :-----: | :---------: | :------------: |
| Metro / Squadretta        |         |             |                |
| Bilancia (se disponibile) |         |             |                |

## Domande preparatorie

*Rispondete prima di iniziare l'esperimento.*

**D1.** Scrivete la legge di Hooke e spiegate il significato del segno meno.

\vspace{1.8cm}

**D2.** Qual è la differenza tra *lunghezza* $L$ e *allungamento* $\Delta x$?
Perché è importante misurare prima $L_0$?

\vspace{1.8cm}

**D3.** Se la legge di Hooke è valida, che forma avrà il grafico $F$ vs $\Delta x$?
Collegandovi all'equazione della retta, dove passerà e qual è il significato
del coefficiente angolare?

\vspace{1.8cm}

## Esperimento A — Misura della lunghezza a riposo $L_0$

Prima di appendere qualsiasi peso, misurate la lunghezza della molla a riposo
**3 volte**:

| 1ª misura | 2ª misura | 3ª misura | Valore $\pm$ errore |
| :-------: | :-------: | :-------: | :-----------------: |
|           |           |           |        $\pm$        |

$$L_0 = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \text{m}$$

## Esperimento B — Raccolta dati: forza e allungamento

Appendete i pesetti uno alla volta. Per ogni configurazione misurate la nuova
lunghezza $L$ della molla (almeno 2 volte e prendete la media) e calcolate
$\Delta x = L - L_0$, la forza peso $P = m\,g$ e il rapporto $k_i = P/\Delta x$.

> **Nota.** Le masse sono in grammi: convertite in kg prima di calcolare $P$.
> Esempio: $m = 100\ \text{g} = 0{,}100\ \text{kg}$, $P = 0{,}100 \times 9{,}81 = 0{,}981\ \text{N}$.

|  n°   | Massa $m$ (kg) | $P = m\,g$ (N) | Lunghezza $L$ (m) | $\Delta x = L - L_0$ (m) | $k_i = P/\Delta x$ (N/m) |
| :---: | :------------: | :------------: | :---------------: | :----------------------: | :----------------------: |
|   1   |                |                |                   |                          |                          |
|   2   |                |                |                   |                          |                          |
|   3   |                |                |                   |                          |                          |
|   4   |                |                |                   |                          |                          |
|   5   |                |                |                   |                          |                          |
|   6   |                |                |                   |                          |                          |
|   7   |                |                |                   |                          |                          |
|   8   |                |                |                   |                          |                          |

## Esperimento C — Calcolo di $\bar{k}$ e della sua incertezza

### Valore medio

$$\bar{k} = \frac{k_1 + k_2 + \cdots + k_n}{n} = \underline{\hspace{3cm}}\ \text{N/m}$$

### Semidispersione

$$\Delta k_{\text{semidisp.}} = \frac{k_{\max} - k_{\min}}{2} = \underline{\hspace{3cm}}\ \text{N/m}$$

### Scarto quadratico medio

|    n°     | $k_i$ (N/m) | $d_i = k_i - \bar{k}$ |  $d_i^{\,2}$   |
| :-------: | :---------: | :-------------------: | :------------: |
|     1     |             |                       |                |
|     2     |             |                       |                |
|     3     |             |                       |                |
|     4     |             |                       |                |
|     5     |             |                       |                |
|     6     |             |                       |                |
|     7     |             |                       |                |
|     8     |             |                       |                |
| **somma** |             |                       | $\sum d_i^2 =$ |

$$\sigma_k = \sqrt{\frac{\sum_{i=1}^{n}(k_i - \bar{k})^2}{n}} = \underline{\hspace{3cm}}\ \text{N/m}$$

### Risultato finale

$$k = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \text{N/m}$$

**Errore relativo e percentuale:**

$$\varepsilon_k = \frac{\Delta k}{\bar{k}} = \underline{\hspace{2.5cm}}
\qquad\qquad
\varepsilon_k\% = \underline{\hspace{2.5cm}}\%$$

## Approfondimento — Metodo grafico

### Costruzione del grafico

Riportate i punti sperimentali su carta millimetrata o foglio di calcolo:

- **asse $x$**: allungamento $\Delta x$ (m)
- **asse $y$**: forza peso $P$ (N)

Istruzioni per il grafico:

1. Scegliete una scala appropriata per ciascun asse (dividete il range dei dati
   per il numero di quadretti disponibili).
2. Etichettate gli assi con la grandezza e l'unità: "$\Delta x$ (m)", "$P$ (N)".
3. Segnate i punti sperimentali con un pallino o una crocetta.
4. Tracciate con un righello la **retta che meglio interpola** i punti (non
   collegare i punti uno per uno).
5. La retta deve passare per l'**origine**: se non ci passa, annotarlo come
   possibile errore sistematico.

### Calcolo di $k$ dal coefficiente angolare

Scegliete due punti ben distanziati **sulla retta** (non necessariamente punti
sperimentali) e calcolate il coefficiente angolare:

$$k = \frac{P_2 - P_1}{\Delta x_2 - \Delta x_1}$$

Punto 1 sulla retta: $\Delta x_1 = \underline{\hspace{2cm}}$ m, $\quad P_1 = \underline{\hspace{2cm}}$ N

Punto 2 sulla retta: $\Delta x_2 = \underline{\hspace{2cm}}$ m, $\quad P_2 = \underline{\hspace{2cm}}$ N

$$k_{\text{graf}} = \frac{P_2 - P_1}{\Delta x_2 - \Delta x_1} = \underline{\hspace{3cm}}\ \text{N/m}$$

### Stima dell'incertezza (metodo grafico)

Tracciate la retta di pendenza **massima** e quella di pendenza **minima** che
passano ragionevolmente tra i punti sperimentali:

$k_{\max}$ (retta più ripida) $= \underline{\hspace{3cm}}\ \text{N/m}$

$k_{\min}$ (retta meno ripida) $= \underline{\hspace{3cm}}\ \text{N/m}$

$$\Delta k_{\text{graf}} = \frac{k_{\max} - k_{\min}}{2} = \underline{\hspace{3cm}}\ \text{N/m}$$

$$k_{\text{graf}} = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \text{N/m}$$

### Confronto tra i due metodi

I due valori ($k$ dalla media dei rapporti e $k_{\text{graf}}$ dal coefficiente
angolare) sono **compatibili**? Quale ha un errore percentuale minore?

\vspace{1.5cm}

## Conclusioni

**C1.** Il grafico che avete ottenuto è una retta passante per l'origine?
La legge di Hooke è verificata dalla vostra molla? Motivate la risposta.

\vspace{1.5cm}

**C2.** Se il grafico non passa esattamente per l'origine, o se alcuni punti si
discostano dalla retta, ipotizzate le possibili cause (errore sistematico sulla
misura di $L_0$, molla già stressata o permanentemente deformata, misura
imprecisa delle lunghezze, ecc.).

\vspace{1.5cm}

**C3.** Commentate il valore di $k$ ottenuto: la molla è "rigida" o "morbida"
rispetto a quelle che conoscete nella vita quotidiana?

\vspace{1.5cm}

\begin{center}\textit{Fine dell'esperienza}\end{center}
