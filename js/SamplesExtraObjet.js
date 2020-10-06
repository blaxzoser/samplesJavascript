//**************************Contruccion de objetos

function createPersona(name, lastname, age) {
    return { name: name, lastname: lastname, age: age }
}

function createPersona2(name, lastname, age) {
    return { name, lastname, age }
}

var persona = createPersona("luis", "Pintado", 33);
var persona2 = createPersona2("luisa", "Pintado", 33);

console.log(persona);
console.log(persona2);



//**************************Metodos concisos

//Olddie
var personaBuena = {
    nombre: "Chono",
    getNombre: function getNombre() {
        console.log(this.nombre);
    }
}
personaBuena.getNombre();

//ESMC6
var personaChingona = {
    nombre: "Chuppis",
    getNombre() {
        console.log(this.nombre);
    }
}
personaChingona.getNombre();


//**************************Nombre de propiedades computadas
////Olddie
var personaX = {};
var apellidoX = "apellidoX";

personaX["primer nombre"] = "Goigochea"
personaX[apellidoX] = "Pintor"
console.log(personaX["primer nombre"]);
console.log(personaX[apellidoX]);


///Ecmas6
var apellidoY = "primer apellido";
var personaPerris = {
    "primer nombre": "Cosita",
    [apellidoY]: "Wiki"
};
console.log(personaPerris["primer nombre"]);
console.log(personaPerris[apellidoY]);

//Otra forma
var sufijo = "Force";
var personaW = {
    ["Primer" + sufijo]: "Soltero",
    ["Segun" + sufijo]: "MOlinar"
};

console.log(personaW["Primer" + sufijo]);
console.log(personaW["Segun" + sufijo]);

///************************************Nuevo metodo de comparacion = == ===  Object.is

console.log(+0 == -0);
console.log(+0 === -0);
console.log(Object.is(+0, -0));

console.log("==========");

console.log(NaN == NaN);
console.log(NaN === NaN);
console.log(Object.is(NaN, NaN));

console.log("==========");

console.log(5 == 5);
console.log(5 == "5");

console.log(5 === 5);
console.log(5 === "5");

console.log(Object.is(5, 5));
console.log(Object.is(5, "5"));

//**************************Objeto assign
function mezclar(objReceptor, objDonador) {
    Object.keys(objDonador).forEach(function(key) {
        objReceptor[key] = objDonador[key];
    });
    return objReceptor;
}

var objReceptor = {};
var objDonador = {
    //nombre:"mi.js",
    get nombre() {
        return "miarchivo.js"
    }
}

console.log(mezclar(objReceptor, objDonador));
console.log(Object.assign(objReceptor, objDonador)); //ECS6