/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// ? funzioni
// creo funzione per generare numero random della cpu
function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

// creo funzione per stabilire se la somma è pari o dispari
function EvenOrOdd(number){
    return number % 2 === 0;
}

// recupero elementi dal dom
const form = document.querySelector('form');
const even = document.getElementById('even');
const odd = document.getElementById('odd');
const number = document.getElementById('number');
const cpuNumberElement = document.getElementById('cpu-number');
const result = document.getElementById('result');

form.addEventListener('submit', function(event){
    // ! reset comportamento form
    event.preventDefault();

    // recupero valore dell'input
    const userNumber = parseInt(number.value.trim());
    // // console.log(userNumber);

    // validazione
    if (isNaN(userNumber) || userNumber > 5 || userNumber < 1 || !even.checked && !odd.checked){
        alert('Hai inserito un valore non valido, prova con un numero tra 1 e 5 e a selezionare pari o dispari!')
        return;
    }
    
    // numero random per CPU
    const cpuNumber = getRandomNumber(1, 5)
    // // console.log('numero cpu: ' + cpuNumber);

    // sommo i due numeri
    const sum = userNumber + cpuNumber;

    // dichiaro se pari o dispari
    const isEven = EvenOrOdd(sum);
    // // console.log(isEven);

    // stampo su pagina
    cpuNumberElement.innerText = `Il numero della cpu è ${cpuNumber} e la somma tra i due numeri è ${sum}`

    const message = isEven && even.checked || !isEven && odd.checked ? 'Congratulazioni, hai vinto!' : 'Ritenta, sarai più fortunato!';

    result.innerText = message;
});