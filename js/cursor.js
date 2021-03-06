let move = 0;
if (!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/i)) {
  let cursor = document.getElementById('cursor'),
      link = document.querySelectorAll('a,button,input[type="button"],#article img,#article source,.submit'),
      text = document.querySelectorAll('input[type="text"],input[type="search"],textarea,pre,.submit');
  document.addEventListener('mousemove', mousemove);
  document.addEventListener('mousedown', mousedown);
  document.addEventListener('mouseup', mouseup);
  for (let i = 0; i < link.length; i++){
    link[i].addEventListener('mouseenter', pointCursor);
    link[i].addEventListener('mouseleave', remove);
  }
  for (let i = 0; i < text.length; i++){
    text[i].addEventListener('mouseenter', textCursor);
    text[i].addEventListener('mouseleave', remove);
  }
}

function mousemove(e){
  cursor.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
}
function mousedown(){
  pointCursor();
  document.addEventListener('mousemove', moveTextCursor);
}
function mouseup(){
  let div = document.createElement('div');
  div.className = 'click';
  cursor.appendChild(div);
  document.removeEventListener("mousemove", moveTextCursor); 
  move = 0;
  remove();
}

function remove(){
  cursor.classList.remove('red','zoom','text');
}
function pointCursor(){
  if(!move){
    cursor.classList.add('zoom','red');
  }
}
function textCursor(){
  cursor.classList.add('text','red');
}
function moveTextCursor(){
  textCursor();
  move = 1;
}