function rand(Num) {
    var ranNum = Math.random()*Num; 
    var result = Math.floor(ranNum);
    return result
}

// console.log(rand(6));

var myCoin = ["Heads","Tails"];

console.log(myCoin[rand(2)]);

var myDice = ["one","two","three","four","five","six"];
console.log("You rolled a " + myDice[rand(6)]);