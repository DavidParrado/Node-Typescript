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
exports.esAdmin = void 0;
const usuario_1 = __importDefault(require("../classes/usuario"));
const esAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { idAutenticado } = req;
    if (!idAutenticado) {
        return res.json({ msg: 'Id Autenticado no válido' });
    }
    const usuario = yield usuario_1.default.findById(idAutenticado);
    if (!usuario)
        return res.json({ msg: 'Usuario no existe' });
    if (usuario.rol !== 'ADMIN') {
        return res.json({ msg: 'No tienes acceso a esta ruta' });
    }
    next();
});
exports.esAdmin = esAdmin;
//# sourceMappingURL=rol-admin.js.map