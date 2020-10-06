let gato = {
    sonido() {
        console.log("Miau");
    },
    rugido() {
        console.log("MIAU");
    }
}

let perro = {
    sonido() {
        console.log("Guaf");
    }
};
//////////////////Olddi
let cosa = Object.create(gato);
console.log(Object.getPrototypeOf(cosa) === gato);

cosa.sonido();
cosa.rugido();
////////////////////////////////////////////
///////////////////////////////////////////// EMCAS6
Object.setPrototypeOf(cosa, perro);
console.log(Object.getPrototypeOf(cosa) === gato);
cosa.sonido();
//cosa.rugido();


/////////////////////////////////////************************************************************************************ */
////////////////////Referencia con super en EMACS6
let persona = {
    saludar() {
        return "hola";
    }
}
let amigo = {
    saludar() {
        // return Object.getPrototypeOf(this).saludar.call(this) + ".Saludar";//olddi
        //        return super.saludar() + ", Saludos!!!"; //ECAMS6
    }

};
Object.setPrototypeOf(amigo, persona);
console.log(amigo.saludar());

/////////////////////////////////////************************************************************************************ */
////////////////////Desctructuracion de objetos
let ajustes = {
    nombre: "luis pintado",
    email: "lpintado@tiem.com",
    facebook: "facebook",
    premiun: true
}

/*
let nombre = ajustes.nombre,
    email = ajustes.email,
    facebook = ajustes.facebook;
*/

let { nombre, email, facebook, premiun: dePago, twitter = "blaxzoser", xvideos: xxx = "betoxx" } = ajustes;
console.log(nombre, email, facebook, dePago, twitter, xxx);

/////////////////////////////////////************************************************************************************ */
////////////////////Desctructuracion de objetos Anidados


let autoGuardado = {
    archivo: "app.js",
    cursor: {
        linea: 7,
        columna: 16
    },
    ultimoArchivo: {
        archivo: "index.html",
        cursor: {
            linea: 8,
            columna: 20
        }
    },
    otroNodo: {
        subNodo: {
            cursor: {
                linea: 11,
                columna: 20
            }
        }
    }
}

let { cursor: cursonNivel1 } = autoGuardado;
console.log(cursonNivel1);

let { ultimoArchivo: { cursor: ultimoHtml } } = autoGuardado;
console.log(ultimoHtml);

let otroSuperNodo = autoGuardado.otroNodo.subNodo.cursor;
console.log(otroSuperNodo);

/////////////////////////////////////************************************************************************************ */
////////////////////Desctructuracion de arreglos