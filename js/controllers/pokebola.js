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
exports.eliminarPokemon = exports.incluirPokemon = exports.eliminarPokebola = exports.crearPokebola = exports.mostrarPokebolas = exports.mostrarPokebola = void 0;
const pokebola_1 = __importDefault(require("../classes/pokebola"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const usuario_1 = __importDefault(require("../classes/usuario"));
const mostrarPokebola = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const pokebola = yield pokebola_1.default.findOne({ userId });
    return res.json(pokebola);
});
exports.mostrarPokebola = mostrarPokebola;
const mostrarPokebolas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idAutenticado } = req;
    console.log(idAutenticado);
    const usuario = yield usuario_1.default.findById(idAutenticado);
    if (!usuario) {
        return res.json({ msg: 'No existe un usuario con ese id' });
    }
    ;
    if (usuario.rol !== 'ADMIN') {
        return res.json({ msg: 'No puedes acceder a esta ruta debes ser Admin' });
    }
    const pokebola = yield pokebola_1.default.find({ status: true });
    return res.json(pokebola);
});
exports.mostrarPokebolas = mostrarPokebolas;
const crearPokebola = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const usuario = yield pokebola_1.default.findOne({ userId });
    if (usuario) {
        return res.json({ msg: 'Este usuario ya tiene una pokebola registrada' });
    }
    const pokebola = new pokebola_1.default({ userId, pokemones: [] });
    pokebola.save();
    res.json(pokebola);
});
exports.crearPokebola = crearPokebola;
const eliminarPokebola = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const usuario = yield pokebola_1.default.findOne({ userId });
    if (!usuario) {
        return res.json({ msg: 'Este usuario ya tiene una pokebola registrada' });
    }
    const pokebola = yield pokebola_1.default.findByIdAndUpdate(usuario.id, { status: false }, { new: true });
    if (!pokebola) {
        return res.json({ msg: 'La pokebola no existe' });
    }
    res.json(pokebola);
});
exports.eliminarPokebola = eliminarPokebola;
const incluirPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId, pokemonId } = req.params;
    const pokebola = yield pokebola_1.default.findOne({ userId });
    if (!pokebola) {
        return res.json({ msg: 'El usuario ingresado no tiene una pokebola registrada' });
    }
    ;
    if (Number(pokemonId) > 1008) {
        return res.json({ msg: 'Superaste el limite' });
    }
    ;
    const resp = yield (0, node_fetch_1.default)(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
    const { name, id, pal_park_encounters, capture_rate, color, habitat, egg_groups } = yield resp.json();
    const [{ base_score }] = pal_park_encounters;
    const pokemon = { name, id, capture_rate, base_score, color, habitat, egg_groups };
    pokebola.pokemones.push(pokemon);
    pokebola.save();
    return res.json(pokebola);
});
exports.incluirPokemon = incluirPokemon;
const eliminarPokemon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idAutenticado } = req;
    const pokebola = yield pokebola_1.default.findOne({ userId: idAutenticado });
    res.json(pokebola);
});
exports.eliminarPokemon = eliminarPokemon;
//# sourceMappingURL=pokebola.js.map