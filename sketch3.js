// TEA PAGE _________________________

let tealeavesImage;
let spoonImage
  let spoonX, spoonY;
  // spoon width
  let spoonW = 350 
  // spoon height
  let spoonH = 350
  let dragging = false;
  let spoonVisible = true;
  let offsetX, offsetY;

  let tealeavesImgX, tealeavesImgY, tealeavesImgW, tealeavesImgH;

// sets images to load
function preload() {
  tealeavesImage = loadImage("tealeaves.png");
  spoonImage = loadImage("spoon.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // starts spoon in bottom right corner
  spoonX = windowWidth - spoonW - 20;
  spoonY = windowHeight - spoonH - 170;
}

function draw() {

  // sets background color
  background(38, 44, 108);

  // og window size
  let imgWidth = tealeavesImage.width;
  let imgHeight = tealeavesImage.height;



// calculates scale factor to keep aspect ratio
let scale = min(width / imgWidth, height / imgHeight);

// resizes image based on scale factor
tealeavesImgW = imgWidth * scale;
tealeavesImgH = imgHeight * scale;

// centers image
tealeavesImgX = (width - tealeavesImgW) / 2;
tealeavesImgY = (height - tealeavesImgH) / 2;

// draws new image
image(tealeavesImage, tealeavesImgX, tealeavesImgY, tealeavesImgW, tealeavesImgH);



  //draws spoon
  if (spoonVisible) {
    image(spoonImage, spoonX, spoonY, spoonW, spoonH);
}
}
function mousePressed() {
  // identifies that cursor is over penny
  if (
    spoonVisible &&
    mouseX > spoonX &&
    mouseX < spoonX + spoonW &&
    mouseY > spoonY &&
    mouseY < spoonY + spoonH
  ) {
    dragging = true;
    offsetX = mouseX - spoonX;
    offsetY = mouseY - spoonY;
  }
}

function mouseDragged() {
  if (dragging && spoonVisible) {
    spoonX = mouseX - offsetX;
    spoonY = mouseY - offsetY;
  }
}

// cursor released drops spoon
function mouseReleased() {
    if (dragging && spoonVisible) {
      dragging = false;
  
      // Define the center of the canvas area
      let centerXMin = width / 2 - spoonW / 2; // left side of the spoon (centered)
      let centerXMax = width / 2 + spoonW / 2; // right side of the spoon (centered)
      let centerYMin = height / 2 - spoonH / 2; // top side of the spoon (centered)
      let centerYMax = height / 2 + spoonH / 2; // bottom side of the spoon (centered)
  
      // Get the center of the spoon
      let spoonCenterX = spoonX + spoonW / 2;
      let spoonCenterY = spoonY + spoonH / 2;
  
      // Check if spoon center is within the defined center area
      if (
        spoonCenterX >= centerXMin &&
        spoonCenterX <= centerXMax &&
        spoonCenterY >= centerYMin &&
        spoonCenterY <= centerYMax
      ) {
        // Spoon is dropped in the center, navigate to teastir.html
        setTimeout(() => {
          window.location.href = "teastir.html";
        }, 300); // Optional timeout to add smoothness
      }
    }
  }

// adjusts canvas size when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 

  //changes spoon starting point if window is adjusted
  if (!dragging) {
    spoonX = windowWidth - spoonW - 20;
    spoonY = windowHeight - spoonH - 20;
  }
}
 _________________________