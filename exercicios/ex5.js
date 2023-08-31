const numero = parseInt(prompt("Digite um número para ver a tabuada:"));

if (!isNaN(numero)) {
  console.log(`Tabuada de multiplicação do ${numero}:`);

  for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
  }
} else {
  console.log("Digite um número válido.");
}
