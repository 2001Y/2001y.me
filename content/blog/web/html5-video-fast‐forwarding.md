---
title: "[YouTube/Temas等]ブラウザのみで2倍速以上の好きに倍速するブックマークレット"
date: 2020-06-25T01:00:22+09:00
img: html5-video-fast‐forwarding
categories: ["Web"]
tags: ["ブックマークレット","WebTopic"]

---

Chromeには再生スピードを変える拡張機能がありますが、そんなに使う回数も多くないし、手軽にブックマークレットで済ませたかったので作ってメモ。

## 好きなスピードで動画を再生するブックマークレット

<a href="javascript:document.querySelector(%22video%22).playbackRate=window.prompt(%22倍速%22,%22 %22);" class=download>動画倍速ブックマークレット</a>

### 対応サイト

HTML5 Videoを使ってるサイト（YouTube,Teamsは確認済）

### 使い方

![html5-video-fast‐forwarding-1](../../../images/html5-video-fast‐forwarding-1.jpg)

