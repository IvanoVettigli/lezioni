---
title: "Esperienza laboratoriale di fisica"
subtitle: "Verifica sperimentale della legge di Ohm e misura della resistenza"
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
  - \usetikzlibrary{arrows.meta,circuits.ee.IEC}
  - \usepackage{icomma}
  - \usepackage{booktabs}
  - \usepackage{amsmath}
  - \usepackage{float}
  - \usepackage{enumitem}
  - \usepackage{graphicx}
  - \usepackage{listings}
  - \lstset{basicstyle=\ttfamily\small, frame=single, breaklines=true}
---

# Introduzione e obiettivi

In questa esperienza studieremo la relazione tra la **differenza di potenziale**
applicata ai capi di un resistore e la **corrente** che lo attraversa, verificando
sperimentalmente la **legge di Ohm**. Useremo Arduino come generatore di tensione
variabile e un multimetro digitale come amperometro.

Gli obiettivi sono:

- capire il significato fisico di corrente, differenza di potenziale e resistenza;
- verificare sperimentalmente che $V$ e $I$ sono proporzionali (legge di Ohm);
- misurare la resistenza $R$ con due metodi: media dei rapporti e metodo grafico;
- verificare il valore ottenuto confrontandolo con quello ricavato dal **codice
  dei colori** del resistore.

\newpage

# Richiami teorici

## Corrente elettrica, differenza di potenziale e resistenza

**Corrente elettrica $I$:** è il flusso ordinato di cariche elettriche attraverso
un conduttore. Si misura in **ampere** (A). Intuitivamente, è analoga alla portata
di un tubo idraulico: quante cariche passano attraverso una sezione del conduttore
in un secondo.

**Differenza di potenziale $V$ (o tensione):** è la "spinta" che mette in moto le
cariche. Si misura in **volt** (V). È analoga alla differenza di pressione che fa
scorrere l'acqua in un tubo: senza differenza di pressione non c'è flusso; senza
differenza di potenziale non c'è corrente.

**Resistenza $R$:** è la proprietà di un materiale di opporsi al passaggio della
corrente. Si misura in **ohm** ($\Omega$). Un conduttore con resistenza alta lascia
passare poca corrente per una data tensione; uno con resistenza bassa ne lascia
passare molta.

## La legge di Ohm

Georg Simon Ohm (1827) scoprì che, per molti materiali e a temperatura costante,
la corrente che attraversa un conduttore è **direttamente proporzionale** alla
differenza di potenziale applicata:

$$\boxed{V = R \cdot I}$$

La costante di proporzionalità è la resistenza $R$. Confrontandola con l'equazione
di una retta $y = m \cdot x$:

| Retta nel piano | Legge di Ohm |
|:----------------|:-------------|
| $y = m \cdot x$ | $V = R \cdot I$ |
| $y$ → variabile dipendente | $V$ → tensione (V) |
| $x$ → variabile indipendente | $I$ → corrente (A) |
| $m$ → coefficiente angolare | $R$ → resistenza ($\Omega$) |
| retta per l'origine | se $I = 0$, allora $V = 0$ |

Se la legge di Ohm è valida, riportando $V$ (asse $y$) in funzione di $I$ (asse
$x$), i punti sperimentali si disporranno su una **retta passante per l'origine**
con pendenza $R$.

> **Nota.** I materiali che obbediscono alla legge di Ohm si chiamano **ohmici**
> (o lineari). Non tutti i componenti elettronici sono ohmici: diodi e transistor,
> per esempio, hanno una caratteristica non lineare.

## Collegamento in serie e in parallelo

