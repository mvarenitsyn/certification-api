import {Certificate} from "../types/cert-types";
import {certificatesTypes} from "../db/mongodb";

export const categoriesRepository = {
    addCertificateType: async (newCertificate: Certificate) => {
        return await certificatesTypes.insertOne(newCertificate)
    },
    updateCertificateType: async (name:string, alias: string, description: string) => {
        return await certificatesTypes.updateOne({alias: alias}, {$set: {name: name, alias:alias, description: description}})
    },
    deleteCertificateType: async (alias: string) => {
        return await certificatesTypes.deleteOne({alias:alias})
    }
}
