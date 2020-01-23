format = ".webp";
let webp = new Image();
webp.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
webp.onerror = function(){
  document.body.innerHTML = document.body.innerHTML.split(".webp").join(".jpg");
  format = ".jpg";
}

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
setTimeout("open();", 10000);

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
    setTimeout("Voting.classList.remove('hover');", 200);
}