import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute.js";
import connectToDB  from "./DB/ConnectToDB.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 6000;

app.get("/", (req, res) => {
  res.send("hello World!!");
});

app.use(express.json());

app.use("/auth/api/", authRoutes);


app.listen(PORT, async(req, res) => {
  await connectToDB();
  console.log(`Server is running fine on Port ${PORT}`);
});
