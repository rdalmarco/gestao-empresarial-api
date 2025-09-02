import { Router } from "express";

const router = Router();

router.get('/', (request, response) => {
  return response.status(200).json([]);
});

router.get('/empresas', (request, response) => {
  return response.status(200).json([]);
});

router.post('/empresas', (request, response) => {
  return response.status(201).send();
});

export { router };
