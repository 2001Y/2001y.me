---
title: "[Next.js]mapを使って連想配列を出力してみる"
date: 2021-04-05T02:00:22+09:00
categories: ["Web"]
tags: ["Next.js"]
---

{{<ad>}}

## Next.jsでmapを使って連想配列を出力してみる

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
  return (
    <ul> //ulでなくてもいいが何かで囲んでないとダメ
      {web.map(post => (
        <li> //map内には一つの親要素でないとダメらしい
       	  <h2>{post.url}</h2>
       		<p>{post.comment}</p>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  return { props: {web} };
}

export default Build
```

##### 出力されるHTML

```html
<ul>
  <li>
    <h2>https://111.com</h2>
    <p>いち</p>
  </li>
  <li>
    <h2>https://222.com</h2>
    <p>にい</p>
  </li>
  <li>
    <h2>https://333.com</h2>
    <p>さん</p>
  </li>
</ul>
```

