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

// bucle para recoger los botones con class boton_value
for(i = 0; i < boton_value.length; i++){
  boton_value[i].onclick = (ev) =>{
    boton_value(ev.target);
  }
}

// bucle para recoger botones con calss op
for(i=0; i<op.length; i++){
  op[i].onclick=(ev)=>{
    op(ev.target);
  }
}

function digito(boton)
{
  if (display.innerHTML=="0") {
    display.innerHTML = boton.value;
  }else {
    display.innerHTML += boton.value;
  }
}

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
ac.onclick = () => {
  display.innerHTML = "0";
}

borrar.onclick = () =>{
  var length = display.innerHTML.length;
  //display.innerHTML = "0";
  if (display.innerHTML.length > 1) {
    display.innerHTML = display.innerHTML.slice(0,display.innerHTML.length - 1);
  }else if (display.innerHTML.length = 1) {
    display.innerHTML = "0";
  }
}