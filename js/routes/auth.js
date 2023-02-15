"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const validation_error_1 = require("../middlewares/validation-error");
exports.router = (0, express_1.Router)();
exports.router.post('/login', (0, validation_error_1.autenticacion)(), auth_1.login);
//# sourceMappingURL=auth.js.map