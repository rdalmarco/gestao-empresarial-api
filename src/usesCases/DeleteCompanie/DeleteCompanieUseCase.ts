import { ErrorNotFound } from "../../errors/ErrorNotFound.js";
import { CompanieRepository } from "../../repositories/CompanieRepository.js";
import type { DeleteCompanieRequestDTO } from "./DeleteCompanieRequestDTO.js";


export class DeleteCompanieUseCase {
    constructor(
        private companieRepository: CompanieRepository
    ) {}

    async execute(data: DeleteCompanieRequestDTO) {
        const rowsAffected = await this.companieRepository.delete(data.id);

       if (rowsAffected === 0) {
           throw new ErrorNotFound(`A empresa com id #${data.id} não foi encontrada.`);
       }
    }
  }