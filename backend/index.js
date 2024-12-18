import express from "express"

import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()

import cors from "cors"

import users from "./routes/users.js"

mongoose.connect("mongodb+srv://parassareen:parassareen1@cluster0.qnxcu.mongodb.net/paytm").then(console.log("connected with db"))

const app = express();

app.use(cors('*'))

app.use(express.json())

app.use("/api/v1/users",users)



app.listen(3000,()=>{
    console.log("server running")
})