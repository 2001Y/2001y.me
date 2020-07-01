---
title: "GoogleDriveFileStreamでRightFont使える！（多分）"
date: 2020-07-02T00:00:22+09:00
img: gdfs-rightfont
categories: ["Gadget"]
tags: ["GSuite","GoogleDrive","GoogleDriveFileStream","Google","Mac"]
---

RightFontはクラウド同期を売りにしていて、Dropboxなどの任意のクラウド経由でフォントを同期することができます。

折角GSuite加入したんだから、RightFontもGoogleDriveFileStreamで同期したい。

しかし、うまく動かなかった。もちろん、GoogleDriveFileStreamではなく、**"バックアップと同期"** を使えば同期はできました。

でも、GSuiteに入ったのは本体容量が少なくて、GoogleDriveFileStreamを使いたいから。なんとかして、GoogleDriveFileStreamで同期したかった。

## 多分、GoogleDriveFileStreamでRightFontが使える！

![](../../../images/gdfs-rightfont-1.jpg)

何かの拍子に[RightFontのアップデート履歴](https%3A%2F%2Frightfontapp.com%2Fupdates%23%3A~%3Atext%3DGoogle%20Drive%20File%20Stream%20app)を開いていて（なぜかは忘れた）、そこでGoogleDriveFileStreamを検索したら、**バグ修正している？！**

修正しているということはGoogleDriveFileStreamに対応しているということ...。

### RightFont内でライブラリを移動させれば普通にできた...

![](../../../images/gdfs-rightfont-2.jpg)

RightFontのアップデートを一応確認してから、RightFont内のライブラリ移動機能でGoogleDriveFileStreamに移動させました。

RightFontのライブラリ移動機能はファイルを順々にコピーして行って、完了した時点で元のファイルを消去する動きをするので、ローカルのライブラリファイルを確認していると...**ん？！普通に動いてる？！**

RightFontのアプデのおかげなのか、何かこちらに原因があったのか分かりませんが、普通に動きました...。

なんだったんだろ...まぁいいかっ。

***

GSuiteに加入してから、僕の中でどれだけの物をGoogleDriveに移せるか大会が始まっています(笑) ネットにあまり情報がなくて手探り状態ですが、GoogleDriveFileStreamなかなか最高😋