console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 500;
canvas.height = 500;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Texto solido
ctx.font = "25px Arial";
ctx.fillStyle = 'yellow'
ctx.fillText("Texo sólido", 200, 200);

//-- Texto trazo
ctx.strokeStyle = 'blue';
ctx.font = "35px Arial";
ctx.strokeText("Texto trazo", 220, 230);


ctx.beginPath();

    //-- Dibujar un circulo: coordenadas x,y del centro
    //-- Radio, Angulo inicial y angulo final
        // x,y,radio,angulo inic. angulo fin.
    ctx.arc(100, 50, 10, 0, 2 * Math.PI);
    ctx.strokeStyle = 'blue';
    //ctx.lineWidth = 3; solo se puede usar una vez el ancho de linea
    ctx.fillStyle = 'yellow';

    //-- Línea horizontal
    ctx.moveTo(10, 20);
    ctx.lineTo(100, 20);

    //-- Línea horizontal y vertical, unidas
    ctx.moveTo(10, 80);
    ctx.lineTo(200,80);

    ctx.moveTo(150,80);
    ctx.lineTo(150,20);

    ctx.strokeStyle = 'blue';
    //-- Cambiar el tamaño de la linea del trazo
    ctx.lineWidth = 10;

    //-- Dibujar el trazo
    ctx.stroke()

    //-- Dibujar el relleno
    ctx.fill()
    
ctx.closePath()