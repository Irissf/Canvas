const canvas = document.getElementById("canvas");

//Mejor establecer el tamaño del canvas en js
canvas.width = 400;
canvas.height = 500;

const context = canvas.getContext("2d");

context.fillStyle = "rgba(189,125,47,1)";
context.beginPath();
context.moveTo(80,40);
context.lineTo(320,40);
context.lineTo(320,460);
context.lineTo(80,460);
context.fill();

context.fillStyle = "rgba(212,214,213,1)";

//azotea y carteles
context.fillRect(260,20, 40,20);
context.fillRect(20,120,40,140);
context.fillRect(340,240,40,120);
context.fillRect(60,380,20,80);

//ventanas
context.fillRect(100,60, 200, 80); // x, y , ancho y alto
context.fillRect(120,160, 200, 80); // x, y , ancho y alto

//puerta
context.fillStyle = "rgba(47,36,38,1)";
context.fillRect(100,260,200,200);
context.fillStyle = "rgba(92,80,68,1)";
context.fillRect(220,260,80,200);
context.fillStyle = "rgba(55,96,166,1)";
context.fillRect(100,280,120,40);

//triángulos puerta, cortina
context.fillStyle = "rgba(241,242,245,1)";
context.beginPath();
context.moveTo(100,280);
context.lineTo(120,320);
context.lineTo(140,280);
context.lineTo(160,320);
context.lineTo(180,280);
context.lineTo(200,320);
context.lineTo(220,280);

context.fill();

//lineas
context.strokeStyle = "rgba(212,214,213,1)";
context.lineWidth = 3;
context.beginPath();

context.moveTo(60,140);
context.lineTo(80,140);
context.moveTo(60,240);
context.lineTo(80,240);
context.moveTo(320,260);
context.lineTo(340,260);
context.moveTo(320,340);
context.lineTo(340,340);

context.moveTo(120,260);
context.lineTo(120,280);
context.moveTo(200,260);
context.lineTo(200,280);
context.stroke();

//triángulos puerta, cortina
context.fillStyle = "rgba(207,158,72,0.3)";
context.beginPath();
context.moveTo(80,40);
context.lineTo(320,40);
context.lineTo(320,280);

context.moveTo(260,20);
context.lineTo(300,20);
context.lineTo(300,40);

context.moveTo(340,240);
context.lineTo(380,240);
context.lineTo(380,280);

context.moveTo(20,120);
context.lineTo(60,120);
context.lineTo(60,160);
context.fill();

//sombras
context.fillStyle = "rgba(82,92,92,0.3)";
context.fillRect(20,160,20,100);
context.fillRect(80,200,80,260);
context.fillRect(340,280,20,80);









