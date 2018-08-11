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

//Buscar texto especifico dentro de los elementos en un arreglo
var busqueda = categorias.find(categoria => categoria == "Comedia");
console.log(busqueda);

//Buscar indice especifico dentro de los elementos en un arreglo
var busqueda = categorias.findIndex(categoria => categoria == "Comedia");
console.log(busqueda);

//Buscar elementos dentro un arreglo de numeros, devuelve true o false
var precios = [10, 23, 5, 37, 89];
var busqueda = precios.some(precio => precio >= 20);
console.log(busqueda);
