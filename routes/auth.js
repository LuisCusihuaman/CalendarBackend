// Rutas de Usuarios /Auth
// host + /api/auh

const { Router } = require('express');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post('/new', crearUsuario);
router.post('/', loginUsuario);
router.get('/renew', revalidarToken);

module.exports = router;
