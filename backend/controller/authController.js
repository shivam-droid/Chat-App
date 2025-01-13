import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const signup = async (req,res)=>{
    
    try {

        const {fullname,username,password,confirmpassword,gender} = req.body;
        if(password!==confirmpassword)
        {
            return res.status(400).json({error:"passwords do not match"});
        }
        const user = await User.findOne({username});
        if(user)
        {
            return res.status(400).json({error:"username already exists"});
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(password,salt);


        //profile pic 
        const boyprofilepic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlprofilepic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password:hashpassword,
            gender,
            profilepic: gender==='male'?boyprofilepic:girlprofilepic
        })

        await newUser.save();

        res.status(201).json({newUser});

        
    } catch (error) {
        console.log("error: error in signup controller",error.message);
        res.send(500).json({error:"internal server error"});
    }
}

export const login = (req,res)=>{
    res.send("you are logged in");
}

export const logout = (req,res)=>{
    res.send("you are logged out");
}