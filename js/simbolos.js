///son un dato tipo, diferente, nuevo

let primerNombre = Symbol('primer nombre');
let segundoNombre = Symbol('segundo nombre');

let persona = {
    [segundoNombre]: "Goicochea"
};

persona[primerNombre] = 'Pintado';

console.log(persona.primerNombre);
console.log(persona[primerNombre]);
console.log(persona[segundoNombre]);
console.log(segundoNombre);


let simbolo1 = Symbol('simbolo');
let simbolo2 = Symbol('simbolo');

console.log(simbolo1 == simbolo2);
console.log(simbolo1 === simbolo2);
console.log(simbolo1 === simbolo2);
console.log(typeof primerNombre);

//console.log("mi simbolo" + primerNombre);
//console.log(`mi simbolo + ${primerNombre}`);

console.log('primer nombre' in persona);
console.log(persona[primerNombre]);