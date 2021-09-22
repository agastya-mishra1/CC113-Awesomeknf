function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    video = createCapture(VIDEO);
    canvas.center();
    video.hide();
}

function draw(){
image(video,230,150,220,200);
fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);
circle(50,430,80);
circle(600,50,80);
circle(600,430,80);
fill(0,255,0);
stroke(0,255,0);
rect(90,40,470,20);
rect(90,425,470,20);
rect(40,90,20,300);
rect(590,90,20,300);
}

function take_snap(){
    save("pictureFrame.png");
}