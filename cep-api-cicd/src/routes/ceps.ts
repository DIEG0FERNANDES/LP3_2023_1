import { Router } from 'express';
import { CepController } from './../controllers/CepController';

export const cepsRouter = Router();
const cepController = new CepController();

cepsRouter.delete('/', (req, res) => cepController.delete(req, res));
cepsRouter.post('/', (req, res) => cepController.save(req, res));
cepsRouter.get('/busca/cep/:cep', (req, res) => cepController.findByCep(req, res));
cepsRouter.get('/busca/logradouro/:logradouro', (req, res) => cepController.findByLogradouro(req, res));