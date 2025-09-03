import { companieSchema } from '../../entities/CompanieSchema.js'; 

export const updateCompanieSchema = companieSchema.omit({
  dataCriacao: true,
  dataAtualizacao: true,
});