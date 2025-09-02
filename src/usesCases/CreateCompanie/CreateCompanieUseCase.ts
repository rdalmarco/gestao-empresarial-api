import { Companie } from "../../entities/Companie.js";
import type { CompanieRepository } from "../../repositories/CompanieRepository.js";
import type { CreateCompanieRequestDTO } from "./CreateCompanieRequestDTO.js";

export class CreateCompanieUseCase {
    constructor(
        private companieRepository: CompanieRepository
    ) {}

     async execute(data: CreateCompanieRequestDTO) {
        const companie = new Companie(data);
        await this.companieRepository.create(companie);
        }
  }