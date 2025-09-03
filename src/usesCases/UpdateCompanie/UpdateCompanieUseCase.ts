import { ErrorNotFound } from "../../errors/ErrorNotFound";
import { CompanieRepository } from "../../repositories/CompanieRepository";
import type { UpdateCompanieRequestDTO } from "./UpdateCompanieRequestDTO";


export class UpdateCompanieUseCase {
    constructor(
        private companieRepository: CompanieRepository
    ) {}

    async execute(data: UpdateCompanieRequestDTO) {
        const rowsAffected = await this.companieRepository.update(data.id, data);
        
        if (rowsAffected === 0) {
                   throw new ErrorNotFound(`A empresa com id #${data.id} não foi encontrada.`);
               }
    }
  }