import express from  'express';
import ControllerA from '../controller/atendimento.js';

const router = express.Router();

router.get("/buscarA", ControllerA.Buscar)
router.get("/atendiemnto/:id", ControllerA.BuscarUm)
router.post("/criarA", ControllerA.Criar)
router.put("/alterarA/:id", ControllerA.Alterar)
router.put("/alterarStatus/:id", ControllerA.AlterarStatus)
router.delete("/deletarA/:id", ControllerA.Deletar)

export default router