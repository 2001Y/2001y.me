---
title: "npm5からnpm cache cleanだけではダメらしい"
date: 2021-03-10T0:00:22+09:00
categories: ["Web"]
tags: ["npm","MacCommand"]

---

{{<ad>}}

## npm5からnpm cache cleanだけではダメらしい

gulpに不具合があり、`npm cache clean`しようとするとうまくいかない。

```sh
$ npm cache clean
npm ERR! As of npm@5, the npm cache self-heals from corruption issues
npm ERR! by treating integrity mismatches as cache misses.  As a result,
npm ERR! data extracted from the cache is guaranteed to be valid.  If you
npm ERR! want to make sure everything is consistent, use `npm cache verify`
npm ERR! instead.  Deleting the cache can only make npm go slower, and is
npm ERR! not likely to correct any problems you may be encountering!
npm ERR! 
npm ERR! On the other hand, if you're debugging an issue with the installer,
npm ERR! or race conditions that depend on the timing of writing to an empty
npm ERR! cache, you can use `npm install --cache /tmp/empty-cache` to use a
npm ERR! temporary cache instead of nuking the actual one.
npm ERR! 
npm ERR! If you're sure you want to delete the entire cache, rerun this command
npm ERR! with --force.
npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/アカウント名/.npm/_logs/YYYY-MM-DDT00_HH_MM_SSZ-debug.log
```

`npm cache verify --force`でnpmキャッシュを消すことができた。

```sh
$ npm cache verify --force
npm WARN using --force Recommended protections disabled.
Cache verified and compressed (~/.npm/_cacache)
Content verified: 1508 (24897953 bytes)
Index entries: 1508
Finished in 5.363s
```

sauce: [https://westhillworker.com/npm-errors-first/](https://westhillworker.com/npm-errors-first/)