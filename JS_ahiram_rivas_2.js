
//6.- Donats un number i un BigInt ( 1.234 i 5.678 ), calcula les quatre operacions: suma, resta,
// divisió i multiplicació i mostra els resultats amb un sol decimal.

let num = 1.234;
let bigInt = BigInt(5678);

let sum = num + Number(bigInt);
let sub = num - Number(bigInt);
let div = num / Number(bigInt);
let mul = num * Number(bigInt);

console.log("Suma:", sum.toFixed(1));
console.log("Resta:", sub.toFixed(1));
console.log("Divisió:", div.toFixed(1));
console.log("Multiplicació:", mul.toFixed(1));

//7.- Calcula la hipotenusa d’un triangle on les longituds dels catets sigui de 4.

let catet1 = 4;
let catet2 = 4;
let hipotenusa = Math.sqrt(catet1 ** 2 + catet2 ** 2);
console.log("Hipotenusa:", hipotenusa.toFixed(1));
