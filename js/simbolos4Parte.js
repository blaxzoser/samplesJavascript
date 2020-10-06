let id = Symbol.for("id");
let activo = Symbol.for("activo");

let persona = {
    [id]: 12,
    [activo]: true,
    ["codigo"]: "12312",
    nombre: "Luis",
    apellido: "Pintado",
    edad: 33
}

for (key in persona) {
    console.log(key, persona[key]);
}

let simbolos = Object.getOwnPropertySymbols(persona);
console.log(simbolos);


for (i in simbolos) {
    console.log(simbolos[i], Symbol.keyFor(simbolos[i]));
}