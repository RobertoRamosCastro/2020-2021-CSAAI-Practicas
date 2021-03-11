// Esto son comentarios en Javascript
// MI primer programa javascript!!

//-- Imprimir tres mensajes en la consola
console.log("Estoy fuera del HTML");
console.log("Se recomienda hacerlo así");
console.log("------");
const test = document.getElementById("Id")
console.log(test.innerHTML)

window.alert("Hola ventana emergente")

//-- Manejador del evento click sobre el párrafo test
//-- Cada vez que se hace click en el se invoca a esta funcion
function manejador_parrafo()
{
  console.log("Click sobre el párrafo...")
}

console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test')

//-- Configurar el manejador para el evento de
//-- pulsación de botón: que se ejecute la
//-- funcion manejador_parrafo()
test.onclick = manejador_parrafo;