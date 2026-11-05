import database from "../config/database.js";
//import Atendimento from "./atendimento.js";


class Cliente {
    constructor() {
        this.model = database.db.define("cliente", {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: database.db.Sequelize.STRING
            },
            email: {
                type: database.db.Sequelize.STRING
            },
            senha: {
                type: database.db.Sequelize.STRING
            },
           // id: {
           //     type: database.db.Sequelize.INTEGER
            //} 
        })
    }
}

//Cliente.belongsTo(Atendimento, { foreignKey: {name: 'id', allowNull: true}});
//Atendimento.hasMany(Cliente, { foreignKey: 'id' });


export default new Cliente().model