import { Router } from "express";
import ItemRoutes from "./ItemRoutes";

const router:Router = Router();

const baseURL = "/api/v1/";

router.use(`${baseURL}item`, new ItemRoutes().getRouter());

export default router;