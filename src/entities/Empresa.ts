import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Empresa {
    @PrimaryGeneratedColumn()
    public readonly id: string;
    
    @Column()
    public razaoSocial: string;

    constructor(props: Omit<Empresa, 'id'>, id?: string) {
        Object.assign(this, props);
        this.id = id ?? uuid();
    }
}
