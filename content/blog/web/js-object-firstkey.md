---
title: "[JavaScript]連想配列の最初のキーと値を取得する"
date: 2020-11-30T01:00:22+09:00
categories: ["Web"]
tags: ["JS"]

---

[前回は](https://2001y.me/blog/js-object-sort)連想配列を値で並び替えたので、次にこの連想配列の最初のキーと値（この場合`happy`と`6.794687124056509e-7`）を取得します。

```json
{
  "happy"    : 6.794687124056509e-7, 
  "disgusted": 3.874205489751148e-8,
  "angry"    : 1.307630128621895e-7,
  "surprised": 0.993532657623291,
  "fearful"  : 0.005575541406869888,
  "neutral"  : 0.0008843988180160522,
  "sad"      : 0.000006560272140632151
}
```

{{<ad>}}

## 連想配列（オブジェクト）の最初のキーと値を取得する

`Object.entries`を用いることで指定のキーと値を `[key, value]`の配列にして取得することができるので、そこからキーと値をそれぞれ取得しました。また、これ以外にも[forで最初のkeyを取得する](http://criticalbreak5.seesaa.net/article/430092962.html)方法もありそうです。

```js
let expressionList = {
  "happy"    : 6.794687124056509e-7, 
  "disgusted": 3.874205489751148e-8,
  "angry"    : 1.307630128621895e-7,
  "surprised": 0.993532657623291,
  "fearful"  : 0.005575541406869888,
  "neutral"  : 0.0008843988180160522,
  "sad"      : 0.000006560272140632151
};

let expression = Object.entries(expressionList)[0];
//> ["happy", 6.794687124056509e-7] 

console.log(expression[0]);
//> happy

console.log(expression[1]);
//> 6.794687124056509e-7
```
