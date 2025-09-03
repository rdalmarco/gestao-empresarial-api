export interface CompanieRepository {
    create(data: any): Promise<void>;
    findById(id: string): Promise<any>;
    findByCnpj(cnpj: string): Promise<any>;
    findAll(): Promise<any[]>;
    update(id: string, data: any): Promise<number>;
    delete(id: string): Promise<number>;
}