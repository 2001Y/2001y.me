---
title: "[CSS]Safariではlist-style-typeを任意テキストに指定できない"
date: 2021-03-03T00:00:40+09:00
categories: ["Web"]
tags: ["CSS","List"]
---

{{<ad>}}

## Safariではlist-style-typeを任意テキストに指定できない



検証環境は

```html
Safari Technology Preview 118
Safari 14.0.2
Chrome 88.0.4324.192`
```

です。

![](../../../images/css-list-style-type-txt-bugsafari-1.jpg)

### Demo

<iframe class=codepen height=200 src="https://mineditor.github.io/?h=%253Cul%253E%250A%2520%2520%253Cli%253Elist1%253C%2Fli%253E%250A%2520%2520%253Cli%253Elist2%253C%2Fli%253E%250A%253C%2Ful%253E&c=ul%2520%257B%250A%2520%2520list-style-type%3A%2520%27%25F0%259F%2590%25A3%27%3B%250A%2520%2520list-style-position%3A%2520inside%3B%250A%257D&j=none&s=30"></iframe>



```css
ul,li {
  list-style-position: inside;
}
```





<iframe class=codepen height=200 src="https://mineditor.github.io/?h=%2520%2520%253Cul%253E%250A%2520%2520%2520%2520%253Cli%253Elist1%253C%2Fli%253E%250A%2520%2520%2520%2520%253Cli%253Elist2%253C%2Fli%253E%250A%2520%2520%2520%2520%253Cli%253Elist3%253C%2Fli%253E%250A%2520%2520%253C%2Ful%253E&c=ul%2520%257B%250A%2520%2520list-style-position%3A%2520inside%3B%250A%2520%2520%2F%2F%25E7%25B7%25A8%25E9%259B%2586%25E5%258F%25AF%25E8%2583%25BD%25E3%2581%25A7%25E3%2581%2599%25E5%25AE%259F%25E9%259A%259B%25E3%2581%25AB%25E6%25B6%2588%25E3%2581%2597%25E3%2581%25A6%25E3%2581%25BF%25E3%2581%25A6%25E3%2581%258F%25E3%2581%25A0%25E3%2581%2595%25E3%2581%2584%250A%257D&j=none&s=30"></iframe>