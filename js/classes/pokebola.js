"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const PokebolaSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'usuarios',
        required: true
    },
    pokemones: {
        type: (Array),
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
});
exports.default = (0, mongoose_1.model)('pokebolas', PokebolaSchema);
//# sourceMappingURL=pokebola.js.map