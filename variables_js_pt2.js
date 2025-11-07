//6.- Donats un number i un BigInt ( 1.234 i 5.678 ), calcula les quatre operacions: suma, resta, divisió i multiplicació i mostra els resultats amb un sol decimal.

let num = 1234
let bigint = Number(5678n)

let suma = bigint + num
let resta = bigint - num
let multiplicacion = bigint * num
let division = bigint / num

console.log('Suma: ' + suma.toFixed(1))
console.log('Resta: ' + resta.toFixed(1))
console.log('Multiplicacion: ' + multiplicacion.toFixed(1))
console.log('Division: ' + division.toFixed(1))

//7.- Calcula la hipotenusa d’un triangle on les longituds dels catets sigui de 4.

let cateto1 = 4
let cateto2 = 4


let elevadoPotencia = (cateto1 ** 2) + (cateto2 ** 2)
let hipotenusa = Math.sqrt(elevadoPotencia)
console.log('El valor de la hipotenusa es: ' + hipotenusa.toFixed(2))

//8.- Divideix un enter entre un String. Què retorna?

let numeroEntero = 123
let cadenaTexto = "hola"

let division2 = numeroEntero / cadenaTexto
console.log(division2)

//9.- Donat un String amb el teu nom i cognoms, extreu el teu primer cognom, i mostra’l per pantalla indicant el número de caràcters que té.

let nombreApellidos="Ahiram Rivas Illanes"
let apellido1=nombreApellidos.slice(7,12)
console.log(apellido1+' El numero de caracteres del pimer apellido es: '+ apellido1.length)

//10.- Donat un String amb el teu nom i cognoms, esborra el caràcter de la posició 6 i mostra el resultat per pantalla.

let nombreApellidos2="Ahiram Rivas Illanes"
console.log(nombreApellidos2.replace('m',''))