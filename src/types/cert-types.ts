import {ObjectId} from 'mongodb'
export type UserCertificate = {
    "_id": ObjectId,
    "id": number,
    "firstName": string,
    "lastName": string,
    "certificateType": number
}

export type Certificate = {
    "_id": ObjectId,
    "type": number,
    "name": string,
    "alias": string,
    "description": string
}