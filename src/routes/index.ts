import {Router} from "express";

import {certificates} from "./certificates";
import {categories} from "./categories";

export const apiRoutes = Router({})

apiRoutes.use('/certificate', certificates)
apiRoutes.use('/category', categories)

//
