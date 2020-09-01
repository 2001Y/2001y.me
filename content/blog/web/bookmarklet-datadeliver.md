---
title: "データ便を一括ダウンロードできるブックマークレットを作ってみた"
date: 2020-07-09T05:00:22+09:00
img: bookmarklet-datadeliver
categories: ["Web"]
tags: ["自作ツール","ブックマークレット","WebTopic"]
---

[データ便](https://www.datadeliver.net/)というサービスで少し多めのファイルを送られたらしく、「一つ一つリンクを開くのがめんどうだから、一括でダウンロードできないのか」と聞かれたので、リンクを一括で展開するブックマークレットをメモ。

と言っても、リンクを全部新規タブで開いてるだけです。。

{{<ad>}}

## データ便を一括ダウンロードできるブックマークレット

下のボタンをブックマークバーにドラッグ&ドロップ。スマホは、[こちら](https://wayohoo.com/ios/tips/how-to-install-bookmarklet-in-safari-for-ios.html)を参考に。

<a href="javascript:(function()%7Blet%20el%20%3D%20document.querySelectorAll(%22.tbl_wd_full%20td%3Afirst-of-type%20a%22)%3Bfor(let%20i%3D0%3B%20i%3Cel.length%3B%20i%2B%2B)%7Bwindow.open(el%5Bi%5D.href)%3B%7D%7D)()" class=download>データ便一括ダウンロード</a>

### 対応サイト

データ便：[https://www.datadeliver.net/](https://www.datadeliver.net/)

### 使い方

ダウンロード一覧ページで実行すれば全て新規タブで開いて一括でダウンロードできる。

![ポップアップブロックなどは許可する必要がある](../../../images/bookmarklet-datadeliver-1.jpg)

### 仕組み

本当にただ新規タブで開いてるだけ。

```js
let el = document.querySelectorAll(".tbl_wd_full td:first-of-type a");
for(let i=0; i<el.length; i++){
  window.open(el[i].href);
}
```