import { ErrorNotFound } from "../../erros/ErrorNotFound";
import { CompanieRepository } from "../../repositories/CompanieRepository";
import type { DeleteCompanieRequestDTO } from "./DeleteCompanieRequestDTO";


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