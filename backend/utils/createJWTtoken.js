import jwt from 'jsonwebtoken';

const createJWTtoken = (user_id,res) => {

    const token = jwt.sign({user_id},process.env.JWT_SECRET,{
        expiresIn: '15d'
    });

    res.cookie('jwt',token,{
        httpOnly:true,
        maxAge: 15*24*60*60*1000,
        secure: process.env.NODE_ENV === 'production'?true:false
    })
}

export default createJWTtoken;