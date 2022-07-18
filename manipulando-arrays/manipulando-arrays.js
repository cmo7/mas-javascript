/* let ejemplo = ["a", "b", "c", "d", "e"];

console.log(ejemplo.join("\n")); */

//console.log(ejemplo.reverse().join("\n"));

/* console.log(ejemplo.indexOf("aguacate"));


let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sábado", "domingo"];

console.log(dias.indexOf("sábado"));
console.log(dias[3]);

console.log(dias) */
//dias.splice(2, 0, "aguacate", "platano");

/* console.log(dias.slice(3, 5));

let x = [1,2,3,4,5];
let y = [6,7,8,9,10]; */

//z = [ 1,2,3,4,5 ,6,7,8,9,10]

//let z = [...x, ...y];
//let Z = [x,y];

//let copia = [...x]

//console.log(z);
//console.log(Z);

//console.log([...dias.slice(0,2), "hola", "adios", ...dias.slice(4,6)])
//console.log(dias)

/* let textoDias = "lunes martes miercoles jueves viernes sabado domingo";

let dias = textoDias.split(" ");

console.log(dias); */


//reverse()
//split()
//join()

/* let fraseInvertida = "javascript el mucho gusta Me";


let frase = "Me gusta mucho el javascript";
console.log(frase);
console.log(frase.split(""));
console.log(frase.split("").reverse());
console.log(frase.split("").reverse().join(""));

let frase2 = frase.split(" ").reverse().join(" ");

console.log(frase); */

/* let a = "Hola";

console.log(a.repeat(5));

let x = "  hola    aguacate ";
let y = "hola";
let z = "  hola"
console.log(x.split(" ")); */

let frase = "HolA quE tal, buenos DíaS";

function mayusculasDeTitulo(frase) {
    let fraseEnMinusculas = frase.toLowerCase();
    let listaPalabras = fraseEnMinusculas.split(" ");
    let listaProcesadas = [];
    for (let i = 0; i < listaPalabras.length; i++) {
        let palabra = listaPalabras[i];
        let primeraLetra = palabra[0].toUpperCase();
        let resto = palabra.substring(1);
        let palabraProcesada = primeraLetra + resto;
        listaProcesadas.push(palabraProcesada);
    }
    return listaProcesadas.join(" ")
};

console.log(mayusculasDeTitulo(frase));