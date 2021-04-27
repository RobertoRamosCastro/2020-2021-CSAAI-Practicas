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
let ybola = 850;
// Velocidades del objeto, tanto x e y
velxbola = 3;
velybola = -2;

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

let filas = 5;
let columnas = 9;
var arraycolores = ['green','red','blue','gray'];
var arraybloques = new Array(filas*columnas);
let xinicial = 40;
let xincremento = 60;
let yinicial = 50;
let yincremento = 50;
let b = 0;
let anchuraladrillo = 40;
let alturaladrillo = 20;


for (i = 0; i < columnas; i++){
  for(j = 0; j < filas; j++){
      var bloque = {
          x : xinicial + i * xincremento,
          y : yinicial + j * yincremento,
          estado : 1,
          color : arraycolores[Math.floor(Math.random()*4)],
      };
      arraybloques[b] = bloque;
      b = b + 1;
  }
}

//-- Funcion principal de animacion
function update() 
{
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

// dibujar ladrillos
  for (b = 0; b < filas*columnas; b++){
      if (arraybloques[b].estado == 1){
        ctx.beginPath();
          ctx.rect(arraybloques[b].x,arraybloques[b].y,anchuraladrillo,alturaladrillo);
          ctx.fillStyle = arraybloques[b].color;
          ctx.fill();
          ctx.stroke()
        ctx.closePath();
    }
  }

  //-- 1) Actualizar posiciones de los elementos
  
  }
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);


window.onkeydown = (e) => {
  //-- Según la tecla se hace una cosa u otra
  switch (e.key) {
    case "a":
      xpala = xpala - 20;
    break;
    case "d":
      xpala = xpala + 20;
    break;
    case " ":
      estado = ESTADO.JUGANDO;
    break;
  }
}

window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "d") {
      xpala = xpala;
  }
}

//-- ¡Que empiece la función!
update();