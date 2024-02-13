import jwt from "jsonwebtoken";

const generateJWTToken = (UserId)=>{
const accessToken = jwt.sign({UserId},process.env.JWT_SECRET,{expiresIn:'30d'});
return accessToken;
};
export  {generateJWTToken};