'use strict'

//Saber si local storage esta disponible en mi navegador
if (typeof(Storage) !== 'undefined') {
	console.log("Disponible");
}else {
	console.log("No disponible");
}

//Almacenar datos en el local storage
localStorage.setItem("Titulo", "Master de JavaScript")

//Obtener datos en el local storage
var loc = localStorage.getItem("Titulo");
console.log(loc);


//Guardar objetos del local storage
var usuario = {nombre: "Jeffrey Leon", email: "jeffrey.leon@gmail.com", web: "pixelvzla.com"};

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objeto 
var parse = JSON.parse(localStorage.getItem("usuario"));
console.log(parse.nombre);


//Borrar elemento del local storage
localStorage.removeItem(usuario);


//Limpiar todo el local storage
localStorage.clear();