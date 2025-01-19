import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protectRoute = async (req,res,next) =>{
    try {

        const token = req.cookies.jwt;
        if(!token){
            return res.send(401).json({error:"unauthorized access"});
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
            return res.send(401).json({error:"invalid token"});
        }
        const user = await User.findById(decoded.user_id).select("-password"); // exclude password
        req.user = user;
        next();

        
    } catch (error) {
        console.log("error: error in protectRoute middleware",error.message);
        res.send(500).json({error:"internal server error"});
    }
}

export default protectRoute;