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
exports.verificarEmail = void 0;
const usuario_1 = __importDefault(require("../classes/usuario"));
const verificarEmail = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const email = req.body.email;
    const usuario = yield usuario_1.default.findById(id);
    if (email === "") {
        return res.json({ msg: 'El campo email esta vacio' });
    }
    if (email !== undefined) {
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(re)) {
            return res.json({ msg: 'El correo no es valido' });
        }
        const emailExiste = yield usuario_1.default.findOne({ email });
        if (emailExiste && (usuario === null || usuario === void 0 ? void 0 : usuario.email) !== email) {
            return res.json({ msg: `Lo sentimos el correo ${email} ya está en uso` });
        }
    }
    next();
});
exports.verificarEmail = verificarEmail;
//# sourceMappingURL=validar-email.js.map