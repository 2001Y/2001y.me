---
title: "[Hugo]/public/Iconのエラー解決"
date: 2021-01-31T00:00:22+09:00
categories: ["Web"]
tags: ["Web","PWA","サイト","iOS"]

---

新しいサイトをHugoで作成し、NetlifyにBuildした際に思わぬところでエラーが発生していたのでメモ。

{{<ad>}}

## Netlifyで出たエラー

NetlifyのDeploy logを見てみるとこのようなエラーが出ました。

ただ、ローカルで`hugo server`で確認してみてもエラーは発生せず。なので、`hugo server`ではなく`hugo`で実際にビルドしてみたところ同じエラーが。

```sh
            1. build.command from netlify.toml                            
1:25:38 AM: ────────────────────────────────────────────────────────────────
1:25:38 AM: ​
1:25:38 AM: $ hugo --gc --minify
1:25:38 AM: Start building sites …
1:25:38 AM: Total in 14 ms
1:25:38 AM: Error: Error building site: process: readAndProcessContent: open /opt/build/repo/public/Icon
```

***

原因はMacのフォルダアイコンを変更した際に生成される`Icon?`ファイルでした。

![](../../../images/hugo-error-icon-1.jpg)

わざわざアイコンを変えたわけではなく、Hugoのプロジェクトファイル自体をGoogleドライブで共有していたのが原因でした。

Googleドライブでフォルダ共有をするとフォルダアイコンに人のシルエットが追加されます。これによって各フォルダに`Icon?`ファイルが生成されていたということです。

![](../../../images/hugo-error-icon-2.jpg)

プロジェクトフォルダに共有設定をするとその下階層のフォルダにも`Icon?`ファイルが追加されるので、検索して一括で消した方が確実です。

![](../../../images/hugo-error-icon-3.jpg)