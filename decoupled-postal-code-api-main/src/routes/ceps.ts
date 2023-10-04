import { Router } from 'express';
import { getAsynchronousCepController } from './../controllers/CepController';

export const cepsRouter = Router();

const setUpRoutes = async () => {
  const cepController = await getAsynchronousCepController();
  
  cepsRouter.post('/', (req, res) => cepController.save(req, res));
  cepsRouter.get('/busca/cep/:cep', (req, res) => cepController.findByCep(req, res));
  cepsRouter.get('/busca/logradouro/:logradouro', (req, res) => cepController.findByLogradouro(req, res));
}

setUpRoutes();