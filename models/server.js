const express = require('express');
const cors = require('cors');

class Server {
    //*Declaramos las propiedades dentro el constructor
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuarioRouterPath = '/api/usuarios';
        //*Meddlewares
        this.meddleware();

        //* Mando a llamar mis rutas de mi aplicación
        this.routes();

    }

    //*Directorios publicos
    meddleware() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'));
    }


    //*rutas de mi aplicacción
    routes() {

        this.app.use(this.usuarioRouterPath, require('../routers/usuarios'))


    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
    }

}


module.exports = Server;