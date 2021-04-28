console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del canvas
canvas.width = 600;
canvas.height = 900;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

let xcanvas = 590;
let ycanvas = 890;

let points = 0;
//-- Posición del elemento a animar
let xpala = 250
let ypala = 875;
let anchuraraqueta = 100;
let alturaraqueta = 25;
let radio = 10;

// Bola
let xbola = 300;
let ybola = 850;
 // Velocidades del objeto, tanto x e y
    //inicializar las velocidades
    velxbola = 0;
    velybola = 0;

//-- Estados del juego
const ESTADO = {
  INIT: 0,
  JUGANDO: 1
}
//-- Variable de ESTADO
// Arrancamos desde el estado inicial
let estado = ESTADO.INIT;

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

  if (estado == ESTADO.INIT)
  {
    xbola = 300;
    ybola = 850;
    velxbola = 0;
    velybola = 0;
    xpala = 250;
    ypala = 875;
    points = 0;
    for (b = 0; b < filas*columnas; b++){
          arraybloques[b].estado = 1;
    }  
  }
    
  if(estado == ESTADO.JUGANDO){
   
    if(velybola == 0 && velxbola == 0){
      velxbola = 5;
      velybola = -5;
    }
  

    //-- 1) Actualizar posiciones de los elementos
    if (xbola >= xpala && xbola <=(xpala + anchuraraqueta + radio) && ybola >= (ypala - radio) && ybola <=(ypala + alturaraqueta + radio)) {
      velybola = velybola * -1;
      velxbola = velxbola * 1;
    }
  if (xpala < 0) {
      xpala = 0;
  }
  if (xpala > 500){
      xpala = 500;
  }

  if (xbola < 15 || xbola >= xcanvas) {
    velxbola = -velxbola;
  }
  if (ybola < 10) {
    velybola = -velybola;
  }
    xbola = xbola + velxbola;
    ybola = ybola + velybola;

  if (ybola > 900){
    estado = ESTADO.INIT;
  }
  for (b = 0; b < filas*columnas; b++){
    if (xbola >= arraybloques[b].x && xbola <= (arraybloques[b].x + anchuraladrillo + radio)
      && ybola >= arraybloques[b].y - radio && ybola <= (arraybloques[b].y + alturaladrillo + radio) && arraybloques[b].estado == 1){
        arraybloques[b].estado = 0;
        velybola = velybola * (-1);
        //copiar y pegar para las demas filas
        if(arraybloques[b].y == 250){
          points = points + 2;
          console.log(points);
        }
  }
  }
  if(points == 4){
    estado = ESTADO.INIT;
  }
  }
  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

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
  

  //-- 4) Volver a ejecutar update cuando toque
  requestAnimationFrame(update);

}

window.onkeydown = (e) => {
  //-- Según la tecla se hace una cosa u otra
  switch (e.key) {
    case "4":
      xpala = xpala - 20;
    break;
    case "6":
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