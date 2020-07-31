const { response } = require('express');
const Usuario = require('../models/Usuario');
const crearUsuario = async (req, res = response) => {
    // const { name, email, password } = req.body;
    //manejo de errores
    try {
        const usuario = new Usuario(req.body);
        await usuario.save();
        res.status(201).json({
            ok: true,
            msg: 'registro',
        });
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Porfavor hable con el admin' });
        throw error;
    }
};

const loginUsuario = (req, res = response) => {
    //manejo de errores

    const { name, email, password } = req.body;
    res.json({
        ok: true,
        msg: 'login',
        email,
        password,
    });
};
const revalidarToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew',
    });
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
};
