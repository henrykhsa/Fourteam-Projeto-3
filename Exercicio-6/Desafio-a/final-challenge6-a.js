// Desafio final - integrando todos os conceitos

// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

const mediastudants = students.forEach(studant => {
    const sum = studant.grades.reduce((notas, grade) => notas + grade, 0);
    const average = sum / studant.grades.length;
    studant.average = average;
});

console.log(" Médias dos alunos:");
students.forEach(student => {
    console.log(`${student.name}: Média = ${student.average.toFixed(2)}`);
});