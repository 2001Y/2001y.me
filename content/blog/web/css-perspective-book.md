---
title: "[CSSだけ]perspectiveで本を立体的に開くアニメーション"
date: 2020-08-18T00:00:22+09:00
img: css-perspective-book
categories: ["Web"]
tags: ["CSS"]

---

Webというデジタルなデザインの中に、紙を表現したくなる時は多々あります。そんな中で本を開くようなアニメーションは魅力的なものの1つ。

でも、軽く調べてもなかなかシンプルなものが見つからなかったので、トライしてみたらCSSだけでできたのでメモ。

{{<ad>}}

## まずは完成品...。

hoverでアニメーションします。

<iframe height="200px" width="100%" scrolling="no" src="https://mineditor.github.io/?h=%253Csection%2520class%3D%2522book%2522%253E%250A%2520%2520%253Cdiv%2520class%3D%2522page%2522%253E%253C%2Fdiv%253E%250A%2520%2520%253Cdiv%2520class%3D%2522page%2520open%2522%253E%253C%2Fdiv%253E%250A%253C%2Fsection%253E&c=.book%2520%257B%250A%2520%2520perspective%3A%2520110vh%3B%250A%257D%250A.open%2520%257B%250A%2520%2520transition%3A%25201s%3B%250A%2520%2520transform-origin%3A%2520left%3B%250A%2520%2520transform%3A%2520rotateY%28-180deg%29%3B%250A%257D%250A.book%3Ahover%2520.open%2520%257B%250A%2520%2520transform%3A%2520rotateY%28.1deg%29%3B%250A%257D%250A%250A%250Abody%2520%257B%250A%2520%2520display%3A%2520flex%3B%250A%2520%2520justify-content%3A%2520center%3B%250A%2520%2520align-items%3A%2520center%3B%250A%257D%250A.book%2520%257B%250A%2520%2520display%3A%2520flex%3B%250A%257D%250A.page%2520%257B%250A%2520%2520height%3A%252070vh%3B%250A%2520%2520width%3A%252050vh%3B%250A%2520%2520background%3A%2520%23000%3B%250A%257D%250A.open%2520%257B%250A%2520%2520background%3A%2520red%3B%250A%257D&j=none" loading="lazy"></iframe>

一応想像通りのものができたかなと。`animation`とかと組み合わせれば何ページものページアニメーションもできそう。

```html
<section class="book">
  <div class="page"></div>
  <div class="page open"></div>
</section>
```

HTMLはシンプルで、本の大枠`.book`と 各ページ`.page`のみ。

## CSS：遠近感を出す `perspective` を使う

```css
.book {
  perspective: 110vh; //これが遠近感を出す！！
}
.open {
  transition: 1s; //アニメーションにかかる時間
  transform-origin: left; //動きの中心は左に
  transform: rotateY(-180deg); //最初は閉じておく
}
.book:hover .open {
  transform: rotateY(.1deg); //0degにすると戻る時にアニメーションが効かなくなる
}
```

`perspective`で遠近感を出して、`transform`で動きを作る。でも、どうやら完全平面(0deg)からの遠近感は出ないみたいで、小さな値を入れておく。

`perspective`を指定せず、`transform: rotateY`だけだと平面的な動きになり、横幅が変わってるだけに見えてしまう。

### `perspective` なしバージョン

<iframe height="200px" width="100%" scrolling="no" src="https://mineditor.github.io/?h=%253Csection%2520class%3D%2522book%2522%253E%250A%2520%2520%253Cdiv%2520class%3D%2522page%2522%253E%253C%2Fdiv%253E%250A%2520%2520%253Cdiv%2520class%3D%2522page%2520open%2522%253E%253C%2Fdiv%253E%250A%253C%2Fsection%253E&c=.open%2520%257B%250A%2520%2520transition%3A%25201s%3B%250A%2520%2520transform-origin%3A%2520left%3B%250A%2520%2520transform%3A%2520rotateY%28-180deg%29%3B%250A%257D%250A.book%3Ahover%2520.open%2520%257B%250A%2520%2520transform%3A%2520rotateY%28.1deg%29%3B%250A%257D%250A%250A%250Abody%2520%257B%250A%2520%2520display%3A%2520flex%3B%250A%2520%2520justify-content%3A%2520center%3B%250A%2520%2520align-items%3A%2520center%3B%250A%257D%250A.book%2520%257B%250A%2520%2520display%3A%2520flex%3B%250A%257D%250A.page%2520%257B%250A%2520%2520height%3A%252070vh%3B%250A%2520%2520width%3A%252050vh%3B%250A%2520%2520background%3A%2520%23000%3B%250A%257D%250A.open%2520%257B%250A%2520%2520background%3A%2520red%3B%250A%257D&j=none" loading="lazy"></iframe>

## `perspective` のブラウザ対応状況

{{<caniuse id="mdn-css__properties__perspective">}}

***

初スマホのiPhone11Proを画面から落として、保護ガラスを貫通して画面が割れました。さらに、カメラとライトが機能しなくなりました。

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">iPhone落として画面割って、カメラとライトが使えなくなった...あ〜。</p>&mdash; 2001Y (@Y20010920T) <a href="https://twitter.com/Y20010920T/status/1294697800685375488?ref_src=twsrc%5Etfw">August 15, 2020</a></blockquote>

さてさて、どうするかな。。。😓