---
title: "[CSSだけ]1行でhover時に画像を切り替える"
date: 2020-07-03T07:00:22+09:00
img: css-hover-contenturl
categories: ["Web"]
tags: ["CSS"]

---

[mdnのuser-select](https://developer.mozilla.org/ja/docs/Web/CSS/user-select)を見ていたら、user-selectを使えばCSSだけで1クリックで全選択肢できることに気がついたのでメモ。

## content: url("URL");

これを加えるだけで、1クリックで全選択ができるようになります。

```css
.toggleImg:hover {
    content: url("URL");
}
```

<iframe height="223" width="100%" scrolling="no" src="https://codepen.io/2001Y/embed/ZEQrWVe?height=223&theme-id=dark&default-tab=result"></iframe>

### ブラウザ対応状況

{{<caniuse id="mdn-css__properties__content">}}

***

こういうなくても良いけど、あると便利な機能ほどCSSだけでつけられるといいですよね。必須な機能はどうしてもシェアを考えるとJSを使いたくなることも多いだろうし。