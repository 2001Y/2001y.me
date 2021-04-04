---
title: "[VSCode]Pugでtabを使えるように"
date: 2021-04-05T00:00:22+09:00
categories: ["Web"]
tags: ["VSCode"]
---

今までHugoしかSSGは触ったことがありませんでした。

Hugoでは画像のWebp変換やStylusに対応していない部分に困っていたので、今回11tyと言うSSGを試しに使ってみています。

HugoでもGulp経由でStylusを使っていたのですが、Pugを使うのは初めてで<b>VScodeでtabがうまく機能しなくて</b>戸惑ったのでメモ。

追記：11tyもStylusには対応してませんでした...[20ful](https://github.com/punund/20ful)とかしかないみたい...

{{<ad>}}

## settings.jsonに言語別の指定を加える

VScodeのsettings.jsonを開き（[→開き方](https://2001y.me/blog/web/vscode-settingsjson/)）、以下の5行を加えます。

```json
・・・・

  "[jade]": {
    "editor.detectIndentation": false,
    "editor.insertSpaces": true,
    "editor.tabSize": 1
  }

}
```

<small>source: https://stackoverflow.com/questions/52908720/how-to-select-tab-size-in-visual-code-studio-for-pug-lang</small>