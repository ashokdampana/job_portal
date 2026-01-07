
import User from '../models/User.js';
import express from 'express';
import bcrypt from 'bcryptjs';

const router = express.Router();

router.post('/register', async (req, res) => {
    const errors = validationResult(req);
    if ( ! errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array()})
    }
    const {name, email, password} = req.body;
    const checkUser = await User.findOne({ email });
    if ( checkUser) return res.status(400).json({message: "User already exists"});

    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json({message: "User created successfully", newUser});
})

router.post('/login',  (req, res) => {
    const errors = validationResult(req);
    if ( ! errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array()})
    }
    const { email, password } = req.body;
    const checkUser = User.find({ email });
    if (!checkUser ) {
        return res.status(400).json({message: "User not found"});
    }
    res.status(200).json({message: "User login success"})
})

export default router;

