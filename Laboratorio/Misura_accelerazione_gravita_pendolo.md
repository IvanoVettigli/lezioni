---
title: "Esperienza laboratoriale di fisica"
subtitle: "Misura dell'accelerazione di gravità con il pendolo semplice"
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
  - \usetikzlibrary{arrows.meta,patterns}
  - \usepackage{icomma}
  - \usepackage{booktabs}
  - \usepackage{amsmath}
  - \usepackage{float}
  - \usepackage{enumitem}
---

# Introduzione e obiettivi

In questa esperienza misureremo il valore dell'**accelerazione di gravità** $g$
sfruttando le oscillazioni di un pendolo semplice. La misura diretta di $g$ con
la caduta libera è difficile (i tempi in gioco sono troppo brevi per un
cronometro manuale); il pendolo ci permette invece di lavorare con periodi
dell'ordine di 1--2 secondi, molto più comodi da misurare.

Gli obiettivi sono:

- capire perché il pendolo è uno strumento adatto a misurare $g$;
- misurare la lunghezza del pendolo e il suo periodo con la corretta stima
  dell'incertezza;
- ricavare $g$ dalla formula del pendolo e propagarne l'errore;
- confrontare il valore ottenuto con quello di riferimento per la nostra località;
- (approfondimento) verificare la relazione $T^2 \propto L$ con il metodo grafico.

# Richiami teorici

## L'accelerazione di gravità

Ogni corpo sulla superficie terrestre è soggetto alla forza gravitazionale, che
gli imprime una **accelerazione di gravità** $g$ diretta verso il basso. Il
valore convenzionale è $g \approx 9{,}81\ \text{m/s}^2$, ma dipende dalla
latitudine e dall'altitudine:

| Luogo                       | Latitudine | $g$ (m/s²) |
| :-------------------------- | :--------: | :--------: |
| Polo Nord                   |   90° N    |   9,832    |
| Helsinki (Finlandia)        |   60° N    |   9,819    |
| Roma (Italia)               |   41° N    |   9,805    |
| Equatore                    |     0°     |   9,780    |
| Vetta dell'Everest (8849 m) |   28° N    |   9,764    |

Le variazioni sono dello 0,5%, quindi nella maggior parte dei problemi possiamo
assumere $g \approx 9{,}81\ \text{m/s}^2$. In questa esperienza cercheremo
di misurare proprio questo valore.

## Perché non usiamo la caduta libera

In linea di principio, potremmo ricavare $g$ dalla legge della caduta libera:
$h = \frac{1}{2}g\,t^2$, quindi $g = 2h/t^2$. Tuttavia, un oggetto che cade
da $h = 1{,}5$ m impiega solo

$$t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \times 1{,}5}{9{,}81}} \approx 0{,}55\ \text{s}$$

Il tempo di reazione di un operatore nell'azionare un cronometro è circa
0,2--0,3 s: l'errore relativo sul tempo sarebbe dell'ordine del 40--50%, che
si traduce (per propagazione su $t^2$) in un errore ancora maggiore su $g$. Il
pendolo risolve questo problema.

## Il pendolo semplice

