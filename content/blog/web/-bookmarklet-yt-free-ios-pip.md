---
title: "YouTubePremiumなしでピクチャインピクチャ（バックグラウンド再生）させるブックマークレットを作ってみた"
date: 2020-09-24T00:00:22+09:00
categories: ["Web"]
tags: ["Bookmarklet","WebTopic"]
js: "bookmark"
draft: true
---

iOS14では、バックグラウンド再生と呼ばれることも多い<b>ピクチャ・イン・ピクチャ</b>（以下PIP）が追加され、公開直後はYouTubePremiumに入っていない無料会員でもSafariでPIPを使うことでバックグラウンド再生を行うことができました。

しかし、その後無料会員ではPIPが利用できなくなってしまいました。手元の環境だと[iPadとMacでは利用可能](https://twitter.com/Y20010920T/status/1307291157710266370)なのですが、iPhoneでは不可能でした。

{{<blogcard url="https://japanese.engadget.com/ios14-youtube-pip-103045237.html">}}

現在は、PC表示にすることでPIPを可能にする方法がありますが、もう一つYouTubePremiumなしでPIPさせる方法を見つけたのでブックマークレットにしてメモしておきます。

しかし、現在でもYouTubePremiumに加入していればSafari経由でPIPを使うことができるため、この回避方法は利用規約違反や著作権違反などの違反行為になる可能性があります。自己責任で使ってください。

![](../../../images/youtube-premium-2001y.jpg)

## YouTubePremiumなしでピクチャインピクチャさせるブックマークレット

### ブックマークレットコード

以下のコードをコピーして、<b>登録方法</b>の手順に沿って登録してください。

```js
javascript:(function()%7Bwindow.location.href%20%3D%20document.querySelector('video').src%7D)()
```

### 登録方法

{{<blogcard url="https://2001y.me">}}

### 対応サイト

YouTube（iPhone表示のみ）

### 使い方

