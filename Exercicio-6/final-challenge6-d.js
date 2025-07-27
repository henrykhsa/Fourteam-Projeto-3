const students = [
    { name: "João", age: 20, grades: [85, 90, 78] },
    { name: "Maria", age: 19, grades: [92, 95, 89] },
    { name: "Pedro", age: 21, grades: [70, 65, 80] },
    { name: "Ana", age: 18, grades: [60, 75, 68] },
    { name: "Carlos", age: 22, grades: [90, 88, 92] }
];


students.forEach(student => {
    const sum = student.grades.reduce((notas, grade) => notas+ grade, 0);
    student.average = sum / student.grades.length;
});


const topStudent = students.reduce((aluno, student) => {
    return (student.average > aluno.average) ? student : aluno;
}, students[0]);

console.log(`Aluno com a maior média: ${topStudent.name} (${topStudent.average.toFixed(2)})`);
