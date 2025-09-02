import { ListarEmpresasUseCase } from "../usesCases/ListarEmpresas/ListarEmpresasUseCase.js";
import { CriarEmpresaUseCase } from "../usesCases/CriarEmpresa/CriarEmpresaUseCase.js";
import { EmpresaRepositoryImpl } from "../repositories/EmpresaRepositoryImpl.js";

export class EmpresaController {

    static async listar(request: any, response: any) {
        const empresasRepository = new EmpresaRepositoryImpl(); 
        const useCase = new ListarEmpresasUseCase(empresasRepository); 
        const empresas = await useCase.execute();
        return response.status(200).json(empresas);
    }

    static async criar(request: any, response: any) {
        const empresasRepository = new EmpresaRepositoryImpl();
        const useCase = new CriarEmpresaUseCase(empresasRepository);
        const empresa = await useCase.execute(request.body);
        return response.status(201).json(empresa);
    }
}