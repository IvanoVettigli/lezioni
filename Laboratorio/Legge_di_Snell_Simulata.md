---
title: "Esperienza laboratoriale di fisica"
subtitle: "Riflessione e rifrazione: verifica della legge di Snell con la simulazione PhET"
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
  - \usetikzlibrary{arrows.meta,positioning}
  - \usepackage{icomma}
  - \usepackage{booktabs}
  - \usepackage{amsmath}
  - \usepackage{float}
  - \usepackage{enumitem}
  - \usepackage{graphicx}
---

<!--
============================================================================
GUIDA: come generare il PDF
----------------------------------------------------------------------------
Apri il terminale in questa cartella (Laboratorio) e lancia:

    pandoc "Legge_di_Snell_Simulata.md" -o "PDF/Legge_di_Snell_Simulata.pdf"

Richiede pandoc + MiKTeX (pdflatex). L'immagine
"Immagini/Snell.jpg" deve trovarsi nella sottocartella Immagini.
============================================================================
-->

# Introduzione e obiettivi

Che cosa succede a un raggio di luce quando passa dall'aria all'acqua? In
questa esperienza studieremo i due fenomeni che avvengono alla superficie di
separazione tra due mezzi trasparenti — la **riflessione** e la
**rifrazione** — e verificheremo sperimentalmente la **legge di Snell**.

Il laboratorio sarà **virtuale**: useremo la simulazione *Bending Light*
("luce che si piega") del progetto **PhET** dell'Università del Colorado, che
mette a disposizione un laser, due mezzi trasparenti a scelta e un goniometro
per misurare gli angoli. Come sempre, anche se l'apparato è simulato, il
**metodo sperimentale è quello vero**: misure ripetute, stima degli errori,
grafico e confronto con il valore atteso.

Gli obiettivi sono:

- distinguere **raggio incidente**, **raggio riflesso** e **raggio rifratto**,
  e capire che gli angoli si misurano sempre **rispetto alla normale**;
- verificare la **legge della riflessione** ($\theta_{\text{rifl}} = \theta_1$);
- capire il significato dell'**indice di rifrazione** di un mezzo;
- verificare la **legge di Snell** raccogliendo gli angoli di incidenza e di
  rifrazione a passi di $10^\circ$;
- costruire il **grafico** di $\sin\theta_2$ in funzione di $\sin\theta_1$ e
  ricavare dalla pendenza l'indice di rifrazione dell'acqua;
- confrontare il valore misurato con quello dichiarato dalla simulazione,
  usando gli strumenti di analisi dati (media, semidispersione, compatibilità).

\newpage

# Richiami teorici

## Riflessione e rifrazione

Quando un raggio di luce incontra la superficie che separa due mezzi
trasparenti (per esempio aria e acqua), in generale si divide in due:

- una parte **torna indietro** nel primo mezzo: è il raggio **riflesso**;
- una parte **attraversa la superficie** e prosegue nel secondo mezzo,
  cambiando direzione: è il raggio **rifratto**.

Tutti gli angoli si misurano a partire dalla **normale**, cioè la retta
perpendicolare alla superficie nel punto di incidenza (nella figura è la
linea tratteggiata). **Non** si misurano dalla superficie!

