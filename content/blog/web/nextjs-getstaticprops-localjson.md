---
title: "[Next.js]ローカルの連想配列jsonを読み込む"
date: 2021-04-05T01:00:22+09:00
categories: ["Web"]
tags: ["Next.js"]
---

{{<ad>}}

`yarn create next-app`を実行した後、連想配列をjsonファイルに保存し、index.jsからアクセスしようとすると以下のエラーが出てしまう。

#### `/data.json`

```json
[
  { url: "https://111.com", comment: "いち", },
  { url: "https://222.com", comment: "にい", },
  { url: "https://333.com", comment: "さん", }
]
```

#### `/pages/index.js`

```js
import json from '../data.json'

function Build() {
  console.log(json)
  return ( <h1>コンソールを確認！</h1> );
}

export default Build
```

#### エラー

```html
Module parse failed: Unexpected token u in JSON at position 10 while parsing near "〜". You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders SyntaxError: Unexpected token u in JSON at position 10 while parsing near "〜"
```

## jsファイルで変数に格納してあげる

そんな時は、jsonファイルではなく、jsファイルに`export`で連想配列を指定し、index.jsで`getStaticProps`を使うとアクセスできた。

#### `/web.js`

```json
export const web = [
  { url: "https://111.com", comment: "いち", },
  { url: "https://222.com", comment: "にい", },
  { url: "https://333.com", comment: "さん", }
]
```

#### `/pages/index.js`

```js
import { web } from '../web'

function Build( {web} ) {
  console.log(web)
  return ( <h1>コンソールを確認！</h1> );
}

export async function getStaticProps() {
  return { props: {web} };
}

export default Build
```

