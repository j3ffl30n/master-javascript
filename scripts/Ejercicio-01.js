'use strict'


var nombre = 'jeff'
console.log(nombre)

var confirmacion = confirm("Yes or N");
console.log(confirmacion);

var edad = prompt('Introduce un numero', 0);
//Para verificar si no es un numero
console.log(isNaN(edad));

var edad = parseInt(prompt('Introduce un numero', 0));
console.log(edad);
var imprimir = "";
switch(edad){
	case 1: 
		imprimir = "Elegiste la opcion 1";
	break;
	case 2: 
		imprimir = "Elegiste la opcion 2";
	break;
	case 3: 
		imprimir = "Elegiste la opcion 3";
	break;
	default: 
		imprimir = "No se selecciono opcion, se asignara 0"
	break;
}
console.log(imprimir);