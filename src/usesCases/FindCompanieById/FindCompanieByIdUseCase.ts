import { CompanieRepository } from "../../repositories/CompanieRepository";
import type { FindCompanieByIdRequestDTO } from "./FindCompanieByIdRequestDTO";


export class FindCompanieByIdUseCase {
    constructor(
        private companieRepository: CompanieRepository
    ) {}

    async execute(data: FindCompanieByIdRequestDTO) {
        return await this.companieRepository.findById(data.id);
    }
  }