'use strict'

/*
Hacer un programa que:
1. Pida 6 numeros por pantalla y los meta en un arreglo
2. Mostrar el array entero en el cuerpo de la pagina y en la consola
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, 
   y verificar si esta en el array y de estar decir su indice

*/

var mi_array = new Array(6);


for(var i=0; i<6; i++){
	mi_array[i] = parseInt(prompt("Introduzca el elemento numero " + i +" del array", 0)); 
	//mi_array.push(i);
}

document.write(mi_array);
console.log("Este es mi array original: " + mi_array);

//Ordeno el arreglo de forma ascendente
mi_array.sort((a,b) => a-b);
console.log("Este es mi array ordenado: " + mi_array)

//Ordeno el arreglo de forma descendente
mi_array.sort((a,b) => b-a);
console.log("Este es mi array ordenado: " + mi_array)

//Muestro cuantos elementos tiene mi array
console.log("Mi array tiene " + mi_array.length + " elementos");

var buscar = parseInt(prompt("Introduzca un numero  para buscar dentro del array", 0)); 

var resultado = mi_array.find(valor => valor == buscar);

var indice = mi_array.findIndex(valor => valor == buscar);



if(resultado == buscar){
	console.log("Mi resultado fue encontrado y esta en la posicion #: "+ indice);
}else console.log("No hubo coincidencias");