```{=latex}
\begin{figure}[H]
\centering
\begin{tikzpicture}[font=\footnotesize, line width=0.8pt]
  % --- SERIE ---
  \node[font=\small\bfseries] at (2.0, 1.0) {Serie};
  % filo superiore
  \draw (0,0) -- (1.0,0);
  % R1
  \draw (1.0,-0.25) rectangle (2.0,0.25);
  \node at (1.5,0) {$R_1$};
  % filo centrale
  \draw (2.0,0) -- (3.0,0);
  % R2
  \draw (3.0,-0.25) rectangle (4.0,0.25);
  \node at (3.5,0) {$R_2$};
  % filo finale
  \draw (4.0,0) -- (5.0,0);
  % frecce corrente
  \draw[-{Latex}] (0.3,0.15) -- (0.7,0.15) node[above,midway,font=\scriptsize] {$I$};
  \draw[-{Latex}] (2.3,0.15) -- (2.7,0.15) node[above,midway,font=\scriptsize] {$I$};
  \draw[-{Latex}] (4.3,0.15) -- (4.7,0.15) node[above,midway,font=\scriptsize] {$I$};
  % etichetta stessa corrente
  \node[font=\scriptsize, gray] at (2.5,-0.7) {stessa corrente in ogni punto};

  % --- PARALLELO ---
  \node[font=\small\bfseries] at (9.5, 1.0) {Parallelo};
  % nodi
  \draw (7.0,0) -- (7.5,0);
  \draw (7.5,0) -- (7.5, 0.6);
  \draw (7.5,0) -- (7.5,-0.6);
  % ramo superiore R1
  \draw (7.5, 0.6) -- (8.5,0.6);
  \draw (8.5,-0.25+0.6) rectangle (9.5,0.25+0.6);
  \node at (9.0,0.6) {$R_1$};
  \draw (9.5,0.6) -- (10.5,0.6);
  % ramo inferiore R2
  \draw (7.5,-0.6) -- (8.5,-0.6);
  \draw (8.5,-0.25-0.6) rectangle (9.5,0.25-0.6);
  \node at (9.0,-0.6) {$R_2$};
  \draw (9.5,-0.6) -- (10.5,-0.6);
  % nodo finale
  \draw (10.5,0.6) -- (10.5,0);
  \draw (10.5,-0.6) -- (10.5,0);
  \draw (10.5,0) -- (11.0,0);
  % frecce corrente
  \draw[-{Latex}] (7.1,0.15) -- (7.4,0.15) node[above,midway,font=\scriptsize] {$I$};
  \draw[-{Latex}] (8.0,0.75) -- (8.4,0.75) node[above,midway,font=\scriptsize] {$I_1$};
  \draw[-{Latex}] (8.0,-0.45) -- (8.4,-0.45) node[above,midway,font=\scriptsize] {$I_2$};
  \node[font=\scriptsize, gray] at (9.5,-1.3) {stessa tensione ai capi};
\end{tikzpicture}
\caption{In serie la stessa corrente $I$ attraversa tutti i componenti; in parallelo la stessa tensione è applicata a tutti i rami, ma la corrente si divide ($I = I_1 + I_2$).}
\end{figure}
```

### Perché l'amperometro va in serie e il voltmetro in parallelo

**Amperometro** (misura la corrente): deve essere attraversato dalla stessa
corrente del componente in esame, quindi si inserisce **in serie**. Per non
alterare il circuito, ha una resistenza interna **molto bassa** (idealmente zero).

**Voltmetro** (misura la tensione): deve essere collegato ai due terminali del
componente in esame, quindi si inserisce **in parallelo**. Per non deviare
corrente dal circuito, ha una resistenza interna **molto alta** (idealmente
infinita).

> **Attenzione.** Non collegare mai un amperometro direttamente in parallelo tra
> due punti a tensione diversa: la sua bassa resistenza interna causerebbe una
> corrente enorme, danneggiando sia lo strumento che il circuito.

## Il codice dei colori dei resistori

I resistori a strato di carbonio hanno il valore di resistenza codificato con
**4 fasce colorate**. Le prime due cifre significative, il moltiplicatore e la
tolleranza si leggono così:

| Colore   | Cifra | Moltiplicatore | Tolleranza |
|:---------|:-----:|:--------------:|:----------:|
| Nero     | 0     | $\times 1$     | —          |
| Marrone  | 1     | $\times 10$    | ±1%        |
| Rosso    | 2     | $\times 100$   | ±2%        |
| Arancione| 3     | $\times 1\,\text{k}$ | —    |
| Giallo   | 4     | $\times 10\,\text{k}$ | —   |
| Verde    | 5     | $\times 100\,\text{k}$| ±0,5%|
| Blu      | 6     | $\times 1\,\text{M}$ | ±0,25%|
| Viola    | 7     | $\times 10\,\text{M}$| —     |
| Grigio   | 8     | —              | —          |
| Bianco   | 9     | —              | —          |
| Oro      | —     | $\times 0{,}1$ | ±5%        |
| Argento  | —     | $\times 0{,}01$| ±10%       |

La figura seguente mostra come si legge il codice su un resistore da $1{,}0\ \text{k}\Omega \pm 5\%$:

