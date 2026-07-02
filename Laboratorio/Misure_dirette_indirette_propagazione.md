---
title: "Esperienza laboratoriale di fisica"
subtitle: "Misure dirette e indirette e propagazione delle incertezze"
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
  - \usepackage{cancel}
  - \usepackage{float}
  - \usepackage{enumitem}
---

<!--
============================================================================
GUIDA: come generare il PDF
----------------------------------------------------------------------------
Apri il terminale di VS Code in questa cartella (Fisica_1) e lancia:

    pandoc "Esperimento_1_Misure_ed_errori.md" -o "Esperimento_1_Misure_ed_errori.pdf"

Richiede pandoc + MiKTeX (pdflatex). Alla PRIMA compilazione MiKTeX
installa da solo i pacchetti mancanti (tikz, icomma, booktabs, float):
quando compare la finestra "Install package?", clicca "Install".

Suggerimenti di modifica manuale:
  - I numeri con la virgola decimale (es. 12,30) si scrivono normalmente,
    anche dentro le formule, grazie al pacchetto "icomma".
  - Le formule vanno tra $...$ (in riga) oppure $$...$$ (centrate).
  - Le tabelle si modificano spostando le | ; non serve allineare le colonne.
  - I disegni sono in blocchi {=latex} ... (codice TikZ): se ti
    danno fastidio puoi cancellare l'intero blocco oppure sostituirli con una foto.
============================================================================
-->

# Introduzione e obiettivi

In questa esperienza impareremo a **misurare** alcune grandezze fisiche e,
soprattutto, a **valutare quanto sono affidabili** le nostre misure. Nessuna
misura è mai "esatta": ogni strumento e ogni operatore introducono una piccola
**incertezza** (o *errore*), e il nostro compito è saperla stimare e scriverla
correttamente.

Gli obiettivi sono:

- distinguere tra **misure dirette** (lette direttamente sullo strumento) e
  **misure indirette** (calcolate a partire da altre misure);
- imparare a leggere e usare il **calibro a nonio ventesimale**;
- capire come l'errore "si propaga" quando facciamo somme, prodotti e rapporti
  (**propagazione degli errori**);
- stimare l'incertezza di una serie di misure ripetute con la **semidispersione**
  e lo **scarto quadratico medio**;
- scoprire, confrontando **centimetri e pollici**, che il rapporto tra due
  lunghezze è un numero **adimensionale**;
- raccogliere i dati di tutta la classe e rappresentarli con un **istogramma**.

Useremo due strumenti: un **metro da sarta** (per le misure più grandi) e un
**calibro a nonio ventesimale** (per le misure piccole e precise). Il metro da
sarta che useremo ha una **doppia scala**: da un lato i **centimetri** (con le
divisioni in millimetri), dall'altro i **pollici**, l'unità di lunghezza dei
paesi anglosassoni.

# Richiami teorici

## Misure dirette e misure indirette

Una **misura diretta** si ottiene confrontando direttamente la grandezza con lo
strumento: per esempio leggere la lunghezza di un banco sul metro da sarta, o la
massa di un oggetto sulla bilancia.

Una **misura indiretta** si ottiene invece *calcolandola* a partire da una o più
misure dirette, usando una formula. Per esempio:

- il **perimetro** di un banco è la somma dei lati (misure dirette);
- la **superficie** è il prodotto di due lati;
- il **volume** di un blocchetto è il prodotto delle tre dimensioni;
- la **densità** è il rapporto tra massa e volume.

> **Idea chiave:** se le misure dirette hanno un errore, anche la misura
> indiretta calcolata da esse avrà un errore. Sapere *come* si trasmette questo
> errore è l'argomento della *propagazione degli errori* (§\ref{sec:prop}).

## Le caratteristiche di uno strumento di misura

Ogni strumento è descritto da alcune caratteristiche fondamentali:

- **Sensibilità (o risoluzione):** la più piccola variazione della grandezza che
  lo strumento riesce a distinguere. Coincide, in pratica, con il valore di una
  tacca (la divisione più piccola). Più la sensibilità è "fine" (numero piccolo),
  più lo strumento è preciso.
- **Portata:** il valore massimo che lo strumento può misurare.
- **Accuratezza (o precisione):** quanto la misura fornita dallo strumento è
  *vicina al valore vero*. Uno strumento accurato non commette errori
  sistematici (per esempio un metro da sarta che si è allungato con l'uso è poco
  accurato, anche se ha una buona sensibilità).

I due strumenti che useremo:

