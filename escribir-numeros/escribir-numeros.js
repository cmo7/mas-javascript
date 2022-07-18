console.log(document.getElementById("numeros").innerHTML)

document.getElementById("numeros").innerHTML += " " + 99;

for (let i = 1; i <= 100; i++) {
    document.getElementById("lista-numeros").innerHTML += "<li>" + i + "</li>"
}