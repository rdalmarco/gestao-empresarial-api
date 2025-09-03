import { ErrorApi } from './ErrorApi';

export class ErrorNotFound extends ErrorApi {
  constructor(message: string) {
    super(404, 'Not Found', message);
  }
}