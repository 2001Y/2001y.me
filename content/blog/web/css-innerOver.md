---
title: '[CSS2行]画像,地図などの"はみ出させたい要素"を親要素関係なくウィンドウ幅に'
date: 2021-02-26T05:00:22+09:00
categories: ["Web"]
tags: ["CSS"]
---

レスポンシブデザインを作成しているとどうしても`max-width`を多用する場面が増えてきます。

しかし、デザイン的に画像やマップだけ親要素の`max-width`を無視してウィンドウ幅に表示させたい場面が多くあったのでメモ。

{{<ad>}}

## 親要素のmax-widthを無視して画像だけ100vw

はみ出させたい要素に以下を追加する。親要素に手を加える必要はありません。

```css
width: 100vw;
margin: 0 calc(50% - 50vw);
```

### Demo

<iframe height=210 width=100% src="https://mineditor.github.io/?h=%253Cbody%253E%250A%2520%2520%253Cmain%253E%250A%2520%2520%2520%2520%253Cimg%2520src%3D%2F%2Fsource.unsplash.com%2Frandom%2F900x300%253E%250A%2520%2520%253C%2Fmain%253E%250A%253C%2Fbody%253E&c=img%2520%257B%250A%2520%2520width%3A%2520100vw%3B%250A%2520%2520margin%3A%25200%2520calc%2850%2525%2520-%252050vw%29%3B%250A%257D%250A%250A%250Amain%2520%257B%250A%2520%2520width%3A%252070vw%3B%250A%2520%2520height%3A%2520100vh%3B%250A%2520%2520margin%3A%2520auto%3B%250A%2520%2520background%3A%2520%23222%3B%250A%2520%2520display%3A%2520flex%3B%250A%2520%2520align-items%3A%2520center%3B%250A%257D&j=none&s=40"></iframe>

{{<ad>}}

## タイトルなどの背景だけはみ出させたい時

はみ出させたい要素に以下を追加。同じく親要素に手を加える必要はありません。

```css
width: 100vw;
margin: 0 calc(50% - 50vw);
padding: 0 calc(50vw - 50%);
```

### Demo

<iframe height=210 width=100% src="https://mineditor.github.io/?h=%253Cbody%253E%250A%2520%2520%253Cmain%253E%250A%2520%2520%2520%2520%253Ch2%253E%25E3%2582%25BF%25E3%2582%25A4%25E3%2583%2588%25E3%2583%25AB%253C%2Fh2%253E%250A%2520%2520%253C%2Fmain%253E%250A%253C%2Fbody%253E&c=h2%2520%257B%250A%2520%2520width%3A%2520100vw%3B%250A%2520%2520margin%3A%25200%2520calc%2850%2525%2520-%252050vw%29%3B%250A%2520%2520padding%3A%25200%2520calc%2850vw%2520-%252050%2525%29%3B%250A%257D%250A%250A%250Amain%2520%257B%250A%2520%2520width%3A%252070vw%3B%250A%2520%2520height%3A%2520100vh%3B%250A%2520%2520margin%3A%2520auto%3B%250A%2520%2520background%3A%2520%23222%3B%250A%2520%2520display%3A%2520flex%3B%250A%2520%2520align-items%3A%2520center%3B%250A%257D%250Ah2%2520%257B%250A%2520%2520background%3A%2520%23999%3B%250A%257D&j=none&s=40"></iframe>