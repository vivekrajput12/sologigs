import Review from "../models/review.model.js"
import createError from "../utils/createError.js"
import gig from '../models/gig.model.js'
export const deleteReview = (req , res , next)=>{
        try{

        }catch(err){
                next(err);
        }
}
export const createReview = async(req , res , next)=>{
        const newReview = new Review({
                userId : req.userId,
                gigId : req.body.gigid,
                star : req.body.star,
                desc : req.body.desc 

        })
        try{
               const review = await Review.findOne({
                userId:req.body.userId,
                gigId: req.body.gigId,
                
        })
        if(review) return next(createError(403 , "you have already created review"));
        const saveReview  = newReview.save();
        res.status(201).send(saveReview);

        await gig.findByIdAndUpdate(req.body.gigid, {$inc:{totalStars: req.body.star , starNumber:1}});
        }catch(err){
                next(err);
        }
}

export const getReview = async(req , res , next)=>{
        try{
                const reviews = await Review.find({gigId: req.params.id});
        res.status(200).send(reviews);
        }catch(err){
                next(err);
        }
}