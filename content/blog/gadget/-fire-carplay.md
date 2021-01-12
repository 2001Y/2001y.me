---
title: "Fireタブレットで最安ワイヤレスCarPlayナビを実現"
date: 2021-01-08T00:00:22+09:00
categories: ["Gadget"]
tags: ["CarPlay","iOS","Fireタブレット"]
---

自分が自由に使っていい車ができてから、運転する機会が非常に増えました。

最初の頃は駅までの往復や、すでに知っている場所への運転ばかりでしたが、少し遠くの知らない場所へ行くためにはナビが必須になってきます。

乗っている車にも一応ナビがついているのですが、東京スカイツリーすら登録されていないような古いマップデータであったり、まず反応が悪くてiPhoneやiPadに慣れていると使う気になれません。

そこで、今まではiPhoneでGoogleマップを使っていましたが、<b>安くCarPlayを導入することはできないか</b>と考えました。

{{<ad>}}

## ディスプレイにはFireタブレット

そもそも、古い車なので高価なCarPay対応ナビを買うことは選択肢にありません。手持ちのiPad mini5をナビ代わりにしてもいいけど、毎回つけ外しをするならiPhoneでいいやってなってしまいそう。

そこで、ディスプレイとして格安の<b>Fireタブレット</b>をチョイス。

[Fireタブレット](https://amzn.to/2Xsg026)はAmazonの販売するタブレットで、画面サイズは7〜10インチ、値段は5,980〜15,980円と超破格のタブレットです。でも、毎回と言えるほどいろんなセールの度にさらに安くなっているので通常価格で買うのはもったいないかも。

自分も7インチを4,000円以下で買った記憶があります。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=y2001920t-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07JQP28TN&linkId=5e8253d7700779d47f4aeb827acb9cfe"></iframe><iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=y2001920t-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07WJSJ28X&linkId=7559d00d13e61d7c3544b81c54c5308d"></iframe><iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=y2001920t-22&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B07KD6TPT6&linkId=ca2d11e6e0605af22d8b56840c05c274"></iframe>

そんなFireタブレットでCarPlayが動作すれば最高だなと思い、調べてみるとFireHD8でCarPlayが動作している[動画](https://youtu.be/yqSm5vlLCfo)を見つけました。

どうやら、Carlinkitという会社が<b>AndroidナビでCarPlayを使えるようにするデバイス</b>を販売していて、Android端末はもちろん、Androidベースで作られているFireタブレットでもCarPlayが実現できるみたい。

これは試すしかない。

{{<ad>}}

## Carlinkitのドングルを用意する

Carlinkitは[CarPlay非対応の車標準のナビをCarPlay対応にさせるドングル](http://carlinkit.com/ycpsj)や[有線CarPlay対応のナビを無線CarPayに対応させるドングル](http://carlinkit.com/productinfo/447590.html)なども取り扱っているようです。

ただ今回はAndroidナビをCarPayに対応させるため、この二つが候補になります。

{{<bg>}}

**Android USB CarPlay Dongle**<br>　　[http://carlinkit.com/productinfo/354763.html](http://carlinkit.com/productinfo/354763.html)

**Android Wireless CarPlay Dongle**<br>　　[http://carlinkit.com/productinfo/378738.html](http://carlinkit.com/productinfo/378738.html)

{{<bg-end>}}

名前の通り、1つ目は有線のCarPlayのみ、2つ目は無線のCarPlayに対応しています。また、日本のAmazonで買うと以下が正規品らしいです。

{{<bg>}}

**Android USB CarPlay Dongle**｜￥3,599<br>　　[https://amzn.to/38qlO2i](https://amzn.to/38qlO2i)

**Android Wireless CarPlay Dongle**｜￥9,999<br>　　[https://amzn.to/3q2r8yO](https://amzn.to/3q2r8yO)

{{<bg-end>}}

### MicroUSBとUSB-AのOTG対応アダプタを用意する

あとは適当にFireタブレットにドングルを接続するために、OTG対応のMicroUSBとUSB-Aのアダプタを用意します。

{{<bg>}}

**OTG対応のMicroUSBとUSB-Aのアダプタ**<br>　　[https://amzn.to/3nxAxww](https://amzn.to/3nxAxww)

{{<bg-end>}}

***

ただ、自分はロゴは入っていないとしても、どうせ中身は同じだろうという安易な考えで、ロゴが消された[怪しい方](https://amzn.to/2LjTu8T)を買ってみました。

![](../../../images/fire-carplay-0.jpg)

値段は￥5,299 と正規品の半額ですが、案の定しっかりとCarlinkitのロゴが入った商品が届き、ちゃんと動きました。

Amazonなら返品もできそうだし、チャレンジしてみる価値はあるかも。

{{<ad>}}

## AutoKitのダウンロード・インストール

ドングルをゲットしたら

{{<bg>}}

[http://121.40.123.198:8080/autokit/autokit.apk](http://121.40.123.198:8080/autokit/autokit.apk)

{{<bg-end>}}

Fireタブレットに標準でインストールされている<b>Silkブラウザ</b>を使って、上記のURLを開き、apkファイルをダウンロードします。

![](../../../images/fire-carplay-1.jpg)

ダウンロードした<b>autokit.apk</b>開きます。

![](../../../images/fire-carplay-2.jpg)

Fireタブレットでは、基本的に**Amazonアプリストア**からしかアプリのインストールができない設定になっているので、これから<b>不明なアプリのインストール</b>を許可するように設定を変更していきます。

![](../../../images/fire-carplay-3.jpg)

Silkブラウザからの<b>不明なアプリのインストール</b>を許可します。許可したら左上の矢印からインストール作業に戻ります。

![](../../../images/fire-carplay-4.jpg)

AutoKitをインストールしていきます。

![](../../../images/fire-carplay-5.jpg)

AutoKitを開くと、<b>ファイル,マイク,カメラへのアクセス許可</b>が求められると思うので許可します。

![](../../../images/Screenshot_20210110-003947_1.jpg)

## AutoKitとドングルのアップデート

これでAutoKitが使えるようになりました。次に左上の設定から<b>AutoKitを最新版にアップデート</b>します。

![](../../../images/Screenshot_20210110-020335-2.jpg)

設定の最下部から**アップデートを確認**を行います。

![](../../../images/Screenshot_20210110-020442-2.jpg)

アップデートがある場合は実行します。

![](../../../images/Screenshot_20210110-020508-2.jpg)

![](../../../images/Screenshot_20210110-020540.jpg)

![](../../../images/fire-carplay-5.jpg)



![きちんとCarlinkitのロゴ入り](../../../images/FullSizeRender.jpg)

## さいごに

最初はGoogleマップよりAppleマップの方が音声案内がわかりやすいと思うこともありましたが、ラベル機能がとても便利でやはりGoogleマップを使いがちです。