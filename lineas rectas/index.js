const canvas = document.getElementById("canvas");

//Creamos un contexto para acceder a los métodos de dibujo de canvas
const context = canvas.getContext("2d");

//color y grosor
context.strokeStyle = "black";
context.lineWidth = 2;

//punto inicio de la linea (x,y)
context.moveTo(10,10);
//punto final de la linea (x,y)
context.lineTo(100,10);
//pintar
context.stroke();

//casa
context.beginPath(); //comenzamos una figura
context.moveTo(10,70);
context.lineTo(10,80);

context.moveTo(10,70);
context.lineTo(70,70);

context.moveTo(10,80);
context.lineTo(70,80);

context.moveTo(70,70);
context.lineTo(70,80);
context.closePath(); // cierra una figura

//podemos encadenar trazos si uno va seguido del otro, queda con menos lineas
//que el modo de arriba
context.moveTo(20,70);
context.lineTo(20,50);
context.lineTo(40,30);
context.lineTo(60,50);
context.lineTo(60,70);

context.moveTo(50,40);
context.lineTo(50,20);
context.lineTo(60,20);
context.lineTo(60,30);
context.lineTo(50,30);

context.stroke();
