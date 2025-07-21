// a) Crie um sistema de classificação de notas:
//    - 0-59: F
//    - 60-69: D
//    - 70-79: C
//    - 80-89: B
//    - 90-100: A

let nota = 88; 

if (nota >= 90) {
    console.log("Nota: A");
}
else if (nota >= 80) { 
    console.log("Nota: B");
}
else if (nota >= 70) {
    console.log("Nota: C");
}
else if (nota >= 60) {
    console.log("Nota: D");
}
else {
    console.log("Nota: F");
}

