myPokemonRoster = ["magnezone","empoleon","raichu","togekiss","lucario"];
var firstToFight = myPokemonRoster[1];
var secondToFight = myPokemonRoster[0];
console.log(firstToFight);
console.log(secondToFight);

myPokemonRoster.pop();
console.log(myPokemonRoster);

myPokemonRoster.push("Charizard","Snorlax");
//console.log(myPokemonRoster);

//for (var i = 0; i < 6; i++) {
  //  console.log(myPokemonRoster[i]);
//}

for (var i = 5; i >= 0; i = i - 1) {
    console.log(myPokemonRoster[i]);
}

for (var i = 0; i < myPokemonRoster.length; i++) {
    console.log(myPokemonRoster[i]);
}

if (myPokemonRoster.length <6) ;
then 