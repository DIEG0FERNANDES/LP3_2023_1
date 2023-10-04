import { Cep } from './../models/Cep';
import { IGenericDAO } from './IGenericDAO';

export interface ICepDAO extends IGenericDAO<Cep> {
  truncate(): Promise<boolean>;
  findByCep(cep: string): Promise<Cep>;
  findByLogradouro(logradouro: string): Promise<Cep>;
}