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
        const { id } = req.params
        const { dia, hora, valor, concluido } = req.body

        await Service.Alterar(id, dia, hora, valor, concluido)

        return res.send({ message: "Alterado com sucesso!" })
        } catch (error) {
        return res.send({ message: error.message })
        }
    }

    async AlterarStatus(req, res) {
        try {
            const { id } = req.params
            const { concluido } = req.body

            await Service.AlterarStatus(id, concluido)

            return res.send({ message: "Status do atendimento alterado" })
        } catch (error) {
            return res.send({ message: error.message })
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