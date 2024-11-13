
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