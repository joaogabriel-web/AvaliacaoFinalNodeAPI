import database from "../config/database";

class atendimento {
    constructor(){
        this.model = database.db.define("atendimento", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            dia: {
                type: database.db.Sequelize.INTEGER
            },
            hora: {
                type: database.db.Sequelize.INTEGER
            },
            valor: {
                type: database.db.Sequelize.INTEGER
            },
            concluido: {
                type: database.db.Sequelize.BOOLEAN
            }
        })
    }
}



export default new atendimento().model