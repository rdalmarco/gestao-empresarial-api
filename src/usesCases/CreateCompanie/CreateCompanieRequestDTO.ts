import { StatusRegistro } from "../../entities/Companie.js";

export interface CreateCompanieRequestDTO {
    cnpj: string;
    email: string;
    dataCriacao: Date;
    dataAtualizacao: Date;
    razaoSocial: string;
    statusRegistro: StatusRegistro;
}