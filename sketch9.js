// DIAMONDS PAGE _________________________

let diamondsImage;

let diamondsImgX, diamondsImgY, diamondsImgW, diamondsImgH;

// sets images to load
function preload() {
  diamondsImage = loadImage("diamonds.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  // sets background color
  background(152, 194, 202);

  // original image size
  let imgWidth = diamondsImage.width;
  let imgHeight = diamondsImage.height;

  // calculates scale factor to keep aspect ratio
  let scale = min(width / imgWidth, height / imgHeight);

  // resizes image based on scale factor
  diamondsImgW = imgWidth * scale;
  diamondsImgH = imgHeight * scale;

  // centers image
  diamondsImgX = (width - diamondsImgW) / 2;
  diamondsImgY = (height - diamondsImgH) / 2;

  // draws the diamonds image
  image(diamondsImage, diamondsImgX, diamondsImgY, diamondsImgW, diamondsImgH);
}

// triggered when the cursor is clicked anywhere on the canvas
function mousePressed() {
  // mouse click within the bounds of the image
  if (
    mouseX >= diamondsImgX && 
    mouseX <= diamondsImgX + diamondsImgW &&
    mouseY >= diamondsImgY && 
    mouseY <= diamondsImgY + diamondsImgH
  ) {
    // redirect to diamondsfatespinner.html if clicked within the image area
    window.location.href = "diamondsfatespinner.html";
  }
}

// adjusts canvas size when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}