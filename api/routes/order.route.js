import express from 'express'
const router = express.Router();
// const deleteUser =  require("../controllers/user.controller")
import {verifyToken} from "../middleware/jwt.js"
import {createOrder , getOrders , intent , confirm, Advconfirm, getAdvOrders, advintent}  from "../controllers/order.controller.js";
router.post("/:gigId" ,verifyToken, createOrder);
router.get("/" ,verifyToken ,  getOrders);
router.post("/create-payment-intent/:id"  , verifyToken , intent);
router.post("/create-payment-advintent/:id"  , verifyToken , advintent);
router.put("/"  , verifyToken , confirm);
router.get("/advorders" ,verifyToken ,  getAdvOrders);
router.put("/advorders" ,verifyToken ,  Advconfirm);

export default router;