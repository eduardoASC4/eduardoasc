function randLetter(num){
    var result = Math.random()*num;
    var theResult = Math.floor(result);
    return theResult;
}

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(letters[randLetter(26)]);

// number 2
var strings = ["ferin","vrfeini","dvei","iwha","tpoji","ahbuawb","wetrb"];
console.log(strings[randLetter(7)]);

// number 3
 var sentences = ["K sola.","T odded","F owujsdc.","O ufnrismeverctv."];
 console.log(sentences[randLetter(4)]);
 