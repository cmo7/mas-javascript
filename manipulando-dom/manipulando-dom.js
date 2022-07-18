let elemento1 = document.getElementById("elemento-1");
let elemento2 = document.getElementById("elemento-2");
let elemento3 = document.getElementById("elemento-3");
let elemento4 = document.getElementById("elemento-4");

elemento1.innerText = "1";
elemento2.innerText = "2";
elemento3.innerText = "3";
elemento4.innerText = "4";

let listaMagica = document.getElementById("lista-magica");

listaMagica.innerHTML = `<li> lorem </li> 
<li> hola </li>
<li> adios </li>`;

listaMagica.innerHTML += `<li> Otro ${i}</li>`;
