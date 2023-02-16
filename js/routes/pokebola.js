"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const pokebola_1 = require("../controllers/pokebola");
const validation_pokebolas_1 = require("../middlewares/validation-pokebolas");
exports.router = (0, express_1.Router)();
exports.router.get('/', (0, validation_pokebolas_1.validarMostrarPokebolas)(), pokebola_1.mostrarPokebolas);
exports.router.get('/:userId', (0, validation_pokebolas_1.validarMostrarPokebola)(), pokebola_1.mostrarPokebola);
exports.router.post('/:userId', (0, validation_pokebolas_1.validarCrearPokebola)(), pokebola_1.crearPokebola);
exports.router.put('/:userId/:pokemonId', (0, validation_pokebolas_1.validarIncluirPokemon)(), pokebola_1.agregarPokemon);
exports.router.delete('/:userId', (0, validation_pokebolas_1.validarEliminarPokebola)(), pokebola_1.eliminarPokebola);
exports.router.delete('/:userId/:pokemonId', (0, validation_pokebolas_1.validarEliminarPokemon)(), pokebola_1.eliminarPokemon);
//# sourceMappingURL=pokebola.js.map