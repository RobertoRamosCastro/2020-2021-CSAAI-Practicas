console.log("Ejecutando JS...");

//-- Crear objeto gui, con los elementos de la interfaz gráfica
//-- Al tenerlo agrupado podemos pasarlo como parámetro o asignárselo
//-- a otro objeto
const gui = {
  display: document.getElementById("display"),
  boton: document.getElementById("boton"),
}

//-- Objeto contador: Contiene el valor y el método para incrementarse
const counter = {
  valor: 0,
  inc : function(value) { 
    this.valor += value; // se incrementa el value que le demos
    gui.display.innerHTML = this.valor; // me lo actualizas en el display
  } // con esto hemos definido un obeto con metodo, accion y valor del contador
}

//-- Acciones: Ligar el boton al contador
gui.boton.onclick = () => { 
  counter.inc(1) // llamamos al metodo inc del objeto contador
}