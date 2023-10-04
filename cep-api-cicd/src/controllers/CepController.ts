import { Request, Response } from 'express';
import { CepDAO } from './../dao/CepDAO';
import { CepModel } from './../domains/CepModel';
import { cepRegExp } from './../utils/regex_utils';

export class CepController {
  private _cepDAO: CepDAO;

  constructor() {
    this._cepDAO = new CepDAO();
  }

  async save(req: Request, res: Response) {
    const { cep: cepString, logradouro } = req.body;

    if (!cepString || typeof cepString !== 'string' || !cepRegExp.test(cepString)) {
      return res.status(400).json({ mensagensDeErro: ['Número de CEP inválido'] });
    }
    
    if (!logradouro || typeof logradouro !== 'string') {
      return res.status(400).json({ mensagensDeErro: ['Logradouro inválido'] });
    }
    
    const cepExistingObject = await this._cepDAO.findByCep(cepString);
    
    if (cepExistingObject) {
      return res.status(409).json({ mensagensDeErro: ['CEP já cadastrado'] });
    }

    const cepObject = new CepModel({
      cep: cepString,
      logradouro
    });

    await this._cepDAO.save(cepObject);
    res.status(201).json({ mensagem: 'CEP cadastrado com sucesso' });
  }
  
  async findByCep(req: Request, res: Response) {
    const { cep: cepString } = req.params;

    if (!cepString || typeof cepString !== 'string' || !cepRegExp.test(cepString))  {
      return res.status(400).json({ mensagem: 'CEP inválido' });
    }

    const cepExistingObject = await this._cepDAO.findByCep(cepString);

    if (!cepExistingObject) {
      return res.status(404).json({ mensagem: 'Logradouro não encontrado' });
    }

    res.json({ endereco: cepExistingObject });
  }

  async findByLogradouro(req: Request, res: Response) {
    const { logradouro } = req.params;
    
    if (!logradouro) {
      return res.status(400).json({ mensagem: 'CEP inválido' });
    }

    const cepExistingObject = await this._cepDAO.findByLogradouro(logradouro);

    if (!cepExistingObject) {
      return res.status(404).json({ mensagem: 'CEP não encontrado' });
    }

    res.json({ endereco: cepExistingObject });
  }
  async delete(req: Request,res:Response){
    await this._cepDAO.delete();
    res.status(204).send('dados deletados')
  }
}