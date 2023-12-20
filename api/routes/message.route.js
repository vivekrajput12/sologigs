import express from 'express'
const router = express.Router();
// const deleteUser =  require("../controllers/user.controller")
import {createMessages , getMessages}  from "../controllers/message.controller.js";
import { verifyToken } from '../middleware/jwt.js';
router.post("/" , verifyToken,createMessages)
router.get("/:id" , verifyToken , getMessages)
export default router;