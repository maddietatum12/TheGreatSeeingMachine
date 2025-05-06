// SPADE HAPINESS RESULT _________________________

let fortunerevealbackgroundImage;

let fortunerevealbackgroundImgX, fortunerevealbackgroundImgY, fortunerevealbackgroundImgW, fortunerevealbackgroundImgH;

// Textbox parameters (original position and size)
let textBoxX, textBoxY, textBoxWidth, textBoxHeight;
let dragging = false;

// sets images to load
function preload() {
  fortunerevealbackgroundImage = loadImage("fortunerevealbackground.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Set original text box width and height
  let originalTextBoxWidth = 400;
  let originalTextBoxHeight = 200;

  // Increase the height of the text box by 200px and leave width the same
  textBoxWidth = originalTextBoxWidth;
  textBoxHeight = originalTextBoxHeight + 200; // Increase height by 200px

  // Set the text box to be 50px to the left and move it down by 250px
  textBoxX = 750 - 50; // Move 50px to the left (original was 750)
  textBoxY = 350; // Move 250px down

  textAlign(LEFT, TOP); // Align text to the left and top
  textFont("Courier New"); // Set the font to a typewriter font
}

function draw() {
  // sets background color
  background(251, 204, 70);

  // original image size
  let imgWidth = fortunerevealbackgroundImage.width;
  let imgHeight = fortunerevealbackgroundImage.height;

  // calculates scale factor to keep aspect ratio
  let scale = min(width / imgWidth, height / imgHeight);

  // resizes image based on scale factor
  fortunerevealbackgroundImgW = imgWidth * scale;
  fortunerevealbackgroundImgH = imgHeight * scale;

  // centers image at the bottom of the screen
  fortunerevealbackgroundImgX = (width - fortunerevealbackgroundImgW) / 2;
  fortunerevealbackgroundImgY = height - fortunerevealbackgroundImgH;

  // draws the background image
  image(fortunerevealbackgroundImage, fortunerevealbackgroundImgX, fortunerevealbackgroundImgY, fortunerevealbackgroundImgW, fortunerevealbackgroundImgH);

  // Draw the text box (original position and size)
  fill(255); // Fully opaque white background for the text box (no shading)
  noStroke(); // No border for the text box
  rect(textBoxX, textBoxY, textBoxWidth, textBoxHeight, 10); // Rounded corners

  // Add text inside the box in hot pink (255, 132, 146)
  fill(255, 132, 146); // Hot pink color

  // Start with a base text size of 15pt
  let baseTextSize = 40;

  // Scale the text size based on the background image scaling factor
  let scaledTextSize = baseTextSize * scale; // Adjust text size according to the background scaling factor

  textSize(scaledTextSize); // Apply the adjusted text size

  textWrap(WORD); // Enable word wrapping
  text(
    "If a train is meant for you, it won't leave the station. Rushing only leads to wrong tracks. You fear what you might miss out on, but youve not missed anything you werent meant to. Slow down, have patience! As I see it, your ticket says your boarding soon.",
    textBoxX + 10, textBoxY + 10, textBoxWidth - 20, textBoxHeight - 20
  );
}

// triggered when the cursor is clicked anywhere on the canvas
function mousePressed() {
  // Check if mouse is inside the text box area to enable dragging
  if (
    mouseX >= textBoxX && 
    mouseX <= textBoxX + textBoxWidth &&
    mouseY >= textBoxY && 
    mouseY <= textBoxY + textBoxHeight
  ) {
    dragging = true;
  }
  
  // Check if mouse click is within the image area to redirect to index.html
  if (
    mouseX >= fortunerevealbackgroundImgX && 
    mouseX <= fortunerevealbackgroundImgX + fortunerevealbackgroundImgW &&
    mouseY >= fortunerevealbackgroundImgY && 
    mouseY <= fortunerevealbackgroundImgY + fortunerevealbackgroundImgH
  ) {
    window.location.href = "index.html";
  }
}

// triggered when the mouse is released
function mouseReleased() {
  dragging = false;
}

// triggered when the mouse is dragged
function mouseDragged() {
  if (dragging) {
    // Allow moving the text box within bounds
    textBoxX = constrain(mouseX - textBoxWidth / 2, 0, width - textBoxWidth);
    textBoxY = constrain(mouseY - textBoxHeight / 2, 0, height - textBoxHeight - fortunerevealbackgroundImgH);
  }
}

// adjusts canvas size when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}