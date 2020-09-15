---
title: "サイト上のテキストを書き換えるcontentEditableのBookmarklet"
date: 2020-06-11T00:00:22+09:00
img: bookmarklet-contenteditable
categories: ["Web"]
tags: ["Bookmarklet","WebTopic"]
draft: true

---



## サイト上のテキストを書き換えるBookmarklet



<a href="javascript:(function(b)%7Bb.contentEditable=!b.isContentEditable;%7D)(document.body);" class=download>サイト改変Bookmarklet</a>

下のボタンをブックマークバーにドラッグ&ドロップ。スマホは、[こちら](https://wayohoo.com/ios/tips/how-to-install-bookmarklet-in-safari-for-ios.html)を参考に。

<a href="javascript:(function()%7Blet%20el%20%3D%20document.querySelectorAll(%22.tbl_wd_full%20td%3Afirst-of-type%20a%22)%3Bfor(let%20i%3D0%3B%20i%3Cel.length%3B%20i%2B%2B)%7Bwindow.open(el%5Bi%5D.href)%3B%7D%7D)()" class=download>データ便一括ダウンロード</a>

### 対応サイト

データ便：[https://www.datadeliver.net/](https://www.datadeliver.net/)

### 使い方

```
javascript:(function(b)%7Bb.contentEditable=!b.isContentEditable;%7D)(document.body);
```

### 仕組み

```
contenteditable="true"
```


