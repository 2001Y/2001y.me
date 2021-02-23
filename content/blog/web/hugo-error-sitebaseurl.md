---
title: '[Hugo].Site.BaseURLがhttps:\/\/となる解決策'
date: 2021-02-24T0:00:22+09:00
categories: ["Web"]
tags: ["Hugo"]
---

HugoでJSON-LD構造化データを作っている時、`{{ .Site.BaseURL }}`が`https:\/\/example.com`と出力されてしまい少し手こずったのでメモ。

`{{ .Site.BaseURL | safeURL }}`でもうまくいかない。

{{<ad>}}

## `.Site.BaseURL` が `https:\/\/` となる

#### ダメなコード

```js
<script type=application/ld+json>
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "{{ .Site.BaseURL }}", //--> "https:\/\/example.com/"
    "logo": "{{ .Site.BaseURL }}logo.jpg" //--> "https:\/\/example.com/logo.jpg"
  }
</script>
```

#### うまくいくコード

```js
<script type=application/ld+json>
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "url": {{ .Site.BaseURL }}, //--> "https://example.com/"
      "logo": {{ add .Site.BaseURL "logo.jpg"  }} //--> "https://example.com/logo.jpg"
    }
</script>
```

`{{ .Site.BaseURL }}`を`"ダブルコーテーション"`で括ってはいけないみたい。出力されるHTMLにはきちんと`"ダブルコーテーション"`がつけられる。

`.Site.BaseURL`の後に`logo.jpg`を付け加える処理が正しいかわからないけど、一応これで動いた。



