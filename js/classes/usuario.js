"use strict";
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El email es obligatorio'],
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
    rol: {
        type: String,
        required: [true, 'El rol es obligatorio']
    },
    status: {
        type: Boolean,
        default: true
    }
});
module.exports = (0, mongoose_1.model)('Usuarios', usuarioSchema);
//# sourceMappingURL=usuario.js.map