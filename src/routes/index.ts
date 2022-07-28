import {Router} from "express";

import {certificatesRoute} from "./certificates-route";

export const apiRoutes = Router({})
const routePath = '/'

apiRoutes.use(routePath, certificatesRoute)

