---
title: "JavaScriptでbefore/afterのcontentを書き換える"
date: 2021-01-21T00:00:22+09:00
categories: ["Web"]
tags: ["Web","PWA","サイト","iOS"]
draft: true
---



## JavaScriptでbefore/afterのcontentを書き換える



```js
let new_style = document.body.appendChild(document.createElement("style"));
new_style.innerHTML = 'Emmet:before { content: "書き換えたいテキスト" !important }';
```



```js
contentReplace("Emmet:before","置き換えたいテキスト");

let new_style = document.body.appendChild(document.createElement("style"));
function contentReplace(e1,e2) {
	new_style.innerHTML = e1+'{ content: "'+e2+'" !important }';
}
```

