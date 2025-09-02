import { ListCompaniesUseCase } from "../usesCases/ListCompanies/ListCompaniesUseCase.js";
import { CreateCompanieUseCase } from "../usesCases/CreateCompanie/CreateCompanieUseCase.js";
import { CompanieRepositoryImpl } from "../repositories/CompanieRepositoryImpl.js";
import { FindCompanieByIdUseCase } from "../usesCases/FindCompanieById/FindCompanieByIdUseCase.js";

export class CompanieController {

    static async list(request: any, response: any) {
        const companieRepository = new CompanieRepositoryImpl();
        const useCase = new ListCompaniesUseCase(companieRepository);
        const companies = await useCase.execute();
        return response.status(200).json(companies);
    }

    static async listById(request: any, response: any) {
        const companieRepository = new CompanieRepositoryImpl();
        const useCase = new FindCompanieByIdUseCase(companieRepository);
        const companie = await useCase.execute({ id: request.params.id });
        return response.status(200).json(companie);
    }    

    static async create(request: any, response: any) {
        const companieRepository = new CompanieRepositoryImpl();
        const useCase = new CreateCompanieUseCase(companieRepository);
        const empresa = await useCase.execute(request.body);
        return response.status(201).json(empresa);
    }
}