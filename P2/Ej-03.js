// Esto son comentarios en Javascript
// MI primer programa javascript!!

//-- Imprimir tres mensajes en la consola
console.log("Estoy fuera del HTML");
console.log("Se recomienda hacerlo así");
console.log("------");
//const test = document.getElementById("Id")
//console.log(test.innerHTML)

window.alert("Hola ventana emergente")

console.log("Ejecutando js...")

//-- Leer el párrafo identificado como test
const test = document.getElementById('test').onclick = console.log("Click sobre el párrafo...")
//-- Leer el elemento párrafo test2
const test2 = document.getElementById('test2')
//-- Obtener el elemento párrafo 1 para modificarlo
const test1 = document.getElementById('test1')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
test2.onclick = function() {
  console.log("Click sobre el párrafo 2...")

  //-- Cambiar su texto
  test1.innerHTML = "¡TEXTO CAMBIADO!"
}