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
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarPassword = void 0;
const express_1 = require("express");
const validarPassword = (req = express_1.request, res = express_1.response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const password = req.body.password;
    if (password === "" || password !== undefined) {
        if (password.length < 8) {
            return res.json({ msg: 'La contraseña debe ser minimo de 8 caracteres' });
        }
    }
    next();
});
exports.validarPassword = validarPassword;
//# sourceMappingURL=validar-password.js.map