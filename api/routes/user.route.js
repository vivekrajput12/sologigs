import express from 'express'
const router = express.Router();
import {deleteUser  , getUser}  from "../controllers/user.controller.js";
import {verifyToken} from '../middleware/jwt.js'

router.delete("/:id" , verifyToken ,deleteUser)
router.get("/:id" ,getUser)

export default router;