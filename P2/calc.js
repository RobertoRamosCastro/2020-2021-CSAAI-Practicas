// codigo generico para que cada vez que pulsamos "digito" se ejecute esto
console.log("Ejecutando JS...");

const botones = document.getElementsByClassName("digito")

//-- Función de retrollamada de los botones
//-- botones de la clase dígito
function digito(value) // unica funcion de retrollamada
{
  console.log("Valor: " + value);
}

for (let boton of botones) {

  //-- Establecer la funcion de llamada del boton i
  //-- El parámetro ev.target contiene el boton
  //-- que ha recibido el click
  boton.onclick = (ev) => {
    digito(ev.target.value)
  }
}