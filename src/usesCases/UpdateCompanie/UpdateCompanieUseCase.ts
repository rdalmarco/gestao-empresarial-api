import { ErrorDadosInvalidos } from "../../errors/ErrorDadosInvalidos.js";
import { ErrorNotFound } from "../../errors/ErrorNotFound.js";
import { CompanieRepository } from "../../repositories/CompanieRepository.js";
import type { UpdateCompanieRequestDTO } from "./UpdateCompanieRequestDTO.js";
import { updateCompanieSchema } from "./UpdateCompanieSchema.js";


export class UpdateCompanieUseCase {
    constructor(
        private companieRepository: CompanieRepository
    ) {}

    async execute(data: UpdateCompanieRequestDTO) {
         //Valida os dados da requisição
          const validatedData = await updateCompanieSchema.safeParse(data);
          if(!validatedData.success) {
             throw new ErrorDadosInvalidos(validatedData.error.issues.map(issue => issue.message).join(', '));
          }

        const rowsAffected = await this.companieRepository.update(validatedData.data.id, validatedData.data);
        
        if (rowsAffected === 0) {
                   throw new ErrorNotFound(`A empresa com id #${validatedData.data.id} não foi encontrada.`);
               }
    }
  }