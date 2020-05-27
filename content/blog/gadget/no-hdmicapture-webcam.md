---
title: HDMIキャプチャなしでX-T3をWebカメラ化する！
date: 2020-05-24T08:00:22+09:00
img: no-hdmicapture-webcam
categories: ["Gadget"]
tags: ["FUJIFILM","X-T3","Camera","Mac","アプリ"]
---

SIGMA fpがUSB-Cのケーブル1本でWebカメラ化するのが流行っています。確かに、せっかくカメラがあるんだから、ビデオ通話でもカメラを使いたい！

しかし、ぼくのカメラはFUJIFILMのX-T3です。X-T3をWebカメラ化できないかと調べると、やはりHDMIキャプチャを買うしかない模様...。

と思っていたところ、**CamTwist**と**Camera Live**を使うことでMacとX-T3をUSB-Cで繋ぐだけでWebカメラ化できました。

<iframe style="width:120px;height:240px;" marginwidth="0" marginheight="0" scrolling="no" frameborder="0" src="//rcm-fe.amazon-adsystem.com/e/cm?lt1=_blank&bc1=FFFFFF&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=y2001920t-22&language=ja_JP&o=9&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B01NBKP6GC&linkId=00b0cb1cee373e22b8d4fcb0a3377a57"></iframe>

## Camera Live

ダウンロード▶︎[CameraLive](https://github.com/v002/v002-Camera-Live/releases)

このCameraLiveがカメラのテザー撮影用の映像(?)を取得してくれます。基本的にはCanonしか対応してないようなのですが、他社製カメラも多くが使えSONYのα7なども利用できるようです。

![Camera Live](../../../images/Capture_2020-05-25 1.47.16.jpg)

## CamTwist

ダウンロード▶︎ [CamTwist](http://camtwiststudio.com)

CamTwistではCameraLiveで読み込んだ映像(?)を仮想カメラとして出力します。これによってZoomなどでCamTwistを選択することができるようになる！

![CamTwist](../../../images/Capture_2020-05-25_1_47_14.jpg)