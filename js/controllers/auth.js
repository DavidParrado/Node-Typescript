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
exports.login = void 0;
const express_1 = require("express");
const usuario_1 = __importDefault(require("../classes/usuario"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (req = express_1.request, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const usuario = yield usuario_1.default.findOne({ email });
    if (!usuario) {
        return res.status(404).json({ msg: 'El email no se encuentra registrado' });
    }
    if (!bcryptjs_1.default.compareSync(password, usuario.password)) {
        return res.status(404).json({ msg: 'Contraseña incorrecta' });
    }
    const payload = { id: usuario.id };
    const token = jsonwebtoken_1.default.sign(payload, process.env.SECRETKEY, {
        expiresIn: '4h'
    });
    res.status(200).send({ msg: 'Inicio de sesión exitoso', token });
});
exports.login = login;
//# sourceMappingURL=auth.js.map