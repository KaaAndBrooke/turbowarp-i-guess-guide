status = "";
object = []
video = "";
function preload(){
    video = createVideo("video.mp4");
}
function setup(){
    canvas=createCanvas(380, 380);
    canvas.center();
    video.hide();
    }
function draw(){
    image(video, 0, 0,  380, 380);
    if(status!=""){
        cacae.detect(video, gotResult);
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="Status: Object Detected!";
            document.getElementById("object-number").innerHTML=object.length;
            obj_name = object[i].label;
            obj_percent = floor(object[i].confidence*100);
            obj_x = object[i].x;
            obj_y = object[i].y;
            obj_width = object[i].width;
            obj_height = object[i].height;
            fill("red");
            text(obj_name + obj_percent + "%", obj_x, obj_y);
            noFill();
            stroke("red");
            rect(obj_x, obj_y, obj_width, obj_height);
        }
    }
}
function modelLoaded(){
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotResult(e, r){
    if (e){
        console.error(e, "error");
    
    }
    else {
        console.log(r, "success");
        object = r;
            
        }
}
function start(){
    cacae=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="status-detectingObjects";
}