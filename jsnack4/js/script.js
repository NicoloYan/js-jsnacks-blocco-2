// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// Creo 2 array con elementi diversi

let array1 = [14, 8, 90, 26, 42]
let array2 = [15, 7, 42]

// Genero un numero random finche' la lunghezza di array2 è inferiore alla lunghezza di array1
while(array2.length < array1.length) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    // Pusho il numero generato in array2
    array2.push(randomNumber);

    console.log(array2)
}