---
title: "[ffmpeg]一括操作（mov-mp4やheic-jpgなど）"
date: 2020-06-27T00:00:22+09:00
img: mac-ffmpeg-replace-all
categories: ["Gadget"]
tags: ["MacCommand","Mac","ターミナル","シェルスクリプト"]
draft: true
---



{{<blogcard url="https://qiita.com/3attoC/items/ee75825be2b22c57bc41">}}

```sh
for f in *.mov ; do ffmpeg -i $f `basename -s .mp4 $f`.mp4; done
```



```sh
for f in *.HEIC ; do ffmpeg -i $f `basename -s .HEIC $f`.jpg; done
```

