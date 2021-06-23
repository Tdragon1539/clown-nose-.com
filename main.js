nose_x=0;
nose_y=0;


function preload(){
clownNose = loadImage("https://i.postimg.cc/vTgnVk1G/clown-nose-png-12.png");
}

function setup(){
 canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
poseNet = ml5.poseNet(video, model_loaded);
poseNet.on('pose', gotPoses);
}
function model_loaded(){
    console.log('Posenet Initialized');
}

function draw(){
    image(video, 0, 0, 300, 300);
  image(clownNose, nose_x - 15, nose_y - 15, 30, 30)

}

function take_snapshot(){
save('MyClownNose.jpg');
}

function gotPoses(results){
    if(results.length > 0){
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log(nose_x)
        console.log(nose_y)
    }
}