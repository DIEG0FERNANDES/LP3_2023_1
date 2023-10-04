"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const database_1 = require("./database");
const ceps_1 = require("./routes/ceps");
(0, database_1.connectToMongoDB)();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use('/ceps', ceps_1.cepsRouter);
app.get('/', (req, res) => res.send('CEP API'));
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on ${port}`));
exports.default = app;
//# sourceMappingURL=index.js.map