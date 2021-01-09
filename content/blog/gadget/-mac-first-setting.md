---
title: "ぼくがMacを買って最初に変えるオススメの設定"
date: 2020-12-23T00:00:22+09:00
img: partyshare
categories: ["Gadget"]
tags: ["XnConvert","MacApp","Mac"]
---



{{<ad>}}

## 　　　　　　　Finderの設定

### 環境設定

![](../../../images/mac-first-setting-finder.jpg)

### タブバー・パスバーを表示

![](../../../images/mac-first-setting-tabpath.jpg)

### 表示オプションの設定

![](../../../images/mac-first-setting-displayoptions.jpg)

## Dockの設定

### アプリケーションフォルダを追加

![](../../../images/mac-first-setting-dock-folder.jpg)

### フォルダの表示設定 

![](../../../images/mac-first-setting-dock-folder-setting.jpg)

{{<ad>}}

## システム環境設定の設定

### トラックパッド：素早く、タップだけで、静かに、クリックできるように

![](../../../images/mac-first-setting-trackpad.jpg)　

### 3本指のドラッグを有効に

{{<blogcard url="https://support.apple.com/ja-jp/HT204609">}}

### ディスプレイ：解像度を "スペースを拡大" に

![](../../../images/mac-first-setting-resolution.jpg)

### 一般：サイドバーのアイコンサイズを "小" に

![](../../../images/mac-first-setting-general.jpg)

### Dockとメニューバー：Dockを自動的に表示/非表示に

![](../../../images/mac-first-setting-dockmenubar.jpg)

{{<ad>}}

## ターミナルでの設定

### Dockの設定

#### アニケーションスピードを0にして高速に表示/非表示

```sh
defaults write com.apple.dock autohide-time-modifier -int 0; killall Dock
```

#### アプリを"非表示"にした時にDockのアイコンを半透明に

```sh
defaults write com.apple.dock showhidden -bool true
```

### スクリーンショットの設定

killall SystemUIServerはSierra以降であれば不要です。

#### 保存形式をjpgに

```sh
defaults write com.apple.screencapture type jpg
```

#### ファイル名の"スクリーンショット"の部分を変更

```sh
defaults write com.apple.screencapture name "Capture"
```

#### ファイル名の日付を非表示に

```sh
defaults write com.apple.screencapture include-date -bool false
```
