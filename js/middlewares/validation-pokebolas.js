"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarEliminarPokemon = exports.validarEliminarPokebola = exports.validarIncluirPokemon = exports.validarCrearPokebola = void 0;
const validarjwt_1 = require("./validarjwt");
const express_validator_1 = require("express-validator");
const validaciones_1 = require("./validaciones");
const validation_error_1 = require("./validation-error");
const validar_id_pokemon_1 = require("../helpers/validar-id-pokemon");
const validarCrearPokebola = () => {
    return [
        validarjwt_1.validarJwt,
        (0, express_validator_1.check)('userId').isMongoId().withMessage('No es un id de mongo valido').custom(validaciones_1.existeId),
        validation_error_1.validarErrores
    ];
};
exports.validarCrearPokebola = validarCrearPokebola;
const validarIncluirPokemon = () => {
    return [
        validarjwt_1.validarJwt,
        validar_id_pokemon_1.validarIdPokemon,
        (0, express_validator_1.check)('userId').isMongoId().withMessage('No es un id de mongo valido').custom(validaciones_1.existeId),
        validation_error_1.validarErrores
    ];
};
exports.validarIncluirPokemon = validarIncluirPokemon;
const validarEliminarPokebola = () => {
    return [
        validarjwt_1.validarJwt,
        (0, express_validator_1.check)('userId').isMongoId().withMessage('No es un id de mongo valido').custom(validaciones_1.existeId),
        validation_error_1.validarErrores
    ];
};
exports.validarEliminarPokebola = validarEliminarPokebola;
const validarEliminarPokemon = () => {
    return [
        validarjwt_1.validarJwt,
        (0, express_validator_1.check)('userId').isMongoId().withMessage('No es un id de mongo valido').custom(validaciones_1.existeId),
        validation_error_1.validarErrores
    ];
};
exports.validarEliminarPokemon = validarEliminarPokemon;
//# sourceMappingURL=validation-pokebolas.js.map