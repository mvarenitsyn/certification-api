import {certificatesServices} from "../domain/CertificatesServices";
import {Request, NextFunction, Response} from "express";
import {CustomValidator} from 'express-validator'

export const UniqueAlias: CustomValidator = alias => {
    return certificatesServices.checkAlias(alias).then(type => {
        if(type?.name) {
            return Promise.reject('Alias already exists')
        }
    })

}

export const isCertExists = async (req: Request, res: Response, next:NextFunction) => {
    const cert = await certificatesServices.getCertificate(+req.params.id)
    if(!cert) {
        res.sendStatus(404)
        return
    } else next()
}