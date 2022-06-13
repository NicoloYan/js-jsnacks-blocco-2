// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// Ciclo for

// let sum = 0
// for(let i = 0; i < 5; i++) {
//     // Chiedo il numero all'utente
//     let userNumber = parseInt(prompt('Dammi un numero'));
//     sum += userNumber;
// }

// console.log(sum)

// Ciclo while

let sum = 0;
let i = 0;
while (i < 5) {
    // Chiedo il numero all'utente
    let userNumber = parseInt(prompt('Dammi un numero'));
    sum += userNumber;

    i++;
}

console.log(sum)