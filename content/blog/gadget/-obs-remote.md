---
title: "[OBS]スマホやタブレットからWebサイト上で遠隔操作、OBS Remote Tablet"
date: 2020-09-10T00:00:22+09:00
img: obs-remote
categories: ["Gadget"]
tags: ["OBS","MacApp","Mac"]
---

`OBS Remote Tablet`は同じWiFi環境下のOBSを遠隔操作することができるようになるWebサイトです。

![obs-remote-tablet-web](../../../images/obs-remote-tablet-web.jpg)

{{<ad>}}

## 事前準備：WebSocketプラグインを導入

`OBS Remote Tablet`はWebSockets経由で操作するため、`obs-websocket`をインストールする必要があります。

### ダウンロード

[Githubから](https://github.com/Palakis/obs-websocket/releases/)自分のOSにあったものをダウンロードします。

![](../../../images/obs-websocket-download.jpg)

### インストール

ダウンロードフォルダから、`obs-websocket`をインストールします。

![](../../../images/obs-websocket-install.jpg)

### 確認

OBSを起動し、`obs-websocket`がインストールできてることを確認します。

![メニューバー＞WebSockets Server Settings](../../../images/obs-websocket.jpg)

## スマホ・タブレットから遠隔する

### そのパソコンのIPを取得する

OBSを起動しているパソコンのプライベートIPを取得します。Macの場合は、システム環境設定のネットワーク項目から確認することができます。

![システム環境設定＞ネットワーク](../../../images/mac-check-privateip.jpg)

### スマホやタブレットからIPを指定して遠隔する

スマホやタブレットから[OBS Remote Tablet](http://t2t2.github.io/obs-tablet-remote/#!auto)にアクセスし、`HOSTの欄`に先ほどのOBSを起動しているパソコンのIPを入力し、接続します。

![](../../../images/obs-remote-tablet-ipad.jpg)

***

### シーン切り替え以外にも音量の調整など様々な遠隔操作が可能

右上のペンマークから、シーン切り替え以外のボリュームの調整などの操作ができます。

![](../../../images/obs-remote-panellist.jpg)

#### httpsでは動作しないので注意

なんとなくhttpが気になってhttpsに書き換えたのですが、`obs-websocket`が対応してないらしくhttpでアクセスする必要がありそう。

![Warning: HTTPS Detected](../../../images/obs-remote-https.jpg)

***

