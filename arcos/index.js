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

//no hay circulos como tal
context.beginPath();
context.arc(50, 50, 30, 0, 2 * Math.PI);
context.stroke();