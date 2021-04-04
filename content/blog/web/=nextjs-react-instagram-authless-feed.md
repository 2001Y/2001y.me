---
title: "[Next.js]超簡単にInstagramの投稿画像一覧を作成"
date: 2021-03-29T00:00:22+09:00
categories: ["Web"]
tags: ["Next.js"]
draft: true
---

{{<ad>}}

`cd`コマンドでnext.jsのプロジェクトフォルダまで移動し、以下のコマンドで`react-instagram-authless-feed`をインストール。

```sh
yarn add react-instagram-authless-feed --dev
# OR
npm install react-instagram-authless-feed -s
```

あとは`import Feed from "react-instagram-authless-feed"でプラグイン`<Feed userName="ユーザーID（@なし）" limit="最新何件を表示するか（数字）"/>`でInstagramへのリンク付きの画像が出力される。

#####  index.js

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
  <img src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/160997331_961001427767626_2157559036324411715_n.jpg?tp=1&amp;_nc_ht=scontent-sea1-1.cdninstagram.com&amp;_nc_cat=110&amp;_nc_ohc=L_ERTqRvWw4AX_1EluZ&amp;edm=ABfd0MgAAAAA&amp;ccb=7-4&amp;oh=1ccb10ec0567ba9e9535ff818c2d78c3&amp;oe=609097E6&amp;_nc_sid=7bff83" alt="・
Camera : #FujifilmXT3
Lens : #XF35mmF14
Location : #新宿

#Fujifilm #Fujilove #XT3 #FujiXT3 #Bicycle #Japan #Shinjyuku #japan_photo #realstreet #trafficlights #信号機 #富士フィルム #写真好きな人と繋がりたい #ファインダー越しの私の世界 #カメラ好きな人と繋がりたい">
</a>
<a href="https://www.instagram.com/p/CMcYwyAlCNo" rel="noopener" target="_blank">
  <img src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/160082122_754469505258852_6131055013453498379_n.jpg?tp=1&amp;_nc_ht=scontent-sea1-1.cdninstagram.com&amp;_nc_cat=100&amp;_nc_ohc=rfAArzUS6RcAX80MSkf&amp;edm=ABfd0MgAAAAA&amp;ccb=7-4&amp;oh=67ac76f5fd95888d26d5acd228fc36c3&amp;oe=608E28F9&amp;_nc_sid=7bff83" alt="・
Camera : #FujifilmXT3
Lens : #XF35mmF14
Location : #新宿

#Fujifilm #Fujilove #XT3 #FujiXT3 #Bicycle #Udon #Japan #Shinjyuku #japan_photo #realstreet #Metro #Train #メトロ #東京メトロ #TokyoMetro #Tokyo #電車 #富士フィルム #写真好きな人と繋がりたい #ファインダー越しの私の世界 #カメラ好きな人と繋がりたい">
</a>
<a href="https://www.instagram.com/p/CMTXaBqFTvI" rel="noopener" target="_blank">
  <img src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/158923845_5107630779310344_309673310246514047_n.jpg?tp=1&amp;_nc_ht=scontent-sea1-1.cdninstagram.com&amp;_nc_cat=100&amp;_nc_ohc=pSFO0t6ygK4AX8jBW2f&amp;edm=ABfd0MgAAAAA&amp;ccb=7-4&amp;oh=de8be59e0037542a45c41a0f481ea666&amp;oe=608DFBFF&amp;_nc_sid=7bff83" alt="・
Camera : #FujifilmXT3
Lens : #Viltrox85mmF1.8
Location : #上野

#Viltrox85mm #Viltrox #Fujifilm #Fujilove #FujiXSeries #FujifilmXSeries #Fujifilm_Global #Fujifilm_Street #XT3 #FujiXT3 #Photography #Japan #Tokyo #Beautiful #Cute #Cool #Monochrome #VSCOgram #Romantic #White #LongExposure #湖 #富士フィルム #写真好きな人と繋がりたい #ファインダー越しの私の世界 #カメラ好きな人と繋がりたい #長時間露光">
</a>
<a href="https://www.instagram.com/p/CMKzAaLF3-H" rel="noopener" target="_blank">
  <img src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/157743807_1046069245800410_8277255302618328720_n.jpg?tp=1&amp;_nc_ht=scontent-sea1-1.cdninstagram.com&amp;_nc_cat=102&amp;_nc_ohc=dLYRU8pMWZoAX_Z4OQV&amp;edm=ABfd0MgAAAAA&amp;ccb=7-4&amp;oh=94aac9694012cf74a952cfbe8df267e4&amp;oe=608F3192&amp;_nc_sid=7bff83" alt="・
Camera : #FujifilmXT3
Lens : XF35mmF14
Location : #東京駅 

#Fujifilm #Fujilove #FujiXSeries #FujifilmXSeries #Fujifilm_Global #Fujifilm_Street #XT3 #FujiXT3 #Photography #Japan #Tokyo #Beautiful #Cute #Cool #Monochrome #VSCOgram #Romantic #White #Snow #Snowman #雪 #雪だるま #富士フィルム #写真好きな人と繋がりたい #ファインダー越しの私の世界 #カメラ好きな人と繋がりたい">
</a>
<a href="https://www.instagram.com/p/CLMrI32FiuN" rel="noopener" target="_blank">
  <img src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/148525560_720529208827244_1006364978312336687_n.jpg?tp=1&amp;_nc_ht=scontent-sea1-1.cdninstagram.com&amp;_nc_cat=108&amp;_nc_ohc=H8bGY53FtEYAX9l_JOY&amp;edm=ABfd0MgAAAAA&amp;ccb=7-4&amp;oh=31213b4d93cf82e36b190164ffa09bc4&amp;oe=608FD769&amp;_nc_sid=7bff83" alt="・
Model : @lagi_san 
Camera : #iPhone11Pro
Editor : #VSCO

#Camera #iPhone #ShotoniPhone #ShotoniPhone11Pro #iPhonegraphy #Apple #Photography #Japan #Tokyo #Cool #Monochrome #VSCOgram #Skrwt #Sky #Building #Sanp #StreetSanp #Street #Pentax #PentaxK1 #スマホ #写真好きな人と繋がりたい #ファインダー越しの私の世界 #カメラ好きな人と繋がり">
</a>
<a href="https://www.instagram.com/p/CLE3ZVzl5To" rel="noopener" target="_blank">
  <img src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/147475297_100727042040331_6012086884294826766_n.jpg?tp=1&amp;_nc_ht=scontent-sea1-1.cdninstagram.com&amp;_nc_cat=107&amp;_nc_ohc=s1_Dk2nFxXEAX8xPSJH&amp;edm=ABfd0MgAAAAA&amp;ccb=7-4&amp;oh=3918b81956a2361eb00a7f61db124789&amp;oe=608EA178&amp;_nc_sid=7bff83" alt="#GoodbyeYellowBrickRoadbyMARIN 

Model : @humming.marin.bird 
Produce : @humming.marin.bird 
Location : #武蔵野美術大学

作品▶︎ https://youtu.be/IwWFT0AEr1

Camera : #FujifilmXT3 / #iPhone11Pro
Lens : #7artisans35mmF095

#7artisans #七工匠 #Fujifilm #XSeries #Fujilove #FujiXSeries #FujifilmXSeries #Fujifilm_Global #Fujifilm_Street #XT3 #FujiXT3 #Photography #Japan #Beautiful #Cool #Monochrome #Romantic #Art #Photography  #GoodbyeYellowBrickRoad #富士フィルム #写真好きな人と繋がりたい #ファインダー越しの私の世界 #カメラ好きな人と繋がりたい 

Thanks for everything.">
</a>
<a href="https://www.instagram.com/p/CKgoFgQFIat" rel="noopener" target="_blank">
  <img src="https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/142128520_1026377297860673_7765704159618269027_n.jpg?tp=1&amp;_nc_ht=scontent-sea1-1.cdninstagram.com&amp;_nc_cat=105&amp;_nc_ohc=HeCpmh-OHGwAX-lmGFH&amp;edm=ABfd0MgAAAAA&amp;ccb=7-4&amp;oh=a5642af84ba051a678548ac20e10e84e&amp;oe=60905576&amp;_nc_sid=7bff83" alt="#GoodbyeYellowBrickRoadbyMARIN 

Model : @sminn__ 
Produce : @humming.marin.bird 
Location : #武蔵野美術大学

作品▶︎ https://youtu.be/IwWFT0AEr1

Camera : #FujifilmXT3 / #iPhone11Pro
Lens : #7artisans35mmF095

#7artisans #七工匠 #Fujifilm #XSeries #Fujilove #FujiXSeries #FujifilmXSeries #Fujifilm_Global #Fujifilm_Street #XT3 #FujiXT3 #Photography #Japan #Beautiful #Cool #Monochrome #Romantic #Art #Photography  #GoodbyeYellowBrickRoad #富士フィルム #写真好きな人と繋がりたい #ファインダー越しの私の世界 #カメラ好きな人と繋がりたい">
</a>
```