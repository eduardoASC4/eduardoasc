var playerChoice = "r";

var choices = ["r","p","s"]

var compChoice = choices[Math.floor(Math.random()*3)]

if (playerChoice == compChoice) {
    console.log("tie") ;
}
if (compChoice == "p") {
    console.log("you win") ;
}
if (compChoice == "s") {
    console.log("you lose") ;
}