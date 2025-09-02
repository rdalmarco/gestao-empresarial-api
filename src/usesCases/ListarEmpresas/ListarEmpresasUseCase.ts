import { EmpresaRepository } from "../../repositories/EmpresaRepository";

export class ListarEmpresasUseCase {
    constructor(
        private empresasRepository: EmpresaRepository
    ) {}

     async execute() {
        return await this.empresasRepository.findAll();
        } 
  }