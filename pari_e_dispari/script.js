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
const result = document.getElementById('result');

form.addEventListener('submit', function(event){
    // ! reset comportamento form
    event.preventDefault();
});