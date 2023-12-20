import conversationModel from "../models/conversation.model.js"
import createError from "../utils/createError.js";

export const createConversation = async (req , res , next)=>{
        const newConversation = new conversationModel({
        id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
        sellerId : req.isSeller ? req.userId : req.body.to,
        buyerId : req.isSeller ? req.body.to : req.userId,
        readBySeller: req.isSeller ,
        readByBuyer: !req.isSeller,
        });

        try{
                const saveConversaton = await newConversation.save();
                res.status(200).send(saveConversaton);
        }catch(err){
                next(err);
        }
}   

export const updateConversation = async (req , res , next)=>{
       

        try{
                const updatedconvo = await conversationModel.findOneAndUpdate(
                        {id: req.params.id},
                        {
                         $set:{
                                readBySeller : true,
                                readByBuyer : true,
                         },
                        },
                        { new : true }
                );
               res.status(200).send(updatedconvo);  
        }catch(err){
                next(err);
        }
};

export const getSingleConversation = async (req , res , next)=>{
       

try{
        const conversation = await conversationModel.findOne({id: req.params.id });
        if(!conversation) return next(createError(404 , "not found"));
        res.status(200).send(conversation);
}catch(err){
        next(err);
}

}

export const getConversation = async (req, res, next) => {
        try {
              const convo = await  conversationModel.find(req.isSeller?{sellerId : req.userId} : {buyerId : req.userId}).sort({updatedAt:-1});
              res.status(200).send(convo);
        } catch (err) {
                next(err);
        }
};