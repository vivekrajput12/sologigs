import express from 'express'
const router = express.Router();
import {verifyToken} from "../middleware/jwt.js"
// const deleteUser =  require("../controllers/user.controller")
import {getConversation,createConversation, getSingleConversation,updateConversation}  from "../controllers/conversation.controller.js";
router.get("/" , verifyToken , getConversation);
router.post("/" , verifyToken , createConversation);
router.get("/single/:id" , verifyToken , getSingleConversation);
router.put("/:id" , verifyToken , updateConversation);

export default router;