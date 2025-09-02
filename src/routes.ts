import { Router } from "express";
import { EmpresaController } from "./controllers/EmpresaController.js";

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Inicial
 *     responses:
 *       200:
 *         description: Inicial
 */
router.get('/', (request, response) => {
  return response.status(200).json([]);
});

/**
 * @swagger
 * /empresas:
 *   get:
 *     summary: Lista todas as empresas
 *     responses:
 *       200:
 *         description: Lista de empresas
 */
router.get('/empresas', EmpresaController.listar);


/**
 * @swagger
 * /empresa/criar:
 *   post:
 *     summary: Criar Empresa
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               razaoSocial:
 *                 type: string
 *                 example: Nome da Empresa
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 */
router.post('/empresa/criar', EmpresaController.criar);

export { router };
