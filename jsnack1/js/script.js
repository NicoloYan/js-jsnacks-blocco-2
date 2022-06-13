// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando
// la somma degli elementi è minore di 50.

// Dichiaro un array vuoto
let numbers = []

// Imposto il valore della somma a 0
let sum = 0;

// Stampo un prompt finche' la somma dei numeri dell'array e' inferiore a 50
while (sum < 50) {

    userNumber = parseInt(prompt('Dimmi un numero'))

    sum += userNumber

    numbers.push(userNumber)

}
// Stampo l'array
console.log(numbers)