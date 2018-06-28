'use strict'

function prueba(){
	return "Hola mundo";
}
//console.log(prueba());


function prueba2(){
	console.log("Hola mundo 2");
}
//prueba2();


var numero1 = parseInt(prompt("Ingrese el primer numero", 0));
var numero2 = parseInt(prompt("Ingrese el segundo numero", 0));

var numero3 = parseInt(prompt("Ingrese el tercer numero", 0))

function calculadora(numero1, numero2){	
	console.log("Suma:" + (numero1 + numero2)); 
	console.log("Resta:" + (numero1 - numero2)); 
	console.log("Multiplicacion:" + (numero1 * numero2)); 
	console.log("Division:" + (numero1 / numero2)); 

}

calculadora(numero1, numero2);
