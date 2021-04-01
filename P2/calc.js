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
let digitos = document.getElementsByClassName("cdigito");
// array con los tipos de operaciones
let operaciones = document.getElementsByClassName("operador");

// estados calcu
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4
};

// este bucle lee cada digito que se pulsa del array de arriba, dentro lleva la funcion de los digitos
for(i = 0; i < digitos.length; i++){
  digitos[i].onclick = (ev) =>{
    valor(ev.target);
  }
}

// bucle identico para las operaciones dentro lleva la funcion de las operaciones
for(i=0; i<operacion.length; i++){
  operacion[i].onclick=(ev)=>{
    operacion(ev.target);
  }
}

// Funciones de retrollamada de los botones
// Cada vez que se aprieta un boton se actua
// sobre la cadena: añadiendo digito, operador +
// poniendo a cero o evaluando la expresión

// Insertar digito 1
boton1.onclick = () => {
  display.innerHTML += "1";
}

// Insertar digito 2
boton2.onclick = () => {
  display.innerHTML += "2";
}

// Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += "+";
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
