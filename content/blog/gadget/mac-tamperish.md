---
title: "[MacApp]Safari13でもカスタムCSS(UserStylu)が使える拡張機能Tamperish"
date: 2020-06-30T08:00:22+09:00
img: mac-tamperish
categories: ["Gadget"]
tags: ["Safari拡張機能","MacApp","Mac"]
---

Safari12,13から .safariextz が利用できなくなり、広告ブロックなどはAppStoreにもいくつかあるのですが、UserScriptにしてTampermonkeyで読み込むことはできますが、カスタムCSSが使えなくて困っていました。

この前、AppStoreからインストールできるカスタムCSS拡張機能ががあったのでメモ。

## カスタムCSS,JSを使えるTamperish

説明欄によるとUserScriptも使うことができるようなのですが、UserScriptはインストール時に自動推移してくれるTampermonkeyの方が良さそう。

{{<blogcard url="https://apps.apple.com/jp/app/tamperish-for-safari/id1516885392">}}

### 設定方法

**Change** からCSSのファイルの入っているフォルダを指定することで利用できます。

![](../../../images/btt-touchbar-cpu-1.jpg)

#### サイト別の指定はできなさそう

URLやドメイン指定によるカスタムCSSの追加ができませんでした。全てのサイトでシンプルにCSSファイルを読み込んでいるのだと考えると、Safariでは `@document domain` が非対応（というかFirefoxだけの実験機能）だからかもしれません。

なのでそのサイト特有のidやclassで指定してあげる必要がありそうです。

***

WWDC20でChromeなどの拡張機能をSafariに移行できるようになるようで、非常に楽しみ。いろいろ試しても結局、Safariメインになってる。