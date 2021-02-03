---
title: "[Mac]特定フォルダ下のファイルリストをコマンドで書き出す"
date: 2021-02-04T00:00:22+09:00
categories: ["Gadget"]
tags: ["MacCommand","Mac","ターミナル","シェルスクリプト"]
---

{{<ad>}}

## cd,lsコマンドでファイルリストを作成

**Launchpad**か**アプリケーションフォルダ内のユーティリティフォルダ**から、macOSに標準でインストールされている<b>ターミナル</b>というアプリを開きます。よくわからない場合は ⌘ + スペースキー を押してSpotlightで『ターミナル』と検索。

![](../../../images/launchpad-terminal.jpg)

### 1. リストを作りたいフォルダに移動

ターミナルを開いたら、`cd`の後に半角スペース。その後に指定したいリストを作りたいフォルダをドラッグ&ドロップします。

![](../../../images/mac-command-cdls-1.jpg)

ファイルのパスが入力されたことを確認したら、`Enter`を押して次のステップへ。

![](../../../images/mac-command-cdls-2.jpg)

### 2. リストを出力

```sh
ls > list.txt
```

上記のコマンドをコピー&ペーストして`Enter`。

![](../../../images/mac-command-cdls-3.jpg)

これで、フォルダの中にlist.txtというファイルリストが出来上がっています。

![](../../../images/mac-command-cdls-4.jpg)

