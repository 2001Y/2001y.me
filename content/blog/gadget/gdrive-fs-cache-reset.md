---
title: [Mac]GoogleDriveFileStreamがマウントされない時
date: 2020-06-12T08:00:22+09:00
img: gdrive-fs-cache-reset
categories: ["Gadget"]
tags: ["GSuite","GoogleDrive","GoogleDriveFileStream","Google","Mac"]
---
GSuiteの Googleドライブ ファイル ストリーム （以下GDriveFS）を使っていて、気づいたたらドライブがマウントされていなくて、GDriveFSを再起動したり、WiFiの再接続、Macの再起動なんかを試しても治らないことが何度か続きました。

[AppCleaner](https://freemacsoft.net/appcleaner/) でアプリの関連ファイル一式を消して、[再インストール](https://support.google.com/a/answer/7491144?hl=ja#windows)してもなおりませんでした。Googleログインも残ったまま。

## キャッシュを消去する

![この中にログイン情報も含まれてるみたい](../../../images/drive-fs-cache-reset-1.jpg)

```
/Users/[ユーザー名]/Library/Application Support/Google/DriveFS
```

上記のパスのフォルダを消すことでキャッシュを消去することができました。（GDriveFSの設定からキャッシュ場所は指定できる）

約800GBのGDriveFS容量で、ローカルキャッシュは15GBほどでした。ホントに助かる...。

### 参考

[ドライブ ファイル ストリームをデプロイする - G Suite 管理者 ヘルプ](https://support.google.com/a/answer/7491144?hl=ja#uninstall)