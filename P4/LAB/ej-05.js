console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Acceso a los 3 deslizadores
const deslizador_R = document.getElementById('deslizador_R');
const deslizador_G = document.getElementById('deslizador_G');
const deslizador_B = document.getElementById('deslizador_B');

//-- Valores de los deslizadores
const value_R = document.getElementById('value_R');
const value_G = document.getElementById('value_G');
const value_B = document.getElementById('value_B');

//Botones
const gray = document.getElementById('gray');
const original = document.getElementById('ori');
const babajo = document.getElementById('bab');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

function colors(){

  //-- Mostrar el nuevo valor del deslizador
  value_R.innerHTML = deslizador_R.value;
  value_G.innerHTML = deslizador_G.value;
  value_B.innerHTML = deslizador_B.value;  
  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);
  
  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  //-- Obtener el array con todos los píxeles
  let data = imgData.data  
  
  //-- Obtener el umbral de los colores del desliador
  var umbral_R = deslizador_R.value;
  var umbral_G = deslizador_G.value;
  var umbral_B = deslizador_B.value;
  
  //-- Filtrar la imagen según el nuevo umbral
  //triplicamos este for y tenemos ya para color rojo verde azul
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral_R)
      data[i] = umbral_R;
  }
  for (let i = 1; i < data.length; i+=4) {// i=1 verde
      if (data[i] > umbral_G)
      data[i] = umbral_G;
  }
  for (let i = 2; i < data.length; i+=4) {//i=2 azul
    if (data[i] > umbral_B)
      data[i] = umbral_B;
  }
   
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}


//-- Funcion de retrollamada de los deslizadores
deslizador_R.oninput = () => {
  colors();
}
deslizador_G.oninput = () => {
  colors();
}
deslizador_B.oninput = () => {
  colors();
}

gray.onclick = () => {
  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //-- Obtener el array con todos los píxeles
  let data = imgData.data
  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    var R = data[i];
    var G = data[i+1];
    var B = data[i+2];
    var gris = (3 * R + 4 * G + B)/8;
    gris = data[i] = data[i+1] = data[i+2];
  }
  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}
original.onclick = () => {
  ctx.drawImage(img, 0,0);
  deslizador_R.value = 255;
  value_R.innerHTML = deslizador_R.value;
  deslizador_G.value = 255;
  value_G.innerHTML = deslizador_G.value;
  deslizador_B.value = 255;
  value_B.innerHTML = deslizador_B.value;
}

babajo.onclick = () =>{
  ctx.drawImage(img, 0,0);
  ctx.translate(0,img.height);
  ctx.scale(1,-1);
  ctx.drawImage(img, 0, 0);
}

console.log("Fin...");