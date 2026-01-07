import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import auth from './middleware/auth.js';

dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.BASE_URL,
  credentials: true,
}));
app.use(express.json());
app.use(morgan('dev'));


// Example route
app.get('/', (req, res) => {
  res.json({ message:'Hello, Job Portal Backend!'});
});

import User from './models/User.js';
app.get('/users', async (req, res) => {
    const users = await User.find().select("name role -_id")
    res.json({ users })
})

import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);

import jobRoutes from './routes/jobRoutes.js';
app.use('/api/jobs', auth, jobRoutes);

export default app;
