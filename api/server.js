// const express = require("express")
import  express  from "express"
import mongoose from 'mongoose'

// const mongoose = require("mongoose")
// const dotenv = require("dotenv")
import dotenv from 'dotenv'
// const userRoute = require("./routes/user.route")
import userRoute from './routes/user.route.js';
import gigRoute from './routes/gig.route.js';
import messageRoute from './routes/message.route.js';
import orderRoute from './routes/order.route.js';
import reviewRoute from './routes/review.route.js';
import conversationRoute from './routes/conversation.route.js';
import authRoute from './routes/auth.route.js';
import cookieParser from "cookie-parser";
import cors from "cors";

// import userRoute from '../routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO);
const app = express();
app.use(cookieParser())
app.use(cors({origin:"http://127.0.0.1:5173" ,credentials:true}));
app.use(express.json())

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/gigs",gigRoute);
app.use("/api/messages",messageRoute);
app.use("/api/orders",orderRoute);
app.use("/api/conversation",conversationRoute);
app.use("/api/review",reviewRoute);
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
  
    return res.status(errorStatus).send(errorMessage);
  });
app.listen(8800 , ()=>{
    console.log("nsd")
})