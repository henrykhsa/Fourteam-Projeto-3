const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

// Calculando a média de cada aluno
students.forEach(student => {
  const sum = student.grades.reduce((notas, grades) => notas + grades, 0);
  student.average = sum / student.grades.length;
});
// Determinando o status de cada aluno
students.forEach(student => {
  student.status = student.average >= 70 ? "Aprovado" : "Reprovado";
});
// Contando o número de alunos aprovados e reprovados
let studantsAprovados = 0;
let studantsReprovados = 0;
// Contando o número de alunos aprovados e reprovados
students.forEach(student => {
  if (student.status === "Aprovado") studantsAprovados++;
  else studantsReprovados++;
});
// Exibindo o número de alunos aprovados e reprovados
console.log(` Alunos: Aprovados: ${studantsAprovados}, Alunos: Reprovados : ${studantsReprovados}`);
