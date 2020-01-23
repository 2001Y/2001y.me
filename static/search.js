let params = new URLSearchParams(location.search);
if (params.get("s")) {
  search(params.get("s"));
}
let body = main.outerHTML;

function search(query) {
  if(query.trim()){
    let result = searchData(query);
    let html = createHtml(result);
    showResult(html);
    if (searchResult.classList.contains("close")){
      searchResult.classList.remove("close");
    }
    if (!main.classList.contains("close")){
      main.classList.add('close');
    }
    if (!categoryBox.classList.contains("none")){
      categoryBox.classList.add('none');
    }
  } else {
    if (!searchResult.classList.contains("close")){
      searchResult.classList.add("close");
    }
    if (main.classList.contains("close")){
      main.classList.remove('close');
    }
    if (categoryBox.classList.contains("none")){
      categoryBox.classList.remove('none');
    }
  }
}
function searchData(query) {
  let result = [];
  query = query.trim();
  if (query.length < 1) {
    return result;
  }
  let re = new RegExp(query, 'i');
  for (let i = 0; i < data.length; ++i) {
    let pos = data[i].body.search(re);
    if (pos != -1) {
      result.push([i, pos, pos + query.length]);
    }
  }
  return result;
}
function createHtml(result) {
  let htmls = [];
  for (let i = 0; i < result.length; ++i) {
    let dataIndex = result[i][0],
        startPos = result[i][1],
        endPos = result[i][2],
        url = data[dataIndex].url,
        title = data[dataIndex].title,
        img = data[dataIndex].img,
        date = data[dataIndex].date,
        category = data[dataIndex].category,
        body = data[dataIndex].body;
    htmls.push(createEntry(url,title,img,date,category,body,startPos,endPos));
  }
  return htmls.join('');
}
function createEntry(url,title,img,date,category,body,startPos,endPos) {
  return '<a href=' + url + ' title=' + title + '｜2001Y.me><article class="post ' + category + '"><svg class=post-tmb><image xlink:href="/tmb/' + img + format + '" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" clip-path="url(#tmb)"/></svg><div class=post-data><h2>' + title + '</h2><div class=post-meta><time>' + date + '</time>・' + category + '</div><p>' + excerpt(body, startPos, endPos) + '</p></div></article></a>';
}
function excerpt(body, startPos, endPos) {
  return [
    body.substring(startPos - 10, startPos),
    '<b>', body.substring(startPos, endPos), '</b>',
    body.substring(endPos, endPos + 30)
  ].join('');
}
function showResult(html) {
  if(html){
    searchResult.innerHTML = html;
  } else {
    searchResult.innerHTML = "検索結果がありません。"
  }
}