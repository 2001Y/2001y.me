---
title: JSでホーム画面からの起動を検知
date: 2020-06-10T01:00:22+09:00
img: js-check-addhome
categories: ["Web"]
tags: ["iOS","iPadOS","JS","JavaScript"]

---



PWAとは言えないが、iOSのSafariにもホーム画面に追加することで別アプリとして起動することができる。

今回、普通にブラウザからのアクセスされてるのか、アプリモードからアクセスされているか知りたかったので、調べたところこれで検知できるみたい。

```js
if(window.navigator.standalone){
 alert("ホーム画面からの起動です！")
}
```

おそらく、何度か試したところ `<meta name=apple-mobile-web-app-capable content=yes>` を指定していないと検知されない。

![あとMDNの個別ページは404になっていた](../../../images/js-check-addhome-mozilla.jpg)