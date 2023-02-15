"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const usuarios_1 = require("../controllers/usuarios");
const validation_error_1 = require("../middlewares/validation-error");
exports.router = (0, express_1.Router)();
exports.router.get('/', (0, validation_error_1.validarBuscarUsuarios)(), usuarios_1.usuariosGet);
exports.router.get('/:id', (0, validation_error_1.validarBuscarUsuario)(), usuarios_1.usuarioGet);
exports.router.post('/', (0, validation_error_1.validarCrearUsuario)(), usuarios_1.usuariosPost);
exports.router.put('/:id', (0, validation_error_1.validarActualizarUsuario)(), usuarios_1.usuariosPut);
exports.router.delete('/:id', (0, validation_error_1.validarEliminarUsuario)(), usuarios_1.usuariosDelete);
//# sourceMappingURL=usuarios.js.map