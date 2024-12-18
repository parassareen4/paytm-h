import express from 'express'
// import User from '../models/Users'

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("hello world")
})








export default router