| Strumento                 | Sensibilità   | Portata tipica | Note                                                                          |
| ------------------------- | ------------- | -------------- | ------------------------------------------------------------------------------ |
| Metro da sarta            | 1 mm (0,1 cm) | ~150 cm        | Flessibile (può allungarsi con l'uso); doppia scala: cm da un lato, pollici dall'altro |
| Calibro nonio ventesimale | 0,05 mm       | ~150 mm        | Rigido e molto preciso                                                          |

## Come si scrive una misura

Il risultato di una misura si scrive **sempre** come

$$ x = x_{\text{mis}} \pm \Delta x \quad [\text{unità}] $$

dove $x_{\text{mis}}$ è il valore misurato e $\Delta x$ è l'**errore assoluto**.
L'errore assoluto ha la stessa unità di misura della grandezza e si scrive in
genere con **una sola cifra significativa**; il valore misurato va arrotondato
alla stessa posizione decimale dell'errore.

Definiamo inoltre:

$$
\text{errore relativo:}\quad \varepsilon_x = \frac{\Delta x}{x_{\text{mis}}}
\qquad\qquad
\text{errore percentuale:}\quad \varepsilon_x\% = \frac{\Delta x}{x_{\text{mis}}}\cdot 100
$$

L'errore relativo è un numero puro (senza unità) e ci dice *quanto pesa* l'errore
rispetto alla misura: è il modo migliore per confrontare la qualità di misure
diverse.

## Misure ripetute: valore medio, errore massimo, semidispersione e scarto quadratico medio
\label{sec:ripetute}

Conviene sempre ripetere una misura più volte. Possono succedere due cose.

**Caso 1 — Le misure ripetute danno tutte lo stesso valore.**
Significa che lo strumento non è abbastanza sensibile per "vedere" le piccole
differenze: l'incertezza è dovuta solo allo strumento. In questo caso si assume
come errore l'**errore massimo**, pari alla **sensibilità** dello strumento:

$$ \Delta x = \text{sensibilità dello strumento (errore massimo)} $$

**Caso 2 — Le misure ripetute danno valori leggermente diversi.**
Allora si prende come miglior stima il **valore medio**

$$ \bar{x} = \frac{x_1 + x_2 + \dots + x_n}{n} = \frac{1}{n}\sum_{i=1}^{n} x_i $$

e per l'incertezza si può usare uno dei due metodi seguenti.

**a) Semidispersione (metodo rapido).**
È la semidifferenza tra il valore massimo e quello minimo della serie:

$$ \Delta x = \frac{x_{\max} - x_{\min}}{2} $$

**b) Scarto quadratico medio (metodo statistico).**
Misura quanto "in media" le misure si discostano dal valor medio. Si calcola così:

1. si calcolano gli **scarti** $d_i = x_i - \bar{x}$;
2. si elevano al quadrato e si sommano;
3. si divide per il numero di misure e si fa la radice:

$$ \sigma = \sqrt{\frac{\sum_{i=1}^{n}\left(x_i - \bar{x}\right)^2}{n}} $$

Lo scarto quadratico medio $\sigma$ è una stima più affidabile della
semidispersione, perché tiene conto di *tutte* le misure e non solo della più
grande e della più piccola.

> **Nota.** In alcuni testi compare $n-1$ al posto di $n$ al denominatore
> (*deviazione standard campionaria*). Per il nostro livello useremo $n$; con
> $n=5$ misure la differenza è piccola.

## L'istogramma: rappresentare tanti dati in un colpo d'occhio
\label{sec:isto}

Quando i dati sono **tanti** — le altezze degli studenti di una classe, i voti
di una verifica, le temperature di un mese — una lunga tabella di numeri dice
poco. Molto più efficace è un **istogramma**.

**Che cos'è.** Un istogramma è un grafico fatto di **rettangoli adiacenti**
(cioè attaccati l'uno all'altro, senza spazi). Si costruisce così: si divide
l'intervallo dei valori in tanti sotto-intervalli di **uguale ampiezza**,
chiamati **classi**; ogni rettangolo ha per base una classe e per altezza la
**frequenza**, cioè *quanti dati cadono in quella classe*.

**A che cosa serve.** A colpo d'occhio un istogramma mostra:

- attorno a quale valore **si addensano** i dati (la classe più alta, cioè la
  più frequente, si chiama **moda**);
- quanto i dati sono **dispersi** (istogramma largo = dati molto diversi tra
  loro; istogramma stretto = dati simili);
- la **forma** della distribuzione: per molte grandezze naturali (altezze,
  masse, errori di misura...) l'istogramma ha una tipica forma **a campana**,
  con i valori centrali frequenti e quelli estremi rari.

**Come si costruisce, in cinque passi:**

1. si cercano il valore **minimo** e il valore **massimo** dei dati e si
   calcola il **campo di variazione** $R = x_{\max} - x_{\min}$;
2. si divide l'intervallo in **classi di uguale ampiezza**, scegliendo numeri
   "comodi" (per esempio classi larghe 5 cm che iniziano da un multiplo di 5);
   in genere vanno bene **da 5 a 8 classi**;
3. si costruisce la **tabella delle frequenze**: per ogni classe si contano i
   dati che vi cadono (aiutandosi con le barrette: ||||);
4. si **controlla** che la somma delle frequenze sia uguale al numero totale
   dei dati (se no, qualche dato è stato perso o contato due volte!);
5. si disegnano i **rettangoli adiacenti**: base = la classe, altezza = la sua
   frequenza.

> **Convenzione sui bordi.** Per non contare due volte un dato che cade
> esattamente sul confine tra due classi, si usa la convenzione che ogni classe
> include il suo estremo **sinistro** ma non il destro: la classe
> "da 160 a 165" contiene i valori $160 \le h < 165$, quindi $165$
> appartiene alla classe successiva.

