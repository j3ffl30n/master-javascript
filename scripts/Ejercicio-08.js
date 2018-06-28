'use strict'

/*
	Crear calculadora que:
	1.- Pida dos numeros por pantalla.
	2.- Si se meten valores incorrectos volverlos a pedir.
	3.- Mostrar por consola, alert y en el body el resultado de sumar, restar, multiplicar y dividir
	esos dos numeros.
*/

var primer_numero = parseInt(prompt("Ingrese su primer numero", 0));
var segundo_numero = parseInt(prompt("Ingrese su segundo numero", 0));

while(isNaN(primer_numero)){
	primer_numero = parseInt(prompt("Ingrese su primer numero", 0));
}
while(isNaN(segundo_numero)){
	segundo_numero = parseInt(prompt("Ingrese su segundo numero", 0));
}

var suma = primer_numero + segundo_numero;
var resta = primer_numero - segundo_numero;
var multiplicacion = primer_numero * segundo_numero;
var division = primer_numero / segundo_numero;

console.log("La suma de ambos numeros es: " + suma);
console.log("La resta de ambos numeros es: " + resta);
console.log("La multiplicacion de ambos numeros es: " + multiplicacion);
console.log("La division de ambos numeros es: " + division);

alert("La suma de ambos numeros es: " + suma);
alert("La resta de ambos numeros es: " + resta);
alert("La multiplicacion de ambos numeros es: " + multiplicacion);
alert("La division de ambos numeros es: " + division);

document.write("La suma de ambos numeros es: " + suma + "<br>");
document.write("La resta de ambos numeros es: " + resta + "<br>");
document.write("La multiplicacion de ambos numeros es: " + multiplicacion + "<br>");
document.write("La division de ambos numeros es: " + division + "<br>");
