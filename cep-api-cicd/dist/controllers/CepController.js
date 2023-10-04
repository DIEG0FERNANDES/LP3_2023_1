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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CepController = void 0;
const CepDAO_1 = require("./../dao/CepDAO");
const CepModel_1 = require("./../domains/CepModel");
const regex_utils_1 = require("./../utils/regex_utils");
class CepController {
    constructor() {
        this._cepDAO = new CepDAO_1.CepDAO();
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cep: cepString, logradouro } = req.body;
            if (!cepString || typeof cepString !== 'string' || !regex_utils_1.cepRegExp.test(cepString)) {
                return res.status(400).json({ mensagensDeErro: ['Número de CEP inválido'] });
            }
            if (!logradouro || typeof logradouro !== 'string') {
                return res.status(400).json({ mensagensDeErro: ['Logradouro inválido'] });
            }
            const cepExistingObject = yield this._cepDAO.findByCep(cepString);
            if (cepExistingObject) {
                return res.status(409).json({ mensagensDeErro: ['CEP já cadastrado'] });
            }
            const cepObject = new CepModel_1.CepModel({
                cep: cepString,
                logradouro
            });
            yield this._cepDAO.save(cepObject);
            res.status(201).json({ mensagem: 'CEP cadastrado com sucesso' });
        });
    }
    findByCep(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { cep: cepString } = req.params;
            if (!cepString || typeof cepString !== 'string' || !regex_utils_1.cepRegExp.test(cepString)) {
                return res.status(400).json({ mensagem: 'CEP inválido' });
            }
            const cepExistingObject = yield this._cepDAO.findByCep(cepString);
            if (!cepExistingObject) {
                return res.status(404).json({ mensagem: 'Logradouro não encontrado' });
            }
            res.json({ endereco: cepExistingObject });
        });
    }
    findByLogradouro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { logradouro } = req.params;
            if (!logradouro) {
                return res.status(400).json({ mensagem: 'CEP inválido' });
            }
            const cepExistingObject = yield this._cepDAO.findByLogradouro(logradouro);
            if (!cepExistingObject) {
                return res.status(404).json({ mensagem: 'CEP não encontrado' });
            }
            res.json({ endereco: cepExistingObject });
        });
    }
}
exports.CepController = CepController;
//# sourceMappingURL=CepController.js.map