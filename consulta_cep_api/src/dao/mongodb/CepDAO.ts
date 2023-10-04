import { inject, injectable } from 'inversify';
import { Db } from 'mongodb';
import { TYPES } from './../../injections/types';
import { Cep } from './../../models/Cep';
import { ICepDAO } from './../ICepDAO';
import { GenericDAO } from './GenericDAO';

@injectable()
export class CepDAO extends GenericDAO<Cep> implements ICepDAO {
  constructor(@inject(TYPES.DbConnector) db: Db) {
    super();
    this._collection = db.collection('ceps');
  }

  async truncate(): Promise<boolean> {
    const result = await this._collection.deleteMany({});
    return result.acknowledged;
  }

  async findByCep(cep: string): Promise<Cep> {
    const result = await this._collection.findOne({ cep });
    return result;
  }
  
  async findByLogradouro(logradouro: string): Promise<Cep> {
    const result = await this._collection.findOne({ logradouro });
    return result;
  }  
}