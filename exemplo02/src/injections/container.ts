import { PrismaClient } from "@prisma/client"
import { Container } from "inversify"
import { IUserDAO } from "../dao/iUserDAO"
import { UserDAO } from "../dao/prisma/UserDAO"
import { TYPES } from "./types"
import { MongoClient } from "mongodb"

export const getContainer = async () => {
    const container = new Container()

    const connection = await MongoClient.connect('mongodb://localhost')
    const db =connection.db('authdb')
    container.bind<PrismaClient>(TYPES.DbConnector).toConstantValue(db)

    container.bind<IUserDAO>(TYPES.IUserDAO).to(UserDAO)

    return container
}