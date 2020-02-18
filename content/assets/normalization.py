# %%
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from scipy.stats import percentileofscore
import numpy as np
from statsmodels.tsa.arima_model import ARMA
from arctic import Arctic
store = Arctic("localhost")
lib = store["investingdotcom"]

# %%
lib.read("USDKRW").data.drop(["vo", "v"], axis=1).plot(
    grid=True, figsize=(10, 5))

# %%
mid = np.log(lib.read("USDKRW").data.drop(["vo", "v"], axis=1).mean(1))
model = ARIMA(endog=mid, order=(1, 1, 1))
res = model.fit()
res.summary()
res.resid.cumsum().plot()
# %%


# %%
mid = np.log(lib.read("EURUSD").data.drop(["vo", "v"], axis=1).mean(1))
model = ARIMA(endog=mid, order=(1, 1, 1))
res = model.fit()
res.summary()

# %%
# the reasone using time series percentile is that in portfolio
# construction we also using ranking as estimator


def binarize_timeseries_mean_model(series, k, window_size):
    dff = 1./(k-1)
    group = [dff*i for i in range(k)]
    groups = []
    directs = []
    breaks_ = []
    for t in range(len(series)-window_size):
        pool = abs(series.iloc[t:t+window_size])
        x = series.iloc[t+window_size]
        score = percentileofscore(pool.values, abs(x), kind="rank")/100.
        # which group
        n = 0
        for threshold in group:
            if score <= threshold:
                break
            elif score > threshold:
                n += 1
        groups.append(n)
        direct = 1*(x > 0) - 1 * (x < 0)
        # anomalies
        band = series.std()
        break_ = (abs(x) > 3 * band)*1
        breaks_.append(break_)
        directs.append(direct)

    group_name = pd.DataFrame({"breaks": breaks_,
                               "percentile": groups,
                               "direct": directs},
                              index=series.index[window_size:])
    preproccess = OneHotEncoder()
    m = preproccess.fit_transform(group_name)
    return m, group_name

# %%


# %% 
symbols = ['AUDUSD',
 'EURUSD',
 'GBPUSD',
 'NZDUSD',
 'USDCAD',
 'USDCHF',
 'USDIDR',
 'USDINR',
 'USDJPY',
 'USDKRW',
 'USDSGD',
 'USDTWD',
 'USDZAR']
m = {}
for s in symbols:
   d = lib.read(s).data.drop(["vo", "v"], axis=1).mean(1)
   m[s] = d.loc[~d.index.duplicated()]
data = pd.concat(m, axis=1)

# %%
with open("./log_px_mean.csv", "w") as f:
    content = data.to_csv()
    f.writelines(content)


# %%
series = np.log(lib.read("EURUSD").data.drop(["vo", "v"], axis=1).mean(1)
                ).diff(1).fillna(0)
out, pd_out = binarize_timeseries_mean_model(series, 5, window_size=30)

# %%


# %%
series = np.log(lib.read("EURUSD").data.drop(["vo", "v"], axis=1).mean(1)
                ).diff(1).fillna(0)
out, pd_out = binarize_timeseries_mean_model(series, 5, window_size=30)

binary_series = (series > 0)*1 - (series < 0)*1
a = binary_series.cumsum()
b = series.cumsum()
event = pd_out.index[(pd_out["breaks"] == 1)]

((b-b.mean())/b.std()).plot(label="origin")
((a-a.mean())/a.std()).plot(label="binarized")
for i in event:
    plt.axvline(x=i)
plt.legend()

# %%
series = np.log(lib.read("GBPUSD").data.drop(["vo", "v"], axis=1).mean(1)
                ).diff(1).fillna(0)
out, pd_out = binarize_timeseries_mean_model(series, 5, window_size=30)

binary_series = (series > 0)*1 - (series < 0)*1
a = binary_series.cumsum()
b = series.cumsum()
event = pd_out.index[(pd_out["breaks"] == 1)]

((b-b.mean())/b.std()).plot(label="origin")
((a-a.mean())/a.std()).plot(label="binarized")
for i in event:
    plt.axvline(x=i)
plt.legend()

# %%
# an