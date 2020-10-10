//Forma antigua
function crearPesona1(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

const persona1 = crearPesona1('Luis', 'Pintado');
console.log(persona1);



//Forma chida
function crearPesona2(nombre, apellido) {
    return {
        nombre,
        apellido
    }
}

const persona2 = crearPesona2('Alberto', 'Goicochea');
console.log(persona2);


//Forma con arrow function 
const crearPersona3 = (nombre, apellido) => ({ nombre, apellido });
const persona3 = crearPersona3('JOse ', 'Goicochea');
console.log(persona3);


////////////////////////////////////////////////////////////////////////////////////////////////// 
//Arguments
////////////////////////////////////////////////////////////////////////////////////////////////// 
//los paramtetros es dinamico
//solo funciona en funciones tradicionales
function imprimeArgumentos() {
    console.log(arguments);
}
imprimeArgumentos("Luis", true, 1, 2, 3, "caca");

//VS FLECHA
//solo con rest se puede hacer

////////////////////////////////////////////////////////////////////////////////////////////////// 
//Rest
////////////////////////////////////////////////////////////////////////////////////////////////// 
const imprimeArgumentos2 = (...args) => {
    console.log(args);
}

imprimeArgumentos2("Luis", true, 1, 2, 3, "caca");

//rest con otro parametro
//no se puede poner a la derecha(...args,NOpuedes)
const imprimeArgumtentos4 = (edad, ...args) => {
    console.log({ edad, args });
}

imprimeArgumtentos4(33, "Luis", true, 1, 2, 3, "caca");

//rest return arreglo
const imprimeArgumtentos5 = (edad, ...args) => {
    return args;
}

const [nombre, vivo, departamentoId, catalogoId, policiaId, alias] = imprimeArgumtentos5(33, "Luis", true, 1, 2, 3, "caca");
console.log({ nombre, vivo, departamentoId, catalogoId, policiaId, alias });


////////////////////////////////////////////////////////////////////////////////////////////////// 
//Alias Return Objeto
////////////////////////////////////////////////////////////////////////////////////////////////// 
//return objeto
const { apellido: lastName } = crearPesona1('Luis', 'Pintado');
console.log({ lastName });

////////////////////////////////////////////////////////////////////////////////////////////////// 
//Destructuracion de objetos
////////////////////////////////////////////////////////////////////////////////////////////////// 

const heroe = {
    nombre: 'Tonny  Stark',
    edad: 'Iron man',
    vivo: false,
    edad: 40,
    trajes: ['Mark1', 'Mark2', 'Mark3', 'hulkBuster'],
}

const imprimePropiedades = (personaje) => {
    console.log('nombre', personaje.nombre);
    console.log('edad', personaje.edad);
    console.log('vivo', personaje.vivo);
    console.log('trajes', personaje.trajes);
}

const imprimePropiedades2 = (personaje) => {
    console.log('nombre', personaje.nombre);
    console.log('edad', personaje.edad);
    console.log('vivo', personaje.vivo);
    console.log('trajes', personaje.trajes);
}

imprimePropiedades(heroe);
imprimePropiedades2(heroe);



const heroe2 = {
        nombre: 'Tonny  Stark',
        vivo: false,
        trajes: ['Mark1', 'Mark2', 'Mark3', 'hulkBuster'],
    }
    ////New forma alterna ///
    /// agrega parametros opcionales, cuando no encuentra nada 
const imprimePropiedades3 = ({ nombre, edad = 990, vivo, trajes }) => {
    //  edad = edad || 999; // vieja forma 
    console.log({ nombre });
    console.log({ edad });
    console.log({ vivo });
    console.log({ trajes });

}

imprimePropiedades3(heroe2);