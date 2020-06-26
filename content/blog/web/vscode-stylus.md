---
title: "[VSCode拡張機能]Stylusを使えるように（コロン:有無など） - language-stylus"
date: 2020-06-26T08:00:22+09:00
img: vscode-stylus
categories: ["Web"]
tags: ["ブログ","Web","Blog","VSCode"]
---

SublimeからVSVodeに移行しているので、VSCodeでStylusを使うためメモ。あと、せっかくStylusを使っているのでコロン(:)使わない方向性です。

## 基本的に language-stylus だけで完結

VSCodeを使っているうちにSublimeがエラーが出るようになって、使えなくなってしまったので、忘れましたが基本的に、VSCodeでStylusを使うためには **language-stylus** を入れるだけで良さそう。

<iframe style="width:100%;height:155px;margin:15px 0;max-width:680px;" src="https://hatenablog-parts.com/embed?url=https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus" frameborder="0" scrolling="no"></iframe>

他にもStylusの拡張機能もあるけど、ダウンロード数や更新数的に **language-stylus** が良さそう。[live-stylus](https://marketplace.visualstudio.com/items?itemName=ajanuw.live-stylus)という拡張機能もあり、コンパイルまでできるかと思いきや、うまく動かなそう。

### 設定：コロン（:）なしのStylusにしたい

デフォルトではコロンありの補完になってしまうので、コロンなしにするためにVCCodeの setting.json に設定を追加する。

```json
// プロパティと値の間の区切りに':'の使用
"languageStylus.useSeparator": false,
// 自動補完のStylus内蔵機能の一致を切り替える・EN: Toggle matches for Stylus Builtin Functions on autocomplete
"languageStylus.useBuiltinFunctions": true,
// カラープレビューの表示
"editor.colorDecorators": true,
```

#### setting.jsonの開き方

<iframe style="width:100%;height:155px;margin:15px 0;max-width:680px;" src="https://hatenablog-parts.com/embed?url=https://2001y.me/blog/web/vscode-settingsjson/" frameborder="0" scrolling="no"></iframe>