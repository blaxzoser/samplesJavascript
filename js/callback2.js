const empleados = [{
        id: 1,
        nombre: 'Luis'
    },

    {
        id: 2,
        nombre: 'Juan'
    }
];

const salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 3400
    },
];

const getEmpleado = (id, callback) => {
    "use strict";

    const empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe empleado con el id ${id}`);
    } else {
        callback(null, empleadoDB);
    }
};

const getSalario = (empleado, callback) => {
    "use strict";

    const salariosDb = salarios.find(salario => salario.id === empleado.id);


    if (!salariosDb) {
        callback(`No se encontro un salario para el ${empleado.nombre}`);
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salariosDb.salario,
            id: empleado.id
        });
    }
}


getEmpleado(3, (err, empleado) => {
    "use stric";

    if (err) { return console.log(err); }

    getSalario(empleado, (error, resp) => {

        if (err) { return console.log(err); }

        console.log(`El salario de ${resp.nombre}  es de ${resp.salario}`);
    });

});