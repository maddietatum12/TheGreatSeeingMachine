// HEARTS FATE SPINNER _________________________
// CLUBS FATE SPINNER _________________________
let wheelImage;
let wheelImgX, wheelImgY, wheelImgW, wheelImgH;
let wheelPNG;
let wheelPNGX, wheelPNGY, wheelPNGW, wheelPNGH;
let pointerPNG;

const options = ["Love", "Success", "Wisdom", "Happiness"];
const optionPages = {
  "Love": "heartloveresult.html",
  "Success": "heartsuccessresult.html",
  "Wisdom": "heartwisdomresult.html",
  "Happiness": "hearthappinessresult.html"
};

let ang = 0;
let spd = 0;
let hasRedirected = false;
let isSpinning = false;  // Flag to track spinning state
let hasClicked = false;  // Flag to track if user clicked to start spinning

function preload() {
  wheelImage = loadImage("wheelbackground.png");
  wheelPNG = loadImage("wheel.png");
  pointerPNG = loadImage("pointer.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  background(255, 117, 61);

  // Draw background image
  let imgWidth = wheelImage.width;
  let imgHeight = wheelImage.height;
  let scale = min(width / imgWidth, height / imgHeight);
  wheelImgW = imgWidth * scale;
  wheelImgH = imgHeight * scale;
  wheelImgX = (width - wheelImgW) / 2;
  wheelImgY = (height - wheelImgH) / 2;
  image(wheelImage, wheelImgX, wheelImgY, wheelImgW, wheelImgH);

  // Update spin
  ang += spd;
  spd *= 0.97;

  // Normalize angle to range 0 to TWO_PI
  ang = ang % TWO_PI;
  if (ang < 0) ang += TWO_PI;

  // Draw spinning wheel.png (rotating image)
  let imgWidthPNG = wheelPNG.width;
  let imgHeightPNG = wheelPNG.height;
  let scalePNG = min(wheelImgW / imgWidthPNG, wheelImgH / imgHeightPNG);
  wheelPNGW = imgWidthPNG * scalePNG;
  wheelPNGH = imgHeightPNG * scalePNG;
  wheelPNGX = (width - wheelPNGW) / 2;
  wheelPNGY = (height - wheelPNGH) / 2;

  push();
  translate(width / 2, height / 2);
  rotate(ang);
  imageMode(CENTER);
  image(wheelPNG, 0, 0, wheelPNGW, wheelPNGH);
  pop();

  // Draw pointer.png on top, centered, preserving aspect ratio
  let pointerAspect = pointerPNG.width / pointerPNG.height;
  let canvasAspect = width / height;

  let pointerW, pointerH;
  if (canvasAspect > pointerAspect) {
    pointerH = height;
    pointerW = height * pointerAspect;
  } else {
    pointerW = width;
    pointerH = width / pointerAspect;
  }

  let pointerX = (width - pointerW) / 2;
  let pointerY = (height - pointerH) / 2;

  imageMode(CORNER);
  image(pointerPNG, pointerX, pointerY, pointerW, pointerH);

  // Check if the spinner has stopped and redirect if clicked
  if (!hasRedirected && spd < 0.001 && hasClicked) {
    hasRedirected = true;
    setTimeout(() => {
      let index = floor(((TWO_PI - ang + PI / options.length) % TWO_PI) / (TWO_PI / options.length));
      let selectedOption = options[index];
      let targetPage = optionPages[selectedOption];
      window.location.href = targetPage;
    }, 2000); // 2-second delay before redirect
  }
}

// ✅ This was the missing piece — now placed correctly outside draw()
function mousePressed() {
  // Only allow spinning if it's not already spinning and user hasn't clicked before
  if (spd < 0.001) {
    spd += random(0.6, 0.8); // Add random speed to start the spin
    isSpinning = true; // Spinner has started
    hasClicked = true; // User clicked to start spinning
    hasRedirected = false; // Reset redirection flag
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}