---
title: "写真を読み込むだけで絵文字で顔を隠すツールを作ってみた"
date: 2021-01-21T00:00:22+09:00
categories: ["Web"]
tags: ["Web","PWA","サイト","iOS"]
js: "face-api/face-api"
---



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

## 

![https://github.com/justadudewhohacks/face-api.js/issues/586](../../../images/faceapi-landmark.jpg)