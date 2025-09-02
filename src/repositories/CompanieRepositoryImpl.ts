import { CompanieRepository } from "./CompanieRepository.js";
import { AppDataSource } from "../config/typeOrm.js";
import { Companie } from "../entities/Companie.js";

export class CompanieRepositoryImpl implements CompanieRepository {
    async create(data: any): Promise<void> {
        await AppDataSource.getRepository(Companie).save(data);
    }

    async findById(id: string): Promise<any> {
        return await AppDataSource.getRepository(Companie).findOneBy({ id });
    }

    async findAll(): Promise<any[]> {
        return await AppDataSource.getRepository(Companie).find();
    }

    async update(id: string, data: any): Promise<void> {
        await AppDataSource.getRepository(Companie).update(id, data);
    }

    async delete(id: string): Promise<void> {
        await AppDataSource.getRepository(Companie).delete(id);
    }
}