```{=latex}
\begin{figure}[H]
\centering
\begin{tikzpicture}[font=\footnotesize, line width=0.9pt, scale=1.05]
  % mezzo 2 (acqua)
  \fill[blue!12] (-4,0) rectangle (4,-2.8);
  % superficie di separazione
  \draw[thick] (-4,0) -- (4,0);
  % normale
  \draw[dashed] (0,-2.8) -- (0,2.8);
  \node[right, font=\scriptsize] at (0.05,2.6) {normale};
  % raggio incidente (da sinistra in alto)
  \draw[-{Latex}, red, very thick] (-2.6,2.2) -- (0,0);
  \node[left, red, font=\scriptsize] at (-2.0,2.15) {raggio incidente};
  % raggio riflesso (verso destra in alto)
  \draw[-{Latex}, red!55, very thick] (0,0) -- (2.6,2.2);
  \node[right, red!55, font=\scriptsize] at (1.9,2.35) {raggio riflesso};
  % raggio rifratto (verso destra in basso, piu' vicino alla normale)
  \draw[-{Latex}, red, very thick] (0,0) -- (1.35,-2.5);
  \node[right, red, font=\scriptsize] at (1.3,-2.35) {raggio rifratto};
  % archi angoli
  \draw (0,1.0) arc (90:139.7:1.0);
  \node at (-0.42,1.15) {$\theta_1$};
  \draw (0,1.0) arc (90:40.3:1.0);
  \node at (0.45,1.15) {$\theta_{\text{rifl}}$};
  \draw (0,-1.15) arc (270:298.4:1.15);
  \node at (0.38,-1.32) {$\theta_2$};
  % etichette mezzi
  \node[anchor=west, font=\scriptsize] at (-3.9,1.0) {mezzo 1 (aria, $n_1$)};
  \node[anchor=west, font=\scriptsize] at (-3.9,-1.0) {mezzo 2 (acqua, $n_2$)};
\end{tikzpicture}
\caption{Il raggio incidente si divide in un raggio riflesso (stesso mezzo) e
un raggio rifratto (che entra nel secondo mezzo piegandosi). Tutti gli angoli
si misurano dalla \textbf{normale}.}
\end{figure}
```

**Legge della riflessione.** Il raggio riflesso giace dalla parte opposta
della normale rispetto al raggio incidente e forma con essa lo stesso angolo:

$$\boxed{\;\theta_{\text{rifl}} = \theta_1\;}$$

## L'indice di rifrazione

Nel vuoto la luce viaggia alla velocità $c = 3{,}00 \times 10^8$ m/s. Dentro
un mezzo trasparente viaggia **più lentamente**, con velocità $v$. L'**indice
di rifrazione** del mezzo è il rapporto:

$$n = \frac{c}{v}$$