```{=latex}
\begin{figure}[H]
\centering
\begin{tikzpicture}[font=\footnotesize, x=1.5cm, y=0.42cm]
  % griglia leggera
  \foreach \y in {1,...,8} \draw[gray!30] (0,\y) -- (5.7,\y);
  % assi
  \draw[-{Latex}, thick] (-0.15,0) -- (6.1,0) node[above=4pt]{$h$ (cm)};
  \draw[-{Latex}, thick] (0,0) -- (0,9.2) node[above left=-2pt and 1pt]{frequenza};
  \foreach \y in {1,...,8} \node[left, font=\tiny] at (0,\y) {\y};
  % barre (classi di 5 cm da 155 a 180; frequenze 2,5,8,6,3)
  \draw[fill=gray!30] (0.5,0) rectangle (1.5,2);
  \draw[fill=gray!30] (1.5,0) rectangle (2.5,5);
  \draw[fill=gray!30] (2.5,0) rectangle (3.5,8);
  \draw[fill=gray!30] (3.5,0) rectangle (4.5,6);
  \draw[fill=gray!30] (4.5,0) rectangle (5.5,3);
  % frequenze sopra le barre
  \node[above, font=\tiny] at (1.0,2) {2};
  \node[above, font=\tiny] at (2.0,5) {5};
  \node[above, font=\tiny] at (3.0,8) {8};
  \node[above, font=\tiny] at (4.0,6) {6};
  \node[above, font=\tiny] at (5.0,3) {3};
  % confini delle classi
  \foreach \x/\v in {0.5/155, 1.5/160, 2.5/165, 3.5/170, 4.5/175, 5.5/180}
    \node[below, font=\tiny] at (\x,0) {\v};
\end{tikzpicture}
\caption{Esempio di istogramma: le altezze di $2+5+8+6+3 = 24$ studenti,
raggruppate in classi di ampiezza 5~cm. La classe più frequente (la
\textbf{moda}) è $165 \le h < 170$; la forma ricorda una campana.}
\end{figure}
```

## Propagazione degli errori
\label{sec:prop}

Quando una grandezza si calcola a partire da altre misurate, l'errore si
"propaga". Valgono le regole seguenti (con $x$ e $y$ misurate, $z$ calcolata).

### Somma e differenza

Se $z = x + y$ oppure $z = x - y$, gli **errori assoluti si sommano**:

$$ \Delta z = \Delta x + \Delta y $$

### Prodotto e rapporto

Se $z = x \cdot y$ oppure $z = \dfrac{x}{y}$, si sommano gli **errori relativi**:

$$ \frac{\Delta z}{z} = \frac{\Delta x}{x} + \frac{\Delta y}{y} $$

Questa formula dà l'errore *relativo*. Per ottenere subito l'**errore assoluto**
$\Delta z$ basta moltiplicare per $z$ (formula "completa", quella che useremo in
pratica):

$$
\boxed{\;\Delta z = z\left(\frac{\Delta x}{x} + \frac{\Delta y}{y}\right)\;}
$$

In particolare:

- per il **prodotto** $z = x\,y$:
  $$ \Delta z = x\,y\left(\frac{\Delta x}{x} + \frac{\Delta y}{y}\right) = y\,\Delta x + x\,\Delta y $$
- per il **rapporto** $z = \dfrac{x}{y}$:
  $$ \Delta z = \frac{x}{y}\left(\frac{\Delta x}{x} + \frac{\Delta y}{y}\right) = \frac{\Delta x}{y} + \frac{x\,\Delta y}{y^{2}} $$

### Potenza (caso particolare del prodotto)

