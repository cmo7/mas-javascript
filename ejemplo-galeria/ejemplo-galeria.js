let contadorFotos = 1;
let contenedor = document.getElementById("contenedor-fotos");

function nuevaFoto() {
    contenedor.innerHTML += `<img 
        onclick="marcarFoto(event)" 
        src="https://picsum.photos/200/200?random=${contadorFotos++}">`
}

function masFotos() {
    for (let i = 0; i < 5; i++) {
        nuevaFoto();
    }
}

function marcarFoto(event) {
    event.target.classList.toggle("marcada-para-borrar");
}

function borrarFotos() {
    let fotosParaBorrar = document.getElementsByClassName("marcada-para-borrar");
    for(let i = fotosParaBorrar.length - 1; i >= 0; i--) {
        fotosParaBorrar[i].remove();
    }
}

function limpiarSeleccion() {
    let seleccion = document.querySelectorAll("#contenedor-fotos img");
    for (let i = seleccion.length - 1; i >= 0; i--) {
        seleccion[i].classList.remove("marcada-para-borrar");
    }
}