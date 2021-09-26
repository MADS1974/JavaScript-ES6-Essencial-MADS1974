const students = [
    {
        name: 'Márcio',
        grade: 7
    },
    {
        name: 'Adriano',
        grade: 4
    },
    {
        name: 'Anna Luiza',
        grade: 10
    }
];

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7);
}

console.log('Alunos aprovados:');
console.log(getApprovedStudents(students));

console.log('\nLista de alunos:');
console.log(students);