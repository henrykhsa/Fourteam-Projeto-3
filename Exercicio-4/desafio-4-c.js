// c) Crie uma verificação que diga se uma pessoa pode dirigir (precisa ser maior de idade E ter habilitação)

const idade = 21;
const temCnh = false;

if (idade < 18) {
  console.log("Você é menor de 18: Não pode dirigir!");
} else if (idade >= 18 && temCnh === false) {
  console.log("Você é maior de 18, mas não tem CNH: Não pode dirigir!");
} else {
  console.log("Parabéns, você cumpre todos os requisitos e está apto a dirigir!");
}
