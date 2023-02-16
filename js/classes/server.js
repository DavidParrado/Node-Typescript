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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("../db/mongoose");
const usuarios_1 = require("../routes/usuarios");
const auth_1 = require("../routes/auth");
const pokebola_1 = require("../routes/pokebola");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.paths = {
            usuarios: '/api/usuarios',
            pokebola: '/pokebola',
            auth: '/auth',
        };
        this.connection();
        this.middlewares();
        this.routes();
    }
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, mongoose_1.dbConnection)();
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.paths.usuarios, usuarios_1.router);
        this.app.use(this.paths.pokebola, pokebola_1.router);
        this.app.use(this.paths.auth, auth_1.router);
    }
    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`Servidor corriendo en el puerto 8080`);
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map