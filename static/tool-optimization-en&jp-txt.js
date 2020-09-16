function f(){
  let enList = enInput.value.split("."),
      jpList = jpInput.value.split("。"),
      output = "";
  for (let i = 0; i < jpList.length; i++) {
    let en = enList[i];
    if (en.includes("\n")) {
      en = "\n" + en.trim();
    } else {
      en = en.trim();
    }
    output = output + en + ".\n" + jpList[i].trim() + "。\n";
  }
  outputInput.value = output.slice(0, -4);
}

if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}