// importo le funzioni
const {names} = require("./names")
const {hobbies} = require("./hobbies")

// creo una funzione
function fullNameAndHobbies(){
    return {
        fullName: names('vlas', 'elisei'),
        hobbies: hobbies("calcio", "corsa", "programmare"),
    }
 
}
// richiamo la funzione
console.log(fullNameAndHobbies());
