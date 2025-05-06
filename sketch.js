
// OPENING PAGE _________________________
let openingpageImage;
let pennyImage
  let pennyX, pennyY;
  // penny width
  let pennyW = 150 
  // penny height
  let pennyH = 150 
  let dragging = false;
  let pennyVisible = true;
  let offsetX, offsetY;

  let openingImgX, openingImgY, openingImgW, openingImgH;

// sets images to load
function preload() {
  openingpageImage = loadImage("openingpage.png");
  pennyImage = loadImage("penny.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // starts penny in bottom right corner
  pennyX = windowWidth - pennyW - 20;
  pennyY = windowHeight - pennyH - 150;
}

function draw() {

  // sets background color
  background(255, 132, 146);

  // og window size
  let imgWidth = openingpageImage.width;
  let imgHeight = openingpageImage.height;



// calculates scale factor to keep aspect ratio
let scale = min(width / imgWidth, height / imgHeight);

// resizes image based on scale factor
openingImgW = imgWidth * scale;
openingImgH = imgHeight * scale;

// centers image
openingImgX = (width - openingImgW) / 2;
openingImgY = (height - openingImgH) / 2;

// draws new image
image(openingpageImage, openingImgX, openingImgY, openingImgW, openingImgH);



  //draws penny
  if (pennyVisible) {
    image(pennyImage, pennyX, pennyY, pennyW, pennyH);
}
}
function mousePressed() {
  // identifies that cursor is over penny
  if (
    pennyVisible &&
    mouseX > pennyX &&
    mouseX < pennyX + pennyW &&
    mouseY > pennyY &&
    mouseY < pennyY + pennyH
  ) {
    dragging = true;
    offsetX = mouseX - pennyX;
    offsetY = mouseY - pennyY;
  }
}

function mouseDragged() {
  if (dragging && pennyVisible) {
    pennyX = mouseX - offsetX;
    pennyY = mouseY - offsetY;
  }
}

// cursor released drops penny
function mouseReleased() {
  if (dragging && pennyVisible) {
    dragging = false;

  // approximate area of coin slot (lower left third of image)
  let thirdWidth = openingImgW / 3;
  let lowerY = openingImgY + (2 * openingImgH / 3);

  // penny released from cursor over coin slot
  let pennyCenterX = pennyX + pennyW / 2;
  let pennyCenterY = pennyY + pennyH / 2;

  if (
    pennyCenterX >= openingImgX &&
    pennyCenterX <= openingImgX + thirdWidth &&
    pennyCenterY >= lowerY &&
    pennyCenterY <= openingImgY + openingImgH
  ) {
    pennyVisible = false;

    // links to new page after image of penny disappears down slot 
    setTimeout(() => {
      window.location.href = "palmpage.html";
    }, 300);
  }
  }
}

// adjusts canvas size when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 

  //changes penny starting point if window is adjusted
  if (!dragging) {
    pennyX = windowWidth - pennyW - 20;
    pennyY = windowHeight - pennyH - 20;
  }
}
 _________________________