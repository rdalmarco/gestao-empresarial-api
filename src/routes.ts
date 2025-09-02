import { Router } from "express";
import { CompanieController } from "./controllers/EmpresaController.js";

const router = Router();

/**
 * @swagger
 * /companies:
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
router.post('/companies', CompanieController.create);

/**
 * @swagger
 * /companies:
 *   get:
 *     summary: Lista todas as empresas
 *     responses:
 *       200:
 *         description: Lista de empresas
 */
router.get('/companies', CompanieController.list);

/**
 * @swagger
 * /companies/{id}:
 *   get:
 *     summary: Busca uma empresa pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da empresa
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Empresa encontrada
 *       404:
 *         description: Empresa não encontrada
 */
router.get('/companies/:id', CompanieController.listById);

export { router };
