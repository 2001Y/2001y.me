---
title: [Netlify]自動でサイトマップをGoogle,Bingに通知(Ping送信)
date: 2020-06-11T00:00:22+09:00
img: netlify-auto-ping
categories: ["Web"]
tags: ["ブログ","Web","サイトマップ","Google","Bing","GoogleSearchConsole"]

---



<iframe style="width:100%;height:155px;margin:15px 0;max-width:680px;" src="https://hatenablog-parts.com/embed?url=https%3A%2F%2Fsupport.google.com%2Fwebmasters%2Fanswer%2F183668%3Fhl%3Dja%23addsitemap" frameborder="0" scrolling="no"></iframe>

[SearchConsoleヘルプ](https://support.google.com/webmasters/answer/183668?hl=ja#addsitemap)によると、Googleにサイトマップを送るには3種類あります。

1. Search Console
2. robots.txt
3. Ping

### Search Console



### robots.txt



### Ping

HTTP GET リクエストを次のように送信します。

```html
http://www.google.com/ping?sitemap=https://example.com/sitemap.xml
```

　https://www.bing.com/ping?sitemap=*URLエンコーディングした_あなたのサイトのサイトマップURL*

https://mypage.blogmura.com/ping

https://aruo.net/arbk/blog/article/submit_sitemaps_to_google_and_bing_by_ping_http_request