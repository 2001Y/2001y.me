---
title: "YouTubePremiumなしでピクチャインピクチャ/バックグラウンド再生させるブックマークレットを作ってみた"
date: 2020-09-25T23:00:22+09:00
categories: ["Web"]
tags: ["Bookmarklet","WebTopic"]
js: "bookmark"
---

iOS14では、バックグラウンド再生と呼ばれることも多い<b>ピクチャ・イン・ピクチャ</b>（以下PIP）が追加され、公開直後はYouTubePremiumに入っていない無料会員でもSafariでPIPを使うことでバックグラウンド再生を行うことができました。

しかし、その後無料会員ではPIPが利用できなくなってしまいました。手元の環境だと[iPadとMacでは利用可能](https://twitter.com/Y20010920T/status/1307291157710266370)なのですが、iPhoneでは不可能でした。

{{<blogcard url="https://japanese.engadget.com/ios14-youtube-pip-103045237.html">}}

今のところ、PC表示にすることでPIPを可能にする方法がありますが、もう一つYouTubePremiumなしでPIPを実現する方法を見つけたのでブックマークレットにしてメモしておきます。

ただ、現在でもYouTubePremiumに加入していればSafari経由でPIPを使うことができるため、この回避方法は利用規約違反や著作権違反などの違反行為になる可能性もあるので、自己責任でお願いします。。

![一応ぼくはPremium入ってるよって証拠を載せときます。。](../../../images/youtube-premium-2001y.jpg)

## YouTubePremiumなしでピクチャインピクチャさせる

### ブックマークレットコード

以下のコードをコピーして、登録方法の手順 に沿って登録してください。

```js
javascript:(function()%7Bwindow.location.href%20%3D%20document.querySelector('video').src%7D)()
```

### 登録方法

{{<blogcard url="https://2001y.me/blog/web/bookmarklet-ios-safari/">}}

### 対応サイト

YouTube（iPhone表示のみ）

### 使い方

このブックマークレットを実行すると動画のみのページに移動して、PIPできるようになるはずです。

<blockquote class="twitter-tweet" data-conversation="none"><p lang="ja" dir="ltr">いぇい笑笑 <a href="https://t.co/w4K4lieZLf">pic.twitter.com/w4K4lieZLf</a></p>&mdash; 2001Y (@Y20010920T) <a href="https://twitter.com/Y20010920T/status/1307296780388716549?ref_src=twsrc%5Etfw">September 19, 2020</a></blockquote>

### 仕組み

通常、PIPボタンを非表示にするためにはvideoタグに`disablepictureinpicture`を[加えれば非表示になるみたい](https://xov.jp/e/1411/)なんですが、YouTubeにはPIP表示はあるので、後から何かしらJSの処理をしてるっぽい...？

なので、コード箇所を探すのもめんどくさかったので、動画のみを新規タブで再生しました。これをブックマークレットにしただけです...。

```js
window.location.href = document.querySelector('video').src
```

***

あと、Premium限定のベータ版という形で2020/10/20まで<b>ホーム画面で視聴</b>という項目が追加されていました。

![https://www.youtube.com/new](../../../images/bookmarklet-yt-free-ios-pip.jpg)