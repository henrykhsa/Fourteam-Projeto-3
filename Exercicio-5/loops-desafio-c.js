// Exercícios com loops

// Criando um loop que identifica o menor número em um array
const numeros = [12, 10, 9, 28, 6];
// Exibindo o tamanho do array
console.log('Array de números:', numeros);
// Inicializando a variável para armazenar o menor número
console.log('Identificando o menor número:');
let menorNumero = numeros[0]; // Inicializa com o primeiro número do array
for (let i = 1; i < numeros.length; i++) {
    // Verifica se o número atual é menor que o menor encontrado até agora
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i]; // Atualiza o menor número
    }
    // Exibindo o número atual do array
    console.log(`Número encontrado: ${numeros[i]}`);
    console.log(`Menor número até agora: ${menorNumero}`);
}
// Exibindo o menor número encontrado
console.log(`O menor número é: ${menorNumero}`);