---
title: "[CSS]上下左右中央は2行で済ませる！"
date: 2020-08-05T00:00:22+09:00
img: css-place
categories: ["Web"]
tags: ["CSS"]
---

CSSを書くうえで、利用頻度が著しく高いのに書くのが割と面倒なのが、上下左右中央。Flexboxが登場して3行のコードで上下左右中央でき流ようになったけど、Gridを使えばさらに短い2行で済ませることができそう。

{{<ad>}}

## Gridを使って2行で上下左右中央

### `place-items` を使う方法

`place-items`で`align-items`と`justify-items`をまとめることができる。

```css
display: grid;
place-items: center;
```

### `place-content` を使う方法

`place-content`は`align-content`と`justify-content`をまとめることができる。

```css
display: grid;
place-content: center;
```

### ブラウザ対応状況

{{<caniuse id="mdn-css__properties__place-items__grid_context">}}

***

## でも、Flexは2行では書けない...？

[Twitterで](https://twitter.com/takamosoo/status/1290520674025353216)`place-items`の存在を知ったのですが、そこでは`display: flex;`を使ってました。でも、実際にコードにしてみると動かない...？

<iframe height=170px class=codepen src="https://mineditor.github.io/?h=%253Cbody%253E%250A%2520%2520%253Cdiv%253E%253C%2Fdiv%253E%250A%253C%2Fbody%253E&c=body%2520%257B%250A%2520%2520display%3A%2520flex%3B%250A%2520%2520place-items%3A%2520center%3B%250A%257D%250A%250A%250Adiv%2520%257B%250A%2520%2520background%3A%2520%23000%3B%250A%2520%2520height%3A%252050px%3B%250A%2520%2520width%3A%2520100px%3B%250A%257D&j="></iframe>

#### `justify`,`align`,`content`,`items` のまとめ

> `justify系`は主軸、`align系`は交差軸
>
> `content系`は余白間隔、`items系`はアイテムの配置

## Flexでは効かないプロパティがいくつかある

折り返しさせない`flex-wrap: nowrap;`の場合（初期値）、`align-content`は効かない。また、Flexでは`justify-items`が機能しない。

<table>
<tr>
<th align="right"></th>
<th align="center"><code>nowrap(初期値)</code></th>
<th align="center"><code>wrap</code></th>
</tr>
<tr>
<th align="right"><code>align-content</code></th>
<td align="center">-</td>
<td align="center">●</td>
</tr>
<tr>
<th align="right"><code>align-items</code></th>
<td align="center">●</td>
<td align="center">●</td>
</tr>
<tr>
<th align="right"><code>justify-content</code></th>
<td align="center">●</td>
<td align="center">●</td>
</tr>
<tr>
<th align="right"><code>justify-items</code></th>
<td align="center">-</td>
<td align="center">-</td>
</tr>
</table>

なので、Flexでも無理やり`place系`使うことはできるけど、結局`place-content`と`place-items`を指定する必要があるので3行になってしまう。

```css
display: flex;
place-content: center;
place-items: center;
```

なので、flexを使うなら大人しく今まで通りでいいのかな。

```css
display: flex;
align-items: center;
justify-content: center;
```

***

どうなんだろ、自分のミスな気もするけど、ツイート主さんに確認する勇気もない...笑

▶︎[Tweet @takamosoo - Twitter](https://twitter.com/takamosoo/status/1290520674025353216)

▶︎[flexのalign-items と align-content と justify-content と justify-items の違い - Qiita](https://qiita.com/MyPoZi/items/3c2464884e9593a719c6#主軸交差軸とは)