'use strict'

var categorias = ['Accion', 'Terror', 'Comedia', 'Drama'];
var peliculas = ["Peli 1", "Peli 2", "Peli 3", "Peli 4"];

console.log(categorias);

var cine = [categorias, peliculas];

console.log(cine[0][1]); //Mostrar Terror
console.log(cine[1][1]); //Mostrar Peli 2

//Agregar un elemento al array
categorias.push("Fantasia");
console.log(categorias);

//Eliminar el ultimo arreglo del array
categorias.pop();
console.log(categorias);

//Verificar la posicion del arreglo que deseo eliminar
var indice = peliculas.indexOf("Peli 3");

if(indice > -1){
	peliculas.splice(indice, 1); //Eliminar la posicion deseada segun el indexOf
}

console.log(peliculas);

//Convertir todo un array a texto separado por comas
var peliculas_texto = peliculas.join();
console.log(peliculas_texto);

//Convertir un texto a un array
var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);