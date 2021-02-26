---
title: "[Hugo]pタグで括らずにHTML直書きするショートコード"
date: 2021-02-26T4:00:22+09:00
categories: ["Web"]
tags: ["Hugo","HugoShortCode"]

---

imgタグをpタグで囲むのか論争もありますが、Hugoを使っているとたまにpタグで括られるのが嫌な場面があります。そんな時用のショートコード。

{{<ad>}}

## pタグで括らずにHTML直書きするショートコード

### /shortcodes/md.html

```html
{{ .Inner | markdownify }}
```

## 使い方

```html
{{</* md */>}}
  <iframe src="https://example.com"></iframe>
{{</* /md */>}}
```





```html
・・・
</p>
<iframe src="https://example.com"></iframe>
<p>
・・・
```

