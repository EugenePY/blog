---
Title: Currency Pricing Model Overview
Slug: STFV-OV
Date: 2020-02-12 20:00
Category: stfv
Tags: pricing_model, factor_model
author: EugenePY
Summary: The general idea and movtivation
Status: draft

**Asset Pricing Model** 主要的研究是來自於CAMP的發展, 由Jack Treynor、William Sharpe、John Lintner、Jan Mossin
主要研究者提出，主要敘述資產報酬與風險的關係。其中以Sharpe引用Markowitz的portfolio理論，在可規避的風險，且投資人只考慮mean-variance的架構下
可分散的將是不理性，簡單來說雞蛋放在同個籃子裡的投資組合，蒙受損失的有很大部分是來自沒有效率的配置，而相反的做好投資組合配置將能將效率極大化
，每一分錢都花在刀口上，縱使虧損也代表已經做到有效率的配置，這種虧損已經降到最低。在現代投資組合的利基上，我們可以知道能透過分散投資組合達到規避
的風險是沒有效率的。
$$
\begin{aligned}
& max_{w_{t}} \quad log(R_{p}(w_{t}, R_{t+1}, W_{t})) \\
\simeq\; & min_{w_{t}} \quad  E(R_{p}(w_{t}, R_{t+1})) - \frac{1}{2} \sigma(R_{t}) \\
\end{aligned}
$$

而Sharpe改進Markowitz的想法，進而使用與市場投資組合相關性係數$\beta$作為風險指標。其中以對應Markowitz
的理論中的$\sigma(R_{t})$ 可以拆解成 $\sigma(N) = \sum_{i}\beta_{i}sigma_{market} + \frac{1}{N}\sigma_{iso}$
所以大多的Factor Model中心思想為，**什麼因子可以解釋跨股票間的相關性變異**，以在FX(Foreign Exchange)，要以Factor Model作為
Benchmark Model，最直接的Factor即是DXY Index，不管是各大央行或是貨幣的主要報價，皆以美元為主。相較於Equity, FX的Factor model
更為困難的點為，各貨幣異質性過高，在股票中異值性可以利用大量的asset pool去抵銷，但在asset pool相對較小下，FX需要normalize的處理要
求更為精細。

$$
\begin{aligned}
max_{\pi} \; E_{\pi}(\sum_{t} U(y_{t})) \\
y_{i, t} = \beta_{i, t}X_{t} + \alpha_{i, t}C_{i} + \epsilon_{i, t}, \forall \text{i},\; \text{t}
\end{aligned}
$$

如假設各貨幣的$\mathbf{Data\;generating\;proccess}$為以上的模型，在asset pool有限下很難達到估計。所以需要更robust的估計來達到Factor model的效果。

**Currency Factors**
目前主流的因子主要有

- DXY Factor
- Carry Factor
- Momentum Factor
- Taylor Rule Fundamental Factor 
- Valuation Factor

然而在稍早上述的架構下我們要怎麼樣去說明或是去評估某一個因子是否有效？
同樣在假設Fx Data generating proccess 如下。

$$
y_{i, t} = \alpha^{const}_{i, t} + \beta_{i, t}X_{t} + \alpha_{i, t}C_{i} + \epsilon_{i, t}
$$

估計策略：

Data Preprocessing

    Decompose Time Series
      1. Binarize Time Series Proccess.
      2. Volatility.
      3. Jump.

$$
y_{i, t} = \sum_{i} I(R_{t}\in B_{i})\theta_{i} + \sigma_{i, t} + \mathbf{J}_{i}I(X\in J)
$$

USD/KRW, USD/IDR, USD/MXR

USD/TWD, EUR/USD, GBP/USD

**DXY Index**

**Carry Factor**

**Momentumn**
when does *momentumn* failed ?
Central bank's action
Bussness Cycle.

**Taylor Rule fundamental**
Taylor Rule Pricing

**Valuation Factor**
Cointegration
REER
---