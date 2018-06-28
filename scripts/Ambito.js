'use strict'


function holaMundo(texto){
	var hola = "Desde dentro de la funcion"; //Variable que sol se puede usar dentro de la funcion
	console.log(hola);
	console.log(texto);
	console.log(numero);
	//Convierto mi numero a string
	console.log(typeof numero.toString(), numero.toString());
}

var texto = "Variable global"
var numero = 9; //Variable global
holaMundo(texto);numero