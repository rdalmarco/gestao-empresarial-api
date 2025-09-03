import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

export enum StatusRegistro {
    INATIVA = 0,
    ATIVA = 1,
}

@Entity()
export class Companie {
    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;

    @Column()
    public cnpj!: string;
    
    @Column()
    public razaoSocial!: string;

    @Column({ type: "int", default: StatusRegistro.ATIVA })
    public statusRegistro!: StatusRegistro;

    constructor(props: Omit<Companie, 'id'>, id?: string) {
        Object.assign(this, props);
        this.id = id ?? uuid();
    }
}
