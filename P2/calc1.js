// botones de la calcu
//division = document.getElementById("division")
igual = document.getElementById("equal")
//suma = document.getElementById("suma")
//resta = document.getElementById("resta")
//multiplicacion = document.getElementById("multiplicacion")
sqrt = document.getElementById('sqrt')
del =  document.getElementById("borrar")
ac = document.getElementById("ac")
// array con los tipos de digitos
let boton_value = document.getElementsByClassName("boton_value");
// array con los tipos de operaciones
let op = document.getElementsByClassName("op");

function digito(boton)
{
  if (display.innerHTML=="0") {
    display.innerHTML = boton.value;
  }else {
    display.innerHTML += boton.value;
  }
}

// bucle para recoger botones con class op
for(i=0; i<op.length; i++){
    op[i].onclick=(ev)=>{
      digito(ev.target);
    }
  }

// bucle para recoger los botones con class boton_value
for(i = 0; i < boton_value.length; i++){
    boton_value[i].onclick = (ev) =>{
      digito(ev.target);
    }
  }

// Evaluamos la expresión para el igual
igual.onclick = () => {
    display.innerHTML = eval(display.innerHTML);
  }
  
// Poner a cero la expresion
ac.onclick = () => {
  display.innerHTML = "0";
}
  
// Eliminar solo un dígito
del.onclick = () => {
  display.innerHTML = display.innerHTML.slice(0,-1);
}

sqrt.onclick = () => {
  display.innerHTML = Math.sqrt(display.innerHTML);
}