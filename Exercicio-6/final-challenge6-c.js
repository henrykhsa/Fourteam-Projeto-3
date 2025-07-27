const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];


students.forEach(student => {
  const sum = student.grades.reduce((notas, grades) => notas + grades, 0);
  student.average = sum / student.grades.length;
});

students.forEach(student => {
  student.status = student.average >= 70 ? "Aprovado" : "Reprovado";
});

let studantsAprovados = 0;
let studantsReprovados = 0;

students.forEach(student => {
  if (student.status === "Aprovado") studantsAprovados++;
  else studantsReprovados++;
});

console.log(` Alundos: Aprovados: ${studantsAprovados}, Alundos:Reprovados : ${studantsReprovados}`);
