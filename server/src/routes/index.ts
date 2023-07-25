import { Router } from "express";
export const router = Router();
import { controllers } from "../controllers";

router.get('/products', controllers.read);
router.post('/products', controllers.create);
router.put('/products/:id', controllers.update);
router.delete('/products/:id', controllers.delete);