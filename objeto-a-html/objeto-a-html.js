let persona1 = {
    nombre: "Alicia",
    apellido: "Pérez",
    direccion: "Calle Falsa, 124",
    edad: 32,
    vacunado: false,
};

let persona2 = {
    nombre: "Bernardo",
    apellido: "Carretero",
    direccion: "Calle Inventada, 423",
    edad: 52,
    vacunado: true,
};

function persona2html(persona) {
    return `
<div>
    <h2>${persona.nombre} ${persona.apellido}</h2>
    <div><span>Dirección: </span> ${persona.direccion}</div>
    <div><span>Edad: </span> ${persona.edad}</div>
    <div>${persona.vacunado ? "Está vacunado" : "No está vacunado"}</div>
</div>`
}

let miDiv = persona2html(persona1);

console.log(persona1);
console.log(miDiv);

document.getElementById("contenedor").innerHTML = miDiv;