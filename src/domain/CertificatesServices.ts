import {UserCertificate} from "../types/cert-types";
import {ObjectId} from "mongodb";
import {CertificatesRepository} from "../repositories/CertificatesRepository";


export const certificatesServices = {
    addCertificate: async (firstName: string, lastName: string, alias: string) => {
        const newUserCertificate: UserCertificate = {
            _id: new ObjectId,
            id: Number(new Date()),
            firstName: firstName,
            lastName: lastName,
            typeAlias: alias
        }
        return await CertificatesRepository.addCertificate(newUserCertificate)
    },

    checkAlias: async (alias:string) => {
        return await CertificatesRepository.checkAlias(alias)
    },

    getCertificate: async (id:number) => {
        return await CertificatesRepository.getCertificate(id)
    }
}