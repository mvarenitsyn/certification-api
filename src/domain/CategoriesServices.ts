import {Certificate} from "../types/cert-types";
import {ObjectId} from "mongodb";
import {categoriesRepository} from "../repositories/CategoriesRepository";


export const categoriesServices = {

    addCertificateType: async (name:string, alias: string, description: string) => {
        const newCertificateType: Certificate = {
            _id: new ObjectId,
            name: name,
            alias: alias,
            description: description
        }
        return await categoriesRepository.addCertificateType(newCertificateType)
    },
    updateCertificateType: async (name:string, alias: string, description: string) => {
        return await categoriesRepository.updateCertificateType(name, alias, description)
    },
    deleteCertificateType: async (alias: string) => {
        return await categoriesRepository.deleteCertificateType(alias)
    }
}
