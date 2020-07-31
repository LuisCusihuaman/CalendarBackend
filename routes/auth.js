// Rutas de Usuarios /Auth
// host + /api/auh

const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.json({
    ok: true,
  });
});

module.exports = router;
