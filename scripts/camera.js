var amountOfBlueImages = document.getElementById('amountOfBlueImages');
var amountOfRedImages = document.getElementById('amountOfRedImages');
var amountOfBlackImages = document.getElementById('amountOfBlackImages');


// screenshot: BLUE
function takeScreenshotBlue() {
    let canvas = document.createElement('canvas');
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;

    let canvasContext = canvas.getContext("2d");
    canvasContext.drawImage(
        video,
        0, 0,
        video.offsetWidth, video.offsetHeight
    );

    var container = document.getElementById('canvas-container-blue');
    container.prepend(canvas);

    // count image number
    amountOfBlueImages.innerText = Number(amountOfBlueImages.innerText) + 1;
}

// screenshot: RED
function takeScreenshotRed() {
    let canvas = document.createElement('canvas');
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;

    let canvasContext = canvas.getContext("2d");
    canvasContext.drawImage(
        video,
        0, 0,
        video.offsetWidth, video.offsetHeight
    );

    var container = document.getElementById('canvas-container-red');
    container.prepend(canvas);

    // count image number
    amountOfRedImages.innerText = Number(amountOfRedImages.innerText) + 1;
}

// screenshot: BLACK
function takeScreenshotBlack() {
    let canvas = document.createElement('canvas');
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;

    let canvasContext = canvas.getContext("2d");
    canvasContext.drawImage(
        video,
        0, 0,
        video.offsetWidth, video.offsetHeight
    );

    var container = document.getElementById('canvas-container-black');
    container.prepend(canvas);

    // count image number
    amountOfBlackImages.innerText = Number(amountOfBlackImages.innerText) + 1;
}