const getUsuarioId = (id, callback) => {
    "use strict";

    const usuario = {
        nombre: 'Pintado',
        id
    };

    callback(null, usuario);
};


getUsuarioId(1, (error, user) => {
    "use strict";

    if (error) {
        return console.log(error);
    }

    console.log('Usuario de base de datos', user);
});