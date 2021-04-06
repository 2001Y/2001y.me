---
title: "[Next.js]超簡単にInstagramの投稿画像一覧を作成"
date: 2021-04-06T00:00:22+09:00
categories: ["Web"]
tags: ["Next.js"]
---

{{<ad>}}

`cd`コマンドでnext.jsのプロジェクトフォルダまで移動し、以下のコマンドで`react-instagram-authless-feed`をインストール。

```sh
yarn add react-instagram-authless-feed --dev
# OR
npm install react-instagram-authless-feed
```

あとは`import Feed from "react-instagram-authless-feed"`でインポートして、`<Feed userName="ユーザーID（@なし）" limit="最新何件を表示するか（数字）"/>`でリンク付きの画像が出力される。

#####  index.js

```js
import Feed from "react-instagram-authless-feed"
export default Build
function Build() {
  return (
    <Feed userName="y20010920t" limit="8"/>
  );
}
```

##### 出力されるHTML

```html
<a href="https://www.instagram.com/p/CMgBHj2FtvR" rel="noopener" target="_blank">
  <img src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/161602220_2822657741322402_8874282380384125697_n.jpg?tp=1&amp;_nc_ht=scontent-sea1-1.cdninstagram.com&amp;_nc_cat=106&amp;_nc_ohc=exnJwT8lLpQAX-ifxEL&amp;edm=ABfd0MgAAAAA&amp;ccb=7-4&amp;oh=e86c98c88a85afc228e365a191fe8920&amp;oe=608DA5B5&amp;_nc_sid=7bff83" alt="・
Camera : #FujifilmXT3
Lens : #XF35mmF14
Location : #新宿

#Fujifilm #Fujilove #XT3 #FujiXT3 #Japan #Shinjyuku #japan_photo #realstreet #trafficlights #Starbucks #Snap #StreetSnap #富士フィルム #写真好きな人と繋がりたい #ファインダー越しの私の世界 #カメラ好きな人と繋がりたい #スタバ #スターバックス #スターバックスコーヒー">
</a>
<a href="https://www.instagram.com/p/CMeMgIIFWuG" rel="noopener" target="_blank">
  <img src="https://scontent-sea1-1.cdninstagram.com/v/
・・・・
```