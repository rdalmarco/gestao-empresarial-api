import { EmpresaRepository } from "./EmpresaRepository.js";
import { AppDataSource } from "../config/typeOrm.js";
import { Empresa } from "../entities/Empresa.js";

export class EmpresaRepositoryImpl implements EmpresaRepository {
    async create(data: any): Promise<void> {
        await AppDataSource.getRepository(Empresa).save(data);
    }

    async findById(id: string): Promise<any> {
        return await AppDataSource.getRepository(Empresa).findOneBy({ id });
    }

    async findAll(): Promise<any[]> {
        return await AppDataSource.getRepository(Empresa).find();
    }

    async update(id: string, data: any): Promise<void> {
        await AppDataSource.getRepository(Empresa).update(id, data);
    }

    async delete(id: string): Promise<void> {
        await AppDataSource.getRepository(Empresa).delete(id);
    }
}