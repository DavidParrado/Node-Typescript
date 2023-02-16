"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const pokebola_1 = require("../controllers/pokebola");
const validation_pokebolas_1 = require("../middlewares/validation-pokebolas");
const validarjwt_1 = require("../middlewares/validarjwt");
const validation_error_1 = require("../middlewares/validation-error");
exports.router = (0, express_1.Router)();
exports.router.get('/', [validarjwt_1.validarJwt, validation_error_1.validarErrores], pokebola_1.mostrarPokebolas);
exports.router.get('/:userId', pokebola_1.mostrarPokebola);
exports.router.post('/:userId', (0, validation_pokebolas_1.validarCrearPokebola)(), pokebola_1.crearPokebola);
exports.router.put('/:userId/:pokemonId', (0, validation_pokebolas_1.validarIncluirPokemon)(), pokebola_1.incluirPokemon);
exports.router.delete('/:userId', (0, validation_pokebolas_1.validarEliminarPokebola)(), pokebola_1.eliminarPokebola);
exports.router.delete('/:userId/pokemonId', (0, validation_pokebolas_1.validarEliminarPokemon)(), pokebola_1.eliminarPokemon);
//# sourceMappingURL=pokebola.js.map