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
const test = document.getElementById('test')

//-- Configurar el manejador para el evento de
//-- pulsación de botón
// mismo ejemplo que si pusieramos function()
// pero asi nos ahorramos escribir function
test.onclick = () => {
  console.log("Click sobre el párrafo...")
}