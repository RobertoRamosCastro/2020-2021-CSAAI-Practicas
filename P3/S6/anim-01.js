console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

// Definir el tamaño del canvas
canvas.width = 470;
canvas.height = 800;

xcanvas = 470;


//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

// Puntos para ganar la partida
let points = 0;

// Tamaño pala y anchura para cuando rebote
let tamanoXpala = 90;
let tamanoYpala = 20;
let anchopala = 30;
let altopala = 30;
let radio = 10;

//consts para chocar, cuando rompa un ladrillo y cuaando pierda

/*
Velocidades del objeto, tanto x e y;
inicializadas las velocidades
*/
velxbola = 0;
velybola = 0;

//Estados del juego
const ESTADO = {
  INIT: 0,
  JUGANDO: 1
}
//-- Variable de ESTADO
// Arrancamos desde el estado inicial
let estado = ESTADO.INIT;

/* Numero de bloques, 
colores,
posiciones
*/
let filas = 5;
let columnas = 7;
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
  // Condicional que se ocupa de cuando estamos sin jugar (pre-space)
  if (estado == ESTADO.INIT)
  {
    xbola = 235;
    ybola = 750;
    velxbola = 0;
    velybola = 0;
    xpala = 190;
    ypala = 770;
    points = 0;
    for (b = 0; b < filas*columnas; b++){
          arraybloques[b].estado = 1;
    }  
  }
  
  // Condicional grande que se ocupa de las acciones mientras jugamos
  if(estado == ESTADO.JUGANDO){
   
    if(velybola == 0 && velxbola == 0){
      velxbola = -6;
      velybola = -5;
    }
  

    //-- 1) Actualizar posiciones de los elementos
    if (xbola >= xpala && xbola <=(xpala + anchopala + radio) && ybola >= (ypala - radio) && ybola <=(ypala + altopala + radio)) {
      velybola = velybola * -1;
      velxbola = velxbola * 1;
    }
    // condicional limitante del tamaño del canvas
    else if (xpala < 0){
        xpala = 0;
    }else if(xpala > 400){
        xpala = 400;
    }else if (xbola < 15 || xbola >= xcanvas){
      velxbola = -velxbola;
    }else if (ybola < 10){
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

    // Si llega a estos puntos fin de la partida
    if(points == 90){
      estado = ESTADO.INIT;
    }
  }

  //-- 2) Borrar el canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- 3) Dibujar los elementos visibles
  //dibujar raqueta
  ctx.beginPath();
    ctx.rect(xpala,ypala,tamanoXpala,tamanoYpala);
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
      xpala = xpala - 30;
    break;
    case "6":
      xpala = xpala + 30;
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