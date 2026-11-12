import express from  'express';
import Controller from '../controller/cliente_controller.js';

const routerCliente = express.Router();

routerCliente.get("/buscar", Controller.Buscar)
routerCliente.get("/buscarUm/:id", Controller.BuscarUm)
routerCliente.post("/criar", Controller.Criar)
routerCliente.put("/alterar/:id", Controller.Alterar)
routerCliente.delete("/deletar/:id", Controller.Deletar)

export default routerCliente
