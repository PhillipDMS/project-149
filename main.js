 leftwristx=0;
 leftwristy=0;
 rightwristx=0;
 rightwristy=0;
 
 function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on("pose",gotposes);
 }

function modelloaded(){
   console.log("model is initaized");
}
function gotposes(results){
   if(results.length>0){
      console.log(results);
      leftwristx=results[0].pose.leftWrist.x;
      leftwristy=results[0].pose.leftWrist.y;
      rightwristx=results[0].pose.rightWrist.x;
      rightwristy=results[0].pose.rightWrist.y;
 }
   
}
 function draw(){
    image(video,0,0,600,500);
 }
 song="";
 function preload(){
    song=loadSound("music2.mp3");
 }
 function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
 }