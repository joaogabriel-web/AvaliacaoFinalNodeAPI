import atendimento from '../model/atendimento.js'
// import Atendimento from '../model/atendimento.js'

class Service {

    async Buscar() {
        return atendimento.findAll()
    }
    
    async BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return await atendimento.findByPk(id)
    }
    // service
    async Criar(dia, hora, valor, concluido) {
        if(!dia || !hora || !concluido || !valor) {
            throw new Error("Favor informar os campos obrigatorios")
        }
        
        await atendimento.create({ dia, hora, valor, concluido })
    }
    
    async Alterar(id, dia, valor) {
        if(!id || isNaN(id) || !dia  || !valor) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoAlterar = await atendimento.findByPk(id)

        if(!atendimentoAlterar) {
            throw new Error("Atendiemnto não encontrado")
        }

        atendimentoAlterar.dia = dia

        await atendimentoAlterar.save()
    }

    async AlterarStatus(id) {
         if (!id || isNaN(id)) {
            throw new Error ("Por favor informar os dados corretamente")
        }
        await Service.AlterarStatus(id)
    }

    async Deletar(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar o Id corretamente")
        }
        const atendimentoDelete = await atendimento.findByPk(id)

        if(!atendimentoDelete) {
            throw new Error("Favor informar o Id corretamente")
        }

        await atendimentoDelete.destroy()
    }
    
}

export default new Service()