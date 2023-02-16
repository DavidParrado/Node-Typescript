"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarId = void 0;
const validarId = (req, res, next) => {
    const { id } = req.params;
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
        return res.json({ msg: 'No es un id de mongo' });
    }
    next();
};
exports.validarId = validarId;
module.exports = {
    validarId: exports.validarId
};
//# sourceMappingURL=validar-id.js.map