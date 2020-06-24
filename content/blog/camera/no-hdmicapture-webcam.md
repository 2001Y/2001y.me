---
title: "[Mac]HDMIキャプチャボードなしでFujiFilmのX-T3をWebカメラ化"
date: 2020-05-24T08:00:22+09:00
img: no-hdmicapture-webcam
categories: ["Camera"]
tag: ["FUJIFILM","X-T3","Camera","Mac","アプリ"]
---

SIGMA fpがUSB-Cのケーブル1本でWebカメラ化するのが流行っています。確かに、せっかくカメラがあるんだから、ビデオ通話でもカメラを使いたい！

しかし、ぼくのカメラはFUJIFILMのX-T3です。X-T3をWebカメラ化できないかと調べると、やはり[HDMIキャプチャ](https://amzn.to/2YXLpK8)を買うしかない模様...。

## FUJIFILMのカメラでもWebカメラ化できた！

と思っていたところ、**CamTwist**と**Camera Live**を使うことでMacとX-T3をUSB-Cで繋ぐだけでWebカメラ化できました。

### Camera Live

ダウンロード▶︎[CameraLive](https://github.com/v002/v002-Camera-Live/releases)

このCameraLiveがカメラのテザー撮影用の映像(?)を取得してくれます。基本的にはCanonしか対応してないようなのですが、他社製カメラも多くが使えSONYのα7なども利用できるようです。

![ちゃんとX-T3をクリックしてあげないと有効にならない](../../../images/no-hdmicapture-webcam-1.jpg)

### CamTwist

ダウンロード▶︎[CamTwist](http://camtwiststudio.com)

CamTwistではCameraLiveで読み込んだ映像(?)を仮想カメラとして出力します。これによってZoomなどでCamTwistを選択することができるようになる！

#### 　設定方法

Step1 の`Syphon` を選択（❶）して、追加（❷）。

Settings の `SyphonServer` は `CameraLive` に設定（❸）。

![Setp3の Autoload にしておくと、起動時に自動適応される](../../../images/no-hdmicapture-webcam-2.jpg)

## カメラ設定

設定を変更しても、認識されない場合が多々あるので、ケーブルを挿し直したり、カメラを再起動してあげると良さそう。

### 接続モードはテザー

接続モードはテザー（自動と固定はなんでも良さそう...？）

![セットアップ(レンチマーク) ＞ 接続設定 ＞ 接続モード](../../../images/no-hdmicapture-webcam-3.jpg)

### AFさせるためには

プリAFをONにすることでAFさせることができました。広角のレンズが欲しくなってしまう...。

![フォーカス設定(AF/MF) ＞ プリAF](../../../images/no-hdmicapture-webcam-4.jpg)

## 追記：Windowsは公式でツールが公開されました

<iframe style="width:100%;height:155px;margin:15px 0;max-width:680px;" src="https://hatenablog-parts.com/embed?url=https://fujifilm-x.com/ja-jp/support/download/software/x-webcam/" frameborder="0" scrolling="no"></iframe>

Windowsようには公式からツールが公開されました。（Mac版も2020年7月後半に公開されるという記事をどこかで見たきがする...？）