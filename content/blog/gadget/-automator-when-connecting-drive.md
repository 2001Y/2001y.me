---
title: "[Mac/Automator]USBメモリなどの外部ドライブを接続した時に発火させる"
date: 2021-01-14T00:00:22+09:00
categories: ["Gadget"]
tags: ["Automator","Mac"]
---



{{<ad>}}

## 　　　　　　　Automatorでフォルダアクションを作成

![](../../../images/automator-when-connecting-drive-1.jpg)

## フォルダの検出を /Volumes に指定

右上から監視するフォルダを指定します。

![](../../../images/automator-when-connecting-drive-2.jpg)

フォルダ選択ウィンドウが表示されたら、

![](../../../images/automator-when-connecting-drive-3.jpg)

`/（スラッシュ）`キーを押すことでパスからフォルダを指定することができるので、以下の`Volumesフォルダ`のパスを入力します。

```sh
/Volumes
```

![](../../../images/automator-when-connecting-drive-4.jpg)

移動を確認したら確定。

![](../../../images/automator-when-connecting-drive-5.jpg)

`Volumesフォルダ`が監視対象になっていることを確認したら準備完了。

![](../../../images/automator-when-connecting-drive-6.jpg)

## あとは普通にワークフローを作成する

![](../../../images/automator-when-connecting-drive-7.jpg)

## さごに