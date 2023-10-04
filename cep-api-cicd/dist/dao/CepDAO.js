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
exports.CepDAO = void 0;
const CepModel_1 = require("./../domains/CepModel");
class CepDAO {
    save(cep) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedCep = yield CepModel_1.CepModel.create(cep);
            return savedCep;
        });
    }
    findByCep(cepString) {
        return __awaiter(this, void 0, void 0, function* () {
            const cepObject = yield CepModel_1.CepModel.find({ cep: cepString });
            return cepObject.at(0);
        });
    }
    findByLogradouro(logradouro) {
        return __awaiter(this, void 0, void 0, function* () {
            const cepObject = yield CepModel_1.CepModel.find({
                logradouro: {
                    $regex: logradouro,
                    $options: 'i'
                }
            });
            return cepObject.at(0);
        });
    }
}
exports.CepDAO = CepDAO;
//# sourceMappingURL=CepDAO.js.map