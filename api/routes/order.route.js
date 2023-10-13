import express from 'express'
const router = express.Router();
// const deleteUser =  require("../controllers/user.controller")
import {verifyToken} from "../middleware/jwt.js"
import {createOrder , getOrders}  from "../controllers/order.controller.js";
router.post("/:gigId" ,verifyToken, createOrder);
router.get("/" ,verifyToken ,  getOrders);

export default router;