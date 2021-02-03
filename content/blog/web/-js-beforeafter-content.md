---
title: "JavaScriptでbefore/afterのcontentを書き換える"
date: 2021-02-03T00:00:22+09:00
categories: ["Web"]
tags: ["Web","PWA","サイト","iOS"]
---

JavaScriptで`:before`や`:after`などの疑似要素の`content`を動的に変化させるためには、styleタグを追加するしかないみたいです。

{{<ad>}}

## JavaScriptでbefore/afterのcontentを書き換える

```js
let new_style = document.body.appendChild(document.createElement("style"));
new_style.innerHTML = 'Emmet:before { content: "書き換えたいテキスト" !important }';
```

{{<ad>}}

### hover時の切り替えなどはCSSのみで可能

<iframe width=100% height="270" src="https://mineditor.github.io/?h=%253Cspan%253E%253C%2Fspan%253E&c=span%3Aafter%2520%257B%250A%2520%2520content%3A%2520%2522%25E9%2580%259A%25E5%25B8%25B8%25E6%2599%2582%2522%3B%250A%257D%250Aspan%3Ahover%3Aafter%2520%257B%250A%2520%2520content%3A%2520%2522%25E3%2581%25BB%25E3%2581%25B0%25E3%2583%25BC%2522%3B%250A%257D&j=none">
</iframe>