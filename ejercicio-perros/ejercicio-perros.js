let datos = [
    {
        "nombre": "Remington",
        "color": "Orange",
        "tamaño": "muy grande",
        "vacunado": false
    },
    { "nombre": "Gertrudis", "color": "Red", "tamaño": "pequeño", "vacunado": false },
    { "nombre": "Dominique", "color": "Khaki", "tamaño": "muy grande", "vacunado": true },
    { "nombre": "Cchaddie", "color": "Mauv", "tamaño": "pequeño", "vacunado": false },
    { "nombre": "Christine", "color": "Purple", "tamaño": "grande", "vacunado": true },
    { "nombre": "Conny", "color": "Indigo", "tamaño": "pequeño", "vacunado": false },
    { "nombre": "Hedwig", "color": "Yellow", "tamaño": "muy grande", "vacunado": true },
    { "nombre": "Rozella", "color": "Orange", "tamaño": "pequeño", "vacunado": false },
    { "nombre": "Benyamin", "color": "Khaki", "tamaño": "grande", "vacunado": false },
    { "nombre": "Abey", "color": "Blue", "tamaño": "pequeño", "vacunado": true },
    { "nombre": "Nesta", "color": "Teal", "tamaño": "pequeño", "vacunado": true },
    { "nombre": "Jaymee", "color": "Aquamarine", "tamaño": "grande", "vacunado": true },
    { "nombre": "Lorena", "color": "Green", "tamaño": "grande", "vacunado": true },
    { "nombre": "Giorgio", "color": "Purple", "tamaño": "muy grande", "vacunado": true },
    { "nombre": "Bamby", "color": "Orange", "tamaño": "mediano", "vacunado": true },
    { "nombre": "Cash", "color": "Pink", "tamaño": "muy grande", "vacunado": false },
    { "nombre": "Riccardo", "color": "Red", "tamaño": "grande", "vacunado": true },
    { "nombre": "Bernete", "color": "Teal", "tamaño": "grande", "vacunado": true },
    { "nombre": "Ravid", "color": "Aquamarine", "tamaño": "pequeño", "vacunado": true },
    { "nombre": "Alaric", "color": "Crimson", "tamaño": "muy grande", "vacunado": true }
]

function perroObjeto2string(perro) {
    return `
    <div class="ficha-perro">
        <h2>${perro.nombre}</h2>
        <ul>
            <li><span>Color: </span>${perro.color}</li>
            <li><span>Tamaño: </span>${perro.tamaño}</li>
            <li><span>Vacunado: </span>${perro.vacunado ? "si" : "no"}</li>
        </ul>
    </div>`
}

let codigo = "";

for (let i = 0; i < datos.length; i++) {
    codigo += perroObjeto2string(datos[i])
}

console.log(codigo)

document.getElementById("contenedor").innerHTML = codigo;