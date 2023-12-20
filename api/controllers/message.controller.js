import Message from '../models/message.model.js'
import Conversation from '../models/conversation.model.js'
export const createMessages = async(req , res , next)=>{
        const newMessage = new Message({
                conversationId : req.body.conversationId,
                userId : req.userId,
                desc : req.body.desc,
        })
        try{
                const savedmessage = await newMessage.save();
                await Conversation.findOneAndUpdate({id:req.body.conversationId} , {
                        $set:{
                                readBySeller: req.isSeller,
                                readByBuyer: !req.isSeller,
                                lastMessage: req.body.desc,
                        },
                       },
                        {new : true}
                );
                res.status(201).send(savedmessage);
        }catch(err){

        }
}   
export const getMessages = async (req , res , next)=>{
        
        try{
         const newMessage = await Message.find({conversationId : req.params.id});
         res.status(200).send(newMessage);
        }catch(err){
                next(err);
        }
}   