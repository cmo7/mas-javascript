function mostrarConsola() {
    let entrada = document.getElementById("entrada");
    let valor = entrada.value;
    console.log(valor);
}

function mostrarValor() {
    let entrada = document.getElementById("rango");
    let valor = entrada.value;
    //console.log(valor);
    let indicador = document.getElementById("valor-rango");
    indicador.innerText = valor;
}

function actualizarPalabra() {
    let entrada = document.getElementById("palabra");
    let valor = entrada.value;
    let valorPalabra = document.getElementById("valor-palabra");
    valorPalabra.innerText = valor;
}

mostrarValor();

function tieneNumeros(password) {
    let numeros = "1234567890".split("");
    console.log(password)
    for (let i = 0; i < numeros.length; i++) {
        if (password.includes(numeros[i])) {
            return true;
        }
    }
    return false;
}


function validarPassword() {
    let password = document.getElementById("password").value;
    console.log(password)
    if (password.length < 8 || !tieneNumeros(password)) {
        document.getElementById("mensaje-password").innerText = "Password inseguro";
    } else {
        document.getElementById("mensaje-password").innerText = "Password seguro";
    }
}