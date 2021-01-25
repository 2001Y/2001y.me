---
title: "[JavaScript]Fetchで取得したJSONを変数に保存する"
date: 2021-01-25T00:00:22+09:00
categories: ["Web"]
tags: ["JS"]
---

この前作った、[顔認識を使って顔を絵文字で隠すツール](https://2001y.me/blog/web/tool-faceapi-emoji/)の絵文字をランダムに生成する部分で<b>fetchで取得したjsonを変数に代入する</b>部分で手こずったので備忘録。

{{<ad>}}

## Fetchで取得したJSONを変数に保存する

これで、fetch処理が終わった段階（jsonが取得できた段階）で`変数json`に結果が格納されます。

```js
let json;    
fetch("https://exsample.com/api.json")
  .then(
    function(u) {
      return u.json();
    }
  )
  .then(
    function(e) {
      json = e;
    }
  )
```

ただ、もちろんfetch処理が終わってない段階だと`変数json`は`undefined`を返します。ほんとは、[fetchを同期的に](https://dmitripavlutin.com/javascript-fetch-async-await/)処理させてあげたほうがいいんだろうなぁ。

