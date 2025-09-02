import { Empresa } from "../../entities/Empresa.js";
import type { EmpresaRepository } from "../../repositories/EmpresaRepository.js";
import type { CriarEmpresaRequestDTO } from "./CriarEmpresaRequestDTO.ts";

export class CriarEmpresaUseCase {
    constructor(
        private empresasRepository: EmpresaRepository
    ) {}

     async execute(data: CriarEmpresaRequestDTO) {
        const empresa = new Empresa(data);
        await this.empresasRepository.create(empresa); 
        } 
  }