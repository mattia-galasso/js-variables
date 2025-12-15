const city = "New York"; // NON MODIFICARE QUESTA RIGA
const cityName = "City"; // NON MODIFICARE QUESTA RIGA
const shoppingList = "mele, banane, arance, uva"; // NON MODIFICARE QUESTA RIGA
const hello = "hello"; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
const cityIndex = city.indexOf("Y");
console.log(cityIndex); // Output: 4

// 2. Sottostringhe
// Stampa la sottostringa "York" dalla variabile city
const citySubstring = city.substring(4);
console.log(citySubstring); // Output: "York"

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
const cityReplaced = city.replace("York", "Delhi");
console.log(cityReplaced); // Output:  "New Delhi"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
const cityNameConcat = `${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello); // Output: "HELLO"

// 6. Shopping List
// Verificare se un articolo è nella lista della spesa
let searchItem = "mele";
let itemListed = shoppingList.indexOf(searchItem);
let itemPresent;

if (itemListed >= 0) {
  itemPresent = `${searchItem} è presente nella lista della spesa.`;
} else {
  itemPresent = `${searchItem} non è presente nella lista della spesa.`;
}

console.log(itemPresent);
