import Cliente from '../model/cliente_model.js'
// import Atendimento from '../model/atendimento.js'

class Service {

    async Buscar() {
        return Cliente.findAll()
    }
    
    BuscarUm(id) {
        if(!id || isNaN(id)) {
            throw new Error("Favor informar somente números")
        }

        return Cliente.findByPk(id)
    }
    // service
    async Criar(nome, idade, senha, email) {
        if(!nome || !senha || !email) {
            throw new Error("Favor informar os campos obrigatorios")
        }
        
        await Cliente.create({ nome, idade, senha, email })
    }
    
    async Alterar(id, nome, senha, email) {
        if(!id || isNaN(id) || !nome || !senha || !email) {
            throw new Error("Favor informar todos os dados")
        }
        const ClienteAlterar = await Cliente.findByPk(id)

        if(!ClienteAlterar) {
            throw new Error("Pessoa não encontrada")
        }

        ClienteAlterar.nome = nome

        await ClienteAlterar.save()
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
        const ClienteDelete = await Cliente.findByPk(id)

        if(!ClienteDelete) {
            throw new Error("Favor informar o Id corretamente")
        }

        await ClienteDelete.destroy()
    }
    
}

export default new Service()