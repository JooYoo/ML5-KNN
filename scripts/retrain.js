
var video = document.getElementById('video');
var videoStatus = document.getElementById('videoStatus');
var loading = document.getElementById('loading');
var blueButton = document.getElementById('blueButton');
var redButton = document.getElementById('redButton');
var blackButton = document.getElementById('blackButton');
var progressRock = document.getElementById('progress-rock');
var progressScissor = document.getElementById('progress-scissor');
var progressPaper = document.getElementById('progress-paper');
var train = document.getElementById('train');
var loss = document.getElementById('loss');
var result = document.getElementById('result');
var predict = document.getElementById('predict');


// Create a webcam capture
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
    video.srcObject = stream;
    video.play();
  });
}

// Extract features from MobileNet
const knnClassifier = ml5.KNNClassifier();
let featureExtractor = ml5.featureExtractor('MobileNet', function () {
  loading.innerText = 'Model loaded!';
});

// add Example
function addExample(label) {
  const features = featureExtractor.infer(video);
  knnClassifier.addExample(features, label);
}

// BLUE_btn:  
// press to add current frame with a label of blue to the classifier
blueButton.onclick = function () {
  addExample('Rock');
  console.log('add Rock');
}

// RED_btn:
// press to add current frame with a label of red to the classifier
redButton.onclick = function () {
  addExample('Scissor');
  console.log('add Scissor');
}

// BLACK_btn:
// press to add current frame with a label of black to the classifier
blackButton.onclick = function () {
  addExample('Paper');
  console.log('add Paper');
}


//classify
function classify() {
  const numLabels = knnClassifier.getNumLabels();
  if (numLabels <= 0) {
    console.error('no examples no label');
    return;
  }
  const features = featureExtractor.infer(video);
  knnClassifier.classify(features, gotResults);
}


// Show the results
function gotResults(err, data) {
  // Display any error
  if (err) {
    console.error(err);
  }

  //get confidence
  if (data.confidencesByLabel) {
    const confidences = data.confidencesByLabel; // confidences[data.label]
    console.log(data.label, confidences[data.label]);



    switch (data.label) {
      case "Rock":
        progressRock.innerText = (confidences[data.label] * 100).toString() + "%";
        progressRock.style.width = confidences[data.label] * 100 + "%";

        progressScissor.innerText = (0 * 100).toString() + "%";
        progressScissor.style.width = 0 * 100 + "%";
        progressPaper.innerText = (0 * 100).toString() + "%";
        progressPaper.style.width = 0 * 100 + "%";
        break;

      case "Scissor":
        progressScissor.innerText = (confidences[data.label] * 100).toString() + "%";
        progressScissor.style.width = confidences[data.label] * 100 + "%";

        progressRock.innerText = (0 * 100).toString() + "%";
        progressRock.style.width = 0 * 100 + "%";
        progressPaper.innerText = (0 * 100).toString() + "%";
        progressPaper.style.width = 0 * 100 + "%";
        break;

      case "Paper":
        progressPaper.innerText = (confidences[data.label] * 100).toString() + "%";
        progressPaper.style.width = confidences[data.label] * 100 + "%";

        progressRock.innerText = (0 * 100).toString() + "%";
        progressRock.style.width = 0 * 100 + "%";
        progressScissor.innerText = (0 * 100).toString() + "%";
        progressScissor.style.width = 0 * 100 + "%";
        break;

      default:
        break;
    }
  }

  //
  classify();
  result.innerText = data.label;
}


// Start predicting when the predict button is clicked
predict.onclick = function () {
  classify();
  console.log('result');
}
