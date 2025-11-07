//6.- Donats un number i un BigInt ( 1.234 i 5.678 ), calcula les quatre operacions: suma, resta, divisió i multiplicació i mostra els resultats amb un sol decimal.

let num = 1234
let bigint = Number(5678n)

let suma= bigint+num
let resta=bigint-num
let multiplicacion=bigint*num
let division=bigint/num

console.log('Suma: ' +suma.toFixed(1))
console.log('Resta: ' +resta.toFixed(1))
console.log('Multiplicacion: ' +multiplicacion.toFixed(1))
console.log('Division: ' +division.toFixed(1))

//7.- Calcula la hipotenusa d’un triangle on les longituds dels catets sigui de 4.

let cateto1=4
let cateto2=4


let elevadoPotencia=(cateto1**2)+(cateto2**2)
let hipotenusa=Math.sqrt(elevadoPotencia)
console.log('El valor de la hipotenusa es: '+hipotenusa.toFixed(2))
