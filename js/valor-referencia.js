let a = 10;
let b = a;

console.log({ a, b });

let c = 10;
let d = c;
c = 30;

console.log({ c, d });

///Problema con referencia
let juan = { nombre: 'juan' };
let ana = juan;
ana.nombre = 'Ana';
console.log({ juan, ana });


///Solucion
let luis = { nombre: 'luis' };
let martin = {...luis };
martin.nombre = 'martin';
console.log({ luis, martin });


///Problema con referencia
const cambiaNombre = (persona) => {
    persona.nombre = 'Krilin';
    return persona;
}
const Goku = { nombre: 'Goku' };
const Krilin = cambiaNombre(Goku);
console.log({ Goku, Krilin });

///Solucion
const cambiaNombre2 = ({...persona }) => {
    persona.nombre = 'Pika';
    return persona;
}

const puchamon = { nombre: 'puchamon' };
const pika = cambiaNombre2(puchamon);
console.log({ puchamon, pika });


////////////////////////////////
/// Con arreglos problemas
////////////////////////////////
const frutas = ['manzana', 'pera', 'pina'];
const otrasFrutas = frutas;
otrasFrutas.push('Mango');
console.log({ frutas, otrasFrutas });


////////////////////////////////
/// solucion A sprend
////////////////////////////////
const frutas2 = ['manzana', 'pera', 'pina'];

console.time('sprend');
const otrasFrutas2 = [...frutas2];
console.timeEnd('sprend');

otrasFrutas2.push('Mango');
console.log({ frutas2, otrasFrutas2 });



////////////////////////////////
/// solucion B slice
////////////////////////////////
const frutas3 = ['manzana', 'pera', 'pina'];

console.time('slice');
const otrasFrutas3 = frutas3.slice();
console.timeEnd('slice');

otrasFrutas3.push('Mango');
console.log({ frutas3, otrasFrutas3 });