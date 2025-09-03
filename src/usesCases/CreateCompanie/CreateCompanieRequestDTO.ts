import { StatusRegistro } from "../../entities/Companie";

export interface CreateCompanieRequestDTO {
    cnpj: string;
    razaoSocial: string;
    statusRegistro: StatusRegistro;
}