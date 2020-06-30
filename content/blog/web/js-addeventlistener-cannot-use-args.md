---
title: "[JavaScript]addEventListenerで引数が使えない"
date: 2020-06-11T08:00:22+09:00
img: js-addeventlistener-cannot-use-args
categories: ["Web"]
tags: ["Web","JavaScript","JS","ブログ"]

---

基本的にaddEventListenerで引数が使えないらしいく、毎回忘れるのでメモ。

```js
//OK 引数にはMouseEventが入る
document.addEventListener("mousedown", mousedown);
```

```js
//NG
document.addEventListener("mousedown", mousedown());
document.addEventListener("mousedown", mousedown("hello"));

function mousedown(e){
  alert(e);
}
```



## 引数を指定したい場合は第2引数に

引数を指定したい場合は第二引数(？)に指定してあげると動くみたい。

```js
document.addEventListener("mousedown", {
  handleEvent: mousedown,
  e:"hello"
});
function mousedown(){
   alert(this.e);
}
```

### 参考

[JavaScript addEventListenerで引数を設定する方法](https://zukucode.com/2017/05/javascript-addeventlistener-parameter.html)
[【JavaScript】addEventListenerで関数に引数をわたす](https://note.com/yamanoborer/n/n2e4cc40328b7)