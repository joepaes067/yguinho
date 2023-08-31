function Primo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

console.log("Números primos entre 1 e 100:");

for (let numero = 2; numero <= 100; numero++) {
    if (Primo(numero)) {
        console.log(numero);
    }
}
