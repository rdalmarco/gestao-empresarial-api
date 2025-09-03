import { ListCompaniesUseCase } from "../usesCases/ListCompanies/ListCompaniesUseCase.js";
import { CreateCompanieUseCase } from "../usesCases/CreateCompanie/CreateCompanieUseCase.js";
import { CompanieRepositoryImpl } from "../repositories/CompanieRepositoryImpl.js";
import { FindCompanieByIdUseCase } from "../usesCases/FindCompanieById/FindCompanieByIdUseCase.js";
import { UpdateCompanieUseCase } from "../usesCases/UpdateCompanie/UpdateCompanieUseCase.js";
import { DeleteCompanieUseCase } from "../usesCases/DeleteCompanie/DeleteCompanieUseCase.js";

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
        const companie = await useCase.execute(request.body);
       
        return response.status(201).json({
             status: 201,
             title: 'Empresa Criada',
             detail: `A empresa com id #${companie.id} foi criada com sucesso.`,
         });
    }

    static async update(request: any, response: any) {
        const companieRepository = new CompanieRepositoryImpl();
        const useCase = new UpdateCompanieUseCase(companieRepository);
        const empresa = await useCase.execute({ id: request.params.id, ...request.body });
        
        return response.status(200).json({
             status: 200,
             title: 'Empresa Atualizada',
             detail: `A empresa com id #${request.params.id} foi atualizada com sucesso.`,
         });
    }

    static async delete(request: any, response: any) {
        const companieRepository = new CompanieRepositoryImpl();
        const useCase = new DeleteCompanieUseCase(companieRepository);
        const result = await useCase.execute({ id: request.params.id });

        return response.status(200).json({
             status: 200,
             title: 'Empresa Removida',
             detail: `A empresa com id #${request.params.id} foi removida com sucesso.`,
         });

    }
}