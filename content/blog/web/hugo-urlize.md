---
title: "[Hugo]urlize：カテゴリ,タグなど、すべて小文字化"
date: 2020-06-24T8:00:22+09:00
img: hugo-urlize
categories: ["Web"]
tags: ["Hugo","ブログ","Web"]

---

## | urlize を加えて小文字化

Hugoでブログを作っている時、カテゴリやタグなど全て小文字に統一したい時。

```html
# before
{{ range .Params.categories }}{{ . }}{{ end }}
```

```html
# after
{{ range .Params.categories }}{{ . | urlize }}{{ end }}urlize
```

