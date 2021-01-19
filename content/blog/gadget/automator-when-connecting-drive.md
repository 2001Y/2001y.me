---
title: "[Mac/Automator]USBメモリなどの外部ドライブを接続した時に発火させる"
date: 2021-01-14T00:00:22+09:00
categories: ["Gadget"]
tags: ["Automator","Mac"]
---

MacでUSBメモリやSDカード、HDDなどの外部ドライブを接続した際に特定のAutomatorワークフローを実行させたい時の手順です。

{{<bg>}}

## Q&A

AutomatorでUSBメモリなどの外部ドライブを接続した時にワークフローを実行するためにはどうすればいいですか？

<b>Automatorのフォルダアクションで`/Volumes`を監視対象にすれば外部ドライブの接続を検知できます。</b>

{{<bg-end>}}

{{<ad>}}

## Automatorでフォルダアクションを作成

**Launchpad**か**アプリケーションフォルダ**から、macOSに標準でインストールされている<b>Automator</b>というアプリを開きます。

![](../../../images/launchpad-automator.jpg)

Automatorでフォルダアクションを新規作成します。

![](../../../images/automator-when-connecting-drive-1.jpg)

## フォルダの検出を /Volumes に指定

右上から監視するフォルダを指定します。

![](../../../images/automator-when-connecting-drive-2.jpg)

フォルダ選択ウィンドウが表示されたら、

![](../../../images/automator-when-connecting-drive-3.jpg)

<b>/ (スラッシュ)キーを押すことでパスからフォルダを指定することができる</b>ので、`/Volumes`を入力します。

![](../../../images/automator-when-connecting-drive-4.jpg)

移動を確認したら確定。

![](../../../images/automator-when-connecting-drive-5.jpg)

`Volumesフォルダ`が監視対象になっていることを確認したら準備完了。

![](../../../images/automator-when-connecting-drive-6.jpg)

## あとは普通にワークフローを作成する

画像はMacにドライブを接続した際に通知するワークフローです。

![](../../../images/automator-when-connecting-drive-7.jpg)