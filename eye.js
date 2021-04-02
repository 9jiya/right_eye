rightEye_X = 0;
rightEye_Y = 0;
function preload(){
    Eyes = loadImage("https://i.postimg.cc/XY1tL4gT/right-eye.jpg");
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotResults);
}
function modelLoaded(){
    console.log("Posenet is Initialized");
}
function draw(){
    image(video,0,0,300,300);
    image(Eyes,rightEye_X,rightEye_Y,30,30);
}
function gotResults(results){
    if(results.length > 0){
        console.log(results);
        rightEye_X = results[0].pose.rightEye.x+30;
        rightEye_Y = results[0].pose.rightEye.y-20;
    }
}
function take_snap(){
    save('My funny right eye.png')
}