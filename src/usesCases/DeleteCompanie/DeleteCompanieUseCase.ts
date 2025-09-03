import { ErrorDadosInvalidos } from "../../errors/ErrorDadosInvalidos.js";
import { ErrorNotFound } from "../../errors/ErrorNotFound.js";
import { CompanieRepository } from "../../repositories/CompanieRepository.js";
import type { DeleteCompanieRequestDTO } from "./DeleteCompanieRequestDTO.js";
import { deleteCompanieSchema } from "./DeleteCompanieSchema.js";


export class DeleteCompanieUseCase {
    constructor(
        private companieRepository: CompanieRepository
    ) {}

    async execute(data: DeleteCompanieRequestDTO) {

        const validatedData = await deleteCompanieSchema.safeParse(data);
        if (!validatedData.success) {
            throw new ErrorDadosInvalidos(validatedData.error.issues.map(issue => issue.message).join(', '));
        }

        const rowsAffected = await this.companieRepository.delete(validatedData.data.id);

       if (rowsAffected === 0) {
           throw new ErrorNotFound(`A empresa com id #${data.id} não foi encontrada.`);
       }
    }
  }