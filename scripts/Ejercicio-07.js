'use strict'

/*
	Tabla de multiplicar de un numero introducido por prompt
*/

var mi_numero = parseInt(prompt("Ingrese u numero", 0));
var multiplica = 10;


for(var i=1; i <= multiplica; i++){
	console.log(mi_numero * i);
}