const canvas = document.getElementById("canvas");


canvas.width = 500;
canvas.height = 550;

const context = canvas.getContext("2d");

context.beginPath();
context.moveTo(10,380);
//x,y de punto de control, x e y del punto final
context.quadraticCurveTo(300,50,380,380);
context.lineWidth = 3;

//solo lo ponemos para ver el punto de anclaje de tirar de la recta
context.moveTo(300,50);
context.arc(300,50,5,0,Math.PI*2,false);

context.strokeStyle = "black";
context.stroke();



