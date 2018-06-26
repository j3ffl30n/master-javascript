'use strict';

/*
	Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
*/

var primer_numero = parseInt(prompt("Ingrese el primer numero",0));
var segundo_numero = parseInt(prompt("Ingrese el segundo numero",0));


for(var i=primer_numero; i <= segundo_numero; i++){
	if(i%2 != 0 ){
		console.log(i);
	}
}
