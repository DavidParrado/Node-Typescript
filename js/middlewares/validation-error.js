"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autenticacion = exports.validarEliminarUsuario = exports.validarBuscarUsuario = exports.validarBuscarUsuarios = exports.validarActualizarUsuario = exports.validarCrearUsuario = exports.validarErrores = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../helpers/index");
const validaciones_1 = require("./validaciones");
const validarjwt_1 = require("./validarjwt");
const rol_admin_maestro_1 = require("./rol-admin-maestro");
const rol_admin_1 = require("./rol-admin");
const validar_id_1 = require("./validar-id");
const validarErrores = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.json(errors);
    }
    next();
});
exports.validarErrores = validarErrores;
const validarCrearUsuario = () => {
    return [
        (0, express_validator_1.body)('nombre').notEmpty().withMessage('El campo nombre es obligatorio').isString().withMessage('Este campo solo recibe texto'),
        (0, express_validator_1.body)('email').notEmpty().withMessage('El campo email es obligatorio').isEmail().withMessage('No es un email valido').custom(validaciones_1.validarEmail),
        (0, express_validator_1.body)('rol').notEmpty().withMessage('El campo rol es obligatorio').isIn(['ADMIN', 'MAESTROPOKEMON']).withMessage('No es un rol válido'),
        (0, express_validator_1.body)('password').notEmpty().withMessage('El campo password es obligatorio').isLength({ min: 8 }).withMessage('La contraseña debe ser mayor a 8 caracteres'),
        exports.validarErrores
    ];
};
exports.validarCrearUsuario = validarCrearUsuario;
const validarActualizarUsuario = () => {
    return [
        validar_id_1.validarId,
        (0, express_validator_1.check)('id', 'No es un id de mongo válido').isMongoId(),
        (0, express_validator_1.check)('id').custom(validaciones_1.existeId),
        validarjwt_1.validarJwt,
        rol_admin_maestro_1.validarRoles,
        index_1.validarNombre,
        index_1.verificarEmail,
        index_1.verificarRol,
        index_1.validarPassword,
    ];
};
exports.validarActualizarUsuario = validarActualizarUsuario;
const validarBuscarUsuarios = () => {
    return [
        validarjwt_1.validarJwt,
        rol_admin_1.esAdmin,
        exports.validarErrores
    ];
};
exports.validarBuscarUsuarios = validarBuscarUsuarios;
const validarBuscarUsuario = () => {
    return [
        validar_id_1.validarId,
        (0, express_validator_1.check)('id', 'No es un id de mongo válido').isMongoId(),
        (0, express_validator_1.check)('id').custom(validaciones_1.existeId),
        validarjwt_1.validarJwt,
        rol_admin_maestro_1.validarRoles,
        exports.validarErrores
    ];
};
exports.validarBuscarUsuario = validarBuscarUsuario;
const validarEliminarUsuario = () => {
    return [
        validar_id_1.validarId,
        (0, express_validator_1.check)('id', 'No es un id de mongo válido').isMongoId(),
        (0, express_validator_1.check)('id').custom(validaciones_1.existeId),
        validarjwt_1.validarJwt,
        rol_admin_maestro_1.validarRoles,
        exports.validarErrores
    ];
};
exports.validarEliminarUsuario = validarEliminarUsuario;
const autenticacion = () => {
    return [
        (0, express_validator_1.body)('email').notEmpty().withMessage('El campo email es obligatorio').isEmail().withMessage('No es un email válido'),
        (0, express_validator_1.body)('password').notEmpty().withMessage('El campo password es obligatorio'),
        exports.validarErrores
    ];
};
exports.autenticacion = autenticacion;
//# sourceMappingURL=validation-error.js.map