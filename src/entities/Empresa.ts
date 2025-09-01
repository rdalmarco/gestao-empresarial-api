import { uuid } from "uuidv4";
import { Endereco } from "./Endereco.ts";

export class Empresa {
    public readonly id!: string;
    
    public razaoSocial!: string;
    public endereco!: Endereco;

    constructor(props: Omit<Empresa, 'id'>, id?: string) {
        Object.assign(this, props);

        if (!id) {
            this.id = uuid();
        }
    }
}