Un **pendolo semplice** è costituito da una massa (sfera) appesa a un filo
inestensibile di massa trascurabile. Per piccole oscillazioni (angolo iniziale
inferiore a circa 15°), il **periodo** $T$ (tempo di un'oscillazione completa)
dipende solo dalla lunghezza $L$ e da $g$:

$$T = 2\pi\sqrt{\frac{L}{g}}$$

dove $L$ è la distanza dal punto di sospensione al **centro** della sfera.

```{=latex}
\begin{figure}[H]
\centering
\begin{tikzpicture}[font=\footnotesize, line width=0.8pt]
  % soffitto
  \fill[gray!25] (-1.3,0.12) rectangle (1.3,0.30);
  \foreach \i in {-1.1,-0.7,-0.3,0.1,0.5,0.9}{
    \draw[gray!60, line width=0.4pt] (\i,0.12) -- ++(0.22,0.17);
  }
  \draw[thick] (-1.3,0.12) -- (1.3,0.12);
  % perno
  \fill (0,0.12) circle (0.055);
  % linea verticale di equilibrio
  \draw[dashed, gray!60] (0,0.12) -- (0,-5.4) node[below, gray!80, font=\scriptsize] {equilibrio};
  % filo + sfera (15 gradi): sin15=0.259, cos15=0.966
  % L=4.72, centro sfera: (4.72*0.259, 0.12-4.72*0.966)=(1.22,-4.44)
  \draw (0,0.12) -- (1.22,-4.44);
  \fill[gray!20] (1.22,-4.44) circle (0.43);
  \draw (1.22,-4.44) circle (0.43);
  % arco angolo theta
  % arc da -90 a -75 (ccw), raggio 1.05, centro=(0,0.12)
  % punto iniziale: (0, 0.12-1.05)=(0,-0.93)
  \draw[->] (0,-0.93) arc (-90:-75:1.05);
  \node[font=\scriptsize] at (0.25,-1.10) {$\theta$};
  % label L (parentesi graffa a sinistra)
  \draw[dotted, line width=0.5pt] (0,0.12) -- (-0.30,0.12);
  \draw[dotted, line width=0.5pt] (0,-4.44) -- (-0.30,-4.44);
  \draw[{|-|}] (-0.30,0.12) -- (-0.30,-4.44) node[midway, left] {$L$};
  % label r
  \draw[-{Latex}] (1.22,-4.44) -- ++(0.43,0) node[right] {$r$};
  % label l (filo)
  % bordo superiore sfera lungo filo: l=L-r=4.29 dal perno
  % coordinate: (4.29*0.259, 0.12-4.29*0.966)=(1.11,-4.02)
  \draw[dotted, line width=0.5pt] (0,0.12) -- (-1.0,0.12);
  \draw[dotted, line width=0.5pt] (1.11,-4.02) -- (-1.0,-4.02);
  \draw[{|-|}] (-1.0,0.12) -- (-1.0,-4.02) node[midway, left] {$l$};
\end{tikzpicture}
\caption{Schema del pendolo semplice. La lunghezza totale $L = l + r$ va dal punto di sospensione al \textit{centro} della sfera; $l$ è la lunghezza del filo (misurata con il metro da sarta) e $r$ è il raggio della sfera (misurato con il calibro).}
\end{figure}
```

> **Nota importante.** Il periodo **non dipende dalla massa**: qualsiasi peso
> appeso a un filo della stessa lunghezza $L$ oscillerà con lo stesso periodo
> $T$. Questo rendeva il pendolo lo strumento ideale per costruire orologi!

### Formula inversa: ricavare $g$

Elevando al quadrato la formula del periodo:

$$T^2 = \frac{4\pi^2\,L}{g} \qquad\Longrightarrow\qquad
\boxed{g = \frac{4\pi^2\,L}{T^2}}$$

Questa è la **formula che useremo nell'esperimento**: misuriamo $L$ e $T$, e
calcoliamo $g$.

## Perché misurare 10 oscillazioni

Il periodo tipico è dell'ordine di 1--2 s. Misurare un singolo periodo con un
cronometro manuale introduce un errore di reazione (circa 0,2--0,3 s), che
sarebbe una frazione significativa del tempo misurato.

Soluzione: misurare il tempo di **10 oscillazioni complete** e dividere per 10.
In questo modo:

- il tempo totale è $\approx 10T \approx 10\text{--}20$ s, e l'errore di reazione
  è solo il 2--3% di questo;
- l'errore relativo sul singolo periodo si riduce di un fattore 10;
- piccole irregolarità si mediano tra loro.

Ripeteremo la misura **5 volte** e calcoleremo media e incertezza.

## Misure ripetute: media, semidispersione e scarto quadratico medio

Quando le 5 misure del tempo danno valori **leggermente diversi**, si usa come
stima migliore il **valore medio**:

$$\bar{x} = \frac{x_1 + x_2 + \cdots + x_n}{n}$$

e per l'incertezza si sceglie uno dei due metodi seguenti (già visti nell'esperienza n. 1).

**Semidispersione:**
$$\Delta x = \frac{x_{\max} - x_{\min}}{2}$$

**Scarto quadratico medio (SQM):**
$$\sigma = \sqrt{\frac{\sum_{i=1}^{n}(x_i - \bar{x})^2}{n}}$$

## Propagazione dell'errore su $g$

La formula $g = 4\pi^2 L / T^2$ dipende da due grandezze misurate ($L$ e $T$).
Applicando le regole di propagazione per prodotti e potenze:

