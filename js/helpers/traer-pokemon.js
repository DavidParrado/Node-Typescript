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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.traerPokemon = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const traerPokemon = (pokemonId) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const resp = yield (0, node_fetch_1.default)(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    const { name, id, pal_park_encounters, capture_rate, color, habitat, egg_groups } = yield resp.json();
    let base_score = ((_a = pal_park_encounters[0]) === null || _a === void 0 ? void 0 : _a.base_score) | 0;
    return { name, id, capture_rate, base_score, color, habitat, egg_groups };
});
exports.traerPokemon = traerPokemon;
//# sourceMappingURL=traer-pokemon.js.map