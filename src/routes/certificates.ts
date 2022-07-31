import {Router, Request, Response} from 'express'
import {body, validationResult} from 'express-validator'
import {certificatesServices} from "../domain/CertificatesServices";
import {UniqueAlias, isCertExists} from "../middlewares/validators";

export const certificates = Router({})

certificates.get('/', (req: Request, res: Response) => {
    res.status(200).json('Welcome to Algos')
})

certificates.get('/:id', isCertExists, async (req: Request, res: Response) => {
    res.status(200).json(await certificatesServices.getCertificate(+req.params.id))
})


certificates.post('/', body('alias').not().custom(UniqueAlias), async (req: Request, res: Response) => {
    const {firstName, lastName, alias} = req.body
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).json(errors.array({onlyFirstError: true}))
        return
    }
    await certificatesServices.addCertificate(firstName, lastName, alias)
    res.sendStatus(201)
})