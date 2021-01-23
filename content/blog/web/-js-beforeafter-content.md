---
title: "JavaScriptでbefore/afterのcontentを書き換える"
date: 2021-01-21T00:00:22+09:00
categories: ["Web"]
tags: ["Web","PWA","サイト","iOS"]
draft: true
---

fetchで取得したjsonを

```js
var new_ele=document.createElement("style");
new_ele.innerHTML = "#file:before { content: '" + fileName + "' !important }";
document.body.appendChild(new_ele);
```


