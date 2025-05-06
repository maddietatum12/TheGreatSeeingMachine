// MATCHBURN PAGE _________________________

let matchblowoutImage;

let matchblowoutImgX, matchblowoutImgY, matchblowoutImgW, matchblowoutImgH;

// sets images to load
function preload() {
  matchblowoutImage = loadImage("matchblowout.gif"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // sets background color
  background(254, 45, 67);

  // original image size
  let imgWidth = matchblowoutImage.width;
  let imgHeight = matchblowoutImage.height;

  // calculates scale factor to keep aspect ratio
  let scale = min(width / imgWidth, height / imgHeight);

  // resizes image based on scale factor
  matchblowoutImgW = imgWidth * scale;
  matchblowoutImgH = imgHeight * scale;

  // centers image
  matchblowoutImgX = (width - matchblowoutImgW) / 2;
  matchblowoutImgY = (height - matchblowoutImgH) / 2;

  // draws the matchblowout image
  image(matchblowoutImage, matchblowoutImgX, matchblowoutImgY, matchblowoutImgW, matchblowoutImgH);
}

// triggered when the cursor is clicked anywhere on the canvas
function mousePressed() {
  // debug output
  console.log(`mouseX: ${mouseX}, mouseY: ${mouseY}`);
  console.log(`matchblowoutImgX: ${matchblowoutImgX}, matchblowoutImgY: ${matchblowoutImgY}`);
  console.log(`matchblowoutImgW: ${matchblowoutImgW}, matchblowoutImgH: ${matchblowoutImgH}`);

  // mouse click within the bounds of the image
  if (
    mouseX >= matchblowoutImgX &&
    mouseX <= matchblowoutImgX + matchblowoutImgW &&
    mouseY >= matchblowoutImgY &&
    mouseY <= matchblowoutImgY + matchblowoutImgH
  ) {
    console.log("Redirecting to cardspread.html");
    // redirect to cardspread.html if clicked within the image area
    window.location.href = "cardspread.html";
  }
}

// adjusts canvas size when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}