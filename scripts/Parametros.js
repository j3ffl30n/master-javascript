'use strict'

//Parametro RESt

function listaDeFrutas(fruta1, fruta2, ... resto_de_frutas){
	console.log("Fruta 1: " + fruta1);
	console.log("Fruta 2: " + fruta2);
	console.log(resto_de_frutas);
}

listaDeFrutas("Durazno", "Manzana", "Coco", "Pera", "Fresa", "Mora", "Uva");

//Parametro SPREAD
var frutas = ["Durazno", "Manzana"];
listaDeFrutas(...frutas, "Coco", "Pera", "Fresa", "Mora", "Uva");