```{=latex}
\begin{figure}[H]
\centering
\begin{tikzpicture}[font=\footnotesize, line width=0.8pt]
  % terminali
  \draw (-1.2,0) -- (0.3,0);
  \draw (6.3,0) -- (7.5,0);
  % corpo (beige)
  \fill[yellow!15!white] (0.3,-0.55) rectangle (6.3,0.55);
  % fascia 1: Marrone
  \fill[brown] (0.8,-0.55) rectangle (1.4,0.55);
  % fascia 2: Nero
  \fill[black] (2.0,-0.55) rectangle (2.6,0.55);
  % fascia 3: Rosso (×100)
  \fill[red] (3.2,-0.55) rectangle (3.8,0.55);
  % fascia 4: Oro (±5%) — spostata verso destra
  \fill[yellow!65!orange] (5.2,-0.55) rectangle (5.8,0.55);
  % contorno corpo
  \draw (0.3,-0.55) rectangle (6.3,0.55);
  % etichette sopra
  \node[above, font=\scriptsize] at (1.1, 0.55) {1ª};
  \node[above, font=\scriptsize] at (2.3, 0.55) {2ª};
  \node[above, font=\scriptsize] at (3.5, 0.55) {3ª};
  \node[above, font=\scriptsize] at (5.5, 0.55) {4ª};
  % frecce e label sotto
  \draw[-{Latex}] (1.1,-1.0) -- (1.1,-0.58);
  \node[below, align=center, font=\scriptsize] at (1.1,-1.05) {Marrone\\$= 1$};
  \draw[-{Latex}] (2.3,-1.0) -- (2.3,-0.58);
  \node[below, align=center, font=\scriptsize] at (2.3,-1.05) {Nero\\$= 0$};
  \draw[-{Latex}] (3.5,-1.0) -- (3.5,-0.58);
  \node[below, align=center, font=\scriptsize] at (3.5,-1.05) {Rosso\\$\times\,100$};
  \draw[-{Latex}] (5.5,-1.0) -- (5.5,-0.58);
  \node[below, align=center, font=\scriptsize] at (5.5,-1.05) {Oro\\$\pm\,5\%$};
  % risultato
  \node[above, font=\small] at (3.3, 1.1) {$R = 10 \times 100\ \Omega = 1{,}0\ \text{k}\Omega \pm 5\%$};
\end{tikzpicture}
\caption{Lettura del codice dei colori: Marrone--Nero--Rosso--Oro. Le prime due fasce danno le cifre significative (1 e 0 = 10), la terza il moltiplicatore ($\times 100$), la quarta la tolleranza (±5\%).}
\end{figure}
```

**Esempio con valore diverso:** fascia 1 = Rosso (2), fascia 2 = Viola (7), fascia 3 = Arancione
($\times 1\,\text{k}$), fascia 4 = Oro (±5%) → $R = 27\,\text{k}\Omega \pm 5\%$,
cioè il valore è compreso tra $25{,}65\,\text{k}\Omega$ e $28{,}35\,\text{k}\Omega$.

## Propagazione dell'errore su $R$

La resistenza si stima da ogni misura come $R_i = V_i / I_i$. Poiché è un
rapporto, l'errore relativo si propaga come:

$$\frac{\Delta R}{R} = \frac{\Delta V}{V} + \frac{\Delta I}{I}
\qquad\Longrightarrow\qquad
\Delta R = R\left(\frac{\Delta V}{V} + \frac{\Delta I}{I}\right)$$

In pratica stimeremo l'incertezza su $R$ con la semidispersione e lo scarto
quadratico medio dei valori $R_i$ calcolati per ogni misura, esattamente come
abbiamo fatto per la costante elastica $k$ nella legge di Hooke.

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

- una scheda **Arduino UNO** collegata al PC via USB;
- un **potenziometro** (es. 10 k$\Omega$);
- un **resistore** di valore ignoto (o noto solo dal codice dei colori);
- una **breadboard** e cavi di collegamento;
- un **multimetro digitale** (usato sia come amperometro che come voltmetro);
- il **codice Arduino** fornito (file `sketch ohm.ino`);
- questa scheda, una matita e una calcolatrice.

## Schema del circuito

Il circuito da montare è mostrato in figura. Il potenziometro è collegato tra
**5V** e **GND** di Arduino e funziona da **divisore di tensione**: ruotando
la manopola si varia la tensione sul pin centrale (cursore), da 0 a 5 V. Il
cursore alimenta un capo del resistore e, in parallelo, il pin **A0** di Arduino,
che misura la tensione. L'altro capo del resistore è collegato a GND attraverso
il **multimetro in modalità amperometro** (collegamento in serie).

