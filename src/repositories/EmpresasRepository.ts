export interface EmpresasRepository {
    create(data: any): Promise<void>;
    findById(id: string): Promise<any>;
    update(id: string, data: any): Promise<void>;
    delete(id: string): Promise<void>;
}