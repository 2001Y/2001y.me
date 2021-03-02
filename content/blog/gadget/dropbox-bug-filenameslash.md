---
title: "MacのDropBoxで作ったフォルダがWindowsに同期されない"
date: 2021-03-03T00:00:22+09:00
categories: ["Gadget"]
tags: ["DropBox","Mac"]
---

{{<ad>}}

<b>職場のWindowsPCでDropBoxのフォルダだけ同期されない。</b>と言う相談を受けて調べてみたところ、DropBoxはスラッシュなどの特殊文字が含まれているファイル/フォルダは同期されないそう。

ただ、<b>どのオペレーティング システムとも互換性がありません。</b>と書いてあるが、一応Macからのアップロードには対応してる模様。

## MacのDropBoxで作ったフォルダがWindowsに同期されない

### 症状

- MacのDropBoxで作ったフォルダがWindowsに同期されない
- iPhoneからやWebからは確認できるためDropBox自体には上がっている

### 原因：ファイル名にスラッシュが含まれていた

> ### 9. ファイル名を確認しましたか？
>
> ファイル名に未対応の文字が含まれているファイルは同期されません。同期エラーが発生しているファイルの名前に含まれている文字を確認してください。
>
> - 次の特殊文字を含むファイル名は、どのオペレーティング システムとも互換性がありません。
>   - 「/（フォワード スラッシュ）」、「\ （バック スラッシュ）」
> - 次の特殊文字を含むファイル名は Windows と互換性がありません。
>   - 「<（より小記号）」、「>（より大記号）」、「:（コロン）」、「“ ”（引用符）」、「|（縦線）」、「?（クエスチョン マーク）」、「*（アスタリスク）」
> - 特定の言語固有の文字列に対応していないオペレーティング システムもあります。
> - Mac や Windows のパソコン、Excel スプレッドシートには[特定のファイル名の文字数制限](https://help.dropbox.com/ja-jp/installs-integrations/sync-uploads/files-not-syncing)があります。

source:[Dropbox が更新されない | 同期問題を解決する | Dropbox ヘルプ](https://help.dropbox.com/ja-jp/installs-integrations/sync-uploads/files-update-issues)