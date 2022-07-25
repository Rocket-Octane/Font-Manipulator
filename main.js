function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(40, 90);
    video.hide();

    canvas = createCanvas(550, 420);
    canvas.position(650, 130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background(51);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}