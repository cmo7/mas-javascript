let contenido1 = `esto es la primera pestaña`;
let contenido2 = `esto es la segunda pestaña`;
let contenido3 = `esto es la tercera pestaña`;

let contenedor = document.getElementById("contenedor");

function mostrarPestaña1() {
    contenedor.innerText = contenido1;
}

function mostrarPestaña2() {
    contenedor.innerText = contenido2;
}

function mostrarPestaña3() {
    contenedor.innerText = contenido3;
}

mostrarPestaña1();