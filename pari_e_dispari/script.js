/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramiite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

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
    if (isNaN(userNumber) || userNumber > 5 || userNumber < 1){
        alert('Hai inserito un valore non valido, prova con un numero tra 1 e 5!')
        return;
    }

    function getRandomNumber(){
        const randomNumber = Math.floor(Math.random() * 5) + 1;
        return randomNumber;
    }

    const cpuNumber = getRandomNumber()
    // // console.log('numero cpu: ' + cpuNumber);

    const sum = userNumber + cpuNumber;

    function EvenOrOdd(number){
        if (isNaN(number)){
            alert('Il valore non è corretto');
            return;
        }

        let result = number % 2 === 0 ? true : false;
        return result;
    }

    const isEven = EvenOrOdd(sum);
    // // console.log(isEven);

    cpuNumberElement.innerText = `Il numero della cpu è ${cpuNumber} e la somma tra i due numeri è ${sum}`

    if (isEven === true && even.checked === true || isEven === false && odd.checked === true){
        result.innerText = 'Congratulazioni, hai vinto!'
    } else {
        result.innerText = 'Ritenta, sarai più fortunato!'
    }

});