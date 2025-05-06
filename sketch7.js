// CARDSPREAD PAGE _________________________

let cardspreadImage;
let cardspreadImgX, cardspreadImgY, cardspreadImgW, cardspreadImgH;

let relativeZones = [
  { xRatio: 0.1, yRatio: 0.4, wRatio: 0.15, hRatio: 0.3, link: "hearts.html" },
  { xRatio: 0.3, yRatio: 0.4, wRatio: 0.15, hRatio: 0.3, link: "diamonds.html" },
  { xRatio: 0.525, yRatio: 0.4, wRatio: 0.15, hRatio: 0.3, link: "clubs.html" },
  { xRatio: 0.75, yRatio: 0.4, wRatio: 0.15, hRatio: 0.3, link: "spades.html" }
];

let showZones = true;

function preload() {
  cardspreadImage = loadImage("cardspread.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(152, 194, 202);

  // Resize and center image while keeping aspect ratio
  let imgWidth = cardspreadImage.width;
  let imgHeight = cardspreadImage.height;
  let scale = min(width / imgWidth, height / imgHeight);

  cardspreadImgW = imgWidth * scale;
  cardspreadImgH = imgHeight * scale;
  cardspreadImgX = (width - cardspreadImgW) / 2;
  cardspreadImgY = (height - cardspreadImgH) / 2;

  image(cardspreadImage, cardspreadImgX, cardspreadImgY, cardspreadImgW, cardspreadImgH);

  if (showZones) {
    fill(0, 0, 0, 0);
    noStroke();
    for (let zone of relativeZones) {
      let extraW = 40 / cardspreadImgW; // 10px width increase converted to ratio
      let extraH = 200 / cardspreadImgH; // 20px height increase converted to ratio

      let zx = cardspreadImgX + (zone.xRatio - extraW / 2) * cardspreadImgW;
      let zy = cardspreadImgY + (zone.yRatio - extraH / 2) * cardspreadImgH;
      let zw = (zone.wRatio + extraW) * cardspreadImgW;
      let zh = (zone.hRatio + extraH) * cardspreadImgH;

      rect(zx, zy, zw, zh);
    }
  }
}

function mousePressed() {
  for (let zone of relativeZones) {
    let extraW = 10 / cardspreadImgW;
    let extraH = 20 / cardspreadImgH;

    let zx = cardspreadImgX + (zone.xRatio - extraW / 2) * cardspreadImgW;
    let zy = cardspreadImgY + (zone.yRatio - extraH / 2) * cardspreadImgH;
    let zw = (zone.wRatio + extraW) * cardspreadImgW;
    let zh = (zone.hRatio + extraH) * cardspreadImgH;

    if (mouseX >= zx && mouseX <= zx + zw &&
        mouseY >= zy && mouseY <= zy + zh) {
      window.location.href = zone.link;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}