![Schema del circuito: Arduino UNO, potenziometro, resistore e multimetro come amperometro in serie.](Immagini/Ohm.jpg){width=82%}

## Il codice Arduino

Caricate sul vostro Arduino lo sketch seguente. Esso legge ogni 500 ms il valore
della tensione sul pin A0 e lo stampa sul **Monitor Seriale** (e sul **Serial
Plotter**) dell'IDE Arduino. La conversione da numero intero (0–1023) a volt si
ottiene dividendo per 204,6 (poiché $1023 / 5{,}0 = 204{,}6$).

```
float valoreSensore = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  // Legge A0 (0-1023) e converte in volt (0-5 V)
  valoreSensore = analogRead(A0) / 204.6;
  Serial.println(valoreSensore);
  delay(500);
}
```

> **Come usarlo.** Dopo aver caricato lo sketch, aprite il Monitor Seriale
> (icona lente in alto a destra dell'IDE) e impostate il baud rate a **9600**.
> Vedrete il valore di tensione aggiornarsi ogni mezzo secondo. Ruotando il
> potenziometro, la tensione varia: usate questo valore come $V$ nelle misure.

## Strumenti di misura

| Strumento | Grandezza misurata | Portata usata | Sensibilità | Errore massimo |
|:----------|:------------------:|:-------------:|:-----------:|:--------------:|
| Arduino A0 | Tensione $V$ (V) | 0–5 V | 0,005 V | |
| Multimetro — amperometro | Corrente $I$ | | | |
| Multimetro — voltmetro | Tensione $V$ (verifica) | | | |

## Domande preparatorie

*Rispondete prima di iniziare l'esperimento.*

**D1.** Enunciate la legge di Ohm. Se raddoppiamo la tensione applicata a una
resistenza omica, cosa succede alla corrente?

\vspace{1.8cm}

**D2.** Perché il multimetro va collegato **in serie** quando misura la corrente
e **in parallelo** quando misura la tensione?

\vspace{1.8cm}

**D3.** Leggete le fasce colorate del vostro resistore e ricavate il valore
nominale $R_{\text{nom}}$ con la sua tolleranza. Calcolate l'intervallo
accettabile $[R_{\min},\, R_{\max}]$.

\vspace{1.8cm}

## Esperimento A — Codice dei colori

Osservate il resistore che vi è stato consegnato e identificate le quattro fasce:

| Fascia | Colore | Valore |
|:------:|:-------|:------:|
| 1ª (prima cifra) | | |
| 2ª (seconda cifra) | | |
| 3ª (moltiplicatore) | | |
| 4ª (tolleranza) | | ±\hspace{0.5cm}\% |

$$R_{\text{nom}} = \underline{\hspace{3cm}}\ \Omega
\qquad
\text{intervallo accettabile: } \left[\, \underline{\hspace{2cm}},\ \underline{\hspace{2cm}}\,\right]\ \Omega$$

## Esperimento B — Raccolta dati: tensione e corrente

Montate il circuito come indicato nello schema. Impostate il multimetro in
modalità **amperometro** sulla portata adeguata e collegatelo **in serie**.
Avviate lo sketch su Arduino.

**Prima misura — verifica della tensione.**
Per la prima coppia di valori, misurate la tensione $V$ anche con il multimetro
in modalità **voltmetro** (collegato in parallelo ai capi del resistore) e
confrontate con il valore letto da Arduino.

$V_{\text{Arduino}} = \underline{\hspace{2.5cm}}\ \text{V}$
\quad
$V_{\text{voltmetro}} = \underline{\hspace{2.5cm}}\ \text{V}$
\quad
Differenza: $\underline{\hspace{2cm}}\ \text{V}$

> I due valori dovrebbero coincidere (entro l'errore degli strumenti): questo
> conferma che Arduino misura correttamente la tensione ai capi del resistore.

**Raccolta dati (almeno 5 misure).**
Ruotate progressivamente il potenziometro per aumentare la tensione. Per ogni
valore annotate $V$ (da Arduino) e $I$ (dal multimetro), poi calcolate
$R_i = V_i / I_i$.

| n° | $V_i$ (V) | $I_i$ (mA) | $I_i$ (A) | $R_i = V_i/I_i$ ($\Omega$) |
|:--:|:---------:|:----------:|:---------:|:--------------------------:|
| 1  |           |            |           |                            |
| 2  |           |            |           |                            |
| 3  |           |            |           |                            |
| 4  |           |            |           |                            |
| 5  |           |            |           |                            |
| 6  |           |            |           |                            |
| 7  |           |            |           |                            |

> **Nota.** Il multimetro spesso mostra $I$ in mA: convertite in A dividendo per
> 1000 prima di calcolare $R_i$.

## Esperimento C — Calcolo di $\bar{R}$ e della sua incertezza

### Valore medio

$$\bar{R} = \frac{R_1 + R_2 + \cdots + R_n}{n} = \underline{\hspace{3cm}}\ \Omega$$

### Semidispersione

$$\Delta R_{\text{semidisp.}} = \frac{R_{\max} - R_{\min}}{2} = \underline{\hspace{3cm}}\ \Omega$$

### Scarto quadratico medio

| n° | $R_i$ ($\Omega$) | $d_i = R_i - \bar{R}$ | $d_i^{\,2}$ |
|:--:|:----------------:|:---------------------:|:-----------:|
| 1  |                  |                       |             |
| 2  |                  |                       |             |
| 3  |                  |                       |             |
| 4  |                  |                       |             |
| 5  |                  |                       |             |
| 6  |                  |                       |             |
| 7  |                  |                       |             |
| **somma** | | | $\sum d_i^2 =$ |

$$\sigma_R = \sqrt{\frac{\sum_{i=1}^{n}(R_i - \bar{R})^2}{n}} = \underline{\hspace{3cm}}\ \Omega$$

### Risultato finale

$$R = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \Omega$$

**Errore relativo e percentuale:**

$$\varepsilon_R = \frac{\Delta R}{\bar{R}} = \underline{\hspace{2.5cm}}
\qquad\qquad
\varepsilon_R\% = \underline{\hspace{2.5cm}}\%$$

\newpage

## Approfondimento — Metodo grafico

### Costruzione del grafico

Riportate i punti sperimentali su carta millimetrata o foglio di calcolo:

- **asse $x$**: corrente $I$ (A)
- **asse $y$**: tensione $V$ (V)

Tracciate la retta che meglio interpola i punti. Secondo la legge di Ohm deve
passare per l'**origine**: se non ci passa, segnalarlo come possibile errore
sistematico (per esempio una resistenza di contatto o un offset dello strumento).

### Calcolo di $R$ dal coefficiente angolare

Scegliete due punti ben distanziati **sulla retta** e calcolate la pendenza:

$$R = \frac{V_2 - V_1}{I_2 - I_1}$$

Punto 1 sulla retta: $I_1 = \underline{\hspace{2cm}}$ A, $\quad V_1 = \underline{\hspace{2cm}}$ V

Punto 2 sulla retta: $I_2 = \underline{\hspace{2cm}}$ A, $\quad V_2 = \underline{\hspace{2cm}}$ V

$$R_{\text{graf}} = \frac{V_2 - V_1}{I_2 - I_1} = \underline{\hspace{3cm}}\ \Omega$$

### Stima dell'incertezza (metodo grafico)

Tracciate la retta di pendenza **massima** e quella di pendenza **minima** che
passano ragionevolmente tra i punti sperimentali:

$R_{\max}$ (retta più ripida) $= \underline{\hspace{3cm}}\ \Omega$

$R_{\min}$ (retta meno ripida) $= \underline{\hspace{3cm}}\ \Omega$

$$\Delta R_{\text{graf}} = \frac{R_{\max} - R_{\min}}{2} = \underline{\hspace{3cm}}\ \Omega$$

$$R_{\text{graf}} = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \Omega$$

## Conclusioni

**C1.** Il grafico $V$ vs $I$ è una retta passante per l'origine? La legge di Ohm
è verificata per il vostro resistore? Motivate la risposta.

\vspace{1.5cm}

**C2.** Confrontate il valore misurato $\bar{R}$ con il valore nominale
$R_{\text{nom}}$ ricavato dal codice dei colori. Il valore misurato cade
nell'intervallo di tolleranza $[R_{\min},\, R_{\max}]$?

\vspace{1.5cm}

**C3.** I due metodi (media dei rapporti e metodo grafico) danno valori
compatibili? Quale ha fornito un errore percentuale minore?

\vspace{1.5cm}

**C4.** Quali sono le principali fonti di errore in questo esperimento? Come si
potrebbe migliorare la misura?

\vspace{1.5cm}

\begin{center}\textit{Fine dell'esperienza}\end{center}
