---
title: "[JS]fetchで取得したjsonを変数に保存する"
date: 2021-01-21T00:00:22+09:00
categories: ["Web"]
tags: ["Web","PWA","サイト","iOS"]
---

fetchで取得したjsonを

```
var jsondata = fetch(url).then(
    function(u){ return u.json();}
  ).then(
    function(json){
      console.log(json);
    }
  )
console.log(jsondata);
```



```js
let json;    
fetch("https://unpkg.com/api.json")
  .then(
    function (u) {
      return u.json();
    }
  )
  .then(
    function(e){
      json = e;
    }
  )
```

これで、fetch処理が終わった段階（jsonが取得できた段階）で`変数json`に結果が格納されます。

ただ、もちろんfetch処理が終わってない段階だと`変数json`は`undefined`を返します。

```js
//fetch処理が終わる前
console.log(json);
  //> undefined
```