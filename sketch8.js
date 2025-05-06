// HEARTS PAGE _________________________

let heartsImage;

let heartsImgX, heartsImgY, heartsImgW, heartsImgH;

// sets images to load
function preload() {
  heartsImage = loadImage("hearts.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  // sets background color
  background(152, 194, 202);

  // original image size
  let imgWidth = heartsImage.width;
  let imgHeight = heartsImage.height;

  // calculates scale factor to keep aspect ratio
  let scale = min(width / imgWidth, height / imgHeight);

  // resizes image based on scale factor
  heartsImgW = imgWidth * scale;
  heartsImgH = imgHeight * scale;

  // centers image
  heartsImgX = (width - heartsImgW) / 2;
  heartsImgY = (height - heartsImgH) / 2;

  // draws the matchburn image
  image(heartsImage, heartsImgX, heartsImgY, heartsImgW, heartsImgH);
}

// triggered when the cursor cicked anywhere on the canvas
function mousePressed() {
  // mouse click within the bounds of the image
  if (
    mouseX >= heartsImgX && 
    mouseX <= heartsImgX + heartsImgW &&
    mouseY >= heartsImgY && 
    mouseY <= heartsImgY + heartsImgH
  ) {
    // redirect to fatespinner.html if clicked within the image area
    window.location.href = "heartsfatespinner.html";
  }
}

// adjusts canvas size when window is resized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight); 
}