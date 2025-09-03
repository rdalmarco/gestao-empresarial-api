import { ErrorApi } from "./ErrorApi.js";

export class ErrorCnpjDuplicate extends ErrorApi {
  constructor(message: string) {
    super(404, 'CNPJ Duplicado', message);
  }
}