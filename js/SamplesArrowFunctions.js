let funcion1 = function(value) {
    return value;
}

let funcion2 = value => value;

let saludarPersona1 = function(nombre) {
    let salida = "Mi nombre es " + nombre;
    return salida;
}

let saludarPersona2 = nombre => {
    let salida = `Mi Nombre es ${nombre}`;
    return salida;
};

var obtenerLibro = function(id) {
    return {
        id: id,
        nombre: "Luis Potter"
    }
}

let obtenerLibro2 = id => ({ id: id, nombre: "luis Potter" });

var saludo1 = function(name) {
    return "Hello" + name;
}("Beto");

var saludo2 = (nombre => `Hola ${nombre}`)("Juanito");

console.log(saludo1);
console.log(saludo2);

console.log(funcion1("libro"));
console.log(funcion2("libro"));

console.log(saludarPersona1("Luis"));
console.log(saludarPersona2("Luisa"));

console.log(obtenerLibro(1));
console.log(obtenerLibro2(2));