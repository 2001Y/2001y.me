---
title: AdobeFont一括アクティベートのお手伝いBookmarklet
date: 2020-06-03T08:00:22+09:00
img: adobefont-all-activate
categories: ["Gadget"]
tags: ["Adobe","AdobeFont","フォント","Bookmarklet","Mac"]

---
AdobeFontはAdobeCCを使っていると無制限に使えるので便利なのですが、1つずつ（フォントパックもあるけど）アクティベートにしなければ利用できません。

大学のアカウントでフォントをまたアクティベートする必要があったので一括でオンにする方法を探していたのですが、パソコンの負荷的にもそれはできないみたい...？

{{<ad>}}

## ページ内のフォントを一括で開くBookmarklet

![ブラウザにポップアップブロックされる時は許可してあげると開く。](../../../images/popupblock.jpg)

少しでも手間を省こうと、今開いてるページのフォントを全て新規タブで開くBookmarkletを作ったのでメモがわりに載せておきます。
<a href="javascript:(function()%7Blet%20link%20%3D%20document.querySelectorAll(%22.adobe-fonts-family-card--link%22)%2C%20i%20%3D%20-1%3Bwhile%20(%2B%2Bi%20%3C%20link.length)%20%7Bwindow.open(link%5Bi%5D.href)%3B%7D%7D)()" class=download>AdobeFont｜ページ内のフォントを全て開く</a>

```js
javascript: (function () {
  let link = document.querySelectorAll(".adobe-fonts-family-card--link"),
      i = -1;
  while (++i < link.length) {
    window.open(link[i].href);
  }
})()
```