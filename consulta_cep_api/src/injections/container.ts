import { PrismaClient } from '@prisma/client';
import { Container } from 'inversify';
import { Db, MongoClient } from 'mongodb';
import { ICepDAO } from './../dao/ICepDAO';
import { CepDAO as CepMongoDAO } from './../dao/mongodb/CepDAO';
import { CepDAO as CepPrismaDAO } from './../dao/prisma/CepDAO';
import { TYPES } from './types';
import DatabaseType from './../types/DatabaseType';

export const getContainer = async (database: DatabaseType): Promise<Container> => {
  const container = new Container();

  switch(database) {
    case 'mongodb':
      const connection = await MongoClient.connect('mongodb://localhost:27017');
      const db = connection.db('correios-mongo');
      container.bind<Db>(TYPES.DbConnector).toConstantValue(db);
      container.bind<ICepDAO>(TYPES.ICepDAO).to(CepMongoDAO);
      break;
      
    case 'postgres':
      const client = new PrismaClient();
      container.bind<PrismaClient>(TYPES.DbConnector).toConstantValue(client);
      container.bind<ICepDAO>(TYPES.ICepDAO).to(CepPrismaDAO);
      break;
  }
    
  return container;
}