---
title: "[Hugo]記事が属するセクションの最新記事を取得する"
date: 2021-01-25T02:00:22+09:00
categories: ["Web"]
tags: ["Hugo"]
---

このブログはHugoで作成しており、記事のカテゴリ分けをSectionを用いて行っています。賛否分かれそうですが、URLの階層をいじることで全てのページにアクセスできるという点からこの構造にしています。

{{<ad>}}

## 記事が属するセクションの最新記事を表示する

ぼくのブログの、<b>同じカテゴリのリスト</b>を表示させるためには、記事が属するセクションのリストを取得する必要があります。

#### single.html

```html
{{ with .CurrentSection }}
  <ul>
    {{ range first 3 .Pages }}
      <li><a href="{{ .RelPermalink }}">{{ .Title }}</a>
    {{ end }}
  </ul>
{{ end }}
```


