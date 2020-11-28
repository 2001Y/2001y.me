---
title: "JavaScriptで連想配列(オブジェクト)を並び替え(ソート)"
date: 2020-11-28T00:00:22+09:00
categories: ["Web"]
tags: ["JS"]

---

face-api.jsを使うことで、このように表情を分析することができました。

```json
{
  "neutral": 0.0008843988180160522,
  "happy": 6.794687124056509e-7,
  "sad": 0.000006560272140632151,
  "angry": 1.307630128621895e-7,
  "fearful": 0.005575541406869888,
  "disgusted": 3.874205489751148e-8,
  "surprised": 0.993532657623291
}
```

この中で使いたいのは数値の大きい表情だけです。このデータだと`happy`。

## 連想配列を値でソート

このような連想配列の場合、できないという記事も[多かった](https://lab.taf-jp.com/配列・二次配列・連想配列のソート/)のですが、[こちら](https://pisuke-code.com/js-sort-object-by-key-or-value/#i-2)のブログを参考にしたところ、これでうまくいきました。

```js
let expression = {
  "neutral": 0.0008843988180160522,
  "happy": 6.794687124056509e-7,
  "sad": 0.000006560272140632151,
  "angry": 1.307630128621895e-7,
  "fearful": 0.005575541406869888,
  "disgusted": 3.874205489751148e-8,
  "surprised": 0.993532657623291
};

let pairs = Object.entries(expression);
pairs.sort(function(p1, p2){
  let p1Key = p1[0],
      p2Key = p2[0];
  if(p1Key < p2Key){ return -1; }
  if(p1Key > p2Key){ return 1; }
  return 0;
})
expression = Object.fromEntries(pairs);

console.log(expression);
```
