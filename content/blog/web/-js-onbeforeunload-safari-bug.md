---
title: "MacのSafariでもサイトを閉じる前に処理を走らせる"
date: 2021-01-29T00:00:22+09:00
categories: ["Web"]
tags: ["Web","PWA","サイト","iOS"]
draft: true
---

サイトが閉じられる前に保存などの処理をかけたいときには[`Page Visibility API`](https://developer.mozilla.org/ja/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API),[`beforeunload`](https://developer.mozilla.org/ja/docs/Web/Reference/Events/beforeunload),[`pagehide`](https://developer.mozilla.org/ja/docs/Web/Events/),[`unload`](https://developer.mozilla.org/ja/docs/Web/Events/)などを使う。

ただ、MacのSafariで動作テストを行ったところ、``Page Visibility API``や``pagehide``などでタブの移動などの<b>非表示を検知する</b>ことはできても、ウィンドウを閉じた際に処理をかけることができなかった。

具体的な処理はパラーメータを変更して履歴に残すというもの。Chromeではうまくいった。

{{<ad>}}

## MacのSafariでもサイトを閉じる前に処理させる

結果的にこれだけで動いた。Chromeでは`return false`なしでも履歴の追加ができたが

```js
window.onbeforeunload = function(){
  
  //閉じる前にさせたい処理
  
  return false
}
```

### まず、入力要素がないと動作しない

まず、`input`や`textarea`などの入力要素がないと`onbeforeunload`は動作しない。

### そして、テキスト入力されてないと動作しない

そして、`input`や`textarea`などの入力要素があったとしても、テキスト入力されていなくて空っぽの状態で`onbeforeunload`は動作しない。

### あと、カスタムメッセージは機能しない

あと、`このページから離れますか？`のメッセージの変更はできなくなったらしい。各ブラウザのメッセージは[Qiita](https://qiita.com/nantekkotai/items/9a6e2c98ed704934ab47)にまとめられていた。



{{<caniuse id="mdn-api__windoweventhandlers__onbeforeunload">}}

[`Page Visibility API`](https://developer.mozilla.org/ja/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)

```js
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState !== "visible") {
    //サイトが非表示になったとき処理（タブ移動など）
  }
}, false);
```



***

あと、iOSのSafariやAndroidでも[bfcache](https://qiita.com/kyaido/items/5cf9482146b945a4bf67)の影響なのかうまく動かないことがあるらしい。その場合、物理ボタンによるページ非常時は`Page Visibility API`、ソフト的な非表示には`pagehide` / `unload`のどちらかを使えば良さそう。[データ元(2016/07/20)](https://qiita.com/ta__ho/items/937257c3c9891bdf2d38)



| 動作                         | iOS                          | Android                                      |
| ---------------------------- | ---------------------------- | -------------------------------------------- |
| ページリロード               | `pagehide`<br>`unload`<br/>  | `before`unload``<br/>`pagehide`<br/>`unload` |
| リンクタップ                 | `pagehide`<br/>`unload`<br/> | `before`unload``<br/>`pagehide`<br/>`unload` |
| リンクタップ（_blunk）       | -                            | `Page Visibility API`                        |
| ブラウザバック               | `pagehide`<br/>`unload`<br/> | `before`unload``<br/>`pagehide`<br/>`unload` |
| 電源ボタンタップ             | `Page Visibility API`        | `Page Visibility API`                        |
| ホームボタン                 | `Page Visibility API`        | `Page Visibility API`                        |
| ホームボタン（ダブルタップ） | -                            |                                              |
| アプリ履歴ボタンタップ       |                              | `Page Visibility API`                        |

