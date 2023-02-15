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
exports.validarJwt = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuario_1 = __importDefault(require("../classes/usuario"));
const validarJwt = (req, res = express_1.response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { token } = req.headers;
    if (!token)
        return res.json({ msg: 'No existe token en los headers de la petición' });
    if (id) {
        const usuario = yield usuario_1.default.findById(id);
        const payload = jsonwebtoken_1.default.verify(token, process.env.SECRETKEY, (err, decode) => (decode !== undefined) ? decode : err);
        if (payload.id !== (usuario === null || usuario === void 0 ? void 0 : usuario.id)) {
            return res.json({ msg: 'Token invalido' });
        }
        req.idAutenticado = payload.id;
    }
    else {
        const payload = jsonwebtoken_1.default.verify(token, process.env.SECRETKEY, (err, decode) => (decode !== undefined) ? decode : err);
        const usuario = yield usuario_1.default.findById(payload.id);
        if (payload.id !== (usuario === null || usuario === void 0 ? void 0 : usuario.id)) {
            return res.json({ msg: 'Token invalido' });
        }
    }
    next();
});
exports.validarJwt = validarJwt;
//# sourceMappingURL=validarjwt.js.map