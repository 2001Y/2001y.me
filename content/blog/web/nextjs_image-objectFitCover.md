---
title: "[Next.js]next/imageの画像が引き伸ばされる時"
date: 2021-04-26T00:00:22+09:00
categories: ["Web"]
tags: ["Next.js"]
---

非常に簡単に画像の最適化が行えるnext/image。

今までは、Gulpで様々なサイズのWebPとJpegを生成して、Hugoで無理やり表示させていました。でも、なかなかにスマートじゃない。

なので、このImageコンポーネントが使いたくてNext.jsを始めたと言っても過言ではありません。

{{<ad>}}

## objectFit="cover" を追加する

リサイズまでしたいので、`layout="fill"`ではなく、`width,height`を指定。ただこれだと、画像が引き伸ばされてしまうので、`objectFit="cover"`を追加します。

```html
<Image src="img.jpg" alt="説明" height="300" width="500" objectFit="cover" />
```



