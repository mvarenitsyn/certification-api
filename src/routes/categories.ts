import {Router, Request, Response} from 'express'
import {body, validationResult} from 'express-validator'
import {UniqueAlias} from "../middlewares/validators";
import {categoriesServices} from "../domain/CategoriesServices";


export const categories = Router({})

categories.post('/', body('alias').custom(UniqueAlias), async (req: Request, res: Response) => {
    const {name, alias, description} = req.body
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).json(errors.array({onlyFirstError: true}))
        return
    }
    await categoriesServices.addCertificateType(name, alias, description)
    res.sendStatus(201)
})

categories.put('/', body('alias').not().custom(UniqueAlias), async (req: Request, res: Response) => {
    const {name, alias, description} = req.body
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).json(errors.array({onlyFirstError: true}))
        return
    }
    await categoriesServices.updateCertificateType(name, alias, description)
    res.sendStatus(204)
})

categories.delete('/', body('alias').not().custom(UniqueAlias), async (req: Request, res: Response) => {
    const alias = req.body
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        res.status(400).json(errors.array({onlyFirstError: true}))
        return
    }
    await categoriesServices.deleteCertificateType(alias)
    res.sendStatus(204)
})