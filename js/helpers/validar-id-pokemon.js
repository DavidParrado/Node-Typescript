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
exports.validarIdPokemon = void 0;
const pokebola_1 = __importDefault(require("../classes/pokebola"));
const validarIdPokemon = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, pokemonId } = req.params;
    const pokebola = yield pokebola_1.default.findOne({ userId });
    if (!pokebola) {
        return res.json({ msg: 'El usuario no tiene ninguna pokebola registrada' });
    }
    ;
    const pokemonesIds = [];
    const pokemones = pokebola.pokemones;
    pokemones.forEach((elemento) => {
        pokemonesIds.push(elemento.id);
    });
    if (pokemonesIds.includes(Number(pokemonId))) {
        return res.json({ msg: `El pokemon con el id ${pokemonId} ya se encuentra en la pokebola` });
    }
    next();
});
exports.validarIdPokemon = validarIdPokemon;
//# sourceMappingURL=validar-id-pokemon.js.map