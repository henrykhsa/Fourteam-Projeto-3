//b) Verifique se o nome completo contém a letra 'a'

const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
// Verificando se o nome completo contém a letra "a"
if (fullName.includes("a")) {
  console.log('O nome completo possui a letra "a"', fullName.split("a").length - 1, "vezes");
} else {
  console.log('O nome completo não possui a letra "a"');
}
