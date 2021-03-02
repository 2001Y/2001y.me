---
title: "[CSS]ul,olの箇条書き記号ボックスのズレを修正"
date: 2021-03-03T00:00:40+09:00
categories: ["Web"]
tags: ["CSS","List"]
draft: true
---

リスト項目の箇条書き記号ボックス （ふつうは黒丸や番号）がpaddingを無視して意図しないズレが起こってしまう場合があります。

![実際のズレた表示](../../../images/css-list-style-position-1.jpg)

{{<ad>}}

## list-style-positionで解決





```css
ul,li {
  list-style-position: inside;
}
```





<iframe class=codepen height=200 src="https://mineditor.github.io/?h=%2520%2520%253Cul%253E%250A%2520%2520%2520%2520%253Cli%253Elist1%253C%2Fli%253E%250A%2520%2520%2520%2520%253Cli%253Elist2%253C%2Fli%253E%250A%2520%2520%2520%2520%253Cli%253Elist3%253C%2Fli%253E%250A%2520%2520%253C%2Ful%253E&c=ul%2520%257B%250A%2520%2520list-style-position%3A%2520inside%3B%250A%2520%2520%2F%2F%25E7%25B7%25A8%25E9%259B%2586%25E5%258F%25AF%25E8%2583%25BD%25E3%2581%25A7%25E3%2581%2599%25E5%25AE%259F%25E9%259A%259B%25E3%2581%25AB%25E6%25B6%2588%25E3%2581%2597%25E3%2581%25A6%25E3%2581%25BF%25E3%2581%25A6%25E3%2581%258F%25E3%2581%25A0%25E3%2581%2595%25E3%2581%2584%250A%257D&j=none&s=30"></iframe>