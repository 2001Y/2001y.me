---
title: "[Gmail]過去のメールを含め、全てのメールを他のアカウントに移行する方法"
date: 2020-09-29T02:00:22+09:00
categories: ["Other"]
tags: ["ブログ"]
---
Googleの空き容量がなくなってしまったみたいで、折角[GSuiteで容量無制限](https://2001y.me/blog/gadget/gsuite-unlimit/)なのにメールを消去するのももったいないので、全てGSuiteのGmailに転送してみました。

![Gmailの空き容量がなくなりました](../../../images/gmail-alltransfer-0.jpg)

わかりにくくなるので、転送元はブラック背景、転送先はホワイト背景です。

## 転送"元"のGmailで設定

### すべてをPOPダウンロードするように指定

転送元の[Gmail設定のメール転送とPOP/IMAP](https://mail.google.com/mail/u/0/?tab=wm#settings/fwdandpop)を開き、POPダウンロードの<b>すべてのメール</b>にチェックを入れる。保存はページの一番下にあるので忘れないように保存する。

![](../../../images/gmail-alltransfer-1.jpg)

## 転送"先"のGmailの設定

転送先の[Gmail設定のアカウント](https://mail.google.com/mail/u/1/#settings/accounts)を開き、<b>メールアカウントを追加する</b>。

![](../../../images/gmail-alltransfer-2.jpg)

<b>転送"元"のメールアドレス</b>を入力し、次へ。

![](../../../images/gmail-alltransfer-3.jpg)

<b>転送"元"Googleアカウントのパスワード</b>を入力して、アカウントを追加。2段階認証が有効な場合はアプリパスワードを使用します。（手順は後記の通り）

![](../../../images/gmail-alltransfer-4.jpg)

メール送信は別にしなくて良いので、これで設定完了です。

![](../../../images/gmail-alltransfer-7.jpg)

### 2段階認証をつけている場合：アプリパスワードを取得する

転送元Googleアカウントのパスワードを入力しても以下のようなエラーが出る場合は、二段階認証が有効になっています。その場合はGoogleアカウントのパスワードではなく、アプリパスワードを指定する必要があります。

![指定のユーザー名とパスワードによるPOP3アクセスはサーバーで拒否されました。サーバーから返されたエラー: "[AUTH] Application-specific password required: https://support.google.com/accounts/answer/185833"](../../../images/gmail-alltransfer-5.jpg)

<b>転送"元"Googleアカウント</b>のセキュリティ設定の[アプリパスワード](https://myaccount.google.com/apppasswords)を開き新しいアプリパスワードを作成します。

![](../../../images/gmail-alltransfer-6.jpg)

***

設定を終えて転送先の[Gmail設定のアカウント](https://mail.google.com/mail/u/1/#settings/accounts)を確認すると転送を行なっていることがわかります。200通づつにわけて受信するみたいです。

![](../../../images/gmail-alltransfer-7-1380352.jpg)

▶︎ [How to Transfer Emails from One Gmail Account to Another｜YouTube](https://www.youtube.com/watch?v=yyhb6Rl_2BY)