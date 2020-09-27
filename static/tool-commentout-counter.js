function count(e) {
  let out = 0,out2 = 0,
      e2 = e.replace(/\r?\n/g,""),
      split = e.split('\n'); //改行ごとに区切って配列化
  for (let i = 0; i < split.length; i++) {
    if (!split[i].startsWith('//')){ //IF：行始めが"//"ではない時
      out = out + split[i].length; //コメントアウトを含まない場合
      out2 = out2 + split[i].trim().length; //空白とコメントアウトを含まない場合
    }
  }
  //出力
  counter.innerText = out;
  normal.innerText = e2.length;
  nospace.innerText = e2.trim().length;
  counternospace.innerText = out2;
  selectionStart.innerText = editor.selectionStart;
  select.innerText = String(document.getSelection()).length;
}