---
title: "[Mac]ターミナルでアプリを強制終了するコマンドkillall"
date: 2020-07-02T00:00:22+09:00
img: mac-killall
categories: ["Gadget"]
tags: ["MacCommand","Mac"]
---

AutomatorでAdobeCCを普通に終了しようとしたんですが、何もインストールしてなくても確認ウィンドウが出てしまって、終了できませんでした。そこで、アプリの強制終了コマンドをメモ。

![](../../../images/mac-killall-1.jpg)

## killall：アプリを強制終了するコマンド

使い方は簡単で`killall`の後にアプリ名を入力すればok。

```sh
killall "Creative Cloud"
```

### アプリ名の取得

アプリ名は`.app`の前の名前から確認する。Dock や アクティブモニタ などで確認してもいい。けど、エイリアスはダメ（当たり前

![アプリケーションフォルダのAdobeCCはエイリアス](../../../images/mac-killall-2.jpg)

***

毎朝のeGPUの取り出しを自動化したいんだけど、どうもスリープ状態からだと`SafeEjectGPU Eject`の処理が終わらない...。

[▶︎ killとkillallの違いはなに？](https://www.itmedia.co.jp/help/tips/linux/l0399.html)

