---
title: "OSも仮想ソフトも、大学生なら完全無料でMacでWindows10を同時に使える"
date: 2020-09-29T01:00:22+09:00
categories: ["Gadget"]
tags: ["Win10","Mac"]
---

新しいMacになりWindowsを使う機会もなかったので、特に仮想環境を作っていなかったのですが、VMwareFusion の[個人利用が無料になった](https://2001y.me/blog/gadget/mac-vmwarefusion-player/)ということで、Windows10 Education を使って完全無料で快適な仮想環境を作ってみました。

{{<ad>}}

## OSも仮想ソフトも無料でMacでWindows10を同時利用

### Windows10 Education

学生だと様々なサービス（有料サービスを含め）を無料で利用できちゃう Microsoft Azure for Students（Microsoft Imagineの一部？）に登録します。

https://signup.azure.com/studentverification

電話番号による確認を終えたら、大学のメールアドレスか確認コードを用いて<b>学生の確認</b>を行います。

![](../../../images/mac-students-allfree-win10-2.jpg)

ソフトウェアへ移動し`Windows 10 Education`と検索しライセンスを取得します。検索の時、`10`の前後のスペースがないと引っかかりません。

![](../../../images/mac-students-allfree-win10-3.jpg)

### VMware FusionPlayer

#### ダウンロード手順

{{<blogcard url="https://2001y.me/blog/gadget/mac-vmwarefusion-player/">}}

#### インストール手順

Parallelsしか使ったことなかったのですが、Fusion も簡易インストールを使えばWin10の初期設定をせずにセットアップできてとても手軽でした。

![](../../../images/mac-students-allfree-win10-1.jpg)

実はプロダクトキーを取得する前にWin10をインストールしたので、[スキッププロダクトキー](https://answers.microsoft.com/ja-jp/insider/forum/insider_wintp-insider_install/windows-10-insider-preview/86173780-0ffc-4d68-b827-f041e29a2927)を使ってセットアップしました。普通は先ほど取得したキーを入力すればok。

```html
スキッププロダクトキー
Windows10 Home: TX9XD-98N7V-6WMQ6-BX7FG-H8Q99
Windows10 Pro : VK7JG-NPHTM-C97JM-9MPGT-3V66T
```

後から先ほどのプロダクトキーを使ってライセンス認証しました。これで、完全無料でちゃんとしたWindows10の仮想環境が整いました。

![](../../../images/mac-students-allfree-win10-4.jpg)

***

高校生の時にずっと試してみたかった、Windows 10 Education を試すことができてよかったです。これ大学卒業したらどうなるんだろ...？