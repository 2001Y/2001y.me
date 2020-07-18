---
title: "text-align-last:left; は不要"
date: 2020-07-18T02:00:22+09:00
img: css-textAlignLast-left
categories: ["Web"]
tags: ["CSS"]

---

日本の印刷物では（[日本語組版らしい？](https://blog.antenna.co.jp/CSSPage2/archives/9)）両端揃えが[一般的らしい](https://ja.wikipedia.org/wiki/文字揃え)のですが、Webなどのパソコン上でのテキストでは欧文が元になっているからか、左揃えが多いです。

**Webで中央揃えするのか問題** は難しい問題らしいですが、このブログではなんとなく`text-align: justify;`を指定していました。

しかし、たまたま Chromeで（普段はSafariメイン）自分の記事を確認すると最後の行がおかしい。

![最後の行まで両端揃えしちゃってる](../../../images/css-textAlignLast-left-1.jpg)

## text-align-last: left;

`text-align-last: left;`を加えることで最後の行だけを左揃えにすることができます。

```css
text-align: justify;
text-align-last: left;
```

しかし...

***

### なぜか text-align-last: justify; してた...

CSSを加えようとしたところ、`text-align-last: justify;`が指定してある...

![いつ指定したんだろ...全然覚えてない](../../../images/css-textAlignLast-left-2.jpg)

#### text-align-last のブラウザ対応状況

`justify`を`left`に変えれば問題は解決するのですが、なんでSafariだと気づかなかったのかというと、Safariが`text-align-last`に対応していなかったから。

{{<caniuse id="mdn-css__properties__text-align-last">}}

### デフォルトで最後の行は中央揃えにならない

でも、逆に`text-align: justify;`を指定していても、デフォルトで最後の行は無効化されるということ。

つまり、`text-align-last: left;`を指定する必要はないんですね。