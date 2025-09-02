export interface CompanieRepository {
    create(data: any): Promise<void>;
    findById(id: string): Promise<any>;
    findAll(): Promise<any[]>;
    update(id: string, data: any): Promise<void>;
    delete(id: string): Promise<void>;
}