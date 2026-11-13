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
    
    async Alterar(id, dia, hora, valor, concluido) {
        if(!id || isNaN(id) || !dia  || !valor) {
            throw new Error("Favor informar todos os dados")
        }
        const atendimentoAlterar = await atendimento.findByPk(id)

        if(!atendimentoAlterar) {
            throw new Error("Atendiemnto não encontrado")
        }

        atendimentoAlterar.dia = dia
        atendimentoAlterar.hora = hora
        atendimentoAlterar.valor = valor
        atendimentoAlterar.concluido = concluido

        await atendimentoAlterar.save()
    }

    async AlterarStatus(id, concluido) {
        const atendimentoAlterar = await atendimento.findByPk(id)

        if (!atendimentoAlterar || isNaN(atendimentoAlterar)) {
            throw new Error ("Atendimento não encontrado")
        }

        atendimentoAlterar.concluido = concluido
        await atendimentoAlterar.save()
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