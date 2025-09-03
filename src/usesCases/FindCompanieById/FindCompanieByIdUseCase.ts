import { ErrorDadosInvalidos } from "../../errors/ErrorDadosInvalidos.js";
import { CompanieRepository } from "../../repositories/CompanieRepository.js";
import type { FindCompanieByIdRequestDTO } from "./FindCompanieByIdRequestDTO.js";
import { findCompanieByIdSchema } from "./FindCompanieByIdSchema.js";


export class FindCompanieByIdUseCase {
    constructor(
        private companieRepository: CompanieRepository
    ) {}

    async execute(data: FindCompanieByIdRequestDTO) {
        const validatedData = await findCompanieByIdSchema.safeParse(data);
        if (!validatedData.success) {
            throw new ErrorDadosInvalidos(validatedData.error.issues.map(issue => issue.message).join(', '));
        }

        return await this.companieRepository.findById(validatedData.data.id);
    }
  }