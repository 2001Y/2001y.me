---
title: "[CSS]Safariでlist-style-typeに任意テキストを指定できない"
date: 2021-03-03T00:00:40+09:00
categories: ["Web"]
tags: ["CSS","List"]
---

{{<ad>}}

Safariで`list-style-type`にテキストを指定することができませんでした。検証環境は`SafariTechnologyPreview 118｜Safari 14.0.2｜Chrome 88.0.4324.192`です。

![](../../../images/css-list-style-type-txt-bugsafari-1.jpg)

解決策としては、beforeでテキストを指定することで回避することができますが、複数行の時に文頭を揃えにくいから気に食わない...。

```css
ul {
  list-style-type: none;
}
li:before {
  content: "🐣";
}
```

### Demo

<iframe class=codepen height=400 src="https://mineditor.github.io/?h=%253Ch2%253Eul%2520%257B%2520list-style-type%3A%2522%25F0%259F%2590%25A3%2522%3B%2520%257D%253C%2Fh2%253E%250A%253Cul%253E%250A%2520%2520%253Cli%253Elist1%253C%2Fli%253E%250A%2520%2520%253Cli%253Elist2%253C%2Fli%253E%250A%253C%2Ful%253E%250A%250A%253Ch2%253E%3Abefore%2520%257B%2520content%3A%2522%25F0%259F%2590%25A3%2522%3B%2520%257D%253C%2Fh2%253E%250A%253Cul%2520id%3Dbefore%253E%250A%2520%2520%253Cli%253Elist1%253C%2Fli%253E%250A%2520%2520%253Cli%253Elist2%253C%2Fli%253E%250A%253C%2Ful%253E&c=ul%2520%257B%250A%2520%2520list-style-type%3A%2520%2522%25F0%259F%2590%25A3%2522%3B%250A%257D%250A%250A%23before%2520%257B%250A%2520%2520list-style-type%3A%2520none%3B%250A%257D%250A%23before%2520li%3Abefore%2520%257B%250A%2520%2520content%3A%2520%2522%25F0%259F%2590%25A3%2522%3B%250A%257D%250A%250A%250A%250Aul%2520%257B%250A%2520%2520margin-bottom%3A%25201em%3B%250A%2520%2520list-style-position%3A%2520inside%3B%250A%257D&j=none&s=50"></iframe>