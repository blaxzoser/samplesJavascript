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
    }
];


const getEmpleado = (id) => {
    "use strict";

    return new Promise((resolve, reject) => {
        const empleadoDB = empleados.find(empleado => empleado.id === id);
        if (!empleadoDB) {
            reject(`No existe empleado con el id ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};


const getSalario = (empleado) => {
    "use strict";

    return new Promise((resolve, reject) => {

        const salariosDb = salarios.find(salario => salario.id === empleado.id);

        if (!salariosDb) {
            reject(`No se encontro un salario para el ${empleado.nombre}`);
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salariosDb.salario,
                id: empleado.id
            });
        }
    });

};


getEmpleado(5).then((empleado) => {
        "use strict";
        getSalario(empleado).then(resp => {
            console.log(resp);
        });
    })
    .catch((err) => {
        console.log(err);
    });