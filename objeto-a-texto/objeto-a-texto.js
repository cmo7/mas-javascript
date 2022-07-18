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



function persona2texto(persona) {
    //return "Alicia Pérez vive en Calle Falsa, 124, tiene 32 años y no tiene vacuna"
    return persona.nombre + " "
        + persona.apellido
        + " vive en "
        + persona.direccion
        + ", tiene "
        + persona.edad
        + " años y "
        + (persona.vacunado ? "tiene vacuna" : "no tiene vacuna");
}

function persona2textoB(persona) {
    return `${persona.nombre} ${persona.apellido} vive en ${persona.direccion}, 
    tiene ${persona.edad} años y ${persona.vacunado ? "tiene vacuna" : "no tiene vacuna"}`
}

//console.log(persona2texto(persona1));
//console.log(persona2texto(persona2));

console.log(persona1);
console.log(persona2textoB(persona1));
console.log(persona2);
console.log(persona2textoB(persona2));