const canvas = document.getElementById("canvas");

//Creamos un contexto para acceder a los métodos de dibujo de canvas
const context = canvas.getContext("2d");

//primero definimos el color
context.fillStyle = "pink";
// 4 parámetros, son las coordenadas y las distancias x-inicial, y-inicla, x-final,y-final
context.fillRect(20, 20, 100, 50); 


//color para el borde
context.strokeStyle = "red";
//ancho linea
context.lineWidth = 3;
//pintar
context.strokeRect(40, 40, 100, 50);