$$\frac{\Delta g}{g} = \frac{\Delta L}{L} + 2\,\frac{\Delta T}{T}$$

Il fattore **2** davanti a $\Delta T/T$ viene dall'esponente di $T^2$: l'errore
relativo sul periodo conta **il doppio** rispetto a quello sulla lunghezza.
La formula completa per l'errore assoluto è quindi:

$$\boxed{\Delta g = g\left(\frac{\Delta L}{L} + 2\,\frac{\Delta T}{T}\right)}$$

Dove l'incertezza su $L$ si propaga a sua volta da $L = l + r$
(somma di due misure dirette):

$$\Delta L = \Delta l + \Delta r$$

## Errori sistematici e casuali

- **Errori casuali:** variano in modo imprevedibile da una misura all'altra
  (es. piccole differenze nel punto di rilascio, variazioni del tempo di
  reazione). Si stimano con la semidispersione o lo SQM.
- **Errori sistematici:** si ripetono sempre nella stessa direzione e non si
  compensano con la media. Nel pendolo, un errore sistematico frequente è la
  **rotazione della sfera**: se la sfera ruota su sé stessa durante le
  oscillazioni, parte dell'energia si trasferisce al moto rotatorio,
  alterando il periodo. Per evitarlo, fare oscillare il pendolo in un piano
  senza imprimere rotazioni, oppure vincolare la sfera con due fili ravvicinati.

> **Attenzione.** Verificate che durante le oscillazioni il pendolo non tocchi
> il supporto, e che l'angolo di oscillazione sia inferiore a 15° (piccole
> oscillazioni). Con angoli grandi la formula $T = 2\pi\sqrt{L/g}$ non vale più.

## Confrontare una misura con il valore di riferimento

Due valori $g_{\text{mis}}$ e $g_{\text{rif}}$ sono **compatibili** se la loro
differenza è minore dell'errore assoluto:

$$|g_{\text{mis}} - g_{\text{rif}}| \leq \Delta g$$

Se questa condizione è soddisfatta, il valore di riferimento cade all'interno
dell'intervallo $[g_{\text{mis}} - \Delta g,\; g_{\text{mis}} + \Delta g]$ e la
misura si dice **in accordo** con il valore atteso.

## Approfondimento: il metodo grafico

Per una stima più robusta di $g$, si può misurare $T$ per diverse lunghezze $L$
e costruire un grafico. Dalla formula del pendolo:

$$T^2 = \frac{4\pi^2}{g}\cdot L$$

Questa è l'equazione di una **retta passante per l'origine** del tipo $y = m\,x$,
con $y = T^2$, $x = L$ e coefficiente angolare $m = 4\pi^2/g$. Da $m$ si
ricava:

$$g = \frac{4\pi^2}{m}$$

Il metodo grafico è più preciso perché usa molti punti sperimentali, permette
di individuare visivamente eventuali dati anomali (*outlier*) e il fatto che la
retta debba passare per l'origine costituisce un ulteriore controllo sulla
presenza di errori sistematici.

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

- un **supporto** verticale con asta orizzontale (o a forma di H);
- una **sfera metallica con filo**;
- un **metro da sarta**;
- un **calibro a nonio ventesimale**;
- una **squadretta**;
- il **cronometro** del cellulare (un solo cellulare per gruppo).

> **Regola generale.** Ogni misura va ripetuta almeno **3 volte** (e il periodo
> **5 volte**). Se i valori coincidono, l'errore è l'errore massimo dello
> strumento; se variano, si usano valor medio e semidispersione.

> **Attenzione al montaggio.**
> Verificate che la sfera non tocchi il supporto durante le oscillazioni.
> Fate oscillare il pendolo con piccole ampiezze (angolo < 15°).

## Strumenti di misura

