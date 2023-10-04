"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cepsRouter = void 0;
const express_1 = require("express");
const CepController_1 = require("./../controllers/CepController");
exports.cepsRouter = (0, express_1.Router)();
const cepController = new CepController_1.CepController();
exports.cepsRouter.post('/', (req, res) => cepController.save(req, res));
exports.cepsRouter.get('/busca/cep/:cep', (req, res) => cepController.findByCep(req, res));
exports.cepsRouter.get('/busca/logradouro/:logradouro', (req, res) => cepController.findByLogradouro(req, res));
//# sourceMappingURL=ceps.js.map