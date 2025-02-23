//package import
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; //cookie parser

//file import
import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import userRoutes from "./routes/userRoute.js";
import connectToDB  from "./DB/ConnectToDB.js";

import {app,server} from './socket/socket.js'

const __dirname = path.resolve();
dotenv.config();

const PORT = process.env.PORT || 6000;


//middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"/frontend/dist")));

//routes
app.use("/api/auth", authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', userRoutes);
app.use("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
});


server.listen(PORT, async(req, res) => {
  await connectToDB();
  console.log(`Server is running fine on Port ${PORT}`);
});
