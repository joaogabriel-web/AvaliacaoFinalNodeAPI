import express from 'express'
import routerCliente from './src/router/cliente_router.js'
import router from './src/router/atendimento.js';
import database from './src/config/database.js';

const app = express();
app.use(express.json())

app.use("/api", routerCliente)
app.use("/atendimento", router)

database.db
    .sync({ force: false })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor ouvindo na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })
