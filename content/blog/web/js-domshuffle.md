---
title: "JavaScriptでHTML要素をシャッフル"
date: 2021-02-14T00:00:22+09:00
categories: ["Web"]
tags: ["JS"]
---

{{<ad>}}

## JavaScriptでHTMLの要素をシャッフル

ギャラリー？を作っていてDOMのシャッフルがしたくなったのでメモ。

```js
let target = document.querySelector("section");
for(let i=target.children.length;i>=0;i--){
	target.appendChild(target.children[Math.random()*i|0]);
}
```

### Demo

<iframe height=400px width=100% src="https://mineditor.github.io/?h=%253Csection%253E%250A%2520%2520%253Cdiv%2520style%3Dbackground%3Ared%253E1%253C%2Fdiv%253E%250A%2520%2520%253Cdiv%2520style%3Dbackground%3Aorange%253E2%253C%2Fdiv%253E%250A%2520%2520%253Cdiv%2520style%3Dbackground%3Ablue%253E3%253C%2Fdiv%253E%250A%2520%2520%253Cdiv%2520style%3Dbackground%3Askyblue%253E4%253C%2Fdiv%253E%250A%2520%2520%253Cdiv%2520style%3Dbackground%3Agreen%253E5%253C%2Fdiv%253E%250A%253C%2Fsection%253E%250A%250A%253Cbutton%2520onclick%3Dshuffle%28%29%253ESHUFFLE%253C%2Fbutton%253E&c=section%2520%257B%250A%2520%2520display%3A%2520flex%3B%250A%257D%250Adiv%2Cbutton%2520%257B%250A%2520%2520color%3A%2520%23fff%3B%250A%2520%2520background%3A%2520%23000%3B%250A%2520%2520padding%3A%25206vw%3B%250A%2520%2520margin%3A%25201vw%3B%250A%257D%250Abody%2520%257B%250A%2520%2520display%3A%2520flex%3B%250A%2520%2520justify-content%3A%2520center%3B%250A%2520%2520align-items%3A%2520center%3B%250A%2520%2520flex-direction%3A%2520column%3B%250A%2520%2520align-content%3A%2520center%3B%250A%257D&j=let%2520target%2520%3D%2520document.querySelector%28%2522section%2522%29%3B%250A%250Afunction%2520shuffle%28%29%257B%250A%2520%2520for%28var%2520i%3Dtarget.children.length%3Bi%253E%3D0%3Bi--%29%257B%250A%2520%2520%2520%2520target.appendChild%28target.children%255BMath.random%28%29*i%257C0%255D%29%3B%250A%2520%2520%257D%250A%257D&s=30"></iframe>