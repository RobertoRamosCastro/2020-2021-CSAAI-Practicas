console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 900;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

let xcanvas = 590;
let ycanvas = 890;

//-- Posición del elemento a animar
let xpala = 250
let ypala = 875;

// Bola
let xbola = 300;
let ybola = 600;
// Velocidades del objeto, tanto x e y
velxbola = 3;
velybola = -2;

// Ladrillos columnas
let c1 = 20;
let c2 = 80;
let c3 = 140;
let c4 = 200;
let c5 = 260;
let c6 = 320;
let c7 = 380;
let c8 = 440;
let c9 = 600;
// Ladrillos filas
let f1 = 200;
let f2 = 150;
let f3 = 100;
let f4 = 50;

//-- Estados del juego
const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  JUGANDO: 2,
  WINNER: 3,
}
//-- Variable de ESTADO
// Arrancamos desde el estado inicial
let estado = ESTADO.JUGANDO;

//-- Funcion principal de animacion
function update() 
{
  console.log("test");
  //-- Algoritmo de animacion:

  //-- 3) Dibujar los elementos visibles
  //dibujar raqueta
  ctx.beginPath();
    ctx.rect(xpala,ypala,100,75);
    ctx.fillStyle = 'rgb(255, 100, 50)';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //dibujar bola
  ctx.beginPath();
    ctx.arc(xbola, ybola, 10, 0, 2 * Math.PI);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  /*//dibujar ladrillos
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
      ctx.rect(ci,f1,50,25);
      ctx.fillStyle = 'blue';
      ctx.fill();
      ctx.stroke()
    ctx.closePath();
  }*/

  //fila1 
  ctx.beginPath();
    ctx.rect(c1,f2,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c2,f2,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c3,f2,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c4,f2,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c5,f2,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c6,f2,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c7,f2,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c8,f2,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c9,f2,50,25);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();


    //fila2
  ctx.beginPath();
    ctx.rect(c1,f1,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c2,f1,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c3,f1,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c4,f1,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c5,f1,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c6,f1,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c7,f1,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c8,f1,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c9,f1,50,25);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //fila3
  ctx.beginPath();
    ctx.rect(c1,f3,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c2,f3,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c3,f3,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c4,f3,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c5,f3,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c6,f3,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c7,f3,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c8,f3,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c9,f3,50,25);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();  

  //fila4 
  ctx.beginPath();
    ctx.rect(c1,f4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c2,f4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c3,f4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c4,f4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c5,f4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c6,f4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c7,f4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c8,f4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  ctx.beginPath();
    ctx.rect(c9,f4,50,25);
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.stroke()
  ctx.closePath();

  //-- 1) Actualizar posiciones de los elementos
  if (estado == ESTADO.JUGANDO){

    if (velxbola == 0 && velybola == 0){
      velxbola = 5;
      velybola = -3;
    }
  
    if (xbola < 0 || xbola >= xcanvas) {
      velxbola = -velxbola;
    }
    if (ybola < 0) {
      velybola = -velybola;
    }
  
    xbola = xbola + velxbola;
    ybola = ybola + velybola;
    //colisionraqueta
    if (xbola >= xRaqueta && xbola <=(xRaqueta + 100) && ybola >= (yRaqueta - 15) && ybola <=(yRaqueta + 75)) {
      velybola = velybola * -1;
      velxbola = velxbola * -1;
    }
  }
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);
}

window.onkeydown = (e) => {
  //-- Según la tecla se hace una cosa u otra
  switch (e.key) {
    case "a":
      xpala = xpala - 20;
    break;
    case "d":
      xpala = xpala + 20;
    break;
    /*
    case " ":
      estado = ESTADO.JUGANDO;
    break;*/
  }
}



/*window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "d") {
      xRaqueta = xRaqueta;
  }
}*/

//-- ¡Que empiece la función!
update();