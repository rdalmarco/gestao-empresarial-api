import { Empresa } from "../../entities/Empresa";
import type { EmpresasRepository } from "../../repositories/EmpresasRepository.ts";
import type { CriarEmpresaRequestDTO } from "./CriarEmpresaRequestDTO.ts";

export class CriarEmpresa {
    constructor(
        private empresasRepository: EmpresasRepository
    ) {}

     async execute(data: CriarEmpresaRequestDTO) {
        const empresa = new Empresa(data);
        await this.empresasRepository.create(empresa); 
        } 
  }
