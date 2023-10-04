import cors from 'cors'
import express from 'express'
import logger from 'morgan'
import { connectToMongoDB } from './database/index'
import { cepsRouter } from './routes/ceps'


connectToMongoDB()


const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())


app.use('/ceps', cepsRouter)


app.get('/', (req, res) => res.send('Consulta CEP'))


const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on ${port}`))


export default app