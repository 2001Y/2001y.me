function F() {
  title = title.value;
  url = url.value;
  file = file.files[0];

  const reader = new FileReader();
  reader.addEventListener("load", function () {
    img = reader.result;
  }, false);
  F1(title, url, img);
}

function F1(title, url, img) {
  alert();
  open.href = 'data:text/html;charset=utf-8,<html><head><title>' +
    title +
    '</title><meta name=apple-mobile-web-app-capable content=yes><meta name=apple-mobile-web-app-status-bar-style content=black><meta name=viewport content="width = device - width, initial - scale=1"><link rel=apple-touch-icon href=' +
    img +
    '></head><body style=margin:0><script>if(!window.navigator.standalone){document.write("このページをホームに追加してください")}</script><iframe src="' +
    url +
    '" width=100% height=100% frameborder=0></iframe></body></html>';
}