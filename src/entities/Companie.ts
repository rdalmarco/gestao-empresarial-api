import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity()
export class Companie {
    @PrimaryGeneratedColumn("uuid")
    public readonly id: string;
    
    @Column()
    public razaoSocial!: string;

    constructor(props: Omit<Companie, 'id'>, id?: string) {
        Object.assign(this, props);
        this.id = id ?? uuid();
    }
}
