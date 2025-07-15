// Exercícios com loops

// criando um array de números e calculando a soma deles
const numeros = [1, 4, 23, 10, 14];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    // exibindo cada número do array
    console.log(`Número: ${numeros[i]}`);
    // acumulando a soma dos números
    soma += numeros[i];
    console.log(`A soma dos números é: ${soma}`);
}
// exibindo a soma total
console.log(`O total é: ${soma}`);