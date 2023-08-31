const quantidadeNum = 10;
let maiorValor = Number.MIN_SAFE_INTEGER;
let menorValor = Number.MAX_SAFE_INTEGER;

for (let i = 1; i <= quantiNumeros; i++) {
    const num = parseFloat(prompt(`Digite o número ${i}:`));

    if (numero > maiorValor) {
        maiorValor = num;
    }

    if (numero < menorValor) {
        menorValor = num;
    }
}

console.log(`Maior valor: ${maiorValor}`);
console.log(`Menor valor: ${menorValor}`);
