const numero = parseInt(prompt("Digite um número:"));

if (numero >= 0) {
  console.log("Números pares de 0 até", numero, ":");

  for (let i = 0; i <= numero; i += 2) {
    console.log(i);
  }
} else {
  console.log("Por favor, digite um número inteiro positivo.");
}