Per ogni strumento annotate le caratteristiche (trovate sensibilità e portata
sull'etichetta o sulla scala dello strumento):

| Strumento              | Portata | Sensibilità | Errore massimo |
| :--------------------- | :-----: | :---------: | :------------: |
| Metro da sarta         |         |             |                |
| Calibro a nonio vent.  |         |             |                |
| Cronometro (cellulare) |         |             |                |

## Domande preparatorie

*Rispondete prima di iniziare l'esperimento.*

**D1.** Qual è la grandezza che vogliamo misurare e con quale formula la ricaviamo?

\vspace{1.8cm}

**D2.** Perché la lunghezza del pendolo $L$ non coincide con la lunghezza del filo $l$?
Come si calcola $L$ e come si propaga il suo errore?

\vspace{1.8cm}

**D3.** Che valore di $g$ vi aspettate di trovare nella vostra città? (Cercate un
valore di riferimento online e indicate la fonte.)

\vspace{1.8cm}

## Esperimento A — Misura della lunghezza del pendolo

La lunghezza $L$ è la distanza dal punto di sospensione al **centro** della
sfera. Misurate separatamente:

- $l$: lunghezza del **filo** dal punto di attacco al **bordo superiore** della
  sfera (metro da sarta, almeno 3 volte);
- $d$: **diametro** della sfera col calibro (almeno 3 volte); da $d$ si ricava
  il raggio $r = d/2$.

**Lunghezza del filo $l$** (in m):

| 1ª misura | 2ª misura | 3ª misura | Valore $\pm$ errore |
| :-------: | :-------: | :-------: | :-----------------: |
|           |           |           |        $\pm$        |

**Diametro della sfera $d$** (in mm):

| 1ª misura | 2ª misura | 3ª misura | Valore $\pm$ errore |
| :-------: | :-------: | :-------: | :-----------------: |
|           |           |           |        $\pm$        |

Raggio: $r = d/2 = \underline{\hspace{2cm}} \pm \underline{\hspace{1.5cm}}\ \text{mm}$
$= \underline{\hspace{2cm}} \pm \underline{\hspace{1.5cm}}\ \text{m}$

**Lunghezza totale del pendolo** (propagazione per somma):

$$L = l + r \qquad\qquad \Delta L = \Delta l + \Delta r$$

$$L = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \text{m}$$

\newpage

## Esperimento B — Misura del periodo

Fate oscillare il pendolo con ampiezza piccola ($\theta < 15^\circ$) e misurate il
tempo di **10 oscillazioni complete**. Ripetete la misura **5 volte**,
ripartendo da capo ogni volta (non continuate da dove avete finito).

|       Misura        | Tempo per 10 oscillazioni $t_{10}$ (s) | Periodo $T = t_{10}/10$ (s) |
| :-----------------: | :------------------------------------: | :-------------------------: |
|          1          |                                        |                             |
|          2          |                                        |                             |
|          3          |                                        |                             |
|          4          |                                        |                             |
|          5          |                                        |                             |
| **Media** $\bar{T}$ |                                        |                             |

### Valore medio e incertezza sul periodo

**Valore medio:**
$$\bar{T} = \frac{T_1 + T_2 + T_3 + T_4 + T_5}{5} = \underline{\hspace{3cm}}\ \text{s}$$

**Semidispersione:**
$$\Delta T_{\text{semidisp.}} = \frac{T_{\max} - T_{\min}}{2} = \underline{\hspace{3cm}}\ \text{s}$$

**Scarto quadratico medio.** Compilate la tabella degli scarti $d_i = T_i - \bar{T}$:

|    $i$    | $T_i$ (s) | $d_i = T_i - \bar{T}$ (s) | $d_i^{\,2}$ (s²) |
| :-------: | :-------: | :-----------------------: | :--------------: |
|     1     |           |                           |                  |
|     2     |           |                           |                  |
|     3     |           |                           |                  |
|     4     |           |                           |                  |
|     5     |           |                           |                  |
| **somma** |           |                           |  $\sum d_i^2 =$  |

$$\sigma_T = \sqrt{\frac{\sum_{i=1}^{5}(T_i - \bar{T})^2}{5}} = \underline{\hspace{3cm}}\ \text{s}$$

**Risultato finale per il periodo** (scegliete l'errore più grande tra
semidispersione e SQM, oppure il più significativo):

$$T = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \text{s}$$

## Esperimento C — Calcolo di $g$ e della sua incertezza

Usate i valori di $L$ e $\bar{T}$ misurati nei due esperimenti precedenti.

**Calcolo di $g$:**

$$g = \frac{4\pi^2\,L}{T^2} = \underline{\hspace{3cm}}\ \text{m/s}^2$$

**Calcolo dell'incertezza** (propagazione per prodotto/potenza):

$$\frac{\Delta g}{g} = \frac{\Delta L}{L} + 2\,\frac{\Delta T}{T} = \underline{\hspace{2.5cm}}$$

$$\Delta g = g \times \left(\frac{\Delta L}{L} + 2\,\frac{\Delta T}{T}\right) = \underline{\hspace{3cm}}\ \text{m/s}^2$$

**Risultato finale:**

$$\boxed{g = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \text{m/s}^2}$$

**Errore percentuale su $g$:**

$$\varepsilon_g\% = \frac{\Delta g}{g} \times 100 = \underline{\hspace{3cm}}\%$$

## Conclusioni

**C1.** Confrontate il valore misurato con $g_{\text{rif}} \approx 9{,}81\ \text{m/s}^2$
(o con il valore cercato per la vostra città). Il valore di riferimento cade
nell'intervallo $[g - \Delta g,\; g + \Delta g]$? La misura è **compatibile**?

\vspace{1.5cm}

**C2.** Quale delle due incertezze ($\Delta L/L$ oppure $2\,\Delta T/T$) pesa di
più nell'errore finale su $g$? Che cosa suggerisce questo per migliorare
l'esperimento?

\vspace{1.5cm}

**C3.** Se il vostro valore **non è compatibile** con quello di riferimento,
ipotizzate le cause della discrepanza (rotazione della sfera, angolo troppo
grande, misura imprecisa di $L$, filo non rigido, attrito, ecc.).

\vspace{1.5cm}

## Approfondimento — Metodo grafico ($T^2$ in funzione di $L$)

Modificate la lunghezza del pendolo almeno **5 volte** e per ciascuna misurate
il periodo (basta una serie di 5 misure $\times$ 10 oscillazioni). La relazione
$T^2 = (4\pi^2/g)\,L$ prevede una **retta passante per l'origine**.

### Raccolta dati

| $L$ (m) | $t_{10}$ (s) | $T = t_{10}/10$ (s) | $T^2$ (s²) |
| :-----: | :----------: | :-----------------: | :--------: |
|         |              |                     |            |
|         |              |                     |            |
|         |              |                     |            |
|         |              |                     |            |
|         |              |                     |            |
|         |              |                     |            |

### Grafico

Riportate i dati su carta millimetrata (oppure Excel / Google Fogli):

- **asse $x$**: $L$ (m)
- **asse $y$**: $T^2$ (s²)

Tracciate la retta che meglio interpola i punti. La retta deve passare per
l'origine (se non ci passa, segnalarlo come possibile errore sistematico).

### Calcolo di $g$ dal coefficiente angolare

Scegliete due punti ben distanziati **sulla retta** (non necessariamente punti
sperimentali) e calcolate il coefficiente angolare $m$:

$$m = \frac{T_2^2 - T_1^2}{L_2 - L_1}$$

Punto 1: $L_1 = \underline{\hspace{2cm}}$ m, $\ T_1^2 = \underline{\hspace{2cm}}$ s²

Punto 2: $L_2 = \underline{\hspace{2cm}}$ m, $\ T_2^2 = \underline{\hspace{2cm}}$ s²

$$m = \underline{\hspace{3cm}}\ \text{s}^2/\text{m} \qquad\Longrightarrow\qquad
g = \frac{4\pi^2}{m} = \underline{\hspace{3cm}}\ \text{m/s}^2$$

### Stima dell'incertezza (metodo grafico)

Tracciate la retta di pendenza **massima** e quella di pendenza **minima** che
passano ragionevolmente tra i punti sperimentali. Calcolatene i coefficienti
angolari $m_{\max}$ e $m_{\min}$ e ricavatene $g_{\min} = 4\pi^2/m_{\max}$
e $g_{\max} = 4\pi^2/m_{\min}$:

$$\Delta g_{\text{graf}} = \frac{g_{\max} - g_{\min}}{2} = \underline{\hspace{3cm}}\ \text{m/s}^2$$

$$g_{\text{graf}} = \underline{\hspace{3cm}} \ \pm\ \underline{\hspace{2cm}}\ \text{m/s}^2$$

### Confronto tra i due metodi

Confrontate $g$ ottenuto con il metodo diretto (sezione C) e con il metodo
grafico. Quale ha dato un errore percentuale minore? Perché?

\vspace{2cm}

\begin{center}\textit{Fine dell'esperienza}\end{center}
