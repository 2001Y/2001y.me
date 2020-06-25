---
title: "[Hugo]urlize：カテゴリ,タグなど、のテキストを小文字化"
date: 2020-06-24T8:00:22+09:00
img: hugo-urlize
categories: ["Web"]
tags: ["Hugo","ブログ","Web"]

---

## | urlize を加えて小文字化

Hugoでブログを作っている時、カテゴリやタグなど、テキストを全て小文字に統一したい時は urlize を加えれば良い。

```html
<!-- before -->
{{ range .Params.categories }}{{ . }}{{ end }}
```

```html
<!-- after -->
{{ range .Params.categories }}{{ . | urlize }}{{ end }}
```

