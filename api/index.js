import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userrouter from "./routes/user.route.js";
import authrouter from "./routes/auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
 
const app = express();

app.use(express.json());

app.listen(3001, () => {
  console.log("Server is runnning in 3001");
});

app.use("/api/user", userrouter);
app.use("/api/auth", authrouter);