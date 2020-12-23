---
title: "[Mac,Win,Linux]無料で容量無制限のファイル共有がサーバーレスでできるPartyshare"
date: 2020-12-23T00:00:22+09:00
img: partyshare
categories: ["Gadget"]
tags: ["XnConvert","MacApp","Mac"]
---

{{<ad>}}

## Dockの設定

### アプリケーションフォルダを追加

![](../../../images/mac-first-setting-dock-folder.jpg)

### フォルダの表示設定 

![](../../../images/mac-first-setting-dock-folder-setting.jpg)

## システム環境設定の設定

### 一般：サイドバーのアイコンサイズを "小" に

![](../../../images/mac-first-setting-general.jpg)

### ディスプレイ：解像度を "スペースを拡大" に

![](../../../images/mac-first-setting-resolution.jpg)

### Dockとメニューバー：Dockを自動的に表示/非表示に

#### アニケーションスピードを0にして高速に表示/非表示



```sh
defaults write com.apple.dock autohide-time-modifier -int 0; killall Dock
```

### 3本指のドラッグを有効に

{{<blogcard url="https://support.apple.com/ja-jp/HT204609">}}

 

## スクリーンショットの設定

### 保存形式をjpgに

```sh
defaults write com.apple.screencapture type jpg
```

### ファイル名の"スクリーンショット"の部分を変更

```sh
defaults write com.apple.screencapture name "Capture"
```

### ファイル名の日付を非表示に

```sh
defaults write com.apple.screencapture include-date -bool false
```

## Finderの設定

### タブバー・パスバーを表示

![](../../../images/mac-first-setting-tabpath.jpg)