---
title: "[Hugo]HTMLをpタグで括らずに直書きするショートコード"
date: 2021-02-26T8:00:22+09:00
categories: ["Web"]
tags: ["Hugo","HugoShortCode"]
draft: true

---

{{<ad>}}



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

