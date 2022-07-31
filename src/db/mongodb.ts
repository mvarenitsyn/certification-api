import {MongoClient} from 'mongodb'
import 'dotenv/config'

//Environment variables init
const mongoURI = process.env.MONGO_URI
const dbName = process.env.DB_NAME

//Prepare DB client
const dbClient = new MongoClient(mongoURI!)
const database = dbClient.db(dbName)

export const certificates = database.collection('certificates')
export const certificatesTypes = database.collection('certificates-types')

export const runDB = async() => {
    try {
        await dbClient.connect()
        console.log("Database connection was successful")
    } catch (error) {
        console.log("Can't connect to database on "+mongoURI)
        await dbClient.close()
    }
}
