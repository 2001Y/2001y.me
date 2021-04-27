---
title: "Lightroom用に買ったArturia BeatStepのパッドが反応しない時"
date: 2021-04-27T08:00:22+09:00
categories: ["Camera"]
tag: ["Lightroom"]
---

Lightroomでの現像を手軽にしようと思い、MIDIコントローラーである Arturia BeatStep を購入して設定していたのですが、どうにもパッド部分の反応が悪くて、設定を変えたらよくなったのでメモ。

ただ、どちらにせよMIDIコントローラーに触れたことすらない自分のような人は<b>パッドは叩くもの</b>という意識を持ったほうがいいかもしれない。

{{<ad>}}

## MIDI Control Center と BeatStep の同期

BeatStep をUSBで繋いだら、[Arturia Software Center](https://www.arturia.com/v-collection/asc) から MIDI Control Center をインストール。

BeatStep を繋いで、MIDI Control Center を起動しただけでは設定が同期されないようなので、<b>サイドバー上のDEVICEが BeatStep になっていることを確認したら、`Sync`ボタンをクリックして同期を開始。</b>

![](../../../images/LRctrl-beatstep-padvelocitycurve.jpg)

## パッドの感度を変更

`Sync`ボタンがブルーになっていることを確認したら、<b>Projectタブに移動したら、Pad Velocity Curve の値を Full に。</b>変更した時、サイドバー上の上矢印がオレンジに光ることを確認したら設定完了。

![](../../../images/LRctrl-beatstep-padvelocitycurve-2.jpg)

