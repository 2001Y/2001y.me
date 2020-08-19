---
title: "Twitter公式の予約ツイート機能はバレる...？"
date: 2020-08-19T00:00:22+09:00
img: twitter-schedule-leak
categories: ["Other"]
tags: ["ブログ"]
---
Twitterから公式で予約ツイートができるようになりました。でも、予約ツイートはバレるのかが気になったので調べてみました。

## 実際の予約ツイート

<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">えぇ。。<br>手脚5箇所ぐらい蚊に刺されてた。。。<br>かゆい。。。</p>&mdash; 2001Y (@Y20010920T) <a href="https://twitter.com/Y20010920T/status/1284635059543257089?ref_src=twsrc%5Etfw">July 18, 2020</a></blockquote>

特に予約ツイートなどの表記はなさそう。パッとみで予約ツイートと悟られることはなさそう...？

## ばれポイント1： ツイート元表示が"Twitter Web App"になる

![](../../../images/twitter-schedule-leak-1.jpg)

現在、予約ツイートはWebからしかできないため、ツイート元の表示は **Twitter Web App** になる。普段、Web版を全く使わないと気になるかも？

## ばれポイント2： ツイート時間がぴったりになる

![](../../../images/twitter-schedule-leak-2.jpg)

公式のTwitterクライアントでは分までしか表示されませんが、ツイートIDから秒数を見ることも可能なので0秒ぴったりにツイートすることは少ないので怪しいかも...？

![](../../../images/twitter-schedule-leak-3.jpg)

予約ツイート設定では分までしか設定できません。あと、逆に先ほどの結果からミリ秒までは正確でないみたい。

***

## あとは、基本的にはバレなさそう...？

基本的にはバレなさそうだけど、本気でばれたくなければ、こんなことも書いてあるので[公式ドキュメント](https://developer.twitter.com/en/docs/twitter-ads-api/creatives/guides/scheduled-tweets-guide)を読んだ方がいいかも。（自分は英語読めないからここらへんで諦める。）

![](../../../images/twitter-schedule-leak-4.jpg)

でも、[statuses/show/:id](https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-show-id)をなんとなく見てみても、一応予約ツイートという記録はなさそう...？一応、取得したJsonを貼っときます。

```json
{
    "created_at": "Sat Jul 18 23:44:00 +0000 2020",
    "id": 1284635059543257000,
    "id_str": "1284635059543257089",
    "text": "えぇ。。\n手脚5箇所ぐらい蚊に刺されてた。。。\nかゆい。。。",
    "truncated": false,
    "entities": {
        "hashtags": [],
        "symbols": [],
        "user_mentions": [],
        "urls": []
    },
    "source": "<a href=\"https://mobile.twitter.com\" rel=\"nofollow\">Twitter Web App</a>",
    "in_reply_to_status_id": null,
    "in_reply_to_status_id_str": null,
    "in_reply_to_user_id": null,
    "in_reply_to_user_id_str": null,
    "in_reply_to_screen_name": null,
    "user": {
        "id": 3102332970,
        "id_str": "3102332970",
        "name": "2001Y",
        "screen_name": "Y20010920T",
        "location": "Tokyo, Japan",
        "description": "#武蔵美 CI2期 | #WebDesign • #Design • #Apple • #FUJIFILM • #XT3 • #GR3 | Instagram：https://t.co/SXGZenHXJE | Blog : @2001yMe | LiT : @lit_ucho",
        "url": "https://t.co/325oOlz4ME",
        "entities": {
            "url": {
                "urls": [
                    {
                        "url": "https://t.co/325oOlz4ME",
                        "expanded_url": "https://2001y.me/blog",
                        "display_url": "2001y.me/blog",
                        "indices": [
                            0,
                            23
                        ]
                    }
                ]
            },
            "description": {
                "urls": [
                    {
                        "url": "https://t.co/SXGZenHXJE",
                        "expanded_url": "https://21y.in/insta",
                        "display_url": "21y.in/insta",
                        "indices": [
                            80,
                            103
                        ]
                    }
                ]
            }
        },
        "protected": false,
        "followers_count": 621,
        "friends_count": 559,
        "listed_count": 6,
        "created_at": "Sun Mar 22 02:02:09 +0000 2015",
        "favourites_count": 17354,
        "utc_offset": null,
        "time_zone": null,
        "geo_enabled": true,
        "verified": false,
        "statuses_count": 21738,
        "lang": null,
        "contributors_enabled": false,
        "is_translator": false,
        "is_translation_enabled": false,
        "profile_background_color": "424242",
        "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
        "profile_background_tile": true,
        "profile_image_url": "http://pbs.twimg.com/profile_images/1265127085967728640/JW1yAmdc_normal.jpg",
        "profile_image_url_https": "https://pbs.twimg.com/profile_images/1265127085967728640/JW1yAmdc_normal.jpg",
        "profile_banner_url": "https://pbs.twimg.com/profile_banners/3102332970/1588958449",
        "profile_link_color": "7FDBB6",
        "profile_sidebar_border_color": "000000",
        "profile_sidebar_fill_color": "000000",
        "profile_text_color": "000000",
        "profile_use_background_image": true,
        "has_extended_profile": true,
        "default_profile": false,
        "default_profile_image": false,
        "following": null,
        "follow_request_sent": null,
        "notifications": null,
        "translator_type": "none"
    },
    "geo": null,
    "coordinates": null,
    "place": null,
    "contributors": null,
    "is_quote_status": false,
    "retweet_count": 0,
    "favorite_count": 2,
    "favorited": false,
    "retweeted": false,
    "lang": "ja"
}
```