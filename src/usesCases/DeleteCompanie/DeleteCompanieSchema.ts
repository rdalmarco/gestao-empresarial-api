import { companieSchema } from '../../entities/CompanieSchema.js'; 

export const deleteCompanieSchema = companieSchema.omit({
  cnpj: true,
  razaoSocial: true,
  email: true,
  statusRegistro : true,
  dataCriacao: true,
  dataAtualizacao: true,
});