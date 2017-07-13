var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 
// var n = prompt('How many more times? ');
var bank = 1000 // player starts with 1000 dollars
console.log("You have $1,000.");
var inventory = ["sword","potion","shield","bow","arrows"];
while(bank > 0){
    for (var x = 0; x < inventory.length; x++){
        var answer = prompt("Would you like to buy a " + inventory[x] + "? ");
        if (answer === "yes"){
            bank = bank - 200;
            console.log("You have $" + bank + " left.");
        }else{
            console.log("Ok, then how bout this.");
        } if (bank <= 0) {
            inventory.length = 0;
        }   
    } 
}