import {MongoClient} from 'mongodb'
import 'dotenv/config'

//Environment variables init
const mongoURI = process.env.MONGO_URI
const dbName = process.env.DB_NAME

//Prepare DB client
const dbClient = new MongoClient(mongoURI!)
const database = dbClient.db(dbName)

export const certificates = database.collection('certificates')

export const runDB = async () => {
    try {
        await dbClient.connect()
    }
    finally {
        await dbClient.close()
    }
}
