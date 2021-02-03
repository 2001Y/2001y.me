---
title: "NetlifyCMSの記事公開時のエラー対応"
date: 2021-02-03T01:00:22+09:00
categories: ["Web"]
tags: ["Netlify"]
---

久しぶりに新しいサイトにNetlifyCMSを導入し、記事公開時にこのようなエラーが出たのでメモ。

{{< bg >}}

`API_ERROR: Although you appear to have the correct authorization credentials, the organization name organization has enabled OAuth App access restrictions, meaning that data access to third-parties is limited. For more information on these restrictions, including how to enable this app, visit https://docs.github.com/articles/restricting-access-to-your-organization-s-data/`

{{< bg-end >}}

{{<ad>}}

### GithubのThird-party accessを変更

Organization の設定を開き、サイドバーから<b>Third-party access</b>にアクセス、<b>Remove restrictions</b>で書き込み権限を与えます。

![](../../../images/netlifycms-publisherror-1.jpg)

確認アラートが出るので、`Yes`。

![](../../../images/netlifycms-publisherror-2.jpg)

`Policy: No restrictions` になっていることを確認し、これで解決しました。

![](../../../images/netlifycms-publisherror-3.jpg)

***

詳しい手順は公式ドキュメントに書いてありました。

https://docs.github.com/ja/github/setting-up-and-managing-organizations-and-teams/enabling-oauth-app-access-restrictions-for-your-organization