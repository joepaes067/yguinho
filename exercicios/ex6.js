let soma = 0;

for (let i = 1; i <= 10; i++) {
  const numero = parseFloat(prompt(`Digite o número ${i}:`));
  if (!isNaN(numero)) {
    soma += numero;
  } else {
    console.log(`Valor inválido para o número ${i}.`);
    i--; // Decrementa o contador para repetir a leitura deste número.
  }
}

const media = soma / 10;
console.log(`A média dos valores é: ${media}`);
