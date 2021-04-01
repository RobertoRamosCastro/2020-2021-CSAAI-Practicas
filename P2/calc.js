console.log("Ejecutando JS...");


// botones de la calcu
division = document.getElementById("division")
igual = document.getElementById("igual")
suma = document.getElementById("suma")
resta = document.getElementById("resta")
multiplicacion = document.getElementById("multiplicacion")
exponencial = document.getElementById("botonEXP")
del =  document.getElementById("botonDELl")
ac = document.getElementById("botonAC")
dot = document.getElementById("dot")
result = document.getElementById("result")

// array con los tipos de digitos
let boton_value = document.getElementsByClassName("boton_value");
// array con los tipos de operaciones
let op = document.getElementsByClassName("op");

// estados calcu
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4
};

// bucle para recoger los botones con class boton_value
for(i = 0; i < boton_value.length; i++){
  boton_value[i].onclick = (ev) =>{
    valor(ev.target);
  }
}

// bucle para recoger botones con calss op
for(i=0; i<op.length; i++){
  op[i].onclick=(ev)=>{
    operacion(ev.target);
  }
}

// Funciones de retrollamada de los botones
// Cada vez que se aprieta un boton se actua
// sobre la cadena: añadiendo digito, operador +
// poniendo a cero o evaluando la expresión

// Insertar +
suma.onclick = () => {
  display.innerHTML += "+";
}

// Insertar -
resta.onclick = () => {
  display.innerHTML += "-";
}

// Insertar *
multiplicacion.onclick = () => {
  display.innerHTML += "*";
}

// Insertar /
division.onclick = () =>{
  display.innerHTML += "/";
}

// Insertar **
exponencial.onclick = () =>{
  display.innerHTML += "**";
}


// Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

// Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}
