function bookmark(title,bookmark) {
  
  if (navigator.share) {
    navigator.share({
      title: title,
      text: title,
      url: bookmark
    });
  } else {
    alert('このブラウザはシェア機能に対応していません。');
  }
}