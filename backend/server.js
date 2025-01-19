//package import
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"; //cookie parser

//file import
import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import userRoutes from "./routes/userRoute.js";
import connectToDB  from "./DB/ConnectToDB.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 6000;

//middleware
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/auth", authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', userRoutes);


app.listen(PORT, async(req, res) => {
  await connectToDB();
  console.log(`Server is running fine on Port ${PORT}`);
});
