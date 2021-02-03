---
title: "NetlifyCMSのエラー対応(NetlifyIdentity/GitGateway)"
date: 2021-01-24T00:00:22+09:00
categories: ["Web"]
tags: ["Netlify"]
---

久しぶりに新しいサイトにNetlifyCMSを導入した時に少し躓いたのでメモ。

{{<ad>}}

## NetlifyIdentity

### エラー: Unable to access identity settings. When using git-gateway backend make sure to enable Identity service and Git Gateway.

![](../../../images/netlifycms-error-1.jpg)

### 解決法

![](../../../images/netlifycms-error-2.jpg)

上のタブから移動して、<b>Identity</b>を有効に。

```html
https://app.netlify.com/sites/サイトID/identity
```

{{<ad>}}

## GitGateway

### エラー: Your Git Gateway backend is not returning valid settings. Please make sure it is enabled.

![](../../../images/netlifycms-error-3.jpg)

### 解決法

![](../../../images/netlifycms-error-4.jpg)

上のタブから<b>Site settings</b>に移動して、<b>Git Gateway</b>を有効に。

```html
https://app.netlify.com/sites/サイトID/settings/identity#services
```

***

あと、Githubのブランチのデフォルトが`main`になったので、公式のドキュメントに載っている`config.toml`から修正が必要。

#### config.toml

```yaml
backend:
  name: git-gateway
  branch: main #[master]から変更
```