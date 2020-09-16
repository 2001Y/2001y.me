let base = "https://script.google.com/macros/s/AKfycbx0APNv1zQVNPP_7HhCl5C_OPiDtCtCl0QhtLVZQmDLWfF-7Ln2/exec?",
    enTimer, jaTimer, enI, jaI, output;

function en() {
  if (enTimer) { clearTimeout(enTimer); }
  enTimer = setTimeout(enF(), 500);
}
function ja() {
  if (jaTimer) { clearTimeout(jaTimer); }
  jaTimer = setTimeout(jaF(), 500);
}

function enF() {
  enT = enInput.value;
  url = base + "source=en&target=ja&text=" + enT;

  fetch(url).then(function(resp) {
    return resp.json();
  })
  .then(function (json) {
    jaT = json.text;
    jaInput.value = jaT;

    let enL = enT.split("."),
        jaL = jaT.split("。"),
        out = "";
    
    for (let i = 0; i < enL.length; i++) {
      let enLi = enL[i];
      if (enLi.includes("\n")) {
        out = out + "\n" + enLi.trim() + ".\n" + jaL[i].trim() + "。\n";
      } else {
        out = out + enLi.trim() + ".\n" + jaL[i].trim() + "。\n";
      }
    }
    outputInput.value = out.slice(0, -4);
  })
}

function jaF() {
  jaT = jaInput.value;
  url = base + "source=ja&target=en&text=" + jaT;

  fetch(url).then(function(resp) {
    return resp.json();
  })
  .then(function (json) {
    enT = json.text;
    enInput.value = enT;

    let enL = enT.split("."),
        jaL = jaT.split("。"),
        out = "";
    
    for (let i = 0; i < jaL.length; i++) {
      let jaLi = jaL[i];
      if (jaLi.includes("\n")) {
        out = out + "\n" + enL[i].trim() + ".\n" + jaLi.trim() + "。\n";
      } else {
        out = out + enL[i].trim() + ".\n" + jaLi.trim() + "。\n";
      }
    }
    outputInput.value = out.slice(0, -4);
  })
}

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}