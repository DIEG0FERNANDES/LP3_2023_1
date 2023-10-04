import { injectable, inject } from 'inversify';
import { Db } from 'mongodb'

import { User } from '../../models/User'
import { GenericDAO } from './GenericDAO'
import { IUserDAO } from '../iUserDAO'
import { TYPES } from '../../injections/types';

@injectable()
export class UserDAO extends GenericDAO<User> implements IUserDAO {
  constructor(@inject(TYPES.DbConnector) db: Db) {
    super(db, 'users')
  }

  async findByName(name: string): Promise<User[]> {
    const users = await this.find({
      name: {
        $regex: name,
        $options: 'i',
      },
    })

    return users
  }
}
