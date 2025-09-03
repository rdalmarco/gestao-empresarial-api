import { Request, Response, NextFunction } from 'express';
import { ErrorApi } from '../errors/ErrorApi';

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof ErrorApi) {
    return res.status(error.status).json({
      status: error.status,
      title: error.title,
      detail: error.detail,
    });
  }

  return res.status(500).json({
    status: 500,
    title: 'Erro Interno',
    detail: 'Ocorreu um erro desconhecido.',
  });
};