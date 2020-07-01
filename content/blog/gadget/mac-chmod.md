---
title: "[Mac]ファイルに実行権限を与えるコマンドchmod"
date: 2020-06-27T00:00:22+09:00
img: mac-chmod
categories: ["Gadget"]
tags: ["MacCommand","Mac","ターミナル","シェルスクリプト"]
---

.commandファイルを実行するためには、実行権限を与えないとコマンドを実行することができない。すぐ忘れるのでメモ。

![適切なアクセス権限がないため実行できません。と表示されてしまう](../../../images/mac-chmod-1.jpg)

## ファイルに実行権限を与えたいとき

### chmod コマンド

```shell
chmod u+x ファイルパス
```

u+x で "所有者に実行権限" を与えている。他のユーザーや権限は以下の記事が参考になりそう。

<iframe style="width:100%;height:155px;margin:15px 0;max-width:680px;" src="https://hatenablog-parts.com/embed?url=https://qiita.com/ntkgcj/items/6450e25c5564ccaa1b95" frameborder="0" scrolling="no"></iframe>