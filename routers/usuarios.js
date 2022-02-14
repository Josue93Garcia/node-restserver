const { Router } = require('express');
//*Importamos las funciones
const { usuarioGet, usuarioPut, usuarioPost, usuarioDelete, usuarioPutch } = require('../controllers/usuario.control');

//*Llamamos la función router
const router = Router();
//*Mandamos la referencia de las funciones
router.get('/', usuarioGet);

router.post('/', usuarioPost);

router.put('/:id', usuarioPut);

router.delete('/', usuarioDelete);

router.patch('/', usuarioPutch);

//*Exportamos por defecto el router
module.exports = router;