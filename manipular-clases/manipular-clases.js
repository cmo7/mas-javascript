let caja1 = document.getElementById("caja-1");
console.log("Obtener elemento con id caja-1");
console.log(caja1);

let listaCajas = document.getElementsByClassName("box");
console.log("Obtener elementos con clase box");
console.log(listaCajas);

let seleccionCaja1 = document.querySelector("div#caja-1");
console.log("Seleccionar el primer elemento que sea div con id caja-1");
console.log(seleccionCaja1);

let seleccionCajas = document.querySelectorAll("div.box");
console.log("Seleccionar todos los elementos que sean div y tengan clase box");
console.log(seleccionCajas);

function mostrarClases(event) {
    event.target.classList.toggle("pinchado");
    event.target.classList.remove("roja");

}