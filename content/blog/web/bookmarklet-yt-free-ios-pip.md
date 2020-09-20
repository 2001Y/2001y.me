---
title: "できなくなったYouTubePremiumなしでピクチャインピクチャを可能にするブックマークレットを作ってみた"
date: 2020-09-20T03:00:22+09:00
categories: ["Web"]
tags: ["Bookmarklet","WebTopic"]
---

iOS14でピクチャ・イン・ピクチャ（以下PIP）が追加され、公開直後はYouTubePremiumに入っていない無料会員でもSafariでPIPを使うことでバックグラウンド再生を行うことができました。

しかし、その後無料会員ではPIPが利用できなくなってしまいました。手元の環境だと[iPadとMacでは利用可能](https://twitter.com/Y20010920T/status/1307291157710266370)なのですが、iPhoneでは不可能でした。

{{<blogcard url="https://japanese.engadget.com/ios14-youtube-pip-103045237.html">}}

そこで、iPhoneでもYouTubePremiumなしでPIPさせることのできることができたのでメモしておきます。

しかし、現在でもYouTubePremiumに加入していればSafari経由でPIPを使うことができるため、この回避方法は利用規約違反や著作権違反などの違反行為になる可能性があります。自己責任で使ってください。

![](../../../images/youtube-premium-2001y.jpg)

## 好きなスピードで動画を再生するブックマークレット

<p class=noIndent>
  <a href="javascript:(function()%7Bwindow.location.href%20%3D%20document.querySelector('video').src%7D)()" class=download>YouTubePremiumなしでピクチャインピクチャさせるブックマークレット</a>
</p>

### 対応サイト

YouTube（iPhone表示のみ）

### 登録方法

下のボタンをブックマークバーにドラッグ&ドロップ。

{{<blogcard url="https://wayohoo.com/ios/tips/how-to-install-bookmarklet-in-safari-for-ios.html">}}

### 使い方

document.querySelector('.html5-video-container video').controlslist='download';

倍速などの文字は不要で数字だけ入力すればok。