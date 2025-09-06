import { response, Router } from "express";
import { CompanieController } from "./controllers/CompanieController.js";

const router = Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: API de Gestão de Empresas
 *     responses:
 *       200:
 *         description: Faz conexão inicial com a API
 */
router.get('/', (request, response) => response.send('API de Gestão de Empresas. Use /companies para gerenciar empresas.'));


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
 *             type: objectg
 *             properties:
 *               razaoSocial:
 *                 type: string
 *                 example: Nome da Empresa
 *               email:
 *                 type: string
 *                 example: email@empresa.com
 *               cnpj:
 *                 type: string
 *                 example: 00.000.000/0000-00
 *     responses:
 *       201:
 *         description: Empresa criada com sucesso
 *       400:
 *         description: Dados inválidos
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
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Empresa não encontrada
 */
router.get('/companies/:id', CompanieController.listById);

/**
 * @swagger
 * /companies/{id}:
 *   put:
 *     summary: Atualiza uma empresa pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da empresa
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               razaoSocial:
 *                 type: string
 *                 example: "Nome da Empresa Atualizado"
 *     responses:
 *       200:
 *         description: Empresa atualizada
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Empresa não encontrada
 */
router.put('/companies/:id', CompanieController.update);

/**
 * @swagger
 * /companies/{id}:
 *   delete:
 *     summary: Deleta uma empresa pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da empresa
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Empresa deletada
 *       400:
 *         description: Dados inválidos
 *       404:
 *         description: Empresa não encontrada
 */
router.delete('/companies/:id', CompanieController.delete);

export { router };
