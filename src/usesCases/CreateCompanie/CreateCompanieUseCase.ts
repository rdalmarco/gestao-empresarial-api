import { Companie } from "../../entities/Companie.js";
import { ErrorCnpjDuplicate } from "../../errors/ErrorCnpjDuplicate.js";
import { ErrorDadosInvalidos } from "../../errors/ErrorDadosInvalidos.js";
import type { CompanieRepository } from "../../repositories/CompanieRepository.js";
import type { CreateCompanieRequestDTO } from "./CreateCompanieRequestDTO.js";
import { createCompanieSchema } from "./CreateCompanieSchema.js";


export class CreateCompanieUseCase {
    constructor(
        private companieRepository: CompanieRepository
    ) {}

     async execute(data: CreateCompanieRequestDTO) {
        //Valida os dados da requisição
        const validatedData = await createCompanieSchema.safeParse(data);
        if(!validatedData.success) {
          throw new ErrorDadosInvalidos(validatedData.error.issues.map(issue => issue.message).join(', '));
        }

        //Valida existencia de CNPJ 
        const cnpjExisting = await this.companieRepository.findByCnpj(validatedData.data.cnpj);
        if (cnpjExisting) {
            throw new ErrorCnpjDuplicate('CNPJ já cadastrado');
        }

        //Cria empresa e salva no repositório
        const companie = new Companie(validatedData.data);
        await this.companieRepository.create(companie);
        return companie;
    }
  }