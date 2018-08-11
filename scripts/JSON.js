'use strict'

//JSON

var pelicula = {
	titulo: "Batman vs Superman",
	year: 2017,
	pais: "Estados unidos"
}

var peliculas = [
	{titulo: "La verdad duele", year: 2006, pais: "Francia"},
	pelicula

	];

//Cambiar propiedad
//pelicula.titulo = "Superman Begins"

var i;
for(i in peliculas){
	var list = peliculas[i].titulo + " - " + peliculas[i].year;
	console.log(list);
}
console.log(pelicula);



const clients = [
  { id: 1, taxNumber: '86620855', name: 'HECTOR ACUÑA BOLAÑOS'},
  { id: 2, taxNumber: '7317855K', name: 'JESUS RODRIGUEZ ALVAREZ'},
  { id: 3, taxNumber: '73826497', name: 'ANDRES NADAL MOLINA'},
  { id: 4, taxNumber: '88587715', name: 'SALVADOR ARNEDO MANRIQUEZ'},
  { id: 5, taxNumber: '94020190', name: 'VICTOR MANUEL ROJAS LUCAS'},
  { id: 6, taxNumber: '99804238', name: 'MOHAMED FERRE SAMPER' }
];

var b;
	for(b in clients){
		var clientsList = clients[b].taxNumber;
		console.log(clientsList);
	}

function myFunction() {
    clients.sort((a,b) =>{return a-b});
	console.log(clients);
}

myFunction();



