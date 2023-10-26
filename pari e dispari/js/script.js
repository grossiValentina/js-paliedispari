
const userMessage = prompt("Pari o Dispari?");
const userNunber  = parseInt(prompt("Scrivi un numero da 1 a 5"));
const cpuNumber   = numberRandom();

console.log(userNunber, "utente")

let somma = userNunber + cpuNumber;

if (somma % 2 == 0 && userMessage === 'pari') {
    console.log('Hai vinto');
} else if (somma % 2 == 1 && userMessage === 'dispari') {
    console.log('Hai vinto');
} else {
    console.log('Hai perso');
}



// FUNCTIONS
function numberRandom() {  
    const nbRandom = Math.floor(Math.random() * 5) + 1;
    console.log(nbRandom, "computer");
    return nbRandom;
}