---
title: "[Netlify]自動的にサイトマップの更新をGoogle,Bingに通知(Ping送信)"
date: 2020-06-11T00:00:22+09:00
img: netlify-auto-ping
categories: ["Web"]
tags: ["ブログ","Web","サイトマップ","Google","Bing","GoogleSearchConsole"]
draft: true

---

現在、Github経由でNetlifyでHugoを使ってこのブログを作っています。そこで、記事を追加するたびにサイトマップをGoogleやBingに手動で通知するのも面倒で自動化の手順をメモしておきます。

## NetlifyのDeployNotificationsで自動化

Netlifyにはビルドに成功・失敗した時にSlackやメールなどで通知するしてくれるシステムがあります。そちらを利用し、Pingを送ります。

### ❶Settings ＞ ❷Build & deploy ＞ ❸Deploy notifications

![](../../../images/netlify-auto-ping-1.jpg)

### ❹Add notification ＞ ❺Outgoing webhook

![](../../../images/netlify-auto-ping-2.jpg)

### ❻Deploy succeeded を選び、❼PingURLを入力

![](../../../images/netlify-auto-ping-3.jpg)

```html
http://www.google.com/ping?sitemap=サイトマップURL
```

```html
http://www.bing.com/ping?sitemap=サイトマップURL
```

## さいごに

それぞれ、[Search Console](https://search.google.com/search-console/)や

https://mypage.blogmura.com/ping

https://aruo.net/arbk/blog/article/submit_sitemaps_to_google_and_bing_by_ping_http_request