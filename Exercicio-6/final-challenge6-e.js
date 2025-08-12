// Calcular a média geral da Turma e exibir o resultado

// Dados de alunos
const students = [
    { name: "João", age: 20, grades: [85, 90, 78] }, // média 84.33
    { name: "Maria", age: 19, grades: [92, 95, 89] }, // média 92.00
    { name: "Pedro", age: 21, grades: [70, 65, 80] }, // média 71.67
    { name: "Ana", age: 18, grades: [60, 75, 68] }, // média 67.67
    { name: "Carlos", age: 22, grades: [90, 88, 92] } // média 90.00
];
// Calcular a soma das médias de cada aluno
const soma = students.reduce((total, student) => {
// Calcular a média individual do aluno
    const somaNotas = student.grades.reduce((notas, grade) => notas + grade, 0);
    const mediaAluno = somaNotas / student.grades.length;

    // Adicionar a média do aluno ao total
    return total + mediaAluno;
}, 0);
// Calcular a média geral da turma
const mediaGeral = soma / students.length;
// Exibir a média geral da turma
console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`); // Resultado esperado: Média geral da turma: 81,134