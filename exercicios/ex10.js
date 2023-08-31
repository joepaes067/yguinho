let soma = 0;
let quantidadePares = 0;

for (let numero = 1; numero <= 100; numero++) {
    if (numero % 2 === 0) {
        soma += numero;
        quantidadePares++;
    }
}

if (quantidadePares > 0) {
    const media = soma / quantidadePares;
    console.log(`A média dos números pares de 1 a 100 é: ${media}`);
} else {
    console.log("Não há números pares entre 1 e 100.");
}
