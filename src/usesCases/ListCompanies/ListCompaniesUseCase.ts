import { StatusRegistro } from "../../entities/Companie.js";
import { CompanieRepository } from "../../repositories/CompanieRepository.js";

export class ListCompaniesUseCase {
    constructor(
        private companiesRepository: CompanieRepository
    ) {}

     async execute() {
        const companies = await this.companiesRepository.findAll();

        const formatCompanies = companies.map(company => ({
        ...company,
        statusRegistro: company.statusRegistro === 1 ? StatusRegistro.ATIVA : StatusRegistro.INATIVA
     }));

        return formatCompanies;
        } 
  }