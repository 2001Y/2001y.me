---
title: "[Mac,Win,Linux]無料で容量無制限のファイル共有がサーバーレスでできるPartyshare"
date: 2020-07-20T00:00:22+09:00
img: partyshare
categories: ["Gadget"]
tags: ["XnConvert","MacApp","Mac"]
draft: true
---

[GSuiteを個人でも無制限に利用できる](https://2001y.me/blog/gadget/gsuite-unlimit/)ことがわかったので、GoogleDriveをメインに使っています。[GoogleDriveFileStream](https://2001y.me/blog?s=GoogleDriveFileStream)を使っているので本体容量も気にしないで使えるので、簡単なファイル共有でもGoogleDriveを使っています。

でも、大きなファイルを扱うときなどはGoogleDriveにアップロードするのも時間がかかってしまうので、大容量のファイルを共有する時などに使えそうです。

## Partyshare

{{<blogcard url="https://busterlabs.github.io/Partyshare/">}}

[IPFS](https://ipfs.io)というを使っているらしく、P2Pのプロトコルの1つみたい...？

> IPFSは同じファイルシステムである全てのコンピューターへの接続を試みるP2P分散ファイルシステムである。複数の点で、IPFSはWebと共通点があるが、IPFSは単一のBitTorrentスウォームのように1つのGitリポジトリの中でオブジェクトを交換することが出来る。　ー [Wikipedia](https://ja.wikipedia.org/wiki/InterPlanetary_File_System)

### Partyshareの使い方

Partyshareはメニューバーのみで動作する常駐アプリ。

![](../../../images/partyshare-1.jpg)

右上のアイコンからPartyshareフォルダに移動して、ファイルを追加。

![](../../../images/partyshare-2.jpg)

実際にファイルのリンクをコピーすると以下のようなURLが取得でき、シェアすると直リンクとして動作する。

```html
https://gateway.ipfs.io/ipfs/固有ID/ファイル名
```

ファイルはフォルダから消去すれば共有は解除される。しかし、キャッシュの問題なのか手元のファイルでは、消去後もアクセスすることは可能だった。

***

P2P

▶︎ [BusterLabs/Partyshare: A free, open source file sharing application, built on the peer-to-peer hypermedia protocol IPFS. - GitHub](https://github.com/BusterLabs/Partyshare)

▶︎ [Partyshare - IPFSを使って簡単にファイル共有 MOONGIFT](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiui92o5PLqAhUpGKYKHUyxCGgQFjAAegQIBBAB&url=https%3A%2F%2Fwww.moongift.jp%2F2019%2F03%2Fpartyshare-ipfs%E3%82%92%E4%BD%BF%E3%81%A3%E3%81%A6%E7%B0%A1%E5%8D%98%E3%81%AB%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB%E5%85%B1%E6%9C%89%2F&usg=AOvVaw0sIcM2tWMWWJijYqIGBmu_)