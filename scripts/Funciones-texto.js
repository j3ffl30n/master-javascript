'use strict'

var numero = 246
var texto1 = "Mi nombre es Jeffrey y de nuevo mi nombre es Jeffrey"
var texto2 = "y mi apellido es Leon"


//Convertimos a String
var dato1 = numero.toString();

//Convertimos a mayuscula
var	dato2 = texto1.toUpperCase();

//Convertimos a minuscula
var	dato3 = texto1.toLowerCase();

console.log(dato1, dato2, dato3);


console.log(texto1.length);

//Concatenar textos
var textoTotal = texto1 + ' ' +texto2;
console.log("++++++++++++++++++++++++++++++++++++++++");
console.log(textoTotal);

//Otra manera
var concat = texto1.concat(" ", texto2);
console.log("++++++++++++++++++++++++++++++++++++++++");
console.log(concat);
console.log("*******************************************************");

//Buscar donde comienza la palabra "Jeffrey"
var busqueda = texto1.indexOf("Jeffrey");
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");

//La ultima vez que esa palabra es encontrada
busqueda = texto1.lastIndexOf("Jeffrey");
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");

//Otra manera
busqueda = texto1.search("Jeffrey");
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");

//Otra manera que genera un array
busqueda = texto1.match("Jeffrey");
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");
	//ahora con expresion regular, coloco gi al final para que busque de manera global
	busqueda = texto1.match(/Jeffrey/gi);
	console.log(busqueda);
console.log("*******************************************************************");

//Otra manera con substr
busqueda = texto1.substr(13, 7);
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");

//Para sacar una letra en concreto
busqueda = texto1.charAt(18);
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");

//Para buscar al inicio de un string, devuelve TRUE o FALSE
busqueda = texto1.startsWith("Mi nombre");
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");

//Para buscar al final de un string, devuelve TRUE o FALSE
busqueda = texto1.endsWith("Jeffrey");
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");


//Para buscar una coincidencia en un string, devuelve TRUE o FALSE
busqueda = texto1.includes("Jeffrey");
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");

