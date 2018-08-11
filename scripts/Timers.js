'use strict'

window.addEventListener('load', ()=>{

	var tiempo = setInterval(function(){
		console.log("Ejecutando setInterval");

		var encabezado = document.querySelector("h1");

		if (encabezado.style.fontSize == "50px") {
			encabezado.style.fontSize = "20px";
		}else {
			encabezado.style.fontSize = "50px";
		}

	}, 2000);

	var tiempo2 = setTimeout(function(){
		console.log("Ejecutando setTimeout");

		var encabezado = document.querySelector("h1");

		if (encabezado.style.fontSize == "50px") {
			encabezado.style.fontSize = "20px";
		}else {
			encabezado.style.fontSize = "50px";
		}

	}, 2000);

	var stop = document.querySelector("#stop");

	stop.addEventListener("click", function(){
		alert("Detuviste el tiempo");
		clearInterval(tiempo);
	});

});






















