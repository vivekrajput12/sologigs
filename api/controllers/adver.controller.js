import AdSchema from "../models/ads.model.js";
import createError from "../utils/createError.js";
export const createAdv = async (req, res, next)=>{
        const newadv = new AdSchema({
            userId:req.userId,
            ...req.body,
        })
        try{
            const savedadv = await newadv.save();
            res.status(201).json(savedadv);
        }catch(err){
            next(err);
        }
};
export const getAdv = async(req, res, next)=>{
   try{
     const collect = await AdSchema.findById(req.params.id);
    if(!collect) next(createError(401 , "advertisement not found!!"));
    res.status(200).send(collect);
    }catch(err){
        next(err);
    }
};
export const getAllAdv = async(req, res, next)=>{
    const q = req.query;
    const filter = {
        ...(q.userId && {userId:q.userId}),
        ...(q.cat && {cat:q.cat}),
    }
    try{
        const collect = await AdSchema.find(filter);
        if(!collect) next(createError(404 , "advertisement not found"));
        res.status(200).send(collect);
    }catch(err){
        next(err)
    }
};

export const deleteAdv = async(req, res, next)=>{
    try{
      const tobedeleted = await AdSchema.findById(req.params.id);
      if(tobedeleted.userId.toString() !== req.userId)
        return next(createError(403 , "you can only delete your advertisement"))
     if(!tobedeleted) next(createError(401 , "advertisement not found!!"));
     const del = await AdSchema.findByIdAndDelete(req.params.id);
     res.status(200).send("advertisement has been deleted");
     }catch(err){
         next(err);
     }
 };