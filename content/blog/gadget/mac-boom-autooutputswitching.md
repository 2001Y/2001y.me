---
title: "[Mac]ディスプレイに繋ぐと自動的に出力先が変わって通知音が出なくなるのはBoomのせいだった..."
date: 2020-08-20T02:00:22+09:00
img: mac-boom-autooutputswitching
categories: ["Gadget"]
tags: ["Topic","Mac"]
---

今、家ではMacBookPro13(2019)をeGPU経由でLGの[27UL600-W](https://amzn.to/2Q8pRWS)にDisplayPortで繋いで、クラムシェルで作業をしています。eGPUの記事もネットに情報が少なめなのでそのうち書きたいと思ってるんですが、ずっと悩んでたのが**『ディスプレイに繋ぐと通知音が聞こえなくて、通知に気づかない！！』**ことでした。

理由は明確で音の出力がスピーカーのないディスプレイになっているから。

でもいくら直しても、Macを繋ぎ直したり、スリープ解除するとすぐ元に戻ってしまう。通知だけ出力先を変える方法などを調べたりしてたんですが、

原因は[Boom](https://www.globaldelight.com/boom/)というイコライザをいじって体感の音質？を上げてくれるアプリのせいでした...。

{{<ad>}}

## Boomの音声出力を自動的に切り替える項目をOFFにする

Boomの環境設定を開き **接続時に外部ディスプレイの音声出力に自動的に切り替えます** をOFFにします。

![](../../../images/mac-boom-autooutputswitching-1.jpg)

そしたら、これで勝手に音声の出力先が変わることはなくなったので、Boomの出力先をMac内蔵のスピーカーに変えておきます。

![](../../../images/mac-boom-autooutputswitching-2.jpg)

***

まさかBoomが悪さをしてるとは思ってなかった...でも、新しいMacは音いいからBoomなしでもいいかも。BoomはAir2015時代には愛用してた。

あと、通知音で画像点滅させるやつが機能してない気がするんだけど、なんなんだろ。

![](../../../images/mac-boom-autooutputswitching-3.jpg)