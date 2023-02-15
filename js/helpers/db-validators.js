"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.campoVacio = void 0;
const campoVacio = (campo) => {
    if (campo.length <= 0) {
        throw new Error('El campo esta vacío');
    }
};
exports.campoVacio = campoVacio;
//# sourceMappingURL=db-validators.js.map