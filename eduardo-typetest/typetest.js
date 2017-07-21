var userInput = [];

function setup(){
    createCanvas(800,800);
    background("gray");
    text("Type: Hello there", 50, 50);
}

function keyTyped(){
    if (key == "H"){
        userInput.push("H");
        text("H",50,100);
    }if(key == "e"){
        userInput.push("e");
        text("e",58,100);
    }if(key == "l"){
        userInput.push("l");
        text("l",64,100);
    }if(key == "l"){
        userInput.push("l");
        text("l",66,100);
    }if(key == "o"){
        userInput.push("o");
        text("o",68,100);
    }if(key == " "){
        userInput.push(" ");
    }if(key == "t"){
        userInput.push("t");
        text("t",78,100);
    }if(key == "h"){
        userInput.push("h");
        text("h",82,100);
    }if(key == "e"){
        userInput.push("e");
        text("e",88,100);
    }if(key == "r"){
        userInput.push("r");
        text("r",94,100);
    }if(key == "e"){
        userInput.push("e");
        text("e",98,100);
    }
}
