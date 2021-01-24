---
title: "顔認識(face-api.js)で顔を絵文字で隠すツールを作ってみた"
date: 2021-01-24T01:00:22+09:00
categories: ["Web"]
tags: ["Tool","WebTopic"]
js: "face-api/face-api"
---

ご時世的に様々な活動がオンラインへ移行され、活動報告などをネットに公開する機会が多くなった気がします。そんな時に問題になってくるのがプライバシー問題。

特に顔の写った写真は慎重に取り扱わなければいけません。

対策として、最近は絵文字で人の顔を隠していましたが、人数が多くなるとなかなかの手間...そこで<b>顔認識で自動的に顔を隠すように絵文字を配置して保存できるツール</b>を作ってみました。

このツールは写真などのデータがサーバーに保存されることはなく、全てブラウザ上で処理されます。また、動作が不安定な場合は[Chrome](https://www.google.com/intl/ja_jp/chrome/)をお使いください。

{{<ad>}}

## 顔を絵文字で隠すツール

### 写真を選択

{{< html >}}<input type=file id=file accept=image/*>{{< /html >}}

<div class=flex>

<div>

### 絵文字の指定

{{< html >}}

<form onclick="emojiF();canvasDraw()" onsubmit="canvasDraw();return false;">
  <div>
    <input type=radio name=emoji id=emojiRandom checked>
    <label for=emojiRandom>ランダム（クリックで切り替え）</label>
  </div>
  <div>
    <input type=radio name=emoji id=emojiFixed>
    <label for=emojiFixed>指定</label>
    <input type=text id=emoji maxlength=1 list=list onchange="canvasDraw()" onclick="this.value=''" value=😆 placeholder=絵文字を指定してください>
  </div>
</form>
<datalist id=list>
  <option value=😆>
  <option value=😭>
  <option value=😇>
</datalist>


{{< /html >}}

</div>

<div>

### 絵文字のサイズ

{{< html >}}

<form onchange="sizeF();canvasDraw()" onsubmit="canvasDraw();return false;">
<div>
  <input type=radio id=sizeAuto name=size checked>
  <label for=sizeAuto>自動</label>
</div>
  <div>
  <input type=radio id=sizeDouble name=size>
  <label for=sizeDouble>自動（倍率指定）</label>
  <input type=text id=sizeDoubleNum onchange="canvasDraw()" value=2 placeholder=倍率>
</div>
<div>
  <input type=radio id=sizeFixed name=size>
  <label for=sizeFixed>固定</label>
  <input type=text id=sizeFixedNum onchange="canvasDraw()" value=50px placeholder=ピクセル指定>
</div>
</form>

{{< /html >}}

</div>

</div>

## 結果<span id=info> - 準備中</span>

{{< html >}}

<canvas id="canvas"></canvas>
<style>
  canvas {
    width:100%
  }
</style>
<p class=noIndent><a id=download class=download download="canvas.png">ダウンロード</a></p>

<script src="/tool-faceapi-emoji.min.js"></script>

{{< /html >}}

{{<ad>}}

## サンプル

![赤ちゃんの顔もバッチリいい感じ](../../../images/tool-faceapi-emoji-sample-1.jpg)

![このぐらいの人数になってくると自動化の出番ですね。ぼやけてる後ろの方の人は認識されてないみたい](../../../images/tool-faceapi-emoji-sample-2.jpg)

![サングラスをしてる男の人もいるけどバッチリ！](../../../images/tool-faceapi-emoji-sample-3.jpg)

![と思ったら...でもサングラスしてれば隠す必要ないかも...？](../../../images/tool-faceapi-emoji-sample-4.jpg)

## 仕組み

### 顔認識

[face-api.js](https://github.com/justadudewhohacks/face-api.js/)で顔認識を行うことで、以下のような顔の点を取得することができます。そこから、<b>顔の中心</b>と<b>顔のサイズ</b>を決めています。

![](../../../images/faceapi-landmark.jpg)

### 絵文字

せっかくなら絵文字をランダムにしたかったので、頻繁に更新されている[unicode-emoji-json](https://github.com/muan/unicode-emoji-json)を利用させてもらいました。具体的には、ただ絵文字が羅列されている`data-ordered-emoji.json`を使いました。

最初は完全ランダムにしようと思っていたのですが、表情の絵文字じゃないと顔が隠れにくかったので94番目までの表情系の絵文字のみを対象としました。

{{<blogcard url="https://github.com/muan/unicode-emoji-json">}}