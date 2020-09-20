---
title: "YouTubePremiumなしでピクチャインピクチャさせるブックマークレットを作ってみた"
date: 2020-09-19T03:00:22+09:00
img: tool-morsecode
categories: ["Web"]
tags: ["Bookmarklet","WebTopic"]
draft: true
---



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