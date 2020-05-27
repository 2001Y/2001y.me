---
title: addEventListenerは引数が使えない
date: 2020-02-05T08:00:22+09:00
img: 
categories: ["Web"]
tags: ["Blog","JavaScript"]
draft: true

---

# npm install に失敗するパターン

## symlinkに失敗する

実際に出るエラーは以下のような感じ

```
npm ERR! syscall symlink
npm ERR! EPROTO: protocol error, symlink '../mime/cli.js' -> '/home/vagrant/Code/node_modules/.bin/mime'
```

**原因**
Windowsでは共有フォルダ内にsymlinkを貼ることが出来ない。

**対処**
出来るようにしてもいいが`--no-bin-link`フラグをつければそもそもsymlinkを利用しないため通るようになる。

参考文献

[メモ]vagrantでnpm install中に出たエラーまとめ

https://qiita.com/yosida001/items/3c21acc79adf977e87c0https://zukucode.com/2017/05/javascript-addeventlistener-parameter.html)