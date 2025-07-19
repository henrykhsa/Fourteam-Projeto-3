const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];

students.forEach(studant => {
    const sum = studant.grades.reduce((notas, grade) => notas + grade, 0);
    studant.average = sum / studant.grades.length;
});
students.forEach(studant => {
    studant.status = studant.average >= 70 ? "Aprovado" : "Reprovado";
});

students.forEach(studant => {
    console.log(`${studant.name}: Média = ${studant.average.toFixed(2)} - ${studant.status}`);
});
