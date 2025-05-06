// SPADES PAGE _________________________

let spadesImage;

let spadesImgX, spadesImgY, spadesImgW, spadesImgH;

// sets images to load
function preload() {
  spadesImage = loadImage("spades.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // sets background color
  background(152, 194, 202);

  // original image size
  let imgWidth = spadesImage.width;
  let imgHeight = spadesImage.height;

  // calculates scale factor to keep aspect ratio
  let scale = min(width / imgWidth, height / imgHeight);

  // resizes image based on scale factor
  spadesImgW = imgWidth * scale;
  spadesImgH = imgHeight * scale;

  // centers image
  spadesImgX = (width - spadesImgW) / 2;
  spadesImgY = (height - spadesImgH) / 2;

  // draws the spades image
  image(spadesImage, spadesImgX, spadesImgY, spadesImgW, spadesImgH);
}

// triggered when the cursor is clicked anywhere on the canvas
function mousePressed() {
  // mouse click within the bounds of the image
  if (
    mouseX >= spadesImgX && 
    mouseX <= spadesImgX + spadesImgW &&
    mouseY >= spadesImgY && 
    mouseY <= spadesImgY + spadesImgH
  ) {
    // redirect to spadesfatespinner.html if clicked within the image area
    window.location.href = "spadesfatespinner.html";
  }
}

// adjusts canvas size when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}