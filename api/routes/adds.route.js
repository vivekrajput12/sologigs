import  express  from 'express';
import {createAdv , getAdv , getAllAdv , deleteAdv}  from "../controllers/adver.controller.js";
import { verifyToken } from '../middleware/jwt.js';
const router = express.Router();
router.post("/" ,verifyToken, createAdv);
router.get("/:id" , getAdv);
router.get("/" , getAllAdv);
router.delete("/:id" , verifyToken ,  deleteAdv);
export default router;