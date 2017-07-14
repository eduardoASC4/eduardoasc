var pokemonRoster = [magnezone = {hp:70, type: ["electric", "steel"], defense: 115, attack: 70, legend: false
},empoleon = {hp: 84, type: ["water", "steel"], defense: 88, attack: 86, legend: false
},torterra = {hp: 95, type: ["grass", "ground"], defense: 105, attack: 109, legend: false
},giratina = {hp: 150, type: ["ghost", "dragon"], defense: 100, attack: 120, legend: true
},togekiss = {hp: 85, type: ["fairy", "flying"], defense: 95, attack: 50, legend: false
},blaziken = {hp: 80, type: ["fire", "fighting"], defense: 70, attack: 120, legend: false}]

function printRoster(){
    for ( var i = 0; i<pokemonRoster.length;i++){
        console.log(pokemonRoster[i]);
    }
}

function pokemonAttacked(){
    for ( var i = 0; i<pokemonRoster.length;i++){
    pokemonRoster[i].hp = pokemonRoster[i].hp - 10;
    } 
}
printRoster()
pokemonAttacked();
printRoster()