import {UserCertificate} from "../types/cert-types";
import {certificates, certificatesTypes} from "../db/mongodb";

export const CertificatesRepository = {
    addCertificate: async (newUserCertificate: UserCertificate) => {
        return await certificates.insertOne(newUserCertificate)
    },

    checkAlias: async (alias:string) => {
        return await certificatesTypes.findOne({alias: alias})
    },

    getCertificate: async (id:number) => {
        return await certificates.findOne({id: id})
    },
}