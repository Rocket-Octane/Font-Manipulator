function setup(){
    video = createCapture(VIDEO);
    video.size(390, 270);
    video.position(690, 20);

    canvas = createCanvas(370, 270);
    canvas.position(700, 300);

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