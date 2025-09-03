import { companieSchema } from '../../entities/CompanieSchema.js'; 

export const createCompanieSchema = companieSchema.omit({
  id: true,
  dataCriacao: true,
  dataAtualizacao: true,
  statusRegistro: true
});