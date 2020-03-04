---
Title: Currency Pricing Model Overview
Slug: CCY-FV
Date: 2020-02-12 20:00
Category: stfv
Tags: pricing_model, factor_model
author: EugenePY
Summary: Currency Factor Model Estimation
Status: published

### Data Generating Proccess

一般來說投資人如何評估一個資產，會用下列的式子去表達。
$x_{t}$ 是我們覺得會影響 $y_{i, t}$的因素，像是全球經濟動能，或是整體風險指標。
然而在FX市場中$\beta_{i, t}$會根據 $i$ 的不同而改變。
$\beta_{i, t} = \beta_{i} + \beta_{t}$
$$
\begin{aligned}
y_{i, t} = x_{t}\beta_{i, t} + \epsilon_{t, i}
\end{aligned}
$$
上式變成

$$
\begin{aligned}
y_{i, t} = x_{t}\beta_{i} + x_{t}\beta_{t} + \epsilon_{t, i}
\end{aligned}
$$

$$
\begin{aligned}
y_{i, t} = x_{t}\beta_{i} + C_{i, t}\alpha_{i, t} + \epsilon_{t, i}
\end{aligned}
$$

# ranking trading

$$
y_{i, t}/\sigma_{i, t} = x_{t}\beta_{i}\sigma_{i, t} + C_{i, t}\alpha_{i, t}/\sigma_{i, t} + \epsilon
$$

# Neutral Portfolio

Pearson Neutral

$$
E_{t+1}(R_{p}) = E_{t+1}(W_{t} R_{t+1}) s.t. E_{t}(R_{p}X_{t+1}) = 0
$$

Monotonic Neutral


Non-Linear


---