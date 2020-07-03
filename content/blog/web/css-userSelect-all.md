---
title: "[CSSだけ]1クリックで全選択できるuser-select:all;"
date: 2020-07-03T07:00:22+09:00
img: css-userSelect-all
categories: ["Web"]
tags: ["CSS"]

---

[mdnのuser-select](https://developer.mozilla.org/ja/docs/Web/CSS/user-select)を見ていたら、user-selectを使えばCSSだけで1クリックで全選択肢できることに気がついたのでメモ。

## user-select: all;

これを加えるだけで、1クリックで全選択ができるようになります。

```css
pre {
    -webkit-user-select: all;
    user-select: all;
}
```

流石にコピーさせることまではできません。あと、これを加えると逆に部分的な選択がほぼ不可能になるのでどちらが良いかどうかは難しそう。

### ブラウザ対応状況

{{<caniuse id="mdn-css__properties__user-select">}}

***

こういうなくても良いけど、あると便利な機能ほどCSSだけでつけられるといいですよね。必須な機能はどうしてもシェアを考えるとJSを使いたくなることも多いだろうし。