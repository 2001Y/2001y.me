---
title: "Lightroom用に買ったArturia BeatStepのノブの挙動がおかしい時"
date: 2021-04-27T09:00:22+09:00
categories: ["Camera"]
tag: ["Lightroom"]
---

Lightroomでの現像を手軽にしようと思い、MIDIコントローラーである Arturia BeatStep を購入して設定していたのですが、ノブの挙動がおかしくて、設定を変えたらよくなったのでメモ。

{{<ad>}}

## MIDI Control Center と BeatStep の同期

[Arturia Software Center](https://www.arturia.com/v-collection/asc) から MIDI Control Center をインストール。

BeatStep を繋いで、MIDI Control Center を起動しただけでは設定が同期されないようなので、<b>サイドバー上のDEVICEが BeatStep になっていることを確認したら、`Sync`ボタンをクリックして同期を開始。</b>

![](../../../images/LRctrl-beatstep-padvelocitycurve-1.jpg)

## ノブの設定を相対値に変更

`Sync`ボタンがブルーになっていることを確認したら、任意の<b>ノブを選択した上で Knob XX のOptionの値を`Relative #1`に変更。</b>変更した時、サイドバー上の上矢印がオレンジに光ることを確認したら設定完了。

![](../../../images/LRctrl-beatstep-relative1-1.jpg)

## MIDI2LRの設定も相対値に変更

MIDI2LRの<b>適当なLRコマンドの上で右クリックをする</b>とCCダイアログの調整ができるので、`バイナリオフセット`を選択して`すべてに適用`。

解像度はノブの感度であり、数字が大きくなるよより細かな操作が可能になる。

![](../../../images/LRctrl-beatstep-relative1-2.jpg)

source: http://junaimaru.blog.fc2.com/blog-entry-290.html