import createError from "../utils/createError.js";
import Order from '../models/order.model.js'
import Gig from "../models/gig.model.js";
import AdSchema from "../models/ads.model.js";
import Stripe from "stripe";
import AdvOrder from "../models/Advorder.model.js";
export const intent = async (req, res, next) => {
        const stripe = new Stripe(process.env.STRIPE);

        const gig = await Gig.findById(req.params.id);

        const paymentIntent = await stripe.paymentIntents.create({
        amount: gig.price * 100,
        currency: "usd",
        automatic_payment_methods: {
        enabled: true,
        },
        });

        const newOrder = new Order({
        gigId: gig._id,
        img: gig.cover,
        title: gig.title,
        buyerId: req.userId,
        sellerId: gig.userId,
        price: gig.price,
        payment_intent: paymentIntent.id,
        });

        await newOrder.save();

        res.status(200).send({
        clientSecret: paymentIntent.client_secret,
        });
};

export const createOrder = async(req , res , next)=>{
        try{
                const gig = await Gig.findById(req.params.gigId);
                const newOrder = new Order({
                        gigId: gig._id,
                        img: gig.cover,
                        title: gig.title,
                        buyerId: req.userId,
                        sellerId: gig.userId,
                        price: gig.price,
                        payment_intent: "temporary"
                });
                await newOrder.save();
                res.status(200).send("successfull");
        }catch(err){
                next(err);
        }
}

export const getOrders = async (req , res, next)=>{
        try{
                const orders = await Order.find({
                        ...(req.isSeller ? {sellerId:req.userId} : {buyerId:req.userId}),
                        // isCompleted:true,
                });
                res.status(200).send(orders);
        }catch(err){
                next(err);
        }
}   
export const confirm = async (req , res, next)=>{
        try {
                const orders = await Order.findOneAndUpdate(
                  {
                    payment_intent: req.body.payment_intent,
                  },
                  {
                    $set: {
                      isCompleted: true,
                    },
                  }
                );
            
                res.status(200).send("Order has been confirmed.");
              } catch (err) {
                next(err);
              }
}   

export const getAdvOrders = async (req , res, next)=>{
        try{
                const orders = await AdvOrder.find({
                        ...(req.isSeller ? {sellerId:req.userId} : {buyerId:req.userId}),
                        // isCompleted:true,
                });
                res.status(200).send(orders);
        }catch(err){
                next(err);
        }
}  

export const advintent = async (req, res, next) => {
        const stripe = new Stripe(process.env.STRIPE);

        const gig = await AdSchema.findById(req.params.id);

        const paymentIntent = await stripe.paymentIntents.create({
        amount: gig.price * 100,
        currency: "usd",
        automatic_payment_methods: {
        enabled: true,
        },
        });

        const newOrder = new AdvOrder({
        gigId: gig._id,
        img: gig.cover,
        title: gig.title,
        buyerId: req.userId,
        sellerId: gig.userId,
        price: gig.price,
        payment_intent: paymentIntent.id,
        });

        await newOrder.save();

        res.status(200).send({
        clientSecret: paymentIntent.client_secret,
        });
};

export const Advconfirm = async (req , res, next)=>{
        try {
                const orders = await AdvOrder.findOneAndUpdate(
                  {
                    payment_intent: req.body.payment_intent,
                  },
                  {
                    $set: {
                      isCompleted: true,
                    },
                  }
                );
            
                res.status(200).send("Order has been confirmed.");
              } catch (err) {
                next(err);
              }
}  