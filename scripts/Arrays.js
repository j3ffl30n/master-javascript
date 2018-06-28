'use strict'

//Arrays, arreglos, matrices, etc

var nombres = ["Jeffrey Leon", "Lyzmar Padilla", "Gladys Merentes"];

var lenguajes = new Array("PHP", "Java", "Python", "Ruby", "SQL", "JavaScript");


console.log(nombres);
console.log(lenguajes);

//Para conocer la longitud del array
console.log(nombres.length);

for(var i=0; i<lenguajes.length; i++){
	console.log(lenguajes[i]);
}


lenguajes.forEach((a, b, c)=>{
	//document.write(a + " - " + b + " - " + c + "<br>");
});
