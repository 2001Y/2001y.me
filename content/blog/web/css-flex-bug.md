---
title: 'flex:1;で解消しない"潰れ"はflex-shrink：0;'
date: 2021-01-24T02:00:22+09:00
categories: ["Web"]
tags: ["CSS","Flex"]
---

iPhoneで自分のブログを見ていたら、表示が乱れてる...

![](../../../images/css-flex-bug-1.jpg)

これはFlexboxを使うとたまに発生します。今まで通り、<b>幅を自動調整して欲しい要素に`flex: 1;`を追加</b>...されてました。すでに。

![](../../../images/css-flex-bug-2.jpg)

{{<ad>}}

## 解決策：潰れてほしくない要素に flex-shrink: 0;

<b>潰れてほしくない要素に`flex-shrink`を指定する</b>ことで解決しました。

```css
flex-shrink: 0;
```

![](../../../images/css-flex-bug-4.jpg)

ただ、このままだとタイトルが右に見切れてしまってます。そこで、<b>幅を自動調整して欲しい要素に`overflow: hidden;`を追加</b>。これで想像通りの形になりました。

![](../../../images/css-flex-bug-5.jpg)

## ただ、flex: 1; がなくてもちゃんと動く

試しにflex: 1;を消してみたところ、乱れることはありませんでした。

![](../../../images/css-flex-bug-6.jpg)