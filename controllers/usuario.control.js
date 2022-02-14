const { response, request } = require('express');

const usuarioGet = (req = request, res = response) => {
    const { p, correo, direccion } = req.query;
    res.json({
        name: 'Josue',
        apellido: 'Garcia',
        msg: 'get API desde el Controlador',
        p,
        correo,
        direccion
    });
}

const usuarioPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.status(201).json({
        name: 'Josue',
        apellido: 'Garcia',
        msg: 'post API-----desde el Controlador',
        nombre,
        edad
    });
}

const usuarioPut = (req, res = response) => {
    const { id } = req.params;
    res.status(500).json({
        name: 'Josue',
        apellido: 'Garcia',
        msg: 'put API----desde el Controlador',
        id
    });
}

const usuarioDelete = (req, res = response) => {
    res.json({
        name: 'Josue',
        apellido: 'Garcia',
        msg: 'delete API----desde el Controlador'
    });
}

const usuarioPutch = (req, res = response) => {
    res.json({
        name: 'Josue',
        apellido: 'Garcia',
        msg: 'patch API-------desde el Controlador'
    });
}




module.exports = {
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete,
    usuarioPutch
}