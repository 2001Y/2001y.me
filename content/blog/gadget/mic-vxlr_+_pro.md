---
title: "Rode VXLRの無印,+,Proの比較"
date: 2020-07-24T08:00:22+09:00
categories: ["Gadget"]
tags: ["Mac"]
---



クラムシェルのMacbookProをeGPU経由でモニタに繋いで使っているため、既に持っていたショットガンマイクaudio-technicaの[AT9944](https://amzn.to/3vQ5noH)をMacのマイクとして使ってます。

ただ、ZoomやLINE通話をしているとどうしても音量が小さい。

入力レベルをMaxにしても小さい。

そこでマイクアンプであるaudio-technicaの[AT-MA2](https://amzn.to/2R1G58k)を買おうと思いました。でも、Macに繋ぐケーブルはThunderbolt1本にしたいのでeGPUのUSBポート経由で接続したい。AT-MA2はただのアンプなので出力は3.5mmプラグ(ミニプラグ)。

今使ってる[SB-PLAY3](https://amzn.to/3xYtOlG)経由で繋いでもいいのですが、せっかくなら今後のことも考えてただのマイクアンプではなく、XLR端子の使えるUSBオーディオインターフェイスにしてしまおうということで5000円未満のオーディオインターフェイス、[BEHRINGERのUM2](https://www.soundhouse.co.jp/products/detail/item/186277/)を導入してみました。

SB-PLAY3もUM2も24bit/48kHzまでなので音質的に変化はなさそう。

追記：[公式サイト](https://www.electori-br.jp/products/461.html)を確認したところUM2は16bit/48kHzだったぽい。詳しいことはわからないけど人の聴こえる限界的に24bitでいいと聞いたことがあるから24bitがよかった...。

{{<ad>}}

### ところが、AT9944は3.5mmプラグでプラグインパワー方式

AT9944は3.5mmプラグなので、`3.5mmTRS - 6.3mmTRS(標準)`のアダプタを用意したのですが、うまく動かない。

おそらく電源の問題で、AT9944はプラグインパワー対応。

ただ、UM2はファンタム電源対応だけどプラグインパワーには非対応。

なので、`XLR(ファンタム) - 3.5mmTRS(プラグインパワー)`のアダプタが必要ということでRode VXLRシリーズと比較メモ。

## Rode VXLRの無印,+,Proの比較

| 商品名                                                       | 値段                | 機能                                                         |
| ------------------------------------------------------------ | ------------------- | ------------------------------------------------------------ |
| [VXLR](https://amzn.to/3trMcQx)                              | ￥1,291（Amazon）   | 3.5mmTRS - XLR                                               |
| [VXLR +](https://amzn.to/3nZIuN9)                            | ￥3,500（Amazon）   | 3.5mmTRS - XLR<br />**ファンタム(12-48V) - プラグインパワー(3-5V)<br />3.5mmTRSロック機構** |
| [VXLR Pro](https://www.yodobashi.com/product/100000001006008658/) | ￥6,270（ヨドバシ） | 3.5mmTRS- XLR<br />ファンタム(12-48V) - プラグインパワー(3-5V)<br />3.5mmTRSロック機構<br />**アンバランス信号 - バランス信号**<br />ハンドグリップ型ショックマウントPG2-R対応 |

VXLR(無印)はファンタム変換未対応なので、選択肢は VXLR+ / VXLR Pro 。

違いはバランス変換の有無ですが、XLRは3端子あるので XLR=バランス伝送 らしく、AT9944はTRSでモノラルなのでおそらくバランス伝送...？わからないですが、アダプタに6,000円もかけられないので VXLR+ になりました。

あとSoundHouseには`48V→5Vのコンバート機能付き`と書かれていて VXLR+ と同スペックなのに2,000円未満で購入できるBOYAの[35C-XLR](https://www.soundhouse.co.jp/products/detail/item/278722/)ですが、[公式サイト](http://www.boya-mic.com/otheraccessories/848.html)にはそのようなことは書かれていなかったので、VXLR+を買ってみたいと思います。

