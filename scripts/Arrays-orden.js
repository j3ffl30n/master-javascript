'use strict'

var categorias = ['Accion', 'Terror', 'Comedia', 'Drama'];
var cantidades = [23, 10, 45, 6, 9, 72];

categorias.sort();
console.log(categorias);

categorias.reverse();
console.log(categorias);

function myFunction() {
    cantidades.sort((a,b) =>{return a-b});
	console.log(cantidades);
}

myFunction();

//Otra maner de ordenar

for(let categoria in categorias){
	console.log(categorias[categoria])
}