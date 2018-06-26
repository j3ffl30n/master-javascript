'use strict'


/*
	Hacer un programa que muestre todos los numeros, entre dos numeros introducidos por el usuario.
	Ej: si el usuario mete 5 y 9 se debe mostrar 6, 7 y 8.
*/


var primer_numero = parseInt(prompt("Ingrese su primer numero", 0));
var segundo_numero = parseInt(prompt("Ingrese su segundo numero", 0));

console.log(primer_numero);
console.log(segundo_numero);

for(var i = primer_numero; i <= segundo_numero; i++){
	console.log(i);
}