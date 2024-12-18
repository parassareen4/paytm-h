import express from "express"

import mongoose from "mongoose";

mongoose.connect("mongodb+srv://parassareen:parassareen1@cluster0.qnxcu.mongodb.net/paytm").then(console.log("connected with db"))

const app = express();



app.listen(3000,()=>{
    console.log("server running")
})