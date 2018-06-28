'use strict'

var numero = 246
var texto1 = "Mi nombre es Jeffrey y de nuevo mi nombre es Jeffrey"
var texto2 = "y mi apellido es Leon"



//Reemplazar un texto pr otro
var busqueda = texto1.replace("Jeffrey", "Josue")
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");

//Cortar un texto de una posicion a otra
var busqueda = texto1.slice(14, 22)
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");

//Separar texto segun lo que se solicite
var busqueda = texto1.split(" ")
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");

//Quitar espacios delante y detras del texto
var busqueda = texto1.trim(" ")
console.log(busqueda);
console.log("++++++++++++++++++++++++++++++++++++++++");

var html = `
	<h1>Hola Mundo</h1>
	<div style="background: blue;">
		<p> Mi parrafo de prueba</p>
		<p> Mi variable contiene:</p> <br>
		<p>${texto1}</p>

	</div>

	`;
document.write(html);