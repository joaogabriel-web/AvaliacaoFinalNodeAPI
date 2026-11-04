import { Sequelize } from "sequelize";

class Database {
    constructor() {
        this.init()
    }

    init() {
        this.db = new Sequelize ({
            dialect: 'postgres', 
            database: 'exemplo_postgresql',
            username: 'exemplo_postgresql_user',
            password: 'OSQvmovwQcQFNkZS2mo2lnf1vmpYQ8Av',
            host: 'dpg-dbh74h6i0phs73b1ocj0-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        })
    }
}

export default new Database()