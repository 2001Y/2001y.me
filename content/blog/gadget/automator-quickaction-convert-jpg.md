---
title: "【ダウンロードするだけ超簡単】HEIFやPNGなどを右クリックでJPEGに変換"
date: 2021-01-19T00:00:22+09:00
categories: ["Gadget"]
tags: ["Automator","Mac"]
---

iOS11からiPhoneがHEIFに対応しました。ストレージ節約につながって非常に便利ですが、やはり一般的なのはJPEGやPNG。

LINEなどの別サービスへ転送する際にiOSが自動的にJPEGに変換してくれますが、MacにAirDropなどでシェアするとHEIFのまま共有されます。

[アプリを使えば](https://apps.apple.com/jp/app/imazing-heic-converter/id1292198261?mt=12)簡単にHEIFからJPEGに変換することはできますが、今回は<b>Finder上で右クリックからJPEGに変換するクイックアクション</b>を作りたいと思います。

{{<ad>}}

## すでに完成したクイックアクションをダウンロード



{{<bg>}}

### クイックアクション：JPEGに変換

<p class=noIndent>
  <a href="/download/JPEGに変換.zip" class=download download>ダウンロード</a>
</p>

{{<bg-end>}}

zipをダブルクリックして展開、`JPEGに変換.workflow`をダブルクリックして<b>"`JPEGに変換"クイックアクションをインストール</b>します。

![](../../../images/Capture1.jpg)

### あとは使うだけ

インストールが完了すると**システム環境設定の機能拡張**ウィンドウが開くので<b>JPEGに変換</b>が追加されていることを確認したら、Finderで画像ファイルを右クリック、クイックアクションから『JPEGに変換』をクリックするだけ。

![](../../../images/Capture3.jpg)

***

## 自分で作る場合

## Automatorでクイックアクションを作成

**Launchpad**か**アプリケーションフォルダ**から、macOSに標準でインストールされている<b>Automator</b>というアプリを開きます。よくわからない場合は ⌘ + スペースキー を押してSpotlightで『Automator』と検索。

![](../../../images/launchpad-automator.jpg)

Automatorで<b>クイックアクションを新規作成</b>します。

![](../../../images/Capture.jpg)

## クイックアクションの詳細を設定

ウィンドウ右上から任意の設定に変更します。

今回の受け取る項目を<b>イメージファイル</b>。検索対象を<b>Finder.app</b>にします。イメージは右クリックした時に出したい好きなアイコンを選択。

![](../../../images/Capture2.jpg)

## あとは普通にワークフローを作成する

画像はMacにドライブを接続した際に通知するワークフローです。

