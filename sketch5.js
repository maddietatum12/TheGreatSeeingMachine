// MATCHBURN PAGE _________________________

let matchburnImage;

let matchburnImgX, matchburnImgY, matchburnImgW, matchburnImgH;

// sets images to load
function preload() {
  matchburnImage = loadImage("matchburn.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  // sets background color
  background(254, 124, 138);

  // original image size
  let imgWidth = matchburnImage.width;
  let imgHeight = matchburnImage.height;

  // calculates scale factor to keep aspect ratio
  let scale = min(width / imgWidth, height / imgHeight);

  // resizes image based on scale factor
  matchburnImgW = imgWidth * scale;
  matchburnImgH = imgHeight * scale;

  // centers image
  matchburnImgX = (width - matchburnImgW) / 2;
  matchburnImgY = (height - matchburnImgH) / 2;

  // draws the matchburn image
  image(matchburnImage, matchburnImgX, matchburnImgY, matchburnImgW, matchburnImgH);
}

// triggered when the cursor cicked anywhere on the canvas
function mousePressed() {
  // mouse click within the bounds of the image
  if (
    mouseX >= matchburnImgX && 
    mouseX <= matchburnImgX + matchburnImgW &&
    mouseY >= matchburnImgY && 
    mouseY <= matchburnImgY + matchburnImgH
  ) {
    // redirect to matchblow.html if clicked within the image area
    window.location.href = "matchblow.html";
  }
}

// adjusts canvas size when window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight); 
}