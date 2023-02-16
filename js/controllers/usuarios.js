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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usuariosDelete = exports.usuariosPut = exports.usuariosPost = exports.usuarioGet = exports.usuariosGet = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const usuario_1 = __importDefault(require("../classes/usuario"));
const usuariosGet = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit } = req.query;
    const usuarios = yield usuario_1.default.find({ status: true })
        .limit(Number(limit));
    return res.json(usuarios);
});
exports.usuariosGet = usuariosGet;
const usuarioGet = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findById(id).find({ status: true });
    return res.json(usuario);
});
exports.usuarioGet = usuarioGet;
const usuariosPost = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, email, password, rol } = req.body;
    const usuario = new usuario_1.default({ nombre, email, password, rol });
    const salt = bcryptjs_1.default.genSaltSync(10);
    const hash = bcryptjs_1.default.hashSync(password, salt);
    usuario.password = hash;
    yield usuario.save();
    res.json(usuario);
});
exports.usuariosPost = usuariosPost;
const usuariosPut = (req, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const _a = req.body, { status, password } = _a, data = __rest(_a, ["status", "password"]);
    if (Object.entries(req.body).length === 0)
        return res.json({ msg: 'No hay ningun campo para actualizar' });
    if (password) {
        const salt = bcryptjs_1.default.genSaltSync(10);
        const hash = bcryptjs_1.default.hashSync(password, salt);
        data.password = hash;
    }
    const usuario = yield usuario_1.default.findByIdAndUpdate(id, data, { new: true });
    if (!usuario || !usuario.status) {
        return res.json({
            msg: 'El usuario no existe'
        });
    }
    return res.json(usuario);
});
exports.usuariosPut = usuariosPut;
const usuariosDelete = (req, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByIdAndUpdate(id, { status: false }, { new: true });
    if (!usuario) {
        return res.json({ msg: `El usuario ${id} no se encuentra en la base de datos` });
    }
    ;
    return res.json(usuario);
});
exports.usuariosDelete = usuariosDelete;
//# sourceMappingURL=usuarios.js.map