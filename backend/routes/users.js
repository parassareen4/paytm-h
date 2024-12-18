import express from 'express'
import User from '../models/Users.js'

const router = express.Router()

router.use(express.json())

router.get('/',(req,res)=>{
    res.send("hello world")
})

router.post('/signup', async (req, res) => {
    try {
        const { username, firstName, lastName, password } = req.body;

        if (!username || !firstName || !lastName || !password) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const user = new User({ username, firstName, lastName, password });
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});








export default router