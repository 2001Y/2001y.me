---
title: "[CSS]vertical-alignの効かない別要素同士のベースラインを揃える"
date: 2020-06-18T00:00:22+09:00
img: css-another-block-baseline
categories: ["Web"]
tags: ["CSS","Web"]
---

![another-block-baseline-1](../../../images/another-block-baseline-1.jpg)

liをflexで横並びにした上で、英字と日本語を別フォントにするとベースラインが崩れる。同じ要素であれば揃うけど、別要素になるとずれる。

```html
<ul>
  <li>HI-TEC-C</li>
  <li>ジェットストリーム</li>
</ul>
```

## line-heightを指定する

![another-block-baseline-2](../../../images/another-block-baseline-2.jpg)

line-heightを両方に指定してあげれば揃った。heightではダメ。

```css
li {
  line-height: 1em;
}
```