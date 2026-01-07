
import User from '../models/User.js';
import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', async (req, res) => {
    const {name, email, password} = req.body;
    const checkUser = await User.findOne({ email });
    if ( checkUser) return res.status(400).json({message: "User already exists"});

    const hashed = await bcrypt.hash(password, 10)
    const newUser = new User({ name, email, password: hashed });
    await newUser.save();
    res.status(201).json({message: "User created successfully", newUser});
})

router.post('/login', async  (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if ( !user ) {
        return res.status(400).json({message: "User not found"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (! isMatch) return res.status(400).json({message: "Invalid Credentials"})
    
    const token = jwt.sign(
        {id: user._id, role: user.role}, 
        process.env.JWT_SECRET
    )
    res.status(200).json({message: "Login success", token, role: user.role})
})


export default router;

