import { ErrorApi } from "./ErrorApi.js";

export class ErrorDadosInvalidos extends ErrorApi {
  constructor(message: string) {
    super(400, 'Dados Inválidos', message);
  }
}