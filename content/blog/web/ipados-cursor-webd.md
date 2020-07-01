---
title: iPadOSのカーソルをWebで再現したJS,CSS
date: 2020-06-10T01:00:22+09:00
img: ipados-cursor-webd
categories: ["Web"]
tags: ["JS","CSS","HTML"]

---

今までも一応iPadでもマウスなどを使えましたが、iPadOS 13.4 からiPadに新しいカーソル、ポインターが追加されました。そのカーソルがとても斬新で、カーソル自体が形を変えます。

私はこのカーソルがお気に入りで、このブログにも取り込もうとトライしてきました。しかし、Codepenにかなり良く再現れたものが載っていたのでメモしておきたいと思います。

## iPadOS in HTML/CSS/JS by [@cezzre](https://twitter.com/cezzre/status/1243921695699853315)

カーソルの背景より内部が大きく引きつけられる再現がされています。

<iframe height="304" style="width: 100%;" scrolling="no" title="iPadOS 13.4 Cursor (Demo)" src="https://codepen.io/cezzre/embed/poJxLEM?height=304&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/cezzre/pen/poJxLEM'>iPadOS 13.4 Cursor (Demo)</a> by Ce
  (<a href='https://codepen.io/cezzre'>@cezzre</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## さいごに

このブログではPCで文章がテキストカーソルに切り替わるとうざいかなと思って、クリックしながら移動した場合にテキストカーソルにしていますが、こっちのほうが素直なのかな。

あと、Safariは cursor:none !important; をつけていても、テキストを選択するときだけカーソルが見えるのがとても気になります...。