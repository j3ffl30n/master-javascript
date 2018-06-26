'use strict'

/*
	Hacer un programa que indique si un numero ingresado es par o impar, 
	y si el numero no es valido que nos pida de nuevo el numero

*/

var mi_numero = parseInt(prompt("Ingrese u numero", 0));

while(isNaN(mi_numero)){
	mi_numero = parseInt(prompt("Ingrese u numero", 0));
}
if(mi_numero%2 == 0 ){
	console.log("Es par");
}else
	console.log("Es impar");