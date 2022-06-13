// Calcola la somma e la media dei primi 10 numeri.


let sum = 0

// Genrero i primi 10 numeri e ne calcolo la somma e la media

    // Genero i numeri col ciclo for

for ( let i = 1; i < 11; i++ ) {
    numbers = i

    // Calcolo la somma

    sum += i

    // Stampo il risultato in pagina

    document.getElementById('sum').innerHTML = 'Il risultato della somma è = ' + sum

}

// Calcolo la media

avg = sum / 10

// Stampo il risultato in pagina

document.getElementById('avg').innerHTML = 'Il risultato della media è = ' + avg