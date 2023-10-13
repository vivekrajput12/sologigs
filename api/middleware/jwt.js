import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res, next) => {
  console.log("agyaaaaaa")
  const token =  req.cookies.accessToken;
  console.log(token);
  if (!token){
     return next(createError(401,"You are not authenticated!"))
    // console.log(token);
  }

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) return next(createError(403,"Token is not valid!"))
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next()
  });
};