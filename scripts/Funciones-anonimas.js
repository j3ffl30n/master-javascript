'use strict'

var pelicula = function(nombre){
	return "La pelicula es: " + nombre;
}


function sumame(numero1, numero2){
	var sumar = numero1 + numero2;

	return sumar;
}


//Funcion anonima para callback


function sumame(numero1, numero2, sumeYmuestra, sumePorDos){
	var sumar = numero1 + numero2;

	sumeYmuestra(sumar);
	sumePorDos(sumar);

	return sumar;
}

sumame(5,7, function(dato){
	console.log("La suma es: ", dato);
},function(dato){
	console.log("La suma por dos es: ", (dato *2));
});

//Funcion flecha en nuevo standar, hace lo mismo que el callback
sumame(5,7, dato =>{
	console.log("La suma es: ", dato);
},dato =>{
	console.log("La suma por dos es: ", (dato *2));
});
