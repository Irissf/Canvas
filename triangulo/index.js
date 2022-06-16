const canvas = document.getElementById("canvas").getContext("2d");

canvas.beginPath();
canvas.moveTo(10,10);
canvas.lineTo(30,30);
canvas.lineTo(10,50);
// canvas.lineTo(10,10);//esta linea no es ncesaria, ya une el ultimo con el primero
canvas.closePath();
canvas.fill();


canvas.beginPath(); //se llama el lienzo
canvas.moveTo(50,10); //colocamos el puntero para empezar
canvas.lineTo(50,50);
canvas.lineTo(30,30);
canvas.closePath();
canvas.fill();



canvas.fillStyle = "rgba(88, 24, 69 , 0.7)" ;
canvas.beginPath(); //se llama el lienzo
canvas.moveTo(70,0); //colocamos el puntero para empezar
canvas.lineTo(90,20);
canvas.lineTo(70,40);
canvas.closePath();
canvas.fill();

canvas.fillStyle = "rgba(199, 0, 57, 0.7)" ;
canvas.beginPath(); //se llama el lienzo
canvas.moveTo(80,10); //colocamos el puntero para empezar
canvas.lineTo(100,30);
canvas.lineTo(80,50);
canvas.closePath();
canvas.fill();

canvas.fillStyle = "rgba(255, 195, 0, 0.7)" ;
canvas.beginPath(); //se llama el lienzo
canvas.moveTo(90,20); //colocamos el puntero para empezar
canvas.lineTo(110,40);
canvas.lineTo(90,60);
// canvas.closePath(); //funciona bien sin esta linea
canvas.fill();