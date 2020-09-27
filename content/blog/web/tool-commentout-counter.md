---
title: "コメントアウトを文字数に数えない字数カウンターを作ってみた"
date: 2020-09-28T00:00:22+09:00
img: tool-morsecode
categories: ["Web"]
tags: ["Tool","WebTopic"]
js: "tool-commentout-counter"
---

文字数指定ありの文章を作らなくてはいけない機会が多くありますが、そのときによく思うのことがありました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">文を作る時いつも思う...<br>⌘+/ で文字数カウントを外したい...</p>&mdash; 2001Y (@Y20010920T) <a href="https://twitter.com/Y20010920T/status/1310244192858173441?ref_src=twsrc%5Etfw">September 27, 2020</a></blockquote>

選択範囲の文字数はわかることが多いですが、毎回引き算をするのも面倒くさいし、複数箇所を消すか残すか検討したいもの。

なので、コメントアウトした行はカウントされない字数カウンターを作ってました。

{{<ad>}}

## コメントアウトを文字数に数えない字数カウンター

<p class=noIndent>コメントアウトを除いた：<span id=counter>0</span><br>コメントアウトと空白を除いた：<span id=counternospace>0</span></p>

<textarea id=editor onchange="count(this.value);" onkeydown="count(this.value);" onclick="count(this.value);" placeholder="// コメントアウトはカウントされません" autofocus></textarea>

文字数：<span id=normal>0</span>　空白抜き：<span id=nospace>0</span>　カーソル位置：<span id=selectionStart>0</span>　選択範囲：<span id=select>0</span>

## 主な仕様

対応しているコメントアウトには`//`のみです。`/* */`などは機能しません。

{{<ad>}}

## コード

改行ごとに区切って配列化して、文の始めが`//`のものを除外して文字数を算出しています。

```js
function count(e) {
  let out = 0,out2 = 0,
      split = e.split('\n'); //改行ごとに区切って配列化
  
  for (let i = 0; i < split.length; i++) {
    //IF：行始めが"//"ではない時
    if (!split[i].startsWith('//')){
      out = out + split[i].length; //コメントアウトを含まない場合
      out2 = out2 + split[i].trim().length; //空白とコメントアウトを含まない場合
    }
  }
  
  //出力
  counter.innerText = out; //コメントアウトを含まない文字数
  counternospace.innerText = out2; //空白とコメントアウトを含まない文字数
  
  let e2 = e.replace(/\r?\n/g,""); //デフォルトで改行は1文字に数えないように
  normal.innerText = e2.length; //デフォルト
  nospace.innerText = e2.trim().length; //空白を含まない文字数
  selectionStart.innerText = editor.selectionStart; //カーソル位置までの文字数
  select.innerText = String(document.getSelection()).length; //選択範囲の文字数
}
```

***

もっと前から作っとけばよかった...。

あとで`⌘ + /`で行始めに//を加えるようにしたい。