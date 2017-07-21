var x = 25;
var y = 25;
var vx = 2;
var vx2 = 2;
var vy = 2;
var vy2 = 2;
var rectx = 200;
function setup(){
    createCanvas(500,500);
    background("Gray");
}

function draw(){
    rect(rectx,450,80,40);
    ellipse(x,y,50,50);
    // the ellipse does not depend on the y axis 
    if(x<=25 ){
        vx=vx;
        vx=vx2;
        vy=vy;
        vy=vy2;
    }else if(x>=475){
        vx=-vx;
        vx2=-vx;
        vy=-vy;
        vy2=-vy;
    } x=x+vx;
    y=y+vy
}

function keyPressed(){
    if(keyCode === RIGHT_ARROW){
        rectx= rectx+25;
    }if(keyCode === LEFT_ARROW){
        rectx= rectx-25;
    }
}