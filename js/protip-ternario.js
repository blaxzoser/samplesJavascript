const elmMayor1 = (a, b) => {
    return (a > b) ? a : b;
}
console.log(elmMayor1(50, 80));

const elMayor2 = (a, b) => (a > b) ? a : b;
console.log(elMayor2(20, 15));


const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';
console.log(tieneMembresia(false));


const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr.strange',
    amigo ? 'Thor' : 'Loki',
    (() => 'Capitan AMerica')(),
    elMayor2(1, 2)
];

console.log(amigosArr);


const nota = 65;
const grado = nota >= 95 ? 'A+' :
    nota >= 90 ? 'A+' :
    nota >= 85 ? 'A' :
    nota >= 80 ? 'B+' :
    nota >= 75 ? 'B+' :
    nota >= 70 ? 'C' : 'F';
console.log({ nota, grado });