Se $z = x^{n}$ (per esempio un'area $x^2$ o un volume $x^3$), l'errore relativo
si **moltiplica per l'esponente**:

$$ \frac{\Delta z}{z} = n\,\frac{\Delta x}{x} \qquad\Longrightarrow\qquad \Delta z = n\,z\,\frac{\Delta x}{x} $$

### Tabella riassuntiva

| Operazione         | Errore relativo                                               | Errore assoluto (formula completa)                                 |
| ------------------ | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| $z = x + y$        | —                                                             | $\Delta z = \Delta x + \Delta y$                                   |
| $z = x - y$        | —                                                             | $\Delta z = \Delta x + \Delta y$                                   |
| $z = x \cdot y$    | $\dfrac{\Delta z}{z}=\dfrac{\Delta x}{x}+\dfrac{\Delta y}{y}$ | $\Delta z = z\left(\dfrac{\Delta x}{x}+\dfrac{\Delta y}{y}\right)$ |
| $z = \dfrac{x}{y}$ | $\dfrac{\Delta z}{z}=\dfrac{\Delta x}{x}+\dfrac{\Delta y}{y}$ | $\Delta z = z\left(\dfrac{\Delta x}{x}+\dfrac{\Delta y}{y}\right)$ |
| $z = x^{n}$        | $\dfrac{\Delta z}{z}= n\,\dfrac{\Delta x}{x}$                 | $\Delta z = n\,z\,\dfrac{\Delta x}{x}$                             |

# Il calibro a nonio ventesimale

Il **calibro** (o *nonio*) è uno strumento che permette di misurare lunghezze con
una sensibilità molto maggiore di un righello. Quello che useremo è
**ventesimale**: la sua sensibilità è $0{,}05$ mm, cioè un *ventesimo* di
millimetro.

## Le parti del calibro

```{=latex}
\begin{figure}[H]
\centering
\begin{tikzpicture}[line width=0.7pt, font=\footnotesize]
  % --- asta graduata (corpo) ---
  \draw[fill=gray!10] (0,0) rectangle (10,0.5);
  \node at (2.3,0.25) {asta graduata};
  % --- becco fisso a sinistra ---
  \draw[fill=gray!10] (0,0.5)  rectangle (0.55,1.6);   % interno (su)
  \draw[fill=gray!10] (0,0)    rectangle (0.55,-1.6);  % esterno (giu)
  % --- cursore mobile ---
  \draw[fill=gray!25] (4.7,-0.2) rectangle (5.7,0.7);
  \draw[fill=gray!10] (4.7,0.7)  rectangle (5.2,1.6);  % becco mobile interno (su)
  \draw[fill=gray!10] (4.7,-0.2) rectangle (5.2,-1.6); % becco mobile esterno (giu)
  \node[font=\scriptsize] at (5.2,0.25) {nonio};
  % --- asta di profondita ---
  \draw[fill=gray!10] (10,0.18) rectangle (12.6,0.32);
  % --- etichette in alto ---
  \node[align=center] at (0.27,2.15) {becchi per\\misure interne};
  \draw[-{Latex}] (0.27,1.85) -- (0.27,1.62);
  \draw[-{Latex}] (3.4,1.95) .. controls (4.0,1.8) .. (4.95,1.62);
  \node[align=center] at (5.2,2.15) {vite di\\bloccaggio};
  \draw[-{Latex}] (5.2,1.85) -- (5.05,1.62);
  % --- etichette in basso ---
  \node[align=center] at (-1.7,-0.9) {becchi per\\misure esterne};
  \draw[-{Latex}] (-0.7,-0.9) -- (0.0,-0.9);
  \draw[-{Latex}] (-0.7,-1.2) .. controls (3.0,-1.9) .. (4.7,-1.0);
  \node[align=center, anchor=west] at (12.7,0.25) {asta di profondità};
\end{tikzpicture}
\caption{Schema del calibro a nonio. Il cursore scorre lungo l'asta graduata; sul cursore è incisa la scala del nonio.}
\end{figure}
```

- **Becchi per misure esterne** (in basso): si stringono attorno all'oggetto,
  per esempio attorno al lato del cubetto.
- **Becchi per misure interne** (in alto): si infilano dentro un foro o una
  cavità per misurarne il diametro interno.
- **Asta di profondità** (in fondo a destra): esce dall'estremità e serve a
  misurare la profondità di un foro.
- **Asta graduata (scala principale):** è graduata in millimetri (e centimetri).
- **Nonio (cursore):** la scala mobile che permette di leggere i decimi e
  ventesimi di millimetro.

## Come funziona il nonio

L'idea geniale del nonio è questa: sul cursore sono incise **20 divisioni** che,
tutte insieme, occupano **19 mm** della scala principale. Quindi ogni divisione
del nonio è lunga

$$ \frac{19\ \text{mm}}{20} = 0{,}95\ \text{mm}, $$

cioè **0,05 mm in meno** di un millimetro intero. Proprio questa differenza di
$0{,}05$ mm è la **sensibilità** del calibro:

$$ \text{sensibilità} = \frac{1\ \text{mm}}{20} = 0{,}05\ \text{mm} $$

## Come si legge una misura — passo per passo

```{=latex}
\begin{figure}[H]
\centering
\begin{tikzpicture}[x=0.45cm, y=1cm, font=\footnotesize]
  % --- scala principale ---
  \draw[thick] (10,0) -- (32,0);
  \foreach \x in {10,...,32}{
    \draw (\x,0) -- (\x,0.30);
    \node[above, font=\tiny] at (\x,0.30) {\x};
  }
  \node[anchor=east, font=\scriptsize] at (9.6,0.15) {scala principale~};
  % --- nonio (cursore) ---
  \draw[thick] (12.3,-0.15) -- (31.3,-0.15);
  \foreach \i in {0,...,20}{
    \pgfmathsetmacro{\vx}{12.3 + \i*0.95}
    \draw (\vx,-0.15) -- (\vx,-0.55);
  }
  \foreach \i in {0,5,10,15,20}{
    \pgfmathsetmacro{\vx}{12.3 + \i*0.95}
    \node[below, font=\tiny] at (\vx,-0.55) {\i};
  }
  \node[anchor=east, font=\scriptsize] at (11.9,-0.35) {nonio~};
  % --- linea di allineamento (tacca 6 del nonio con 18 mm) ---
  \draw[red, dashed, thick] (18,0.6) -- (18,-0.85);
  \node[red, align=center, font=\scriptsize] at (18,1.15) {qui le tacche\\coincidono};
  % --- zero del nonio ---
  \draw[blue, -{Latex}] (12.3,-1.15) -- (12.3,-0.6);
  \node[blue, align=center, font=\scriptsize, anchor=north] at (12.3,-1.18) {lo "0" del nonio\\è tra 12 e 13 mm};
\end{tikzpicture}
\caption{Esempio di lettura. Lo zero del nonio cade tra 12 e 13 mm; la tacca n.~6 del nonio è allineata con una tacca della scala principale. Le 20 divisioni del nonio occupano in tutto 19 mm.}
\end{figure}
```

Per leggere la misura si procede in tre passi:

1. **Leggi i millimetri interi** sulla scala principale, guardando *dove cade lo
   zero del nonio*. Nell'esempio lo zero del nonio è appena oltre i 12 mm:
   parte intera $= 12$ mm.
2. **Cerca quale tacca del nonio è perfettamente allineata** con una tacca della
   scala principale. Nell'esempio è la tacca n. 6.
3. **Moltiplica il numero di quella tacca per la sensibilità** ($0{,}05$ mm) e
   somma:

$$ \text{lettura} = 12\ \text{mm} + 6 \times 0{,}05\ \text{mm} = 12{,}30\ \text{mm} $$

> **Attenzione:** una sola tacca del nonio è davvero allineata. Le altre cadono
> un po' prima o un po' dopo le tacche della scala principale. Se hai dubbi tra
> due tacche vicine, scegli quella che "coincide meglio".

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

- un **metro da sarta**;
- un **calibro a nonio ventesimale**;
- un **blocchetto** di forma (circa) parallelepipeda, di materiale ignoto;
- una **bilancia** (da laboratorio);
- un **libro rigido** (per misurare le altezze) e un **righello** (per
  disegnare l'istogramma);
- questa scheda, una matita e una calcolatrice.

> **Regola generale per tutte le misure di questa esperienza:** ogni misura va
> ripetuta **almeno 3 volte**. Se i 3 valori coincidono, l'errore è l'**errore
> massimo** dello strumento (la sua sensibilità). Se i valori sono diversi, usa
> il valore medio e la semidispersione (vedi §\ref{sec:ripetute}).

## Esperimento A — Perimetro e superficie di un banco (metro da sarta)

Procuratevi un **metro da sarta** e scegliete un banco. Misurate i **quattro
lati** del piano del banco. Ripetete ogni misura **3 volte**.

**Lati del banco** (in cm):

| Lato          | 1ª misura | 2ª misura | 3ª misura | Valore $\pm$ errore |
| ------------- | --------- | --------- | --------- | ------------------- |
| $l_1$ (lungo) |           |           |           | $\pm$               |
| $l_2$ (corto) |           |           |           | $\pm$               |
| $l_3$ (lungo) |           |           |           | $\pm$               |
| $l_4$ (corto) |           |           |           | $\pm$               |

> Le 3 misure di ciascun lato dovrebbero risultare **uguali**: questo conferma
> che l'errore è l'**errore massimo** del metro da sarta, cioè
> $\Delta l = 1$ mm $= 0{,}1$ cm.

### Perimetro (misura indiretta — somma)

Il perimetro è la somma dei quattro lati. La regola della somma dice che gli
**errori assoluti si sommano**:

$$ P = l_1 + l_2 + l_3 + l_4 \qquad\qquad \Delta P = \Delta l_1 + \Delta l_2 + \Delta l_3 + \Delta l_4 $$

Tutti i lati sono misurati con lo **stesso strumento**, quindi tutti gli errori
sono uguali: $\Delta l_1 = \Delta l_2 = \Delta l_3 = \Delta l_4 = 0{,}1$ cm.
La formula si semplifica:

$$ \Delta P = 4 \times \Delta l = 4 \times 0{,}1\ \text{cm} = \underline{\hspace{1.5cm}}\ \text{cm} $$

> L'errore sul perimetro **non dipende** dai valori misurati, ma solo da quante
> grandezze sono state sommate e dall'errore di ciascuna.

Calcolate ora il valore di $P$:

$$
P = l_1 + l_2 + l_3 + l_4
  = \underline{\hspace{1cm}} + \underline{\hspace{1cm}} + \underline{\hspace{1cm}} + \underline{\hspace{1cm}}
  = \underline{\hspace{2cm}}\ \text{cm}
$$

$$ P = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \text{cm} $$

### Superficie (misura indiretta — prodotto)

Per la superficie usate **due lati adiacenti**, una base $b$ e un'altezza $h$
(per esempio $b = l_1$ e $h = l_2$):

$$ S = b \cdot h \qquad\qquad \Delta S = S\left(\frac{\Delta b}{b} + \frac{\Delta h}{h}\right) $$

$$ S = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \text{cm}^2 $$

**Domanda.** Quanto vale l'errore percentuale sulla superficie? È più grande o
più piccolo dell'errore percentuale su un singolo lato? Perché?

\vspace{1.5cm}

### Il banco in pollici — un numero adimensionale

Girate il metro da sarta: sull'altro lato la scala è in **pollici** (in inglese
*inch*, simbolo **in** oppure $''$), l'unità con cui si misurano ancora oggi,
per esempio, le diagonali degli schermi. Vale la conversione:

$$ 1\ \text{in} = 2{,}54\ \text{cm} $$

Osservate la scala: le divisioni più piccole **non sono decimali** — di solito
valgono $\tfrac{1}{8}$ di pollice. Prendete come errore una divisione della
vostra scala.

Misurate di nuovo il **lato lungo** e il **lato corto** del banco, questa volta
leggendo la scala **in pollici**, e ricopiate accanto i valori in centimetri già
ottenuti prima:

| Lato          | Misura in cm (già fatta) | Misura in pollici |
| ------------- | ------------------------ | ----------------- |
| $l_1$ (lungo) |                          |                   |
| $l_2$ (corto) |                          |                   |

Ora calcolate, **in ciascuna unità di misura**, il rapporto tra il lato lungo e
il lato corto:

$$
r_{\text{cm}} = \frac{l_1\ (\text{in cm})}{l_2\ (\text{in cm})} = \underline{\hspace{2.5cm}}
\qquad\qquad
r_{\text{in}} = \frac{l_1\ (\text{in pollici})}{l_2\ (\text{in pollici})} = \underline{\hspace{2.5cm}}
$$

**Domanda.** I due numeri sono uguali (o quasi uguali, entro gli errori di
misura)? Ve lo aspettavate?

\vspace{1.2cm}

> **Perché viene lo stesso numero?** Dividendo una lunghezza per un'altra
> lunghezza, le unità di misura **si semplificano** come in una frazione:
> $$ r = \frac{l_1}{l_2} = \frac{113\ \cancel{\text{cm}}}{56{,}5\ \cancel{\text{cm}}} = 2{,}0 $$
> Il risultato è un **numero puro**, senza unità: si dice **adimensionale**.
> Un numero adimensionale non dipende dall'unità scelta: chi misura in
> centimetri e chi misura in pollici trova lo **stesso** valore. È per questo
> che possiamo dire che uno schermo è "16:9" senza specificare nessuna unità di
> misura!

## Esperimento B — Volume e densità di un blocchetto (calibro)

Procuratevi il **blocchetto** e il **calibro a nonio**. Misurate le **tre
dimensioni** $a$, $b$, $c$ del blocchetto col calibro, ripetendo ogni misura
**3 volte**.

**Dimensioni del blocchetto** (in cm):

| Dimensione | 1ª misura | 2ª misura | 3ª misura | Valore $\pm$ errore |
| ---------- | --------- | --------- | --------- | ------------------- |
| $a$        |           |           |           | $\pm$               |
| $b$        |           |           |           | $\pm$               |
| $c$        |           |           |           | $\pm$               |

> Anche qui, se le 3 misure coincidono, l'errore è l'errore massimo del calibro:
> $\Delta a = \Delta b = \Delta c = 0{,}005$ cm.

### Volume (misura indiretta — prodotto di tre fattori)

$$ V = a \cdot b \cdot c \qquad\qquad \Delta V = V\left(\frac{\Delta a}{a} + \frac{\Delta b}{b} + \frac{\Delta c}{c}\right) $$

$$
V_{\text{cal}} = \underline{\hspace{2.5cm}}\ \text{cm}^3
\qquad
\Delta V_{\text{cal}} = \underline{\hspace{2cm}}\ \text{cm}^3
$$

### Volume con il cilindro graduato (metodo dell'immersione)

Esiste un secondo metodo per misurare il volume: il **principio di Archimede**.
Versate dell'acqua in un cilindro graduato fino a un livello iniziale $V_0$,
immergete il blocchetto e leggete il nuovo livello $V_1$.

**Sensibilità del cilindro graduato:** leggete le tacche sullo strumento.
Tipicamente è $10\ \text{mL} = 10\ \text{cm}^3$.

Sensibilità: $\Delta_{\text{cil}} = \underline{\hspace{2cm}}\ \text{cm}^3$

| Lettura                      | Valore |
| ---------------------------- | ------ |
| Livello iniziale $V_0$ (cm³) |        |
| Livello finale $V_1$ (cm³)   |        |

Il volume del blocchetto è la **differenza** dei due livelli. Poiché si leggono
**due** valori, l'errore si propaga come somma:

$$
V_{\text{cil}} = V_1 - V_0 = \underline{\hspace{2.5cm}}\ \text{cm}^3
$$

$$
\Delta V_{\text{cil}} = \Delta V_1 + \Delta V_0 = 2 \times \Delta_{\text{cil}} = 2 \times \underline{\hspace{1.5cm}} = \underline{\hspace{1.5cm}}\ \text{cm}^3
$$

### Confronto dei due metodi

Calcolate l'**errore relativo** per ciascun metodo:

$$
\varepsilon_{\text{cal}} = \frac{\Delta V_{\text{cal}}}{V_{\text{cal}}} = \underline{\hspace{3cm}}
\qquad\qquad
\varepsilon_{\text{cil}} = \frac{\Delta V_{\text{cil}}}{V_{\text{cil}}} = \underline{\hspace{3cm}}
$$

**Domanda 1.** Quale dei due metodi fornisce un errore relativo minore?

\vspace{1.2cm}

**Domanda 2.** Il cilindro ha sensibilità molto peggiore del calibro (10 cm³ contro
0,005 cm³): perché nonostante questo l'errore *relativo* potrebbe risultare paragonabile?

\vspace{1.2cm}

Per i calcoli successivi (densità) usate il volume con errore relativo minore:

$$
V = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \text{cm}^3 \qquad \text{(metodo: \underline{\hspace{3cm}})}
$$

### Massa (misura diretta — bilancia)

Pesate il blocchetto sulla bilancia, **3 volte**. Annotate la sensibilità della
bilancia (la trovate scritta sullo strumento):

Sensibilità della bilancia: $\Delta m = \underline{\hspace{2.5cm}}$

| Pesata  | 1ª  | 2ª  | 3ª  | Valore $\pm$ errore |
| ------- | --- | --- | --- | ------------------- |
| $m$ (g) |     |     |     | $\pm$               |

### Densità (misura indiretta — rapporto)

La densità è il rapporto tra massa e volume:

$$ \rho = \frac{m}{V} \qquad\qquad \Delta \rho = \rho\left(\frac{\Delta m}{m} + \frac{\Delta V}{V}\right) $$

$$ \rho = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \text{g/cm}^3 $$

### Di che materiale è fatto il blocchetto?

Confrontate il valore di densità ottenuto con una **tabella delle densità**
(cercate online "densità dei materiali", per esempio su Wikipedia). Qui sotto
alcuni valori di riferimento:

| Materiale         | Densità (g/cm³) |
| ----------------- | --------------- |
| Legno (vari tipi) | 0,4 – 0,9       |
| Polietilene / PVC | 0,9 – 1,4       |
| Vetro             | 2,4 – 2,8       |
| Alluminio         | 2,70            |
| Ferro / acciaio   | 7,8 – 7,9       |
| Ottone            | 8,4 – 8,7       |
| Rame              | 8,96            |
| Piombo            | 11,34           |

**Conclusione.** In base alla densità misurata (tenendo conto del suo errore!),
il blocchetto è probabilmente fatto di: \underline{\hspace{5cm}}

> Il valore di tabella cade dentro l'intervallo
> $\rho - \Delta\rho \ \le \ \rho_{\text{tabella}} \ \le \ \rho + \Delta\rho$?
> Se sì, la misura è **compatibile** con quel materiale.

## Esperimento C — Misura ripetuta di una parete (metro da sarta, 5 volte)

Ora misuriamo qualcosa di **grande**: una parete dell'aula (o del laboratorio).
Con il **metro da sarta** misurate la stessa lunghezza **5 volte**, possibilmente
cambiando ogni volta operatore e ripartendo da capo.

Questa volta è normale ottenere valori **leggermente diversi**: il metro è
flessibile, va teso e posizionato, e su distanze grandi le piccole differenze si
notano. Useremo proprio queste differenze per stimare l'errore in due modi.

| Misura $x_i$ (cm) | $x_1$ | $x_2$ | $x_3$ | $x_4$ | $x_5$ |
| ----------------- | ----- | ----- | ----- | ----- | ----- |
| valore            |       |       |       |       |       |

### Valore medio

$$ \bar{x} = \frac{x_1 + x_2 + x_3 + x_4 + x_5}{5} = \underline{\hspace{3cm}}\ \text{cm} $$

### Stima 1 — Semidispersione

$$ \Delta x = \frac{x_{\max} - x_{\min}}{2} = \underline{\hspace{3cm}}\ \text{cm} $$

### Stima 2 — Scarto quadratico medio

Compilate la tabella degli scarti $d_i = x_i - \bar{x}$:

| $i$       | $x_i$ (cm) | $d_i = x_i - \bar{x}$ | $d_i^{\,2}$    |
| --------- | ---------- | --------------------- | -------------- |
| 1         |            |                       |                |
| 2         |            |                       |                |
| 3         |            |                       |                |
| 4         |            |                       |                |
| 5         |            |                       |                |
| **somma** |            |                       | $\sum d_i^2 =$ |

$$ \sigma = \sqrt{\frac{\sum_{i=1}^{5}\left(x_i - \bar{x}\right)^2}{5}} = \underline{\hspace{3cm}}\ \text{cm} $$

### Confronto

Scrivete il risultato finale nelle due forme:

$$ x = \bar{x} \pm \Delta x_{\text{semidisp.}} \qquad\qquad x = \bar{x} \pm \sigma $$

**Domanda 1.** I due valori dell'errore (semidispersione e SQM) sono simili o molto diversi?

\vspace{1.2cm}

**Domanda 2.** Quale dei due metodi vi sembra più affidabile, e perché?

\vspace{1.2cm}

## Esperimento D — L'istogramma delle altezze della classe

Finora ogni gruppo ha lavorato per conto suo. In quest'ultimo esperimento,
invece, i dati di **tutti i gruppi** vengono messi in comune: ogni gruppo misura
le altezze dei propri componenti, i valori si condividono con la classe e ogni
gruppo costruisce **sulla propria scheda** l'istogramma delle altezze di tutta
la classe. Prima di iniziare, rileggete il §\ref{sec:isto} sui richiami teorici.

### Passo 1 — Misurate le altezze del vostro gruppo

Con il **metro da sarta** misurate l'altezza di ogni componente del gruppo. Per
farlo bene: lo studente, **senza scarpe**, sta in piedi con schiena e talloni
contro la parete; un compagno gli appoggia sulla testa un **libro rigido**
tenendolo bene **orizzontale** (perpendicolare alla parete) e segna con la
matita il punto in cui il libro tocca la parete; si misura poi la distanza dal
pavimento al segno.

> Per l'altezza di una persona conta più la **postura** (schiena dritta, testa
> alta, libro orizzontale) che la sensibilità del metro: assumete per tutte le
> altezze un errore $\Delta h = 0{,}5$ cm.

