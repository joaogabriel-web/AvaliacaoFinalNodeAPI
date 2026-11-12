import Service from '../service/cliente_service.js';

class ControllerCliente {

    async Buscar(req, res) {
        try {
            const nomes = await Service.Buscar()

            res.send({ nomes })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id
            const nome = Service.BuscarUm(id)

            res.send({ nome })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
   
    async Criar(req, res) {
        try {
            const nome = req.body.nome
            const idade = req.body.idade
            const senha = req.body.senha
            const email = req.body.email
            await Service.Criar(nome, idade, senha, email)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    async Alterar(req, res) {
        try {
            const id = req.params.id
            const nome = req.body.nome
            const senha = req.body.senha
            const email = req.body.email
            await Service.Alterar(id, nome, senha, email)

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    AlterarStatus(req, res) {
        try {
            const id = req.params.id
            const { dia, hora, valor, concluida } = req.body
            Service.Alterar(id, dia, hora, valor, concluida)

            res.send({ mensagem: "Status do atendimento alterado"})
        } catch (error) {
            res.send({ mensagem: error.message })
        }
    }
    
    async Deletar(req, res) {
        try {
            const id = req.params.id
            await Service.Deletar(id)
            
            res.send({ message: "Deletado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

}

export default new ControllerCliente()