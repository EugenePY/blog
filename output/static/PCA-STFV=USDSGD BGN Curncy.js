
<script type="text/javascript">
    (function() {
          var fn = function() {
            Bokeh.safely(function() {
              (function(root) {
                function embed_document(root) {
                  
                var docs_json = '{"8e123da3-a043-4c29-8bf0-76fa00c04d7b":{"roots":{"references":[{"attributes":{"below":[{"id":"102080","type":"LinearAxis"}],"center":[{"id":"102084","type":"Grid"},{"id":"102089","type":"Grid"}],"left":[{"id":"102085","type":"LinearAxis"}],"plot_height":450,"plot_width":900,"renderers":[{"id":"102106","type":"GlyphRenderer"},{"id":"102121","type":"GlyphRenderer"},{"id":"102126","type":"GlyphRenderer"},{"id":"102131","type":"GlyphRenderer"},{"id":"102137","type":"GlyphRenderer"},{"id":"102142","type":"GlyphRenderer"},{"id":"102147","type":"GlyphRenderer"}],"title":{"id":"102070","type":"Title"},"toolbar":{"id":"102096","type":"Toolbar"},"x_range":{"id":"102072","type":"DataRange1d"},"x_scale":{"id":"102076","type":"LinearScale"},"y_range":{"id":"102074","type":"DataRange1d"},"y_scale":{"id":"102078","type":"LinearScale"}},"id":"102069","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"102133","type":"ColumnDataSource"}},"id":"102148","type":"CDSView"},{"attributes":{"bottom":{"field":"PX_LAST"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"PX_OPEN"},"width":{"value":0.5},"x":{"field":"index"}},"id":"102130","type":"VBar"},{"attributes":{},"id":"103529","type":"Selection"},{"attributes":{"formatter":{"id":"103526","type":"BasicTickFormatter"},"ticker":{"id":"102086","type":"BasicTicker"}},"id":"102085","type":"LinearAxis"},{"attributes":{"data_source":{"id":"102109","type":"ColumnDataSource"},"glyph":{"id":"102129","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"spot_des","nonselection_glyph":{"id":"102130","type":"VBar"},"selection_glyph":null,"view":{"id":"102132","type":"CDSView"}},"id":"102131","type":"GlyphRenderer"},{"attributes":{},"id":"103533","type":"Selection"},{"attributes":{"source":{"id":"102103","type":"ColumnDataSource"}},"id":"102107","type":"CDSView"},{"attributes":{"callback":null,"formatters":{"PX_HIGH":"numeral","PX_LAST":"numeral","PX_LOW":"numeral","PX_OPEN":"numeral","date":"datetime","fair_value":"numeral"},"names":["spot_des"],"tooltips":[["date","@date{%F}"],["open","@PX_OPEN"],["high","@PX_HIGH"],["low","@PX_LOW"],["close","@PX_LAST"],["fair value","@fair_value"]]},"id":"102110","type":"HoverTool"},{"attributes":{"source":{"id":"102109","type":"ColumnDataSource"}},"id":"102132","type":"CDSView"},{"attributes":{},"id":"103534","type":"UnionRenderers"},{"attributes":{},"id":"103532","type":"UnionRenderers"},{"attributes":{},"id":"103535","type":"Selection"},{"attributes":{"callback":null,"formatters":{"date":"datetime","fair_value":"numeral"},"names":["fair_value"],"tooltips":[["date","@date{%F}"],["fair value","@fair_value"]]},"id":"102111","type":"HoverTool"},{"attributes":{"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"102119","type":"Segment"},{"attributes":{},"id":"103536","type":"UnionRenderers"},{"attributes":{},"id":"102091","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"PX_HIGH":{"__ndarray__":"TtGRXP5D9j+GONbFbTT2Pz0K16NwPfY/KjqSy39I9j9B8WPMXUv2P+ELk6mCUfY/Dk+vlGWI9j8FxY8xdy32P6HWNO84RfY/NBE2PL1S9j/zjlN0JJf2P3L5D+m3r/Y/+FPjpZvE9j/sUbgehev2P6H4MeauJfc/OwFNhA1P9z8dOGdEaW/3P/H0SlmGOPc/cayL22gA9z8bnl4pyxD3Px3J5T+k3/Y/","dtype":"float64","shape":[21]},"PX_LAST":{"__ndarray__":"CKwcWmQ79j/Jdr6fGi/2P5f/kH77OvY/ZohjXdxG9j+5jQbwFkj2P44G8BZIUPY/0SLb+X5q9j9lqmBUUif2P90kBoGVQ/Y/w2SqYFRS9j/pt68D54z2P6RwPQrXo/Y/si5uowG89j9ZF7fRAN72P+kmMQisHPc/LUMc6+I29z/GSzeJQWD3P7ivA+eMKPc/0ZFc/kP69j/zH9JvXwf3P1UwKqkT0PY/","dtype":"float64","shape":[21]},"PX_LOW":{"__ndarray__":"C7Wmeccp9j8pXI/C9Sj2P3ZxGw3gLfY/D5wzorQ39j+ASL99HTj2PwK8BRIUP/Y/BaOSOgFN9j9qvHSTGAT2P8WPMXctIfY/2T15WKg19j+U9gZfmEz2P8cpOpLLf/Y/zhlR2ht89j89m1Wfq632P96Th4Va0/Y/iGNd3EYD9z+rz9VW7C/3P+kmMQisHPc/I9v5fmq89j87cM6I0t72P/hT46WbxPY/","dtype":"float64","shape":[21]},"PX_MID":{"__ndarray__":"0NVW7C879j9XsmMjEC/2P18pyxDHOvY/9MMI4dFG9j8O2xZlNkj2P44G8BZIUPY/JnDrbp5q9j/z5QXYRyf2P8Gtu3mqQ/Y/w2SqYFRS9j8ijnVxG432P91e0hito/Y/QGoTJ/e79j/L2xFOC972P5XZIJOMHPc/2PULdsM29z8AOsyXF2D3Pyp0XmOXKPc/CmgibHj69j8Plxx3Sgf3P44G8BZI0PY/","dtype":"float64","shape":[21]},"PX_OPEN":{"__ndarray__":"QBNhw9Mr9j9YyjLEsS72P8l2vp8aL/Y/l/+Qfvs69j8mUwWjkjr2P7mNBvAWSPY/jgbwFkhQ9j/ImLuWkA/2P2WqYFRSJ/Y/3SQGgZVD9j/DZKpgVFL2P1pkO99PjfY/1edqK/aX9j+yLm6jAbz2P1kXt9EA3vY/6SYxCKwc9z8VjErqBDT3P9xGA3gLJPc/jZduEoPA9j8ukKD4Meb2P0tZhjjWxfY/","dtype":"float64","shape":[21]},"date":{"__ndarray__":"AABAI88Bd0IAAAAgawN3QgAAwIW9A3dCAACA6w8Ed0IAAICCWQV3QgAAQOirBXdCAAAATv4Fd0IAAIB1yQt3QgAAQNsbDHdCAAAAQW4Md0IAAMCmwAx3QgAAgAwTDXdCAADAPQoOd0IAAICjXA53QgAAQAmvDndCAAAAbwEPd0IAAAAGSxB3QgAAgNHvEHdCAADAmTATd0IAAEBl1RN3QgAAAGJxFXdC","dtype":"float64","shape":[21]},"index":[0,3,4,5,7,8,9,21,22,23,24,25,26,27,28,29,31,33,38,40,43]},"selected":{"id":"103533","type":"Selection"},"selection_policy":{"id":"103534","type":"UnionRenderers"}},"id":"102108","type":"ColumnDataSource"},{"attributes":{"callback":null,"data":{"date":{"__ndarray__":"AABAI88Bd0IAAIBUxgJ3QgAAQLoYA3dCAAAAIGsDd0IAAMCFvQN3QgAAgOsPBHdCAADAHAcFd0IAAICCWQV3QgAAQOirBXdCAAAATv4Fd0IAAMCzUAZ3QgAAAOVHB3dCAADASpoHd0IAAICw7Ad3QgAAQBY/CHdCAAAAfJEId0IAAECtiAl3QgAAABPbCXdCAADAeC0Kd0IAAIDefwp3QgAAQETSCndCAACAdckLd0IAAEDbGwx3QgAAAEFuDHdCAADApsAMd0IAAIAMEw13QgAAwD0KDndCAACAo1wOd0IAAEAJrw53QgAAAG8BD3dCAADA1FMPd0IAAAAGSxB3QgAAwGudEHdCAACA0e8Qd0IAAEA3QhF3QgAAAJ2UEXdCAABAzosSd0IAAAA03hJ3QgAAwJkwE3dCAACA/4ITd0IAAEBl1RN3QgAAgJbMFHdCAABA/B4Vd0IAAABicRV3QgAAwMfDFXdC","dtype":"float64","shape":[45]},"fair_value":{"__ndarray__":"UxLuKEgb9j/8v35PjRz2P0Hyo6MvE/Y/QfKjoy8T9j/xuy6elBP2P32gPk2QHvY/XGD/Sj8e9j9uht9I4hv2P1ilb9aGIPY/fLwgRHox9j83zSLWaBv2P2MM7EAODfY/VccpVs0H9j9WPqShxhL2PwD+O+vD8/U/AP4768Pz9T+hBSW2GsL1P7WYZbJ6tfU//KDJzc2v9T9okMIbYaP1P7xZKn5Dg/U/QeVGEtV49T9B5UYS1Xj1P0HlRhLVePU/5ohRQbDy9T+MbNjhZRH2P1n45yQRHPY/T35tGVRZ9j+iNUVEAcP2P52J8WoZ4/Y/xzDE4oXe9j8QE+C57cL2P0LGE5oLnPY/QsYTmguc9j9mCeFupVX2P/ateWbqN/Y/xL3lDm839j8/GnGLID72PxtYp5nEVPY/G1inmcRU9j8bWKeZxFT2P3tYxirQevY/UhwuNkxb9j9hNiLBy0r2P6jkySl8R/Y/","dtype":"float64","shape":[45]},"index":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"lower":{"__ndarray__":"ncEH0abd9T+hmreWyNj1PyD9cnIDy/U/IP1ycgPL9T8tYzh+k8f1P48XEmB4z/U/Bm7YsdnM9T/LzTxdPsn1P8FnT7+LzfU/5u2htrLc9T8NfSnF1cb1P/qVKdwguvU/htQyn7C29T+bjSLKJ8P1P0G1g48Hp/U/QbWDjwen9T+nzhff73j1P3wSBWvlbvU/iB71MHtr9T/6V9vi7mD1P7BaDROBQfU/5Ztkt4wx9T/lm2S3jDH1P+WbZLeMMfU/yK/yeiep9T93Cy5TPcf1P/EJU3/C0PU/nlWth9sM9j+M30yZV3X2P049wkJOjvY/r7uewa+K9j8Gx+L+Xmz2Pw+yEkL4SPY/D7ISQvhI9j+iqHBA4gb2PwSFBtpv6PU/NiPN7m/n9T/AP0qWsO71P3xPUaLNBPY/fE9Ros0E9j98T1GizQT2P+LbmXz5KPY/dYD+IcAK9j8//Uww7fn1P8TOp0+m9vU/","dtype":"float64","shape":[45]},"upper":{"__ndarray__":"CfxKNpdZ9j+gX7g/JGH2PxrRAtlKXPY/GtEC2Upc9j+wQs35nmD2P5mwmw3HbvY/zRTmztRw9j87K1yuv2/2P35Bub+9dPY/19xIloqH9j9BJapdRHH2P+0zgSk4YfY/y7aSDBla9j/YS5fGiGP2P6HLETqQQfY/ocsROpBB9j/KX6DePgz2P+aK+Gr4/PU/dAdGWPr09T/AdYLZoeb1P0F0CFrRxfU/W1XiLQ3B9T9bVeItDcH1P1tV4i0NwfU/hRFTqjI99j+8JeH1ilz2P/EGksBjaPY/cBlt39Wm9j+MDZR/txH3PxGgIFYjOfc/7l8X0ZMz9z+g5weVyhr3PxN60aNU8PY/E3rRo1Tw9j+Z4ps/gqX2PxnvFEmFiPY/1kCNV5KI9j8Jes43sI72P6N0oPjdpfY/o3Sg+N2l9j+jdKD43aX2P9nzOxXVzfY//RWAof6s9j99p03o05z2PyDqgIZ7mfY/","dtype":"float64","shape":[45]},"z_score":{"__ndarray__":"85g0b4nD9j91+wXh5Qf0P19ameLpsfA/X1qZ4umx8D87Yfjt/Z32P6OODUbLW/Y/GqHQv4mn7j9Ie+Ouhov3PwazvnTrR/k/miODQFWx/T9T1+36aRABQPL4u0u9XQdAf3g7CMUuCEB6ODIpH20EQEQBACDt7wpARAEAIO3vCkAOd+jQAn8SQO9Kqu7kshNAj04NuvnZEkDD2Rs4rVMUQA7dNowylBZAzJhyeG0aGkDMmHJ4bRoaQMyYcnhtGhpASSsK6c7kFkBVBOdDGJ8VQOao/1/lUBdAPY92jXBDE0AY8pv6lhEKQFK4XRghawZA8RdqrgKcB0BBnZtYn4IUQIF19/zuWRJAgXX3/O5ZEkDfX+l0iVQUQGwqJjE6rRVA+CXtsvt2FEBSx4gV/xsSQJW4V8Ka+RZAlbhXwpr5FkCVuFfCmvkWQOODNkODsQ5AvZBpF4tiDUCTKSEsdkQSQNh2C3PsrgtA","dtype":"float64","shape":[45]}},"selected":{"id":"103537","type":"Selection"},"selection_policy":{"id":"103538","type":"UnionRenderers"}},"id":"102133","type":"ColumnDataSource"},{"attributes":{},"id":"102078","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x0":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"x1":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"y0":{"__ndarray__":"TtGRXP5D9j9miGNd3Eb2P+oENBE2PPY/hjjWxW009j89CtejcD32Pyo6kst/SPY/v30dOGdE9j9B8WPMXUv2P+ELk6mCUfY/Dk+vlGWI9j/i6ZWyDHH2P2Rd3EYDePY/KxiV1Alo9j/vycNCrWn2PyBB8WPMXfY/bVZ9rrZi9j8mMQisHFr2Px1aZDvfT/Y/W7G/7J489j+GONbFbTT2P3ZxGw3gLfY/BcWPMXct9j+h1jTvOEX2PzQRNjy9UvY/845TdCSX9j9y+Q/pt6/2P/hT46WbxPY/7FG4HoXr9j+h+DHmriX3PzsBTYQNT/c/MCqpE9BE9z8dOGdEaW/3P/W52or9Zfc/8fRKWYY49z8PnDOitDf3PySX/5B++/Y/HcnlP6Tf9j+bVZ+rrdj2P3Gsi9toAPc/+Q/pt68D9z8bnl4pyxD3P4xK6gQ0Efc/zqrP1Vbs9j8dyeU/pN/2P4SezarP1fY/","dtype":"float64","shape":[45]},"y1":{"__ndarray__":"C7Wmeccp9j/35GGh1jT2P5MYBFYOLfY/KVyPwvUo9j92cRsN4C32Pw+cM6K0N/Y/S+oENBE29j+ASL99HTj2PwK8BRIUP/Y/BaOSOgFN9j/UK2UZ4lj2P1afq63YX/Y/aW/whclU9j/UK2UZ4lj2PwWjkjoBTfY/m+Ydp+hI9j9pke18PzX2P6H4MeauJfY/xY8xdy0h9j8fhetRuB72P0YldQKaCPY/arx0kxgE9j/FjzF3LSH2P9k9eVioNfY/lPYGX5hM9j/HKTqSy3/2P84ZUdobfPY/PZtVn6ut9j/ek4eFWtP2P4hjXdxGA/c/G55eKcsQ9z+rz9VW7C/3P8WPMXctIfc/6SYxCKwc9z8X2c73U+P2P1wgQfFjzPY/yeU/pN++9j9BguLHmLv2PyPb+X5qvPY/0LNZ9bna9j87cM6I0t72PxDpt68D5/Y//kP67evA9j/4U+Olm8T2P7snDwu1pvY/","dtype":"float64","shape":[45]}},"selected":{"id":"103531","type":"Selection"},"selection_policy":{"id":"103532","type":"UnionRenderers"}},"id":"102118","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"102103","type":"ColumnDataSource"},"glyph":{"id":"102104","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"spot_des","nonselection_glyph":{"id":"102105","type":"VBar"},"selection_glyph":null,"view":{"id":"102107","type":"CDSView"}},"id":"102106","type":"GlyphRenderer"},{"attributes":{"line_color":"#1f77b4","x":{"field":"index"},"y":{"field":"fair_value"}},"id":"102135","type":"Line"},{"attributes":{},"id":"103537","type":"Selection"},{"attributes":{},"id":"102086","type":"BasicTicker"},{"attributes":{},"id":"103538","type":"UnionRenderers"},{"attributes":{"bottom":{"field":"PX_LAST"},"fill_color":{"value":"#F2583E"},"top":{"field":"PX_OPEN"},"width":{"value":0.5},"x":{"field":"index"}},"id":"102129","type":"VBar"},{"attributes":{"text":"PCA-STFV=USDSGD BGN Curncy","text_font_size":{"value":"23pt"}},"id":"102070","type":"Title"},{"attributes":{"data_source":{"id":"102108","type":"ColumnDataSource"},"glyph":{"id":"102124","type":"VBar"},"hover_glyph":null,"muted_glyph":null,"name":"spot_des","nonselection_glyph":{"id":"102125","type":"VBar"},"selection_glyph":null,"view":{"id":"102127","type":"CDSView"}},"id":"102126","type":"GlyphRenderer"},{"attributes":{"callback":null,"range_padding":0.05},"id":"102072","type":"DataRange1d"},{"attributes":{"line_color":"red","x":{"field":"index"},"y":{"field":"upper"}},"id":"102140","type":"Line"},{"attributes":{"bottom":{"field":"PX_LAST"},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"field":"PX_OPEN"},"width":{"value":0.5},"x":{"field":"index"}},"id":"102125","type":"VBar"},{"attributes":{},"id":"103526","type":"BasicTickFormatter"},{"attributes":{},"id":"103531","type":"Selection"},{"attributes":{"source":{"id":"102133","type":"ColumnDataSource"}},"id":"102138","type":"CDSView"},{"attributes":{},"id":"102081","type":"BasicTicker"},{"attributes":{},"id":"102094","type":"SaveTool"},{"attributes":{"bounds":[0,44],"formatter":{"id":"103524","type":"BasicTickFormatter"},"major_label_overrides":{"0":"Feb 07","1":"Feb 10","10":"Feb 21","11":"Feb 24","12":"Feb 25","13":"Feb 26","14":"Feb 27","15":"Feb 28","16":"Mar 02","17":"Mar 03","18":"Mar 04","19":"Mar 05","2":"Feb 11","20":"Mar 06","21":"Mar 09","22":"Mar 10","23":"Mar 11","24":"Mar 12","25":"Mar 13","26":"Mar 16","27":"Mar 17","28":"Mar 18","29":"Mar 19","3":"Feb 12","30":"Mar 20","31":"Mar 23","32":"Mar 24","33":"Mar 25","34":"Mar 26","35":"Mar 27","36":"Mar 30","37":"Mar 31","38":"Apr 01","39":"Apr 02","4":"Feb 13","40":"Apr 03","41":"Apr 06","42":"Apr 07","43":"Apr 08","44":"Apr 09","5":"Feb 14","6":"Feb 17","7":"Feb 18","8":"Feb 19","9":"Feb 20"},"ticker":{"id":"102081","type":"BasicTicker"}},"id":"102080","type":"LinearAxis"},{"attributes":{"data_source":{"id":"102133","type":"ColumnDataSource"},"glyph":{"id":"102135","type":"Line"},"hover_glyph":null,"muted_glyph":null,"name":"fair_value","nonselection_glyph":{"id":"102136","type":"Line"},"selection_glyph":null,"view":{"id":"102138","type":"CDSView"}},"id":"102137","type":"GlyphRenderer"},{"attributes":{},"id":"102095","type":"CrosshairTool"},{"attributes":{"callback":null,"formatters":{"date":"datetime","lower":"numeral"},"names":["lower"],"tooltips":[["date","@date{%F}"],["value","@lower"]]},"id":"102113","type":"HoverTool"},{"attributes":{"source":{"id":"102118","type":"ColumnDataSource"}},"id":"102122","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x0":{"field":"x0"},"x1":{"field":"x1"},"y0":{"field":"y0"},"y1":{"field":"y1"}},"id":"102120","type":"Segment"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"index"},"y":{"field":"fair_value"}},"id":"102136","type":"Line"},{"attributes":{},"id":"102093","type":"ResetTool"},{"attributes":{"callback":null,"data":{"PX_HIGH":{"__ndarray__":"ZohjXdxG9j/qBDQRNjz2P799HThnRPY/4umVsgxx9j9kXdxGA3j2PysYldQJaPY/78nDQq1p9j8gQfFjzF32P21Wfa62YvY/JjEIrBxa9j8dWmQ730/2P1uxv+yePPY/hjjWxW009j92cRsN4C32PzAqqRPQRPc/9bnaiv1l9z8PnDOitDf3PySX/5B++/Y/HcnlP6Tf9j+bVZ+rrdj2P/kP6bevA/c/jErqBDQR9z/Oqs/VVuz2P4SezarP1fY/","dtype":"float64","shape":[24]},"PX_LAST":{"__ndarray__":"CKwcWmQ79j9YyjLEsS72PyZTBaOSOvY/r5RliGNd9j+EDU+vlGX2PxpR2ht8YfY/PujZrPpc9j80ETY8vVL2P1+YTBWMSvY/c2iR7Xw/9j+8lpAPejb2P2WqYFRSJ/Y/VOOlm8Qg9j91kxgEVg72P9k9eVioNfc/3EYDeAsk9z8ukKD4Meb2P8Dsnjws1PY/63O1FfvL9j+Nl24Sg8D2Py6QoPgx5vY/7FG4HoXr9j9LWYY41sX2P+qVsgxxrPY/","dtype":"float64","shape":[24]},"PX_LOW":{"__ndarray__":"9+RhodY09j+TGARWDi32P0vqBDQRNvY/1CtlGeJY9j9Wn6ut2F/2P2lv8IXJVPY/1CtlGeJY9j8Fo5I6AU32P5vmHafoSPY/aZHtfD819j+h+DHmriX2P8WPMXctIfY/H4XrUbge9j9GJXUCmgj2PxueXinLEPc/xY8xdy0h9z8X2c73U+P2P1wgQfFjzPY/yeU/pN++9j9BguLHmLv2P9CzWfW52vY/EOm3rwPn9j/+Q/rt68D2P7snDwu1pvY/","dtype":"float64","shape":[24]},"PX_MID":{"__ndarray__":"enB31m479j/mBdhHpy72PwrcupunOvY/d76fGi9d9j+EDU+vlGX2PxpR2ht8YfY/PujZrPpc9j9t/8pKk1L2P0MhAg6hSvY/rFYm/FI/9j/YDdsWZTb2P2WqYFRSJ/Y/jLlrCfkg9j88vVKWIQ72P0sC1NSyNfc/FjWYhuEj9z9nfjUHCOb2P9xj6UMX1PY/lialoNvL9j85Sl6dY8D2P6BU+3Q85vY/JUBNLVvr9j8v4jsx68X2PyJseHqlrPY/","dtype":"float64","shape":[24]},"PX_OPEN":{"__ndarray__":"5BQdyeU/9j8IrBxaZDv2P799HThnRPY/0SLb+X5q9j/RItv5fmr2P4QNT6+UZfY/GlHaG3xh9j8+6Nms+lz2PzQRNjy9UvY/w2SqYFRS9j9zaJHtfD/2P7yWkA96NvY/ZapgVFIn9j9U46WbxCD2Py1DHOviNvc/xks3iUFg9z+4rwPnjCj3Py6QoPgx5vY/E/JBz2bV9j/rc7UV+8v2P9GRXP5D+vY/ZMxdS8gH9z/sUbgehev2P8bctYR80PY/","dtype":"float64","shape":[24]},"date":{"__ndarray__":"AACAVMYCd0IAAEC6GAN3QgAAwBwHBXdCAADAs1AGd0IAAADlRwd3QgAAwEqaB3dCAACAsOwHd0IAAEAWPwh3QgAAAHyRCHdCAABArYgJd0IAAAAT2wl3QgAAwHgtCndCAACA3n8Kd0IAAEBE0gp3QgAAwNRTD3dCAADAa50Qd0IAAEA3QhF3QgAAAJ2UEXdCAABAzosSd0IAAAA03hJ3QgAAgP+CE3dCAACAlswUd0IAAED8HhV3QgAAwMfDFXdC","dtype":"float64","shape":[24]},"index":[1,2,6,10,11,12,13,14,15,16,17,18,19,20,30,32,34,35,36,37,39,41,42,44]},"selected":{"id":"103535","type":"Selection"},"selection_policy":{"id":"103536","type":"UnionRenderers"}},"id":"102109","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"102086","type":"BasicTicker"}},"id":"102089","type":"Grid"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"index"},"y":{"field":"upper"}},"id":"102141","type":"Line"},{"attributes":{"overlay":{"id":"103528","type":"BoxAnnotation"}},"id":"102092","type":"BoxZoomTool"},{"attributes":{"bottom":{"value":1.4171},"fill_color":{"value":"#F2583E"},"top":{"value":1.4259},"width":{"value":0.5},"x":{"value":44}},"id":"102104","type":"VBar"},{"attributes":{"data_source":{"id":"102118","type":"ColumnDataSource"},"glyph":{"id":"102119","type":"Segment"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"102120","type":"Segment"},"selection_glyph":null,"view":{"id":"102122","type":"CDSView"}},"id":"102121","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"102133","type":"ColumnDataSource"},"glyph":{"id":"102140","type":"Line"},"hover_glyph":null,"muted_glyph":null,"name":"upper","nonselection_glyph":{"id":"102141","type":"Line"},"selection_glyph":null,"view":{"id":"102143","type":"CDSView"}},"id":"102142","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"102081","type":"BasicTicker"}},"id":"102084","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"102090","type":"PanTool"},{"id":"102091","type":"WheelZoomTool"},{"id":"102092","type":"BoxZoomTool"},{"id":"102093","type":"ResetTool"},{"id":"102094","type":"SaveTool"},{"id":"102095","type":"CrosshairTool"},{"id":"102110","type":"HoverTool"},{"id":"102111","type":"HoverTool"},{"id":"102112","type":"HoverTool"},{"id":"102113","type":"HoverTool"}]},"id":"102096","type":"Toolbar"},{"attributes":{},"id":"102076","type":"LinearScale"},{"attributes":{"bottom":{"field":"PX_LAST"},"fill_color":{"value":"#D5E1DD"},"top":{"field":"PX_OPEN"},"width":{"value":0.5},"x":{"field":"index"}},"id":"102124","type":"VBar"},{"attributes":{"callback":null},"id":"102074","type":"DataRange1d"},{"attributes":{"source":{"id":"102133","type":"ColumnDataSource"}},"id":"102143","type":"CDSView"},{"attributes":{"bottom":{"value":1.4171},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"top":{"value":1.4259},"width":{"value":0.5},"x":{"value":44}},"id":"102105","type":"VBar"},{"attributes":{"callback":null,"formatters":{"date":"datetime","upper":"numeral"},"names":["upper"],"tooltips":[["date","@date{%F}"],["value","@upper"]]},"id":"102112","type":"HoverTool"},{"attributes":{},"id":"103530","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"103528","type":"BoxAnnotation"},{"attributes":{},"id":"103524","type":"BasicTickFormatter"},{"attributes":{"line_color":"red","x":{"field":"index"},"y":{"field":"lower"}},"id":"102145","type":"Line"},{"attributes":{},"id":"102090","type":"PanTool"},{"attributes":{"source":{"id":"102108","type":"ColumnDataSource"}},"id":"102127","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"index"},"y":{"field":"lower"}},"id":"102146","type":"Line"},{"attributes":{"callback":null,"data":{},"selected":{"id":"103529","type":"Selection"},"selection_policy":{"id":"103530","type":"UnionRenderers"}},"id":"102103","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"102133","type":"ColumnDataSource"},"glyph":{"id":"102145","type":"Line"},"hover_glyph":null,"muted_glyph":null,"name":"lower","nonselection_glyph":{"id":"102146","type":"Line"},"selection_glyph":null,"view":{"id":"102148","type":"CDSView"}},"id":"102147","type":"GlyphRenderer"}],"root_ids":["102069"]},"title":"Bokeh Application","version":"1.4.0"}}';
                var render_items = [{"docid":"8e123da3-a043-4c29-8bf0-76fa00c04d7b","roots":{"102069":"afe00a13-6346-4e1c-8e0e-2b5f49b49649"}}];
                root.Bokeh.embed.embed_items(docs_json, render_items);
              
                }
                if (root.Bokeh !== undefined) {
                  embed_document(root);
                } else {
                  var attempts = 0;
                  var timer = setInterval(function(root) {
                    if (root.Bokeh !== undefined) {
                      clearInterval(timer);
                      embed_document(root);
                    } else {
                      attempts++;
                      if (attempts > 100) {
                        clearInterval(timer);
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                      }
                    }
                  }, 10, root)
                }
              })(window);
            });
          };
          if (document.readyState != "loading") fn();
          else document.addEventListener("DOMContentLoaded", fn);
        })();
</script>