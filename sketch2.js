let palmreaderImage;
let starImage;
let palmreaderImgX, palmreaderImgY, palmreaderImgW, palmreaderImgH;
let handpose;
let video;
let predictions = [];
let handDetectedTime = 0; // Track when hand is first detected
let handDetected = false; // Flag to check if hand is detected

function preload() {
    palmreaderImage = loadImage("palmreader.png");
    starImage = loadImage("starpalm.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // captures video feed and sets to the width and height of the current canvas
    video = createCapture(VIDEO);
    video.size(640, 480); // 'native resolution' < help not stretch video!
    video.hide();  // Hide the video element itself


    handpose = ml5.handpose(video, modelReady);
    handpose.on("predict", results => {
        predictions = results;
        checkHandDetection();  // Call to check if hand is detected
    });
}

function modelReady() {
 
}

function draw() {
 

    // sets background color
    background(29, 157, 91);

    // Draw the palmreader image first (this will be the background)
    if (palmreaderImage) {
        let imgWidth = palmreaderImage.width;
        let imgHeight = palmreaderImage.height;

        // calculates scale factor to keep aspect ratio
        let scale = min(width / imgWidth, height / imgHeight);

        // resizes image based on scale factor
        palmreaderImgW = imgWidth * scale;
        palmreaderImgH = imgHeight * scale;

        // centers image
        palmreaderImgX = (width - palmreaderImgW) / 2;
        palmreaderImgY = (height - palmreaderImgH) / 2;

        // Draw the palmreader image
        image(palmreaderImage, palmreaderImgX, palmreaderImgY, palmreaderImgW, palmreaderImgH);
    }

    // Now, draw the video on top of the image
    let scaleFactor = 0.5; // 30% of canvas size
    let aspectRatio = video.width / video.height;
    let maxVideoSize = min(width, height) * scaleFactor;
    let videoW, videoH;

    if (aspectRatio > 1) {
        videoW = maxVideoSize;
        videoH = maxVideoSize / aspectRatio;
    } else {
        videoH = maxVideoSize;
        videoW = maxVideoSize * aspectRatio;
    }

    let videoX = (width - videoW) / 2 - 55 ;  // because illustration isn't totally centered
    let videoY = (height - videoH) / 2;

    // draws video above the palmreader image
    image(video, videoX, videoY, videoW, videoH);

    // draws the hand keypoints (on top of the video)
    drawKeypoints();

    // Check if the hand has been detected for 8 seconds
    if (handDetected && millis() - handDetectedTime >= 10000) {
        window.location.href = "teapage.html";  // Redirect to teapage.html after 10 seconds
    }
}

function checkHandDetection() {
    if (predictions.length > 0) {
        if (!handDetected) {
            handDetected = true;  // Mark that the hand is detected
            handDetectedTime = millis();  // Save the current time (in milliseconds)
        }
    }
}

function drawKeypoints() {
    if (predictions.length > 0) {
        let prediction = predictions[0];

        let fingers = [
            createFinger("thumb", prediction.annotations.thumb, 'red'),
            createFinger("indexFinger", prediction.annotations.indexFinger, 'green'),
            createFinger("middleFinger", prediction.annotations.middleFinger, 'blue'),
            createFinger("ringFinger", prediction.annotations.ringFinger, 'yellow'),
            createFinger("pinky", prediction.annotations.pinky, 'purple')
        ];

        // Loop through each finger and draw its keypoint and corresponding star
        for (let i = 0; i < fingers.length; i++) {
            let finger = fingers[i];

            fill(finger.color);
            noStroke();
            let tip = finger.points[3];  // Get the tip of the finger

            // Apply scaling and offset to correctly position the star on the video
            let videoScaleFactor = 0.5; // The scale factor used for the video
            let offsetX = (width - video.width * videoScaleFactor) / 2 - 200; // Adjust for the video shift (300px left)
            
            // map the fingertip positions to the scaled and offset video coordinates
            let scaledX = (tip[0] - offsetX) / videoScaleFactor;  // Adjust for offset and scale the X
            let scaledY = tip[1] / videoScaleFactor;  // Scale the Y coordinate only (no offset needed)

            // draw fingertip as a small ellipse
            ellipse(scaledX, scaledY, 10, 10);

            // adjust star size to match the video scaling
            let starSize = 0.25; // Adjust star size as needed
            let starWidth = starImage.width * starSize;
            let starHeight = starImage.height * starSize;

            // draw star at the fingertip 
            image(starImage, scaledX - starWidth / 2, scaledY - starHeight / 2, starWidth, starHeight);
        }
    }
}

function createFinger(name, points, color) {
    return {
        name: name,
        points: points,
        color: color
    };
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
