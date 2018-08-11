'use strict'


//Aqui obtengo el valor de un elemento html
var caja = document.getElementById("mi-caja").innerHTML;


//Aqui obtengo el valor de un elemento html y lo sustituyo por el valor que quiera
//caja = document.getElementById("mi-caja").innerHTML = "Mi caja modificada desde script";

var caja = document.getElementById("mi-caja");

caja.style.background = "blue";
caja.style.padding = "20px";
caja.style.color = "white";
caja.style.textTransform = "uppercase";

console.log(caja);

//var color = prompt("Introduzca un color de fondo para la caja");


function cambiaColor(color){
	caja.style.background = color;
}

cambiaColor();

caja = document.querySelector("#mi-caja");


//Conseguir elementos por etiqueta
var misDivs = document.getElementsByTagName('div');
console.log(misDivs)

var b = misDivs.length;
var valor;
for(valor in misDivs){
	var parrafo = document.createElement("p");
	var texto = document.createTextNode(misDivs[valor].textContent);
	parrafo.appendChild(texto);
	document.querySelector("#mi-seccion").appendChild(parrafo);

}







//Conseguir elementos por clase