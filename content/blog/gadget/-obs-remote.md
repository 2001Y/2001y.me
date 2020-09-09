---
title: "[OBS]Web遠隔操作でスマホなどからシーン切り替え、OBS Remote Tablet"
date: 2020-09-09T00:00:22+09:00
img: obs-remote
categories: ["Gadget"]
tags: ["OBS","MacApp","Mac"]
---



{{<ad>}}

## OBS Remote Tablet

`OBS Remote Tablet`は同じWiFi環境下のOBSを遠隔操作することができるようになるWebサイトです。

### WebSocketプラグインをインストール

`OBS Remote Tablet`はWebSockets経由で操作するため、[Github](https://github.com/Palakis/obs-websocket/releases/)からOSにあった最新のものを`obs-websocket`をインストールする必要があります。

![](../../../images/obs-remote-websocket-download.jpg)

### OBS Remote Tabletから遠隔操作する

![メニューバー＞WebSockets Server Settings](../../../images/obs-websocket.jpg)

{{<blogcard url="http://t2t2.github.io/obs-tablet-remote/#!auto">}}

同じパソコンでは上記のサイトにアクセスするだけで、

#### スマホ・タブレットから遠隔する

![シンプルなUIで割と使いやすい](../../../images/obs-remote-ios.jpg)



#### httpsでは動作しないので注意

なんとなくhttpが気になってhttpsに書き換えたのですが、`obs-websocket`が対応してないらしくhttpでアクセスする必要がありそう。

![Warning: HTTPS Detected](../../../images/obs-remote-https.jpg)

***

