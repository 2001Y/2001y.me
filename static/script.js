window.addEventListener('load', () =>{ quicklink.listen(); });
let good = 0,bad = 0,
    url = "https://script.google.com/macros/s/AKfycbzr7POkqR-9iXI_8ph6Rskx7O-GKNddUy2DObZoKV9UEqN3L7V3/exec?post=" + title;
    once = function(e){
            let call = false,
                result = undefined;
            return function(){
              if(!call) {
                result = e.apply(this, arguments);
                call = true;
              }   
              return result;
            }},
    voting = once(function(voting) {
                    if (voting == "good") {
                      good = good + 1;
                      goodElem.classList.add('stop');
                    } else {
                      bad = bad + 1;
                      badElem.classList.add('stop');
                    }
                    stop();
                    fetch(url + "&voting=" + voting);
                    localStorage.setItem(title, 'voting')
                  });
fetch(url)
.then((resp) => {
  return resp.json();
})
.then((json) => {
  good = Number(json.good);
  bad = Number(json.bad);
  if(localStorage.getItem(title)){
    stop();
  }
})
setTimeout("open();", 15000);
function hidden() {
  if (document.hidden) {
    open();
  }
}
document.addEventListener("visibilitychange", hidden, false);

window.onload = function () {
  let observer = new IntersectionObserver(function(entries) {
    for (entry of entries) {
      if (entry.isIntersecting) {
        if (fixed.classList.contains("fixed")){
          fixed.classList.remove("fixed");
        }
      } else {
        if (!fixed.classList.contains("fixed")){
          fixed.classList.add('fixed');
        }
      }
    }
  });
  observer.observe(header);
};

let img = document.querySelectorAll("main picture"),
    jpeg = document.getElementById("lightbox-jpeg"),
    webp = document.getElementById("lightbox-webp"),
    figcaption = document.getElementById("lightbox-figcaption"),
    lightbox = document.getElementById("lightbox");

var LbObserver = new IntersectionObserver(handle);
function handle(e) {
  e.forEach(function(a) {
    if (a.intersectionRatio) {
      lbClose();
      LbObserver.disconnect()
    }
  });
}
for (let i = 0; i < img.length; ++i) {
  img[i].onclick = function () {
    let original = this.dataset.original,
        text = this.dataset.figcaption;
    webp.srcset= original + ".webp";
    jpeg.src = original + ".jpg";
    figcaption.innerHTML = text;
    lightbox.classList.add('open');
    lightbox.classList.remove('close');
    Top.style.top = pageYOffset - 100 + "px";
    Bottom.style.top = pageYOffset + innerHeight + 100 + "px";
    LbObserver.observe(Top);
    LbObserver.observe(Bottom);
  }
}
lightbox.onclick = lbClose;
document.onkeydown = function(e) {
  if (e.keyCode == 27) {
    lbClose();
  }
};
function lbClose() {
  lightbox.classList.add('close');
  lightbox.classList.remove('open');
  setTimeout("lbDelete();", 500);
}
function lbDelete() {
  webp.srcset= "data:image/gif;base64,R0lGODlhAQABAGAAACH5BAEKAP8ALAAAAAABAAEAAAgEAP8FBAA7";
  jpeg.src = "data:image/gif;base64,R0lGODlhAQABAGAAACH5BAEKAP8ALAAAAAABAAEAAAgEAP8FBAA7";
}

function open(){
  Voting.classList.add("hover");
}
function block(){
  Voting.classList.remove('hover');
  setTimeout("Voting.classList.remove('normal');Close.classList.add('normal');", 1000);
}
function stop(){
    goodElem.innerHTML = String(good);
    badElem.innerHTML = String(bad);
    goodElem.classList.add('done');
    badElem.classList.add('done');
    votingText.innerHTML = "ありがとうございます！";
    setTimeout("Voting.classList.remove('hover');", 1000);
}