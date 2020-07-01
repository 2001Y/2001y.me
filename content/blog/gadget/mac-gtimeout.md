---
title: "[Mac]Automator等のシェルスクリプトでタイムアウトさせるgtimeout"
date: 2020-06-26T08:00:22+09:00
img: mac-gtimeout
categories: ["Gadget"]
tags: ["MacCommand","Mac","Automator","Homebrew"]
---

Automatorでシェルスクリプトをタイムアウトさせたくて、調べてみたらHomebrewでパッケージを追加する必要があったのでメモ。

<iframe style="width:100%;height:155px;margin:15px 0;max-width:680px;" src="https://hatenablog-parts.com/embed?url=https://stackoverflow.com/questions/3504945/timeout-command-on-mac-os-x" frameborder="0" scrolling="no"></iframe>

## Coreutilsを追加して、gtimeout

### [Homebrew](https://brew.sh/index_ja) インストール<span> （一応</span>

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

### Coreutils インストール

```sh
brew install coreutils
```

### 使い方

```shell
gtimeout 秒数 コマンド
```

***

しっかり10秒で止まってる。

```shell
gtimeout 10 ping google.com
```

![](../../../images/mac-gtimeout-1.jpg)