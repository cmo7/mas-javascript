let tareaMala = {
    nombre: "Fregar los platos",
    descripcion: "Usar el estropajo",
    completada: false,
};

let listaTareas = [
    {
        nombre: "Sacar al gato a pasear",
        descripcion: "",
        completada: true,
    },
    {
        nombre: "Tender la ropa",
        descripcion: "",
        completada: false,
    },
    {
        nombre: "Fregar el suelo",
        descripcion: "",
        completada: true,
    },
    {
        nombre: "Limpiar el baño",
        descripcion: "",
        completada: false,
    },
];

function tareaAtexto(tarea) {
    return `[${tarea.completada ? "x" : " "}] ${tarea.nombre} (${tarea.descripcion})`;
}

function mostrarLista(lista) {
    for (let i = 0; i < lista.length; i++) {
        console.log(tareaAtexto(lista[i]))
    }
}

function añadirTarea(lista, tarea) {
    if(tarea.nombre !== undefined && tarea.descripcion !== undefined && tarea.completada !== undefined) { 
        lista.push(tarea);
    }
    else {
        console.log("ERROR: La tarea no tiene las propiedades correctas")
    }
};

let tarea2 = {
    nombre: "hacer la compra",
    descripcion: "hace falta pimiento",
    completada: true,
};

añadirTarea(listaTareas, tareaMala);

añadirTarea(listaTareas, tarea2);

añadirTarea(listaTareas, {
    nombre: "Esta es la tarea que hice sin variable",
    descripcion: "funciona igual que las demás",
    completada: false,
});

function completar(lista, nombreTarea) {
    for( let i = 0; i < lista.length; i++) {
        if (lista[i].nombre === nombreTarea) {
            lista[i].completada = true;
        }
    }
}
console.log("<-- antes de completar -->")
mostrarLista(listaTareas);

completar(listaTareas, "Tender la ropa");

console.log("<-- despues de completar -->")
mostrarLista(listaTareas);