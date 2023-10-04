"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CepModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    cep: {
        type: String,
        required: true,
        unique: true
    },
    logradouro: {
        type: String,
        required: true,
        unique: true
    }
});
exports.CepModel = (0, mongoose_1.model)('Cep', schema);
//# sourceMappingURL=CepModel.js.map