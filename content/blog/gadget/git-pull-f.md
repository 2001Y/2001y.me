---
title: "git pullを強制してローカルを上書き"
date: 2021-03-10T0:00:22+09:00
categories: ["Gadget"]
tags: ["Git","MacCommand"]

---

{{<ad>}}

## git pullを強制してローカルを上書きさせる

`git push -f`は存在するが、`git pull -f`は存在しないらしい。

なので、Githubなどのリモートのデータでローカルを上書きさせるためには以下の方法でうまくいった。

```sh
git fetch origin main
git reset --hard origin/main
```

### Githubのデフォルトブランチはmainに変更された

Githubのデフォルトブランチは`master`から`main`に変更されたため、最近作成されたリポジトリでは多くのサイトで紹介されている以下の方法ではうまくいかない。

```sh
git fetch origin master
git reset --hard origin/master
```