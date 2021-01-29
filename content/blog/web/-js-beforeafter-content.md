---
title: "JavaScriptでbefore/afterのcontentを書き換える"
date: 2021-01-21T00:00:22+09:00
categories: ["Web"]
tags: ["Web","PWA","サイト","iOS"]
draft: true
---

JavaScriptでは（疑似要素

{{<ad>}}

## JavaScriptでbefore/afterのcontentを書き換える



```js
let new_style = document.body.appendChild(document.createElement("style"));
new_style.innerHTML = 'Emmet:before { content: "書き換えたいテキスト" !important }';
```



