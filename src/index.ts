import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import bodyParser from "body-parser";

const app = express()

import {apiRoutes} from "./routes";
import {runDB} from "./db/mongodb";

app.use(cors())
app.use(bodyParser({extended: true}))
app.use('/', apiRoutes)


const appPort = process.env.PORT

async function main() {
    app.listen(appPort, () => {
        runDB().catch(console.log)
        console.log('Server is up on port', appPort)
    })
}

main()