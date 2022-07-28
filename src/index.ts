import express from 'express'
import 'dotenv/config'
const app = express()

import {apiRoutes} from "./routes";
import {runDB} from "./db/mongodb";

app.use('/', apiRoutes)

const appPort = process.env.SERVER_PORT
app.listen(appPort,  () => {
    runDB().catch(console.log)
    console.log('Server is up on port', appPort)
})
