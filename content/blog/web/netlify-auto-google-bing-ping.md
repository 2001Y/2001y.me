---
title: "[Netlify]サイトマップの更新を自動的にGoogle,Bingに通知(Ping送信)"
date: 2020-06-25T9:00:22+09:00
img: netlify-auto-google-bing-ping
categories: ["Web"]
tags: ["ブログ","Web","サイトマップ","Google","Bing","GoogleSearchConsole"]
---

現在、Github経由でNetlifyでHugoを使ってこのブログを作っています。そこで、記事を追加するたびにサイトマップをGoogleやBingに手動で通知するのも面倒で自動化の手順をメモしておきます。

## サイトの更新を伝える手段

[SearchConsoleヘルプ](https://support.google.com/webmasters/answer/183668?hl=ja#addsitemap)によると、Googleにサイトマップを送るには3種類あります。

### Search Console

サイトマップ レポートを利用して、Google へのサイトマップの送信することで更新を通知することができますが、毎回やるのは面倒。　▶︎[参考](https://support.google.com/webmasters/answer/7451001)

### robots.txt

robots.txtにsitemapを指定することで、Google にサイトマップを送信することができます。しかし、Googleの巡回を待つ必要があります。

### Ping

HTTP GET リクエストを次のように送信します。こちらの方法では、robots.txtのようにGoogleの巡回を待つことなく、Googleに通知することができます。

また、Pingによるサイトマップ通知はGoogleだけでなく、Bingでも利用することができます。

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

それぞれ、[GoogleSearchConsole](https://search.google.com/search-console/)や[BingWebマスターツール](https://www.bing.com/webmaster/)に登録していないと機能しない とされていた気がします。