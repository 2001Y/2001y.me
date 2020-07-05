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

<iframe height="223" width="100%" scrolling="no" src="https://codepen.io/2001Y/embed/ZEQrWVe?theme-id=dark&default-tab=result"></iframe>

### ブラウザ対応状況

{{<caniuse id="mdn-css__properties__content">}}

***

Codepen、記事からサクッと移動してカスタムできるから便利なんだけど、余計な表示が多いから自作してみようかな...。