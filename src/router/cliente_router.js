import express from  'express';
import Controller from '../controller/cliente_controller.js';

const router = express.Router();

router.get("/buscar", Controller.Buscar)
router.get("/buscarUm/:id", Controller.BuscarUm)
router.post("/criar", Controller.Criar)
router.put("/alterar/:id", Controller.Alterar)
router.delete("/deletar/:id", Controller.Deletar)

export default router
