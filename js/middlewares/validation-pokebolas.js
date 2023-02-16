"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarEliminarPokemon = exports.validarEliminarPokebola = exports.validarIncluirPokemon = exports.validarCrearPokebola = exports.validarMostrarPokebola = exports.validarMostrarPokebolas = void 0;
const validarjwt_1 = require("./validarjwt");
const express_validator_1 = require("express-validator");
const validaciones_1 = require("./validaciones");
const validation_error_1 = require("./validation-error");
const validar_id_pokemon_1 = require("../helpers/validar-id-pokemon");
const rol_admin_maestro_1 = require("./rol-admin-maestro");
const rol_admin_1 = require("./rol-admin");
const validarMostrarPokebolas = () => {
    return [
        validarjwt_1.validarJwt,
        rol_admin_1.esAdmin,
        validation_error_1.validarErrores
    ];
};
exports.validarMostrarPokebolas = validarMostrarPokebolas;
const validarMostrarPokebola = () => {
    return [
        validarjwt_1.validarJwt,
        rol_admin_maestro_1.validarRoles,
        validation_error_1.validarErrores
    ];
};
exports.validarMostrarPokebola = validarMostrarPokebola;
const validarCrearPokebola = () => {
    return [
        validarjwt_1.validarJwt,
        (0, express_validator_1.check)('userId').isMongoId().withMessage('No es un id de mongo valido').custom(validaciones_1.existeId),
        rol_admin_maestro_1.validarRoles,
        validation_error_1.validarErrores
    ];
};
exports.validarCrearPokebola = validarCrearPokebola;
const validarIncluirPokemon = () => {
    return [
        validarjwt_1.validarJwt,
        validar_id_pokemon_1.validarIdPokemon,
        (0, express_validator_1.check)('pokemonId').isNumeric().withMessage('Este valor tiene que ser necesariamente un numero'),
        (0, express_validator_1.check)('userId').isMongoId().withMessage('No es un id de mongo valido').custom(validaciones_1.existeId),
        rol_admin_maestro_1.validarRoles,
        validation_error_1.validarErrores
    ];
};
exports.validarIncluirPokemon = validarIncluirPokemon;
const validarEliminarPokebola = () => {
    return [
        validarjwt_1.validarJwt,
        (0, express_validator_1.check)('userId').isMongoId().withMessage('No es un id de mongo valido').custom(validaciones_1.existeId),
        rol_admin_maestro_1.validarRoles,
        validation_error_1.validarErrores
    ];
};
exports.validarEliminarPokebola = validarEliminarPokebola;
const validarEliminarPokemon = () => {
    return [
        validarjwt_1.validarJwt,
        (0, express_validator_1.check)('userId').isMongoId().withMessage('No es un id de mongo valido').custom(validaciones_1.existeId),
        rol_admin_maestro_1.validarRoles,
        validation_error_1.validarErrores
    ];
};
exports.validarEliminarPokemon = validarEliminarPokemon;
//# sourceMappingURL=validation-pokebolas.js.map