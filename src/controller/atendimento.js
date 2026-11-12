import Service from '../service/atendimento.js';

class Controller {

    async Buscar(req, res) {
        try {
            const dias = await Service.Buscar()

            res.send({ dias })
        } catch (e) {
            res.send({ message: e.message })
        }
    }

    async BuscarUm(req, res) {
        try {
            const id = req.params.id
            const dia = await Service.BuscarUm(id)

            res.send({ dia })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
   
    async Criar(req, res) {
        try {
            const dia = req.body.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const concluido = req.body.concluida
            await Service.Criar(dia, hora, valor, concluido)

            res.send({ message: "Criado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }
    
    async Alterar(req, res) {
        try {
            const id = req.params.id
            const dia = req.params.dia
            const hora = req.body.hora
            const valor = req.body.valor
            const concluido = req.body.concluido   
            await Service.Alterar(id, dia, hora, valor, concluido )

            res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
            res.send({ message: error.message })
        }
    }

    async AlterarStatus(req, res) {
        try {
            const id = req.params.id
            const { dia, hora, valor, concluida } = req.body
            await Service.Alterar(id, dia, hora, valor, concluida)

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

export default new Controller()