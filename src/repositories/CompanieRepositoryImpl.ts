import { CompanieRepository } from "./CompanieRepository.js";
import { AppDataSource } from "../config/typeOrm.js";
import { Companie, StatusRegistro } from "../entities/Companie.js";

export class CompanieRepositoryImpl implements CompanieRepository {
    async create(data: any): Promise<void> {
        await AppDataSource.getRepository(Companie).save(data);
    }

    async findById(id: string): Promise<any> {
        return await AppDataSource.getRepository(Companie).findOneBy({ id });
    }

    async findByCnpj(cnpj: string): Promise<any> {
        return await AppDataSource.getRepository(Companie).findOneBy({ cnpj });
    }

    async findAll(): Promise<any[]> {
        return await AppDataSource.getRepository(Companie).find();
    }

    async update(id: string, data: any): Promise<number> {
        const result = await AppDataSource.getRepository(Companie).update(id, data);
        return result.affected || 0;
    }

    async delete(id: string): Promise<number> {
        const result = await AppDataSource.getRepository(Companie).update(id, { statusRegistro: StatusRegistro.INATIVA });
        return result.affected || 0;
    }
}