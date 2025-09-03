import { Companie } from "../../entities/Companie.js";
import { ErrorCnpjDuplicate } from "../../errors/ErrorCnpjDuplicate.js";
import type { CompanieRepository } from "../../repositories/CompanieRepository.js";
import type { CreateCompanieRequestDTO } from "./CreateCompanieRequestDTO.js";

export class CreateCompanieUseCase {
    constructor(
        private companieRepository: CompanieRepository
    ) {}

     async execute(data: CreateCompanieRequestDTO) {
        const cnpjExisting = await this.companieRepository.findByCnpj(data.cnpj);

        if (cnpjExisting) {
            throw new ErrorCnpjDuplicate('CNPJ já cadastrado');
        }

        const companie = new Companie(data);
        await this.companieRepository.create(companie);
        return companie;
    }
  }