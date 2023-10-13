import express from 'express'
const router = express.Router();
// const deleteUser =  require("../controllers/user.controller")
import {deleteReview , createReview , getReview}  from "../controllers/reivew.controller.js";
import { verifyToken } from '../middleware/jwt.js';
router.post("/" ,verifyToken, createReview)
router.get("/:id" , getReview)
router.delete("/:id" , deleteReview)

export default router;