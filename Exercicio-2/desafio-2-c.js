//c) Substitua "Silva" por outro sobrenome usando replace

const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;

const newLastName = lastName.replace("Silva", "Rocha")

console.log("Meu nome é", firstName, "e meu novo sobrenome é", newLastName);
