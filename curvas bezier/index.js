const canvas = document.getElementById("canvas");


canvas.width = 500;
canvas.height = 550;

const context = canvas.getContext("2d");

context.beginPath();

context.moveTo(20,200);
//x y primer punto, x y segundo punto, x e y del punto final
context.bezierCurveTo(100,20,300,280,300,200);

//para ver los puntos
context.moveTo(100,20);
context.arc(100,20,5,0,Math.PI*2,false);
context.moveTo(300,280);
context.arc(300,280,5,0,Math.PI*2,false);

context.lineWidth = 3;
context.strokeStyle = "black";
context.stroke();



