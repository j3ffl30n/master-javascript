'use strict'

/*
	Mostrar todos los numeros divisores de un numero introducido en prompt
*/

var mi_numero = parseInt(prompt("Ingrese u numero", 1));


for(var i = 1; i <= mi_numero; i++){
	if(mi_numero%i == 0){
		console.log("Los divisores de mi numero son: " + i)
	}
}
