---
title: "firestorageを一括ダウンロードできるブックマークレットを作ってみた"
date: 2021-02-26T00:00:22+09:00
categories: ["Web"]
tags: ["ブックマーク","WebTopic"]
---

少し前に[データ便を一括ダウンロードするブックマークレット](https://2001y.me/blog/web/bookmarklet-datadeliver/)を作ったのですが、利用サービスがfirestorageに変更されたということで、<b>firestorageを一括ダウンロードするブックマークレット</b>を作ってみました。

{{<ad>}}

## firestorageを一括ダウンロードできるBookmarklet

<p class=noIndent>
  <a href="javascript:(function()%7Blet%20el%20%3D%20document.querySelectorAll(%22.spiffydownfg%3Afirst-of-type%20td%20div%20a%22)%3Bfor(let%20i%3D0%3B%20i%3Cel.length%3B%20i%2B%2B)%7Bwindow.open(el%5Bi%5D.href)%3B%7D%7D)()" class=download>firestorage一括ダウンロード</a>
</p>

{{<bg>}}

### 対応サイト

firestorage：[https://firestorage.jp](https://firestorage.jp)

### ブックマークレットの登録方法

ブックマークバーに上のボタンを**ドラッグ&ドロップ**、詳しくは以下を参考に。

<p class="noIndent"><a href="https://2001y.me/blog/web/bookmarklet-chrome" target="_blank" rel="noopener noreferrer">Chromeをお使いの方</a>・<a href="https://2001y.me/blog/web/bookmarklet-mac-safari" target="_blank" rel="noopener noreferrer">Safari(Mac)をお使いの方</a>・<a href="https://2001y.me/blog/web/bookmarklet-ios-safari" target="_blank" rel="noopener noreferrer">Safari(iOS)をお使いの方</a></p>

{{<bg-end>}}

## 使い方

ダウンロードページにて、このブックマークレットを実行すれば全てのファイルを一括ダウンロードできます。

![](../../../images/bookmarklet-datadeliver-0.jpg)

## うまく動かないとき

ポップアップがブロックされている場合、うまく動作しません。<b>ポップアップとリダイレクトを常に許可</b>を選択します。

![ポップアップブロックなどは許可する必要がある](../../../images/bookmarklet-datadeliver-1.jpg)

## 仕組み

本当にただ新規タブで開いてるだけ。

```js
let el = document.querySelectorAll(".spiffydownfg:first-of-type td div a");
for(let i=0; i<el.length; i++){
  window.open(el[i].href);
}
```