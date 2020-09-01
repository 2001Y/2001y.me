---
title: "URL指定でYouTubeをループ再生させるサイトを作ってみた"
date: 2020-09-01T03:00:22+09:00
img: tool-youtubeloop
categories: ["Web"]
tags: ["自作ツール","WebTopic"]
---

今はSpotifyやAppleMusicなど数多くの音楽ストリーミングサービスの楽曲もどんどん増えてきました。でも、小学生の時にYouTubeをループ再生する怪しいサイトを愛用していたのを思い出し、作ってみました。

聞きたい曲は大抵Spotifyにある時代ではありますが、カバー作品など今でもYouTubeのみの楽曲はたくさんあるので、ちょっと便利になるかな...？

{{<ad>}}

## YouTube Loop

使い方は簡単で、下の項目にURLか動画IDを入力すればループ再生される。

### ループさせたいURL、または動画ID

{{<html>}}<input type=text id=input placeholder="https://youtu.be/XXXX OR https://www.youtube.com/watch?v=XXXX" onkeyup="youtube();" autofocus>{{</html>}}

### プレビュー

{{<html>}}

<div class=youtube>
  <iframe id=view frameborder=0 allow="accelerometer;autoplay;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe>
</div>

{{</html>}}

### ループURL

<input type=text id=short readonly>

### 埋め込み用ループURL

<input type=text id=copy readonly>

<script>
let paraID = new URLSearchParams(location.search);
if (paraID.has("id")) {
  input.value = paraID.get("id");
  youtube();
}
function youtube(){
  let id = input.value;
  if (id){
    if(id.includes("http")) {
    	let url = new URL(id),
      		para = new URLSearchParams(url.search);
      if(para.has("v")) {
        id = para.get("v");
      } else if(id.includes("youtu.be")) {
        id = url.pathname;
      }
    }
    let link= "https://www.youtube.com/embed/"+ id +"?playlist="+ id +"&loop=1&autoplay=1";
    view.src = link;
    copy.value = link;
    short.value = "https://2001y.me/blog/web/tool-youtubeloop?id=" + id;
    document.title = id + "｜URL指定でYouTubeをループ再生するサイトを作ってみた｜2001Y.me";
    paraID.set("id",id);
    window.history.replaceState({}, "", `${location.pathname}?${paraID}`);
  }
}
</script>

{{<ad>}}

## 仕組み

同じ曲を2曲、プレイリストを埋め込んで、そのプレイリストをループ再生させています。詳細はYouTubeの[埋め込みリファレンス](https://developers.google.com/youtube/player_parameters?hl=ja#loop)へ。

```html
https://www.youtube.com/embed/XXXX?playlist=XXXX&loop=1&autoplay=1
```

本当は、Enterを押さなくても自動再生するようにしたいけど、ブラウザの制約でどうも難しそう...？

あと、**ループURL** のidパラメータは関数を実行してるだけなので、サイト同様、2種類のURLでも直接動画IDを指定しても動く。

### コード

 `https://www.youtube.com/watch?v=XXXX`と`https://youtu.be/XXXX` の2種類のURLに対応していて、`vのパラメータ`で取得できなかったら、[.pathname](https://developer.mozilla.org/ja/docs/Web/API/URL/pathname)で動画IDを取得するようになってます。エラー処理などは入ってません（笑

```js
function youtube(){
  let id = input.value; //変数idに"ループさせたいURL、または動画ID"を指定
  if (id){ //IF：変数idがある時
    if(id.includes("http")) { //IF：URLの時（httpを含む時）
    	let url = new URL(id), //変数idをURLオブジェクト化
            para = new URLSearchParams(url.search); //"url.search"でパラメータのみを指定し、URLSearchParams オブジェクト化
      if(para.has("v")) { //IF：パラメータvがある時（https://www.youtube.com/watch?v=XXXX 用）
        id = para.get("v"); //変数idをvのパラメータの値に置き換える
      } else if(id.includes("youtu.be")) { //IF：パラメータvがない時（https://youtu.be/XXXX 用）
        id = url.pathname; //変数idをパスの値に置き換える
      }
    } //もし、ここまで変数idが加工されなかったということは指定されたのがもともと動画IDだということ。（エラー処理はなし
    
    //以下、URLを作成し出力する処理
    let link= "https://www.youtube.com/embed/"+ id +"?playlist="+ id +"&loop=1&autoplay=1";
    view.src = link;
    copy.value = link;
    short.value = "https://2001y.me/blog/web/tool-youtubeloop?id=" + id;
    
    //以下、再読み込みしもいいようにパラメータを指定し、履歴に追加する処理
    document.title = id + "｜URL指定でYouTubeをループ再生するサイトを作ってみた｜2001Y.me"; //idを追加したタイトルに変更
    paraID.set("id",id); //パラメータidに変数idを指定
    window.history.replaceState({}, "", `${location.pathname}?${paraID}`); //パラメータの変更を反映&履歴に追加
  }
}

//以下、このページのパラメータ指定で自動入力するための処理
let paraID = new URLSearchParams(location.search); //開いたときのURLからパラメータを取得
if (paraID.has("id")) { //IF：パラメータidがある時
  input.value = paraID.get("id"); //パラメータidを"ループさせたいURL、または動画ID"に表示
  youtube(); //動画表示処理を実行
}
```

***

簡単なツールなんかを作ったときにブログに残しておきたかったから、このブログを作ったようなもんだったので、活用できてよかった。あと、コードのコメントアウトをどのぐらい残せばいいのかが難しい...。

でも、コメントアウトはHTML的にはただのコードだから、SEO的にはページの内容としては判定されないのかな...？まぁいいや〜笑