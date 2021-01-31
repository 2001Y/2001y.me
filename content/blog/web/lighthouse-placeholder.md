---
title: "[Lighthouse満点へ]フォーム要素へのラベル関連付けはplaceholderでも良い"
date: 2021-01-31T01:00:22+09:00
categories: ["Web"]
tags: ["Web","Lighthouse"]
---

このブログを作るに当たって初めてHugoを触り、[1から](https://2001y.me/blog/other/hello/)ブログをデザインするということで、かなりパフォーマンスを意識して作成してきてたつもりでした。

そして先日、Chrome89にLighthouse7.0.0が搭載され、[UIも日本語化された](https://www.suzukikenichi.com/blog/lighthouse-will-be-available-in-japanese/)ということで、ChromeDevを使って久しぶりにLighthouseを計測してみました。

![](../../../images/lighthouse-placeholder-0.jpg)

ほ...<b>あとちょっとでオール100点！！！</b>

ということで、オール100点になるために微調整してみました。

{{<ad>}}

## フォームの要素にラベルが関連付けられていません

アクセシビリティ（ユーザー補助）の項目で、<b>一つはidが複数使われています</b>みたいなミスだったので修正。

あと一つが、<b>フォームの要素にラベルが関連付けられていません</b>`Form elements do not have associated labels`。

![](../../../images/lighthouse-placeholder-1.jpg)

## labelで囲みたくない…

ただ、このフォーム部分は検索欄なので`type=search`です。

```html
<input type=search>
```

そして、デザイン的に`label`で囲みたくない...

```html
<label>Search: <input type=search></label>
```

***

## placeholderを追加したら一発解決だった

`label`をplaceholder風に表示させようかと考えましたが、普通に`placeholder`を指定してあげるだけで解決でした。

```html
<input type=search placeholder=Search>
```

## aria-labelでもいいみたい

`aria-label`でも[解決するみたい](https://dequeuniversity.com/rules/axe/3.3/label)。

```html
<input type=search aria-label=Search>
```

`aria-label`だとサイト上にテキストが表示されないので、`label`も`placeholder`も使いたくない時に便利そう。

{{<ad>}}

## 無事、オール100点！！

そして、<b>無事オール100点にすることができました！！</b>

Safari14でやっとWebPに対応して、かなり体感スピードが上がった気がします。WebP対応しておいてよかった。

![こんな祝福エフェクトあるんだ](../../../images/lighthouse.jpg)