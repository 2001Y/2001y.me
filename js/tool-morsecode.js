let json = {
  "0": "----- ",
  "1": ".---- ",
  "2": "..--- ",
  "3": "...-- ",
  "4": "....- ",
  "5": "..... ",
  "6": "-.... ",
  "7": "--... ",
  "8": "---.. ",
  "9": "----. ",
  "a": ".- ",
  "b": "-... ",
  "c": "-.-. ",
  "d": "-.. ",
  "e": ". ",
  "f": "..-. ",
  "g": "--. ",
  "h": ".... ",
  "i": ".. ",
  "j": ".--- ",
  "k": "-.- ",
  "l": ".-.. ",
  "m": "-- ",
  "n": "-. ",
  "o": "--- ",
  "p": ".--. ",
  "q": "--.- ",
  "r": ".-. ",
  "s": "... ",
  "t": "- ",
  "u": "..- ",
  "v": "...- ",
  "w": ".-- ",
  "x": "-..- ",
  "y": "-.-- ",
  "z": "--.. ",
  ".": ".-.-.- ",
  ",": "--..-- ",
  "?": "..--.. ",
  "!": "-.-.-- ",
  "-": "-....- ",
  "/": "-..-. ",
  "@": ".--.-. ",
  "(": "-.--. ",
  ")": "-.--.- ",
  "": " ",
},
  morse = document.querySelector("#morse"),
  english = document.querySelector("#english"),
  out;

function encode(e) {
  out = "";
  e = e.toLowerCase().replace(/[\n\r]/g,"").split("");
  for (let i = 0; i < e.length; i++) {
    out = out + json[e[i]];
  }
  morse.value = out;
}

function decode(e) {
  out = "";
  e = (e + " ").split(" ");
  for (let i = 0; i < e.length; i++) {
    let result = Object.keys(json).filter(
      function (k) {
        return json[k] == e[i] + " "
      }
    )[0];
    out = out + result;
  }
  if (out.includes("undefined")){
    english.value = "error：正しい信号を入力してください";
  } else {
    english.value = out;
  }
}