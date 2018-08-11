'use strict'

window.addEventListener('load', ()=>{

	//Eventos mouse
	var boton = document.querySelector("#boton");
	var boton2 = document.querySelector("#boton2");

	function cambioColor(){
		var bg = boton.style.background;

		if(bg == "green"){
			boton.style.background = "red"
		}else {
			boton.style.background = "green";
		}


		var bg2 = boton2.style.background;

		if(bg2 == "blue"){
			boton2.style.background = "yellow"
		}else {
			boton2.style.background = "blue";
		}



		return true;	
	}
	//Evento que se ejecuta al hacer click sobre el elemento seleccionado
	boton2.addEventListener('click', function(){
		cambioColor()
	});


	//Evento que se ejecuta al pararte sobre el elemento seleccionado
	var texto1 = document.querySelector("#texto1");
	texto1.addEventListener('focus', function(){
		console.log("Ejecutando focus")
	});

	//Evento que se ejecuta al salir del elemento seleccionado
	var texto1 = document.querySelector("#texto1");
	texto1.addEventListener('blur', function(){
		console.log("Ejecutando blur")
	});

	//Evento que se ejecuta al presionar una tecla dentro de un input
	var texto1 = document.querySelector("#texto1");
	texto1.addEventListener('keydown', function(){
		console.log("Ejecutando keydown")
	});

	//Evento que se ejecuta al salir del elemento seleccionado
	var texto1 = document.querySelector("#texto1");
	texto1.addEventListener('keypress', function(){
		console.log("Ejecutando keypress")
	});

	//Evento que se ejecuta al salir del elemento seleccionado
	var texto1 = document.querySelector("#texto1");
	texto1.addEventListener('keyup', function(){
		console.log("Ejecutando keyup")
	});
});

