let teastirImage, nextButtonImage;
let teastirImgX, teastirImgY, teastirImgW, teastirImgH;
let nextButtonX, nextButtonY, nextButtonW, nextButtonH;

function preload() {
  teastirImage = loadImage("teastir.gif");
  nextButtonImage = loadImage("nextbutton.png");  // load the button image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // sets background color
  background(38, 44, 108);

  // og window size
  let imgWidth = teastirImage.width;
  let imgHeight = teastirImage.height;

  // calculates scale factor to keep aspect ratio
  let scale = min(width / imgWidth, height / imgHeight);

  // resizes image based on scale factor
  teastirImgW = imgWidth * scale;
  teastirImgH = imgHeight * scale;

  // centers image
  teastirImgX = (width - teastirImgW) / 2;
  teastirImgY = (height - teastirImgH) / 2;

  // draws new image
  image(teastirImage, teastirImgX, teastirImgY, teastirImgW, teastirImgH);

  // place button (in far-right center
  nextButtonW = nextButtonImage.width * 1.2;
  nextButtonH = nextButtonImage.height * 1.2;
  nextButtonX = width - nextButtonW - 20;  // 20 pixels from the right edge
  nextButtonY = height / 2 - nextButtonH / 2;  // vertically centered

  // Draw the button image
  image(nextButtonImage, nextButtonX, nextButtonY, nextButtonW, nextButtonH);
}

// Check if the next button is clicked
function mousePressed() {
  // Check if the mouse click is inside the button's area
  if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
      mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
    window.location.href = "matchburn.html";  // Redirect to matchburn.html
  }
}

// adjusts canvas size when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
