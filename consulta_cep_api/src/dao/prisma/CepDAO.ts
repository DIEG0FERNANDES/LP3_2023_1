import { PrismaClient } from '@prisma/client';
import { inject, injectable } from 'inversify';
import { TYPES } from './../../injections/types';
import { Cep } from './../../models/Cep';
import { ICepDAO } from './../ICepDAO';
import { GenericDAO } from './GenericDAO';

@injectable()
export class CepDAO extends GenericDAO<Cep> implements ICepDAO {
  constructor(@inject(TYPES.DbConnector) client: PrismaClient) {
    super();
    
    this._model = client.cep;
  }

  async truncate(): Promise<boolean> {
    const { count } = await this._model.deleteMany({});
    return count !== 0;
  }

  async findByCep(cep: string): Promise<Cep> {
    const result = await this._model.findUnique({ where: { cep } });
    return result;
  }
  
  async findByLogradouro(logradouro: string): Promise<Cep> {
    const result = await this._model.findUnique({ where: { logradouro } });
    return result;
  }
}