---
title: "JavaScriptでnote.comからRSSで記事を取得してHTMLを出力する"
date: 2021-02-26T02:00:22+09:00
categories: ["Web"]
tags: ["JS"]
---

{{<ad>}}

## noteのRSSを取得

noteは自分のURL末尾に「rss」を付与するだけでRSSを取得することができます。全文取得は[Proアカウントのみ](https://help.note.com/hc/ja/articles/900001001246-記事の全文をRSSで受け取りたい)のようです。

```html
https://note.com/yellow_mug/rss
```

{{<ad>}}

## rss2jsonでRSSをJSONに

[`rss2json`](https://rss2json.com)に先ほど取得したRSSを入力して、JSONに変換。無料プラン（登録不要）では1回/時間の周期でチェックしてくれるらしい。

```html
https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnote.com%2Fyellow_mug%2Frss
```

![](../../../images/js-rss2json-note-1.jpg)

{{<ad>}}

## JSONをFetchで取得してHTMLを出力

先ほど取得したjsonに変更したrssを使って、JavaScriptでHTMLに整形する。

### JavaScript

```js
fetch("先ほど取得したJSON化したRSSのリンク")
.then(function(response) {
  return response.json();
})
.then(function(json) {
  let data = json.items,
      html = "";
  for (value of data) {
   html = html+"<li><a href="+value.link+" target=_blank><h2>"+value.title+"</h2><time>"+value.pubDate+"</time></a></li>";
   rss.innerHTML = html;
  }
});
```

### HTML

```html
<ul id="rss">
  読み込み中...
</ul>
```

***

### 出力されるHTML

```html
<ul id="rss">
  <li>
    <a href="https://note.com/name/n/a1b2c3d4" target="_blank">
      <h2>タイトル1</h2>
      <time>2021-02-25 09:55:51</time>
    </a>
  </li>
  ・・・
  <li>
    <a href="https://note.com/name/n/a1b2c3d4" target="_blank">
      <h2>タイトル5</h2>
      <time>2021-02-23 05:55:51</time>
    </a>
  </li>
</ul>
```

### Demo

<iframe height=425px class=codepen src="https://mineditor.github.io/?h=%253Cul%2520id%3D%2522rss%2522%253E%250A%2520%2520%25E8%25AA%25AD%25E3%2581%25BF%25E8%25BE%25BC%25E3%2581%25BF%25E4%25B8%25AD...%250A%253C%2Ful%253E&c=none&j=fetch%28%2522%2F%2Fapi.rss2json.com%2Fv1%2Fapi.json%3Frss_url%3Dhttps%25253A%25252F%25252Fnote.com%25252Fyellow_mug%25252Frss%2522%29%250A.then%28function%28response%29%2520%257B%250A%2520%2520return%2520response.json%28%29%3B%250A%257D%29%250A.then%28function%28json%29%2520%257B%250A%2520%2520let%2520data%2520%3D%2520json.items%2C%250A%2520%2520%2520%2520%2520%2520html%2520%3D%2520%2522%2522%3B%250A%2520%2520for%2520%28value%2520of%2520data%29%2520%257B%250A%2520%2520%2520html%2520%3D%2520html%2B%2522%253Cli%253E%253Ca%2520href%3D%2522%2Bvalue.link%2B%2522%2520target%3D_blank%253E%253Ch2%253E%2522%2Bvalue.title%2B%2522%253C%2Fh2%253E%253Ctime%253E%2522%2Bvalue.pubDate%2B%2522%253C%2Ftime%253E%253C%2Fa%253E%253C%2Fli%253E%2522%3B%250A%2520%2520%2520rss.innerHTML%2520%3D%2520html%3B%250A%2520%2520%257D%250A%257D%29%3B&s=40"></iframe>