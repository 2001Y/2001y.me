---
title: "NetlifyCMSのエラー対応（NetlifyIdentity/GitGateway）"
date: 2021-01-23T00:00:22+09:00
categories: ["Web"]
tags: ["Web","PWA","サイト","iOS"]
---

久しぶりに新しいサイトにNetlifyCMSを導入した時に少し躓いたのでメモ。

## Netlify Identity

### エラー

```html
Unable to access identity settings. When using git-gateway backend make sure to enable Identity service and Git Gateway.
```

![](../../../images/netlifycms-error-1.jpg)

### 解決法

![](../../../images/netlifycms-error-2.jpg)



## Git Gateway

### エラー

```html
Your Git Gateway backend is not returning valid settings. Please make sure it is enabled.
```

![](../../../images/netlifycms-error-3.jpg)

### 解決法

![](../../../images/netlifycms-error-4.jpg)

***

あと、githubのブランチのデフォルトが`main`になったので

config.toml

```yaml
backend:
  name: git-gateway
  branch: master
```