let json, txt, size3 
fetch("https://unpkg.com/unicode-emoji-json/data-ordered-emoji.json")
  .then(
    function (u) {
      return u.json();
    }
  )
  .then(
    function(e){
      json = e;
    }
)

function emojiF() {
  if (emojiFixed.checked) {
    emoji.focus();
    emoji.disabled = false;
  } else {
    emoji.blur()
    emoji.disabled = true;
  }
}
emojiF();

function sizeF() {
  if (sizeDouble.checked) {
    sizeDoubleNum.focus();
    sizeDoubleNum.disabled = false;
  } else {
    sizeDoubleNum.blur()
    sizeDoubleNum.disabled = false;
  }
  if (sizeFixed.checked) {
    sizeFixedNum.focus();
    sizeFixedNum.disabled = false;
  } else {
    sizeFixedNum.blur()
    sizeFixedNum.disabled = false;
  }
}
sizeF();

const MODEL_URL = '/face-api/models/';
let file = document.getElementById('file');
let canvas = document.getElementById('canvas');
let canvasWidth = 350;
let canvasHeight = 350;
let uploadImgSrc;

var ctx = canvas.getContext('2d', { alpha: false });

function loadLocalImage(e) {
  // ファイル情報を取得
  let fileData = e.target.files[0]

  let new_ele=document.createElement("style");
  new_ele.innerHTML = "#file:before { content: '" + fileData.name + "' !important }";
  document.body.appendChild(new_ele);
  
  // FileReaderオブジェクトを使ってファイル読み込み
  let reader = new FileReader()
  // ファイル読み込みに成功したときの処理
  reader.onload = function() {
    // Canvas上に表示する
    uploadImgSrc = reader.result;
    canvasDraw(fileData)
  }
  // ファイル読み込みを実行
  reader.readAsDataURL(fileData)
}
// ファイルが指定された時にloadLocalImage()を実行
file.addEventListener('change', loadLocalImage, false)
// Canvas上に画像を表示する
function canvasDraw() {
  info.innerText = " - 準備中"
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  
  // Canvas上に画像を表示
  let img = new Image()
  img.src = uploadImgSrc
  img.onload = function() {

    canvasWidth = this.naturalWidth;
    canvasHeight = this.naturalHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    ctx.drawImage(img, 0, 0, canvasWidth, this.height * (canvasWidth / this.width))
    // let canvasRate = canvasWidth / this.width

    //顔の情報を取得
    getFaceData(img)
    // getFaceData(img, canvasRate)
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

async function getFaceData(img) {
// async function getFaceData(img, canvasRate) {
  await faceapi.nets.tinyFaceDetector.load(MODEL_URL) //モデル読み込み
  await faceapi.nets.faceLandmark68Net.load(MODEL_URL) //モデル読み込み
  // 顔検出の実行
  const detectionsWithLandmarks =
    await faceapi.detectAllFaces(img, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks()
  
  if (detectionsWithLandmarks.length == 0) {
    alert('人間じゃないよ')
  } else {
    for (let n = 0; n < detectionsWithLandmarks.length; n++) {
      let positions = detectionsWithLandmarks[n].landmarks._positions;
      // let x0 = positions[30].x * canvasRate
      // let y0 = positions[1].y * canvasRate

      if (emojiRandom.checked) {
        txt = json[getRandomInt(94)];
      }
      // if (emojiExpression.checked) {
      //   txt = emoji.value;
      // }
      if (emojiFixed.checked) {
        txt = emoji.value;
      }

      if (sizeAuto.checked) {
        size3 = (positions[9].y - positions[28].y)*1.7 + 'px'
      }
      if (sizeDouble.checked) {
        size3 = (positions[9].y - positions[28].y)*1.7*sizeDoubleNum.value + 'px'
      }
      if (sizeFixed.checked) {
        size3 = sizeFixedNum.value
      }

      ctx.font = size3 + ' Arial';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(txt, positions[30].x, positions[2].y);

      document.getElementById("download").href = canvas.toDataURL();
      info.innerText = " - 完了"

    }
  }
}