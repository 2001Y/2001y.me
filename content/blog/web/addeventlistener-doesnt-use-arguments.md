---
title: addEventListenerは引数が使えない
date: 2020-02-05T08:00:22+09:00
img: 
categories: ["Web"]
tags: ["Blog","JavaScript"]

---

GoogleFile

ローカルにpackage.jsonを移してnpm install --no-bin-links

--no-bin-linksはシンボリックリンクを作らなくなる

GDFSでnpm install --no-bin-linksをしても動作しない

## 

```js
//間違え
document.addEventListener('mousedown', mousedown("アラート"));
function mousemove(e){
  alert(e);
}
```



## addEventListenerの引数は固定。

因数を表記するのは最低限で良いらしい。

```js
document.addEventListener('mousedown', function (e){
  alert();
});

//関数を別にする場合
document.addEventListener('mousedown', mousedown);
function mousemove(e){
  alert();
}
```



### 参考文献

[JavaScript addEventListenerで引数を設定する方法](https://zukucode.com/2017/05/javascript-addeventlistener-parameter.html)
