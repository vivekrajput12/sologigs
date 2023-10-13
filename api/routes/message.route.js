import express from 'express'
const router = express.Router();
// const deleteUser =  require("../controllers/user.controller")
import {deleteUser}  from "../controllers/user.controller.js";
router.get("/test" , deleteUser)
export default router;