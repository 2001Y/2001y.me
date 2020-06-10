---
title: JSでiOSのホーム画面追加を検知
date: 2020-06-10T01:00:22+09:00
img: js-check-addhome
categories: ["Web"]
tags: ["iOS","iPadOS","JS","JavaScript"]

---



PWAとは言えませんが、iOSのSafariにもホーム画面に追加することでSafariとは別アプリとして起動することができます。

そして、普通にブラウザからのアクセスされてるのか、アプリ状態からアクセスされているか知りたかったので、調べたところこれで検知できるようです。

```js
if(window.navigator.standalone){
 alert("ホーム画面からの起動です！")
}
```

おそらく、何度か試したところ`<meta name=apple-mobile-web-app-capable content=yes>` を指定していないと検知されない。

あと、`navigator.standalone`のMDNは404になってた。

![js-check-addhome-mozilla](../../../images/js-check-addhome-mozilla.jpg)