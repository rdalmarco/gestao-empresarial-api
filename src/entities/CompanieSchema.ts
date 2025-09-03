import { z } from 'zod';
import { StatusRegistro } from './Companie.js';

export const companieSchema = z.object({
  id: z.string().uuid({ message: "ID deve ser um UUID válido." }),
  cnpj: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, { message: "CNPJ inválido. Use o formato XX.XXX.XXX/XXXX-XX." }),
  razaoSocial: z.string().min(3, { message: "A razao social deve ter no mínimo 3 caracteres." }),
  email: z.string().email({ message: "Formato de email inválido." }),
  dataCriacao: z.date(),
  dataAtualizacao: z.date(),
  statusRegistro: z.nativeEnum(StatusRegistro, { message: "O status dever ser 0 ou 1"}),
});