| Componente del gruppo | Altezza $h$ (cm) |
| --------------------- | ---------------- |
|                       |                  |
|                       |                  |
|                       |                  |
|                       |                  |
|                       |                  |

### Passo 2 — Condividete i dati con la classe

Un rappresentante per gruppo scrive le altezze **alla lavagna**. Quando tutti i
gruppi hanno scritto, ricopiate qui sotto le altezze di **tutta la classe**
(l'ordine non è importante):

| n°  | $h$ (cm) | n°  | $h$ (cm) | n°  | $h$ (cm) |
| --- | -------- | --- | -------- | --- | -------- |
| 1   |          | 11  |          | 21  |          |
| 2   |          | 12  |          | 22  |          |
| 3   |          | 13  |          | 23  |          |
| 4   |          | 14  |          | 24  |          |
| 5   |          | 15  |          | 25  |          |
| 6   |          | 16  |          | 26  |          |
| 7   |          | 17  |          | 27  |          |
| 8   |          | 18  |          | 28  |          |
| 9   |          | 19  |          | 29  |          |
| 10  |          | 20  |          | 30  |          |

Numero totale di studenti misurati: $N = \underline{\hspace{1.5cm}}$

### Passo 3 — Minimo, massimo e campo di variazione

Cercate nella tabella il valore più piccolo e quello più grande:

$$
h_{\min} = \underline{\hspace{2cm}}\ \text{cm}
\qquad
h_{\max} = \underline{\hspace{2cm}}\ \text{cm}
\qquad
R = h_{\max} - h_{\min} = \underline{\hspace{2cm}}\ \text{cm}
$$

### Passo 4 — Scegliete le classi e contate le frequenze

Dividete l'intervallo dei valori in **classi di ampiezza 5 cm**, cominciando dal
multiplo di 5 immediatamente **sotto** $h_{\min}$ (per esempio: se
$h_{\min} = 152$ cm, la prima classe è $150 \le h < 155$). Scrivete le classi
nella prima colonna, poi scorrete la tabella del Passo 2 e fate una **barretta**
nella classe giusta per ogni altezza; alla fine contate le barrette.

| Classe (es. $150 \le h < 155$) | Conteggio a barrette | Frequenza |
| ------------------------------ | -------------------- | --------- |
|                                |                      |           |
|                                |                      |           |
|                                |                      |           |
|                                |                      |           |
|                                |                      |           |
|                                |                      |           |
|                                |                      |           |
|                                |                      | somma:    |

> **Controllo:** la somma delle frequenze deve essere uguale a $N$. Se non
> torna, avete perso un dato o ne avete contato uno due volte: ricontrollate!

### Passo 5 — Disegnate l'istogramma

Riportate le classi sull'asse orizzontale (scrivete i confini delle classi
sotto le tacche) e disegnate per ogni classe un **rettangolo** alto quanto la
sua frequenza. Ricordate: i rettangoli devono essere **adiacenti**, senza spazi
tra loro.

