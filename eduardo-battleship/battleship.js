// [[]] means nested array and [ ={}] is object
// var answerForRect = [
//     rect1 = {value:0},
//     rect2 = {value:1
// },rect3 = {value:1
// },rect4 = {value:0}
// ];


var colors = ["red","white"];
var tile1 = "blue";
var tile2 = "blue";
var tile3 = "blue";
var tile4 = "blue";

function setup(){
    createCanvas(200,100);
    background("black");
}

function loopRectArr(){
    for(var i=0;i<answerForRect.length;i++){
        answerForRect[i].
    }
}

function draw(){
    fill(tile1);
    rect(0,0,100,100);
    fill(tile2);
    rect(100,0,100,100);
}

function mousePressed(){
    if (mouseX <= 100 && mouseY <= 100){
        if (answerForRect[0].value == 1){
            tile1 = colors[0];
        }else{
            tile1 = colors[1];
        }
    // if (answerForRect[0].value == 1){
        // tile1 = colors[0];
    // }else{
        // tile1 = colors[1];
    }if (mouseX >= 100 && mouseY <= 100){
        if (answerForRect[1].value == 1){
            tile2 = colors[0];
        }else{
            tile2 = colors[1];
        } 
    }
}

