// CLUBS PAGE _________________________

let clubsImage;

let clubsImgX, clubsImgY, clubsImgW, clubsImgH;

// sets images to load
function preload() {
  clubsImage = loadImage("clubs.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // sets background color
  background(152, 194, 202);

  // original image size
  let imgWidth = clubsImage.width;
  let imgHeight = clubsImage.height;

  // calculates scale factor to keep aspect ratio
  let scale = min(width / imgWidth, height / imgHeight);

  // resizes image based on scale factor
  clubsImgW = imgWidth * scale;
  clubsImgH = imgHeight * scale;

  // centers image
  clubsImgX = (width - clubsImgW) / 2;
  clubsImgY = (height - clubsImgH) / 2;

  // draws the clubs image
  image(clubsImage, clubsImgX, clubsImgY, clubsImgW, clubsImgH);
}

// triggered when the cursor is clicked anywhere on the canvas
function mousePressed() {
  // mouse click within the bounds of the image
  if (
    mouseX >= clubsImgX && 
    mouseX <= clubsImgX + clubsImgW &&
    mouseY >= clubsImgY && 
    mouseY <= clubsImgY + clubsImgH
  ) {
    // redirect to clubsfatespinner.html if clicked within the image area
    window.location.href = "clubsfatespinner.html";
  }
}

// adjusts canvas size when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}