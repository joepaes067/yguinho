const numero = prompt("Digite um número:"); 

let soma = 0;

for (let i = 0; i < numero.length; i++) {
    const digito = parseInt(numero[i]);
    soma += digito;
}

console.log(`A soma dos dígitos de ${numero} é: ${soma}`);