```{=latex}
\begin{figure}[H]
\centering
\begin{tikzpicture}[font=\footnotesize, x=1.6cm, y=0.45cm]
  % griglia di supporto
  \draw[gray!35, xstep=1, ystep=1] (0,0) grid (8,12);
  % assi
  \draw[-{Latex}, thick] (-0.15,0) -- (8.5,0) node[above=4pt]{$h$ (cm)};
  \draw[-{Latex}, thick] (0,0) -- (0,12.7) node[above left=-2pt and 1pt]{frequenza};
  % tacche e numeri sull'asse y
  \foreach \y in {1,...,12} \node[left, font=\tiny] at (0,\y) {\y};
  % tacche sull'asse x con righette vuote da compilare
  \foreach \x in {0,...,8} {
    \draw[thick] (\x,0) -- (\x,-0.35);
    \node[below, font=\tiny] at (\x,-0.4) {\rule{0.85cm}{0.4pt}};
  }
\end{tikzpicture}
\caption{Griglia per l'istogramma delle altezze della classe: scrivete i
confini delle classi sulle righette sotto l'asse orizzontale, poi disegnate i
rettangoli.}
\end{figure}
```

### Passo 6 — Osservate e commentate

**Domanda 1.** Qual è la classe più frequente (la **moda**)?

