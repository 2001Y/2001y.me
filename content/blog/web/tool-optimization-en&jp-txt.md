---
title: "英文と和訳を見やすく改行してくれるサイトを作ってみた"
date: 2020-09-16T00:00:22+09:00
img: tool-optimization-en&jp-txt
categories: ["Web"]
tags: ["Tool","WebTopic"]
---

課題などで和訳と英文を見る際に、2枚を並べてみるとどこだったか分からなくなるし、1枚にまとめるのもめんどくさい。そこで、英語の文章とそれを訳した日本語をコピペするだけで、英文と和文を交互に改行してくれるようにしてみました。

あくまで自分用で、ある程度手動で仕様にあった形に整形した上で使うツールです。

{{<ad>}}

## 英語と日本語訳を交互に改行して並び替える

<div id=textarea-flex>
  <div>
    <h3>英語</h3>
		<textarea id=enInput onchange="f();" onkeydown="f();" placeholder="Hello. This is Demo."></textarea>
  </div>
  <div>
    <h3>日本語</h3>
		<textarea id=jpInput onchange="f();" onkeydown="f();" placeholder="こんにちは。これはデモです。"></textarea>
  </div>
</div>

### 結果

<textarea id="outputInput" readonly>
Hello.
こんにちは。
This is Demo.
これはデモです。
</textarea>
<script>
  function f(){
    let enList = enInput.value.split("."),
        jpList = jpInput.value.split("。"),
        output = "";
    for (let i = 0; i < jpList.length; i++) {
      let en = enList[i];
      if (en.includes("\n")) {
        en = "\n" + en.trim();
      } else {
        en = en.trim();
      }
      output = output + en + ".\n" + jpList[i].trim() + "。\n";
    }
    outputInput.value = output.slice(0, -4);
  }
</script>

<style>
  textarea {
    height: 10.1em;
  }
  #outputInput {
    height: 15.1em;
  }
  @media (min-width: 600px) {
    #textarea-flex {
    	display: flex;
    	margin: auto;
  	}
    #textarea-flex div {
    	width: 50%;
  	}
 		#textarea-flex div:first-child {
  		margin-right: 1em;
  	}
  }
</style>

## 仕様

### 1. 文は ピリオド（.） と 句点（。） で識別

交互に並べ替える上で、 `.` と `。` で区切って文を識別させた。

### 2. 文の数は同じでないと機能しない

1つの英文に対して、1つの和訳があることを想定しているため、<b>文の数が同じでないと機能しない</b>。ただ、仕組み上、英文の方が1文多くても表示はされる。

### 3. 段落は英文の 改行 で識別

<b>段落を識別するために英文の改行を用いた</b>。1回の改行で段落切り替えと認識するため、1文づつ1回改行しているような文章にはあまり向かない。

### 4. 日本語の改行は無視

Google翻訳などの翻訳ツールで翻訳結果に改行が引き継がれないことを考慮して、日本語の改行は無視するようにした。

### 5. 文の前後の無駄な余白は消去

文の前後にスペースがある場合は消去される。これがないと英文はピリオド後に半角スペースがあることが多いため、英文の頭がガタガタになる。

{{<ad>}}

## コード

```js
let enList = enInput.value.split("."),  //英文をピリオドで区切って配列化
    jpList = jpInput.value.split("。"),  //和文を句点で区切って配列化
    output,en;

for (let i = 0; i < jpList.length; i++) {
    en = enList[i];
    if (en.includes("\n")) {
        en = "\n" + en.trim();  //英文が改行がある場合、文の前後のスペースを消去して、文の前に改行を追加
    } else {
        en = en.trim();  //英文に改行がない場合、文の前後のスペースのみを消去
    }
    output = output + en + ".\n" + jpList[i].trim() + "。\n";  //ピリオドと句点は配列化で消えたので復活させて、英文の下に和約を挿入
}

outputInput.value = output.slice(0, -4); //余分にピリオドと句点が追加されるので整形して出力
```

***

`placeholder`内で改行できないの辛い。あと、`.trim()`便利。これに翻訳まで内臓しちゃおうかな...。