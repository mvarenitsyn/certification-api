import {Router, Request, Response} from "express";

export const certificatesRoute = Router({})

certificatesRoute.get('/', (req: Request, res: Response) => {
    res.sendStatus(200)
})