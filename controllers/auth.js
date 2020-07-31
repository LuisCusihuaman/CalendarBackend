const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const crearUsuario = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        let usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(400).json({ ok: false, msg: 'Un usuario existe con ese correo' });
        }
        usuario = new Usuario(req.body);
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);
        await usuario.save();
        res.status(201).json({
            ok: true,
            uid: usuario.id,
            name: usuario.name,
        });
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Porfavor hable con el admin' });
        throw error;
    }
};

const loginUsuario = async (req, res = response) => {
    const { email, password } = req.body;
    let usuario;
    try {
        usuario = await Usuario.findOne({ email });
        if (!usuario) {
            return res.status(400).json({ ok: false, msg: 'Un usuario no existe con ese email' });
        }
        const validPassword = bcrypt.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({ ok: false, msg: 'Password incorrecto' });
        }
    } catch (error) {
        res.status(500).json({ ok: false, msg: 'Porfavor hable con el admin' });
        throw error;
    }
    res.status(201).json({
        ok: true,
        uid: usuario.id,
        name: usuario.name,
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
