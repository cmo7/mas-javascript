function esDivisible(numero, divisor) {
    return numero % divisor === 0;
}

let lista = document.getElementById("resultado-foobar");

for (let i = 1; i <= 100; i++) {
    if (esDivisible(i, 3) && esDivisible(i, 5)) {
        lista.innerHTML += `<li> FooBar </li>`;
    }
    else if (esDivisible(i, 3)) {
        lista.innerHTML += `<li> Foo </li>`;
    }
    else if (esDivisible(i, 5)) {
        lista.innerHTML += `<li> Bar </li>`;
    }
    else {
        lista.innerHTML += `<li> ${i} </li>`;
    }
}