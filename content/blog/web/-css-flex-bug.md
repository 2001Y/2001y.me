---
title: 'flex:1;でも解消しない"潰れ"はflex-shrink：0;'
date: 2021-01-24T02:00:22+09:00
categories: ["Web"]
tags: ["Web","PWA","サイト","iOS"]
js: "face-api/face-api"
css: "tool-faceapi-emoji"
---



iPhoneで自分のブログを見ていたら、このように表示がバグっていることに気がつきました。

![](../../../images/css-flex-bug-1.jpg)

Flexboxを使うとたまに発生します。今まで通り、<b>幅を自動調整して欲しい要素に`flex: 1;`を追加</b>...されてました。すでに。

![](../../../images/css-flex-bug-2.jpg)

## 解決策：潰れてほしくない要素に flex-shrink: 0;

<b>潰れてほしくない要素にflex-shrinkを指定する</b>ことで解決しました。ただ、このままだとタイトルが右に見切れてしまってます。

```css
flex-shrink: 0;
```

![](../../../images/css-flex-bug-4.jpg)

そこで、<b>幅を自動調整して欲しい要素に`overflow: hidden;`を追加</b>。これで想像通りの形になりました。

![](../../../images/css-flex-bug-5.jpg)

***

## `flex: 1;`がなくてもちゃんと動く

![](../../../images/css-flex-bug-6.jpg)

## 結論