È un numero **adimensionale** (rapporto di due velocità: le unità si
semplificano, come abbiamo visto nell'esperienza sulle misure!) ed è sempre
$n \ge 1$: più $n$ è grande, più la luce è "rallentata" dal mezzo.

| Mezzo | $n$ (circa) |
|:------|:-----------:|
| Vuoto | 1 (esatto) |
| Aria | 1,0003 $\approx$ 1,00 |
| Acqua | 1,33 |
| Vetro | 1,5 |
| Diamante | 2,42 |

## La legge di Snell

Quando la luce passa dal mezzo 1 al mezzo 2, gli angoli di incidenza e di
rifrazione sono legati dalla **legge di Snell** (o legge della rifrazione):

$$\boxed{\;n_1 \sin\theta_1 = n_2 \sin\theta_2\;}$$

Due conseguenze da ricordare:

- se la luce entra in un mezzo **più rifrangente** ($n_2 > n_1$, per esempio
  aria $\to$ acqua), allora $\sin\theta_2 < \sin\theta_1$: il raggio
  **si avvicina alla normale**;
- se entra in un mezzo **meno rifrangente** ($n_2 < n_1$, acqua $\to$ aria),
  il raggio **si allontana dalla normale**.

> **Un'immagine intuitiva.** Pensate a un carrello che passa dall'asfalto alla
> sabbia arrivando obliquo: la ruota che entra per prima nella sabbia rallenta
> prima dell'altra, e il carrello "sterza". La luce fa lo stesso: nel mezzo
> più rifrangente rallenta, e il fronte del raggio "sterza" verso la normale.

## Come verificheremo la legge: la retta di Snell

La legge di Snell si può riscrivere isolando $\sin\theta_2$:

$$\sin\theta_2 = \frac{n_1}{n_2}\,\sin\theta_1$$

Confrontiamola con l'equazione di una retta per l'origine $y = m\,x$:

| Retta nel piano | Legge di Snell |
|:----------------|:---------------|
| $y = m \cdot x$ | $\sin\theta_2 = \dfrac{n_1}{n_2}\,\sin\theta_1$ |
| $y$ → variabile dipendente | $\sin\theta_2$ |
| $x$ → variabile indipendente | $\sin\theta_1$ |
| $m$ → coefficiente angolare | $m = \dfrac{n_1}{n_2}$ |
| retta per l'origine | se $\theta_1 = 0$, allora $\theta_2 = 0$ |

Quindi, se la legge di Snell è valida, riportando $\sin\theta_2$ (asse $y$) in
funzione di $\sin\theta_1$ (asse $x$) i punti si disporranno su una **retta
passante per l'origine**, e dalla pendenza $m$ ricaveremo l'indice di
rifrazione del secondo mezzo:

$$n_2 = \frac{n_1}{m}$$

## Richiami di analisi dati

Useremo gli strumenti delle esperienze precedenti:

- **errore di lettura degli angoli:** il goniometro della simulazione ha
  divisioni di $1^\circ$: assumeremo $\Delta\theta = 1^\circ$;
- da ogni coppia di angoli si calcola una stima dell'indice
  $n_{2,i} = n_1 \dfrac{\sin\theta_{1,i}}{\sin\theta_{2,i}}$ (con $n_1 = 1{,}00$
  per l'aria);
- delle stime $n_{2,i}$ si calcolano il **valore medio** $\bar{n}_2$ e la
  **semidispersione** $\Delta n_2 = \dfrac{n_{\max} - n_{\min}}{2}$;
- il risultato $\bar{n}_2 \pm \Delta n_2$ è **compatibile** con il valore
  atteso se quest'ultimo cade nell'intervallo
  $[\bar{n}_2 - \Delta n_2,\ \bar{n}_2 + \Delta n_2]$.

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

- un **PC** (o tablet) con browser e connessione a internet;
- una **calcolatrice scientifica** (serve la funzione seno!);
- questa scheda, una matita e un righello.

> **Attenzione alla calcolatrice!** Gli angoli saranno in **gradi**: la
> calcolatrice deve essere in modalità **DEG** (degrees), non RAD. Fate subito
> la prova: $\sin(30^\circ)$ deve dare $0{,}5$. Se ottenete $-0{,}988$ siete
> in radianti: cambiate modalità.

## La simulazione PhET

1. Andate su **https://phet.colorado.edu** e cercate la simulazione
   **"Bending Light"** (in italiano: *La rifrazione della luce*) — oppure
   usate il collegamento diretto:
   \newline\small\texttt{https://phet.colorado.edu/sims/html/bending-light/}
   \newline\texttt{latest/bending-light\_all.html}\normalsize
2. Nella schermata iniziale scegliete la prima scheda (**Intro**).

L'interfaccia (guardate la figura):

- il **laser** in alto a sinistra: si accende premendo il **pulsante rosso**
  e si **ruota** trascinandolo, per cambiare l'angolo di incidenza;
- la linea **tratteggiata verticale** è la **normale** alla superficie;
- i pannelli a destra permettono di scegliere il **materiale** sopra
  (*Material*, con il suo indice di rifrazione $n$) e quello sotto;
- in basso a sinistra c'è la **cassetta degli strumenti**: contiene il
  **goniometro** (da trascinare sul punto di incidenza, come in figura) e il
  misuratore di intensità;
- in alto a sinistra lasciate selezionato **Ray** (raggio).

![La simulazione *Bending Light*: il laser, il goniometro centrato sul punto di incidenza, il raggio incidente, quello riflesso (più tenue) e quello rifratto che si piega entrando nell'acqua. Nei pannelli a destra: aria sopra ($n = 1{,}00$), acqua sotto ($n = 1{,}33$).](Immagini/Snell.jpg){width=100%}

**Preparazione:**

1. verificate che il materiale sopra sia **Air** ($n_1 = 1{,}00$) e quello
   sotto **Water**;
2. trascinate il **goniometro** al centro, con il suo centro esattamente sul
   punto in cui il raggio tocca la superficie (figura);
3. accendete il laser con il **pulsante rosso**.

## Domande preparatorie

*Rispondete prima di iniziare le misure.*

**D1.** Disegnate uno schizzo con: superficie di separazione, normale, raggio
incidente, raggio riflesso e raggio rifratto, indicando gli angoli $\theta_1$,
$\theta_{\text{rifl}}$ e $\theta_2$.

\vspace{2.5cm}

**D2.** Sul goniometro della simulazione, lo $0^\circ$ sta **sulla normale** o
**sulla superficie**? Perché è importante saperlo prima di leggere gli angoli?

\vspace{1.5cm}

**D3.** La luce passa da aria ($n_1 = 1{,}00$) ad acqua ($n_2 = 1{,}33$): vi
aspettate che il raggio rifratto si **avvicini** o si **allontani** dalla
normale? E quindi: $\theta_2$ sarà maggiore o minore di $\theta_1$?

\vspace{1.5cm}

**D4.** Con la calcolatrice in modalità DEG calcolate:
$\sin(30^\circ) = \underline{\hspace{1.8cm}}$,
$\sin(60^\circ) = \underline{\hspace{1.8cm}}$,
$\sin(0^\circ) = \underline{\hspace{1.8cm}}$.

## Esperimento A — La legge della riflessione

Prima di occuparci del raggio rifratto, verifichiamo quello **riflesso** (il
raggio più tenue che torna verso l'alto).

Puntate il laser a tre angoli di incidenza diversi e per ciascuno misurate col
goniometro l'angolo del raggio **riflesso** (dall'altra parte della normale):

| $\theta_1$ (incidenza) | $\theta_{\text{rifl}}$ (riflessione) | Sono uguali? |
|:----------------------:|:------------------------------------:|:------------:|
| $30^\circ$ |  |  |
| $45^\circ$ |  |  |
| $60^\circ$ |  |  |

**Domanda A1.** Il raggio riflesso sta **dalla stessa parte** della normale
del raggio incidente o **dalla parte opposta**?

\vspace{1.2cm}

**Domanda A2.** La legge della riflessione è verificata (entro l'errore di
lettura $\Delta\theta = 1^\circ$)?

\vspace{1.2cm}

## Esperimento B — Raccolta dati per la legge di Snell

Ora misuriamo la coppia di angoli $(\theta_1,\ \theta_2)$ per tanti angoli di
incidenza: **ruotate il laser a passi di $10^\circ$**, da $10^\circ$ fino a
$80^\circ$, e per ogni posizione leggete sul goniometro l'angolo di
**rifrazione** $\theta_2$ (sotto la superficie). Poi, con la calcolatrice,
completate le colonne dei seni e del rapporto.

| n° | $\theta_1$ ($^\circ$) | $\theta_2$ ($^\circ$) | $\sin\theta_1$ | $\sin\theta_2$ | $n_{2,i} = \dfrac{\sin\theta_1}{\sin\theta_2}$ |
|:--:|:---------------------:|:---------------------:|:--------------:|:--------------:|:----------------------------------------------:|
| 1  | $10^\circ$ |  |  |  |  |
| 2  | $20^\circ$ |  |  |  |  |
| 3  | $30^\circ$ |  |  |  |  |
| 4  | $40^\circ$ |  |  |  |  |
| 5  | $50^\circ$ |  |  |  |  |
| 6  | $60^\circ$ |  |  |  |  |
| 7  | $70^\circ$ |  |  |  |  |
| 8  | $80^\circ$ |  |  |  |  |

> Il rapporto nell'ultima colonna è la stima dell'indice di rifrazione
> dell'acqua data da quella singola misura (poiché $n_1 = 1{,}00$).

**Domanda B1.** *(Rispondete mentre misurate.)* All'aumentare di $\theta_1$,
l'angolo $\theta_2$ aumenta o diminuisce? È sempre **minore** di $\theta_1$,
come previsto nella domanda D3?

\vspace{1.2cm}

**Domanda B2.** Gli angoli cambiano da una riga all'altra, ma il rapporto
$\sin\theta_1 / \sin\theta_2$ come si comporta? Che cosa significa?

\vspace{1.2cm}

**Domanda B3.** Guardando l'intensità dei raggi nella simulazione: quando
$\theta_1$ è molto grande (radente), il raggio riflesso diventa più intenso o
più debole? E quello rifratto?

\vspace{1.2cm}

## Esperimento C — Analisi: l'indice di rifrazione dell'acqua

### Valore medio

$$\bar{n}_2 = \frac{n_{2,1} + n_{2,2} + \cdots + n_{2,8}}{8} = \underline{\hspace{3cm}}$$

### Semidispersione

$$\Delta n_2 = \frac{n_{\max} - n_{\min}}{2} = \underline{\hspace{3cm}}$$

### Risultato finale

$$n_2 = \underline{\hspace{2.5cm}} \ \pm\ \underline{\hspace{2cm}}$$

**Errore relativo e percentuale:**

$$\varepsilon = \frac{\Delta n_2}{\bar{n}_2} = \underline{\hspace{2.5cm}}
\qquad\qquad
\varepsilon\% = \underline{\hspace{2.5cm}}\%$$

### Confronto con la simulazione

Il pannello in basso a destra dichiara l'indice di rifrazione dell'acqua:
$n_{\text{sim}} = \underline{\hspace{2cm}}$.

Il valore dichiarato cade nell'intervallo
$[\bar{n}_2 - \Delta n_2,\ \bar{n}_2 + \Delta n_2] =
\big[\, \underline{\hspace{2cm}},\ \underline{\hspace{2cm}} \,\big]$?
\quad SÌ \; / \; NO

\newpage

## Esperimento D — Il grafico della legge di Snell

Riportate sulla griglia i punti $(\sin\theta_1;\ \sin\theta_2)$ della tabella
dell'Esperimento B:

- **asse $x$**: $\sin\theta_1$ — scala consigliata: $0{,}1$ per divisione
  (da 0 a 1);
- **asse $y$**: $\sin\theta_2$ — scala consigliata: $0{,}1$ per divisione.

Poi tracciate **con il righello** la retta che meglio interpola i punti.

```{=latex}
\begin{figure}[H]
\centering
\begin{tikzpicture}[font=\footnotesize, x=1.3cm, y=0.62cm]
  % griglia di supporto
  \draw[gray!35, xstep=1, ystep=1] (0,0) grid (10,9);
  % assi
  \draw[-{Latex}, thick] (-0.15,0) -- (10.6,0) node[above=4pt]{$\sin\theta_1$};
  \draw[-{Latex}, thick] (0,-0.15) -- (0,9.7) node[right=3pt]{$\sin\theta_2$};
  % righette da compilare su x
  \foreach \x in {1,...,10} {
    \draw[thick] (\x,0) -- (\x,-0.25);
    \node[below, font=\tiny] at (\x,-0.3) {\rule{0.5cm}{0.4pt}};
  }
  % righette da compilare su y
  \foreach \y in {1,...,9} {
    \draw[thick] (0,\y) -- (-0.15,\y);
    \node[left, font=\tiny] at (-0.18,\y) {\rule{0.4cm}{0.4pt}};
  }
\end{tikzpicture}
\caption{Griglia per il grafico di $\sin\theta_2$ in funzione di
$\sin\theta_1$: scrivete i valori delle divisioni sui due assi.}
\end{figure}
```

**Domanda D1.** I punti si dispongono (circa) lungo una retta? La retta passa
per l'**origine**? Che cosa significa fisicamente il passaggio per l'origine?

\vspace{1.5cm}

### La pendenza e l'indice di rifrazione

Scegliete due punti ben distanziati **sulla retta** (non per forza punti
sperimentali) e calcolate la pendenza:

Punto 1: $\big(\sin\theta_1\big)_A = \underline{\hspace{1.8cm}}$,
$\big(\sin\theta_2\big)_A = \underline{\hspace{1.8cm}}$

Punto 2: $\big(\sin\theta_1\big)_B = \underline{\hspace{1.8cm}}$,
$\big(\sin\theta_2\big)_B = \underline{\hspace{1.8cm}}$

$$m = \frac{\big(\sin\theta_2\big)_B - \big(\sin\theta_2\big)_A}
{\big(\sin\theta_1\big)_B - \big(\sin\theta_1\big)_A} = \underline{\hspace{2.5cm}}$$

Dalla pendenza ricavate l'indice di rifrazione ($n_1 = 1{,}00$):

$$n_2^{\text{(graf)}} = \frac{n_1}{m} = \underline{\hspace{2.5cm}}$$

**Domanda D2.** Il valore $n_2^{\text{(graf)}}$ è vicino a quello ottenuto con
la media ($\bar{n}_2$)? E al valore della simulazione?

\vspace{1.5cm}

## Esperimento E — Per esplorare: la riflessione totale

Ora **scambiate i mezzi**: nel pannello di sopra scegliete **Water** e in
quello di sotto **Air** (la luce viaggia dall'acqua verso l'aria, come farebbe
la luce emessa da un sub).

1. Partite con un angolo di incidenza piccolo e osservate il raggio rifratto:
   ora si **allontana** dalla normale ($\theta_2 > \theta_1$), come previsto
   dalla legge di Snell con $n_2 < n_1$.
2. Aumentate lentamente l'angolo di incidenza: che cosa succede al raggio
   rifratto quando $\theta_1$ supera circa $49^\circ$?

**Domanda E1.** Descrivete che cosa osservate oltre l'angolo limite: dove
finisce tutta la luce?

\vspace{1.5cm}

**Domanda E2.** Questo fenomeno si chiama **riflessione totale**. Sapendo che
avviene quando la legge di Snell richiederebbe $\sin\theta_2 > 1$ (impossibile!),
spiegate perché può avvenire solo passando da un mezzo **più** rifrangente a
uno **meno** rifrangente.

\vspace{1.8cm}

> **Curiosità.** La riflessione totale è il principio delle **fibre ottiche**:
> la luce che porta i dati di internet rimbalza migliaia di volte dentro un
> sottile filo di vetro senza mai uscirne, proprio perché arriva sempre oltre
> l'angolo limite.

## Conclusioni

**C1.** La legge della riflessione è verificata? E quella di Snell? Motivate
le risposte usando i vostri dati.

\vspace{1.5cm}

**C2.** Confrontate le due stime di $n_2$ (media dei rapporti e pendenza della
retta) con il valore della simulazione: sono compatibili? Quale metodo vi
sembra più affidabile?

\vspace{1.5cm}

**C3.** Le fonti di errore: da dove viene l'incertezza in questa esperienza
simulata? Quali errori del laboratorio reale (per esempio con un vero laser e
una vaschetta d'acqua) qui **mancano**?

\vspace{1.5cm}

**C4.** *(Applicazione.)* Quando guardate una piscina piena d'acqua, il fondo
sembra **più vicino** di quanto sia davvero, e un bastone immerso a metà
sembra "spezzato". Spiegate questi fenomeni usando la rifrazione.

\vspace{1.5cm}

\begin{center}\textit{Fine dell'esperienza}\end{center}
