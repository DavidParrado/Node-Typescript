"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const pokemon_1 = require("../controllers/pokemon");
exports.router = (0, express_1.Router)();
exports.router.get('/', pokemon_1.buscarPokemon);
//# sourceMappingURL=pokemon.js.map