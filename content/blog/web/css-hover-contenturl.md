---
title: "[CSSだけ]1行でhover時に画像を切り替える"
date: 2020-07-05T00:00:22+09:00
img: css-hover-contenturl
categories: ["Web"]
tags: ["CSS"]

---

## content: url("URL");

JSを使わずに、CSSに一行加えるだけでimgの画像の切り替えを実装することができます。

```css
.toggleImg:hover {
    content: url("URL");
}
```

### Demo

<iframe height="168" width="100%" scrolling="no" src="https://mineditor.github.io/?h=%253Cimg%2520class%3D%2522toggleImg%2522%2520src%3D%2522https%3A%2F%2F2001y.me%2Fimg%2Fcss-userSelect-all-120.jpg%2522%253E&c=.toggleImg%3Ahover%2520%257B%250A%2520%2520%2520%2520content%3A%2520url%28%2522https%3A%2F%2F2001y.me%2Fimg%2Fmac-pp-command%2Bd-120.jpg%2522%29%3B%250A%257D&j="></iframe>

### ブラウザ対応状況

{{<caniuse id="mdn-css__properties__content">}}

***

Codepen、記事からサクッと移動してカスタムできるから便利なんだけど、余計な表示が多いから自作してみようかな...。

**追記：Codepen風のPlayground?を作って載せてみた（記事はもうちょっとちゃんと作ってから）**