import {ObjectId} from 'mongodb'
export type UserCertificate = {
    "_id": ObjectId,
    "id": number,
    "firstName": string,
    "lastName": string,
    "typeAlias": string
}

export type Certificate = {
    "_id"?: ObjectId,
    "name": string,
    "alias": string,
    "description": string
}