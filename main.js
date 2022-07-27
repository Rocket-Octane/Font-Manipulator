noseX = 0;
noseY = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(390, 270);
    video.position(690, 20);

    canvas = createCanvas(370, 270);
    canvas.position(700, 300);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background(85);
    textSize(difference);
    fill("black");
    text("Abhi",  noseX, noseY);
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("Nose x = " + noseX + "          Nose y = " + noseY);
        console.log("Left Wrist x = " + leftwristx + "          Right Wrist x = " + rightwristx + "           Difference = " + difference);
    }
}