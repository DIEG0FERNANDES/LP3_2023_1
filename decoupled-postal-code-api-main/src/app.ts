import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import { cepsRouter } from './routes/ceps';

export const app = express();

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());

// Rotas
app.use('/ceps', cepsRouter);

app.get('/', (req, res) => res.send('Postal Code API'));