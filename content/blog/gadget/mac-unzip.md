---
title: "[Mac]展開できないZipを無理やり展開するコマンドunzip"
date: 2020-07-24T08:00:22+09:00
img: mac-unzip
categories: ["Gadget"]
tags: ["MacCommand","Mac","ターミナル","シェルスクリプト"]
---

Zipを展開すると以下のようなアラートが表示される場合があります。そこで、`unzip`コマンドを使うことで展開することができます。パワポなどのOfficeを無理やりZipとして展開して画像などの元データが欲しい時もこの方法を使います。

!["ZIP.zip"を展開できません。対応していないフォーマットです。](../../../images/mac-unzip-1.jpg)

## unzip コマンド

unzipに続けて半角スペースを開けて対象のzipファイルのパスを指定して、次に展開先のフォルダを指定します。

```sh
unzip 必要であればオプション ZIPファイル -d 展開先のフォルダ
```

展開先には中身が全てぶちまけられるので、Zip内にフォルダがないことも考えて**展開先のフォルダ**を新しく作っておくのが良さそう。

オプションの設定は[この記事](https://www.atmarkit.co.jp/ait/articles/1607/26/news014.html)が参考になりそう。

### エラー：caution: filename not matched:

上記のコマンドで`caution: filename not matched:`というエラーが出る場合、は`-d`を忘れてることが多い。`cd`で別々に指定しても良い。

```sh
cd 展開先のフォルダ
unzip ZIPファイル
```

***

`-d`オプションを本当に毎回忘れてしまう。。