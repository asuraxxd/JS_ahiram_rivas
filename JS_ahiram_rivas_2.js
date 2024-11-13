
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

//8.- Divideix un enter entre un String. Què retorna?

let result = 10 / "2";
console.log(result); // 5
// JavaScript intenta convertir el string a un número abans de realitzar l'operació.

//9.- Donat un String amb el teu nom i cognoms, extreu el teu primer cognom, i mostra’l per pantalla
// indicant el número de caràcters que té.

let nomComplert = "Ahiram Rivas Illanes";
let primerCognom = nomComplert.split(" ")[1];
console.log("Primer cognom:", primerCognom);
console.log("Número de caràcters:", primerCognom.length);

//10.- Donat un String amb el teu nom i cognoms, esborra el caràcter de la posició 6 i mostra el
// resultat per pantalla.

let nomComplet = "Ahiram Rivas Illanes";
let nouNom = nomComplet.slice(0, 5) + nomComplet.slice(6);
console.log("Nom modificat:", nouNom);

//11.- Declara una variable undefined i un null. Què passa si els sumes?

let indefinit;
let nul = null;
let suma = indefinit + nul;
console.log(suma); // NaN (Not a Number)

//12.- Realitza una coerció explícita i implícita d’un booleà a String.

let boolea = true;

// Coerció explícita
let strExplicit = String(boolea);
console.log(strExplicit); // "true"

// Coerció implícita
let strImplicit = boolea + "";
console.log(strImplicit); // "true"

//13.- Realitza una coerció explícita i implícita d’un String a booleà.

let string = "true";

// Coerció explícita
let boolExplicit = Boolean(string);
console.log(boolExplicit); // true

// Coerció implícita
let boolImplicit = !!string;
console.log(boolImplicit); // true
