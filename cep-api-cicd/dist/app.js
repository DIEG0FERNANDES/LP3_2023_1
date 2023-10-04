"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const database_1 = require("./database");
const ceps_1 = require("./routes/ceps");
(0, database_1.connectToMongoDB)();
exports.app = (0, express_1.default)();
// Middlewares
exports.app.use((0, cors_1.default)());
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use(express_1.default.json());
// Rotas
exports.app.use('/ceps', ceps_1.cepsRouter);
exports.app.get('/', (req, res) => res.send('Consulta CEP'));
//# sourceMappingURL=app.js.map