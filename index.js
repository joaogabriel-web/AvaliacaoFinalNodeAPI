import express from 'express'
import router from './src/router/cliente_router.js'
import routerA from './src/router/atendiemnto.js';
import database from './src/config/database.js';

const app = express();
app.use(express.json())

app.use("/api", router)
app.use("/atendimento", routerA)

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
