const canvas = document.getElementById("canvas");

//Mejor establecer el tamaño del canvas en js
canvas.width = 500;
canvas.height = 550;

const context = canvas.getContext("2d");

context.fillStyle = "pink";
context.beginPath();
context.moveTo(80,40);
context.lineTo(320,40);
context.lineTo(320,460);
context.lineTo(80,460);
context.fill();

context.fillStyle = "red";

//azotea y carteles
context.fillRect(260,20, 40,20);
context.fillRect(20,120,40,140);
context.fillRect(340,240,40,120);
context.fillRect(60,380,20,80);



//ventanas
context.fillRect(100,60, 200, 80); // x, y , ancho y alto
context.fillRect(120,160, 200, 80); // x, y , ancho y alto

