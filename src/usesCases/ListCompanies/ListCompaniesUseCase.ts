import { CompanieRepository } from "../../repositories/CompanieRepository.js";

export class ListCompaniesUseCase {
    constructor(
        private companiesRepository: CompanieRepository
    ) {}

     async execute() {
        return await this.companiesRepository.findAll();
        } 
  }