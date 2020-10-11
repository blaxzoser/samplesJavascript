const regresaTrue = () => {
    return true;
}


console.warn('Asignaciones');
const soyUndefined = undefined;
const soynull = null;
const soyFalso = false;


const a1 = true && 'Hola mundo' && 150;
console.log({ a1, });

const a2 = false && 'Hola mundo' && 150;
console.log({ a2, });

const a3 = 'hola' && 'Mundo' && soyFalso;
console.log({ a3, });

const a5 = false && 'Mundo' && 150;
const a4 = 'hola' && 'Mundo';

console.log({ a5, a4 });

const b1 = false && 'Hola mundo' && 150;
const b2 = 'Hola' && 'Mundo' && soyFalso && true;
const b3 = soyFalso || 'ta no osy falto';

console.log({ b1, b2, b3 });


const b4 = soyFalso || soyUndefined || soynull || 'Ya no soy falso ' || true;
const b5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso ' || true;


console.log({ b1, b2, b3, b4, b5 });