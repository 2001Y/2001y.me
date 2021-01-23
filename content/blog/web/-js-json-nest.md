---
title: "写真を読み込むだけで絵文字で顔を隠すツールを作ってみた"
date: 2021-01-21T00:00:22+09:00
categories: ["Web"]
tags: ["Web","PWA","サイト","iOS"]
js: "face-api/face-api"
css: "tool-faceapi-emoji"
---



```js
オブジェクト：{key: value, key: value, ...}
　　　　配列：[value, value, ...]
```



```js
let json = {
    a: 1,
    b: 2,
    c: 3
}

json.a
//> 1

json["a"]
//> 1
```





```js
let json = {
    a: 1,
    b: 2,
    c: 3
}

Object.keys(json);
  //> ["a", "b", "c"]
Object.keys(json).forEach(function(e){
    console.log(e); 
});
  //> a
  //> b
  //> c
Object.keys(json).forEach(function(prop) {
    console.log(prop)
    console.log(json[prop])
});
  //> a
  //> 1
  //> b
  //> 2
  //> c
  //> 3

Object.values(json);
  //> [1, 2, 3]
Object.values(json).forEach(function(e){
    console.log(e); 
});
  //> 1
  //> 2
  //> 3

Object.entries(json);
//> [["a", 1], ["b", 2], ["c", 3]]

Object.entries(json).forEach(function(e){
    console.log(e); 
});
//> ["a", 1]
//> ["b", 2]
//> ["c", 3]
```





```js
let json = {
    "ABB": {
        "name": "aaa",
        "id": "111"
    },
    "BBB": {
        "name": "bbb",
        "id": "222
    }
}
Object.keys(json);

Object.keys(json).forEach(function(prop) {
  console.log(prop)
  console.log(json[prop])
});
```



```js
Object.keys(json).forEach(function(e){
    console.log(e); 
});
```