\vspace{1cm}

**Domanda 2.** L'istogramma ha la forma "a campana" (valori centrali frequenti,
valori estremi rari)? Se no, sapreste dire perché? (Suggerimento: quanti dati
avete? Una campana "pulita" richiede molti dati.)

\vspace{1.2cm}

**Domanda 3.** Calcolate l'altezza **media** della classe con la formula del
valore medio (§\ref{sec:ripetute}): in quale classe dell'istogramma cade?
È vicina alla moda?

$$ \bar{h} = \frac{h_1 + h_2 + \dots + h_N}{N} = \underline{\hspace{2.5cm}}\ \text{cm} $$

**Domanda 4.** Se aveste scelto classi di ampiezza 1 cm, oppure di 20 cm,
l'istogramma sarebbe stato altrettanto leggibile? Che cosa si perde nei due
casi?

\vspace{1.2cm}

# Conclusioni

**C1.** Qual è la differenza tra una misura **diretta** e una **indiretta**?
Fate un esempio tratto da questa esperienza.

\vspace{1.5cm}

**C2.** In quale esperimento l'errore era l'**errore massimo** dello strumento
e in quale invece avete dovuto **ripetere** le misure per stimarlo? Perché?

\vspace{1.5cm}

**C3.** Nelle misure indirette (superficie, volume, densità) l'errore percentuale
finale era **maggiore o minore** di quello delle singole misure dirette?
Che cosa ci insegna questo fatto sulla propagazione degli errori?

\vspace{1.5cm}

\begin{center}\textit{Fine dell'esperienza}\end{center}
