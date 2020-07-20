---
title: "[Mac]複数ファイル一括検索&置換をTextWranglerの代わりにBBEditで"
date: 2020-07-20T03:00:22+09:00
img: bbeditor-multifile
categories: ["Gadget"]
tags: ["BBEdit","MacApp","Mac"]
---

複数ファイルの一括置き換えについて調べるとTextWranglerが出てきましたが、現在TextWranglerは非公開中。代替案としてBBEditを推奨しています。そこで、BBEditを使って複数ファイルの一括置き換えをしてみました。

## BBEditで複数ファイル一括検索&置換

BBEditは1992年からあったそうで、2019年からAppStoreでの配布が[再開されたらしい](https://twitter.com/pschiller/status/1113838263842693120?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1113838715133149186%7Ctwgr%5E&ref_url=https%3A%2F%2Fapplech2.com%2Farchives%2F20190405-bbedit-return-to-mac-app-store-since-2014.html)。料金設定は記事最後に少し。

{{<blogcard url="https://apps.apple.com/jp/app/bbedit/id404009241">}}

### 複数ファイルから検索

メニューバーから`Search`＞`Multi-File Search`。ショートカット は`⌘`+`Shift`+`F`。

![BBEditメニューバー：Search＞Multi-File Search...](../../../images/mac-bbeditor-multifile-1.jpg)

### 一括ワードを置き換え

`Find`に検索ワードを入れて、`Replace`に置き換えたいワードを入力。忘れずに`Projects`にチェックを入れて、`ReplaceAll`。

![](../../../images/mac-bbeditor-multifile-2.jpg)

### 確認アラートをオフにして実行

このままではファイル毎に確認アラートが出るので、`Confirm before saving`をOFFにして`Proceed`。

![](../../../images/mac-bbeditor-multifile-3.jpg)

***

無料だとトライアル期間のような表記になりますが、期間が終了後はFreeモードとして動作するそうです。FreeモードではTextWranglerの機能は[基本的には全て使えるらしい](https://www.barebones.com/products/textwrangler/)。

[▶︎ Macでマルチファイル検索&置換はTextWranglerがすごい](https://camcam.info/tips/4054)