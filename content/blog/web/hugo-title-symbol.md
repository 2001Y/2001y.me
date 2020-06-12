---
title: Hugoでタイトルに記号（[）が使えない時
date: 2020-06-12T10:00:22+09:00
img: hugo-title-symbol
categories: ["Web"]
tags: ["Hugo","ブログ"]

---

このブログはHugoで作成していますが、前回の記事を書くときに`[]`を使おうとするとエラーが出てしまっていました。

### エラーコード

```yaml
Error: Error building site:
 "記事パス": failed to unmarshal YAML: yaml: found character that cannot start any token
```

おそらく、タグの複数指定するときに使う配列と認識されてしまったのかな...。

## タイトルを " でくくる

```yaml
# NG
title: [Mac]GoogleDriveFileStreamがマウントされない時
date: 2020-06-12T08:00:22+09:00
```

```yaml
# OK タイトル全体を"でくくる
title: "[Mac]GoogleDriveFileStreamがマウントされない時"
date: 2020-06-12T08:00:22+09:00
```

タイトル全体を `""` でくくると、エラーを吐かずに記号を使うことができました。本来はくくるべきなのかも。

