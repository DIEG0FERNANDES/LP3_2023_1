import { Document, Schema, model } from 'mongoose';

export interface Cep extends Document {
  cep: string;
  logradouro: string;
}

const schema = new Schema<Cep>({
  cep: {
    type: String,
    required: true,
    unique: true
  },
  logradouro: {
    type: String,
    required: true,
    unique: true
  }
});

export const CepModel = model<Cep>('Cep', schema);