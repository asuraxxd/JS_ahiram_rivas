
// 1.- Mostra per consola el teu nom, cognoms i any de naixement utilitzant diferents missatges de
// consola.

console.log("Ahiram")
console.warn("Rivas")
console.error("2005")

//2.- Declara 3 variables, cadascuna amb un tipus de dades diferent i mostra el valor per consola.

let nombre ="ahiram"
let estudiant=true
let edad= 19

console.log(nombre)
console.log(estudiant)
console.log(edad)

//3.- Mostra una variable per consola que hagis declarat posteriorment amb var. Què apareix? I si
// canvies la declaració a let ?

console.log(cambios)
var cambios=10
console.log(cambios)

// Si canvies la declaració a `let`:
// console.log(cambios);
// ReferenceError: cambios is not defined
// let cambios = 10;
// console.log(cambios);
// 10

//4.- Declara una variable amb un valor i mostra’l per consola. Modifica el seu valor a un altre tipus
// de dades. Et deixa? Perquè?

//let variable="hola"
//console.log(variable)

let variable=42// Canvi de tipus String a Number
console.log(variable)
// Sí que et deixa perquè `let` permet redeclarar i reasignar variables dins del seu àmbit.

//5.- Declara una constant amb un valor i mostra’l per consola. Modifica el seu valor a un altre tipus
// de dades. Et deixa? Perquè?

const modificar="modificacion "
console.log(modificar)
//modificar=42
// Uncaught TypeError: Assignment to constant variable.
//No et deixa modificar una constant perquè, com el seu nom indica, els valors assignats a constants no poden ser canviats després de ser inicialitzats.