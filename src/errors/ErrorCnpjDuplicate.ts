import { ErrorApi } from "./ErrorApi";

export class ErrorCnpjDuplicate extends ErrorApi {
  constructor(message: string) {
    super(message, 409);
    this.name = 'ErrorCnpjDuplicate';
  }
}