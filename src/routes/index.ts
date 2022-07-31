import {Router} from "express";

import {certificates} from "./certificates";

export const apiRoutes = Router({})

apiRoutes.use('/certificate', certificates)
apiRoutes.use('/category', certificates)

